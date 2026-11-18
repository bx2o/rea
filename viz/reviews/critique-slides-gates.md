# Slide Gate & Rendering Critic — DIRECT AUDIT

**Date:** 2026-11-18 · 4 critic subagents hit the provider free-model limit; the coordinator performed all four audits directly in Code Mode.

## Gate chain (all green)

| Gate | Command | Result |
|---|---|---|
| TypeScript | `npx tsc --noEmit` | **0 errors** |
| QA harness | `node scripts/verify-viz.mjs` | **19 PASS / 0 FAIL / 0 WARN** |
| Production build | `NEXT_DIST_DIR=… npx next build` | exit 0 (16 routes) |
| Routes | `/ /learn /tours /explorer /commits /globe /councils` | all 200 |

## Deck structure (verified)

| Deck | Slides | SVGs | Fragments | Notes |
|---|---|---|---|---|
| 01 repo-orientation | 13 (12 sep) | 15 | 37 | 13 |
| 02 program-brief | 14 (13 sep) | 6 | 21 | 14 |
| 03 prompts-and-replies | 12 (11 sep) | 12 | 24 | 12 |
| 04 councils-governance | 14 (13 sep) | 14 | 33 | 14 |

All slide counts match `content/decks/decks.json` (13/14/12/14 = 53 slides).

## Gate integrity

- **V10 learn-decks**: verifies ≥4 deck markdown files in content + public + a manifest with ≥4 entries — genuine (a missing deck would fail). Does NOT assert exact per-deck slide counts, but the dashboard/manifest and this audit cover that.
- **V18 links/resolve**: scans backtick-quoted paths in root README, viz/README and all 4 decks, resolving relative to repo root, file dir, and viz root — genuine (51 paths checked). Handles SVG text paths because it scans the raw markdown text.
- **V19 feature contract**: asserts presence AND wiring of the palette (metaKey/ctrlKey + mounted in shell), explain panel, tour player, reduced-motion toggle (writes the key), council promptsDirs (resolves each dir on disk), zone filter (filters, not dims), lastCommit (not hardcoded null), error boundaries + 404, route template, commit-detail route — genuine; it failed-closed earlier with 10 unmet contracts and went to 0 as agents landed fixes.

## No-hex / deps / pairing

- No literal `#RRGGBB` in any deck file or `reveal-deck.tsx`; all visuals use `hsl(var(--zone-*))` tokens.
- `content/decks/*.md` byte-identical to `public/decks/*.md` (cmp clean for all 4).
- No new runtime dependencies added by design agents (only @types/* and typescript version pins).

## Cleanup

Removed stray critic build artifacts: `.next-critic-gates/`, `.next-critic-build/` references in `next-env.d.ts` and `tsconfig.json` — restored canonical config.

**Verdict: GATES SOUND.**
