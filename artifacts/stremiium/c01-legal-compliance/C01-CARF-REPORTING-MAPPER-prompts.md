# Master Prompt — C01-CARF-REPORTING-MAPPER (CARF Reporting Mapper)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c01-legal-compliance/C01-CARF-REPORTING-MAPPER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C01-CARF-REPORTING-MAPPER  
**Council:** C01 C01 Legal-Compliance  
**Gate:** C01 Legal-Compliance + C10 Finance-CFO

---

## 1. Summary

- This master prompt instructs C01-CARF-REPORTING-MAPPER to map data fields required for SARS CARF reporting, including user identification, jurisdiction, transaction type, asset type, dates, values, counterparty, and reporting period.
- Research data to ingest: 02-research/landscape/02-regulatory-framework/tax-governance.md, SARS CARF specification, 02-research/landscape/03-neobank-digital-competitors/.
- Prompts to improve: SARS CARF data schema, User identification fields, Jurisdiction and transaction type fields, Asset type and value fields, Counterparty and reporting period fields.
- Output artifact: `artifacts/stremiium/c01-legal-compliance/C01-CARF-REPORTING-MAPPER-prompts.md`.

---

## 2. Assumptions

- CARF effective March 2026.
- All CARF data fields are mapped.
- RCASP status is documented for each service.
- CARF data is treated as personal information under POPIA.

---

## 3. Questions

- Which data fields are required for SARS CARF reporting?
- How is user identification captured for CARF reporting?
- What transaction types are reportable under CARF?
- Which asset types require CARF reporting?
- What is the CARF reporting period and retention?

---

## 4. Concerns

- CARF effective March 2026 — data schema not yet defined in repo.
- Crypto-asset and e-money reporting fields not mapped.
- RCASP status for Stremiium services unknown.
- CARF data is personal information under POPIA — dual compliance needed.

---

## 5. Suggested Improvements

- Create a SARS CARF data schema with all required fields.
- Map user identification, jurisdiction, transaction type, asset type, dates, values, counterparty, reporting period.
- Align CARF reporting with POPIA personal information protections.
- Document RCASP status for each Stremiium service.

---

## 6. Missing Dependencies

- SARS CARF specification (effective March 2026)
- POPIA Act 4 of 2013
- FICA Act 38 of 2001

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
- Reference schema: {userIdentification, jurisdiction, transactionType, assetType, dates, values, counterparty, reportingPeriod, poopiaClassification}

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

- CARF data schema contains sensitive reporting fields; restrict to C01 + C10 + C16.
- No actual taxpayer data in schema templates.

---

## 11. South African Regulatory Considerations

- SARS CARF — effective March 2026
- POPIA Act 4 of 2013
- FICA Act 38 of 2001
- Exchange Control Rules

---

## 12. Compliance Gate

- C01 Legal-Compliance + C10 Finance-CFO. CARF schema requires tax + legal review.

---

## 13. Rollback Plan

- Suspend CARF reporting if schema incomplete.
- Re-map fields on SARS guidance updates.
- Re-align with POPIA on any data protection conflict.

---

## 14. Escalation Path

- C01-CARF-REPORTING-MAPPER → C01 Legal-Compliance Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c01-legal-compliance/C01-CARF-REPORTING-MAPPER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C01 Legal-Compliance outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
