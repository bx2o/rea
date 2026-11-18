# Master Prompt — C03-KNOWLEDGE-GRAPH-BUILDER (Knowledge Graph Builder)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c03-admin-knowledge/C03-KNOWLEDGE-GRAPH-BUILDER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C03-KNOWLEDGE-GRAPH-BUILDER  
**Council:** C03 C03 Admin-Knowledge  
**Gate:** C03 Admin-Knowledge

---

## 1. Summary

- This master prompt instructs C03-KNOWLEDGE-GRAPH-BUILDER to build graph links between repos, agents, tasks, regulations, models, services, and dotfiles, producing a graph export.
- Research data to ingest: .stremiium/config/agents/agent-registry.json, .stremiium/config/council-department-mapping.json, 01-program/councils/.
- Prompts to improve: Repo-to-entity graph links, Agent-to-task graph links, Task-to-regulation graph links, Model-to-service graph links, Dotfile-to-service graph links, Graph export.
- Output artifact: `artifacts/stremiium/c03-admin-knowledge/C03-KNOWLEDGE-GRAPH-BUILDER-prompts.md`.

---

## 2. Assumptions

- Repos are linked to agents and tasks.
- Agents are linked to tasks and councils.
- Tasks are linked to regulations and models.
- Graph is exported in machine-readable format.

---

## 3. Questions

- How are repos linked to agents and tasks?
- How are agents linked to tasks and councils?
- How are tasks linked to regulations and models?
- How are models linked to services and councils?
- How is the graph exported for consumption?

---

## 4. Concerns

- No knowledge graph built yet.
- Entity links not established.
- Graph export format not defined.
- Graph not kept in sync with entity changes.

---

## 5. Suggested Improvements

- Build graph links between repos, agents, tasks, regulations, models, services, and dotfiles.
- Export graph in machine-readable format (JSON/GraphML).
- Keep graph synchronized with entity changes via C03 metadata steward.
- Validate graph integrity on each export.

---

## 6. Missing Dependencies

- .stremiium/config/agents/agent-registry.json
- .stremiium/config/council-department-mapping.json
- 01-program/councils/

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
- Reference schema: {graphId, nodes, edges, exportFormat, exportDate, nodeCount, edgeCount, integrityCheck}

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

- Graph may contain org structure; restrict sensitive nodes.
- No secrets in graph data.

---

## 11. South African Regulatory Considerations

- POPIA for personal data in graph

---

## 12. Compliance Gate

- C03 Admin-Knowledge. Graph export requires C03 + Sparkling Curious for cross-council links.

---

## 13. Rollback Plan

- Re-export graph from last known good state.
- Re-build graph links after entity changes.
- Re-validate graph integrity after export failures.

---

## 14. Escalation Path

- C03-KNOWLEDGE-GRAPH-BUILDER → C03 Admin-Knowledge Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c03-admin-knowledge/C03-KNOWLEDGE-GRAPH-BUILDER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C03 Admin-Knowledge outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
