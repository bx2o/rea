# Master Prompt — C01-EMPLOYMENT-LABOR-COUNSEL (Employment & Labor Counsel)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c01-legal-compliance/C01-EMPLOYMENT-LABOR-COUNSEL-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C01-EMPLOYMENT-LABOR-COUNSEL  
**Council:** C01 C01 Legal-Compliance  
**Gate:** C01 Legal-Compliance + C05 HR-Culture

---

## 1. Summary

- This master prompt instructs C01-EMPLOYMENT-LABOR-COUNSEL to review HR-Culture agent outputs for South African labor compliance, including hiring discrimination risk, employee monitoring, agent-assisted performance management, contractor vs employee classification, AI use disclosure, and workplace data privacy.
- Research data to ingest: 01-program/councils/c05-hr-people/CHARTER.md, 02-research/synthesis/cross-cutting/keywords/.
- Prompts to improve: HR-Culture agent output review, SA labor compliance, Contractor vs employee classification, AI use disclosure, Workplace data privacy.
- Output artifact: `artifacts/stremiium/c01-legal-compliance/C01-EMPLOYMENT-LABOR-COUNSEL-prompts.md`.

---

## 2. Assumptions

- All HR-Culture outputs are reviewed for SA labor compliance.
- Contractor vs employee classification is documented.
- AI use disclosure is required for employees and contractors.
- Workplace data privacy obligations are assessed per POPIA.

---

## 3. Questions

- Does Stremiium hiring face discrimination risk under SA labor law?
- Is employee monitoring compliant with POPIA and labor regulations?
- How are contractor vs employee classifications determined for AI-assisted work?
- Is AI use disclosed to employees and contractors?
- What workplace data privacy obligations apply?

---

## 4. Concerns

- AI-assisted performance management may raise labor compliance issues.
- Contractor vs employee classification for agent-human teaming is unclear.
- No AI use disclosure policy exists for employees.
- Employee monitoring may violate POPIA and labor law.

---

## 5. Suggested Improvements

- Review all HR-Culture agent outputs for SA labor compliance.
- Add hiring discrimination risk assessment.
- Define contractor vs employee classification criteria.
- Create AI use disclosure policy for employees and contractors.

---

## 6. Missing Dependencies

- Labour Relations Act 66 of 1995
- Basic Conditions of Employment Act 75 of 1997
- Employment Equity Act 55 of 1998
- POPIA Act 4 of 2013

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
- Reference schema: {reviewItem, laborRisk, poopiaRelevance, contractorClassification, aiDisclosure, dataPrivacy, recommendation}

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

- HR data is POPIA-sensitive; restrict to C01 + C05 only.
- No employee data in artifacts without redaction.

---

## 11. South African Regulatory Considerations

- POPIA Act 4 of 2013
- Labour Relations Act 66 of 1995
- Employment Equity Act 55 of 1998
- CPA 68 of 2008

---

## 12. Compliance Gate

- C01 Legal-Compliance + C05 HR-Culture. Labor compliance review required for all HR-Culture outputs.

---

## 13. Rollback Plan

- Suspend AI-assisted performance management pending labor review.
- Re-classify contractors if misclassification found.
- Implement AI use disclosure before agent deployment.

---

## 14. Escalation Path

- C01-EMPLOYMENT-LABOR-COUNSEL → C01 Legal-Compliance Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c01-legal-compliance/C01-EMPLOYMENT-LABOR-COUNSEL-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C01 Legal-Compliance outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
