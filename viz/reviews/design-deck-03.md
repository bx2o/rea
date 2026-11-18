# Design review — Deck 03 (Prompts & Replies)

**Status: PASS** · Owner: design subagent · Files owned:
- `viz/content/decks/deck-03-prompts-and-replies.md` (authored source)
- `viz/public/decks/deck-03-prompts-and-replies.md` (served copy — byte-identical, `diff -q` / `cmp` clean)

## Mission coverage

| Requirement | Evidence |
|---|---|
| Exactly 12 slides preserved | 12 `## ` headings, 11 `^---$` separators; reveal `slidify()` yields **12 sections** |
| Inline SVG diagrams (token colors only) | **12** `<svg role="img" aria-label=…>` (12 open / 12 close), **0 literal hex**, 374 `hsl(var(--…))` fills/strokes |
| 201 funnel | Slide 2: proportional bars 201 → 164 (16 councils + orchestration) + 37 (16 departments) → 603 = 201×3 (`reply.md` / `research-evidence.md` / `diagrams-and-charts.md`) |
| 18-section 3×6 grid | Slide 5: 6-column × 3-row numbered chip grid (01…18), original table retained as fallback |
| End-to-end pipeline | Slide 11: 📝prompt.md → 💬reply.md → 🔬research-evidence.md → 📊diagrams-and-charts.md → 🔗SOURCE-CITATION-MAP with `execution-result.md` side branch and CARF question/schema label |
| Evidence grades | Slide 6: 4-quadrant [FACT]/[EST]/[INFER]/[UNKNOWN] + four-bucket rule band |
| Icons (aria-hidden) | `<span aria-hidden="true">📝 💬 🔬 📊 ✅ ❓ 🔗</span>` across all 12 slides + SVG pictographs |
| Fragments ≥ 6 slides | **24** `<!-- .element: class="fragment" -->` across **12/12 slides**; placed after the annotated element per reveal 5.1 markdown plugin semantics |
| ≥ 2 SVG charts | Slide 4 donut (603 = 201×3, three equal 33% segments) + Slide 9 council bar chart (10 C08 / 6 C11 / 2 C03 / 1 orchestration = 19) and 164-agent/16-council panel |
| Facts preserved | 12/12 `Source:` lines, 12/12 `Note:` lines, **39/39** original backtick tokens, CARF field-schema paragraph verbatim, fact-drift flag blockquote intact |
| 4 CARF cited paths | All 4 present and resolve on disk: `prompts/neobank/legal/carf/prompt.md`, `prompts/replies/neobank/c01-legal-compliance/carf/reply.md`, `execution/results/c01-legal-compliance/carf/execution-result.md`, `prompts/replies/research/SOURCE-CITATION-MAP.md` |
| Accessibility | Every SVG has `role="img"` + descriptive `aria-label` + `<title>`; tables/lists kept as fallbacks; one `Note:` line per slide → 12 speaker-note asides; fragments on SVG blocks and plain-text captions only (never on headings/Source/Note) |

## Verification performed

- `node scripts/verify-viz.mjs` → **19 PASS · 0 FAIL · 0 WARN**, exit 0. Includes V17 no-hex, V18 link/path resolve, V19 feature contract.
- Reveal markdown plugin (`node_modules/reveal.js/plugin/markdown/markdown.esm.js`) exercised directly: 12 slidified sections, 12 notes asides, 12 SVGs survive marked unescaped, 374 token-color declarations preserved, folder-template `<`/`&` correctly escaped.
- Structural diff vs `git HEAD` original: 0 missing Source/Note lines, 0 missing backtick tokens, CARF schema paragraph byte-for-byte.
- Tall SVGs constrained with `max-height` so each slide fits the 960×700 reveal stage; slide 11 pipeline compacted to 300px viewBox (verbatim paths remain in the ordered list above the diagram).

## Gate results

`V18 links/resolve — all markdown link + backtick path claims resolve (51 checked across 6 file(s))` · `V19 features/contract — all promised features present and wired` · `verify-viz summary — 19 PASS · 0 FAIL · 0 WARN (19 checks) · exit 0 — all checks pass`
