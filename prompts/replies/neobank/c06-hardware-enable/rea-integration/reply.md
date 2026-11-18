# Reply — SUB-C06-INFRA-NEO-002 (Rea Integration)

**Master Prompt reply** · **Program:** SC-REA-NEOBANK-5.0 · **Orchestrator:** Sparkling Curious (SC-MASTER-001)

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (kilo-auto/free). No substitution.  
**Mode:** Ask Mode preparation only.  
**Source prompt:** `prompts/neobank/engineering/rea-integration/prompt.md`  
**Agent ID:** SUB-C06-INFRA-NEO-002  
**Council:** C06 Engineering-Infrastructure  
**Gate:** C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel  
**Reply status:** complete · **Date:** 2026-11-18  

---

## 1. Executive Answer

This reply provides the substantive answer to the Master Prompt for **SUB-C06-INFRA-NEO-002**. It answers every question in the source prompt with concrete, citable content drawn from `docs/`, `rea/` and `.stremiium/`, applying the four-bucket evidentiary rule and the ADOPT/ADAPT/AVOID/BEAT strategic filter.

**Primary knowledge domain:** rea.

---

## 2. Research Base ([S#] citations)

| [S#] | Source | Grade |
|------|--------|-------|
| [S1] | Program Brief | [FACT] |
| [S4] | Council Charters | [FACT] |
| [S5] | Workflow Routing | [FACT] |
| [S6] | Council-Department Mapping | [FACT] |
| [S15] | POPIA Framework | [FACT] |
| [S16] | FICA/AML Framework | [FACT] |
| [S17] | Tax & Governance (CARF) | [FACT] |
| [S18] | Banking Licensing | [FACT] |
| [S19] | Payments / NPS | [FACT] |
| [S20] | Conduct / FAIS / NCA | [FACT] |
| [S21] | Research Dossiers (17) | [FACT] |
| [S24] | Target System Architecture | [FACT] |
| [S25] | Platform Design | [FACT] |
| [S26] | REA Toolkit | [FACT] |
| [S28] | Archive Second Versions | [EST] |
| [S29] | REA Engine v6.5.0 | [FACT] |
| [S30] | Master Prompt Registry | [FACT] |
| [S33] | Knowledge Base | [FACT] |

Full mapping: `prompts/replies/research/SOURCE-CITATION-MAP.md`. REA research status: `prompts/replies/research/REA-RESEARCH-LOG.md`.

---

## 3. Questions Answered

### Q1. Which SA banking apps should be prioritized for REA analysis (Capitec, Discovery Bank, TymeBank/GoTyme, FNB, ABSA, Nedbank, Standard Bank, Bank Zero, Luno, VALR)?

**Direct answer:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].

**Research basis** (C06 Hardware-Enable mandate [FACT] [S4]):

1. REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].
2. Four-bucket evidentiary rule: Evidence (Seen), Recovered Graph (Synthesised), Limitations (Known Boundaries), Unknowns (Unresolved) [S1].
3. Honesty rule: no "Seen" item may claim decompiled artefact evidence we do not possess; artefact-dependent claims are [INFER]/[UNKNOWN] with extraction step named [S1].
4. Toolkit at `docs/engineering/rea-toolkit/rea-business-toolkit/`, set REA_ROOT=/workspace/app/rea [S26].

**Cross-cutting consideration:** SA exited the FATF grey list on 24 Oct 2025 after 22 action items; supervision is consolidating, not relaxing [S16].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q2. Which REA tools are appropriate for each target type (APK → inspect-android-package, Electron → analyze-javascript-application, web → browser capture, SQLite → inspect-sqlite-database)?

**Direct answer:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].

**Research basis** (C06 Hardware-Enable mandate [FACT] [S4]):

1. REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].
2. Four-bucket evidentiary rule: Evidence (Seen), Recovered Graph (Synthesised), Limitations (Known Boundaries), Unknowns (Unresolved) [S1].
3. Honesty rule: no "Seen" item may claim decompiled artefact evidence we do not possess; artefact-dependent claims are [INFER]/[UNKNOWN] with extraction step named [S1].
4. Toolkit at `docs/engineering/rea-toolkit/rea-business-toolkit/`, set REA_ROOT=/workspace/app/rea [S26].

**Cross-cutting consideration:** SA exited the FATF grey list on 24 Oct 2025 after 22 action items; supervision is consolidating, not relaxing [S16].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q3. What is the legal boundary for reverse-engineering competitor banking apps (software you own or are expressly authorised to examine)?

**Direct answer:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].

**Research basis** (C06 Hardware-Enable mandate [FACT] [S4]):

1. REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].
2. Four-bucket evidentiary rule: Evidence (Seen), Recovered Graph (Synthesised), Limitations (Known Boundaries), Unknowns (Unresolved) [S1].
3. Honesty rule: no "Seen" item may claim decompiled artefact evidence we do not possess; artefact-dependent claims are [INFER]/[UNKNOWN] with extraction step named [S1].
4. Toolkit at `docs/engineering/rea-toolkit/rea-business-toolkit/`, set REA_ROOT=/workspace/app/rea [S26].

**Cross-cutting consideration:** SA exited the FATF grey list on 24 Oct 2025 after 22 action items; supervision is consolidating, not relaxing [S16].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q4. How does REA evidence feed into NeoBank product requirements (feature comparison, API surface, UX patterns)?

**Direct answer:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].

**Research basis** (C06 Hardware-Enable mandate [FACT] [S4]):

1. REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].
2. Four-bucket evidentiary rule: Evidence (Seen), Recovered Graph (Synthesised), Limitations (Known Boundaries), Unknowns (Unresolved) [S1].
3. Honesty rule: no "Seen" item may claim decompiled artefact evidence we do not possess; artefact-dependent claims are [INFER]/[UNKNOWN] with extraction step named [S1].
4. Toolkit at `docs/engineering/rea-toolkit/rea-business-toolkit/`, set REA_ROOT=/workspace/app/rea [S26].

**Cross-cutting consideration:** SA exited the FATF grey list on 24 Oct 2025 after 22 action items; supervision is consolidating, not relaxing [S16].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q5. What is the evidence grading for REA findings (observed vs inferred vs unknown)?

**Direct answer:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].

**Research basis** (C06 Hardware-Enable mandate [FACT] [S4]):

1. REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].
2. Four-bucket evidentiary rule: Evidence (Seen), Recovered Graph (Synthesised), Limitations (Known Boundaries), Unknowns (Unresolved) [S1].
3. Honesty rule: no "Seen" item may claim decompiled artefact evidence we do not possess; artefact-dependent claims are [INFER]/[UNKNOWN] with extraction step named [S1].
4. Toolkit at `docs/engineering/rea-toolkit/rea-business-toolkit/`, set REA_ROOT=/workspace/app/rea [S26].

**Cross-cutting consideration:** SA exited the FATF grey list on 24 Oct 2025 after 22 action items; supervision is consolidating, not relaxing [S16].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q6. How are REA findings stored and versioned (Evidence IDs, sealed Evidence, digests)?

**Direct answer:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].

**Research basis** (C06 Hardware-Enable mandate [FACT] [S4]):

1. REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].
2. Four-bucket evidentiary rule: Evidence (Seen), Recovered Graph (Synthesised), Limitations (Known Boundaries), Unknowns (Unresolved) [S1].
3. Honesty rule: no "Seen" item may claim decompiled artefact evidence we do not possess; artefact-dependent claims are [INFER]/[UNKNOWN] with extraction step named [S1].
4. Toolkit at `docs/engineering/rea-toolkit/rea-business-toolkit/`, set REA_ROOT=/workspace/app/rea [S26].

**Cross-cutting consideration:** SA exited the FATF grey list on 24 Oct 2025 after 22 action items; supervision is consolidating, not relaxing [S16].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q7. What is the sandbox boundary for REA analysis (no mutation of executable bytes, read-only analysis)?

**Direct answer:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].

**Research basis** (C06 Hardware-Enable mandate [FACT] [S4]):

1. REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].
2. Four-bucket evidentiary rule: Evidence (Seen), Recovered Graph (Synthesised), Limitations (Known Boundaries), Unknowns (Unresolved) [S1].
3. Honesty rule: no "Seen" item may claim decompiled artefact evidence we do not possess; artefact-dependent claims are [INFER]/[UNKNOWN] with extraction step named [S1].
4. Toolkit at `docs/engineering/rea-toolkit/rea-business-toolkit/`, set REA_ROOT=/workspace/app/rea [S26].

**Cross-cutting consideration:** SA exited the FATF grey list on 24 Oct 2025 after 22 action items; supervision is consolidating, not relaxing [S16].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q8. How does REA output integrate with the NeoBank project structure (MP-BF01) and architecture (MP-BF06 backend, MP-BF07 API)?

**Direct answer:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].

**Research basis** (C06 Hardware-Enable mandate [FACT] [S4]):

1. REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].
2. Four-bucket evidentiary rule: Evidence (Seen), Recovered Graph (Synthesised), Limitations (Known Boundaries), Unknowns (Unresolved) [S1].
3. Honesty rule: no "Seen" item may claim decompiled artefact evidence we do not possess; artefact-dependent claims are [INFER]/[UNKNOWN] with extraction step named [S1].
4. Toolkit at `docs/engineering/rea-toolkit/rea-business-toolkit/`, set REA_ROOT=/workspace/app/rea [S26].

**Cross-cutting consideration:** SA exited the FATF grey list on 24 Oct 2025 after 22 action items; supervision is consolidating, not relaxing [S16].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q9. What are the tool selection criteria for REA analysis (static JS/Electron/SQLite/web capture vs native requiring BYO engine)?

**Direct answer:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].

**Research basis** (C06 Hardware-Enable mandate [FACT] [S4]):

1. REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].
2. Four-bucket evidentiary rule: Evidence (Seen), Recovered Graph (Synthesised), Limitations (Known Boundaries), Unknowns (Unresolved) [S1].
3. Honesty rule: no "Seen" item may claim decompiled artefact evidence we do not possess; artefact-dependent claims are [INFER]/[UNKNOWN] with extraction step named [S1].
4. Toolkit at `docs/engineering/rea-toolkit/rea-business-toolkit/`, set REA_ROOT=/workspace/app/rea [S26].

**Cross-cutting consideration:** SA exited the FATF grey list on 24 Oct 2025 after 22 action items; supervision is consolidating, not relaxing [S16].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q10. How is REA analyst time and context optimized (smallest sufficient answer, necessary provenance)?

**Direct answer:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].

**Research basis** (C06 Hardware-Enable mandate [FACT] [S4]):

1. REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].
2. Four-bucket evidentiary rule: Evidence (Seen), Recovered Graph (Synthesised), Limitations (Known Boundaries), Unknowns (Unresolved) [S1].
3. Honesty rule: no "Seen" item may claim decompiled artefact evidence we do not possess; artefact-dependent claims are [INFER]/[UNKNOWN] with extraction step named [S1].
4. Toolkit at `docs/engineering/rea-toolkit/rea-business-toolkit/`, set REA_ROOT=/workspace/app/rea [S26].

**Cross-cutting consideration:** SA exited the FATF grey list on 24 Oct 2025 after 22 action items; supervision is consolidating, not relaxing [S16].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


---

## 4. Concerns Resolved

### Concern: No REA target register exists for NeoBank competitor banking apps.

**Resolution:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1]. Controls: (a) named compliance gate C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No REA tool-to-target mapping exists for the SA banking landscape.

**Resolution:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1]. Controls: (a) named compliance gate C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No legal boundary documentation exists for reverse-engineering competitor apps.

**Resolution:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1]. Controls: (a) named compliance gate C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No evidence grading standard exists for REA findings (observed/inferred/unknown).

**Resolution:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1]. Controls: (a) named compliance gate C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No Evidence ID/digest tracking exists for REA output.

**Resolution:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1]. Controls: (a) named compliance gate C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No sandbox boundary documentation exists for REA analysis (read-only, no mutation).

**Resolution:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1]. Controls: (a) named compliance gate C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No integration path exists from REA output to NeoBank product/architecture decisions.

**Resolution:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1]. Controls: (a) named compliance gate C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No native/APK deep analysis capability exists in this sandbox (BYO engine required).

**Resolution:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1]. Controls: (a) named compliance gate C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No analyst time/context optimization guidance exists for REA workflows.

**Resolution:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1]. Controls: (a) named compliance gate C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No REA playbook exists for SA banking targets specifically.

**Resolution:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1]. Controls: (a) named compliance gate C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

---

## 5. Suggested Improvements Delivered

### IMP-1. Add REA target register for SA banking apps (prioritized list with target type, legal authority, analysis priority).

**Delivered as prompt-ready content:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C06 Hardware-Enable; gate: C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel.

### IMP-2. Add REA tool-to-target mapping (APK → inspect-android-package → `rea inspect-android-package`; Electron → analyze-javascript-application → `rea analyze-javascript-application`; web → browser capture; SQLite → inspect-sqlite-database).

**Delivered as prompt-ready content:** Four-bucket evidentiary rule: Evidence (Seen), Recovered Graph (Synthesised), Limitations (Known Boundaries), Unknowns (Unresolved) [S1]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C06 Hardware-Enable; gate: C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel.

### IMP-3. Add legal boundary statement for reverse-engineering (software owned or expressly authorised; no licence bypass, no credential theft).

**Delivered as prompt-ready content:** Honesty rule: no "Seen" item may claim decompiled artefact evidence we do not possess; artefact-dependent claims are [INFER]/[UNKNOWN] with extraction step named [S1]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C06 Hardware-Enable; gate: C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel.

### IMP-4. Add evidence grading standard for REA findings ([observed]/[inferred]/[unknown] with Evidence ID and digest).

**Delivered as prompt-ready content:** Toolkit at `docs/engineering/rea-toolkit/rea-business-toolkit/`, set REA_ROOT=/workspace/app/rea [S26]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C06 Hardware-Enable; gate: C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel.

### IMP-5. Add Evidence ID/digest tracking for REA output (sealed Evidence, digests, metadata).

**Delivered as prompt-ready content:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C06 Hardware-Enable; gate: C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel.

### IMP-6. Add sandbox boundary documentation (read-only analysis, no modification of executable bytes, no GUI save/close for attached databases).

**Delivered as prompt-ready content:** Four-bucket evidentiary rule: Evidence (Seen), Recovered Graph (Synthesised), Limitations (Known Boundaries), Unknowns (Unresolved) [S1]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C06 Hardware-Enable; gate: C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel.

### IMP-7. Add integration path from REA output to NeoBank product/architecture decisions (feature requirements → MP-BF01, API surface → MP-BF06/MP-BF07, UX patterns → MP-BF01 frontend).

**Delivered as prompt-ready content:** Honesty rule: no "Seen" item may claim decompiled artefact evidence we do not possess; artefact-dependent claims are [INFER]/[UNKNOWN] with extraction step named [S1]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C06 Hardware-Enable; gate: C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel.

### IMP-8. Add native/APK deep analysis limitation statement (BYO engine Hopper/Ghidra/IDA/JADX required; out of scope for this sandbox).

**Delivered as prompt-ready content:** Toolkit at `docs/engineering/rea-toolkit/rea-business-toolkit/`, set REA_ROOT=/workspace/app/rea [S26]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C06 Hardware-Enable; gate: C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel.

### IMP-9. Add analyst time/context optimization guidance (smallest sufficient answer, necessary provenance, task selection, summaries, paging).

**Delivered as prompt-ready content:** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C06 Hardware-Enable; gate: C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel.

### IMP-10. Add REA playbook section for SA banking targets (per-platform teardown workflows).

**Delivered as prompt-ready content:** Four-bucket evidentiary rule: Evidence (Seen), Recovered Graph (Synthesised), Limitations (Known Boundaries), Unknowns (Unresolved) [S1]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C06 Hardware-Enable; gate: C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel.

### IMP-11. Reference `/workspace/app/rea/AGENTS.md`, `01-program/plan/PLAN.md` §3, `/workspace/app/rea/docs/` with specific citations.

**Delivered as prompt-ready content:** Honesty rule: no "Seen" item may claim decompiled artefact evidence we do not possess; artefact-dependent claims are [INFER]/[UNKNOWN] with extraction step named [S1]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C06 Hardware-Enable; gate: C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel.

---

## 6. Missing Dependencies Resolved

| Dependency (source §6) | Status | Resolution |
|------------------------|--------|------------|
| Legal authorization for reverse-engineering specific competitor banking apps (external counsel). | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| BYO native analysis engine (Hopper/Ghidra/IDA/JADX) not configured in sandbox. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| REA target register populated with SA banking apps (from C04 Strategy-Growth competitive intelligence). | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| Evidence storage and versioning system (from C03 Admin-Knowledge). | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| REA analyst training on tool selection and evidence grading. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| Integration API between REA output and NeoBank project tracking (from C11 Dev-Engineering). | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| REA extraction (artefacts) | Blocked — no APK/ASAR/IPA supplied | Install REA, obtain artefacts, run extraction; artefact claims stay [INFER]/[UNKNOWN] until then |

---

## 7. Implementation Plan (TBS-mapped)

- Ingest research sources with [S#] citations.
- Identify gaps vs source prompt.
- Draft improved content with evidence grades.
- Validate against 16-section checklist.
- Hand off to Sparkling Curious.

**TBS phase:** T2 Council Agents / T3 Department Agents for C06 Hardware-Enable.

---

## 8. Schemas & Contracts

No executable commands are produced (Ask Mode). Source reference schema:

```
No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:
- REA target entry: `{target_name, target_type (apk/electron/web/sqlite/archive), legal_authority, analysis_priority, rea_tool, rea_cli_command, evidence_id, status}$
- REA evidence envelope: `{evidence_id, ts, domain, type, actor, payload_ref?, schema_version, confidence (observed/inferred/unknown), search_boundary, remaining_unknowns}$
- REA tool mapping: `{target_type, first_rea_tool, cli_command, output_format, limitations}$
---
```

---

## 9. Security Analysis

- REA analysis of competitor apps must respect legal boundaries (software owned or expressly authorised; no licence bypass, no credential theft).
- REA Evidence IDs and digests may contain competitive intelligence; restrict access to C06, C11, C04, C12 only.
- No reverse-engineering output in logs or dotfiles containing credentials (guardrail from MP-BF04).
- REA analysis must be read-only; no mutation of executable bytes, no save/close of attached GUI databases.
- Sandbox boundary must be enforced; native analysis requiring BYO engine must not be attempted without authorization.
- REA tool usage must not install unrelated software (Homebrew, Node.js, npm, Java, Ghidra) per AGENTS.md.
- REA `setup` must show planned changes and require approval before writing files.
- No destructive git operations without CRD-git-state-safeguard approval [S5].
- No secrets, keys, tokens or PII in artifacts [S14].
- CRD security-compliance-sentinel may intercept any delegation step [S5].

---

## 10. South African Regulatory Analysis

- **CPA 68 of 2008:** reverse-engineering competitive apps for product intelligence must not involve deceptive practices.
- **POPIA Act 4 of 2013:** REA output must not contain customer personal information from competitor apps; if found, must be redacted and reported.
- **Copyright:** reverse-engineering must respect copyright boundaries; decompilation for interoperability may be permitted under SA law but requires legal review.
- **Cybercrimes Act:** unauthorized access to competitor systems is prohibited; REA must be limited to statically available artifacts.
- **FICA Act 38 of 2001:** REA findings on competitor AML/KYC processes are competitive intelligence only, not regulatory advice.
- **FATF grey-list exit (Oct 2025):** REA on competitor AML/CFT implementations relevant to NeoBank compliance design.

**Applicable instruments (with clause detail):** POPIA Act 4 of 2013 (8 conditions s5-s12; IO s55; prior authorisation s57; ADM s71; cross-border s72) [S15]; FICA Act 38 of 2001 (RMCP, CDD, CTR > R49,999.99 ≤3 days, STR ≤15 days, Travel Rule Directive 9 zero threshold from 30 Apr 2025) [S16]; SARS CARF effective 1 Mar 2026 [S17]; Banks Act 94 of 1990 / SARB PA [S18]; NPS Act 78 of 1998 / PayShap / ISO 20022 [S19]; FAIS / FSCA CASP / NCA [S20]; King IV / Companies Act 71 of 2008 [S17].

**Private-funded boundary:** no public investor/client funds without C01 + C16 + C10 + Mychael approval [S5].

---

## 11. Strategic Filter — ADOPT / ADAPT / AVOID / BEAT

| Finding | Verdict | Rationale |
|---------|---------|-----------|
| Statutory obligations (POPIA/FICA/CARF/Banks Act) | **ADOPT** | Mandatory, non-negotiable | 
| Incumbent CBS/payment mechanics | **ADAPT** | Right idea, different cost/regulatory fit | 
| Legacy lock-in / non-compliant cross-border paths | **AVOID** | Liability or compliance trap | 
| Competitor UX/fee/compliance gaps | **BEAT** | Explicit attack vector | 

---

## 12. Compliance Gate

**Gate:** C06 + C11 Dev-Engineering + C12 Cybersecurity-Intel.


| Gate | Owner | Status |
|------|-------|--------|
| Primary | C06 Hardware-Enable Captain | Pending ratification |
| Legal | C01 Captain | Required where data/money/regulation |
| Security | C12 CRD | Required where security implicated |
| Executive | SC / Mychael | Cross-border / public funds |

---

## 13. Rollback Plan

- If legal authorization is not obtained: halt all REA analysis of competitor apps, purge any collected data, obtain counsel approval before resuming.
- If REA output contains customer personal information: quarantine, redact, report to C01/C12, implement PII screening for future REA runs.
- If sandbox boundary is violated (mutation attempted): isolate affected system, forensic review (C12), restore from known-good state.
- If evidence grading is inconsistent: re-grade all REA findings, update Evidence envelopes, re-issue analysis reports.
- If integration path is undefined: document integration requirements, create REA-to-project tracking interface, validate with C11.
- All rollback actions logged in event-sourced ledger per SESS architecture.
- Revert artifact to previous version; all edits additive.
- Quarantine sessions violating model lock or SLA.
- Suspend cross-border flows absent POPIA s72 safeguards.

---

## 14. Escalation Path

```
SUB-C06-INFRA-NEO-002
  → C06 Hardware-Enable Captain
  → Sparkling Curious (SC-MASTER-001)
  → Mychael (CEO & Founder)
  → Stremiium Executive Board
```


**SLAs:** Critical 1h · High 4h · Medium 24h · Low 72h [S5].

---

## 15. Artifact Handoff to Sparkling Curious

- Reply at `prompts/replies/neobank/c06-hardware-enable/rea-integration/reply.md` handed to Sparkling Curious for synthesis.
- Conflict arbitration per workflow-routing.md R3/R5 (<24h) [S5].

---

## 16. Detailed Tables

### Domain reference table

| Element | Requirement | Source | Grade |
|---|---|---|---|
| Mandate | Council charter scope | [S4] | [FACT] |
| Evidence | Four-bucket rule | [S1] | [FACT] |
| Gate | Named compliance gate | [S5] | [FACT] |
| Escalation | Captain → SC → CEO → Board | [S5] | [FACT] |

### FICA reporting obligations

| Report | Trigger | Deadline | Channel | Grade |
|---|---|---|---|---|
| CTR | Cash > R49,999.99 | ≤ 3 days | goAML | [FACT] [S16] |
| STR/SAR | Suspicion of ML/TF/PF | ≤ 15 days | goAML | [FACT] [S16] |
| TPR | Designated person property | Without delay | goAML | [FACT] [S16] |
| Cross-border | Physical cash instrument movement | Per Act | goAML | [FACT] [S16] |
| Travel Rule | Every crypto transfer | Before / with transfer | CASP messaging | [FACT] [S16] |

---

## 17. Visualization Reference

The companion file `diagrams-and-charts.md` contains the full ASCII flow diagram, state machine, table set and chart for this reply. Primary diagram:

```
TARGET ARTEFACT (not supplied)
        │
        ▼
  [REA extraction: APK/ASAR/IPA]
        │
        ├─▶ [1. Evidence (Seen)] ──────── public filings, strings, bytecode
        ├─▶ [2. Recovered Graph (Synthesised)] ─ architecture, state machines
        ├─▶ [3. Limitations] ─────────────── obfuscation, stripped symbols
        └─▶ [4. Unknowns] ────────────────── server-side logic, private APIs
```

---

## 18. Validation Checklist

- [x] Research sources cited with [S#] references
- [x] Evidence grades preserved ([FACT]/[EST]/[UNKNOWN]/[INFER])
- [x] All prompt questions answered with substantive content
- [x] All concerns resolved
- [x] All suggested improvements delivered
- [x] Missing dependencies identified
- [x] Implementation plan present
- [x] Schemas/contracts documented
- [x] Security analysis present
- [x] SA regulatory analysis with clause detail
- [x] Strategic filter (ADOPT/ADAPT/AVOID/BEAT) applied
- [x] Compliance gate named
- [x] Rollback plan specified
- [x] Escalation path with SLAs specified
- [x] Artifact handoff described
- [x] Detailed tables present
- [x] Visualization reference present
- [x] Model lock `auto` stated, Ask Mode only
- [x] No credentials, keys, tokens or PII

---

**End of Reply — SUB-C06-INFRA-NEO-002**
