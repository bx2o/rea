# T7 summary · roll-up.md

**Task:** T7.0 Stremiium NeoBank Unified Blueprint
**Prepared by:** C00 Sparkling Curious (roll-up template, pre-filled).

---

## 1. Consolidated findings

| # | Finding | Evidence class | Source |
|---|---|---|---|
| F1 | Target stack is defined (RN + Next.js, GraphQL/Kong, Mambu on af-south-1, BankservAfrica, Polygon, Kafka, Postgres/Redis/The Graph). | SEEN | brief §8 |
| F2 | `$STM` tokenomics defined (1bn supply; 20% fees→burn to 50%; 25% fee discount). | SEEN | brief §8 |
| F3 | `architecture/` tree does **not** exist yet. | SEEN | repo root |
| F4 | T2–T6 dossiers are empty → blueprint lacks evidence traceability. | SEEN | repo `research/` |
| F5 | Regulatory frame: FSCA CASP, FICA (Dir.9), SARB FinSurv, POPIA, NCA, NGB. | SEEN | brief §2 |
| F6 | Blueprint is **evidence-blocked** until T2–T6 produce content. | INFERRED | dependency logic |

## 2. Decisions recorded

- **D1** — T7 is prescriptive, not forensic; every prescription must cite a source finding.
- **D2** — Legal-first tokenomics: C01 validates $STM utility classification before T8.
- **D3** — Design within SARB FinSurv exchange controls.
- **D4** — C00 maintains a traceability matrix; no orphan architectural decisions.

## 3. Status snapshot

| Sub-task | Status |
|---|---|
| T7.0 (parent) | ACTIVE |
| T7.1 Core Banking & PayShap | ACTIVE (evidence-blocked) |
| T7.2 $STM & MPC Wallet | ACTIVE (evidence-blocked) |
| T7.3 Regulatory Dossier | ACTIVE (evidence-blocked) |
| Traceability matrix | not started |

## 4. Preliminary blueprint skeleton (from brief)

- **Front end** — unified fiat + crypto + fan/BLT UX (React Native + Next.js).
- **Core** — Mambu CBS on `af-south-1`; BankservAfrica/PayShap rails; Kafka reward bus.
- **Web3** — `$STM` on Polygon + non-custodial MPC wallet.
- **Compliance** — FSCA + SARB + FICA + POPIA by design.

## 5. Open questions

1. Is `$STM` a security under SA law? — C01 (blocking).
2. Does Mambu support the required PayShap/ISO 20022 flows natively? — vendor check.
3. How much of T7 can ship before T2–T6 complete? — scope decision (C15/C10).
