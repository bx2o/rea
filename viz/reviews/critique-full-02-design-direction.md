# Pro-Level Design Direction Spec — Exact Task List

## Amateur traits in current design (concrete)

1. **Backgrounds**: solid/gradient fills behind SVG charts; no texture, no depth layers, no per-deck identity. Slides read like "SVG pasted on white".
2. **Typography**: ad-hoc sizes (10/12/18/24/42px chosen per SVG) rather than a modular scale; no consistent line-height or letter-spacing rules; display numerals inconsistent across decks.
3. **Icons**: Unicode emoji (🧭/📁/🏛️/₿/🎮) mixed with inline SVG — renders differently per platform, reads informal.
4. **Color**: gold glow used on many elements, diluting its "highlight only" meaning; zone hues sometimes used as fills where text should be.
5. **Charts**: good data, but minimal axis/legend styling; no consistent annotation callout design across decks.
6. **Background rhythm**: every slide has similar visual weight — no alternation between dense data slides and spare typographic slides.

## Pro design system spec

### Background system (token-only, no hex)
- Base: `radial-gradient(ellipse at 20% 10%, hsl(var(--primary) / 0.06), transparent 60%)` over `hsl(var(--background))`.
- Texture: inline SVG `<filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter>` with `<rect filter="url(#grain)" opacity="0.03">`.
- Grid: blueprint lines via `<pattern>` with `stroke hsl(var(--border) / 0.4)`, 40px cells.
- Per deck: 01 = technical blueprint, 02 = command-center radial, 03 = knowledge-network dots, 04 = architecture grid.
- Vignette: `inset 0 0 160px hsl(var(--background) / 0.9)` overlay.

### Typography system
| Role | Size | Weight | Tracking | Line-height | Font |
|---|---|---|---|---|---|
| Display | 56px | 800 | -0.03em | 1.05 | Space Grotesk |
| H1 | 40px | 700 | -0.02em | 1.15 | Space Grotesk |
| H2 | 30px | 700 | -0.01em | 1.2 | Space Grotesk |
| H3 | 22px | 600 | 0 | 1.3 | Space Grotesk |
| Body | 17px | 400 | 0 | 1.6 | Inter |
| Caption | 13px | 500 | 0.04em (caps) | 1.4 | Inter |
| Data | 15px | 500 | 0 | 1.3 | JetBrains Mono |

### Color system
60% background/surface (`--background`, `--card`), 30% zone hues (data encoding), 10% `--highlight` gold (accents only). Never gold for body text (1.76:1 on white).

### Layout system
12-col grid; 64px side margins; 8px spacing base; composition archetypes: hero (centered display + orbital motif), data-story (chart 60% + callout 40%), comparison (two columns), flow (SVG connectors), quote (large pull-quote + tiny source), roadmap (stepper).

### Chart system
Gridlines `hsl(var(--border))` at 1px, axis labels caption-style, legend chips with zone dot + label + value, annotation callouts with `--highlight` rule, consistent 2px stroke, remove chartjunk.

### Icon system
Replace emoji with inline lucide SVG paths; 24px, stroke 1.75, `aria-hidden`, currentColor; zone badges get token-colored rings.

### Motion
Fragment stagger 80ms; reveal transition convex (fade under reduced-motion); hero entry subtle scale+fade via CSS `@media (prefers-reduced-motion: no-preference)`.

## Exact task list (prompts to run)

| Task | File(s) | Changes | Acceptance |
|---|---|---|---|
| TASK-CORE-01 | `app/globals.css`, `components/decks/reveal-deck.tsx` | Add `.stunning-deck` background-scene CSS (vignette + grain pattern + blueprint grid) applied to `.reveal .slides section` via `background-image`; per-deck class via `data-deck` attr | 4 distinct backgrounds; zero hex; reduced-motion safe; 19 PASS |
| TASK-CORE-02 | `app/globals.css` | Add `--fs-display:56px … --fs-data:15px` tokens; style `.reveal h1/h2/h3/p` with them | Typography audit: all headings use tokens; 19 PASS |
| TASK-CORE-03 | all 4 deck files | Replace every Unicode pictograph in prose with inline lucide SVG (aria-hidden), keep non-SVG prose otherwise identical | zero emoji in decks; facts intact; slide counts intact |
| TASK-D01 | deck-01 | Rebuild hero slide with blueprint-grid + orbital rings; add per-slide background class markers | 13 slides; facts intact; 19 PASS |
| TASK-D02 | deck-02 | Rebuild hero with command-center radial; $STM infographic pro callouts | 14 slides; facts intact |
| TASK-D03 | deck-03 | Rebuild hero with knowledge-network node graph; funnel with annotation callouts | 12 slides; facts intact |
| TASK-D04 | deck-04 | Rebuild hero with architecture-grid; SLA staircase with pro axis labels | 14 slides; facts intact |
| TASK-QA-01 | `scripts/verify-viz.mjs` | Add V20: fail if next-env.d.ts/tsconfig.json reference a non-existent dist dir; add V21: contrast gate for token pairs | verify-viz 21 PASS |

## What NOT to do
- Do not add literal hex anywhere (V17 gate).
- Do not change slide counts or non-SVG prose (fact gate).
- Do not use `npx next` (causes the SyntaxErrors) — use local binary.
- Do not run `next build` in the live workspace — use `scripts/safe-build.sh`.
- Do not over-glow; gold is 10% accent only.
