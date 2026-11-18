# Master Prompt — VIZ-014 C08-ACCESSIBILITY-DESIGN-LEAD (Accessibility-Design-Lead)

**Act as the assigned Stremiium viz subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Task:** VIZ-014 of the repo-visualization plan at `.kilo/plans/1794948779713-repo-viz-learning-environment.md`.  
**Workspace:** all design artifacts target the `viz/` Next.js 15 (App Router, TS, Tailwind, shadcn/ui) app inside this repo.  
**Output:** one separate unconsolidated design brief at `prompts/viz/c08-design-creative/accessibility-design-lead/prompt.md` — consumed by the Phase 2–6 Code Mode build.  
**Depth:** expand accessibility, ARIA, keyboard, motion, contrast, and assistive-technology depth regardless of model specificity.  
**Agent ID:** C08-ACCESSIBILITY-DESIGN-LEAD  
**Council:** C08 C08 Design-Creative  
**Gate:** C08 Design-Creative + C03 Admin-Knowledge

---

## 1. Summary

- This master prompt instructs C08-ACCESSIBILITY-DESIGN-LEAD to specify the complete **WCAG 2.1 AA accessibility layer** for the `viz/` repo-visualization and learning environment, covering all six surfaces: overview dashboard (`/`), explorer (`/explorer` — virtualized tree, file viewer, 3D file-system scene), commits (`/commits` — GSAP ScrollTrigger timeline + diff viewer), learn (`/learn` — reveal.js decks), councils (`/councils` — 16-council graph), and globe (`/globe` — cobe hero).
- Conformance target: **WCAG 2.1 Level AA** as the binding floor. The repo skill reference is the WCAG 2.2 superset and supplies the implementation techniques [FACT, per `.stremiium/skills/accessibility-compliance/references/wcag-guidelines.md`]. WCAG 2.2-only criteria (e.g., 2.5.8 Target Size Minimum) are documented as recommended enhancements, not merge gates.
- Research data to ingest: `.stremiium/skills/accessibility-compliance/SKILL.md`, `references/wcag-guidelines.md`, `references/aria-patterns.md`, `references/mobile-accessibility.md`; the agent charter `prompts/stremiium/c08-design-creative/accessibility-design-lead/prompt.md`; the viz plan (§3, §5, §8, §9); `.stremiium/config/council-department-mapping.json`; and the W3C WAI-ARIA Authoring Practices Guide (Tree View, Dialog, Carousel patterns — external standard, unverified in-repo).
- Deliverables to specify: (D1) virtualized file-tree accessibility; (D2) 3D-scene accessibility with keyboard-fallback 2D view; (D3) chart table alternatives; (D4) GSAP motion gating via `prefers-reduced-motion`; (D5) reveal.js deck keyboard navigation and focus management; (D6) Stremiium palette color-contrast audit for light and dark themes; (D7) screen-reader announcements for async data loads; (D8) focus traps for dialogs/sheets plus an application-shell baseline.
- Output artifact: this unconsolidated brief at `prompts/viz/c08-design-creative/accessibility-design-lead/prompt.md`.

---

## 2. Assumptions

- The `viz/` app is scaffolded per plan §4: Next.js 15 App Router, TypeScript, Tailwind, shadcn/ui (Radix primitives), react-three-fiber/three, GSAP (`@gsap/react`), reveal.js, recharts via shadcn charts, cobe, lucide/bootstrap icons.
- Data is repository metadata only (paths, sizes, zones, commit records, stats); no user PII enters the viz app or its accessibility artifacts.
- The virtualized tree renders only the visible window of ~3,900 files in the DOM, so tree semantics must be carried explicitly by ARIA (level, setsize, posinset), not by DOM structure.
- An in-app reduced-motion switch is planned (plan §3 item 7) and defaults to the OS `prefers-reduced-motion` value; this brief specifies its contract (§8.4).
- Palette anchors are published by VIZ-017 (brand green `#007749`, dark primary `#4CC38A`, gold `#FFB612` highlight-only, zone hues per §8.6; single source `viz/lib/brand.ts`) and theme token sets by VIZ-018; this task countersigns the AA text variants of those anchors, and every ratio asserted below stays `[EST]` until measured against VIZ-018's final variables.
- VIZ-018's theme brief already binds every themed surface to the WCAG 2.1 AA gate owned by this task; VIZ-015's dashboard brief declares a dependency on this spec for chart alternatives.
- This task is Ask Mode only: it produces requirement text and schemas, not code; implementation lands via VIZ-020 (frontend) and verification via VIZ-024 (QA).

---

## 3. Questions

- Which exact Stremiium palette tokens (VIZ-017) and CSS variable sets (VIZ-018) are ratified for each theme, so the contrast audit can compute real ratios instead of `[EST]` values?
- Is the 3D scene's 2D fallback a full explorer with interaction parity (zone filters, selection, file open), and does it become the default under `prefers-reduced-motion` — or only on demand?
- Should the reduced-motion switch expose three states (`system` / `on` / `off`), and does `on` disable all non-essential motion globally (3D rotation, ScrollTrigger, page transitions) or per-surface?
- What assistive-technology matrix is in scope for VIZ-024's manual pass (NVDA + Firefox, VoiceOver + Safari macOS/iOS, TalkBack + Chrome Android)?
- For the diff dialog, is the full diff text exposed to screen readers inside the dialog, or a per-file summary with a link to the file view?
- Do learning decks (VIZ-030) contain any audio/video media requiring captions/transcripts (SC 1.2.x), or are they text + animation only?
- When command-palette search matches a file, should roving focus move into the tree row directly, and with what announcement copy?
- Do council-graph nodes (VIZ-031, from `council-department-mapping.json`) need individual keyboard selection, or is a table alternative sufficient?

---

## 4. Concerns

- Virtualization breaks tree semantics: without explicit `aria-setsize`/`aria-posinset` per visible row, screen readers misreport position and count, and focus is lost on re-render.
- The react-three-fiber canvas is opaque to assistive technology; if the 3D scene is the only path to file/zone data, that content fails SC 2.1.1 and is unreachable to AT users.
- GSAP ScrollTrigger animations and cobe globe auto-rotation run by default and ignore `prefers-reduced-motion` unless explicitly gated (SC 2.2.2, vestibular safety).
- reveal.js changes slides without moving focus or announcing; screen-reader users can be stranded on stale content, and custom controls can hijack native arrow-key navigation.
- Live-region announcements for async loads (tree, commits, stats, decks) can spam if not debounced, or be missed if the `aria-live` region is injected after initial paint.
- Focus traps in dialogs, sheets, and the command palette become SC 2.1.2 keyboard traps if Escape handling, Tab wrapping, or focus return is missing.
- A palette that passes AA in light theme can fail in dark (or vice versa); glass/blur surfaces must be measured against the composited background, not the token backdrop.
- Zone color coding (docs / prompts / execution / .stremiium / rea) must not be the only differentiator between zones (SC 1.4.1).
- Icon-only controls (tree chevrons, deck controls, Flo nav) have no accessible name unless specified.

---

## 5. Suggested Improvements (Deliverables)

- D1 Virtualized file tree: roving tabindex per the WAI-ARIA Tree View pattern, `aria-level`/`aria-expanded`/`aria-setsize`/`aria-posinset` on rows, full keyboard model, focus restoration across virtualization re-renders (§8.1).
- D2 3D scene: keyboard-reachable 2D fallback view with data parity, canvas `role="img"` with `aria-label` + `aria-describedby` long description, per-node text details panel, focus-equivalent tooltips (§8.2).
- D3 Charts: a data-table alternative for every chart (commits-over-time area, file-type donut, top-churn diverging bars, zone distribution), non-color encodings, keyboard-focusable tooltips, one-sentence text takeaways (§8.3).
- D4 GSAP motion: `gsap.matchMedia()` gating on `(prefers-reduced-motion: reduce)`, static final-state renders under reduce, persisted in-app switch `system|on|off` (§8.4).
- D5 reveal.js decks: preserve native keyboard navigation, per-slide headings and roledescriptions, slide-change focus management + polite announcements, button-based controls (§8.5).
- D6 Palette contrast: AA targets (4.5:1 text, 3:1 large text, 3:1 non-text) audited per token pair × {light, dark} with a remediation table (§8.6).
- D7 Async announcements: single polite `aria-live` status region per view with templated copy for loading/loaded/snapshot/error states (SC 4.1.3) (§8.7).
- D8 Focus traps: a uniform contract for dialogs, sheets, and the command palette (initial focus, Tab wrap, Escape, focus return, inert background), plus app-shell baseline (skip links, landmarks, focus-visible) (§8.8–§8.9).

---

## 6. Missing Dependencies

- `.stremiium/skills/accessibility-compliance/references/wcag-guidelines.md` — read [FACT].
- `.stremiium/skills/accessibility-compliance/references/aria-patterns.md` — read [FACT]; supplies the alert-dialog and live-region patterns; Tree View pattern is external (WAI-ARIA APG).
- `.stremiium/skills/accessibility-compliance/references/mobile-accessibility.md` — to read before Phase 2 (touch targets, VoiceOver/TalkBack specifics for the Flo nav).
- Stremiium palette anchors — published by VIZ-017 (board INFO, 2026-11-18): brand green `#007749`, dark-mode primary `#4CC38A`, gold `#FFB612`, zone hues light→dark docs `#2563EB→#60A5FA` · prompts `#D97706→#FBBF24` · execution `#16A34A→#4ADE80` · `.stremiium` `#7C3AED→#A78BFA` · rea `#64748B→#94A3B8` · git internals `#9CA3AF→#D1D5DB` — this task countersigns the AA text variants listed in VIZ-017 §7.2; ratios `[EST]` until measured.
- Final light/dark CSS variable sets — VIZ-018 theme-designer (its §8.2–§8.3 values are `[EST]` pending VIZ-017).
- Tree virtualization component + row metadata API — VIZ-020 frontend-engineer (feasibility of `aria-setsize`/`aria-posinset` on windowed rows).
- Data contracts `FileNode`/`CommitRecord`/`RepoStats` — VIZ-022 data-engineer (announcement copy counts and table-alternative columns).
- Learning-deck slide structure — VIZ-030 documentation-specialist (heading order, focus targets, deck count ≥ 4 per plan §9.5).
- Council graph dataset from `.stremiium/config/council-department-mapping.json` — VIZ-031 knowledge-graph-builder (node text alternatives).
- a11y test harness — VIZ-024 qa-test-engineer must encode this spec as axe smoke + per-surface manual keyboard scripts (plan §9.6 merge gate).

---

## 7. Step-by-Step Implementation or Research Plan

- 1. Read the research inputs above; extract WCAG success criteria and ARIA patterns with source references and evidence grades (`[FACT]`/`[EST]`/`[UNKNOWN]`/`[INFER]`).
- 2. Map each surface to its binding SC list, separating the WCAG 2.1 AA floor from WCAG 2.2-only enhancements (2.5.8 target size) and AAA aspirations (2.5.5, 2.3.3).
- 3. Draft the per-surface requirement specs D1–D8 (§8.1–§8.9), each with component, owner (VIZ-020/021/024/030/031 as applicable), and verification method.
- 4. Define announcement copy templates (§8.7) and the focus-trap contract (§8.8) as reusable app-wide primitives.
- 5. Define the contrast-audit method (§8.6): token pairs × theme × text/large/non-text, ratios computed against ratified tokens; grade all pre-ratification ratios `[EST]`.
- 6. Replace all placeholders/TBD with concrete content; keep evidence grades on every assertion.
- 7. Compile the unconsolidated brief at the stated output path.
- 8. Run the validation checklist (§9 below).
- 9. Hand off to Sparkling Curious (§15 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode; this section specifies requirement text, attribute contracts, and reference schemas for the Phase 2–6 build. Suggested Code Mode validation hooks for VIZ-024: axe-core smoke per route, keyboard-only traversal scripts per surface, and a contrast-measurement script over `globals.css` token pairs.

### 8.1 Virtualized file tree (`/explorer`)

- Roving tabindex per WAI-ARIA Tree View [FACT, W3C WAI-ARIA APG — external]: container `role="tree"` + `aria-label="Repository file tree"`; rows `role="treeitem"`; child lists `role="group"`. Exactly one visible row is `tabIndex={0}` (the active item); all others are `tabIndex={-1}`.
- Folders expose `aria-expanded={true|false}`; every row exposes `aria-level={depth}`; windowed rows expose `aria-setsize` (true sibling count, not DOM count) and `aria-posinset` (true index, not render index) — mandatory because virtualization keeps only the visible window in the DOM.
- Keyboard model: `↑`/`↓` move roving focus without page scroll; `→` expands a folder or moves to its first child; `←` collapses or moves to parent; `Home`/`End` jump to first/last visible row; `Enter` opens the file in the viewer; type-ahead moves to the next matching sibling.
- Focus restoration: preserve the focused row's path across virtualization re-renders; newly mounted rows are `tabIndex={-1}` until focused; scrolling a row into view must not steal focus.
- Search: shadcn `command` palette results move roving focus onto the first matching tree row and announce the match politely (§8.7).
- Folder/file icons are `aria-hidden="true"`; the accessible name is the file/folder name text; zone membership is conveyed by a text badge (SC 1.4.1, 4.1.2).
- Default-collapsed `rea/` internals and excluded dirs (`rea/node_modules`, `.git`) remain keyboard-reachable via the same expand model when not excluded [FACT, plan §3 view 2].

### 8.2 3D scene (`/explorer` 3D view, `/globe`)

- Keyboard fallback 2D view: a button (in tab order before the canvas) toggles between the react-three-fiber scene and a 2D representation (treemap or flat grouped list) with **data parity** — every node reachable and selectable by keyboard, exposing the same info: name, path, size, zone, last-commit link (SC 2.1.1, 2.4.3).
- Canvas text alternative (SC 1.1.1): canvas element `role="img"` + `aria-label` ("3D map of the bx2o/rea repository: folders as clusters, files as spheres scaled by size, colored by zone") + `aria-describedby` pointing to an off-screen long description; decorative WebGL layers are `aria-hidden`.
- Descriptive per-node alternatives: selecting a node in either view opens the same text details panel; no information may be hover-only or 3D-only.
- Tooltips on nodes must meet SC 1.4.13: focusable (keyboard shows them), hoverable (pointer can move onto them), dismissible (`Esc`), persistent until trigger blur.
- Degraded performance mode (points instead of meshes, plan §8) must retain the 2D fallback and text alternatives — degradation never removes an accessible path.
- cobe globe: auto-rotation pauses under `prefers-reduced-motion` and via a visible pause control (SC 2.2.2); globe hero has a text summary of what it depicts.

### 8.3 Charts (`/` dashboard, `/commits`)

- Every chart ships a **table alternative** (SC 1.3.1): commits-over-time area (`{date, commits}`), file-type donut (`{type, count}`), top-churn diverging bars (`{path, insertions, deletions}`), zone distribution (`{zone, files}`), and any timeline/churn charts on `/commits`. Tables use `<caption>`, `<th scope="col"/"row">`, and are exposed to AT at all times — visually hidden (`sr-only`) or behind a "Show data as table" toggle; never `display:none` for AT.
- Each chart has a one-sentence text takeaway via `aria-describedby` (e.g., "Commits peaked in [month]; 3,900 files across 5 zones") so the trend is perceivable without the visual (SC 1.1.1).
- Color is never the sole encoding (SC 1.4.1): donut slices get direct labels or distinct patterns; bars get value labels; multi-series get distinct markers plus hue.
- Recharts tooltips are keyboard-focusable and dismissible; legend items are real buttons that toggle series without changing context on focus (SC 3.2.2); chart `config` colors resolve through `var(--chart-N)` so both themes pass §8.6.
- Empty, loading, error, and snapshot-only states render as text rows in the table alternative as well, not only as chart whitespace (aligned with VIZ-015 states).

### 8.4 GSAP animations (`/commits` timeline, page transitions)

- All GSAP timelines register through `gsap.matchMedia()`: under `(prefers-reduced-motion: reduce)`, ScrollTrigger reveals render their final states instantly, page transitions reduce to simple opacity fades or none, parallax is disabled, and no content is conveyed only through animation.
- In-app reduced-motion switch (plan §3 item 7): states `system | on | off`, persisted (localStorage), default `system` (OS value); `on` force-disables non-essential motion regardless of OS setting; `off` restores motion only for users who explicitly opted in.
- Motion longer than 5 s (cobe rotation, ambient loops) honors SC 2.2.2 with pause/stop/hide controls.
- Commit counts, diff summaries, and churn figures are present as static DOM text independent of the animation state.
- AAA aspiration noted for future work: SC 2.3.3 Animation from Interactions — motion triggered by interaction can be disabled site-wide via the switch above.

### 8.5 reveal.js decks (`/learn`)

- Preserve native reveal.js keyboard navigation (`←`/`→`/`↑`/`↓`/`Space`, `Home`/`End`, `F` fullscreen, `Esc` exit); custom controls must not hijack these keys.
- Focus management on slide change: move focus to the new slide's heading, or keep focus on the controlling button and announce "Slide N of M: [title]" via a polite live region — never leave focus on a removed node.
- Slide semantics: deck container `role="region"` + `aria-roledescription="carousel"` + `aria-label`; each slide `aria-roledescription="slide"` + a label; one heading per slide (`h2`/`h3`) so AT heading navigation works [FACT, WAI-ARIA APG Carousel — external].
- Deck controls (next, prev, overview, speaker mode) are real `<button>`s with visible focus (SC 2.4.7) and `aria-label`s; speaker mode is fully keyboard-operable; `Esc` reliably exits fullscreen/overview.
- Client-only dynamic import (SSR guard, plan §8) must not strip landmarks or the live region on hydration; deck HTML must exist server-rendered or the loading announcement covers the gap (§8.7).

### 8.6 Color contrast — Stremiium palette

- AA targets (SC 1.4.3, 1.4.11): normal text ≥ 4.5:1; large text (≥24px, or ≥18.66px bold) ≥ 3:1; non-text UI (focus indicators, input borders, meaningful icons, essential chart gridlines) ≥ 3:1.
- Focus visible site-wide (SC 2.4.7): ≥2px outline with 2px offset, ≥3:1 against adjacent colors, never `outline: none` without an equivalent indicator.
- Audit every token pair used on core surfaces in **both** light and dark themes: `--background`/`--foreground`, `--card`, `--popover`, `--primary` (+ on-primary), `--secondary`, `--muted`/`--muted-foreground`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--chart-1…5` (token names per VIZ-018 §8.2–§8.3).
- Glass/liquid-glass surfaces: contrast is measured against the *composited* background (blur + tint over actual content), with an opaque fallback derived from `--card`/`--background` where AA cannot be guaranteed [aligned with VIZ-018 §8.5].
- VIZ-017 anchor countersign (AA text variants): brand green `#007749` on white ≈ 5.6:1 `[EST — verify]` passes body-text AA; dark primary `#4CC38A` must be re-measured against the final dark `--background` `[EST]`; gold `#FFB612` on white ≈ 1.8:1 `[EST — verify]` fails every AA threshold — enforce VIZ-017's "highlight/selected only, never body text" rule as a hard gate and restrict gold to non-text accents meeting 3:1 against adjacent colors. Zone hues are categorical chart colors only: they ride on the §8.3 non-color encodings, not on text.
- Deliverable: a remediation table — `{token, theme, foreground, background, ratio, passesAA, remediation}` — where failing tokens get adjusted values; the audit runs over `viz/lib/brand.ts` (VIZ-017's single token source) plus the VIZ-018 `globals.css` variable blocks; all pre-measurement ratios are `[EST]`.
- `prefers-contrast: more` noted as a future enhancement (not a 2.1 AA gate).

### 8.7 Screen-reader announcements — async data loads

- One polite `aria-live` status region per view (dashboard, explorer, commits, learn, councils, globe) announces async loads per SC 4.1.3 Status Messages [FACT, WCAG 2.1 — external standard; the repo reference is the 2.2 superset]:
  - loading: "Loading repository tree…"
  - loaded: "Tree loaded: ~3,900 files, 214 folders" (counts from the VIZ-022 contracts)
  - snapshot fallback: "Offline snapshot data — regenerate via `scripts/snapshot.mjs`" (plan §8)
  - error (assertive, `role="alert"`): "Failed to load commits. Retry." with the retry action focusable [FACT, aria-patterns.md live-region pattern].
- The live region exists in the initial HTML (not injected after paint) so it is discovered by AT; messages are debounced — one announcement per completed load, not per chunk; loading-to-loaded transitions replace, not append.
- API routes (`/api/tree`, `/api/commits`, `/api/diff/[sha]`, `/api/stats`) and the snapshot files (`public/snapshots/{tree,commits,stats}.json`) feed the same copy templates, so live-git and snapshot-only modes announce identically in shape.

### 8.8 Focus traps — dialogs, sheets, command palette

- Uniform contract for every modal surface (diff dialog, settings, mobile Flo-nav sheet, command palette, shortcuts sheet) per the alert-dialog pattern [FACT, aria-patterns.md]:
  - focus moves to the first meaningful element (or the dialog title) on open;
  - `Tab`/`Shift+Tab` cycle within the surface (intentional trap; SC 2.1.2 satisfied by the next two items);
  - `Escape` always closes; focus returns to the triggering control on close;
  - `role="dialog"`/`"alertdialog"` + `aria-modal="true"` + an accessible title; background content `inert` (or `aria-hidden` + un-tabbable).
- Prefer Radix/shadcn primitives (`dialog`, `sheet`, `command`) which implement this contract natively; any custom overlay must implement the full contract and be listed in the remediation table (§8.10 schema).
- The command palette is never a trap on zero results: `Escape` exits mid-search and announcements state "No results".

### 8.9 Application shell baseline

- Skip links to main content and navigation (SC 2.4.1); landmarks `header`/`nav`/`main`; `<html lang="en">`; exactly one `h1` per route; heading hierarchy per SC 1.3.1.
- Focus-visible ring on every interactive element (§8.6); icon-only controls get `aria-label`s (trash chevrons, deck controls, Flo nav) per SC 4.1.2.
- Touch targets: Flo thumb-zone nav items ≥44×44 CSS px (AAA 2.5.5; matches the skill's mobile guidance) and all controls ≥24×24 (WCAG 2.2 SC 2.5.8 enhancement).
- `200%` zoom and 1.5 line-height / 0.12em letter-spacing / 0.16em word-spacing must not clip content (SC 1.4.4, 1.4.12); no fixed heights on text containers.

### 8.10 Reference schema

- Requirement: `{id, surface, wcagSC, level, requirement, component, owner, verification}`
- Contrast audit entry: `{token, theme, foreground, background, ratio, passesAA, remediation}`
- Status message: `{state: loading|loaded|error|snapshot, counts?, copy}`
- Focus-trap contract: `{surface, dialogRole, initialFocus, tabWrap, escapeCloses, restoreFocus, inertBackground}`
- Reduced-motion config: `{respectsMediaQuery: true, switchState: system|on|off, persisted: true, affected: [scrollTrigger, pageTransitions, globeRotation, parallax]}`

---

## 9. Validation Checklist

- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Research inputs cited with source paths; external standards marked as unverified in-repo
- [ ] Evidence grades preserved (`[FACT]`/`[EST]`/`[UNKNOWN]`/`[INFER]`) — no ungraded assertions
- [ ] §8.1 tree: roving tabindex, `aria-level`, `aria-expanded`, `aria-setsize`/`aria-posinset`, keyboard model, focus restoration specified
- [ ] §8.2 3D: keyboard-reachable 2D fallback with data parity + canvas text alternatives specified
- [ ] §8.3 charts: table alternative + non-color encoding + takeaways specified for every chart
- [ ] §8.4 GSAP: `prefers-reduced-motion` gating + in-app switch contract specified
- [ ] §8.5 reveal.js: keyboard navigation + focus management + slide semantics specified
- [ ] §8.6 palette: AA targets for text/large/non-text in light + dark + remediation table specified
- [ ] §8.7 async loads: polite/assertive announcement copy + debounce + SC 4.1.3 specified
- [ ] §8.8 dialogs/sheets: focus-trap contract (open/Tab/Escape/return focus/inert) specified
- [ ] Questions, concerns, assumptions, suggested improvements all populated (no placeholders/TBD)
- [ ] Missing dependencies identified with owning task IDs
- [ ] Security considerations addressed
- [ ] Compliance gate named (council + executive where applicable)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described
- [ ] No private keys, credentials, or PII in artifact
- [ ] Artifact path inside the Stremiium / Independent-projects workspace

---

## 10. Security Considerations

- Viz data is repository metadata only; this brief and its remediation tables must contain no credentials, tokens, or PII.
- Text alternatives, announcements, and tables must not expose content the app itself does not already surface: they reuse the same VIZ-021 API payloads and the same tree exclusions (`rea/node_modules`, `.git` by default) [FACT, plan §3 view 2].
- Snapshot JSON and table alternatives inherit the exclusion filters; diff alternatives render client-side from API responses only — no direct filesystem reads from accessibility components.
- Accessibility features must not bypass route/API authorization; all alternatives consume the same authenticated data paths as the primary views.

---

## 11. South African Regulatory Considerations

- Employment Equity Act 55 of 1998: reasonable accommodation — the viz app is an internal learning tool for the Stremiium team, so AA compliance supports accommodation obligations for team members using assistive technology.
- Consumer Protection Act 68 of 2008: general accessibility duty; low direct applicability to an internal repo tool, noted for completeness per the C08 charter [FACT, `prompts/stremiium/c08-design-creative/accessibility-design-lead/prompt.md` §11].
- POPIA: viz data contains no personal information (repository metadata only); if future features add user data (e.g., learning progress), re-run the POPIA assessment before collecting it.
- WCAG 2.1 AA aligns with the accessibility baseline expected under these frameworks; no additional SA-specific technical standard applies to this web tool.

---

## 12. Compliance Gate

- C08 Design-Creative + C03 Admin-Knowledge: accessibility requires C03 for the a11y documentation and statement content [FACT, agent charter §12].
- Design sign-off: C08 Captain (VIZ-010) ratifies this brief alongside the other C08 viz briefs.
- Enforcement: VIZ-024 qa-test-engineer encodes §8 as the a11y merge gate (keyboard-navigable tree, reduced-motion respected, AA contrast on core surfaces — plan §9.6); a11y failures block merge like build failures.

---

## 13. Rollback Plan

- Re-audit on remediation failure: any surface failing its §8 spec in VIZ-024's gate reverts to the last passing build; the failure is logged with its requirement id.
- Re-verify WCAG on change: any later design change to a gated surface (tree, 3D, charts, GSAP, decks, palette tokens) re-triggers re-verification of that surface's §8 spec before merge.
- Degraded 3D mode must never remove the 2D fallback or text alternatives; rollback of a performance optimization may not roll back accessibility paths.
- If ratified palette tokens fail AA and remediation is blocked, ship the adjusted (AA-passing) values first and reconcile with VIZ-017/VIZ-018 in the next design cycle.

---

## 14. Escalation Path

- C08-ACCESSIBILITY-DESIGN-LEAD → C08 Design-Creative Captain (VIZ-010) → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical a11y blockers on shipped surfaces (keyboard-unreachable content, AA contrast failures on core surfaces, focus traps without Escape) skip to SC + C11 Dev-Engineering immediately (1h SLA per workflow-routing.md §4).
- Cross-council design conflicts (see §15 arbitration list) escalate through SC rather than bilateral edits to other councils' briefs.

---

## 15. Artifact Handoff to Sparkling Curious

- This completed brief at `prompts/viz/c08-design-creative/accessibility-design-lead/prompt.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with the other C08 viz outputs (VIZ-010 … VIZ-019), conflict de-duplication, and gating before Phase 2–6 Code Mode execution [FACT, plan §3].
- Expected conflicts for SC to arbitrate:
  - virtualization window size vs. `aria-setsize`/`aria-posinset` metadata cost (VIZ-014 vs VIZ-020);
  - 3D-scene showcase prominence vs. 2D-fallback default view (VIZ-011/VIZ-012 vs VIZ-014);
  - palette vibrancy/glass aesthetics vs. AA contrast floors in both themes (VIZ-017/VIZ-018 vs VIZ-014);
  - GSAP timeline choreography vs. reduced-motion static states (VIZ-015/VIZ-020 vs VIZ-014).
- Sparkling Curious monitors cross-council conflicts per workflow-routing.md R3/R5 and arbitrates per the Council Collaboration Matrix.
- The brief must pass the §9 Validation Checklist before handoff.
