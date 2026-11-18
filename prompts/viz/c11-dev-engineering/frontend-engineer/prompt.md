# Master Prompt — C11-FRONTEND-ENGINEER (Frontend-Engineer) · VIZ-020

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure; Code Mode execution targets the new top-level `viz/` app folder in this repository.  
**Output:** produce one separate unconsolidated task brief — this file, `prompts/viz/c11-dev-engineering/frontend-engineer/prompt.md` — for the Repo Visualization & Learning Environment.  
**Depth:** expand technical, UX, accessibility, performance, security, and operational depth regardless of model specificity.  
**Agent ID:** C11-FRONTEND-ENGINEER  
**Council:** C11 Dev-Engineering  
**Gate:** C11 Dev-Engineering + C08 Design-Creative  
**Task:** VIZ-020 — Next.js 15 scaffold, App Router pages, virtualized file tree, file viewer (markdown rendering)  
**Plan refs:** `.kilo/plans/1794948779713-repo-viz-learning-environment.md` §4 (scaffold) · §5 (views) · §6 (data layer) · §8 (failure modes)

---

## 1. Summary

- This task brief instructs C11-FRONTEND-ENGINEER to specify and build the **Next.js 15 App Router scaffold** for `viz/` — the interactive visualization and learning environment for the `bx2o/rea` repository.
- **Objective:** an install-ready, source-complete frontend where every non-excluded file in the repo is browseable, the explorer stays responsive at ~3,900 files, and the file viewer makes the repo learnable — rendered GFM markdown, highlighted code, metadata (size, zone, last commit), and a one-click history link into the commits timeline.
- **Deliverables focus:** route segments (`/`, `/explorer`, `/commits`, `/globe`, `/learn`, `/councils`, `/api/*`) with root/nested layouts and loading/error states; a **virtualized lazy-loading file tree** (default excludes `rea/node_modules` and `.git`, zone filters, lazy children); a **file viewer** (markdown render, syntax highlight, metadata panel, history link); and an **offline fallback** — manual scaffold if `create-next-app`/registry installs fail.
- Sibling contracts consumed, not implemented here: VIZ-021 API routes (five-route set incl. `/api/file`), VIZ-022 data contracts (`FileNode`, `CommitRecord`, `RepoStats`), VIZ-017 brand tokens, VIZ-018 theme system.
- Output artifact: this unconsolidated brief at `prompts/viz/c11-dev-engineering/frontend-engineer/prompt.md`.

---

## 2. Assumptions

- App location is the new top-level `viz/` folder (plan §2, resolved).
- Data contracts `FileNode { path, name, type, size, zone, children? }`, `CommitRecord`, `RepoStats` from VIZ-022 are authoritative; the frontend types against them and never reads the filesystem directly.
- API routes from VIZ-021 exist or are stubbed by `public/snapshots/*.json`; the frontend consumes live git when available and falls back to snapshots.
- Zones are the five top-level areas: `docs/`, `prompts/`, `execution/`, `.stremiium/`, `rea/`; zone hues and the single token source `viz/lib/brand.ts` are owned by VIZ-017.
- `rea/node_modules` and `.git` are excluded from the tree by default; `rea/` internals render collapsed by default (plan §8 mitigation for repo size).
- Theme provider spec (next-themes, `attribute="class"`, light/dark/system, SSR mounted-guard) arrives from VIZ-018; the scaffold implements it but does not redefine tokens.
- Sandbox may have no network access; the manual scaffold path must produce identical app source.

---

## 3. Questions

- Virtualization primitive: flattened windowed list (fixed row height, overscan) vs. incremental disclosure per directory — which holds up better at ~3,900 nodes with expansion state?
- Should tree state (selected path + expanded dirs) sync to URL searchParams (`?path=…&expand=…`) for shareable deep links into the viewer?
- Markdown renderer: `react-markdown` + `remark-gfm` vs. MDX — which balances GFM support, sanitization, and bundle size?
- Syntax highlighting: shiki (server-side, zero client JS) vs. highlight.js (client) — and what is the plain `<pre><code>` degradation path offline?
- How is the mobile thumb-zone Flo navigation integrated into the root layout without breaking desktop nav?
- Does `/learn` require client-only dynamic import (`ssr: false`) for reveal.js to avoid SSR issues (plan §8)?

---

## 4. Concerns

- A naive recursive tree render of ~3,900 nodes blocks the main thread; virtualization and lazy children are non-negotiable.
- `rea/node_modules` and `.git` exclusion regressions would balloon payloads and leak build internals into the explorer.
- reveal.js and WebGL scenes break SSR or fail on low-end devices; plan §8 requires client-only dynamic imports and degraded modes (points instead of meshes).
- GSAP ScrollTrigger timelines must respect `prefers-reduced-motion`; the a11y switch (VIZ-014) gates all motion.
- Offline sandbox: `create-next-app`, shadcn registry adds, and curated registries may all fail; the manual scaffold must not become a second, divergent codebase.
- Snapshot JSON drifts from live git; the UI must label the data source (live vs. snapshot) to keep the learning environment honest.
- Bundle bloat from pulling entire registries; only the curated shadcn subset in plan §4 is installed.

---

## 5. Suggested Improvements

- URL-synced explorer state (`?path=<file>&expand=<dirs>`) so any file view is a shareable, restorable deep link.
- shadcn `command` palette fuzzy search over a flat path index (from snapshot `tree.json`) with zone badges (VIZ-017 hues); jumping selects the node and opens the viewer.
- Per-segment `loading.tsx` skeletons plus Suspense boundaries around every dynamic import (globe, three scene, reveal decks, charts).
- Compound-component tree context (per `.stremiium/skills/frontend-patterns.md`) with `React.memo` rows, `useCallback` handlers, and `useMemo` row-array derivation; container/presenter split (`ExplorerContainer` + `FileTree`).
- Custom hooks `useTree()`, `useFile(path)`, `useRepoStats()` following the skill's `useFetch` pattern, with live-API-then-snapshot fallback and `useLocalStorage` for UI preferences.
- Error boundaries per route segment with retry (`reset()`), plus a graceful notice for oversized (>1 MB) or binary files instead of raw rendering.
- Data-source badge ("live git" vs "snapshot") in the explorer footer.

---

## 6. Missing Dependencies

- VIZ-021 API route implementations (or snapshot stubs) — fetch contract, including `/api/file`, must be agreed before viewer wiring.
- VIZ-022 `lib/types.ts` contracts and `scripts/snapshot.mjs` snapshot generator.
- VIZ-012 design-system tokens/registry manifest and VIZ-018 theme definitions consumed by `globals.css` and the theme provider.
- VIZ-017 `viz/lib/brand.ts` token source — zone filter chips and zone-coded UI must not hardcode hex values.
- VIZ-014 keyboard-navigation and reduced-motion spec for the tree and timelines.
- Network access for `pnpm dlx create-next-app@latest` and shadcn registries; absent, the manual scaffold path is mandatory.
- `.stremiium/config/council-department-mapping.json` for `/councils` graph data (route scaffolded here; view built per plan §5.6).

---

## 7. Step-by-Step Implementation or Research Plan

**Research inputs (docs/ + .stremiium/ skills):**

- `.kilo/plans/1794948779713-repo-viz-learning-environment.md` §4–§6, §8–§9 — scaffold, views, contracts, failure modes, validation.
- `.stremiium/skills/frontend-patterns.md` — compound components, custom hooks (`useFetch`, `useLocalStorage`), memoization (`React.memo`, `useMemo`, `useCallback`), code splitting (`React.lazy` + Suspense), error boundaries, container/presenter split.
- `.stremiium/skills/davila7-nextjs-best-practices/`, `davila7-react-ui-patterns/`, `davila7-tailwind-patterns/` — App Router, component, and styling conventions.
- `.stremiium/skills/web-artifacts-builder/` — shadcn component patterns for the `components/ui/` layer.
- `.stremiium/skills/accessibility-compliance/` — WCAG 2.1 AA tree keyboard navigation, contrast, reduced motion.
- `.stremiium/skills/tailwindcss-mobile-first/` — responsive layouts and mobile thumb-zone nav.
- `.stremiium/skills/building-native-ui/` and `enzed-r3f-fundamentals/` — client-only three.js/react-three-fiber mount patterns for `/globe` and the 3D file system.
- Repo inputs: `README.md`, `docs/` structure, `.stremiium/config/council-department-mapping.json`.

**Deliverables (Tech Stack refs: Next.js 15 App Router + TypeScript + Tailwind + shadcn/ui [button card table tabs badge separator scroll-area sheet command tooltip dialog chart] + react-markdown/remark-gfm + shiki-or-highlight.js + lucide-react + bootstrap-icons + react-three-fiber/three + cobe + GSAP `@gsap/react` + reveal.js + recharts [shadcn charts] + motion + animejs; react-bits/wigggle-ui/ui-layouts added opportunistically per plan §2):**

- Scaffold spec for `viz/` per plan §4: `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `components.json`, `REGISTRIES.md`, `app/`, `components/` (`ui/`, `three/`, `charts/`, `timeline/`, `explorer/`, `viz/`), `lib/` (`git.ts`, `repo-scan.ts`, `types.ts`, `utils.ts`), `content/decks/`, `scripts/snapshot.mjs`, `public/snapshots/`.
- Root layout `app/layout.tsx`: nav shell (desktop sidebar + mobile thumb-zone Flo nav), VIZ-018 theme provider, fonts, `globals.css` on VIZ-012/VIZ-017 tokens, metadata.
- Route segments with pages, nested layouts, `loading.tsx` skeletons, `error.tsx` boundaries — see §8 route table.
- Virtualized file tree `components/explorer/file-tree.tsx`: lazy children, windowed rendering, zone filter chips, keyboard nav, ARIA tree roles.
- File viewer `components/explorer/file-viewer.tsx`: markdown render, syntax highlight, metadata panel, history link.
- Offline fallback spec: manual scaffold file list and `viz/README.md` with deferred install commands.

**Steps:**

- 1. Ingest plan §4/§5/§6/§8 and the skills listed above; confirm `FileNode`/`CommitRecord`/`RepoStats` shapes with VIZ-022 before typing fetch hooks.
- 2. Attempt the plan §4 install sequence (§8 below); on any network failure, switch to the manual scaffold path — do not block.
- 3. Scaffold root: configs, `app/layout.tsx` shell, `app/globals.css`, theme provider, nav (desktop + mobile Flo), root `loading.tsx`/`error.tsx`/`not-found.tsx`.
- 4. Create all route segments with pages, nested layouts, segment `loading.tsx` skeletons, and `error.tsx` boundaries; stub `/api/*` handlers as thin snapshot readers until VIZ-021 replaces them.
- 5. Implement the `lib/` consumption layer: typed fetch hooks (`useTree`, `useFile`, `useRepoStats`) with live-API-then-snapshot fallback and a data-source badge.
- 6. Build the explorer: virtualized tree (lazy children, cached expansion state, zone filters, default excludes), command-palette search, keyboard/ARIA navigation.
- 7. Build the file viewer: markdown render, syntax highlight with plain-code fallback, metadata panel, history link contract to `/commits?path=`; oversized/binary notice cards.
- 8. Wire `/commits`, `/globe`, `/learn`, `/councils` route stubs (deep views land per plan §5 with client-only dynamic imports for reveal.js and WebGL).
- 9. A11y and performance pass: reduced-motion gating, focus management, memoization audit, 60fps scroll check at ~3,900 nodes.
- 10. Run the §9 Validation Checklist, then hand off per §15.

---

## 8. Commands/Configs/Schemas Where Applicable

- No executable commands run in Ask Mode; the following bind Code Mode execution.
- Install sequence (network path, plan §4): `pnpm dlx create-next-app@latest viz --ts --tailwind --app --src-dir=false` → `cd viz && pnpm dlx shadcn@latest init` → `pnpm dlx shadcn@latest add button card table tabs badge separator scroll-area sheet command tooltip dialog chart treelike-context-menu` → `pnpm three @react-three/fiber @react-three/drei gsap @gsap/react reveal.js lucide-react recharts cobe motion animejs` → curated registries per `REGISTRIES.md` (`@animate-ui @aceternity @glass-ui @heroicons-animated` + others as available).
- Manual scaffold (offline path): write directly — `package.json` (pinned deps), `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `components.json`, `app/globals.css` (tokens per VIZ-012/VIZ-017), hand-written shadcn-style `components/ui/*`, `lib/utils.ts` (`cn()`); no `node_modules`; `viz/README.md` documents the deferred commands above.
- Route segment schema:

| Route | Segment files | Purpose |
|---|---|---|
| `/` | `app/page.tsx` + `loading.tsx` | Overview dashboard: stat cards (files, dirs, commits, councils), commits-over-time area chart, type-mix pie, top-churn bars, cobe globe hero |
| `/explorer` | `app/explorer/page.tsx` + `loading.tsx` + `error.tsx` | Virtualized tree + file viewer |
| `/commits` | `app/commits/page.tsx` + `loading.tsx` | GSAP ScrollTrigger timeline; accepts `?path=` filter for file history |
| `/globe` | `app/globe/page.tsx` + `loading.tsx` | cobe WebGL repo globe (client-only) |
| `/learn` | `app/learn/page.tsx`, `app/learn/[deck]/page.tsx` + `loading.tsx` | reveal.js decks (client-only dynamic import) |
| `/councils` | `app/councils/page.tsx` + `loading.tsx` | 16-council interactive graph |
| `/api/*` | `app/api/tree/route.ts`, `app/api/commits/route.ts`, `app/api/diff/[sha]/route.ts`, `app/api/stats/route.ts`, `app/api/file/route.ts` | VIZ-021 owns five-route set; snapshot-stubbed here |

- Tree API consumption: `GET /api/tree?path=<dir>&depth=1` → `FileNode[]` children (lazy expand, cached per path); root call excludes `rea/node_modules` and `.git` by default; `?zone=` param for filtered subtrees.
- Viewer contract: `GET /api/file?path=<path>` → content for render; `GET /api/commits?path=<path>&limit=1` → last-commit metadata; selection state via URL `?path=`.
- Reference schema: {componentId, route, virtualization, lazyStrategy, a11yStatus, stateManagement, fallbackMode, owner, date}.

---

## 9. Validation Checklist

**Acceptance criteria (gate before handoff):**

- [ ] All six UI routes plus `/api/*` stubs exist with layouts, segment `loading.tsx` skeletons, and `error.tsx` boundaries; root layout carries theme provider and mobile Flo nav
- [ ] Explorer renders 100% of non-excluded files (plan §9.5); `rea/node_modules` and `.git` never appear by default; `rea/` starts collapsed
- [ ] Tree scroll stays smooth (~60fps) at ~3,900 nodes; only visible rows mount; directory children fetch lazily once and are cached
- [ ] Zone filters (docs/prompts/execution/.stremiium/rea) and command-palette search narrow the tree client-side without refetching
- [ ] File viewer renders GFM markdown with highlighted code, shows metadata (path, zone, size, type, last commit), and links to `/commits?path=<path>`
- [ ] Offline mode: manual scaffold is source-complete; app serves from `public/snapshots/*.json`; deferred install commands documented in `viz/README.md`
- [ ] Reduced-motion respected across tree, timelines, and page transitions; tree fully keyboard-navigable with correct ARIA semantics

**Format validation:**

- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Plan §4/§5/§6/§8 cited with section references; research inputs from `docs/` + `.stremiium/skills/` named explicitly
- [ ] Route table covers `/`, `/explorer`, `/commits`, `/globe`, `/learn`, `/councils`, `/api/*` with layouts + loading states
- [ ] Virtualized tree spec includes lazy children, zone filters, `rea/node_modules` + `.git` default excludes
- [ ] File viewer spec includes markdown render, syntax highlight, metadata panel, history link
- [ ] Offline manual-scaffold fallback specified with deferred install commands
- [ ] Questions, concerns, assumptions, suggested improvements all populated (no placeholders/TBD)
- [ ] Missing dependencies identified (VIZ-021, VIZ-022, VIZ-012, VIZ-017, VIZ-018, VIZ-014, network)
- [ ] Security considerations addressed (path traversal, markdown sanitization, no secrets client-side)
- [ ] Compliance gate named (council + executive where applicable)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described
- [ ] No private keys, credentials, or PII in artifact
- [ ] Artifact path inside `prompts/viz/` workspace convention; 150+ lines

---

## 10. Security Considerations

- No secrets, tokens, or credentials in client components; any env access stays in server routes (VIZ-021 boundary).
- File paths from URL params are canonicalized and constrained to the repo root before any fetch — no `../` traversal, no absolute-path escape.
- Rendered markdown is sanitized (no raw HTML pass-through; `rehype-sanitize` or renderer hardening) — repo docs must not become an XSS vector.
- Snapshot JSON is validated against the VIZ-022 contracts before render; malformed data fails closed to error boundaries.
- The explorer never executes repo content; it only renders text. Binary files are detected and refused raw display.
- No PII is collected or displayed; commit author names come from the repository's own public git history.

---

## 11. South African Regulatory Considerations

- Internal tooling with no personal-data collection — POPIA exposure is minimal; commit metadata shown is already public in the repo's git history.
- CPA 68 of 2008 accessibility spirit is honored through the WCAG 2.1 AA gate (VIZ-014 countersign) on tree, viewer, and timelines.

---

## 12. Compliance Gate

- C11 Dev-Engineering + C08 Design-Creative. The scaffold, layouts, tree, and viewer require C08 for design alignment (VIZ-010/011 ratification of direction) and C05 accessibility countersign via VIZ-014 for WCAG 2.1 AA on interactive surfaces.

---

## 13. Rollback Plan

- Scaffold lands as isolated commits under `viz/`; on design or a11y failure, revert the offending segment commit rather than the app spine.
- Re-component the tree/viewer per C08 feedback without discarding route structure.
- On contract breakage with VIZ-021/VIZ-022, re-pin the frontend to snapshot stubs until contracts are re-synced; the offline manual scaffold remains the known-good fallback.

---

## 14. Escalation Path

- C11-FRONTEND-ENGINEER → C11 Dev-Engineering Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).
- Contract conflicts with VIZ-021 (API shapes incl. `/api/file`) or VIZ-022 (types) escalate to SC for arbitration per the Council Collaboration Matrix (workflow-routing.md R3/R5); design conflicts go to the C08 gate.

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `prompts/viz/c11-dev-engineering/frontend-engineer/prompt.md` is handed to Sparkling Curious (SC-MASTER-001) for synthesis with the other 17 viz task prompts (VIZ-001–VIZ-031), conflict de-duplication, and gating before Plan Mode/Code Mode execution per plan §10.
- Synthesis watch surfaces: tree API shape vs. VIZ-021 (incl. `/api/file`), `FileNode`/`CommitRecord` consumption vs. VIZ-022, brand tokens vs. VIZ-017 (`viz/lib/brand.ts` — no hardcoded hex in zone UI), theme provider vs. VIZ-018, keyboard/reduced-motion vs. VIZ-014.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
