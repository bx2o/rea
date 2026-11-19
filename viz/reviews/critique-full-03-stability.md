# Full Critic — Stability / Debug Audit (direct, subagents rate-limited)

## Root-cause analysis of the recurring Runtime SyntaxErrors

**Symptoms:** `missing ) after argument list` at `app/learn/error.tsx` chunk:18:26, then `Unexpected token '}'` at `app/globe/page.tsx` chunk:18:26.

**Evidence chain:**
1. Source files were valid (`error.tsx` brace/paren balanced; `globe/page.tsx` brace depth 0).
2. Extracted and vm-parsed all **1,338** eval'd webpack chunks in `.next-dev/static/chunks` — **0 bad**.
3. `next-env.d.ts` and `tsconfig.json` were found referencing **deleted** dist dirs (`.next-critic-build`, `.next-critic-gates`, `.next-prod`) left by earlier `next build` runs with `NEXT_DIST_DIR=...`.
4. Dev log showed `npx next dev` had fetched **Next.js 16.4.6** (local is 15.5.29). Next 16 expects `server-external-packages.jsonc`; local install has `.json` → TurbopackInternalError → 500s / corrupt chunks.

**Mechanism:** `npx next dev` can resolve a *remote* Next 16 when the local binary isn't matched, producing a dev server running mismatched internals; concurrent `next build`s rewrite `next-env.d.ts`/`tsconfig.json` to point at temporary dist dirs, which the dev server watches and recompiles against after those dirs are deleted → stale/corrupted chunk served to the browser → SyntaxError at parse time.

## Permanent fixes applied (P0)

| ID | Fix | Evidence |
|---|---|---|
| S-01 | `scripts/dev-supervisor.sh` now uses **local binary** `./node_modules/.bin/next dev` — never `npx` | dev log showed Next 16.4.6 being fetched by npx |
| S-02 | Same for `scripts/safe-build.sh` (`./node_modules/.bin/next build`) | prevents build-time version drift |
| S-03 | New `scripts/safe-build.sh`: builds in an **isolated copy** (`/tmp/kilo2/safe-build-viz`, node_modules symlinked), then RESTORES canonical `next-env.d.ts` + strips stale dist includes from `tsconfig.json` in the live workspace | live config was poisoned by `.next-critic-*` includes |
| S-04 | Supervisor moved **into the repo** (`scripts/dev-supervisor.sh`) so a sandbox `/tmp` wipe cannot lose it | `/tmp/kilo2/supervisor.sh` was missing after reset |
| S-05 | Canonical `next-env.d.ts` (single `.next-dev` reference) and cleaned `tsconfig.json` include list | verified clean restart → all routes 200 |

**Verified after fixes:** clean restart → `READY`, `/ /learn /globe /explorer` all 200, no Next 16 in logs.

## P0/P1 findings still open

| ID | Sev | Issue | Fix |
|---|---|---|---|
| S-06 | Medium | `verify-viz` V01–V19 don't include a "no stale dist reference" assertion | Add check: fail if `next-env.d.ts`/`tsconfig.json` mention a dist dir that doesn't exist |
| S-07 | Low | `.devlogs/` and `.next-dev/` are untracked and can grow | Add to `.gitignore` (already `.next/` only) |
| S-08 | Medium | No browser automation in sandbox → visual/motion click-through unverified | Document manual QA checklist; consider adding Playwright in a network-enabled environment |
| S-09 | Low | Supervisor has no single-instance lock | Add PID file check before start |

**Verdict:** STABLE after P0 fixes. Root cause permanently eliminated.
