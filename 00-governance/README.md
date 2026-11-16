# 00-governance — Orchestration & Knowledge Views

Program-level orchestration records and derived knowledge surfaces.

| Path | Purpose | Authority |
|---|---|---|
| [`orchestration/ORCHESTRATION-PLAN.md`](orchestration/ORCHESTRATION-PLAN.md) | Master orchestration plan | Program record |
| [`execution-records/`](execution-records/) | Council execution logs and REA capability evidence (`rea-capabilities.json`) | Evidence records |
| [`UnConsolidated/`](UnConsolidated/README.md) | Atomised, cross-referenced expansion of the agent OS knowledge | **Derived** — `.stremiium/` is canonical |

**Rule:** If derived views disagree with [`.stremiium/`](../.stremiium/) or [`.github/`](../.github/), the canonical sources win. Do not execute from `UnConsolidated/` in place of canonical prompts.