# Master Prompt — VIZ-011-CHIEF-DESIGN-OFFICER (Chief-Design-Officer — Repo Visualization Learning Environment)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only for Phase 1 (design briefs for the repo visualization learning environment); Phases 2–6 of the viz plan execute only after Sparkling Curious hands the consolidated program to Plan Mode/Code Mode.  
**Workspace:** keep all artifacts inside the rea / Stremiium Independent-projects workspace structure (repo root is this workspace; the built app lands in the new top-level `viz/` folder).  
**Output:** one separate unconsolidated design brief — this `prompt.md` at `prompts/viz/c08-design-creative/chief-design-officer/prompt.md`; matching execution result at `execution/results/viz/c08-design-creative/chief-design-officer/execution-result.md` per root README convention; the vision's downstream implementation artifacts land in `viz/` during Phases 2–6.  
**Depth:** expand design, UX, accessibility, brand, motion, technical, security, and operational depth regardless of model specificity.  
**Agent ID:** VIZ-011-CHIEF-DESIGN-OFFICER  
**Task ID:** VIZ-011 (viz plan §3, C08 Design-Creative block)  
**Council:** C08 Design-Creative  
**Gate:** C08 Design-Creative + SC (Sparkling Curious, SC-MASTER-001)  
**Program:** Repo Visualization & Learning Environment — SC-REA-NEOBANK-5.0 extension · Plan: `.kilo/plans/1794948779713-repo-viz-learning-environment.md`

---

## 1. Summary

- This master prompt instructs VIZ-011-CHIEF-DESIGN-OFFICER to author the **design vision** for the repo visualization & learning environment (`viz/`): a Next.js 15 web app in which a user browses every folder and file of the `bx2o/rea` repository (~3,900 files [EST]), sees what was created/changed across full git history, and learns the repository through visual diagrams, charts, 3D scenes, and animated timelines (plan §1).
- The vision defines four things and nothing else: (a) the **learning-environment concept** — what it feels like to understand a 3,900-file repo through this app (§8.1); (b) the **information architecture** — 7 views: Overview dashboard, Explorer, Commits timeline, 3D File System, Learn decks, Councils graph, Globe hero (§8.2); (c) the **visual language** — dark-first, liquid-glass accents per the Appllama liquid-glass-screens reference, Stremiium palette per VIZ-017 (§8.3); (d) the **learning workflow** — explore → inspect → learn (§8.4) — plus the **layout system**: desktop sidebar nav + shadcn cmdk command palette, Flo-menu thumb-zone mobile nav (§8.5).
- The vision is the **umbrella C08 artifact**: it binds the facet specs owned by sibling tasks without re-deriving them. Palette/zone hues/typography/lexicon → VIZ-017 brand-manager; token implementation/themes/glass recipes → VIZ-012 + VIZ-018; layout detail/palette UX/Flo-menu mechanics → VIZ-013; accessibility floor → VIZ-014; dashboard analytics content → VIZ-015; learning-workflow research → VIZ-016; icons → VIZ-019; deck content → VIZ-030; graph data → VIZ-031; data contracts → VIZ-022; implementation → VIZ-020–VIZ-025.
- Ratification path: captain VIZ-010 ratifies this vision against design gate G-VIZ-D1–D4 and records it in the ratification register; Sparkling Curious synthesizes all 18 viz briefs and is the only authority that moves the program to Code Mode.
- Research data to ingest: `.kilo/plans/1794948779713-repo-viz-learning-environment.md` (all sections), `docs/program/councils/councils/c08-design-creative/CHARTER.md`, `.stremiium/agents/council-agents/C08-chief-design-officer.agent.md` (Stremiium Design System baseline, §0.2), the completed sibling briefs `prompts/viz/c08-design-creative/{captain,ui-ux-designer,brand-manager,theme-designer,dashboard-designer,accessibility-design-lead}/prompt.md`, `.stremiium/config/council-department-mapping.json` (v1.1.0 [FACT]), repo orientation (`README.md`, `docs/program/tbs/tbs/PROGRAM_BRIEF.md` — physical path; the README link is stale), and the design skills listed in §6.
- Output artifact: this unconsolidated brief plus the execution result at the stated path.

---

## 2. Assumptions

- The 18-task viz plan is authoritative and its decisions final (plan §2): `viz/` top-level app; stack spine Next.js 15 (App Router, TS) + Tailwind CSS + shadcn/ui + recharts + react-three-fiber/three + GSAP (@gsap/react) + reveal.js + lucide-react + bootstrap-icons; enhancement modules (cobe, react-bits, wigggle-ui, ui-layouts, motion, anime.js, Web Audio) opportunistic; local git + filesystem scan as data source (GitHub API not required); committed JSON snapshots as offline fallback.
- The organization graph is fixed: SC → 15 CRD coordinators → 16 councils (C01–C16) → departments, from `.stremiium/config/council-department-mapping.json` v1.1.0 [FACT].
- Scale reality: ~3,900 files [EST]; `rea/node_modules` and `.git` excluded from default tree/3D views; `rea/` internals and git internals collapsed by default (plan §8 mitigation, VIZ-017 D2 git-internals row).
- VIZ-017 brand decisions are **ratified and binding** for this vision — cite, do not re-derive: brand chrome ZAR green `#007749` (`--st-brand-500`) with dark-mode AA primary `#4CC38A` (`--st-brand-300`), gold `#FFB612` highlight-only (`--st-gold-500`, never body text); six zone hues in fixed legend order docs → prompts → execution → `.stremiium/` → rea → git-internals; namespaces `--st-*` (chrome) vs `--zone-*` (categorical data) vs semantic kept separate; single token source `viz/lib/brand.ts`.
- SDS baseline typography [FACT, `.stremiium/agents/council-agents/C08-chief-design-officer.agent.md` §0.2]: Space Grotesk display / Inter body / JetBrains Mono code — identical to VIZ-017's viz-app typography decision; no conflict to arbitrate.
- The Appllama liquid-glass-screens reference is the named external aesthetic reference (not vendored in-repo; availability offline [UNKNOWN]); the implementable source of truth is the in-repo proxy stack — kv0906 `glass-components.tsx` + `digital-liquid.glsl.ts` [FACT] and the `@glass-ui` registry via VIZ-012/VIZ-018.
- Dark-first: dark is the default theme; light and system-follow are first-class surfaces with full token parity (VIZ-018 §8.2–§8.3 mechanics).
- Ordering note: sibling briefs VIZ-013/VIZ-015/VIZ-017/VIZ-018 were authored in parallel and landed before this vision; this brief absorbs their binding decisions and draws the umbrella above them rather than re-opening settled facets.

---

## 3. Questions

1. **3D File System placement** — recommended: an Explorer view-mode toggle (`/explorer?view=3d`) so the tree and the spatial map share one mental model and one selection state, with `/globe` reserved for the cobe hero; confirm against VIZ-013 §6 layouts and VIZ-020 route feasibility at synthesis.
2. **Globe density** — should the standalone `/globe` view and the dashboard hero share one cobe component with different marker densities (hero: reduced markers, no labels; standalone: full markers + tooltip), per VIZ-017 rule 6?
3. **Learn deck floor** — plan §9.5 requires ≥4 decks and VIZ-030 authored exactly 4 (orientation, program brief, prompts & replies, councils & governance); should the vision mandate per-zone extension decks as future content beyond the floor?
4. **Light-theme parity** — VIZ-018 tokened both themes; does v1 need full 7-view light parity, or is reading-surface parity (file viewer, deck slides) sufficient first with the rest following?
5. **Command palette scope** — VIZ-013 groups are Files/Folders/Commits/Views; should the palette also index deck slide titles (VIZ-030 hash deep links) and council names (VIZ-031 graph nodes)?
6. **Flo-menu discoverability** — first-run users may not find a floating menu; labeled fallback tab bar until an onboarding tour exists, or teach the Flo pattern with a one-time bottom toast?
7. **Palette provenance** — the broader Stremiium SDS cites electric blue `#0066FF` / orange `#FF6600` [FACT, C08 agent doc §0.2], while VIZ-017 D1 ratified ZAR green/gold for the viz app surface; confirm SC accepts this deliberate product-surface divergence or wants harmonization flagged to the brand council.
8. **Web Audio (AudioContext) UI feedback** — plan §2 lists it as opportunistic; include as default-muted micro-feedback in the motion contract, or drop from vision scope?

---

## 4. Concerns

1. **Scale** — a ~3,900-file tree without virtualization, lazy loading, and `rea/`-collapsed defaults is unusable (plan §8 failure mode); the vision mandates these as acceptance bars, not suggestions.
2. **Glass vs contrast** — liquid glass on dark backgrounds risks WCAG 2.1 AA failures on text-dense surfaces; glass is restricted to accent surfaces (§8.3 rule 2), VIZ-014 gates the contrast pairs, and the flat-translucent fallback is pre-approved (VIZ-018 §8.5 Firefox <103 solid fallback).
3. **WebGL budget** — the digital-liquid hero shader plus the react-three-fiber scene on low-end Android (charter §10 device reality) demands: one WebGL hero per page load, degraded points-mode 3D as a first-class state, and reduced-motion shader freezes (VIZ-018 §8.4/§8.6).
4. **External aesthetic drift** — the Appllama liquid-glass-screens gallery is not vendored [UNKNOWN offline]; building against an unversioned external reference invites drift; mitigation in §5.1.
5. **Parallel-authoring collisions** — nine C08 briefs written concurrently; this vision must de-duplicate rather than contradict (VIZ-013 layouts, VIZ-017 palette, VIZ-018 themes all landed first) — SC synthesis owns final conflict resolution, captain arbitrates C08-internal disputes first.
6. **reveal.js SSR** (plan §8) — client-only dynamic import shapes `/learn` perceived performance; the deck route needs skeleton states and lazy deck loading.
7. **cmdk at scale** — fuzzy search over ~3,900 files requires a snapshot-time index (extend `scripts/snapshot.mjs` with VIZ-022), never per-keystroke API fetching.
8. **Commits timeline depth** — full git history is unbounded; the timeline needs chunked/era-based loading or it becomes a scroll trap on first render.
9. **Snapshot-only mode** (plan §8: git binary absent / offline) — every view must render identically from `public/snapshots/*.json` with a data-status banner; a broken live-data path must never break wayfinding.

---

## 5. Suggested Improvements

1. **Vendor the aesthetic reference** — pin 5–10 representative Appllama liquid-glass-screens screenshots with a one-line rationale each under `viz/design-references/` so the glass language is versioned in-repo and survives offline.
2. **First-visit guided tour** — max 4 steps (react-bits announcement effects), teaching the explore → inspect → learn loop and the ⌘K palette; auto-skipped for reduced-motion users.
3. **Question subtitles** — render each view's §8.2 question as an on-screen subtitle; cheapest possible wayfinding affordance.
4. **Recently-viewed rail** — Explorer sidebar rail plus a recents group in the command palette.
5. **Churn deep-links** — top-churn bar items deep-link to the file's commit-filtered history in one click (Overview → Commits closure of the loop).
6. **Snapshot-time palette index** — pre-build the cmdk fuzzy index in `scripts/snapshot.mjs` output.
7. **User-selectable degraded 3D** — points-mode as an explicit toggle, not only auto-detected (charter §10 inclusivity).
8. **GSAP stat count-ups** — Overview stat cards animate once on mount, honoring reduced-motion.
9. **Shared zone legend** — the VIZ-017 global legend component surfaces persistently until the user has met zone hues on 3 different surfaces (learning reinforcement).

---

## 6. Missing Dependencies

- **Appllama liquid-glass-screens reference** — external gallery, not present in the repo [UNKNOWN offline]. In-repo proxies [FACT]: `.stremiium/skills/kv0906-premium-frontend-design/premium-frontend-design/` (`templates/glass-components.tsx`, `shaders/digital-liquid.glsl.ts`) and the `@glass-ui` shadcn registry (manifest owned by VIZ-012 → `viz/REGISTRIES.md`).
- **`viz/REGISTRIES.md` curated registry manifest (VIZ-012)** — needed before glass/accent component selection is final; premium/unavailable items skip with a note (plan §8).
- **VIZ-016 learning-workflow research outputs** — parallel task; §8.4 workflow claims must be cross-checked against its research before SC synthesis.
- **VIZ-022 data contracts + `scripts/snapshot.mjs`** — the 7 views reference data shapes (`tree.json`, `commits.json`, `stats.json`, `graph.json`) not yet generated.
- **VIZ-031 graph edges** — the Councils view needs file↔folder↔council cross-reference edges beyond `council-department-mapping.json`.
- **VIZ-010 ratification** — this vision is proposed until the captain records it in the ratification register against G-VIZ-D1–D4.
- **VIZ-018 light-theme AA text variants for all six zone hues, countersigned by VIZ-014** — the vision assumes both themes pass; failure reopens §12.
- **Onboarding tour assets** — none exist; §5.2 proposes the minimum.
- **Design skills to ingest** [FACT, verified paths]: `.stremiium/skills/nguyenthienthanh-design-expert/design-expert/design-system.md` (tokens, atomic structure, dark-mode do's/don'ts), `.stremiium/skills/kv0906-premium-frontend-design/premium-frontend-design/SKILL.md` (glass/shader/hero system, performance tiers), `.stremiium/skills/web-artifacts-builder/SKILL.md` (shadcn bundle), `.stremiium/skills/davila7-ui-design-system/ui-design-system/SKILL.md` (token generator), `.stremiium/skills/sandraschi-uiux-design-consultant/uiux-design-consultant/SKILL.md` + `.stremiium/skills/carlheath-design/design/SKILL.md` (UX guidance, component workflow), `.stremiium/skills/building-native-ui/SKILL.md` (three/webgpu patterns), `.stremiium/skills/accessibility-compliance/SKILL.md` (WCAG), `.stremiium/skills/mobile-design/touch-psychology.md` (thumb zone, Fitts' Law — Flo-menu rationale).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read the assigned research inputs (plan all sections; charter §3/§5/§8/§10; CDO agent doc §0.2; skills above; `README.md` and `docs/program/tbs/tbs/PROGRAM_BRIEF.md` at the physical path) and extract design obligations with [S#] citations and evidence grades.
2. Read the completed sibling briefs (VIZ-013, VIZ-015, VIZ-017, VIZ-018 at minimum, plus VIZ-010 captain governance) and record each binding decision with its boundary so this vision references rather than restates them.
3. Draft the learning-environment concept statement and the five vision pillars (§8.1): what it feels like to take a 3,900-file repo from unknown to understood.
4. Specify the 7-view information architecture (§8.2): route, question answered, workflow stage, primary content, key components, data source, downstream detail owner.
5. Specify the visual language (§8.3): dark-first rationale; liquid-glass accent rules with named fallbacks; palette/zone-hue/typography citations (VIZ-017 + SDS baseline [FACT]); motion contract; iconography posture.
6. Specify the learning workflow (§8.4): explore → inspect → learn stage definitions, view mapping, progressive-disclosure defaults, loop closure, wayfinding targets.
7. Specify the layout system (§8.5): desktop sidebar groups, ⌘K palette behavior, Flo-menu thumb-zone mobile nav; delegate pattern mechanics to VIZ-013.
8. Draw the delegation boundary table (§8.6) so no facet is re-specified; freeze the view-registry and vision-direction schemas (§8.7) as the Code Mode contract.
9. Compile into this unconsolidated brief; run validation checklist (§9 below); hand off to Sparkling Curious (§15 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. This section holds the design specification itself — the schemas and rules the vision hands to Code Mode.

### 8.1 Learning-environment concept

The repository is treated as a **navigable place, not a list**: zones are districts, files are addresses, commits are weather, decks are guided tours, the council graph is the org chart of the people (agents) who built it. The user always knows three things: where they are, what they are looking at, and what to learn next.

Vision pillars (acceptance framing for every downstream spec):

- **P1 — Place over list:** spatial mental models (tree, 3D scene, globe) before flat listings; the five content zones are the primary mental model, folders the second.
- **P2 — Evidence one click deep:** every dashboard stat and chart is ≤2 clicks from raw evidence (the file, the diff, the commit) — the viz app never asks to be trusted.
- **P3 — Learn by layers:** zone → folder → file → line of history; progressive disclosure collapses `rea/` and git internals by default.
- **P4 — Beauty serves comprehension:** liquid glass draws the eye to interactive surfaces (palette, cards, nav); it is never applied where it would fight reading.
- **P5 — Offline-tolerant:** snapshot-only mode is a first-class design state with identical layouts and a data-status banner (plan §8; charter §10 device/network reality).

### 8.2 Information architecture — 7 views

| # | View | Route | Question it answers | Stage | Primary content & key components | Data source | Detail owner |
|---|---|---|---|---|---|---|---|
| 1 | Overview dashboard | `/` | "What is this repo, how big is it, is it alive?" | explore | cobe globe hero (reduced markers), stat cards (files, dirs, commits, councils), commits-over-time area chart, file-type mix donut, top-churn diverging bars; GSAP count-ups | `/api/stats` + snapshots | VIZ-015 |
| 2 | Explorer | `/explorer` | "What's in it and how is it organized?" | explore | virtualized lazy file tree (rea/ + git internals collapsed; `rea/node_modules`/`.git` excluded), shadcn `command` search, file viewer: markdown render + size, last commit, history link | `/api/tree` | VIZ-013/020 |
| 3 | Commits timeline | `/commits` | "What changed, when, and how much?" | inspect | GSAP ScrollTrigger animated timeline; `CommitRecord` cards (sha, date, author, message, filesChanged, insertions/deletions); click → diff summary → full diff view | `/api/commits`, `/api/diff/[sha]` | VIZ-013/021 |
| 4 | 3D File System | `/explorer?view=3d` (toggle) | "Where is everything, spatially? Which zones dominate?" | explore | react-three-fiber scene: folders as clusters, files as nodes scaled by size, zone-hue materials, gold selection pulse (VIZ-017 rule 4), hover tooltip, click → open file in viewer; degraded points mode | `/api/tree` | VIZ-013/020 (placement Q §3.1) |
| 5 | Learn decks | `/learn` | "How do I become productive here?" | learn | ≥4 reveal.js decks (repo orientation, program brief, prompts & replies, councils & governance — VIZ-030), keyboard + speaker modes, zone-hue deck accents, deep links into Explorer | `content/decks` | VIZ-030 |
| 6 | Councils graph | `/councils` | "Who built this, and how is the organization structured?" | learn | interactive two-plane hierarchy: SC → 15 CRD coordinators → C01–C16 → departments [FACT, mapping.json v1.1.0]; click council → charter + its prompt folders | `/api/graph`, `graph.json` | VIZ-031 |
| 7 | Globe hero | `/globe` + hero on `/` | "What's the shape and identity of this workspace?" | explore | cobe WebGL globe: deep brand-green ocean, zone-hue markers by directory origin, gold hotspot (VIZ-017 rule 6); dashboard hero is the reduced-marker instance | cobe config | VIZ-015/VIZ-017 |

IA rules: exactly one sidebar nav item per view; every view cross-links (file → commits that touched it; commit → changed files; deck slide → referenced files; council → its prompt folders); breadcrumbs persist zone context (>5 segments ellipsize, per VIZ-013); no orphan routes; snapshot-only mode renders every view identically with a data-status banner.

### 8.3 Visual language

- **Dark-first.** Dark is the default theme; light and system-follow are first-class with full token parity (VIZ-018 §8.2–§8.3). Rationale: glass, 3D, and charts read best on dark; long learning sessions reduce glare; hero shaders need a dark substrate.
- **Liquid-glass accents per the Appllama liquid-glass-screens reference** [UNKNOWN — external, not vendored; see §5.1 mitigation]. Implementable in-repo proxies [FACT]: kv0906 `glass-components.tsx` (blur tiers 8/12/16/24px) + `digital-liquid.glsl.ts` (flowing-noise hero shader) + `@glass-ui` registry. Rules:
  1. Glass is an **accent material**: stat cards, command palette, nav rail, tooltips, chart cards.
  2. Glass is **never a body material**: file viewer, deck slides, and diff code stay matte so WCAG 2.1 AA contrast holds (VIZ-014 gate).
  3. **One WebGL hero per page load** — `digital-liquid` reserved for Overview/Globe; the 3D File System view carries no background shader.
  4. Hairline glass borders (`1px rgba(255,255,255,0.08)`) + top highlight + hover glow (VIZ-018 §8.5 recipe).
  5. Reduced-motion / low-end fallback: flat translucent panels, no shader, no blur — pre-approved rollback state (§13).
- **Stremiium palette per VIZ-017 — cite, do not re-derive.** Brand chrome: ZAR green `#007749` (nav accents, active tab, stat KPI) with dark-mode AA primary `#4CC38A`; gold `#FFB612` highlight-only (selected node, active timeline entry, hero accent arc — never body text). Six zone hues are the ONLY categorical chart hues, fixed legend order docs `#2563EB/#60A5FA` · prompts `#D97706/#FBBF24` · execution `#16A34A/#4ADE80` · `.stremiium/` `#7C3AED/#A78BFA` · rea `#64748B/#94A3B8` · git-internals `#9CA3AF/#D1D5DB` (dashed outline, collapsed default). Namespaces `--st-*` / `--zone-*` / semantic stay separate; single token source `viz/lib/brand.ts`; colour is never the sole encoding (icon + label pair, VIZ-017 rule 9). SDS baseline note: the broader Stremiium system cites electric blue `#0066FF` / orange `#FF6600` [FACT, C08 agent doc §0.2]; the ZAR green/gold viz-app application is VIZ-017's ratified divergence — flagged for SC synthesis (§3.7), not re-litigated here.
- **Typography [FACT, both sources agree]:** Space Grotesk display/headings, Inter UI/body, JetBrains Mono code/diffs/data labels; scale 12–56; system-stack fallbacks for offline build (VIZ-017).
- **Motion contract:** GSAP page transitions <400ms; ScrollTrigger reveals on Commits; tree expand/collapse micro-interactions; optional wigggle-ui clock/dashboard widget in the sidebar footer; Web Audio (AudioContext) micro-feedback default-muted (§3.8); global reduced-motion switch freezes shaders, converts transitions to fades (VIZ-014/VIZ-018).
- **Iconography:** lucide-react primary, bootstrap-icons supplementary, animateicons.in animated set for loading/empty states (VIZ-019); zone identity always pairs hue with icon + label.

### 8.4 Learning workflow — explore → inspect → learn

The app takes a user with zero repo knowledge to productive understanding of a ~3,900-file [EST], 16-council workspace. Verb lexicon aligns with VIZ-017's LEXICON (Explore / Inspect / Learn).

1. **EXPLORE (wayfinding — "what exists?").** The Overview answers macro questions (scale, activity, zone mix); the Explorer tree and the 3D File System build the spatial mental model. Progressive disclosure: five content zones are the primary layer (docs/, prompts/, execution/, .stremiium/, rea/), folders the second; `rea/` internals and git internals stay collapsed until summoned. Target: the user can name the five zones and their purpose within 5 minutes of first load.
2. **INSPECT (verification — "what exactly is this?").** From any tree, 3D, chart, or deck node: open the file viewer (markdown render, size, last commit, history link) or the commit (timeline → diff summary → full diff). Pillar P2 bar: every dashboard claim is ≤2 clicks from raw evidence.
3. **LEARN (retention — "how does it fit together?").** reveal.js decks teach the repository's story (orientation, program brief, prompts & replies, councils & governance — VIZ-030); the Councils graph teaches the organization that produced it; every deck slide deep-links into Explorer so learning terminates in inspection, not in a dead end.

**Loop closure:** the workflow is circular, not linear — decks send users back to explore; churn hotspots invite inspection; council nodes open prompt folders. The connective tissue is the ⌘K palette + breadcrumbs + shared zone legend: any node is reachable in ≤2 actions from anywhere (VIZ-013 interaction map). Wayfinding bars: 5-minute zone literacy (stage 1); first raw-evidence inspection within 10 minutes (stage 2); first completed deck within one session (stage 3).

### 8.5 Layout system

- **Desktop (≥1024px):** persistent collapsible left sidebar grouped by intent — **Discover** (Overview, Globe), **Understand** (Explorer, 3D File System, Commits), **Learn** (Decks, Councils), **System** (theme toggle light/dark/system, reduced-motion switch, data-status indicator snapshot/live). Glass accent rail (§8.3 rule 1); active item carries the brand-green indicator with a gold selected mark.
- **Command palette (all breakpoints):** shadcn cmdk (`Command` component, plan §4 install), global ⌘K / Ctrl+K; fuzzy search across files, folders, commits, and views; groups per VIZ-013 (Files, Folders, Commits, Views) + recents; keyboard-first; snapshot-time index (§4.7). The palette is a primary view-switcher for all users, not a power-user extra — it is the realization of pillar P2 at navigation level.
- **Mobile (<1024px):** **Flo-menu thumb-zone navigation** — bottom-docked floating menu anchored in the natural thumb arc (per `.stremiium/skills/mobile-design/touch-psychology.md`: Fitts' Law, ≥44px targets, primary actions in the bottom thumb zone); fans out in an arc within the thumb sweep; bottom Sheets instead of Dialogs. VIZ-013 §8 owns the mechanics: float <768px, dock 768–1023px, rail ≥1024px.
- **Chrome:** zone-aware breadcrumb strip on all non-dashboard views; GSAP page transitions; one-WebGL-hero budget enforced app-wide.

### 8.6 Delegation boundaries (no facet re-specified here)

| Facet | Owning brief | This vision provides |
|---|---|---|
| Palette, zone hues, typography, lexicon, logo | VIZ-017 | direction + citation only |
| Token implementation, themes, glass recipes | VIZ-012 + VIZ-018 | usage rules + fallback policy |
| Layouts, palette UX, Flo-menu mechanics | VIZ-013 | intent groups + breakpoints posture |
| Accessibility floor (WCAG 2.1 AA, reduced-motion, keyboard) | VIZ-014 | conformance targets + gates |
| Dashboard analytics content | VIZ-015 | view purpose + question |
| Learning-workflow research | VIZ-016 | workflow skeleton (§8.4) to cross-check |
| Icon system | VIZ-019 | usage occasions |
| Deck content and generation | VIZ-030 | deck roster + deep-link requirement |
| Graph data and edges | VIZ-031 | view purpose + question |
| Data contracts, snapshots | VIZ-022 | snapshot-only design states |
| Build/implementation | VIZ-020–VIZ-025 | vision, not code |

### 8.7 Reference schemas

```ts
// View registry — the IA contract this vision freezes for Code Mode
interface VizView {
  viewId: 'overview' | 'explorer' | 'commits' | 'fs3d' | 'learn' | 'councils' | 'globe'
  route: string              // "/", "/explorer", "/commits", "/explorer?view=3d", "/learn", "/councils", "/globe"
  question: string           // rendered as the view subtitle (wayfinding)
  stage: 'explore' | 'inspect' | 'learn'
  primaryData: string[]      // '/api/stats' | '/api/tree' | '/api/commits' | '/api/diff/[sha]' | '/api/graph' | snapshots
  keyComponents: string[]    // cobe hero, virtualized tree, GSAP timeline, R3F scene, reveal.js deck, graph view
  detailOwner: string        // downstream VIZ task that owns the facet spec
}
```

```ts
// Vision direction — values authoritative in their owning briefs, cited here
interface VizVisionDirection {
  themes: { default: 'dark'; supported: ['light', 'system'] }              // VIZ-018 mechanics
  glass: {
    material: 'accent-only'
    surfaces: ['stat-cards', 'command-palette', 'nav-rail', 'tooltips', 'chart-cards']
    heroShader: 'digital-liquid (one per page load)'
    fallback: 'flat translucent, no shader, no blur'
  }
  palette: {
    source: 'viz/lib/brand.ts (VIZ-017)'
    chrome: '#007749 / #4CC38A (dark AA)'
    highlight: '#FFB612 (marks only, never body text)'
    zones: 6; legendOrder: ['docs', 'prompts', 'execution', '.stremiium', 'rea', 'git-internals']
  }
  typography: { display: 'Space Grotesk'; body: 'Inter'; mono: 'JetBrains Mono' }  // [FACT]
  motion: { pageTransitionMs: 400; reducedMotion: 'system preference + manual switch' }
  workflow: { stages: ['explore', 'inspect', 'learn']; disclosure: 'zones first; rea/ + git collapsed'; evidenceDepthClicks: 2 }
  layout: { desktop: 'sidebar + cmdk palette'; mobile: 'flo-menu thumb-zone'; breakpoints: [768, 1024] }
}
```

---

## 9. Validation Checklist

- [ ] Concept statement present with the five named vision pillars (§8.1)
- [ ] All 7 views specified with route, question, stage, primary data, key components, detail owner (§8.2)
- [ ] Visual language states dark-first + light/system support, liquid-glass accent rules with named fallbacks, palette/zone citations to VIZ-017 (no re-derived hex values)
- [ ] Typography cited [FACT] to C08-chief-design-officer.agent.md §0.2 with VIZ-017 agreement noted
- [ ] Learning workflow defines explore → inspect → learn with view mapping, progressive-disclosure defaults, loop closure, and wayfinding targets (§8.4)
- [ ] Layout specifies desktop sidebar groups + ⌘K command palette + Flo-menu thumb-zone mobile nav with mechanics delegated to VIZ-013 (§8.5)
- [ ] Delegation boundaries explicit per facet (§8.6) — no spec collision with VIZ-012/013/014/015/017/018
- [ ] Evidence grades preserved ([FACT]/[EST]/[INFER]/[UNKNOWN]); Appllama graded external [UNKNOWN]
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Open questions enumerated with recommended defaults (§3)
- [ ] Offline/snapshot-only design states addressed (plan §8)
- [ ] WCAG 2.1 AA floor + reduced-motion stated with VIZ-014 as gate
- [ ] Security considerations addressed (§10), including secret exclusion from every view surface
- [ ] SA regulatory considerations addressed where relevant (§11)
- [ ] Compliance gate named (C08 + SC, captain ratification G-VIZ-D1–D4)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described
- [ ] No private keys, credentials, or PII in the brief

---

## 10. Security Considerations

- The viz app renders repository content only — no customer data surfaces (charter §6 analog: no customer data in designs).
- Every visualization surface must exclude secrets by design: the tree, 3D scene, diff viewer, palette index, and snapshots default-exclude `.env*` and key/token/credential files alongside `rea/node_modules` and `.git`; the snapshot generator scrubs them — coordinate with VIZ-022 (C12 consulted per its gate) and align with the T8.0 secret-scan residual noted in the root README.
- Excluded paths are excluded from **every** index (3D scene, palette, search), not just the visible tree — no secret-enumeration oracles.
- Design briefs may contain unreleased product info; distribution stays within C08 + SC synthesis (captain informed; C15 per charter §5 interface).
- No private keys, credentials, or PII in this brief or its execution result.

---

## 11. South African Regulatory Considerations

- **CPA 68 of 2008** (consumer plain language): view subtitles, deck content, and microcopy use plain sentence-case language (VIZ-017 lexicon: Explore / Inspect / Learn).
- **Employment Equity Act 55 of 1998** (reasonable accommodation): WCAG 2.1 AA floor, reduced-motion support, and keyboard-first palette are conformance obligations (charter §8 KPI; VIZ-014 gate).
- **POPIA:** no personal data is processed by the viz app; commit author names render as repository data without enrichment.
- **Charter §10 device/network reality:** low-end Android, limited data, unstable connectivity — degraded 3D points mode, snapshot-only state, and ≥44px touch targets are compliance-adjacent design obligations, not polish items.

---

## 12. Compliance Gate

- **C08 Design-Creative + SC (Sparkling Curious, SC-MASTER-001).** This vision is proposed until captain VIZ-010 records ratification in the ratification register against design gate G-VIZ-D1–D4 (WCAG 2.1 AA pass, brand consistency, responsive breakpoints, reduced-motion); SC synthesizes all 18 viz briefs and is the only authority that moves the program to Plan Mode/Code Mode.
- Consult interfaces: VIZ-014 countersigns contrast/AA pairs; VIZ-012/VIZ-018 countersign token/glass feasibility; C11 (VIZ-020/VIZ-022) consulted on 3D performance budgets and snapshot mechanics via the captain's escalation path when conflicts arise.

---

## 13. Rollback Plan

- Vision-level changes after ratification re-open the C08 + SC gate; the captain's ratification register records the re-open.
- Visual-language rollback is token-scoped: the glass treatment reverts to flat translucent surfaces with zero IA/workflow change (tokens isolated in `viz/lib/brand.ts` + `globals.css`; no hardcoded values per nguyenthienthanh design-system rules).
- If liquid glass fails VIZ-014 AA or low-end performance during validation, the §8.3 fallback (flat translucent, no shader, no blur) is the pre-approved rollback state — no re-design cycle required.
- Palette rollback: any hardcoded-hex implementation is reverted and re-pointed at the token source (VIZ-017 rollback analog).
- IA rollback: a view whose data contract fails may be hidden, never deleted; the 7-view registry stays authoritative for later phases.

---

## 14. Escalation Path

- VIZ-011-CHIEF-DESIGN-OFFICER → C08 Captain (VIZ-010) → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- C08-internal contradictions (e.g., this vision vs VIZ-017 palette, or vs VIZ-018 glass recipes) resolve at captain level first; cross-council conflicts (C08 design vs C11 feasibility — 3D budgets, virtualized-tree constraints, snapshot-only mode) escalate to SC with a written statement of conflict per the VIZ-001 arbitration model.
- Critical security/regulatory/privacy events skip to SC + C01 + C12 immediately (1h SLA per `workflow-routing.md` §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed unconsolidated brief at `prompts/viz/c08-design-creative/chief-design-officer/prompt.md` (with its execution result at `execution/results/viz/c08-design-creative/chief-design-officer/execution-result.md` per root README convention) is handed to Sparkling Curious (SC-MASTER-001) for synthesis with the other 17 viz briefs — captain VIZ-010 ratification first, then SC conflict de-duplication and gating before Plan Mode/Code Mode.
- SC monitors cross-council conflicts (workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix; the parallel-authoring ordering (VIZ-013/015/017/018 landed before this umbrella vision) and the §3.7 palette-provenance question are flagged for de-duplication during synthesis.
- The brief must pass the §9 Validation Checklist before handoff.
