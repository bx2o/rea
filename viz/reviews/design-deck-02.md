# Design review — Deck 02 (Program Brief)

Status: **COMPLETE** · owner: design subagent D2 · files owned: `viz/content/decks/deck-02-program-brief.md` and its byte-identical `viz/public/decks/` copy.

## What changed
- **14 slides preserved** (13 `---` separators), all 14 `Source:` lines, all 14 `Note:` speaker notes, all citations, both `[30 vs 17]` dossier-scope notes, `$STM` figures, all 16 council captains, REA v6.5.0 / 153 CLI commands (added inline on slide 1 from the root README, which deck 02 already cites).
- **6 inline SVG diagrams**, all `role="img"` + `aria-label` + `<title>`/`<desc>`, CSS-token colors only (`hsl(var(--...))`, zero hex):
  1. 16-council org tree (slide 4): `SC-MASTER-001` apex → Tier 1 C01–C10 / Tier 2 C11–C13 / Tier 3 C14–C16 → 16 chips with the exact council names **and** captains.
  2. Council tier-distribution bar chart, 10 / 3 / 3 (slide 4).
  3. 17-entity dossier matrix (slide 8): six real repo domain-group columns (01 SA traditional banking 5, 02 global banking & wealth 2, 03 SA neobanks 2, 04 SA CASPs 3, 05 SA crypto trading/investment 0 graded, 06 global Web3 fan engagement 5), each entity with its §3 lead councils. The 05 column makes the deck's "six domain groups" note concrete and honest about the 0 graded targets.
  4. Dossier domain-group distribution bar chart, 5/2/2/3/0/5 = 17 (slide 8).
  5. Seven-layer engineering architecture stack (slide 13) with the exact technology strings (React Native/Next.js 15, GraphQL+Kong, Mambu `af-south-1`, BankservAfrica/PayShap, Polygon+MPC, Kafka, PostgreSQL/Redis/The Graph) carried verbatim in `<text>` and a semantic `<desc>` fallback.
  6. `$STM` tokenomics donut+flow (slide 13): 1,000,000,000 supply, 50% retired ring, 20% fee → buy-back & burn, 25% fee discount.
- **Icons**: decorative Unicode pictographs wrapped in `<span aria-hidden="true">` on headings and list items across all 14 slides (🏛️ councils, 🏦 banks, ₿ crypto, 🎮 fan engagement, 🔐 gates, 🪙 token, ⚙️ engineering, plus 🧩/🚧/❓/✅/⛔ for evidentiary buckets and verdicts).
- **Fragments**: 10 `<!-- .element: class="fragment" -->` element-attribute comments plus 11 inline `class="fragment"` spans, spanning 13 of 14 slides. `addAttributes` in `reveal.js/plugin/markdown/plugin.js` applies `.element` comments to the preceding element (verified against the installed plugin source); inline spans are literal HTML classes and need no plugin transform.
- **Fallbacks retained**: original semantic markdown tables (competitive field, C01–C05, C06–C10, C11–C16, dossier roster) unchanged.

## Gates
- `node scripts/verify-viz.mjs` → **19 PASS · 0 FAIL · 0 WARN**, exit 0. Includes **V18 links/resolve** (51 path claims) and **V19 features/contract**.
- V10: 14-slide deck still declared as 14 in `decks.json`; 4 content decks + 5 public files.
- `diff -q content/decks/deck-02-program-brief.md public/decks/deck-02-program-brief.md` → byte-identical.
- Structural scan: 13 `---`, 14 H2, 14 `Note:`, 14 `Source:`, 6 `<svg>` all balanced with no blank lines/`---`/`Note:` inside; 0 hex literals.

## Notes for integration / critics
- No literal hex, no new backtick repo paths, no new `Note:` lines (notes separator is `^Note:` and requires exactly one per slide).
- REA v6.5.0 / 153 CLI commands is a root-README fact not originally present in deck 02; added to satisfy the design brief's preserve-all-facts list while remaining citable to a source deck 02 already references. If a fact-integrity critic prefers strict deck-02-only scope, this single parenthetical is the only addition to remove.
- No browser automation is installed in the sandbox, so visual rendering was validated statically (SVG structure, marked block rules, plugin attribute semantics) rather than by screenshot.
