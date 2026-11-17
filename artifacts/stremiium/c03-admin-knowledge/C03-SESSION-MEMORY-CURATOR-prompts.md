# Master Prompt — C03-SESSION-MEMORY-CURATOR (Session Memory Curator)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c03-admin-knowledge/C03-SESSION-MEMORY-CURATOR-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C03-SESSION-MEMORY-CURATOR  
**Council:** C03 C03 Admin-Knowledge  
**Gate:** C03 Admin-Knowledge

---

## 1. Summary

- This master prompt instructs C03-SESSION-MEMORY-CURATOR to compress old session context into context.md, producing a memory compression log.
- Research data to ingest: .stremiium/memory/ memory system, context.md, query-logs.md.
- Prompts to improve: Session context compression, context.md update, Old session archiving, Memory compression log, Cross-session knowledge transfer.
- Output artifact: `artifacts/stremiium/c03-admin-knowledge/C03-SESSION-MEMORY-CURATOR-prompts.md`.

---

## 2. Assumptions

- Old session context is compressed into context.md.
- Compression threshold is defined.
- Old sessions are archived with index references.
- Cross-session knowledge is transferred via context.md and query-logs.md.

---

## 3. Questions

- How is old session context compressed into context.md?
- What is the compression threshold?
- How are old sessions archived?
- How is cross-session knowledge transferred?
- How is memory integrity maintained?

---

## 4. Concerns

- No session memory curation process exists.
- Old session context not compressed.
- Cross-session knowledge lost between sessions.
- Memory compression may lose important details.

---

## 5. Suggested Improvements

- Compress old session context into context.md periodically.
- Archive old sessions with index references.
- Transfer cross-session knowledge via context.md and query-logs.md.
- Maintain memory compression log with what was compressed and when.

---

## 6. Missing Dependencies

- .stremiium/memory/ memory system
- context.md
- query-logs.md

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
- Reference schema: {compressionId, sessionIds, compressedInto, compressionRatio, detailsRetained, detailsLost, date, curator, status}

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

- Session memory may contain sensitive discussions; enforce access controls.
- No PII or secrets in compressed context.

---

## 11. South African Regulatory Considerations

- POPIA for personal data in session context

---

## 12. Compliance Gate

- C03 Admin-Knowledge. Memory compression requires C03 + C01 for POPIA-covered session data.

---

## 13. Rollback Plan

- Restore uncompressed session from archive if needed.
- Re-compress with corrected retention decisions.
- Re-validate compressed context integrity.

---

## 14. Escalation Path

- C03-SESSION-MEMORY-CURATOR → C03 Admin-Knowledge Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c03-admin-knowledge/C03-SESSION-MEMORY-CURATOR-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C03 Admin-Knowledge outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
