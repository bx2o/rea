# Tax & Governance (incl. Basel capital/liquidity and BA returns)

**As-of (access) date:** 2026-10-16 · See [`README.md`](./README.md) for the evidence legend and [`sources.md`](./sources.md) for `[S#]`.

---

# PART A — TAX

## 1. Corporate income tax

- South African companies are taxed at a flat **27%** on taxable income (years of assessment ending on/after 1 April 2025) `[S54][S60]`. **[STATUTE/rates]**
- A company is **resident** if incorporated/established/formed in SA **or** effectively managed in SA `[S53][S60]`.
- **Capital gains tax (CGT):** effective **21.6%** for companies (taxable inclusion of capital gains) `[S60 — confirm against SARS]`.
- **Provisional tax:** companies pay provisional tax in two periods (standard SARS provisional-tax regime). *Confirm current dates/thresholds with SARS* `[S53]`.

## 2. VAT

- **Standard rate: 15%**; zero rate (0%) applies to specified supplies `[S60]`. **[STATUTE/rates]**
- **Registration threshold:** a vendor must register where taxable supplies exceed the prescribed threshold (commonly **R1 million** in a 12-month period). *Confirm current threshold with SARS* `[S53][S60]`.
- **Financial services are largely exempt** under **s12(a)** of the VAT Act 89 of 1991 — interest on credit/loans/deposits, issue/transfer/redemption of shares/bonds/debentures, operation of bank accounts (subject to specific definitions). **[STATUTE]** `[S59 — secondary; verify Act text]`
- **Important nuance:** "financial services" is **narrow** — **fee-based** items (e.g. account fees, advice fees, payment-transaction fees) are typically **standard-rated** under the proviso to s2(1) `[S59 — secondary]`.
- Because a neobank makes both exempt and taxable supplies, it will need an **apportionment method** for input VAT — see **s17(1)** and SARS VAT Ruling **VR 011** (30 May 2025) on apportionment `[S59]`.

## 3. Securities Transfer Tax (STT)

- **STT is 0.25%** on the transfer of **listed or unlisted securities** (shares in companies / members' interests) `[S54]`. **[STATUTE/rates]**
- Relevant if the neobank holds or transfers securities (e.g. share purchases, custodial/brokerage activity). Combine with **JSE/Strate** membership considerations (see [`conduct-fais-nca.md`](./conduct-fais-nca.md) §8) `[S66][S67]`.

## 4. FATCA, CRS and CARF (automatic exchange of information)

- **FATCA:** South Africa has an **Intergovernmental Agreement (Model 1)** with the United States; entry into force **28 October 2014** `[S55][S60 — secondary]`.
- **CRS:** SA is a signatory to the Multilateral Competent Authority Agreement / OECD CRS, with domestic enabling legislation; **first exchange date September 2017** `[S55][S56][S60]`.
- **Who reports:** South African **Reporting Financial Institutions (RFIs)** — Custodial Institutions, **Depository Institutions (banks qualify)**, Investment Entities, and Specified Insurance Companies — must apply prescribed **due-diligence** to find **reportable accounts** and report prescribed information `[S55][S56]`. Certain entities/accounts are excluded `[S55]`.
- **Reporting spec:** SARS publishes the **AEOI Business Requirements Specification (BRS)**, version **V3.0.0-17 dated 28 Jan 2026** `[S58]`.
- **CRS 2.0 → CRS 3.0:** SARS has moved to the **CRS 3.0 specification**; CRS 2.0 submissions were **discontinued on 18 September 2026** `[S55]`.
- **CARF (Crypto-Asset Reporting Framework):** incorporated into SA domestic law, **effective 1 March 2026**. **Reporting Crypto-Asset Service Providers (R-CASPs)** with a SA nexus must collect and report crypto-asset user/transaction data; final CARF Regulations published **28 Nov 2025**, CARF BRS published **16 Feb 2026** `[S57][S71]`.
- **Revised CRS** (bringing e-money products and CBDCs into scope; indirect crypto via derivatives/investment vehicles) **commences 1 March 2026** `[S71]`.
- **Administrative penalties** apply for AEOI non-compliance `[S58]`.

> A neobank is, by definition, a **Depository Institution** for CRS/FATCA and must be onboarded to SARS AEOI from day one. If it offers crypto, it may also be an **R-CASP** under CARF `[S55][S57]`.

## 5. Tax implementation checklist

- [ ] Register for **income tax** and (if taxable supplies exceed threshold) **VAT**; design **apportionment** for mixed exempt/taxable supplies `[S53][S59]`.
- [ ] Register and onboard to **FATCA/CRS AEOI** (`[S55][S58]`) and **CARF** if crypto `[S57]`.
- [ ] Build **STT** handling for any securities transfers `[S54]`.
- [ ] Handle **withholding taxes** and reporting (interest, dividends) — *scope separately with SARS* `[S53]`.

---

# PART B — GOVERNANCE

## 6. King IV

**King IV Report on Corporate Governance** is a **voluntary, "apply-and-explain"** standard (not a statute), but it is effectively mandatory in practice for listed and financial institutions and is referenced by PA/FSCA expectations `[S70 — secondary]`. It drives board composition (majority non-executive, independent chair), committees (audit, risk, remuneration, social & ethics), and integrated reporting.

## 7. Companies Act 71 of 2008 (public company)

A bank **must be a public company** `[S1]`. Governance obligations include `[S70]`:
- **Audit committee (s94):** mandatory for public and state-owned companies; independent non-executive members; appoints/oversees external auditor; ensures integrity of financial controls.
- **Social and Ethics Committee (s72):** mandatory for public/state-owned/listed companies; reports on social & economic development, good corporate citizenship, environment/health/public safety, consumer relationships and labour/employment `[S70]`.
- **2024 amendments:** s72(7A) requires a **social and ethics committee of not less than three members**, with a majority of non-executive directors for public/state-owned companies; AGMs must include the committee's report and remuneration report `[S70 — secondary; verify commencement]`.

## 8. Basel III/IV capital & liquidity, and BA returns

- Basel III post-crisis reforms (credit risk SA/IRB, operational risk, leverage, CVA, market risk, output floor) **implemented by the PA from 1 July 2025** `[S5]`.
- Ongoing standards: **LCR** and **NSFR** for liquidity/funding; **leverage ratio** (≥4%); **CAR** (≥11.5% minimum; higher for new banks) `[S1][S5][S6]`.
- **Form BA 700** (capital adequacy and leverage) — completed per **regulation 38**, with requirements effective from **1 July 2025** `[S69]`.
- **BA returns** include **BA 100** (balance sheet), **BA 200/BA 210** (credit), **BA 700** (capital/leverage); total-bank sector data is published by the PA `[S68][S69]`.
- **Large exposure / credit committee:** Directive **D14 of 2025** establishes LEX limits and requires a board-appointed credit committee with non-executive representation to approve exposures exceeding **10% of Tier 1 capital** `[S6 — secondary; verify directive text]`.

## 9. Governance checklist

- [ ] Adopt a **King IV-aligned** board charter and committees `[S70]`.
- [ ] Constitute **audit committee (s94)** and **social & ethics committee (s72)** `[S70]`.
- [ ] Establish **Basel III/IV** capital planning, **LCR/NSFR**, leverage and stress testing `[S5]`.
- [ ] Stand up **BA-return** production (BA 100, BA 200/210, BA 700) with sign-off controls `[S68][S69]`.
- [ ] Implement a **large-exposure** framework and credit committee (D14/2025) `[S6]`.

---

## 10. Uncertainties / verification needed

- Current **VAT registration threshold** and any rate changes `[S60]`.
- Exact **CGT effective rate** and provisional-tax mechanics `[S53]`.
- Commencement status of **2024 Companies Act amendments** `[S70]`.
- Precise **BA-return** set and submission frequencies applicable to a *de novo* bank `[S68][S69]`.
- Whether D14/2025 (large exposures) applies at launch and its exact limits `[S6]`.
