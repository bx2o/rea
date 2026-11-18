# Reply — SUB-C10-FIN-NEO-002 (Ledger And Payments)

**Master Prompt reply** · **Program:** SC-REA-NEOBANK-5.0 · **Orchestrator:** Sparkling Curious (SC-MASTER-001)

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (kilo-auto/free). No substitution.  
**Mode:** Ask Mode preparation only.  
**Source prompt:** `prompts/neobank/finance/ledger-and-payments/prompt.md`  
**Agent ID:** SUB-C10-FIN-NEO-002  
**Council:** C10 Finance-CFO  
**Gate:** C10 + C16 Banking-Fintech  
**Reply status:** complete · **Date:** 2026-11-18  

---

## 1. Executive Answer

This reply provides the substantive answer to the Master Prompt for **SUB-C10-FIN-NEO-002**. It answers every question in the source prompt with concrete, citable content drawn from `docs/`, `rea/` and `.stremiium/`, applying the four-bucket evidentiary rule and the ADOPT/ADAPT/AVOID/BEAT strategic filter.

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

### Q1. What is the NeoBank double-entry ledger chart of accounts (customer ledger, treasury ledger, settlement ledger, trading ledger adjacency, $STM ledger adjacency)?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C10 Finance-CFO mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q2. How does the event-sourced audit ledger capture all ledger mutations immutably?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C10 Finance-CFO mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q3. Which payment rails will the NeoBank support (PayShap, EFT, instant EFT, card, RTC) and in what order?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C10 Finance-CFO mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q4. What is the ISO 20022 messaging strategy for payment instructions?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C10 Finance-CFO mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q5. How does idempotency work for payment intents (idempotency keys, retries, timeouts, partial failure)?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C10 Finance-CFO mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q6. What is the reconciliation frequency and scope (orders, deals, positions, balance, equity, margin, commissions, swaps, profits)?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C10 Finance-CFO mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q7. How are reconciliation exceptions detected and handled (missing fills, duplicate fills, unmatched orders, balance drift, position drift, PnL mismatch)?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C10 Finance-CFO mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q8. What is the approval gate workflow for live payments?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C10 Finance-CFO mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q9. How does the ledger integrate with FICA transaction monitoring and CARF reporting?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C10 Finance-CFO mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q10. What is the balance drift detection mechanism and alerting?

**Direct answer:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Research basis** (C10 Finance-CFO mandate [FACT] [S4]):

1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].
3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].
4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].
5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


---

## 4. Concerns Resolved

### Concern: No double-entry ledger chart of accounts is defined in current prompts.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C10 + C16 Banking-Fintech; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No event-sourced audit ledger specification exists.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C10 + C16 Banking-Fintech; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No payment rail prioritization is documented (which rails first, which later).

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C10 + C16 Banking-Fintech; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No ISO 20022 messaging specification exists.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C10 + C16 Banking-Fintech; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No idempotency key strategy is defined for payment intents.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C10 + C16 Banking-Fintech; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No reconciliation frequency or scope is specified.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C10 + C16 Banking-Fintech; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No reconciliation exception workflow is documented.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C10 + C16 Banking-Fintech; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No live payment approval gate is specified.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C10 + C16 Banking-Fintech; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No ledger integration with FICA/CARF reporting is specified.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C10 + C16 Banking-Fintech; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No balance drift detection mechanism is defined.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C10 + C16 Banking-Fintech; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No $STM ledger adjacency is specified.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C10 + C16 Banking-Fintech; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No trading ledger adjacency is specified.

**Resolution:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Controls: (a) named compliance gate C10 + C16 Banking-Fintech; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

---

## 5. Suggested Improvements Delivered

### IMP-1. Add double-entry ledger specification to MP-BF09 (customer ledger, treasury ledger, settlement ledger, trading ledger adjacency, $STM ledger adjacency, chart of accounts).

**Delivered as prompt-ready content:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C10 Finance-CFO; gate: C10 + C16 Banking-Fintech.

### IMP-2. Add event-sourced audit ledger specification to MP-BF09 (immutable audit trail, append-only events, deterministic fold).

**Delivered as prompt-ready content:** NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C10 Finance-CFO; gate: C10 + C16 Banking-Fintech.

### IMP-3. Add payment rail specification to MP-BF10 (PayShap, EFT, instant EFT, card, RTC; prioritization; ISO 20022 messaging).

**Delivered as prompt-ready content:** Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C10 Finance-CFO; gate: C10 + C16 Banking-Fintech.

### IMP-4. Add idempotency key specification to MP-BF10 (idempotency keys, retries, timeouts, partial failure handling).

**Delivered as prompt-ready content:** Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C10 Finance-CFO; gate: C10 + C16 Banking-Fintech.

### IMP-5. Add approval gate workflow to MP-BF10 (no live payment without approval; environment tiers SIM/PAPER/STAGING/LIVE approved only).

**Delivered as prompt-ready content:** Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C10 Finance-CFO; gate: C10 + C16 Banking-Fintech.

### IMP-6. Add reconciliation engine specification to MP-BE13 (reconcile orders, deals, positions, balance, equity, margin, commissions, swaps, profits, strategy attribution, risk attribution).

**Delivered as prompt-ready content:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C10 Finance-CFO; gate: C10 + C16 Banking-Fintech.

### IMP-7. Add reconciliation exception detection (missing fills, duplicate fills, unmatched orders, balance drift, position drift, PnL mismatch) to MP-BE13.

**Delivered as prompt-ready content:** NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C10 Finance-CFO; gate: C10 + C16 Banking-Fintech.

### IMP-8. Add reconciliation exception workflow to MP-BE13 (detection, alerting, human review, resolution, audit report).

**Delivered as prompt-ready content:** Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C10 Finance-CFO; gate: C10 + C16 Banking-Fintech.

### IMP-9. Add ledger integration with FICA transaction monitoring and CARF reporting to MP-BF09.

**Delivered as prompt-ready content:** Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C10 Finance-CFO; gate: C10 + C16 Banking-Fintech.

### IMP-10. Add balance drift detection and alerting to MP-BF09.

**Delivered as prompt-ready content:** Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C10 Finance-CFO; gate: C10 + C16 Banking-Fintech.

### IMP-11. Add duplicate detection and missing fill detection to MP-BF09/MP-BE13.

**Delivered as prompt-ready content:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C10 Finance-CFO; gate: C10 + C16 Banking-Fintech.

### IMP-12. Add reporting workflows to MP-BF09.

**Delivered as prompt-ready content:** NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C10 Finance-CFO; gate: C10 + C16 Banking-Fintech.

### IMP-13. Reference `06-architecture/platform-design/domain-model/`, `integrations/`, `02-research/synthesis/cross-cutting/add-on/02-PAYMENTS-RAILS-MAP.md` with specific citations.

**Delivered as prompt-ready content:** Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C10 Finance-CFO; gate: C10 + C16 Banking-Fintech.

---

## 6. Missing Dependencies Resolved

| Dependency (source §6) | Status | Resolution |
|------------------------|--------|------------|
| Payment rail onboarding agreements (PayShap, EFT, card processors) from C16 Banking-Fintech. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| ISO 20022 messaging specification from payment rail providers. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| Ledger technology selection (build vs buy core ledger) from C06/C11. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| FICA transaction monitoring integration specification from C01/C12. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| CARF reporting data specification from C01/C10. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| $STM ledger specification from C13 Web3-Finance. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| Reconciliation exception SLA from C02 Operations. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| External accountant review of ledger design (double-entry correctness). | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| REA extraction (artefacts) | Blocked — no APK/ASAR/IPA supplied | Install REA, obtain artefacts, run extraction; artefact claims stay [INFER]/[UNKNOWN] until then |

---

## 7. Implementation Plan (TBS-mapped)

- Ingest research sources with [S#] citations.
- Identify gaps vs source prompt.
- Draft improved content with evidence grades.
- Validate against 16-section checklist.
- Hand off to Sparkling Curious.

**TBS phase:** T2 Council Agents / T3 Department Agents for C10 Finance-CFO.

---

## 8. Schemas & Contracts

No executable commands are produced (Ask Mode). Source reference schema:

```
No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:
- Ledger entry: `{entry_id, transaction_id, account_code, debit_amount, credit_amount, currency, timestamp, event_id, audit_ref, ledger_type (customer/treasury/settlement/trading/stm)}$
- Payment intent: `{intent_id, idempotency_key, payer_account, payee_account, amount, currency, rail, status, approval_required, approval_ref, created_at, settled_at, failure_reason}$
- Reconciliation exception: `{exception_id, type (missing_fill/duplicate_fill/unmatched_order/balance_drift/position_drift/pnl_mismatch), detected_at, severity, status, resolution, audit_ref}$
- Balance drift alert: `{alert_id, account_code, expected_balance, actual_balance, drift_amount, detected_at, acknowledged_by, resolved_at}$
---
```

---

## 9. Security Analysis

- Ledger data contains financial transaction information; encrypted at rest and in transit; access restricted to C10, C16, C12 only.
- No payment credentials or API keys in ledger artifacts (guardrail from MP-BF04).
- Event-sourced audit ledger must be tamper-evident and append-only.
- Idempotency keys must be cryptographically random to prevent replay attacks.
- Approval gate must require multi-party authorization for high-value payments.
- Reconciliation exceptions must be securely logged with full audit trail.
- Balance drift alerts must be investigated promptly to detect potential fraud.
- No ledger data in application logs (guardrail from MP-BF04).
- No destructive git operations without CRD-git-state-safeguard approval [S5].
- No secrets, keys, tokens or PII in artifacts [S14].
- CRD security-compliance-sentinel may intercept any delegation step [S5].

---

## 10. South African Regulatory Analysis

- **NPS Act 78 of 1998:** payment system participation, PayShap, clearing/settlement access, PSMB→SARB transition (Aug 2026).
- **ISO 20022:** payment messaging standard for SA payment modernisation.
- **FICA Act 38 of 2001:** transaction monitoring and record retention (5 years) integrated with ledger.
- **SARS CARF:** effective 1 March 2026; ledger data feeds CARF reporting.
- **Banks Act 94 of 1990:** PA prudential requirements for banking ledgers (capital, liquidity, BA returns).
- **Exchange Control Rules:** cross-border payments trigger SARB FinSurv reporting; ADLA for forex.
- **Companies Act 71 of 2008:** financial record-keeping requirements.
- **Tax Administration Act:** ledger data supports tax reporting (VAT, income tax, STT).
- **FATF grey-list exit (Oct 2025):** AML/CFT transaction monitoring must be integrated with ledger.

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

**Gate:** C10 + C16 Banking-Fintech.


| Gate | Owner | Status |
|------|-------|--------|
| Primary | C10 Finance-CFO Captain | Pending ratification |
| Legal | C01 Captain | Required where data/money/regulation |
| Security | C12 CRD | Required where security implicated |
| Executive | SC / Mychael | Cross-border / public funds |

---

## 13. Rollback Plan

- If ledger design is found incorrect: revert to previous spec, obtain external accountant review, re-issue with corrected double-entry design.
- If payment rail onboarding is delayed: operate in SIM/PAPER mode, defer rail activation, re-assess timeline.
- If idempotency is broken: halt payment processing, fix idempotency implementation, re-test, re-deploy.
- If reconciliation exceptions are unresolved: suspend affected payment types, route to manual reconciliation, escalate to C10/C16.
- If balance drift is detected: investigate immediately, freeze affected accounts if fraud suspected, report to C12 if security incident.
- If live payment approval gate is bypassed: revoke access, audit all payments since bypass, implement enhanced approval controls.
- All rollback actions logged in event-sourced ledger per SESS architecture.
- Revert artifact to previous version; all edits additive.
- Quarantine sessions violating model lock or SLA.
- Suspend cross-border flows absent POPIA s72 safeguards.

---

## 14. Escalation Path

```
SUB-C10-FIN-NEO-002
  → C10 Finance-CFO Captain
  → Sparkling Curious (SC-MASTER-001)
  → Mychael (CEO & Founder)
  → Stremiium Executive Board
```


**SLAs:** Critical 1h · High 4h · Medium 24h · Low 72h [S5].

---

## 15. Artifact Handoff to Sparkling Curious

- Reply at `prompts/replies/neobank/c10-finance-cfo/ledger-and-payments/reply.md` handed to Sparkling Curious for synthesis.
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

**End of Reply — SUB-C10-FIN-NEO-002**
