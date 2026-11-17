# Master Prompt — SUB-C05-HR-NEO-001 (NeoBank People and Training Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** qwen3.8-omni-flash.  
**Model policy:** LOCKED. Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/hr/people-and-training-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C05-HR-NEO-001  
**Council:** C05 HR-Culture  
**Gate:** C05 + C01 Legal-Compliance

---

## 1. Summary

This master prompt instructs SUB-C05-HR-NEO-001 to ingest the NeoBank HR, culture, and labor/tax research data from the Stremiium repo, review and improve the NeoBank people and training prompts (founder stipend/labor tax adjacency MP-BI16, HR/staffing/training prompts), and produce an improved unconsolidated artifact that converts the research into actionable people and training prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (Companies Act, BCEA, PAYE, UIF, SDL, POPIA, FAIS fit-and-proper).

---

## 2. Assumptions

- The NeoBank HR/culture charter at `01-program/councils/c05-hr-people/CHARTER.md` defines the HR mandate for the NeoBank program.
- The founder stipend/labor tax research at `02-research/landscape/02-regulatory-framework/tax-governance.md` and MP-BI16 (Founder Stipend Labor and Tax) provide the labor/tax framework.
- The SA financial services sector requires FAIS fit-and-proper examinations (RE5/RE1) for Key Individuals and Representatives.
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- HR records contain POPIA-sensitive personal information (including special personal information where applicable).
- qwen3.8-omni-flash is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What is the NeoBank staffing plan (roles, headcount, timeline) for launch?
- Which roles require FAIS fit-and-proper qualification (RE5/RE1) under FSCA?
- How should founder stipends (R10K to four founding members per MP-BI16) be classified: employee vs contractor, stipend vs salary?
- What PAYE, UIF, SDL obligations apply to NeoBank employees and contractors?
- What are the BCEA (Basic Conditions of Employment Act) requirements for SA employees?
- How does POPIA apply to employee records (personal information, special personal information)?
- What training is required for NeoBank staff on AML/FICA, POPIA, FAIS conduct, security awareness?
- What is the executive coaching and founder performance framework?
- How does the NeoBank handle bias checking and ethical success mantra translation?
- What is the wellness and culture framework for a startup neobank?

---

## 4. Concerns

- No NeoBank staffing plan exists in current prompts.
- No FAIS fit-and-proper training plan exists for Key Individuals and Representatives.
- No founder stipend classification analysis (employee vs contractor) is documented.
- No PAYE/UIF/SDL calculation framework exists for NeoBank payroll.
- No employee POPIA data handling policy exists.
- No AML/FICA, POPIA, FAIS conduct, security awareness training curriculum exists.
- No executive coaching framework for the founder/CEO is documented.
- No bias checking or ethical framework is specified for HR decisions.
- No wellness/culture program exists for the NeoBank team.
- No contractor vs employee classification framework exists for service providers.

---

## 5. Suggested Improvements

- Add NeoBank staffing plan to HR prompts (roles, headcount, timeline, council ownership).
- Add FAIS fit-and-proper training plan (RE5/RE1) for Key Individuals and Representatives to HR prompts.
- Add founder stipend classification framework (employee vs contractor, stipend vs salary, PAYE/UIF/SDL) referencing MP-BI16.
- Add PAYE/UIF/SDL calculation framework for NeoBank payroll to HR prompts.
- Add employee POPIA data handling policy (personal information, special information, retention, access).
- Add AML/FICA, POPIA, FAIS conduct, security awareness training curriculum for all NeoBank staff.
- Add executive coaching and founder performance framework.
- Add bias checking and ethical success mantra translation for HR decisions.
- Add wellness and culture program for NeoBank team.
- Add contractor vs employee classification framework for service providers.
- Add HR records retention schedule aligned with labor law and POPIA.
- Reference `01-program/councils/c05-hr-people/CHARTER.md` and MP-BI16 with specific citations.

---

## 6. Missing Dependencies

- NeoBank organizational design and headcount plan from C04 Strategy-Growth / C10 Finance (budget).
- FAIS fit-and-proper requirements and exam schedule from FSCA (external).
- Founder stipend agreement templates from C01 Legal-Compliance / C10 Finance.
- Payroll service provider selection (for PAYE/UIF/SDL administration).
- Training content providers for AML/FICA, POPIA, FAIS, security awareness.
- External accountant/labor law counsel review of employment classifications.

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `01-program/councils/c05-hr-people/CHARTER.md` for HR mandate and scope.
2. Read `02-research/landscape/02-regulatory-framework/tax-governance.md` for labor/tax obligations.
3. Read MP-BI16 (Founder Stipend Labor and Tax) current prompt text from the master prompt registry.
4. Read `01-program/delivery/ways-of-working.md` for HR/culture context.
5. Read `06-architecture/platform-design/security/` for security awareness training requirements.
6. Read current HR/training prompt text from the master prompt registry (if any exists).
7. Identify gaps between HR/labor research and current prompt content (staffing plan, FAIS training, founder stipend classification, PAYE/UIF/SDL, POPIA employee data, training curriculum, executive coaching, bias checking, wellness, contractor classification).
8. Draft improved people and training prompts with staffing plan, FAIS fit-and-proper training, founder stipend classification, PAYE/UIF/SDL framework, employee POPIA policy, training curriculum, executive coaching, bias checking, wellness program, contractor classification.
9. Add HR records retention schedule aligned with labor law and POPIA.
10. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/hr/people-and-training-prompts.md`.
11. Run validation checklist (§9 below).
12. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Staffing plan entry: `{role, council_owner, headcount, start_date, fait_required, poopia_sensitive, training_required}$
- Founder stipend record: `{founder_name, amount, currency, classification, paye_applicable, uif_applicable, sdl_applicable, board_resolution, contract_type, approval_date}$
- Training record: `{staff_id, training_type, completion_date, expiry_date, regulator_required, certificate_ref}$
- Employee POPIA record: `{employee_id, personal_info_categories, special_info_categories, retention_until, access_level, consent_ref}$

---

## 9. Validation Checklist

- [ ] HR/labor research sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `qwen3.8-omni-flash` (no substitution)
- [ ] Ask Mode only — no execution language
- [ ] NeoBank staffing plan included
- [ ] FAIS fit-and-proper training plan included
- [ ] Founder stipend classification framework included
- [ ] PAYE/UIF/SDL calculation framework included
- [ ] Employee POPIA data handling policy included
- [ ] AML/FICA, POPIA, FAIS conduct, security awareness training curriculum included
- [ ] Executive coaching and founder performance framework included
- [ ] Bias checking and ethical framework included
- [ ] Wellness and culture program included
- [ ] Contractor vs employee classification framework included
- [ ] HR records retention schedule included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C05 + C01)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Employee records contain POPIA-sensitive personal information; encrypted at rest, access restricted to C05 and C01 only.
- Special personal information (where applicable) requires heightened POPIA protection.
- HR system access must be role-based with audit trail per SESS architecture.
- No employee credentials or personal data in logs or dotfiles (guardrail from MP-BF04).
- Training records must be tamper-evident for regulatory examination (FAIS fit-and-proof).
- Founder stipend payment data is financial information; access restricted to C05, C10, C01.

---

## 11. South African Regulatory Considerations

- **Companies Act 71 of 2008:** director appointments, company records, shareholder obligations.
- **BCEA (Basic Conditions of Employment Act):** working hours, leave, remuneration, termination requirements.
- **PAYE/UIF/SDL:** payroll tax obligations for employees.
- **LRA (Labor Relations Act):** unfair dismissal, disciplinary procedures, collective bargaining.
- **POPIA Act 4 of 2013:** employee personal information processing, retention, access rights.
- **FAIS Act 37 of 2002:** fit-and-proper requirements (RE5/RE1) for Key Individuals and Representatives in financial services.
- **FSCA:** regulatory examinations and ongoing professional development for financial services staff.
- **Employment Equity Act:** affirmative action and non-discrimination in hiring.
- **Occupational Health and Safety Act:** workplace safety obligations.

---

## 12. Compliance Gate

**C05 HR-Culture + C01 Legal-Compliance.** Binding compliance veto on any HR gap affecting labor law or POPIA compliance. C01 review required for founder stipend classification and FAIS fit-and-proper matters.

---

## 13. Rollback Plan

- If founder stipend classification is challenged: re-classify, back-calculate PAYE/UIF/SDL if required, obtain external accountant review, amend agreements.
- If FAIS fit-and-proper training is incomplete: suspend affected staff from regulated activities, complete training and exams, re-apply for regulatory approval.
- If employee POPIA data handling is inadequate: remediate data storage, notify affected employees if breach, implement access controls.
- If training curriculum is inadequate: suspend staff from customer-facing roles, complete required training, re-assess competency.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C05-HR-NEO-001 → C05 HR-Culture Captain → C01 Legal-Compliance Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical HR/labor events skip to C05 + C01 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/hr/people-and-training-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C05 people/training outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C01 legal/POPIA overlap, C10 finance/payroll overlap) and arbitrates per workflow-routing.md R3/R5.
