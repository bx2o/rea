# Master Prompt — VIZ-019 · C08-ICON-ILLUSTRATION-LEAD (Icon-Illustration-Lead) — Repo-Viz Icon & Illustration System

**Act as the assigned Stremiium viz agent or subagent.**

**Task:** VIZ-019 — Icon system: lucide + bootstrap-icons + animateicons.in animated set.
**Execution model:** auto.
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.
**Program:** SC-REA-NEOBANK-5.0 extension — Repo Visualization & Learning Environment (plan: `.kilo/plans/1794948779713-repo-viz-learning-environment.md`).
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.
**Output:** produce one separate unconsolidated artifact at `artifacts/viz/c08-design-creative/VIZ-019-icon-system-spec.md`.
**Depth:** expand visual-system, UX, accessibility, and implementation depth regardless of model specificity.
**Agent ID:** C08-ICON-ILLUSTRATION-LEAD
**Council:** C08 Design-Creative
**Gate:** C08 Design-Creative

---

## 1. Summary

- This master prompt instructs C08-ICON-ILLUSTRATION-LEAD to specify the complete icon and illustration system for the `viz/` learning environment (Next.js 15 + shadcn/ui app that visualizes the `bx2o/rea` repository: ~3,900 files across five zones — docs/, prompts/, execution/, .stremiium/, rea/).
- Icon system triad with strict role separation: **lucide-react** for all UI action/navigation icons; **bootstrap-icons** for file-type glyphs; **animateicons.in (lucide animated set)** for feedback moments only.
- Research data to ingest: lucide-react icon catalog and props, bootstrap-icons filetype glyph set, animateicons.in animated lucide assets, `.stremiium/skills/` design-system skills, docs/ zone structure.
- Deliverables: file-type icon mapping table, zone badges for all five repo zones, sizing/stroke/color rules (currentColor, 16/20/24px), feedback-moment animation spec, implementation file map and component interfaces.
- Output artifact: `artifacts/viz/c08-design-creative/VIZ-019-icon-system-spec.md`.

---

## 2. Objective

- Define one authoritative, token-driven icon system so every surface of the viz app (explorer tree, file viewer, command palette, commits timeline, dashboard stat cards, learn decks, councils graph, Flo-menu navigation) renders icons from a single source of truth with consistent geometry, color, and motion.
- Guarantee that icon usage never blocks: (a) offline operation (no runtime CDN fetches), (b) accessibility gates (AA contrast, keyboard/reduced-motion owned with VIZ-014), (c) bundle discipline (tree-shaken named imports), and (d) theme correctness in light/dark via currentColor inheritance rather than hardcoded hex.
- Produce an Ask Mode design artifact binding enough for VIZ-020 (frontend-engineer) to implement `viz/lib/icon-map.ts` and the icon components without further design decisions, and for VIZ-023 (devops) to size the dependency cost.

---

## 3. Assumptions

- `lucide-react` and `bootstrap-icons` are installable npm dependencies of `viz/` per the plan stack spine; if the sandbox is offline, icon imports are still written by name and the app remains source-complete (install documented for later execution per plan §8 mitigation).
- `FileNode` (data contract, VIZ-022) carries a `zone` field restricted to exactly `docs | prompts | execution | stremiium | rea`, and the explorer tree rows are keyed by path so extension lookup is local and cheap.
- Zone palette hex values are owned by VIZ-017 (brand-manager) and already RATIFIED as binding decision D2 (light→dark): docs `#2563EB→#60A5FA`, prompts `#D97706→#FBBF24`, execution `#16A34A→#4ADE80`, .stremiium `#7C3AED→#A78BFA`, rea `#64748B→#94A3B8`, git internals `#9CA3AF→#D1D5DB`. Single token source is `viz/lib/brand.ts` (per VIZ-017); this task owns icon selection, geometry, and the `--zone-*` consumption aliases only — icon components consume the tokens, never redefine values.
- animateicons.in animated lucide assets can be vendored into the repo under their license; if verification fails, the fallback is motion-driven (GSAP/`motion`) animation of the static lucide glyph — no design change, only implementation swap.
- The app-level reduced-motion switch (VIZ-014) is global and consulted by all animated feedback icons via a single hook (`useReducedMotion`).

---

## 4. Questions

- Consumed, not open: zone hues are fixed by VIZ-017 D2 (see §3). Remaining confirmation — are `--zone-docs` … `--zone-rea` (plus `--zone-git`) the CSS-var aliases that VIZ-012/VIZ-018 wire over `viz/lib/brand.ts` values, so icon and badge components reference one alias set in both themes?
- Is 16px an acceptable floor for the deepest tree rows (~3,900 nodes), or must a 12px opt-in size be added for ultra-dense mode? (Default: 16px floor; no 12px.)
- Should `.svg` files render as `Image` (visual asset) or as `CodeXml` (code asset)? Default: `Image`, matching the png/jpg family.
- Does the councils graph (VIZ-031) require per-council glyphs beyond the five zone badges, and if so who owns that 16-entry council-icon map — this task proposes owning it as an extension of `icon-map.ts`?
- Is bootstrap-icons consumed as font CSS (single layout import, ~100 KB woff2) or as an inlined SVG sprite subset (VIZ-023 perf call)? Default: font CSS for simplicity; sprite as documented perf upgrade.
- Should feedback moments pair with Web Audio (AudioContext) cues per the plan's enhancement modules, gated behind the same reduced-motion/audio toggle?

---

## 5. Concerns

- 16px legibility of fine-detail glyphs (`Braces`, `Table`, `Settings`, `Binary`) at stroke-width 1.5 is unproven; the styleguide audit grid must verify before rollout.
- lucide has renamed icons with deprecated aliases (`GitCommit` → `GitCommitHorizontal`, `AlertTriangle` → `TriangleAlert`, `Loader2` → `LoaderCircle`); unpinned imports risk drift. Mitigation: export icon name constants from `icon-map.ts` and ban ad-hoc imports.
- Icon-font FOUT in dark theme (bootstrap-icons) can flash wrong-color glyphs; one CSS import in `app/layout.tsx`, font-display acceptable, sprite fallback documented.
- Animation noise in a data-dense UI: loops must be capped to the nine defined feedback moments; decorative idle loops are out of scope and rejected at review.
- Per-row React icon components across a virtualized 3,900-row tree add overhead; descriptors must be memoized static lookups, not per-row computation.

---

## 6. Suggested Improvements

- Single source of truth: all icon decisions live in `viz/lib/icon-map.ts`; components are thin renderers; a docs page (`viz/docs/ICON-SYSTEM.md`) is generated from it for other viz agents.
- Icon audit grid: a styleguide page renders every mapped extension × every size (16/20/24) × both themes, making regressions visible in one screenshot.
- Lint gate: no wildcard `import * as Icons from "lucide-react"`; named imports only, checked by VIZ-024 QA.
- Naming stability: export `ICON = { FileText, FileCode, Braces, ... }` constants so consumers never type raw icon names at call sites.
- Motion budget: every animated moment declares duration ≤ 1.2 s and a static fallback in the same table row — the fallback is part of the spec, not an afterthought.

---

## 7. Missing Dependencies

- Zone color token values for `--zone-docs` … `--zone-rea` (+ `--zone-git`) — RATIFIED by VIZ-017 D2 (hex pairs in §3), single source `viz/lib/brand.ts`; remaining dependency is the theme wiring of those aliases by VIZ-012/VIZ-018.
- `FileNode.zone` contract frozen — VIZ-022 (data-engineer).
- App-level reduced-motion toggle hook API — VIZ-014 (accessibility-design-lead).
- `pnpm add lucide-react bootstrap-icons` executed in `viz/` — VIZ-023 (devops) per scaffold order.
- Vendored animateicons.in assets (SVG + CSS) — blocked on license verification; motion-driven fallback unblocked.
- shadcn `Badge`, `Tooltip`, `Command`, `ScrollArea` components present in the scaffold — VIZ-020.

---

## 8. Deliverables — Icon System Spec (binding draft for the artifact)

### 8.1 Icon system triad and role separation

| Library | Role | Where it appears | Never used for |
|---|---|---|---|
| `lucide-react` | UI actions, navigation, status glyphs (stroke SVGs) | buttons, nav, tree rows, table cells, stat cards, empty states, tooltips | file-type badges where a branded filetype glyph is required |
| `bootstrap-icons` | File-type glyphs (filled filetype set) | file-viewer header badge, command-palette result rows, file metadata chips | UI actions or navigation |
| `animateicons.in` (lucide animated set) | Feedback moments ONLY — vendored SVG+CSS assets | the nine moments in §8.6 | idle decoration, looping ambience, primary actions |

Rule: one icon decision per token. If a surface needs a file glyph it reads it from `icon-map.ts`; if it needs an action it imports a lucide constant; nothing invents a fourth source.

### 8.2 File-type icon mapping table (canonical)

| Extension / kind | Lucide (inline, tree/table) | Bootstrap-icons (badge/viewer) | Category | Notes |
|---|---|---|---|---|
| `md`, `mdx` | `FileText` | `bi-filetype-md` | text | dominant repo type (prompts/, docs/) |
| `ts` | `FileCode` | `bi-filetype-ts` | code | rea/src, viz/ |
| `tsx` | `FileCode` | `bi-filetype-tsx` | code | React components |
| `js`, `jsx`, `mjs`, `cjs` | `FileCode` | `bi-filetype-js` | code | scripts incl. `viz/scripts/snapshot.mjs`, rea/experiments |
| `json` | `Braces` | `bi-filetype-json` | data | configs, snapshots, contracts — `Braces` reads at 16px; `FileJson` deliberately unused to keep one glyph per family |
| `yaml`, `yml` | `Settings` | `bi-filetype-yml` | config | Settings glyph signals "configuration file" at tree density |
| `csv` | `Table` | `bi-filetype-csv` | data | docs/research dossiers, rea/docs |
| `png`, `jpg`, `jpeg`, `gif`, `webp`, `svg` | `Image` | `bi-filetype-png` (svg: `bi-filetype-svg`) | image | rea/docs/assets |
| `html` | `CodeXml` | `bi-filetype-html` | code | rea/website templates |
| `css`, `scss` | `Palette` | `bi-filetype-css` | code | styles |
| `sh`, `bash` | `FileTerminal` | `bi-filetype-sh` | code | rea/scripts, tests/fixtures |
| `mermaid` | `Workflow` | `bi-diagram-3` | code | diagrams (`rea/docs/architecture.mermaid`) |
| `txt`, `log` | `FileText` | `bi-file-earmark-text` | text | plain text and logs |
| `pdf` | `FileText` | `bi-filetype-pdf` | text | documents |
| `zip`, `tar`, `gz` | `FileArchive` | `bi-file-earmark-zip` | archive | archives |
| dotfiles/rc: `gitignore`, `npmrc`, `nvmrc`, `env`, `toml`, `ini` | `Settings` | `bi-gear` | config | config semantics grouped with yaml |
| basename `LICENSE` | `ScrollText` | `bi-file-earmark-text` | legal | rea/LICENSE |
| directory (collapsed) | `Folder` | `bi-folder` | dir | tree row, unexpanded |
| directory (expanded) | `FolderOpen` | `bi-folder2-open` | dir | tree row, expanded |
| directory (git/system) | `FolderGit2` | `bi-folder` | dir | `.git` excluded from the tree by default per plan §3; where git internals surface (stats/3D per VIZ-017), use `--zone-git` with dashed outline, collapsed default |
| unknown / other | `File` | `bi-file-earmark` | unknown | fallback-chain terminal |

Fallback chain (in `resolveFileIcon`): exact extension → family heuristic (`.lock.json`, `.config.json` still resolve as `json`) → `File`. Unknown is a designed state, never an error.

### 8.3 Zone badges/icons (five repo zones)

| Zone | Lucide badge icon | Label | Zone hue (VIZ-017 D2, light→dark; consumed via `viz/lib/brand.ts` alias `--zone-*`) | Surfaces |
|---|---|---|---|---|
| `docs/` | `BookOpen` | Docs | blue `#2563EB→#60A5FA` (`--zone-docs`) | tree chips, file-viewer header, dashboard zone card, 3D node tint, globe legend |
| `prompts/` | `ScrollText` | Prompts | amber `#D97706→#FBBF24` (`--zone-prompts`) | same |
| `execution/` | `CirclePlay` | Execution | green `#16A34A→#4ADE80` (`--zone-execution`) | same |
| `.stremiium/` | `Hexagon` | Stremiium | violet `#7C3AED→#A78BFA` (`--zone-stremiium`) | same |
| `rea/` | `Binary` | REA | slate `#64748B→#94A3B8` (`--zone-rea`) | same |
| git internals | `FolderGit2` | Git | gray `#9CA3AF→#D1D5DB` (`--zone-git`) | tree, dashed outline, collapsed by default per VIZ-017 D2 |

Fixed legend/badge order everywhere: docs → prompts → execution → .stremiium → rea → git (VIZ-017 D2); zones are the only categorical hues in the app — icon badges never introduce additional palette families.

Badge spec: 16px lucide icon inside a shadcn `Badge`-style pill; background `color-mix(in srgb, var(--zone-*) 12%, transparent)`, foreground `var(--zone-*)`, label 12px medium. Icon-only variant (zone chips in dense toolbars) must carry `sr-only` zone label + `Tooltip` on hover/focus — the accessible name is never optional (VIZ-014 cross-gate).

### 8.4 Sizing, stroke, and color rules

| Size | Stroke (lucide) | Surfaces |
|---|---|---|
| **16px** | `strokeWidth 1.5` | tree rows, table cells, breadcrumbs, zone chips, diff gutters, badges |
| **20px** | `strokeWidth 2` (lucide default) | nav items, command-palette rows, stat-card labels, file-viewer header, tooltip triggers |
| **24px** | `strokeWidth 2` | page/section headers, empty states, hero stat cards, Flo-menu primary targets, tour highlights |

- No other sizes exist. A grep gate (`size={`) must only ever find `16 | 20 | 24`.
- **Color: `currentColor` only.** Icon components set geometry, never color; color flows from the text class of the container (`text-muted-foreground` idle → `text-foreground`/`text-primary` hover/selected, `text-destructive` errors, success token for confirm). No hardcoded hex inside icon components — grep gate.
- Zone tinting uses `--zone-*` aliases exclusively; values resolve from `viz/lib/brand.ts` (VIZ-017 D2 — single token source, no hardcoded hex elsewhere); the icon system itself stays monochrome so themes (VIZ-018) recolor without icon edits.
- bootstrap-icons glyphs inherit via CSS `color: currentColor`, sized by `font-size` matched to the row (16px); they never get their own palette.
- Icon boxes are fixed (`shrink-0`, `leading-none`, `flex items-center gap-2`) so a 3,900-row virtualized tree cannot shift layout while scrolling.
- AA contrast on tinted badge backgrounds is verified per theme — defect route via VIZ-014.

### 8.5 Surface inventory (where each rule lands)

- Explorer: tree rows (`FileIcon` 16), viewer header (`FileIcon` 20 + `ZoneBadge`), command palette rows (20 + bootstrap filetype), zone filter chips (`ZoneBadge` 16), empty state (`FolderOpen` 24 + `Search`).
- Commits: timeline nodes (`GitCommitHorizontal`), per-file diff marks (`FilePlus`/`FileMinus`/`FileDiff` 16), author (`User`), date (`CalendarClock`), `RefreshCw` for re-scan.
- Dashboard: stat-card icons 24 (`Files`, `FolderTree`, `GitCommitHorizontal`, `Network` for councils), churn list (`Flame`), zone distribution legend uses `ZoneBadge` set.
- Learn: deck chrome (`Presentation`, `GraduationCap`, `ChevronLeft`/`ChevronRight`, `Download` export, `Mic` speaker mode).
- Councils: graph nodes consume `ZoneBadge` icons; SC root node uses `Sparkles`; a per-council glyph map (if ratified, see §4) extends `icon-map.ts` for VIZ-031.
- Global: theme toggle (`Sun`/`Moon`), reduced-motion toggle (`Accessibility`), Flo-menu (nav section icons at 20, primary at 24), toasts and loaders per §8.6.

### 8.6 Feedback moments — animateicons.in (lucide animated set)

| Moment | Animated icon | Static fallback (lucide) | Motion rule |
|---|---|---|---|
| Copy path/snippet to clipboard | `Copy` → `Check` draw | `Check` | play once per copy |
| Snapshot/API data loaded | `RefreshCw` spin-cycle | `RefreshCw` | ≤ 1.2 s, stops on settle |
| Commit selected on timeline | `GitCommitHorizontal` pulse | `GitCommitHorizontal` | one pulse per selection |
| Search results populated | `Search` sweep | `Search` | once per new result set |
| Theme toggle | `Sun` ↔ `Moon` morph | `Sun` / `Moon` | cross-fade ≤ 300 ms |
| Deck/export download | `Download` bounce | `Download` | once |
| Error toast (API/snapshot fail) | `CircleAlert` shake | `CircleAlert` | one shake, `text-destructive` |
| Loading (any await) | `LoaderCircle` rotate | `LoaderCircle` + text status | loop only while pending |
| Tour/deck step complete | `BadgeCheck` sparkle | `BadgeCheck` | once |

- Assets are vendored into `viz/components/viz/icons/animated/` (SVG + CSS); **no runtime fetch from animateicons.in or any CDN** — offline-first per plan §8.
- `prefers-reduced-motion` OR the app-level motion switch (VIZ-014) selects the static fallback column always; loops other than pending-state loaders are forbidden.
- If animateicons.in licensing blocks vendoring: fallback implementation is GSAP/`motion` tweening the static lucide glyph; the table (moment, fallback, duration cap) is unchanged — implementation detail only.

### 8.7 Implementation file map and interfaces (consumed by VIZ-020)

```
viz/lib/icon-map.ts             # FileIconDescriptor map, ZONES, resolveFileIcon(), ICON constants
viz/components/viz/file-icon.tsx     # <FileIcon name isDir expanded size 16|20|24 />
viz/components/viz/zone-badge.tsx    # <ZoneBadge zone iconOnly? />
viz/components/viz/feedback-icon.tsx # <FeedbackIcon moment /> — reduced-motion aware
viz/components/viz/icons/animated/   # vendored animateicons.in assets
viz/app/styleguide/page.tsx          # icon audit grid (map × sizes × themes)
viz/docs/ICON-SYSTEM.md              # usage guide for viz agents
```

```ts
type FileIconCategory = 'text' | 'code' | 'data' | 'config' | 'image' | 'archive' | 'legal' | 'dir' | 'unknown';
type FileIconDescriptor = { lucide: LucideIcon; bootstrap: string; category: FileIconCategory };
type ZoneDescriptor = { id: 'docs' | 'prompts' | 'execution' | 'stremiium' | 'rea'; icon: LucideIcon; label: string; token: string };
resolveFileIcon(name: string, isDir: boolean, expanded?: boolean): FileIconDescriptor;
```

---

## 9. Research Inputs & Tech Stack Refs

- Repo inputs: root `README.md` (repo orientation), `execution/EXECUTION_LEDGER.md`, `.stremiium/README.md`, `.stremiium/config/` (zone structure), plan §4–§5 (surfaces where icons appear), live extension survey of the five zones (md/json/ts/tsx/csv/png/sh/mjs/mermaid/html/css confirmed present).
- `.stremiium/skills/`: `web-artifacts-builder` (shadcn component icon patterns), `davila7-ui-design-system` (token discipline), `nguyenthienthanh-design-expert` (component design rules), `kv0906-premium-frontend-design` (polish bar for feedback motion), `accessibility-compliance` (WCAG — names, contrast, reduced motion), `frontend-patterns` / `frontend-code-review` (import hygiene), `davila7-motion-canvas` / `davila7-remotion-best-practices` (animation timing rules).
- Stack refs: `lucide-react` (named imports, `size`/`strokeWidth`/currentColor), `bootstrap-icons` npm (font CSS import in `viz/app/layout.tsx`), animateicons.in lucide animated set (vendored), shadcn `Badge`/`Tooltip`/`Command` as badge/chip hosts.
- Coordination refs: VIZ-012 (token registry), VIZ-013 (layouts/nav placement), VIZ-014 (a11y gates), VIZ-015 (stat-card icons), VIZ-017 (BINDING zone palette D2 + brand token source `viz/lib/brand.ts` — cited, not re-derived), VIZ-018 (theme variants wiring `--zone-*` aliases), VIZ-020 (implementation), VIZ-022 (`FileNode.zone`), VIZ-023 (dependency sizing), VIZ-031 (council graph glyphs).

---

## 10. Commands/Configs/Schemas Where Applicable

- No executable commands are produced in Ask Mode. The artifact contains the spec text only.
- Deferred (Code Mode, VIZ-023 order): `pnpm add lucide-react bootstrap-icons` inside `viz/`; one `import "bootstrap-icons/font/bootstrap-icons.min.css"` in `viz/app/layout.tsx`.
- Reference schemas: `FileIconDescriptor`, `ZoneDescriptor`, `resolveFileIcon()` signature (§8.7); feedback-moment table (§8.6) as the enumerated `FeedbackMoment` union.
- Lint expectations: named lucide imports only; `size={16|20|24}` only; no hardcoded hex in `components/viz/*icon*`.

---

## 11. Step-by-Step Implementation or Research Plan

1. Read the plan §4–§5 and the `.stremiium/skills/` entries listed in §9; extract icon-relevant rules and mark repo-derived facts [FACT], proposals [INFER], open items [UNKNOWN].
2. Verify the lucide and bootstrap-icons catalogs cover every glyph named in §8.2/§8.3; flag renames/deprecations (§5) and pin constants.
3. Verify the extension survey against the five zones (docs, prompts, execution, .stremiium, rea) and extend the mapping table only with extensions actually present or contractually expected (viz snapshots: `.json`, `.mjs`).
4. Draft the artifact at `artifacts/viz/c08-design-creative/VIZ-019-icon-system-spec.md` with §8 as binding content: triad roles, mapping table, zone badges, sizing/stroke/color rules, feedback-moment spec, file map, schemas.
5. Replace all placeholders/TBD with concrete content; every proposal that depends on another agent's output is marked [UNKNOWN] with the owner named (§7).
6. Run the §13 validation checklist; then hand off to Sparkling Curious (§15).

---

## 12. Acceptance Criteria

- Every extension in §8.2 resolves to one icon at 16/20/24 in both themes; unknown files render the `File` fallback with no console warning.
- All five zones render `ZoneBadge` with icon + label + VIZ-017 D2 zone hue (consumed via `--zone-*` aliases over `viz/lib/brand.ts`); icon-only chips have accessible names and tooltips; AA contrast passes per theme.
- Icon components contain zero hardcoded colors and zero sizes outside {16, 20, 24} — verifiable by grep in the VIZ-024 gate.
- lucide imports are named only; the lucide bundle contribution is tree-shaken; bootstrap-icons is exactly one CSS import.
- All nine feedback moments have a static fallback and honor `prefers-reduced-motion` and the app toggle; no runtime CDN fetch exists in the icon path.
- `viz/app/styleguide/page.tsx` renders the full audit grid; `viz/lib/icon-map.ts` compiles against the §8.7 schemas.
- The artifact is unconsolidated, ≥ 150 lines of spec-grade content, and needs no further design decisions to implement.

---

## 13. Validation Checklist

- [ ] Research data sources cited with [S#] references or explicitly marked unverified
- [ ] Evidence grades preserved ([FACT]/[EST]/[UNKNOWN]/[INFER])
- [ ] All 16 required sections from Common Master Prompt Header present (header + §1–§15)
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] File-type mapping table complete with fallback chain; zone badges defined for all five zones
- [ ] Sizing/stroke/color rules concrete: currentColor, 16/20/24, stroke 1.5/2, token-only zone tints
- [ ] Feedback-moment table complete with static fallbacks and reduced-motion rules
- [ ] No runtime CDN/external fetch; animated assets vendored with license verified
- [ ] Questions, concerns, assumptions, suggested improvements all populated (no placeholders/TBD)
- [ ] Missing dependencies identified with owning agent IDs
- [ ] Security considerations addressed
- [ ] Compliance gate named (council + executive where applicable)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described
- [ ] No private keys, credentials, or PII in artifact
- [ ] Artifact path inside Stremiium / Independent-projects workspace

---

## 14. Security, Regulatory & Rollback Plan

- Security: vendored animated assets are static SVG/CSS reviewed like source — no scripts, no external URLs, no telemetry; no secrets or credentials in any asset; bootstrap-icons pinned as an npm dependency (VIZ-023), no CDN injection; icon components never render user-controlled raw SVG (paths resolve only through the static `icon-map.ts`).
- South African regulatory considerations: CPA 68 of 2008 consumer-accessibility angle — every icon-only affordance carries an accessible name; icon color/contrast supports the WCAG 2.1 AA gate owned with VIZ-014.
- Rollback plan: `icon-map.ts` is data, not behavior — a revert restores prior mappings without functional loss; animated assets are removable wholesale (static fallbacks are the spec default); the styleguide page is optional and safely deletable; icon conflicts on renames are fixed by re-pinning the `ICON` constants, never by ad-hoc imports.

---

## 15. Escalation Path & Artifact Handoff to Sparkling Curious

- Escalation: C08-ICON-ILLUSTRATION-LEAD → C08 Design-Creative Captain (VIZ-010) → Sparkling Curious (SC-MASTER-001, VIZ-001) → Mychael (CEO) → Board. Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).
- Icon/palette conflicts (VIZ-017 brand, VIZ-018 themes) and icon/placement conflicts (VIZ-013 layouts) are arbitrated by Sparkling Curious per the Council Collaboration Matrix; a11y icon defects route jointly with VIZ-014.
- The completed artifact at `artifacts/viz/c08-design-creative/VIZ-019-icon-system-spec.md` is handed to Sparkling Curious for synthesis with other C08 Design-Creative outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution; Sparkling Curious monitors cross-council conflicts (workflow-routing.md R3/R5).
- Artifact must pass the §13 Validation Checklist before handoff.
