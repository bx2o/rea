/**
 * @file stremiium-rea-banking-plugin.ts
 * @module architecture/core-banking
 * @summary Stremiium NeoBank — provider-agnostic REA banking analysis plugin (T1.2).
 *
 * Program:  SC-REA-NEOBANK-5.0 (Sparkling Curious)
 * Council:  C11 Dev-Engineering / C16 Banking-Fintech
 * Status:   TARGET DESIGN — specification-grade source, not yet wired into a running REA build.
 *
 * ## Purpose
 * This module is the canonical *banking adapter* for the Stremiium REA (`morluto/rea`)
 * reverse-engineering engine. Given an already-extracted artifact (a decompiled JS bundle, an
 * ASAR payload, an HAR/network trace, an API documentation dump, an ISO 20022 sample message, or
 * raw metadata text), it produces a {@link BankingEvidenceReport} that partitions findings into the
 * four non-negotiable evidentiary buckets defined by the program brief (§5):
 *
 *   1. `evidence`      — claimed "Seen" items (only public/citable sources or possessed artifacts).
 *   2. `inferredRules` — "Recovered Graph (Synthesised)" rules derived from the evidence.
 *   3. `limitations`   — "Known Boundaries" (obfuscation, WAF, stripped symbols, DRM).
 *   4. `unknowns`      — "Unresolved" server-side logic and unreachable code paths.
 *
 * ## Design constraints
 * - **Provider-agnostic**: detection is driven by a data-only signature catalogue, never by
 *   hard-coded per-vendor branching. Adding a new CBS/payment rail is a catalogue edit.
 * - **Zero external runtime dependencies**: only Node.js built-ins (`node:crypto`, `node:fs`,
 *   `node:path`) are imported. No network access, no third-party packages.
 * - **No secrets**: this module never reads or emits credentials, tokens, keys, or personal data.
 *   Detection operates on *string signatures present in an artifact the operator already holds*.
 * - **Honesty rule**: a "Seen" classification is only ever emitted when the caller supplies a
 *   `sourceRef` pointing at a possessed, citable artifact. Absent that, matches degrade to
 *   `INFERRED`. Anything the plugin cannot observe is listed under `unknowns`, never guessed.
 *
 * @packageDocumentation
 */

import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';

/* ------------------------------------------------------------------------------------------------
 * Constants
 * ---------------------------------------------------------------------------------------------- */

/** Program identifier from the parent brief (immutable). */
export const PROGRAM_ID = 'SC-REA-NEOBANK-5.0' as const;

/** Tool identifier registered in `.stremiium/registry/tool-registry.json`. */
export const TOOL_ID = 'stremiium.rea.banking-plugin' as const;

/** Semantic version of this analysis contract. */
export const TOOL_VERSION = '0.1.0' as const;

/** Report schema version, bumped on any breaking change to {@link BankingEvidenceReport}. */
export const REPORT_SCHEMA_VERSION = '1.0.0' as const;

/* ------------------------------------------------------------------------------------------------
 * Core evidentiary vocabulary (aligned with PROGRAM_BRIEF §5, §6)
 * ---------------------------------------------------------------------------------------------- */

/** Tri-state evidentiary classification mandated by the program honesty rule. */
export type EvidenceClass = 'SEEN' | 'INFERRED' | 'UNKNOWN';

/** Confidence rating used by every emitted finding. */
export type Confidence = 'high' | 'medium' | 'low';

/** Permitted provenance types for a claimed item of evidence (brief §6). */
export type SourceType =
  | 'public-filing'
  | 'published-pricing'
  | 'app-store'
  | 'docs'
  | 'rea-artifact'
  | 'network-trace';

/** A single citable observation, partitioned as "Seen" only where the source is possessed. */
export interface Evidence {
  /** Stable identifier, e.g. `stremiium-EV-001`. */
  readonly id: string;
  /** Short, falsifiable claim (one sentence). */
  readonly claim: string;
  /** Evidentiary bucket. */
  readonly evidenceClass: EvidenceClass;
  /** Where the observation came from. */
  readonly sourceType: SourceType;
  /** URL / filing reference / artifact offset / `pending REA extraction`. */
  readonly sourceRef: string;
  /** How strongly the observation supports the claim. */
  readonly confidence: Confidence;
  /** ISO-8601 UTC verification date (`YYYY-MM-DD`). */
  readonly verifiedAt: string;
}

/** A rule synthesised from evidence ("Recovered Graph"), with the evidence it rests on. */
export interface InferredRule {
  /** Stable identifier, e.g. `stremiium-IR-003`. */
  readonly id: string;
  /** The synthesised rule / state-machine / data-model statement. */
  readonly rule: string;
  /** Confidence in the synthesis. */
  readonly confidence: Confidence;
  /** Evidence ids that support this rule. */
  readonly basedOn: readonly string[];
}

/** A known boundary that prevented analysis (obfuscation, WAF, DRM, stripped symbols). */
export interface Limitation {
  /** Stable identifier, e.g. `stremiium-LIM-002`. */
  readonly id: string;
  /** What could not be done and why. */
  readonly description: string;
  /** The concrete extraction/analysis step that would lift the limitation. */
  readonly wouldResolveWith: string;
}

/** An unresolved unknown: server-side logic, private APIs, unreachable code. */
export interface Unknown {
  /** Stable identifier, e.g. `stremiium-UNK-001`. */
  readonly id: string;
  /** The question that remains open. */
  readonly question: string;
  /** Why it is currently unresolvable and the step that would resolve it. */
  readonly resolutionPath: string;
}

/* ------------------------------------------------------------------------------------------------
 * Artifact input + descriptor
 * ---------------------------------------------------------------------------------------------- */

/** Media types the plugin knows how to treat as text. */
export type ArtifactMediaType =
  | 'text/plain'
  | 'application/json'
  | 'application/xml'
  | 'application/javascript'
  | 'application/octet-stream';

/** Input to {@link analyseArtifact}. Either inline `content` or a readable `artifactPath`. */
export interface AnalysisInput {
  /** Inline artifact text. Required unless `artifactPath` is supplied. */
  readonly content?: string;
  /** Absolute path to an extracted artifact; read with `node:fs/promises` when `content` absent. */
  readonly artifactPath?: string;
  /** Declared media type; otherwise inferred from the path extension. */
  readonly mediaType?: ArtifactMediaType;
  /** Operator-supplied source reference used to justify `SEEN` classification. */
  readonly sourceRef?: string;
  /** Provenance type of the artifact. Defaults to `rea-artifact`. */
  readonly sourceType?: SourceType;
  /** ISO-8601 UTC date of analysis; defaults to the system clock date. */
  readonly analysedAt?: string;
}

/** Immutable facts recorded about the analysed artifact. */
export interface ArtifactDescriptor {
  /** Path if the artifact came from disk, else `"<inline>"`. */
  readonly path: string;
  /** Resolved media type. */
  readonly mediaType: ArtifactMediaType;
  /** UTF-8 byte length of the analysed content. */
  readonly byteLength: number;
  /** SHA-256 fingerprint (hex) of the analysed content. */
  readonly sha256: string;
  /** Number of lines, useful for locating offsets. */
  readonly lineCount: number;
}

/* ------------------------------------------------------------------------------------------------
 * Detection domains
 * ---------------------------------------------------------------------------------------------- */

/** Recognised core-banking system families. */
export type CoreBankingFamily =
  | 'Mambu'
  | 'Finacle'
  | 'Temenos-T24'
  | 'Temenos-Transact'
  | 'TCS-BaNCS'
  | 'FLEXCUBE'
  | 'SAP-Banking'
  | 'Thought-Machine'
  | 'TietoEvry'
  | 'In-House'
  | 'Unknown';

/** A CBS signature match with the raw signatures that triggered it. */
export interface CbsSignatureMatch {
  /** Highest-scoring family, or `Unknown`. */
  readonly family: CoreBankingFamily;
  /** Human label of the family. */
  readonly familyLabel: string;
  /** Literal signatures found in the artifact. */
  readonly matchedSignatures: readonly string[];
  /** Confidence in the family determination. */
  readonly confidence: Confidence;
  /** Competing families (ranked), for multi-CBS or ambiguous artifacts. */
  readonly ambiguities: readonly CoreBankingFamily[];
}

/** Application/transport protocols the plugin can detect. */
export type ApiProtocol =
  | 'REST-JSON'
  | 'GraphQL'
  | 'SOAP-XML'
  | 'gRPC'
  | 'ISO-20022-XML'
  | 'ISO-8583'
  | 'WebSocket'
  | 'Unknown';

/** Authentication / authorisation mechanisms the plugin can detect. */
export type AuthMechanism =
  | 'OAuth2-AuthorizationCode-PKCE'
  | 'OIDC'
  | 'mTLS'
  | 'JWT-Bearer'
  | 'API-Key'
  | 'HMAC-SHA256'
  | 'SAML2'
  | 'FIDO2-WebAuthn'
  | 'Basic'
  | 'Session-Cookie'
  | 'Unknown';

/** South African and cross-border payment rails the plugin can detect. */
export type PaymentRail =
  | 'PayShap'
  | 'RTC'
  | 'EFT'
  | 'DebiCheck'
  | 'RTGS-SAMOS'
  | 'SWIFT'
  | 'Card-Visa'
  | 'Card-Mastercard'
  | 'Internal-Book'
  | 'Polygon-STM'
  | 'Unknown';

/** Category of a detected Web3 / crypto integration. */
export type CryptoIntegrationCategory =
  | 'custody'
  | 'exchange'
  | 'indexer'
  | 'wallet'
  | 'bridge'
  | 'oracle'
  | 'node-provider';

/** A detected crypto/Web3 integration with the strings that evidenced it. */
export interface CryptoIntegration {
  /** Provider or protocol name (e.g. `Polygon`, `Fireblocks`). */
  readonly provider: string;
  /** Functional category. */
  readonly category: CryptoIntegrationCategory;
  /** Chains referenced (e.g. `polygon-pos`, `polygon-zkevm`). */
  readonly chains: readonly string[];
  /** Literal signatures found. */
  readonly matchedSignatures: readonly string[];
  /** Confidence. */
  readonly confidence: Confidence;
}

/** A generic weighted signature match for protocol/rail detection. */
export interface ProtocolMatch<T extends string> {
  /** Detected value. */
  readonly value: T;
  /** Human-readable label. */
  readonly label: string;
  /** Literal signatures that were present. */
  readonly matchedSignatures: readonly string[];
  /** Confidence. */
  readonly confidence: Confidence;
}

/* ------------------------------------------------------------------------------------------------
 * Report
 * ---------------------------------------------------------------------------------------------- */

/** The complete, machine-readable output of the banking analysis plugin. */
export interface BankingEvidenceReport {
  /** Report schema version. */
  readonly schemaVersion: string;
  /** Tool id. */
  readonly tool: string;
  /** Tool version. */
  readonly toolVersion: string;
  /** Program id. */
  readonly programId: string;
  /** ISO-8601 UTC generation timestamp. */
  readonly generatedAt: string;
  /** Immutable artifact facts. */
  readonly artifact: ArtifactDescriptor;
  /** Core-banking signature determination. */
  readonly cbs: CbsSignatureMatch;
  /** Detected API protocols, ranked. */
  readonly apiProtocols: readonly ProtocolMatch<ApiProtocol>[];
  /** Detected auth mechanisms, ranked. */
  readonly authMechanisms: readonly ProtocolMatch<AuthMechanism>[];
  /** Detected payment rails, ranked. */
  readonly paymentRails: readonly ProtocolMatch<PaymentRail>[];
  /** Detected Web3/crypto integrations. */
  readonly cryptoIntegrations: readonly CryptoIntegration[];
  /** Bucket 1 — Seen. */
  readonly evidence: readonly Evidence[];
  /** Bucket 2 — Recovered Graph (Synthesised). */
  readonly inferredRules: readonly InferredRule[];
  /** Bucket 3 — Known Boundaries. */
  readonly limitations: readonly Limitation[];
  /** Bucket 4 — Unresolved. */
  readonly unknowns: readonly Unknown[];
}

/** The REA-facing tool contract implemented by this module. */
export interface BankingReverseTool {
  /** Registry id. */
  readonly id: string;
  /** Display name. */
  readonly name: string;
  /** One-paragraph description for the REA tool catalogue. */
  readonly description: string;
  /** Semantic version. */
  readonly version: string;
  /** Domains the tool can emit findings for. */
  readonly capabilities: readonly string[];
  /** Run the analysis. */
  analyse(input: AnalysisInput): Promise<BankingEvidenceReport>;
}

/* ------------------------------------------------------------------------------------------------
 * Signature catalogue (data-only; edit here to extend detection)
 * ---------------------------------------------------------------------------------------------- */

/** A catalogue entry: a candidate value, a label, its literal patterns, and a weight. */
interface SignatureEntry<T extends string> {
  readonly value: T;
  readonly label: string;
  readonly patterns: readonly RegExp[];
  readonly weight: number;
}

/** CBS family signatures. Ordered roughly by specificity. */
const CBS_CATALOG: readonly SignatureEntry<Exclude<CoreBankingFamily, 'Unknown'>>[] = [
  {
    value: 'Mambu',
    label: 'Mambu Cloud Banking Platform',
    weight: 5,
    patterns: [/mambu/i, /\bmambu\.com\b/i, /tenantId.*mambu/i, /MambuCoreService/i],
  },
  {
    value: 'Finacle',
    label: 'Infosys Finacle',
    weight: 5,
    patterns: [/finacle/i, /INFINITY.*Finacle/i, /\bFCR\b.*finacle/i, /finaclecore/i],
  },
  {
    value: 'Temenos-T24',
    label: 'Temenos T24 / Transact (T24 core)',
    weight: 5,
    patterns: [/\bT24\b/i, /temenos.*t24/i, /GL\.ACCOUNT/i, /EB\.CUSTOMER/i],
  },
  {
    value: 'Temenos-Transact',
    label: 'Temenos Transact',
    weight: 4,
    patterns: [/temenos/i, /transact[-_.]?core/i, /tem\~?n\./i],
  },
  {
    value: 'TCS-BaNCS',
    label: 'TCS BaNCS',
    weight: 5,
    patterns: [/\bbancs\b/i, /tcs[-_.]?bancs/i, /\bTCS\b.*core/i],
  },
  {
    value: 'FLEXCUBE',
    label: 'Oracle FLEXCUBE',
    weight: 4,
    patterns: [/flexcube/i, /\bFCUBS\b/i, /oracle.*flexcube/i],
  },
  {
    value: 'SAP-Banking',
    label: 'SAP Banking / SAP FS',
    weight: 4,
    patterns: [/sap.*banking/i, /SAP_?FS/i, /banking-services.*sap/i],
  },
  {
    value: 'Thought-Machine',
    label: 'Thought Machine Vault',
    weight: 4,
    patterns: [/thought[-_ ]?machine/i, /\bvault\b.*core/i, /smart[-_ ]contracts.*core/i],
  },
  {
    value: 'TietoEvry',
    label: 'TietoEVRY / Core Banking suite',
    weight: 3,
    patterns: [/tieto[-_ ]?evry/i, /tietoevry/i],
  },
  {
    value: 'In-House',
    label: 'In-house / proprietary core',
    weight: 2,
    patterns: [/ledger[-_.]?service/i, /account[-_.]?service/i, /core[-_.]?banking[-_.]?api/i],
  },
];

/** API protocol signatures. */
const PROTOCOL_CATALOG: readonly SignatureEntry<Exclude<ApiProtocol, 'Unknown'>>[] = [
  {
    value: 'GraphQL',
    label: 'GraphQL',
    weight: 4,
    patterns: [/graphql/i, /"query"\s*:/i, /__schema/i, /ApolloClient/i],
  },
  {
    value: 'ISO-20022-XML',
    label: 'ISO 20022 XML messaging',
    weight: 5,
    patterns: [
      /pain\.001\.001\.\d\d/i,
      /pacs\.008\.001\.\d\d/i,
      /pacs\.002\.001\.\d\d/i,
      /camt\.053\.001\.\d\d/i,
      /urn:iso:std:iso:20022/i,
    ],
  },
  {
    value: 'ISO-8583',
    label: 'ISO 8583 financial card messages',
    weight: 5,
    patterns: [/\bISO[-_ ]?8583\b/i, /\bMTI\b.*\b0[12]\d0\b/, /\b0[12]\d0\b.*field\s*3/i],
  },
  {
    value: 'SOAP-XML',
    label: 'SOAP / WSDL',
    weight: 4,
    patterns: [/<soap:?Envelope/i, /\bWSDL\b/i, /\.asmx\b/i, /soapAction/i],
  },
  {
    value: 'gRPC',
    label: 'gRPC / protobuf',
    weight: 4,
    patterns: [/grpc/i, /application\/grpc/i, /proto3/i, /\.proto\b/i],
  },
  {
    value: 'WebSocket',
    label: 'WebSocket stream',
    weight: 3,
    patterns: [/\bwss?:\/\//i, /new WebSocket\(/i, /socket\.io/i],
  },
  {
    value: 'REST-JSON',
    label: 'REST / JSON (OpenAPI)',
    weight: 3,
    patterns: [/application\/json/i, /openapi/i, /swagger/i, /\/api\/v\d\//i],
  },
];

/** Auth mechanism signatures. */
const AUTH_CATALOG: readonly SignatureEntry<Exclude<AuthMechanism, 'Unknown'>>[] = [
  {
    value: 'OAuth2-AuthorizationCode-PKCE',
    label: 'OAuth 2.0 Authorization Code + PKCE',
    weight: 5,
    patterns: [/code_challenge/i, /code_verifier/i, /\bS256\b/, /response_type=code/i],
  },
  {
    value: 'OIDC',
    label: 'OpenID Connect',
    weight: 4,
    patterns: [/openid/i, /id_token/i, /\.well-known\/openid-configuration/i],
  },
  {
    value: 'mTLS',
    label: 'Mutual TLS client certificates',
    weight: 5,
    patterns: [/client[-_ ]?certificate/i, /\.p12\b/i, /MutualTLS/i, /x509.*client/i],
  },
  {
    value: 'JWT-Bearer',
    label: 'JWT bearer tokens',
    weight: 3,
    patterns: [/Bearer\s+ey[A-Za-z0-9_-]+/i, /\bJWT\b/i, /eyJhbGciOi/i],
  },
  {
    value: 'API-Key',
    label: 'Static API key',
    weight: 3,
    patterns: [/x-api-key/i, /api[-_ ]?key/i, /client[-_ ]?secret/i],
  },
  {
    value: 'HMAC-SHA256',
    label: 'HMAC-SHA256 request signing',
    weight: 4,
    patterns: [/hmac[-_ ]?sha256/i, /X-Signature/i, /createHmac/i],
  },
  {
    value: 'SAML2',
    label: 'SAML 2.0 federation',
    weight: 4,
    patterns: [/SAMLResponse/i, /samlp:AuthnRequest/i, /urn:oasis:names:tc:SAML:2\.0/i],
  },
  {
    value: 'FIDO2-WebAuthn',
    label: 'FIDO2 / WebAuthn (biometric)',
    weight: 4,
    patterns: [/webauthn/i, /navigator\.credentials/i, /publicKeyCredential/i],
  },
  {
    value: 'Basic',
    label: 'HTTP Basic',
    weight: 2,
    patterns: [/Authorization:\s*Basic/i],
  },
  {
    value: 'Session-Cookie',
    label: 'Session cookie',
    weight: 2,
    patterns: [/Set-Cookie/i, /JSESSIONID/i, /sessionid/i],
  },
];

/** Payment rail signatures. */
const RAIL_CATALOG: readonly SignatureEntry<Exclude<PaymentRail, 'Unknown'>>[] = [
  {
    value: 'PayShap',
    label: 'PayShap (BankservAfrica RPP)',
    weight: 5,
    patterns: [/payshap/i, /shap[-_ ]?id/i, /request[-_ ]?to[-_ ]?pay/i],
  },
  {
    value: 'RTC',
    label: 'Real-Time Clearing (BankservAfrica)',
    weight: 5,
    patterns: [/\bRTC\b/i, /real[-_ ]?time[-_ ]?clearing/i, /bankserv.*rtc/i],
  },
  {
    value: 'EFT',
    label: 'EFT / AC (BankservAfrica)',
    weight: 4,
    patterns: [/\bEFT\b/i, /\bAC\b.*clearing/i, /bankserv.*eft/i],
  },
  {
    value: 'DebiCheck',
    label: 'DebiCheck authenticated debit',
    weight: 4,
    patterns: [/debi[-_ ]?check/i, /debiCheck/i],
  },
  {
    value: 'RTGS-SAMOS',
    label: 'SAMOS RTGS (SARB)',
    weight: 4,
    patterns: [/\bSAMOS\b/i, /RTGS/i, /sar[bf].*samos/i],
  },
  {
    value: 'SWIFT',
    label: 'SWIFT cross-border (MT / ISO 20022)',
    weight: 5,
    patterns: [/\bSWIFT\b/i, /\bMT103\b/i, /\bMT202\b/i, /BIC[A-Z0-9]{8,11}/],
  },
  {
    value: 'Card-Visa',
    label: 'Visa card scheme',
    weight: 3,
    patterns: [/visa/i, /\bCVV\b/i, /visanet/i],
  },
  {
    value: 'Card-Mastercard',
    label: 'Mastercard scheme',
    weight: 3,
    patterns: [/mastercard/i, /masterCard/i, /\bMCI\b/i],
  },
  {
    value: 'Polygon-STM',
    label: 'Polygon on-chain settlement ($STM)',
    weight: 4,
    patterns: [/polygon/i, /erc[-_ ]?20/i, /\$STM\b/, /zkevm/i],
  },
];

/** Web3 / crypto integration signatures. */
interface CryptoEntry {
  readonly provider: string;
  readonly category: CryptoIntegrationCategory;
  readonly chains: readonly string[];
  readonly patterns: readonly RegExp[];
  readonly weight: number;
}

const CRYPTO_CATALOG: readonly CryptoEntry[] = [
  {
    provider: 'Polygon',
    category: 'node-provider',
    chains: ['polygon-pos', 'polygon-zkevm'],
    patterns: [/polygon/i, /polygonscan/i, /zkevm/i],
    weight: 4,
  },
  {
    provider: 'USDC',
    category: 'exchange',
    chains: ['polygon-pos', 'ethereum'],
    patterns: [/usdc/i, /circle/i],
    weight: 3,
  },
  {
    provider: 'The Graph',
    category: 'indexer',
    chains: ['polygon-pos'],
    patterns: [/the[-_ ]?graph/i, /subgraph/i, /graphql.*subgraph/i],
    weight: 4,
  },
  {
    provider: 'Fireblocks',
    category: 'custody',
    chains: ['polygon-pos', 'ethereum'],
    patterns: [/fireblocks/i, /fireblocks[-_ ]?sdk/i],
    weight: 4,
  },
  {
    provider: 'BitGo',
    category: 'custody',
    chains: ['polygon-pos', 'ethereum'],
    patterns: [/bitgo/i],
    weight: 3,
  },
  {
    provider: 'MPC Wallet',
    category: 'wallet',
    chains: ['polygon-pos'],
    patterns: [/\bMPC\b.*wallet/i, /multi[-_ ]?party[-_ ]?computation/i, /threshold[-_ ]?signature/i],
    weight: 4,
  },
  {
    provider: 'Chainlink',
    category: 'oracle',
    chains: ['polygon-pos'],
    patterns: [/chainlink/i, /PriceFeed/i, /AggregatorV3Interface/i],
    weight: 3,
  },
  {
    provider: 'Wormhole/LayerZero',
    category: 'bridge',
    chains: ['polygon-pos', 'ethereum'],
    patterns: [/wormhole/i, /layerzero/i, /\bccip\b/i],
    weight: 3,
  },
  {
    provider: 'Ethereum/ERC-20',
    category: 'exchange',
    chains: ['ethereum', 'polygon-pos'],
    patterns: [/erc[-_ ]?20/i, /ERC20/i, /\b0x[a-fA-F0-9]{40}\b/],
    weight: 2,
  },
];

/* ------------------------------------------------------------------------------------------------
 * Detection engine
 * ---------------------------------------------------------------------------------------------- */

/** Result of scanning one catalogue against the artifact. */
interface ScanResult<T extends string> {
  readonly entry: SignatureEntry<T>;
  readonly matched: readonly string[];
  readonly score: number;
}

/** Scan a weighted catalogue against a haystack. */
function scanCatalogue<T extends string>(
  haystack: string,
  catalog: readonly SignatureEntry<T>[],
): readonly ScanResult<T>[] {
  const results: ScanResult<T>[] = [];
  for (const entry of catalog) {
    const matched: string[] = [];
    for (const pattern of entry.patterns) {
      const global = new RegExp(pattern.source, pattern.flags.includes('g') ? pattern.flags : `${pattern.flags}g`);
      const found = haystack.match(global);
      if (found) {
        for (const hit of found) {
          if (!matched.includes(hit)) matched.push(hit);
        }
      }
    }
    if (matched.length > 0) {
      results.push({ entry, matched, score: entry.weight * matched.length });
    }
  }
  return results.sort((a, b) => b.score - a.score);
}

/** Map an aggregate score to a confidence band. */
function scoreToConfidence(score: number): Confidence {
  if (score >= 8) return 'high';
  if (score >= 3) return 'medium';
  return 'low';
}

/** Convert scan results to ordered {@link ProtocolMatch} values. */
function toProtocolMatches<T extends string>(results: readonly ScanResult<T>[]): ProtocolMatch<T>[] {
  return results.map((r) => ({
    value: r.entry.value,
    label: r.entry.label,
    matchedSignatures: r.matched.slice(0, 12),
    confidence: scoreToConfidence(r.score),
  }));
}

/** Determine the CBS family from scan results. */
function detectCbs(results: readonly ScanResult<Exclude<CoreBankingFamily, 'Unknown'>>[]): CbsSignatureMatch {
  const top = results[0];
  if (!top) {
    return {
      family: 'Unknown',
      familyLabel: 'Unknown / no CBS signature detected',
      matchedSignatures: [],
      confidence: 'low',
      ambiguities: [],
    };
  }
  return {
    family: top.entry.value,
    familyLabel: top.entry.label,
    matchedSignatures: top.matched.slice(0, 12),
    confidence: scoreToConfidence(top.score),
    ambiguities: results.slice(1, 3).map((r) => r.entry.value),
  };
}

/** Detect Web3 integrations. */
function detectCrypto(haystack: string): CryptoIntegration[] {
  const out: CryptoIntegration[] = [];
  for (const entry of CRYPTO_CATALOG) {
    const matched: string[] = [];
    for (const pattern of entry.patterns) {
      const found = haystack.match(new RegExp(pattern.source, pattern.flags.includes('g') ? pattern.flags : `${pattern.flags}g`));
      if (found) {
        for (const hit of found) {
          if (!matched.includes(hit)) matched.push(hit);
        }
      }
    }
    if (matched.length > 0) {
      out.push({
        provider: entry.provider,
        category: entry.category,
        chains: entry.chains,
        matchedSignatures: matched.slice(0, 8),
        confidence: scoreToConfidence(entry.weight * matched.length),
      });
    }
  }
  return out.sort((a, b) => a.provider.localeCompare(b.provider));
}

/* ------------------------------------------------------------------------------------------------
 * Artifact helpers
 * ---------------------------------------------------------------------------------------------- */

/** Infer a media type from a file extension. */
function inferMediaType(pathOrName: string): ArtifactMediaType {
  switch (extname(pathOrName).toLowerCase()) {
    case '.json':
      return 'application/json';
    case '.xml':
    case '.iso20022':
      return 'application/xml';
    case '.js':
    case '.mjs':
    case '.cjs':
    case '.ts':
      return 'application/javascript';
    default:
      return 'text/plain';
  }
}

/** Build the immutable descriptor for the analysed content. */
function describeArtifact(path: string, content: string, mediaType: ArtifactMediaType): ArtifactDescriptor {
  const byteLength = Buffer.byteLength(content, 'utf8');
  const sha256 = createHash('sha256').update(content, 'utf8').digest('hex');
  const lineCount = content.length === 0 ? 0 : content.split('\n').length;
  return { path, mediaType, byteLength, sha256, lineCount };
}

/** Resolve the analysed content + path from an {@link AnalysisInput}. */
async function resolveContent(input: AnalysisInput): Promise<{ content: string; path: string }> {
  if (typeof input.content === 'string') {
    return { content: input.content, path: input.artifactPath ?? '<inline>' };
  }
  if (typeof input.artifactPath === 'string') {
    const content = await readFile(input.artifactPath, 'utf8');
    return { content, path: input.artifactPath };
  }
  throw new Error('analyseArtifact: either `content` or `artifactPath` must be supplied.');
}

/** Current UTC date as `YYYY-MM-DD`. */
function utcDate(now: Date): string {
  return now.toISOString().slice(0, 10);
}

/* ------------------------------------------------------------------------------------------------
 * Evidence / rule synthesis
 * ---------------------------------------------------------------------------------------------- */

let evidenceSeq = 0;
let ruleSeq = 0;
let limitationSeq = 0;
let unknownSeq = 0;

/** Reset module-scoped counters (test affordance; keeps ids stable within one run). */
export function resetIdCounters(): void {
  evidenceSeq = 0;
  ruleSeq = 0;
  limitationSeq = 0;
  unknownSeq = 0;
}

function nextEvidenceId(): string {
  evidenceSeq += 1;
  return `stremiium-EV-${String(evidenceSeq).padStart(3, '0')}`;
}

function nextRuleId(): string {
  ruleSeq += 1;
  return `stremiium-IR-${String(ruleSeq).padStart(3, '0')}`;
}

function nextLimitationId(): string {
  limitationSeq += 1;
  return `stremiium-LIM-${String(limitationSeq).padStart(3, '0')}`;
}

function nextUnknownId(): string {
  unknownSeq += 1;
  return `stremiium-UNK-${String(unknownSeq).padStart(3, '0')}`;
}

/** Build the evidence bucket, degrading to INFERRED when no citable source is supplied. */
function synthesiseEvidence(
  input: AnalysisInput,
  descriptor: ArtifactDescriptor,
  cbs: CbsSignatureMatch,
  rails: readonly ProtocolMatch<PaymentRail>[],
  auths: readonly ProtocolMatch<AuthMechanism>[],
  crypto: readonly CryptoIntegration[],
  today: string,
): readonly Evidence[] {
  const sourceRef = input.sourceRef ?? 'pending REA extraction';
  const sourceType: SourceType = input.sourceType ?? (input.sourceRef ? 'rea-artifact' : 'docs');
  const canClaimSeen = typeof input.sourceRef === 'string' && input.sourceRef.length > 0;
  const cls: EvidenceClass = canClaimSeen ? 'SEEN' : 'INFERRED';

  const items: Evidence[] = [];

  if (cbs.family !== 'Unknown') {
    items.push({
      id: nextEvidenceId(),
      claim: `Artifact exhibits ${cbs.familyLabel} core-banking signatures (${cbs.matchedSignatures.slice(0, 3).join(', ')}).`,
      evidenceClass: cls,
      sourceType,
      sourceRef,
      confidence: cbs.confidence,
      verifiedAt: today,
    });
  }

  for (const rail of rails.slice(0, 5)) {
    items.push({
      id: nextEvidenceId(),
      claim: `Payment rail signature detected: ${rail.label}.`,
      evidenceClass: cls,
      sourceType,
      sourceRef,
      confidence: rail.confidence,
      verifiedAt: today,
    });
  }

  for (const auth of auths.slice(0, 5)) {
    items.push({
      id: nextEvidenceId(),
      claim: `Authentication mechanism detected: ${auth.label}.`,
      evidenceClass: cls,
      sourceType,
      sourceRef,
      confidence: auth.confidence,
      verifiedAt: today,
    });
  }

  for (const integ of crypto) {
    items.push({
      id: nextEvidenceId(),
      claim: `Web3 integration detected: ${integ.provider} (${integ.category}; chains: ${integ.chains.join(', ')}).`,
      evidenceClass: cls,
      sourceType,
      sourceRef,
      confidence: integ.confidence,
      verifiedAt: today,
    });
  }

  items.push({
    id: nextEvidenceId(),
    claim: `Analysed artifact fingerprint: sha256=${descriptor.sha256} (${descriptor.byteLength} bytes, ${descriptor.lineCount} lines).`,
    evidenceClass: 'SEEN',
    sourceType: 'rea-artifact',
    sourceRef: descriptor.path,
    confidence: 'high',
    verifiedAt: today,
  });

  return items;
}

/** Derive synthesised rules from the detected signals. */
function synthesiseRules(
  cbs: CbsSignatureMatch,
  protocols: readonly ProtocolMatch<ApiProtocol>[],
  rails: readonly ProtocolMatch<PaymentRail>[],
  auths: readonly ProtocolMatch<AuthMechanism>[],
  crypto: readonly CryptoIntegration[],
  evidence: readonly Evidence[],
): readonly InferredRule[] {
  const seenIds = evidence.filter((e) => e.evidenceClass === 'SEEN').map((e) => e.id);
  const inferredIds = evidence.filter((e) => e.evidenceClass === 'INFERRED').map((e) => e.id);
  const support = [...seenIds, ...inferredIds].slice(0, 6);
  const rules: InferredRule[] = [];

  if (cbs.family !== 'Unknown') {
    rules.push({
      id: nextRuleId(),
      rule: `Assume a ${cbs.familyLabel} core with a ${protocols[0]?.label ?? 'REST'} northbound API and ${rails[0]?.label ?? 'unknown'} settlement path; model the ledger around the CBS account/GL abstraction.`,
      confidence: cbs.confidence,
      basedOn: support,
    });
  }

  if (auths.length > 0) {
    rules.push({
      id: nextRuleId(),
      rule: `Client↔API trust boundary uses ${auths.map((a) => a.label).join(' + ')}; enforce the strongest detected mechanism at the Kong gateway.`,
      confidence: auths[0].confidence,
      basedOn: support,
    });
  }

  if (rails.length > 0) {
    rules.push({
      id: nextRuleId(),
      rule: `Payment flows terminate on: ${rails.map((r) => r.label).join(', ')}; map each to the StremiiumTransaction.clearingType union for reconciliation.`,
      confidence: rails[0].confidence,
      basedOn: support,
    });
  }

  if (crypto.length > 0) {
    rules.push({
      id: nextRuleId(),
      rule: `Web3 surface spans ${crypto.map((c) => c.provider).join(', ')}; route token settlement through the non-custodial MPC WaaS and index via The Graph.`,
      confidence: 'medium',
      basedOn: support,
    });
  }

  if (rules.length === 0) {
    rules.push({
      id: nextRuleId(),
      rule: 'No coherent architecture rule could be synthesised: the artifact carried no recognisable banking signatures. Escalate to broader extraction (full ASAR / DEX / HAR).',
      confidence: 'low',
      basedOn: [],
    });
  }

  return rules;
}

/** Standard limitations that always apply to REA-style analysis in this program. */
function baseLimitations(): readonly Limitation[] {
  const items: Limitation[] = [
    {
      id: nextLimitationId(),
      description: 'REA (`morluto/rea`) is not yet installed in this workspace; no decompiled artifact offsets are available for cross-checking.',
      wouldResolveWith: 'Install the REA binary and run `rea doctor` (task T1.0/T1.1).',
    },
    {
      id: nextLimitationId(),
      description: 'Server-side computation (interest accrual, fee engines, fraud scoring) is invisible to client/artifact analysis.',
      wouldResolveWith: 'Obtain authoritative API documentation or an authorised sandbox integration.',
    },
    {
      id: nextLimitationId(),
      description: 'Minified/obfuscated bundles may hide identifiers; matched signatures can under-report the true integration surface.',
      wouldResolveWith: 'Run a de-obfuscator / source-map recovery pass before re-analysing.',
    },
  ];
  return items;
}

/** Standard unknowns. */
function baseUnknowns(): readonly Unknown[] {
  const items: Unknown[] = [
    {
      id: nextUnknownId(),
      question: 'Which exact ISO 20022 message versions and field-level mappings does the counterparty accept?',
      resolutionPath: 'Frame an ISO 20022 pacs.008/pain.001 sample against a sandbox endpoint and inspect the acknowledgement.',
    },
    {
      id: nextUnknownId(),
      question: 'What are the server-side interest, fee, and rewards calculation algorithms?',
      resolutionPath: 'Reconcile published fee schedules against observed statement outputs; request formal product specs.',
    },
    {
      id: nextUnknownId(),
      question: 'Are real-time rail calls (PayShap/RTC) synchronous or acknowledged asynchronously?',
      resolutionPath: 'Trace latency and pacs.002 status callbacks on a sanctioned test transaction.',
    },
  ];
  return items;
}

/* ------------------------------------------------------------------------------------------------
 * Public API
 * ---------------------------------------------------------------------------------------------- */

/**
 * Analyse a banking artifact and produce a {@link BankingEvidenceReport}.
 *
 * Provider-agnostic: detection is entirely catalogue-driven and independent of any specific bank.
 * Pure with respect to the filesystem (reads at most one file, writes nothing, opens no sockets).
 *
 * @param input - Inline content or a path to an extracted artifact, plus provenance metadata.
 * @returns A fully populated, JSON-serialisable evidence report.
 *
 * @example
 * ```ts
 * const report = await analyseArtifact({
 *   artifactPath: 'extracted/shyft/app.asar.unpacked/index.js',
 *   sourceRef: 'artefact:shyft-app/index.js@0x1f40',
 *   sourceType: 'rea-artifact',
 * });
 * console.log(report.cbs.family, report.paymentRails.map((r) => r.value));
 * ```
 */
export async function analyseArtifact(input: AnalysisInput | string): Promise<BankingEvidenceReport> {
  const normalised: AnalysisInput = typeof input === 'string' ? { artifactPath: input } : input;
  const { content, path } = await resolveContent(normalised);
  const mediaType = normalised.mediaType ?? inferMediaType(path);
  const descriptor = describeArtifact(path, content, mediaType);
  const now = new Date();
  const today = normalised.analysedAt ?? utcDate(now);

  const cbsResults = scanCatalogue(content, CBS_CATALOG);
  const protocolResults = scanCatalogue(content, PROTOCOL_CATALOG);
  const authResults = scanCatalogue(content, AUTH_CATALOG);
  const railResults = scanCatalogue(content, RAIL_CATALOG);

  const cbs = detectCbs(cbsResults);
  const apiProtocols = toProtocolMatches(protocolResults);
  const authMechanisms = toProtocolMatches(authResults);
  const paymentRails = toProtocolMatches(railResults);
  const cryptoIntegrations = detectCrypto(content);

  const evidence = synthesiseEvidence(normalised, descriptor, cbs, paymentRails, authMechanisms, cryptoIntegrations, today);
  const inferredRules = synthesiseRules(cbs, apiProtocols, paymentRails, authMechanisms, cryptoIntegrations, evidence);
  const limitations = baseLimitations();
  const unknowns = baseUnknowns();

  return {
    schemaVersion: REPORT_SCHEMA_VERSION,
    tool: TOOL_ID,
    toolVersion: TOOL_VERSION,
    programId: PROGRAM_ID,
    generatedAt: now.toISOString(),
    artifact: descriptor,
    cbs,
    apiProtocols,
    authMechanisms,
    paymentRails,
    cryptoIntegrations,
    evidence,
    inferredRules,
    limitations,
    unknowns,
  };
}

/**
 * Factory returning the registered REA {@link BankingReverseTool}.
 *
 * @returns A tool object whose `analyse` delegates to {@link analyseArtifact}.
 */
export function createBankingReverseTool(): BankingReverseTool {
  return {
    id: TOOL_ID,
    name: 'Stremiium Banking Reverse Tool',
    description:
      'Provider-agnostic REA adapter that detects core-banking family, API protocol, auth mechanism, ' +
      'payment rail, and Web3 integration signatures in an extracted artifact, emitting the four ' +
      'program-mandated evidentiary buckets (evidence / inferredRules / limitations / unknowns).',
    version: TOOL_VERSION,
    capabilities: [
      'cbs-signature-detection',
      'api-protocol-detection',
      'auth-mechanism-detection',
      'payment-rail-detection',
      'crypto-integration-detection',
      'evidence-classification',
    ],
    analyse: analyseArtifact,
  };
}

/** Default export: the registered tool (composition root for the REA plugin loader). */
export default createBankingReverseTool();
