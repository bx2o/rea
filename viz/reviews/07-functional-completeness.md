# 07 — Functional Completeness Review

**Role:** FUNCTIONAL-COMPLETENESS CRITIC · **Scope:** does the app actually *do* everything the program promised?
**App under review:** `/workspace/app/viz` · **Plan:** `.kilo/plans/1794948779713-repo-viz-learning-environment.md`
**Task index:** `prompts/viz/TASK-INDEX.md` · **Live target:** `http://localhost:3000`
**Date:** 2026-11-18 · **Mode:** read-only (no application code modified)

---

## 0. Method & environment notes (read this first — it affects evidence quality)

**Environment instability (not an app defect).** At the start of this review the app on
`http://localhost:3000` was returning **HTTP 500 on `/`, `/commits`, `/learn` and
`/explorer/view3d`**. Root cause was *environmental*, not application code: two concurrent
`next dev` processes (`/workspace/app/viz` on :3000 and a second `next dev -H 0.0.0.0` on
:3001) shared the same `.next` directory, and a `rm -rf .next` + concurrent recompiles
produced:

```
⨯ [Error: ENOENT: no such file or directory, open '/workspace/app/viz/.next/server/app/commits/page.js']
[TypeError: Cannot read properties of undefined (reading '/_app')]
```

The same `.next` clobbering was later reproduced deliberately (`next build` inside a live
dev-server directory). **`viz/next.config.ts:8-10` already contains the mitigation**
(`distDir: process.env.NEXT_DIST_DIR || ".next"`), but it is **not** used by the running
dev command. Every 500 above disappeared once the duplicate server was gone. **All results
below were re-verified against a stable server (all 7 routes → 200).**

**Production build was run in an isolated copy** (`/tmp/kilo2/critic/viz`, byte-identical
source, `node_modules` symlinked) rather than in `/workspace/app/viz`, because a live dev
server owns `/workspace/app/viz/.next` and building in place deletes it — exactly the
failure above. Build result: **exit 0, zero warnings.**

**No headless browser** (no Playwright/Puppeteer/Chromium in the image), so client-side
runtime behaviour was verified by (a) server-rendered HTML inspection, (b) production
bundle inspection, (c) source-level contract tracing, (d) live API calls. Items that
require JS execution are marked *(needs browser confirmation)*.

---

## 1. Findings table

| ID | Severity | Feature / Area | Status | Evidence | Recommended Fix |
|---|---|---|---|---|---|
| **FC-01** | **Critical** | ⌘K command palette (Files / Folders / Commits / Views) | **MISSING** | `grep -rn "cmdk\|Command\|⌘K\|metaKey" viz/` → **0 hits** in `app/`+`components/`. `viz/components/ui/` contains only: badge, button, card, scroll-area, separator, skeleton, table, tabs, tooltip — **no `command.tsx`**. Yet `cmdk@^1.1.1` **is installed** (`viz/package.json`, dependency `cmdk`) — the library was provisioned and never used. Plan §4 step 3 explicitly lists `command` in the shadcn install list; plan §5 item 2 says "search via shadcn `command`"; `prompts/viz/c08-design-creative/ui-ux-designer/prompt.md` §7.2 requires ⌘K/Ctrl+K, `/` trigger, top-bar Search button, groups **Files / Folders / Commits / Views**, fuzzy match, 150 ms debounce. | Add `components/ui/command.tsx` (shadcn `command` wrapper over the already-installed `cmdk`), mount a global `<CommandDialog>` in `components/nav/app-shell.tsx` with a `⌘K`/`Ctrl+K`/`/` key handler, and implement the 4 result groups (Files/Folders from `/api/tree`, Commits from `/api/commits` message match ≥3 chars, Views from the 7 routes). |
| **FC-02** | **Critical** | AI learning layer `/api/explain` (VIZ-025) | **MISSING (unreachable API)** | `grep -rn "api/explain" viz/app viz/components viz/lib` → only `viz/app/api/_lib.ts:10` (a comment). **No UI caller exists.** The route itself works: `curl -X POST -d '{"path":"README.md"}' /api/explain` → `{"source":"git","data":{"path":"README.md","zone":"other","size":6024,"lines":75,"headings":[8 entries],"symbols":[],"todos":0,"lastCommit":{…},"churn":{…},"council":null,"relatedFiles":[…]}}`. Plan §3 VIZ-025 = "AI-assisted learning layer … file Q&A stub"; plan §1 goal 3 "Learn the repository". | Add an "Explain" affordance to the file viewer (`components/explorer/file-viewer.tsx` header) and/or an AI panel on `/explorer`, POSTing to `/api/explain` and rendering `ExplainSummary` (summary, headings, symbols, todos, council, related files). Until then the whole VIZ-025 contract is dead code. |
| **FC-03** | **High** | Guided tours (`public/snapshots/tours.json`) | **MISSING** | `viz/public/snapshots/tours.json` exists and is valid (3 tours: `repo-orientation` 4 steps, `prompts-and-replies` 3 steps, `history-highlights` 2 steps — QA check **V06 PASS**). But `grep -rniE "\btour" viz/app viz/components viz/lib` → **0 hits**. No tour UI, no tour route, no tour entry point. Plan §1 goal 3 promises "**guided tours**"; TASK-INDEX VIZ-025 deliverable = "deterministic file-Q&A stub **+ tours** — `tours.json` shipped"; the tours file's own steps carry `route` fields (`/`, `/explorer`, `/councils`, `/learn`) designed for a step-through widget. | Implement a tour widget on `/` or `/learn` that reads `/snapshots/tours.json` and renders a step-through overlay that navigates to each step's `route` (each route is verified live → 200). |
| **FC-04** | **High** | Councils "View in Explorer" deep links | **PARTIAL — 21 broken links** | `viz/components/graph/node-details.tsx:63-65` builds `/explorer?path=prompts/stremiium/<dir>`; `node-details.tsx:126-129` picks `departments[0]` as the council's primary dir. Scripted check against `prompts/stremiium/`: **5 of 16 council primary links are broken** (C06 `c06-engineering-infrastructure`, C07 `c07-sales-business-development`, C09 `c09-marketing-brand`, C13 `c13-web3-finance`, C14 `c14-customer-success`) plus **16 of 28 department links broken** (e.g. `c04-strategy-core`, `c10-algo-trading`, `c15-products-blt`, `c16-website-product`). Proof: `curl "/api/tree?path=prompts/stremiium/c06-engineering-infrastructure"` → `{"error":"Directory not found."}` while `…/c08-design-creative` → a valid child list. The real dirs are `c06-hardware-enable`, `c07-sales-revenue`, `c09-marketing-communications`, `c13-web3-token`, `c14-banking-fintech`. Explorer behaviour on a stale path = "No file selected" notice (`app/explorer/page.tsx:274-280` → `selectedNode === null`) — a **dead end**. *(Note: the earlier report named only c06/c13/c14 — the real count is 5 councils + 16 departments.)* | Re-derive the `graph.json` council→directory mapping from the **actual** `prompts/stremiium/` directory names (the snapshot was generated from `.stremiium/agents/department-agents/`, which uses a *different* naming set), or map via the canonical `.stremiium/config/council-department-mapping.json`. Add a link-integrity check to `scripts/verify-viz.mjs` so a non-existent Explorer target fails CI. |
| **FC-05** | **High** | Explorer zone filter (6 chips) | **PARTIAL — dims, does not filter** | `viz/components/explorer/file-tree.tsx:429-430` computes `matchesZone = zoneFilter.size === 0 || zoneFilter.has(node.zone)`; the only effect is `!matchesZone && "opacity-40"` (`file-tree.tsx:468`). Rows are **never removed** and there is no empty-state message. The chip's own tooltip promises *"Show only {zone} zone files"* (`app/explorer/page.tsx:382`) and the group is labelled *"Filter tree by zone"* (`app/explorer/page.tsx:373`) — the implementation contradicts its own label. `zoneFilter` appears in only 3 places in the whole tree component (`:88`, `:130`, `:430`). | Filter the flattened row list (`file-tree.tsx:140` `rows` useMemo) — drop non-matching files, keep a matching dir visible when any descendant could match, and render an explicit "no files in this zone" empty state. |
| **FC-06** | **High** | File viewer "last commit" chip | **STUB — always null** | `viz/app/api/file/route.ts` returns `lastCommit: null` with the comment *"populated by the client via /api/commits (per-path numstat not in snapshot)"*, but **the client never does**: `components/explorer/file-viewer.tsx:446` reads `content?.lastCommit ?? null` and nothing else fetches per-path history (`/api/commits` has no `path` param — `app/api/commits/route.ts:28-49`). Result: the chip branch (`file-viewer.tsx:594-603`) is **unreachable**; the UI always renders the "no commit data" fallback (`file-viewer.tsx:604-606`). Dead helper: `app/api/file/route.ts:22-31` `lastCommitFor()` is **defined but never called**. Brief §7.3 requires "last-commit chip (short sha, relative date; click → `/commits?path=…`)". | Either populate `lastCommit` server-side from `git log -1 -- <path>` (git is available — `/api/commits` returns `source:"git"`), or add a `path` filter to `/api/commits` and have the viewer call it. Delete the dead `lastCommitFor()` or wire it in. |
| **FC-07** | **Medium** | Overview "cobe globe hero" | **PARTIAL — placeholder** | Plan §5 item 1: Overview dashboard must include a **cobe globe hero**. `viz/app/page.tsx:590` — `/* Globe hero placeholder — the cobe scene itself lives on /globe */`; the card body renders `GlobePreview()` (`app/page.tsx:293-318`) which is a static `div` with 6 coloured dots and a CSS-animated ring, plus user-visible copy at `app/page.tsx:614`: *"Placeholder hero — the WebGL scene loads on /globe"*. The real cobe scene exists but only at `/globe` (`components/three/globe-hero.tsx`, `app/globe/page.tsx`). | Mount the existing `GlobeHero` client component in the Overview hero card (it already has a WebGL-probe + SVG fallback path) so the dashboard ships the promised hero without a second round-trip. |
| **FC-08** | **Medium** | Route-level `loading.tsx` / `error.tsx` coverage | **PARTIAL** | Present: `app/loading.tsx`, `app/error.tsx`, `app/explorer/loading.tsx`, `app/explorer/error.tsx`, `app/commits/loading.tsx`, `app/councils/loading.tsx`, `app/globe/loading.tsx`, `app/learn/loading.tsx`. **Missing `error.tsx`:** `/commits`, `/councils`, `/globe`, `/learn` (they fall back to the root `app/error.tsx`, which replaces the whole page body). **Missing both:** `app/explorer/view3d/` (no `loading.tsx`, no `error.tsx`). **Missing everywhere:** `not-found.tsx` / `global-error.tsx` (no custom 404). | Add `error.tsx` to the 4 routes, add `loading.tsx` + `error.tsx` to `app/explorer/view3d/`, and add `app/not-found.tsx` (the explorer already tolerates stale `?path=` links — a 404 page should link back to `/explorer`). |
| **FC-09** | **Medium** | `/api/graph` route | **ORPHANED** | `grep -rn "/api/"` across `app/`+`components/` shows callers for `/api/tree`, `/api/file`, `/api/stats`, `/api/commits`, `/api/diff/*` — **but not `/api/graph`**. The councils view reads the raw snapshot instead: `app/councils/page.tsx:51` → `fetch("/snapshots/graph.json")`. The route works (`curl /api/graph` → `{"source":"snapshot","data":{"nodes":[{…}],"edges":[…]}}`) but no UI consumes it. | Point `app/councils/page.tsx:51` at `/api/graph` (keeping the snapshot as the route's own fallback) so there is one data path and the route is not orphaned. |
| **FC-10** | **Medium** | Motion & polish (plan §5 item 7) | **PARTIAL** | GSAP **is** used — but only for the commits ScrollTrigger timeline (`components/timeline/commit-timeline.tsx:20-21,138-158`). There is **no GSAP page transition**: no `app/template.tsx` exists and `grep -rn "page transition"` → 0 hits. The other promised modules are **not installed at all**: `react-bits`, `wigggle-ui`, `ui-layouts`, `motion`/`framer-motion`, `animejs`, `bootstrap-icons` are absent from `viz/package.json` dependencies. (Plan §2 calls them "opportunistic"; §5 item 7 lists them as scope.) | Add `app/template.tsx` with a GSAP/`motion` route transition, and either install the optional widget libraries or record in `viz/REGISTRIES.md` that they were skipped (plan §8 "Skip with note in REGISTRIES.md"). |
| **FC-11** | **Medium** | Explorer file-viewer actions (brief §7.3) | **PARTIAL** | Implemented: zone badge, size/type, **History** link → `/commits?path=…` (`file-viewer.tsx:607-618`), markdown/code/binary/too-large bodies (`file-viewer.tsx:518-541`), mobile bottom sheet (`file-viewer.tsx:552-576`). **Missing:** *Copy path*, *Raw*, and the mobile thumb-zone action bar (**History · Copy path · Open in 3D**) — `grep -rni "clipboard\|copy path"` → 0 hits; there is no "Open in 3D" link from the viewer either. | Add a copy-path button (`navigator.clipboard`), a Raw/plain-text toggle, and a mobile action row linking to `/explorer/view3d?path=…`. |
| **FC-12** | **Low** | In-app reduced-motion switch | **STUB — read-only contract** | `viz/components/decks/reveal-deck.tsx:125` reads `localStorage.getItem("viz-reduced-motion") === "on"`, but **nothing ever writes that key** (`grep -rn "viz-reduced-motion"` → 1 hit, the read). OS-level `prefers-reduced-motion` is honoured everywhere (`app/page.tsx:154`, `file-system-3d.tsx:517`, `globe-hero.tsx:117`), but the plan §5 item 7 "reduced-motion a11y **switch**" has no UI. | Add a toggle in the shell header that sets `viz-reduced-motion` and dispatches the change to the three motion-aware consumers. |
| **FC-13** | **Low** | Stale 3D fallback copy | **STUB (failure-path only)** | `viz/app/explorer/view3d/page.tsx:101` renders the user-visible heading **"3D File System — coming in this build"** when the dynamic import rejects (`page.tsx:27-36` `.catch(() => ({default: View3DFallback}))`). The 3D scene is **real and does load** — `grep -c "coming in this build" /explorer/view3d` on live HTML = **0**, and the production bundle contains the three.js chunk (`.next/static/chunks/55ec1622*.js` contains `WebGLRenderer`). The fallback is therefore unreachable in practice — but its copy is stale and would mislead a user if the chunk ever failed. | Replace the fallback copy with a genuine error state ("3D scene failed to load — WebGL unavailable"), and delete the `catch` in favour of the existing `View3DErrorBoundary` in `components/three/view3d-wrapper.tsx:31-100`, which already renders a correct "3D file system unavailable" panel. |
| **FC-14** | **Low** | Per-sha snapshot diff fallback | **DEAD PATH** | `viz/components/timeline/diff-store.ts:177-180` falls back to `/snapshots/diffs/<sha>.json`, but `viz/public/snapshots/` contains only `commits.json`, `graph.json`, `stats.json`, `tours.json`, `tree.json` — **no `diffs/` directory**. The fallback always 404s. (Live git makes this harmless: `curl /api/diff/b474113d…` → `{"source":"git","data":{"sha":"b474113d…","files":[…]}}`.) | Either generate `public/snapshots/diffs/*.json` in `scripts/snapshot.mjs` or delete the fallback branch. |
| **FC-15** | **Low** | Breadcrumb overflow menu | **PARTIAL** | Brief §7.4 requires the >5-segment overflow to collapse into an **ellipsis DropdownMenu**. `viz/components/explorer/breadcrumb.tsx:73,83-92` implements the collapse but as an inline `MoreHorizontal` expander, and `components/ui/dropdown-menu.tsx` does not exist (shadcn `dropdown-menu` was in the plan's install list). | Add the shadcn `dropdown-menu` component and use it for the collapsed middle segments. |
| **FC-16** | **Low** | Tree default exclusions | **PARTIAL** | Plan §5/§8: tree should "default exclude `rea/node_modules`, `.git`". `viz/lib/repo-scan.ts:8` excludes `node_modules`, `.next`, `dist`, `.turbo` ✓, but `.git` is kept as a hollow dir node (`repo-scan.ts:80-81`). Live root listing: `.git/ .github/ .kilo/ .stremiium/ artifacts/ docs/ execution/ prompts/ rea/ viz/ .gitignore README.md` — `.git/` is visible in the Explorer. | Drop `.git` from the tree walk (or keep it only in the snapshot, not in the live walk). |
| **FC-17** | **Low** | Unused dependencies | **LOW** | `cmdk` (`package.json:15`) — unused (see FC-01). `@gsap/react` (`package.json:6`) — **never imported** (`grep -rn "@gsap/react"` → 0 hits). | Remove `@gsap/react` or use it; `cmdk` is the giveaway that the command palette was intended (keep it and implement FC-01). |
| **FC-18** | **Low** | Globe "commit activity" copy | **LOW** | `viz/app/page.tsx:603-604` says the globe shows "zone colors, **commit activity**, and orbit controls", but the globe renders only **6 zone markers** sized by file count (`app/globe/page.tsx:24` `buildZoneMarkers(repoStats.byZone)`) — no commit activity is plotted. | Add commit-activity markers (the commits snapshot has dates) or amend the copy. |

---

## 2. Plan feature matrix

### 2.1 Plan §5 — Core Views (the 7 promised views)

| # | Plan §5 promise | Route(s) | Status | Notes |
|---|---|---|---|---|
| 1 | **Overview dashboard** — stat cards, commits-over-time area chart, language/type mix pie, top-churn bar chart, **cobe globe hero** | `/` | **PARTIAL** | Stat cards ✓ (`app/page.tsx:622-648`), AreaChart ✓ (`:665-712`), PieChart ✓ (`:740-758`), BarChart ✓ (`:858-905`), all fed by `/api/stats` + `/api/commits` ✓. **Globe hero is a placeholder** (FC-07). |
| 2 | **Explorer** — virtualized lazy tree (excludes `rea/node_modules`, `.git`), **search via shadcn `command`**, file viewer + metadata (size, **last commit**, history link) | `/explorer` | **PARTIAL** | Virtualization ✓ (`file-tree.tsx:219-220,396`, ROW_HEIGHT 32, custom windowing), lazy `/api/tree?path=` ✓ (`app/explorer/page.tsx:144-154`), URL-synced state ✓, resizable panes ✓, mobile sheet ✓. **No search at all** (FC-01), **last-commit chip dead** (FC-06), zone chips dim-only (FC-05), `.git` not excluded (FC-16). |
| 3 | **Commits** — GSAP ScrollTrigger timeline, per-commit diff summary, click → diff view | `/commits` | **IMPLEMENTED** | GSAP `ScrollTrigger.batch` + `matchMedia` ✓ (`commit-timeline.tsx:138-158`), diff summary via `/api/diff/<sha>` ✓ (`diff-store.ts:172`), expandable diff cards ✓ (`commit-timeline.tsx:90-128,323`), `?path=` filter with 8-way concurrency ✓ (`app/commits/page.tsx:123-156`). Live: `curl /api/commits?limit=3` → 3 records with `sha/date/author/message/filesChanged/insertions/deletions` ✓. |
| 4 | **3D File System** — r3f scene, folders as clusters, files scaled by size, colour by zone, hover tooltip, click → select | `/explorer/view3d` | **IMPLEMENTED** | `components/three/file-system-3d.tsx` (r3f `Canvas`, `OrbitControls`, 3 tree levels, ~600-node cap, log-size radii, `zoneHue()` colours, hover tooltip, click → `onSelect`), `components/three/view3d-wrapper.tsx` (error boundary + `router.push('/explorer?path=…')`). Live HTML shows the scene's loading state and **not** the "coming in this build" fallback. Linked from `/globe` (`app/globe/page.tsx:116`) — reachable. |
| 5 | **Learn** — reveal.js decks from repo docs (≥4 decks), keyboard/speaker modes | `/learn` | **IMPLEMENTED (decks) / MISSING (tours)** | 4 decks, slide counts **13/14/12/14** exactly as the manifest declares (verified: `grep -c '^---$'` = 12/13/11/13 separators → 13/14/12/14 slides ✓). Deck sources served from `public/decks/` ✓ (200), `content/decks/` and `public/decks/` byte-identical ✓. reveal.js + markdown plugin + `reveal.css` + theme all imported client-side (`reveal-deck.tsx:65-119`) and **the CSS is genuinely in the production bundle** (`.next/static/css/fd41f16c*.css` contains 576 `reveal` rules) ✓. Focus trap, Esc, live-region announcements ✓. **No guided tours** (FC-03). |
| 6 | **Councils** — interactive 16-council hierarchy graph (SC → CRD → C01–C16 → departments) | `/councils` | **PARTIAL** | Snapshot: **61 nodes / 60 edges / 16 councils** ✓ (QA V05 PASS). Self-contained force-directed canvas (no d3) ✓ (`councils-graph.tsx:115-160`, 300 settle ticks, seeded PRNG for a stable layout), hover/select/drag/zoom ✓, **accessible node index** with every node as a real focusable button ✓ (`councils-graph.tsx:919-925`), summary table alternative ✓ (`app/councils/page.tsx:210-259`), node details panel with parents/children ✓. **5 of 16 "View in Explorer" links dead** (FC-04). |
| 7 | **Motion & polish** — GSAP page transitions, react-bits, wigggle-ui widgets, thumb-zone Flo nav, reduced-motion switch | shell-wide | **PARTIAL** | Thumb-zone **Flo menu implemented** ✓ (`app-shell.tsx:155-190`, 92 px fan arc, 56 px FAB, Esc + focus return). GSAP used for the timeline only; **no page transitions**; react-bits/wigggle-ui/motion/animejs **not installed**; reduced-motion switch **read-only** (FC-10, FC-12). |

### 2.2 Plan §3 — Task/deliverable matrix (Phase 1 briefs, as delivered in `viz/`)

| Task | Agent | Promised deliverable | Status |
|---|---|---|---|
| VIZ-001 | sparkling-curious | Master viz directive | IMPLEMENTED (doc) |
| VIZ-010 | captain | Design authority | IMPLEMENTED (doc) |
| VIZ-011 | chief-design-officer | IA + 7-view layout spec | IMPLEMENTED (doc) — but §5 items 2/7 only partially realised (FC-01, FC-10) |
| VIZ-012 | design-system-architect | shadcn/Tailwind token system + `REGISTRIES.md` | IMPLEMENTED — `viz/REGISTRIES.md` ✓, tokens in `viz/lib/brand.ts` ✓ (QA V17: no stray hex) — **but the shadcn install list is only half done**: `command`, `sheet`, `dialog`, `dropdown-menu`, `tree`, `treelike-context-menu` are all absent from `viz/components/ui/` (FC-01, FC-15) |
| VIZ-013 | ui-ux-designer | Layouts, nav, Flo/thumb-zone, **command palette UX** | **PARTIAL** — Flo/thumb-zone ✓, layout ✓, **command palette MISSING** (FC-01) |
| VIZ-014 | accessibility-design-lead | WCAG 2.1 AA | IMPLEMENTED (out of my scope; QA V12-V16 PASS) |
| VIZ-015 | dashboard-designer | Commits-over-time, churn hotspots, type mix | IMPLEMENTED ✓ (recharts Area/Pie/Bar on `/`) |
| VIZ-016 | design-researcher | Learning-workflow research | IMPLEMENTED (doc) |
| VIZ-017 | brand-manager | Palette / zone hues in `lib/brand.ts` | IMPLEMENTED ✓ (single source, QA V17 PASS) |
| VIZ-018 | theme-designer | Light/dark/system themes, liquid-glass | IMPLEMENTED ✓ (`components/theme-provider.tsx`, `ThemeToggle` in shell) |
| VIZ-019 | icon-illustration-lead | lucide + bootstrap-icons + animateicons | **PARTIAL** — lucide ✓ everywhere; `bootstrap-icons` and the animateicons set are **not installed** and unused |
| VIZ-020 | frontend-engineer | Next 15 scaffold, app-router pages, virtualized tree, md viewer | **PARTIAL** — scaffold ✓, virtualized tree ✓, md viewer ✓; command-search and file-viewer actions missing (FC-01, FC-11) |
| VIZ-021 | api-integration-engineer | `/api/tree`, `/api/commits`, `/api/diff/[sha]`, `/api/stats` (+`/api/file`) | IMPLEMENTED ✓ — all 5 work live; **`/api/graph` and `/api/explain` are orphaned** (FC-02, FC-09) |
| VIZ-022 | data-engineer | Contracts + zero-dep snapshot script | IMPLEMENTED ✓ — `viz/scripts/snapshot.mjs`; QA V02/V04/V07 PASS; `public/snapshots/*.json` regenerated 15:54 (11,746 files / 3,254 dirs / 33 commits) |
| VIZ-023 | devops-engineer | pnpm scripts, build validation, static-export fallback | **PARTIAL** — `npm run dev/build/start/snapshot/verify` ✓, `next build` exit 0 ✓, `NEXT_DIST_DIR` isolation ✓ — but there is **no static-export fallback** (`next.config.ts` has no `output: "export"`) and the `distDir` mitigation is not used by the running dev command (see §0) |
| VIZ-024 | qa-test-engineer | Link checks, data-shape tests, a11y smoke, build gate | **PARTIAL** — `scripts/verify-viz.mjs` **17 PASS / 0 FAIL / 0 WARN** ✓, but it checks **no** feature-level contracts (no command-palette check, no `/api/explain` consumer check, no `tours.json` consumer check, no Explorer deep-link check) → FC-01..FC-04 all pass QA |
| VIZ-025 | model-router | `/api/explain` **+ tours** | **MISSING as a user-facing feature** — both artifacts exist (`/api/explain` works; `tours.json` valid) but **neither is reachable from any UI** (FC-02, FC-03) |
| VIZ-030 | documentation-specialist | ≥4 reveal.js decks from repo docs | **IMPLEMENTED** ✓ — 4 decks, 13/14/12/14 slides, served, styled |
| VIZ-031 | knowledge-graph-builder | Graph data + councils graph | **IMPLEMENTED** ✓ — `graph.json` 61 nodes/60 edges, canvas + a11y index + table; deep-link mapping faulty (FC-04) |

### 2.3 Plan §9 — Validation plan

| # | §9 check | Status |
|---|---|---|
| 1 | 18 prompt.md files with model-lock `auto`, gate, acceptance criteria | PASS (19 enumerated files incl. `prompts/viz/README.md`; QA V09: 19/19) |
| 2 | `viz/` source complete, TS valid | PASS — `next build` runs "Linting and checking validity of types" with **zero errors** |
| 3 | snapshots generated from the real repo, shapes match contracts | PASS (QA V02–V08) |
| 4 | `pnpm build` exits 0 | PASS — `✓ Compiled successfully in 106s`, 16 routes, **0 warnings** |
| 5 | Explorer renders 100 % of non-excluded files; commits cover full history; ≥4 decks | PASS — tree.json walks to 11,746 files = `stats.totalFiles` (QA V07); 33 commits = `stats.totalCommits` (QA V08); 4 decks (QA V10) |
| 6 | a11y: keyboard tree, reduced motion, AA contrast | PASS (QA V13–V16); out of my scope for detail |
| 7 | Commit → merge → push | N/A (no code changes made by this review) |

---

## 3. Stub & dead-code inventory

### 3.1 Grep hits for the stub lexicon (`coming soon`, `coming in this build`, `TODO`, `FIXME`, `placeholder`, `not implemented`, `stub`, `lorem`)

| File:line | Match | User-visible? |
|---|---|---|
| `viz/app/explorer/view3d/page.tsx:101` | `3D File System — coming in this build` | **Yes, in the failure path only.** The `.catch()` at `page.tsx:31` swaps this card in when the scene chunk fails to load. Live HTML contains **0** occurrences, so the 3D scene does load. Stale copy → FC-13. |
| `viz/app/page.tsx:590` | `Globe hero placeholder — the cobe scene itself lives on /globe` | Comment. The *effect* is user-visible: the Overview hero is a static mock (FC-07). |
| `viz/app/page.tsx:614` | `Placeholder hero — the WebGL scene loads on /globe` | **Yes** — rendered on the Overview dashboard. FC-07. |
| `viz/app/explorer/loading.tsx:6` | "…viewer-column placeholder" | No (comment). |
| `viz/components/explorer/file-tree.tsx:145` | "Root still loading — placeholder shimmer rows" | No (comment). |
| `viz/components/explorer/file-viewer.tsx:21` | "null → empty placeholder (desktop) / no sheet" | No (comment). |
| `viz/components/explorer/file-viewer.tsx:430` | "…the desktop pane renders placeholders" | No (comment). |
| `viz/components/theme-provider.tsx:57` | "stable placeholder avoids a hydration mismatch" | No (comment). |
| `viz/components/three/globe-hero.tsx:14` | "cobe returns a silent no-op stub when the WebGL context cannot be…" | No (comment describing an upstream library behaviour; the component ships its own SVG fallback). |
| `viz/app/commits/page.tsx:253-256` | `placeholder="Filter by path…"` / `placeholder:text-muted-foreground` | **Legitimate** — HTML input placeholder + Tailwind variant, not a stub marker. |
| `viz/app/api/explain/route.ts:81,129` | `raw.match(/TODO/g)` / `todos` field | **Legitimate** — counts `TODO` markers in a file to describe it. |
| `viz/lib/types.ts:150` | `todos: number` | **Legitimate** — field of `ExplainSummary`. |

**No hits at all for:** `coming soon`, `not implemented`, `FIXME`, `lorem`, `stub` (as a marker).
So there are **no fabricated "coming soon" screens** — the only genuinely stubbed surface is the
3D fallback card (FC-13) and the Overview globe placeholder (FC-07).

### 3.2 Dead code / unreachable artifacts (found by tracing, not by the lexicon grep)

| Artifact | Location | Why it is dead |
|---|---|---|
| `lastCommitFor()` helper | `viz/app/api/file/route.ts:22-31` | Defined, **never called**; `lastCommit` is hardcoded `null` at `route.ts:81`. |
| `lastCommit` chip branch | `viz/components/explorer/file-viewer.tsx:594-603` | Unreachable — the value it renders is always `null`. |
| `/api/explain` route | `viz/app/api/explain/route.ts` | Works, but **no UI caller** (FC-02). |
| `/api/graph` route | `viz/app/api/graph/route.ts` | Works, but **no UI caller** (councils uses the raw snapshot). |
| `public/snapshots/tours.json` | `viz/public/snapshots/tours.json` | Valid data, **no consumer** (FC-03). |
| `viz-reduced-motion` localStorage key | `viz/components/decks/reveal-deck.tsx:125` | Read, never written (FC-12). |
| `/snapshots/diffs/<sha>.json` fallback | `viz/components/timeline/diff-store.ts:177-180` | The `public/snapshots/diffs/` directory does not exist (FC-14). |
| `cmdk` dependency | `viz/package.json` (`cmdk`) | Installed, never imported (FC-01 / FC-17). |
| `@gsap/react` dependency | `viz/package.json:6` | Installed, never imported (FC-17). |
| `View3DFallback` stats card | `viz/app/explorer/view3d/page.tsx:56-199` | Only reachable via a rejected dynamic import (FC-13). |
| shadcn components never added | `viz/components/ui/` | `command`, `sheet`, `dialog`, `dropdown-menu`, `tree`, `treelike-context-menu` are absent though the plan §4 install list names them — the root cause of FC-01 / FC-15. |
| `bootstrap-icons`, animateicons set | `viz/package.json` | VIZ-019 promised them; not installed, not used (matrix §2.2). |

---

## 4. Verified-working features (so the matrix above is read fairly)

These were each exercised live against `http://localhost:3000` and are **IMPLEMENTED**:

| Area | Evidence |
|---|---|
| All 7 view routes | `curl` → 200 for `/`, `/explorer`, `/explorer/view3d`, `/commits`, `/learn`, `/councils`, `/globe` (measured after the dev-server collision was cleared) |
| `/api/tree` | `{"source":"git","data":[…root children…]}` — lazy per-dir loading works, `?path=prompts/stremiium/c08-design-creative` returns its child list |
| `/api/commits` | `{"source":"git","data":[{sha:"b474113d574b3ae92c1f40d68c8ac47fe4579db3",date:"2026-11-18T14:43:12Z",author:"kiloconnect[bot]",message:"feat(viz): build interactive repo visualization learning environment",filesChanged:106,insertions:26125,deletions:0}, …]}` |
| `/api/diff/[sha]` | `{"source":"git","data":{"sha":"b474113d…","files":[{"path":".kilo/plans/1794…md","insertions":191,…}, …]}}` — and the commits timeline really calls it (`diff-store.ts:172`, card expansion at `commit-timeline.tsx:90-128`) |
| `/api/file` | `{"source":"git","data":{"path":"README.md","size":6024,"binary":false,"tooLarge":false,"content":"# rea — Reverse Engineer Anything\n…"}}` — content non-empty ✓ (lastCommit null → FC-06) |
| `/api/stats` | `{"source":"snapshot","data":{"totalFiles":11746,"totalDirs":3254,"totalCommits":33,…}}` |
| `/api/graph` | `{"source":"snapshot","data":{"nodes":[…],"edges":[…]}}` (orphaned → FC-09) |
| `/api/explain` (POST) | `{"source":"git","data":{"path":"README.md","lines":75,"headings":[…8],"symbols":[],"todos":0,"churn":{"insertions":193,"deletions":119,"commits":8},"relatedFiles":[…]}}` (orphaned → FC-02) |
| URL state round-trip | `/explorer?path=prompts%2Fstremiium%2Fc08-design-creative&expand=prompts%2Cprompts%2Fstremiium` → 200; `/commits?path=docs%2Fengineering` → 200. `app/explorer/page.tsx:191-209` writes `?path` + `?expand` via `router.replace`, and `:85-96` reads them back; `:285-311` auto-expands ancestors of a deep-linked path. |
| Decks | `/decks/decks.json` → 200 with 4 entries (13/14/12/14 slides); `/decks/deck-01-repo-orientation.md` → 200; reveal CSS present in the production CSS bundle |
| Councils graph | 61 nodes / 60 edges / 16 councils in `graph.json`; canvas draws every node; grouped "Node index" of focusable buttons present (`councils-graph.tsx:919-925`); summary table present (`app/councils/page.tsx:210-259`) |
| Production build | `✓ Compiled successfully in 106s` → 16 routes, **no warnings** (no missing dynamic import, no `useSearchParams`-without-Suspense, no metadata warning). `/explorer/view3d` is 5.15 kB (scene split into a separate chunk; three.js chunk `55ec1622*.js` present). |
| QA script | `node scripts/verify-viz.mjs` → **17 PASS · 0 FAIL · 0 WARN**, exit 0 |

---

## 5. Features promised but NOT delivered (explicit list)

1. **⌘K command palette** — §7.2 of the UI/UX brief + plan §5 item 2 ("search via shadcn `command`") + plan §4 install list. `cmdk` is installed; the component, the key handler, the top-bar Search button and the **Files / Folders / Commits / Views** groups do not exist. There is **no search anywhere in the Explorer** (only a path filter on `/commits`). *(FC-01 — Critical)*
2. **AI learning layer (`/api/explain`)** — plan §3 VIZ-025, plan §1 goal 3. The route is implemented and correct but **no UI reaches it**; there is no "explain this file" affordance anywhere. *(FC-02 — Critical)*
3. **Guided tours** — plan §1 goal 3 ("guided tours"), TASK-INDEX VIZ-025 ("`tours.json` shipped"). `tours.json` ships with 3 valid tours and per-step routes but **nothing consumes it**; there is no tour UI or entry point. *(FC-03 — High)*
4. **Working "View in Explorer" deep links for all 16 councils** — plan §5 item 6. 5 of 16 council links and 16 of 28 department links point at directories that do not exist → the Explorer lands on "No file selected". *(FC-04 — High)*
5. **Working zone filters** — plan §5 item 2 / brief. The 6 chips only dim non-matching rows (`opacity-40`); nothing is filtered and the chip tooltip promises "Show only … files". *(FC-05 — High)*
6. **File-viewer "last commit" chip** — brief §7.3, plan §5 item 2. Always renders "no commit data"; the server-side helper that would populate it is dead code. *(FC-06 — High)*
7. **cobe globe hero on the Overview dashboard** — plan §5 item 1. Replaced by a static placeholder card whose own copy says "Placeholder hero". *(FC-07 — Medium)*
8. **GSAP page transitions** — plan §5 item 7. GSAP is used only for the commits ScrollTrigger; there is no `app/template.tsx` and no route-transition animation. *(FC-10 — Medium)*
9. **react-bits / wigggle-ui / motion / animejs widgets** — plan §5 item 7 + plan §2 enhancement modules. Not installed, not used, and **not recorded as skipped** in `viz/REGISTRIES.md` as plan §8 requires. *(FC-10 — Medium)*
10. **In-app reduced-motion switch** — plan §5 item 7. Only the OS media query is honoured; the `viz-reduced-motion` key the deck reader expects is never written. *(FC-12 — Low)*
11. **Explorer file-viewer actions** — brief §7.3: *Copy path*, *Raw*, and the mobile thumb-zone action bar (History · Copy path · Open in 3D). Only *History* exists. *(FC-11 — Medium)*
12. **Static-export fallback** — TASK-INDEX VIZ-023 "static export fallback" / plan §4. `next.config.ts` has no `output: "export"`. *(VIZ-023 — Medium)*
13. **Per-route `error.tsx`** for `/commits`, `/councils`, `/globe`, `/learn`; `loading.tsx`+`error.tsx` for `/explorer/view3d`; any `not-found.tsx` at all. *(FC-08 — Medium)*
14. **bootstrap-icons / animateicons icon set** — TASK-INDEX VIZ-019. Not installed or used (lucide only). *(VIZ-019 — Low)*

---

## 6. Recommended fix order

1. **FC-01** — add the shadcn `command` component + global ⌘K palette (unlocks the single largest promised UX surface; `cmdk` is already paid for).
2. **FC-02 / FC-03** — wire `/api/explain` into the file viewer and add a tours widget; both artifacts already exist and work, so this is pure integration.
3. **FC-04** — regenerate the council→directory mapping from the real `prompts/stremiium/` names and add a link-integrity assertion to `scripts/verify-viz.mjs` (the QA script currently passes 17/17 while 21 deep links are broken).
4. **FC-05 / FC-06** — real row filtering in the tree; populate `lastCommit` server-side.
5. **FC-07 / FC-08 / FC-09 / FC-10 / FC-11** — mount the real globe hero on `/`, add the missing error/loading/not-found files, point `/councils` at `/api/graph`, add `app/template.tsx` transitions, complete the file-viewer action set.
6. Extend `scripts/verify-viz.mjs` with **feature-level** assertions (command palette present, `/api/explain` has a caller, `tours.json` has a consumer, every council Explorer link resolves) so the current PASS/FAIL signal stops being shape-only.

---

## 7. Remediation status at time of writing (board, 16:01)

A remediation wave is already running against several findings in this report. Ownership
disjointness note for the orchestrator:

| Finding | Remediation agent (per board) | Disjoint? |
|---|---|---|
| FC-01 command palette | R1 "implement command palette" — owns `components/ui/command.tsx`, `components/nav/command-palette.tsx`, `app-shell.tsx`, `package.json` | ✅ no collision with this report |
| FC-07 Overview globe hero | "Remediate: overview hero placeholder" | ✅ |
| FC-05 zone filter / FC-06 last-commit chip / FC-11 viewer actions | "Remediate: explorer feature gaps" | ✅ (explorer page/file-tree/file-viewer scope) |
| FC-08 missing error.tsx / not-found | "Remediate: commit detail page and 404" | ⚠️ may overlap `app/commits/error.tsx` + `app/not-found.tsx` — coordinate with the explorer-gap owner on `app/explorer/view3d/error.tsx` |
| **FC-02 `/api/explain` UI** | **unassigned — no owner yet** | needs an owner |
| **FC-03 guided tours UI** | **unassigned — no owner yet** | needs an owner |
| **FC-04 council deep-link mapping** | **unassigned — no owner yet** | needs an owner (snapshot regeneration touches `public/snapshots/graph.json` + `scripts/snapshot.mjs`) |
| FC-09 `/api/graph` orphan | unassigned | needs an owner |
| FC-10/FC-12 motion & reduced-motion switch | unassigned | needs an owner |

**No remediation agent currently owns FC-02, FC-03, FC-04, FC-09, FC-10 or FC-12** — these
are the outstanding Critical/Missing gaps after the current wave lands.

---

*Report produced read-only; no file under `viz/app`, `viz/components`, `viz/lib`, `viz/scripts`, `viz/content` or `viz/public` was modified.*
