# Master Prompt — VIZ-018 C08-THEME-DESIGNER (Theme-Designer)

**Act as the assigned Stremiium viz subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Task:** VIZ-018 of the repo-visualization plan at `.kilo/plans/1794948779713-repo-viz-learning-environment.md`.  
**Workspace:** all design artifacts target the `viz/` Next.js 15 (App Router, TS, Tailwind, shadcn/ui) app inside this repo.  
**Output:** one separate unconsolidated design brief at `prompts/viz/c08-design-creative/theme-designer/prompt.md` — consumed by the Phase 2–6 Code Mode build.  
**Depth:** expand design-token, theming, liquid-glass, 3D, chart, and accessibility depth regardless of model specificity.  
**Agent ID:** C08-THEME-DESIGNER  
**Council:** C08 C08 Design-Creative  
**Gate:** C08 Design-Creative + C11 Dev-Engineering

---

## 1. Summary

- This master prompt instructs C08-THEME-DESIGNER to specify the complete theme system for the `viz/` repo-visualization and learning environment: **light/dark/system** modes via `next-themes` + shadcn/ui CSS variables, a **liquid-glass accent treatment** (backdrop-blur cards, glass borders) referencing Appllama liquid-glass-screens, a full **token spec** (`--background`, `--foreground`, `--primary`, `--accent`, `--radius`, etc.) for both themes, and **theme-aware 3D scenes and charts**.
- Research data to ingest: `.stremiium/skills/kv0906-premium-frontend-design/premium-frontend-design/shaders/digital-liquid.glsl.ts` (liquid shader reference), `templates/glass-components.tsx` (glassmorphism kit), shadcn/ui theming conventions (CSS-variable `:root`/`.dark` contract), Appllama liquid-glass-screens registry reference, VIZ-017 brand palette (Stremiium identity), VIZ-012 design-system-architect token registry.
- Deliverables to specify: (D1) `ThemeProvider` + `ThemeToggle` system; (D2) dual-theme CSS variable token spec; (D3) liquid-glass treatment spec (blur, borders, highlights, fallbacks); (D4) theme-aware react-three-fiber scene rules incl. shader uniform mapping; (D5) theme-aware shadcn/recharts chart rules; (D6) `viz/REGISTRIES.md` liquid-glass registry entry.
- Output artifact: this unconsolidated brief at `prompts/viz/c08-design-creative/theme-designer/prompt.md`.

---

## 2. Assumptions

- The `viz/` app is scaffolded per plan §4 (Next.js 15 App Router, TypeScript, Tailwind, shadcn/ui, react-three-fiber, recharts via shadcn charts, GSAP, cobe).
- `next-themes` is the theme runtime (class strategy, `defaultTheme="system"`, `enableSystem`).
- shadcn/ui is initialized with the CSS-variables style so `:root` and `.dark` token blocks in `globals.css` are the single source of truth.
- The Stremiium brand palette is owned by VIZ-017 (brand-manager); all concrete hue values below are `[EST]` proposals pending brand-manager ratification and VIZ-012 token-registry alignment.
- The digital-liquid shader defaults (`uColorA` deep green `rgb(0.0, 0.1, 0.0)`, `uColorB` neon lime `rgb(0.8, 1.0, 0.0)`, `uOpacity` 0.4) establish the bio-luminescent dark-mode accent family [FACT, per `digital-liquid.glsl.ts` lines 33–40].
- Accessibility gates (WCAG 2.1 AA via VIZ-014) apply to every themed surface, including glass and 3D/charts.

---

## 3. Questions

- What exact Stremiium brand hues are ratified by VIZ-017 for `--primary` and `--accent` in each mode?
- Should tokens be authored in HSL triplets (classic shadcn `hsl(var(--x))`) or OKLCH (newer shadcn/Tailwind v4 style)? Default: HSL triplets for compatibility with the installed shadcn generation [INFER].
- What base `--radius` and derived scale (`sm/md/lg/xl`, rounded-full pill set) serve the liquid-glass aesthetic without breaking shadcn components? Proposal: `--radius: 0.625rem` [EST].
- Which surfaces get the liquid-glass treatment (hero, stat cards, command palette, chart tooltips, Flo nav) and which stay solid for contrast safety (dense text tables, diff views, deck slides)?
- How do 3D scene fog, node emissive colors, and cobe globe colors remap when `resolvedTheme` flips? See uniform mapping (§8.4).
- How are charts re-rendered on theme switch without animation jank (key-by-`resolvedTheme` vs CSS-var-only recolor)?
- Is the Appllama liquid-glass-screens registry reachable at build time (network may be blocked in sandbox)? If not, local fallback per §8.5.

---

## 4. Concerns

- Flash-of-wrong-theme (FOUC) on first paint if `next-themes` injection script is misplaced; must set `suppressHydrationWarning` on `<html>` and keep the inline class script in `<head>`.
- `backdrop-filter` is unsupported in Firefox < 103 [FACT, per kv0906 SKILL.md compatibility notes] — every glass surface needs an opaque fallback derived from `--card`/`--background`.
- Glass surfaces risk WCAG AA contrast failure; text on glass must keep 4.5:1 against the *composited* background, so blur + tint values must be validated, not assumed.
- Full-screen digital-liquid shader on low-end devices may drop frames; theme spec must define the reduced-motion / low-power degradation (static gradient, no `useFrame` animation).
- Recharts axes/tooltips that hard-code hex values will break theming; all chart colors must resolve through CSS variables.
- Token drift: `viz/` components must consume semantic tokens only — no raw hex outside `globals.css`.

---

## 5. Suggested Improvements (Deliverables)

- D1 Theme system: `next-themes` `ThemeProvider` (`attribute="class"`, `defaultTheme="system"`, `enableSystem`, `disableTransitionOnChange`), a shadcn `DropdownMenu`-based Light/Dark/System toggle, and a `useTheme()` mounted-guard pattern for SSR-safe rendering (§8.1).
- D2 Token spec: complete `:root` (light) and `.dark` CSS-variable sets — `--background`, `--foreground`, `--card`, `--popover`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--radius` (+ derived radii), chart set `--chart-1…--chart-5`, and glass/scene extensions (§8.2–§8.3).
- D3 Liquid-glass accent treatment: backdrop-blur card recipe (`backdrop-filter: blur(12–24px)`, translucent tint, hairline border, top highlight), referencing Appllama liquid-glass-screens for screen-level glass compositions and the kv0906 `glass-components.tsx` kit for tokenized values (§8.5).
- D4 Theme-aware 3D: scene background/fog from tokens, node/globe material colors per zone accent, digital-liquid shader uniform remapping table per theme, reduced-motion degradation (§8.4).
- D5 Theme-aware charts: shadcn chart `config` colors bound to `var(--chart-N)`, axis/grid strokes from `--muted-foreground`/`--border`, glass-styled tooltip (§8.6).
- D6 Registry documentation: Appllama liquid-glass-screens entry (with exact install command when network-permitted) plus offline-fallback note in `viz/REGISTRIES.md`.

---

## 6. Missing Dependencies

- `.stremiium/skills/kv0906-premium-frontend-design/premium-frontend-design/shaders/digital-liquid.glsl.ts` — read [FACT].
- `.stremiium/skills/kv0906-premium-frontend-design/premium-frontend-design/templates/glass-components.tsx` — read [FACT].
- `.stremiium/skills/kv0906-premium-frontend-design/premium-frontend-design/SKILL.md` — compatibility notes [FACT].
- Appllama liquid-glass-screens registry (external; network availability `[UNKNOWN]` in sandbox — exact registry URL/command to be confirmed and documented in `viz/REGISTRIES.md`).
- VIZ-017 brand-manager palette output (Stremiium identity hues) — pending.
- VIZ-012 design-system-architect token registry — pending; this spec must slot into it, not fork it.
- VIZ-014 accessibility-design-lead contrast/reduced-motion gates — pending review.
- `next-themes` package presence in `viz/package.json` — to be added by VIZ-020 if absent.

---

## 7. Step-by-Step Implementation or Research Plan

- 1. Read the plan §3–§5 and the assigned references (`digital-liquid.glsl.ts`, `glass-components.tsx`, SKILL.md) and extract the theming obligations with [S#] references and [FACT]/[EST]/[UNKNOWN]/[INFER] grades.
- 2. Confirm with VIZ-017 the ratified brand hues; until then keep the §8.2–§8.3 `[EST]` values and mark every palette-dependent value as pending-ratification.
- 3. Draft the dual-theme token contract (`:root` and `.dark`) covering the full shadcn semantic set plus chart, glass, and 3D-scene extensions; guarantee every required token (`--background`, `--foreground`, `--primary`, `--accent`, `--radius`, etc.) exists in **both** themes.
- 4. Draft the liquid-glass treatment recipe (blur tiers, tint alphas, hairline borders, top highlight, hover glow) and its non-`backdrop-filter` fallback.
- 5. Draft the theme-reactivity model: `useTheme()` → `resolvedTheme`, mounted guard, ThemeProvider placement in `viz/app/layout.tsx`, toggle component placement in header + Flo/thumb-zone mobile nav.
- 6. Map 3D scene + shader uniforms per theme (§8.4) and chart theming rules (§8.6); define reduced-motion and degraded-mode variants with VIZ-014.
- 7. Define the `viz/REGISTRIES.md` entry for Appllama liquid-glass-screens with the install command and offline fallback.
- 8. Run the validation checklist (§9) — including AA contrast spot-checks on the glass recipes and chart tokens.
- 9. Resolve conflicts (e.g., glass vs. data-density surfaces) with VIZ-013/VIZ-015; route unresolved disputes per §14.
- 10. Hand off to Sparkling Curious (§15) for synthesis before any Code Mode execution.

---

## 8. Commands/Configs/Schemas Where Applicable

- No executable commands are produced in Ask Mode. The artifact contains design/spec text only. Reference schema at §8.7.

### 8.1 Theme system (next-themes)

- `viz/app/layout.tsx`: `<html lang="en" suppressHydrationWarning>`; body children wrapped in `<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>`.
- `viz/components/viz/theme-toggle.tsx`: shadcn `DropdownMenu` with Light / Dark / System items (icons: lucide `Sun`, `Moon`, `Laptop`); sets `theme` (not just `resolvedTheme`) so the user's system preference survives.
- SSR guard: components that need the active mode read `const { resolvedTheme } = useTheme()` and gate on `mounted` to avoid hydration mismatch on 3D canvases and charts.

### 8.2 Light theme tokens — `:root` in `viz/app/globals.css` (all values `[EST]` pending VIZ-017)

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 98%;
  --card-foreground: 240 10% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 10% 3.9%;
  --primary: 160 84% 30%;            /* deep stremiium green */
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --accent: 150 40% 95%;             /* pale mint hover surface */
  --accent-foreground: 160 84% 20%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 160 84% 30%;
  --radius: 0.625rem;
  --chart-1: 160 84% 35%;
  --chart-2: 84 81% 40%;
  --chart-3: 190 90% 40%;
  --chart-4: 40 95% 45%;
  --chart-5: 270 65% 50%;
}
```

### 8.3 Dark theme tokens — `.dark` (bio-luminescent family per shader defaults; `[EST]` pending VIZ-017)

```css
.dark {
  --background: 160 25% 4%;          /* deep green-black */
  --foreground: 0 0% 98%;
  --card: 160 22% 6%;
  --card-foreground: 0 0% 98%;
  --popover: 160 24% 5%;
  --popover-foreground: 0 0% 98%;
  --primary: 158 64% 52%;            /* luminous green */
  --primary-foreground: 160 30% 4%;
  --secondary: 160 15% 10%;
  --secondary-foreground: 0 0% 98%;
  --muted: 160 15% 10%;
  --muted-foreground: 160 5% 65%;
  --accent: 160 15% 12%;
  --accent-foreground: 84 81% 75%;
  --destructive: 0 72% 51%;
  --destructive-foreground: 0 0% 98%;
  --border: 160 15% 16%;
  --input: 160 15% 16%;
  --ring: 158 64% 52%;
  --chart-1: 158 64% 52%;
  --chart-2: 84 81% 55%;             /* neon lime — uColorB kin */
  --chart-3: 190 95% 55%;
  --chart-4: 40 95% 55%;
  --chart-5: 300 80% 65%;
}
```

- Derived radii (shadcn convention): `--radius-sm: calc(var(--radius) - 4px)`, `--radius-md: calc(var(--radius) - 2px)`, `--radius-lg: var(--radius)`, `--radius-xl: calc(var(--radius) + 4px)`.
- Base layer: `* { @apply border-border }`, `body { @apply bg-background text-foreground }` so every surface inherits the active theme.
- Glass + scene extensions (both blocks): `--glass-bg` (surface tint), `--glass-border` (hairline), `--glass-blur: 16px`, `--glass-highlight` (top-edge light), `--scene-fog`, `--node-accent`, used via `hsl(var(--glass-bg) / 0.55)` alpha-composition.

### 8.4 Theme-aware 3D scene (react-three-fiber)

- Scene `background`/`fog` colors derive from `hsl(var(--background))`/`hsl(var(--scene-fog))` on `resolvedTheme` change (memoized, no shader recompile).
- Digital-liquid hero shader uniform mapping (from `digital-liquid.glsl.ts` §uniforms):

| Uniform | Dark | Light | Note |
|---|---|---|---|
| `uColorA` | `[0.0, 0.1, 0.0]` deep green | `[0.88, 0.94, 0.88]` pale sage | base flow tone |
| `uColorB` | `[0.8, 1.0, 0.0]` neon lime | `[0.10, 0.45, 0.20]` deep green | highlight tone |
| `uOpacity` | `0.4` | `0.15` | dark = bio-luminescent, light = whisper wash |
| `uSpeed` / `uScale` | `0.3` / `3.0` | same | motion unchanged, only color remaps |

- Zone node colors (docs / prompts / execution / .stremiium / rea) map to `--chart-1…--chart-5` so explorer, globe, and dashboard share one palette; cobe globe marker colors use the same set.
- Reduced motion (`prefers-reduced-motion` or VIZ-014 toggle): freeze `uTime`, render single noise frame or static CSS gradient; degraded mode swaps meshes → points (plan §8).

### 8.5 Liquid-glass accent treatment

- Recipe (tokenized from `glass-components.tsx`): `background: hsl(var(--glass-bg) / 0.5–0.6)`; `backdrop-filter: blur(var(--glass-blur))` with `--webkit-` prefix; `border: 1px solid hsl(var(--glass-border) / 0.15)` (dark ≈ `rgba(255,255,255,0.1)`, light ≈ `rgba(0,0,0,0.08)`); inset top highlight `hsl(var(--glass-highlight) / 0.25)`; optional hover glow `0 0 40px hsl(var(--primary) / 0.25)`.
- Blur tiers (from kv0906 kit): sm 8px, md 12px, lg 16px, xl 24px — md/lg for cards, xl for overlays/palette.
- Appllama liquid-glass-screens is the design reference for full-screen glass compositions (hero, overlays); registry availability `[UNKNOWN]` offline → fallback: implement locally with the recipe above; document exact command in `viz/REGISTRIES.md` when confirmed (pattern: `pnpm dlx shadcn@latest add <appllama-registry-url>`).
- Fallback (Firefox < 103, no `backdrop-filter`): solid `hsl(var(--card))` background + same borders — never lose contrast for blur.
- Glass allowed: hero, stat cards, command palette, chart tooltips, Flo nav. Glass forbidden: dense text tables, commit diffs, reveal.js deck body (solid surfaces, VIZ-014 contrast rule).

### 8.6 Theme-aware charts (shadcn charts / recharts)

- Every chart `config` color: `color: "hsl(var(--chart-N))"` — no raw hex in chart components.
- Axes/legend text `hsl(var(--muted-foreground))`; `CartesianGrid` stroke `hsl(var(--border))`; area gradient fills fade from `hsl(var(--chart-1) / 0.35)` to transparent.
- Tooltip content renders inside a glass card (§8.5) at sm blur for readability over plots.
- On theme flip, recolor via CSS variables (preferred); only 3D canvases and shader uniforms need `resolvedTheme` JS reactivity — charts must not remount.

### 8.7 Reference schema

- `{themeId, mode: "light"|"dark"|"system", tokens: {background, foreground, card, popover, primary, secondary, muted, accent, destructive, border, input, ring, radius}, charts: [chart-1..chart-5], glass: {bg, border, blur, highlight, fallback}, scene: {fog, nodeAccent, uniforms: {uColorA, uColorB, uOpacity}}, owner, date}`

---

## 9. Validation Checklist

- [ ] Research data sources cited with [S#] references or explicitly marked unverified
- [ ] Evidence grades preserved ([FACT]/[EST]/[UNKNOWN]/[INFER])
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Light/dark/system via `next-themes` (class strategy, `defaultTheme="system"`, `enableSystem`, `suppressHydrationWarning`) specified
- [ ] Token spec complete in **both** themes: `--background`, `--foreground`, `--primary`, `--accent`, `--radius`, `--border`, `--ring`, chart set, glass/scene extensions
- [ ] Liquid-glass recipe tokenized (blur tiers, tint alphas, hairline borders, highlight) with non-`backdrop-filter` fallback
- [ ] Appllama liquid-glass-screens referenced with availability graded and offline fallback documented for `viz/REGISTRIES.md`
- [ ] 3D scene + digital-liquid shader uniform mapping per theme specified; reduced-motion degradation defined
- [ ] Chart theming fully CSS-variable-bound (no raw hex)
- [ ] AA contrast verified on glass surfaces and chart tokens (4.5:1 text, 3:1 non-text)
- [ ] Palette-dependent values marked pending VIZ-017 ratification; token structure aligned with VIZ-012
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (council + executive where applicable)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described
- [ ] No private keys, credentials, or PII in artifact
- [ ] Artifact path inside the viz prompts workspace (`prompts/viz/c08-design-creative/theme-designer/`)

---

## 10. Security Considerations

- Theme/token files contain no secrets, credentials, or PII; glass recipes are presentational only.
- `next-themes` persists user choice in `localStorage` (`theme` key) — no sensitive data in storage.
- Any vendored Appllama registry code must be reviewed before inclusion (registry blocks are third-party input; treat as untrusted).
- 3D/shader params must not encode repo-internal metadata beyond the visualization contract (paths, sizes — no file contents).

---

## 11. South African Regulatory Considerations

- CPA 68 of 2008 consumer-accessibility obligation: both themes meet WCAG 2.1 AA contrast so the learning environment remains usable by all consumers (co-gated with VIZ-014).
- POPIA: theming handles no personal data; only the non-PII `theme` preference is stored client-side.

---

## 12. Compliance Gate

- C08 Design-Creative + C11 Dev-Engineering. Theme system requires C08 captain sign-off (VIZ-010), accessibility clearance via VIZ-014 (contrast + reduced motion), palette ratification via VIZ-017, and token-registry alignment via VIZ-012 before Code Mode execution.

---

## 13. Rollback Plan

- Token regressions: revert `globals.css` `:root`/`.dark` blocks in a single commit; semantic-token-only consumption guarantees one-file rollback.
- Glass treatment failures (compat/perf/contrast): feature-flag `--glass-blur` recipe off per surface; components fall back to solid `--card` automatically.
- 3D/shader regressions: pin last-known uniform mapping and fog colors; degraded mode (static gradient, points-only) is the defined safe state.
- Chart theming regressions: drop back to default shadcn chart tokens.
- Escalate theme conflicts to C08 + C11 captains per §14.

---

## 14. Escalation Path

- C08-THEME-DESIGNER → C08 Design-Creative Captain (VIZ-010) → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Palette disputes with VIZ-017 and token-fork disputes with VIZ-012 go to the C08 captain first; C08/C11 implementation conflicts go to SC-MASTER-001 per plan §3 arbitration.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed brief at `prompts/viz/c08-design-creative/theme-designer/prompt.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with the other C08 Design-Creative outputs (VIZ-010…VIZ-019) and the C11 Dev-Engineering briefs (VIZ-020…VIZ-025), conflict de-duplication (e.g., token ownership vs. VIZ-012, palette authority vs. VIZ-017), and gating before Phase 2–6 Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix; VIZ-001 holds the delegation registry for all viz tasks.
- Artifact must pass the §9 Validation Checklist before handoff.
