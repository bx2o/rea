# Exact Additional Prompts / Tasks to Run

Generated from the full code/design critic audit (2026-11-19). Each task is standalone with a disjoint file scope so agents can run in parallel.

## P0 — Stability (COMPLETED this session)

- [x] **TASK-P0-01** — Use local `./node_modules/.bin/next` in `scripts/dev-supervisor.sh` and `scripts/safe-build.sh` (never `npx`). Fixes the Next 16 fetch → SyntaxError class.
- [x] **TASK-P0-02** — Add `scripts/safe-build.sh` that builds in an isolated copy and restores `next-env.d.ts`/`tsconfig.json`.
- [x] **TASK-P0-03** — Restore canonical `next-env.d.ts` (single `.next-dev` ref) and clean `tsconfig.json` includes.
- [x] **TASK-P0-04** — Move supervisor into repo (`scripts/dev-supervisor.sh`) so `/tmp` wipes can't lose it.

## P1 — Quality gates

- [ ] **TASK-QA-01** — Add **V20 stale-dist gate** to `scripts/verify-viz.mjs`: fail if `next-env.d.ts` or `tsconfig.json` references a dist dir that does not exist on disk. Acceptance: temporarily add a fake dist ref → V20 FAIL; restore → 20 PASS.
- [ ] **TASK-QA-02** — Add **V21 contrast gate**: compute ratios for foreground/background token pairs; fail if any normal-text pair < 4.5:1. Acceptance: 21 PASS.
- [ ] **TASK-QA-03** — Add 10 focused unit tests (snapshot parser, path validation, zone mapping, markdown renderer, churn reconciliation). Zero new runtime deps; use Node's built-in test runner.
- [ ] **TASK-QA-04** — Add `.devlogs/` and `.next-dev/` to `viz/.gitignore`; add single-instance PID lock to supervisor.

## P2 — Pro-level design overhaul (the "amateur → pro" work)

Run in this order; all constraints: token colors only (zero hex), exact slide counts 13/14/12/14, non-SVG prose byte-identical, all facts/citations/paths preserved, every SVG role=img+aria-label+title+desc, content/public copies byte-identical, 19+ gate PASS.

- [ ] **TASK-CORE-01** — Background system: add layered scene backgrounds to `app/globals.css` `.stunning-deck` block (radial vignette + SVG feTurbulence grain + blueprint grid pattern) and apply per-deck via `data-deck` attribute in `components/decks/reveal-deck.tsx`. Distinct motifs: 01 technical blueprint, 02 command-center radial, 03 knowledge-network dots, 04 architecture grid.
- [ ] **TASK-CORE-02** — Typography system: add modular scale tokens (`--fs-display:56px --fs-h1:40 --fs-h2:30 --fs-h3:22 --fs-body:17 --fs-caption:13 --fs-data:15`) to globals.css; style `.reveal h1/h2/h3/p/figcaption` with them; align SVG text to the scale where practical.
- [ ] **TASK-CORE-03** — Icon system: replace every Unicode emoji pictograph in the 4 decks with inline lucide SVG icons (24px, stroke 1.75, `aria-hidden="true"`, currentColor). Keep all other prose byte-identical.
- [ ] **TASK-D01** — Deck 01: rebuild hero with blueprint-grid + orbital rings; add per-slide annotation callouts and a signature "zone map" motif on the donut slide.
- [ ] **TASK-D02** — Deck 02: rebuild hero with command-center radial; make the council org tree the centerpiece with weighted connectors and captain chips; pro $STM callouts.
- [ ] **TASK-D03** — Deck 03: rebuild hero with knowledge-network node graph; funnel with percentage callouts; 18-section matrix with category color coding.
- [ ] **TASK-D04** — Deck 04: rebuild hero with architecture-grid; governance crown; SLA staircase with pro axis labels and gold critical-skip path.
- [ ] **TASK-CORE-04** — Player chrome: glass command bar refinements, progress ring, slide transition polish, motion-safe gating (already largely done — final pass).
- [ ] **TASK-VIS-01** — Add a professional slide template/styleguide page (`/styleguide`) showcasing the design system (type scale, colors, icons, chart anatomy) — useful for maintenance and demonstrates pro craft.

## P3 — Content accuracy

- [ ] **TASK-CONT-01** — Resolve the dashboard/deck count mismatch: either freeze the dashboard's displayed totals to the cited commit (`b474113`) with a "as of" label, or update deck-01 to the current HEAD with regenerated snapshot. Acceptance: dashboard and deck-01 show the same figure or explicitly label why they differ.

## P4 — Future enhancements (out of scope for next wave)

- Browser click-through QA with Playwright (no browser in sandbox).
- AAA text variants for primary/muted tokens.
- Optional widget libraries (react-bits / wigggle-ui / ui-layouts) documented in REGISTRIES.md but not installed.

## Critic reports backing this list

- `critique-full-01-code-design.md` — code + design findings, slide scorecards
- `critique-full-02-design-direction.md` — pro design spec + task definitions
- `critique-full-03-stability.md` — SyntaxError root-cause + permanent fixes
- `critique-full-04-a11y-content.md` — contrast table + fact-check table
