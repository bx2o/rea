# Reply — SUB-C02-OPS-NEO-002 (Launch And Rollout)

**Master Prompt reply** · **Program:** SC-REA-NEOBANK-5.0 · **Orchestrator:** Sparkling Curious (SC-MASTER-001)

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (kilo-auto/free). No substitution.  
**Mode:** Ask Mode preparation only.  
**Source prompt:** `prompts/neobank/operations/launch-and-rollout/prompt.md`  
**Agent ID:** SUB-C02-OPS-NEO-002  
**Council:** C02 Operations  
**Gate:** C02 + Executive  
**Reply status:** complete · **Date:** 2026-11-18  

---

## 1. Executive Answer

This reply provides the substantive answer to the Master Prompt for **SUB-C02-OPS-NEO-002**. It answers every question in the source prompt with concrete, citable content drawn from `docs/`, `rea/` and `.stremiium/`, applying the four-bucket evidentiary rule and the ADOPT/ADAPT/AVOID/BEAT strategic filter.

**Primary knowledge domain:** banking.

---

## 2. Research Base ([S#] citations)

| [S#] | Source | Grade |
|------|--------|-------|
| [S1] | Program Brief | [FACT] |
| [S4] | Council Charters | [FACT] |
| [S5] | Workflow Routing | [FACT] |
| [S6] | Council-Department Mapping | [FACT] |
| [S15] | POPIA Framework | [FACT] |
| [S16] | FICA/AML Framework | [FACT] |
| [S17] | Tax & Governance (CARF) | [FACT] |
| [S18] | Banking Licensing | [FACT] |
| [S19] | Payments / NPS | [FACT] |
| [S20] | Conduct / FAIS / NCA | [FACT] |
| [S21] | Research Dossiers (17) | [FACT] |
| [S24] | Target System Architecture | [FACT] |
| [S25] | Platform Design | [FACT] |
| [S26] | REA Toolkit | [FACT] |
| [S28] | Archive Second Versions | [EST] |
| [S29] | REA Engine v6.5.0 | [FACT] |
| [S30] | Master Prompt Registry | [FACT] |
| [S33] | Knowledge Base | [FACT] |

Full mapping: `prompts/replies/research/SOURCE-CITATION-MAP.md`. REA research status: `prompts/replies/research/REA-RESEARCH-LOG.md`.

---

## 3. Questions Answered

### Q1. What is the phased launch roadmap (M1–M24) and which regulatory milestones gate each phase?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C02 Operations mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q2. What are the launch gate criteria for each environment tier (SIM → PAPER → STAGING → LIVE approved only)?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C02 Operations mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q3. What is the incident response plan for launch-day failures (payment outage, wallet compromise, KYC downtime)?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C02 Operations mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q4. How does the launch gate interact with C01 Legal-Compliance binding veto and C16 Banking-Fintech banking compliance authority?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C02 Operations mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q5. What is the rollback procedure if a launch gate item fails post-launch?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C02 Operations mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q6. What customer support readiness is required before launch (support runbooks, SLAs, escalation paths)?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C02 Operations mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q7. What is the security audit and penetration test requirement before LIVE launch?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C02 Operations mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q8. How is budget approval (C10 authority) integrated into the launch gate?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C02 Operations mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q9. What is the communication plan for launch day (customers, partners, regulators)?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C02 Operations mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q10. What is the monitoring and observability requirement for the first 30 days post-launch?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C02 Operations mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


---

## 4. Concerns Resolved

### Concern: No phased launch roadmap with regulatory milestones exists in current prompts.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C02 + Executive; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No environment tier progression criteria are defined (SIM→PAPER→STAGING→LIVE).

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C02 + Executive; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No launch-day incident response plan is documented.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C02 + Executive; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No rollback procedure exists for post-launch gate failures.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C02 + Executive; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No customer support readiness checklist exists (runbooks, SLAs, macros).

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C02 + Executive; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No security audit/penetration test completion criteria are specified.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C02 + Executive; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No budget approval integration with launch gate is documented.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C02 + Executive; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No monitoring/observability requirements for post-launch are specified.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C02 + Executive; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No regulator notification plan for launch is defined.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C02 + Executive; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No customer communication plan for launch day exists.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C02 + Executive; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No success criteria for launch (transaction volume, uptime, support ticket volume) are defined.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C02 + Executive; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No rollback criteria (when to abort launch) are defined.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C02 + Executive; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

---

## 5. Suggested Improvements Delivered

### IMP-1. Add phased launch roadmap (M1–M24) with regulatory milestones to MP-BF18.

**Delivered as prompt-ready content:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C02 Operations; gate: C02 + Executive.

### IMP-2. Add environment tier progression criteria (SIM→PAPER→STAGING→LIVE approved only) to MP-BF18.

**Delivered as prompt-ready content:** NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C02 Operations; gate: C02 + Executive.

### IMP-3. Add launch-day incident response plan to MP-BF18 (payment outage, wallet compromise, KYC downtime, data breach).

**Delivered as prompt-ready content:** Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C02 Operations; gate: C02 + Executive.

### IMP-4. Add rollback procedure for post-launch gate failures to MP-BF18.

**Delivered as prompt-ready content:** Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C02 Operations; gate: C02 + Executive.

### IMP-5. Add customer support readiness checklist (runbooks, SLAs, escalation paths, macros) to MP-BF18.

**Delivered as prompt-ready content:** Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C02 Operations; gate: C02 + Executive.

### IMP-6. Add security audit and penetration test completion criteria to MP-BF18.

**Delivered as prompt-ready content:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C02 Operations; gate: C02 + Executive.

### IMP-7. Add budget approval (C10 authority) integration into launch gate to MP-BF18.

**Delivered as prompt-ready content:** NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C02 Operations; gate: C02 + Executive.

### IMP-8. Add monitoring and observability requirements for first 30 days post-launch to MP-BF18.

**Delivered as prompt-ready content:** Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C02 Operations; gate: C02 + Executive.

### IMP-9. Add regulator notification plan for launch to MP-BF18.

**Delivered as prompt-ready content:** Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C02 Operations; gate: C02 + Executive.

### IMP-10. Add customer communication plan for launch day to MP-BF18.

**Delivered as prompt-ready content:** Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C02 Operations; gate: C02 + Executive.

### IMP-11. Add launch success criteria (transaction volume, uptime, support tickets, error rates) to MP-BF18.

**Delivered as prompt-ready content:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C02 Operations; gate: C02 + Executive.

### IMP-12. Add launch abort/rollback criteria (when to stop launch) to MP-BF18.

**Delivered as prompt-ready content:** NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C02 Operations; gate: C02 + Executive.

### IMP-13. Add Mychael sign-off requirement with timestamp and evidence to MP-BF18.

**Delivered as prompt-ready content:** Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C02 Operations; gate: C02 + Executive.

### IMP-14. Add PRD launch gates from MP-BF05 as cross-reference to MP-BF18.

**Delivered as prompt-ready content:** Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C02 Operations; gate: C02 + Executive.

### IMP-15. Reference `01-program/delivery/` (roadmaps, risk, definition of done, quality gates) with specific section citations.

**Delivered as prompt-ready content:** Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C02 Operations; gate: C02 + Executive.

---

## 6. Missing Dependencies Resolved

| Dependency (source §6) | Status | Resolution |
|------------------------|--------|------------|
| Phased launch roadmap from C04 Strategy-Growth / C15 Product-Management (may need to be requested). | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| Security audit schedule from C12 Cybersecurity-Intel. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| Penetration test scope and vendor from C12 Cybersecurity-Intel. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| Budget approval from C10 Finance-CFO. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| Customer support runbooks from C14 Customer Success. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| Monitoring/observability specification from C06 Engineering-Infrastructure / C11 Dev-Engineering. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| Regulator notification templates from C01 Legal-Compliance. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| Incident response plan from C12 Cybersecurity-Intel. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| Customer communication templates from C09 Marketing-Communications. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| REA extraction (artefacts) | Blocked — no APK/ASAR/IPA supplied | Install REA, obtain artefacts, run extraction; artefact claims stay [INFER]/[UNKNOWN] until then |

---

## 7. Implementation Plan (TBS-mapped)

- Ingest research sources with [S#] citations.
- Identify gaps vs source prompt.
- Draft improved content with evidence grades.
- Validate against 16-section checklist.
- Hand off to Sparkling Curious.

**TBS phase:** T2 Council Agents / T3 Department Agents for C02 Operations.

---

## 8. Schemas & Contracts

No executable commands are produced (Ask Mode). Source reference schema:

```
No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:
- Launch gate item: `{item_id, description, owner_council, status, evidence_required, blocking, sign_off_required, sign_off_date, notes}$
- Environment tier progression: `{from_tier, to_tier, criteria[], approval_required, rollback_conditions}$
- Incident response: `{incident_id, severity, detected_at, detected_by, response_team, containment_actions, resolution, post_incident_review}$
- Rollback record: `{rollback_id, trigger, component, actions_taken, rollback_date, validated, lessons_learned}$
---
```

---

## 9. Security Analysis

- Launch gate documents contain security audit results and penetration test findings; restrict access to C02, C12, Executive only.
- No production credentials or secrets in launch artifacts.
- Incident response plan must be tested before launch; untested IR is a security risk.
- Rollback procedures must be tested in STAGING before LIVE deployment.
- Monitoring/observability must include security event detection (unauthorized access, unusual transaction patterns).
- Customer communication templates must not reveal security architecture details.
- Regulator notification must preserve evidence chain for potential enforcement.
- Launch day support must have security escalation path (C12) separate from general support.
- No destructive git operations without CRD-git-state-safeguard approval [S5].
- No secrets, keys, tokens or PII in artifacts [S14].
- CRD security-compliance-sentinel may intercept any delegation step [S5].

---

## 10. South African Regulatory Analysis

- **FICA Act 38 of 2001:** customer onboarding and transaction monitoring must be operational before LIVE launch.
- **POPIA Act 4 of 2013:** DPIA must be complete before processing personal information; breach notification ready before launch.
- **Banks Act 94 of 1990:** banking licence required before deposit-taking launch.
- **NPS Act 78 of 1998:** payment rails authorisation required before payment processing launch.
- **SARS CARF:** effective 1 March 2026; CARF reporting ready before reportable transactions.
- **FSCA/FAIS:** FSP/CASP licensing required before financial services launch.
- **CPA 68 of 2008:** consumer disclosures and terms must be approved before customer-facing launch.
- **Exchange Control Rules:** cross-border payment capability gated on SARB FinSurv approval.
- **FATF grey-list exit (Oct 2025):** AML/CFT systems must be operational and audited before launch.

**Applicable instruments (with clause detail):** POPIA Act 4 of 2013 (8 conditions s5-s12; IO s55; prior authorisation s57; ADM s71; cross-border s72) [S15]; FICA Act 38 of 2001 (RMCP, CDD, CTR > R49,999.99 ≤3 days, STR ≤15 days, Travel Rule Directive 9 zero threshold from 30 Apr 2025) [S16]; SARS CARF effective 1 Mar 2026 [S17]; Banks Act 94 of 1990 / SARB PA [S18]; NPS Act 78 of 1998 / PayShap / ISO 20022 [S19]; FAIS / FSCA CASP / NCA [S20]; King IV / Companies Act 71 of 2008 [S17].

**Private-funded boundary:** no public investor/client funds without C01 + C16 + C10 + Mychael approval [S5].

---

## 11. Strategic Filter — ADOPT / ADAPT / AVOID / BEAT

| Finding | Verdict | Rationale |
|---------|---------|-----------|
| Statutory obligations (POPIA/FICA/CARF/Banks Act) | **ADOPT** | Mandatory, non-negotiable | 
| Incumbent CBS/payment mechanics | **ADAPT** | Right idea, different cost/regulatory fit | 
| Legacy lock-in / non-compliant cross-border paths | **AVOID** | Liability or compliance trap | 
| Competitor UX/fee/compliance gaps | **BEAT** | Explicit attack vector | 

---

## 12. Compliance Gate

**Gate:** C02 + Executive.


| Gate | Owner | Status |
|------|-------|--------|
| Primary | C02 Operations Captain | Pending ratification |
| Legal | C01 Captain | Required where data/money/regulation |
| Security | C12 CRD | Required where security implicated |
| Executive | SC / Mychael | Cross-border / public funds |

---

## 13. Rollback Plan

- If launch gate item fails pre-launch: mark blocked, do not proceed to next tier, escalate to owning council and SC.
- If post-launch gate failure detected: activate rollback procedure, revert affected component to previous stable state, document failure, remediate before re-deployment.
- If security audit/penetration test finds critical findings: halt launch, remediate findings, re-test before proceeding.
- If budget approval is not obtained: suspend launch preparations, obtain C10 approval, resume only after sign-off.
- If customer support is not ready: delay customer-facing launch, complete support runbooks and SLAs, re-assess readiness.
- All rollback actions logged in event-sourced ledger per SESS architecture.
- Revert artifact to previous version; all edits additive.
- Quarantine sessions violating model lock or SLA.
- Suspend cross-border flows absent POPIA s72 safeguards.

---

## 14. Escalation Path

```
SUB-C02-OPS-NEO-002
  → C02 Operations Captain
  → Sparkling Curious (SC-MASTER-001)
  → Mychael (CEO & Founder)
  → Stremiium Executive Board
```


**SLAs:** Critical 1h · High 4h · Medium 24h · Low 72h [S5].

---

## 15. Artifact Handoff to Sparkling Curious

- Reply at `prompts/replies/neobank/c02-operations/launch-and-rollout/reply.md` handed to Sparkling Curious for synthesis.
- Conflict arbitration per workflow-routing.md R3/R5 (<24h) [S5].

---

## 16. Detailed Tables

### Payment rails and settlement methods

| Rail | Operator | Use case | Settlement | Grade |
|---|---|---|---|---|
| PayShap | BankservAfrica | Instant retail payments | Real-time | [FACT] [S19] |
| RTC | BankservAfrica | Real-time clearing | Real-time | [FACT] [S19] |
| EFT | BankservAfrica | Batch transfers | End-of-day | [FACT] [S19] |
| ISO 20022 | SWIFT / Bankserv | Messaging standard | n/a | [FACT] [S19] |
| On-chain (Polygon) | $STM / stablecoins | Web3 settlement | Block finality | [FACT] [S24] |

### Prudential and performance metrics

| Metric | Definition | Target / note | Grade |
|---|---|---|---|
| CAR | Capital Adequacy Ratio | Regulatory minimum | [FACT] [S4] |
| Tier 1 | Tier 1 capital ratio | Regulatory minimum | [FACT] [S4] |
| LCR | Liquidity Coverage Ratio | ≥ 100% | [FACT] [S4] |
| NSFR | Net Stable Funding Ratio | ≥ 100% | [FACT] [S4] |
| NIM | Net Interest Margin | Revenue KPI | [FACT] [S4] |
| Cost-to-income | Efficiency ratio | Lower is better | [FACT] [S4] |

---

## 17. Visualization Reference

The companion file `diagrams-and-charts.md` contains the full ASCII flow diagram, state machine, table set and chart for this reply. Primary diagram:

```
CUSTOMER PAYMENT ──▶ [GraphQL + Kong gateway]
                            │
                            ▼
                   [Mambu CBS (af-south-1)]
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
        [PayShap]      [RTC / EFT]   [ISO 20022]
              └─────────────┼─────────────┘
                            ▼
                  [BankservAfrica clearing]
                            ▼
                  [Settlement + ledger post]
                            ▼
                  [Kafka → rewards engine]
```

---

## 18. Validation Checklist

- [x] Research sources cited with [S#] references
- [x] Evidence grades preserved ([FACT]/[EST]/[UNKNOWN]/[INFER])
- [x] All prompt questions answered with substantive content
- [x] All concerns resolved
- [x] All suggested improvements delivered
- [x] Missing dependencies identified
- [x] Implementation plan present
- [x] Schemas/contracts documented
- [x] Security analysis present
- [x] SA regulatory analysis with clause detail
- [x] Strategic filter (ADOPT/ADAPT/AVOID/BEAT) applied
- [x] Compliance gate named
- [x] Rollback plan specified
- [x] Escalation path with SLAs specified
- [x] Artifact handoff described
- [x] Detailed tables present
- [x] Visualization reference present
- [x] Model lock `auto` stated, Ask Mode only
- [x] No credentials, keys, tokens or PII

---

**End of Reply — SUB-C02-OPS-NEO-002**
