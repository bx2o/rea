# Master Prompt — C03-METADATA-STEWARD (Metadata Steward)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c03-admin-knowledge/C03-METADATA-STEWARD-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C03-METADATA-STEWARD  
**Council:** C03 C03 Admin-Knowledge  
**Gate:** C03 Admin-Knowledge

---

## 1. Summary

- This master prompt instructs C03-METADATA-STEWARD to add metadata to every artifact: owner, created, updated, task ID, council, model, sensitivity, compliance status, version.
- Research data to ingest: .stremiium/config/agents/agent-registry.json, workflow-routing.md metadata requirements.
- Prompts to improve: Artifact metadata standard, Owner field, Created/updated fields, Task ID field, Council field, Model field, Sensitivity field, Compliance status field, Version field.
- Output artifact: `artifacts/stremiium/c03-admin-knowledge/C03-METADATA-STEWARD-prompts.md`.

---

## 2. Assumptions

- Every artifact has required metadata fields.
- Sensitivity is classified consistently.
- Compliance status is tracked.
- Version is managed.

---

## 3. Questions

- What metadata must every artifact have?
- How is sensitivity classified?
- How is compliance status tracked?
- How is version managed?
- How is metadata validated?

---

## 4. Concerns

- No metadata standard exists.
- Artifacts missing required metadata fields.
- Sensitivity not classified consistently.
- Compliance status not tracked.

---

## 5. Suggested Improvements

- Create metadata standard for all artifacts (owner, created, updated, task ID, council, model, sensitivity, compliance status, version).
- Define sensitivity classifications (public, internal, confidential, restricted).
- Track compliance status (compliant, pending, blocked, non-compliant).
- Validate metadata on artifact creation and update.

---

## 6. Missing Dependencies

- .stremiium/config/agents/agent-registry.json
- workflow-routing.md metadata requirements

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
- Reference schema: {artifactId, owner, created, updated, taskId, council, model, sensitivity, complianceStatus, version, hash, sourceRef}

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

- Metadata may contain personnel assignments; restrict per sensitivity.
- No secrets in metadata fields.

---

## 11. South African Regulatory Considerations

- POPIA for personal data in metadata

---

## 12. Compliance Gate

- C03 Admin-Knowledge. Metadata standard requires C03 + C01 for sensitivity classification.

---

## 13. Rollback Plan

- Re-apply metadata standard to all artifacts.
- Re-validate metadata after standard changes.
- Restore metadata from backup if lost.

---

## 14. Escalation Path

- C03-METADATA-STEWARD → C03 Admin-Knowledge Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c03-admin-knowledge/C03-METADATA-STEWARD-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C03 Admin-Knowledge outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
