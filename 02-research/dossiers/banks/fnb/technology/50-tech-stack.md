---
bank: "FNB"
council: "C06"
department: "technology"
status: "partial"
confidence: "medium"
sources:
  - "https://www.fnb.co.za/downloads/ways-to-bank/FNBVirtualCardFAQs.pdf"
  - "https://play.google.com/store/apps/details?id=za.co.fnb.connect.itt"
  - "https://thecondia.com/fnb-digital-banking-changing-how-south-africans-bank/"
  - "https://touchlinenews.com/absa-joins-telecom-race-as-final-big-four-bank-to-launch-mobile-network-service/"
  - "https://ko.cryptonomist.ch/2026/10/07/fnb%EB%8A%94-%EB%82%A8%EC%95%84%ED%94%84%EB%A6%AC%EC%B9%B4%EA%B3%B5%ED%99%94%EA%B5%AD%EC%97%90%EC%84%9C-%EC%95%BD-900%EB%A7%8C-%EB%AA%85%EC%9D%98-%EA%B3%A0%EA%B0%9D%EC%97%90%EA%B2%8C-%EC%95%94/"
last_updated: "2026-10-16"
---

# FNB — Technology Stack

> FNB does not publish a detailed technical architecture. This file records what is **publicly evidenced**; undisclosed internals are tagged `[UNK]`.

## 1. Digital channels

- **FNB Banking App** (Android package `za.co.fnb.connect.itt`, publisher **FirstRand Bank Limited**) — flagship retail channel; Google Play rating **4.7**; last updated Aug 2026. `[OBS]` [Google Play](https://play.google.com/store/apps/details?id=za.co.fnb.connect.itt)
- **Adoption (FY2026):** **8.16 m digitally-active customers**; app processed **782 m transactions** (+10% YoY). `[OBS]` [The Condia](https://thecondia.com/fnb-digital-banking-changing-how-south-africans-bank/)
- Channel mix (FY2025, FNB): digital **889.6 m** transactions vs ATM/ADT 277.7 m; card issuing 1,300 m; card acquiring 1,112 m. `[OBS]` [FirstRand FY25 booklet](https://www.firstrand.co.za/media/investors/reports/fsr-analysis-of-financial-results-June-2025-single-page-printable-booklet.pdf)

## 2. Card & payment technology

- **FNB Virtual Card**: dynamic **CVV that changes regularly (hourly on the Global card)**; tokenised into Apple Pay, Google Pay, Samsung Pay, Fitbit Pay, Garmin Pay, SwatchPAY; supports QR "Scan to Pay". `[OBS]` [FNB Virtual Card FAQs](https://www.fnb.co.za/downloads/ways-to-bank/FNBVirtualCardFAQs.pdf), [FNB Global virtual card](https://www.online.rmbprivatebank.com/ways-to-bank/digital/fnb-pay.html)
- Virtual-card spend **R101 bn** (FY2026). `[OBS]` [The Condia](https://thecondia.com/fnb-digital-banking-changing-how-south-africans-bank/)

## 3. Platform / embedded services

- **FNB Connect** — MVNO built on **Cell C** (2015) and **MTN** (2023) networks; a non-core "value-added service" generating NIR. `[OBS]` [Touchline News](https://touchlinenews.com/absa-joins-telecom-race-as-final-big-four-bank-to-launch-mobile-network-service/)
- **eWallet on WhatsApp** (March 2026) — delivers wallet services to the unbanked via a messaging platform. `[OBS]` [The Vibe ZA](https://thevibeza.com/fnb-ewallet-whatsapp-south-africa/)
- **Crypto trading** powered by **VALR** (FSCA licence **53308**) embedded in the FNB app (Oct 2026). `[OBS]` [Cryptonomist](https://ko.cryptonomist.ch/2026/10/07/fnb%EB%8A%94-%EB%82%A8%EC%95%84%ED%94%84%EB%A6%AC%EC%B9%B4%EA%B3%B5%ED%99%94%EA%B5%AD%EC%97%90%EC%84%9C-%EC%95%BD-900%EB%A7%8C-%EB%AA%85%EC%9D%98-%EA%B3%A0%EA%B0%9D%EC%97%90%EA%B2%8C-%EC%95%94/)

## 4. Back-end / infrastructure

- FNB's **core banking vendor, cloud provider(s) and middleware are not publicly disclosed** in reviewed sources. `[UNK]`
- `[INF]` A bank of FNB's scale with 8 m+ digitally-active customers necessarily operates large in-house integration/API layers, but no primary source confirms a specific stack; treat vendor claims (e.g. Thought Machine/AWS marketing) as **not applicable** to FNB without evidence.

## 5. Reverse-engineering hooks (REA)

- A static, public-source pass (web bundle / app store metadata) could enumerate trackers, SDKs and frameworks. That artefact pass is out of scope here (public documents only). See `tools/rea-business-toolkit/`.

## 6. Gaps

- Core banking system `[UNK]`; cloud provider `[UNK]`; API/MCP surface `[UNK]`; security-control specifics `[UNK]`.

## Sources

- [FNB Virtual Card FAQs](https://www.fnb.co.za/downloads/ways-to-bank/FNBVirtualCardFAQs.pdf)
- [FNB Global virtual card — FNB Payments](https://www.online.rmbprivatebank.com/ways-to-bank/digital/fnb-pay.html)
- [Google Play — FNB Banking App](https://play.google.com/store/apps/details?id=za.co.fnb.connect.itt)
- [FirstRand FY2025 analysis of financial results (channel volumes)](https://www.firstrand.co.za/media/investors/reports/fsr-analysis-of-financial-results-June-2025-single-page-printable-booklet.pdf)
- [The Condia — FNB digital banking (FY2026 stats)](https://thecondia.com/fnb-digital-banking-changing-how-south-africans-bank/)
- [Touchline News — FNB Connect MVNO](https://touchlinenews.com/absa-joins-telecom-race-as-final-big-four-bank-to-launch-mobile-network-service/)
- [The Vibe ZA — FNB eWallet on WhatsApp](https://thevibeza.com/fnb-ewallet-whatsapp-south-africa/)
- [Cryptonomist — FNB crypto trading with VALR](https://ko.cryptonomist.ch/2026/10/07/fnb%EB%8A%94-%EB%82%A8%EC%95%84%ED%94%84%EB%A6%AC%EC%B9%B4%EA%B3%B5%ED%99%94%EA%B5%AD%EC%97%90%EC%84%9C-%EC%95%BD-900%EB%A7%8C-%EB%AA%85%EC%9D%98-%EA%B3%A0%EA%B0%9D%EC%97%90%EA%B2%8C-%EC%95%94/)
