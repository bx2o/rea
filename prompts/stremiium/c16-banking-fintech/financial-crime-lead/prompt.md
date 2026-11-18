# Master Prompt — C16-FINANCIAL-CRIME-LEAD (Financial-Crime-Lead)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c16-banking-fintech/C16-FINANCIAL-CRIME-LEAD-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C16-FINANCIAL-CRIME-LEAD  
**Council:** C16 C16 Banking-Fintech  
**Gate:** C16 Banking-Fintech + C01 Legal-Compliance + C12 Cybersecurity-Intel

---

## 1. Summary

- This master prompt instructs C16-FINANCIAL-CRIME-LEAD to own financial crime prevention, sanctions screening, and AML/CTF program for Stremiium NeoBank.
- Research data to ingest: financial crime, sanctions screening, AML/CTF.
- Prompts to improve: Financial crime prevention, Sanctions screening, AML/CTF program, Transaction monitoring, Suspicious activity reporting, Financial crime investigations, Financial crime compliance.
- Output artifact: `artifacts/stremiium/c16-banking-fintech/C16-FINANCIAL-CRIME-LEAD-prompts.md`.

---

## 2. Assumptions

- Financial crime prevention is defined.
- Sanctions screening is active.
- AML/CTF program is implemented.
- Transaction monitoring is defined.

---

## 3. Questions

- How is financial crime prevention defined?
- How is sanctions screening active?
- How is AML/CTF program implemented?
- How is transaction monitoring defined?
- How is suspicious activity reported?

---

## 4. Concerns

- No financial crime prevention defined.
- Sanctions screening not active.
- AML/CTF program not implemented.
- Transaction monitoring not defined.

---

## 5. Suggested Improvements

- Define financial crime prevention.
- Activate sanctions screening.
- Implement AML/CTF program.
- Define transaction monitoring.
- Report suspicious activity.

---

## 6. Missing Dependencies

- financial crime
- sanctions screening
- C01 legal for FICA compliance
- C12 security for crime data

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
- Reference schema: {crimeId, crimeType, screening, amlCtf, monitoring, sar, investigation, owner, date}

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

- Financial crime data is highly sensitive; restrict to C16 + C01 + C12.
- No investigation details in crime docs.

---

## 11. South African Regulatory Considerations

- FICA Act 38 of 2001
- POPIA for customer personal data
- SARS CARF for reporting
- FSCA for financial crime oversight

---

## 12. Compliance Gate

- C16 Banking-Fintech + C01 Legal-Compliance + C12 Cybersecurity-Intel. Financial crime requires C01 for FICA + C12 for security.

---

## 13. Rollback Plan

- Re-prevent on gaps.
- Re-screen on sanctions changes.
- Escalate crime conflicts to C16 + C01 + C12.

---

## 14. Escalation Path

- C16-FINANCIAL-CRIME-LEAD → C16 Banking-Fintech Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c16-banking-fintech/C16-FINANCIAL-CRIME-LEAD-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C16 Banking-Fintech outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
