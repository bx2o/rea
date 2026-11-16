---
bank: "ABSA (Absa Group Limited)"
council: "C16"
department: "technology"
status: "verified"
confidence: "medium"
sources:
  - "https://www.absa.africa/media-statements/2025/absa-group-collaborates-with-amazon-web-services/"
  - "https://www.sas.com/en_us/news/press-releases/2026/august/absa-bank-modern-credit-risk.html"
  - "https://www.absa.co.za/self-service/absa-abby/"
  - "https://www.absa.africa/wp-content/uploads/2026/04/Absa-Group-Limited-Integrated-Report.pdf"
  - "https://www.absa.africa/media-statements/2026/absa-group-delivered-an-8-increase-in-headline-earnings-to-r12-8-billion-supported-by-revenue-growth-of-4-to-r58-8-billion/"
last_updated: "2026-10-16"
---

# Absa — Technology Stack & Platforms

## 1. Cloud & core-banking modernisation
- **AWS strategic partnership** announced **8 September 2025** to accelerate cloud migration; builds on a relationship that **began in 2015**. [OBS] ([Absa media statement](https://www.absa.africa/media-statements/2025/absa-group-collaborates-with-amazon-web-services/))
- **Credit-risk modernisation with SAS:** credit-risk reporting rebuilt on **SAS Viya running on AWS**, cutting reporting cycles **80–90%** (weeks → hours) and rolling out new models **50% faster**. [OBS] ([SAS press release, Aug 2026](https://www.sas.com/en_us/news/press-releases/2026/august/absa-bank-modern-credit-risk.html))
- **IT-related spend:** R8.8bn in 1H2026 (+7%), focused on digital infrastructure, cybersecurity, data, cloud and AI. [OBS] ([Absa media statement Aug 2026](https://www.absa.africa/media-statements/2026/absa-group-delivered-an-8-increase-in-headline-earnings-to-r12-8-billion-supported-by-revenue-growth-of-4-to-r58-8-billion/))
- **Tech headcount:** 3,904 technology employees (FY2025). [OBS] ([Integrated Report 2025](https://www.absa.africa/wp-content/uploads/2026/04/Absa-Group-Limited-Integrated-Report.pdf))

## 2. Cloud mix (unverified detail)
- `[UNVERIFIED]` A third-party business-model canvas claims Absa migrated **60%+ of core banking apps to AWS and Microsoft Azure** across 12 African subsidiaries, cut downtime ~35%, and saved ~$120m CAPEX in FY2025. This single low-authority source is **not corroborated** by Absa primary filings. ([Canvas Business Model](https://canvasbusinessmodel.com/products/absa-business-model-canvas))
- `[INF]` Absa's cloud strategy appears **multi-cloud (AWS primary for data/AI; Azure also in mix)**, consistent with the AWS partnership and the SAS-on-AWS deployment.

## 3. Customer-facing digital channels
- **Absa Banking App** (package `com.barclays.absa.banking`):
  - Features: cashback via Absa Rewards, virtual assistant **Abby**, cancel unauthorised debit orders, buy lotto/PowerBall, book flights/accommodation. [OBS] ([Google Play listing](https://play.google.com/store/apps/details?id=com.barclays.absa.banking))
  - **~11 million downloads** (AppBrain); **174,298 ratings** (SensorTower). [OBS] ([AppBrain](https://www.appbrain.com/app/absa-banking-app/com.barclays.absa.banking), [SensorTower](https://app.sensortower.com/overview/com.barclays.absa.banking?country=ZA))
  - App version **26.7.0**, last updated **28 August 2026**. [OBS] ([SensorTower](https://app.sensortower.com/overview/com.barclays.absa.banking?country=ZA))
- **Absa Abby** — AI-powered virtual assistant (launched ~2022) giving step-by-step guidance; availability on the Banking App, WhatsApp and other channels; the Abby + Absa ID rollout saw **2m+ enrolments in year one**, cutting in-scope call-centre volume by ~a third. [OBS] ([Absa Abby](https://www.absa.co.za/self-service/absa-abby/), [Absa FY22 speaker notes](https://www.absa.africa/wp-content/uploads/2023/03/Speaker-notes-Full-year-results-investor-presentation.pdf))
- Other channels: Online Banking, USSD, Telephone (IVR), Absa Access (business/CIB app). [OBS] ([2025 pricing guide](https://www.absa.co.za/content/dam/south-africa/absa/pdf/2025/2025-benefits-and-pricing-everyday-banking-products-on-sale.pdf), [Wallet docs](https://barcoder.lumiverse.hr/docs/wallets/absa))

## 4. Partnerships & vendors
| Vendor | Use | Tag |
|---|---|---|
| **Amazon Web Services (AWS)** | Cloud migration, data/AI, credit-risk platform | [OBS] |
| **SAS (Viya)** | Credit-risk modelling/reporting on AWS | [OBS] |
| Microsoft Azure | Cloud (multi-cloud) — claimed | [UNVERIFIED] |

## 5. Gaps & assessment
- `[UNK]` Absa's **core banking system vendor** (e.g., legacy mainframe vs. modern core) is not confirmed in public primary sources.
- `[INF]` Absa's tech narrative centres on **cloud migration + AI/analytics** (Abby, SAS Viya) rather than a public wholesale core-replacement programme (contrast with Nedbank's "Managed Evolution").

## Sources
- [Absa Group collaborates with AWS](https://www.absa.africa/media-statements/2025/absa-group-collaborates-with-amazon-web-services/)
- [SAS — Absa Bank modernises credit risk with SAS Viya on AWS](https://www.sas.com/en_us/news/press-releases/2026/august/absa-bank-modern-credit-risk.html)
- [Absa Abby virtual assistant](https://www.absa.co.za/self-service/absa-abby/)
- [Absa Group Integrated Report 2025](https://www.absa.africa/wp-content/uploads/2026/04/Absa-Group-Limited-Integrated-Report.pdf)
- [Absa 1H2026 media statement](https://www.absa.africa/media-statements/2026/absa-group-delivered-an-8-increase-in-headline-earnings-to-r12-8-billion-supported-by-revenue-growth-of-4-to-r58-8-billion/)
- [Absa FY22 speaker notes (Abby + Absa ID)](https://www.absa.africa/wp-content/uploads/2023/03/Speaker-notes-Full-year-results-investor-presentation.pdf)
- [AppBrain — Absa Banking App](https://www.appbrain.com/app/absa-banking-app/com.barclays.absa.banking)
- [SensorTower — Absa Banking App](https://app.sensortower.com/overview/com.barclays.absa.banking?country=ZA)
