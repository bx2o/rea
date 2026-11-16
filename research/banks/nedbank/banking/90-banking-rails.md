---
bank: "Nedbank (Nedbank Group Limited)"
council: "C16"
department: "banking"
status: "partial"
confidence: "medium"
sources:
  - "https://www.resbank.co.za/content/dam/sarb/publications/media-releases/2024/npsd---payments-report/Digital%20Payments%20Roadmap%20Report.pdf"
  - "https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight-and-supervision/document-for-comments/Interchange%20policy%20paper_Publication%20version.pdf"
  - "https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight-and-supervision/document-for-comments/Domestic%20scheme%20feasibility%20paper%20-%20version%20sent%20to%20stakeholders%20-%201%20March%202021.pdf"
  - "https://paymentbrief.com/markets/south-africa/"
last_updated: "2026-10-16"
---

# Nedbank — Banking Rails (Payments & Interchange)

## 1. Real-time / instant payments
- **PayShap** — launched **13 March 2023** by BankservAfrica (now **PayInc**) under a SARB mandate; instant A2A rail; beneficiaries identified by **ShapID** (mobile number/handle); runs 24/7/365 with sub-second settlement. [OBS] ([PaymentBrief](https://paymentbrief.com/markets/south-africa/))
- **Nedbank was in the initial PayShap cohort** (March 2023), alongside FNB, Standard Bank and Absa. [OBS] ([Wallet docs — PayShap QR](https://barcoder.lumiverse.hr/docs/standards/payshap-qr))
- `[OBS]` SARB roadmap lists nine participating banks incl. Nedbank; volumes initially low with pricing above inclusion expectations; request-to-pay feature anticipated. ([SARB Digital Payments Roadmap](https://www.resbank.co.za/content/dam/sarb/publications/media-releases/2024/npsd---payments-report/Digital%20Payments%20Roadmap%20Report.pdf))
- `[OBS]` PayShap processed ~74.2m transactions in the first ~20 months (sector-wide). ([Mordor Intelligence](https://www.mordorintelligence.ar/industry-reports/south-africa-real-time-payments-market))

## 2. Rail taxonomy used by Nedbank
| Rail | Description | Nedbank role | Tag |
|---|---|---|---|
| **PayShap** | Instant A2A rail (PayInc/BankservAfrica; ShapID) | Initial-cohort participant | [OBS] |
| **RTC (Real-Time Clearing)** | Legacy low-value real-time EFT rail (pre-PayShap) | Participant | [INF] |
| **EFT / interbank** | Batch clearing | Participant | [OBS] |
| **Card — Visa/Mastercard** | Four-party open schemes | Issuer + acquirer | [OBS] |
| **Card — American Express** | Closed scheme (Nedbank licence) | **Exclusive issuer AND acquirer in SA** | [OBS] |
| **Merchant payments (iKhokha)** | SME POS/mobile acceptance | Owner (via 2025 acquisition) | [OBS] |

## 3. Interchange & card scheme economics
- `[OBS]` **American Express operates in South Africa under the Nedbank Limited licence** — Nedbank is the **exclusive issuer and acquirer** of Amex locally; Amex signs up merchants and charges per transaction (no annual/monthly merchant fee). ([SARB domestic scheme feasibility paper](https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight-and-supervision/document-for-comments/Domestic%20scheme%20feasibility%20paper%20-%20version%20sent%20to%20stakeholders%20-%201%20March%202021.pdf))
- `[OBS]` Four-party schemes (Mastercard, Visa) enable multiple issuers/acquirers on one network; the "honour all cards" rule applies. ([SARB Interchange policy paper](https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight-and-supervision/document-for-comments/Interchange%20policy%20paper_Publication%20version.pdf))
- `[INF]` Nedbank's **Amex exclusivity** and **Greenbacks-Amex higher earn rate** are a deliberate interchange + loyalty differentiation vs the Visa/Mastercard-dominated peers — a structurally different card economics profile.
- `[INF]` The SARB's exploration of a **domestic card scheme** could reduce the economics of Nedbank's Amex exclusivity over the long term.

## 4. Merchant acquiring & digital payments
- `[OBS]` iKhokha enables merchants (incl. spaza shops) to accept card/mobile payments; Nedbank frames the deal as expansion of **merchant services** and SME value creation. ([Daily News Egypt](https://africa.dailynewsegypt.com/south-africas-banks-retreat-from-atms-as-digital-payments-reshape-cash-market/), [Dealmakers SA](https://www.dealmakerssouthafrica.com/_files/ugd/cf215e_99d2f1cf1b674eec946f4cb79a6af6bc.pdf))
- `[OBS]` Nedbank is reducing its ATM footprint as digital payments grow. ([Daily News Egypt](https://africa.dailynewsegypt.com/south-africas-banks-retreat-from-atms-as-digital-payments-reshape-cash-market/))
- `[OBS]` Payment-modernisation goal: a "fully interoperable enterprise payment service hub." ([Nedbank 2024 results booklet](https://personal.nedbank.co.za/content/dam/group/pdf/20_financial-results/2024/annual-results/2024-annual-results-booklet-double-page-nedbank.pdf))

## 5. Gaps
- `[UNK]` Nedbank-specific PayShap/RTC volumes and interchange schedule.
- `[UNK]` Core-ledger transaction throughput (the "50m/day" figure is third-party `[UNVERIFIED]`).

## Sources
- [SARB — Digital Payments Roadmap Report](https://www.resbank.co.za/content/dam/sarb/publications/media-releases/2024/npsd---payments-report/Digital%20Payments%20Roadmap%20Report.pdf)
- [SARB — Interchange policy paper](https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight-and-supervision/document-for-comments/Interchange%20policy%20paper_Publication%20version.pdf)
- [SARB — Domestic card scheme feasibility paper](https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight-and-supervision/document-for-comments/Domestic%20scheme%20feasibility%20paper%20-%20version%20sent%20to%20stakeholders%20-%201%20March%202021.pdf)
- [PaymentBrief — South Africa payments](https://paymentbrief.com/markets/south-africa/)
- [Wallet docs — PayShap QR](https://barcoder.lumiverse.hr/docs/standards/payshap-qr)
- [Daily News Egypt — SA banks retreat from ATMs](https://africa.dailynewsegypt.com/south-africas-banks-retreat-from-atms-as-digital-payments-reshape-cash-market/)
- [Nedbank 2024 Annual Results booklet (payments hub)](https://personal.nedbank.co.za/content/dam/group/pdf/20_financial-results/2024/annual-results/2024-annual-results-booklet-double-page-nedbank.pdf)
