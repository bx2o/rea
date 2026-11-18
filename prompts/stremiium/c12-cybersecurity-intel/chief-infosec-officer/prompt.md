# Master Prompt — C12-CHIEF-INFOSEC-OFFICER (Chief-InfoSec-Officer)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c12-cybersecurity-intel/C12-CHIEF-INFOSEC-OFFICER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C12-CHIEF-INFOSEC-OFFICER  
**Council:** C12 C12 Cybersecurity-Intel  
**Gate:** C12 Cybersecurity-Intel + Executive

---

## 1. Summary

- This master prompt instructs C12-CHIEF-INFOSEC-OFFICER to own information security strategy, security governance, and CISO oversight for Stremiium, creating security policy and risk management.
- Research data to ingest: 01-program/plan/PLAN.md, security policy, ISO 27001/NIST.
- Prompts to improve: Security strategy, Security governance, CISO oversight, Security policy, Risk management, Security metrics, Board reporting.
- Output artifact: `artifacts/stremiium/c12-cybersecurity-intel/C12-CHIEF-INFOSEC-OFFICER-prompts.md`.

---

## 2. Assumptions

- Security strategy is defined.
- Security governance is established.
- CISO oversight is active.
- Security policy is documented.

---

## 3. Questions

- What is the security strategy?
- How is security governance established?
- What is the CISO oversight?
- What is the security policy?
- How is risk managed?

---

## 4. Concerns

- No security strategy defined.
- Security governance not established.
- CISO oversight not active.
- Security policy not documented.

---

## 5. Suggested Improvements

- Define security strategy.
- Establish security governance.
- Activate CISO oversight.
- Document security policy.
- Manage security risk.

---

## 6. Missing Dependencies

- 01-program/plan/PLAN.md
- security policy
- ISO 27001/NIST

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
- Reference schema: {policyId, policy, domain, enforcement, review, owner, version, date}

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

- Security docs are highly sensitive; restrict to C12 + Executive.
- No exploit details in security docs.

---

## 11. South African Regulatory Considerations

- POPIA for security of personal data
- FICA for security of financial data
- FSCA for security of financial services

---

## 12. Compliance Gate

- C12 Cybersecurity-Intel + Executive. Security strategy requires C12 + Executive approval.

---

## 13. Rollback Plan

- Re-policy on failures.
- Re-govern on gaps.
- Escalate security conflicts to C12 + Executive.

---

## 14. Escalation Path

- C12-CHIEF-INFOSEC-OFFICER → C12 Cybersecurity-Intel Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c12-cybersecurity-intel/C12-CHIEF-INFOSEC-OFFICER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C12 Cybersecurity-Intel outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
