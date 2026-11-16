---
bank: "Capitec"
council: "C16"
department: "technology"
status: "verified"
confidence: "medium"
sources:
  - "https://www.nttdata.com/en-ca/insights/case-studies/capitec-contact-center-boosts-customer-experience-with-amazon-connect"
  - "https://www.zscaler.com/jp/customers/capitec-bank-limited"
  - "https://www.aiusecasehub.com/case/capitec-used-amazon-connect-and-amazon-bedrock-with-contact-lens-to"
  - "https://cdn.prod.website-files.com/60e2dc7cef09ba877f290236/6662cff38f0736bead3f76c7_AWS_Capitec_Case%20Study_June%202024_compressed.pdf"
last_updated: "2026-10-16"
---

# Capitec — Technology Stack

Evidence is drawn from cloud-vendor case studies and public disclosures. Capitec is a **cloud-forward,
AWS-centric** engineering organisation. All [OBS] unless noted.

## 1. Cloud & platform

| Layer | Detail | Source | Tag |
|---|---|---|---|
| Primary cloud | **AWS** — banking app "rewritten" and migrated on-prem → AWS with zero downtime | [Zscaler case study](https://www.zscaler.com/jp/customers/capitec-bank-limited) | [OBS] |
| Contact centre | Migrated to **Amazon Connect**; replaced 198 on-prem servers; 600 agents migrated in 5 days; 95% SLA on day 2 | [NTT DATA](https://www.nttdata.com/en-ca/insights/case-studies/capitec-contact-center-boosts-customer-experience-with-amazon-connect) | [OBS] |
| Conversational AI | **Amazon Connect Contact Lens + Amazon Bedrock**; conversation analysis raised 1% → 100% | [AI Use Case Hub](https://www.aiusecasehub.com/case/capitec-used-amazon-connect-and-amazon-bedrock-with-contact-lens-to) | [OBS] |
| Call validation | In-app feature to validate legitimate bank calls; >5m calls validated in 6 months | [AWS News](https://aws-news.com/article/2025-02-27-capitec-elevates-experiences-with-amazon-connect) | [OBS] |
| Cloud security | **Zscaler** Cloud Connector purchased via AWS Marketplace; zero public connectivity on AWS apps | [Zscaler](https://www.zscaler.com/jp/customers/capitec-bank-limited) | [OBS] |

## 2. Payments engineering

- **Capitec Pay** (open-banking account-to-account) built with **Electrum** on AWS using
  **Amazon EKS, Amazon RDS and AWS CloudFormation**
  ([Electrum/AWS case study PDF](https://cdn.prod.website-files.com/60e2dc7cef09ba877f290236/6662cff38f0736bead3f76c7_AWS_Capitec_Case%20Study_June%202024_compressed.pdf)). [OBS]
- Payments department handles **RTC, PayShap and EFT**; requests routed to **AWS Lambda** services built in
  **.NET Core**, with **SQL Server** (beneficiaries) and **DynamoDB**, **SQS** events and **CloudWatch** logs
  ([Bold.pro profile — payments engineer](https://za.bold.pro/my/dileep-sreepathi)). [OBS] (individual-profile source; corroborative)

## 3. Architecture pattern [INF]

Consistent with an **event-driven microservices architecture on AWS** (Lambda, EKS, SQS, DynamoDB, RDS) — the
same pattern widely used in cloud-native core banking
([AWS core-banking guidance](https://aws.amazon.com/tw/solutions/guidance/building-a-banking-core-system-on-aws/)). [INF]

## 4. AI & data

- FY2026 commentary cites "significant investment in fraud prevention, data and **artificial intelligence**"
  ([CPIFY26 summary PDF](https://www.capitecbank.co.za/globalassets/pages/investor-relations/financial-results/2026/audited-results/cpify26_summary.pdf)). [OBS]
- AI is being used to *augment* headcount rather than cut it — group added 711 staff while expanding AI
  ([Technext24](https://technext24.com/2026/04/22/capitec-proving-ai-can-drive-employment/)). [OBS]

## 5. Unknowns

- Core banking vendor (in-house vs Temenos/Finacle/TCS BaNCS) → **[UNK]**; no public confirmation found. [UNK]
- Exact data-platform / warehouse stack → [UNK].
- App framework internals (fairly reverse-engineered) → [UNK] in this pass; app package id is
  `capitec.acuity.mobile.prod` ([Chrome-Stats](https://chrome-stats.com/d/capitec.acuity.mobile.prod)). [OBS]

## Sources

- [NTT DATA — Capitec contact centre with Amazon Connect](https://www.nttdata.com/en-ca/insights/case-studies/capitec-contact-center-boosts-customer-experience-with-amazon-connect)
- [Zscaler — Capitec accelerates digital transformation](https://www.zscaler.com/jp/customers/capitec-bank-limited)
- [AI Use Case Hub — Capitec Amazon Connect + Bedrock](https://www.aiusecasehub.com/case/capitec-used-amazon-connect-and-amazon-bedrock-with-contact-lens-to)
- [AWS News — Capitec elevates experiences with Amazon Connect](https://aws-news.com/article/2025-02-27-capitec-elevates-experiences-with-amazon-connect)
- [Electrum / AWS — Capitec Pay case study (PDF)](https://cdn.prod.website-files.com/60e2dc7cef09ba877f290236/6662cff38f0736bead3f76c7_AWS_Capitec_Case%20Study_June%202024_compressed.pdf)
- [Bold.pro — Capitec payments engineer profile](https://za.bold.pro/my/dileep-sreepathi)
- [Chrome-Stats — Capitec Bank app listing](https://chrome-stats.com/d/capitec.acuity.mobile.prod)
- [Capitec FY2026 summary consolidated financial statements (PDF)](https://www.capitecbank.co.za/globalassets/pages/investor-relations/financial-results/2026/audited-results/cpify26_summary.pdf)
- [Technext24 — Capitec bets on AI to boost workers](https://technext24.com/2026/04/22/capitec-proving-ai-can-drive-employment/)
