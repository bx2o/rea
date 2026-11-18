---
bank: "ABSA (Absa Group Limited)"
council: "C16"
department: "banking"
status: "partial"
confidence: "medium"
sources:
  - "https://cib.absa.africa/wp-content/uploads/2019/10/ABSA-CIB-Instant-Payments-an-African-Market-Snapshot.pdf"
  - "https://www.resbank.co.za/content/dam/sarb/publications/media-releases/2024/npsd---payments-report/Digital%20Payments%20Roadmap%20Report.pdf"
  - "https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight-and-supervision/document-for-comments/Interchange%20policy%20paper_Publication%20version.pdf"
  - "https://www.absa.co.za/content/dam/south-africa/absa/pdf/business/make-and-receive/merchant-solutions-brochure.pdf"
last_updated: "2026-10-16"
---

# Absa — Banking Rails (Payments & Interchange)

## 1. Real-time / instant payments
- **PayShap** — South Africa's core instant payment rail, launched by the SARB in **March 2023**; **Absa was among the first banks to integrate PayShap** into its mobile app and API channel. [OBS] ([Absa CIB — Instant Payments snapshot](https://cib.absa.africa/wp-content/uploads/2019/10/ABSA-CIB-Instant-Payments-an-African-Market-Snapshot.pdf))
- Absa is releasing **Request to Pay**, leveraging PayShap's instant rails (client sends a payment request; counterparty accepts → real-time payment). [OBS] (same)
- **PayShap participants (SARB roadmap):** FNB, **Absa**, Nedbank, Standard Bank, Discovery Bank, Capitec, TymeBank, Investec, Sasfin. [OBS] ([SARB Digital Payments Roadmap](https://www.resbank.co.za/content/dam/sarb/publications/media-releases/2024/npsd---payments-report/Digital%20Payments%20Roadmap%20Report.pdf))
- Absa's app supports **PayShap payments** (listed among everyday-banking features). [OBS] ([2025 pricing guide](https://www.absa.co.za/content/dam/south-africa/absa/pdf/pricing-brochure/2025/benefits-and-pricing-everyday-banking-other-products.pdf))

## 2. Rail taxonomy used by Absa
| Rail | Description | Absa role | Tag |
|---|---|---|---|
| **PayShap** | Instant A2A rail (BankservAfrica/PayInc, SARB mandate); ShapID via mobile number/handle; 24/7/365, sub-seconds | Issuer/acquirer participant (first cohort) | [OBS] |
| **RTC (Real-Time Clearing)** | Legacy low-value real-time EFT rail (pre-PayShap) | Participant | [INF] |
| **EFT / interbank payments** | Batch clearing | Participant | [OBS] |
| **CashSend** | Cardless cash transfer | Provider | [OBS] |
| **Card** | Visa/Mastercard four-party schemes; Amex in SA (Nedbank is exclusive Amex issuer/acquirer) | Issuer + largest merchant acquirer in Africa | [OBS] |

## 3. Interchange & card scheme economics
- **Four-party card schemes** (Visa, Mastercard) operate with issuing and acquiring participants; the "honour all cards" rule applies. [OBS] ([SARB Interchange policy paper](https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight-and-supervision/document-for-comments/Interchange%20policy%20paper_Publication%20version.pdf))
- `[OBS]` **American Express in South Africa operates under the Nedbank Limited licence** — Nedbank is the exclusive Amex issuer and acquirer locally (relevant competitor contrast for Absa). ([SARB domestic scheme feasibility paper](https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight-and-supervision/document-for-comments/Domestic%20scheme%20feasibility%20paper%20-%20version%20sent%20to%20stakeholders%20-%201%20March%202021.pdf))
- `[OBS]` Absa states it is the **largest merchant acquirer in Africa (2024 Nilson Report)** — a strong interchange/acquiring revenue position. ([Absa merchant solutions](https://www.absa.co.za/content/dam/south-africa/absa/pdf/business/make-and-receive/merchant-solutions-brochure.pdf))
- `[OBS]` Absa offers POS, online payment gateways and contactless acceptance across business segments. (same)
- `[INF]` The SARB has considered a **domestic card scheme** to reduce reliance on international schemes — a policy development that could reshape interchange economics for Absa's acquiring franchise.

## 4. Payment volumes (context)
- `[OBS]` PayShap processed ~74.2 million transactions in its first ~20 months post-launch (sector-wide). ([Mordor Intelligence](https://www.mordorintelligence.ar/industry-reports/south-africa-real-time-payments-market))
- `[UNK]` Absa-specific PayShap/RTC transaction volumes are not published.

## 5. Gaps
- `[UNK]` Absa's exact interchange schedule and acquiring merchant-fee matrix.
- `[UNK]` Absa core-ledger transaction throughput (undisclosed).

## Sources
- [Absa CIB — Instant Payments: an African market snapshot](https://cib.absa.africa/wp-content/uploads/2019/10/ABSA-CIB-Instant-Payments-an-African-Market-Snapshot.pdf)
- [SARB — Digital Payments Roadmap Report](https://www.resbank.co.za/content/dam/sarb/publications/media-releases/2024/npsd---payments-report/Digital%20Payments%20Roadmap%20Report.pdf)
- [SARB — Interchange policy paper](https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight-and-supervision/document-for-comments/Interchange%20policy%20paper_Publication%20version.pdf)
- [SARB — Domestic card scheme feasibility paper](https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight-and-supervision/document-for-comments/Domestic%20scheme%20feasibility%20paper%20-%20version%20sent%20to%20stakeholders%20-%201%20March%202021.pdf)
- [Absa merchant solutions brochure](https://www.absa.co.za/content/dam/south-africa/absa/pdf/business/make-and-receive/merchant-solutions-brochure.pdf)
- [Absa 2025 Pricing Guide — other products](https://www.absa.co.za/content/dam/south-africa/absa/pdf/pricing-brochure/2025/benefits-and-pricing-everyday-banking-other-products.pdf)
