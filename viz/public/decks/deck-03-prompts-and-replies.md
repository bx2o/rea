## 201 Master Prompts → Substantive Replies

- Program `SC-REA-NEOBANK-5.0` · orchestrator Sparkling Curious (`SC-MASTER-001`)
- All **201 Master Prompts** answered as substantive UnConsolidated replies in `prompts/replies/`
- Generated 2026-11-18 · model lock `auto`
- Learn deck 03 of 04 · 12 slides

*Source: `prompts/replies/README.md` header + "Counts" table*

Note: This deck traces one chain through the repo: a prompt, its substantive reply, the research apparatus behind it, and the execution result it feeds.

---

## The prompt system

| Item | Count |
|---|---:|
| Stremiium agent prompts answered | 164 |
| NeoBank prompts answered | 37 |
| **Total prompts answered** | **201** |

- Unlike the earlier `execution/results/` files (which were generic templates), every reply answers the **actual questions** in its source prompt with concrete, citable, domain-specific content
- Example: "Which data fields are required for SARS CARF reporting?" is answered with the real CARF reporting schema

*Source: `prompts/replies/README.md` "Purpose" + "Counts"*

Note: 201 equals 164 Stremiium plus 37 NeoBank. The replies system replaced generic template outputs with question-by-question answers.

---

## prompts/ zone structure

One folder per prompt, one `prompt.md` inside it:

- **NeoBank prompts:** `prompts/neobank/<department>/<prompt-name>/prompt.md` — 16 departments, 37 prompts
- **Stremiium agent prompts:** `prompts/stremiium/<council>/<agent-name>/prompt.md` — 16 councils + orchestration, ~165 agents

Each prompt header carries: agent ID, council, gate, and model lock `auto`.

*Source: `README.md` "Prompt structure"*

Note: The prompts zone is fully folder-per-prompt: department-organised for NeoBank, council-organised for Stremiium agents.

---

## The replies system

`prompts/replies/` — substantive answers with research evidence and diagrams:

| Item | Count |
|---|---:|
| `reply.md` files | 201 |
| `research-evidence.md` files | 201 |
| `diagrams-and-charts.md` files | 201 |
| **Total files** | **603** + index/research/tools |

- `MASTER-INDEX.md` — the complete folder/file index
- `README.md` — the format specification

*Source: `prompts/replies/README.md` "Counts" + "Folder Structure" · `prompts/replies/MASTER-INDEX.md`*

Note: 603 files is three per prompt: the answer, the evidence, and the diagrams. The master index lists every one.

---

## The 18-section reply format

| 1–6 | 7–12 | 13–18 |
|---|---|---|
| 1 Executive Answer | 7 Implementation Plan | 13 Rollback Plan |
| 2 Research Base | 8 Schemas & Contracts | 14 Escalation Path (SLAs 1h/4h/24h/72h) |
| 3 Questions Answered | 9 Security Analysis | 15 Artifact Handoff to SC |
| 4 Concerns Resolved | 10 SA Regulatory Analysis | 16 Detailed Tables |
| 5 Suggested Improvements | 11 Strategic Filter | 17 Visualization Reference |
| 6 Missing Dependencies | 12 Compliance Gate | 18 Validation Checklist |

Plus a header block with model lock `auto`, agent ID, council, gate, and source prompt path.

*Source: `prompts/replies/README.md` "The 18-Section UnConsolidated Reply Format"*

Note: Every reply follows the same eighteen-section skeleton as the master prompts themselves — question, evidence, plan, gates, rollback.

---

## Evidence grades

Every substantive claim is graded:

- **`[FACT]`** — verified against a cited source
- **`[EST]`** — estimate, not yet measured
- **`[UNKNOWN]`** — unresolved in-repo
- **`[INFER]`** — derived, not directly observed

`[S#]` citations map to physical source paths via the citation map. The four-bucket evidentiary rule (Seen / Synthesised / Limitations / Unknowns) is applied throughout.

*Source: `prompts/replies/README.md` §"Companion Files" · `prompts/replies/research/SOURCE-CITATION-MAP.md`*

Note: The same discipline that governs dossiers governs replies: every claim carries a grade and a citation number.

---

## Research apparatus

| File | Purpose |
|---|---|
| `prompts/replies/research/KNOWLEDGE-BASE.md` | Topic → substantive content mapping |
| `prompts/replies/research/SOURCE-CITATION-MAP.md` | `[S#]` → source path mapping |
| `prompts/replies/research/REA-RESEARCH-LOG.md` | REA engine research record |
| `prompts/replies/tools/generate-replies.mjs` | Reply generator tool |
| `prompts/replies/tools/verify-replies.mjs` | Validation tool |

Validation result: **201 prompts verified, 0 errors** — every prompt has all 3 files, every reply has 18 sections, no generic boilerplate.

*Source: `prompts/replies/README.md` "Folder Structure", "Research Sources", "Validation" · `prompts/replies/MASTER-INDEX.md` top-level files*

Note: A shared knowledge base and citation map back all 201 replies, and a verifier enforces the format machine-checkably.

---

## Execution results zone

- `execution/results/<scope>/<prompt-name>/execution-result.md` — per-prompt results
- `execution/EXECUTION_LEDGER.md` — NeoBank Code Mode execution ledger (37 artifacts, 37 subagents, C01–C16, 2026-11-17, "Project Umoya")

*Source: `README.md` "Workspace zones" row "Execution results" · `execution/EXECUTION_LEDGER.md` header + "Summary"*

Note: The execution zone records what was actually built: thirty-seven artifacts across all sixteen councils, tracked in a single ledger.

---

## The viz program (this app)

- `prompts/viz/` — **19 prompt files = 1 orchestration directive + 18 delegated briefs** (C08 ×10, C11 ×6, C03 ×2)
- Status board: `prompts/viz/TASK-INDEX.md`
- This deck is the **VIZ-030** deliverable (C03 Admin-Knowledge · documentation-specialist)

> **Fact-drift flag:** the viz plan's headline says "18 task prompts / C08 (9)" while its own C08 table lists 10 rows (VIZ-010–019); the task index tracks the enumerated 19-file roster. Quoted exactly, not silently reconciled.

*Source: `prompts/viz/TASK-INDEX.md` roster note + `viz/README.md`*

Note: The learning app itself follows the same prompt-driven governance: nineteen briefs, one status board, this deck as one of the C03 deliverables.

---

## How to explore

- `/explorer` — virtualized file tree + file viewer (markdown render, metadata)
- **⌘K** — command palette opens: fuzzy search grouped into Views / Folders / Files / Commits
- `/commits` — commit timeline + diffs · `/councils` — 16-council graph · `/globe` — WebGL globe
- `/learn` — these decks

*Source: `viz/README.md` "Views" table · command palette per `prompts/viz/c08-design-creative/ui-ux-designer/prompt.md` §7*

Note: Everything cited in these decks can be opened directly: press command-K and type a path from any slide.

---

## Trace one prompt end-to-end

Worked example (C01 · CARF reporting):

1. Prompt: `prompts/neobank/legal/carf/prompt.md`
2. Reply: `prompts/replies/neobank/c01-legal-compliance/carf/reply.md` (+ `research-evidence.md`, `diagrams-and-charts.md`)
3. Execution: `execution/results/c01-legal-compliance/carf/execution-result.md`
4. Citations: `[S#]` → physical source paths in `prompts/replies/research/SOURCE-CITATION-MAP.md`

The prompt's question — "Which data fields are required for SARS CARF reporting?" — is answered with the real CARF reporting schema: user identification, jurisdiction, reporting R-CASP, transaction type, asset type, dates, values, counterparty.

*Source: `prompts/replies/README.md` "Purpose" example · `prompts/replies/MASTER-INDEX.md` (neobank/c01-legal-compliance/carf) · `execution/EXECUTION_LEDGER.md` C01 roster*

Note: One prompt, one reply, one execution result, one citation chain — that is the whole system in four hops.

---

## Closing — sources & next steps

- The full corpus index: `prompts/replies/MASTER-INDEX.md` — every folder and file
- Next: **deck 04 — Councils & Governance** — who routes these prompts (two planes, R1–R6)
- Back: deck 01 Repo Orientation · deck 02 Program Brief

*Source: `prompts/replies/README.md` · `prompts/replies/MASTER-INDEX.md` · `prompts/viz/TASK-INDEX.md`*

Note: The replies system is the program's knowledge engine — 201 questions answered with graded, citable evidence. Deck 04 shows the governance that routes the work.
