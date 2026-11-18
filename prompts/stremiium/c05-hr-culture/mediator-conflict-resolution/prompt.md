# Master Prompt — C05-MEDIATOR-CONFLICT-RESOLUTION (Mediator-Conflict-Resolution)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c05-hr-culture/C05-MEDIATOR-CONFLICT-RESOLUTION-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C05-MEDIATOR-CONFLICT-RESOLUTION  
**Council:** C05 C05 HR-Culture  
**Gate:** C05 HR-Culture + Sparkling Curious

---

## 1. Summary

- This master prompt instructs C05-MEDIATOR-CONFLICT-RESOLUTION to resolve council priority conflicts, creating a conflict resolution log with conflict details, resolution, and escalation path.
- Research data to ingest: 01-program/delivery/governance/, .stremiium/governance/workflow-routing.md R3.
- Prompts to improve: Conflict resolution log, Council priority conflict tracking, Resolution documentation, Escalation path, Mediation outcomes.
- Output artifact: `artifacts/stremiium/c05-hr-culture/C05-MEDIATOR-CONFLICT-RESOLUTION-prompts.md`.

---

## 2. Assumptions

- Council priority conflicts are identified.
- Mediation process is documented.
- Resolutions are documented.
- Escalation path to Sparkling Curious is defined.

---

## 3. Questions

- How are council priority conflicts identified?
- What is the mediation process?
- How are resolutions documented?
- When is escalation to Sparkling Curious required?
- What are the mediation outcomes?

---

## 4. Concerns

- No conflict resolution log exists.
- Council conflicts not tracked systematically.
- Resolution documentation incomplete.
- Escalation path not defined for unresolved conflicts.

---

## 5. Suggested Improvements

- Create conflict resolution log for all council priority conflicts.
- Document mediation process with steps and outcomes.
- Define escalation path to Sparkling Curious for unresolved conflicts.
- Track mediation outcomes and follow-up actions.

---

## 6. Missing Dependencies

- .stremiium/governance/workflow-routing.md R3 (SC arbitrates <24h)
- 01-program/delivery/governance/

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
- Reference schema: {conflictId, councils, issue, priority, mediator, resolution, outcome, escalationRequired, escalatedTo, date, status}

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

- Conflict log may contain sensitive personnel info; restrict to C05 + Sparkling Curious + captains.
- No individual performance data in conflict log.

---

## 11. South African Regulatory Considerations

- Labour Relations Act 66 of 1995
- POPIA for personnel data

---

## 12. Compliance Gate

- C05 HR-Culture + Sparkling Curious. Unresolved conflicts escalate to SC within 24h SLA.

---

## 13. Rollback Plan

- Re-open conflict if resolution fails.
- Re-mediate on new information.
- Escalate to Sparkling Curious if unresolved within SLA.

---

## 14. Escalation Path

- C05-MEDIATOR-CONFLICT-RESOLUTION → C05 HR-Culture Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c05-hr-culture/C05-MEDIATOR-CONFLICT-RESOLUTION-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C05 HR-Culture outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
