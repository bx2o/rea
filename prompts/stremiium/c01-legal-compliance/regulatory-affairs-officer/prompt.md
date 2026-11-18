# Master Prompt — C01-REGULATORY-AFFAIRS-OFFICER (Regulatory-Affairs Officer)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c01-legal-compliance/C01-REGULATORY-AFFAIRS-OFFICER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C01-REGULATORY-AFFAIRS-OFFICER  
**Council:** C01 C01 Legal-Compliance  
**Gate:** C01 Legal-Compliance

---

## 1. Summary

- This master prompt instructs C01-REGULATORY-AFFAIRS-OFFICER to map Stremiium services to South African regulatory categories, creating a regulatory classification matrix with CASP/RCASP status, FSCA licensing, FICA reporting, SARS CARF, and ADM restrictions.
- Research data to ingest: 02-research/landscape/02-regulatory-framework/, 02-research/synthesis/cross-cutting/regulation/, 01-program/councils/c01-legal-compliance/CHARTER.md.
- Prompts to improve: SA regulatory classification matrix, CASP/RCASP status mapping, FSCA licensing requirements, FICA reporting obligations, SARS CARF mapping.
- Output artifact: `artifacts/stremiium/c01-legal-compliance/C01-REGULATORY-AFFAIRS-OFFICER-prompts.md`.

---

## 2. Assumptions

- Regulatory research is current as of 2026-10-16.
- Non-binding items marked [CONSULT] requiring external counsel review.
- Each service is classified to SA regulatory categories.
- Private-funded boundary documented per service.

---

## 3. Questions

- Which Stremiium services require CASP licensing under FAIS Act?
- What is the RCASP status for each Stremiium service?
- Which banking/payment thresholds trigger regulatory oversight?
- How are securities/token classifications determined for $STM?
- What are the ADM restrictions for each service?

---

## 4. Concerns

- Regulatory uncertainty around non-bank payment framework draft (COFI Bill not enacted).
- FSCA licensing requirements for crypto asset services may be unclear.
- SARS CARF effective March 2026 — readiness status unknown.
- FATF grey-list exit (Oct 2025) — AML/CFT supervision remains intense.

---

## 5. Suggested Improvements

- Create a regulatory classification matrix mapping each Stremiium service to SA regulatory categories.
- Mark non-binding regulatory items as [CONSULT] requiring external counsel review.
- Add CASP/RCASP status for each service with effective dates.
- Add FICA reporting thresholds and STR filing requirements.

---

## 6. Missing Dependencies

- Banks Act 94 of 1990
- FAIS Act
- FICA Act 38 of 2001
- SARS CARF specification
- NPS Act 78 of 1998
- COFI Bill draft status

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
- Reference schema: {service, regulatoryCategory, caspRequired, rcaSPStatus, ficaReporting, carfReporting, admRestrictions, effectiveDate, notes}

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

- No regulatory classification may contain internal investigation details.
- Regulatory matrix accessed by C01 and C16 only.

---

## 11. South African Regulatory Considerations

- FSCA — CASP licensing under FAIS Act
- FICA — accountable institution registration
- SARS CARF — effective March 2026
- Companies Act 71 of 2008
- NPS Act 78 of 1998
- FATF grey-list exit (Oct 2025)

---

## 12. Compliance Gate

- C01 Legal-Compliance. Regulatory classification matrix requires C01 + C16 for banking services.

---

## 13. Rollback Plan

- Mark uncertain regulatory items as [CONSULT]; require external counsel review.
- Suspend services without clear regulatory classification.
- Re-classify services on regulatory change notifications.

---

## 14. Escalation Path

- C01-REGULATORY-AFFAIRS-OFFICER → C01 Legal-Compliance Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c01-legal-compliance/C01-REGULATORY-AFFAIRS-OFFICER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C01 Legal-Compliance outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
