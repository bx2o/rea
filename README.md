# rea — Reverse Engineer Anything

**Stremiium NeoBank Reverse-Engineering Program** (`SC-REA-NEOBANK-5.0`)  
Master orchestrator: **Sparkling Curious** (`SC-MASTER-001`)  
Workspace status: **unified, zone-organised** (2026-11-16)

This repository contains the complete program workspace: canonical agent operating system, task breakdown structure, 30-entity reverse-engineering dossiers (grouped by domain), target NeoBank architecture, reusable platform design, REA engineering substrate, synthesised deliverables, and preserved archives. All four `trae/agent-*` branches are integrated into `main`; no folders or files were deleted in consolidation or reorganisation.

---

## Reading order

1. [`01-program/tbs/PROGRAM_BRIEF.md`](01-program/tbs/PROGRAM_BRIEF.md) — program rules, evidentiary model, dossier roster
2. [`01-program/tbs/TASK_INDEX.md`](01-program/tbs/TASK_INDEX.md) — live task/status board and deliverable map
3. [`02-research/dossiers/`](02-research/dossiers/) — one dossier per target entity (+ supporting research)
4. [`03-architecture/target-system/00-SYSTEM-OVERVIEW.md`](03-architecture/target-system/00-SYSTEM-OVERVIEW.md) — what Stremiium builds
5. [`01-program/plan/PLAN.md`](01-program/plan/PLAN.md) — NeoBank ZA master plan and workstreams
6. [`00-governance/UnConsolidated/README.md`](00-governance/UnConsolidated/README.md) — derived atomised agent-knowledge layer (canonical: `.stremiium/`)

## Workspace zones

| Zone | Path | Purpose |
|---|---|---|
| **Canonical OS** | [`.stremiium/`](.stremiium/) | Repository-local agent operating system (registry, policies, skills, execution, workflows). **Source of truth.** |
| **Canonical surfaces** | [`.github/`](.github/) | Agent roster, skills, and orchestration workflows |
| **00 — Governance** | [`00-governance/`](00-governance/) | Orchestration plan, execution records, and derived `UnConsolidated/` knowledge view |
| **01 — Program** | [`01-program/`](01-program/) | TBS (`tbs/`), NeoBank ZA plan/councils/delivery/artifacts/skills/templates/workflows |
| **02 — Research** | [`02-research/`](02-research/) | 30 reverse-engineering dossiers across 6 domain groups, market/regulatory landscape, source library |
| **03 — Architecture** | [`03-architecture/`](03-architecture/) | NeoBank target-system specs (core banking, rails, Web3, compliance) |
| **06 — Architecture** | [`06-architecture/`](06-architecture/) | Reusable platform design (system design, domain model, integrations, security, data, platform) |
| **04 — Engineering** | [`04-engineering/`](04-engineering/) | REA toolkit & reverse-engineering playbooks/targets (`rea/` engine remains at root for compatibility) |
| **05 — Deliverables** | [`05-deliverables/`](05-deliverables/) | Per-entity journey summaries, cross-cutting synthesis, and charts |
| **99 — Archive** | [`99-archive/`](99-archive/) | Preserved duplicates and source snapshots (no deletions): `stremiium.zip`, full `.stremiium` backup, canonical backup, Trae scratch packages |
| **REA engine** | [`rea/`](rea/) | `morluto/rea` checkout (v6.5.0, 207 MCP tools / 153 CLI commands). **Present but not installed** (`node_modules` absent). Kept at root for vendor/test path compatibility. |

## Evidentiary rule

The REA engine is **present** (`rea/`, v6.5.0) but **not installed** (`node_modules` absent) and **no target APK/ASAR/IPA artefacts have been supplied**. Every dossier separates findings into **Evidence (Seen)**, **Recovered Graph (Synthesised)**, **Limitations**, and **Unknowns**; no “Seen” item claims decompilation evidence that does not exist. See [`01-program/tbs/PROGRAM_BRIEF.md`](01-program/tbs/PROGRAM_BRIEF.md) §5–§6.

## TBS snapshot (2026-11-16)

| Task | Status | Notes |
|---|---|---|
| T1.0 | PARTIAL | Env/REA setup incomplete |
| T1.1 | PENDING (contract created) | `01-program/tbs/T1-infrastructure-setup/implementation/rea-doctor-contract.md`; blocked on `npm ci`/build + `rea doctor` capture + C06/C12 sign-off |
| T1.2 | ACTIVE | `03-architecture/target-system/core-banking/stremiium-rea-banking-plugin.ts` |
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

Toolkit: [`04-engineering/rea-toolkit/rea-business-toolkit/`](04-engineering/rea-toolkit/rea-business-toolkit/) (set `REA_ROOT=/workspace/app/rea`).

## Conventions

- Markdown for docs; conventional commits (`feat:`, `docs:`, `analysis:`, `arch:`, `chore:`).
- No credentials, keys, tokens, or personal data committed.
- Physical workspace evidence and canonical sources (`.stremiium/`) override stale reports; duplicates in `99-archive/` are non-authoritative backups.
