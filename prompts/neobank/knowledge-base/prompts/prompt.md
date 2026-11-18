# Master Prompt — SUB-C03-KB-NEO-001 (NeoBank Knowledge Base Inventory Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/knowledge-base/prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C03-KB-NEO-001  
**Council:** C03 Admin-Knowledge  
**Gate:** Legal-Compliance

---

## 1. Summary

This master prompt instructs SUB-C03-KB-NEO-001 to ingest the knowledge base and source library research data from the Stremiium repo, review and improve the NeoBank knowledge base prompts (MP-BF02 NeoBank Knowledge Base Inventory), and produce an improved unconsolidated artifact that converts the research into actionable knowledge base prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (POPIA, FICA, CARF, FSCA/FAIS).

---

## 2. Assumptions

- The source-library index at `02-research/source-library/INDEX.md`, bibliography at `BIBLIOGRAPHY.md`, and coverage matrix at `COVERAGE-MATRIX.md` are current as of 2026-10-16 and remain valid for prompt preparation.
- The research dossier structure at `02-research/dossiers/`, `02-research/landscape/`, and `02-research/synthesis/` contains the raw research material for knowledge base population.
- MP-BF02 (NeoBank Knowledge Base Inventory Artifact Generator) is the canonical knowledge base prompt requiring improvement; no other knowledge base prompts are in scope for this subagent.
- The NeoBank knowledge base must separate public-facing content from internal compliance content with appropriate access control.
- POPIA redaction rules apply to customer personal information in knowledge base articles.
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- Which knowledge bases are required for NeoBank operations (product, compliance, POPIA, FICA, CARF, FSCA/FAIS, wallet operations, payments, MPC key management, PIN verification, dispute, fraud, support macros, developer docs, incident runbooks, vendor KB, regulatory change log)?
- Who owns each knowledge base and what is the update cadence?
- What access control applies to each knowledge base (public, internal, C01-only, C12-only)?
- What POPIA redaction rules apply to knowledge base articles containing customer data?
- What retention period applies to knowledge base articles (regulatory vs operational)?
- How are knowledge base articles linked to agents and workflows in the SAOS hierarchy?
- How is the regulatory change log maintained when SA regulations change (FSCA, FICA, POPIA, CARF updates)?
- How does the knowledge base integrate with Sparkling Curious delegation and Sparkling Curious's knowledge synthesis function?
- What source artifacts feed each knowledge base (research dossiers, council charters, legal opinions, vendor docs)?
- How are contradictory sources handled in the knowledge base (UnConsolidated principle: preserve side-by-side)?

---

## 4. Concerns

- No knowledge base ownership map exists for NeoBank-specific KBs.
- No update cadence is defined for regulatory knowledge bases (CARF, FICA, POPIA change monitoring).
- No access control matrix exists for NeoBank knowledge bases (public vs internal vs restricted).
- No POPIA redaction rules are defined for KB articles containing customer personal information.
- No retention schedule exists for KB articles (regulatory retention may differ from operational).
- No linkage between KB articles and SAOS agents/workflows is documented.
- No regulatory change log process exists for tracking SA regulatory updates.
- No UnConsolidated handling for contradictory sources (preserve side-by-side, flag conflicts).
- No integration with Sparkling Curious knowledge synthesis is specified.
- No source artifact traceability (each KB article should cite its source research).

---

## 5. Suggested Improvements

- Add knowledge base inventory to MP-BF02 with all required KBs (product, compliance, POPIA, FICA, CARF, FSCA/FAIS, wallet operations, payments, MPC key management, PIN verification, dispute, fraud, support macros, developer docs, incident runbooks, vendor KB, regulatory change log).
- Add owner, source artifacts, update cadence, access control, redaction rules, retention, linked agents, linked workflows for each KB.
- Add POPIA redaction rules for KB articles containing customer personal information.
- Add regulatory change log process for tracking SA regulatory updates (FSCA, FICA, POPIA, CARF, NPS).
- Add UnConsolidated handling for contradictory sources (preserve side-by-side, flag conflicts, mark [FACT]/[EST]/[UNKNOWN]/[INFER]).
- Add KB-to-agent and KB-to-workflow linkage mapping per SAOS hierarchy.
- Add source artifact traceability for each KB article (cite `02-research/` sources with `[S#]` references).
- Add integration with Sparkling Curious knowledge synthesis function.
- Add access control matrix (public, internal, C01-only, C12-only, Executive-only).
- Add retention schedule aligned with regulatory requirements (FICA 5 years, CARF, POPIA minimization).
- Add knowledge base quality criteria (accuracy, currency, source citation, regulatory grade).
- Reference `02-research/source-library/INDEX.md`, `BIBLIOGRAPHY.md`, `COVERAGE-MATRIX.md` with specific citations.

---

## 6. Missing Dependencies

- Knowledge base platform specification (Notion, Confluence, or custom) from C03 Admin-Knowledge.
- Regulatory change monitoring source list (FSCA gazette, FIC guidance, SARS updates, SARB circulars).
- Access control system specification from C12 Cybersecurity-Intel.
- POPIA redaction tools or process from C01 Legal-Compliance.
- Retention schedule requirements from C01 Legal-Compliance (FICA 5 years, tax, POPIA minimization).
- SAOS agent/workflow registry from Sparkling Curious for KB linkage.
- Source research export from C04 Strategy-Growth (dossiers, synthesis).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `02-research/source-library/INDEX.md`, `BIBLIOGRAPHY.md`, `COVERAGE-MATRIX.md` for research source inventory.
2. Read `02-research/dossiers/`, `02-research/landscape/`, `02-research/synthesis/` for research content organization.
3. Read `01-program/artifacts/README.md` and `execution-ledger.md` for artifact management conventions.
4. Read `06-architecture/platform-design/README.md` for architecture documentation structure.
5. Read MP-BF02 current prompt text from the master prompt registry.
6. Identify gaps between research source inventory and current MP-BF02 content (ownership, cadence, access control, redaction, retention, agent/workflow linkage, change log, UnConsolidated handling, source traceability, Sparkling Curious integration).
7. Draft improved MP-BF02 NeoBank Knowledge Base Inventory with all required KBs, each with owner, source artifacts, update cadence, access control, redaction rules, retention, linked agents, linked workflows.
8. Add POPIA redaction rules for KB articles.
9. Add regulatory change log process.
10. Add UnConsolidated handling for contradictory sources.
11. Add KB-to-agent and KB-to-workflow linkage mapping.
12. Add source artifact traceability with `[S#]` citations.
13. Add Sparkling Curious knowledge synthesis integration.
14. Add access control matrix and retention schedule.
15. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/knowledge-base/prompts.md`.
16. Run validation checklist (§9 below).
17. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Knowledge base entry: `{kb_id, name, owner, source_artifacts[], update_cadence, access_control, redaction_rules, retention_period, linked_agents[], linked_workflows[], quality_criteria, evidence_grade}$
- Regulatory change log entry: `{change_id, regulation, source, change_description, effective_date, impact_assessment, owner, status, resolution_date}$
- POPIA redaction rule: `{data_field, redact_if_present, redaction_method, approval_required, audit_event}$

---

## 9. Validation Checklist

- [ ] All research source library sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] All 16 knowledge bases listed with complete attributes
- [ ] Owner, source artifacts, update cadence for each KB
- [ ] Access control matrix included
- [ ] POPIA redaction rules included
- [ ] Retention schedule included
- [ ] Linked agents and workflows included
- [ ] Regulatory change log process included
- [ ] UnConsolidated contradictory source handling included
- [ ] Source artifact traceability with `[S#]` citations included
- [ ] Sparkling Curious knowledge synthesis integration included
- [ ] Knowledge base quality criteria included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C01)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Knowledge bases containing compliance content (POPIA, FICA, CARF) contain sensitive regulatory information; restrict access to C01/C12 only.
- KB articles with customer personal information must apply POPIA redaction rules before publication.
- No credentials, secrets, or private keys in KB articles (guardrail from MP-BF04).
- Access control must be role-based with audit trail per SESS architecture.
- Regulatory change log contains upcoming compliance obligations; restrict access to C01, C02, C10, C12, C16.
- Internal KBs must be isolated from public-facing content to prevent accidental disclosure of compliance gaps.
- KB content changes must be version-controlled and auditable.

---

## 11. South African Regulatory Considerations

- **POPIA Act 4 of 2013:** KB articles containing customer personal information are POPIA processing; redaction and minimization required.
- **FICA Act 38 of 2001:** FICA KB contains AML/CFT procedures; tipping-off prevention restricts access.
- **SARS CARF:** effective 1 March 2026; CARF KB contains reporting procedures and data schemas.
- **FSCA/FAIS:** FSCA/FAIS KB contains licensing and conduct requirements; access restricted to C01.
- **CPA 68 of 2008:** product KB must contain accurate consumer disclosures; misleading info creates CPA risk.
- **Companies Act 71 of 2008:** corporate governance documents in KB must be accurate and current.
- **Retention:** FICA 5-year record retention applies to FICA KB articles; CARF retention applies to CARF KB.
- **Regulatory change monitoring:** FSCA gazette, FIC guidance, SARS updates, SARB circulars must be monitored for changes affecting KB content.

---

## 12. Compliance Gate

**C01 Legal-Compliance.** Binding compliance veto on any KB gap affecting regulatory content. No customer-facing or compliance KB may publish without C01 review for POPIA/FICA/CARF accuracy.

---

## 13. Rollback Plan

- If POPIA redaction is found inadequate: unpublish affected KB articles, implement redaction, re-publish after C01 review.
- If access control is misconfigured: restrict KB access, audit access logs, re-grant on need-to-know basis.
- If regulatory change log is outdated: initiate regulatory monitoring sweep, update affected KBs, document changes.
- If contradictory sources are consolidated improperly: restore UnConsolidated side-by-side presentation, flag conflicts for C01 resolution.
- If source traceability is broken: re-cite sources with `[S#]` references, remove unverified claims.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C03-KB-NEO-001 → C03 Admin-Knowledge Captain (Chief-Librarian) → C01 Legal-Compliance Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical KB/knowledge events skip to C03 + C01 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/knowledge-base/prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C03 knowledge base outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C01 legal/POPIA overlap, C12 security overlap) and arbitrates per workflow-routing.md R3/R5.
