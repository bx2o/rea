# Banking Domain Glossary (C16)

**Owner:** C16 Banking-Fintech Captain · **Status:** Proposed (v0.1) · **As-of:** 2026-10-16.

The shared vocabulary of South African banking and payments, as C16 uses it. Each entry gives the term, its meaning in the SA market, and a weight tag. Regulatory definitions are cited from the research pack; where a figure is a draft instrument or secondary source it is marked `[CONFIRM]`/`[UNVERIFIED]` — **never treat these as settled law**.

> **Why a glossary matters.** A neobank team arriving from a software background will use words like "settlement", "clearing" and "collection" loosely. In a bank those words have precise, contractually and legally load-bearing meanings. This glossary is the anti-ambiguity tool.

Related: [`../../research/regulatory/payments-nps.md`](../../research/regulatory/payments-nps.md) · [`../../research/regulatory/aml-fica.md`](../../research/regulatory/aml-fica.md) · [`../../research/regulatory/banking-licensing.md`](../../research/regulatory/banking-licensing.md).

---

## 1. Payments & rails

| Term | Meaning (SA) | Weight |
|---|---|---|
| **NPS (National Payment System)** | The SA payment, clearing and settlement ecosystem, governed by the SARB under the NPS Act 78 of 1998. | `[STATUTE]` |
| **PayShap** | SARB/PSMB **low-value real-time retail** payment service (launched 13 March 2023), the first RPP output. Replaces the need for account numbers in P2P via aliases. ISO 20022. | `[FACT/INDUSTRY]` |
| **RPP (Rapid Payments Programme)** | The industry programme that delivered PayShap; the real-time retail infrastructure itself. | `[INDUSTRY]` |
| **ShapID** | A **proxy alias** (e.g. mobile number) that resolves to a bank account for PayShap payments. | `[INDUSTRY]` |
| **RTC (Real-Time Clearing)** | Real-time interbank clearing for higher-value/time-critical items; the pre-PayShap real-time rail. | `[INDUSTRY]` |
| **EFT** | Electronic Funds Transfer — batch credit/debit transfers via the clearing house. | `[INDUSTRY]` |
| **AC (Authenticated Collections)** | Debit/credit collection service using **authenticated mandates** (part of the collections rails). | `[INDUSTRY]` |
| **DebiCheck** | Electronically **authenticated debit-order mandates**: the debtor authenticates the mandate before the first collection. Mandatory direction for collections. | `[INDUSTRY]` |
| **CICO (Cash-In / Cash-Out)** | Physical cash deposit/withdrawal via agents, retailers or ATMs — inclusion-critical. | `[INDUSTRY]` |
| **PayInc (ex-BankservAfrica)** | The clearing house providing EFT/AC/RTC clearing. SARB acquired a **50% stake in Nov 2025**. | `[UNVERIFIED]` |
| **PASA (Payments Association of South Africa)** | Historically the **PSMB**, setting clearing/settlement rules; recognition being withdrawn in favour of the SARB. | `[REG-GUIDE]` |
| **PSMB (Payment System Management Body)** | The body recognised under the NPS Act to manage payment-system rules; transitioning to SARB (key milestone **11 Aug 2026**). | `[REG-GUIDE]` |
| **SARB (South African Reserve Bank)** | Central bank; manages, regulates and supervises the NPS; houses the Prudential Authority. | `[STATUTE]` |
| **ISO 20022** | The global financial messaging standard SA adopted as an NPS modernisation milestone (message families `pacs`/`pain`/`camt`). | `[INDUSTRY]` |
| **ISO 8583** | The card-transaction message standard used by card schemes. | `[INDUSTRY]` |
| **Settlement vs clearing** | *Clearing* = exchanging and reconciling payment instructions between banks; *settlement* = the final transfer of funds (at the SARB or via a sponsor). | `[INDUSTRY]` |
| **TCIB / SADC-RTGS / PAPSS / SWIFT** | Cross-border rails: SADC low-value (TCIB), SADC high-value RTGS, continental (PAPSS), global correspondent (SWIFT). Phase 2 for us. | `[INDUSTRY]` |
| **AD / ADLA** | **Authorised Dealer** (banks) / **Authorised Dealer with Limited Authority** (non-banks, designated transactions only), appointed by FinSurv for FX/exchange-control. | `[REG-GUIDE]` |
| **FinSurv** | SARB **Financial Surveillance Department** — exchange-control regulator; appoints ADs/ADLAs. | `[REG]` |
| **BIN sponsorship** | A card-scheme route where a licensed bank sponsors a non-bank issuer's BIN range (pre-licence card access). | `[INDUSTRY]` |
| **MDR (Merchant Discount Rate)** | The fee a merchant pays per card/PSP transaction; a fintech revenue line. | `[INDUSTRY]` |

---

## 2. AML / CFT / financial crime

| Term | Meaning (SA) | Weight |
|---|---|---|
| **FICA / FIC Act** | Financial Intelligence Centre Act 38 of 2001 — the core AML/CFT/CPF statute. Banks are **accountable institutions**. | `[STATUTE]` |
| **FIC** | The **Financial Intelligence Centre** — the central AML authority; institutions register and report via **goAML**. | `[STATUTE]` |
| **goAML** | The FIC's reporting system (online form, batch, or system-to-system) for registering and submitting reports. | `[STATUTE]` |
| **RMCP** | **Risk Management and Compliance Programme** — board-approved programme covering risk ID, CDD, monitoring, records and reporting. | `[STATUTE]` |
| **CDD / EDD** | Customer Due Diligence / Enhanced Due Diligence — identify and verify clients; higher risk requires EDD. | `[STATUTE]` |
| **UBO (Ultimate Beneficial Owner)** | The natural person(s) who ultimately own/control a legal entity. FICA requires tracing ownership/control; the **5%** figure is a **Companies Act/CIPC** disclosure threshold, **not** a FICA rule — do not conflate. | `[STATUTE / CONFIRM]` |
| **TFS (Targeted Financial Sanctions)** | FIC Act ss26A–26C: prohibition on making property/financial services available to UN-listed persons; a match triggers a **TPR (s28A)**. | `[STATUTE]` |
| **PEP** | Politically Exposed Person (foreign prominent public official / domestic prominent influential person) — EDD required. | `[STATUTE]` |
| **STR / SAR** | **Suspicious Transaction/Activity Report** — suspicion of ML/TF/PF or proceeds of crime; deadline **within 15 days** of awareness (excl. weekends/public holidays). | `[STATUTE]` |
| **CTR** | **Cash Threshold Report** — cash above **R49,999.99**; submit as soon as possible, **no later than 3 days**. | `[STATUTE]` |
| **TPR** | **Terrorist Property Report** — property/funds linked to a designated person; **without delay**. | `[STATUTE]` |
| **MLCO** | **Money Laundering Compliance Officer** — the senior compliance officer for FICA obligations. | `[REG-GUIDE]` |
| **POCA** | Prevention of Organised Crime Act 121 of 1998 — predicate offences, asset forfeiture. | `[STATUTE]` |
| **Travel Rule** | Crypto transfers must carry originator/beneficiary info (FIC Directive 9); **zero threshold** for CASPs (PCC 61 of 2026). | `[STATUTE/REG]` |
| **FATF** | Financial Action Task Force — SA **exited the grey list 24 Oct 2025**; supervision remains high. | `[INDUSTRY]` |
| **Mule account** | An account used to receive/onward funds for criminals; a monitoring target. | `[INDUSTRY]` |

---

## 3. Prudential, licensing & governance

| Term | Meaning (SA) | Weight |
|---|---|---|
| **Banks Act** | Banks Act 94 of 1990 — governs the business of a bank; **s12** authorisation → **s16** registration (within 12 months). | `[STATUTE]` |
| **PA (Prudential Authority)** | The prudential regulator inside the SARB (Twin Peaks); licensing, capital, BA returns. | `[STATUTE]` |
| **FSCA** | Financial Sector Conduct Authority — the **market-conduct** regulator (Twin Peaks peak two). | `[STATUTE]` |
| **Twin Peaks** | The dual-regulator model (PA prudential + FSCA conduct) from the FSRA 9 of 2017. | `[STATUTE]` |
| **COFI Bill** | Conduct of Financial Institutions Bill — the second leg of Twin Peaks; **still a Bill** as at early 2026. | `[CONSULT]` |
| **Business of a bank** | Accepting deposits from the general public as a regular feature of business; doing so **without registration is a criminal offence**. | `[STATUTE]` |
| **CAR (Capital Adequacy Ratio)** | Minimum **≥ 11.5%**; the PA may impose higher for new banks. | `[REG-GUIDE]` |
| **Leverage ratio** | Minimum **≥ 4%**. | `[REG-GUIDE]` |
| **LCR / NSFR** | Basel III liquidity standards (Liquidity Coverage Ratio / Net Stable Funding Ratio); HQLA held in SA. | `[REG]` |
| **HQLA** | High-Quality Liquid Assets — the buffer held against liquidity stress. | `[REG]` |
| **Basel III/IV** | Post-crisis capital/liquidity reforms **implemented by the PA from 1 July 2025**. | `[REG]` |
| **D14 of 2025** | Directive on **large exposures** (LEX) and board credit-committee governance (>10% of Tier 1 requires board approval). | `[CONFIRM]` |
| **King IV** | Voluntary **"apply-and-explain"** corporate-governance code, effectively expected of financial institutions. | `[INDUSTRY]` |
| **Audit committee (s94) / Social & Ethics committee (s72)** | Mandatory Companies Act committees for a public company. | `[STATUTE]` |
| **Controlling company** | Only a bank or PA-approved public company may control a bank; must register (Banks Act **s42**). | `[STATUTE]` |

---

## 4. Reporting, tax & data

| Term | Meaning (SA) | Weight |
|---|---|---|
| **BA returns** | Statutory prudential returns to the PA: **BA 100** (balance sheet), **BA 200/BA 210** (credit), **BA 700** (capital & leverage). | `[REG]` |
| **BAS** | **Bank Analysis System** — the SARB/PA system used for banking supervision data and BA-return submission. | `[REG-GUIDE]` |
| **Pillar III** | Basel public-disclosure requirements (capital, risk, liquidity). | `[REG]` |
| **AEOI** | Automatic Exchange of Information — SA reporting under **FATCA** (US) and **CRS** (OECD); banks are **Depository Institutions**. | `[STATUTE]` |
| **CRS / CRS 3.0** | Common Reporting Standard; SARS moved to **CRS 3.0** (CRS 2.0 discontinued 18 Sep 2026). | `[REG]` |
| **CARF** | Crypto-Asset Reporting Framework — SA effective **1 March 2026** for Reporting CASPs. | `[REG]` |
| **FATCA** | US foreign-account tax reporting (SA IGA Model 1, in force 28 Oct 2014). | `[STATUTE]` |
| **STT** | Securities Transfer Tax — **0.25%** on transfer of listed/unlisted securities. | `[STATUTE]` |
| **CGT** | Capital Gains Tax — effective **21.6%** for companies. | `[REG-GUIDE]` |
| **Corporate income tax / VAT** | **27%** / standard **15%**; financial services largely exempt under VAT Act s12(a), fee-based items typically standard-rated. | `[STATUTE]` |
| **IT3 certificates** | SARS tax certificates issued to customers for interest or other reportable income. | `[REG]` |

---

## 5. Conduct, credit & consumer

| Term | Meaning (SA) | Weight |
|---|---|---|
| **FAIS** | Financial Advisory and Intermediary Services Act 37 of 2002 — advice/intermediary licensing (**FSP** Cat I–IV). | `[STATUTE]` |
| **FSP** | Financial Services Provider — a FAIS-licensed entity (the licence number is quoted on disclosure docs). | `[REG]` |
| **NCA** | National Credit Act 34 of 2005 — consumer credit; **affordability assessment** required; register with the **NCR**. | `[STATUTE]` |
| **NCR** | National Credit Regulator — credit-provider registration and supervision. | `[STATUTE]` |
| **CODI / deposit insurance** | **Corporation for Deposit Insurance** — depositor protection scheme; cover commonly quoted at **R100,000** per depositor. `[CONFIRM]` | `[REG / CONFIRM]` |
| **CPA** | Consumer Protection Act 68 of 2008 — consumer rights, disclosure, complaints. | `[STATUTE]` |
| **Code of Banking Practice** | Industry conduct code (2025 edition) — application to banks. | `[INDUSTRY]` |
| **NFO** | National Financial Ombud — consolidated ombud scheme for complaints. | `[INDUSTRY]` |
| **POPIA** | Protection of Personal Information Act 4 of 2013 — data-protection statute; Information Officer (s55), breach notification (s22). | `[STATUTE]` |
| **PAIA** | Promotion of Access to Information Act 2 of 2000 — access to records; annual report 1 Apr–30 Jun. | `[STATUTE]` |
| **APP fraud** | **Authorised Push Payment** fraud — a customer is tricked into authorising a real payment. | `[INDUSTRY]` |
| **BEC** | Business Email Compromise — invoice/CEO fraud targeting businesses. | `[INDUSTRY]` |
| **SIM-swap / ATO** | Fraud via SIM takeover or account takeover — an SA-specific defence priority. | `[INDUSTRY]` |

---

## 6. How to use this glossary

- **Code comments, tickets and specs should use these terms precisely** — e.g. "clearing advice" ≠ "settlement", "CDD" ≠ "KYC profile".
- Where a term carries a **legal deadline or threshold**, the code must reference the research source, not a remembered number.
- **`[CONFIRM]` terms** (CODI cover, D14/2025 limits, the 5% UBO threshold) must be re-verified before they are hard-coded.

---

## 7. Open items / unknowns

- `[CONFIRM]` CODI deposit-insurance coverage limit and any change to the scheme.
- `[CONFIRM]` Whether D14/2025 large-exposure limits apply to a *de novo* bank at launch.
- `[UNVERIFIED]` Final non-bank payment framework categories and capital tiers.
- `[UNKNOWN]` NPS Bill (replacing the 1998 Act) timing and its vocabulary changes.

_Codename `Project Umoya` is a working label only._
