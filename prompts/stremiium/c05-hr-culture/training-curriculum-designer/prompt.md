# Master Prompt — C05-TRAINING-CURRICULUM-DESIGNER (Training-Curriculum-Designer)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c05-hr-culture/C05-TRAINING-CURRICULUM-DESIGNER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C05-TRAINING-CURRICULUM-DESIGNER  
**Council:** C05 C05 HR-Culture  
**Gate:** C05 HR-Culture

---

## 1. Summary

- This master prompt instructs C05-TRAINING-CURRICULUM-DESIGNER to create training modules for the Stremiium AI Agent OS, creating a training module list with objectives, content, and assessment criteria.
- Research data to ingest: 01-program/councils/c05-hr-people/CHARTER.md, .stremiium/skills/.
- Prompts to improve: Training module list, Module objectives, Module content, Assessment criteria, Certification requirements.
- Output artifact: `artifacts/stremiium/c05-hr-culture/C05-TRAINING-CURRICULUM-DESIGNER-prompts.md`.

---

## 2. Assumptions

- Training modules are needed for the agent OS.
- Module objectives are defined.
- Module content covers required topics.
- Assessment criteria are established.

---

## 3. Questions

- What training modules are needed for the agent OS?
- What are the objectives for each module?
- What content should each module cover?
- How is competency assessed?
- What are the certification requirements?

---

## 4. Concerns

- No training module list exists.
- Module objectives not defined.
- Assessment criteria not established.
- Certification requirements not defined.

---

## 5. Suggested Improvements

- Create training module list for Stremiium AI Agent OS.
- Define module objectives, content, and assessment criteria.
- Establish certification requirements for module completion.
- Link modules to C05 employee development learning paths.

---

## 6. Missing Dependencies

- C05 employee development director
- C03 knowledge architecture for training content
- C11 dev-engineering for tool-specific training

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
- Reference schema: {moduleId, title, objectives, content, assessmentCriteria, certification, duration, owner, status, lastUpdated}

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

- Training content may contain tool capabilities; restrict per classification.
- No security-critical content without C12 review.

---

## 11. South African Regulatory Considerations

- Skills Development Act 97 of 1998
- POPIA for learner data

---

## 12. Compliance Gate

- C05 HR-Culture. Training modules require C05 + C12 for security-related content.

---

## 13. Rollback Plan

- Re-design modules on feedback.
- Re-assess on tool changes.
- Re-certify on curriculum updates.

---

## 14. Escalation Path

- C05-TRAINING-CURRICULUM-DESIGNER → C05 HR-Culture Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c05-hr-culture/C05-TRAINING-CURRICULUM-DESIGNER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C05 HR-Culture outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
