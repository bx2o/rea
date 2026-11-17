# Master Prompt — C04-SCENARIO-MODELER (Scenario-Modeler)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c04-strategy-growth/C04-SCENARIO-MODELER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C04-SCENARIO-MODELER  
**Council:** C04 C04 Strategy-Growth  
**Gate:** C04 Strategy-Growth + C01 Legal-Compliance

---

## 1. Summary

- This master prompt instructs C04-SCENARIO-MODELER to model scenarios for local-only AI, hybrid cloud/local, budget constrained, regulatory tightened, hardware upgraded, and multi-node lab, creating a scenario matrix with implications and recommendations.
- Research data to ingest: 01-program/plan/PLAN.md, 02-research/landscape/02-regulatory-framework/.
- Prompts to improve: Local-only AI scenario, Hybrid cloud/local scenario, Budget constrained scenario, Regulatory tightened scenario, Hardware upgraded scenario, Multi-node lab scenario, Scenario matrix.
- Output artifact: `artifacts/stremiium/c04-strategy-growth/C04-SCENARIO-MODELER-prompts.md`.

---

## 2. Assumptions

- Six scenarios are modeled: local-only, hybrid, budget-constrained, regulatory-tightened, hardware-upgraded, multi-node lab.
- Scenario implications are documented.
- SA regulatory scenario includes POPIA/FICA/CARF implications.
- Decision framework for scenario selection is defined.

---

## 3. Questions

- What are the implications of local-only AI for Stremiium?
- What is the hybrid cloud/local model?
- How does budget constraint affect the roadmap?
- What if regulatory requirements tighten?
- What if hardware is upgraded?
- What is the multi-node lab scenario?

---

## 4. Concerns

- No scenario modeling exists.
- Scenario implications not documented.
- No decision framework for scenario selection.
- Regulatory scenario not modeled with SA requirements.

---

## 5. Suggested Improvements

- Model six scenarios: local-only, hybrid, budget-constrained, regulatory-tightened, hardware-upgraded, multi-node lab.
- Create scenario matrix with implications, recommendations, and trigger conditions.
- Add SA regulatory scenario with POPIA/FICA/CARF implications.
- Define decision framework for scenario selection.

---

## 6. Missing Dependencies

- 02-research/landscape/02-regulatory-framework/
- C06 hardware specifications
- C10 budget model

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
- Reference schema: {scenarioId, name, assumptions, implications, recommendations, triggerConditions, poopiaImplications, ficaImplications, carfImplications, status}

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

- Scenario matrix may contain strategic assumptions; restrict to C04 + C10 + Executive.
- No internal financial data in scenarios.

---

## 11. South African Regulatory Considerations

- POPIA for data residency scenarios
- FICA for financial scenario constraints
- SARS CARF for reporting scenarios

---

## 12. Compliance Gate

- C04 Strategy-Growth + C01 Legal-Compliance. Regulatory scenario requires C01 sign-off.

---

## 13. Rollback Plan

- Re-model scenarios on assumption changes.
- Re-evaluate scenario selection on trigger conditions.
- Escalate scenario conflicts to Sparkling Curious + Executive.

---

## 14. Escalation Path

- C04-SCENARIO-MODELER → C04 Strategy-Growth Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c04-strategy-growth/C04-SCENARIO-MODELER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C04 Strategy-Growth outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
