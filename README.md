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
| [`architecture/`](architecture/README.md) | Stremiium NeoBank target architecture: core banking, payment rails, Web3 bridge, regulatory compliance, diagrams, and the REA banking plugin. |
| [`.github/`](.github/) | Agent roster, skills, and orchestration workflows. |

## Reading order

1. [`task/PROGRAM_BRIEF.md`](task/PROGRAM_BRIEF.md) — why the program exists and the evidentiary rules.
2. [`task/TASK_INDEX.md`](task/TASK_INDEX.md) — task status and deliverable map.
3. [`research/`](research/) — one dossier per target entity.
4. [`architecture/`](architecture/README.md) — what Stremiium builds from those findings.
5. [`UnConsolidated/README.md`](UnConsolidated/README.md) — how the agent knowledge base is maintained.

## Evidentiary rule

REA (`morluto/rea`) is **not yet installed** in this workspace and no decompilation artefacts have
been supplied. Every dossier therefore separates findings into **Evidence (Seen)**, **Recovered
Graph (Synthesised)**, **Limitations**, and **Unknowns**, and no "Seen" item claims decompilation
evidence that does not exist. See [`task/PROGRAM_BRIEF.md`](task/PROGRAM_BRIEF.md) §5.

## Conventions

- Markdown only for documentation.
- Conventional commits: `feat:`, `docs:`, `analysis:`, `arch:`.
- No credentials, keys, tokens, or personal data are committed.

This workspace contains three things:

| Path | What it is |
|---|---|
| [`rea/`](file:///workspace/rea) | `morluto/rea` (Reverse Engineer Anything) — cloned, installed, built, verified. v6.5.0, 207 MCP tools + 153 CLI commands. |
| [`_stremiium/`](file:///workspace/_stremiium) | The extracted Stremiium Agent OS from `stremiium.zip` — governance rules, council agents, skills, workflows. Used as the session's operating instructions. |
| [`neobank-za/`](file:///workspace/neobank-za/README.md) | **The main deliverable.** UnConsolidated project architecture for launching a NeoBank in South Africa: REA analysis, SA banking/neobank/regulatory research, platform architecture, security, councils, governance. |

## Start here

- Master plan → [neobank-za/PLAN.md](file:///workspace/neobank-za/PLAN.md)
- Master index → [neobank-za/README.md](file:///workspace/neobank-za/README.md)
- REA setup & verification → [neobank-za/reverse-engineering/rea-analysis/setup-and-verification.md](file:///workspace/neobank-za/reverse-engineering/rea-analysis/setup-and-verification.md)
- REA worked demonstration (real evidence) → [neobank-za/reverse-engineering/rea-analysis/demonstration-bankapp.md](file:///workspace/neobank-za/reverse-engineering/rea-analysis/demonstration-bankapp.md)

## REA quickstart (from this workspace)

```bash
export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"; nvm use 24.18.0
cd /workspace/rea
node scripts/rea.mjs --help
node scripts/rea.mjs doctor --json
node scripts/rea.mjs analyze-javascript-application <path> --json
```

`stremiium.zip` (original archive) is retained at the workspace root.
