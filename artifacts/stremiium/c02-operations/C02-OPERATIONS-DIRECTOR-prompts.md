# Master Prompt — C02-OPERATIONS-DIRECTOR (Operations Director)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c02-operations/C02-OPERATIONS-DIRECTOR-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C02-OPERATIONS-DIRECTOR  
**Council:** C02 C02 Operations  
**Gate:** C02 Operations

---

## 1. Summary

- This master prompt instructs C02-OPERATIONS-DIRECTOR to create daily operating procedure covering morning review of task-list.md, query-logs.md, implementation-log.md, context.md, delegation folder, and end-of-day learning update.
- Research data to ingest: task-list.md, query-logs.md, implementation-log.md, context.md, delegation folders.
- Prompts to improve: Daily operating procedure, task-list.md morning review, query-logs.md review, implementation-log.md review, context.md review, delegation folder review, End-of-day learning update.
- Output artifact: `artifacts/stremiium/c02-operations/C02-OPERATIONS-DIRECTOR-prompts.md`.

---

## 2. Assumptions

- Daily operations cadence is defined.
- Task logs are reviewed each morning.
- Delegation folders are maintained for all active tasks.
- Learning updates are captured between sessions.

---

## 3. Questions

- What is the daily operations cadence?
- Which logs are reviewed each morning?
- What is the end-of-day learning update process?
- How are delegation folders maintained?
- How is context.md updated between sessions?

---

## 4. Concerns

- No daily operating procedure documented.
- Task logs not reviewed consistently.
- Delegation folders not maintained.
- Learning updates not captured between sessions.

---

## 5. Suggested Improvements

- Create a daily operating procedure checklist.
- Define morning review of task-list.md, query-logs.md, implementation-log.md, context.md.
- Define end-of-day learning update process.
- Maintain delegation folders for all active tasks.

---

## 6. Missing Dependencies

- task-list.md
- query-logs.md
- implementation-log.md
- context.md
- delegation folders

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
- Reference schema: {date, morningReview, taskListStatus, queryLogStatus, implementationLogStatus, contextStatus, delegationStatus, endOfDayLearning, blockers}

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

- Operations logs may contain task details; restrict to C02 + captains.
- No PII or secrets in daily logs.

---

## 11. South African Regulatory Considerations

- POPIA for operations log data
- FICA for financial task data

---

## 12. Compliance Gate

- C02 Operations. Daily operations require C02 oversight.

---

## 13. Rollback Plan

- Re-run daily procedure if logs incomplete.
- Escalate persistent blockers to Sparkling Curious.
- Restore context.md from backup if corrupted.

---

## 14. Escalation Path

- C02-OPERATIONS-DIRECTOR → C02 Operations Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c02-operations/C02-OPERATIONS-DIRECTOR-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C02 Operations outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
