# rea — Reverse Engineer Anything

Combined repository for the **Stremiium NeoBank reverse-engineering program**
(`SC-REA-NEOBANK-5.0`), orchestrated by the Sparkling Curious master agent (`SC-MASTER-001`).

This repository unifies the output of the two agent workstreams
(`trae/agent-9l0OdM` and `trae/agent-08wapu`) into one main repository.

## Contents

| Path | Purpose |
|---|---|
| [`.stremiium/`](.stremiium/) | Canonical, repository-local agent operating workspace (registry, policies, skills, execution evidence, workflows). Source of truth for the agent system. |
| [`UnConsolidated/`](UnConsolidated/README.md) | Derived, atomised, richly detailed **UnConsolidated** expansion of `.stremiium/` — the same knowledge split into independently maintainable, cross-referenced documents. |
| [`task/`](task/TASK_INDEX.md) | Task Breakdown Structure (TBS). [`PROGRAM_BRIEF.md`](task/PROGRAM_BRIEF.md) holds the rules; [`TASK_INDEX.md`](task/TASK_INDEX.md) is the live status board. |
| [`research/`](research/) | Reverse-engineering dossiers for 17 target entities (SA incumbents, SA challengers, CASPs, global benchmarks, Web3 competitors). |
| [`architecture/`](architecture/00-SYSTEM-OVERVIEW.md) | Stremiium NeoBank target architecture: core banking, payment rails, Web3 bridge, regulatory compliance, diagrams, and the REA banking plugin. |
| [`neobank-za/`](neobank-za/README.md) | **The main deliverable.** UnConsolidated project architecture for launching a NeoBank in South Africa: REA analysis, SA banking/neobank/regulatory research, platform architecture, security, councils, governance. |
| [`governance/`](governance/ORCHESTRATION-PLAN.md) | Program-level orchestration plan and per-council execution records. |
| [`deliverables/`](deliverables/) | Synthesised client-facing outputs: journey maps, summaries, pricing matrices. |
| [`.github/`](.github/) | Agent roster, skills, and orchestration workflows. |
| [`tools/`](tools/) | REA business toolkit — recon scripts, evidence packs, pricing diff, loyalty teardown. |
| [`source-library/`](source-library/) | Bibliography, coverage matrix, and consolidated source index. |
| [`rea/`](rea/) | `morluto/rea` (Reverse Engineer Anything) — cloned checkout, v6.5.0, 207 MCP tools + 153 CLI commands. |
| [`stremiium_extracted_full_backup/`](stremiium_extracted_full_backup/) | Byte-identical backup copy of `.stremiium/` extracted from `stremiium.zip`. Retained as an archive; `.stremiium/` is authoritative. |

## Reading order

1. [`task/PROGRAM_BRIEF.md`](task/PROGRAM_BRIEF.md) — why the program exists and the evidentiary rules.
2. [`task/TASK_INDEX.md`](task/TASK_INDEX.md) — task status and deliverable map.
3. [`research/`](research/) — one dossier per target entity.
4. [`architecture/00-SYSTEM-OVERVIEW.md`](architecture/00-SYSTEM-OVERVIEW.md) — what Stremiium builds from those findings.
5. [`neobank-za/PLAN.md`](neobank-za/PLAN.md) — the NeoBank ZA master plan and workstream map.
6. [`UnConsolidated/README.md`](UnConsolidated/README.md) — how the agent knowledge base is maintained.

## Evidentiary rule

The `morluto/rea` engine is **present in this workspace** (`rea/`, v6.5.0) but is **not installed
(`node_modules` absent) and no target APK/ASAR artefacts have been supplied**. Every dossier
therefore separates findings into **Evidence (Seen)**, **Recovered Graph (Synthesised)**,
**Limitations**, and **Unknowns**, and no "Seen" item claims decompilation evidence that does not
exist. See [`task/PROGRAM_BRIEF.md`](task/PROGRAM_BRIEF.md) §5.

## Conventions

- Markdown only for documentation.
- Conventional commits: `feat:`, `docs:`, `analysis:`, `arch:`.
- No credentials, keys, tokens, or personal data are committed.

## Workspace layout

| Path | What it is |
|---|---|
| [`rea/`](rea/) | `morluto/rea` (Reverse Engineer Anything) — cloned checkout, v6.5.0, 207 MCP tools + 153 CLI commands. Source lives at `github.com/morluto/rea`. |
| [`.stremiium/`](.stremiium/) | Canonical, repository-local agent operating workspace — registry, policies, skills, execution evidence, workflows. Source of truth for the agent system. |
| [`stremiium_extracted_full_backup/`](stremiium_extracted_full_backup/) | Byte-identical backup copy of `.stremiium/` extracted from `stremiium.zip`. Retained as an archive; `.stremiium/` is authoritative. |
| [`neobank-za/`](neobank-za/) | **The main deliverable.** UnConsolidated project architecture for launching a NeoBank in South Africa: REA analysis, SA banking/neobank/regulatory research, platform architecture, security, councils, governance. |
| [`UnConsolidated/`](UnConsolidated/README.md) | Derived, atomised, richly detailed expansion of `.stremiium/` — the same knowledge split into independently maintainable, cross-referenced documents. |
| [`research/`](research/) | Reverse-engineering dossiers for 17 target entities (SA incumbents, SA challengers, CASPs, global benchmarks, Web3 competitors). |
| [`architecture/`](architecture/) | Stremiium NeoBank target architecture: core banking, payment rails, Web3 bridge, regulatory compliance, diagrams, and the REA banking plugin. |
| [`task/`](task/TASK_INDEX.md) | Task Breakdown Structure (TBS). [`PROGRAM_BRIEF.md`](task/PROGRAM_BRIEF.md) holds the rules; [`TASK_INDEX.md`](task/TASK_INDEX.md) is the live status board. |
| [`governance/`](governance/) | Program-level orchestration plan and per-council execution records. |
| [`deliverables/`](deliverables/) | Synthesised client-facing outputs: journey maps, summaries, pricing matrices. |
| [`.github/`](.github/) | Agent roster, skills, and orchestration workflows. |
| [`tools/`](tools/) | REA business toolkit — recon scripts, evidence packs, pricing diff, loyalty teardown. |
| [`source-library/`](source-library/) | Bibliography, coverage matrix, and consolidated source index. |

`stremiium.zip` (the original archive) is retained at the workspace root.

## Start here

1. [`task/PROGRAM_BRIEF.md`](task/PROGRAM_BRIEF.md) — why the program exists and the evidentiary rules.
2. [`task/TASK_INDEX.md`](task/TASK_INDEX.md) — task status and deliverable map.
3. [`research/`](research/) — one dossier per target entity.
4. [`architecture/`](architecture/00-SYSTEM-OVERVIEW.md) — what Stremiium builds from those findings.
5. [`neobank-za/PLAN.md`](neobank-za/PLAN.md) — the NeoBank ZA master plan and workstream map.
6. [`UnConsolidated/README.md`](UnConsolidated/README.md) — how the agent knowledge base is maintained.

## REA quickstart (from this workspace)

```bash
export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"; nvm use 24.18.0
cd rea
node scripts/rea.mjs --help
node scripts/rea.mjs doctor --json
node scripts/rea.mjs analyze-javascript-application <path> --json
```
