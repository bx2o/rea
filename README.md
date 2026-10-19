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
