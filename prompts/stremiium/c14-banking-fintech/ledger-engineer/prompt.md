# Master Prompt — C14-LEDGER-ENGINEER (Ledger-Engineer)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c14-banking-fintech/C14-LEDGER-ENGINEER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C14-LEDGER-ENGINEER  
**Council:** C14 C14 Banking-Fintech  
**Gate:** C14 Banking-Fintech + C01 Legal-Compliance

---

## 1. Summary

- This master prompt instructs C14-LEDGER-ENGINEER to implement double-entry ledger, transaction recording, and ledger integrity for Stremiium NeoBank.
- Research data to ingest: double-entry accounting, ledger design, transaction recording.
- Prompts to improve: Double-entry ledger, Transaction recording, Ledger integrity, Immutable ledger, Reconciliation, Audit trail, Ledger reporting.
- Output artifact: `artifacts/stremiium/c14-banking-fintech/C14-LEDGER-ENGINEER-prompts.md`.

---

## 2. Assumptions

- Double-entry ledger is implemented.
- Transaction recording is defined.
- Ledger integrity is ensured.
- Immutable ledger is used.

---

## 3. Questions

- How is the double-entry ledger implemented?
- How is transaction recording defined?
- How is ledger integrity ensured?
- How is the immutable ledger used?
- How is reconciliation performed?

---

## 4. Concerns

- No double-entry ledger implemented.
- Transaction recording not defined.
- Ledger integrity not ensured.
- Immutable ledger not used.

---

## 5. Suggested Improvements

- Implement double-entry ledger.
- Define transaction recording.
- Ensure ledger integrity.
- Use immutable ledger.
- Perform reconciliation.

---

## 6. Missing Dependencies

- double-entry accounting
- ledger design
- C01 legal for POPIA ledger data

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
- Reference schema: {ledgerId, ledgerType, entryType, transaction, integrity, immutable, reconciliation, owner, date}

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

- Ledger data may contain customer financial info; restrict to C14 + C01 + C16.
- No customer data in ledger docs.

---

## 11. South African Regulatory Considerations

- FICA for ledger record keeping (5 years)
- POPIA for ledger personal data
- Companies Act 71 of 2008 for accounting records

---

## 12. Compliance Gate

- C14 Banking-Fintech + C01 Legal-Compliance. Ledger requires C01 for POPIA/FICA compliance.

---

## 13. Rollback Plan

- Re-ledger on integrity issues.
- Re-record on errors.
- Escalate ledger conflicts to C14 + C01.

---

## 14. Escalation Path

- C14-LEDGER-ENGINEER → C14 Banking-Fintech Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c14-banking-fintech/C14-LEDGER-ENGINEER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C14 Banking-Fintech outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
