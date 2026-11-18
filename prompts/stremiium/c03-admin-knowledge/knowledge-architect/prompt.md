# Master Prompt — C03-KNOWLEDGE-ARCHITECT (Knowledge-Architect)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c03-admin-knowledge/C03-KNOWLEDGE-ARCHITECT-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C03-KNOWLEDGE-ARCHITECT  
**Council:** C03 C03 Admin-Knowledge  
**Gate:** C03 Admin-Knowledge

---

## 1. Summary

- This master prompt instructs C03-KNOWLEDGE-ARCHITECT to design the knowledge graph for councils, agents, tasks, models, regulations, hardware, dotfiles, services, and $STM tokens.
- Research data to ingest: .stremiium/config/council-department-mapping.json, .stremiium/config/agents/agent-registry.json, workflow-routing.md knowledge layer.
- Prompts to improve: Knowledge graph schema, Council-entity mapping, Agent-entity mapping, Task-entity mapping, Model-entity mapping, Regulation-entity mapping, Hardware-entity mapping, Dotfile-entity mapping, Service-entity mapping, $STM-token-entity mapping.
- Output artifact: `artifacts/stremiium/c03-admin-knowledge/C03-KNOWLEDGE-ARCHITECT-prompts.md`.

---

## 2. Assumptions

- All entities are linked in the knowledge graph.
- Entity relationships are defined.
- Graph update process is documented.
- Graph integrity is verified.

---

## 3. Questions

- How are councils, agents, tasks, models, regulations, hardware, dotfiles, services, and $STM tokens linked?
- What is the entity relationship diagram?
- How is the graph queried for retrieval?
- How is the graph updated when entities change?
- How is graph integrity maintained?

---

## 4. Concerns

- No knowledge graph schema exists.
- Entity relationships not defined.
- Graph update process not documented.
- Graph integrity not verified.

---

## 5. Suggested Improvements

- Design knowledge graph schema linking all entities.
- Define council → agent → task → model → regulation relationships.
- Add hardware → dotfile → service dependency mapping.
- Add $STM token → service → council impact mapping.

---

## 6. Missing Dependencies

- .stremiium/config/council-department-mapping.json
- .stremiium/config/agents/agent-registry.json
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
- Reference schema: {entityId, entityType, attributes, relationships, council, domain, sensitivity, version, lastUpdated}

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

- Knowledge graph may contain sensitive org structure; restrict to C03 + captains.
- No secrets in graph nodes or edges.

---

## 11. South African Regulatory Considerations

- POPIA for personal data in graph
- Companies Act 71 of 2008 for corporate structure

---

## 12. Compliance Gate

- C03 Admin-Knowledge. Knowledge graph schema requires C03 + Sparkling Curious for cross-council links.

---

## 13. Rollback Plan

- Restore graph from backup if corrupted.
- Re-index graph entities after restoration.
- Re-validate graph integrity on schema changes.

---

## 14. Escalation Path

- C03-KNOWLEDGE-ARCHITECT → C03 Admin-Knowledge Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c03-admin-knowledge/C03-KNOWLEDGE-ARCHITECT-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C03 Admin-Knowledge outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
