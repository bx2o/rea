# Master Prompt — SUB-C06-INFRA-NEO-002 (NeoBank REA Integration Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/engineering/rea-integration-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C06-INFRA-NEO-002  
**Council:** C06 Engineering-Infrastructure  
**Gate:** C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel

---

## 1. Summary

This master prompt instructs SUB-C06-INFRA-NEO-002 to ingest the REA (Reverse Engineer Anything) reverse-engineering engine data from `/workspace/app/rea` and the NeoBank REA method from `01-program/plan/PLAN.md` §3, review and improve REA integration prompts for NeoBank competitor app analysis, and produce an improved unconsolidated artifact that converts the research into actionable REA integration prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness.

---

## 2. Assumptions

- The REA engine at `/workspace/app/rea` is cloned, installed, built, and verified working (npm ci, npm run build:cached, rea doctor) as of 2026-10-16.
- REA provides 207 MCP tools + 153 CLI commands + 6 prompts for static analysis of Android APKs, Electron/web banking apps, JS, Go/Rust metadata, WASM/EVM/SQLite/PE/binaries, archives.
- REA native/APK deep analysis needs a BYO engine (Hopper/Ghidra/IDA/JADX) not configured in this sandbox.
- The NeoBank REA method at `01-program/plan/PLAN.md` §3 defines the reverse-engineering method for banking targets.
- REA output is static analysis only; never implies static analysis observed execution.
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- Which SA banking apps should be prioritized for REA analysis (Capitec, Discovery Bank, TymeBank/GoTyme, FNB, ABSA, Nedbank, Standard Bank, Bank Zero, Luno, VALR)?
- Which REA tools are appropriate for each target type (APK → inspect-android-package, Electron → analyze-javascript-application, web → browser capture, SQLite → inspect-sqlite-database)?
- What is the legal boundary for reverse-engineering competitor banking apps (software you own or are expressly authorised to examine)?
- How does REA evidence feed into NeoBank product requirements (feature comparison, API surface, UX patterns)?
- What is the evidence grading for REA findings (observed vs inferred vs unknown)?
- How are REA findings stored and versioned (Evidence IDs, sealed Evidence, digests)?
- What is the sandbox boundary for REA analysis (no mutation of executable bytes, read-only analysis)?
- How does REA output integrate with the NeoBank project structure (MP-BF01) and architecture (MP-BF06 backend, MP-BF07 API)?
- What are the tool selection criteria for REA analysis (static JS/Electron/SQLite/web capture vs native requiring BYO engine)?
- How is REA analyst time and context optimized (smallest sufficient answer, necessary provenance)?

---

## 4. Concerns

- No REA target register exists for NeoBank competitor banking apps.
- No REA tool-to-target mapping exists for the SA banking landscape.
- No legal boundary documentation exists for reverse-engineering competitor apps.
- No evidence grading standard exists for REA findings (observed/inferred/unknown).
- No Evidence ID/digest tracking exists for REA output.
- No sandbox boundary documentation exists for REA analysis (read-only, no mutation).
- No integration path exists from REA output to NeoBank product/architecture decisions.
- No native/APK deep analysis capability exists in this sandbox (BYO engine required).
- No analyst time/context optimization guidance exists for REA workflows.
- No REA playbook exists for SA banking targets specifically.

---

## 5. Suggested Improvements

- Add REA target register for SA banking apps (prioritized list with target type, legal authority, analysis priority).
- Add REA tool-to-target mapping (APK → inspect-android-package → `rea inspect-android-package`; Electron → analyze-javascript-application → `rea analyze-javascript-application`; web → browser capture; SQLite → inspect-sqlite-database).
- Add legal boundary statement for reverse-engineering (software owned or expressly authorised; no licence bypass, no credential theft).
- Add evidence grading standard for REA findings ([observed]/[inferred]/[unknown] with Evidence ID and digest).
- Add Evidence ID/digest tracking for REA output (sealed Evidence, digests, metadata).
- Add sandbox boundary documentation (read-only analysis, no modification of executable bytes, no GUI save/close for attached databases).
- Add integration path from REA output to NeoBank product/architecture decisions (feature requirements → MP-BF01, API surface → MP-BF06/MP-BF07, UX patterns → MP-BF01 frontend).
- Add native/APK deep analysis limitation statement (BYO engine Hopper/Ghidra/IDA/JADX required; out of scope for this sandbox).
- Add analyst time/context optimization guidance (smallest sufficient answer, necessary provenance, task selection, summaries, paging).
- Add REA playbook section for SA banking targets (per-platform teardown workflows).
- Reference `/workspace/app/rea/AGENTS.md`, `01-program/plan/PLAN.md` §3, `/workspace/app/rea/docs/` with specific citations.

---

## 6. Missing Dependencies

- Legal authorization for reverse-engineering specific competitor banking apps (external counsel).
- BYO native analysis engine (Hopper/Ghidra/IDA/JADX) not configured in sandbox.
- REA target register populated with SA banking apps (from C04 Strategy-Growth competitive intelligence).
- Evidence storage and versioning system (from C03 Admin-Knowledge).
- REA analyst training on tool selection and evidence grading.
- Integration API between REA output and NeoBank project tracking (from C11 Dev-Engineering).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `/workspace/app/rea/AGENTS.md` for REA repository guidelines and contribution scope.
2. Read `/workspace/app/rea/README.md` for REA overview and provider setup.
3. Read `01-program/plan/PLAN.md` §3 for REA reverse-engineering method (target routing table).
4. Read `/workspace/app/04-engineering/reverse-engineering/rea-analysis/README.md` for REA setup and verification record.
5. Read `/workspace/app/04-engineering/reverse-engineering/rea-analysis/tool-catalog.md` for REA tool inventory (207 MCP tools, 153 CLI commands).
6. Read `/workspace/app/02-research/landscape/03-neobank-digital-competitors/` for competitor app inventory.
7. Read current REA integration prompt text from the master prompt registry (if any exists).
8. Identify gaps between REA capability and current prompt content (target register, tool mapping, legal boundary, evidence grading, Evidence tracking, sandbox boundary, integration path, native analysis limitation, analyst optimization, playbook).
9. Draft improved REA integration prompts with target register, tool-to-target mapping, legal boundary, evidence grading, Evidence tracking, sandbox boundary, integration path, native limitation, analyst optimization, SA banking playbook.
10. Separate fixed REA requirements from hypotheses per global rule 7.
11. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/engineering/rea-integration-prompts.md`.
12. Run validation checklist (§9 below).
13. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- REA target entry: `{target_name, target_type (apk/electron/web/sqlite/archive), legal_authority, analysis_priority, rea_tool, rea_cli_command, evidence_id, status}$
- REA evidence envelope: `{evidence_id, ts, domain, type, actor, payload_ref?, schema_version, confidence (observed/inferred/unknown), search_boundary, remaining_unknowns}$
- REA tool mapping: `{target_type, first_rea_tool, cli_command, output_format, limitations}$

---

## 9. Validation Checklist

- [ ] REA repo sources referenced (AGENTS.md, README, tool-catalog, setup-and-verification)
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[observed]/[inferred]/[unknown]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] REA target register for SA banking apps included
- [ ] REA tool-to-target mapping included
- [ ] Legal boundary statement for reverse-engineering included
- [ ] Evidence grading standard included
- [ ] Evidence ID/digest tracking included
- [ ] Sandbox boundary documentation included
- [ ] Integration path to NeoBank product/architecture included
- [ ] Native/APK deep analysis limitation stated
- [ ] Analyst time/context optimization guidance included
- [ ] REA playbook for SA banking targets included
- [ ] Fixed requirements separated from hypotheses
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C06 + C11 + C12)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- REA analysis of competitor apps must respect legal boundaries (software owned or expressly authorised; no licence bypass, no credential theft).
- REA Evidence IDs and digests may contain competitive intelligence; restrict access to C06, C11, C04, C12 only.
- No reverse-engineering output in logs or dotfiles containing credentials (guardrail from MP-BF04).
- REA analysis must be read-only; no mutation of executable bytes, no save/close of attached GUI databases.
- Sandbox boundary must be enforced; native analysis requiring BYO engine must not be attempted without authorization.
- REA tool usage must not install unrelated software (Homebrew, Node.js, npm, Java, Ghidra) per AGENTS.md.
- REA `setup` must show planned changes and require approval before writing files.

---

## 11. South African Regulatory Considerations

- **CPA 68 of 2008:** reverse-engineering competitive apps for product intelligence must not involve deceptive practices.
- **POPIA Act 4 of 2013:** REA output must not contain customer personal information from competitor apps; if found, must be redacted and reported.
- **Copyright:** reverse-engineering must respect copyright boundaries; decompilation for interoperability may be permitted under SA law but requires legal review.
- **Cybercrimes Act:** unauthorized access to competitor systems is prohibited; REA must be limited to statically available artifacts.
- **FICA Act 38 of 2001:** REA findings on competitor AML/KYC processes are competitive intelligence only, not regulatory advice.
- **FATF grey-list exit (Oct 2025):** REA on competitor AML/CFT implementations relevant to NeoBank compliance design.

---

## 12. Compliance Gate

**C06 Engineering-Infrastructure + C11 Dev-Engineering + C12 Cybersecurity-Intel.** Binding compliance veto on any REA gap affecting legal boundary or security. C01 Legal-Compliance review required before any reverse-engineering of competitor apps begins.

---

## 13. Rollback Plan

- If legal authorization is not obtained: halt all REA analysis of competitor apps, purge any collected data, obtain counsel approval before resuming.
- If REA output contains customer personal information: quarantine, redact, report to C01/C12, implement PII screening for future REA runs.
- If sandbox boundary is violated (mutation attempted): isolate affected system, forensic review (C12), restore from known-good state.
- If evidence grading is inconsistent: re-grade all REA findings, update Evidence envelopes, re-issue analysis reports.
- If integration path is undefined: document integration requirements, create REA-to-project tracking interface, validate with C11.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C06-INFRA-NEO-002 → C06 Engineering-Infrastructure Captain → C11 Dev-Engineering Captain → C12 Cybersecurity-Intel Captain → C01 Legal-Compliance Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical REA/legal events skip to C06 + C12 + C01 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/engineering/rea-integration-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C06 REA integration outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C11 dev-engineering overlap, C12 security overlap, C04 competitive intelligence overlap) and arbitrates per workflow-routing.md R3/R5.
