# Master Prompt — C05-EMPLOYEE-DEVELOPMENT-DIRECTOR (Employee-Development-Director)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c05-hr-culture/C05-EMPLOYEE-DEVELOPMENT-DIRECTOR-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C05-EMPLOYEE-DEVELOPMENT-DIRECTOR  
**Council:** C05 C05 HR-Culture  
**Gate:** C05 HR-Culture

---

## 1. Summary

- This master prompt instructs C05-EMPLOYEE-DEVELOPMENT-DIRECTOR to create learning paths for using OpenCode, Hermes, CopilotKit, and the agent OS, creating a development curriculum with courses, certifications, and progression tracks.
- Research data to ingest: 01-program/councils/c05-hr-people/CHARTER.md, .stremiium/skills/.
- Prompts to improve: Learning paths, OpenCode training, Hermes training, CopilotKit training, Agent OS training, Development curriculum, Certification tracks.
- Output artifact: `artifacts/stremiium/c05-hr-culture/C05-EMPLOYEE-DEVELOPMENT-DIRECTOR-prompts.md`.

---

## 2. Assumptions

- Learning paths are defined for OpenCode, Hermes, CopilotKit.
- Development curriculum includes courses and certifications.
- Certifications are assigned.
- Progression tracks are established.

---

## 3. Questions

- What learning paths are needed for OpenCode, Hermes, CopilotKit?
- What courses should be in the development curriculum?
- How are certifications assigned?
- What are the progression tracks?
- How is learning effectiveness measured?

---

## 4. Concerns

- No development curriculum exists.
- Learning paths not defined per role.
- Certification tracks not established.
- Learning effectiveness not measured.

---

## 5. Suggested Improvements

- Create learning paths for OpenCode, Hermes, CopilotKit, and agent OS.
- Define development curriculum with courses and certifications.
- Establish progression tracks for agent operators.
- Measure learning effectiveness through assessments.

---

## 6. Missing Dependencies

- .stremiium/skills/ skills library
- C03 knowledge architecture
- C11 dev-engineering for tool training

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
- Reference schema: {learningPathId, role, tool, courses, certification, progressionTrack, duration, owner, status, effectivenessMetric}

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

- Curriculum may contain tool capabilities; restrict per classification.
- No security-critical training without C12 review.

---

## 11. South African Regulatory Considerations

- Skills Development Act 97 of 1998
- POPIA for learner data

---

## 12. Compliance Gate

- C05 HR-Culture. Curriculum requires C05 + C12 for security-related training.

---

## 13. Rollback Plan

- Re-design curriculum on feedback.
- Re-assign learning paths on role changes.
- Re-certify on curriculum updates.

---

## 14. Escalation Path

- C05-EMPLOYEE-DEVELOPMENT-DIRECTOR → C05 HR-Culture Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c05-hr-culture/C05-EMPLOYEE-DEVELOPMENT-DIRECTOR-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C05 HR-Culture outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
