# Master Prompt — SUB-C03-DOCS-NEO-002 (NeoBank Document Control Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/knowledge-base/document-control-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C03-DOCS-NEO-002  
**Council:** C03 Admin-Knowledge  
**Gate:** C03 Admin-Knowledge

---

## 1. Summary

This master prompt instructs SUB-C03-DOCS-NEO-002 to ingest the NeoBank council charters, delivery governance, and architecture documentation from the Stremiium repo, review and improve document control prompts for the NeoBank (naming hygiene, artifact provenance, Notion projection, document control), and produce an improved unconsolidated artifact that converts the research into actionable document control prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness.

---

## 2. Assumptions

- The NeoBank council charters at `01-program/councils/cNN-name/CHARTER.md` define document ownership and KPIs for each council.
- The NeoBank delivery documentation at `01-program/delivery/` defines governance, risk, roadmaps, definition of done, quality gates, ways of working.
- The NeoBank architecture documentation at `06-architecture/platform-design/` defines system design, domain model, integrations, data, platform, security.
- The SAOS vocabulary law at `01-program/councils/README.md` §1 mandates "Council" as sole canonical collective noun; "Squad" is retired.
- Valid node prefixes: AGT, SUB, CRD, META, EXEC, Cnn, SPEC, SC.
- Document control must follow the UnConsolidated principle: no merging, preserve conflicts side-by-side, evidence-graded claims.
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What is the NeoBank document naming convention (council ID, artifact type, version, date)?
- What is the artifact provenance tracking method (who created, when, from what source, evidence grade)?
- How does Notion projection work for NeoBank documents (which documents are projected, how often, who manages)?
- What is the document control lifecycle (draft → review → approve → publish → archive → retain)?
- How are document versions managed (append-only, no silent edits, compensating corrections)?
- How does document control integrate with SESS state architecture (event-sourced ledgers, snapshots, checkpoints)?
- What is the naming hygiene standard for NeoBank artifacts (ID prefixes, directory slugs, file naming)?
- How are document access permissions managed (council-based, role-based, regulatory restrictions)?
- What is the document retention schedule for NeoBank artifacts (regulatory vs operational)?
- How are document cross-references maintained (back-links, forward-links, broken link detection)?

---

## 4. Concerns

- No NeoBank-specific document naming convention exists beyond the SAOS vocabulary law.
- No artifact provenance tracking is defined for NeoBank documents (source, evidence grade, creator).
- No Notion projection mapping exists for NeoBank documents.
- No document control lifecycle is defined (draft, review, approve, publish, archive, retain).
- No version management standard exists (append-only vs silent edits).
- No integration with SESS state architecture is documented.
- No naming hygiene enforcement mechanism exists for NeoBank artifacts.
- No access permission matrix exists for NeoBank documents.
- No retention schedule exists for NeoBank artifacts.
- No cross-reference maintenance process exists (back-links, broken links).
- The "Squad" → "Council" vocabulary transition may not be complete across all NeoBank documents.

---

## 5. Suggested Improvements

- Add NeoBank document naming convention (council ID + artifact type + version + date + `.md`) to document control prompts.
- Add artifact provenance tracking (creator, timestamp, source research, evidence grade `[FACT]/[EST]/[UNKNOWN]/[INFER]`, `[S#]` references).
- Add Notion projection mapping for NeoBank documents (which documents, sync frequency, owner).
- Add document control lifecycle (draft → review → approve → publish → archive → retain) with council owner at each stage.
- Add append-only version management (no silent edits; corrections are new versions/compensating events).
- Add SESS state architecture integration (event-sourced ledgers for document state, snapshots, checkpoints).
- Add naming hygiene standard (valid prefixes AGT/SUB/CRD/META/EXEC/Cnn/SPEC/SC; directory slugs cNN-name; no "Squad").
- Add access permission matrix (council-based, role-based, regulatory restrictions C01/C12 only).
- Add retention schedule for NeoBank artifacts (FICA 5 years, CARF, POPIA minimization, tax).
- Add cross-reference maintenance (back-links in council charters, broken link detection, link validation).
- Add "Squad" → "Council" vocabulary audit for all NeoBank documents.
- Add document quality standards (completeness, evidence grading, regulatory compliance, no placeholders).
- Reference `01-program/councils/README.md`, `01-program/delivery/`, `06-architecture/platform-design/README.md` with specific citations.

---

## 6. Missing Dependencies

- Notion API or projection tool specification from C03 Admin-Knowledge (may need to be requested).
- Document management system specification (if not Notion) from C03/C06.
- SESS state architecture integration point from C11 Dev-Engineering (event-sourced ledgers for document state).
- Retention schedule requirements from C01 Legal-Compliance (FICA 5 years, tax, POPIA).
- Access control system specification from C12 Cybersecurity-Intel.
- NeoBank document inventory from all 16 councils (each council's owned artifacts).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `01-program/councils/README.md` for vocabulary law and council directory structure.
2. Read individual council charters at `01-program/councils/cNN-name/CHARTER.md` for artifact ownership and KPIs.
3. Read `01-program/delivery/` for governance, risk, roadmaps, definition of done, quality gates, ways of working.
4. Read `06-architecture/platform-design/README.md` for architecture documentation structure.
5. Read `.stremiium/governance/state-architecture.md` for SESS event-sourced state patterns.
6. Read `.stremiium/governance/workflow-routing.md` for routing contract and vocabulary law.
7. Read current document control prompt text from the master prompt registry (if any exists).
8. Identify gaps between SAOS governance and NeoBank document control needs.
9. Draft document control prompts with naming convention, provenance tracking, Notion projection, lifecycle, version management, SESS integration, naming hygiene, access matrix, retention, cross-reference maintenance, vocabulary audit.
10. Add UnConsolidated handling (no merging, preserve conflicts, evidence grading).
11. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/knowledge-base/document-control-prompts.md`.
12. Run validation checklist (§9 below).
13. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Document metadata: `{doc_id, council_id, artifact_type, version, date, creator, source_research, evidence_grade, source_refs[], status, lifecycle_stage, access_level, retention_until, back_links[], forward_links[]}$
- Document lifecycle transition: `{doc_id, from_stage, to_stage, approver, timestamp, evidence_ref}$
- Notion projection mapping: `{doc_id, notion_page_id, sync_frequency, last_synced, projection_owner}$

---

## 9. Validation Checklist

- [ ] SAOS governance sources referenced (council README, delivery docs, architecture, SESS, workflow routing)
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] NeoBank document naming convention included
- [ ] Artifact provenance tracking included
- [ ] Notion projection mapping included
- [ ] Document control lifecycle included
- [ ] Append-only version management included
- [ ] SESS state architecture integration included
- [ ] Naming hygiene standard (valid prefixes, no "Squad") included
- [ ] Access permission matrix included
- [ ] Retention schedule included
- [ ] Cross-reference maintenance included
- [ ] "Squad" → "Council" vocabulary audit included
- [ ] UnConsolidated handling included
- [ ] Document quality standards included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C03)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Document control metadata contains internal structure information; restrict access to C03 and relevant council captains.
- No credentials, secrets, or private keys in document metadata (guardrail from MP-BF04).
- Access permission matrix must be enforced at the document level, not just folder level.
- Document versions must be tamper-evident (append-only, hash-chained where applicable).
- SESS integration must preserve document state across sessions and crashes.
- Cross-reference data must not leak internal document structure to unauthorized parties.
- Document retention must comply with POPIA minimization (delete when no longer needed) and FICA 5-year (retain regulatory documents).

---

## 11. South African Regulatory Considerations

- **POPIA Act 4 of 2013:** document metadata may contain personal information; retention and minimization required.
- **FICA Act 38 of 2001:** FICA-related documents must be retained 5 years; access restricted.
- **SARS CARF:** effective 1 March 2026; CARF-related documents retained per tax law.
- **Companies Act 71 of 2008:** corporate governance documents must be accurate and retained.
- **CPA 68 of 2008:** consumer-facing documents must be accurate; outdated info creates CPA risk.
- **Document retention:** regulatory documents (FICA, CARF, tax) have mandatory retention; operational documents follow POPIA minimization.

---

## 12. Compliance Gate

**C03 Admin-Knowledge.** Document control standards apply to all NeoBank artifacts. C01 Legal-Compliance review required for documents containing regulatory compliance content.

---

## 13. Rollback Plan

- If naming convention is violated across multiple documents: batch-rename with mapping table, update all back-links, document changes.
- If provenance tracking is missing: add provenance metadata to affected documents, back-fill from git history where available.
- If Notion projection fails: halt projection, fix mapping, re-sync after validation.
- If version management violates append-only rule: identify silent edits, restore previous versions, document as compensating events.
- If access control is misconfigured: restrict documents, audit access, re-grant on need-to-know.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C03-DOCS-NEO-002 → C03 Admin-Knowledge Captain (Chief-Librarian) → Sparkling Curious → Mychael (CEO) → Board.** Critical document control events skip to C03 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/knowledge-base/document-control-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C03 document control outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C01 legal review, C12 security access) and arbitrates per workflow-routing.md R3/R5.
