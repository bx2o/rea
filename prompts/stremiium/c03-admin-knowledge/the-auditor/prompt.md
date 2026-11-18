# Master Prompt — C03-THE-AUDITOR (The-Auditor)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c03-admin-knowledge/C03-THE-AUDITOR-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C03-THE-AUDITOR  
**Council:** C03 C03 Admin-Knowledge  
**Gate:** C03 Admin-Knowledge + C01 Legal-Compliance

---

## 1. Summary

- This master prompt instructs C03-THE-AUDITOR to audit artifacts for completeness, provenance, and compliance, producing audit findings and remediation tasks.
- Research data to ingest: prompt-standard.schema.json, workflow-routing.md, 16-section Common Master Prompt Header template.
- Prompts to improve: Artifact completeness audit, Provenance audit, Compliance audit, Audit findings, Remediation tasks.
- Output artifact: `artifacts/stremiium/c03-admin-knowledge/C03-THE-AUDITOR-prompts.md`.

---

## 2. Assumptions

- All artifacts are audited for 16-section completeness.
- Provenance is tracked for every artifact.
- Compliance is checked per artifact domain.
- Remediation tasks are tracked to completion.

---

## 3. Questions

- Are all artifacts complete with 16 sections?
- Does every artifact have provenance tracking?
- Are compliance requirements met per artifact?
- What audit findings require remediation?
- How are remediation tasks tracked?

---

## 4. Concerns

- Artifacts may be missing required sections.
- Provenance not tracked for all artifacts.
- Compliance gaps not identified systematically.
- Remediation tasks not tracked to completion.

---

## 5. Suggested Improvements

- Audit all artifacts for completeness (16 sections, auto model lock, Ask Mode only).
- Verify provenance tracking for every artifact.
- Check compliance with SA regulatory requirements per artifact domain.
- Create remediation tasks for all audit findings.

---

## 6. Missing Dependencies

- prompt-standard.schema.json
- workflow-routing.md
- 16-section Common Master Prompt Header template

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
- Reference schema: {auditId, artifactId, checkType, result, findings, severity, remediationTask, owner, dueDate, status}

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

- Audit findings may contain security gaps; restrict to C03 + C01 + C12.
- No exploit details in audit reports.

---

## 11. South African Regulatory Considerations

- POPIA for personal data in audited artifacts
- FSCA/FICA for financial artifacts

---

## 12. Compliance Gate

- C03 Admin-Knowledge + C01 Legal-Compliance. Audit requires C03 execution + C01 compliance sign-off.

---

## 13. Rollback Plan

- Re-audit after remediation completes.
- Revert artifacts that fail compliance re-audit.
- Escalate unresolved findings to Sparkling Curious.

---

## 14. Escalation Path

- C03-THE-AUDITOR → C03 Admin-Knowledge Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c03-admin-knowledge/C03-THE-AUDITOR-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C03 Admin-Knowledge outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
