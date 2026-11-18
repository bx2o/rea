# Stunning Deck 03 — Prompts & Replies (design review)

**Owner:** DESIGN subagent "Stunning visuals Deck 03"
**Scope (exact):** `viz/content/decks/deck-03-prompts-and-replies.md` and byte-identical `viz/public/decks/deck-03-prompts-and-replies.md`
**Outcome:** 12 slides preserved; all 12 diagrams replaced with premium, token-only SVGs.

---

## What was built

All 12 inline SVGs were rebuilt from scratch with a shared premium design language:

- **Ambient radial halos** and **linear-gradient fills** (`<radialGradient>`, `<linearGradient>`) on every diagram.
- **Luminous connectors** — gradient strokes with blurred duplicate paths (`feGaussianBlur`) and arrowheads.
- **Depth** via `<filter>` + `feDropShadow` on cards/chips and `feGaussianBlur` bloom on display numerals.
- **Display typography** — 76–132 px numeral centerpieces, letter-spaced caps, bold category badges.
- **Every color** is `hsl(var(--…))` or `url(#gradient-id)`; zero literal hex anywhere.

### Slide-by-slide

| # | Slide | New primary visual |
|---|---|---|
| 1 | 201 Master Prompts → Substantive Replies | **Cinematic hero**: zone-prompts document → three luminous particle streams → zone-execution reply document, with a glowing gradient-filled **201** centerpiece and a 603 / 19 stat capsule. |
| 2 | The prompt system | **Escalating trapezoid funnel**: 201 → 164 Stremiium (81.6%) + 37 NeoBank (18.4%) → 603, with three 201-file-type chips and source tags. |
| 3 | prompts/ zone structure | Two gradient folder cards with tab motif, **37** and **~165** display numerals, category tags, and a dashed "metadata carried forward" join. |
| 4 | The replies system | Bloom-lit three-segment donut with gradient arcs, **603** centerpiece, three legend cards with 33% badges. |
| 5 | The 18-section reply format | **6×3 matrix** of all 18 numbered chips; five-category colour coding (research / planning / governance / risk / assurance), dashed connecting lattice, and "ACTIVE" hover-state chips (12, 18) with gold glow. |
| 6 | Evidence grades | **Refined 2×2 quadrant**: [FACT] emerald `st-success`, [EST] amber `st-warning`, [INFER] violet `zone-stremiium`, [UNKNOWN] slate `zone-rea`; vector icons, gradient fills, four-bucket footer. |
| 7 | Research apparatus | Five-node glowing step-flow + **201 / 0 errors** typographic badge. |
| 8 | Execution results zone | **37** display numeral with halo + ledger card with artifact/subagent badges and the evidentiary pull-quote. |
| 9 | The viz program (this app) | Gradient bar chart (10/6/2/1) + **164** with a patterned agent matrix and ≈10.25-per-council caption. |
| 10 | How to explore | Six icon-bearing route cards above a glowing connecting rail. |
| 11 | Trace one prompt end-to-end | **CARF pipeline**: five icon cards with glowing connectors, dashed execution-result branch from `reply.md`, and a highlighted CARF question/schema card. |
| 12 | Closing — sources & next steps | Four-step learning path with the current deck glowing, corpus-index capsule, and the closing pull-quote. |

---

## Fact & integrity preservation

Verified against the untouched original (kept as the public copy until final sync):

- Non-SVG prose is **byte-identical** after SVG replacement — scripted comparison of both files with SVG blocks stripped returned `true`.
- `12` H2 headings, `11` `^---$` separators, `12` Source lines, `12` Note lines.
- `66` backtick occurrences / `39` unique backtick tokens — unchanged.
- `201 = 164 + 37`, `603 = 201 × 3`, `19 prompt files`, `18 sections`, `201 prompts verified, 0 errors` all retained.
- CARF field-schema paragraph and the fact-drift flag blockquote **verbatim** (not touched).
- All 4 CARF cited paths retained; V18 link resolution passes (51 claims checked).
- Tables and lists retained as semantic fallbacks beneath the diagrams.

## Accessibility

- All 12 SVGs: `role="img"` + `aria-label` + `<title>`.
- 24 `<!-- .element: class="fragment" -->` comments — one after every SVG plus one per slide's summary line; essential information remains in the DOM.
- Decorative pictographs in prose keep `aria-hidden="true"`.

## Gates run

| Gate | Result |
|---|---|
| `node /tmp/kilo2/audit_deck.mjs` (SVG role/aria/title, tag balance, gradient references, token-only colors, fragment placement) | **AUDIT CLEAN** |
| `node /tmp/kilo2/slidify_check.mjs` (reveal `slidify` + `marked`) | 12 sections · 12 notes · 12 SVGs + 12 titles + 24 fragments survive parsing |
| `node /tmp/kilo2/bounds_check.mjs` (element coordinates vs viewBox) | **BOUNDS CLEAN** |
| Literal hex scan (verify-viz regex family) | **0** |
| `cmp content/decks/… public/decks/…` | **identical** (93,475 bytes each) |
| `node scripts/verify-viz.mjs` | **19 PASS · 0 FAIL · 0 WARN**, exit 0 (V17 no-hex, V18 links, V19 features all PASS) |

No files outside the two owned deck copies were modified.
