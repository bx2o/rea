# Master Prompt — VIZ-030 · C03-DOCUMENTATION-SPECIALIST (Documentation-Specialist) — Viz Learning Decks

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** learning-deck spec + deck markdown sources (≥ 4 reveal.js decks) for the `viz/` app `/learn` route, generated from `README.md`, `docs/program/tbs/tbs/PROGRAM_BRIEF.md`, `docs/program/tbs/tbs/TASK_INDEX.md`, `prompts/replies/MASTER-INDEX.md`, and `.stremiium/config/council-department-mapping.json`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C03-DOCUMENTATION-SPECIALIST  
**Council:** C03 C03 Admin-Knowledge  
**Gate:** C03 Admin-Knowledge + C01 Legal-Compliance  
**Task:** VIZ-030 — Repo Visualization & Learning Environment (learning content: auto-generate reveal.js decks from README / PROGRAM_BRIEF / docs structure)

---

## 1. Summary

- This master prompt instructs C03-DOCUMENTATION-SPECIALIST to design the learning-content layer of the repo visualization app (`viz/`, plan §4): auto-generated reveal.js decks rendered at the `/learn` route from canonical repo docs.
- Decks required (≥ 4): (1) **Repo Orientation** — workspace zones and reading order; (2) **Program Brief** — SC-REA-NEOBANK-5.0, the 16 strategic councils, the four-bucket evidentiary rule; (3) **Prompts & Replies system** — 201 Master Prompts (164 Stremiium + 37 NeoBank) → substantive replies; (4) **Councils & Governance** — two-plane hierarchy and routing rules R1–R6.
- Per-deck slide outlines are specified in §7; every slide cites its source file so each claim is auditable against the physical workspace.
- reveal.js configuration is specified in §8: themes, transitions, markdown sources, keyboard, overview mode, speaker view, and PDF export; client-only dynamic import to avoid SSR failure (plan §8 failure table).
- Deck markdown sources live in `viz/content/decks/` and register via `decks.manifest.json`; Code Mode (VIZ-020 frontend-engineer) mounts them at `/learn`.
- Coordinates with: VIZ-018 theme-designer and VIZ-017 brand-manager (deck theme tokens), VIZ-014 accessibility-design-lead (keyboard nav, reduced motion, AA contrast), VIZ-031 knowledge-graph-builder (deck ↔ file ↔ council cross-links), VIZ-001 sparkling-curious (synthesis + arbitration).

---

## 2. Assumptions

- The `viz/` Next.js 15 scaffold exists per plan §4 with a `/learn` route and a `viz/content/decks/` folder for markdown sources.
- reveal.js is installed (`pnpm reveal.js`, plan §4 install sequence) or vendored offline; the `/learn` route imports it client-only (`next/dynamic`, `ssr: false`).
- Deck facts derive from canonical repo docs; physical workspace evidence overrides stale reports (root README Conventions).
- Four decks ship at launch; the manifest schema allows more decks later without code changes.
- Speaker notes are authored per slide (guided-tour script), not auto-stubbed.
- Slide count budget: 12–15 slides per deck; ≤ ~6 bullets per slide to avoid overflow.

---

## 3. Questions

- Which deck is the default landing deck for first-time visitors (recommendation: Repo Orientation)?
- One program-wide deck theme or per-deck theme accents (resolved with VIZ-018 token spec)?
- Should slides deep-link into the app (e.g., council slide → `/councils`, zone slide → `/explorer?path=docs/program`)?
- How are deck facts kept in sync with docs drift (manual re-verification cadence vs a `scripts/decks-sync` check that diffs cited files)?
- Does PDF export require an ink-friendly light variant in addition to the on-screen dark theme?
- Should deck progress persist per visitor (hash deep links only, or local-storage resume)?

---

## 4. Concerns

- **SSR**: reveal.js does not server-render cleanly — the deck component must be a client-only dynamic import (plan §8 "reveal.js SSR issues → Client-only dynamic import").
- **Stale links**: some README relative links do not match the physical tree (e.g., reading-order links to `docs/program/tbs/PROGRAM_BRIEF.md` while the physical file is at `docs/program/tbs/tbs/PROGRAM_BRIEF.md`); every deck citation must be resolved against the physical filesystem before shipping.
- **Count drift**: README cites a 30-entity dossier research surface; PROGRAM_BRIEF §3 lists a 17-entity target roster — decks must quote each source exactly as stated and cite the file; no silent reconciliation.
- **Reduced motion**: transitions must degrade to `none` when the VIZ-014 reduced-motion switch or `prefers-reduced-motion` is active.
- **Keyboard safety**: embedded reveal.js must not trap focus; overview zoom must keep AA contrast at reduced scale.
- **Evidence honesty**: decks describing the REA program must preserve the four-bucket rule; no deck slide may present Inferred as Seen (PROGRAM_BRIEF §5).

---

## 5. Suggested Improvements

- Deck manifest with per-deck metadata (id, title, sources, theme, transition, minutes) so `/learn` auto-registers decks.
- Per-slide source footer ("Source: README.md · Zone map") for evidentiary transparency.
- Cross-links from slides into `/explorer`, `/commits`, `/councils` and back to the deck (`/learn/<deck>#/<slide>`).
- Speaker notes double as the guided-tour narration script for the VIZ-016 learning workflow.
- A sync-check script that re-extracts cited facts from source docs and flags drift (aligned with VIZ-024 validation).
- PDF export instructions + a "Download slides (PDF)" affordance using reveal.js `?print-pdf`.

---

## 6. Missing Dependencies

- `viz/` scaffold + `/learn` route and deck component (VIZ-020 frontend-engineer).
- `reveal.js` dependency installed (offline fallback: vendored ESM bundle, documented in `viz/README`).
- Design tokens / theme for decks (VIZ-018 theme-designer; VIZ-017 brand-manager palette/typography).
- A11y audit of deck surfaces (VIZ-014 accessibility-design-lead).
- Verified present in workspace: `README.md`; `docs/program/tbs/tbs/PROGRAM_BRIEF.md`; `docs/program/tbs/tbs/TASK_INDEX.md`; `prompts/replies/MASTER-INDEX.md`; `prompts/replies/research/` (KNOWLEDGE-BASE, SOURCE-CITATION-MAP, REA-RESEARCH-LOG); `.stremiium/config/council-department-mapping.json`; `.stremiium/registry/master-registry.json`; `.stremiium/agents/council-agents/`; `execution/EXECUTION_LEDGER.md`.

---

## 7. Step-by-Step Implementation or Research Plan

- 1. Ingest the source documents: root `README.md` (zones, reading order, prompt structure, evidentiary rule, TBS snapshot), `docs/program/tbs/tbs/PROGRAM_BRIEF.md` (program ID, 16 councils, dossier roster, four evidentiary outputs, strategic filter), `docs/program/tbs/tbs/TASK_INDEX.md` (live status board), `prompts/replies/MASTER-INDEX.md` (reply index), `.stremiium/config/council-department-mapping.json` (councils, planes, CRD coordinators, routing rules R1–R6).
- 2. Define the deck pipeline conventions: markdown sources at `viz/content/decks/<nn>-<slug>.md` using `---` slide separators, `<!-- .slide: data-… -->` attributes, and `Note:` speaker notes; registration via `decks.manifest.json` (§8).
- 3. Author **Deck 01 — Repo Orientation** (default landing deck; theme suggestion: program dark theme; 13 slides):
  - S1 Title — "rea — Repo Orientation" (program `SC-REA-NEOBANK-5.0`; master orchestrator Sparkling Curious `SC-MASTER-001`).
  - S2 What this workspace is — Stremiium NeoBank reverse-engineering program workspace; unified, zone-organised (2026-11-18); all four `trae/agent-*` branches integrated into `main`; no deletions in consolidation.
  - S3 Reading order — the 6-step list from README (PROGRAM_BRIEF → TASK_INDEX → dossiers → 00-SYSTEM-OVERVIEW → PLAN → unconsolidated README).
  - S4 Canonical zones — `.stremiium/` (source of truth) and `.github/` (agent roster, skills, orchestration workflows).
  - S5 Program zones — `docs/governance/`, `docs/program/` (tbs, plan, councils, delivery, artifacts, skills, templates, workflows).
  - S6 Research & architecture zones — `docs/research/` (dossiers across 6 domain groups), `docs/architecture/` (target-system + platform-design).
  - S7 Engineering, deliverables, archive zones — `docs/engineering/` (REA toolkit), `docs/deliverables/`, `docs/archive-second-versions/` (no deletions).
  - S8 Operational surfaces — `prompts/` (per-prompt folders), `prompts/replies/` (201 replies), `execution/` (results + EXECUTION_LEDGER.md), `rea/` (v6.5.0, present but not installed).
  - S9 Conventions — markdown only; conventional commits (`feat:` `docs:` `analysis:` `arch:` `chore:`); no credentials/keys/tokens/PII; physical evidence + canonical `.stremiium/` override stale reports.
  - S10 REA quickstart — `nvm use 24.18.0`; `npm ci --engine-strict=false && npm run build:cached`; `node scripts/rea.mjs doctor --json`.
  - S11 TBS snapshot — T1.0 PARTIAL, T1.1 PENDING, T1.2 ACTIVE, T2–T7 ACTIVE, T8.0 COMPLETED (README table).
  - S12 Where to go next — links to Deck 02, `/explorer`, `/councils`, `/commits`.
  - S13 Sources & Q&A — full citation footer for every fact used above.
- 4. Author **Deck 02 — Program Brief** (14 slides):
  - S1 Title — "SC-REA-NEOBANK-5.0" (Stremiium (Pty) Ltd, Bloemfontein, Free State, South Africa; architectural parent `SC-MASTER-001`; Two-Phase Dual Engine; REA `morluto/rea`).
  - S2 Why this program exists — NeoBank unifying fiat banking, digital-asset custody, fan/BLT loyalty tokens, phygital collectibles, prediction markets, DFS fantasy sports under one behavioural rewards engine and `$STM` (ERC-20 on Polygon PoS / ZK-EVM).
  - S3 The competitive field — incumbents (Standard Bank, ABSA, Nedbank, FNB), digital first-movers (TymeBank, Discovery Bank, African Bank), CASPs (Luno, VALR, Flex.one).
  - S4 The 16 strategic councils — overview of the authority map, tiers 1–3 (PROGRAM_BRIEF §2).
  - S5 Tier 1 councils C01–C10 — captain + primary mandate each (Legal-Compliance → Finance-IR).
  - S6 Tier 2 C11–C13 and tier 3 C14–C16 — Dev-Engineering, Cybersecurity-Intel, Web3-Finance; Customer-Success, Product-Management, Banking-Fintech.
  - S7 Target dossier roster — 17 entities in PROGRAM_BRIEF §3 across 6 domain groups, with lead councils per entity.
  - S8 Mandatory dossier template — `README.md` + `01-identity…08-implications` + `evidence-ledger.json` per entity folder.
  - S9 The four evidentiary outputs — Evidence (Seen), Recovered Graph (Synthesised), Limitations (Known Boundaries), Unknowns (Unresolved); each Seen item cites its source.
  - S10 The honesty rule — REA not installed, no APK/ASAR supplied; Seen limited to public citable sources; artefact-dependent claims are Inferred or Unknown with the resolving extraction step named.
  - S11 Evidence ledger format — `evidence-ledger.json` fields (`id`, `claim`, `evidence_class`, `source_type`, `source_ref`, `confidence`, `verified_at`); ≥ 20 entries.
  - S12 Strategic filter — ADOPT / ADAPT / AVOID / BEAT verdicts per major finding.
  - S13 Depth bar — research files 400–900 lines / 12–30 KB; task files 150–350 lines / 5–12 KB; padding disallowed.
  - S14 Engineering anchors — Mambu CBS on AWS `af-south-1`, Kong + GraphQL gateway, Kafka, BankservAfrica (PayShap/RTC/EFT), MPC wallets, `$STM` 1,000,000,000 fixed supply + quarterly buy-back/burn.
- 5. Author **Deck 03 — Prompts & Replies system** (12 slides):
  - S1 Title — "201 Master Prompts → Substantive Replies".
  - S2 The corpus — all 201 Master Prompts (164 Stremiium + 37 NeoBank) answered as substantive UnConsolidated replies in `prompts/replies/`.
  - S3 Two prompt families — `prompts/neobank/<department>/<prompt-name>/` (16 departments, 37 prompts); `prompts/stremiium/<council>/<agent-name>/` (16 councils + orchestration, ~165 agents).
  - S4 Per-prompt folder convention — one folder per prompt, one `prompt.md` inside it; header carries agent ID, council, gate, model lock `auto`.
  - S5 The replies index — `prompts/replies/MASTER-INDEX.md` (complete folder/file index) and `README.md` (format spec).
  - S6 Reply research apparatus — `research/KNOWLEDGE-BASE.md` (topic map), `research/SOURCE-CITATION-MAP.md` (`[S#]` → source path), `research/REA-RESEARCH-LOG.md`.
  - S7 Reply tooling — `tools/generate-replies.mjs` and `tools/verify-replies.mjs`.
  - S8 Execution results — `execution/results/<scope>/<prompt-name>/execution-result.md` plus `execution/EXECUTION_LEDGER.md`.
  - S9 Evidence discipline in replies — `[FACT]` / `[EST]` / `[UNKNOWN]` / `[INFER]` grades with `[S#]` citations; no placeholders/TBD.
  - S10 The derived layer — `docs/governance/unconsolidated/` is the atomised knowledge view; canonical source remains `.stremiium/`.
  - S11 Worked example — trace one prompt end-to-end: prompt folder → reply file → execution result → cited source (live links into `/explorer`).
  - S12 Sources & next steps.
- 6. Author **Deck 04 — Councils & Governance** (14 slides):
  - S1 Title — "16 Councils, Two Planes, Six Routing Rules".
  - S2 Two-plane hierarchy — command plane (`.stremiium/agents/council-agents`), workforce (department-agents), staff line (coordinators), meta-councils (advisory), executive; model `two-plane-hierarchy` per mapping v1.1.0.
  - S3 Machine-readable registry — `.stremiium/registry/master-registry.json`, `.stremiium/config/council-department-mapping.json`, council definitions in `.stremiium/agents/council-agents/`.
  - S4 Councils C01–C08 — captain + departments per mapping (C01 Legal-Compliance … C08 Design-Creative).
  - S5 Councils C09–C16 — captain + departments (C09 Marketing … C16 Banking-Fintech, incl. C15 products-blt / products-fan-tokens split).
  - S6 R1 — task → owning council captain by domain matrix **before any department contact**.
  - S7 R2 — captain decomposes **only** to the departments listed in the mapping.
  - S8 R3 — cross-council tasks convene captains; SC arbitrates conflicts < 24h.
  - S9 R4 — CRD coordinators may intercept any step for git-safety / security / cost gates.
  - S10 R5 — meta-councils advise SC on request; never command departments directly.
  - S11 R6 — subagents (`SUB-`/`The-*`) instantiate only under a registered AGT parent.
  - S12 CRD coordinator roster — 15 coordinators (workflow-orchestrator, git-state-safeguard, security-compliance-sentinel, resource-cost-governor, engineering-product, council-liaison, compliance-ops, executive-liaison, research-ops, data-governance, knowledge-flow, incident-response, deployment, agent-lifecycle, project-sync).
  - S13 Escalation path — agent → council captain → Sparkling Curious (`SC-MASTER-001`) → Mychael (CEO) → Board; critical security/regulatory/privacy events skip to SC + C01 + C16 with 1h SLA (workflow-routing.md §4).
  - S14 Vocabulary — canonical "Council"; "Squad" retired; frontmatter alias grace one release cycle.
- 7. Write speaker notes for every slide (`Note:` blocks) — narration doubles as the guided-tour script.
- 8. Specify the reveal.js runtime configuration and deck schemas (§8) for Code Mode hand-off; client-only dynamic import for SSR safety.
- 9. Run the validation checklist (§9), resolve all cited paths against the physical tree, and hand off to Sparkling Curious (§15).

---

## 8. Commands/Configs/Schemas Where Applicable

- No executable commands are produced in Ask Mode. The artifact is the deck spec + markdown sources. Reference schemas follow.

- Deck file layout (Code Mode target):
```
viz/content/decks/
├── decks.manifest.json
├── 01-repo-orientation.md
├── 02-program-brief.md
├── 03-prompts-and-replies.md
└── 04-councils-and-governance.md
```

- `decks.manifest.json` schema:
```json
{
  "program": "SC-REA-NEOBANK-5.0",
  "generated": "2026-11-18",
  "defaultDeck": "01-repo-orientation",
  "decks": [
    {
      "id": "02-program-brief",
      "title": "SC-REA-NEOBANK-5.0 — Program Brief",
      "sourceDocs": ["README.md", "docs/program/tbs/tbs/PROGRAM_BRIEF.md"],
      "theme": "stremiium-dark",
      "transition": "slide",
      "reducedMotionTransition": "none",
      "estimatedMinutes": 12,
      "speakerNotes": "required-per-slide",
      "pdfExport": true,
      "deepLinks": { "explorer": true, "councils": true }
    }
  ]
}
```

- reveal.js runtime config (mounted client-only via `next/dynamic` with `ssr: false`):
```js
Reveal.initialize({
  embedded: true,
  theme: deck.theme,              // stremiium tokens (VIZ-018) or reveal built-ins (black/white/sky/night/serif/simple/solarized)
  transition: 'slide',           // none | fade | slide | convex | concave | zoom — per-deck override
  backgroundTransition: 'fade',
  markdown: { smartypants: true },   // RevealMarkdown plugin renders viz/content/decks/*.md
  keyboard: true,                 // ← → Space PgUp/PgDn Home/End; Esc/O = overview; S = speaker view; ? = help
  overview: true,                 // zoomed slide grid for navigation
  controls: true,
  progress: true,
  slideNumber: 'h.v',
  hash: true,                     // deep links /learn/<deck>#/<slide>
  fragments: true,
  touch: true,
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
});
// Reduced motion (VIZ-014 switch or prefers-reduced-motion): transition -> 'none', fragments -> reveal-all.
// PDF export: /learn/<deck>?print-pdf then browser print-to-pdf; ink-friendly light theme variant offered.
```

- Deck markdown conventions: `---` separates slides; `<!-- .slide: data-... -->` sets slide attributes/classes; `<!-- .element: class="fragment" -->` for stepped reveals; trailing `Note:` comment block per slide feeds speaker view; every slide ends with a `Source:` footer line.

---

## 9. Validation Checklist

- [ ] ≥ 4 decks specified: Repo Orientation, Program Brief, Prompts & Replies, Councils & Governance (plan §9.5: learn decks ≥ 4)
- [ ] Per-deck slide outline present; speaker notes required per slide; no placeholders/TBD
- [ ] Every slide fact cites its source file; counts quoted exactly per source (201 = 164 + 37; 17-entity roster per PROGRAM_BRIEF §3; 30-entity research surface per README — no silent reconciliation)
- [ ] Evidentiary rule preserved: four buckets; no "Seen-from-artefact" claims; honesty rule stated in Deck 02
- [ ] reveal.js config covers themes, transitions, markdown, keyboard, overview, speaker view, PDF export
- [ ] Client-only dynamic import specified (SSR failure mode); reduced-motion → `transition: none`
- [ ] All cited paths verified against the physical tree (no stale links)
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] SA regulatory considerations addressed where relevant
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (council + executive where applicable)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described
- [ ] No private keys, credentials, or PII in artifact
- [ ] Artifact path inside Stremiium / Independent-projects workspace

---

## 10. Security Considerations

- Deck content mirrors committed repo docs only; no secrets, keys, tokens, or PII may enter deck sources (deck files are committed and scanned like any other file).
- Outbound links from slides are restricted to files inside this workspace; external URLs must be https and listed for review.
- Speaker notes may contain narration only — no credentials or environment details beyond the public REA quickstart in README.

---

## 11. South African Regulatory Considerations

- POPIA: no personal data in decks; named executives appear only as published org facts already in repo docs.
- CPA 68 of 2008: consumer-facing pricing facts (fees, tiers) quoted in decks must match the cited source exactly — no invented figures.
- FSCA/financial-promotions caution: competitive-landscape slides must keep the Seen/Inferred/Unknown labels (PROGRAM_BRIEF §5) so no unverified claim reads as fact; C01 reviews these slides.

---

## 12. Compliance Gate

- C03 Admin-Knowledge + C01 Legal-Compliance. Deck content quoting regulatory posture or competitor claims requires C01 disclaimer review (evidentiary-labeling rule).
- C08 Design-Creative coordination (non-blocking for content): deck visual language is ratified by VIZ-010 captain against the VIZ-018 theme spec before launch.

---

## 13. Rollback Plan

- Decks are content files: revert `viz/content/decks/*.md` + `decks.manifest.json` to the previous commit to restore the last good deck set.
- A single deck can be disabled by removing its manifest entry — no code change, no route change.
- After any source-doc reorganisation, re-run the sync-check (§5) and re-verify cited paths before re-publishing.

---

## 14. Escalation Path

- C03-DOCUMENTATION-SPECIALIST → C03 Admin-Knowledge Captain (`C03-chief-librarian`) → Sparkling Curious (`SC-MASTER-001`) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).
- VIZ-task conflicts (theme ownership with VIZ-018, route ownership with VIZ-020, cross-links with VIZ-031) escalate to Sparkling Curious for arbitration per routing R3 (< 24h).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed learning-deck spec + four deck markdown sources are handed off to Sparkling Curious (`SC-MASTER-001`) for synthesis with other C03 outputs (VIZ-031 knowledge-graph-builder), cross-council conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5), arbitrates C08 (visual language) vs C11 (route implementation) overlaps per the Council Collaboration Matrix, and registers the handoff in the VIZ-001 delegation registry.
- The artifact must pass the §9 Validation Checklist before handoff.
