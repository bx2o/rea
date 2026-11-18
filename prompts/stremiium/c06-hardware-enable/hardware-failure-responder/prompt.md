# Master Prompt — C06-HARDWARE-FAILURE-RESPONDER (Hardware-Failure-Responder)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c06-hardware-enable/C06-HARDWARE-FAILURE-RESPONDER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C06-HARDWARE-FAILURE-RESPONDER  
**Council:** C06 C06 Hardware Enable  
**Gate:** C06 Hardware Enable + C02 Operations

---

## 1. Summary

- This master prompt instructs C06-HARDWARE-FAILURE-RESPONDER to respond to hardware failures (CPU, memory, GPU, storage, network, power), creating failure detection, diagnosis, replacement, and recovery procedures.
- Research data to ingest: C06 hardware architecture documentation, C02 incident coordinator, spare parts inventory.
- Prompts to improve: Hardware failure detection, Failure diagnosis, Component replacement, Recovery procedure, Spare parts management, Failure escalation, Post-failure review.
- Output artifact: `artifacts/stremiium/c06-hardware-enable/C06-HARDWARE-FAILURE-RESPONDER-prompts.md`.

---

## 2. Assumptions

- Hardware failures are detected.
- Failure diagnosis is performed.
- Component replacement is defined.
- Recovery procedure is documented.

---

## 3. Questions

- How are hardware failures detected?
- How is failure diagnosis performed?
- What is the component replacement procedure?
- How is recovery performed after failure?
- How are spare parts managed?

---

## 4. Concerns

- No hardware failure detection documented.
- Failure diagnosis not defined.
- Component replacement procedure missing.
- Spare parts not inventoried.

---

## 5. Suggested Improvements

- Create hardware failure detection procedures.
- Define failure diagnosis for CPU, memory, GPU, storage, network, power.
- Create component replacement procedure.
- Document recovery procedure.
- Manage spare parts inventory.

---

## 6. Missing Dependencies

- C06 hardware architecture documentation
- C02 incident coordinator
- spare parts inventory

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
- Reference schema: {failureId, component, symptom, diagnosis, replacement, recovery, escalation, sparePart, postReview}

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

- Failure data may reveal hardware weaknesses; restrict to C06 + C02 + C12.
- No physical location details.

---

## 11. South African Regulatory Considerations

- POPIA if hardware processes personal data
- FICA if hardware used in financial workflows

---

## 12. Compliance Gate

- C06 Hardware Enable + C02 Operations. Hardware failure response requires C02 for operational impact.

---

## 13. Rollback Plan

- Replace failed component with spare.
- Restore from backup after recovery.
- Escalate unresolved failures to C06 + C02 + C12.

---

## 14. Escalation Path

- C06-HARDWARE-FAILURE-RESPONDER → C06 Hardware Enable Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c06-hardware-enable/C06-HARDWARE-FAILURE-RESPONDER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C06 Hardware Enable outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
