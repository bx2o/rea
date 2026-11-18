# Master Prompt — VIZ-017 C08-BRAND-MANAGER (Brand-Manager) — Repo Visualization & Learning Environment

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Program:** SC-REA-NEOBANK-5.0 — repo visualization & learning environment (`viz/`).  
**Plan:** `.kilo/plans/1794948779713-repo-viz-learning-environment.md` (task VIZ-017 of 18).  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** this task brief is the unconsolidated deliverable at `prompts/viz/c08-design-creative/brand-manager/prompt.md`; matching execution result goes to `execution/results/viz/c08-design-creative/brand-manager/execution-result.md` per root README convention.  
**Depth:** expand brand, UX, accessibility, legal (trademark), and operational depth regardless of model specificity.  
**Agent ID:** C08-BRAND-MANAGER  
**Council:** C08 Design-Creative  
**Gate:** C08 Design-Creative + C01 Legal-Compliance  
**Evidence grades:** [FACT] = documented in repo; [INFER] = external standard or derived choice, unverified in repo; [UNKNOWN] = gap requiring follow-up.

---

## 1. Summary

- This master prompt instructs C08-BRAND-MANAGER to specify the **Stremiium visual identity applied to the viz app**: brand palette (SA-fintech feel, ZAR-flag-informed accents), typography scale, logo placement, and microcopy tone, plus the **zone color coding** for the six workspace zones and **brand consistency rules across charts, the 3D scene, and learning decks**.
- Company canon: Stremiium (Pty) Ltd, South African Web3 company (Bloemfontein HQ), mission "empower and liberate creative communities", vision "Empowering the Dreamers", core values Dreams are Magic / Diversity is Inclusion / Community is Everything / Utilities are Valuable / Till our last Descendants [FACT — `.stremiium/agents/sparkling-curious.agent.md` §0].
- Deliverable boundaries: this brief **specifies** identity values; VIZ-012 (design-system-architect) implements them as tokens, VIZ-018 (theme-designer) owns light/dark mechanics, VIZ-019 (icon-illustration-lead) owns icon styling, VIZ-014 (accessibility-design-lead) audits contrast, VIZ-015 (dashboard-designer) owns chart layout. No overlap.
- Research data to ingest: company context (README + sparkling-curious agent file), `.stremiium` brand-application skills, artisan workflows, SA flag colour specification.
- Output artifact: `prompts/viz/c08-design-creative/brand-manager/prompt.md` (this file).

---

## 2. Assumptions

- The viz app is built per plan §4–§6 (Next.js 15 + shadcn/ui + Tailwind, recharts, react-three-fiber, reveal.js) [FACT].
- No binary Stremiium logo asset exists in the repo (no PNG/SVG brand asset found by search) [FACT] — a text/SVG placeholder lockup must be specified rather than referenced.
- The six workspace zones are fixed by the plan and root README: `docs/`, `prompts/`, `execution/`, `.stremiium/`, `rea/`, and git internals [FACT].
- Tailwind CSS custom properties / shadcn CSS-variable theming is available as the token layer, so every value below can ship as a variable, not a hardcoded literal [FACT].
- Fonts may not be installable in the offline sandbox; every font choice needs a system-stack fallback [FACT — plan §8 network-failure mitigation].
- Zone hues carry data semantics; brand hues carry chrome semantics; the two namespaces stay separate (see §7.6 rule 2).

---

## 3. Questions

- Should the viz palette adopt the six-colour ZAR flag spectrum literally, or a restricted fintech set informed by it? — **Resolved by Decision D1 (§7.1): restricted two-accent set (green + gold).**
- How is the execution zone green kept distinguishable from brand green? — Resolved by D3: brighter chart-green (#16A34A/#4ADE80) reserved for data, deep institutional green (#007749) reserved for chrome; never mixed in one encoding layer.
- What logo lockup is used when no asset file exists? — Resolved by D4: inline SVG placeholder mark + wordmark rules.
- Does C09 Marketing-Communications hold an external brand standard (stremiium.xyz style guide) that overrides these values? — [UNKNOWN]; escalate per §14 before any external-facing reuse.
- Do commit author names shown in the app need anonymization under POPIA? — No: git history is repo data, not customer personal information; still apply §10 handling rules.

---

## 4. Concerns

- Full flag-spectrum branding risks reading as national-gov messaging rather than a private fintech product; restraint needed (drives D1).
- Zone-green vs brand-green, and prompts-amber vs semantic-warning, are collision pairs; without namespace rules, charts become ambiguous.
- Dark-mode defaulting to raw light-mode hex will fail AA contrast on zone labels and chart legends.
- The repo's agent culture is emoji-rich [FACT]; uncontrolled emoji migration into app chrome would erode the fintech trust position.
- Gold (#FFB612) has poor contrast on white for body text; must be confined to marks, highlights, and large graphics.
- Overlapping ownership with VIZ-012/VIZ-018 could fork the palette into two token sets; this brief must be the single brand source they cite.

---

## 5. Suggested Improvements

- Define one brand-token namespace (`--st-*`) separate from the zone namespace (`--zone-*`) and semantic namespace (`--st-success/warning/danger/info`), all exported from a single `viz/lib/brand.ts`.
- Publish a microcopy lexicon (verb-first: **Explore / Learn / Inspect**) as a checkable list for QA (VIZ-024 link-check pass can also lint UI strings).
- Ship a global zone legend component (tree, charts, 3D scene, and decks share it) so hue→zone meaning is learned once.
- Add a brand QA gate to code review: no hardcoded hex outside `lib/brand.ts`; no new categorical hues without brand-manager sign-off.
- Provide deck templates (title/section/content/closing) carrying the logo and one accent per deck so auto-generated reveal.js decks stay on-brand by construction (input to VIZ-030).
- Document the placeholder logo as an explicit interim standard so the app looks finished before C09 supplies a raster/vector asset.

---

## 6. Missing Dependencies

- No official Stremiium brand guide / asset pack in the repo [UNKNOWN — request from C09 Marketing-Communications].
- Webfont availability (Space Grotesk, Inter, JetBrains Mono) unverified in the offline sandbox; system-stack fallbacks specified in §7.3 mitigate.
- Contrast validation tooling sign-off from VIZ-014 (WCAG 2.1 AA pairs listed in §7.2/§7.3).
- C01 Legal-Compliance review of wordmark usage on a public-facing learning surface (Trade Marks Act, §11).

---

## 7. Step-by-Step Implementation or Research Plan

- 1. Ingest company canon (README, sparkling-curious agent file) and extract identity anchors: mission, vision, five core values, South African context [FACT].
- 2. Resolve the palette decision D1 (§7.1) — SA fintech feel with ZAR-flag-informed accents — and define the brand token table with light/dark values.
- 3. Fix the zone colour coding D2 (§7.2) for the six workspace zones, with AA text variants and namespace rules.
- 4. Specify the typography scale D5 (§7.3) with offline-safe font fallbacks.
- 5. Specify logo placement D4 (§7.4) using an interim placeholder lockup [FACT — no binary asset in repo].
- 6. Define the microcopy tone and verb lexicon D6 (§7.5) around Explore / Learn / Inspect.
- 7. Publish the cross-surface brand consistency rules (§7.6) binding charts, the 3D scene, the globe, and decks to one token source.

### 7.1 Palette — Decision D1: SA fintech feel, ZAR-flag informed [INFER rationale, DECISION final]

- **Decision:** fintech-first, flag-informed. Brand anchors are ZAR **green** (#007749) and ZAR **gold** (#FFB612) [INFER — SA government flag specification, Pantone 3415C/1235C; not present in repo]. The remaining flag colours (red, blue, black, white) are **not** adopted as brand chrome: blue already lives in the data namespace as the docs zone hue, red is reserved for semantic danger, black/white are neutrals.
- **Rationale:** deep green reads as money, growth, and institutional trust (the fintech register), while gold supplies a warm South African differentiator against generic blue-purple fintech; a two-accent system signals restraint and premium quality; national-symbol restraint avoids governmental connotations and Trade Marks Act ambiguity around flag usage [INFER].

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--st-brand-300` | #4CC38A | #4CC38A | primary text/links on dark surfaces (AA) |
| `--st-brand-500` | #007749 | — | primary chrome: nav accents, active tab, stat KPI, hero gradient base |
| `--st-brand-600` | #00603A | — | hover/pressed, secondary buttons |
| `--st-gold-400` | — | #FFC94D | gold accent on dark |
| `--st-gold-500` | #FFB612 | — | highlight only: selected node, active timeline entry, hero accent arc — never body text |
| `--st-gold-600` | #CC920E | — | gold on light for icons needing AA |
| Neutrals | shadcn slate defaults, both themes | — | backgrounds, borders, grid lines (VIZ-018 owns theme mechanics) |
| `--st-success` | #15803D | #22C55E | semantic only |
| `--st-warning` | #B45309 | #F59E0B | semantic only |
| `--st-danger` | #DC2626 | #EF4444 | semantic only |
| `--st-info` | #0B72D4 | #38BDF8 | semantic only |

### 7.2 Zone colour coding — Decision D2 [DECISION, fixed mapping, legend order as listed]

| Zone | Light | Light-text (AA) | Dark | Meaning cue |
|---|---|---|---|---|
| `docs/` | #2563EB | #1D4ED8 | #60A5FA | blue — knowledge, research dossiers |
| `prompts/` | #D97706 | #B45309 | #FBBF24 | amber — creative authoring, agent voice |
| `execution/` | #16A34A | #15803D | #4ADE80 | green — results delivered, verified evidence |
| `.stremiium/` | #7C3AED | #6D28D9 | #A78BFA | violet — canonical OS, source of truth |
| `rea/` | #64748B | #475569 | #94A3B8 | slate — vendor/engineering substrate, recessive |
| git internals | #9CA3AF | #6B7280 | #D1D5DB | neutral — infrastructure, rendered with dashed outlines, collapsed by default |

- Rules: (1) zones are the **only** categorical data hues in the app; (2) the mapping is identical across file tree, charts, 3D scene, globe, and decks; (3) zone hues never carry status semantics (no "green = success" reading on execution nodes); (4) each row's text variant is mandatory for labels/legends on that theme; (5) `archive-second-versions/` inherits its parent zone's hue (docs-family) rather than a seventh colour — cap the categorical palette at six [DECISION].

### 7.3 Typography scale — Decision D5 [DECISION; fallbacks mandatory for offline build]

- Fonts: headings **Space Grotesk** (geometric, technical warmth); body/UI **Inter** (shadcn default); code/paths/SHAs **JetBrains Mono**. Fallback stack: `system-ui, -apple-system, Segoe UI, Roboto, sans-serif` and `ui-monospace, SF Mono, Consolas, monospace`. Weights 400/500/600/700 only.

| Step | Size/line | Weight | Use |
|---|---|---|---|
| display-xl | 56/1.05, −0.02em | 700 | overview hero ("Explore the repo") |
| h1 | 32/1.2, −0.01em | 700 | page titles |
| h2 | 24/1.3 | 600 | section titles, deck slides |
| h3 | 20/1.4 | 600 | card titles, chart headers |
| body-lg | 18/1.6 | 400 | learn/deck reading body |
| body | 16/1.6 | 400 | UI default |
| body-sm | 14/1.5 | 400 | table cells, metadata |
| caption | 12/1.4, +0.02em | 500 | axis labels, legend chips |
| mono | 13/1.6 | 400 | file paths, SHAs, diffs (tabular-nums) |

### 7.4 Logo placement — Decision D4 [DECISION; interim standard until C09 supplies assets]

- Placeholder lockup [FACT — no binary asset exists in repo]: inline SVG "S-flow" mark (circular green glyph, #007749, with a gold #FFB612 arc), wordmark `stremiium` in Space Grotesk 600 lowercase. Dark mode swaps the mark to gold-arc-on-#4CC38A.
- App shell: mark + wordmark top-left of the global nav, links to the Overview dashboard; clearspace ≥ 1× mark height on all sides; never placed on data gradients or photography.
- Decks (reveal.js): mark on the title slide top-left with a gold underline rule; no logo on body slides (clutter); full lockup centered on the closing slide.
- 3D scene / globe: logo **never** attached to data nodes (would imply data association); permitted only as a static HUD chip in the scene corner.
- Exports/screenshots: optional watermark chip bottom-right at 40% opacity.
- Minimum sizes: mark-only 20px; full lockup 88px wide. No stretching, recolouring beyond the approved theme variants, or animating the mark — the motion budget belongs to data (§7.6 rule 7).

### 7.5 Microcopy tone — Decision D6 [DECISION, lexicon]

- Voice: the brand speaks as a knowledgeable, enabling guide — curious, precise, plain-spoken, no hype. This operationalizes "Empowering the Dreamers" for a developer-facing learning tool: enable, don't advertise.
- Primary verbs, mapped to primary views: **Explore** → tree/3D/globe browsing; **Learn** → decks, guided tours; **Inspect** → file viewer, commit diffs, dossier drill-downs. Navigation and CTAs lead with these verbs (e.g. "Explore the repo", "Learn the program", "Inspect commit").
- Allowed secondary verbs: Search, Filter, Clear filters, Copy path, Show diff, Compare, Refresh. Forbidden: jargon ("hydrate the DAG", "parse the AST"), marketing superlatives, exclamation marks, ALL-CAPS shouting.
- Labels: sentence case, ≤ 4 words; stat labels are plain nouns ("Files", "Commits", "Councils", "Zones").
- Empty states: one sentence + one verb CTA ("Nothing matches that search. Clear filters.").
- Errors: cause + next verb, never blame ("Git history unavailable — showing snapshot data. Refresh to retry.").
- Numbers: tabular figures; dates "18 Nov 2026" style; SHAs as 7-char mono prefix.
- Emoji: never in app chrome; permitted only in agent-persona surfaces (/councils cards, deck title slides) reflecting repo culture [FACT — canon files use emoji headers].

### 7.6 Brand consistency rules across charts, 3D scene, and decks

1. **Single token source:** every hue, font, and spacing value resolves from `viz/lib/brand.ts` + CSS custom properties; hardcoded hex anywhere else fails brand QA.
2. **Namespace separation:** brand (`--st-*`) = chrome; zones (`--zone-*`) = categorical data; semantics (`--st-success/...`) = status. A component never mixes namespaces for one purpose.
3. **Charts (recharts/shadcn):** zone hues in fixed legend order are the categorical palette (max 6 series); grid lines neutral; brand green only for totals/foreground emphasis; gold only for the highlighted series or hero KPI. Non-zone categoricals (file-type mix) use a monochrome brand-green ramp with gold marking the largest slice.
4. **3D scene:** node materials use zone hues (emissive-tuned dark, desaturated light); selection/hover = gold pulse (reduced-motion: static gold outline); the ground/hub glow may use brand green; no zone-hue drift between 2D and 3D.
5. **Globe (cobe):** deep brand-green ocean; markers take zone hues by directory origin; the active/hotspot marker is gold.
6. **Decks:** each deck's accent = the dominant zone hue of its subject; title/closing slides carry the logo; body slides use at most one accent; embedded charts follow rule 3; speaker notes follow the §7.5 lexicon.
7. **Motion is brand:** GSAP transitions 200–400ms ease-out; no bounce except deliberate celebration moments; reduced-motion honored instantly (VIZ-014 contract).
8. **The cross-surface test (acceptance bar):** the same folder must be recognizably its zone hue in the tree, a chart, the 3D scene, and a deck without reading a label.
9. **Colour is never the sole encoding:** every zone/status hue is paired with an icon, label, or shape treatment (VIZ-014 dependency).

- 8. Run validation checklist (§9) — including the §7.6 rule-8 cross-surface walkthrough.
- 9. Hand off to Sparkling Curious (§15).

---

## 8. Commands/Configs/Schemas Where Applicable

- No executable commands are produced in Ask Mode; the artifact contains specification text only. Implementation lands in Code Mode via VIZ-012/VIZ-020.
- Reference schema (brand token record):
  `{ tokenId, namespace: "brand"|"zone"|"semantic", lightValue, darkValue, aaTextVariant, surfaces: ["tree","chart","3d","deck","globe"], usage, owner: "C08-BRAND-MANAGER" }`
- Config contract for implementers: export `BRAND`, `ZONES` (ordered: docs, prompts, execution, .stremiium, rea, git-internals), `TYPE_SCALE`, `LOGO` rules, and `LEXICON` (Explore/Learn/Inspect verb map) from `viz/lib/brand.ts`; Tailwind maps `--st-*`/`--zone-*` variables; recharts and react-three-fiber consume the same exported constants, never literal strings.

---

## 9. Validation Checklist

- [ ] Research data sources cited with [S#] references or explicitly marked unverified
- [ ] Evidence grades preserved ([FACT]/[EST]/[UNKNOWN]/[INFER]); decisions labelled D1–D6
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] SA regulatory considerations addressed where relevant (§11)
- [ ] Questions, concerns, assumptions, suggested improvements all populated (no placeholders/TBD)
- [ ] Missing dependencies identified (§6)
- [ ] Security considerations addressed (§10)
- [ ] Compliance gate named (council + executive where applicable) (§12)
- [ ] Rollback plan specified (§13)
- [ ] Escalation path specified (§14)
- [ ] Artifact handoff to Sparkling Curious described (§15)
- [ ] No private keys, credentials, or PII in artifact
- [ ] Artifact path inside Stremiium / Independent-projects workspace
- [ ] Zone hex mapping identical across §7.2 table and any code-facing schema in §8
- [ ] Zone hues pass WCAG 2.1 AA via the listed text variants on both themes (VIZ-014 to countersign)
- [ ] Microcopy lexicon covers every nav item and primary CTA with a §7.5 verb
- [ ] Cross-surface test (§7.6 rule 8) passes for all six zones on tree, chart, 3D scene, and one deck

---

## 10. Security Considerations

- Brand values are non-secret; but token files must never embed credentials, API keys, or PII (root README rule) [FACT].
- Commit author names render as repo data only; no enrichment, no avatars from external services, no profiling — POPIA-conservative handling [FACT — POPIA in company compliance canon].
- The placeholder logo is an interim internal standard; it must not be published as official Stremiium branding outside this workspace without C09/C01 approval (§14).
- Restrict trademark-bearing assets to C08 + C01 + C09 + C15 when they leave the workspace boundary.

---

## 11. South African Regulatory Considerations

- **Trade Marks Act 194 of 1993:** the `stremiium` wordmark and S-flow mark are treated as protected marks; usage rules (no distortion/recoloring, §7.4) preserve distinctiveness; C01 gate required before external publication [FACT — canon cites this Act for brand protection].
- **SA flag usage:** flag-inspired colours are adopted as inspiration only; no flag imagery or emblem reproduction appears in the product (avoids national-symbols misuse concerns) [INFER].
- **CPA 68 of 2008:** consumer-facing clarity — plain-language microcopy (§7.5) supports the plain-language requirement [FACT — canon cites CPA].
- **POPIA:** no personal-data collection by the viz app; author names are pre-existing repo content [FACT — canon compliance framework].
- Not applicable here: FSCA/FICA/CASP (no financial services offered), SARS CARF (no transaction data) — stated for the record per canonical prompt format.

---

## 12. Compliance Gate

- C08 Design-Creative + C01 Legal-Compliance (trademark and national-symbol usage on a learning surface that may be shared externally).
- Cross-council countersigns: VIZ-014 (contrast AA pairs), VIZ-012 (token implementation fidelity), VIZ-018 (theme variants of every brand/zone hue).
- Gate owner: C08 captain (VIZ-010) ratifies; conflicts between brand constraints and a11y/theme requirements escalate to Sparkling Curious for arbitration.

---

## 13. Rollback Plan

- Token revert: `viz/lib/brand.ts` is the single source — one commit restores the prior palette; snapshots and charts inherit automatically.
- Re-palette on: brand-asset arrival from C09 (replace placeholder logo lockup), AA failures flagged by VIZ-014, or C01 trademark objection.
- Re-enforce on consistency failures: any hardcoded-hex PR is reverted and re-pointed at the token source; zone drift between surfaces is fixed by re-running the §7.6 rule-8 cross-surface test.
- Decks regenerate from templates, so brand-rule rollbacks propagate without manual deck edits (VIZ-030 contract).

---

## 14. Escalation Path

- C08-BRAND-MANAGER → C08 Design-Creative Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).
- Brand-specific: official-asset or wordmark disputes skip to SC + C01 + C09 (Marketing-Communications) for canonical brand standards.
- Dependency blockers (VIZ-014 contrast countersign, VIZ-012 token contract) raise as INFO notes on the shared board before integration.

---

## 15. Artifact Handoff to Sparkling Curious

- The completed brief at `prompts/viz/c08-design-creative/brand-manager/prompt.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C08 Design-Creative outputs (VIZ-010–VIZ-019), conflict de-duplication — especially palette/token overlap with VIZ-012 and theme-hue overlap with VIZ-018 — and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix; this brief declares itself the brand source of truth for hues, type, logo, and lexicon that sibling tasks cite.
- The matching execution result lands at `execution/results/viz/c08-design-creative/brand-manager/execution-result.md` with the §9 checklist ticked and evidence grades intact.
- Artifact must pass the §9 Validation Checklist before handoff.

---

## 16. References & Research Inputs

- `/workspace/app/README.md` — workspace zones, prompt structure, evidentiary rule, conventions [FACT].
- `/workspace/app/.stremiium/agents/sparkling-curious.agent.md` — company context, mission/vision, five core values, council structure, artifact system [FACT].
- `/workspace/app/.kilo/plans/1794948779713-repo-viz-learning-environment.md` — task VIZ-017 scope, stack spine, six-zone data model, validation plan [FACT].
- `.stremiium/skills/ui-ux-pro-max/SKILL.md` — palette/font-pairing selection method for the SA-fintech register [FACT, methodology input].
- `.stremiium/skills/anthropics-applying-brand-guidelines/applying-brand-guidelines/{SKILL.md,REFERENCE.md}` — chart-palette exclusivity and brand-colour enforcement rules adapted in §7.6 [FACT, methodology input].
- `.stremiium/workflows/agent-workflows/the-artisan-workflows.md` — design/creative workflow, colour-palette documentation practice [FACT].
- `prompts/stremiium/c08-design-creative/brand-manager/prompt.md` and `prompts/stremiium/c08-design-creative/theme-designer/prompt.md` — canonical 16-section master-prompt format and model-lock/gate conventions [FACT].
- South African national flag colour specification (Pantone 3415C green, 1235C gold) — external standard, graded [INFER]; no in-repo brand asset found [FACT].
