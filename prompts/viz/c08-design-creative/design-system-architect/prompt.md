# Master Prompt — C08-DESIGN-SYSTEM-ARCHITECT (Design-System-Architect)

**Act as the assigned viz program agent or subagent.**

**Execution model:** auto.
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode. All commands below are specifications for later Code Mode execution — do not run installs during Ask Mode.
**Task:** VIZ-012 (plan `1794948779713-repo-viz-learning-environment.md` §3, C08 Design-Creative; decisions per plan §2, scaffold per plan §4).
**Workspace:** keep all artifacts inside the repo visualization & learning environment workspace — briefs under `prompts/viz/**`, implementation under `viz/`.
**Output:** one unconsolidated Ask Mode brief (this prompt) whose content is implemented in Code Mode as `viz/components.json`, `viz/app/globals.css`, `viz/lib/brand.ts`, and `viz/REGISTRIES.md`.
**Depth:** expand technical, design, accessibility, security, and operational depth regardless of model specificity.
**Agent ID:** C08-DESIGN-SYSTEM-ARCHITECT
**Council:** C08 C08 Design-Creative
**Gate:** C08 Design-Creative (VIZ-010 Captain ratification) + C11 Dev-Engineering (VIZ-020 implementation alignment)

---

## 1. Summary

- This master prompt instructs C08-DESIGN-SYSTEM-ARCHITECT to architect the design-token system and the component registry manifest for the interactive repo visualization & learning environment (`viz/`), per plan §2 (registry decision: curated subset installed; full user list documented in `viz/REGISTRIES.md`) and plan §4 (scaffold).
- Deliverable (a) — Token system: color tokens (light/dark), typography, spacing, radius, motion, plus semantic extensions for this app (zone colors, chart colors, status colors, highlight, liquid-glass tokens), expressed as CSS variables in the shadcn `components.json` convention (§8.1–§8.9). Values implement the published VIZ-017 brand decisions (D1 palette: ZAR-green primary + gold highlight; D2 zone coding) — this brief binds them into the token registry; it does not re-derive brand colors.
- Deliverable (b) — Registry manifest: the complete curated list of 29 user-supplied shadcn registries (@7ovr … @openpolicy) with exact `pnpm dlx shadcn@latest registry add @X` commands and purpose notes, published at `viz/REGISTRIES.md` (§8.10–§8.12).
- Deliverable (c) — Curated install subset for this app: `button card table tabs badge separator scroll-area sheet command tooltip dialog chart` (§8.11).
- Research inputs: `.stremiium/skills/web-artifacts-builder` (shadcn component patterns, anti-slop rules), `.stremiium/skills/davila7-ui-design-system/ui-design-system` (token generation: colors, typography, 8pt spacing), `.stremiium/skills/davila7-tailwind-patterns`, `.stremiium/skills/nguyenthienthanh-design-expert`, `.stremiium/skills/accessibility-compliance` (WCAG 2.1 AA), `.stremiium/skills/building-native-ui` (canvas/3D color needs).
- Coordination interfaces: VIZ-017 brand-manager (palette D1 + zone coding D2 + typography — published, binding; cite `prompts/viz/c08-design-creative/brand-manager/prompt.md` instead of re-deriving), VIZ-018 theme-designer (light/dark/system + liquid-glass, consumes this registry), VIZ-014 accessibility-design-lead (contrast countersign, reduced motion), VIZ-015 dashboard-designer (chart assignments), VIZ-019 icon-illustration-lead (animated icon registries), VIZ-020 frontend-engineer (implementation).
- Output artifact: design specifications implemented in Code Mode as `viz/components.json`, `viz/app/globals.css`, `viz/lib/brand.ts`, `viz/REGISTRIES.md`.

---

## 2. Assumptions

- The `viz/` app is Next.js 15 (App Router, TS) + Tailwind CSS + shadcn/ui per plan §2 stack spine; `pnpm dlx shadcn@latest init` (plan §4 step 2) generates the baseline `components.json` and `app/globals.css` when network permits.
- Design tokens are the single source of visual truth: components consume only semantic tokens, never raw palette values; the shadcn init output is treated as the ground-truth file format and the token values in §8 are merged into it.
- VIZ-017 brand decisions (D1 palette, D2 zone coding, typography, single token source `viz/lib/brand.ts`) are published and binding; this brief is the token-registry implementation layer of those decisions.
- The 29 user-supplied registries enumerated in §8.10 are the canonical manifest (plan §2 cites "30+ registries"; the enumerated list is authoritative and `viz/REGISTRIES.md` remains extensible for any further user-supplied registry).
- The sandbox may be offline (plan §8): registry and component installs may fail; the manifest documents exact commands so installs run later; shadcn core components cover all required UI (plan §8 mitigation).
- Zone coding is fixed by VIZ-017 D2: five content zones (`docs`, `prompts`, `execution`, `.stremiium`, `rea`) plus a sixth utility coding for git internals (dashed outline, collapsed default); fixed legend order docs→prompts→execution→.stremiium→rea→git.

---

## 3. Questions

- Which registry items are premium or unavailable, and what substitutes cover their function? (Verify per plan §8 before documenting skip status.)
- Does `shadcn@latest init` in the target environment emit Tailwind v3 (HSL-channel variables in `tailwind.config` + `globals.css`) or v4 (`@theme inline` in `globals.css`)? Token values in §8.3 are specified in HSL channels and must be ported 1:1 to whichever convention init produces.
- Which of the 29 registries contribute actually-used components to `viz/` views versus remaining documented-only? (§8.10 "used in" column.)
- How should `--primary` (ZAR green, VIZ-017 D1) coexist with `--success` green in charts without semantic collision? (Proposal below: `--success` is a deeper/desaturated green family; joint countersign VIZ-015 + VIZ-014.)
- Should the file Q&A layer (VIZ-025) adopt `@ai-elements`/`@agents-ui` chat primitives now (curated) or document them for later?

---

## 4. Concerns

- No token system defined → 3D scene, charts, and UI drift into inconsistent colors; canvas contexts (recharts, three.js) cannot read CSS variables at init time and need mirrored TS constants.
- Registry installs may fail offline; undocumented commands would make the manifest irreproducible later.
- Third-party registries are untrusted code fetched and executed via `pnpm dlx` — supply-chain risk if installed without verification.
- Token-source fragmentation: VIZ-017 (brand), VIZ-018 (themes/glass), and this registry all touch color values. Mitigation: VIZ-017 values are cited as [FACT], never re-derived; `viz/lib/brand.ts` is the only file allowed to hold raw hex; theme variants only remap the semantic layer.
- Inconsistent density (tree rows, table rows, palette items) hurts the data-heavy explorer/dashboard surfaces.

---

## 5. Suggested Improvements

- Define the three-tier token architecture (§8.1) and enforce it: primitives → semantic (only tier components consume) → component-level tokens.
- Mirror every canvas-consumed color into the single token source `viz/lib/brand.ts` (per VIZ-017) so UI, charts, and the 3D scene never disagree.
- Grade registry purpose notes with [FACT]/[EST]/[UNKNOWN]/[INFER] evidence tags and verify ungraded claims before install.
- Record per-registry status (`added | pending | skipped: reason`) in `viz/REGISTRIES.md` so offline runs leave a reproducible trail (plan §8).
- Require AA contrast (4.5:1 text, 3:1 non-text graphics) for every token pair, verified by VIZ-014.

---

## 6. Missing Dependencies

- VIZ-014 countersign on AA text/lightness variants of the VIZ-017 palette (dark-mode zone lightness lifts) before token ratification.
- VIZ-010 captain gate ratification of the token architecture and registry manifest.
- Network availability to verify registry reachability (`pnpm dlx shadcn@latest registry add …` dry-run).
- VIZ-020 frontend scaffold — token file targets (`viz/app/globals.css`, `viz/components.json`, `viz/lib/brand.ts`) only exist after scaffold (plan §4).
- VIZ-015 dashboard chart spec — final chart-series assignments for `--chart-1..5`.

---

## 7. Step-by-Step Implementation or Research Plan

- 1. Read plan §2 (registry decision) and §4 (scaffold + install sequence) and confirm the token file targets and curated component list.
- 2. Read assigned research inputs: `.stremiium/skills/web-artifacts-builder` (shadcn theming system, anti-slop rules), `.stremiium/skills/davila7-ui-design-system` (design_token_generator.py: colors, typography, 8pt spacing, shadows), `.stremiium/skills/davila7-tailwind-patterns`, `.stremiium/skills/nguyenthienthanh-design-expert`, `.stremiium/skills/accessibility-compliance`.
- 3. Extract token obligations and map each to the shadcn `components.json` convention (channel-format CSS variables in `:root`/`.dark`).
- 4. Define the three-tier token architecture (§8.1), the core token tables (§8.3–§8.8) implementing the published VIZ-017 values as [FACT], and the single-source canvas mirror `viz/lib/brand.ts` (§8.9), grading any remaining provisional values [EST]/[INFER].
- 5. Compile the full registry manifest (§8.10): all 29 user-supplied registries, exact `pnpm dlx shadcn@latest registry add @X` commands, purpose notes with evidence grades, and per-app usage mapping.
- 6. Pin the curated install subset (§8.11) to the 12 named shadcn components and map each to its `viz/` views; note the plan §4 scaffold extension (`treelike-context-menu`).
- 7. Specify the `viz/REGISTRIES.md` document schema (§8.12) so the manifest is reproducible in both online and offline runs.
- 8. Run validation checklist (§9).
- 9. Hand off to Sparkling Curious (§15) for synthesis with other C08 outputs before Code Mode execution.

---

## 8. Commands/Configs/Schemas Where Applicable

No commands are executed in Ask Mode. Everything below is specification for Code Mode (plan §3, §4).

### 8.1 Token architecture (three tiers)

1. **Primitive tier** — raw Tailwind palette (zinc scale, hue stops). Never referenced by components directly.
2. **Semantic tier** — the shadcn CSS variables (`--background`, `--foreground`, `--primary`, …). The ONLY tier app components consume (via Tailwind classes generated from `components.json` cssVariables).
3. **Component/extension tier** — app-specific tokens: zones (`--zone-*`, incl. `--zone-git`), chart series (`--chart-1..5`, continuous only), status (`--success`/`--warning`/`--info`), highlight (`--highlight`), glass surfaces (`--glass-*`), density/motion tokens. Consumed by named views (explorer, charts, 3D scene, overlays).

Consumption rules: components use semantic/utility classes only; charts and three.js materials consume the typed constants from `viz/lib/brand.ts`; no hex literals in component code.

### 8.2 `viz/components.json` (shadcn convention)

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

`baseColor: zinc` gives the calm, developer-tool-neutral ground (anti-slop: no purple-gradient identity, per `web-artifacts-builder` rules); the brand hue enters only through `--primary` and `--highlight` (VIZ-017 D1), so brand retuning never touches the neutral surface scale.

### 8.3 Color tokens — core (shadcn channel format, `:root` light and `.dark`)

Channel convention: values are space-separated HSL channels consumed as `hsl(var(--token))` (Tailwind v3 init output). If `shadcn@latest init` emits Tailwind v4 `@theme inline` blocks instead, port the same values into that format; semantic names are identical.

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 10% 3.9%;
  --primary: 157 100% 23%;            /* ZAR green #007749 — VIZ-017 D1 [FACT] */
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 240 10% 3.9%;
  --radius: 0.5rem;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 6% 10%;
  --card-foreground: 0 0% 98%;
  --popover: 240 10% 3.9%;
  --popover-foreground: 0 0% 98%;
  --primary: 151 50% 53%;             /* #4CC38A dark-mode primary — VIZ-017 D1 [FACT] */
  --primary-foreground: 157 100% 10%;
  --secondary: 240 3.7% 15.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 240 3.7% 15.9%;
  --muted-foreground: 240 5% 64.9%;
  --accent: 240 3.7% 15.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 45%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 3.7% 15.9%;
  --input: 240 3.7% 15.9%;
  --ring: 240 4.9% 83.9%;
}
```

Light/dark parity: identical semantic names, `.dark` raises lightness/saturation for AA on dark surfaces. Theme switching (`light | dark | system`) is VIZ-018's scope; this system guarantees both blocks exist and tokens carry no theme-specific names.

### 8.4 Color tokens — extensions (chart, zone, status, highlight, glass)

Zone and brand values are the VIZ-017 D1/D2 published decisions [FACT]; HSL channels below are exact conversions of the VIZ-017 hexes (light→dark pairs).

```css
:root {
  /* continuous chart series (recharts; categorical charts use --zone-* ONLY — VIZ-017 D2) */
  --chart-1: 157 84% 34%;   /* commits-over-time area — primary-green family */
  --chart-2: 42 100% 44%;   /* churn/secondary bar — gold family */
  --chart-3: 215 16% 47%;   /* tertiary series — slate family */
  --chart-4: 151 50% 40%;   /* quaternary series — deep green */
  --chart-5: 218 11% 65%;   /* quinary series — neutral */
  /* status (deliberately distinct from chart greens) */
  --success: 142 60% 32%;  /* diff additions, build pass */
  --warning: 32 95% 40%;   /* caution states, partial gates */
  --info: 221 83% 53%;     /* notices (docs-blue family) */
  /* repo zones — VIZ-017 D2 [FACT]; the ONLY categorical hues */
  --zone-docs: 221 83% 53%;       /* #2563EB */
  --zone-prompts: 32 95% 44%;     /* #D97706 */
  --zone-execution: 142 76% 36%;  /* #16A34A */
  --zone-stremiium: 262 83% 58%;  /* #7C3AED */
  --zone-rea: 215 16% 47%;        /* #64748B */
  --zone-git: 218 11% 65%;        /* #9CA3AF — dashed outline, collapsed default */
  /* highlight — VIZ-017 D1: selected/highlight surfaces ONLY, never text or body copy */
  --highlight: 42 100% 54%;       /* gold #FFB612 */
  --highlight-foreground: 0 0% 10%;
  /* liquid-glass surfaces (VIZ-018 co-owns) — complete color values, not channels */
  --glass-bg: rgba(255, 255, 255, 0.62);
  --glass-border: rgba(255, 255, 255, 0.55);
  --glass-highlight: rgba(255, 255, 255, 0.35);
}

.dark {
  --chart-1: 151 50% 53%;
  --chart-2: 43 96% 56%;
  --chart-3: 215 20% 65%;
  --chart-4: 142 69% 50%;
  --chart-5: 216 12% 84%;
  --success: 142 69% 50%;
  --warning: 43 96% 56%;
  --info: 213 94% 68%;
  /* VIZ-017 D2 dark pairs [FACT] */
  --zone-docs: 213 94% 68%;       /* #60A5FA */
  --zone-prompts: 43 96% 56%;     /* #FBBF24 */
  --zone-execution: 142 69% 58%;  /* #4ADE80 */
  --zone-stremiium: 255 92% 76%;  /* #A78BFA */
  --zone-rea: 215 20% 65%;        /* #94A3B8 */
  --zone-git: 216 12% 84%;        /* #D1D5DB */
  --highlight: 42 100% 54%;
  --highlight-foreground: 0 0% 10%;
  --glass-bg: rgba(12, 12, 16, 0.55);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-highlight: rgba(255, 255, 255, 0.12);
}
```

Rules: categorical charts (zone distribution, per-zone series) consume `--zone-*` exclusively, with fixed legend order docs→prompts→execution→.stremiium→rea→git (VIZ-017 D2); `--chart-1..5` serve continuous/sequential series only, final assignments countersigned with VIZ-015. Diff red is `--destructive`; diff additions are `--success` — no parallel tokens. Every zone/chart/status/highlight token must hold ≥ 3:1 contrast against both `--background` and `--card` in its theme (WCAG 1.4.11 non-text); the dark-mode lightness lifts in VIZ-017 D2 are provisioned for exactly this and are countersigned by VIZ-014.

### 8.5 Typography tokens

- Families (VIZ-017, binding): `--font-heading: "Space Grotesk", …system stack` (headings/display), `--font-body: "Inter", …system stack` (UI + prose), `--font-code: "JetBrains Mono", ui-monospace, …` (code, paths, SHAs, diffs), loaded via `next/font` with system-stack offline fallbacks per VIZ-017. Anti-slop guidance (`web-artifacts-builder`) is honored through restraint — no purple-gradient identity, asymmetric layouts, non-uniform radii — while the brand faces remain VIZ-017's decision.
- Scale (Tailwind classes; single source, no custom sizes):

| Token | Class | Size/leading | Weight/tracking | Use |
|---|---|---|---|---|
| display | `text-4xl md:text-[56px] tracking-tight` | 36–56 / 1.1 | 600 | overview hero (56px ceiling per VIZ-017 scale 12–56) |
| h1 | `text-3xl tracking-tight` | 30 / 1.2 | 600 | page titles |
| h2 | `text-2xl` | 24 / 1.3 | 600 | section titles |
| h3 | `text-lg` | 18 / 1.4 | 500 | card/panel titles |
| body | `text-base` | 16 / 1.6 | 400 | reading prose (learn decks, file viewer) |
| body-sm | `text-sm` | 14 / 1.5 | 400 | UI default, table cells |
| caption | `text-xs text-muted-foreground` | 12 / 1.4 | 400 | metadata, timestamps |
| code | `font-mono text-[13px] leading-relaxed` | 13 / 1.6 | 400 | diffs, paths, SHAs |
| stat | `text-2xl font-semibold tabular-nums` | 24 / 1.2 | 600 | stat cards |

- Numerals: `tabular-nums` on all stat values, chart axes, and commit counts; `font-mono` for SHAs (7-char prefix) and ISO dates in lists.

### 8.6 Spacing tokens

- Base grid 4px (Tailwind spacing scale), 8pt rhythm for macro layout (per `davila7-ui-design-system` token generator).
- Density (data-heavy surfaces): tree row `--tree-row: 2rem` (compact `1.75rem`); tree indent step `--tree-indent: 0.75rem` per depth; table row height `2.5rem`; command palette row `2.5rem`.
- Layout: page gutter `px-4` mobile → `px-8` desktop; section gap `gap-6`; dashboard grid `gap-4`; card padding `p-4` (stat) / `p-6` (panel); content max width `max-w-7xl` for prose panels; 3D canvas and timelines full-bleed.

### 8.7 Radius tokens

- `--radius: 0.5rem` with shadcn derivations: `sm = calc(var(--radius) - 4px)`, `md = calc(var(--radius) - 2px)`, `lg = var(--radius)`, `xl = calc(var(--radius) + 4px)`.
- Application: controls (button/input/select) `rounded-md`; cards and chart containers `rounded-lg`; overlays (dialog, sheet) `rounded-xl`; badges and filter chips `rounded-full`; 3D canvas and GSAP timeline track `rounded-none` (full-bleed).

### 8.8 Motion tokens (joint with VIZ-014)

- Durations: `--duration-fast: 150ms`, `--duration-base: 200ms`, `--duration-slow: 300ms`.
- Easing: `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`; spring accents via GSAP `back.out(1.7)` equivalents only on engagement moments.
- `prefers-reduced-motion` is a first-class token consumer: all CSS transitions, GSAP ScrollTrigger timelines, 3D auto-rotation, and reveal.js transitions must degrade to static equivalents (plan §5.7).

### 8.9 Single token source — `viz/lib/brand.ts`

Recharts and three.js cannot read CSS variables at init, and VIZ-017 mandates a single token source: `viz/lib/brand.ts` is the ONLY file allowed to hold raw hex values; the CSS variables in §8.3–§8.4 are reconciled against it (small sync check in `scripts/`, or generated from it).

```ts
// viz/lib/brand.ts — single token source (VIZ-017); no hardcoded hex anywhere else
export const brand = {
  primary: { light: '#007749', dark: '#4CC38A' },   // D1
  highlight: '#FFB612',                              // D1 — selected/highlight surfaces only
} as const
export const zoneColors = {                          // D2 — the only categorical hues
  docs: { light: '#2563EB', dark: '#60A5FA' },
  prompts: { light: '#D97706', dark: '#FBBF24' },
  execution: { light: '#16A34A', dark: '#4ADE80' },
  stremiium: { light: '#7C3AED', dark: '#A78BFA' },
  rea: { light: '#64748B', dark: '#94A3B8' },
  git: { light: '#9CA3AF', dark: '#D1D5DB', dashed: true, collapsedDefault: true },
} as const
export const chartPalette = { c1: '…', c2: '…', c3: '…', c4: '…', c5: '…' } as const // continuous series, values from §8.4
export const statusColors = { success: '…', warning: '…', info: '…', destructive: '…' } as const
```

Dark-theme variants resolve via a `useTheme`-aware hook that returns the active palette object; recharts series and three.js materials consume these constants so UI, charts, and the 3D scene never disagree.

### 8.10 Registry manifest — full user-supplied list (29)

Command form (exact, per plan §4 convention): `pnpm dlx shadcn@latest registry add @<registry>`. All 29 must appear in `viz/REGISTRIES.md` with command, purpose, and status. Grades: [FACT] verified provider-published; [EST] high-confidence ecosystem knowledge; [UNKNOWN] unverified — check before install; [INFER] derived from plan context.

| # | Registry | Install command | Purpose note (grade) | Used in |
|---|---|---|---|---|
| 1 | @7ovr | `pnpm dlx shadcn@latest registry add @7ovr` | Opinionated premium shadcn-style components/templates [EST] | documented |
| 2 | @8bitcn | `pnpm dlx shadcn@latest registry add @8bitcn` | 8-bit retro pixel-art component library (8bitcn) [FACT] | documented (retro accent option) |
| 3 | @8starlabs-ui | `pnpm dlx shadcn@latest registry add @8starlabs-ui` | 8StarLabs modern app components [UNKNOWN — verify] | documented |
| 4 | @aceternity | `pnpm dlx shadcn@latest registry add @aceternity` | Animated hero sections, bento grids, spotlight/moving-border effects (Framer Motion) [FACT] | hero/deck polish |
| 5 | @agentcn | `pnpm dlx shadcn@latest registry add @agentcn` | Agent-flavored components [UNKNOWN — verify] | documented |
| 6 | @agents-ui | `pnpm dlx shadcn@latest registry add @agents-ui` | Chat/agent conversation primitives (messages, threads, tool-call cards) [FACT] | optional file Q&A (VIZ-025) |
| 7 | @ai-elements | `pnpm dlx shadcn@latest registry add @ai-elements` | Vercel AI Elements: LLM chat primitives (Conversation, Message, Response, Tool) [FACT] | optional file Q&A (VIZ-025) |
| 8 | @animate-ui | `pnpm dlx shadcn@latest registry add @animate-ui` | Animated interactive components (tabs, accordion, button) with motion primitives [FACT] | curated registry target (plan §4 step 5) |
| 9 | @arc | `pnpm dlx shadcn@latest registry add @arc` | General shadcn registry [UNKNOWN — verify] | documented |
| 10 | @billingsdk | `pnpm dlx shadcn@latest registry add @billingsdk` | Stripe billing blocks (pricing table, checkout, customer portal) [FACT] | documented (n/a to viz UI) |
| 11 | @chamaac | `pnpm dlx shadcn@latest registry add @chamaac` | Community registry [UNKNOWN — verify] | documented |
| 12 | @cognicatch | `pnpm dlx shadcn@latest registry add @cognicatch` | Community registry [UNKNOWN — verify] | documented |
| 13 | @commercn | `pnpm dlx shadcn@latest registry add @commercn` | Commerce/storefront blocks [EST] | documented (n/a to viz UI) |
| 14 | @darx | `pnpm dlx shadcn@latest registry add @darx` | Community registry [UNKNOWN — verify] | documented |
| 15 | @dsikeres1 | `pnpm dlx shadcn@latest registry add @dsikeres1` | Personal community registry [UNKNOWN — verify] | documented |
| 16 | @elevenlabs-ui | `pnpm dlx shadcn@latest registry add @elevenlabs-ui` | ElevenLabs voice/conversational-AI components (voice badges, audio visualizers) [FACT] | documented (audio feedback option) |
| 17 | @extend | `pnpm dlx shadcn@latest registry add @extend` | Registry extending shadcn core patterns [UNKNOWN — verify] | documented |
| 18 | @flightcn | `pnpm dlx shadcn@latest registry add @flightcn` | Community registry [UNKNOWN — verify] | documented |
| 19 | @framecn | `pnpm dlx shadcn@latest registry add @framecn` | Community registry [UNKNOWN — verify] | documented |
| 20 | @gamekitui | `pnpm dlx shadcn@latest registry add @gamekitui` | Game-UI kit: HUD-style playful components [EST] | documented (gamified learning option) |
| 21 | @glass-ui | `pnpm dlx shadcn@latest registry add @glass-ui` | Liquid-glass (glassmorphism) components [FACT] | curated registry target (plan §4 step 5, VIZ-018) |
| 22 | @grootstudio | `pnpm dlx shadcn@latest registry add @grootstudio` | Studio registry of polished blocks [EST] | documented |
| 23 | @ha-components | `pnpm dlx shadcn@latest registry add @ha-components` | Community registry [UNKNOWN — verify] | documented |
| 24 | @heroicons-animated | `pnpm dlx shadcn@latest registry add @heroicons-animated` | Animated Heroicons set [FACT] | icon motion (VIZ-019) |
| 25 | @icons-animated | `pnpm dlx shadcn@latest registry add @icons-animated` | Animated icon set (animateicons.in per plan §3/VIZ-019) [INFER from plan] | icon motion (VIZ-019) |
| 26 | @limeplay | `pnpm dlx shadcn@latest registry add @limeplay` | Vidstack-based video player components [FACT] | documented (deck video option) |
| 27 | @loading-ui | `pnpm dlx shadcn@latest registry add @loading-ui` | Loaders/spinners/progress animations [EST] | 3D/churn loading states |
| 28 | @lmscn | `pnpm dlx shadcn@latest registry add @lmscn` | Learning-management blocks (courses, lessons) [EST] | /learn decks (VIZ-030) |
| 29 | @openpolicy | `pnpm dlx shadcn@latest registry add @openpolicy` | Policy/self-serve flow blocks (cancellation, privacy) [EST] | documented (n/a to viz UI) |

Per plan §8: any unavailable or premium item is skipped WITH a note in `viz/REGISTRIES.md` — shadcn core components cover all required UI. Registries marked [UNKNOWN] must be verified (fetchable registry) before any install attempt; verification failures do not block the app.

### 8.11 Curated install subset for this app (12 core shadcn components)

```bash
pnpm dlx shadcn@latest add button card table tabs badge separator scroll-area sheet command tooltip dialog chart
```

Component-to-view mapping: `button` — actions, filters, view CTAs; `card` — stat cards (overview), panels, deck cards; `table` — commit list, churn table; `tabs` — view/file-viewer mode switching; `badge` — zone tags, file-type chips, counts; `separator` — metadata dividers; `scroll-area` — tree viewport, diff panes; `sheet` — mobile nav, detail drawers (Flo/thumb-zone, VIZ-013); `command` — ⌘K file search/jump palette; `tooltip` — tree/3D hover info, truncated paths; `dialog` — diff detail, confirmations; `chart` — commits-over-time, churn, language mix (recharts wrapper, VIZ-015).

Scaffold note (plan §4 step 3): the install sequence additionally adds `treelike-context-menu` for explorer right-click actions; it extends, not replaces, this curated subset.

### 8.12 `viz/REGISTRIES.md` schema

```markdown
# viz — shadcn Registry Manifest
Status: { installed | pending | partial (list failures) }
## Core install
pnpm dlx create-next-app@latest … ; pnpm dlx shadcn@latest init
## Curated subset
pnpm dlx shadcn@latest add button card table tabs badge separator scroll-area sheet command tooltip dialog chart treelike-context-menu
## Registries (29)
### @<registry>
- Command: pnpm dlx shadcn@latest registry add @<registry>
- Purpose: <note + evidence grade>
- Status: { added | pending | skipped: reason }
- Items used: <component names or "documented only">
## Offline fallback
Exact commands to re-run when network permits (plan §8).
```

---

## 9. Validation Checklist

- [ ] All 16 required sections from Common Master Prompt Header present (header block + §1–§15)
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — commands specified for Code Mode, not executed
- [ ] Token system complete: colors (light/dark), typography, spacing, radius, motion, plus zone/chart/status/highlight/glass extensions
- [ ] Color values cite VIZ-017 published decisions (D1 palette, D2 zone coding) as [FACT] — no re-derived competing hues; single hex source `viz/lib/brand.ts`
- [ ] CSS variables follow the shadcn `components.json` convention (channel format, `:root`/`.dark`, `hsl(var(--x))` mapping)
- [ ] All 29 user-supplied registries documented with exact `pnpm dlx shadcn@latest registry add @X` commands and purpose notes
- [ ] Registry purposes graded [FACT]/[EST]/[UNKNOWN]/[INFER]; unverified items explicitly marked
- [ ] Curated subset is exactly: button card table tabs badge separator scroll-area sheet command tooltip dialog chart
- [ ] Offline fallback documented per plan §8 (skip-with-note; shadcn core covers required UI)
- [ ] AA contrast requirements stated (4.5:1 text, 3:1 graphics) with VIZ-014 verification hook
- [ ] Questions, concerns, assumptions, suggested improvements all populated (no placeholders/TBD)
- [ ] Missing dependencies identified (VIZ-014 countersign, VIZ-010 gate, network, scaffold)
- [ ] Security considerations addressed (registry supply chain, no secrets in tokens)
- [ ] Compliance gate named (C08 Design-Creative + C11 Dev-Engineering)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described
- [ ] No private keys, credentials, or PII in artifact

---

## 10. Security Considerations

- Third-party registries are untrusted code fetched and executed via `pnpm dlx`: verify authorship and registry reachability before install; review injected component source before it enters `viz/`; never auto-install all 29 registries silently — only the curated subset plus explicitly ratified items.
- No secrets, credentials, tokens, or PII inside design tokens or `viz/REGISTRIES.md`.
- Token files are static assets only; they must not import runtime secrets or environment values.
- Registry add failures are logged with status, not retried blindly (avoids supply-chain flapping on compromised mirrors).

---

## 11. South African Regulatory Considerations

- CPA 68 of 2008 consumer-accessibility alignment: WCAG 2.1 AA token contrast (§8.4) and reduced-motion support (§8.8) keep the learning environment consumable for all users.
- POPIA: the repo scan surfaces git author names and email addresses (commits view). Token/display policy: render author names only; never publish email addresses in snapshots, decks, or charts; document this in the data contracts (VIZ-022) and follow VIZ-014's review.

---

## 12. Compliance Gate

- C08 Design-Creative + C11 Dev-Engineering. Token architecture and the registry manifest require C08 Captain (VIZ-010) ratification; implementation alignment requires C11 (VIZ-020) because tokens and registries land in code. Brand hue and zone values are owned by VIZ-017 (this registry implements them); theme/glass tokens are co-gated with VIZ-018; AA countersign by VIZ-014.

---

## 13. Rollback Plan

- Token changes are file-level (`viz/app/globals.css`, `viz/lib/brand.ts`) and git-versioned; revert the commit to restore the prior visual system — no runtime migration required.
- Registry rollback: remove added registry components and their dependency entries, set its `viz/REGISTRIES.md` status to `skipped: reason`; the curated core subset must remain functional without any third-party registry.
- Breaking token renames require a mapping note in `viz/REGISTRIES.md` changelog and re-sync of the `viz/lib/brand.ts` mirrors.
- Escalate token/registry conflicts to C08 + C11 if rollback is contested.

---

## 14. Escalation Path

- C08-DESIGN-SYSTEM-ARCHITECT → C08 Design-Creative Captain (VIZ-010) → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events (e.g., malicious registry content) skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).
- Token conflicts with VIZ-017/VIZ-018 are arbitrated by Sparkling Curious per the Council Collaboration Matrix before Code Mode.

---

## 15. Artifact Handoff to Sparkling Curious

- The completed brief at `prompts/viz/c08-design-creative/design-system-architect/prompt.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C08 Design-Creative outputs (VIZ-010 … VIZ-019), conflict de-duplication (residual `--chart-1..5` assignments with VIZ-015; theme vs glass ownership with VIZ-018), and gating before Plan Mode/Code Mode execution. Brand values are already reconciled to VIZ-017 D1/D2 — no competing palette exists in this brief.
- Code Mode implementation targets: `viz/components.json`, `viz/app/globals.css`, `viz/lib/brand.ts`, `viz/REGISTRIES.md` (plan §4; single hex source per VIZ-017).
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
