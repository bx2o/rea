# Viz Program — Task Index & Status Board

Repo Visualization & Learning Environment · Registry per the VIZ-001 delegation contract `{taskId, council, agent, folder, status, deliverable}`
Orchestrator: Sparkling Curious (SC-MASTER-001) · Plan: `.kilo/plans/1794948779713-repo-viz-learning-environment.md`
Update at every milestone (`.stremiium/governance/workflow-routing.md` STEP 6). **Last updated: 2026-11-18 (Phase 2 build).**

## Status legend

- `PENDING` — brief not yet started
- `IN-PROGRESS` — delegated session authoring the brief
- `COMPLETE` — `prompt.md` authored and gated per VIZ-001 §9
- `BUILDING` — Code Mode Phase 2 build agent running on the implementation
- `VALIDATED` — implementation built and verified against contracts
- `BLOCKED` — waiting on SC arbitration or a dependency (note owner in the milestone log)
- After Phase 1, statuses extend `DELEGATED → BUILDING → VALIDATED → SHIPPED` as Code Mode Phases 2–6 run

## Task board

| Task | Council | Agent | Folder | Status | Deliverable |
|---|---|---|---|---|---|
| VIZ-001 | SC Orchestration | sparkling-curious | `orchestration/sparkling-curious/` | COMPLETE | Master viz directive: TBS phases T1–T6, synthesis, C08/C11 arbitration, delegation registry |
| VIZ-010 | C08 Design-Creative | captain | `c08-design-creative/captain/` | COMPLETE | Design authority: ratify direction, gates, sign-off |
| VIZ-011 | C08 Design-Creative | chief-design-officer | `c08-design-creative/chief-design-officer/` | COMPLETE | Learning-environment concept, information architecture, visual language |
| VIZ-012 | C08 Design-Creative | design-system-architect | `c08-design-creative/design-system-architect/` | COMPLETE | shadcn/Tailwind token system + `viz/REGISTRIES.md` registry manifest |
| VIZ-013 | C08 Design-Creative | ui-ux-designer | `c08-design-creative/ui-ux-designer/` | COMPLETE | Layouts, navigation, Flo/thumb-zone mobile, command palette UX |
| VIZ-014 | C08 Design-Creative | accessibility-design-lead | `c08-design-creative/accessibility-design-lead/` | COMPLETE | WCAG 2.1 AA spec: tree/3D/charts keyboard nav, reduced-motion, contrast |
| VIZ-015 | C08 Design-Creative | dashboard-designer | `c08-design-creative/dashboard-designer/` | COMPLETE | Dashboard spec: commits-over-time, churn hotspots, language/type mix |
| VIZ-016 | C08 Design-Creative | design-researcher | `c08-design-creative/design-researcher/` | COMPLETE | Learning-workflow research for exploring a ~3,900-file repo |
| VIZ-017 | C08 Design-Creative | brand-manager | `c08-design-creative/brand-manager/` | COMPLETE | Visual identity: palette, zone hues (`viz/lib/brand.ts` single source) |
| VIZ-018 | C08 Design-Creative | theme-designer | `c08-design-creative/theme-designer/` | COMPLETE | Light/dark/system themes, liquid-glass accents |
| VIZ-019 | C08 Design-Creative | icon-illustration-lead | `c08-design-creative/icon-illustration-lead/` | COMPLETE | Icon system: lucide + bootstrap-icons + animateicons.in |
| VIZ-020 | C11 Dev-Engineering | frontend-engineer | `c11-dev-engineering/frontend-engineer/` | BUILDING | Next.js 15 scaffold, app-router pages, virtualized tree, md file viewer — build agents running |
| VIZ-021 | C11 Dev-Engineering | api-integration-engineer | `c11-dev-engineering/api-integration-engineer/` | BUILDING | API routes `/api/tree`, `/api/commits`, `/api/diff/[sha]`, `/api/stats` (+`/api/file`) — build agent running |
| VIZ-022 | C11 Dev-Engineering | data-engineer | `c11-dev-engineering/data-engineer/` | VALIDATED | Contracts `FileNode`/`CommitRecord`/`DiffSummary`/`RepoStats`; zero-dep `snapshot.mjs` — foundation implemented and tested (11,677 files, 32 commits, churn parsed, graph 61 nodes) |
| VIZ-023 | C11 Dev-Engineering | devops-engineer | `c11-dev-engineering/devops-engineer/` | COMPLETE | pnpm scripts, `tsc --noEmit` + `next build` gate, static export fallback |
| VIZ-024 | C11 Dev-Engineering | qa-test-engineer | `c11-dev-engineering/qa-test-engineer/` | BUILDING | Link checks, data-shape tests, a11y smoke, build gate — verify script agent running |
| VIZ-025 | C11 Dev-Engineering | model-router | `c11-dev-engineering/model-router/` | BUILDING | Optional learning layer: deterministic file-Q&A stub + tours — `/api/explain` agent running, `tours.json` shipped |
| VIZ-030 | C03 Admin-Knowledge | documentation-specialist | `c03-admin-knowledge/documentation-specialist/` | BUILDING | reveal.js deck generation: ≥ 4 decks from repo docs — deck agent running |
| VIZ-031 | C03 Admin-Knowledge | knowledge-graph-builder | `c03-admin-knowledge/knowledge-graph-builder/` | BUILDING | file↔folder↔council graph data — `graph.json` shipped (61 nodes), councils view agent running |

**Roster note (fact drift):** 19 prompt files = 1 orchestration directive + 18 delegated briefs (C08 ×10, C11 ×6, C03 ×2). Plan §3's headline ("Total: 18 task prompts / C08 (9)") trails its own 10-row C08 table (VIZ-010–019); this board tracks the enumerated roster. Cited exactly, not silently reconciled — same convention as VIZ-030's README fact-drift flags.

## Milestone log

- 2026-11-18 — Program opened. VIZ-001 COMPLETE: master directive authored at `prompts/viz/orchestration/sparkling-curious/prompt.md`; program index (`prompts/viz/README.md`) and this board published; 18 briefs delegated (C08 ×10, C11 ×6, C03 ×2).
- 2026-11-18 — Phase 1 COMPLETE: all 19 prompt files delivered (last: VIZ-011 chief-design-officer 303 lines; VIZ-012 design-system-architect 443 lines resolved the palette reconciliation with VIZ-017's binding decisions).
- 2026-11-18 — Phase 2 build opened by SC in Code Mode. Foundation implemented directly and tested live: `viz/{package,next.config,tsconfig,tailwind.config,components,postcss}.json|mjs`, `app/globals.css`, `lib/{brand,types,utils,git,repo-scan}.ts`, `scripts/snapshot.mjs` (11,677 files / 3,226 dirs / 32 commits / churn top README.md +193/−119 ×8 / graph 61 nodes), `public/snapshots/*.json`, `REGISTRIES.md` (29 registries), `README.md`. Numstat `%x1e` parse bug found and fixed in both snapshot script and `lib/repo-scan.ts`.
- 2026-11-18 — 8 build agents spawned with disjoint file ownership: (1) shell+UI kit+dashboard, (2) API routes, (3) explorer, (4) commits timeline, (5) globe/3D, (6) learn decks, (7) councils graph, (8) QA verify script.
- (append per milestone; SC updates statuses at each gate)

## SC synthesis & arbitration watchlist (C08/C11, R3 < 24h)

| # | Surface | Flagged by | Note |
|---|---|---|---|
| 1 | Data-contract drift | VIZ-021 | API brief references VIZ-022 contracts instead of redefining them; SC watches for shape drift between the two briefs at synthesis |
| 2 | `/api/explain` route ownership | VIZ-025 | Overlaps VIZ-021's route set; added types must land in the single `viz/lib/types.ts` |
| 3 | Tours vs decks boundary | VIZ-025 | `/learn` mount split: tours (navigation) owned by VIZ-025, decks (slides) by VIZ-030 |
| 4 | Section-name variants | VIZ-013 | Plan §3 viz-prompt section names vs stremiium canonical §1–§15 names; both treated as conformant at synthesis |
| 5 | Roster count drift | VIZ-001 | Plan headline "18 total / C08 9" vs 10-row C08 table; registry tracks 19 enumerated files |
| 6 | README fact drift | VIZ-030 | Reading-order link paths (physical `docs/program/tbs/tbs/PROGRAM_BRIEF.md`) and 30-entity vs 17-entity roster; decks cite physical paths, quote each source exactly |
| 7 | Brand token authority | VIZ-017 | Palette, zone hues, and typography bind sibling design tasks via `viz/lib/brand.ts`; conflicts → SC arbitration per R3 |
| 8 | Chart-token assignments | VIZ-012 | `--chart-1..5` zone mapping vs VIZ-015/VIZ-018; resolved in implementation: chart tokens = zone hues in fixed legend order |

SC arbitration verdicts are appended here with date + gate as conflicts surface (workflow-routing.md R3: SC arbitrates < 24h).
