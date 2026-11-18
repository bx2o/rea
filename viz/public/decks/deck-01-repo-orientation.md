## rea — Repo Orientation

**Stremiium NeoBank Reverse-Engineering Program** · `SC-REA-NEOBANK-5.0`

- Master orchestrator: **Sparkling Curious** (`SC-MASTER-001`)
- Workspace status: **unified, zone-organised** (2026-11-18)
- Learn deck 01 of 04 · 13 slides

*Source: `README.md` (root)*

Note: Orientation deck for the rea workspace: what it is, how it is zoned, what to read first, and the rules that govern every claim. Every slide cites physical repo paths.

---

## What this workspace is

- **rea** = Reverse Engineer Anything — the `morluto/rea` engine checked out at the repo root (**v6.5.0**, **153 CLI commands**; MCP tool count is ≈200 and differs by source — see the note below), **present but not installed** (`node_modules` absent)
- The repo carries the complete **program workspace** for `SC-REA-NEOBANK-5.0`: canonical agent OS, task breakdown structure, reverse-engineering dossiers, target NeoBank architecture, reusable platform design, REA substrate, synthesised deliverables, preserved archives
- **Unified 2026-11-18** — all four `trae/agent-*` branches integrated into `main`; no folders or files deleted in consolidation or reorganisation
- Scale: **11,746 files · 3,254 directories** (viz snapshot at commit `b474113`, 2026-11-18)

*Source: `README.md` · `viz/public/snapshots/stats.json` (meta.totalFiles / meta.totalDirs)*

Note: One program, one lineage: consolidation kept every file. The 11k+ files break down into six colour-coded zones on the next slide.

---

## The six zones

| Zone | Files | Purpose |
|---|---:|---|
| `docs/` | 2,981 | Governance, program, research, architecture, engineering, deliverables, archive |
| `prompts/` | 835 | One folder per Master Prompt (Stremiium + NeoBank) |
| `execution/` | 1,613 | Per-prompt execution results + ledger |
| `.stremiium/` | 2,150 | Canonical agent OS — **source of truth** |
| `rea/` | 4,068 | `morluto/rea` v6.5.0 engine — present, not installed |
| other | 99 | Root-level & unzoned (`README.md`, `.github/`, `viz/`, …) |

Total: 11,746 files. Zone order and hues are fixed app-wide (docs → prompts → execution → .stremiium → rea → other).

*Source: `viz/public/snapshots/stats.json` byZone (as of commit `b474113`, 2026-11-18) · zone order per `viz/lib/brand.ts`*

Note: File counts come from the live viz snapshot, so they drift as the repo grows; the zone boundaries themselves are stable. The `other` bucket grows as new top-level work lands — it held 30 files before the `viz/` app was added.

---

## Reading order (6 steps)

1. `docs/program/tbs/tbs/PROGRAM_BRIEF.md` — program rules, evidentiary model, dossier roster
2. `docs/program/tbs/tbs/TASK_INDEX.md` — live task/status board and deliverable map
3. `docs/research/dossiers/` — one dossier per target entity (+ supporting research)
4. `docs/architecture/target-system/00-SYSTEM-OVERVIEW.md` — what Stremiium builds
5. `docs/program/plan/plan/PLAN.md` — NeoBank ZA master plan and workstreams
6. `docs/governance/unconsolidated/UnConsolidated/README.md` — derived atomised agent-knowledge layer (canonical: `.stremiium/`)

> **Note:** the root README's reading-order links are abbreviated relative to the physical paths (`docs/program/tbs/PROGRAM_BRIEF.md` → `docs/program/tbs/tbs/PROGRAM_BRIEF.md`; `docs/program/plan/PLAN.md` → `docs/program/plan/plan/PLAN.md`; `docs/governance/unconsolidated/README.md` → `docs/governance/unconsolidated/UnConsolidated/README.md`). These decks cite the physical paths, which are the ones that resolve on disk.

*Source: `README.md` "Reading order" · VIZ-030 fact-drift flags in `prompts/viz/c03-admin-knowledge/documentation-specialist/prompt.md` §4*

Note: Start with the brief, then the task board, then the research. The README's link paths trail the physical tree; trust the paths shown here.

---

## Canonical zones

- `.stremiium/` — repository-local **agent operating system**: registry, policies, skills, execution, workflows. **Source of truth** for the program
- `.github/` — **canonical surfaces**: agent roster, skills, and orchestration workflows
- Physical workspace evidence and these canonical sources override stale reports

*Source: `README.md` "Workspace zones" table, rows "Canonical OS" and "Canonical surfaces"*

Note: When a report and the physical tree disagree, the tree and .stremiium win. That convention governs every other slide in this deck.

---

## Program & governance zones (docs)

- `docs/governance/` — orchestration plan, execution records, and the derived `unconsolidated/` knowledge view
- `docs/program/` — TBS (`tbs/`), NeoBank ZA `plan/`, `councils/`, `delivery/`, `artifacts/`, `skills/`, `templates/`, `workflows/`

*Source: `README.md` "Workspace zones" table, rows "Governance" and "Program"*

Note: The program zone holds the task breakdown structure and the NeoBank ZA plan; the governance zone holds orchestration records plus the derived UnConsolidated view.

---

## Research & architecture zones (docs)

- `docs/research/` — **30 reverse-engineering dossiers across 6 domain groups** (README wording), plus market/regulatory landscape and the source library
- `docs/architecture/` — NeoBank **target-system** specs + reusable **platform-design** patterns

> **Note (not a conflict):** the root README describes a 30-folder dossier research surface, while `docs/program/tbs/tbs/PROGRAM_BRIEF.md` §3 lists a **17-entity target roster**. These are different scopes, not conflicting numbers — 30 dossier folders exist under `docs/research/dossiers/`, of which 17 carry an `evidence-ledger.json` and form the graded target roster. Both figures are cited exactly.

*Source: `README.md` "Workspace zones" rows "Research"/"Architecture" · `docs/program/tbs/tbs/PROGRAM_BRIEF.md` §3*

Note: The two dossier counts differ between README and the program brief. The decks in this app quote each source verbatim rather than picking a winner.

---

## Engineering, deliverables, archive zones (docs)

- `docs/engineering/` — REA toolkit & reverse-engineering playbooks/targets (the `rea/` engine itself stays at the repo root for compatibility)
- `docs/deliverables/` — per-entity journey summaries, cross-cutting synthesis, and charts
- `docs/archive-second-versions/` — preserved duplicates and source snapshots (**no deletions**; non-authoritative second versions)

*Source: `README.md` "Workspace zones" rows "Engineering", "Deliverables", "Archive (second versions)"*

Note: Nothing is ever deleted: superseded material moves to the archive as non-authoritative second versions instead.

---

## Operational surfaces

- `prompts/` — per-prompt folders: `prompts/neobank/<department>/<prompt-name>/prompt.md` (16 departments, 37 prompts) and `prompts/stremiium/<council>/<agent-name>/prompt.md` (16 councils + orchestration, ~165 agents)
- `prompts/replies/` — substantive answers to all 201 Master Prompts (164 Stremiium + 37 NeoBank) — see deck 03
- `execution/` — `execution/results/<scope>/<prompt-name>/execution-result.md` + `execution/EXECUTION_LEDGER.md`
- `rea/` — kept at the repo root for vendor/test path compatibility

*Source: `README.md` "Prompt structure" + "Workspace zones" rows "Prompts", "Prompt replies", "Execution results", "REA engine"*

Note: Prompts, replies, and execution results form one traceable chain per task — deck 03 walks it end to end.

---

## Conventions

- Markdown for docs; conventional commits (`feat:`, `docs:`, `analysis:`, `arch:`, `chore:`)
- **No credentials, keys, tokens, or personal data committed**
- Physical workspace evidence and canonical `.stremiium/` sources override stale reports
- Duplicates in `docs/archive-second-versions/` are non-authoritative second versions

*Source: `README.md` "Conventions" · `docs/program/tbs/tbs/PROGRAM_BRIEF.md` §9*

Note: These conventions are enforced across the program: plain markdown, conventional commits, and zero secrets in any committed file.

---

## REA quickstart

```bash
export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"; nvm use 24.18.0
cd rea
npm ci --engine-strict=false && npm run build:cached
node scripts/rea.mjs --help
node scripts/rea.mjs doctor --json
```

Toolkit: `docs/engineering/rea-toolkit/rea-business-toolkit/` (set `REA_ROOT=/workspace/app/rea`).

*Source: `README.md` "REA quickstart" + "Toolkit"*

Note: The public quickstart from the README — Node 24.18.0, cached build, then the doctor check. The engine is present but not yet installed in this workspace.

---

## TBS snapshot (2026-11-16)

| Task | Status | Notes |
|---|---|---|
| T1.0 | PARTIAL | Env/REA setup incomplete |
| T1.1 | PENDING (contract created) | Blocked on `npm ci`/build + `rea doctor` capture + C06/C12 sign-off |
| T1.2 | ACTIVE | `docs/architecture/target-system/core-banking/stremiium-rea-banking-plugin.ts` |
| T2–T7 | ACTIVE | Dossiers/specs present; artefact-dependent REA claims remain `INFERRED`/`UNKNOWN` |
| T8.0 | COMPLETED | Residual: formal C12 secret-scan sign-off pending (spot checks clean) |

*Source: `README.md` "TBS snapshot (2026-11-16)" table*

Note: Snapshot as quoted from the README: infrastructure partially done, research workstreams active, secret-scan spot checks clean but formal sign-off pending.

---

## Where to go next

- Continue learning: **deck 02 — Program Brief** (`SC-REA-NEOBANK-5.0`)
- Explore the live tree: `/explorer` (virtualized tree + ⌘K command palette)
- Councils and history: `/councils`, `/commits`
- Remember: REA is **present, not installed** — keep Seen / Synthesised / Limitations / Unknowns apart

*Sources: `README.md` · `viz/README.md` "Views" table · `docs/program/tbs/tbs/PROGRAM_BRIEF.md` §5*

Note: Repo orientation done. The next deck explains why this program exists and how it is governed; the app routes let you jump straight into the tree or the council graph.
