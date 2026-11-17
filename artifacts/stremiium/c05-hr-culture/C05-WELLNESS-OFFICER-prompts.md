# Master Prompt — C05-WELLNESS-OFFICER (Wellness-Officer)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c05-hr-culture/C05-WELLNESS-OFFICER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C05-WELLNESS-OFFICER  
**Council:** C05 C05 HR-Culture  
**Gate:** C05 HR-Culture

---

## 1. Summary

- This master prompt instructs C05-WELLNESS-OFFICER to prevent burnout from always-on agent workflows, creating a wellness policy with boundaries, rest periods, and intervention triggers.
- Research data to ingest: 01-program/councils/c05-hr-people/CHARTER.md.
- Prompts to improve: Wellness policy, Burnout prevention, Work boundaries, Rest period requirements, Intervention triggers.
- Output artifact: `artifacts/stremiium/c05-hr-culture/C05-WELLNESS-OFFICER-prompts.md`.

---

## 2. Assumptions

- Burnout is prevented in always-on agent workflows.
- Work boundaries are set for humans and agents.
- Rest periods are required.
- Intervention triggers indicate burnout.

---

## 3. Questions

- How is burnout prevented in always-on agent workflows?
- What work boundaries are set for humans and agents?
- What rest periods are required?
- What intervention triggers indicate burnout?
- How are interventions conducted?

---

## 4. Concerns

- No wellness policy exists.
- Burnout not addressed in agent workflows.
- Work boundaries not defined.
- Intervention triggers not established.

---

## 5. Suggested Improvements

- Create wellness policy for always-on agent workflows.
- Define work boundaries (hours, response times, availability).
- Establish rest period requirements.
- Define intervention triggers and intervention process.

---

## 6. Missing Dependencies

- C05 chief-people-officer direction
- C02 operations SLA definitions

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
- Reference schema: {wellnessItem, domain, boundary, restPeriod, interventionTrigger, interventionProcess, owner, reviewDate, status}

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

- Wellness data may contain health info; restrict to C05 + individual + manager.
- No medical data in wellness policy.

---

## 11. South African Regulatory Considerations

- POPIA for health data
- Occupational Health and Safety Act 85 of 1993

---

## 12. Compliance Gate

- C05 HR-Culture. Wellness policy requires C05 + individual consent for health data.

---

## 13. Rollback Plan

- Re-intervene on burnout indicators.
- Re-adjust boundaries on capacity changes.
- Escalate wellness crises to C05 chief-people-officer + C01.

---

## 14. Escalation Path

- C05-WELLNESS-OFFICER → C05 HR-Culture Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c05-hr-culture/C05-WELLNESS-OFFICER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C05 HR-Culture outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
