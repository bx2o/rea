---
bank: "Standard Bank"
council: "C16"
department: "banking"
status: "partial"
confidence: "medium"
sources:
  - "https://paymentbrief.com/markets/south-africa/"
  - "https://developer.eftcorp.com/docs/payshap-use-cases"
  - "https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/domestic-settlement-services-samos/related-documents/SAMOS%20institution%20as%20at%20September%202022.pdf"
  - "https://careers.standardbank.com/sbg/standard-bank-group/newsroom/news-and-insights/our-modern-scaled-payments-infrastructure-is-driving-growth"
  - "https://careers.standardbank.com/static_file/Investor%20Relations/CMD_2026/downloadable%20files/Technology_AI-&-payments.pdf"
  - "https://www.standardbank.com/static_file/StandardBankGroup/filedownloads/RTS/2025/SBSA_AnnualReport2025.pdf"
  - "https://www.standardbank.com/sbg/standard-bank-group/investor-relations/financial-highlights"
last_updated: "2026-10-16"
---

# Standard Bank — Banking Rails & Payment Infrastructure

> The Standard Bank of South Africa (SBSA) is a **settlement bank** and one of the SA majors on all
> national rails; the group runs domestic + cross-border payment platforms through OneHub.

## 1. National payment rails (South Africa)

| Rail | Operator | Standard Bank role | Source |
|---|---|---|---|
| **PayShap** (instant A2A, launched 13 Mar 2023) | PayInc (formerly BankservAfrica) / SARB co-owns 50% since Nov 2025 | **Participant** (send + receive); SBSA acts as **sponsoring bank** for third-party PayShap access (e.g. Eclipse gateway `ZA_SBSA_PAYSHAP`) | [Payment Brief](https://paymentbrief.com/markets/south-africa/), [EFT Corp PayShap](https://developer.eftcorp.com/docs/payshap-use-cases) |
| **EFT / EFT credit** | BankservAfrica / PayInc | Participant | [SBSA Annual Report 2025](https://www.standardbank.com/static_file/StandardBankGroup/filedownloads/RTS/2025/SBSA_AnnualReport2025.pdf) |
| **RTGS — SAMOS** | SARB | **Designated settlement bank** (listed as "The Standard Bank of South Africa Limited") | [SARB SAMOS institutions](https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/domestic-settlement-services-samos/related-documents/SAMOS%20institution%20as%20at%20September%202022.pdf) |
| **Card (Visa/Mastercard)** | Schemes | Issuer + acquirer | [SBG Financial highlights](https://www.standardbank.com/sbg/standard-bank-group/investor-relations/financial-highlights) |
| **RTC / legacy real-time clearing** | BankservAfrica | Participant `[INF]` (all majors are RTC participants) | `[INF]` |

- **PayShap** is SA's instant A2A rail (launched 13 March 2023 by BankservAfrica, since renamed **PayInc**; SARB co-owns 50% from Nov 2025); beneficiaries identified by **ShapID**. `[OBS]` [Payment Brief](https://paymentbrief.com/markets/south-africa/)
- **SAMOS** is the SARB-owned **real-time gross settlement (RTGS)** system (live since 9 March 1998) settling high-value and retail batches; SBSA is a settlement bank. `[OBS]` [SARB](https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/domestic-settlement-services-samos/related-documents/SAMOS%20institution%20as%20at%20September%202022.pdf)

## 2. Payments scale & cross-border rails

- Standard Bank processed **>R164 trillion** in payments in 2025 (**>R300 million per minute**). `[OBS]` [Standard Bank newsroom](https://careers.standardbank.com/sbg/standard-bank-group/newsroom/news-and-insights/our-modern-scaled-payments-infrastructure-is-driving-growth)
- **Cross-border expansion:** immediate-payment rails across **13 markets**; **real-time cross-border B2B settlement within the Standard Bank network**; strategic focus on **tokenised deposits, stablecoins, digital-asset custody**. `[OBS]` [CMD 2026 — Technology, AI & Payments](https://careers.standardbank.com/static_file/Investor%20Relations/CMD_2026/downloadable%20files/Technology_AI-&-payments.pdf)
- **CIPS (China corridor):** first African bank to connect clients directly to the Africa–Asia corridor via CIPS, processing **R9.5 bn** since launch. `[UNVERIFIED]` [Standard Bank newsroom](https://careers.standardbank.com/sbg/standard-bank-group/newsroom/news-and-insights/our-modern-scaled-payments-infrastructure-is-driving-growth)

## 3. Channels / money-movement instruments

- **Standard Bank App** (Google Play ~4.68, ~480k ratings) — see `technology/50-tech-stack.md`.
- **OneHub** — corporate/CIB digital B2B platform: single sign-on gateway to financial, transactional and risk-management solutions. `[OBS]` [OneHub Better Banking](https://corporateandinvestment.standardbank.com/cib/global/products-and-services/onehub/better-banking)
- **Instant Money** and card/account payments (see `products/30-products-pricing.md`).

## 4. Access network

- **SBSA (SA operations), Dec 2025:** **3,470 ATMs**, **509 branches**, **156 kiosks / other access points**. `[OBS]` [SBSA Annual Report 2025](https://www.standardbank.com/static_file/StandardBankGroup/filedownloads/RTS/2025/SBSA_AnnualReport2025.pdf)
- **Group footprint (Africa):** **>1,200 branches / points of representation** and **>5,500–5,600 ATMs** across the continent. `[OBS]` [SBG Fact Sheet](https://www.standardbank.com/sbg/standard-bank-group/investor-relations/financial-highlights)
- Cross-check (third-party): SBSA branches/ATMs trend 2024: 484/3,472 → 2025: 491/3,448 → 2026: 516/3,496. `[UNVERIFIED]` (differs marginally from the annual report's Dec-2025 figures) [MyBroadband](https://mybroadband.co.za/news/banking/662369-biggest-bank-in-south-africa-opening-branches-and-launching-atms.html)

## 5. Interchange & economics

- `[INF]` Standard Bank earns **card interchange** (issuing) and **merchant-acquiring fees**; these flow through **non-interest revenue** (R63,710 m FY2025). `[DER]` from [SBG results booklet](https://www.standardbank.com/static_file/StandardBankGroup/filedownloads/RTS/2025/SBSA_AnnualReport2025.pdf)
- `[UNK]` Specific interchange rates are scheme/contract-specific and not published.
- `[UNK]` SBSA's SAMOS member number and PayShap transaction limits.

## 6. Gaps

- Legacy **RTC** participation status explicitly published `[UNK]` (inferred `[INF]`).
- Exact PayShap volumes/values by bank `[UNK]`.
- Card-scheme mix (Visa vs Mastercard share) `[UNK]`.

## Sources

- [Payment Brief — South Africa Payments (PayShap/PayInc)](https://paymentbrief.com/markets/south-africa/)
- [EFT Corp — PayShap use cases (SBSA sponsoring bank)](https://developer.eftcorp.com/docs/payshap-use-cases)
- [SARB — SAMOS settlement institutions](https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/domestic-settlement-services-samos/related-documents/SAMOS%20institution%20as%20at%20September%202022.pdf)
- [Standard Bank — modern, scaled payments infrastructure](https://careers.standardbank.com/sbg/standard-bank-group/newsroom/news-and-insights/our-modern-scaled-payments-infrastructure-is-driving-growth)
- [Standard Bank CMD 2026 — Technology, AI & Payments](https://careers.standardbank.com/static_file/Investor%20Relations/CMD_2026/downloadable%20files/Technology_AI-&-payments.pdf)
- [SBSA Annual Report 2025 (network, access points)](https://www.standardbank.com/static_file/StandardBankGroup/filedownloads/RTS/2025/SBSA_AnnualReport2025.pdf)
- [SBG Financial highlights (group footprint)](https://www.standardbank.com/sbg/standard-bank-group/investor-relations/financial-highlights)
- [OneHub Better Banking (CIB platform)](https://corporateandinvestment.standardbank.com/cib/global/products-and-services/onehub/better-banking)
- [MyBroadband — SBSA branches/ATMs trend](https://mybroadband.co.za/news/banking/662369-biggest-bank-in-south-africa-opening-branches-and-launching-atms.html)
