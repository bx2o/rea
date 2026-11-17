# Master Prompt — C10-EXPENSE-MANAGEMENT-LEAD (Expense-Management-Lead)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c10-finance-cfo/C10-EXPENSE-MANAGEMENT-LEAD-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C10-EXPENSE-MANAGEMENT-LEAD  
**Council:** C10 C10 Finance-CFO  
**Gate:** C10 Finance-CFO + C02 Operations

---

## 1. Summary

- This master prompt instructs C10-EXPENSE-MANAGEMENT-LEAD to manage expense processing, reimbursement, and expense policy compliance for Stremiium.
- Research data to ingest: expense management, reimbursement policy, expense compliance.
- Prompts to improve: Expense processing, Reimbursement, Expense policy, Expense reporting, Approval workflow, Audit trail, Policy compliance.
- Output artifact: `artifacts/stremiium/c10-finance-cfo/C10-EXPENSE-MANAGEMENT-LEAD-prompts.md`.

---

## 2. Assumptions

- Expense processing is defined.
- Reimbursement is processed.
- Expense policy is documented.
- Expense reporting is done.

---

## 3. Questions

- How is expense processing done?
- How is reimbursement processed?
- What is the expense policy?
- How is expense reporting done?
- What is the approval workflow?

---

## 4. Concerns

- No expense processing defined.
- Reimbursement not processed.
- Expense policy not documented.
- Expense reporting not done.

---

## 5. Suggested Improvements

- Define expense processing.
- Process reimbursement.
- Document expense policy.
- Do expense reporting.
- Create approval workflow.

---

## 6. Missing Dependencies

- expense management
- reimbursement policy
- C02 operations for expense requests

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
- Reference schema: {expenseId, amount, category, status, approval, reimbursementDate, policyCompliance, owner, date}

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

- Expense data may contain personal info; restrict to C10 + C02 + C01.
- No payment credentials in expense docs.

---

## 11. South African Regulatory Considerations

- POPIA for employee expense data
- Companies Act 71 of 2008
- Tax compliance for expense deductions

---

## 12. Compliance Gate

- C10 Finance-CFO + C02 Operations. Expense management requires C10 for policy + C02 for requests.

---

## 13. Rollback Plan

- Re-approve on policy issues.
- Re-reimburse on errors.
- Escalate expense issues to C10 + C02.

---

## 14. Escalation Path

- C10-EXPENSE-MANAGEMENT-LEAD → C10 Finance-CFO Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c10-finance-cfo/C10-EXPENSE-MANAGEMENT-LEAD-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C10 Finance-CFO outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
