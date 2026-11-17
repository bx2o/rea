# Master Prompt — C05-RECRUITER-TALENT-ACQUISITION-LEADER (Recruiter-Talent-Acquisition-Leader)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c05-hr-culture/C05-RECRUITER-TALENT-ACQUISITION-LEADER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C05-RECRUITER-TALENT-ACQUISITION-LEADER  
**Council:** C05 C05 HR-Culture  
**Gate:** C05 HR-Culture + C01 Legal-Compliance

---

## 1. Summary

- This master prompt instructs C05-RECRUITER-TALENT-ACQUISITION-LEADER to define human roles needed to operate the Stremiium agent OS, creating a role catalog with required skills, council assignments, and hiring priorities.
- Research data to ingest: 01-program/councils/c05-hr-people/CHARTER.md, .stremiium/config/agents/agent-registry.json.
- Prompts to improve: Human role catalog, Required skills matrix, Council assignment mapping, Hiring priorities, Onboarding requirements.
- Output artifact: `artifacts/stremiium/c05-hr-culture/C05-RECRUITER-TALENT-ACQUISITION-LEADER-prompts.md`.

---

## 2. Assumptions

- Human roles are needed to operate the agent OS.
- Required skills are defined per role.
- Roles are mapped to owning councils.
- Hiring priorities are established.

---

## 3. Questions

- What human roles are needed to operate the agent OS?
- What skills are required for each role?
- Which council owns each role?
- What are the hiring priorities?
- What are the onboarding requirements?

---

## 4. Concerns

- No role catalog exists for agent OS operation.
- Required skills not defined per role.
- Council assignments unclear.
- Hiring priorities not established.

---

## 5. Suggested Improvements

- Define human roles needed to operate Stremiium agent OS (OpenCode, Hermes, CopilotKit, agent OS).
- Create skills matrix for each role.
- Map roles to owning councils.
- Establish hiring priorities and onboarding requirements.

---

## 6. Missing Dependencies

- 01-program/councils/c05-hr-people/CHARTER.md
- C01 employment/labor counsel for SA compliance

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
- Reference schema: {roleId, roleName, requiredSkills, council, priority, onboardingRequirements, hiringStatus, owner, notes}

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

- Role catalog may contain org structure; restrict to C05 + captains + Executive.
- No salary data in role catalog.

---

## 11. South African Regulatory Considerations

- Employment Equity Act 55 of 1998
- Labour Relations Act 66 of 1995
- POPIA for candidate data

---

## 12. Compliance Gate

- C05 HR-Culture + C01 Legal-Compliance. Hiring requires C01 for SA labor compliance.

---

## 13. Rollback Plan

- Re-scope roles on organizational changes.
- Re-prioritize hiring on budget changes.
- Escalate hiring conflicts to C10 + Sparkling Curious.

---

## 14. Escalation Path

- C05-RECRUITER-TALENT-ACQUISITION-LEADER → C05 HR-Culture Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c05-hr-culture/C05-RECRUITER-TALENT-ACQUISITION-LEADER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C05 HR-Culture outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
