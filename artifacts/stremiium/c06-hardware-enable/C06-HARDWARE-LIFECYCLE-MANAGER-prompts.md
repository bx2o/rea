# Master Prompt — C06-HARDWARE-LIFECYCLE-MANAGER (Hardware-Lifecycle-Manager)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c06-hardware-enable/C06-HARDWARE-LIFECYCLE-MANAGER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C06-HARDWARE-LIFECYCLE-MANAGER  
**Council:** C06 C06 Hardware Enable  
**Gate:** C06 Hardware Enable + C10 Finance-CFO

---

## 1. Summary

- This master prompt instructs C06-HARDWARE-LIFECYCLE-MANAGER to manage hardware procurement, warranty, decommissioning, and e-waste disposal for the home lab.
- Research data to ingest: C10 budget authority, C02 vendor procurement, e-waste disposal regulations.
- Prompts to improve: Hardware procurement process, Warranty tracking, Decommissioning procedure, E-waste disposal, Hardware asset register, End-of-life planning, Procurement approval workflow.
- Output artifact: `artifacts/stremiium/c06-hardware-enable/C06-HARDWARE-LIFECYCLE-MANAGER-prompts.md`.

---

## 2. Assumptions

- Hardware procurement follows approval workflow.
- Warranty is tracked.
- Decommissioning procedure is defined.
- E-waste disposal is compliant.

---

## 3. Questions

- What is the hardware procurement process?
- How is warranty tracked?
- What is the decommissioning procedure?
- How is e-waste disposed?
- What is the hardware asset register?

---

## 4. Concerns

- No procurement process documented.
- Warranty tracking missing.
- Decommissioning procedure not defined.
- E-waste disposal not compliant.

---

## 5. Suggested Improvements

- Create hardware procurement process with C10 approval.
- Track warranty for all hardware.
- Define decommissioning procedure.
- Create compliant e-waste disposal process.
- Maintain hardware asset register.

---

## 6. Missing Dependencies

- C10 budget authority
- C02 vendor procurement
- e-waste disposal regulations

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
- Reference schema: {assetId, component, purchaseDate, warrantyExpiry, status, decommissionDate, eWasteDisposal, owner, approval}

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

- Asset register may contain procurement details; restrict to C06 + C10.
- No payment info in asset register.

---

## 11. South African Regulatory Considerations

- NEMWA e-waste (South Africa)
- POPIA for data-bearing device disposal

---

## 12. Compliance Gate

- C06 Hardware Enable + C10 Finance-CFO. Procurement requires C10 budget approval.

---

## 13. Rollback Plan

- Cancel procurement on budget rejection.
- Re-decommission on data remediation failure.
- Escalate procurement disputes to C10 + C06.

---

## 14. Escalation Path

- C06-HARDWARE-LIFECYCLE-MANAGER → C06 Hardware Enable Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c06-hardware-enable/C06-HARDWARE-LIFECYCLE-MANAGER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C06 Hardware Enable outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
