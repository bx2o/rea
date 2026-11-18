# Master Prompt — C07-SALES-ENABLEMENT-LEAD (Sales-Enablement-Lead)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c07-sales-revenue/C07-SALES-ENABLEMENT-LEAD-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C07-SALES-ENABLEMENT-LEAD  
**Council:** C07 C07 Sales-Revenue  
**Gate:** C07 Sales-Revenue

---

## 1. Summary

- This master prompt instructs C07-SALES-ENABLEMENT-LEAD to create sales enablement materials, training, and collateral for the Stremiium sales team.
- Research data to ingest: C07 sales strategy, product documentation, competitive intelligence.
- Prompts to improve: Sales collateral, Sales training, Objection handling, Battle cards, Demo scripts, Sales playbook, Enablement metrics.
- Output artifact: `artifacts/stremiium/c07-sales-revenue/C07-SALES-ENABLEMENT-LEAD-prompts.md`.

---

## 2. Assumptions

- Sales collateral is created.
- Sales training is documented.
- Objection handling is defined.
- Battle cards are created.

---

## 3. Questions

- What sales collateral is needed?
- What sales training is required?
- How are objections handled?
- What are the battle cards?
- What are the demo scripts?

---

## 4. Concerns

- No sales collateral exists.
- Sales training not documented.
- Objection handling not defined.
- Battle cards not created.

---

## 5. Suggested Improvements

- Create sales collateral.
- Document sales training.
- Define objection handling.
- Create battle cards.
- Create demo scripts and sales playbook.

---

## 6. Missing Dependencies

- C07 sales strategy
- product documentation
- C04 competitive intelligence

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
- Reference schema: {materialId, type, audience, content, owner, version, lastUpdated, usageMetric}

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

- Sales materials may contain strategy; restrict to C07 + C04 + C15.
- No customer data in sales materials.

---

## 11. South African Regulatory Considerations

- CPA 68 of 2008 for consumer-facing materials
- FSCA for financial service marketing

---

## 12. Compliance Gate

- C07 Sales-Revenue. Sales enablement requires C07 + C04 for market alignment.

---

## 13. Rollback Plan

- Re-create materials on product changes.
- Re-train on strategy changes.
- Escalate enablement issues to C07 + C04.

---

## 14. Escalation Path

- C07-SALES-ENABLEMENT-LEAD → C07 Sales-Revenue Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c07-sales-revenue/C07-SALES-ENABLEMENT-LEAD-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C07 Sales-Revenue outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
