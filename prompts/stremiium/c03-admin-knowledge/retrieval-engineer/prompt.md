# Master Prompt — C03-RETRIEVAL-ENGINEER (Retrieval Engineer)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c03-admin-knowledge/C03-RETRIEVAL-ENGINEER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C03-RETRIEVAL-ENGINEER  
**Council:** C03 C03 Admin-Knowledge  
**Gate:** C03 Admin-Knowledge

---

## 1. Summary

- This master prompt instructs C03-RETRIEVAL-ENGINEER to design retrieval for knowledge-base.md, context.md, query-logs.md, code-snippets.md, workflows, and agent instructions.
- Research data to ingest: .stremiium/memory/ memory system, .github/artifacts/ask-mode/knowledge-base.md, workflow-routing.md knowledge layer.
- Prompts to improve: Knowledge-base.md retrieval, Context.md retrieval, Query-logs.md retrieval, Code-snippets.md retrieval, Workflows retrieval, Agent instructions retrieval, Retrieval configuration.
- Output artifact: `artifacts/stremiium/c03-admin-knowledge/C03-RETRIEVAL-ENGINEER-prompts.md`.

---

## 2. Assumptions

- Knowledge-base.md is indexed for retrieval.
- Context.md is searched across sessions.
- Query-logs.md is analyzed for patterns.
- Code-snippets.md is retrieved by domain.

---

## 3. Questions

- How is knowledge-base.md indexed for retrieval?
- How is context.md searched across sessions?
- How are query-logs.md analyzed for patterns?
- How are code-snippets.md retrieved by domain?
- How are workflows retrieved by agent?

---

## 4. Concerns

- No retrieval configuration exists.
- Knowledge not indexed for search.
- Cross-session context not retrievable.
- No retrieval relevance ranking.

---

## 5. Suggested Improvements

- Design retrieval configuration for knowledge-base.md, context.md, query-logs.md, code-snippets.md, workflows, and agent instructions.
- Index knowledge by domain, question type, and complexity.
- Enable cross-session context retrieval.
- Add relevance ranking for retrieval results.

---

## 6. Missing Dependencies

- .stremiium/memory/ memory system
- .github/artifacts/ask-mode/knowledge-base.md
- workflow-routing.md knowledge layer

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
- Reference schema: {query, index, domain, resultType, relevance, source, timestamp, agentId, councilId}

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

- Retrieval may return sensitive knowledge; enforce sensitivity filtering.
- No restricted content returned to unauthorized agents.

---

## 11. South African Regulatory Considerations

- POPIA for personal data in retrieval results

---

## 12. Compliance Gate

- C03 Admin-Knowledge. Retrieval configuration requires C03 + C01 for POPIA-covered knowledge.

---

## 13. Rollback Plan

- Re-index knowledge after configuration changes.
- Restore retrieval index from backup.
- Re-validate retrieval results after schema changes.

---

## 14. Escalation Path

- C03-RETRIEVAL-ENGINEER → C03 Admin-Knowledge Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c03-admin-knowledge/C03-RETRIEVAL-ENGINEER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C03 Admin-Knowledge outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
