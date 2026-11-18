# rea — Reverse Engineer Anything

**Stremiium NeoBank Reverse-Engineering Program** (`SC-REA-NEOBANK-5.0`)  
Master orchestrator: **Sparkling Curious** (`SC-MASTER-001`)  
Workspace status: **unified, zone-organised** (2026-11-18)

This repository contains the complete program workspace: canonical agent operating system, task breakdown structure, 30-entity reverse-engineering dossiers (grouped by domain), target NeoBank architecture, reusable platform design, REA engineering substrate, synthesised deliverables, and preserved archives. All four `trae/agent-*` branches are integrated into `main`; no folders or files were deleted in consolidation or reorganisation.

## Reading order

1. [`docs/program/tbs/PROGRAM_BRIEF.md`](docs/program/tbs/PROGRAM_BRIEF.md) — program rules, evidentiary model, dossier roster
2. [`docs/program/tbs/TASK_INDEX.md`](docs/program/tbs/TASK_INDEX.md) — live task/status board and deliverable map
3. [`docs/research/dossiers/`](docs/research/dossiers/) — one dossier per target entity (+ supporting research)
4. [`docs/architecture/target-system/00-SYSTEM-OVERVIEW.md`](docs/architecture/target-system/00-SYSTEM-OVERVIEW.md) — what Stremiium builds
5. [`docs/program/plan/PLAN.md`](docs/program/plan/PLAN.md) — NeoBank ZA master plan and workstreams
6. [`docs/governance/unconsolidated/README.md`](docs/governance/unconsolidated/README.md) — derived atomised agent-knowledge layer (canonical: `.stremiium/`)

## Workspace zones

| Zone | Path | Purpose |
|---|---|---|
| **Canonical OS** | [`.stremiium/`](.stremiium/) | Repository-local agent operating system (registry, policies, skills, execution, workflows). **Source of truth.** |
| **Canonical surfaces** | [`.github/`](.github/) | Agent roster, skills, and orchestration workflows |
| **Governance** | [`docs/governance/`](docs/governance/) | Orchestration plan, execution records, and derived `unconsolidated/` knowledge view |
| **Program** | [`docs/program/`](docs/program/) | TBS (`tbs/`), NeoBank ZA plan/councils/delivery/artifacts/skills/templates/workflows |
| **Research** | [`docs/research/`](docs/research/) | 30 reverse-engineering dossiers across 6 domain groups, market/regulatory landscape, source library |
| **Architecture** | [`docs/architecture/`](docs/architecture/) | NeoBank target-system specs + reusable platform design (target-system, platform-design) |
| **Engineering** | [`docs/engineering/`](docs/engineering/) | REA toolkit & reverse-engineering playbooks/targets (`rea/` engine remains at root for compatibility) |
| **Deliverables** | [`docs/deliverables/`](docs/deliverables/) | Per-entity journey summaries, cross-cutting synthesis, and charts |
| **Archive (second versions)** | [`docs/archive-second-versions/`](docs/archive-second-versions/) | Preserved duplicates and source snapshots (no deletions): canonical backups, dossiers, extracted snapshots, source bundles, tooling scratch |
| **Prompts** | [`prompts/`](prompts/) | All agent prompts split into per-prompt folders: `prompts/neobank/<dept>/<prompt-name>/prompt.md` and `prompts/stremiium/<council>/<agent-name>/prompt.md` |
| **Execution results** | [`execution/`](execution/) | Per-prompt execution results: `execution/results/<council>/<prompt-name>/execution-result.md` plus `execution/EXECUTION_LEDGER.md` |
| **REA engine** | [`rea/`](rea/) | `morluto/rea` checkout (v6.5.0, 207 MCP tools / 153 CLI commands). **Present but not installed** (`node_modules` absent). Kept at root for vendor/test path compatibility. |

## Prompt structure

Every prompt lives in its own folder with a `prompt.md`:

- **NeoBank prompts**: `prompts/neobank/<department>/<prompt-name>/prompt.md` (16 departments, 37 prompts)
- **Stremiium agent prompts**: `prompts/stremiium/<council>/<agent-name>/prompt.md` (16 councils + orchestration, ~165 agents)

Each prompt has a matching execution result at `execution/results/<scope>/<prompt-name>/execution-result.md`.

## Evidentiary rule

The REA engine is **present** (`rea/`, v6.5.0) but **not installed** (`node_modules` absent) and **no target APK/ASAR/IPA artefacts have been supplied**. Every dossier separates findings into **Evidence (Seen)**, **Recovered Graph (Synthesised)**, **Limitations**, and **Unknowns**; no “Seen” item claims decompilation evidence that does not exist. See [`docs/program/tbs/PROGRAM_BRIEF.md`](docs/program/tbs/PROGRAM_BRIEF.md) §5–§6.

## TBS snapshot (2026-11-16)

| Task | Status | Notes |
|---|---|---|
| T1.0 | PARTIAL | Env/REA setup incomplete |
| T1.1 | PENDING (contract created) | `docs/program/tbs/T1-infrastructure-setup/implementation/rea-doctor-contract.md`; blocked on `npm ci`/build + `rea doctor` capture + C06/C12 sign-off |
| T1.2 | ACTIVE | `docs/architecture/target-system/core-banking/stremiium-rea-banking-plugin.ts` |
| T2–T7 | ACTIVE | Dossiers/specs present; artefact-dependent REA claims remain `INFERRED`/`UNKNOWN` |
| T8.0 | COMPLETED | Residual: formal C12 secret-scan sign-off pending (spot checks clean) |

## REA quickstart

```bash
export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"; nvm use 24.18.0
cd rea
npm ci --engine-strict=false && npm run build:cached
node scripts/rea.mjs --help
node scripts/rea.mjs doctor --json
```

Toolkit: [`docs/engineering/rea-toolkit/rea-business-toolkit/`](docs/engineering/rea-toolkit/rea-business-toolkit/) (set `REA_ROOT=/workspace/app/rea`).

## Conventions

- Markdown for docs; conventional commits (`feat:`, `docs:`, `analysis:`, `arch:`, `chore:`).
- No credentials, keys, tokens, or personal data committed.
- Physical workspace evidence and canonical sources (`.stremiium/`) override stale reports; duplicates in `docs/archive-second-versions/` are non-authoritative second versions.