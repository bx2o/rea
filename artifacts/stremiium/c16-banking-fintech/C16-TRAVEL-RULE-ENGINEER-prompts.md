# Master Prompt — C16-TRAVEL-RULE-ENGINEER (Travel-Rule-Engineer)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c16-banking-fintech/C16-TRAVEL-RULE-ENGINEER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C16-TRAVEL-RULE-ENGINEER  
**Council:** C16 C16 Banking-Fintech  
**Gate:** C16 Banking-Fintech + C01 Legal-Compliance + C12 Cybersecurity-Intel

---

## 1. Summary

- This master prompt instructs C16-TRAVEL-RULE-ENGINEER to implement FATF Travel Rule compliance for crypto asset transfers, including originator and beneficiary information sharing.
- Research data to ingest: FATF Travel Rule, crypto asset transfers, originator beneficiary information.
- Prompts to improve: Travel Rule implementation, Originator information, Beneficiary information, Information sharing, Travel Rule monitoring, Travel Rule reporting, Travel Rule compliance.
- Output artifact: `artifacts/stremiium/c16-banking-fintech/C16-TRAVEL-RULE-ENGINEER-prompts.md`.

---

## 2. Assumptions

- Travel Rule is implemented.
- Originator information is collected.
- Beneficiary information is shared.
- Travel Rule monitoring is active.

---

## 3. Questions

- How is Travel Rule implemented?
- How is originator information collected?
- How is beneficiary information shared?
- How is Travel Rule monitoring done?
- How is Travel Rule reporting done?

---

## 4. Concerns

- No Travel Rule implemented.
- Originator information not collected.
- Beneficiary information not shared.
- Travel Rule monitoring not active.

---

## 5. Suggested Improvements

- Implement Travel Rule.
- Collect originator information.
- Share beneficiary information.
- Activate Travel Rule monitoring.
- Do Travel Rule reporting.

---

## 6. Missing Dependencies

- FATF Travel Rule
- crypto asset transfers
- C01 legal for Travel Rule compliance

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
- Reference schema: {ruleId, ruleType, originator, beneficiary, informationSharing, monitoring, reporting, owner, date}

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

- Travel Rule data contains customer PII; restrict to C16 + C01 + C12.
- No customer data in Travel Rule docs.

---

## 11. South African Regulatory Considerations

- FATF Travel Rule
- FSCA CASP for crypto asset transfers
- POPIA for customer personal data
- FICA for suspicious transaction reporting

---

## 12. Compliance Gate

- C16 Banking-Fintech + C01 Legal-Compliance + C12 Cybersecurity-Intel. Travel Rule requires C01 for compliance + C12 for security.

---

## 13. Rollback Plan

- Re-rule on compliance issues.
- Re-share on information gaps.
- Escalate Travel Rule conflicts to C16 + C01 + C12.

---

## 14. Escalation Path

- C16-TRAVEL-RULE-ENGINEER → C16 Banking-Fintech Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c16-banking-fintech/C16-TRAVEL-RULE-ENGINEER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C16 Banking-Fintech outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
