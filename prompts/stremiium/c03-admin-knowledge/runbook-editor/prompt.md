# Master Prompt — C03-RUNBOOK-EDITOR (Runbook Editor)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c03-admin-knowledge/C03-RUNBOOK-EDITOR-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C03-RUNBOOK-EDITOR  
**Council:** C03 C03 Admin-Knowledge  
**Gate:** C03 Admin-Knowledge + C12 Cybersecurity-Intel

---

## 1. Summary

- This master prompt instructs C03-RUNBOOK-EDITOR to create runbooks for hardware recovery, NVIDIA rollback, agent outage, compliance breach, budget overrun, and model routing failure.
- Research data to ingest: C06 hardware enablement report, C06 NVIDIA driver runbook, C12 incident response playbook, C02 incident coordinator.
- Prompts to improve: Hardware recovery runbook, NVIDIA rollback runbook, Agent outage runbook, Compliance breach runbook, Budget overrun runbook, Model routing failure runbook.
- Output artifact: `artifacts/stremiium/c03-admin-knowledge/C03-RUNBOOK-EDITOR-prompts.md`.

---

## 2. Assumptions

- Every scenario has a runbook.
- Runbooks include step-by-step procedures with rollback criteria.
- Compliance breach runbook is coordinated with C01.
- Runbooks are tested periodically.

---

## 3. Questions

- What is the hardware recovery procedure?
- How is NVIDIA driver rollback performed?
- What is the agent outage response?
- How is a compliance breach handled?
- What is the budget overrun response?

---

## 4. Concerns

- No runbooks exist for operational recovery.
- NVIDIA rollback procedure not documented.
- Agent outage response undefined.
- Compliance breach runbook not coordinated with C01.

---

## 5. Suggested Improvements

- Create runbooks for hardware recovery, NVIDIA rollback, agent outage, compliance breach, budget overrun, and model routing failure.
- Include step-by-step procedures with rollback criteria.
- Coordinate compliance breach runbook with C01 + C12.
- Test runbooks periodically for validity.

---

## 6. Missing Dependencies

- C06 hardware enablement report
- C06 NVIDIA driver runbook
- C12 incident response playbook
- C02 incident coordinator

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
- Reference schema: {runbookId, title, scenario, steps, rollbackCriteria, validation, owner, lastTested, status}

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

- Runbooks may contain security procedures; restrict to C03 + C12 + C02.
- No exploit details in runbooks.

---

## 11. South African Regulatory Considerations

- POPIA breach notification in compliance breach runbook
- FICA STR in financial incident runbook

---

## 12. Compliance Gate

- C03 Admin-Knowledge + C12 Cybersecurity-Intel. Runbooks require C12 security review + C01 compliance for breach runbooks.

---

## 13. Rollback Plan

- Execute runbook rollback procedures if steps fail.
- Re-test runbook after changes.
- Re-approve runbook after validation failure.

---

## 14. Escalation Path

- C03-RUNBOOK-EDITOR → C03 Admin-Knowledge Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c03-admin-knowledge/C03-RUNBOOK-EDITOR-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C03 Admin-Knowledge outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
