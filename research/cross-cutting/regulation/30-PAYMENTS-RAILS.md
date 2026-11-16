---
scope: "South African payments rails — PayShap, RTC, EFT, DebiCheck, card schemes, QR, open banking and SARB Vision 2025 / PEM"
council: "C16"
department: "payments"
status: "partial"
confidence: "medium"
sources:
  - "https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight-and-supervision/Digital%20Payments%20Roadmap.pdf"
  - "https://stitch.money/blog/real-time-payments-in-south-africa-the-state-of-payshap-in-2026"
  - "https://paymentbrief.com/markets/south-africa/"
  - "https://sa.tryduplo.com/blog/payshap-south-african-businesses-2026/"
  - "https://www.polity.org.za/article/payments-revolution-what-every-psp-operating-in-south-africa-needs-to-know-right-now-2026-03-25"
  - "https://www.resbank.co.za/content/dam/sarb/publications/working-papers/2026/26-07/financial-inclusion-sa.pdf"
last_updated: "2026-10-16"
---

# 30 — South African Payments Rails (PayShap · RTC · EFT · DebiCheck · Cards · QR · Open Banking)

> Public information only. Tags: `[OBS]`, `[DER]`, `[INF]`, `[EST]`, `[UNK]`.
> **Note:** PayShap adoption figures differ materially across secondary sources; each is cited and
> tagged, and the divergence is flagged rather than reconciled.

## 1. Retail payment methods in use

`[OBS]` The SARB's **Digital Payments Roadmap** lists the retail payment methods currently in use in
South Africa: **cards** (debit, credit and fleet), **electronic funds transfer (EFT)** (credit and
debit), **authenticated collections (DebiCheck)**, **real-time clearing (RTC)**, **PayShap** (faster
payments) and **ATMs**
([SARB — Digital Payments Roadmap](https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight-and-supervision/Digital%20Payments%20Roadmap.pdf)).

## 2. PayShap (faster payments / pay-by-proxy)

- `[OBS]` PayShap was **launched in March 2023**, built on the SARB's **Rapid Payments Programme (RPP)**;
  it moves money account-to-account using a proxy (usually a mobile number, or **"ShapID"**) and runs
  **24/7** ([PaymentBrief — South Africa Payments](https://paymentbrief.com/markets/south-africa/);
  [PhotonPay — South African Payment Methods 2026](https://www.photonpay.com/ca/blog/article/south-africa-payment-methods)).
- `[OBS]` A transaction limit increase occurred in **August 2024**
  ([moneywiki — South Africa](https://moneywiki.app/countries/south-africa)).
- `[OBS]` Adoption trajectory — **divergent secondary figures**:
  - `[OBS]` **~136 million transactions / R100 billion value and 4.5 million ShapIDs by mid-2025**;
    volumes grew **>1,000% between December 2023 and December 2024**
    ([PaymentBrief](https://paymentbrief.com/markets/south-africa/)).
  - `[OBS]` **45 million PayShap transactions per month by late 2025** (80% under R500), up from 5–6
    million/month in 2024 ([Stitch](https://stitch.money/blog/real-time-payments-in-south-africa-the-state-of-payshap-in-2026)).
  - `[OBS]` **839 million transactions valued at R774 billion since launch, with 14 banks participating**
    ([Duplo — PayShap for SA businesses 2026](https://sa.tryduplo.com/blog/payshap-south-african-businesses-2026/)).
  - `[OBS]` **Over 1 billion cumulative transactions by June 2026, >60 million/month** (attributed to
    "PayInc") ([PhotonPay](https://www.photonpay.com/ca/blog/article/south-africa-payment-methods)).
  - `[INF]` The spread reflects different measurement dates and cumulative-vs-monthly bases; the **single
    most reliable series** is the SARB/BankservAfrica (PayInc) reporting, which these secondary sources
    paraphrase. Treat precise totals as `[EST]`.

## 3. RTC — Real-Time Clearing

`[OBS]` RTC was introduced in **2006**, South Africa's first instant interbank rail, **predating PayShap
by 17 years**. It never achieved mass adoption (high fees, limited bank participation) and **PayShap is
now displacing it** for consumer P2P/A2A use cases
([PaymentBrief](https://paymentbrief.com/markets/south-africa/)).

## 4. EFT and DebiCheck

- `[OBS]` **EFT** (credit and debit) remains a core bulk/retail rail
  ([SARB — Digital Payments Roadmap](https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight-and-supervision/Digital%20Payments%20Roadmap.pdf)).
- `[OBS]` **DebiCheck** (introduced **2018**) is an **authenticated electronic mandate management and
  early-collections capability** that requires customer authentication to prevent unauthorised debit
  orders ([SARB — PEM Position Paper](https://www.resbank.co.za/content/dam/sarb/publications/other-publications/2025/pem-position-paper.pdf)).
- `[OBS]` **BankservAfrica** is South Africa's largest automated clearing house (ACH) and now trades as
  **PayInc** ([Grokipedia — BankServ](https://grokipedia.com/page/bankserv)).

## 5. Card schemes

- `[OBS]` Card networks in SA include **Visa** and **Mastercard** (as authorised PSOs), with **American
  Express** aligned to Nedbank for card issuance ([PASA — Glossary](https://pasa.org.za/about-payments/pasa-glossary/);
  [Nedbank Greenbacks at bp](https://www.nedbank.co.za/content/nedbank/desktop/gt/en/aboutus/greenbacks-bp/greenbacks-bp.html)).
- `[EST]` `[OBS]` Bank-issued cards are the dominant tender at retail — a market analysis estimates cards
  represent **40–65%** of a typical SA retail till mix ([retailpos.ai — Africa payment rails comparison](https://retailpos.ai/guides/africa-payment-rails-comparison)).

## 6. QR payments

- `[OBS]` **Masterpass** (Mastercard) is described as the most widely accepted digital wallet in South
  Africa; Zapper and Masterpass interoperate via QR
  ([Mastercard — Masterpass and Zapper](https://www.mastercard.com/news/eemea/en/newsroom/press-releases/en/2018/august/mastercard-and-zapper-collaborate-to-drive-digital-payments-interoperability/)).
- `[OBS]` **Scan to Pay** is the QR standard used at checkout by Payfast/Paygate; **SnapScan** and
  **Zapper** are consumer QR wallets ([Payfast — Scan To Pay](https://payfast.io/features/payment-methods/masterpass);
  [SnapScan](https://www.snapscan.co.za/user)).
- `[EST]` `[OBS]` A market analysis estimates SnapScan + Zapper QR at **15–30%** of a typical SA retail
  till mix ([retailpos.ai](https://retailpos.ai/guides/africa-payment-rails-comparison)).

## 7. Clearing, settlement and the PSOs

- `[OBS]` There are **four authorised Payment Clearing House System Operators (PSOs): BankservAfrica,
  Strate, Visa and Mastercard** ([PASA — Glossary](https://pasa.org.za/about-payments/pasa-glossary/)).
- `[OBS]` In **November 2025 the SARB completed the acquisition of a 50% shareholding in PayInc**,
  facilitating the establishment of the **National Payments Utility** under the Payments Ecosystem
  Modernisation (PEM) Programme
  ([SARB Annual Report 2025/26 — Payments, PDF](https://www.resbank.co.za/content/dam/sarb/publications/reports/annual-reports/2026/chapters/policy-implementation/payments-25-26.pdf)).

## 8. Open banking and SARB Vision 2025 / PEM

- `[OBS]` The SARB has been exploring **open finance since at least 2020** via its Fintech Unit, with a
  **consultative rather than prescriptive** approach; PASA plays a regulatory role
  ([Banklink — Open Banking in SA](https://banklink.co.za/resources/open-banking-south-africa)).
- `[OBS]` **Vision 2025** (published 2018) called for **non-bank access** to the NPS, **activity-based
  regulation** (regulating the activity, not the entity) and a **level playing field** between banks and
  non-banks ([Polity — Payments Revolution: what every PSP in SA needs to know](https://www.polity.org.za/article/payments-revolution-what-every-psp-operating-in-south-africa-needs-to-know-right-now-2026-03-25)).
- `[OBS]` SARB is transitioning to a **PSD2-style activity-based authorisation framework** under the
  **Payments Ecosystem Modernisation (PEM) Programme**, with draft instruments published in 2025 and the
  **first non-bank payment-institution licences expected from 2026**
  ([Anurag Verma — Fintech & payments regulation in SA (2026)](https://anuragverma.co/worldwatch/south-africa/fintech)).
- `[OBS]` `[OBS]` SARB Working Paper **WP/26/07** "Open banking and financial inclusion in South Africa"
  (Nanziri, Gbahabo & Ofori-Sasu, authorised 16 March 2026) provides evidence to support the SARB in
  regulating the open-banking business model
  ([SARB Working Paper WP/26/07, PDF](https://www.resbank.co.za/content/dam/sarb/publications/working-papers/2026/26-07/financial-inclusion-sa.pdf)).

## Sources

- [SARB — Digital Payments Roadmap (PDF)](https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight-and-supervision/Digital%20Payments%20Roadmap.pdf)
- [SARB — Positioning the SARB's Payments Ecosystem Modernisation (PEM position paper, PDF)](https://www.resbank.co.za/content/dam/sarb/publications/other-publications/2025/pem-position-paper.pdf)
- [SARB Annual Report 2025/26 — Payments (PDF)](https://www.resbank.co.za/content/dam/sarb/publications/reports/annual-reports/2026/chapters/policy-implementation/payments-25-26.pdf)
- [SARB Working Paper WP/26/07 — Open banking and financial inclusion in SA (PDF)](https://www.resbank.co.za/content/dam/sarb/publications/working-papers/2026/26-07/financial-inclusion-sa.pdf)
- [Stitch — Real-time payments in SA: the state of PayShap in 2026](https://stitch.money/blog/real-time-payments-in-south-africa-the-state-of-payshap-in-2026)
- [PaymentBrief — South Africa Payments: PayShap & EFT](https://paymentbrief.com/markets/south-africa/)
- [Duplo — What PayShap Means for South African Businesses in 2026](https://sa.tryduplo.com/blog/payshap-south-african-businesses-2026/)
- [PhotonPay — South African Payment Methods 2026](https://www.photonpay.com/ca/blog/article/south-africa-payment-methods)
- [moneywiki — South Africa](https://moneywiki.app/countries/south-africa)
- [Grokipedia — BankServ / PayInc](https://grokipedia.com/page/bankserv)
- [PASA — Glossary (PSOs)](https://pasa.org.za/about-payments/pasa-glossary/)
- [Mastercard — Masterpass & Zapper QR interoperability](https://www.mastercard.com/news/eemea/en/newsroom/press-releases/en/2018/august/mastercard-and-zapper-collaborate-to-drive-digital-payments-interoperability/)
- [Payfast — Scan To Pay](https://payfast.io/features/payment-methods/masterpass)
- [SnapScan](https://www.snapscan.co.za/user)
- [retailpos.ai — Africa payment rails comparison](https://retailpos.ai/guides/africa-payment-rails-comparison)
- [Banklink — Open Banking in South Africa](https://banklink.co.za/resources/open-banking-south-africa)
- [Polity — Payments Revolution: what every PSP in SA needs to know](https://www.polity.org.za/article/payments-revolution-what-every-psp-operating-in-south-africa-needs-to-know-right-now-2026-03-25)
- [Anurag Verma — Fintech & payments regulation in SA (2026)](https://anuragverma.co/worldwatch/south-africa/fintech)
