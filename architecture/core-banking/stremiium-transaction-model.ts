/**
 * @file stremiium-transaction-model.ts
 * @module architecture/core-banking
 * @summary Canonical Stremiium NeoBank transaction model (T7.1).
 *
 * Program:  SC-REA-NEOBANK-5.0 (Sparkling Curious)
 * Councils: C16 Banking-Fintech, C10 Finance-IR, C01 Legal-Compliance, C13 Web3-Finance
 * Status:   TARGET DESIGN — normative type contract; the runtime is not yet built.
 *
 * ## Role
 * This module is the single source of truth for how *any* money movement in Stremiium NeoBank is
 * represented, regardless of the underlying rail (PayShap, RTC, EFT, internal ledger, on-chain
 * $STM/USDC) or fiat/crypto currency. Everything upstream — the Mambu core, the BankservAfrica
 * engine, the MPC WaaS bridge — normalises into a `StremiiumTransaction` before it is written to
 * the Kafka transactional bus, projected into PostgreSQL, or surfaced to the rewards engine.
 *
 * ## Invariants (normative)
 * 1. All timestamps are **ISO-8601 UTC** (`YYYY-MM-DDTHH:mm:ss.sssZ`). Local time never appears.
 * 2. Monetary amounts are **minor-unit-safe decimal strings** where possible; see {@link Amount}.
 * 3. A transaction is immutable once it reaches `SETTLED` or `REVERSED` — corrections are new
 *    transactions linked via `reversalOf`, never in-place edits (NCA / audit requirement).
 * 4. `complianceMetadata` is populated at authoring time, never back-filled silently.
 * 5. No credentials, keys, or raw personal data are stored on this model — only hashes and flags.
 *
 * @packageDocumentation
 */

/* ------------------------------------------------------------------------------------------------
 * Scalar aliases
 * ---------------------------------------------------------------------------------------------- */

/**
 * ISO-8601 UTC timestamp string, e.g. `2026-10-19T09:15:00.000Z`.
 * Enforced by convention and validated at the ingestion boundary.
 */
export type Iso8601Utc = string;

/**
 * A monetary amount expressed as a signed decimal string (e.g. `"1250.00"`, `"-31.50"`).
 * Decimal strings avoid IEEE-754 rounding drift; the ledger stores them as `NUMERIC(28,9)`.
 */
export type Amount = string;

/** Opaque account reference (an internal ledger handle, never a raw IBAN/PAN). */
export type AccountRef = string;

/** ISO-4217 / internal currency code (see {@link Currency}). */
export type CurrencyCode = Currency;

/* ------------------------------------------------------------------------------------------------
 * Enumerations and unions
 * ---------------------------------------------------------------------------------------------- */

/** Supported fiat and digital currencies. `STM` is the native fan/loyalty token. */
export type Currency = 'ZAR' | 'USD' | 'EUR' | 'STM' | 'USDC';

/** The clearing/settlement mechanism that carried the transaction. */
export type ClearingType =
  | 'PayShap'
  | 'RTC'
  | 'Internal-Book'
  | 'Polygon-STM'
  | 'SWIFT';

/** Lifecycle state of a transaction as it moves through the ledger and settlement. */
export type TransactionState =
  | 'INITIATED'
  | 'PENDING-AUTHORISATION'
  | 'AUTHORISED'
  | 'SUBMITTED'
  | 'CLEARING'
  | 'SETTLED'
  | 'FAILED'
  | 'REVERSED'
  | 'DISPUTED';

/** Suspicious Activity Report workflow status (FICA / FIC Act). */
export type SarReportStatus =
  | 'NOT-REQUIRED'
  | 'MONITORING'
  | 'DRAFT'
  | 'SUBMITTED'
  | 'ACKNOWLEDGED'
  | 'CLOSED';

/** Direction of value movement relative to the ledger's Stremiium-controlled accounts. */
export enum TransactionDirection {
  /** Value enters the Stremiium ecosystem. */
  Inbound = 'INBOUND',
  /** Value leaves the Stremiium ecosystem. */
  Outbound = 'OUTBOUND',
  /** Value moves between two Stremiium-internal accounts. */
  Internal = 'INTERNAL',
}

/** Which party bears the transaction fee. */
export enum FeeBearer {
  /** Fee debited from the payer. */
  Originator = 'ORIGINATOR',
  /** Fee debited from the beneficiary. */
  Beneficiary = 'BENEFICIARY',
  /** Stremiium absorbs the fee (rewards/waiver). */
  Stremiium = 'STREMIUM',
  /** Shared per commercial agreement. */
  Shared = 'SHARED',
}

/** Customer-facing product family that authored the transaction. */
export enum AccountType {
  /** Day-to-day transactional account. */
  Transactional = 'TRANSACTIONAL',
  /** Savings / goal-based account. */
  Savings = 'SAVINGS',
  /** Stokvel / group-savings account. */
  Stokvel = 'STOKVEL',
  /** Digital-asset (crypto) wallet ledger account. */
  DigitalAsset = 'DIGITAL_ASSET',
  /** Fan/BLT loyalty token account ($STM). */
  LoyaltyToken = 'LOYALTY_TOKEN',
  /** Internal suspense / nostro account (non-customer). */
  InternalSuspense = 'INTERNAL_SUSPENSE',
}

/** Coarse category of a payment rail, used for routing and limit policy lookup. */
export enum RailCategory {
  /** Low-value instant retail (PayShap, RTC). */
  InstantRetail = 'INSTANT_RETAIL',
  /** Batch / next-day (EFT / AC). */
  BatchClearing = 'BATCH_CLEARING',
  /** Intra-institution book transfer. */
  BookTransfer = 'BOOK_TRANSFER',
  /** Cross-border correspondent (SWIFT). */
  CrossBorder = 'CROSS_BORDER',
  /** Public-blockchain settlement ($STM, USDC). */
  OnChain = 'ON_CHAIN',
}

/* ------------------------------------------------------------------------------------------------
 * Sub-structures
 * ---------------------------------------------------------------------------------------------- */

/** Account endpoint participating in a transaction. */
export interface AccountEndpoint {
  /** Internal account handle. */
  readonly accountRef: AccountRef;
  /** Owning legal entity, e.g. `Stremiium (Pty) Ltd`. */
  readonly legalEntity: string;
  /** Product family. */
  readonly accountType: AccountType;
  /** BIC of the institution holding the account (for cross-border / correspondence). */
  readonly bic?: string;
  /** Bank verification / branch code where applicable (e.g. SA universal branch code). */
  readonly branchCode?: string;
  /** Payment-Shap proxy identifier (mobile / handle), if the account is Shap-enabled. */
  readonly proxyIdentifier?: string;
}

/**
 * Behavioural-rewards context attached to every transaction, feeding the BLT engine.
 * Points are only ever minted from *settled* transactions.
 */
export interface RewardsContext {
  /** Whether this transaction is eligible to mint BLT / reward points. */
  readonly bltEarnEligible: boolean;
  /** Tier points credited to the customer's loyalty tier (integer, >= 0). */
  readonly tierPointsEarned: number;
  /** Campaign attribution tag, e.g. `spend-your-shap-q4-2026`. Null when unattributed. */
  readonly campaignTag: string | null;
  /** Multiplier applied by the active tier at earning time (e.g. `1.5`). */
  readonly tierMultiplier?: number;
  /** $STM-denominated cashback, if the campaign pays in token terms. */
  readonly stmCashback?: Amount;
}

/**
 * FICA / FinSurv travel-rule payload exchanged with counterparty institutions.
 * Only non-reversible hashes and BICs are stored; raw PII stays in the POPIA-governed vault.
 */
export interface TravelRulePayload {
  /** BIC of the ordering (originator) institution. */
  readonly originatorBic: string;
  /** BIC of the beneficiary institution. */
  readonly beneficiaryBic: string;
  /** Salted hash of the originator identity (FICA Directive 9 data exchange). */
  readonly identityHash: string;
  /** ISO-3166-1 alpha-2 country of the originator, where disclosed. */
  readonly originatorCountry?: string;
  /** ISO-3166-1 alpha-2 country of the beneficiary, where disclosed. */
  readonly beneficiaryCountry?: string;
  /** IVMS-101 / IVMS-201 style envelope version used for the exchange. */
  readonly protocolVersion?: string;
}

/** Regulatory / compliance flags carried on the transaction. */
export interface ComplianceMetadata {
  /** True when the transaction is reportable to the FIC under FICA / FIC Act thresholds. */
  readonly ficaReportable: boolean;
  /** Cross-border travel-rule payload; present only for qualifying cross-border transfers. */
  readonly travelRulePayload: TravelRulePayload | null;
  /** Suspicious-activity reporting status. */
  readonly sarReportStatus: SarReportStatus;
  /** Cash-threshold-report (CTR) reference, if a CTR was filed. */
  readonly ctrReference?: string | null;
  /** FinSurv / Exchange-Control approval reference, if required (SDA / FCA). */
  readonly exchangeControlApprovalRef?: string | null;
  /** POPIA lawful-basis code under which personal data in this record is processed. */
  readonly popiaLawfulBasis?: string;
}

/* ------------------------------------------------------------------------------------------------
 * The canonical transaction
 * ---------------------------------------------------------------------------------------------- */

/**
 * The canonical Stremiium transaction. Every rail normalises into this shape.
 *
 * @remarks
 * - `amount` and `feeAmount` are decimal strings; `feeCurrency` may differ from `currency`
 *   (e.g. a ZAR transfer settled with a $STM fee discount).
 * - `sourceAccount` / `destinationAccount` may reference an {@link AccountType.InternalSuspense}
 *   account for in-flight or nostro legs.
 * - Corrections are new transactions linked by `reversalOf`, preserving the audit trail.
 */
export interface StremiiumTransaction {
  /** Globally unique transaction id (UUIDv7 recommended for time-ordered indexing). */
  readonly transactionId: string;
  /** Grouping id linking multi-leg transactions (e.g. FX: ZAR leg + USDC leg). */
  readonly correlationId?: string;
  /** Previous transaction id when this record reverses another. */
  readonly reversalOf?: string;

  /** Ledger endpoint value is debited from. */
  readonly sourceAccount: AccountEndpoint;
  /** Ledger endpoint value is credited to. */
  readonly destinationAccount: AccountEndpoint;

  /** Direction of value movement. */
  readonly direction: TransactionDirection;

  /** ISO-8601 UTC timestamp the transaction was authored. */
  readonly timestamp: Iso8601Utc;
  /** ISO-8601 UTC timestamp the transaction settled, when known. */
  readonly settledAt?: Iso8601Utc;

  /** Clearing / settlement mechanism. */
  readonly clearingType: ClearingType;
  /** Coarse rail category (derived; carried for routing/limit lookups). */
  readonly railCategory: RailCategory;

  /** Principal amount as a signed decimal string. */
  readonly amount: Amount;
  /** Currency of the principal amount. */
  readonly currency: CurrencyCode;

  /** Transaction fee as a signed decimal string. */
  readonly feeAmount: Amount;
  /** Currency in which the fee is denominated (may differ from `currency`). */
  readonly feeCurrency: CurrencyCode;
  /** Party bearing the fee. */
  readonly feeBearer: FeeBearer;

  /** Behavioural-rewards context. */
  readonly rewardsContext: RewardsContext;
  /** Regulatory / compliance context. */
  readonly complianceMetadata: ComplianceMetadata;

  /** Current lifecycle state. */
  readonly state: TransactionState;

  /** Free-form, schema-versioned rail-specific extension bag (ISO 20022 refs, tx hashes). */
  readonly railData?: Readonly<Record<string, string>>;
}

/* ------------------------------------------------------------------------------------------------
 * Helpers (type-level + runtime-light)
 * ---------------------------------------------------------------------------------------------- */

/** Terminal states after which a transaction must never be mutated. */
export const TERMINAL_STATES: readonly TransactionState[] = ['SETTLED', 'REVERSED'] as const;

/** Type guard: is the given state terminal (immutable)? */
export function isTerminalState(state: TransactionState): boolean {
  return TERMINAL_STATES.includes(state);
}

/** Currencies that are fiat (ISO-4217), as opposed to digital assets. */
export const FIAT_CURRENCIES: readonly Currency[] = ['ZAR', 'USD', 'EUR'] as const;

/** Currencies that settle on a public chain. */
export const ONCHAIN_CURRENCIES: readonly Currency[] = ['STM', 'USDC'] as const;

/** Type guard: does the currency settle on-chain? */
export function isOnChainCurrency(currency: Currency): boolean {
  return ONCHAIN_CURRENCIES.includes(currency);
}

/**
 * Mapping from {@link ClearingType} to its {@link RailCategory}, kept explicit so routing,
 * limit policy, and settlement-window lookups cannot drift.
 */
export const CLEARING_TYPE_CATEGORY: Readonly<Record<ClearingType, RailCategory>> = {
  PayShap: RailCategory.InstantRetail,
  RTC: RailCategory.InstantRetail,
  'Internal-Book': RailCategory.BookTransfer,
  'Polygon-STM': RailCategory.OnChain,
  SWIFT: RailCategory.CrossBorder,
} as const;
