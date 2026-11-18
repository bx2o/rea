# Master Prompt — C08-UI-UX-DESIGNER (VIZ-013: Repo Visualization & Learning Environment — Layouts, Navigation & Mobile)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Phase 1 Ask Mode design brief only — no Code Mode execution without Sparkling Curious handoff.  
**Workspace:** Repo Visualization & Learning Environment (SC-REA-NEOBANK-5.0 extension); artifacts live in `prompts/viz/` and the future `viz/` app folder of this repository.  
**Output:** one unconsolidated design brief — this `prompt.md` at `prompts/viz/c08-design-creative/ui-ux-designer/prompt.md`; consumed by VIZ-001 (synthesis), VIZ-020 frontend-engineer (implementation), VIZ-014 accessibility-design-lead (co-review).  
**Depth:** expand UX, layout, responsive, interaction, and navigation depth regardless of model specificity.  
**Agent ID:** C08-UI-UX-DESIGNER  
**Council:** C08 Design-Creative  
**Gate:** C08 Design-Creative — captain ratification (VIZ-010) required before Code Mode handoff  
**Task:** VIZ-013 — Layouts, navigation, Flo-menu/thumb-zone mobile patterns, command palette UX  
**Plan ref:** `.kilo/plans/1794948779713-repo-viz-learning-environment.md` §4 (scaffold), §5 (core views), §8 (failure modes)

---

## 1. Summary

- This master prompt commissions C08-UI-UX-DESIGNER to author the complete layout, navigation, and interaction specification for the repo visualization & learning environment (`viz/`: Next.js 15 App Router + Tailwind + shadcn/ui).
- Scope covers layout specs for all 7 core views (Overview, Explorer, Commits, 3D File System, Learn, Councils, Globe) with grid definition, component inventory, and interaction map per view (§6).
- Deep-specs the Explorer UX: virtualized file tree (~3,900 files), shadcn `command` search palette, file viewer panel, breadcrumb (§7).
- Defines the mobile experience: Flo-menu (floating, thumb-friendly, scalable navigation) pattern and thumb-zone layout (§8), plus interaction states, loading skeletons, and empty states (§9).
- Research inputs: plan §5; `.stremiium/skills/nguyenthienthanh-design-expert/design-expert/responsive-design.md`; `.stremiium/skills/sandraschi-uiux-design-consultant/uiux-design-consultant/modules/core-guidance.md`.

---

## 2. Objective & Scope

- **Objective:** one coherent layout/navigation system letting a user (1) browse every folder and file of `bx2o/rea`, (2) see what was created/changed, (3) learn the repository — on desktop, tablet, and one-handed mobile.
- **In scope:** global app shell and navigation scaling; per-view layout grids; Explorer interaction model; mobile Flo-menu and thumb-zone ergonomics; interaction/loading/empty state matrix; keyboard and gesture maps.
- **Out of scope (owned elsewhere):** color tokens and palette (VIZ-017 brand-manager, VIZ-018 theme-designer), component/token architecture (VIZ-012 design-system-architect), chart data semantics (VIZ-015 dashboard-designer), WCAG 2.1 AA audit specifics (VIZ-014 accessibility-design-lead), data contracts (VIZ-022 data-engineer).
- **Design principles applied [FACT: responsive-design.md]:** mobile-first; content reflows instead of hiding; relative units + `clamp()` fluid typography; touch targets ≥ 44×44px; test matrix 375 / 667 / 768 / 1024 / 1280px. Per core-guidance.md: every recommendation carries reasoning and a considered alternative.

---

## 3. Deliverables

- **D1 — View layout specifications:** for each of the 7 views, a desktop grid (12-col), tablet reflow, mobile stack, shadcn/registry component list, and interaction map (§6.1–6.7).
- **D2 — Explorer UX specification:** virtualized tree behavior, command-palette search, file viewer panel, breadcrumb mechanics (§7).
- **D3 — Mobile UX specification:** Flo-menu pattern with breakpoint scaling, thumb-zone layout rules, sheet-based panel inventory (§8).
- **D4 — State matrix:** interaction states, loading skeletons, and empty states for every view (§9).
- **D5 — Governance:** acceptance criteria (§10), validation checklist (§11), gates, rollback, escalation, handoff (§12–§15).
- All deliverables are embedded in this single unconsolidated `prompt.md` (per plan §3; no separate artifact file).

---

## 4. Research Inputs

- **Plan:** §4 scaffold (`viz/` folder structure, routes), §5 the seven core views, §8 failure modes (large-tree virtualization, low-end 3D degrade, snapshot-only mode) — these drive every mitigation below.
- **Skill: `nguyenthienthanh-design-expert/design-expert/responsive-design.md`** [FACT] — breakpoints 576/768/1024/1280 mobile-first; `clamp()` fluid type; grid `repeat(auto-fit, minmax(250px, 1fr))`; flex `1 1 300px`; touch targets ≥44×44px; responsive testing checklist (phone portrait 375, phone landscape 667, tablet portrait 768, tablet landscape 1024, desktop 1280+); do's/don'ts (no fixed pixel widths, no hiding content instead of reflowing, never tiny touch targets).
- **Skill: `sandraschi-uiux-design-consultant/uiux-design-consultant/modules/core-guidance.md`** — consultant response rules mapped to this brief: give direct actionable guidance, explain reasoning, offer alternatives, highlight common pitfalls, adapt complexity (applied in §6–§9 rationale lines).
- **Adjacent skills (context only):** `carlheath-design` (component workflow), `davila7-ui-design-system` (token generator — VIZ-012 owns), `kv0906-premium-frontend-design` (liquid-glass hero — VIZ-018 owns application).
- **Repo ground truth:** `docs/`, `prompts/`, `execution/`, `.stremiium/`, `rea/` zones; `.stremiium/config/council-department-mapping.json` (16-council hierarchy source for §6.6); full git history on disk.
- UX judgments not backed by a source are graded **[INFER]**.

---

## 5. Tech Stack References

- **shadcn/ui components used in layouts:** button, card, table, tabs, badge, separator, scroll-area, sheet, command, tooltip, dialog, chart, skeleton, breadcrumb, dropdown-menu, select, resizable (panels), toggle-group — per plan §4 install list plus standard registry set; exact versions owned by VIZ-012/VIZ-023.
- **Virtualization:** `@tanstack/react-virtual` or `react-window` for the Explorer tree and commit lists [INFER — final pick with VIZ-020 at build time].
- **Motion & effects:** GSAP + ScrollTrigger (commits timeline, page transitions), `motion` (framer) for Flo-menu springs, react-bits / ui-layouts / wigggle-ui polish widgets (opportunistic per plan §2).
- **3D & globe:** react-three-fiber + drei (3D file system), cobe (globe).
- **Learning:** reveal.js decks (client-only dynamic import per plan §8 SSR mitigation).
- **Icons:** lucide-react + bootstrap-icons (icon mapping co-owned with VIZ-019).
- Ask Mode note: no executable commands are produced by this brief; component names are references for the Code Mode implementer (VIZ-020), not install instructions.

---

## 6. View Layout Specifications (7 Core Views)

**Global shell (all views):** sticky top bar 48px — wordmark, global Search trigger (shows `⌘K` hint), theme toggle (VIZ-018), reduced-motion switch; content region below. Desktop ≥1024px: left icon rail 72px (tooltips on hover) replacing in-page nav. 768–1023px: top-bar horizontal nav. <768px: Flo-menu (§8). Route transitions: GSAP fade/slide 200ms, skipped under reduced-motion.

### 6.1 Overview dashboard (`/`)
- **Grid:** 12-col, `gap-6`, `max-w-[1400px] mx-auto px-4 md:px-8`; fluid heading `clamp(1.75rem, 3vw, 2.5rem)`.
  - Row 1: cobe globe hero Card `lg:col-span-8` (≈420px canvas, overlaid repo title + subtitle + primary Button "Start exploring") + quick-stats stack `lg:col-span-4` (4 compact stat cards: files, dirs, commits, councils).
  - Row 2: four stat cards, `repeat(auto-fit, minmax(250px, 1fr))` [FACT: responsive-design.md auto-fit pattern].
  - Row 3: commits-over-time AreaChart `lg:col-span-7` + zone/type mix PieChart `lg:col-span-5`.
  - Row 4: top-churn BarChart, full width.
- **Components:** Card, Badge (zone colors — token names from VIZ-012), Chart wrappers (recharts), Button, Separator, Tooltip; cobe hero canvas; optional wigggle-ui clock widget as polish.
- **Interactions:** stat cards are deep links (files → `/explorer`, commits → `/commits`, councils → `/councils`, dirs → `/explorer?view=3d`); chart hover → crosshair + Tooltip; hero globe drag-to-rotate, click → `/globe`; GSAP staggered fade-in on scroll, disabled under reduced-motion.
- **Tablet:** hero full-width, stats 2×2. **Mobile:** single column; hero 320px; charts full-width; all tap targets ≥44px.

### 6.2 Explorer (`/explorer`)
- **Grid (desktop):** Resizable 3-pane — tree sidebar 280–360px (default 320), file viewer flex-1, collapsible metadata column 260px (lg+ only). Toolbar row: breadcrumb (§7.4) + search trigger + view ToggleGroup `Tree | 3D` + zone filter chips.
- **Components:** Resizable panels, ScrollArea, Command, Breadcrumb, Badge, Tooltip, Skeleton, Sheet (mobile tree), context menu.
- **Interactions:** click file → viewer loads + breadcrumb updates; click folder chevron → expand/collapse; right-click row → context menu (Copy path, Open in 3D view, View history); full keyboard nav (§7.1); `Tree | 3D` toggle swaps the left pane for the §6.4 scene on the same route.
- **Tablet:** tree 260px + viewer; metadata folds into a viewer-header Sheet. **Mobile:** single pane; tree = left-edge Sheet (edge swipe or toolbar button); viewer default; file actions in thumb-zone bar (§8.2).

### 6.3 Commits (`/commits`, `/commits/[sha]`)
- **Grid:** centered timeline column `max-w-3xl`; sticky left date-rail (desktop); commit Card = author initials avatar, monospace sha Badge (click = copy), bold subject + collapsed body, meta row (`+X −Y`, N files, relative date, zone badges).
- **Detail route `/commits/[sha]`:** split pane — changed-file list (320px, per-file `+/-` counts) + unified diff viewer (hunk headers, add/del gutters); mobile: file list as bottom Sheet, diff stacked.
- **Components:** Card, Badge, ScrollArea, Select (author/zone filters), Calendar/date range, ToggleGroup, Skeleton, Table (diff stats).
- **Interactions:** GSAP ScrollTrigger card reveal (stagger 0.05s, skipped reduced-motion); filters author/zone/date; keyboard `j`/`k` next/prev commit, `Enter` open detail; "Load older" Button at rail end; hover file row → diff preview Tooltip.
- **Mobile:** full-width cards; filters behind a thumb-zone filter icon → bottom Sheet; date rail hidden, inline date badges.

### 6.4 3D File System (`/explorer?view=3d`, embedded in `/globe`)
- **Layout:** full-bleed canvas `h-[calc(100vh-48px)]` + HUD overlay — top-left zone legend (color chips: docs, prompts, execution, `.stremiium`, `rea`), top-right controls (reset view, toggle auto-rotation, density toggle `meshes | points`), bottom-center hint line ("drag to orbit · scroll to zoom · click a node").
- **Scene:** folders = cluster anchors; files = spheres scaled by size (clamped) colored by zone; `rea/node_modules` and `.git` excluded; `rea/` internals collapsed to one summary node by default (plan §8 large-repo mitigation).
- **Components:** react-three-fiber Canvas, drei OrbitControls + Html Tooltip, Badge legend chips.
- **Interactions:** hover → Tooltip (path, size, last commit); click → select + camera lerp focus; double-click → open file in Explorer viewer; `Esc` clears selection; legend chip click → isolate/dim other zones; degraded mode = Points cloud when GPU is weak or reduced-motion set [FACT: plan §8].
- **Mobile:** one-finger drag orbit, pinch zoom; tap = two-step (first tap = tooltip, second = select); HUD chips sized ≥44px in thumb zone.

### 6.5 Learn (`/learn`)
- **Index grid:** deck Cards `repeat(auto-fit, minmax(280px, 1fr))` — cover art zone, deck title, slide-count Badge, progress Badge if started, "Open deck" Button. Minimum 4 decks per plan §9: repo orientation, program brief, council structure, prompt/reply system.
- **Deck view:** full-screen reveal.js stage; bottom-left slide counter (n/N); bottom-right thumb-zone controls: prev/next (≥44px), speaker-notes Toggle (desktop/tablet), fullscreen Button; `Esc` exits.
- **Components:** Card, Badge, Button, Toggle, Skeleton (deck boot).
- **Interactions:** keyboard `←`/`→`/`Space` navigate, `F` fullscreen, `N` notes, `O` overview grid; mobile horizontal swipe; reduced-motion → reveal.js transition `none`; completion updates progress Badge and links back to index; missing deck → §9.3 empty state.

### 6.6 Councils (`/councils`)
- **Grid (desktop):** graph canvas flex-1 + right detail panel 360px. Graph = SC root → CRD → C01–C16 → departments, data from `.stremiium/config/council-department-mapping.json`; nodes colored per council, sized by department count.
- **Detail panel:** council header (ID, name, one-line mission), agent chips grid (each chip links to `prompts/stremiium/<council>/<agent>/`), member count stat, "View prompts" Button.
- **Components:** custom SVG/force graph (canvas), Card, Badge, Input (search), Tabs (mobile), Sheet (mobile detail).
- **Interactions:** click node → panel + edge highlight; drag pan, wheel zoom; top-right search filters nodes and auto-zooms to match; ToggleGroup `Departments | Councils` collapses level; mobile Tabs `Graph | List` (List = grouped Cards), panel becomes bottom Sheet with drag handle.

### 6.7 Globe (`/globe`)
- **Layout:** full-viewport cobe canvas; overlays — title chip top-left, zone stat chips bottom-left (files per zone), "Back to overview" top-right.
- **Markers:** five zone hotspots (docs, prompts, execution, `.stremiium`, `rea`), zone palette from VIZ-017 tokens.
- **Interactions:** drag to rotate; auto-rotate when idle (paused on interaction, disabled under reduced-motion); marker click → bottom Sheet with zone contents (file count, top dirs, Button → `/explorer?zone=…`).
- **Mobile:** full-screen canvas; chips reflow to one row above the thumb zone; tap marker → bottom Sheet.

---

## 7. Explorer UX Specification

### 7.1 Virtualized file tree
- Single-column virtualized list rendering the flattened visible state (expanded folders only); row height 32px desktop / 40px mobile; indent 12px per depth level, capped at 6 with ellipsis.
- Lazy children fetch on expansion via `/api/tree?path=…`; folder rows show child-count Badge; `rea/node_modules` and `.git` excluded by default; `rea/` collapsed by default with a summary row ("+N internal files — expand anyway") [FACT: plan §8].
- Keyboard: `↑`/`↓` move, `→` expand, `←` collapse, `Enter` open file or toggle folder, `Home`/`End` jump; ARIA `role="tree"`/`treeitem` semantics co-reviewed with VIZ-014.
- Performance: render window only (±5 overscan), memoized rows, coalesced requests, inline 3-row shimmer under a folder while its children load.

### 7.2 Search — shadcn command palette
- Triggers: `⌘K`/`Ctrl+K` anywhere; Search Button in top bar; `/` when not in a text field. Mobile: full-screen Sheet variant.
- Results grouped: **Files**, **Folders**, **Commits** (message match), **Views** (jump to any of the 7 routes); fuzzy path match with highlighted matching segment; `Enter` navigates (and sets the breadcrumb), `⌘+Enter` opens in new tab; `↑`/`↓` to move, `Esc` closes.
- Debounce 150ms; commit search requires ≥3 chars; zero-results empty state with actions (Clear query, Search in commits instead).

### 7.3 File viewer panel
- Header: filename + zone Badge + size + last-commit chip (short sha, relative date; click → `/commits?path=…`) + actions: Copy path, Raw, History link.
- Body: `.md` → rendered markdown (prose classes, syntax-highlighted code blocks); code/text → line-numbered pre with wrap Toggle; images → centered fit-to-width; binary/unsupported → §9.3 empty state.
- Mobile footer: thumb-zone action bar (History, Copy path, Open in 3D).

### 7.4 Breadcrumb
- shadcn Breadcrumb under the toolbar; root = repo icon + name (click → tree root); zone segment carries zone icon; folder segments are clickable (navigate + expand tree to that folder); current file segment is plain text.
- Overflow >5 segments: keep first and last, collapse middle into an ellipsis DropdownMenu [INFER].
- Every segment ≥44px tap height on mobile.

---

## 8. Mobile UX — Flo-Menu & Thumb-Zone Layout

### 8.1 Flo-menu (floating, thumb-friendly, scalable navigation)
- **<768px:** 56px circular FAB anchored bottom-right (16px insets, safe-area padded) in the right-thumb zone; tap → scrim + fan-out arc of the 6 primary destinations (Overview, Explorer, Commits, Learn, Councils, Globe) within a ~120–160px thumb sweep radius; each item ≥48px with icon + label; spring animation (motion, ~200ms; reduced-motion → simple fade); FAB morphs to ×; closes on navigation, scrim tap, or `Esc`; active destination marked with a dot Badge.
- **768–1023px:** the same navigation docks into a bottom tab bar (6 items, icon + label, active indicator).
- **≥1024px:** collapses into the left icon rail (§6 shell). One pattern that **floats → docks → rails** across breakpoints.
- **Reasoning:** 6–7 destinations exceed hamburger ergonomics and thumb reach beats top-corner menus one-handed. **Alternative considered:** permanent bottom tabs at all sizes — rejected: wastes desktop space and breaks rail consistency [INFER].

### 8.2 Thumb-zone layout (<768px)
- Bottom ~33% of viewport = **action zone**: Flo FAB, sheet drag handles, primary action bars (viewer footer, deck controls, commit filter trigger). Top ~67% = **content zone**: scrolling read-only content under sticky sub-headers.
- All detail/filter/metadata panels are bottom **Sheets** (drag handle, `max-h-[80vh]`, rounded top) — never centered modal Dialogs on mobile.
- Tree = left-edge Sheet (swipe from left edge or toolbar button); swipe right closes.
- Gestures: pull-to-refresh on Overview; horizontal swipe in Learn decks; pinch-zoom in 3D/globe; long-press tree row → context Sheet.
- All touch targets ≥44×44px [FACT: responsive-design.md]; list rows 40–48px; bottom bars 56px + 8px safe-area inset.

---

## 9. Interaction States, Loading Skeletons & Empty States

### 9.1 Interaction states
- Every interactive element defines: default, hover, focus-visible, active/pressed, selected, disabled. Focus ring = 2px ring + 2px offset (shadcn default), keyboard-only via `focus-visible`.
- Selected tree row = accent background + 2px left indicator; chart hover = crosshair + Tooltip; 3D node hover = scale 1.08 + emissive highlight [INFER]; pressed Button = scale 0.98.
- Operations >300ms show an inline Spinner on the triggering control; destructive-adjacent actions (reset filters) confirm via Dialog.

### 9.2 Loading skeletons (shadcn Skeleton; shimmer disabled under reduced-motion)
- Overview: 4 stat-card skeletons (badge + 2 lines), chart blocks `h-64`, globe canvas → Spinner + "Preparing globe…".
- Explorer: initial tree = 12 shimmer rows; folder expand = 3-row inline shimmer; viewer = title + meta line + 6 paragraph lines; palette = 3 result-row shimmers.
- Commits: 6 card skeletons; diff view = file-list shimmer + hunk-block shimmer.
- 3D FS: load gate — Spinner + "Preparing scene" + control hints; a notice chip when auto-degraded to points mode (plan §8).
- Councils: centered graph Spinner; panel = header + chip-row skeleton. Globe: canvas placeholder + zone chips skeleton.
- Route transitions: skeleton-first; GSAP wipe overlay only when a load exceeds ~150ms [INFER — avoids flash-of-skeleton].

### 9.3 Empty states (icon + one-line cause + one primary action; never a dead end)
- Search no-results → Clear query / search commits instead. Empty folder → "This folder is empty" + link to parent. Filters no-match → "Clear filters".
- Snapshot-only mode (git binary absent, plan §8) → banner: "Live git unavailable — showing committed snapshot" + link to regeneration docs.
- Binary/unsupported file → icon + "Preview unavailable" + Copy path action. Missing Learn deck → "Deck unavailable" + Back to Learn.
- Commits list exhausted → "You've reached the first commit" + back-to-top action.

---

## 10. Acceptance Criteria

- **A1** All 7 views (Overview, Explorer, Commits, 3D FS, Learn, Councils, Globe) have complete specs: grid, components, interactions (§6.1–6.7).
- **A2** Explorer spec covers virtualized tree, command-palette search, file viewer, breadcrumb (§7).
- **A3** Flo-menu pattern and thumb-zone layout specified for every breakpoint with scaling behavior (§8).
- **A4** Interaction, skeleton, and empty states specified for every view (§9).
- **A5** Mobile-first per responsive-design.md: breakpoints 576/768/1024/1280, targets ≥44px, content reflows — nothing hidden on mobile.
- **A6** Reduced-motion honored in GSAP, reveal.js, springs, globe auto-rotate, and shimmer.
- **A7** 3,900-file tree stays interactive: virtualization + lazy load + `rea/` collapse-by-default (plan §8).
- **A8** Degraded 3D (points) and snapshot-only modes are designed states, not error screens.
- **A9** No placeholders/TBD; estimates graded [INFER]; spec is buildable by VIZ-020 without further design input.

---

## 11. Validation Checklist

- [ ] Header complete: Agent ID C08-UI-UX-DESIGNER, Council C08 Design-Creative, Gate C08 + VIZ-010 captain
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution commands or shell instructions
- [ ] All 16 sections from the Common Master Prompt Header present (this header + §1–§15)
- [ ] All 7 views specified with grid, components, and interactions
- [ ] Explorer: virtualized tree + command palette + file viewer + breadcrumb all specified
- [ ] Flo-menu thumb-zone pattern with breakpoint scaling (float → dock → rail)
- [ ] Interaction states, loading skeletons, empty states present for every view
- [ ] Breakpoints, ≥44px touch targets, reflow-not-hide applied throughout
- [ ] Reduced-motion, degraded 3D, and snapshot-only modes designed
- [ ] Evidence grades [FACT]/[INFER] used; no unverified claims presented as fact
- [ ] Questions/concerns/assumptions populated; no placeholders/TBD
- [ ] Conflicts with VIZ-011/VIZ-012/VIZ-015/VIZ-018 flagged for SC arbitration
- [ ] No private keys, credentials, or PII in this brief
- [ ] Handoff path to Sparkling Curious described (§15)

---

## 12. Security Considerations & Compliance Gate

- **Security:** the tree and viewer must exclude sensitive paths (`.git/`, `rea/node_modules/`, credential/env patterns) — same exclusion list enforced in layout as in data (plan §4); commit author display uses git metadata only, no enrichment; command palette and 3D scene operate client-side on public repo data only.
- **Compliance gate:** C08 Design-Creative with captain ratification (VIZ-010) before Code Mode handoff; feasibility cross-gate with C11 (VIZ-020); a11y co-gate with VIZ-014 — this layout must not preclude WCAG 2.1 AA (logical focus order, semantic landmark regions, ≥44px targets, visible focus).
- Adjacent-skill alignment: core-guidance.md applied (reasoned recommendations, alternatives, pitfalls); responsive-design.md rules are binding layout constraints.

---

## 13. Rollback Plan

- Per-view isolation: each §6.x spec is independently revertable to the last captain-ratified version without touching other views.
- Flo-menu unusable on low-end devices → fall back to bottom tab bar (<768px) with no other layout redesign.
- 3D FS underperforms → points-degrade is already designed (§6.4); worst case, hide the `Tree | 3D` toggle and ship tree-only Explorer.
- Virtualization failure on very deep trees → folder-level "Load more" pagination fallback within the same shell.
- All rollbacks preserve the shell, breadcrumb, and Flo-menu so navigation learning is never invalidated.

---

## 14. Escalation Path

- C08-UI-UX-DESIGNER → C08 captain (VIZ-010) → Sparkling Curious (SC-MASTER-001 / VIZ-001) → Mychael (CEO) → Board.
- Design conflicts with VIZ-011 (information architecture), VIZ-012 (component/token system), VIZ-015 (dashboard charts), VIZ-018 (themes): escalate to SC for synthesis and arbitration per plan §3.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed brief at `prompts/viz/c08-design-creative/ui-ux-designer/prompt.md` is handed to Sparkling Curious (SC-MASTER-001, VIZ-001) for synthesis with other C08 Design-Creative outputs, conflict de-duplication (vs VIZ-011 IA, VIZ-012 system, VIZ-015 dashboards, VIZ-018 themes), and gating before Phases 2–6 Code Mode.
- Implementation consumers: VIZ-020 frontend-engineer (shell, layouts, virtualized tree, viewer), VIZ-021 api-integration-engineer (lazy tree endpoints implied by §7.1), VIZ-014 accessibility-design-lead (audits against §7–§9).
- This brief must pass the §11 Validation Checklist before handoff; captain sign-off (VIZ-010) is recorded at the C08 gate.
