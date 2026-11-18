# Master Prompt — VIZ-001-SPARKLING-CURIOUS (Sparkling Curious Master Orchestrator) — VIZ-001

**Act as the assigned Stremiium agent or subagent.**

**Task:** VIZ-001 — Master orchestration directive for the Repo Visualization & Learning Environment (18 delegated viz tasks).
**Plan reference:** `/workspace/app/.kilo/plans/1794948779713-repo-viz-learning-environment.md` (goal §1, decisions §2, task roster §3, scaffold §4, views §5, data layer §6, failure modes §8, validation §9, execution order §10).
**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation for Phase 1 design briefs; Phases 2–6 build hands off to Code Mode per the viz plan.  
**Workspace:** keep all artifacts inside this repository workspace (`bx2o/rea`): task briefs under `prompts/viz/**`, app source under `viz/`; no restructuring or deletion of existing zones.  
**Output:** this master directive at `prompts/viz/orchestration/sparkling-curious/prompt.md`; the 18 delegated task briefs at `prompts/viz/<council>/<agent>/prompt.md`; program index at `prompts/viz/README.md`; delegation registry + status board at `prompts/viz/TASK-INDEX.md`; the built app under `viz/` (Phases 2–6).  
**Depth:** expand design, engineering, data, accessibility, learning-content, and governance depth regardless of model specificity.  
**Agent ID:** VIZ-001-SPARKLING-CURIOUS  
**Council:** SC Orchestration  
**Gate:** SC-MASTER-001 Master Orchestrator

---

## 1. Summary

- This master prompt instructs VIZ-001-SPARKLING-CURIOUS to own and orchestrate the **Repo Visualization & Learning Environment** — an extension of `SC-REA-NEOBANK-5.0` scoped by the plan file. The program delivers an interactive web app in a new top-level `viz/` folder — Next.js 15 App Router + TypeScript + Tailwind + shadcn/ui + recharts + react-three-fiber/three + GSAP + reveal.js, with cobe, react-bits, wigggle-ui, ui-layouts, motion, anime.js, and Web Audio as opportunistic enhancements — that lets the user: (1) browse every folder and file of this repo (`bx2o/rea`, ~3,900 files across the `docs/`, `prompts/`, `execution/`, `.stremiium/`, `rea/` zones plus root); (2) see what was created/changed (commit history, per-commit diffs, churn); (3) learn the repository (auto-generated reveal.js decks, guided tours, interactive diagrams).
- **Master viz directive — decompose the viz environment into TBS phases:**
  - **T1 Scaffold:** `viz/` Next.js 15 scaffold, shadcn init + curated component set, `viz/REGISTRIES.md` (full 30+ registry list with exact commands); mandatory manual-scaffold offline fallback when network installs fail.
  - **T2 Data:** frozen contracts `FileNode`/`CommitRecord`/`DiffSummary`/`RepoStats` (`lib/types.ts`); `lib/git.ts` read-only git wrappers (`git log --date=iso`, `git diff --numstat`, `git ls-files`, `git status --porcelain`); `lib/repo-scan.ts` fs walk → zoned tree; `scripts/snapshot.mjs` → committed `public/snapshots/{tree,commits,stats}.json`; API routes `/api/tree`, `/api/commits`, `/api/diff/[sha]`, `/api/stats` (live git with snapshot fallback).
  - **T3 Views:** Overview dashboard (stat cards, commits-over-time area chart, language/type mix, top-churn bar chart, cobe globe hero); Explorer (virtualized lazy tree excluding `rea/node_modules`/`.git`, shadcn `command` search, markdown file viewer with size/last-commit metadata); Commits (GSAP ScrollTrigger animated timeline, per-commit files +/- summary, click-through diff); Councils (interactive 16-council SC → CRD → C01–C16 → departments graph from `.stremiium/config/council-department-mapping.json`).
  - **T4 3D & Motion:** react-three-fiber file-system scene (folders as clusters, files as nodes scaled by size, colored by zone, hover tooltips, click-select); cobe WebGL repo globe; GSAP page transitions; react-bits / wigggle-ui / ui-layouts / motion / anime.js effects; Web Audio UI feedback.
  - **T5 Learn:** reveal.js decks (≥ 4) auto-generated from repo docs (repo orientation, program brief, council structure, prompt/reply system); knowledge-graph cross-reference data (VIZ-031); keyboard + speaker modes.
  - **T6 A11y & Polish:** WCAG 2.1 AA across tree/3D/charts (keyboard navigation, reduced-motion, AA contrast), mobile Flo/thumb-zone navigation, QA gates (VIZ-024), build validation or documented pending-install status.
- **Own synthesis (workflow-routing.md STEP 5):** all 18 task outputs roll up department → captain → SC; SC de-duplicates overlapping designs across shared surfaces (dashboard/explorer/globe/councils), orders priorities, freezes the data contracts (VIZ-022) as the single source, and gates every phase before Code Mode.
- **Arbitrate C08/C11 conflicts (R3, < 24h):** design ambition vs offline/network constraints, virtualization vs interaction richness, 3D performance budgets, premium-registry availability vs shadcn-core fallbacks, and data-contract drift between C08 designs and C11 implementation.
- **Delegation registry for the 18 delegated viz tasks** (live in `prompts/viz/TASK-INDEX.md`, contract in §8): 10 C08 Design-Creative tasks (VIZ-010 … VIZ-019), 6 C11 Dev-Engineering tasks (VIZ-020 … VIZ-025), 2 C03 Admin-Knowledge tasks (VIZ-030, VIZ-031), plus this orchestration directive (VIZ-001) — 19 prompt files total. Count note: plan §3's headline ("C08 (9)", "Total: 18 task prompts") trails its own 10-row C08 table; the registry tracks the enumerated roster and flags the drift for synthesis.
- Research data to ingest: the plan file; `README.md` (zones, evidentiary rule, conventions, branch); `prompts/README.md` (per-prompt folder + model-lock conventions); `.stremiium/governance/workflow-routing.md` (R1–R6 routing contract, two-plane model, STEP 1–6, SLAs); `.stremiium/config/council-department-mapping.json` (council → department mapping, CRD coordinators, cross-council units); `docs/program/tbs/PROGRAM_BRIEF.md` and `docs/program/tbs/TASK_INDEX.md` (program rules, evidence grades, live board).
- Output artifacts: this directive; `prompts/viz/README.md`; `prompts/viz/TASK-INDEX.md`; the 18 delegated briefs; then the `viz/` app itself across Phases 2–6.

---

## 2. Assumptions

- The repo is present locally with full git history; the GitHub API is NOT required — local git + filesystem scan is the primary data source, with committed JSON snapshots as the offline fallback.
- The sandbox may have no network (`pnpm dlx create-next-app@latest` and shadcn registry installs may fail): every delegated brief must define an offline-complete path — manual scaffold, committed snapshots, exact install commands documented in `viz/REGISTRIES.md` for later execution.
- All 18 task prompts lock to model `auto` (kilo-auto/free); SC enforces the lock on every delegated brief and spawned subagent.
- Phase 1 briefs are Ask Mode preparation only; Phases 2–6 execute in Code Mode, committing on branch `kilo/virtual-capybara-6wy`, then merging `main` and pushing both.
- `viz/` is a new top-level zone; no existing zone, folder, or file is restructured or deleted (consolidation rule).
- Explorer defaults exclude `rea/node_modules` and `.git` and collapse `rea/` internals; the zone model is docs/ prompts/ execution/ .stremiium/ rea/ + root.
- Council routing follows R1/R2: C08 owns design direction (9 tasks), C11 owns engineering (6), C03 owns learning content (2); captains decompose to their own departments only — cross-council disputes route to SC, never captain-to-captain command.
- Program evidence grades ([FACT]/[EST]/[INFER]/[UNKNOWN]) are preserved wherever the app or decks render synthesized repo knowledge (PROGRAM_BRIEF §5–§6 evidentiary rule).
- Git commit author identities inside repo history are treated as POPIA-relevant personal information (see §11).

---

## 3. Questions

- If registry installs fail offline, is the shadcn-core set (`button card table tabs badge separator scroll-area sheet command tooltip dialog chart treelike-context-menu`) the confirmed minimum viable shell, with premium registries deferred as documented skips in `viz/REGISTRIES.md`?
- Can the full commit history fit one `commits.json` snapshot, or does `/api/commits` need pagination/lazy windows for the GSAP timeline?
- Which markdown renderer safely renders this repo's GFM tables/alert blocks in the file viewer, and how is raw HTML in docs sanitized?
- How should the 16-council graph represent the CRD coordinator line and `cross_council_units` (notion-projection serves all councils) without visual clutter?
- What is the reduced-motion fallback for the ScrollTrigger commits timeline (static chronological list with identical data)?
- Does the 3D file-system scene render `rea/` collapsed by default with zone filters, to protect low-end frame budgets?
- Which documents form the canonical `/learn` deck canon (candidates: `README.md`, `docs/program/tbs/PROGRAM_BRIEF.md`, `docs/program/tbs/TASK_INDEX.md`, council charters, `prompts/replies/MASTER-INDEX.md`), and does the ≥ 4 deck validation hold?
- For the optional model-router learning layer (VIZ-025), what is the disabled-state UX offline, and does enabling it later trigger a C01/C12 screen before any repo content reaches a model endpoint?

---

## 4. Concerns

- C08 design ambition (premium registries, liquid-glass shaders, 3D scenes) can exceed C11's offline/network constraints; unmitigated, this stalls T1 — every premium component needs a named shadcn-core fallback.
- A ~3,900-file tree crashes client rendering without virtualization + lazy loading; `rea/` must stay collapsed by default.
- If the git binary is absent at runtime, every live-git path silently degrades; snapshot-only mode must auto-detect and label itself in the UI.
- reveal.js is SSR-incompatible; `/learn` fails at build time unless reveal.js is a client-only dynamic import.
- Contract drift: C08 briefs may assume registry components that never install, and C11 briefs may invent data shapes — the `FileNode`/`CommitRecord`/`DiffSummary`/`RepoStats` contracts (VIZ-022) must be the single frozen source both planes design and code against.
- 3D performance on low-end devices requires a degraded mode (points instead of meshes) and reduced-motion honoring from day one, not a T6 retrofit.
- 18 tasks over shared surfaces (dashboard vs explorer vs globe vs councils) risk duplicate or conflicting designs; SC synthesis must de-duplicate per workflow-routing STEP 5.
- The viz app renders repo content: any historically committed secrets, credentials, or PII would surface in the UI — snapshot generation and file rendering need deny-lists plus a C12 spot-check gate before ship.

---

## 5. Suggested Improvements

- Maintain the delegation registry (`prompts/viz/TASK-INDEX.md`) at every milestone: task → council → agent → folder → model → priority → deliverable → status (workflow-routing.md STEP 6).
- Keep a C08/C11 conflict-arbitration log with SC verdicts and timestamps in the orchestration record; SC rules < 24h per R3.
- Require every C08 brief to name its shadcn-core fallback for each premium registry component before C11 accepts the dependency.
- Require every C11 brief to declare its offline-complete path (manual scaffold + committed snapshots) before C08 polish requests enter the queue.
- Add zone filters and command-palette search to every view so a ~3,900-file repo stays navigable.
- Design reduced-motion and keyboard-first variants inside each C08 brief (VIZ-014 gate) instead of retrofitting them in T6.
- Commit `viz/public/snapshots/*.json` so the app is verifiable with zero network and zero git.

---

## 6. Missing Dependencies

- Network access for `pnpm dlx create-next-app@latest` and shadcn registry installs (may be absent — offline path is mandatory).
- The user-supplied full registry list (30+ registries with exact commands) to complete `viz/REGISTRIES.md`.
- Confirmation that the git binary exists in the build/runtime environment (snapshot-only fallback otherwise).
- Registry availability/premium status per component — unknown until install attempt; skips must be documented in `viz/REGISTRIES.md`.
- Confirmed deck source canon for `/learn` (≥ 4 decks per plan §9.5).
- Optional Pixabay/Pexels media tokens for imagery (network-dependent; placeholder assets if offline).

---

## 7. Step-by-Step Implementation or Research Plan

- 1. Ingest the plan file and the governance/config sources listed in §1; extract the TBS structure, routing rules R1–R6, two-plane model, and SLA thresholds (Critical 1h · High 4h · Medium 24h · Low 72h).
- 2. Decompose the viz environment into TBS phases T1 scaffold → T2 data → T3 views → T4 3D & motion → T5 learn → T6 a11y/polish, and map all 18 tasks onto phases and dependencies.
- 3. Author this master directive (VIZ-001) and publish the program index (`prompts/viz/README.md`) and delegation registry/status board (`prompts/viz/TASK-INDEX.md`).
- 4. Author the 18 delegated briefs under `prompts/viz/<council>/<agent>/prompt.md`, each following the repo per-prompt folder convention: one `prompt.md` per folder, header block (Agent ID, Council, Gate, model lock `auto`), the 15-section unconsolidated body, acceptance criteria, and escalation path.
- 5. Route each brief per R1/R2: C08 briefs (VIZ-010 … VIZ-019) to the C08 captain and `c08-design-creative` department; C11 briefs (VIZ-020 … VIZ-025) to the C11 captain and `c11-dev-engineering`; C03 briefs (VIZ-030/VIZ-031) to the C03 chief-librarian and `c03-admin-knowledge`.
- 6. Attach the delegation contract (§8) to every brief: `{taskId, council, agentId, model, priority, deliverable, acceptance}` plus the STEP 3 message contract `{TASK, PRIORITY, DEADLINE, SUCCESS_CRITERIA, CONTEXT}`.
- 7. Gate every brief through the §9 checklist before delegation; reject placeholders/TBD and any model-lock violation.
- 8. Arbitrate C08/C11 conflicts as they surface (R3, < 24h): design ambition vs offline path, virtualization vs interaction richness, 3D performance budgets, registry fallbacks, and data-contract drift; log each verdict in the arbitration log.
- 9. Synthesize the results roll-up (department → captain → SC per STEP 5): de-duplicate overlapping designs, freeze the data contracts (VIZ-022) as the single source, and sequence the build order (plan §10).
- 10. Hand the gated brief set to Code Mode: scaffold `viz/` (network install if available, else manual scaffold + committed snapshots), then build the data layer and API routes (`/api/tree`, `/api/commits`, `/api/diff/[sha]`, `/api/stats`).
- 11. Build the shadcn UI shell and pages: overview dashboard, explorer, commits timeline, learn decks, councils graph, globe hero.
- 12. Layer on the 3D file-system scene (react-three-fiber), GSAP transitions and ScrollTrigger timeline, reveal.js client-only decks, and enhancement modules (cobe, react-bits, wigggle-ui, ui-layouts, motion, anime.js).
- 13. Run T6: WCAG 2.1 AA pass (keyboard tree navigation, reduced-motion, AA contrast), mobile Flo/thumb-zone navigation, QA gates (VIZ-024), and build validation or documented pending-install status.
- 14. Validate per plan §9 and §9 of this prompt, commit on `kilo/virtual-capybara-6wy`, merge `main`, push both, and update `prompts/viz/TASK-INDEX.md` statuses at every milestone.

---

## 8. Commands/Configs/Schemas Where Applicable

- Delegation contract — one entry per task, embedded in each brief header and mirrored in the registry (`prompts/viz/TASK-INDEX.md`):
  - Schema: `{taskId, council, agentId, model, priority, deliverable, acceptance}`
  - `taskId` = VIZ-### program task ID · `council` = owning council (SC Orchestration / C08 / C11 / C03) · `agentId` = VIZ task agent ID · `model` = LOCKED `auto` (kilo-auto/free) · `priority` = Critical/High/Medium/Low per workflow-routing.md §4 SLAs · `deliverable` = concrete artifact path · `acceptance` = measurable criteria checked at the gate.
  - Delegation message contract per workflow-routing.md STEP 3: `{TASK, PRIORITY, DEADLINE, SUCCESS_CRITERIA, CONTEXT}`.
- Delegation registry (18 entries; model `auto` locked for all):

| Task | Council | Agent ID | Model | Priority | Deliverable | Acceptance |
|---|---|---|---|---|---|---|
| VIZ-001 | SC Orchestration | VIZ-001-SPARKLING-CURIOUS | `auto` | Critical | `prompts/viz/orchestration/sparkling-curious/prompt.md` + program index + registry | T1–T6 decomposition published; 18 briefs mapped and gated |
| VIZ-010 | C08 Design-Creative | C08-CAPTAIN | `auto` | High | `prompts/viz/c08-design-creative/captain/prompt.md` | Design direction, gate list, and sign-off protocol ratified |
| VIZ-011 | C08 Design-Creative | C08-CHIEF-DESIGN-OFFICER | `auto` | High | `prompts/viz/c08-design-creative/chief-design-officer/prompt.md` | Learning-environment concept, IA, and visual language accepted by C08 captain |
| VIZ-012 | C08 Design-Creative | C08-DESIGN-SYSTEM-ARCHITECT | `auto` | High | `prompts/viz/c08-design-creative/design-system-architect/prompt.md` | Token system + `viz/REGISTRIES.md` manifest with shadcn-core fallback per premium item |
| VIZ-013 | C08 Design-Creative | C08-UI-UX-DESIGNER | `auto` | High | `prompts/viz/c08-design-creative/ui-ux-designer/prompt.md` | Layouts, Flo/thumb-zone mobile nav, and command-palette flows specified |
| VIZ-014 | C08 Design-Creative | C08-ACCESSIBILITY-DESIGN-LEAD | `auto` | High | `prompts/viz/c08-design-creative/accessibility-design-lead/prompt.md` | WCAG 2.1 AA rules for tree/3D/charts: keyboard, reduced-motion, contrast |
| VIZ-015 | C08 Design-Creative | C08-DASHBOARD-DESIGNER | `auto` | Medium | `prompts/viz/c08-design-creative/dashboard-designer/prompt.md` | Commits-over-time, churn-hotspot, and language-mix dashboard layouts defined |
| VIZ-016 | C08 Design-Creative | C08-DESIGN-RESEARCHER | `auto` | Medium | `prompts/viz/c08-design-creative/design-researcher/prompt.md` | Learning-workflow findings for a ~3,900-file repo, cited to repo evidence |
| VIZ-017 | C08 Design-Creative | C08-BRAND-MANAGER | `auto` | Medium | `prompts/viz/c08-design-creative/brand-manager/prompt.md` | Stremiium palette/typography mapped to viz surfaces |
| VIZ-018 | C08 Design-Creative | C08-THEME-DESIGNER | `auto` | Medium | `prompts/viz/c08-design-creative/theme-designer/prompt.md` | Light/dark/system themes + liquid-glass accents, contrast-safe |
| VIZ-019 | C08 Design-Creative | C08-ICON-ILLUSTRATION-LEAD | `auto` | Medium | `prompts/viz/c08-design-creative/icon-illustration-lead/prompt.md` | lucide + bootstrap-icons + animateicons.in mapping per surface |
| VIZ-020 | C11 Dev-Engineering | C11-FRONTEND-ENGINEER | `auto` | Critical | `prompts/viz/c11-dev-engineering/frontend-engineer/prompt.md` | Next.js 15 scaffold, app-router pages, virtualized tree, md file viewer |
| VIZ-021 | C11 Dev-Engineering | C11-API-INTEGRATION-ENGINEER | `auto` | High | `prompts/viz/c11-dev-engineering/api-integration-engineer/prompt.md` | 4 API routes with snapshot fallback + sanitized params |
| VIZ-022 | C11 Dev-Engineering | C11-DATA-ENGINEER | `auto` | Critical | `prompts/viz/c11-dev-engineering/data-engineer/prompt.md` | FileNode/CommitRecord/DiffSummary/RepoStats contracts frozen; zero-dep `snapshot.mjs` |
| VIZ-023 | C11 Dev-Engineering | C11-DEVOPS-ENGINEER | `auto` | Medium | `prompts/viz/c11-dev-engineering/devops-engineer/prompt.md` | pnpm scripts, `tsc --noEmit` + `next build` gate, static export fallback |
| VIZ-024 | C11 Dev-Engineering | C11-QA-TEST-ENGINEER | `auto` | High | `prompts/viz/c11-dev-engineering/qa-test-engineer/prompt.md` | Link checks, data-shape tests, a11y smoke, build gate specified |
| VIZ-025 | C11 Dev-Engineering | C11-MODEL-ROUTER | `auto` | Low | `prompts/viz/c11-dev-engineering/model-router/prompt.md` | Offline-safe, disabled-by-default Q&A stub routed per model-lock policy |
| VIZ-030 | C03 Admin-Knowledge | C03-DOCUMENTATION-SPECIALIST | `auto` | Medium | `prompts/viz/c03-admin-knowledge/documentation-specialist/prompt.md` | Deck generation from repo docs; ≥ 4 decks; evidence grades preserved |
| VIZ-031 | C03 Admin-Knowledge | C03-KNOWLEDGE-GRAPH-BUILDER | `auto` | Medium | `prompts/viz/c03-admin-knowledge/knowledge-graph-builder/prompt.md` | file↔folder↔council edges + cross-references for graph views |

- Build-time commands (documented for the Code Mode handoff; NOT executed in Ask Mode):
  - `pnpm dlx create-next-app@latest viz --ts --tailwind --app --src-dir=false`
  - `cd viz && pnpm dlx shadcn@latest init`
  - `pnpm dlx shadcn@latest add button card table tabs badge separator scroll-area sheet command tooltip dialog chart treelike-context-menu`
  - `pnpm three @react-three/fiber @react-three/drei gsap @gsap/react reveal.js lucide-react recharts cobe motion animejs`
  - `pnpm dlx shadcn@latest registry add @animate-ui @aceternity @glass-ui @heroicons-animated` (+ remaining registries per `viz/REGISTRIES.md` as available)
  - `node scripts/snapshot.mjs` — regenerate `public/snapshots/{tree,commits,stats}.json` (zero-dep, local git/fs only)
  - `pnpm exec tsc --noEmit && pnpm build` — type + build gate (exit 0 per plan §9.4)
- API surface (VIZ-021): `/api/tree` (zoned `FileNode` tree), `/api/commits` (`CommitRecord` list), `/api/diff/[sha]` (`DiffSummary` + per-file numstat), `/api/stats` (`RepoStats` totals/byZone/byType/churnTop) — live git when available, snapshot fallback otherwise.

---

## 9. Validation Checklist

- [ ] All 19 `prompt.md` files (this directive + 18 delegated briefs) exist under `prompts/viz/**`, each with header block (Agent ID, Council, Gate), model lock `auto`, and acceptance criteria
- [ ] `prompts/viz/README.md` index and `prompts/viz/TASK-INDEX.md` status board present and consistent with the 18-task roster
- [ ] Delegation registry complete: every task has `{taskId, council, agentId, model, priority, deliverable, acceptance}`
- [ ] TBS phases T1 scaffold → T2 data → T3 views → T4 3D → T5 learn → T6 a11y/polish decomposed and mapped to tasks
- [ ] C08/C11 conflicts arbitrated < 24h with verdicts logged (workflow-routing.md R3)
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution) in every brief
- [ ] Phase 1 briefs are Ask Mode only — no execution language
- [ ] Every brief names its offline-complete fallback path (manual scaffold / committed snapshots / documented installs)
- [ ] `viz/` source complete: routes, components, and lib files present; TypeScript syntactically valid
- [ ] `viz/public/snapshots/{tree,commits,stats}.json` generated from the real repo; shapes match the frozen contracts
- [ ] Explorer renders 100% of non-excluded files; commits view covers full git history; learn decks ≥ 4
- [ ] a11y: keyboard-navigable tree, reduced-motion respected, AA contrast on core surfaces
- [ ] No PII, credentials, or secrets rendered by the app or committed in artifacts; snapshot deny-lists active
- [ ] Evidence grades ([FACT]/[EST]/[INFER]/[UNKNOWN]) preserved in learning content
- [ ] Rollback plan and escalation path specified in every brief
- [ ] Commit on `kilo/virtual-capybara-6wy` → merge `main` → push both; registry statuses updated per milestone

---

## 10. Security Considerations

- No secrets, API keys, tokens, or PII may be rendered by the viz app or committed in any artifact (repo convention); snapshot generation deny-lists `.git/`, `.env*`, credential/token patterns, and `rea/node_modules`.
- All git/fs access in the data layer is read-only; the viz program performs no repo-mutating operations — any such operation would require CRD-git-state-safeguard approval (none is planned).
- API route parameters are sanitized before git exec: strict SHA regex on `/api/diff/[sha]`, path normalization + repo-root containment on tree/file paths (no traversal, no shell injection).
- The offline path requires no network at runtime: no GitHub API calls, no telemetry, no external CDN dependencies; the `rea/` MCP tooling is never invoked by the viz app.
- File-viewer markdown rendering sanitizes raw HTML/script content from repo docs before render.
- CRD-security-compliance-sentinel may intercept any delegation or build step (R4); a C12 secret-scan spot-check precedes ship.

---

## 11. South African Regulatory Considerations

- POPIA Act 4 of 2013 applies to any repo data rendered by the app: git commit author names/emails and any personal data inside dossiers/research/docs are personal information under POPIA s1. Posture: render author display names; mask email addresses; exclude sensitive-flagged files from snapshots and search indices.
- Data minimization (POPIA s5–s12 conditions): the app processes only what the learning goal requires — file/folder metadata, commit metadata, and rendered docs.
- No PII or secrets from the repo may be surfaced in the app, artifacts, or committed snapshots; the §10 deny-lists enforce this and a C12 spot-check verifies it before ship.
- All processing is local and in-repo: no cross-border transfer occurs, so POPIA s72 is not triggered — provided no repo content is sent to any external model endpoint.
- The optional model-router Q&A layer (VIZ-025) is disabled-by-default: enabling it against a live endpoint would send repo content for processing/transfer and requires a C01 screen + POPIA assessment first; the offline stub is the compliant default.
- Evidentiary rule (PROGRAM_BRIEF §5–§6): learning decks must preserve [FACT]/[INFER]/[UNKNOWN] grades — synthesized or recovered-graph knowledge must never be presented as decompilation evidence.

---

## 12. Compliance Gate

- SC-MASTER-001 holds final arbitration and program sign-off. C08 captain (VIZ-010) ratifies design direction and per-phase design gates; C11 captain gates engineering acceptance; C03 chief-librarian gates learning content; VIZ-014 holds the WCAG 2.1 AA a11y gate at T6; C01/C12 screen any data-rendering surface before ship (workflow-routing.md §6 compliance hooks). No TBS phase exits without its named gate.

---

## 13. Rollback Plan

- Revert `viz/` to the last committed state on `kilo/virtual-capybara-6wy` if any build/validation gate fails; never force-push shared history.
- Data layer: fall back to snapshot-only mode if git wrappers fail or the git binary is absent — auto-detected and labeled in the UI.
- Views: static chronological list if the GSAP ScrollTrigger timeline breaks; markdown-rendered decks if reveal.js fails; flat zone tree + points mode if the 3D scene exceeds frame budget.
- Registries: swap to the documented shadcn-core fallback for any premium component whose install fails; record skips in `viz/REGISTRIES.md`.
- Suspend the model-router Q&A layer (VIZ-025) if its C01/C12 screen is not passed.
- Restore `prompts/viz/TASK-INDEX.md` from the prior commit if the delegation registry is corrupted mid-program; re-sync statuses from the last milestone.

---

## 14. Escalation Path

- VIZ-001-SPARKLING-CURIOUS → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- C08/C11 conflicts: owning captains convene per R3; SC arbitrates < 24h and logs the verdict in the orchestration record.
- Critical security/regulatory/privacy events skip to SC + C01 + C12 immediately (1h SLA per workflow-routing.md §4).
- Build blockers beyond fallback capability (no network AND no git AND scaffold infeasible) escalate to SC for offline-path replanning — no task stalls > 24h without a verdict.

---

## 15. Artifact Handoff to Sparkling Curious

- The completed directive (this file), the delegation registry (`prompts/viz/TASK-INDEX.md`), the program index (`prompts/viz/README.md`), and the 18 gated task briefs are handed to Sparkling Curious (SC-MASTER-001) for synthesis, conflict de-duplication, and gating before Code Mode execution (Phases 2–6).
- Phase 2–6 build artifacts (`viz/` source + committed snapshots) are validated per plan §9 and §9 of this prompt, then committed on `kilo/virtual-capybara-6wy`, merged to `main`, and pushed (both branches).
- Sparkling Curious monitors cross-council conflicts per workflow-routing.md R3/R5 and arbitrates per the Council Collaboration Matrix; registry statuses are updated at each milestone (STEP 6).
- Every artifact must pass the §9 Validation Checklist before handoff.
