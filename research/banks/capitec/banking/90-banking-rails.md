---
bank: "Capitec"
council: "C16"
department: "banking"
status: "verified"
confidence: "medium"
sources:
  - "https://www.capitecbank.co.za/personal/transact/payshap"
  - "https://www.capitecbank.co.za/blog/articles/best-way-to-bank/how-to-use-our-instant-payment-tools/"
  - "https://www.resbank.co.za/content/dam/sarb/publications/media-releases/2023/payshap-/Press%20release%20on%20the%20launch%20of%20Payshap%20-%20a%20digital%20payment%20service.pdf"
  - "https://stitch.money/blog/real-time-payments-in-south-africa-the-state-of-payshap-in-2026"
last_updated: "2026-10-16"
---

# Capitec — Banking Rails & Payment Infrastructure

## 1. Domestic real-time rails

| Rail | Status | Detail | Tag |
|---|---|---|---|
| **PayShap** | Live | Instant A2A (RTC-based), ShapID alias; payments up to R100 free at Capitec | [OBS] |
| **RTC / Immediate payments** | Live | Instant transfers to any SA bank; R6 fee | [OBS] |
| **EFT** | Live | Standard batch payments; R2 to other banks | [OBS] |
| **Capitec Pay** | Live | Open-banking A2A, pay-by-cellphone, no card details | [OBS] |
| **Scan to Pay** | Live | QR payments in-store/online/in-app | [OBS] |
| **Virtual Card** | Live | Instant online payments | [OBS] |

Sources: [Capitec — PayShap](https://www.capitecbank.co.za/personal/transact/payshap),
[Capitec — instant payment tools](https://www.capitecbank.co.za/blog/articles/best-way-to-bank/how-to-use-our-instant-payment-tools/). [OBS]

## 2. PayShap context (national)

- PayShap is South Africa's real-time, low-value A2A scheme launched **13 March 2023** by BankservAfrica
  (now PayInc) under an SARB mandate; initial cap R3,000; 24/7/365; ShapID identification
  ([SARB press release](https://www.resbank.co.za/content/dam/sarb/publications/media-releases/2023/payshap-/Press%20release%20on%20the%20launch%20of%20Payshap%20-%20a%20digital%20payment%20service.pdf)). [OBS]
- By 2026 the scheme had processed >R100bn across >136m transactions, >5m ShapIDs, 12 participant banks
  ([Stitch](https://stitch.money/blog/real-time-payments-in-south-africa-the-state-of-payshap-in-2026)). [OBS]

## 3. Card & acquiring rails

- Capitec issues **Visa**-branded debit/credit cards with contactless (tap), wallets and international use
  ([Capitec 2026 fees PDF](https://www.capitecbank.co.za/globalassets/pages/documents-library/transact/personal-banking-fees-2026.pdf)). [OBS]
- Merchant **card machines** for Business Banking; reduced commission/discounts saved business clients
  R213m in FY2026 ([CPIFY26 summary PDF](https://www.capitecbank.co.za/globalassets/pages/investor-relations/financial-results/2026/audited-results/cpify26_summary.pdf)). [OBS]

## 4. Cash & branch infrastructure

| Metric | FY2026 | Tag |
|---|---|---|
| Branches | 885 | [OBS] |
| Cash devices (ATMs, note/coin recyclers) | 8,771 | [OBS] |
| Cash transaction volumes | 619m | [OBS] |

Source: [CPIFY26 summary PDF](https://www.capitecbank.co.za/globalassets/pages/investor-relations/financial-results/2026/audited-results/cpify26_summary.pdf). [OBS]

## 5. Interchange & settlement [INF]

- Card scheme: **Visa** (issuing). Interchange volumes scaled with card payment volumes of 3,743m in
  FY2026 (+23%) ([CPIFY26 summary PDF](https://www.capitecbank.co.za/globalassets/pages/investor-relations/financial-results/2026/audited-results/cpify26_summary.pdf)). [OBS]
- Capitec Pay is described as bypassing card-scheme rails for e-commerce (lower merchant cost) [INF]
  ([AMZ123](https://m.amz123.com/t/sINllY9a)). [INF]

## 6. Unknowns

- Exact clearing/settlement provider contracts → [UNK].
- Interchange rate schedule → [UNK].

## Sources

- [Capitec — PayShap](https://www.capitecbank.co.za/personal/transact/payshap)
- [Capitec — instant payment tools](https://www.capitecbank.co.za/blog/articles/best-way-to-bank/how-to-use-our-instant-payment-tools/)
- [Capitec 2026 personal banking fees (PDF)](https://www.capitecbank.co.za/globalassets/pages/documents-library/transact/personal-banking-fees-2026.pdf)
- [Capitec FY2026 summary consolidated financial statements (PDF)](https://www.capitecbank.co.za/globalassets/pages/investor-relations/financial-results/2026/audited-results/cpify26_summary.pdf)
- [SARB — PayShap launch press release (PDF)](https://www.resbank.co.za/content/dam/sarb/publications/media-releases/2023/payshap-/Press%20release%20on%20the%20launch%20of%20Payshap%20-%20a%20digital%20payment%20service.pdf)
- [Stitch — the state of PayShap in 2026](https://stitch.money/blog/real-time-payments-in-south-africa-the-state-of-payshap-in-2026)
