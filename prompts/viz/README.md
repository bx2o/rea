# Viz Program Prompts

Repo Visualization & Learning Environment — extension of `SC-REA-NEOBANK-5.0`.
Program orchestrator: Sparkling Curious (`SC-MASTER-001`) · Master directive (VIZ-001): [`orchestration/sparkling-curious/prompt.md`](orchestration/sparkling-curious/prompt.md)
Plan: [`../../.kilo/plans/1794948779713-repo-viz-learning-environment.md`](../../.kilo/plans/1794948779713-repo-viz-learning-environment.md) · Live status board: [`TASK-INDEX.md`](TASK-INDEX.md)

The viz program publishes one `prompt.md` per folder, following the repo per-prompt convention (`prompts/stremiium/<council>/<agent-name>/prompt.md`). Roster: **19 prompt files = 1 orchestration directive + 18 delegated task briefs** (C08 ×10, C11 ×6, C03 ×2). *Count note: the plan §3 headline ("Total: 18 task prompts / C08 (9)") trails its own 10-row C08 table (VIZ-010–019); this index tracks the enumerated roster — see the fact-drift entry in [`TASK-INDEX.md`](TASK-INDEX.md).*

## Structure

```
prompts/viz/
├── README.md                       # this index
├── TASK-INDEX.md                   # live status board + delegation registry
├── orchestration/
│   └── sparkling-curious/
│       └── prompt.md               # VIZ-001 master viz directive
├── c08-design-creative/            # design authority & creative direction
│   ├── captain/prompt.md                      # VIZ-010
│   ├── chief-design-officer/prompt.md         # VIZ-011
│   ├── design-system-architect/prompt.md      # VIZ-012
│   ├── ui-ux-designer/prompt.md               # VIZ-013
│   ├── accessibility-design-lead/prompt.md   # VIZ-014
│   ├── dashboard-designer/prompt.md           # VIZ-015
│   ├── design-researcher/prompt.md           # VIZ-016
│   ├── brand-manager/prompt.md               # VIZ-017
│   ├── theme-designer/prompt.md              # VIZ-018
│   └── icon-illustration-lead/prompt.md      # VIZ-019
├── c11-dev-engineering/            # implementation & build
│   ├── frontend-engineer/prompt.md            # VIZ-020
│   ├── api-integration-engineer/prompt.md     # VIZ-021
│   ├── data-engineer/prompt.md               # VIZ-022
│   ├── devops-engineer/prompt.md             # VIZ-023
│   ├── qa-test-engineer/prompt.md            # VIZ-024
│   └── model-router/prompt.md                # VIZ-025
└── c03-admin-knowledge/            # learning content
    ├── documentation-specialist/prompt.md     # VIZ-030
    └── knowledge-graph-builder/prompt.md     # VIZ-031
```

## Task roster (19 prompt files)

| Task | Council | Owner agent | Folder | Scope |
|---|---|---|---|---|
| VIZ-001 | SC Orchestration | sparkling-curious | `orchestration/sparkling-curious/` | Master viz directive: TBS phases T1 scaffold → T2 data → T3 views → T4 3D → T5 learn → T6 a11y/polish; own synthesis; arbitrate C08/C11 conflicts; delegation registry |
| VIZ-010 | C08 Design-Creative | captain | `c08-design-creative/captain/` | Design authority: ratify design direction, gates, sign-off |
| VIZ-011 | C08 Design-Creative | chief-design-officer | `c08-design-creative/chief-design-officer/` | Design vision: learning-environment concept, information architecture, visual language |
| VIZ-012 | C08 Design-Creative | design-system-architect | `c08-design-creative/design-system-architect/` | shadcn/ui + Tailwind token system; registry manifest → `viz/REGISTRIES.md` |
| VIZ-013 | C08 Design-Creative | ui-ux-designer | `c08-design-creative/ui-ux-designer/` | Layouts, navigation, Flo-menu/thumb-zone mobile patterns, command palette UX |
| VIZ-014 | C08 Design-Creative | accessibility-design-lead | `c08-design-creative/accessibility-design-lead/` | WCAG 2.1 AA for tree/3D/charts: keyboard nav, reduced-motion, contrast |
| VIZ-015 | C08 Design-Creative | dashboard-designer | `c08-design-creative/dashboard-designer/` | Analytics dashboard: commits-over-time, churn hotspots, language mix (shadcn charts/recharts) |
| VIZ-016 | C08 Design-Creative | design-researcher | `c08-design-creative/design-researcher/` | Learning-workflow research: how a user explores/learns a ~3,900-file repo |
| VIZ-017 | C08 Design-Creative | brand-manager | `c08-design-creative/brand-manager/` | Visual identity: Stremiium palette/typography/zone hues applied to the viz app (`viz/lib/brand.ts` single token source) |
| VIZ-018 | C08 Design-Creative | theme-designer | `c08-design-creative/theme-designer/` | Light/dark/system themes, liquid-glass accents |
| VIZ-019 | C08 Design-Creative | icon-illustration-lead | `c08-design-creative/icon-illustration-lead/` | Icon system: lucide + bootstrap-icons + animateicons.in animated set |
| VIZ-020 | C11 Dev-Engineering | frontend-engineer | `c11-dev-engineering/frontend-engineer/` | Next.js 15 scaffold, app router pages, virtualized file tree, file viewer (md rendering) |
| VIZ-021 | C11 Dev-Engineering | api-integration-engineer | `c11-dev-engineering/api-integration-engineer/` | API routes: `/api/tree`, `/api/commits`, `/api/diff/[sha]`, `/api/stats` (git wrappers, snapshot fallback) |
| VIZ-022 | C11 Dev-Engineering | data-engineer | `c11-dev-engineering/data-engineer/` | Data contracts: `FileNode`, `CommitRecord`, `DiffSummary`, `RepoStats`; snapshot generator script |
| VIZ-023 | C11 Dev-Engineering | devops-engineer | `c11-dev-engineering/devops-engineer/` | Build/deploy: pnpm scripts, build validation, static export fallback |
| VIZ-024 | C11 Dev-Engineering | qa-test-engineer | `c11-dev-engineering/qa-test-engineer/` | Validation: link checks, data-shape tests, a11y smoke, build gate |
| VIZ-025 | C11 Dev-Engineering | model-router | `c11-dev-engineering/model-router/` | AI-assisted learning layer (optional): file Q&A stub, routed per model-lock policy |
| VIZ-030 | C03 Admin-Knowledge | documentation-specialist | `c03-admin-knowledge/documentation-specialist/` | Learning content: auto-generate reveal.js decks from README/PROGRAM_BRIEF/docs structure (≥ 4 decks) |
| VIZ-031 | C03 Admin-Knowledge | knowledge-graph-builder | `c03-admin-knowledge/knowledge-graph-builder/` | Graph data: file↔folder↔council relationships, cross-reference edges for graph views |

## Conventions

- One `prompt.md` per folder; no combined prompt files (per [`../README.md`](../README.md)).
- Model lock `auto` (kilo-auto/free) on every prompt; no substitution.
- Phase 1 briefs are Ask Mode preparation; Phases 2–6 build in Code Mode per plan §10 (commit on `kilo/virtual-capybara-6wy` → merge `main` → push both).
- Delegation contract per task: `{taskId, council, agentId, model, priority, deliverable, acceptance}` (VIZ-001 §8).
- Escalation: owning captain → SC-MASTER-001 → Mychael (CEO) → Board; critical security/regulatory events skip to SC + C01 + C12 (1h SLA, `.stremiium/governance/workflow-routing.md` §4).
- POPIA posture: no PII or secrets rendered from repo data; commit author emails masked; model-router layer disabled-by-default (VIZ-001 §11).
- Matching execution results follow the repo convention at `execution/results/<scope>/<task-name>/execution-result.md`.
