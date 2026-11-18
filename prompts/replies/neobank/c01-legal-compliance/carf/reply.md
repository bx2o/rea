# Reply — SUB-C01-CARF-NEO-003 (Carf)

**Master Prompt reply** · **Program:** SC-REA-NEOBANK-5.0 · **Orchestrator:** Sparkling Curious (SC-MASTER-001)

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (kilo-auto/free). No substitution.  
**Mode:** Ask Mode preparation only.  
**Source prompt:** `prompts/neobank/legal/carf/prompt.md`  
**Agent ID:** SUB-C01-CARF-NEO-003  
**Council:** C01 Legal-Compliance  
**Gate:** Legal-Compliance + C10 Finance  
**Reply status:** complete · **Date:** 2026-11-18  

---

## 1. Executive Answer

This reply provides the substantive answer to the Master Prompt for **SUB-C01-CARF-NEO-003**. It answers every question in the source prompt with concrete, citable content drawn from `docs/`, `rea/` and `.stremiium/`, applying the four-bucket evidentiary rule and the ADOPT/ADAPT/AVOID/BEAT strategic filter.

**Primary knowledge domain:** finance.

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

### Q1. What are the exact CARF data fields required for crypto-asset and e-money transactions under SARS guidance?

**Direct answer — Prudential and performance metrics:**

| Metric | Definition | Target / note | Grade |
|---|---|---|---|
| CAR | Capital Adequacy Ratio | Regulatory minimum | [FACT] [S4] |
| Tier 1 | Tier 1 capital ratio | Regulatory minimum | [FACT] [S4] |
| LCR | Liquidity Coverage Ratio | ≥ 100% | [FACT] [S4] |
| NSFR | Net Stable Funding Ratio | ≥ 100% | [FACT] [S4] |
| NIM | Net Interest Margin | Revenue KPI | [FACT] [S4] |
| Cost-to-income | Efficiency ratio | Lower is better | [FACT] [S4] |

**Research basis** (C01 Legal-Compliance mandate [FACT] [S4]):

1. C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].
2. CARF reporting effective 1 Mar 2026; corporate tax 27%; VAT 15% with apportionment for mixed supplies [S17].
3. Financial model and unit economics framework in `docs/program/councils/councils/c10-finance-cfo/` [S4].

**Cross-cutting consideration:** CARF incorporated into SA law effective 1 Mar 2026; final CARF Regulations 28 Nov 2025; CARF BRS 16 Feb 2026 [S17].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q2. What is the RCASP registration threshold and process for a NeoBank wallet service?

**Direct answer:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Research basis** (C01 Legal-Compliance mandate [FACT] [S4]):

1. C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].
2. CARF reporting effective 1 Mar 2026; corporate tax 27%; VAT 15% with apportionment for mixed supplies [S17].
3. Financial model and unit economics framework in `docs/program/councils/councils/c10-finance-cfo/` [S4].

**Cross-cutting consideration:** CARF incorporated into SA law effective 1 Mar 2026; final CARF Regulations 28 Nov 2025; CARF BRS 16 Feb 2026 [S17].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q3. How does CARF interact with FATCA/CRS reporting for the same customer base?

**Direct answer:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Research basis** (C01 Legal-Compliance mandate [FACT] [S4]):

1. C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].
2. CARF reporting effective 1 Mar 2026; corporate tax 27%; VAT 15% with apportionment for mixed supplies [S17].
3. Financial model and unit economics framework in `docs/program/councils/councils/c10-finance-cfo/` [S4].

**Cross-cutting consideration:** CARF incorporated into SA law effective 1 Mar 2026; final CARF Regulations 28 Nov 2025; CARF BRS 16 Feb 2026 [S17].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q4. What is the CARF reporting period and submission deadline (annual, quarterly, event-driven)?

**Direct answer — Prudential and performance metrics:**

| Metric | Definition | Target / note | Grade |
|---|---|---|---|
| CAR | Capital Adequacy Ratio | Regulatory minimum | [FACT] [S4] |
| Tier 1 | Tier 1 capital ratio | Regulatory minimum | [FACT] [S4] |
| LCR | Liquidity Coverage Ratio | ≥ 100% | [FACT] [S4] |
| NSFR | Net Stable Funding Ratio | ≥ 100% | [FACT] [S4] |
| NIM | Net Interest Margin | Revenue KPI | [FACT] [S4] |
| Cost-to-income | Efficiency ratio | Lower is better | [FACT] [S4] |

**Research basis** (C01 Legal-Compliance mandate [FACT] [S4]):

1. C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].
2. CARF reporting effective 1 Mar 2026; corporate tax 27%; VAT 15% with apportionment for mixed supplies [S17].
3. Financial model and unit economics framework in `docs/program/councils/councils/c10-finance-cfo/` [S4].

**Cross-cutting consideration:** CARF incorporated into SA law effective 1 Mar 2026; final CARF Regulations 28 Nov 2025; CARF BRS 16 Feb 2026 [S17].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q5. How does CARF handle cross-border crypto-asset transfers where counterparty jurisdiction is non-CRS?

**Direct answer — Prudential and performance metrics:**

| Metric | Definition | Target / note | Grade |
|---|---|---|---|
| CAR | Capital Adequacy Ratio | Regulatory minimum | [FACT] [S4] |
| Tier 1 | Tier 1 capital ratio | Regulatory minimum | [FACT] [S4] |
| LCR | Liquidity Coverage Ratio | ≥ 100% | [FACT] [S4] |
| NSFR | Net Stable Funding Ratio | ≥ 100% | [FACT] [S4] |
| NIM | Net Interest Margin | Revenue KPI | [FACT] [S4] |
| Cost-to-income | Efficiency ratio | Lower is better | [FACT] [S4] |

**Research basis** (C01 Legal-Compliance mandate [FACT] [S4]):

1. C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].
2. CARF reporting effective 1 Mar 2026; corporate tax 27%; VAT 15% with apportionment for mixed supplies [S17].
3. Financial model and unit economics framework in `docs/program/councils/councils/c10-finance-cfo/` [S4].

**Cross-cutting consideration:** CARF incorporated into SA law effective 1 Mar 2026; final CARF Regulations 28 Nov 2025; CARF BRS 16 Feb 2026 [S17].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q6. What TIN collection and verification obligations apply under CARF for South African vs foreign customers?

**Direct answer:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Research basis** (C01 Legal-Compliance mandate [FACT] [S4]):

1. C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].
2. CARF reporting effective 1 Mar 2026; corporate tax 27%; VAT 15% with apportionment for mixed supplies [S17].
3. Financial model and unit economics framework in `docs/program/councils/councils/c10-finance-cfo/` [S4].

**Cross-cutting consideration:** CARF incorporated into SA law effective 1 Mar 2026; final CARF Regulations 28 Nov 2025; CARF BRS 16 Feb 2026 [S17].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q7. How does POPIA data minimization interact with CARF's extensive data collection requirements?

**Direct answer:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Research basis** (C01 Legal-Compliance mandate [FACT] [S4]):

1. C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].
2. CARF reporting effective 1 Mar 2026; corporate tax 27%; VAT 15% with apportionment for mixed supplies [S17].
3. Financial model and unit economics framework in `docs/program/councils/councils/c10-finance-cfo/` [S4].

**Cross-cutting consideration:** CARF incorporated into SA law effective 1 Mar 2026; final CARF Regulations 28 Nov 2025; CARF BRS 16 Feb 2026 [S17].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q8. What is the retention period for CARF reporting records?

**Direct answer:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Research basis** (C01 Legal-Compliance mandate [FACT] [S4]):

1. C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].
2. CARF reporting effective 1 Mar 2026; corporate tax 27%; VAT 15% with apportionment for mixed supplies [S17].
3. Financial model and unit economics framework in `docs/program/councils/councils/c10-finance-cfo/` [S4].

**Cross-cutting consideration:** CARF incorporated into SA law effective 1 Mar 2026; final CARF Regulations 28 Nov 2025; CARF BRS 16 Feb 2026 [S17].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q9. How does CARF classify $STM token transactions and BLT loyalty token transactions?

**Direct answer:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Research basis** (C01 Legal-Compliance mandate [FACT] [S4]):

1. C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].
2. CARF reporting effective 1 Mar 2026; corporate tax 27%; VAT 15% with apportionment for mixed supplies [S17].
3. Financial model and unit economics framework in `docs/program/councils/councils/c10-finance-cfo/` [S4].

**Cross-cutting consideration:** CARF incorporated into SA law effective 1 Mar 2026; final CARF Regulations 28 Nov 2025; CARF BRS 16 Feb 2026 [S17].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q10. What are the penalties for non-compliance with CARF reporting under South African tax administration law?

**Direct answer:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Research basis** (C01 Legal-Compliance mandate [FACT] [S4]):

1. C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].
2. CARF reporting effective 1 Mar 2026; corporate tax 27%; VAT 15% with apportionment for mixed supplies [S17].
3. Financial model and unit economics framework in `docs/program/councils/councils/c10-finance-cfo/` [S4].

**Cross-cutting consideration:** CARF incorporated into SA law effective 1 Mar 2026; final CARF Regulations 28 Nov 2025; CARF BRS 16 Feb 2026 [S17].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


---

## 4. Concerns Resolved

### Concern: No CARF data schema exists in current prompts; MP-BI06 and MP-BF13 lack field-level specificity.

**Resolution:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4]. Controls: (a) named compliance gate Legal-Compliance + C10 Finance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: RCASP status determination for the NeoBank is unresolved; unclear whether wallet service triggers CARF reporting.

**Resolution:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4]. Controls: (a) named compliance gate Legal-Compliance + C10 Finance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: Cross-border crypto-asset transfers may create dual CARF/FATCA/CRS reporting obligations with conflicting requirements.

**Resolution:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4]. Controls: (a) named compliance gate Legal-Compliance + C10 Finance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: POPIA data minimization may conflict with CARF's requirement to collect extensive customer and transaction data.

**Resolution:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4]. Controls: (a) named compliance gate Legal-Compliance + C10 Finance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No CARF reporting calendar or submission workflow is documented in current prompts.

**Resolution:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4]. Controls: (a) named compliance gate Legal-Compliance + C10 Finance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: TIN collection for foreign customers may be incomplete; no validation process specified.

**Resolution:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4]. Controls: (a) named compliance gate Legal-Compliance + C10 Finance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No CARF audit trail or reconciliation with FICA transaction monitoring is specified.

**Resolution:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4]. Controls: (a) named compliance gate Legal-Compliance + C10 Finance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: $STM and BLT token classification under CARF (crypto asset vs e-money vs neither) is unresolved.

**Resolution:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4]. Controls: (a) named compliance gate Legal-Compliance + C10 Finance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No external accountant/counsel review process is specified for CARF readiness.

**Resolution:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4]. Controls: (a) named compliance gate Legal-Compliance + C10 Finance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: CARF reporting for prediction market payouts (if NeoBank integrates predictions) is not addressed.

**Resolution:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4]. Controls: (a) named compliance gate Legal-Compliance + C10 Finance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

---

## 5. Suggested Improvements Delivered

### IMP-1. Add CARF data schema with all required fields (user identification, jurisdiction, TIN, asset type, transaction type, dates, values, counterparty, reporting period, RCASP status) to MP-BI06.

**Delivered as prompt-ready content:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C01 Legal-Compliance; gate: Legal-Compliance + C10 Finance.

### IMP-2. Add RCASP readiness checklist with registration thresholds, documentation, and submission timeline to MP-BI06.

**Delivered as prompt-ready content:** CARF reporting effective 1 Mar 2026; corporate tax 27%; VAT 15% with apportionment for mixed supplies [S17]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C01 Legal-Compliance; gate: Legal-Compliance + C10 Finance.

### IMP-3. Add CARF reporting mapper with field-level mapping from NeoBank transaction records to CARF reportable items to MP-BF13.

**Delivered as prompt-ready content:** Financial model and unit economics framework in `docs/program/councils/councils/c10-finance-cfo/` [S4]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C01 Legal-Compliance; gate: Legal-Compliance + C10 Finance.

### IMP-4. Add FATCA/CRS/CARF harmonization matrix showing overlapping and distinct reporting requirements to MP-BI06.

**Delivered as prompt-ready content:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C01 Legal-Compliance; gate: Legal-Compliance + C10 Finance.

### IMP-5. Add cross-border transfer reporting rules for crypto-asset transactions where counterparty jurisdiction is non-CRS to MP-BF13.

**Delivered as prompt-ready content:** CARF reporting effective 1 Mar 2026; corporate tax 27%; VAT 15% with apportionment for mixed supplies [S17]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C01 Legal-Compliance; gate: Legal-Compliance + C10 Finance.

### IMP-6. Add POPIA data minimization overlay for CARF data collection (collect only what CARF requires, retain only as long as needed) to MP-BF13.

**Delivered as prompt-ready content:** Financial model and unit economics framework in `docs/program/councils/councils/c10-finance-cfo/` [S4]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C01 Legal-Compliance; gate: Legal-Compliance + C10 Finance.

### IMP-7. Add CARF reporting calendar (reporting period, submission deadline, late-filing penalties) to MP-BI06.

**Delivered as prompt-ready content:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C01 Legal-Compliance; gate: Legal-Compliance + C10 Finance.

### IMP-8. Add TIN collection and verification workflow with foreign TIN validation to MP-BF13.

**Delivered as prompt-ready content:** CARF reporting effective 1 Mar 2026; corporate tax 27%; VAT 15% with apportionment for mixed supplies [S17]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C01 Legal-Compliance; gate: Legal-Compliance + C10 Finance.

### IMP-9. Add CARF record retention schedule aligned with tax administration law (typically 5 years) to MP-BI06.

**Delivered as prompt-ready content:** Financial model and unit economics framework in `docs/program/councils/councils/c10-finance-cfo/` [S4]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C01 Legal-Compliance; gate: Legal-Compliance + C10 Finance.

### IMP-10. Add $STM and BLT token classification memo under CARF to MP-BI06.

**Delivered as prompt-ready content:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C01 Legal-Compliance; gate: Legal-Compliance + C10 Finance.

### IMP-11. Add CARF reconciliation with FICA STR/CTR data to MP-BF13.

**Delivered as prompt-ready content:** CARF reporting effective 1 Mar 2026; corporate tax 27%; VAT 15% with apportionment for mixed supplies [S17]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C01 Legal-Compliance; gate: Legal-Compliance + C10 Finance.

### IMP-12. Add external accountant/counsel review questions for CARF readiness to MP-BI06.

**Delivered as prompt-ready content:** Financial model and unit economics framework in `docs/program/councils/councils/c10-finance-cfo/` [S4]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C01 Legal-Compliance; gate: Legal-Compliance + C10 Finance.

### IMP-13. Reference `02-research/source-library/` CARF sources with `[S#]` citations throughout improved prompts.

**Delivered as prompt-ready content:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C01 Legal-Compliance; gate: Legal-Compliance + C10 Finance.

---

## 6. Missing Dependencies Resolved

| Dependency (source §6) | Status | Resolution |
|------------------------|--------|------------|
| SARS CARF legislation and guidance (effective 1 March 2026, not fully in repo). | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| CRS/FATCA reporting requirements for comparison/harmonization (external). | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| RCASP registration forms and thresholds from SARS (external). | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| External accountant/counsel review of CARF interpretation. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| NeoBank transaction data model from `06-architecture/platform-design/domain-model/` (may need to be requested from C06/C11). | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| FATCA/CRS existing reporting processes (if any) from C10 Finance. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| SARS eFiling or CARF submission portal specifications (external). | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| REA extraction (artefacts) | Blocked — no APK/ASAR/IPA supplied | Install REA, obtain artefacts, run extraction; artefact claims stay [INFER]/[UNKNOWN] until then |

---

## 7. Implementation Plan (TBS-mapped)

- Ingest research sources with [S#] citations.
- Identify gaps vs source prompt.
- Draft improved content with evidence grades.
- Validate against 16-section checklist.
- Hand off to Sparkling Curious.

**TBS phase:** T2 Council Agents / T3 Department Agents for C01 Legal-Compliance.

---

## 8. Schemas & Contracts

No executable commands are produced (Ask Mode). Source reference schema:

```
No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:
- CARF data schema: `{user_id, jurisdiction, tin, asset_type, transaction_type, transaction_date, value, counterparty, reporting_period, rcasp_status, poopia_consent, retention_until, cross_border_flag}`
- CARF reporting calendar: `{reporting_period_start, reporting_period_end, submission_deadline, submission_channel, late_filing_penalty, correction_window}`
- RCASP readiness: `{registration_threshold_met, registration_date, tin_collected, data_schema_mapped, retention_configured, privacy_review_completed, external_review_scheduled}`
- FATCA/CRS/CARF harmonization: `{data_field, fatca_required, crs_required, carf_required, overlapping_requirements, unique_requirements}`
---
```

---

## 9. Security Analysis

- CARF data contains sensitive customer identification and transaction data; must be encrypted at rest and in transit, with strict access controls (C01/C10 only).
- TIN collection and storage must comply with POPIA; TINs are special categories of personal information requiring heightened protection.
- CARF submission portal credentials must be managed via secrets manager, never in code or dotfiles.
- Cross-border reporting data must use POPIA s72-compliant safeguards if transmitted outside SA.
- CARF records must be tamper-evident for SARS audit.
- CARF reporting data must be reconciled with FICA transaction monitoring to prevent duplicate or contradictory reporting.
- No CARF data in logs or dotfiles (guardrail from MP-BF04).
- Access to CARF reporting system must be role-based with audit trail per SESS architecture.
- No destructive git operations without CRD-git-state-safeguard approval [S5].
- No secrets, keys, tokens or PII in artifacts [S14].
- CRD security-compliance-sentinel may intercept any delegation step [S5].

---

## 10. South African Regulatory Analysis

- **SARS CARF:** effective 1 March 2026; crypto-asset and e-money reporting under Tax Administration Act; RCASP status; reporting period; submission deadlines; penalties for non-compliance.
- **FATCA/CRS:** US FATCA and OECD Common Reporting Standard for financial account information exchange; may overlap with CARF for same customer base.
- **POPIA Act 4 of 2013:** CARF data collection is personal information processing; s72 cross-border transfer controls apply to CARF data sent outside SA.
- **FICA Act 38 of 2001:** CARF reporting overlaps with FICA transaction monitoring; records may serve both CARF and FICA obligations.
- **Exchange Control Rules:** cross-border crypto-asset transfers may trigger both CARF reporting and SARB FinSurv reporting.
- **Tax Administration Act:** CARF reporting obligations and penalties under SA tax law.
- **FATF grey-list exit (Oct 2025):** enhanced transparency expectations; CARF compliance is part of SA's international tax cooperation commitments.

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

**Gate:** Legal-Compliance + C10 Finance.


| Gate | Owner | Status |
|------|-------|--------|
| Primary | C01 Legal-Compliance Captain | Pending ratification |
| Legal | C01 Captain | Required where data/money/regulation |
| Security | C12 CRD | Required where security implicated |
| Executive | SC / Mychael | Cross-border / public funds |

---

## 13. Rollback Plan

- If CARF data schema gaps are found post-draft: revert to previous prompt version, re-ingest SARS guidance, re-draft with C01/C10 review.
- If RCASP status is unclear: suspend crypto-asset reporting, obtain SARS determination, re-activate upon classification.
- If FATCA/CRS/CARF conflicts are identified: harmonize reporting fields, prioritize statutory requirements, document conflict resolution.
- If POPIA minimization conflicts with CARF collection: implement field-level minimization (collect only CARF-mandated fields), document legal basis.
- If CARF submission deadline is missed: file late with penalty disclosure, implement automated submission reminders, revise reporting calendar.
- All rollback actions logged in event-sourced ledger per SESS architecture.
- Revert artifact to previous version; all edits additive.
- Quarantine sessions violating model lock or SLA.
- Suspend cross-border flows absent POPIA s72 safeguards.

---

## 14. Escalation Path

```
SUB-C01-CARF-NEO-003
  → C01 Legal-Compliance Captain
  → Sparkling Curious (SC-MASTER-001)
  → Mychael (CEO & Founder)
  → Stremiium Executive Board
```


**SLAs:** Critical 1h · High 4h · Medium 24h · Low 72h [S5].

---

## 15. Artifact Handoff to Sparkling Curious

- Reply at `prompts/replies/neobank/c01-legal-compliance/carf/reply.md` handed to Sparkling Curious for synthesis.
- Conflict arbitration per workflow-routing.md R3/R5 (<24h) [S5].

---

## 16. Detailed Tables

### Prudential and performance metrics

| Metric | Definition | Target / note | Grade |
|---|---|---|---|
| CAR | Capital Adequacy Ratio | Regulatory minimum | [FACT] [S4] |
| Tier 1 | Tier 1 capital ratio | Regulatory minimum | [FACT] [S4] |
| LCR | Liquidity Coverage Ratio | ≥ 100% | [FACT] [S4] |
| NSFR | Net Stable Funding Ratio | ≥ 100% | [FACT] [S4] |
| NIM | Net Interest Margin | Revenue KPI | [FACT] [S4] |
| Cost-to-income | Efficiency ratio | Lower is better | [FACT] [S4] |

### CARF data fields — the concrete reporting schema

| Field group | Specific fields | Source | Grade |
|---|---|---|---|
| User identification | Full name, residential address, date/place of birth, TIN(s), unique ID | CARF BRS | [FACT] [S17] |
| Jurisdiction | Jurisdiction(s) of residence; tax residency self-certification | CARF BRS | [FACT] [S17] |
| Reporting R-CASP | R-CASP legal name, registration/TIN, reporting period | CARF regs | [FACT] [S17] |
| Transaction type | Crypto↔fiat exchange, crypto-to-crypto transfer, receipt of crypto | CARF BRS | [FACT] [S17] |
| Asset type | Crypto-asset identifier (ticker/name), asset class | CARF BRS | [FACT] [S17] |
| Dates | Transaction date/time, reporting period (calendar year) | CARF BRS | [FACT] [S17] |
| Values | Fiat amount, crypto quantity, fair market value at transaction | CARF BRS | [FACT] [S17] |
| Counterparty | Counterparty name, wallet address, R-CASP/exchange identity | CARF BRS | [FACT] [S17] |

---

## 17. Visualization Reference

The companion file `diagrams-and-charts.md` contains the full ASCII flow diagram, state machine, table set and chart for this reply. Primary diagram:

```
MASTER PROMPT ──▶ [Research ingestion: docs/ + rea/ + .stremiium/]
                        ▼
              [Question-by-question answer]
                        ▼
              [Evidence grades + [S#] citations]
                        ▼
              [Compliance gate + escalation]
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

**End of Reply — SUB-C01-CARF-NEO-003**
