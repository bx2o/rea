# Master Prompt — C14-RECONCILIATION-ENGINEER (Reconciliation-Engineer)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c14-banking-fintech/C14-RECONCILIATION-ENGINEER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C14-RECONCILIATION-ENGINEER  
**Council:** C14 C14 Banking-Fintech  
**Gate:** C14 Banking-Fintech + C01 Legal-Compliance

---

## 1. Summary

- This master prompt instructs C14-RECONCILIATION-ENGINEER to implement transaction reconciliation, settlement reconciliation, and exception handling for Stremiium NeoBank.
- Research data to ingest: reconciliation, settlement, exception handling.
- Prompts to improve: Transaction reconciliation, Settlement reconciliation, Exception handling, Reconciliation reporting, Automated matching, Discrepancy resolution, Reconciliation audit.
- Output artifact: `artifacts/stremiium/c14-banking-fintech/C14-RECONCILIATION-ENGINEER-prompts.md`.

---

## 2. Assumptions

- Transaction reconciliation is implemented.
- Settlement reconciliation is defined.
- Exception handling is defined.
- Reconciliation reporting is done.

---

## 3. Questions

- How is transaction reconciliation implemented?
- How is settlement reconciliation defined?
- How is exception handling defined?
- How is reconciliation reporting done?
- How is automated matching used?

---

## 4. Concerns

- No transaction reconciliation implemented.
- Settlement reconciliation not defined.
- Exception handling not defined.
- Reconciliation reporting not done.

---

## 5. Suggested Improvements

- Implement transaction reconciliation.
- Define settlement reconciliation.
- Define exception handling.
- Do reconciliation reporting.
- Use automated matching.

---

## 6. Missing Dependencies

- reconciliation
- settlement
- C01 legal for record keeping

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
- Reference schema: {reconId, reconType, transaction, settlement, exception, reporting, matching, owner, date}

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

- Reconciliation data may contain customer financial info; restrict to C14 + C01 + C16.
- No customer data in recon docs.

---

## 11. South African Regulatory Considerations

- FICA for reconciliation records
- POPIA for reconciliation personal data
- Companies Act 71 of 2008 for accounting records

---

## 12. Compliance Gate

- C14 Banking-Fintech + C01 Legal-Compliance. Reconciliation requires C01 for record keeping compliance.

---

## 13. Rollback Plan

- Re-reconcile on discrepancies.
- Re-settle on failures.
- Escalate recon conflicts to C14 + C01.

---

## 14. Escalation Path

- C14-RECONCILIATION-ENGINEER → C14 Banking-Fintech Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c14-banking-fintech/C14-RECONCILIATION-ENGINEER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C14 Banking-Fintech outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
