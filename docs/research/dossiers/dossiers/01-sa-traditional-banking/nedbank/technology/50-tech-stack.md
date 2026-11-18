---
bank: "Nedbank (Nedbank Group Limited)"
council: "C16"
department: "technology"
status: "verified"
confidence: "medium"
sources:
  - "https://group.nedbank.co.za/content/dam/group/pdf/19_presentations/2024/tech-and-digital-discussion-nedbank-2024.pdf"
  - "https://www.nedbank.co.za/content/dam/nedbank/site-assets/AboutUs/Information%20Hub/Corporate%20Presentations/2024/202410%20Nedbank%20Group%20Tech%20%26%20Digital%20Discussion.pdf"
  - "https://newsroom.ibm.com/2021-09-22-Banks-Across-Africa-Turn-to-IBM-Hybrid-Cloud-and-AI-Solutions-to-Accelerate-Digital-Innovation"
  - "https://personal.nedbank.co.za/learn/blog/enbi-query-vs-complaint.html"
  - "https://barcoder.lumiverse.hr/docs/wallets/nedbank"
last_updated: "2026-10-16"
---

# Nedbank — Technology Stack & Platforms

## 1. Core-banking modernisation — "Managed Evolution"
- **Managed Evolution (ME)** is Nedbank's IT-modernisation programme, launched in **2014** to replace the legacy technology stack; it modernises transactional product, lending and deposit systems and decommissions legacy middleware. [OBS] ([Nedbank Tech & Digital Discussion](https://group.nedbank.co.za/content/dam/group/pdf/19_presentations/2024/tech-and-digital-discussion-nedbank-2024.pdf))
- Status: **~97% complete** by 2024, with the programme targeted for completion by **end 2024**. [OBS] ([Nedbank Tech & Digital Discussion 2024](https://www.nedbank.co.za/content/dam/nedbank/site-assets/AboutUs/Information%20Hub/Corporate%20Presentations/2024/202410%20Nedbank%20Group%20Tech%20%26%20Digital%20Discussion.pdf))
- Technology leader: **Ray Naicker**, Nedbank Group CIO. [OBS] (same)
- Other milestones cited: **SAP ERP implemented**, **Avo launched**, **API marketplace**. [OBS] (same)

## 2. Cloud & infrastructure
- `[OBS]` Nedbank explored a **hybrid, multi-cloud** approach and turned to **IBM** (IBM Garage; **IBM Cloud Pak for Integration**) to integrate legacy systems during core-banking modernisation. ([IBM Newsroom](https://newsroom.ibm.com/2021-09-22-Banks-Across-Africa-Turn-to-IBM-Hybrid-Cloud-and-AI-Solutions-to-Accelerate-Digital-Innovation))
- `[UNVERIFIED]` A third-party technical blog claims Nedbank uses **AWS for customer-facing apps** (Money app, lending) and **Microsoft Azure for back-office/data analytics**; migration orchestrated with Terraform/Spinnaker; a "strangler fig" approach to move a core banking ledger processing **50m+ transactions/day** without downtime. ([denvermobileappdeveloper.com](https://denvermobileappdeveloper.com/trends/za/nedbank-260618)) — **not corroborated** by a primary Nedbank filing.
- `[OBS]` Nedbank is reported to partner with **Microsoft Azure and Salesforce** for cloud/CRM. ([MatrixBCG](https://matrixbcg.com/products/nedbank-business-model-canvas)) — third-party; tag `[UNVERIFIED]`.
- **Technology spend:** ~R2.6bn in the past financial year (per third-party summary). [UNVERIFIED] ([Wallet docs](https://barcoder.lumiverse.hr/docs/wallets/nedbank))

## 3. Customer-facing channels
- **Nedbank Money app** (package `za.co.nedbank`): balances, transfers, payments, virtual cards, freeze/unfreeze cards, credit-score check, budgeting ("My Smart Money"), Greenbacks, Avo integration, international banking & travel, insurance. [OBS] ([Money app PDF](https://personal.nedbank.co.za/content/dam/nedbank/pdfs/nedbank-money-app-and-enbi-chat-assistant.pdf), [Money app channel page](https://business.nedbank.co.za/content/nedbank/za/en/personal/bank/digital-banking/channels/money-app.html))
- **Enbi** — AI-powered chatbot launched **2021**; on the Money app, Online Banking and website; has helped **1m+ users** and handled **5m+ chats**; handles self-service (password resets, statements, exploring services). [OBS] ([Nedbank — Enbi](https://personal.nedbank.co.za/learn/blog/enbi-query-vs-complaint.html))
- **Avo SuperShop** marketplace (25,000 businesses; 2.7m registered users). [OBS] ([Old Mutual MFC](https://oldmutualmfc.bflye.com/nedbank-reports-strong-growth-for-its-avo-supershop-platform/))
- **Digital adoption:** active Money app clients up **14% to 3.0m** (FY2025); transaction values +15%; **70%** of Nedbank Africa Regions retail clients digitally active. [OBS] ([African Youth News](https://africanyouthnews.com/nedbank-group-releases-outstanding-2025-financial-results/))
- Platform features include **Nedbank Intelligent Hyper Automation (NIHA)** and "Martech" for data-driven, personalised offers. [OBS] ([Nedbank 2024 results booklet](https://personal.nedbank.co.za/content/dam/group/pdf/20_financial-results/2024/annual-results/2024-annual-results-booklet-double-page-nedbank.pdf))

## 4. Payments & open finance
- `[OBS]` Nedbank's payment-modernisation goal: "a fully interoperable enterprise payment service hub" to optimise cost-to-serve, increase innovation cadence and respond to **open-finance** opportunities. ([Nedbank 2024 results booklet](https://personal.nedbank.co.za/content/dam/group/pdf/20_financial-results/2024/annual-results/2024-annual-results-booklet-double-page-nedbank.pdf))

## 5. Vendor footprint
| Vendor | Use | Tag |
|---|---|---|
| IBM (Cloud Pak for Integration) | Hybrid-cloud integration during Managed Evolution | [OBS] |
| Microsoft Azure | Cloud (back-office/data) | [UNVERIFIED] |
| AWS | Cloud (customer-facing) | [UNVERIFIED] |
| Salesforce | CRM | [UNVERIFIED] |
| SAP | ERP | [OBS] |

## 6. Assessment & gaps
- `[INF]` Nedbank's differentiator is a **completed, decade-long core-banking modernisation (Managed Evolution)** — a stronger public core-replacement story than Absa's cloud-migration narrative — plus an in-house chatbot (Enbi) and marketplace (Avo).
- `[UNK]` Nedbank's **core ledger vendor** (post-ME) is not named in public primary sources.

## Sources
- [Nedbank Tech & Digital Discussion (Ray Naicker, 2024)](https://group.nedbank.co.za/content/dam/group/pdf/19_presentations/2024/tech-and-digital-discussion-nedbank-2024.pdf)
- [Nedbank Group Tech & Digital Discussion (Oct 2024)](https://www.nedbank.co.za/content/dam/nedbank/site-assets/AboutUs/Information%20Hub/Corporate%20Presentations/2024/202410%20Nedbank%20Group%20Tech%20%26%20Digital%20Discussion.pdf)
- [IBM Newsroom — Banks across Africa turn to IBM hybrid cloud](https://newsroom.ibm.com/2021-09-22-Banks-Across-Africa-Turn-to-IBM-Hybrid-Cloud-and-AI-Solutions-to-Accelerate-Digital-Innovation)
- [Nedbank — Enbi chatbot](https://personal.nedbank.co.za/learn/blog/enbi-query-vs-complaint.html)
- [Nedbank Money app & Enbi PDF](https://personal.nedbank.co.za/content/dam/nedbank/pdfs/nedbank-money-app-and-enbi-chat-assistant.pdf)
- [Nedbank Money app channel page](https://business.nedbank.co.za/content/nedbank/za/en/personal/bank/digital-banking/channels/money-app.html)
- [Old Mutual MFC — Avo SuperShop growth](https://oldmutualmfc.bflye.com/nedbank-reports-strong-growth-for-its-avo-supershop-platform/)
- [Nedbank 2024 Annual Results booklet](https://personal.nedbank.co.za/content/dam/group/pdf/20_financial-results/2024/annual-results/2024-annual-results-booklet-double-page-nedbank.pdf)
