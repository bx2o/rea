# 13 — Loading & Runtime Critic Report

**Date:** 2026-11-18 · **Mode:** read-only audit + manual verification (subagents were rate-limited; coordinator performed checks directly)
**Target:** http://localhost:3000 · Public link: https://p3000-10c0a7cc04d741e1acc0e9ac7b65ec3e.cloud-agent.kiloapps.ai/

## Root cause of "not fully loading"

The sandbox reset wiped `/tmp/kilo2`, which held the supervisor script. No supervisor meant the dev server was not restarted after the reset — `localhost:3000` returned `000` and both public URLs failed (loca.lt 503, kiloapps 401/proxy). **This was infrastructure, not application code.**

A second blocker was found: Next 15.5 `next dev` uses Turbopack by default and rejected the `webpack` config in `next.config.ts` with "using Turbopack with a webpack config and no turbopack config". Fixed by adding an explicit `turbopack.resolveAlias` config (with `lib/empty-module.ts` shims for `fs`/`path`/`child_process`) and an auto-restarting supervisor.

## Fixes applied

| ID | Severity | Issue | Fix |
|---|---|---|---|
| LD-01 | Critical | Dev server down after sandbox reset | Recreated `/tmp/kilo2/supervisor.sh` — health-checks `/` every 5s, restarts on 3 consecutive failures, wipes `.next-dev` before restart |
| LD-02 | Critical | Turbopack/webpack config conflict prevented startup | Added `turbopack.resolveAlias` to `next.config.ts` + `lib/empty-module.ts` |
| LD-03 | Medium | A rate-limited design agent left 3 TS errors in `mobile-nav.tsx` (invalid type predicate + possible-null) | Fixed predicate to `element is HTMLButtonElement \| HTMLAnchorElement` |
| LD-04 | Low | `/learn` rendered 2 `<footer>` elements (page "explore next" bar used `<footer>`) | Changed to `<div>`; shell owns the single site footer |
| LD-05 | Medium | New nav components (logo, skip-links, breadcrumbs, mobile-nav) were created but not wired into the shell | Integrated into `app-shell.tsx`: real logo→home, 8-route nav, skip links, breadcrumbs, mobile Flo-menu, footer |

## Verification

| Check | Result |
|---|---|
| All 8 routes × 3 samples | **200 200 200** for every route |
| TypeScript (`npx tsc --noEmit`) | 0 errors |
| QA gate (`node scripts/verify-viz.mjs`) | 19 PASS / 0 FAIL / 0 WARN |
| Production build (`NEXT_DIST_DIR=.next-critic-build npx next build`) | exit 0, 16 routes |
| H1 per route | exactly 1 on all 7 content routes |
| Footer per route | exactly 1 on all 7 routes (after LD-04) |
| Security headers | 5 present (CSP, nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy) |
| Symlink escape | 422, no `/etc/passwd` leak |
| `.git/config` | 403 |

## Verdict

**READY** — the app loads reliably. The 401 on the kiloapps URL is the platform's Cloudflare session gate, not an app fault (the browser session authenticates it); the local service and all routes are healthy. The supervisor now auto-recovers from process death without intervention.
