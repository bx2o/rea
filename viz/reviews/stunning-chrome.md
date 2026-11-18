# Stunning chrome & learning hub — design review

Scope (owned files only):

- `viz/components/decks/reveal-deck.tsx`
- `viz/app/learn/page.tsx`
- `viz/app/globals.css` — append-only `.stunning-deck` block at EOF

No deck markdown, manifest, snapshot, config or token was modified. The
RevealDeck props (`file`, `title`, `deckId`, `onClose`) and the raw
`section.textContent = markdown` pass-through are unchanged, so inline SVG,
`<!-- .element: class="fragment" -->` comments and speaker notes still reach
reveal.js untouched.

---

## 1. Reveal player

### Cinematic frame
- The modal root now paints a three-layer token backdrop: a primary-green radial
  wash from the top, a gold radial wash from the bottom-right, and the base
  `--background`.
- A new `.stunning-stage` wrapper (rounded 1.5rem, inset shadow, card-tinted)
  holds the reveal mount. It carries:
  - `.stunning-accent` — a 3px gold→green→gold top gradient with a token-coloured
    glow;
  - `.stunning-vignette` — a pointer-transparent radial falloff at the edges plus
    a soft inset shadow;
  - a deeper inset vignette on each glass slide frame.

### Floating glass command bar
- Replaced the small top-right toolbar with a centred bottom pill bar:
  frosted `backdrop-filter` surface, inset highlight, deep shadow.
- **Progress ring instead of a plain bar**: an SVG arc (r=15, dash offset driven
  by `slideInfo.index / total`) with a token-green drop-shadow glow and the
  two-digit current slide in its centre. Reveal's own `.progress` and
  `.slide-number` are hidden in this block so there is exactly one progress
  indicator; the polite `aria-live` status chip still announces
  `SLIDE NN / NN · heading`.
- Rounded pill controls for **Overview**, **Help** and **Fullscreen** (the latter
  feature-detected, with `aria-pressed` and a distinct exit icon). Hover adds a
  primary-tinted halo; icons lift subtly (motion-safe only).
- Help panel is now a frosted floating card above the command bar. It keeps
  `role="group"`, its `id`/`aria-controls` linkage, and every shortcut row.

### Transition upgrade
- Reveal config: `transition`/`backgroundTransition` = `"convex"` for full
  motion, `"none"` when reduced (OS query **or** `viz-reduced-motion` key).
- CSS entry: direct children of the present slide animate
  `stunning-content-in` (fade + 0.6rem rise + 0.99 scale). `:not(.fragment)`
  and `backwards` fill keep reveal's fragment visibility authoritative.

### Accessibility preserved
- `role="dialog"`, `aria-modal`, `aria-label`, Tab focus trap, Escape precedence
  (help → overview → fullscreen → close), focus return via the page, native
  arrow/F/O/S keys, and the visible + `sr-only` live regions are all intact.
- Header keeps the explicit **Keyboard shortcuts** hint requested by the Learn
  page owner. All interactive targets are ≥ 44px (`h-11`/`size-11`).

---

## 2. Learn hub

### Movie-poster tiles
Each cover SVG is now layered `viewBox="0 0 320 176"`:

1. **Background wash** — token gradient (`--muted` → `--card` → `--primary/0.16`)
   plus a radial `--highlight` halo and a faint grid.
2. **Mid-ground motif** — the existing procedural zone/tree/pipeline/ladder art,
   depth-lifted with a token `drop-shadow`.
3. **Foreground** — a translucent title band with a Space Grotesk,
   letter-spaced deck title (`REPO MAP`, `COUNCILS`, `PROMPTS`, `GOVERNANCE`)
   and kicker, plus the static gloss gradient.

On top of the art: a `DECK NN` badge, a **slide-count chip**, and a gradient
**duration chip** (`~N min`). Hover/focus triggers a glossy highlight sweep
(CSS `::after`, 850ms, motion-safe only) and a lifted, glow-bordered card. The
**Open deck** button is a token gradient with a nested play icon, a wide
pressable 48px target and an arrow that nudges right on hover.

### KPI dashboard strip
The old single-row strip is now a labelled dashboard with four KPI cells, each
with a token-coloured mini-chart and its own `role="img"` label/`figcaption`:

- **04 DECKS** — four-zone mosaic
- **53 SLIDES** — compact bar chart (13/14/12/14 from the manifest, with the
  original fallback)
- **~20 MIN** — area sparkline
- **06 ZONES** — six-dot zone matrix

### Glowing roadmap
`StepNode` became `RoadmapNode`: full-width bezier stubs that enter from the
previous cell and exit toward the next, a blurred halo, a token-ringed numbered
stop, and a gold endpoint. The flowing dash animation runs only when motion is
allowed. Step cards gained dramatic display headings, letter-spaced labels and
a hover glow; the existing `aria-label`, `openDeckById` wiring and focus return
are unchanged.

### Typography & motion
Display text uses `font-heading` (Space Grotesk), oversized counters and
`0.18em`–`0.28em` tracking on eyebrows. Every decorative animation is gated by
`@media (prefers-reduced-motion: no-preference)` **and**
`html:not([data-reduced-motion="on"])` **and** `.stunning-deck:not(.stunning-still)`;
both React owners mirror the persisted key into that class and listen for
`viz-reduced-motion-change`/`storage`.

---

## 3. Verification

Run from `viz/`:

- `npx tsc --noEmit` — **0 errors**
- `node scripts/verify-viz.mjs` — **19 PASS · 0 FAIL · 0 WARN**, exit 0
  (V12 use-client, V13 reduced-motion 6×, V17 no-hex, V19 feature contract)
- `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/learn` — **200**
- SSR HTML: exactly **1 `<h1>`**, `aria-label="Learning deck library"` present,
  no Next.js error overlay
- Served CSS chunk contains `.stunning-bar`, `.stunning-poster-art` and
  `stunning-content-in`
- Hex grep across both owned TSX files — **0 matches**; the appended CSS block
  uses only `hsl(var(--...))`

`globals.css` is append-only for this task: everything above the
`STUNNING CHROME — .stunning-deck enhancement block` banner is byte-identical
to the pre-existing file.
