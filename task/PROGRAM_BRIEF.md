# SPARKLING CURIOUS — STREMIUM NEOBANK REVERSE-ENGINEERING PROGRAM BRIEF

**Program ID:** `SC-REA-NEOBANK-5.0`
**Parent Entity:** Stremiium (Pty) Ltd — Bloemfontein, Free State, South Africa 🇿🇦
**Architectural Parent:** Sparkling Curious (`SC-MASTER-001`)
**Engine Runtime:** DeepSeek V4.1 Flash (Low-Mode Multi-Agent Cluster)
**Execution Modality:** Two-Phase Dual Engine (Plan Mode ➔ Code Mode)
**Tooling Anchor:** REA (`morluto/rea`) Binary & Application Analysis Engine
**Brief status:** locked for Code-Mode execution
**Last updated:** 2026-10-19

---

## 1. WHY THIS PROGRAM EXISTS

Stremiium is launching a **South African NeoBank** that unifies fiat banking, digital-asset custody,
fan/BLT loyalty tokens, phygital collectibles, prediction markets and DFS fantasy sports under one
behavioural rewards engine and one native token (`$STM`, ERC-20 on Polygon PoS / ZK-EVM).

To outmanoeuvre legacy incumbents (Standard Bank, ABSA, Nedbank, FNB), digital first-movers
(TymeBank, Discovery Bank, African Bank) and crypto-asset service providers (Luno, VALR, Flex.one),
the program must produce **evidentiary reverse-engineering dossiers** of the whole banking + Web3
landscape in South Africa and the global benchmarks that matter.

The rule that governs everything below: **never speculate when software behaviour can be verified;
always label the difference between what is *Seen*, what is *Inferred*, and what is *Unknown*.**

---

## 2. THE 16 STRATEGIC COUNCILS (authority map)

| Tier | Council | Captain | Primary mandate in this program |
|---|---|---|---|
| 1 | C01 Legal-Compliance | `C01-legal-compliance-captain` | FSCA CASP, FICA Dir.9 Travel Rule, SARB FinSurv ExCon, POPIA, NCA, NGB |
| 1 | C02 Operations | `C02-vp-operations` | BCP, vendor SLAs, core-banking uptime |
| 1 | C03 Admin-Knowledge | `C03-chief-librarian` | Artifact system, TBS folders, markdown standards |
| 1 | C04 Strategy-Growth | `C04-chief-strategist` | Market positioning, B-BBEE, growth forecasting |
| 1 | C05 HR-Culture | `C05-chief-people-officer` | SA salary bands, org structure, SASBO |
| 1 | C06 Engineering-Infra | `C06-chief-technology-officer` | AWS `af-south-1`, K8s, HSM, VPC isolation |
| 1 | C07 Sales-BizDev | `C07-rainmaker-captain` | Merchant acquiring, POS, retail agent networks |
| 1 | C08 Design-Creative | `C08-chief-design-officer` | Mobile UI/UX, WCAG 2.1 AA, nudging flows |
| 1 | C09 Marketing-Comms | `C09-chief-marketing-officer` | Campaigns, sponsorship, gamified adoption |
| 1 | C10 Finance-IR | `C10-chief-financial-officer` | CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income |
| 2 | C11 Dev-Engineering | `C11-dev-engineering-captain` | Full-stack, React Native, API design, REA JS analysis |
| 2 | C12 Cybersecurity-Intel | `C12-cybersecurity-intel-captain` | Threat model, pen-test, REA static/dynamic audit |
| 2 | C13 Web3-Finance | `C13-web3-finance-captain` | Polygon contracts, MPC wallets, $STM tokenomics |
| 3 | C14 Customer-Success | `C14-customer-success-captain` | Onboarding, disputes, Tier 1–3 support |
| 3 | C15 Product-Management | `C15-product-management-captain` | Roadmap, parity matrices, feature specs |
| 3 | C16 Banking-Fintech | `C16-banking-fintech-captain` | CBS signatures, ISO 20022, BankservAfrica, PayShap |

Council definitions live in `.stremiium/agents/council-agents/`. Machine-readable registry:
`.stremiium/registry/master-registry.json`.

---

## 3. TARGET DOSSIER ROSTER (17 entities)

| # | Entity | Folder | Lead council(s) |
|---|---|---|---|
| 1 | Standard Bank Group | `research/banks/standard-bank/` | C16, C10 |
| 2 | First National Bank (FirstRand) | `research/banks/fnb/` | C16, C09, C11 |
| 3 | ABSA Group | `research/banks/absa/` | C16, C06 |
| 4 | Nedbank Group | `research/banks/nedbank/` | C15, C16 |
| 5 | Discovery Bank | `research/banks/discovery-bank/` | C04, C11 |
| 6 | TymeBank / GoTymeBank | `research/banks/tymebank/` | C16, C06 |
| 7 | African Bank | `research/banks/african-bank/` | C11, C16 |
| 8 | Luno | `research/casps-and-wallets/luno/` | C13, C01 |
| 9 | VALR | `research/casps-and-wallets/valr/` | C13 |
| 10 | Flex.one | `research/casps-and-wallets/flex-one/` | C16, C13 |
| 11 | JPMorgan Chase (Kinexys) | `research/global-benchmarks/jpmorgan-chase/` | C13, C10 |
| 12 | Morgan Stanley | `research/global-benchmarks/morgan-stanley/` | C10 |
| 13 | Sorare | `research/web3-competitors/sorare/` | C13 |
| 14 | Socios.com / Chiliz | `research/web3-competitors/socios-chiliz/` | C13 |
| 15 | Polymarket | `research/web3-competitors/polymarket/` | C13 |
| 16 | FanDuel / DraftKings | `research/web3-competitors/fanduel/` | C11, C01 |
| 17 | Fanatics | `research/web3-competitors/fanatics/` | C04, C15 |

---

## 4. MANDATORY DOSSIER TEMPLATE (per entity)

Every dossier folder contains these files. Keep each file self-contained and information-dense.

```
research/<group>/<entity>/
├── README.md                 # index + one-paragraph executive summary + evidence legend
├── 01-identity-and-financials.md    # corporate identity, licensing, ownership, financials
├── 02-technology-and-systems.md     # CBS signature, cloud, APIs, app stack, auth
├── 03-products-and-pricing.md       # account tiers, fees, interchange, NIM/NIR
├── 04-rewards-and-behaviour.md      # loyalty mechanics, tier math, gamification loop
├── 05-human-capital.md              # exec team, engineering bands, headcount, B-BBEE
├── 06-regulatory-and-risk.md        # FSCA/FICA/SARB/POPIA/NCA posture, gaps
├── 07-rea-reverse-engineering.md    # REA method, Seen/Inferred/Unknown per 3.2 rules
├── 08-stremiium-implications.md     # what Stremiium copies / avoids / must beat
└── evidence-ledger.json             # machine-readable evidence index (see §6)
```

### 4.0 Depth bar (v5.0 re-run — MANDATORY)

The consolidated `.stremiium/agents/*.agent.md` files run **30 KB – 150 KB each**. Every artefact in
this program must match that informational density. Minimum line/byte targets:

| Artefact | Minimum depth |
|---|---|
| Any `research/<group>/<entity>/0x-*.md` file | 400–900 lines / 12–30 KB |
| Any `architecture/**/*.md` file | 400–900 lines / 12–30 KB |
| Any `UnConsolidated/**/*.md` file | 400–900 lines / 12–30 KB |
| Any `task/T*/**/*.md` file | 150–350 lines / 5–12 KB |
| Any `.github/**/*.md` file | 200–500 lines / 6–15 KB |
| `evidence-ledger.json` | ≥ 20 entries |

Depth means *specific, structured, decision-useful content* — tables, numeric models, worked
examples, ASCII diagrams, clause-level regulatory citation, and explicit ADOPT/ADAPT/AVOID/BEAT
verdicts. Padding, repetition, and filler are explicitly disallowed.

### 4.1 Required content per dossier file (minimum depth)

* **01 Identity** — legal name, registration/listing (e.g. JSE ticker), HQ, owner/shareholder
  structure, licence numbers/status where public, customer & deposit counts, headline financials
  (revenue, NIM, cost-to-income, ROE, CAR) with the reporting period cited.
* **02 Technology** — core banking system family (Mambu / Finacle / BaNCS / Temenos / in-house),
  cloud region, app delivery model (native / React Native / Electron-webview), authentication
  primitives, integration switches (BankservAfrica, PayShap, RTC/EFT, SWIFT), notable third parties.
* **03 Products** — full account ladder with monthly fees, transaction pricing, rewards-linked
  pricing, merchant acquiring economics, deposit/credit products.
* **04 Rewards** — the behavioural engine traced end-to-end: action ➔ points ➔ tier ➔ redemption,
  partner funding model, currency velocity, retention effect.
* **05 Human capital** — named executives, reporting lines, approximate engineering salary bands
  (ZAR), headcount trajectory, B-BBEE level if published.
* **06 Regulatory** — every regulator relationship, licence type, known enforcement, data-residency
  position, and the *gaps* Stremiium can exploit.
* **07 REA** — this is the forensic file. It MUST use the four-evidentiary-output structure (§5).
* **08 Implications** — explicit "adopt / adapt / avoid" decisions for the Stremiium NeoBank.

---

## 5. THE FOUR EVIDENTIARY OUTPUTS (non-negotiable)

Every REA file partitions findings into exactly these four buckets:

1. **Evidence (Seen)** — verifiable strings, bytecode, function signatures, network calls, public
   filings, published fee schedules. Each item cites its source.
2. **Recovered Graph (Synthesised)** — logical architecture, state machines, data models derived
   from the seen evidence.
3. **Limitations (Known Boundaries)** — obfuscated sections, stripped symbols, DRM, WAF blocking.
4. **Unknowns (Unresolved)** — proprietary server-side computation, private APIs, unreachable logic.

> **Honesty rule:** REA (`morluto/rea`) is *not yet installed* in this workspace and no APK/ASAR
> artefacts have been supplied by the executive. Therefore no "Seen" item may claim to derive from a
> decompiled artefact we do not possess. Until REA extraction runs, "Seen" items are limited to
> **public, citable sources** (filings, published pricing, documentation, app-store metadata), and
> everything artefact-dependent is labelled **Inferred** or **Unknown** with the extraction step that
> would resolve it named explicitly.

---

## 6. EVIDENCE LEDGER FORMAT (`evidence-ledger.json`)

```json
{
  "entity": "<name>",
  "program": "SC-REA-NEOBANK-5.0",
  "rea_status": "not-executed | partial | executed",
  "entries": [
    {
      "id": "<entity>-EV-001",
      "claim": "<short claim>",
      "evidence_class": "SEEN | INFERRED | UNKNOWN",
      "source_type": "public-filing | published-pricing | app-store | docs | rea-artifact | network-trace",
      "source_ref": "<url / filing / artefact offset / 'pending REA extraction'>",
      "confidence": "high | medium | low",
      "verified_at": "2026-10-19"
    }
  ]
}
```

---

## 7. STRATEGIC FILTER — WHAT STREMIUM DOES WITH EACH FINDING

Every dossier must end by classifying each major finding as one of:

* **ADOPT** — proven mechanic Stremiium should reproduce (with the improvement it makes).
* **ADAPT** — right idea, wrong cost model/regulatory fit; Stremiium changes it (state how).
* **AVOID** — a liability, lock-in, or compliance trap Stremiium refuses to reproduce.
* **BEAT** — a competitor weakness Stremiium explicitly attacks.

---

## 8. ENGINEERING / ARCHITECTURE ANCHORS

Stremiium NeoBank target stack (see `architecture/` for the full specification):

```
CLIENT:      React Native (iOS/Android) + Next.js 15 web portal
API/GATEWAY: GraphQL gateway + Kong (mTLS, rate limiting, WAF)
CORE BANKING:Mambu cloud-native CBS on AWS Cape Town (af-south-1)
PAYMENTS:    BankservAfrica engine (PayShap, RTC, EFT)
WEB3:        Polygon PoS / ZK-EVM + non-custodial MPC Wallet-as-a-Service
EVENTS:      Apache Kafka (transactional bus + rewards engine)
DATA:        PostgreSQL (ACID core) + Redis (cache) + The Graph (on-chain indexing)
```

Token: `$STM`, 1,000,000,000 fixed supply, 20% of net quarterly fees → programmatic buy-back &
burn until 50% retired; 25% fee discount when fees are settled in `$STM`.

---

## 9. FOLDER CONVENTIONS

```
task/T<n>-<slug>/
├── audit/          # inventory + gap findings
├── phases/         # phase plans
├── implementation/ # concrete build artefacts/specs
├── summary/        # roll-up reports
├── context/        # inputs, references, decisions
├── assignments/    # council RACI + task tickets
└── status.md       # single source of truth for status
```

Markdown only. Conventional-commit messages (`feat:`, `docs:`, `analysis:`, `arch:`).
No credentials, keys, tokens, or personal data in any committed file.
