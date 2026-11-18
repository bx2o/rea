# Design Deck 04 — Councils & Governance (RESULT)

Owner: D4 design subagent · Files: `viz/content/decks/deck-04-councils-governance.md` + byte-identical `viz/public/decks/deck-04-councils-governance.md`.

## Delivered

- **14 slides preserved** (13 `---` separators; `decks.json` still declares 14; V10 green).
- **14 inline SVG diagrams**, each `role="img"` + descriptive `aria-label`, all colors from `hsl(var(--primary))`, `hsl(var(--zone-stremiium))`, `hsl(var(--zone-execution))`, `hsl(var(--highlight))` (or `none`). Zero literal hex.
  - Slide 2: two-plane org chart (Stremiium → SC-MASTER-001 → META-* advisory / CRD-* staff / C01–C16 command → cNN-* workforce → AGT-* → SUB-* → Skills/Tools/Workflows) + collapsed `<details>` semantic text-tree fallback.
  - Slides 4–9: R1–R6 each with a distinct badge/frame (circle / rounded rect / hexagon / shield / speech bubble / diamond), distinct token color, pictogram and flow arrow; rule text rendered verbatim in SVG and in the original blockquote.
  - Slide 11: 15-CRD chip grid grouped by 15 functions + **chart 1**: coordinator function distribution (15 equal bars, 1 per function).
  - Slide 12: escalation ladder Agent → Captain → SC → Mychael (CEO) → Board + **chart 2**: log-scale SLA bars 1h/4h/24h/72h + gold `hsl(var(--highlight))` critical skip path to SC + C01 + C16 (1h).
  - Slides 1, 3, 10, 13, 14: supporting crest, SC routing-contract flow, 16-council command ribbon, three-law panels, closing loop.
- **Icons** 🏛️ ⚙️ 🧭 🔐 ⬆️ ⏱️ 🤝 (plus per-rule pictograms) in decorative `aria-hidden` elements.
- **Fragments**: 33 `<!-- .element: class="fragment" -->` annotations across 12 of 14 slides (rules + escalation ladder + SLA bars + list bullets).
- **Facts**: all 14 Source/Sources lines, all 14 Note: lines, R1–R6 verbatim, 15 CRD names/duties, 16 council rows, escalation path, all four SLAs, private-funded boundary (C01+C16+C10+Mychael), model lock `auto`/`kilo-auto/free`, vocabulary law — preserved. Verified programmatically: every original line survives verbatim except the ASCII tree fence lines, which are reproduced inside the `<details>` `<pre>` fallback.

## Verification

- `node scripts/verify-viz.mjs` → **19 PASS · 0 FAIL · 0 WARN** (V18 links/resolve PASS, V19 feature-contract PASS).
- `diff -q content/decks/... public/decks/...` → byte-identical.
- reveal markdown plugin `slidify` → 14 sections / 14 `data-markdown`; all 14 `Note:` lines split into speaker notes; all slide markdown parses with zero errors; 12 fragment-bearing slides.
- SVG attribute audit → only the four permitted token colors + `none`.
