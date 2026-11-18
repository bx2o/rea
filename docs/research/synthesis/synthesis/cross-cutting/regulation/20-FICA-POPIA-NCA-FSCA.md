---
scope: "FICA, POPIA, National Credit Act, FSCA/FAIS, PASA/PSO and exchange-control compliance obligations relevant to a South African neobank"
council: "C01"
department: "legal"
status: "partial"
confidence: "high"
sources:
  - "https://www.fic.gov.za/faq/"
  - "https://www.banking.org.za/consumer-information/consumer-information-legislation/financial-intelligence-centre-act/"
  - "https://knowledgelib.io/compliance/privacy/popia-south-africa/2026"
  - "https://werksmans.com/south-africas-information-regulator-what-the-2025-26-annual-performance-plan-means-for-business-as-presented-to-the-portfolio-committee-on-5-may-2026/page/36/"
  - "https://ncr.org.za/documents/pages/compliance&reports_cp/Requirements%20for%20registration%20as%20a%20credit%20provider.pdf"
  - "https://www.businessage.com/post/fsp-licensing-in-south-africa-requirements-application-process-and-compliance-risks"
  - "https://pasa.org.za/pasa-clarification-on-card-payment-surcharges/"
  - "https://www.resbank.co.za/content/dam/sarb/what-we-do/financial-surveillance/financial-surveillance-documents/2026/2-2026.pdf"
last_updated: "2026-10-16"
---

# 20 — FICA · POPIA · NCA · FSCA · PASA/PSO · Exchange Control

> Compliance obligations a South African neobank must satisfy. Public information only. Tags:
> `[OBS]` observed, `[DER]` derived, `[INF]` inference, `[EST]` estimate, `[UNK]` unknown.

## 1. FICA — Financial Intelligence Centre Act 38 of 2001 (AML/CFT)

- `[OBS]` **Registration:** Section **43B** of the FIC Act requires **accountable institutions to
  register with the Financial Intelligence Centre (FIC)**; failing to register (or to update
  registration information) is an offence and may result in a **fine not exceeding R10 million**
  ([FIC — FAQ](https://www.fic.gov.za/faq/)).
- `[OBS]` **Customer Due Diligence (CDD/KYC):** institutions must establish and verify the identity of
  every customer **before** entering into a business relationship or executing a single transaction
  above the prescribed threshold. For natural persons this requires full name, date of birth, ID number
  (or passport for non-citizens), residential address, and source of income for higher-risk
  relationships; details must be verified against independent, reliable sources
  ([DeepIDV — FICA Amendment & KYC](https://www.deepidv.com/media/smarthub/south-afica-fica-amendment-kyc-banks);
  [YouVerify — Digital KYC Onboarding SA](https://youverify.co/ar/blogs/digital-kyc-onboarding-south-africa-fica-compliance)).
- `[OBS]` **Reporting:** accountable institutions must report certain transactions to the FIC and
  report **suspicious/unusual transactions**; STRs and UTRs must be filed **as soon as practicable**
  after a suspicion is formed `[OBS]`
  ([Banking Association SA — FIC Act](https://www.banking.org.za/consumer-information/consumer-information-legislation/financial-intelligence-centre-act/)).
  `[INF]` FIC examination guidance has been interpreted to mean roughly **within 15 days** for most
  circumstances `[UNVERIFIED]`
  ([YouVerify — AML Compliance for NeoBanks/Digital Banks in Africa](https://youverify.co/ar/blogs/aml-compliance-neobanks-digital-banks-africa)).
- `[OBS]` **Record retention:** minimum **five years** after the relationship ends; **Enhanced Due
  Diligence (EDD)** applies to Prominent Influential Persons (PIPs), legal entities and high-risk
  customers `[OBS]` ([YouVerify](https://youverify.co/ar/blogs/digital-kyc-onboarding-south-africa-fica-compliance)).
- `[INF]` A neobank must therefore maintain a **Risk Management and Compliance Programme (RMCP)**,
  appoint a compliance officer, and register as an accountable institution with the FIC.

## 2. POPIA — Protection of Personal Information Act 4 of 2013

- `[OBS]` POPIA imposes **eight conditions for lawful processing**: (1) Accountability, (2) Processing
  Limitation, (3) Purpose Specification, (4) Further Processing Limitation, (5) Information Quality,
  (6) Openness, (7) Security Safeguards, and (8) Data Subject Participation `[OBS]`
  ([KnowledgeLib — POPIA 2026](https://knowledgelib.io/compliance/privacy/popia-south-africa/2026);
  [JPMorgan SA — PAIA/POPIA Manual](https://www.jpmorgan.com/content/dam/jpm/global/documents/us-privacy-policies/jpmorgan-south-africa-paia-popia-manual.pdf)).
- `[OBS]` The **Information Regulator's 2025/26 Annual Performance Plan** signals a firmer enforcement
  posture, with implications for **governance, breach reporting, direct marketing and cross-border
  transfers** ([Werksmans](https://werksmans.com/south-africas-information-regulator-what-the-2025-26-annual-performance-plan-means-for-business-as-presented-to-the-portfolio-committee-on-5-may-2026/page/36/)).
- `[OBS]` Stricter **consent for direct marketing** (explicit, convenient, cost-free, tied to specific
  channels) and expanded **Information Officer** responsibilities are being reinforced; an **OUTsurance
  test case** before the Enforcement Committee will determine whether a telephone call is "electronic
  communication" `[OBS]`
  ([ITLawCo — Information Regulator 2026/27 APP](https://itlawco.com/information-regulator-2026-27-annual-performance-plan/)).
- `[UNK]` The maximum POPIA administrative fine is often cited as up to **R10 million** with potential
  criminal penalties, but wording varies by source — treat the exact ceiling as `[UNK]` pending the
  Information Regulator's own text.

## 3. NCA — National Credit Act 34 of 2005

- `[OBS]` A credit provider must **register with the National Credit Regulator (NCR)** if it has entered
  into **at least 100 credit agreements** or has a total outstanding loan book **exceeding R500,000**
  ([NCR — Requirements for registration as a credit provider](https://ncr.org.za/documents/pages/compliance&reports_cp/Requirements%20for%20registration%20as%20a%20credit%20provider.pdf)).
- `[OBS]` Practical lender compliance includes: business registration/ownership structure, fit-and-proper
  governance, **affordability assessments**, marketing and disclosure controls, collections/arrears
  management, complaints/dispute resolution and recordkeeping
  ([VerifyNow — Money lending licence requirements](https://www.verifynow.co.za/money-lending-license-requirements-in-south-africa-a-practical-guide)).
- `[INF]` Any neobank offering credit, overdrafts or BNPL in SA must therefore register with the NCR
  (subject to thresholds) and comply with affordability/consumer-protection rules.

## 4. FSCA and FAIS — market conduct licensing

- `[OBS]` A **Financial Services Provider (FSP) licence** under the FAIS Act is granted by the **Financial
  Sector Conduct Authority (FSCA)**, with a central **fit-and-proper** assessment covering honesty,
  integrity and good standing, competence, operational ability and financial soundness (applying to the
  FSP and, depending on structure, key individuals and representatives)
  ([BusinessAge — FSP Licensing in SA](https://www.businessage.com/post/fsp-licensing-in-south-africa-requirements-application-process-and-compliance-risks)).
- `[OBS]` **Crypto Asset Service Provider (CASP)** licensing is **fully operational under the FAIS Act
  via the FSCA** `[OBS]` ([Anurag Verma — Fintech & payments regulation in SA (2026)](https://anuragverma.co/worldwatch/south-africa/fintech)).
- `[INF]` If a neobank distributes insurance, gives financial advice, or offers crypto services, an FSCA
  licence (FSP / CASP / insurance-related) is required in addition to its banking authorisation.

## 5. PASA / PSOs and the National Payment System

- `[OBS]` **PASA (Payments Association of South Africa)** is mandated by the SARB to organise, manage and
  regulate its members' participation in the National Payment System (NPS); it develops rules, criteria
  and governance frameworks binding on members ([PASA — card surcharges](https://pasa.org.za/pasa-clarification-on-card-payment-surcharges/)).
- `[OBS]` **Membership of PASA is limited to the SARB, commercial banks registered under the Banks Act,
  and designated non-banks** ([SARB — Payments and Settlements](https://www.resbank.co.za/en/home/what-we-do/payments-and-settlements)).
- `[OBS]` **Payment Clearing House System Operators (PSOs):** there are **four authorised PSOs** —
  **BankservAfrica, Strate, Visa and Mastercard** ([PASA — Glossary](https://pasa.org.za/about-payments/pasa-glossary/)).
- `[OBS]` The SARB is **withdrawing its recognition of PASA as a payment system management body** as part
  of payment-system modernisation; consumers/businesses are unaffected ([SAnews — SARB to transfer national
  payment management functions](https://www.sanews.gov.za/south-africa/sarb-transfer-national-payment-management-functions)).

## 6. Exchange control

- `[OBS]` South Africa has had exchange controls since **1939**; the legal foundation is the **Currency
  and Exchanges Act 9 of 1933** and the **Exchange Control Regulations promulgated 1 December 1961**,
  administered by the SARB's **Financial Surveillance Department (FinSurv)**
  ([SARB — Comments on the draft Alternative Remittance Providers Regulatory framework](https://www.resbank.co.za/content/dam/sarb/what-we-do/financial-surveillance/financial-surveillance-documents/2026/2-2026.pdf)).
- `[OBS]` Cross-border FX activity is transacted through **Authorised Dealers** and **ADLAs** (Authorised
  Dealers in Foreign Exchange with Limited Authority)
  ([SARB — Currency and Exchanges Guidelines for Individuals](https://www.resbank.co.za/content/dam/sarb/what-we-do/financial-surveillance/financial-surveillance-documents/2026/Currency%20and%20Exchanges%20Guidelines%20for%20Individuals.pdf);
  [Faisal Khan — South Africa licensing](https://faisalkhan.com/solutions/licensing/country/south-africa)).
- `[OBS]` **Draft Capital Flow Management Regulations** are out for comment, addressing cross-border
  **crypto-asset transactions**, new/amended definitions, transitional arrangements, administrative
  sanctions, increased penalties, and removal of restrictions on dealing in non-resident securities
  ([SAnews — Draft Capital Flow Management Regulations](https://www.sanews.gov.za/south-africa/draft-capital-flow-management-regulations-out-public-comment)).
- `[OBS]` A draft crypto cross-border manual introduces a **three-tiered authorisation system** for
  Authorised CASPs (e.g. Category One remittance capped at **R5,000 per transaction**)
  ([Werksmans — SA's crypto crackdown](https://werksmans.com/south-africas-crypto-crackdown-draft-manual-brings-cross-border-crypto-asset-transactions-under-exchange-control/page/10/)).

## 7. Neobank compliance checklist `[INF]`

`[INF]` Derived from the above, a South African neobank would typically need:

| Obligation | Trigger |
|---|---|
| Banks Act (or Mutual Banks Act) licence | Accepting public deposits as a regular feature |
| FIC registration + RMCP + compliance officer | Being an accountable institution |
| POPIA compliance + registered Information Officer | Processing personal information |
| NCR credit-provider registration | ≥100 credit agreements or >R500k book |
| FSCA FSP/FAIS licence | Advice/intermediary services |
| FSCA CASP licence | Crypto-asset services |
| Exchange-control ADLA status | Cross-border money transfer / FX |
| PASA/NPS participation (or sponsorship) | Direct payment-system access |

## Sources

- [FIC — Frequently asked questions](https://www.fic.gov.za/faq/)
- [Banking Association SA — Financial Intelligence Centre Act](https://www.banking.org.za/consumer-information/consumer-information-legislation/financial-intelligence-centre-act/)
- [DeepIDV — FICA Amendment Act & KYC for banks/fintechs](https://www.deepidv.com/media/smarthub/south-afica-fica-amendment-kyc-banks)
- [YouVerify — Digital KYC Onboarding for Banks in SA](https://youverify.co/ar/blogs/digital-kyc-onboarding-south-africa-fica-compliance)
- [YouVerify — AML Compliance for NeoBanks and Digital Banks in Africa](https://youverify.co/ar/blogs/aml-compliance-neobanks-digital-banks-africa)
- [KnowledgeLib — POPIA: Eight Conditions and Enforcement (2026)](https://knowledgelib.io/compliance/privacy/popia-south-africa/2026)
- [Werksmans — Information Regulator 2025/26 APP](https://werksmans.com/south-africas-information-regulator-what-the-2025-26-annual-performance-plan-means-for-business-as-presented-to-the-portfolio-committee-on-5-may-2026/page/36/)
- [ITLawCo — Information Regulator 2026/27 APP](https://itlawco.com/information-regulator-2026-27-annual-performance-plan/)
- [NCR — Requirements for registration as a credit provider (PDF)](https://ncr.org.za/documents/pages/compliance&reports_cp/Requirements%20for%20registration%20as%20a%20credit%20provider.pdf)
- [VerifyNow — Money lending licence requirements in SA](https://www.verifynow.co.za/money-lending-license-requirements-in-south-africa-a-practical-guide)
- [BusinessAge — FSP Licensing in South Africa](https://www.businessage.com/post/fsp-licensing-in-south-africa-requirements-application-process-and-compliance-risks)
- [Anurag Verma — Fintech & payments regulation in South Africa (2026)](https://anuragverma.co/worldwatch/south-africa/fintech)
- [PASA — clarification on card payment surcharges](https://pasa.org.za/pasa-clarification-on-card-payment-surcharges/)
- [PASA — Glossary (PSOs)](https://pasa.org.za/about-payments/pasa-glossary/)
- [SARB — Payments and Settlements](https://www.resbank.co.za/en/home/what-we-do/payments-and-settlements)
- [SAnews — SARB to transfer national payment management functions](https://www.sanews.gov.za/south-africa/sarb-transfer-national-payment-management-functions)
- [SARB — Comments on the draft Alternative Remittance Providers Regulatory framework (PDF)](https://www.resbank.co.za/content/dam/sarb/what-we-do/financial-surveillance/financial-surveillance-documents/2026/2-2026.pdf)
- [SARB — Currency and Exchanges Guidelines for Individuals (PDF)](https://www.resbank.co.za/content/dam/sarb/what-we-do/financial-surveillance/financial-surveillance-documents/2026/Currency%20and%20Exchanges%20Guidelines%20for%20Individuals.pdf)
- [Faisal Khan — South Africa licensing](https://faisalkhan.com/solutions/licensing/country/south-africa)
- [SAnews — Draft Capital Flow Management Regulations](https://www.sanews.gov.za/south-africa/draft-capital-flow-management-regulations-out-public-comment)
- [Werksmans — SA's crypto crackdown: draft manual](https://werksmans.com/south-africas-crypto-crackdown-draft-manual-brings-cross-border-crypto-asset-transactions-under-exchange-control/page/10/)
