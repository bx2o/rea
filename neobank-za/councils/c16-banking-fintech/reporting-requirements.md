# Reporting Requirements (C16)

**Owner:** C16 Banking-Fintech Captain · **Contributors:** C10 (finance truth), C01 (FICA/POPIA), C11 (pipelines) · **Status:** Proposed (v0.1) · **As-of:** 2026-10-16.

The statutory and supervisory reports the bank must produce, to whom, by when, and who owns them. This is the **banking-and-payments view** of reporting; the finance-reporting detail and general-ledger truth live with C10, and the AML obligations with C01. Figures and deadlines are cited from the research pack — where a deadline is not stated in the primary statute it is marked `[CONFIRM]`.

Related: [`../../research/regulatory/tax-governance.md`](../../research/regulatory/tax-governance.md) §8 · [`../../research/regulatory/aml-fica.md`](../../research/regulatory/aml-fica.md) §3.4 · [`../../architecture/data/analytics-and-reporting.md`](../../architecture/data/analytics-and-reporting.md) (BC13).

---

## 1. Prudential / supervisory returns (PA / SARB)

| Report | Purpose | Regulator | Frequency | Weight |
|---|---|---|---|---|
| **BA 100** | Balance sheet / statement of financial position | PA | Periodic `[CONFIRM]` | `[REG]` |
| **BA 200 / BA 210** | Credit-risk / capital-related credit returns | PA | Periodic `[CONFIRM]` | `[REG]` |
| **BA 700** | Capital adequacy and leverage (per regulation 38; effective 1 Jul 2025) | PA | Periodic `[CONFIRM]` | `[REG]` |
| **LCR / NSFR returns** | Liquidity coverage / net stable funding | PA | Periodic | `[REG]` |
| **Large-exposure reporting** | Exposures >10% Tier 1 (D14/2025) | PA | On trigger | `[REG]` |
| **Pillar III disclosures** | Public capital/risk/liquidity disclosure | Public | Periodic | `[REG]` |
| **Stress-testing submissions** | Capital resilience under stress | PA | Periodic | `[REG-GUIDE]` |

> **`[CONFIRM]`:** the precise BA-return set, submission frequencies and the applicable **BAS** (Bank Analysis System) channel for a *de novo* bank must be confirmed with the PA ([`../../research/regulatory/tax-governance.md`](../../research/regulatory/tax-governance.md) §10).

---

## 2. Financial-crime reporting (FIC / goAML)

| Report | Trigger | Deadline | Weight |
|---|---|---|---|
| **CTR (Cash Threshold Report)** | Cash received/paid **> R49,999.99** | As soon as possible, **no later than 3 days** | `[STATUTE]` |
| **STR/SAR (Suspicious Transaction/Activity Report)** | Suspicion of ML/TF/PF or proceeds of crime | **within 15 days** of awareness (excl. weekends/public holidays) | `[STATUTE]` |
| **TPR (Terrorist Property Report)** | Property/funds linked to a designated person/entity | **Without delay** | `[STATUTE]` |
| **Cross-border / conveyance reports** | Physical cross-border movement of cash instruments | Per the Act | `[STATUTE]` |
| **TFS screening records** | Continuous screening (ss26A–26C) | Ongoing | `[STATUTE]` |

**Submission:** all via the FIC's **goAML** system (online form, batch, or system-to-system — `[UNVERIFIED]` for our integration). Registration as an accountable institution on goAML is a prerequisite ([`../../research/regulatory/aml-fica.md`](../../research/regulatory/aml-fica.md) §2).

**Integration principle:** the **reporting pipeline is a first-class service** (`Regulatory Reporting Service`, BC13), not an ad-hoc export. FIC reporting is owned by C01 (MLCO); C16 provides the banking context and C11 builds the pipeline.

---

## 3. Tax reporting (SARS)

| Report | Purpose | Authority | Frequency | Weight |
|---|---|---|---|---|
| **AEOI — FATCA** | US-account reporting (IGA Model 1) | SARS | Annual | `[STATUTE]` |
| **AEOI — CRS (CRS 3.0)** | OECD common reporting (CRS 2.0 discontinued 18 Sep 2026) | SARS | Annual | `[REG]` |
| **CARF** | Crypto-asset reporting (effective 1 Mar 2026) | SARS | Annual | `[REG]` |
| **IT3 certificates** | Customer tax certificates (e.g. interest) | SARS | Annual | `[REG]` |
| **Income tax / VAT / STT returns** | Corporate tax, VAT (apportioned), securities transfer tax | SARS | Statutory cycles | `[STATUTE]` |
| **Provisional tax** | Two-period provisional tax | SARS | Bi-annual `[CONFIRM]` | `[STATUTE]` |

> A bank is a **Depository Institution** for AEOI from day one ([`../../research/regulatory/tax-governance.md`](../../research/regulatory/tax-governance.md) §4). The AEOI **BRS** version (V3.0.0-17, 28 Jan 2026) governs the file spec.

---

## 4. Deposit insurance & scheme reporting (CODI)

| Report | Purpose | Body | Frequency | Weight |
|---|---|---|---|---|
| **Covered-depositor reporting** | Data for the deposit-insurance scheme (CODI) | CODI | Periodic `[CONFIRM]` | `[REG]` |
| **Depositor eligibility data** | Identify covered depositors up to the coverage limit (commonly **R100,000** `[CONFIRM]`) | CODI | Periodic | `[REG]` |

> The exact CODI reporting obligations, file formats and timelines for a new bank are **`[CONFIRM]`** and must be validated with CODI and the PA.

---

## 5. Conduct, privacy & access reporting

| Report | Purpose | Body | Frequency | Weight |
|---|---|---|---|---|
| **PAIA annual report** | Access-to-information report | Information Regulator | 1 Apr – 30 Jun (annual) | `[STATUTE]` |
| **POPIA breach notification** | Notify Regulator + subjects of a security compromise | Information Regulator | As soon as reasonably possible | `[STATUTE]` |
| **FSCA conduct returns** | Conduct/FAIS reporting (if FSP-licensed) | FSCA | Per licence | `[REG]` |
| **Complaint/ombud reporting** | Complaint volumes/handling (per Code; NFO) | NFO / internal | Per requirement | `[INDUSTRY]` |

---

## 6. Reporting architecture & ownership

| Layer | Owner | Note |
|---|---|---|
| Source of truth (ledger) | C11 (BC5) | Immutable; the basis for all financial reporting |
| Finance truth / GL close | C10 | Owns the general-ledger truth and BA-return sign-off |
| Reporting pipelines (BC13) | C11 (build) / C10 (truth) | `Regulatory Reporting Service`, `BAReturnGenerated`, `AEOISubmitted` |
| AML/FIC reporting | C01 (MLCO) | goAML submissions, STR decisions |
| Data platform (BC14) | C11/C06 | Read-only feed from core ([`bounded-contexts`](../../architecture/system-design/bounded-contexts.md) §BC14) |

**Controls:** each report has a **named owner**, a **submission control** (maker-checker), and **retained evidence** of submission (timestamp + reference). Reports are only as good as the data lineage behind them ([`../../architecture/data/analytics-and-reporting.md`](../../architecture/data/analytics-and-reporting.md)).

---

## 7. Metrics & verification

| Metric | Target | Weight |
|---|---|---|
| Reports submitted by deadline | 100% | `[TARGET]` |
| Reports with sign-off evidence | 100% | `[TARGET]` |
| FIC reports within statutory deadline | 100% | `[TARGET]` |
| Reconciliation breaks at period close | 0 (or explained) | `[TARGET]` |
| AEOI/BA file validation pass rate | 100% | `[TARGET]` |

---

## 8. Open items / unknowns

- `[CONFIRM]` Exact **BA-return set, frequency and BAS channel** for a *de novo* bank ([`../../research/regulatory/tax-governance.md`](../../research/regulatory/tax-governance.md) §10).
- `[CONFIRM]` **CODI** reporting scope, format and coverage limit.
- `[UNVERIFIED]` goAML system-to-system integration model.
- `[CONFIRM]` FICA record-retention period (commonly ≥ 5 years).
- `[UNKNOWN]` Whether the model is an **R-CASP** under CARF (crypto scope).

_Codename `Project Umoya` is a working label only._
