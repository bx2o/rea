# Master Prompt — C02-CAPTAIN (VP-Operations)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c02-operations/C02-CAPTAIN-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C02-CAPTAIN  
**Council:** C02 C02 Operations  
**Gate:** C02 Operations + Executive

---

## 1. Summary

- This master prompt instructs C02-CAPTAIN to own operational governance for the home lab rollout, creating RACI, operating calendar, task SLAs, escalation paths, vendor/procedure registers, governance reports, and weekly council sync agendas.
- Research data to ingest: 01-program/delivery/ways-of-working.md, 01-program/delivery/governance/, 01-program/artifacts/execution-ledger.md.
- Prompts to improve: RACI matrix, Operating calendar, Task SLAs, Escalation paths, Vendor/procedure registers, Governance reports, Weekly council sync agenda.
- Output artifact: `artifacts/stremiium/c02-operations/C02-CAPTAIN-prompts.md`.

---

## 2. Assumptions

- SLAs match workflow-routing.md §4 (Critical 1h, High 4h, Medium 24h, Low 72h).
- Every task has a responsible council captain.
- Vendor procurement requires C10 budget approval.
- Weekly council sync is the primary coordination forum.

---

## 3. Questions

- Which tasks are critical vs high vs medium vs low priority?
- What are the SLA targets for each council?
- How are escalation paths defined between councils?
- Which vendors require procurement approval?
- What is the weekly council sync agenda?

---

## 4. Concerns

- No RACI matrix exists for multi-council tasks.
- SLA breaches may cascade across council dependencies.
- Vendor/procedure register not maintained.
- No operating calendar for home lab rollout.

---

## 5. Suggested Improvements

- Create RACI matrix for all T1–T10 phases.
- Define task SLAs matching workflow-routing.md §4.
- Create operating calendar with milestone tracking.
- Maintain vendor/procedure register with cost controls.

---

## 6. Missing Dependencies

- workflow-routing.md §4 SLA definitions
- 01-program/delivery/ways-of-working.md
- 01-program/artifacts/execution-ledger.md

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
- Reference schema: {taskId, raci, priority, sla, escalationPath, vendor, procedure, status}

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

- RACI matrix may contain personnel assignments; restrict to C02 + captains.
- Vendor register may contain contract details; restrict to C02 + C10.

---

## 11. South African Regulatory Considerations

- POPIA for personnel data in RACI
- FICA for vendor financial data

---

## 12. Compliance Gate

- C02 Operations + Executive. Operational governance requires C02 sign-off.

---

## 13. Rollback Plan

- Re-assign tasks if RACI conflicts found.
- Escalate SLA breaches to Sparkling Curious.
- Suspend vendor work pending procurement review.

---

## 14. Escalation Path

- C02-CAPTAIN → C02 Operations Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c02-operations/C02-CAPTAIN-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C02 Operations outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
