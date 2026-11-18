# 04 — Security Review (Path Traversal · XSS · Command Injection · DoS · Disclosure)

**App:** `viz/` — Next.js 15.5.29 App Router, Node runtime, serves repository content from disk
**Reviewed at:** `b474113` (branch `kilo/virtual-capybara-6wy`)
**Reviewer role:** SECURITY CRITIC — read-only. **No application code was modified.**
**Review date:** 2026-11-18

**Test harness note.** The shared dev server on `:3000` was repeatedly destroyed during this review by concurrent `next build` runs in the same `.next` directory (all critics share one checkout). Live HTTP testing was therefore executed against an **isolated hard-linked copy** of the repo at `/tmp/kilo2/sandbox/app` served by `next dev -p 3100` — byte-identical sources to `viz/` (`cmp` of the relevant files identical), own `.next`, own `REPO_ROOT`. The only edit inside the sandbox copy was `tailwind.config.ts` (removed `require("tailwindcss-animate")`) to work around a Node ESM loader quirk; it has **zero** effect on any JS/API behaviour under review. Test payloads (`rea/zz-escape-*`, `xss/*`) were created **only inside the sandbox copy** — the real repo at `/workspace/app` was never written to.

---

## 0. Verdict

**Counts: 15 findings — 0 Critical · 2 High · 6 Medium · 6 Low · 1 Info.**

| Severity | Count |
|---|---:|
| Critical | 0 |
| **High** | **2** |
| Medium | 6 |
| Low | 6 |
| Info | 1 |

**Headline:** the app has **good instincts and good primitives but applies them inconsistently.**

- The classic `..` traversal family is **fully blocked** (`validateRepoPath` rejects any `..` substring, absolute paths, drive letters and NUL before touching the filesystem). Every payload in the brief (`../../etc/passwd`, `..%2F..%2F`, `%2e%2e%2f`, `....//....//`, `docs/../../../`, `%00`, `%252e%252e`, `..%5c`, overlong UTF-8 `%c0%af`, full-width dots) → **422/404, no leak**. ✅
- **But the symlink escape is real and CONFIRMED**: `/api/file` and `/api/explain` do **not** call the `assertContainedRealpath()` containment re-check that `/api/tree` does. A symlink inside the repo yields **arbitrary file read as root** (`/etc/passwd` served in cleartext, proven below). The mitigation already exists in the codebase and is simply not wired into two of the three file-serving routes — a one-line fix each.
- **No authentication, no rate limiting, no security headers** on any route, and the deployment is a **public tunnel** (`*.loca.lt`). Every byte of the repository — including `.git/config` (remote URL + committer e-mail), `.git/logs/HEAD`, `.git/refs/*`, `.git/index`, `rea/` internals, `.stremiium/` internals, `viz/`'s own source — is world-readable. The repo contains **no live secrets today** (verified), but the *structure* guarantees that any secret committed later (an `.npmrc` token, a `.env`) is instantly public.
- **XSS surface is clean by construction.** The hand-rolled markdown renderer never uses `dangerouslySetInnerHTML`; every token becomes a React text node; markdown links render as **label text only**, so `javascript:` URLs are inert; no `dangerouslySetInnerHTML` exists anywhere in the app (only `innerHTML = ""` to clear a container). File **names** containing `<>&"` are likewise rendered as escaped React text.
- **Command injection: clean.** Only `execFile` with argument arrays; **no `shell: true`**, no `exec`/`execSync`, no string interpolation into a command. `sha` and `since` are validated *before* reaching git.
- **PII: commit author e-mails do NOT reach the client.** The live route uses `%an` (name only) and the snapshot carries `"author":"kiloconnect[bot]"`. **No e-mail address appears in any `/api/commits` response or in any snapshot.** (Author *names* — `kiloconnect[bot]`, `bx2o`, `Stremiium Orchestrator` — are exposed; that is a name, not an address.)

---

## 1. Findings table

| ID | Severity | Category | Issue | Evidence (exact command + response excerpt, or file:line) | Recommended Fix |
|---|---|---|---|---|---|
| **SEC-01** | **HIGH** | Path traversal / arbitrary file read | **Symlink escape: `/api/file` and `/api/explain` never call `assertContainedRealpath()`.** `/api/tree` does (`app/api/tree/route.ts:42-43`), but the two routes that return **file contents** only call `validateRepoPath()`, which resolves *lexically* and is defeated by a symlink. `fs.statSync` / `fs.readFileSync` then follow the link. The dev server runs as **root**, so a symlink to `/root/.ssh/id_rsa`, `/etc/shadow`, `/proc/self/environ`… is served verbatim. | `cd /tmp/kilo2/sandbox/app && ln -sfn /etc/passwd rea/zz-escape-file`<br>`curl -s "http://localhost:3100/api/file?path=rea/zz-escape-file"`<br>→ `200` `{"source":"git","data":{…,"content":"root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:…"}}`<br>`curl -s "http://localhost:3100/api/file?path=rea/zz-escape-dir/passwd"` (symlink to a **directory**) → `200` + `/etc/passwd` body.<br>`curl -s -X POST …/api/explain -d '{"path":"rea/zz-escape-file"}'` → `200` `{"size":839,"lines":19,…}` (file outside repo described).<br>Source: `app/api/file/route.ts:34-48` (no `assertContainedRealpath`), `app/api/explain/route.ts:46-58` (same), vs `app/api/tree/route.ts:42` (has it), helper at `app/api/_lib.ts:134-147`. | Call the existing helper in both routes before any fs access:<br>`const r = assertContainedRealpath(abs); if (r === "escape") return fail(422,"Invalid or unsafe path.");`<br>Better: make `validateRepoPath()` itself end with `assertContainedRealpath()`, so **every** consumer inherits the check by construction (fail-closed default). Also `lstat` the target and reject `isSymbolicLink()`. |
| **SEC-02** | **HIGH** | AuthN / exposure | **Zero authentication, zero authorisation, zero rate limiting on every route**, while the app is published on a public tunnel (`https://stremiium-repo-viz.loca.lt` per the coordinator brief). `grep` for `middleware.ts` → absent; `grep -i "auth\|session\|apikey"` across `app/`,`lib/` → no auth code; `grep -i "ratelimit\|throttle"` → none. Any anonymous visitor can read the whole repository, including `.git/`, `rea/` internals, `.stremiium/` internals and the app's own source, and can drive ~11 s CPU-bound git spawns (SEC-05). | `ls viz/middleware.ts viz/app/middleware.ts` → *(no such file)*<br>`curl -s -o /dev/null -w "%{http_code}" http://localhost:3100/api/file?path=.git/config` → `200`<br>`curl -s http://localhost:3100/api/tree?path=` → `200` full root listing (`.stremiium`, `rea`, `prompts`, `docs`, `execution`, `viz`, `.kilo`, `.github`, `.git`) | Add `middleware.ts` with at least a shared-secret / IP allow-list / basic-auth gate on `/api/*` and the app shell; add per-IP rate limiting (the `/api/commits` route is the natural target). If public access is a hard requirement, publish only a **pre-rendered, sanitised snapshot** and drop the live filesystem/git routes. |
| **SEC-03** | MEDIUM | Information disclosure | **`.git/` internals are served by `/api/file`** even though the tree renders `.git` as a hollow node. Leaks: remote URL (would carry a PAT in `https://user:token@host/…` form), `[user] email`, ref names, reflog (full committer identity per commit), and the 1.8 MB index. For a **private** upstream this is a complete clone channel. | `curl -s "…/api/file?path=.git/config"` → `200` content contains `url = https://github.com/bx2o/rea.git` and `email = 240665456+kiloconnect[bot]@users.noreply.github.com` *(e-mail redacted in this report)*.<br>`curl -s "…/api/file?path=.git/logs/HEAD"` → `200`, reflog lines with `root <root@…>`.<br>`curl -s "…/api/file?path=.git/refs/heads/main"` → `200` `8eebe661…`.<br>`curl -s "…/api/file?path=.git/index"` → `200` `size:1860359, tooLarge:true`. | Deny any path whose first segment is `.git` in the file-serving routes (and in `readDirLevel`), alongside the existing `node_modules`/`.next`/`dist`/`.turbo` exclusions. |
| **SEC-04** | MEDIUM | Headers / CSP | **No security response headers at all.** `next.config.ts` defines no `headers()`; source grep finds no CSP / X-Content-Type-Options / X-Frame-Options / Referrer-Policy / HSTS. `X-Powered-By: Next.js` is exposed (version fingerprinting). Without `X-Content-Type-Options: nosniff`, a file whose content-sniffing would be `text/html` can be interpreted as HTML by the browser in some contexts; without `X-Frame-Options`/`frame-ancestors` the app is clickjackable; without CSP an injected `<script>` (or a compromised CDN bundle) executes unrestricted. | `curl -s -D - -o /dev/null "http://localhost:3100/api/file?path=README.md"`<br>→ `HTTP/1.1 200 OK` / `content-type: application/json` / `vary: rsc, next-router-state-tree…` — **no** `content-security-policy`, **no** `x-content-type-options`, **no** `x-frame-options`, **no** `referrer-policy`.<br>`curl -s -D - -o /dev/null "http://localhost:3100/"` → `X-Powered-By: Next.js`.<br>`grep -rn "Content-Security-Policy\|X-Frame-Options\|headers()" viz/` → **0 hits** (excluding `node_modules`/`.next`). | Add `headers()` to `next.config.ts`: `Content-Security-Policy` (default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; object-src 'none'), `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, and `X-Powered-By` removal. |
| **SEC-05** | MEDIUM | DoS / resource exhaustion | **Unauthenticated, unbounded, CPU-heavy git spawn per request.** `/api/commits?limit=2000` runs `git log --numstat -n 2000` over the whole history on **every** request (no caching of the git output; `revalidate = 60` only caches the HTTP response at a CDN, which the tunnel does not provide). Measured **10.8–12.7 s** per request. `/api/tree?path=` re-walks the **entire** repository (`dirSize()` recursion, `lib/repo-scan.ts:101-114`) on every request — measured **0.42–0.61 s** for the root level alone. The 2.4 MB `tree.json` snapshot is read **and fully `JSON.parse`d on every fallback request** (`app/api/_lib.ts:36-43`, no cache) — measured **~80 ms** per request for a non-existent path. `MAX_BUFFER` is 32 MB per spawn (`lib/git.ts:6`). | `for i in 1 2 3; do curl -s -o /dev/null -w "%{time_total}s " "…/api/commits?limit=2000"; done` → `12.730120s 10.847804s 10.830148s`<br>`…/api/tree?path=` → `0.589377s 0.606295s 0.424689s`<br>`…/api/tree?path=zzz-not-here` → `0.080500s 0.113340s 0.076704s` (each triggering a 2.4 MB `tree.json` parse)<br>`ls -la viz/public/snapshots/tree.json` → **2 477 347 bytes**<br>Source: `app/api/commits/route.ts:52`, `lib/git.ts:32-40`, `lib/repo-scan.ts:86` (`dirSize(...)` per directory node), `app/api/_lib.ts:36-43`. | (a) Cache the parsed snapshot in module scope (or `unstable_cache`) instead of re-reading/parsing per request; (b) cache the `git log` output with a short TTL; (c) lower `MAX_LIMIT` to e.g. 200 and enforce a per-IP concurrency limit; (d) compute directory sizes from the committed snapshot instead of a live recursive `stat` walk; (e) add rate limiting (see SEC-02). |
| **SEC-06** | MEDIUM | Information disclosure | **`node_modules/` (and `.next/`) are excluded from the *tree* but still fully readable through `/api/file`.** `EXCLUDED_DIRS` (`lib/repo-scan.ts:8`) is only applied by `readDirLevel`, not by the file route. Any dependency file, and the app's own `viz/` source, can be fetched by path. | `curl -s "…/api/file?path=viz/node_modules/next/package.json"` → `200`, 3 831 bytes of package metadata.<br>`curl -s "…/api/file?path=viz/package-lock.json"` → `200`, 258 403 bytes served in full.<br>`curl -s "…/api/file?path=rea/package-lock.json"` → `200` `size:386802, tooLarge:true, content:null` (cap works).<br>Source: `app/api/file/route.ts:34-48` (no exclusion check) vs `lib/repo-scan.ts:8,77`. | Reject paths whose first segment is in `EXCLUDED_DIRS` **plus** `.git`, and add `viz/node_modules`, `viz/.next` to that set in the file/explain routes. |
| **SEC-07** | MEDIUM | Disclosure / deployment | **The publicly exposed deployment is a `next dev` server**, not a production build. Dev mode serves unminified source chunks and source maps, enables the HMR websocket and dev-only diagnostics, and disables the production cache headers — increasing attack surface and leaking implementation detail to anonymous visitors. | `ps aux | grep next` → `node /workspace/app/viz/node_modules/.bin/next dev` (pid 2585) and `next-server (v15.5.29)` bound to `:3000`; the app is published at `https://stremiium-repo-viz.loca.lt` per the coordinator brief. | Build and serve with `next build && next start` behind a reverse proxy (TLS, rate limit, auth). Keep `next dev` for local review only. |
| **SEC-08** | LOW | XSS (stored, latent) | **Deck markdown is rendered by the reveal.js markdown plugin, which does not sanitise raw HTML.** `reveal-deck.tsx` feeds the deck text to `RevealMarkdown`; raw `<script>`/`<iframe>`/event-handler HTML inside a deck would execute in the page origin. Current decks contain no raw HTML (verified), so this is latent — but deck files live in `viz/public/decks/` and are repo content, i.e. attacker-influenced if the deck pipeline ever ingests untrusted text. | `grep -rn "<script\|<iframe\|onerror\|javascript:" viz/public/decks/*.md` → **0 hits**<br>Source: `components/decks/reveal-deck.tsx:262-281` (`section.textContent = markdown` → reveal markdown plugin; no sanitiser). | Sanitise deck markdown before handing it to reveal (e.g. strip `<script>`/event attributes, or render decks through the same React markdown path as the file viewer). Treat any future deck as untrusted input. |
| **SEC-09** | LOW | PII | **Personal (third-party) e-mail addresses are present in served repository content.** 84 distinct personal addresses (`@gmail`, `@hotmail`, `@outlook` …) appear inside tracked files that `/api/file` serves verbatim (third-party LICENSE headers, `package.json` author fields, marketing JSON). The repository owner's personal address (`bx2olabs@gmail.com`) is **only** in git history, not in the served tree. | `git grep -I -h -o -E "[A-Za-z0-9._%+-]+@(gmail|googlemail|outlook|hotmail|yahoo|icloud|protonmail)\.[A-Za-z]{2,}" -- . | sort -u | wc -l` → **84**<br>`git grep -l "bx2olabs@gmail.com"` → **0 files** (history only).<br>Server-side: `git log --all --pretty=format:'%ae' | sort -u` → 4 addresses, none reachable through the API. | Inherent to serving the repo; if the "no PII in the app" rule is binding, redact e-mail addresses in the snapshot pipeline (`scripts/snapshot.mjs`) for third-party licence/author metadata, or exclude the offending paths from the served tree. The app's own commit metadata already complies (see §4). |
| **SEC-10** | LOW | PII (minor) | **Commit author *names* are exposed unmasked** (`kiloconnect[bot]`, `bx2o`, `Stremiium Orchestrator`). Names are PII-adjacent (a person/handle), and `Stremiium Orchestrator` is an internal identity. **No e-mail is exposed** (see §4). | `curl -s "…/api/commits?limit=5"` → `{"author":"kiloconnect[bot]"}` ×5<br>`git log --pretty='%an' | sort -u` → `bx2o`, `kiloconnect[bot]`, `Stremiium Orchestrator` | If the brief requires masking of *any* author identity, hash or bucket the name (`"author":"contributor-<sha1(name)[:6]>"`) in `lib/repo-scan.ts:60` and in `scripts/snapshot.mjs`. Email masking is already satisfied. |
| **SEC-11** | LOW | Supply chain | **12 advisories in production dependency closure (11 high, 1 moderate, 0 critical).** Root causes: `picomatch` ReDoS (GHSA-fc5q-39xc-vjpf) pulled in through `tailwindcss → chokidar/anymatch/fast-glob/micromatch/readdirp/fdir/tinyglobby`, and `postcss` (unescaped `</style>` stringify + advisory file read) under `next`. All are **build-time** (glob scanning / CSS transform) and **not reachable over HTTP**, but `tailwindcss` is declared in `dependencies` rather than `devDependencies`, so it ships in the production install. | `npm audit --omit=dev --json` → `"vulnerabilities":{"info":0,"low":0,"moderate":1,"high":11,"critical":0,"total":12}`<br>Installed: `next 15.5.29`, `tailwindcss 3.4.19`, `picomatch 2.3.2`, `postcss 8.5.33`.<br>`package.json:28` → `"tailwindcss": "^3.4.17"` sits in **`dependencies`**. | Move `tailwindcss` (+ `postcss`, `autoprefixer`) to `devDependencies`; bump `next` to a patched 15.x/16.x; add `overrides` for `picomatch ≥ 2.3.2`/`chokidar ≥ 3.6.0` or upgrade to Tailwind v4. Add `npm audit --audit-level=high` to CI. |
| **SEC-12** | LOW | DoS (client) | **Unbounded recursion in the hand-rolled markdown list parser.** `collectList()` recurses once per nesting level, and the nesting level is bounded only by the indentation width of the source file. A 256 KB file with ~10 000 single-space-indented list items yields ~10 000 recursion frames → browser stack overflow / tab crash (self-DoS of the viewer only). | `components/explorer/file-viewer.tsx:88-122` (`collectList`, recursive, no depth cap; `:108` `collectList(lines, i, m[1].length)`)<br>`components/explorer/file-viewer.tsx:301` (`CodeView` splits the whole file into lines — fine)<br>No DOM/browser available in the review sandbox → **SUSPECTED** (not runtime-verified). | Cap the recursion depth (e.g. 10) and/or the number of list items; reject files whose maximum indentation exceeds a threshold. |
| **SEC-13** | LOW | Input validation | **`/api/explain` mis-attributes `lastCommit`** — it returns `commitsSnap.commits[0]` (the newest commit of the repo) regardless of the requested path, and therefore attaches an unrelated author/message to every file's "last commit" chip. | `app/api/explain/route.ts:86-95` → `lastCommit = commitsSnap.commits?.[0] ?? null;`<br>`curl -s -X POST …/api/explain -d '{"path":"rea/zz-escape-file"}'` → `"lastCommit":{"sha":"7c2b3015…","author":"kiloconnect[bot]","message":"feat(prompts): add substantive replies to all 201 Master Prompts"}` (unrelated to the path). | Use the existing `lastCommitForPath()` helper (`app/api/_lib.ts:167`) or drop the field. Also note `lastCommitForPath()` and `churnForPath()` in `_lib.ts` are currently **dead code** (no route imports them) — either wire them in or delete them. |
| **SEC-14** | LOW | Robustness | **Binary detection is a NUL-byte sniff over the first 8 KB only**, and `tooLarge` files are returned with `content: null` but full metadata — acceptable, yet the sniff means a text file whose first 8 KB contain no NUL but which contains NUL later is served as UTF-8 with replacement characters. Low impact, but worth hardening for binary assets (SVG, WASM, fonts). | `app/api/file/route.ts:13-18` (`isBinary` scans only the first `BINARY_SNIFF = 8192` bytes); `app/api/file/route.ts:54-58` | Extend the sniff window or add extension/MIME allow-lists; serve unknown binaries as `binary: true`. |
| **SEC-15** | INFO | Structural risk | **No live secret exists in the served tree today, but the architecture guarantees that any future committed secret becomes public.** Because `/api/file` has no auth and no path allow-list, a single committed `.npmrc` token, `.env`, `*.pem` or `credentials.json` is instantly readable by anyone on the internet. The only `.npmrc` present is harmless (`engine-strict=true`). | see §3 for the full scan (13 matches, 0 live secrets) | Keep the pre-commit secret scanner (`secret-scanner.sh` already in the repo) as a **CI gate**, and add a deny-list for sensitive file patterns in the file-serving routes (`.env*`, `*.pem`, `*.key`, `id_rsa*`, `credentials.json`, `*.p12`, `.npmrc`, `.netrc`) so that a future accidental commit fails closed rather than shipping. |

---

## 2. Path-traversal test matrix (live, `:3100` sandbox)

All payloads executed against the running app. **No payload returned content outside the repository.**

| # | Request | Result | Verdict |
|---|---|---|---|
| 1 | `/api/file?path=../../etc/passwd` | `422 {"error":"invalid path"}` | ✅ blocked |
| 2 | `/api/file?path=..%2F..%2Fetc%2Fpasswd` | `422 {"error":"invalid path"}` | ✅ blocked |
| 3 | `/api/tree?path=../` | `422 {"error":"Invalid or unsafe path."}` | ✅ blocked |
| 4 | `/api/tree?path=/etc` | `422 {"error":"Invalid or unsafe path."}` | ✅ blocked |
| 5 | `/api/file?path=%2e%2e%2f` | `422` | ✅ blocked |
| 6 | `/api/file?path=....//....//etc/passwd` | `422` | ✅ blocked (`..` substring rule) |
| 7 | `/api/file?path=rea/../../etc/passwd` | `422` | ✅ blocked |
| 8 | `/api/file?path=docs/../../../etc/passwd` | `422` | ✅ blocked |
| 9 | `/api/file?path=%00` | `422` | ✅ NUL rejected |
| 10 | `/api/file?path=README.md%00.txt` | `422` | ✅ NUL rejected |
| 11 | `/api/file?path=%252e%252e%252fetc%252fpasswd` | `404 {"error":"file not found"}` | ✅ double-encoding inert (decodes to a literal `%2e%2e` dir) |
| 12 | `/api/file?path=..%252f..%252fetc%252fpasswd` | `422` | ✅ blocked |
| 13 | `/api/file?path=..%5c..%5cetc%5cpasswd` | `422` | ✅ backslash on POSIX rejected (`..` rule) |
| 14 | `/api/file?path=..%c0%af..%c0%afetc%c0%afpasswd` | `422` | ✅ overlong UTF-8 rejected |
| 15 | `/api/file?path=%EF%BC%8E%EF%BC%8E/etc/passwd` (full-width dots) | `404` | ✅ inert |
| 16 | `/api/file?path=..%EF%BC%8E/etc/passwd` | `422` | ✅ blocked |
| 17 | `/api/file?path=rea//zz-escape-file` (double slash) | `200` — symlink target served | ⚠️ see SEC-01 (normalisation is inconsistent: `rel` echoed as `rea//zz-escape-file`) |
| 18 | **`/api/file?path=rea/zz-escape-file`** (symlink → `/etc/passwd`) | **`200` + `/etc/passwd` contents** | ❌ **ESCAPE — SEC-01** |
| 19 | **`/api/file?path=rea/zz-escape-dir/passwd`** (symlink → `/etc`) | **`200` + `/etc/passwd` contents** | ❌ **ESCAPE — SEC-01** |
| 20 | `/api/tree?path=rea/zz-escape-dir` | `422 {"error":"Invalid or unsafe path."}` | ✅ blocked (`assertContainedRealpath`) |
| 21 | `/api/tree?path=rea/zz-escape-file` | `422` | ✅ blocked |
| 22 | `POST /api/explain {"path":"rea/zz-escape-file"}` | `200` + size/lines of the outside file | ❌ **ESCAPE — SEC-01** |
| 23 | `/api/file?path=/etc/passwd` (absolute) | `422` | ✅ blocked |
| 24 | `/api/file?path=.git/config` | `200` + `.git/config` | ⚠️ SEC-03 |
| 25 | `/api/file?path=viz/node_modules/next/package.json` | `200` | ⚠️ SEC-06 |

**Current repo state:** the live repo contains **no symlinks** (`find /workspace/app -type l` → 0 results outside `node_modules`/`/`.git`; `git ls-files -s | awk '$1=="120000"'` → 0 entries). SEC-01 is therefore a **latent** defect today, but it becomes immediately exploitable the moment a symlink is committed (git tracks symlinks — mode `120000`).

---

## 3. Secret-file scan (served tree)

Method: `find` over the served repository (excluding `node_modules/`, `.next/`, `.git/objects`) with patterns `.env*`, `*.pem`, `*.key`, `id_rsa*`, `id_dsa*`, `id_ecdsa*`, `id_ed25519*`, `credentials.json`, `*.p12`, `*.pfx`, `.npmrc`, `.netrc`, `.htpasswd`, `token*`, `secret*`, `*credential*`; cross-checked against the committed `viz/public/snapshots/tree.json` (14 903 path entries) and `git ls-files`.

**Result: 13 matching paths — 0 contain live secrets.** All are documentation, examples or agent-prompt fixtures.

| Path (repo-relative) | Nature | Live secret? |
|---|---|---|
| `rea/.npmrc` | npm config — contains only `engine-strict=true` | No |
| `.stremiium/skills/google-analytics/.env.example` | placeholder (`GOOGLE_ANALYTICS_PROPERTY_ID=your-property-id-here`) | No |
| `.stremiium/skills/openclaw-arc-sentinel/arc-sentinel/credential-tracker.json` | template — entries named *"Example OAuth Token"*, *"Example GitHub PAT"* | No |
| `.stremiium/skills/openclaw-arc-sentinel/arc-sentinel/scripts/secret-scanner.sh` | scanner script | No |
| `.stremiium/skills/openclaw-arc-sentinel/arc-sentinel/scripts/token-watchdog.sh` | watchdog script | No |
| `.stremiium/policies/security/secrets-management.md` | policy doc | No |
| `.stremiium/agents/council-agents/specialists/SPEC-secrets-key-management.agent.md` | agent prompt | No |
| `.stremiium/agents/department-agents/c15-products-fan-tokens/**` (4 files) | agent prompts (name contains "tokens") | No |
| `.stremiium/skills/davila7-ui-design-system/ui-design-system/scripts/design_token_generator.py` | design-token script (name contains "token") | No |
| `.stremiium/skills/notion-workspace-skills/security-hardening-secrets.md` | doc | No |
| `.stremiium/skills/opnet-development/**` (3 files) | blockchain token docs | No |
| `docs/architecture/platform-design/security/iam-and-secrets.md` | doc | No |
| `docs/program/councils/councils/c13-web3-finance/tokenisation-and-programmable-money.md` | doc | No |
| `docs/archive-second-versions/extracted-snapshots/stremiium-agent-os.full-backup/.stremiium/…` (8 mirrored copies of the above) | archived snapshot | No |

**Secret-value scan (contents, not names):** `git grep -E "BEGIN (RSA |EC |OPENSSH |PGP )?PRIVATE KEY|AKIA[0-9A-Z]{16}|ghp_[A-Za-z0-9]{20,}|sk-[A-Za-z0-9]{32,}|xox[baprs]-…"` over `viz/` → **0 hits**. Over all reachable commits → only **documentation examples** of what a secret looks like (e.g. `✗ "-----BEGIN RSA PRIVATE KEY-----"` inside a security-scanner reference doc) — **no live key material**.

**Conclusion:** no secret material is currently exposed. The exposure risk is **structural** (SEC-15): with no auth and no path deny-list, the *next* committed secret is public. Note also `rea/.npmrc` **is** present in the served tree snapshot (1 match in `tree.json`), and `.git/config` (SEC-03) is the classic location for a credential-bearing remote URL.

---

## 4. PII exposure

**Do commit author e-mails reach the client? — NO.**

| Surface | What is emitted | Contains e-mail? |
|---|---|---|
| `GET /api/commits` (live git path) | `git log --pretty=format:%x1f%H%x1f%cI%x1f%an%x1f%s%x1e` → `author` = **`%an` = author *name* only** (`lib/git.ts:35`). No `%ae`/`%ce` in the format string. | **No** |
| `GET /api/commits` (snapshot fallback) | `public/snapshots/commits.json` → `"author":"kiloconnect[bot]"` for every entry | **No** |
| `GET /api/diff/[sha]` | numstat rows only (paths + counts) | **No** |
| `GET /api/explain` | `lastCommit.author` from the snapshot (name only) | **No** |
| `GET /api/tree`, `/api/graph`, `/api/stats` | file names / node labels | **No** |
| `GET /api/file?path=.git/config` | `[user] email = 240665456+kiloconnect[bot]@users.noreply.github.com` *(redacted here)* | **Yes — one bot address**, reachable only because `.git` is not excluded (SEC-03) |
| `GET /api/file?path=.git/logs/HEAD` | reflog lines with the container committer identity `root <root@…>` | **Yes** (SEC-03) |

Verification commands:

```
curl -s "…/api/commits?limit=2000" | grep -oE "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}" | sort -u
# → (no output)

grep -oE "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}" viz/public/snapshots/*.json | sort -u
# → (no output)
```

**Verdict:** the VIZ-001/VIZ-025 requirement *"mask e-mails / no PII in the app"* is **satisfied for commit metadata** — the e-mail was never introduced into the data model, so there is nothing to mask; the exposed author *names* (`bx2o`, `kiloconnect[bot]`, `Stremiium Orchestrator`) are pseudonyms/bot identities, with the one exception of `bx2o` (a GitHub handle). Residual PII risk is **(a)** `.git/config` + `.git/logs/HEAD` (SEC-03) and **(b)** the 84 third-party personal e-mail addresses inside served file content (SEC-09). The repository owner's personal address (`bx2olabs@gmail.com`) exists **only in git history** and is not reachable through any route.

---

## 5. XSS assessment

| Vector | Result | Evidence |
|---|---|---|
| `dangerouslySetInnerHTML` anywhere in `viz/` | **Not present.** The only `innerHTML` use is `slidesWrap.innerHTML = ""` (clearing a container) in `components/decks/reveal-deck.tsx:262`. | `grep -rn "dangerouslySetInnerHTML\|innerHTML\|outerHTML" --include=*.tsx --include=*.ts viz/` → 1 hit (the clearing statement) |
| File **content** → markdown renderer | **Safe by construction.** `parseMarkdown()` builds React elements only; every text token is a JSX child (React escapes it). Code fences, tables, headings, lists, blockquotes all render as text/`<pre>` children. | `components/explorer/file-viewer.tsx:42-81` (`renderInline`), `:153-289` (`parseMarkdown`) |
| `javascript:` links in content | **Inert.** Markdown links are rendered as the **label text only** — the URL is discarded (`tok.startsWith("[")` → `<span>{tok.slice(1, tok.indexOf("]"))}</span>`, `file-viewer.tsx:71-73`). No `href` is ever produced from file content. | `file-viewer.tsx:71-73` |
| Crafted payload file | The API returns the raw payload as a JSON string (correctly JSON-escaped); the renderer escapes it again. Payload contained `<script>alert("xss-script")</script>`, `<img src=x onerror="alert(1)">`, `[click](javascript:alert(2))`, `<a href="javascript:alert(3)">`, `<!-- html comment -->`, `<iframe src="javascript:alert(5)">`, `**bold <b onmouseover=alert(4)>**`. | `curl -s "…/api/file?path=xss/evil%3Cscript%3E.md"` → `200` `…"content":"# Heading <script>alert(\"xss-script\")</script>\n\n<img src=x onerror=\"alert(1)\">…"` (JSON-escaped; the file lives in the sandbox only) |
| HTML comments | Rendered as literal text inside a `<p>` — not stripped, not executed. | `file-viewer.tsx:262-285` (paragraph branch) |
| File **names** in the tree | `{node.name}` is a React text child → escaped. `title={node.path}` is an escaped attribute. | `components/explorer/file-tree.tsx:492` (`{node.name}`), `:496` (`title={node.zone}`) |
| File **names** in the diff viewer | `{file.path}` React text child; the link uses `encodeURIComponent`. | `components/timeline/diff-viewer.tsx:147` (`{file.path}`), `:132` (`encodeURIComponent(dir)`) |
| Graph labels / node details | `{node.label}`, `{node.id}` React text children; deep links use `encodeURIComponent`. | `components/graph/node-details.tsx:150,155` (`{node.label}`), `:63-65` (`encodeURIComponent`) |
| Attacker-controlled `href`/`src` | Only `encodeURIComponent`-encoded relative paths; no user-controlled absolute URL, no `javascript:` construction, no `location.href` assignment, no `location.assign/replace`, no server-side redirect. | `grep -rn "location.assign\|location.replace\|location.href *=\|redirect(" viz/app viz/components viz/lib` → **0 hits**; `grep -rn "fetch(\`\|fetch('" viz/app viz/components` → all same-origin static paths |
| SSRF | **None.** Every `fetch()` targets a same-origin static path (`/decks/…`, `/snapshots/…`, `/api/…`); no route accepts a URL. | `grep -rn "fetch(" viz/app viz/components` → 8 hits, all literal same-origin paths |
| Deck markdown (reveal.js) | **Latent** — the reveal markdown plugin does not sanitise raw HTML. Current decks are clean. | SEC-08 |

*Limitation: no headless browser (puppeteer/playwright/jsdom) is available in this sandbox, so the DOM-level proof relies on (a) the exhaustive absence of `dangerouslySetInnerHTML`/`innerHTML` writes and (b) React's escape-by-default text-node semantics. A browser-based confirmation (navigate to `/explorer?path=xss/evil%3Cscript%3E.md` and assert `document.querySelector('script[data-xss]') === null` and that no `onerror` attribute exists) is recommended as a follow-up acceptance test.*

---

## 6. Command-injection assessment — clean

```
grep -rn "execSync\|child_process\|spawnSync\|spawn(\|exec(" --include=*.ts --include=*.tsx --include=*.mjs viz/app viz/lib viz/scripts viz/components
→ viz/lib/git.ts:1        import { execFile } from "child_process";
  viz/lib/git.ts:24       exec("git", ["rev-parse", "--is-inside-work-tree"])
  viz/lib/git.ts:38       exec("git", args)                                  // args array
  viz/lib/git.ts:44       exec("git", ["diff", "--numstat", "--no-renames", `${sha}^!`])
  viz/lib/git.ts:50       exec("git", ["ls-files"])
  viz/lib/git.ts:56       exec("git", ["status", "--porcelain"])
  viz/lib/git.ts:63       exec("git", ["rev-parse", "HEAD"])
  viz/scripts/snapshot.mjs:11,33  execFile(cmd, args, {cwd: ROOT, timeout: 30000, maxBuffer: 64MB})

grep -rn "shell\s*:" viz/app viz/lib viz/scripts viz/components   → 0 hits
grep -rn "`git " viz/app viz/lib viz/scripts                       → 0 hits (only comments)
```

- **No `shell: true` anywhere** → no shell metacharacter interpretation; arguments are passed as an argv array.
- **`sha`** is validated **before** it reaches git: `validateSha()` (`lib/git.ts:82-84`, `/^[0-9a-f]{7,40}$/i`) is called at `app/api/diff/[sha]/route.ts:28` before `gitDiffNumstat(sha)`. The only interpolation (`${sha}^!`) therefore carries hex-only input.
- **`since`** is validated before use: `ISO_SINCE` regex + `Date.parse` (`app/api/commits/route.ts:25-39`), so it cannot start with `-` and be read as a git option.
- **`limit`** is coerced with `Number()`/`Number.isInteger()` and clamped to ≤ 2000 (`app/api/commits/route.ts:41-49`), then `String(Math.min(limit, 2000))`.
- **`path`** never reaches git at all — paths are used for fs reads only.
- `execFile` is bounded by `timeout: 15_000` and `maxBuffer: 32 MB` (`lib/git.ts:5-6`), so a pathological spawn cannot hang the server indefinitely.

**Verdict: no command-injection vector found.**

---

## 7. DoS / resource-exhaustion detail

| Check | Result |
|---|---|
| `/api/file` 256 KB cap | ✅ **Enforced** — `MAX_BYTES = 256 * 1024` (`app/api/file/route.ts:10`), `tooLarge` → `content: null`; `rea/package-lock.json` (386 802 B) → `{"size":386802,"tooLarge":true,"content":null}`. `viz/package-lock.json` (258 403 B, just under the cap) **is** served in full. |
| Binary sniffing | 8 KB NUL-byte sniff (`file/route.ts:11-18`) — a NUL-free prefix is treated as text (SEC-14). |
| Snapshot fully parsed per request | ✅ **Yes** — `loadSnapshot()` does `fsp.readFile` + `JSON.parse` with **no caching** (`app/api/_lib.ts:36-43`). `tree.json` = **2 477 347 B**; every fallback `/api/tree` request re-reads and re-parses it (~80 ms). `/api/graph` (9 KB) and `/api/stats` (3 KB) are re-read per request too. |
| Unbounded loops | `parseCommits()` iterates the whole `git log` output; `collectList()` recurses without a depth cap (SEC-12); `dirSize()` recurses to depth 8 but stats the **entire** repo on every root-level `/api/tree` request (SEC-05). |
| Unbounded subprocess | ✅ **Yes** — `/api/commits?limit=2000` spawns `git log --numstat -n 2000` per request (**10.8–12.7 s** measured), 32 MB stdout buffer. No cache, no rate limit, no auth. |
| Caching | `revalidate` is declared on the routes (`file:300`, `tree:60`, `commits:60`, `graph:3600`, `stats:300`) — effective only behind a CDN/proxy that honours `s-maxage`; the live tunnel does not. |

---

## 8. Supply chain

| Check | Result |
|---|---|
| `npm audit --omit=dev` | 12 advisories — 11 high, 1 moderate, 0 critical (SEC-11). All build-time chains (`picomatch` ReDoS via Tailwind; `postcss` via `next`). No advisory is HTTP-reachable. |
| Deps vs installed | `package.json` ranges resolve to `next 15.5.29`, `tailwindcss 3.4.19`, `picomatch 2.3.2`, `postcss 8.5.33`. `package-lock.json` is committed → reproducible installs. |
| `.gitignore` | `viz/.gitignore` covers `.next/`, `out/`, `*.tsbuildinfo`, `node_modules/`, `.env*.local`, `*.log`; root `.gitignore` covers `node_modules/`, `rea/node_modules/`, `rea/dist/`. |
| Build artefacts committed? | ✅ No — `git ls-files \| grep -E "node_modules\|\.next/\|dist/"` → **0 hits**; `git ls-files viz` → 84 files, all source/snapshots. |
| Secrets in the diff | ✅ `git diff main..HEAD` → no `api_key|secret|token|password|PRIVATE KEY|AKIA…|ghp_…|sk-…` matches; whole-history scan found only documentation *examples* of secret patterns. |
| Lockfile integrity | `npm ci` reproduces the tree cleanly (no `npm install` drift). |
| Client bundle config | `next.config.ts:10-15` stubs `fs`/`path`/`child_process` for the client bundle — correct; server-only git/fs code cannot leak into the browser bundle. |

---

## 9. CONFIRMED vs SUSPECTED

**CONFIRMED (reproduced live or proven by source + reproduction):**
SEC-01 (symlink escape via `/api/file` and `/api/explain` — arbitrary file read as root) · SEC-02 (no auth / no rate limit) · SEC-03 (`.git` internals served) · SEC-04 (no security headers, `X-Powered-By` exposed) · SEC-05 (11 s per-request git spawn; 2.4 MB snapshot re-parsed per request; full-repo stat walk per root tree request) · SEC-06 (`node_modules` readable via `/api/file` though hidden in the tree) · SEC-07 (dev server publicly exposed) · SEC-09 (84 personal e-mails in served file content) · SEC-10 (author names unmasked) · SEC-11 (12 npm advisories) · SEC-13 (wrong `lastCommit` attribution) · SEC-14 (weak binary sniff) · SEC-15 (no live secret today; structural exposure) · all path-traversal blocking in §2 rows 1-16 and 20-25 · the XSS-by-construction analysis in §5 · the clean command-injection result in §6.

**SUSPECTED (static reasoning only — no runtime proof available in this sandbox):**
SEC-08 (reveal.js markdown plugin would execute raw HTML in a deck — no such HTML exists today; no browser available to execute a deck) · SEC-12 (client-side stack overflow from deeply nested markdown lists — no browser available to reproduce) · DOM-level confirmation of the React escaping in §5 (no headless browser installed; the claim rests on the absence of `dangerouslySetInnerHTML` and React's text-node escaping).

---

## 10. Remediation order

1. **Wire `assertContainedRealpath()` into `/api/file` and `/api/explain`** (and, better, into `validateRepoPath()` itself so every consumer inherits it). — *SEC-01*
2. **Put authentication in front of the app** and rate-limit `/api/commits`. — *SEC-02*
3. **Exclude `.git`, `node_modules`, `.next` and secret-shaped filenames** from the file-serving routes. — *SEC-03, SEC-06, SEC-15*
4. **Add the security headers** in `next.config.ts` and remove `X-Powered-By`. — *SEC-04*
5. **Cache the git output and the parsed snapshots**; lower `MAX_LIMIT`. — *SEC-05*
6. **Serve a production build** behind a TLS-terminating proxy. — *SEC-07*
7. Move `tailwindcss`/`postcss` to `devDependencies`, bump `next`, add `npm audit` to CI. — *SEC-11*
8. Sanitise deck markdown; cap markdown list recursion depth. — *SEC-08, SEC-12*
9. Optional PII hardening: mask author names, redact third-party e-mails from snapshots, fix `lastCommit` attribution. — *SEC-09, SEC-10, SEC-13*
