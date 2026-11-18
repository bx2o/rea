# 05 — UX / Responsive / Design Review

**App:** `viz/` (Next.js 15 App Router + Tailwind + hand-rolled shadcn-style UI kit)
**Reviewed at:** commit `b474113` · built copy served on `http://localhost:3200` (`next build` + `next start`, identical source tree to `viz/`)
**Baseline note:** all `file:line` evidence refers to commit `b474113`. Remediation agents (R1 command palette, R5 CSS tokens) began editing `viz/app/globals.css` and `viz/components/` during this review, so line numbers in `globals.css` may have shifted; the finding text and the token names remain authoritative.
**Reviewer role:** UX / responsive / design critic (read-only — no application code was modified)
**Specs consulted (binding):**
`prompts/viz/c08-design-creative/ui-ux-designer/prompt.md` (§6 view layouts, §7 explorer UX, §8 mobile Flo-menu/thumb-zone, §9 states) · `brand-manager/prompt.md` (D1 palette, D2 zone coding, D3 type, D4 logo, D6 microcopy) · `theme-designer/prompt.md` (§8.1–§8.6 theme + liquid-glass) · `chief-design-officer/prompt.md` (IA)

---

## 0. Verdict

The app is functionally solid and unusually good on the accessibility/robustness axis (ARIA tree with roving focus, live regions, reduced-motion gates, snapshot fallbacks, an accessible table alternative for the graph). It is, however, **not yet conformant** with the binding design briefs on three axes:

1. **Two whole features are missing**: the Explorer **command palette (⌘K)** (§7.2 — and the Learn deck text already advertises it) and the **`/commits/[sha]`** detail route (§6.3 — confirmed HTTP 404).
2. **The mobile navigation pattern is only 1/3 implemented**: the Flo-menu *floats* below 768px, but there is no *dock* (768–1023) and no *rail* (≥1024) — a 240px expanded sidebar is used from 768px upward.
3. **The brand palette is mis-bound**: ZAR gold `#FFB612` is wired to the shadcn `--accent` token, which turns every hover/focus surface in the app into brand gold — the exact use the brand brief forbids ("highlight only … never body text").

**Counts:** 36 findings — **8 HIGH · 16 MEDIUM · 12 LOW**. 1 confirmed broken route (404). 1 undefined-at-runtime CSS variable (`--tree-w`, intentionally runtime-scoped). 0 undefined static CSS variables. 5 dead/unused code or data surfaces.

---

## 1. Findings

### 1.1 HIGH

| ID | Severity | Area | Issue | Spec reference | Evidence (file:line) | Recommended fix |
|---|---|---|---|---|---|---|
| UX-01 | **HIGH** | Explorer UX | **No command palette anywhere in the app.** No `⌘K`/`Ctrl+K`/`/` handler, no shadcn `command`, no search trigger in the top bar, no grouped results (Files / Folders / Commits / Views), no fuzzy path match, no 150 ms debounce, no zero-result empty state. The only search input in the codebase is a *commits path filter* (a text input, not a palette). `viz/content/decks/deck-01-repo-orientation.md` already tells the user "Explore the live tree: `/explorer` (virtualized tree + ⌘K command palette)" — the deck promises a feature that does not exist. | UI/UX §7.2, §6 global shell ("Search trigger shows ⌘K hint") | `grep -rn "⌘\|Meta+k\|key === \"k\"" app components` → **0 hits**; `components/nav/app-shell.tsx:131-141` (top bar: wordmark + ThemeToggle only); `app/commits/page.tsx:248-256` (a plain `<input type="search">`, not a palette) | Install `shadcn command` + `cmdk`; add a global `CommandPalette` mounted in `AppShell` bound to `⌘K`/`Ctrl+K`/`/`; add a search Button in the top bar showing the `⌘K` hint; group results Files/Folders/Commits/Views; add the "Clear query / Search in commits instead" empty state (§9.3). |
| UX-02 | **HIGH** | Brand | **ZAR gold is bound to the `--accent` surface token.** `--accent: 42 100% 53%` (= `#FFB612`) in *both* themes, and `--accent` is the shadcn *hover/focus surface* token. Every `hover:bg-accent` / `focus-visible:bg-accent` therefore paints **solid brand gold**. Worst case: the focused Explorer tree row gets a full-saturation gold block behind the filename. The theme brief defines `--accent` as a **pale mint hover surface** (`150 40% 95%`); the brand brief allows gold only for "selected node, active timeline entry, hero accent arc". | Brand D1 (gold = highlight only, never body text); Theme §8.2 (`--accent: 150 40% 95%`); Brand §7.6 rule 2 (namespace separation) | `app/globals.css:22` (`--accent: 42 100% 53%`), `app/globals.css:66` (dark); `components/explorer/file-tree.tsx:465` (`hover:bg-accent/60 focus-visible:bg-accent`); `components/explorer/breadcrumb.tsx:90,107`; `components/explorer/file-viewer.tsx:570` | Re-bind `--accent` to the theme's pale mint hover surface in `:root` and `.dark`; introduce `--st-gold-500`/`--st-gold-400` as a *separate* token and use it only for the accent bar, selected node, satellite dot and hero arc. |
| UX-03 | **HIGH** | Navigation | **The Flo-menu does not scale float → dock → rail.** The FAB is `md:hidden` (floats <768px only). Between 768–1023px there is **no bottom tab bar** — instead a 240px expanded left sidebar appears (`hidden … md:flex`). At ≥1024px there is **no 72px icon rail with hover tooltips** — the same 240px sidebar persists. The spec requires one pattern that floats → docks → rails. | UI/UX §8.1 (three-breakpoint scaling), §6 global shell (72px rail ≥1024; top-bar horizontal nav 768–1023) | `components/nav/app-shell.tsx:86` (`hidden … md:flex … w-60`), `:155` (`fixed bottom-5 right-5 z-50 md:hidden`) | Implement three states: `<768` FAB (existing), `768–1023` fixed bottom tab bar (6 items, icon + label, active indicator), `≥1024` 72px icon rail with tooltips. Collapse the sidebar entry point into `lg:` and add the rail at `lg:`. |
| UX-04 | **HIGH** | Routes | **`/commits/[sha]` does not exist** → HTTP **404** (verified). The spec's detail route (changed-file list + unified diff with hunk headers and add/del gutters) is absent; `components/timeline/diff-viewer.tsx` renders only a *file list with counts* and is reachable only by expanding a card inline. | UI/UX §6.3 (detail route `/commits/[sha]`, split pane, unified diff viewer) | `curl -o /dev/null -w %{http_code} /commits/abc123def456` → **404**; `ls app/commits/` → only `page.tsx`, `loading.tsx`; `components/timeline/diff-viewer.tsx:78-130` (list only, no hunks) | Add `app/commits/[sha]/page.tsx` (split pane: 320px file list + diff viewer with hunk headers/gutters), link every commit card and the file-viewer `lastCommit` chip to it, and extend `/api/diff/[sha]` to return hunks. |
| UX-05 | **HIGH** | Explorer | **Six required Explorer features are missing**: (a) `Tree | 3D` view ToggleGroup, (b) the collapsible 260px metadata column (lg+ only), (c) viewer actions **Copy path** and **Raw**, (d) the mobile thumb-zone action bar (History / Copy path / Open in 3D), (e) the right-click context menu (Copy path / Open in 3D / View history), (f) the metadata panel that folds into a viewer-header Sheet at tablet. The toolbar has only a breadcrumb + zone chips. | UI/UX §6.2, §7.3 | `app/explorer/page.tsx:370-418` (toolbar: breadcrumb + 6 zone chips only); `components/explorer/file-viewer.tsx:578-625` (header has History only); `app/explorer/page.tsx:421-465` (2 panes only, no metadata column) | Add the ToggleGroup + metadata column to the desktop grid, extend the viewer header with Copy path / Raw / Open in 3D, and add a fixed bottom action bar for mobile. |
| UX-06 | **HIGH** | Overview | **The hero row is a placeholder, not the specified layout.** §6.1 requires a 12-col grid with a cobe globe hero `lg:col-span-8` (≈420px canvas, overlaid repo title + subtitle + primary Button **"Start exploring"**, drag-to-rotate, click → `/globe`) beside a `lg:col-span-4` quick-stats stack. Implemented: a single-column `grid gap-6`, a CSS-gradient sphere with the literal copy *"Placeholder hero — the WebGL scene loads on /globe"*, no canvas, no "Start exploring" CTA, and the stat cards moved to a separate row below. `components/three/globe-hero.tsx` exists but is **not imported** by the overview. | UI/UX §6.1 (rows 1–2), §9.2 ("globe canvas → Spinner + Preparing globe…") | `app/page.tsx:555` (`grid gap-6`), `:591-620` (placeholder card), `:614` (placeholder copy), `:623` (stat cards in their own row); `grep 'globe-hero' app/page.tsx` → no import | Promote `GlobeHero` into the hero Card (`lg:col-span-8`), overlay the title/subtitle/**"Start exploring"** primary button, and move a 4-card quick-stats stack into `lg:col-span-4`. Replace the placeholder copy with a real Spinner/"Preparing globe…" state. |
| UX-07 | **HIGH** | Mobile | **The Explorer tree is not a left-edge Sheet and is not edge-swipeable.** Below 768px the tree is stacked in normal flow above the viewer and the viewer is a fixed bottom sheet. The spec requires the tree to live in a left-edge Sheet (edge swipe or toolbar button) with swipe-right to close. | UI/UX §6.2 (mobile), §8.2 ("Tree = left-edge Sheet (swipe from left edge or toolbar button); swipe right closes") | `app/explorer/page.tsx:421-441` (`flex … flex-col md:flex-row`, tree section always rendered), `components/explorer/file-viewer.tsx:552-553` (viewer is the sheet); no swipe/touch handlers anywhere in `app/explorer` | Wrap the tree in a left-edge Sheet (`side="left"`, 85vw, `max-h-[80dvh]`) opened by a toolbar "Files" button, and add a `touchstart/touchmove` edge-swipe handler (24px left edge) + swipe-right-to-close. |
| UX-08 | **HIGH** | 3D view | **The 3D File System has no HUD overlay and is not full-bleed.** §6.4 requires a full-bleed `h-[calc(100vh-48px)]` canvas with a HUD overlay: zone legend top-left, controls top-right (reset view, auto-rotation toggle, density toggle `meshes | points`), and a bottom-centre hint line. Implemented: an in-flow card with the legend *above* the canvas, a static "Interactive mode / Points mode" label instead of the density toggle, no reset-view, no auto-rotation toggle, no hint line. The view is also unreachable from the Explorer (no `Tree | 3D` toggle) — only via a link on `/globe`. | UI/UX §6.4 (layout + HUD + interactions) | `components/three/file-system-3d.tsx:604-643` (header + legend `<ul>` above the canvas), `:691-700` (`SCENE_FRAME` canvas), no `reset`/`autoRotate`/`meshes|points` controls; `app/explorer/view3d/page.tsx:210-216` | Move the legend and controls into absolute HUD layers over a full-bleed canvas; add the three HUD controls and the hint line; wire the Explorer `Tree | 3D` ToggleGroup to `/explorer?view=3d`. |

### 1.2 MEDIUM

| ID | Severity | Area | Issue | Spec reference | Evidence (file:line) | Recommended fix |
|---|---|---|---|---|---|---|
| UX-09 | MEDIUM | Brand / Theme | **Explicit "Light" theme is ignored when the OS prefers dark.** `useThemeMode()` resolves to `"dark"` if `mq.matches` is true, regardless of the user's explicit `next-themes` choice. The Explorer tree dots, Explorer zone chips and the 3D fallback legend therefore use the **dark** zone palette on a light UI, while the Overview (which uses `resolvedTheme`) uses the light palette — the same folder is a different hue in two views of the same app. | Brand §7.6 rule 8 (cross-surface test: same folder = same zone hue everywhere); Brand D2 rule 4 (text variant mandatory per theme) | `components/explorer/use-zone-theme.ts:18-24` (`el.classList.contains("dark") \|\| mq.matches ? "dark" : "light"`) | Resolve from `useTheme().resolvedTheme` (as `app/page.tsx:391-392` already does) with a mounted guard; delete the `matchMedia`/`MutationObserver` logic. Apply the same fix to every `zoneHue(..., "dark")` call site. |
| UX-10 | MEDIUM | Brand / Theme | **Zone hues are hard-coded to the dark palette in the globe and 3D scene.** Markers use `ZONE_HUES[zone].dark` unconditionally, the globe legend uses `zoneHue(zone, "dark")`, the 3D legend and keyboard list use `zoneHue(node.zone, "dark")`, and cobe is created with `dark: 1`. In light mode the globe is a dark object with dark-palette markers and the legends do not match the tree. | Theme §8.4 (theme-aware 3D/globe); Brand §7.6 rule 8 | `components/three/globe-hero.tsx:44-47` (`zoneMarkerColor` → `.dark`), `:157` (`dark: 1`); `app/globe/page.tsx:80` (`zoneHue(zone, "dark")`); `components/three/file-system-3d.tsx:634`, `:802` (`zoneHue(zone, "dark")`) | Thread the active theme into the scene builders (`useTheme().resolvedTheme` → `zoneHue(zone, theme)`), and set cobe's `dark` flag from the theme. |
| UX-11 | MEDIUM | Commits | **The commits view is missing four specified components**: the sticky left **date-rail**, the **author / zone / date-range filters** (shadcn `Select` + `Calendar`), the **"Load older"** button at the rail end, and **zone badges** on each commit card. Keyboard `j`/`k` navigation and `Enter`-to-open are also absent. | UI/UX §6.3 (grid, components, interactions) | `app/commits/page.tsx:190` (`max-w-3xl` only, no rail), `:234-272` (only a path-filter input), `components/timeline/commit-timeline.tsx:229-293` (no zone badges) | Add the date rail (desktop) with inline date badges on mobile, an author/zone `Select` + date-range control, a "Load older" button, zone badges, and `j`/`k`/`Enter` handlers. |
| UX-12 | MEDIUM | Councils | **The councils view is missing the search filter, the level-collapse ToggleGroup, and the mobile treatment.** Spec requires: a top-right search that filters nodes and auto-zooms; a `Departments | Councils` ToggleGroup that collapses a level; and on mobile `Graph | List` **Tabs** with the detail panel as a bottom Sheet with a drag handle. Implemented: 70/30 grid, legend, and an accessible summary table — no search input, no ToggleGroup, no Tabs, panel stacks inline. | UI/UX §6.6 | `app/councils/page.tsx:189-195` (grid only), `:146-157` (legend), `:197-262` (summary table); no `<input>`/`Tabs`/`Sheet` in the file | Add a debounced search box that filters and zooms, a `ToggleGroup` for level collapse, a `Tabs` `Graph | List` switch below 768px, and convert `NodeDetails` into a bottom Sheet (`max-h-[80dvh]`, drag handle) on mobile. |
| UX-13 | MEDIUM | Learn | **The deck stage is missing its thumb-zone control cluster and progress model.** §6.5 requires a bottom-left slide counter (n/N) and bottom-right prev/next (≥44px), speaker-notes toggle and fullscreen button. Implemented: reveal.js's own small default controls and a `c/t` slide number from the reveal theme; no fullscreen, no notes toggle, no ≥44px controls, no progress Badge on the index card, no deck empty state ("Deck unavailable" + Back to Learn). | UI/UX §6.5, §9.3 | `components/decks/reveal-deck.tsx:270-282` (`controls: true`, `slideNumber: "c/t"`), `:352-368` (only a top Close bar); `app/learn/page.tsx:121-125` (grid renders empty when the manifest is empty) | Add a custom bottom control cluster (prev/next ≥44px, fullscreen, notes toggle) and a bottom-left counter; store completion and render a progress Badge; add the "Deck unavailable → Back to Learn" state and an empty-manifest state. |
| UX-14 | MEDIUM | Responsive | **Systemic sub-44px touch targets.** The shadcn-style Button has no size ≥44px (`sm` = 32px, `default` = 36px, `lg` = 40px, `icon` = 36px). Consequences: theme toggle 36px in the mobile top bar, "Open deck" 36px, commits filter input 36px and its clear button 28px, diff rows ~28px, councils zoom buttons 32px, globe pause 36px, Flo-menu items 44px (spec asks ≥48px), Explorer tree rows 32px (spec asks 40px on mobile). | UI/UX §8.2 ("All touch targets ≥44×44px; list rows 40–48px"), §8.1 ("each item ≥48px"), §7.1 (row height 32px desktop / **40px mobile**) | `components/ui/button.tsx:24-29`; `components/explorer/file-tree.tsx:26` (`ROW_HEIGHT = 32`, no mobile variant); `components/nav/app-shell.tsx:198` (`size-11` = 44px); `app/commits/page.tsx:256,263`; `components/graph/councils-graph.tsx:850-885` (`h-8 w-8`); `components/three/globe-hero.tsx:258` (`h-9 w-9`) | Add a `size="touch"` (44px) button variant and a mobile-only `ROW_HEIGHT = 40`; enlarge Flo items to 48px; scale all icon-only controls to ≥44px on `<768`. |
| UX-15 | MEDIUM | Semantics | **Duplicate `<main id="main">` landmarks.** The app shell already renders `<main id="main">`; `/learn` (and `app/learn/loading.tsx`) renders a second `<main id="main">`. Verified in the served HTML: two `<main id="main">` elements. The shell's skip link therefore points at an ambiguous target. | UI/UX §12 (semantic landmark regions, logical focus order) | `app/learn/page.tsx:89` (`<main id="main" className="container py-8">`), `app/learn/loading.tsx:9`; served HTML: `<main id="main" class="flex-1">` + `<main id="main" class="container py-8">` | Render a `<section>`/`<div>` in the learn page; keep exactly one `main#main` (owned by the shell). |
| UX-16 | MEDIUM | States | **No app-level 404 page.** There is no `app/not-found.tsx`, so an unknown route renders the stock Next.js "404: This page could not be found." page with no navigation, no brand chrome and no way back — a dead end. | UI/UX §9.3 ("never a dead end") | `ls app/` → no `not-found.tsx`; `curl /nope` → 404 with `<title>404: This page could not be found.</title>` | Add `app/not-found.tsx` with the brand shell, the cause sentence and a primary "Back to Overview" action. |
| UX-17 | MEDIUM | Brand | **Token bypass: hard-coded Tailwind palette colours.** Insertions/deletions/warnings use `text-green-600`, `text-red-600`, `border-amber-600/40`, `bg-green-600/10` etc. — bypassing `--destructive` and the (missing) `--st-success/warning/danger` semantic namespace. The brand forbids mixing the zone namespace with semantics and requires semantic tokens to exist. | Brand §7.1 (semantic token table), §7.6 rule 1 ("no hardcoded hex anywhere else fails brand QA"), rule 2 (namespace separation) | `app/commits/page.tsx:221,296,308,325,344,353`; `components/timeline/commit-timeline.tsx:285,289,310`; `components/timeline/diff-viewer.tsx:118,121,156,159` | Add `--st-success/--st-danger/--st-warning/--st-info` to `:root`/`.dark` and replace every `*-600`/`*-400` utility with `text-success` / `text-destructive` / `text-warning` equivalents. |
| UX-18 | MEDIUM | Brand | **Hex outside `lib/brand.ts` in the deck manifests.** `content/decks/decks.json` and its `public/decks/decks.json` copy embed `"accent": "#2563EB"` — a hard-coded copy of `ZONE_HUES.docs.light`. The QA harness (`scripts/verify-viz.mjs:578`) only scans `app/` + `components/`, so this drift is invisible to the gate. | Brand §7.6 rule 1 (single token source); QA harness scope | `content/decks/decks.json:8,16,24,32`; `public/decks/decks.json` (same); `scripts/verify-viz.mjs:578` (`for (const d of ["app", "components"])`) | Drop the `accent` field (the card already uses the `bg-zone-docs` token) or replace it with a zone key (`"accentZone": "docs"`) and widen the harness scan to `lib/`, `content/` and `public/`. |
| UX-19 | MEDIUM | Theme | **The theme token set is incomplete vs the theme brief.** Missing: `--glass-bg` (the brief names this token; the implementation invented `--glass`), `--glass-highlight` (inset top highlight), `--scene-fog`, `--node-accent`, and all six `--zone-*-text` AA text variants. The `.glass` utility also has **no non-`backdrop-filter` fallback** (Firefox <103 loses the surface entirely, since `background: hsl(var(--glass)/0.72)` alone is transparent over a transparent parent). | Theme §8.2/§8.3 (token spec), §8.5 (recipe + non-`backdrop-filter` fallback), Brand D2 rule 4 (AA text variant mandatory) | `app/globals.css:46-49` (`--glass`, `--glass-border`, `--glass-blur` only), `:101-108` (`.glass`, no `@supports not (backdrop-filter: blur(1px))` block) | Rename/add `--glass-bg`, add `--glass-highlight`, `--scene-fog`, `--node-accent` and `--zone-*-text` to both themes; add `@supports not (backdrop-filter: blur(4px)) { .glass { background: hsl(var(--card)); } }`. |
| UX-20 | MEDIUM | Components | **The shadcn/ui component inventory required by §5/§6 is largely absent.** The kit is 9 hand-rolled files (`badge, button, card, scroll-area, separator, skeleton, table, tabs, tooltip`) with **no Radix dependency at all** — so `command`, `sheet`, `dialog`, `dropdown-menu`, `select`, `resizable`, `toggle-group`, `calendar` and shadcn `breadcrumb` are all missing, and several are re-implemented ad hoc (custom breadcrumb, custom theme dropdown, custom resizable divider). | UI/UX §5 (shadcn component list), §6.x (per-view component inventory) | `ls components/ui/` → 9 files; `package.json` → no `@radix-ui/*`, no `cmdk`; `components/explorer/breadcrumb.tsx` (custom), `components/theme-provider.tsx:81-110` (custom dropdown) | Install the required registry components (at minimum `command`, `sheet`, `dialog`, `dropdown-menu`, `select`, `toggle-group`, `resizable`, `calendar`) and migrate the ad-hoc re-implementations to them. |
| UX-21 | MEDIUM | States | **The snapshot-only banner is not implemented.** §9.3 requires a banner: *"Live git unavailable — showing committed snapshot" + link to regeneration docs*. Implemented: a 12px "snapshot mode" chip in the Explorer toolbar (title attribute only, no link) and a tiny "Snapshot" badge on `/commits`. No banner, no link to the regeneration docs anywhere. | UI/UX §9.3 (snapshot-only mode) | `app/explorer/page.tsx:408-416`; `app/commits/page.tsx:211-227` | Add a dismissible app-shell banner when any data source resolves to `"snapshot"`, with a link to the snapshot regeneration instructions (`viz/README.md` §Regenerate snapshots). |
| UX-22 | MEDIUM | Microcopy | **User-visible placeholder copy.** The overview renders *"Placeholder hero — the WebGL scene loads on /globe…"* and the 3D fallback card is titled *"3D File System — coming in this build"*. The briefs forbid placeholders (`A9: No placeholders/TBD`) and require a knowledgeable-guide voice. | UI/UX §10 A9; Brand §7.5 (voice: enable, don't advertise) | `app/page.tsx:614-616`; `app/explorer/view3d/page.tsx:101-106` | Replace with finished copy, or hide the branch entirely until the real scene is mounted. |
| UX-23 | MEDIUM | Layout | **Inconsistent page gutters and nested containers.** The shell already wraps content in `mx-auto max-w-7xl px-4 md:px-6 lg:pt-8`, then `/councils` adds its own `max-w-7xl px-4 py-8 lg:px-8` and `/learn` adds `container py-8`. Result: the content gutter differs per view (Overview 24px, Councils 56px, Learn 32px) and the max-width is applied twice. | UI/UX §6 (per-view grid `max-w-[1400px] mx-auto px-4 md:px-8`) | `components/nav/app-shell.tsx:144`; `app/councils/page.tsx:114`; `app/learn/page.tsx:89` | Keep the shell as the single container (`max-w-[1400px]`) and let pages provide only their inner grid; move the shared `py-8` into the shell. |
| UX-24 | MEDIUM | Explorer | **Tree row and filter behaviour deviate from §7.1.** Rows are a fixed 32px on mobile too (spec: 40px); the zone "filter" only **dims** non-matching rows to `opacity-40` instead of filtering; folders show **no child-count Badge**; the collapsed `rea/` folder shows **no "+N internal files — expand anyway"** summary row; indentation caps at 6 levels with no ellipsis indicator. | UI/UX §7.1 (row height, child-count badge, `rea/` summary row, indent cap + ellipsis) | `components/explorer/file-tree.tsx:26` (`ROW_HEIGHT = 32`), `:429-430` + `:468` (`opacity-40` dim), `:495-499` (zone dot + size, no count badge), `app/explorer/page.tsx:25` (`DEFAULT_EXPANDED` excludes `rea` ✓ but no summary row) | Use a responsive row height, filter (not dim) the row list, add a child-count Badge to folder rows, add the `rea/` summary row, and render an indent-ellipsis marker past depth 6. |
| UX-25 | MEDIUM | States | **Empty states are incomplete.** `/learn` renders an empty `<ul>` when the manifest is empty (no cause, no action); the Explorer shows "No repository entries to display." with no icon and no action; `/globe` has no empty state; the Explorer tree has no 404-specific state for a stale `?path=` beyond a sentence. | UI/UX §9.3 (icon + one-line cause + one primary action, never a dead end) | `app/learn/page.tsx:121-125`; `components/explorer/file-tree.tsx:508-512`; `app/globe/page.tsx` (no empty branch) | Add icon + cause + single CTA to each empty branch (learn: "No decks found — regenerate"; explorer: "Clear filters"/"Back to root"; globe: retry the snapshot). |
| UX-26 | MEDIUM | Brand | **The brand logo lockup is missing.** §D4 requires an inline SVG "S-flow" mark (green glyph + gold arc) with a lowercase `stremiium` wordmark in Space Grotesk 600, top-left of the global nav, linking to the Overview. Implemented: a generic lucide `Hexagon` glyph in a green square plus the text "Stremiium Repo Viz" in Space Grotesk. The decks also carry no logo on the title slide / closing slide. | Brand §7.4 (D4 — interim lockup standard), §7.6 rule 4 | `components/nav/app-shell.tsx:88-101` (Hexagon + "Stremiium Repo Viz"), `:133-134` (top bar wordmark); `content/decks/deck-01-repo-orientation.md:1` (no mark, no gold rule) | Implement the S-flow SVG mark + lowercase wordmark as a shared `<BrandLockup>` and place it in the shell, the sidebar and the deck title/closing slides. |
| UX-27 | MEDIUM | Brand | **The verb lexicon (Explore / Learn / Inspect) is applied in only four places.** Missing: the overview's primary CTA ("Start exploring"), an "Inspect commit" action in the commits view, an "Inspect file" affordance in the Explorer, and the stat cards are plain text rather than verb-led deep links. | Brand §7.5 (D6: primary verbs mapped to primary views; navigation and CTAs lead with these verbs) | `grep -rn LEXICON app components` → 4 hits (`app/globe/page.tsx:119`, `app/learn/page.tsx:92`, `app/page.tsx:610`, `components/three/view3d-wrapper.tsx:90`); `app/page.tsx:276-291` (`StatCard` is a `Card`, not a `Link`) | Apply the lexicon to the primary CTA of each view and turn the four stat cards into deep links (Files → `/explorer`, Commits → `/commits`, Councils → `/councils`, Dirs → `/explorer?view=3d`). |

### 1.3 LOW

| ID | Severity | Area | Issue | Spec reference | Evidence (file:line) | Recommended fix |
|---|---|---|---|---|---|---|
| UX-28 | LOW | Brand | **Zone hue used for a non-zone meaning.** `--zone-stremiium` (violet) encodes "department" node type in the councils graph and its detail panel, mixing the categorical zone namespace with a graph-type taxonomy. | Brand §7.6 rule 2 (namespace separation), D2 rule 1 (zones are the only categorical data hues) | `components/graph/node-details.tsx:37` (`border-zone-stremiium text-zone-stremiium`), `components/graph/councils-graph.tsx:312` | Introduce a separate neutral/graph-type ramp (or use size/shape only) for node types; keep zone hues for zones. |
| UX-29 | LOW | Commits | **Commit card details deviate.** The sha badge is not click-to-copy; the subject and body are not separated (the whole message renders as one paragraph); zone badges are absent. | UI/UX §6.3 (commit card anatomy) | `components/timeline/commit-timeline.tsx:263-266` (sha span, no copy handler), `:276-278` (single `<p>` for the whole message) | Add `navigator.clipboard.writeText` + a "Copied" affordance on the sha; split subject/body; add zone badges. |
| UX-30 | LOW | Explorer | **Viewer gaps.** The header shows the **raw zone id** (`docs`, `stremiium`, `other`) instead of the brand labels (`Docs`, `.stremiium`, `REA`); images are rendered through the code view instead of "centred fit-to-width"; code blocks are not syntax-highlighted and there is **no wrap Toggle**; the binary empty state offers no "Copy path" action. | UI/UX §7.3 (viewer body rules), §9.3 (binary state) | `components/explorer/file-viewer.tsx:590` (`<Badge zone={meta.zone}>{meta.zone}</Badge>`), `:537-540` (markdown else `CodeView` — no image branch), `:300-321` (no wrap toggle), `:519-527` (binary notice without Copy path) | Render `ZONE_META[zone].label`; add an image branch; add a wrap toggle; add the Copy path action to the binary state. |
| UX-31 | LOW | Responsive | **Narrow-viewport chart/panel squeeze.** The churn bar chart fixes `YAxis width={210}` (≈75% of a 360px plot) and the Explorer's default 40% tree pane is ≈192px at 768px once the 240px sidebar is subtracted (spec: 260px at tablet, 280–360px on desktop). | UI/UX §6.1, §6.2 (grid minimums) | `app/page.tsx:879` (`width={210}`), `app/explorer/page.tsx:424` (`md:w-[var(--tree-w,40%)]`), `components/nav/app-shell.tsx:86` (`w-60`) | Make the churn Y-axis width responsive (`width={96}` under `sm`), and set the Explorer tree to a `clamp(260px, 30%, 360px)` default instead of a percentage. |
| UX-32 | LOW | Shell | **Top bar is 56px, not 48px, and has no reduced-motion switch.** The spec's shell is a 48px bar carrying wordmark + Search trigger + theme toggle + **reduced-motion switch**. | UI/UX §6 (global shell) | `components/nav/app-shell.tsx:131` (`h-14`), `:140` (ThemeToggle only) | Set the bar to `h-12` and add a reduced-motion toggle (persisted, and mirrored by `prefers-reduced-motion` in `app/globals.css`). |
| UX-33 | LOW | Dead code | **Unused API endpoints and orphaned data.** `/api/explain` returns **405** on GET (POST-only) and is called by no UI; `/api/graph` is called by no UI (`/councils` reads `/snapshots/graph.json` directly); `public/snapshots/tours.json` holds 3 guided tours with step routes that no view consumes — i.e. the brand's "guided tours" surface (§D6: *Learn → decks, guided tours*) does not exist. | Brand §7.5 (Learn → guided tours); UI/UX §6.5 | `curl /api/explain` → **405**; `grep -rn 'api/graph\|api/explain' app components` → no UI hits; `grep -rn 'tour' app components` → no hits; `public/snapshots/tours.json` | Either surface the tours in `/learn` (a "Guided tours" rail) or remove the endpoint/data. Keep `/api/graph` wired to `/councils`. |
| UX-34 | LOW | States | **Four routes have no route-level `error.tsx`.** Only `/explorer` and the app root define one; `/commits`, `/councils`, `/globe`, `/learn` fall through to the root boundary (a full-shell crash card instead of an in-place retry). | UI/UX §9 (state matrix per view) | `ls app/*/error.tsx` → only `app/error.tsx`, `app/explorer/error.tsx` | Add per-route `error.tsx` files with a local retry that keeps the view's chrome. |
| UX-35 | LOW | A11y / polish | **The theme menu's keyboard focus indicator is background-only** (`focus-visible:bg-secondary focus-visible:outline-none`, no ring). | UI/UX §9.1 (focus ring = 2px ring + 2px offset, keyboard-only via `focus-visible`) | `components/theme-provider.tsx:99` | Add `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`. |
| UX-36 | LOW | Gestures | **Three specified gestures are absent:** pull-to-refresh on the Overview, horizontal swipe on the Learn deck index, and long-press → context Sheet on a tree row. | UI/UX §8.2 (gestures) | no touch/pointer handlers in `app/page.tsx`, `app/learn/page.tsx`, `components/explorer/file-tree.tsx` | Implement the three gestures, or record them as consciously descoped in the §13 rollback plan. |

---

## 2. Spec conformance matrix

Legend: ✅ implemented as specified · ⚠️ implemented with deviations · ❌ missing

### 2.1 Global shell (§6)

| Requirement | Status | Evidence / note |
|---|---|---|
| Sticky top bar 48px | ⚠️ | `h-14` = 56px — `app-shell.tsx:131` |
| Wordmark top-left | ⚠️ | lucide `Hexagon` + "Stremiium Repo Viz"; no S-flow lockup — `app-shell.tsx:88-101` |
| Global Search trigger with `⌘K` hint | ❌ | absent — `app-shell.tsx:131-141` (UX-01) |
| Theme toggle (light/dark/system) | ✅ | `components/theme-provider.tsx:20-24` (custom dropdown, not shadcn `DropdownMenu`) |
| Reduced-motion switch | ❌ | absent (UX-32) |
| Desktop ≥1024: 72px icon rail + tooltips | ❌ | 240px expanded sidebar from 768px — `app-shell.tsx:86` (UX-03) |
| 768–1023: top-bar horizontal nav | ❌ | no horizontal nav — (UX-03) |
| <768: Flo-menu | ⚠️ | FAB + fan-out present, but no scrim, no active dot Badge, items are 44px and label-less (UX-03, UX-14) |
| GSAP 200ms route transitions, skipped under reduced motion | ❌ | no route transition animation exists |
| Skip link + `main` landmark | ⚠️ | present in the shell, but `/learn` duplicates `main#main` (UX-15) |

### 2.2 View 1 — Overview (`/`) (§6.1)

| Requirement | Status | Evidence / note |
|---|---|---|
| 12-col grid, `gap-6`, `max-w-[1400px] px-4 md:px-8` | ⚠️ | single-column `grid gap-6`; `max-w-7xl` (1280) + `md:px-6` — `app/page.tsx:555`, `app-shell.tsx:144` |
| Fluid heading `clamp(1.75rem,3vw,2.5rem)` | ⚠️ | `text-2xl md:text-3xl` (no clamp) — `app/page.tsx:558` |
| Row 1: cobe hero `lg:col-span-8` (≈420px) + title/subtitle + "Start exploring" | ❌ | CSS placeholder sphere; no canvas, no CTA — `app/page.tsx:591-620` (UX-06) |
| Row 1: quick-stats stack `lg:col-span-4` (4 compact cards) | ❌ | stats live in their own row 2 — `app/page.tsx:623` |
| Row 2: 4 stat cards `repeat(auto-fit,minmax(250px,1fr))` | ⚠️ | `grid-cols-2 … lg:grid-cols-4` — 2 columns at 360px where auto-fit yields 1 — `app/page.tsx:623` |
| Row 3: AreaChart `lg:col-span-7` + zone/type Pie `lg:col-span-5` | ⚠️ | Area is full width; the pie is paired with a zone-distribution list at 50/50 — `app/page.tsx:651`, `:728` |
| Row 4: top-churn BarChart, full width | ✅ | `app/page.tsx:848-922` (stacked insertions/deletions) |
| Stat cards are deep links | ❌ | `StatCard` is a plain `Card` — `app/page.tsx:276-291` (UX-27) |
| Chart hover → crosshair + Tooltip | ✅ | `app/page.tsx:693-696`, `:886-889` |
| GSAP staggered fade-in | ❌ | not implemented (reduced-motion handling exists elsewhere) |
| Text takeaway per chart | ✅ | `areaTakeaway`/`typeTakeaway`/`zoneTakeaway`/`churnTakeaway` — `app/page.tsx:510-536` |
| Loading skeleton / error / empty | ✅ | `app/loading.tsx`, `ErrorCard` + `ChartErrorBlock` + `EmptyBlock` — `app/page.tsx:320-384` |

### 2.3 View 2 — Explorer (`/explorer`) (§6.2, §7)

| Requirement | Status | Evidence / note |
|---|---|---|
| 3-pane: tree 280–360px (320 default), viewer flex-1, metadata column 260px (lg+) | ⚠️ | 2 panes only, 40% default; no metadata column — `app/explorer/page.tsx:421-441` (UX-05) |
| Toolbar: breadcrumb + search trigger + `Tree|3D` ToggleGroup + zone chips | ⚠️ | breadcrumb + chips only — `app/explorer/page.tsx:370-418` (UX-05, UX-01) |
| Lazy children on expansion via `/api/tree?path=` | ✅ | `app/explorer/page.tsx:137-180` |
| `rea/` collapsed by default | ✅ | `DEFAULT_EXPANDED = ["", "docs", "prompts", "execution"]` — `app/explorer/page.tsx:25` (but no summary row — UX-24) |
| Virtualized tree (render window, ±5 overscan, memoized rows) | ✅ | hand-rolled windowing, `OVERSCAN = 5` — `components/explorer/file-tree.tsx:218-221` |
| Row height 32px desktop / 40px mobile | ⚠️ | fixed 32px — `file-tree.tsx:26` (UX-14) |
| Indent 12px/depth, capped at 6 with ellipsis | ⚠️ | capped, no ellipsis — `file-tree.tsx:30-31,401-402` (UX-24) |
| Folder child-count Badge | ❌ | (UX-24) |
| Inline 3-row shimmer under a loading folder | ✅ | `file-tree.tsx:174-184` |
| Full keyboard model (`↑↓→← Enter Home End`) + ARIA tree | ✅ | `file-tree.tsx:331-373`, `role="tree"`/`treeitem`/`aria-level`/`aria-setsize`/`aria-posinset` |
| Right-click context menu | ❌ | (UX-05) |
| Breadcrumb: root = repo icon + name, zone segment icon, clickable folders, plain current | ⚠️ | no repo icon, no zone icon — `components/explorer/breadcrumb.tsx:48-61` |
| Breadcrumb >5 segments → ellipsis DropdownMenu | ⚠️ | ellipsis implemented, but it expands inline instead of opening a `DropdownMenu` — `breadcrumb.tsx:68-93` |
| Viewer header: filename + zone Badge + size + last-commit chip + History | ✅ | `components/explorer/file-viewer.tsx:578-625` |
| Viewer actions: Copy path, Raw | ❌ | (UX-05, UX-30) |
| Body: markdown (prose + highlighted code) / code (line numbers + wrap toggle) / images / binary | ⚠️ | markdown ✅ (custom renderer, no prose classes, no syntax highlighting); code ✅ (no wrap toggle); images ❌; binary ✅ — `file-viewer.tsx:291-321,519-540` |
| Mobile: tree = left-edge Sheet (edge swipe) | ❌ | (UX-07) |
| Mobile: thumb-zone action bar | ❌ | (UX-05) |
| Mobile sheet = Sheet, not Dialog | ✅ | custom fixed bottom sheet with drag handle + Esc — `file-viewer.tsx:552-575` |
| Loading: 12 shimmer rows + viewer title/meta/6 lines | ✅ | `app/explorer/loading.tsx`, `app/explorer/page.tsx:479-508` |
| Error boundary for the route | ✅ | `app/explorer/error.tsx` |
| Snapshot-mode banner | ⚠️ | chip only, no banner/link — (UX-21) |

### 2.4 View 3 — Commits (`/commits`, `/commits/[sha]`) (§6.3)

| Requirement | Status | Evidence / note |
|---|---|---|
| Centred timeline `max-w-3xl` | ✅ | `app/commits/page.tsx:190` |
| Sticky left date-rail (desktop) | ❌ | (UX-11) |
| Commit card: initials avatar, mono sha Badge (click = copy), subject + collapsed body, `+X −Y`, N files, relative date, zone badges | ⚠️ | avatar ✅, sha ✅ (no copy), meta ✅, zone badges ❌ — `commit-timeline.tsx:246-293` (UX-11, UX-29) |
| `/commits/[sha]` split pane: 320px file list + unified diff (hunk headers, add/del gutters) | ❌ | route 404s; diff = counts list only (UX-04) |
| Filters: author / zone / date range (`Select`, `Calendar`), `ToggleGroup` | ❌ | only a path-filter input (UX-11) |
| GSAP ScrollTrigger card reveal (stagger ≈0.05, skipped under reduced motion) | ✅ | `commit-timeline.tsx:137-173` (stagger 0.06) |
| Keyboard `j`/`k`/`Enter` | ❌ | (UX-11) |
| "Load older" at rail end | ❌ | (UX-11) |
| Mobile: full-width cards, date rail hidden, filters behind a thumb-zone icon → bottom Sheet | ⚠️ | full-width cards ✅; filter is an inline input, no Sheet (UX-11) |
| Loading skeleton (6 cards) / error / empty | ✅ | `app/commits/loading.tsx` + `TimelineSkeleton`; error card `app/commits/page.tsx:316-339`; empty state `:373-408` |
| Commits-exhausted empty state ("You've reached the first commit") | ❌ | not present (UX-25) |

### 2.5 View 4 — 3D File System (§6.4)

| Requirement | Status | Evidence / note |
|---|---|---|
| Full-bleed `h-[calc(100vh-48px)]` canvas | ❌ | in-flow card — (UX-08) |
| HUD: top-left zone legend | ⚠️ | legend above the canvas, not overlaid (UX-08) |
| HUD: top-right controls (reset view, auto-rotation, density `meshes｜points`) | ❌ | (UX-08) |
| HUD: bottom-centre hint line | ❌ | prose below instead (UX-08) |
| Folders = cluster anchors, files = size-scaled spheres, zone-coloured | ✅ | `components/three/file-system-3d.tsx:100-160` |
| `node_modules`/`.git` excluded; `rea/` collapsed to one summary node | ✅ | snapshot excludes `.git`; `MAX_DIRS_PER_ZONE` cap — `file-system-3d.tsx:80-88` |
| Hover tooltip (path, size, last commit) | ⚠️ | path, type, zone, size — no last commit (minor) |
| Click → select + camera focus; double-click → open in Explorer | ⚠️ | click → `/explorer?path=` ✅; no double-click, no camera lerp focus — `components/three/view3d-wrapper.tsx:110-116` |
| `Esc` clears selection | ❌ | |
| Legend chip click → isolate/dim other zones | ❌ | |
| Degraded points mode + notice chip | ✅ | `file-system-3d.tsx:610-622` (label only) |
| Mobile: one-finger orbit, pinch zoom, two-step tap; HUD chips ≥44px | ⚠️ | OrbitControls ✅; two-step tap ❌; HUD chips <44px (UX-14) |
| Load gate: Spinner + "Preparing scene" | ✅ | `app/explorer/view3d/page.tsx:38-50` |

### 2.6 View 5 — Learn (`/learn`) (§6.5)

| Requirement | Status | Evidence / note |
|---|---|---|
| Index grid `repeat(auto-fit,minmax(280px,1fr))` | ⚠️ | `sm:grid-cols-2 xl:grid-cols-4` — 2 columns at 768px (auto-fit would give 1–2 at 232px each) — `app/learn/page.tsx:121` |
| Card: cover art zone, title, slide-count Badge, progress Badge, "Open deck" Button | ⚠️ | accent bar ✅, title ✅, slide count as plain text (no Badge), no progress Badge, "Open deck" ✅ (36px) — `app/learn/page.tsx:140-175` |
| ≥4 decks | ✅ | 4 decks in `content/decks/decks.json` |
| Deck view: full-screen reveal stage | ✅ | `components/decks/reveal-deck.tsx:341-397` |
| Bottom-left slide counter + bottom-right prev/next ≥44px, notes toggle, fullscreen | ❌ | reveal defaults only (UX-13) |
| `Esc` exits | ✅ | `reveal-deck.tsx:325-339` |
| Keyboard `←/→/Space`, `F`, `N`, `O`; mobile swipe | ⚠️ | reveal provides arrows/space; `F`/`N`/`O` and mobile swipe not handled by the app |
| Reduced-motion → transition `none` | ✅ | `reveal-deck.tsx:269-273` |
| Missing deck → "Deck unavailable" + Back to Learn | ⚠️ | error card with no Back action — `reveal-deck.tsx:376-386` (UX-13) |
| Logo on title slide, full lockup on closing slide | ❌ | (UX-26) |
| Deck loading skeleton | ✅ | `app/learn/loading.tsx` |

### 2.7 View 6 — Councils (`/councils`) (§6.6)

| Requirement | Status | Evidence / note |
|---|---|---|
| Graph canvas flex-1 + right detail panel 360px | ⚠️ | `lg:grid-cols-[7fr_3fr]` → 216px panel at 1024 (UX-12) |
| Graph = SC → CRD → C01–C16 → departments from the mapping JSON | ✅ | `public/snapshots/graph.json` (61 nodes / 60 edges) |
| Nodes coloured per council, sized by department count | ⚠️ | 4 type colours, not per-council — `councils-graph.tsx:305-320` (UX-28) |
| Detail panel: header (ID, name, mission), agent chips grid → `prompts/stremiium/<council>/<agent>/`, member count, "View prompts" Button | ⚠️ | header ✅, "View in Explorer" ✅, agent chips ❌, member count ❌, "View prompts" ❌ — `components/graph/node-details.tsx:131-174` |
| Search filters nodes + auto-zoom | ❌ | (UX-12) |
| `Departments｜Councils` ToggleGroup collapses a level | ❌ | (UX-12) |
| Mobile `Graph｜List` Tabs + bottom-Sheet panel with drag handle | ❌ | (UX-12) |
| Loading skeleton + error + text-alternative table | ✅ | `app/councils/loading.tsx`, `app/councils/page.tsx:159-182`, `:197-262` |
| Graph spinner / panel chip-row skeleton | ✅ | `app/councils/loading.tsx` |

### 2.8 View 7 — Globe (`/globe`) (§6.7)

| Requirement | Status | Evidence / note |
|---|---|---|
| Full-viewport cobe canvas | ⚠️ | `min-h-[70vh]` card — `app/globe/page.tsx:48` |
| Overlays: title chip top-left, zone stat chips bottom-left, "Back to overview" top-right | ⚠️ | title + chips live in one bottom-left glass card; **"Back to overview" missing** (UX-12-ish) |
| Five zone hotspots, palette from brand tokens | ⚠️ | six markers (incl. "other"), colours always the dark palette (UX-10) |
| Drag to rotate; auto-rotate when idle, paused on interaction, off under reduced motion | ✅ | `components/three/globe-hero.tsx:120-230` |
| Marker click → bottom Sheet (file count, top dirs, → `/explorer?zone=…`) | ❌ | markers are not interactive |
| Mobile: chips reflow to one row above the thumb zone; tap marker → Sheet | ❌ | (2-column grid inside a card that overlaps the FAB zone) |
| Canvas placeholder + zone-chip skeleton | ✅ | `app/globe/loading.tsx` |
| WebGL fallback | ✅ | `globe-hero.tsx:285-345` (flat SVG map) |

---

## 3. Undefined CSS variable list (exhaustive)

**Method:** every `var(--X)` and `hsl(var(--Y))` occurrence was extracted from `app/`, `components/`, `lib/` and `content/` and cross-checked against the token declarations in `app/globals.css` (`:root` and `.dark`).

| Variable | Status | Where used / used by | Notes |
|---|---|---|---|
| `--tree-w` | **runtime-scoped, not a static token** | `app/explorer/page.tsx:426-428` (set inline as `{ "--tree-w": "…px" }`) | Intended — consumed at `app/explorer/page.tsx:424` (`md:w-[var(--tree-w,40%)]`). Not a defect, but it is the only variable in the app that is not declared in `globals.css`. |

**Static undefined variables: 0.** Every `var(--…)` reference in the source resolves to a token declared in `app/globals.css`.

**Tokens required by the theme brief (§8.2/§8.3) but absent from `globals.css`** — these would render as invalid if referenced (none are referenced yet, so nothing is broken today, but the theme contract is incomplete):

`--glass-bg` · `--glass-highlight` · `--scene-fog` · `--node-accent`

**Brand namespace tokens required by D1 but absent:** `--st-brand-300` · `--st-brand-500` · `--st-brand-600` · `--st-gold-400` · `--st-gold-500` · `--st-gold-600` · `--st-success` · `--st-warning` · `--st-danger` · `--st-info`

**Zone AA text-variant tokens required by D2 rule 4 but absent:** `--zone-docs-text` · `--zone-prompts-text` · `--zone-execution-text` · `--zone-stremiium-text` · `--zone-rea-text` · `--zone-other-text` (the variants exist only in `lib/brand.ts` as `ZONE_HUES[*].textLight/textDark`, not as CSS tokens)

**Tokens defined in `globals.css` but referenced nowhere** (dead token surface): `--zone-docs`, `--zone-prompts`, `--zone-execution`, `--zone-stremiium`, `--zone-rea`, `--zone-other` are used *only* through the Tailwind `zone.*` aliases (`bg-zone-docs` etc.) — fine — but `--chart-2`, `--chart-4`, `--chart-5` are never used by any chart, and `--accent-foreground`, `--destructive-foreground`, `--popover-foreground`, `--card-foreground`, `--primary-foreground`, `--secondary-foreground` are only reachable through Tailwind aliases. No rendering defect; worth pruning or wiring.

---

## 4. Dead routes / broken links

Every route was requested against a production build of the identical source tree (`next build` → `next start -p 3200`). Note: the shared dev server on `localhost:3000` was intermittently unavailable during the audit (sandbox reset / concurrent rebuilds by other agents), so HTTP status codes were taken from the production build — the same source tree, same route table.

| Path | HTTP | Verdict |
|---|---|---|
| `/` | **200** | OK |
| `/explorer` | **200** | OK |
| `/explorer/view3d` | **200** | OK (but not linked from the Explorer; the spec route is `/explorer?view=3d`) |
| `/commits` | **200** | OK |
| `/commits/abc123def456` | **404** | **BROKEN — the `/commits/[sha]` detail route required by §6.3 does not exist** (UX-04) |
| `/councils` | **200** | OK |
| `/globe` | **200** | OK |
| `/learn` | **200** | OK |
| `/nope` (unknown) | **404** | Route works, but renders the **stock Next.js 404 page** — no brand shell, no way back (UX-16) |
| `/api/stats` | **200** | OK |
| `/api/commits` | **200** | OK |
| `/api/tree` | **200** | OK |
| `/api/file` | **422** | Correct — missing `?path=`; the app always sends one |
| `/api/graph` | **200** | OK but **never called by the UI** (UX-33) |
| `/api/explain` | **405** | **Not reachable from the UI** — GET is rejected; no view calls it (UX-33) |
| `/api/diff/abc123` | **400** | Correct — invalid sha rejected |
| `/snapshots/graph.json` | **200** | OK |
| `/snapshots/tours.json` | **200** | OK but **orphaned** — 3 guided tours no view consumes (UX-33) |
| `/decks/decks.json` | **200** | OK |
| `/decks/deck-01-repo-orientation.md` | **200** | OK |

**Internal link audit (all `href`s in `app/` + `components/`):** `/globe` ✓ · `/explorer` ✓ · `/explorer/view3d` ✓ · `/explorer?path=…` ✓ · `/explorer?path=prompts/stremiium/<council-dir>` ✓ (the path exists in the tree snapshot) · `/commits?path=…` ✓ · `#main` ⚠️ ambiguous on `/learn` (UX-15) · `#file-viewer` ✓.
**No link points at a 404** — the only 404 is the missing `/commits/[sha]` route, which nothing links to yet (so it is a *missing* route rather than a *broken* link).

---

## 5. Breakpoint coverage analysis (360 / 768 / 1024 / 1440)

Tailwind's default screens apply (`sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536→container 1400`). The spec's breakpoints (`<768` / `768–1023` / `≥1024`) map cleanly onto `md`/`lg`, so **no custom screens are needed** — the problem is which elements switch at which breakpoint.

| Width | Shell | Explorer | Overview | Councils | Commits | Learn | Globe / 3D |
|---|---|---|---|---|---|---|---|
| **360** | Flo FAB ✓ (44px items, no scrim) | tree full-width, viewer bottom sheet; tree rows 32px (<40) | stat cards 2-up (~160px each) — spec auto-fit(250px) would be 1-up; churn chart Y-axis eats 210px of a ~296px plot | 1 column ✓; canvas 480px tall for 61 nodes | cards full-width ✓; filter input 36px | 1 column ✓ | globe card `inset-x-4 bottom-4` **overlaps the FAB**; 3D canvas in flow |
| **768** | 240px sidebar appears (spec wants a bottom tab bar) | 40% of (768−240−48)=**192px tree** (spec 260px) | stats 2×2 ✓; charts full width ✓ | 1 column until `lg`; summary table `min-w-[640px]` scrolls horizontally | `max-w-3xl` = full content width ✓ | 2 columns × ~232px (spec min 280px) | globe 70vh ✓ |
| **1024** | 240px sidebar (spec wants a 72px rail) | tree 40% of 736 = **294px** ✓ | stats 4-up (~168px each — tight for `text-3xl` values); charts 50/50 (~352px each) | `lg:grid-cols-[7fr_3fr]` → graph 504px / **panel 216px** (spec 360px) | ✓ | 2 columns ✓ | ✓ |
| **1440** | 240px sidebar, content capped at 1280 | tree 40% of 992 = 397px (spec max 360px) | ✓ | panel 341px ✓ | ✓ | 4 columns × ~290px ✓ | ✓ |

**Conclusion:** no view overflows horizontally at any of the four widths, but three are measurably off-spec: the Explorer tree is **under-width at 768** (192px vs 260px), the councils detail panel is **under-width at 1024** (216px vs 360px), and the overview stat cards are **2-up at 360** where `auto-fit,minmax(250px,1fr)` yields 1. The structural breakpoint problem is the shell (UX-03), not the grids.

---

## 6. Brand compliance summary

| Check | Result |
|---|---|
| ZAR green `#007749` used as chrome primary | ✅ `app/globals.css:15` (`--primary: 157 100% 24%` = `#007749`); dark `#4CC38A` at `:60` (`--primary: 148 49% 43%`) |
| ZAR gold `#FFB612` | ⚠️ **Bound to `--accent`** → leaks into every hover/focus surface (UX-02); used correctly for the satellite dot (`app/page.tsx:314`) and the 3D selection colour (`councils-graph.tsx:319`) |
| Gold as body text | ✅ no `text-accent` on text nodes — only on icons (`file-system-3d.tsx:651`, `view3d-wrapper.tsx:59`). *But* `focus-visible:bg-accent` puts gold behind body text (UX-02) |
| Six zone hues exactly as D2, both themes | ✅ `app/globals.css:32-37` (light) and `:75-80` (dark) match D2 exactly; `lib/brand.ts:31-36` carries the same values plus AA text variants |
| Zone hue usage per surface | ⚠️ light/dark mismatch in the explorer, globe and 3D (UX-09, UX-10); zone hue reused for a graph node type (UX-28) |
| Single token source `lib/brand.ts` | ⚠️ `lib/brand.ts` is respected in `app/` + `components/` (harness V17 passes), **but** `content/decks/decks.json` and `public/decks/decks.json` embed `#2563EB` and the harness does not scan them (UX-18); semantic colours bypass tokens entirely with Tailwind palette classes (UX-17) |
| Type scale (Space Grotesk / Inter / JetBrains Mono) | ⚠️ fonts are wired (`tailwind.config.ts:74-85`, `font-heading` / `font-mono` used), **but the fixed type scale of D3 is not implemented** — sizes are ad-hoc (`text-3xl`, `text-2xl`, `text-[11px]`, `text-[13px]`) and the documented steps (`display-xl 56/1.05`, `h1 32/1.2`, `h2 24/1.3`, `h3 20/1.4`, `body-lg 18/1.6`, `caption 12/1.4 +0.02em`, `mono 13/1.6 tabular-nums`) have no tokens |
| Logo lockup (D4) | ❌ lucide `Hexagon` + "Stremiium Repo Viz" (UX-26) |
| Verb lexicon Explore / Learn / Inspect | ⚠️ 4 usages only; no "Start exploring" / "Inspect commit"; stat cards not deep links (UX-27) |
| Microcopy: sentence case, ≤4-word labels, no emoji in chrome | ✅ mostly; deck content has no emoji ✓; one visible placeholder string (UX-22) |
| "Colour is never the sole encoding" | ✅ zone dots always sit beside a text label; +/− diff counts carry explicit sigils (`diff-viewer.tsx:156-160`) |

---

## 7. Theme compliance summary

| Check | Result |
|---|---|
| `next-themes` with `attribute="class"`, `defaultTheme="system"`, `enableSystem`, `disableTransitionOnChange`, `suppressHydrationWarning` | ✅ `app/layout.tsx:26-33`, `components/theme-provider.tsx` |
| Light/dark/system toggle | ✅ custom dropdown (`theme-provider.tsx:20-24`) — not shadcn `DropdownMenu` as §8.1 specifies |
| Both themes define the full shadcn token set | ✅ `:root` and `.dark` both define all 19 semantic tokens + 5 chart tokens |
| Theme-specific tokens missing | ⚠️ `--glass-bg`, `--glass-highlight`, `--scene-fog`, `--node-accent` (UX-19) |
| `.glass` liquid-glass utility exists and is used | ✅ `app/globals.css:103-108`; used on the overview hero, chart tooltips, commit cards, councils summary, globe card, 3D panels |
| Glass recipe compliance | ⚠️ no top-edge inset highlight; no `--webkit-` blur fallback for Firefox <103 (UX-19) |
| Glass forbidden on dense tables / diffs / deck bodies | ✅ decks use reveal's black theme (solid) ✓; the councils summary table uses a solid `bg-card` ✓; commit diff lists are solid ✓ |
| Charts resolve colours via CSS variables | ✅ all recharts colours are `hsl(var(--chart-N))` / `hsl(var(--border))` / `hsl(var(--muted-foreground))` — no raw hex in chart props |
| Chart tooltips glass-styled | ✅ `app/page.tsx:182,211,231` (`glass rounded-md`) |
| Theme-aware 3D / globe | ❌ `dark: 1` hard-coded, markers always dark-palette (UX-10) |
| Reduced-motion honored | ✅ global CSS gate `app/globals.css:109-118`; per-component checks in the timeline (`commit-timeline.tsx:153`), globe (`globe-hero.tsx:120-130`) and deck (`reveal-deck.tsx:269`) |
| Light-mode coherence | ⚠️ the deck overlay is always the reveal **black** theme (dark slides in light mode); the globe is always dark; zone hues flip inconsistently (UX-09/10/13) |

---

## 8. Empty / loading / error state matrix

| View | `loading.tsx` | `error.tsx` | Empty state | 404 | Snapshot-only | Notes |
|---|---|---|---|---|---|---|
| Overview | ✅ `app/loading.tsx` (mirrors layout) | ✅ root `app/error.tsx` | ✅ `EmptyBlock` per chart | n/a | ✅ badge "Live git data"/"Snapshot data" | good |
| Explorer | ✅ 12 shimmer rows + viewer block | ✅ `app/explorer/error.tsx` | ⚠️ "No repository entries to display." — no icon, no action | ⚠️ stale `?path=` → sentence only, no action | ⚠️ chip, no banner/link | UX-21, UX-25 |
| Commits | ✅ `app/commits/loading.tsx` (5 cards) | ⚠️ in-page error card ✅, no route `error.tsx` | ✅ "No commit history" + regenerate hint | n/a | ⚠️ badge only | UX-34 |
| 3D File System | ✅ Spinner "Preparing 3D file system…" | ✅ error boundary + retry | ✅ fallback card | n/a | n/a | fallback card says "coming in this build" (UX-22) |
| Learn | ✅ `app/learn/loading.tsx` | ⚠️ in-page error ✅, no route `error.tsx` | ❌ empty manifest renders an empty grid | n/a | n/a | UX-13, UX-25 |
| Councils | ✅ `app/councils/loading.tsx` (70/30 mirror) | ⚠️ in-page alert + retry ✅, no route `error.tsx` | ⚠️ "No departments in this snapshot." | n/a | n/a | UX-34 |
| Globe | ✅ `app/globe/loading.tsx` (canvas + chip skeleton) | ⚠️ WebGL fallback ✅, no route `error.tsx` | ❌ | n/a | n/a | UX-34 |
| Global 404 | — | — | — | ❌ no `app/not-found.tsx` | — | UX-16 |

---

## 9. Microcopy, dead controls and polish gaps

**Placeholder / unfinished copy still visible to users**
- `app/page.tsx:614` — *"Placeholder hero — the WebGL scene loads on /globe (client-only, with reduced-motion and degraded-mode fallbacks)."*
- `app/explorer/view3d/page.tsx:101` — *"3D File System — coming in this build"*
- `content/decks/deck-01-repo-orientation.md` (last slide) — *"Explore the live tree: `/explorer` (virtualized tree + ⌘K command palette)"* — advertises the missing palette.

**Dead buttons / links / data**
- `/api/explain` — no UI caller (GET → 405).
- `/api/graph` — no UI caller.
- `public/snapshots/tours.json` — 3 guided tours, no UI consumer.
- `decks.json` `accent` field — never read by the card (which uses `bg-zone-docs`).
- `app/commits/page.tsx:234` — the `<form role="search">` submits with `preventDefault`; there is no search action (a form that cannot submit).
- `components/three/file-system-3d.tsx` — the "Keyboard fallback" `<details>` is the only path to files; the scene's own click-to-open is the primary path but there is no `Esc`-to-clear (spec §6.4) and no legend-chip isolate.

**Focus rings** — present on essentially all interactive elements (`focus-visible:ring-2 focus-visible:ring-ring`), with one exception: the theme menu items (`components/theme-provider.tsx:99`, background-only focus, `outline-none`).

**Hover states** — present on buttons, rows, links and cards. Hovering a file-tree row paints gold (`hover:bg-accent/60`) — see UX-02.

**Responsive charts** — every `ResponsiveContainer` has a fixed-height parent (`h-64`, `h-56`, `h-[22rem]`), which is the correct pattern for mobile (no zero-height collapse). The churn chart's `YAxis width={210}` is the only genuine squeeze at 360px.

**Card padding consistency** — `Card` uses `py-6` + `CardHeader px-6` (shadcn default). The bespoke cards in `/commits` (`glass rounded-lg p-3`), `/explorer` toolbar (`px-3 py-2`), `/learn` cards (`p-4`) and the 3D panels (`p-4`) are inconsistent with it — a minor but visible rhythm mismatch between views.

**Table of contents** — none for the Learn decks (§6.5 `O` overview grid); none for the repo itself.

**Other polish**
- No GSAP route transitions (spec: 200ms fade/slide, skipped under reduced motion).
- No pull-to-refresh / swipe gestures (UX-36).
- The deck overlay has no "Back to Learn" action in its error state.
- The mobile file-viewer sheet has no scrim/backdrop, so the tree behind it stays fully visible and clickable.
- The `git internals` zone renders as "Other" in `ZONE_META` (`lib/brand.ts:49`) while the snapshot has a separate `other` zone — labels are consistent, but the brand's "git internals" naming is lost.

---

## 10. Recommended fix order

1. **UX-01** command palette (⌘K) — the single largest functional gap; also unblocks the Explorer toolbar, the shell and the deck copy.
2. **UX-02** re-bind `--accent` to the mint hover surface and introduce `--st-gold-*` — one-token change that removes every gold surface from the app.
3. **UX-03** implement the dock + rail states of the Flo-menu.
4. **UX-04** add `app/commits/[sha]` with a real unified diff (extend `/api/diff/[sha]` with hunks).
5. **UX-06 + UX-08** mount the real cobe hero on the Overview and give the 3D scene its HUD overlay.
6. **UX-09 + UX-10** unify theme resolution (`resolvedTheme`) across the explorer, globe and 3D — this is what makes the brand's cross-surface test pass.
7. **UX-05 + UX-07** complete the Explorer (metadata column, Copy path/Raw, `Tree|3D` toggle, left-edge tree Sheet).
8. **UX-17 + UX-18 + UX-19** close the token gaps and widen the QA harness scan to `lib/`, `content/` and `public/`.
9. **UX-11 → UX-15** the remaining per-view conformance work.
10. **UX-16, UX-22, UX-25** remove every visible placeholder and dead end (they are cheap and they are the ones a user sees first).

*Audit method: static source review of `viz/` (all 7 views, 9 UI primitives, 6 API routes, 5 snapshots), automated CSS-variable/hex/breakpoint/href extraction, the project's own `scripts/verify-viz.mjs` harness (17 PASS / 0 FAIL / 0 WARN), and HTTP verification of every route against a production build of the identical source tree. No application code was modified.*
