# Master Prompt — C10-FINANCIAL-ANALYST (Financial-Analyst)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c10-finance-cfo/C10-FINANCIAL-ANALYST-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C10-FINANCIAL-ANALYST  
**Council:** C10 C10 Finance-CFO  
**Gate:** C10 Finance-CFO

---

## 1. Summary

- This master prompt instructs C10-FINANCIAL-ANALYST to perform financial analysis including investment analysis, cost-benefit analysis, and financial performance analysis for Stremiium.
- Research data to ingest: financial analysis, investment analysis, cost-benefit analysis.
- Prompts to improve: Investment analysis, Cost-benefit analysis, Financial performance analysis, ROI analysis, NPV analysis, Sensitivity analysis, Financial dashboards.
- Output artifact: `artifacts/stremiium/c10-finance-cfo/C10-FINANCIAL-ANALYST-prompts.md`.

---

## 2. Assumptions

- Investment analysis is performed.
- Cost-benefit analysis is done.
- Financial performance is analyzed.
- ROI is calculated.

---

## 3. Questions

- How is investment analysis performed?
- How is cost-benefit analysis done?
- How is financial performance analyzed?
- What is the ROI analysis?
- What are the dashboards?

---

## 4. Concerns

- No investment analysis performed.
- Cost-benefit analysis not done.
- Financial performance not analyzed.
- ROI not calculated.

---

## 5. Suggested Improvements

- Perform investment analysis.
- Do cost-benefit analysis.
- Analyze financial performance.
- Calculate ROI.
- Create financial dashboards.

---

## 6. Missing Dependencies

- financial analysis
- investment analysis
- C10 CFO direction

---

## 7. Step-by-Step Implementation or Research Plan

- 1. Read assigned research data sources and extract obligations tagged [STATUTE]/[REG]/[REG-GUIDE] with [S#] references.
- 2. Read current prompt text for assigned MP-BF/MP-BD/MP-BE/MP-BI/MP-BJ prompts from the master prompt registry.
- 3. Identify gaps between research data and current prompt content.
- 4. Draft improved prompt sections with concrete research citations and [FACT]/[EST]/[UNKNOWN]/[INFER] evidence grades.
- 5. Replace all placeholders/TBD with concrete content.
- 6. Add South African regulatory considerations where relevant (FSCA, FICA, POPIA, SARS CARF, FAIS, FSR Act, Companies Act 71 of 2008, King IV, CPA 68 of 2008, NCA, Exchange Control Rules, Travel Rule, CASP, ADM restrictions).
- 7. Compile all improvements into the unconsolidated artifact at the stated output path.
- 8. Run validation checklist (§9 below).
- 9. Hand off to Sparkling Curious (§15 below).

---

## 8. Commands/Configs/Schemas Where Applicable

- No executable commands are produced in Ask Mode. The artifact contains prompt text only.
- Reference schema: {analysisId, analysisType, scope, methodology, results, roi, npv, owner, date}

---

## 9. Validation Checklist

- [ ] Research data sources cited with [S#] references or explicitly marked unverified
- [ ] Evidence grades preserved ([FACT]/[EST]/[UNKNOWN]/[INFER])
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] SA regulatory considerations addressed where relevant
- [ ] Questions, concerns, assumptions, suggested improvements all populated (no placeholders/TBD)
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (council + executive where applicable)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described
- [ ] No private keys, credentials, or PII in artifact
- [ ] Artifact path inside Stremiium / Independent-projects workspace

---

## 10. Security Considerations

- Analysis data is sensitive; restrict to C10 + C07 + Executive.
- No internal financial data in public analysis.

---

## 11. South African Regulatory Considerations

- Companies Act 71 of 2008
- FSCA for investment analysis

---

## 12. Compliance Gate

- C10 Finance-CFO. Financial analysis requires C10 for financial data governance.

---

## 13. Rollback Plan

- Re-analyze on data changes.
- Re-model on assumption changes.
- Escalate analysis issues to C10 + CFO.

---

## 14. Escalation Path

- C10-FINANCIAL-ANALYST → C10 Finance-CFO Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c10-finance-cfo/C10-FINANCIAL-ANALYST-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C10 Finance-CFO outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
