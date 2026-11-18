# Design review — `/learn` learning hub

Owner: Design Learn page deck browser subagent
File changed (only file owned): `viz/app/learn/page.tsx`

## Result

PASS — upgraded `/learn` into a premium interactive learning hub while preserving the
RevealDeck integration and every authored fact/citation.

## What changed

1. **Deck cards** — each is now a rich visual tile with a unique procedural inline SVG
   cover art (Deck 01 six zone blocks; Deck 02 council org tree; Deck 03
   prompt→reply pipeline; Deck 04 governance ladder). All fills/strokes resolve through
   `--zone-*` CSS token classes (`fill-zone-docs`, `stroke-zone-stremiium`, …) — no
   literal hex. Each card carries a deck-number badge, title, description, slide count,
   a three-bullet "What you'll learn" line sourced from the manifest facts, and an
   "Open deck" button. Hover/focus scales the cover and reveals a "Preview deck"
   overlay; transforms are `motion-safe:` gated and the global reduced-motion CSS
   gate remains in force. Cards expose a `focus-within` ring; all controls have
   visible focus rings and 44px minimum targets.
2. **Progress / stats strip** — new semantic section with an SVG bar chart of slide
   counts per deck (13 / 14 / 12 / 14) using the four deck zone hues, plus the
   contiguous summary string `4 decks · 53 slides · ~20 min total`. Chart is
   `role="img"` with a descriptive `aria-label` and an `sr-only` figcaption.
3. **Learning path** — the ordered list is now a 1→2→3→4 SVG stepper/flow diagram
   with numbered flow nodes and arrow connectors; every node is a real button that
   opens the matching deck. Recommended order kept exactly: Repo Orientation →
   Program Brief → Prompts & Replies → Councils & Governance. A secondary inline
   "Take the repo tour" link preserves the guided-tour affordance.
4. **Interactive filters** — accessible toggle group ("All decks", "Fundamentals",
   "Program", "Systems") with `aria-pressed` state, client-side filtering by deck id,
   and a polite live region announcing `Showing N decks`.
5. **Deck overlay** — RevealDeck integration unchanged (`file` / `title` / `deckId` /
   `onClose`). Modal focus trap, Escape handling, and focus return to the opening
   card's button via `triggerRef` are preserved. The overlay header/title/Close and
   keyboard-shortcut hint live in `components/decks/reveal-deck.tsx` (separate owner);
   coordination posted to that owner on the shared board.
6. **Facts preserved** — 4 decks; slide counts 13/14/12/14; all titles and
   descriptions; source/citation lines (`Snapshot · public/decks/decks.json`,
   `content/decks/`, `public/decks/`, the error and empty-state guidance, and a new
   always-visible `Source: content/decks/ · served from public/decks/` note);
   footer `Explore next: Guided tours` link and `Back to top` link.
7. **Accessibility** — exactly one H1; semantic sections with `aria-labelledby`;
   cover art SVGs are `role="img"` with `aria-label`; buttons and links have
   `aria-label`s where needed; filter changes announced via `role="status"`;
   reduced-motion honored; 44px targets.

## Gate evidence (final run)

- `npx tsc --noEmit --pretty false` → exit 0, no errors.
- `node scripts/verify-viz.mjs` → `19 PASS · 0 FAIL · 0 WARN (19 checks)`, exit 0.
- Literal-hex grep on `app/learn/page.tsx` → 0 matches.
- `GET /learn` → HTTP 200 (dev server on port 4317); rendered HTML contains a single
  `<h1>`, the stats string, all four filter labels, both deck source paths, the
  learning-path heading, and both footer links.
- VIZ-017 no-hex gate and VIZ-014 static a11y checks both pass.

Note: an intermediate HTTP 500 / tsc failure was caused by a concurrent in-progress
edit to `components/decks/reveal-deck.tsx` by another subagent, not by this file. That
peer completed the edit; the final re-run above is clean.
