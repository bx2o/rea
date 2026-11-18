# 06 — Performance Audit (VIZ)

**Auditor:** performance critic (read-only; no application code was modified)
**Date:** 2026-11-18
**App:** `/workspace/app/viz` — Next.js 15.5.29 (App Router), React 19.3.1
**Audit baseline:** commit `b474113` ("feat(viz): build interactive repo visualization learning
environment"). All production measurements were taken against an isolated clone of that commit.

> **Addendum (post-audit):** a concurrent remediation agent edited the API routes in the working
> tree at 16:01–16:02 while this audit was running, adding memoisation (`cachedCommits`,
> `cachedDirLevel`) and a hard `limit` ceiling to `/api/commits`. **Those changes directly address
> PERF-01 and PERF-02** — the agent's own note ("one 2000-commit spawn cost 10.8–12.7 s")
> corroborates the 5.9–9.3 s measured here at `limit=500`. This report describes the audited
> commit `b474113`; the numbers should be re-verified against the remediated tree, but the
> *diagnosis* (unbounded `git log --numstat` on the request path; recursive `dirSize()` stat walk)
> is confirmed by both measurements and the remediation.

---

## 0. Method & environment

The app was **not** serving on `http://localhost:3000` when the audit started (connection refused);
a dev server was subsequently started by another agent on that port. To get production-accurate
numbers I built and served an **isolated clone** of the same commit so that a running `next dev`
could not share the `.next` directory:

```
git clone --local --no-hardlinks /workspace/app /tmp/kilo2/perfrepo
ln -s /workspace/app/viz/node_modules /tmp/kilo2/perfrepo/viz/node_modules
cd /tmp/kilo2/perfrepo/viz && ./node_modules/.bin/next build     # EXIT=0
cd /tmp/kilo2/perfrepo/viz && ./node_modules/.bin/next start -p 3300
```

The clone is a real git repo with the same history, so `REPO_ROOT` resolves correctly and the
live-git code paths are exercised exactly as in production.

> ⚠️ `curl 8.14.1` in this image does **not** support `%{time_namelong}` (added in curl 8.16).
> `curl -w "%{time_namelong}"` fails with `curl: unknown --write-out variable: 'time_namelong'`.
> All timings below use `%{time_total}` (float seconds, same measurement) via
> `curl -s -o /dev/null -w "%{time_total} %{size_download}\n"`.

Both dev mode (`:3000`) and production mode (`:3300`) were measured; production is authoritative.

---

## 1. Route timings (production build, `next start -p 3300`)

3 sequential requests per endpoint; `min / median / max` seconds; `bytes` = response body size.

| # | Route | min (s) | median (s) | max (s) | bytes | Verdict |
|---|-------|---------|------------|---------|-------|---------|
| 1 | `/` | 0.0042 | 0.0044 | 0.0073 | 29,709 | ok (server) |
| 2 | `/explorer` | 0.0029 | 0.0031 | 0.0057 | 34,834 | ok (server) |
| 3 | `/commits` | 0.0031 | 0.0037 | 0.0050 | 33,393 | ok (server) |
| 4 | `/globe` | 0.0070 | 0.0142 | 0.0233 | 33,176 | ok |
| 5 | `/learn` | 0.0031 | 0.0045 | 0.0059 | 30,963 | ok |
| 6 | `/councils` | 0.0030 | 0.0031 | 0.0037 | 30,465 | ok |
| 7 | `/explorer/view3d` | 0.0035 | 0.0036 | 0.0041 | 33,060 | ok (server) |
| 8 | `/api/stats` | 0.0045 | 0.0047 | 0.0054 | 3,250 | ok — ISR `x-nextjs-cache: HIT` |
| 9 | **`/api/commits`** | **5.9179** | **6.3333** | **9.3411** | 7,796 | **CRITICAL — worst route in the app** |
| 10 | **`/api/tree`** | **0.2306** | **0.3009** | **0.4525** | 972 | **HIGH — blocks the event loop** |
| 11 | `/api/file?path=README.md` | 0.0036 | 0.0038 | 0.0060 | 6,269 | ok (but does dead work — PERF-08) |
| 12 | `/api/graph` | 0.0030 | 0.0030 | 0.0039 | 9,040 | ok — ISR `x-nextjs-cache: HIT` |

### 1.1 Dev-mode comparison (`next dev` on `:3000`, same repo)

| Route | min (s) | median (s) | max (s) | bytes |
|-------|---------|------------|---------|-------|
| `/` | 0.1084 | 0.1388 | 0.2022 | 50,242 |
| `/explorer` | 0.2153 | 0.2908 | 2.0001 | 79,035 |
| `/commits` | 0.2053 | 0.3274 | 2.3680 | 63,718 |
| `/globe` | 0.1481 | 0.1481 | 1.2412 | 54,813 |
| `/learn` | 0.1049 | 0.1347 | 1.7655 | 59,924 |
| `/councils` | 0.1202 | 0.1314 | 1.2210 | 54,292 |
| `/explorer/view3d` | 0.3562 | 0.8149 | **15.8459** | 83,696 |
| `/api/stats` | 0.8153 | 3.5073 | 4.7767 | 3,250 |
| `/api/commits` | 4.3618 | 5.5865 | 9.1133 | 7,796 |
| `/api/tree` | 0.0145 | 0.0195 | 0.6696 | 974 |
| `/api/file?path=README.md` | 0.0279 | 0.0321 | 0.6384 | 7,760 |
| `/api/graph` | 0.0152 | 0.0305 | 0.4666 | 9,040 |

Dev HTML is ~1.8× larger than prod HTML (dev injects source maps / HMR payload), and dev API
latency is dominated by **on-demand route compilation**, not by the handlers. `/api/stats` in dev
(0.8–4.8 s) is *not* evidence of a slow JSON parse — it is Next compiling the route on first hit.
Do not read dev numbers as production behaviour.

### 1.2 HTML vs RSC payload

| Route | HTML bytes | inline RSC flight bytes | RSC-only response bytes |
|-------|-----------|--------------------------|--------------------------|
| `/` | 29,709 | 8,062 | 6,937 |
| `/explorer` | 34,834 | 12,673 | 10,883 |
| `/commits` | 33,393 | 8,738 | 7,532 |
| `/globe` | 33,176 | 8,603 | 7,407 |
| `/learn` | 30,963 | 11,326 | 9,767 |
| `/councils` | 30,465 | 10,214 | 8,813 |
| `/explorer/view3d` | 33,060 | 13,129 | 11,273 |

The RSC flight payload is inlined in the HTML (`self.__next_f.push`), so the HTML byte count
already includes it. **The RSC payload is small (6–13 KB) — this is not a problem area.**

---

## 2. Findings

| ID | Severity | Area | Measurement | Impact | Evidence (command + output) | Recommended Fix |
|----|----------|------|-------------|--------|----------------------------|-----------------|
| **PERF-01** | **Critical** | `GET /api/commits` — synchronous `git log --numstat` spawn on every request | **5.92 / 6.33 / 9.34 s** per request; raw git = **6.90 s**, **3,133,678 B** stdout | The `/` dashboard, the `/commits` page and every `?path=` filter all block on a 3 MB git spawn. The route is `ƒ` (Dynamic) in the build output, so `export const revalidate = 60` **never applies** — there is no server-side cache. N concurrent viewers = N git processes. | `curl -s -o /dev/null -w "%{time_total}" "http://localhost:3300/api/commits"` → `5.917908 / 6.333321 / 9.341090`<br>`time git log --pretty=format:"%x1f%H%x1f%cI%x1f%an%x1f%s%x1e" --numstat --no-renames -n 500 > /tmp/kilo2/gitlog.txt` → `real 0m6.895s`, `3133678 /tmp/kilo2/gitlog.txt`<br>`curl -sI .../api/commits` → no `x-nextjs-cache` header<br>build output → `ƒ /api/commits` | Cache the parsed commits in a module-level `Map` keyed by `(since, limit, HEAD sha)` with a TTL; or serve `public/snapshots/commits.json` and refresh in the background; or key an ISR cache on `git rev-parse HEAD`. Do **not** shell out to git on the request path. |
| **PERF-02** | **Critical** | `GET /api/tree` — recursive `dirSize()` full-repo stat walk, **synchronous** | **0.2306 / 0.3009 / 0.4525 s**; **8 concurrent requests = 2.76 s wall** (≈13× serialisation) | `readDirLevel()` calls `dirSize()` for every directory in the level, which recursively `statSync()`s the entire subtree (depth ≤ 8). Because it is synchronous it **blocks the Node event loop**, so all concurrent requests serialise behind it. `/explorer` fires 4 parallel `/api/tree` calls on first paint (root, `docs`, `prompts`, `execution`) → the explorer never gets a fast first paint. | `lib/repo-scan.ts:86` `size: hollow ? 0 : dirSize(path.join(abs, e.name), 0)`; `lib/repo-scan.ts:101-108` recursive `dirSize`<br>node repro of the same walk → `dirSize walk for root level: 462.3 ms for 10 dirs` (cold)<br>`time (for i in $(seq 1 8); do curl -s -o /dev/null ".../api/tree" & done; wait)` → `real 0m2.758s`<br>per-path: `path='' 0.217s · path='docs' 0.056s · path='prompts' 0.020s · path='rea' 0.050s` | Remove the recursive size computation from the request path. Serve `size: 0` (or a precomputed size map) from the level listing, or memoise directory sizes in a module-level cache with an mtime-based invalidation. Compute sizes once in `scripts/snapshot.mjs` and read them from the snapshot. |
| **PERF-03** | **High** | Initial JS on `/` — `recharts` chunk | **First Load JS 239 kB gzip**; `chunks/125-*.js` = **435,365 B raw / 116,818 B gzip** = 45 % of the route's initial JS | The dashboard ships 116.8 KB gzip of charting library for 4 charts. `/` is the only route over the 200 kB First Load JS threshold. | `next build` output → `┌ ○ / 125 kB  239 kB`<br>`gzip -c .next/static/chunks/125-d1f49772f988634d.js \| wc -c` → `116818`<br>grep → chunk contains `recharts` | Move the chart block into a `next/dynamic(..., { ssr:false, loading: () => <ChartSkeleton/> })` component so the library loads after first paint; or replace recharts with hand-rolled SVG/CSS charts (the app already hand-rolls markdown and force simulation elsewhere — consistent with the codebase's own "no heavy dependency" rule). |
| **PERF-04** | **High** | `/explorer/view3d` — full `tree.json` downloaded to draw 600 nodes | `public/snapshots/tree.json` = **2,477,347 B raw / 221,492 B gzip / 141,502 B brotli**; `JSON.parse` = **40.6 ms** main thread | The 3D scene fetches the whole 14,903-node tree (221 KB gzip) but `buildScene()` only walks the **top 3 levels** and caps at 600 nodes → >95 % of the payload is discarded. A first-time visitor pays 221 KB + 40 ms of main-thread JSON parsing before the first frame. | `components/three/file-system-3d.tsx:534` `const response = await fetch("/snapshots/tree.json");`<br>`components/three/file-system-3d.tsx:87` `const MAX_DIRS_PER_ZONE = 20;` + `maxNodes = 600` (`:482`)<br>node: `read 7.3 ms parse 40.6 ms` for tree.json<br>gzip sizes: `tree.json raw= 2477347 gzip= 221492 brotli= 141502` | Pre-bake a scene snapshot (`scripts/snapshot.mjs` already emits `tree.json` — add `scene-600.json`, ≈50–80 KB) and fetch that; or add `GET /api/scene?depth=3&max=600` that returns only the ~600 nodes the scene actually uses. |
| **PERF-05** | **High** | 3D runtime — continuous render loop at 2× DPR | `<Canvas frameloop={reducedMotion ? "demand" : "always"} dpr={[1, 2]}>` (`file-system-3d.tsx:690-691`) | With reduced motion off, the scene renders every frame forever at up to 2× device pixel ratio (≈4× the fragment work of dpr 1) even when the user is idle. `invalidate()` inside `InstancedScene` is dead code under `frameloop="always"`. | `grep -n "frameloop\|dpr=" components/three/file-system-3d.tsx` → `690: frameloop={reducedMotion ? "demand" : "always"}` / `691: dpr={[1, 2]}` | Use `frameloop="demand"` and call `invalidate()` from the drei `OrbitControls` `onChange` (and on hover/select), so the scene only draws when something moves. Cap `dpr` at `[1, 1.5]`. |
| **PERF-06** | **Medium** | Explorer virtualisation — no row memoisation, O(n) scan per render | Window math is **correct** (34 rows mounted for a 3,000-node zone ≈ 340 DOM nodes vs 30,000 if broken), but `React.memo` is **not used anywhere in the codebase** and `lastNodePath` is recomputed by a full `for` loop over all flattened rows on every render | Every scroll frame re-renders all ~34 visible rows (≈340 elements, new inline `onClick`/`onKeyDown`/`onFocus` closures each time → React cannot bail out) **and** scans all 3,000 flattened rows. At 60 fps that is ~20 k element reconciliations/s + ~180 k row visits/s. | `components/explorer/file-tree.tsx:26-28` `ROW_HEIGHT = 32` / `OVERSCAN = 5`<br>`:219-221` `start = max(0, floor(scrollTop/32) - 5)` / `end = min(total, ceil((scrollTop+viewportH)/32) + 5)` / `visible = rows.slice(start, end)` → simulated: `total=3000 → {start:0,end:34,count:34}` ⇒ ~340 DOM nodes<br>`:327-329` `firstNodePath = rows.find(...)` + `for (const r of rows) ... lastNodePath = r.path` — **not memoised**, executed in the render body<br>`grep -rn "React.memo" components/ app/` → **no matches** | Extract a `TreeRowItem` component and wrap it in `React.memo` (props: node, depth, isOpen, isSelected, matchesZone, isActive, onToggle, onSelect). Memoise `firstNodePath` / `lastNodePath` with `useMemo`. Keep the `useMemo`'d `rows` array (already correct — it does **not** re-flatten on scroll). |
| **PERF-07** | **Medium** | `GET /api/diff/[sha]` — N+1 fan-out from the commits path filter | HEAD: **0.046 s / 9,804 B**; `7c2b301`: 0.048 s / 85,241 B; `d6d8c1a`: 0.065 s / 217,606 B; **`18d156b`: 1.138 s / 1,162,742 B** | `/commits?path=…` issues one `/api/diff` per commit (`mapWithLimit(commits, 8, …)`, 33 commits here) — each spawning `git diff --numstat`. One commit alone returns 1.16 MB; a filtered view can transfer several MB and take seconds. | `curl -s -o /dev/null -w "%{time_total} %{size_download}" ".../api/diff/<sha>"` → `0.045794 9804` … `1.138411 1162742`<br>`app/commits/page.tsx` → `mapWithLimit(commits, FILTER_CONCURRENCY /*8*/, (commit) => fetchCommitDiff(commit.sha))` | Add a `?path=` parameter to `/api/commits` and filter server-side with `git log -- <path>` (git does the path filter natively and cheaply). Alternatively store per-sha diff summaries in the snapshot so the client never fans out. |
| **PERF-08** | **Medium** | `GET /api/file` — dead per-request work | 0.0036–0.006 s, but reads + `JSON.parse`s `public/snapshots/commits.json` (7,674 B) on **every** request, then searches a `__files` property that does not exist | `lastCommitFor()` is guaranteed to return `null` — verified: the snapshot's commit objects have keys `sha, date, author, message, filesChanged, insertions, deletions` and **no `__files`**. The route then hardcodes `lastCommit: null` anyway, so the work is entirely wasted and the code path is misleading. | `app/api/file/route.ts:33-43` `snap.commits?.find((c) => (c as any).__files?.includes?.(p)) ?? null`<br>node: `commits.json keys of first commit: [ 'sha','date','author','message','filesChanged','insertions','deletions' ]` / `has __files? false` | Delete the `lastCommitFor()` helper and the `commits.json` read, or (better) build a real `path → sha` index at snapshot time and look it up. |
| **PERF-09** | **Medium** | Build / dev-server coexistence | `next build` inside `/workspace/app/viz` while a `next dev` was serving the same directory failed **3×**: `Cannot find module './611.js'`, then `Invariant: no direct app page entry found for /_not-found`. The same commit builds cleanly in an isolated clone (`EXIT=0`). | Any developer or CI job that builds while the dev server is up corrupts `.next` and produces a non-shippable build. This is an operational landmine that will look like "the app doesn't build" to the next agent. | 3 failed in-place builds vs `cd /tmp/kilo2/perfrepo/viz && ./node_modules/.bin/next build` → `✓ Generating static pages (16/16)` … `EXIT=0`<br>symptom files: `.next/server/pages/` empty, `.next/server/chunks/` absent, `.next/server/app-paths-manifest.json` truncated to 3–7 of 19 routes | Give dev and prod separate output dirs, e.g. `distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next"` in `next.config.ts`, and document that a build must not run against a live dev server. |
| **PERF-10** | **Low** | Snapshot JSON embedded in the client bundle | `app/globe/page.tsx:15` `import statsJson from "../../public/snapshots/stats.json";` in a `"use client"` component → stats.json is inlined into the `/globe` chunk as a literal JSON string (visible as `JSON.parse('{"meta":{"schemaVersion":1,…')` in `app/globe/page-*.js`) | Data is duplicated between the bundle and the runtime file, so the two can silently drift. Small today (3,353 B) but it is an anti-pattern that becomes a bundle-bloat bug the moment the file grows. **`tree.json` (2.48 MB) is NOT imported by any client component** — verified; it is only fetched at runtime. | `grep -n "import statsJson" app/globe/page.tsx` → `15:import statsJson from "../../public/snapshots/stats.json";`<br>`grep -rl "mapSamples" .next/static/` → `chunks/app/globe/page-cbf2ebacd5bb84a8.js` (contains the inlined JSON + cobe)<br>`grep -rn "snapshots/tree.json" app/ components/` → only `fetch(...)` calls | Fetch `/snapshots/stats.json` at runtime like every other route (or move the snapshot outside the bundler-visible tree and import it server-side only). |
| **PERF-11** | **Low** | Fonts / assets | No `next/font` anywhere; `tailwind.config.ts` names `Inter`, `Space Grotesk`, `JetBrains Mono` but there is **no `@font-face` and no webfont request** → 0 font bytes are downloaded | Good for performance, but the intended typography never renders: `font-heading` silently falls back to `system-ui`. Also no images and no `@next/image` usage anywhere — the asset budget is effectively just the CSS. | `grep -rn "next/font" app/ components/ lib/` → only a comment in `app/layout.tsx:13`<br>`find public -type f -printf "%s %p\n"` → largest are JSON/MD snapshots; **no images/fonts**<br>CSS payload: `/_next/static/css/f1fc866f429de3cf.css` = 37,889 B raw / 8,273 B gzip | Either self-host the fonts with `next/font` (≈30–60 KB woff2, `display: "swap"`, preloaded) or remove the named families from `tailwind.config.ts` so the design matches what actually ships. |
| **PERF-12** | **Info** | API cache semantics — what is *not* a problem | `/api/stats` → `x-nextjs-cache: HIT`, `cache-control: s-maxage=300, stale-while-revalidate=31535700`; `/api/graph` → `x-nextjs-cache: HIT`, `s-maxage=3600`. Build output: `○ /api/stats`, `○ /api/graph`. | **stats.json / graph.json are NOT re-read and re-parsed per request in production** — they are prerendered at build time and served from the ISR cache (stale-while-revalidate). In `next dev` there is no route cache, so every request *does* re-read the file. | `curl -sI .../api/stats` → `x-nextjs-cache: HIT` / `cache-control: s-maxage=300, stale-while-revalidate=31535700`<br>build output → `┌ ○ /api/stats  152 B  104 kB  5m  1y`<br>`node: read 7.3 ms parse 40.6 ms` for tree.json (the *fallback* path in `/api/tree`, only reached on fs failure) | No change required. Do not "optimise" stats.json/graph.json further — the remaining cost is framework overhead, and the real problem is the two **dynamic** routes (`/api/tree`, `/api/commits`) that have no cache at all. |
| **PERF-13** | **Info** | Dead `revalidate` exports on dynamic routes | `app/api/tree/route.ts:32` `export const revalidate = 60;` and `app/api/commits/route.ts:21` `export const revalidate = 60;` — but both handlers read `request.url`, so Next marks them **Dynamic** (`ƒ` in the build output) and the export is ignored. The `Cache-Control: public, s-maxage=60` header is still emitted although nothing in front of the app honours it. | The `revalidate` exports read as if the routes are cached when they are not — a correctness-of-intent trap that hides PERF-01/PERF-02. | build output → `├ ƒ /api/commits` and `├ ƒ /api/tree` (vs `○ /api/stats`)<br>`curl -sI .../api/tree` → `cache-control: public, s-maxage=60, stale-while-revalidate=60` and **no** `x-nextjs-cache` | Either remove the misleading `revalidate` exports, or restructure the handlers so the response is cacheable (e.g. resolve `path` into the cache key, which is not possible with the current `request.url` usage — so an in-process cache is the practical answer). |

---

## 3. Bundle analysis

### 3.1 `next build` output — First Load JS per route

```
Route (app)                                 Size  First Load JS  Revalidate  Expire
┌ ○ /                                     125 kB         239 kB
├ ○ /_not-found                            997 B         105 kB
├ ƒ /api/commits                           152 B         104 kB
├ ƒ /api/diff/[sha]                        152 B         104 kB
├ ƒ /api/explain                           152 B         104 kB
├ ƒ /api/file                              152 B         104 kB
├ ○ /api/graph                             152 B         104 kB          1h      1y
├ ○ /api/stats                             152 B         104 kB          5m      1y
├ ƒ /api/tree                              152 B         104 kB
├ ○ /commits                             55.1 kB         169 kB
├ ○ /councils                            9.79 kB         120 kB
├ ○ /explorer                           14.2 kB         129 kB
├ ○ /explorer/view3d                     5.15 kB         119 kB
├ ○ /globe                               11.5 kB         126 kB
└ ○ /learn                               5.26 kB         116 kB
+ First Load JS shared by all             104 kB
  ├ chunks/876-48092b581c98a857.js       46.8 kB
  ├ chunks/c6307ad7-365c3e0d411ddd46.js  54.2 kB
  └ other shared chunks (total)           2.7 kB
```

**Routes over 200 kB First Load JS: exactly one — `/` at 239 kB.**
`/commits` is second at 169 kB. Every other route is ≤ 129 kB.

### 3.2 Is the dashboard shipped to other routes? — **No.**

Route → chunk mapping from `.next/app-build-manifest.json`:

| Route | Route-specific chunks | Heavy library |
|-------|----------------------|---------------|
| `/page` (dashboard) | `125-d1f49772f988634d.js` (435,365 B / **116,818 gz**) | **recharts** |
| `/explorer/page` | `750-649759932bf21aed.js` (9,130 B) | — |
| `/commits/page` | `4b83c884-*.js` (51,980 B) + `562-1899d1bb0b2a997b.js` (70,664 B) | **gsap + ScrollTrigger** (≈47.7 KB gz) |
| `/globe/page` | `app/globe/page-cbf2ebacd5bb84a8.js` (27,681 B) | **cobe** + inlined `stats.json` |
| `/councils/page` | `app/councils/page-931095817acac31a.js` (30,612 B) | — (hand-rolled force sim) |
| `/learn/page` | `app/learn/page-e9271dcfcd274bca.js` | reveal.js → **lazy** |
| `/explorer/view3d/page` | `app/explorer/view3d/page-0d40862d6d940b82.js` | three → **lazy** |

**Client bundle splitting is architecturally sound.** `recharts` is *only* on `/`, `three` only on
`/explorer/view3d`, `cobe` only on `/globe`, `gsap` only on `/commits`, `reveal.js` only on
`/learn`. The root layout (`app/layout.tsx`) is a **server** component; `AppShell` is the only
client boundary and it pulls in only `lucide-react` icons (`923-*.js`, 9,567 B).

The problem is therefore **not** cross-route leakage — it is the absolute size of the heaviest
route (`/`, PERF-03) and the fact that `gsap` is *eagerly* bundled into `/commits` for what is
only a scroll-reveal decoration.

### 3.3 Async (lazy) chunks — `r.u` map from `webpack-*.js`

| chunk id | file | raw | gzip | loaded by |
|----------|------|-----|------|-----------|
| 147 | `fd647eff.a7780b2f6aaa2186.js` | 165,777 | 51,922 | view3d (three) |
| 203 | `ab441b8e4b2902a6.js` | 16,269 | 5,735 | view3d |
| 390 | `0e57135503539fbf.js` | 30,965 | 10,491 | view3d |
| 536 | `55ec1622.e71909fdc26810ea.js` | 333,505 | 78,916 | view3d (three) |
| 880 | `ec7e2ddcf184118d.js` | 362,843 | 95,647 | view3d (r3f/drei) |
| 249 | `9edc5b89b93e78b1.js` | 110,875 | 28,675 | learn |
| 263 | `4692349034a95cde.js` | 42,135 | 13,645 | learn (reveal) |
| 618 / 772 | reveal.css + theme css | — | — | learn |

**`/explorer/view3d` lazily loads 909,359 B raw / 242,711 B gzip of three.js + r3f + drei** — on
top of 179.7 KB gzip of initial JS and 221 KB gzip of `tree.json`. Total for that route: **≈643 KB
gzip** and ~900 KB of extra JS parsing.

### 3.4 Waterfall — what the browser actually requests on `/`

```
# HTML for /: 29700 bytes (text/html; charset=utf-8)
# inline RSC flight payload: 8062 bytes in 6 script tags
# html minus flight: 21638 bytes
# 12 sub-resources, 1020748 bytes raw total

SIZE(bytes)  TIME(ms)  ENC   TYPE                 URL
    435365      54.3 gzip  application/javascript /_next/static/chunks/125-d1f49772f988634d.js   <- recharts
    174596      48.0 gzip  application/javascript /_next/static/chunks/876-48092b581c98a857.js
    173022      71.7 gzip  application/javascript /_next/static/chunks/c6307ad7-365c3e0d411ddd46.js
    112594      28.2 gzip  application/javascript /_next/static/chunks/polyfills-42372ed130431b0a.js  (nomodule)
     37889       7.5 gzip  text/css             /_next/static/css/f1fc866f429de3cf.css
     26299      23.3 gzip  application/javascript /_next/static/chunks/app/page-898c3360e9413ea8.js
     20163      25.2 gzip  application/javascript /_next/static/chunks/121-ea27bb8cfa254cf4.js
     19007      13.9 gzip  application/javascript /_next/static/chunks/app/layout-b1ec575d03cdfa85.js
      9567      18.8 gzip  application/javascript /_next/static/chunks/923-ab1929264cc1a884.js      <- lucide
      6567       6.5 gzip  application/javascript /_next/static/chunks/app/error-aed4731eeb8572c9.js
      5111      22.6 gzip  application/javascript /_next/static/chunks/webpack-8dfbcfa072046e37.js
       568      11.1 -     application/javascript /_next/static/chunks/main-app-645bff975ed6de87.js
```

> The `polyfills` chunk carries `noModule=""` → **modern browsers never download it**
> (39.6 KB gzip saved). Real modern-browser initial payload for `/` = **257,406 B gzip**
> (297,033 − 39,627) of JS + CSS, plus the 29.7 KB HTML document.

Per-route initial payload (JS + CSS, gzip, modern browser):

| Route | HTML | JS+CSS raw | JS+CSS gzip | First Load JS (Next metric) |
|-------|------|-----------|-------------|---------------------------|
| `/` | 29,700 | 1,020,748 | 297,033 (257,406 excl. polyfills) | **239 kB** |
| `/commits` | 33,386 | 709,179 | 228,076 | 169 kB |
| `/explorer` | 34,827 | 606,860 | 188,776 | 129 kB |
| `/globe` | 33,162 | 588,166 | 184,233 | 126 kB |
| `/councils` | 30,454 | 589,696 | 181,892 | 120 kB |
| `/explorer/view3d` | 33,051 | 578,801 | 179,677 (+242,711 lazy) | 119 kB |
| `/learn` | 30,948 | 573,038 | 177,360 (+42,320 lazy) | 116 kB |

Shared baseline across all routes: **24 unique files, 1,306,486 B raw / 402,046 B gzip**
(of which the Next/React runtime — `876` + `c6307ad7` — is 101 KB gzip, unavoidable).

---

## 4. Snapshot JSON sizes (on disk)

| File | Bytes | gzip | brotli | Notes |
|------|-------|------|--------|-------|
| `public/snapshots/tree.json` | **2,477,347** (2.36 MB) | 221,492 | 141,502 | 14,903 nodes (11,677 files + 3,226 dirs), depth 12 |
| `public/snapshots/graph.json` | 9,011 | 1,311 | 1,042 | councils hierarchy |
| `public/snapshots/commits.json` | 7,674 | 2,644 | 2,202 | 32 commits, **no per-file lists** |
| `public/snapshots/stats.json` | 3,353 | 1,188 | 998 | also inlined into the /globe client chunk |
| `public/snapshots/tours.json` | 1,364 | — | — | unused by the UI |

**Largest 5 files in the whole app (excluding `node_modules` / `.next`):**

| # | File | Bytes |
|---|------|-------|
| 1 | `public/snapshots/tree.json` | 2,477,347 |
| 2 | `package-lock.json` | 258,403 |
| 3 | `app/page.tsx` | 36,378 |
| 4 | `components/graph/councils-graph.tsx` | 32,883 |
| 5 | `scripts/verify-viz.mjs` | 31,584 |

(`components/three/file-system-3d.tsx` 29,796 and `components/explorer/file-viewer.tsx` 20,479 follow.)

**Bundle-embedding check:** `tree.json` is **not** imported by any client component — only
`fetch("/snapshots/tree.json")` at runtime (`components/three/file-system-3d.tsx:534`,
`app/explorer/page.tsx` `ensureSnapshot()`). `stats.json` **is** imported statically by the
`/globe` client page (PERF-10). `graph.json` and `commits.json` are fetched at runtime only.

---

## 5. Explorer virtualisation — verification

**The windowing math is correct.**

```ts
const ROW_HEIGHT = 32;   // file-tree.tsx:26
const OVERSCAN = 5;      // file-tree.tsx:28
const start = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN);              // :219
const end   = Math.min(total, Math.ceil((scrollTop + viewportH) / ROW_HEIGHT) + OVERSCAN); // :220
const visible = rows.slice(start, end);                                               // :221
```

* Rows are absolutely positioned at `top = absoluteIdx * 32` with `height: 32`, and the inner
  element is `height: total * ROW_HEIGHT` → scroll geometry matches the index math exactly.
* `end * 32 ≥ scrollTop + viewportH` always holds → the last visible row is fully covered.
* Overscan is applied symmetrically (5 above, 5 below).

**Mounted-row counts (simulated with the component's own formula):**

| Total rows in zone | start | end | rows mounted | est. DOM nodes |
|--------------------|-------|-----|--------------|----------------|
| 10 | 0 | 10 | 10 | ~100 |
| 100 | 0 | 34 | 34 | ~340 |
| **3,000** | 0 | 34 | **34** | **~340** |
| 14,903 (whole repo) | 0 | 34 | 34 | ~340 |

Estimated DOM nodes per row: row `div` + chevron `span` + chevron `svg` + chevron `path` +
icon `svg` + icon `path` + name `span` + zone-dot `span` + size `span` ≈ 10.
**A 3,000-node zone mounts ~340 DOM nodes, not ~30,000 — the virtualization itself works.**

**But the re-render behaviour is not optimised:**

* `onScroll` (`:201-208`) is rAF-throttled, then `setScrollTop` → the whole `FileTree`
  re-renders. `rows` is correctly memoised on `[childrenByDir, expandedDirs]` so the flatten does
  **not** re-run — good.
* However, the row markup is **inlined in the render body** (`:391-497`) with fresh closures
  (`onClick`, `onKeyDown`, `onFocus`) per row per render, and **no `React.memo` exists anywhere in
  the codebase** (`grep -rn "React.memo" components/ app/` → 0 matches). React therefore
  re-renders all ~34 visible rows (≈340 elements) on **every scroll frame**.
* `firstNodePath` / `lastNodePath` (`:327-329`) are recomputed by a `find` + a full `for` loop
  over all flattened rows **in the render body, un-memoised** → O(n) per scroll frame
  (3,000 iterations for a 3,000-node zone).
* `React.useLayoutEffect` (`:264`) depends on `[activePath, rows, start, end, focusRequest]` —
  `start`/`end` change on every scroll, so the effect (which does `rows.findIndex` / `rows.some`)
  re-runs on every scroll frame as well.

---

## 6. 3D scene performance (`components/three/file-system-3d.tsx`)

| Aspect | Status | Evidence |
|--------|--------|----------|
| Node count cap | ✅ `maxNodes = 600` (`:482`), `MAX_DIRS_PER_ZONE = 20` (`:87`) → ≤120 dirs + ≤480 files | `file-system-3d.tsx:87,482` |
| Instanced vs individual meshes | ✅ **2 `instancedMesh` objects** — one for file spheres, one for dir octahedra | `:344-398` |
| Material reuse | ✅ **one** `MeshStandardMaterial` shared by both meshes (`useMemo`, `:309-311`) | `:309` |
| Geometry reuse | ✅ `SphereGeometry(1,12,12)` and `OctahedronGeometry(1,0)` created once via `useMemo` (`:307-308`) | `:307-308` |
| Dispose on unmount | ✅ `useEffect` cleanup disposes both geometries + the material (`:317-323`); the PointsScene disposes its BufferGeometry (`:452`) | `:317-323` |
| Frameloop | ⚠️ `frameloop={reducedMotion ? "demand" : "always"}` (`:690`) → continuous rendering when motion is allowed; the `invalidate()` call at `:325` is dead under `"always"` | `:690` |
| DPR | ⚠️ `dpr={[1, 2]}` (`:691`) → up to 4× the fragment work of dpr 1 | `:691` |
| Data source | ⚠️ runtime `fetch("/snapshots/tree.json")` = 221 KB gzip / 2.48 MB raw for 600 nodes (PERF-04) | `:534` |
| Pointer handling | ⚠️ `onPointerMove` on the instanced mesh calls `setHover` on every mouse-move → a React state update + R3F re-render per pointer event | `:355-358` |

**Estimated draw calls: ~2** (one per instanced mesh) + 1 ambient light + 2 directional lights
(0 draw calls, 2 extra lighting terms in the fragment shader) + `OrbitControls` (0). Geometry cost
is trivial: 480 spheres × 288 tris + 120 octahedra × 8 tris ≈ 139 k triangles in **2 draw calls**.
**The rendering strategy is excellent** — the problems are the data transfer (PERF-04) and the
always-on frameloop (PERF-05), not the scene graph.

---

## 7. Image / asset weight

* **No images anywhere.** `find public -type f` returns only JSON/MD snapshots and deck markdown.
* **No `next/image` usage** — nothing to optimise.
* **No `next/font`** — `app/layout.tsx:13` explicitly documents "offline-safe system stacks …
  no next/font network fetch". Zero webfont bytes are downloaded.
* **CSS**: one stylesheet, `f1fc866f429de3cf.css` = **37,889 B raw / 8,273 B gzip**, loaded on
  every route. Reasonable.
* ⚠️ The Tailwind font stacks name `Inter`, `Space Grotesk` and `JetBrains Mono`, but no
  `@font-face` / `next/font` import exists → those families are never loaded and the browser
  silently falls back to `system-ui`. Cheap, but the design intent is not met (PERF-11).

---

## 8. The 8 highest-impact optimisations (ordered)

1. **Stop shelling out to `git` inside `/api/commits`** (PERF-01). 6.3 s median → target < 50 ms.
   Cache the parsed `CommitRecord[]` in a module-level map keyed by `(since, limit, HEAD sha)`
   with a short TTL, or serve the committed `commits.json` snapshot and refresh it in the
   background. This single fix removes the worst route in the app *and* unblocks `/` and
   `/commits`, which both depend on it.
2. **Remove the recursive `dirSize()` walk from `/api/tree`** (PERF-02). 0.30 s median and it
   blocks the event loop (8 concurrent = 2.76 s). Precompute directory sizes in
   `scripts/snapshot.mjs` and read them from the snapshot, or memoise them with mtime
   invalidation. This is what makes the explorer's first paint slow.
3. **Split the dashboard's recharts bundle** (PERF-03). `/` is the only route over 200 kB First
   Load JS (239 kB), of which 116.8 KB gzip is recharts. Load the chart block with
   `next/dynamic({ ssr:false })` behind a skeleton, or replace recharts with lightweight SVG.
4. **Serve a pre-baked 3D scene instead of the full `tree.json`** (PERF-04). 221 KB gzip →
   ~60 KB, and no 40 ms main-thread `JSON.parse`.
5. **Switch the 3D canvas to `frameloop="demand"`** and cap `dpr` at `[1, 1.5]` (PERF-05).
   Stops burning GPU on a static scene.
6. **Memoise the explorer row component** (`React.memo`) and the `firstNodePath`/`lastNodePath`
   scans (PERF-06). Removes ~20 k element reconciliations/s and 180 k row visits/s during
   scrolling.
7. **Add server-side path filtering to the commit history** (PERF-07). `git log -- <path>` does
   the filtering natively; it removes the N+1 `/api/diff` fan-out whose worst case is a 1.16 MB
   response and 1.14 s.
8. **Give dev and prod separate build output directories** (PERF-09) and stop importing
   `stats.json` into the `/globe` client bundle (PERF-10). Prevents the "the build is broken"
   trap for the next agent and removes a data-drift hazard.

*Runner-up (cheap):* delete the dead `lastCommitFor()` read of `commits.json` in `/api/file`
(PERF-08) and remove the misleading `revalidate` exports on the two dynamic routes (PERF-13).

---

## 9. Reproduction commands

```bash
# 1. build + serve an isolated copy (do NOT build in a dir with a live `next dev`)
git clone --local --no-hardlinks /workspace/app /tmp/kilo2/perfrepo
ln -s /workspace/app/viz/node_modules /tmp/kilo2/perfrepo/viz/node_modules
cd /tmp/kilo2/perfrepo/viz && ./node_modules/.bin/next build
./node_modules/.bin/next start -p 3300

# 2. route timings (note: this curl has no %time_namelong — use %time_total)
for r in / /explorer /commits /globe /learn /councils /explorer/view3d \
         /api/stats /api/commits /api/tree "/api/file?path=README.md" /api/graph; do
  for i in 1 2 3; do
    curl -s -o /dev/null -w "%{time_total} %{size_download}\n" "http://localhost:3300$r"
  done
done

# 3. the two hot API routes, isolated
bash /tmp/kilo2/seq.sh /api/stats /api/tree /api/graph     # 5 sequential each
time git log --pretty=format:"%x1f%H%x1f%cI%x1f%an%x1f%s%x1e" --numstat --no-renames -n 500 > /tmp/kilo2/gitlog.txt
time (for i in $(seq 1 8); do curl -s -o /dev/null "http://localhost:3300/api/tree" & done; wait)

# 4. bundle analysis
cat /tmp/kilo2/perfrepo/viz/.next/app-build-manifest.json
ls -S /tmp/kilo2/perfrepo/viz/.next/static/chunks/*.js | head -20 | \
  xargs -I{} sh -c 'printf "%9s raw %8s gzip  %s\n" {} $(stat -c%s {}) $(gzip -c {} | wc -c) {}'

# 5. waterfall + per-route payload
node /tmp/kilo2/waterfall.mjs     # BASE=http://localhost:3300
node /tmp/kilo2/payload.mjs       # BASE=http://localhost:3300
```
