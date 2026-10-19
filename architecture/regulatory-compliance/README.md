# Regulatory Compliance — South African Control Matrix

**Program:** `SC-REA-NEOBANK-5.0` · **Task:** T7.3 · **Owner:** C01 Legal-Compliance (with C16 Banking-Fintech, C13 Web3-Finance, C10 Finance-IR)
**Status:** `TARGET DESIGN` — control design only. **No licence numbers are stated or fabricated**; where a licence/registration number is required operationally it is recorded in the live compliance register, not here.

---

## 1. How to read this matrix

Each row is a **regulatory control**: the authority, the instrument, the obligation Stremiium must
meet, and the **concrete architecture component** that discharges it. This is the bridge between
[`south-africa-regulatory-hierarchy.md`](south-africa-regulatory-hierarchy.md) (the *what/who*) and
the engineering specs in this folder (the *how*).

> This document describes the **target** compliance posture. It is not legal advice and does not
> assert that any licence has been granted. Licence status is tracked in the live compliance
> register owned by C01.

---

## 2. Master control matrix

| # | Authority | Instrument | Obligation | Architecture component | Control mechanism |
|---|---|---|---|---|---|
| R1 | **FSCA** | FAIS s.7(1) licence categories; FSCA CASP licensing regime | Only render financial services / act as a crypto-asset service provider for licensed activities | Web3 bridge + payments engine + CBS product catalogue | Activity-to-licence mapping gate; feature-flag gating so unlicensed activities cannot run |
| R2 | **FSCA** | Regulatory reporting (RE1 / RE5 style returns) | Periodic regulatory returns on financial soundness & compliance officer fit-and-proper | Data layer (PostgreSQL) + reporting service | Scheduled extract jobs producing return data; C01 signs off |
| R3 | **FIC (FICA)** | FICA Directive 9 (Travel Rule) | Exchange originator/beneficiary information on qualifying transfers | CBS + payments engine + `TravelRulePayload` in `StremiiumTransaction` | `identityHash`, `originatorBic`, `beneficiaryBic` populated at authoring; hashes only, no raw PII |
| R4 | **FIC (FICA)** | FIC Act — CTR (cash threshold) | File Cash Threshold Reports | `complianceMetadata.ficaReportable`, `ctrReference`; `compliance.reportable` topic | Threshold rule engine emits CTR trigger → FIC reporting pipeline |
| R5 | **FIC (FICA)** | FIC Act — STR (suspicious transaction) | File Suspicious Transaction Reports; no tipping-off | Risk/fraud service + `sarReportStatus` (`DRAFT`→`SUBMITTED`→`ACKNOWLEDGED`) | Case management; state confined to compliance role (RBAC + audit) |
| R6 | **SARB FinSurv** | Exchange Control Regulations; SDA (≤ **R1m**/yr) | Enforce Single Discretionary Allowance for individuals | SWIFT path in payments engine | Pre-release allowance check on `clearingType = 'SWIFT'` |
| R7 | **SARB FinSurv** | Exchange Control Regulations; FCA (≤ **R10m**/yr) | Enforce Foreign Capital Allowance | SWIFT path in payments engine | Same gate; `exchangeControlApprovalRef` required before release |
| R8 | **SARB FinSurv** | Exchange Control reporting | Report cross-border flows to FinSurv/Authorised Dealer | Payments engine + CBS recon | Corridor reporting extracts; `railData` carries UETR & approval refs |
| R9 | **Information Regulator** | **POPIA** | Lawful processing, purpose limitation, security safeguards, data-subject rights | CBS data layer (`af-south-1`), KMS/HSM, Redis, S3 | Region pinning; encryption; `popiaLawfulBasis`; no PII on-chain; breach-notification runbook |
| R10 | **Information Regulator** | POPIA s.72 cross-border | Cross-border transfer only with adequate protection/consent | Travel-rule exchange path only | Outbound personal data limited to hashes; sub-processor register maintained |
| R11 | **NCR** | **NCA** (National Credit Act) | Affordability assessment, reckless-lending prohibition, fee caps, disclosure | CBS credit/overdraft product engine | Affordability rules in product config; NCA-compliant fee + disclosure templates; no auto-increase without assessment |
| R12 | **NGP / NGB** | **National Gambling Act** | Prediction markets / wagering require licensed-operator route; no unlicensed gambling | Prediction-markets module (product) | Feature gated behind licensed partner or licence; geo/perimeter checks; responsible-gambling controls |
| R13 | **SARS** | **CARF** (Crypto-Asset Reporting Framework, effective **March 2026**) | Collect & report crypto-asset account/txn data for tax reporting | Web3 bridge + CBS + wallet KYC | Wallet-to-identity linkage held in POPIA vault; CARF extract service; report lifecycle tracked |
| R14 | **FIC/SARS** | Record-keeping (FICA / tax) | Retain records for statutory periods | WORM audit sink + Postgres archival | Immutable `audit.worm` topic; retention policy ≥ statutory minimum |

---

## 3. Component → control reverse map

Useful for engineering reviews (which controls does a component carry?):

| Component | Controls |
|---|---|
| Web3 bridge | R1, R13, R9 (no PII on-chain), R14 |
| Payments engine | R3, R6, R7, R8, R4 |
| CBS / Mambu | R1, R3, R4, R9, R11, R14 |
| Rewards / BLT engine | R9, R13 (token value reporting) |
| Compliance service | R5, R4, R13, R8 |
| Data layer (Postgres/Redis/S3) | R2, R9, R10, R14 |
| KMS / HSM | R9, R14 (secrecy + audit) |
| Prediction-markets module | R12 |

---

## 4. Control gates in the lifecycle

```
 New product / activity
        │
        ▼
 [GATE 1] Is the activity within a licensed category? (R1) ──no──► do not enable feature flag
        │ yes
        ▼
 [GATE 2] Does it touch personal data? (R9/R10) ──yes──► POPIA lawful-basis + residency review
        │                        │ no
        ▼                        ▼
 [GATE 3] Does it move value cross-border? (R6/R7/R8)
        │ yes ──► FinSurv allowance + approval-ref gate before release
        ▼
 [GATE 4] Is it reportable? (R4/R5/R13) ──yes──► wire compliance.reportable pipeline
        ▼
 [GATE 5] Record-keeping + WORM (R14)
```

---

## 5. Data-residency & reporting wiring

- All POPIA-regulated stores are pinned to **AWS `af-south-1`** — see
  [`../core-banking/README.md`](../core-banking/README.md) §6.
- The single `compliance.reportable` Kafka topic is the fan-in for CTR, STR, CARF, and FinSurv
  reporting events, consumed by the FIC/SARS reporting pipeline.
- No control in this matrix requires a fabricated licence number: operational identifiers
  (participant codes, licence numbers, AD mandate references) live in the **live compliance
  register**, not in this architecture spec.

---

## 6. Related artefacts

- Authority hierarchy: [`south-africa-regulatory-hierarchy.md`](south-africa-regulatory-hierarchy.md)
- CBS residency: [`../core-banking/README.md`](../core-banking/README.md)
- Cross-border path: [`../payment-rails/README.md`](../payment-rails/README.md) §7
- Crypto treatment: [`../web3-bridge/README.md`](../web3-bridge/README.md)
