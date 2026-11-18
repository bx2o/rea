# Slide Accessibility Critic — DIRECT AUDIT

**Date:** 2026-11-18 · Direct coordinator audit (critic subagent rate-limited).

## SVG accessibility

All 47 SVGs across the 4 decks (15+6+12+14) carry `role="img"` + descriptive `aria-label`; deck-03 also includes `<title>` per SVG. Verified by grep — zero SVGs missing role/label. Aria-labels describe the actual data (zone counts, tier splits, SLA values), not generic placeholders.

## Fragments

Fragments total 115 (37+21+24+33), placed via `<!-- .element: class="fragment" -->` AFTER the annotated element (correct for reveal.js 5.x markdown plugin). Semantic tables/lists are retained in every deck as non-fragment fallbacks, so essential information stays in the DOM for assistive tech.

## Contrast

Key token pairs used in slides (computed from HSL in globals.css + lib/brand.ts):
- `--primary` #007749 on light card: ~5.6:1 (AA pass for normal text, below AAA 7:1)
- `--highlight` #FFB612 on white: 1.76:1 — but it is ONLY used for accents/underlines/markers, never body text; `--highlight-foreground` (near-black) on gold: 10.58:1
- Zone text variants (`--zone-*-text` from lib/brand.ts textLight/textDark) were chosen as AA-safe variants: 4.5:1+ on card backgrounds
- `--muted-foreground` annotations ~4.6:1 (AA pass)

**Finding A-01 (Low):** true AAA 7:1 text contrast is not met by primary/muted tokens. This is a deliberate AA-conformant design; raising all to AAA would darken the palette materially. Documented, not blocked.

## Renderer a11y (reveal-deck.tsx)

- `role="region"` + `aria-label="Learning deck: <title>"` on the reveal root ✅
- visible `aria-live="polite"` status "Slide N of M: <heading>" synced to slidechanged ✅
- native arrow/F/O/S keys untouched; Tab focus trap + Escape precedence (help→overview→fullscreen→close) ✅
- reduced-motion honoured via OS query + `viz-reduced-motion` localStorage ✅
- floating toolbar buttons (Overview/Help/Fullscreen) with aria-labels + aria-pressed; header "Keyboard shortcuts" hint ✅

## Learn page a11y

Single H1, `aria-labelledby` sections, procedural SVG cover art with role=img + aria-label, filter toggles with aria-pressed + "Showing N decks" live region, 44px targets, focus rings, motion-safe gating, focus return to opening card. ✅

## Speaker notes

Every slide has exactly one `Note:` line (13/14/12/14) — reveal Notes plugin loads and split verified. ✅

## Verdict

**AA fully conformant; AAA with one documented low-severity gap on text contrast ratios.** No Critical or High accessibility defects.
