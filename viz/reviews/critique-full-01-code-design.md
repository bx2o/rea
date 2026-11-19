# Full Critic — Code & Design Audit (direct, critic subagents rate-limited)

## Master findings table

| ID | Sev | Category | Issue | Evidence | Fix |
|---|---|---|---|---|---|
| CD-01 | High | Debug | `npx next dev` can fetch Next 16 (expects `.jsonc` files), breaking dev | dev log showed `next@16.4.6` fetched; local is 15.5.29 | P0 FIXED: use `./node_modules/.bin/next` in supervisor + build scripts |
| CD-02 | High | Debug | `next build` with `NEXT_DIST_DIR` rewrites `next-env.d.ts`/`tsconfig.json` → dev recompiles against deleted dist → stale chunk SyntaxError | next-env.d.ts referenced `.next-critic-build` | P0 FIXED: `scripts/safe-build.sh` builds in isolated copy + restores config |
| CD-03 | Medium | Code | No unit tests; QA harness is de-facto integration gate only | no test files | Add 10 focused tests (snapshot parser, path validation, zone mapping, markdown renderer, churn reconciliation) |
| CD-04 | Low | Code | Files >600 lines (deck markdown 85–93KB, app/page ~927 lines) | wc -l | Acceptable for content decks; extract chart section from app/page if maintaining |
| CD-05 | Low | Code | `console.error("[learn]", error)` in error boundaries | error.tsx:28 | Intentional operator surface; keep |
| CD-06 | Medium | Design | Decks are SVG-on-flat-background — good data, but backgrounds are mostly solid/gradient fills, not true layered scenes | deck-01..04 SVG structures | TASK list below: pro background system |
| CD-07 | Medium | Design | Mixed icon language: Unicode emoji pictographs + inline SVG | all decks | Replace emoji with consistent inline SVG lucide set |
| CD-08 | Medium | Design | Type scale is ad-hoc per slide (10–46px ranges vary) | SVG font-size attrs | Adopt modular scale (56/40/30/22/17/13/15) |
| CD-09 | Low | Design | Overuse of glow/shadow risks visual noise | multiple SVGs | 60/30/10 color rule; reserve glow for highlights |
| CD-10 | Low | A11y | Primary green ~5.6:1 (AA, below AAA 7:1) | globals.css tokens | Document as AA-conformant; AAA text variant optional |

## Slide-by-slide scorecard (summary)

Each deck: **8.5/10** average. Data charts and hierarchy diagrams are strong (9/10); hero slides and typography consistency are good but not pro-level (8/10); backgrounds are the weakest dimension (7/10) — flat gradients rather than layered compositions.

## Pro-level design upgrade tasks (exact prompts to run)

See `critique-full-02-design-direction.md` for the full spec. Task IDs:
- **TASK-CORE-01**: Background system — add `.stunning-deck` scene backgrounds (radial vignette + SVG feTurbulence noise + blueprint grid) per deck; token-only; globals.css + reveal-deck.tsx.
- **TASK-CORE-02**: Typography system — modular scale CSS variables + apply to slide sections via reveal CSS; replace ad-hoc SVG font-size attrs where practical.
- **TASK-CORE-03**: Icon system — replace all Unicode emoji in slide prose with inline lucide SVG icons (24px, stroke 1.75, aria-hidden).
- **TASK-D01..D04**: Per-deck hero rebuild with distinct signature motifs (blueprint / command center / knowledge network / architecture).
- **TASK-QA-01**: Add V20 check to verify-viz.mjs for stale dist references + a11y contrast gate.

**Verdict:** Code stable after P0 fixes; design good-but-amateur — pro overhaul tasks defined.
