# South African Regulatory Hierarchy — Authorities, Requirements, Obligations & Owners

**Program:** `SC-REA-NEOBANK-5.0` · **Task:** T7.3 · **Owner:** C01 Legal-Compliance
**Status:** `TARGET DESIGN` — reference hierarchy. **No licence numbers, registration numbers, or approvals are asserted or fabricated here.**

---

## 1. Purpose

This document orders the South African authorities and instruments that apply to a licensed
NeoBank + crypto-asset service provider + loyalty/fan-token + prediction-market operator, states what
each requires, and assigns a **Stremiium owner** (council) for the obligation.

Reading order is **structural** (who sits above whom in enforcement/supervision), not a ranking of
importance.

---

## 2. Ordered hierarchy (ASCII)

```
 ┌───────────────────────────────────────────────────────────────────────────────────────┐
 │  CONSTITUTIONAL / STATUTORY FLOOR                                                       │
 │  Constitution of the RSA · POPIA · FIC Act · National Credit Act · Financial Sector    │
 │  Regulation Act · National Gambling Act · Exchange Control Regulations · Tax Acts       │
 └───────────────────────────────────────────────────────────────────────────────────────┘
                                     │
 ┌───────────────────────────────────┼────────────────────────────────────────────────────┐
 │  PRIMARY PRUDENTIAL & MARKET CONDUCT         │  FINANCIAL INTELLIGENCE & ENFORCEMENT      │
 │  ┌───────────────────────────────────────┐   │  ┌──────────────────────────────────────┐  │
 │  │ SARB (South African Reserve Bank)      │   │  │ FIC (Financial Intelligence Centre)   │  │
 │  │  ├─ PA (Prudential Authority)          │   │  │  ├─ FICA (FIC Act obligations)        │  │
 │  │  ├─ FinSurv (Exchange Control)         │   │  │  ├─ Directive 9 (Travel Rule)         │  │
 │  │  └─ NPS (National Payment System)      │   │  │  ├─ CTR / STR reporting               │  │
 │  └───────────────────────────────────────┘   │  └──────────────────────────────────────┘  │
 │  ┌───────────────────────────────────────┐   │  ┌──────────────────────────────────────┐  │
 │  │ FSCA (Financial Sector Conduct Auth.)  │   │  │ SARS (tax authority)                  │  │
 │  │  ├─ FAIS licensing                     │   │  │  ├─ Income Tax / VAT                  │  │
 │  │  ├─ CASP licensing regime              │   │  │  └─ CARF (from March 2026)            │  │
 │  │  └─ Market conduct standards           │   │  └──────────────────────────────────────┘  │
 │  └───────────────────────────────────────┘   │                                            │
 └───────────────────────────────────────────────┴────────────────────────────────────────────┘
                                     │
 ┌───────────────────────────────────┼────────────────────────────────────────────────────┐
 │  MARKET INFRASTRUCTURE / OPERATIONAL         │  CONSUMER / DATA / SPECIALISED              │
 │  ┌───────────────────────────────────────┐   │  ┌──────────────────────────────────────┐  │
 │  │ PASA (Payments Association of SA)      │   │  │ Information Regulator (POPIA)         │  │
 │  │ BankservAfrica (clearing operator)     │   │  │ NCR (National Credit Regulator)       │  │
 │  │ SWIFT (cross-border messaging)         │   │  │ NGB / NGP (Gambling)                  │  │
 │  └───────────────────────────────────────┘   │  │ Competition Commission / B-BBEE       │  │
 │                                               │  └──────────────────────────────────────┘  │
 └───────────────────────────────────────────────┴────────────────────────────────────────────┘
```

---

## 3. Authorities and requirements

### Tier A — Primary regulators

#### 3.1 SARB — South African Reserve Bank
| Requirement | Detail | Stremiium obligation | Owner |
|---|---|---|---|
| Prudential Authority (PA) supervision | Bank/insurer prudential standards | If licensed as a bank: CAR/liquidity/NSFR reporting; else operate via sponsor bank | C10 (with C01) |
| **FinSurv** Exchange Control | SDA ≤ **R1m**/yr per individual; FCA ≤ **R10m**/yr; AD reporting | Enforce allowances before releasing cross-border payments | C01 + C16 |
| National Payment System (NPS) Act | Participation/clearing rules | Use BankservAfrica via sponsor/TPPP route | C16 |
| SAMOS RTGS | Settlement finality | Final settlement in sponsor's RTGS position | C10 + C16 |

#### 3.2 FSCA — Financial Sector Conduct Authority
| Requirement | Detail | Stremiium obligation | Owner |
|---|---|---|---|
| **FAIS s.7(1)** licensing | Categories for rendering financial services | License only the activities Stremiium performs; fit-and-proper representatives/compliance officer | C01 |
| **CASP** licensing regime | Crypto-asset service provider authorisation | Apply for CASP authorisation; gate crypto activities behind it | C01 + C13 |
| Market conduct | Treating Customers Fairly outcomes | Product design, disclosure, complaints handling | C15 + C14 |
| RE1 / RE5 reporting | Financial soundness & compliance-officer returns | Produce periodic returns from CBS data | C10 + C01 |

#### 3.3 FIC — Financial Intelligence Centre
| Requirement | Detail | Stremiium obligation | Owner |
|---|---|---|---|
| FICA (FIC Act) | Risk-based AML/CFT programme | Implement AML programme; appoint compliance officer | C01 |
| **Directive 9 — Travel Rule** | Exchange originator/beneficiary info above threshold | Populate `TravelRulePayload` on qualifying transfers | C01 + C16 |
| **CTR** | Cash threshold reports | File CTRs above threshold | C01 |
| **STR** | Suspicious transaction reports; no tipping-off | File STRs; restrict `sarReportStatus` visibility | C01 + C12 |
| Record-keeping | Retain records for statutory period | WORM audit + archival | C01 + C06 |

### Tier B — Consumer, data, specialised

#### 3.4 Information Regulator (POPIA)
| Requirement | Stremiium obligation | Owner |
|---|---|---|
| Lawful processing & purpose limitation | POPIA lawful basis per data flow; register of processing | C01 + C06 |
| Security safeguards | Encryption, access control, breach notification | C06 + C12 |
| **Data sovereignty** | Keep personal data in `af-south-1`; s.72 for cross-border | C06 + C01 |
| Data-subject rights | Access/erasure handling | C14 |

#### 3.5 NCR — National Credit Regulator (NCA)
| Requirement | Stremiium obligation | Owner |
|---|---|---|
| Affordability assessment | Assess before granting credit/overdraft | C15 + C10 |
| No reckless lending | Policy + system checks | C10 |
| Fee caps & disclosure | NCA-compliant pricing | C10 + C01 |

#### 3.6 SARS — South African Revenue Service
| Requirement | Stremiium obligation | Owner |
|---|---|---|
| Income tax / VAT | Tax compliance for the entity and products | C10 |
| **CARF** (from March 2026) | Crypto-Asset Reporting Framework: collect & report crypto-asset data | C13 + C01 |
| Data feeds | Link wallets to identities (in POPIA vault) for reporting | C13 + C01 |

#### 3.7 NGB / NGP — National Gambling Board / Provincial Gambling Authorities
| Requirement | Stremiium obligation | Owner |
|---|---|---|
| National Gambling Act | Prediction markets/wagering require licensed route | C15 + C01 |
| No unlicensed gambling | Gate the prediction-markets module behind licence/partner | C15 |
| Responsible gambling | Controls, limits, self-exclusion | C15 + C14 |

### Tier C — Market infrastructure & frameworks

| Body | Requirement | Owner |
|---|---|---|
| PASA / BankservAfrica | Clearing rules for PayShap/RTC/EFT | C16 |
| SWIFT | Messaging standards, gpi | C16 |
| Competition Commission | Merger/conduct; market inquiries | C01 |
| B-BBEE Commission | Scorecard / ownership reporting | C04 + C05 |

---

## 4. Obligation → owner quick reference

| Owner council | Primary obligations |
|---|---|
| **C01 Legal-Compliance** | FSCA/FIC/SARB/POPIA/NCA/NGB licensing & reporting; control matrix |
| **C10 Finance-IR** | Prudential returns (RE1/RE5), tax, CARF data, fee definitions |
| **C13 Web3-Finance** | CASP-scoped crypto activities, CARF collection, token compliance |
| **C16 Banking-Fintech** | FinSurv gates, BankservAfrica/NPS participation, ISO 20022 reporting |
| **C06 Engineering-Infra** | POPIA residency, encryption, HSM/KMS, WORM audit |
| **C12 Cybersecurity-Intel** | AML/CFT monitoring support, STR confidentiality, threat model |
| **C15 Product / C14 CS** | TCF outcomes, NCA disclosure, responsible gambling, data-subject rights |

---

## 5. Notes on accuracy

- Allowance figures (SDA ≤ R1m/yr, FCA ≤ R10m/yr) and the CARF effective date (March 2026) are the
  program's stated target parameters and must be re-verified against the current Exchange Control
  Regulations and SARS guidance before go-live.
- No licence, registration, or mandate number is stated in this document. All such identifiers belong
  to the **live compliance register** (C01) and are subject to the "no secrets in committed files"
  rule (program brief §9).

---

## 6. Related artefacts

- Control matrix: [`README.md`](README.md)
- Cross-border path: [`../payment-rails/README.md`](../payment-rails/README.md) §7
- Residency controls: [`../core-banking/README.md`](../core-banking/README.md) §6
