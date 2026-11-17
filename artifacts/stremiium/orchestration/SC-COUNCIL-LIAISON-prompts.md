# Master Prompt — SC-COUNCIL-LIAISON (Council Liaison)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/orchestration/SC-COUNCIL-LIAISON-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SC-COUNCIL-LIAISON  
**Council:** SC Sparkling Curious (SC-MASTER-001)  
**Gate:** Sparkling Curious (SC-MASTER-001)

---

## 1. Summary

- This master prompt instructs SC-COUNCIL-LIAISON to map every task in the Stremiium Home Lab blueprint to the correct council using the Council Collaboration Matrix, defining RACI, integration checkpoints, and escalation paths for cross-council work.
- Research data to ingest: .stremiium/config/council-department-mapping.json, .stremiium/governance/workflow-routing.md R3, 01-program/councils/ C01–C16 charters.
- Prompts to improve: Council Collaboration Matrix mapping, RACI definitions per task, Integration checkpoint schedule, Conflict resolution owner assignments, Escalation path definitions.
- Output artifact: `artifacts/stremiium/orchestration/SC-COUNCIL-LIAISON-prompts.md`.

---

## 2. Assumptions

- Every task routes to an owning council captain before department contact (R1).
- Cross-council tasks convene captains; SC arbitrates <24h (R3).
- Coordinators (CRD-*) may intercept any step (R4).
- Meta-councils advise SC only (R5).

---

## 3. Questions

- Which council owns each T-phase task per the domain matrix?
- How are cross-council tasks (R3) convened and arbitrated?
- Who is the accountable council captain for each task?
- What are the integration checkpoints between C06, C11, and C12?
- Which tasks require coordinated captain approval vs single-captain decision?

---

## 4. Concerns

- R3 cross-council conflicts must be arbitrated by SC within 24h SLA.
- No task may contact a department directly without captain routing (R1).
- Coordinators may intercept any step for git-safety/security/cost gates (R4).
- Meta-councils advise SC only; never command departments directly (R5).

---

## 5. Suggested Improvements

- Add a council → task ownership matrix for all T1–T10 phases.
- Add integration checkpoint dates for multi-council deliverables.
- Add conflict resolution owner for each cross-council task pair.
- Add CRD interception points (git-safety, security, cost) to the matrix.

---

## 6. Missing Dependencies

- council-department-mapping.json council → department mapping
- workflow-routing.md R1–R6 routing rules
- 16 council charters for captain identities

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
- Reference schema: {taskId, responsibleCouncil, accountableCaptain, consultedCouncils, informedStakeholders, integrationCheckpoint, conflictResolutionOwner, escalationPath}

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

- C12 must be consulted on all security-related task mappings.
- C01 must be consulted on all regulatory task mappings.
- No task exposes secrets in the coordination matrix.

---

## 11. South African Regulatory Considerations

- POPIA data processing flags per council assignment
- FSCA/FICA oversight for finance-related task routing

---

## 12. Compliance Gate

- Sparkling Curious (SC-MASTER-001) — arbitrates council assignment conflicts.

---

## 13. Rollback Plan

- Re-map tasks if council assignment violates R1.
- Re-convene captains for unresolved cross-council conflicts (R3).
- Escalate to SC if no compliant council owner exists.

---

## 14. Escalation Path

- SC-COUNCIL-LIAISON → Sparkling Curious (SC-MASTER-001) Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/orchestration/SC-COUNCIL-LIAISON-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other Sparkling Curious (SC-MASTER-001) outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
