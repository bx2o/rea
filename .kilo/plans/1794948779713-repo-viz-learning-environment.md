# Repo Visualization & Learning Environment — Implementation Plan

**Orchestrator:** Sparkling Curious (SC-MASTER-001) · **Program:** SC-REA-NEOBANK-5.0 extension
**Model lock:** `auto` (kilo-auto/free), no substitution · **Mode:** Phase 1 Ask Mode briefs → Phases 2–6 Code Mode build
**Generated:** 2026-11-18 · **Status:** Implementation-ready

---

## 1. Goal

Build an **interactive visualization learning environment** (web app) that lets the user:

1. **Browse every folder and file** in the GitHub repo (`bx2o/rea` — docs/, prompts/, execution/, .stremiium/, rea/)
2. **See what was created/changed** — commit history, diffs, per-commit file changes, churn
3. **Learn the repository** — auto-generated learning decks, guided tours, interactive diagrams
4. Do it all through **visual diagrams, charts, 3D scenes, animated timelines** using the provided design stack (shadcn, React, Three.js, GSAP, cobe, reveal.js, react-bits, wigggle-ui, ui-layouts, motion, etc.)

**Deliverable A (Phase 1):** per-agent design task prompts — `prompts/viz/**/prompt.md` (18 tasks)
**Deliverable B (Phases 2–6):** the app itself — `viz/` (Next.js 15 + shadcn + react-three-fiber)

---

## 2. Decisions (resolved)

| Decision | Resolution |
|---|---|
| App location | New top-level `viz/` folder in this repo (alongside docs/prompts/execution) |
| Stack spine | Next.js 15 (App Router, TS) + Tailwind CSS + shadcn/ui + recharts (shadcn charts) + react-three-fiber/three + GSAP (@gsap/react) + reveal.js + lucide-react + bootstrap-icons |
| Enhancement modules | cobe (globe), react-bits, wigggle-ui widgets, ui-layouts effects, motion (framer), anime.js, Web Audio (AudioContext) UI feedback — added opportunistically |
| Data source | **Local git + filesystem scan** (repo is present with full history). GitHub API NOT required. Static JSON snapshot as offline fallback |
| Registry additions | Curated subset installed; full user list (30+ registries) documented in `viz/REGISTRIES.md` with exact commands |
| Excluded (documented as future extensions) | Spline, GDevelop, Cascadeur, ARCore, NVIDIA USD, Hunyuan3D, img2threejs, RPGGO — external/heavy tools; referenced in docs only |
| Media (Pixabay/Pexels) | Optional; network-dependent; placeholder tokens if offline |
| Task prompts location | `prompts/viz/<council>/<agent>/prompt.md` — follows repo per-prompt folder convention |

---

## 3. Phase 1 — Design Task Prompts (18 tasks, Ask Mode briefs → Code Mode execution)

Each `prompt.md` follows repo conventions: header (Agent ID, Council, Gate, model lock `auto`), Summary, Objective, Deliverables, Research Inputs (docs/ + .stremiium/ skills), Tech Stack refs, Acceptance Criteria, Validation Checklist, Escalation. UnConsolidated format.

### Orchestration (1)
| Task | Agent | Folder | Scope |
|---|---|---|---|
| VIZ-001 | sparkling-curious | `prompts/viz/orchestration/sparkling-curious/` | Master viz directive: decompose the environment into TBS phases, own synthesis, arbitrate C08/C11 conflicts, delegation registry for all viz tasks |

### C08 Design-Creative (9)
| Task | Agent | Folder | Scope |
|---|---|---|---|
| VIZ-010 | captain | `prompts/viz/c08-design-creative/captain/` | Design authority: ratify design direction, gates, sign-off |
| VIZ-011 | chief-design-officer | `prompts/viz/c08-design-creative/chief-design-officer/` | Design vision: learning-environment concept, information architecture, visual language |
| VIZ-012 | design-system-architect | `prompts/viz/c08-design-creative/design-system-architect/` | shadcn/ui + Tailwind token system; registry manifest (@7ovr, @8bitcn, @aceternity, @animate-ui, @glass-ui, @heroicons-animated … full list → `viz/REGISTRIES.md`) |
| VIZ-013 | ui-ux-designer | `prompts/viz/c08-design-creative/ui-ux-designer/` | Layouts, navigation, Flo-menu/thumb-zone mobile patterns, command palette UX |
| VIZ-014 | accessibility-design-lead | `prompts/viz/c08-design-creative/accessibility-design-lead/` | WCAG 2.1 AA for tree/3D/charts: keyboard nav, reduced-motion, contrast |
| VIZ-015 | dashboard-designer | `prompts/viz/c08-design-creative/dashboard-designer/` | Analytics dashboard: commits-over-time, churn hotspots, language mix (shadcn charts/recharts) |
| VIZ-016 | design-researcher | `prompts/viz/c08-design-creative/design-researcher/` | Learning-workflow research: how a user explores/learns a 3,900-file repo |
| VIZ-017 | brand-manager | `prompts/viz/c08-design-creative/brand-manager/` | Visual identity: Stremiium palette/typography applied to viz app |
| VIZ-018 | theme-designer | `prompts/viz/c08-design-creative/theme-designer/` | Light/dark/system themes, liquid-glass accents |
| VIZ-019 | icon-illustration-lead | `prompts/viz/c08-design-creative/icon-illustration-lead/` | Icon system: lucide + bootstrap-icons + animateicons.in animated set |

### C11 Dev-Engineering (6)
| Task | Agent | Folder | Scope |
|---|---|---|---|
| VIZ-020 | frontend-engineer | `prompts/viz/c11-dev-engineering/frontend-engineer/` | Next.js 15 scaffold, app router pages, virtualized file tree, file viewer (md rendering) |
| VIZ-021 | api-integration-engineer | `prompts/viz/c11-dev-engineering/api-integration-engineer/` | API routes: /api/tree, /api/commits, /api/diff/[sha], /api/stats (git wrappers) |
| VIZ-022 | data-engineer | `prompts/viz/c11-dev-engineering/data-engineer/` | Data contracts: FileNode, CommitRecord, DiffSummary, RepoStats; snapshot generator script |
| VIZ-023 | devops-engineer | `prompts/viz/c11-dev-engineering/devops-engineer/` | Build/deploy: pnpm scripts, build validation, static export fallback |
| VIZ-024 | qa-test-engineer | `prompts/viz/c11-dev-engineering/qa-test-engineer/` | Validation: link checks, data-shape tests, a11y smoke, build gate |
| VIZ-025 | model-router | `prompts/viz/c11-dev-engineering/model-router/` | AI-assisted learning layer (optional): file Q&A stub, routed per model-lock policy |

### C03 Admin-Knowledge (2)
| Task | Agent | Folder | Scope |
|---|---|---|---|
| VIZ-030 | documentation-specialist | `prompts/viz/c03-admin-knowledge/documentation-specialist/` | Learning content: auto-generate reveal.js decks from README/PROGRAM_BRIEF/docs structure |
| VIZ-031 | knowledge-graph-builder | `prompts/viz/c03-admin-knowledge/knowledge-graph-builder/` | Graph data: file↔folder↔council relationships, cross-reference edges for graph views |

**Total: 18 task prompts.**

---

## 4. Phase 2 — App Scaffold (`viz/`)

```
viz/
├── package.json, next.config.ts, tsconfig.json, postcss.config.mjs
├── components.json          # shadcn config
├── REGISTRIES.md            # full registry list + commands (user-supplied)
├── app/
│   ├── layout.tsx  page.tsx        # Overview dashboard
│   ├── explorer/                   # File-tree browser + file viewer
│   ├── globe/                      # cobe WebGL repo globe
│   ├── commits/                    # GSAP timeline + diff viewer
│   ├── learn/                      # reveal.js decks
│   ├── councils/                   # 16-council interactive graph
│   └── api/ (tree, commits, diff/[sha], stats)
├── components/ (ui/ = shadcn; three/; charts/; timeline/; explorer/; viz/)
├── lib/ (git.ts, repo-scan.ts, types.ts, utils.ts)
├── content/decks/                  # md sources → reveal.js
├── scripts/ (snapshot.mjs          # offline JSON fallback generator)
└── public/snapshots/               # tree.json, commits.json, stats.json
```

**Install sequence (if network permits):**
1. `pnpm dlx create-next-app@latest viz --ts --tailwind --app --src-dir=false`
2. `cd viz && pnpm dlx shadcn@latest init`
3. `pnpm dlx shadcn@latest add button card table tabs badge separator scroll-area sheet command tooltip dialog chart treelike-context-menu`
4. `pnpm three @react-three/fiber @react-three/drei gsap @gsap/react reveal.js lucide-react recharts cobe motion animejs`
5. Curated registries: `pnpm dlx shadcn@latest registry add @animate-ui @aceternity @glass-ui @heroicons-animated` (+ others from REGISTRIES.md as available)

**Offline fallback (mandatory path if installs fail):** scaffold `viz/` manually (all config + source files written directly), `scripts/snapshot.mjs` generates `public/snapshots/*.json` from the real repo via git/fs, and `README` documents the exact install commands to run later. App code is source-complete either way.

---

## 5. Phase 3 — Core Views

1. **Overview dashboard** (`/`): stat cards (files, dirs, commits, councils), commits-over-time area chart, language/type mix pie, top-churn bar chart, cobe globe hero
2. **Explorer** (`/explorer`): virtualized lazy file tree (default excludes `rea/node_modules`, `.git`), search via shadcn `command`, file viewer with markdown render + metadata (size, last commit, history link)
3. **Commits** (`/commits`): GSAP ScrollTrigger animated timeline; per-commit diff summary (files +/-); click → diff view
4. **3D File System** (in `/explorer` or `/globe`): react-three-fiber scene — folders as clusters, files as nodes scaled by size, color by zone (docs/prompts/execution/.stremiium/rea), hover → tooltip, click → select
5. **Learn** (`/learn`): reveal.js decks generated from repo docs (repo orientation, program brief, council structure, prompt/reply system), keyboard/speaker modes
6. **Councils** (`/councils`): interactive 16-council hierarchy graph (SC → CRD → C01–C16 → departments), from `.stremiium/config/council-department-mapping.json`
7. **Motion & polish**: GSAP page transitions, react-bits effects, wigggle-ui widgets (clock/dashboard), thumb-zone Flo nav on mobile, reduced-motion a11y switch

---

## 6. Phase 4 — Data Layer & Contracts

- `lib/git.ts`: exec wrappers — `git log --date=iso --pretty=format:…`, `git diff --numstat <sha>`, `git ls-files`, `git status --porcelain`
- `lib/repo-scan.ts`: fs walk → `FileNode { path, name, type, size, zone, children? }`; `CommitRecord { sha, date, author, message, filesChanged, insertions, deletions }`; `RepoStats { totals, byZone, byType, churnTop }`
- API routes read live git when available, else serve `public/snapshots/*.json`
- `scripts/snapshot.mjs` (node, zero-deps) regenerates snapshots — committed so the app works with no git/network

---

## 7. Phase 5 — Skills & Workflows Applied (.stremiium/)

| Skill | Use |
|---|---|
| `web-artifacts-builder` (shadcn-components bundle) | shadcn component patterns |
| `davila7-ui-design-system` (token generator) | design tokens |
| `kv0906-premium-frontend-design` (digital-liquid.glsl shader) | liquid-glass hero effect |
| `nguyenthienthanh-design-expert` | design-system/component-design rules |
| `sandraschi-uiux-design-consultant`, `carlheath-design` | UX guidance, component workflow |
| `building-native-ui` (webgpu-three, animations) | Three.js patterns |
| `davila7-motion-canvas`, `davila7-remotion-best-practices` | animation rules |
| `accessibility-compliance` (WCAG) | a11y gates |
| `frontend-patterns`, `frontend-code-review` | code quality |
| Workflows: `the-artisan-workflows`, agent-workflows, design review | process |

---

## 8. Failure Modes & Mitigations

| Failure | Mitigation |
|---|---|
| No network in sandbox (pnpm/shadcn registries fail) | Manual scaffold + committed JSON snapshots + documented install commands; app is source-complete offline |
| Registry item unavailable/premium | Skip with note in REGISTRIES.md; shadcn core components cover all required UI |
| Repo too large for client tree (~3,900 files) | Virtualized tree + lazy API + zone filters; rea/ internals collapsed by default |
| 3D perf on low-end devices | Degraded mode (points instead of meshes), reduced-motion honored |
| reveal.js SSR issues | Client-only dynamic import |
| Git binary absent | Snapshot-only mode (auto-detected) |

---

## 9. Validation Plan

1. `prompts/viz/`: 18 prompt.md files present, each with model-lock `auto`, gate, acceptance criteria
2. `viz/` source complete: all routes/components/lib files present; TypeScript syntactically valid
3. `viz/public/snapshots/`: tree.json/commits.json/stats.json generated from real repo; shapes match contracts
4. If installs succeeded: `pnpm build` exits 0; otherwise documented pending-install status
5. Explorer renders 100% of non-excluded files; commits view covers full git history; learn decks ≥ 4
6. a11y: keyboard-navigable tree, reduced-motion respected, AA contrast on core surfaces
7. Commit on `kilo/virtual-capybara-6wy` → merge `main` → push both

---

## 10. Execution Order (for the Code Mode agent)

1. Write 18 task prompts under `prompts/viz/**` (+ `prompts/viz/README.md` + task index)
2. Scaffold `viz/` (install if network allows, else manual + snapshots)
3. Build data layer + snapshots → API routes
4. Build shadcn UI shell + pages (dashboard, explorer, commits, learn, councils, globe)
5. Add 3D scene, GSAP timeline, reveal.js decks
6. A11y + reduced-motion + mobile (Flo/thumb-zone)
7. Validate (§9), commit, merge to main, push

---

## 11. Open Questions

None — scope, stack, data source, structure, fallbacks, and validation are fully specified.
