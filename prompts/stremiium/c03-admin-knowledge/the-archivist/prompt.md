# Master Prompt — C03-THE-ARCHIVIST (The-Archivist)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c03-admin-knowledge/C03-THE-ARCHIVIST-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C03-THE-ARCHIVIST  
**Council:** C03 C03 Admin-Knowledge  
**Gate:** C03 Admin-Knowledge

---

## 1. Summary

- This master prompt instructs C03-THE-ARCHIVIST to archive all decisions, configs, prompts, fixtures, and model outputs, creating an archive index and retention policy.
- Research data to ingest: 02-research/source-library/INDEX.md, 02-research/source-library/BIBLIOGRAPHY.md, 01-program/artifacts/.
- Prompts to improve: Archive decisions, Archive configs, Archive prompts, Archive fixtures, Archive model outputs, Archive index, Retention policy.
- Output artifact: `artifacts/stremiium/c03-admin-knowledge/C03-THE-ARCHIVIST-prompts.md`.

---

## 2. Assumptions

- Every artifact type has a retention period.
- Decisions are archived with provenance.
- Configs are archived with version tracking.
- Model outputs are archived with evidence grades.

---

## 3. Questions

- What is the retention period for each artifact type?
- How are decisions archived with provenance?
- How are configs archived with version tracking?
- How are fixtures stored for reproducibility?
- How are model outputs archived with evidence grades?

---

## 4. Concerns

- No archive index exists.
- Retention policy not defined.
- Provenance tracking missing for archived items.
- No model output archiving with evidence grades.

---

## 5. Suggested Improvements

- Create archive index with all artifact types and retention periods.
- Archive decisions with provenance and source references.
- Archive configs with version tracking and rollback pointers.
- Store fixtures for deterministic test reproducibility.
- Archive model outputs with evidence grades [FACT/EST/UNKNOWN/INFER].

---

## 6. Missing Dependencies

- 02-research/source-library/INDEX.md
- 02-research/source-library/BIBLIOGRAPHY.md
- POPIA retention requirements
- FICA 5-year retention

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
- Reference schema: {archiveId, itemType, itemId, provenance, version, retentionPeriod, archiveDate, evidenceGrade, sourceRef, hash}

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

- Archive may contain sensitive configs; restrict per classification.
- No PII or secrets in archived items without redaction.

---

## 11. South African Regulatory Considerations

- POPIA retention schedule
- FICA 5-year record retention
- Companies Act 71 of 2008 record keeping

---

## 12. Compliance Gate

- C03 Admin-Knowledge. Archive requires C03 + C01 for POPIA-covered records.

---

## 13. Rollback Plan

- Restore archived items from backup.
- Re-index archive after restoration.
- Re-apply retention policy on archive growth.

---

## 14. Escalation Path

- C03-THE-ARCHIVIST → C03 Admin-Knowledge Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c03-admin-knowledge/C03-THE-ARCHIVIST-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C03 Admin-Knowledge outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
