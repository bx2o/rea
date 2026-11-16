# 99-archive — Canonical Backups

Single deduplicated canonical backup of the Stremiium agent operating system, merged from the
three near-identical trees that used to live in `tooling-scratch/trae-html-share-packages/`
(`rsync -a --ignore-existing`, no deletions). The original scratch trees are preserved untouched
under `tooling-scratch/` for historical fidelity.

| Path | Purpose |
|---|---|
| [`stremiium-agent-os/`](stremiium-agent-os/) | Canonical merged `.stremiium/` backup (agents, config, evaluations, execution, governance, memory, observability, policies, recovery, registry, skills, templates, workflows) |

**Rule:** this is a non-authoritative backup. Canonical sources are `.stremiium/` at the repo root.