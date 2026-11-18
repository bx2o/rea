# Master Prompt — VIZ-021 API-Integration-Engineer (Repo Visualization Data Layer)

**Act as the assigned Stremiium viz-program agent or subagent for task VIZ-021.**

**Task ID:** VIZ-021 · **Program:** Repo Visualization & Learning Environment (plan §§3–4, 6)
**Execution model:** auto.
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode by Sparkling Curious (SC-MASTER-001).
**Workspace:** all artifacts stay inside this repo — this brief lives at `prompts/viz/c11-dev-engineering/api-integration-engineer/prompt.md`; build artifacts land in `viz/`.
**Output format:** one separate unconsolidated artifact — no consolidation with other agents' prompts.
**Depth:** expand API design, security, error-handling, caching, and performance depth regardless of model specificity.
**Agent ID:** C11-API-INTEGRATION-ENGINEER
**Council:** C11 Dev-Engineering
**Gate:** C11 Dev-Engineering + C12 Cybersecurity-Intel

---

## 1. Summary

- This master prompt instructs C11-API-INTEGRATION-ENGINEER to design the read-only data API for the viz app: five Next.js 15 App Router route handlers — `GET /api/tree?path=`, `GET /api/commits?since=`, `GET /api/diff/[sha]`, `GET /api/stats`, and `GET /api/file?path=` — that wrap local git and filesystem scans of this repository (`bx2o/rea` workspace: docs/, prompts/, execution/, .stremiium/, rea/).
- Live data comes from the local git binary and an fs walk (plan §6). The GitHub API is explicitly NOT used.
- Offline resilience: when the git binary is absent, the repo is exported without `.git/`, or a git invocation fails, routes transparently serve committed JSON snapshots from `viz/public/snapshots/*.json` and mark responses `source: "snapshot"`.
- Security posture: every user-controlled parameter (path, sha, since) is validated at the boundary before it reaches `child_process` or `fs`. Path traversal is the primary threat and MUST be blocked before any filesystem resolution (§15).
- Consumers: VIZ-020 frontend (virtualized explorer tree, file viewer), VIZ-015 dashboard charts, VIZ-031 knowledge graph, VIZ-024 QA data-shape tests.

## 2. Objective

- Specify API routes that expose the full repository (files, history, diffs, stats) to the visualization front end with deterministic shapes matching the VIZ-022 data contracts (`FileNode`, `CommitRecord`, `DiffSummary`, `RepoStats` in `viz/lib/types.ts`).
- Wrap exactly the git commands defined in plan §6 (`git log --date=iso --pretty=format:…`, `git diff --numstat <sha>`, `git ls-files`, `git status --porcelain`) behind typed exec wrappers in `viz/lib/git.ts`.
- Guarantee the app works with no git binary and no network by auto-detecting git availability and falling back to `public/snapshots/*.json`.
- Keep every route read-only, validated, cached, and error-predictable so Code Mode can implement without renegotiating the contract.
- Do NOT design the front end (VIZ-020/013), the contracts themselves (VIZ-022), the build pipeline (VIZ-023), or the learning content (VIZ-030/031).

## 3. Assumptions

- The repository is present locally with full git history; `git` is on PATH in the build environment (verified at runtime, never assumed blindly).
- Next.js 15 App Router route handlers (`viz/app/api/**/route.ts`) run on the Node.js runtime (`export const runtime = 'nodejs'`) because `child_process` is required; Edge runtime is out of scope.
- Snapshot files `tree.json`, `commits.json`, `stats.json` exist in `viz/public/snapshots/` per VIZ-022's `scripts/snapshot.mjs` and are committed.
- The explorer excludes `.git/`, `rea/node_modules/`, `node_modules/`, `.next/`, and `dist/` by a shared `EXCLUDED_DIRS` constant reused from `lib/repo-scan.ts`.
- All routes are same-origin and GET-only; no auth, no CORS surface, no mutation semantics.

## 4. Questions

- Should `/api/diff/[sha]` in snapshot mode read per-sha `snapshots/diffs/<sha>.json`, or return 404 with `source: "snapshot"` when the snapshot index lacks that commit?
- What freshness windows are acceptable per route (proposal in §12: tree 60s, commits 60s, diff 3600s, stats 300s, file 300s)?
- Should `/api/commits` batch per-commit churn (`filesChanged`, `insertions`, `deletions`) via a single `git log --numstat` pass, or defer churn to per-sha `/api/diff` calls for a lighter commits payload?
- Should `/api/file` return a truncated first chunk for oversized text files, or metadata only with `truncated: true` and no content?
- What zone should root-level files (e.g., `README.md`, `.gitignore`) carry — `zone: "root"` or a `zone: "meta"` bucket?

## 5. Concerns

- Parsing `git log` output on spaces/newlines corrupts author names and messages; field/record separators (`%x1f`, `%x1e`) must be used instead.
- N+1 subprocess spawns (one `git diff` per commit) will melt the commits view; churn must be batched.
- `revalidate` caching conflicts with a static export build (VIZ-023 fallback path); the fallback must be documented per mode, not silently dropped.
- Stale snapshots can mislead the user; every response must carry `source` ("live" | "snapshot") so the UI can badge freshness.
- Symlinks inside the repo could escape the root after a naive `resolve` check; a realpath containment re-check is required (§15).
- A pathological or huge git invocation must not hang the route: exec timeout and `maxBuffer` caps are mandatory.

## 6. Deliverables

- This `prompt.md` brief (the VIZ-021 design task prompt, Ask Mode, unconsolidated).
- For later Code Mode: `viz/lib/git.ts` (exec wrappers), `viz/lib/repo-scan.ts` integration hooks, and five route handlers `viz/app/api/{tree,commits,diff/[sha],stats,file}/route.ts` with shared `viz/lib/api-utils.ts` (validation, error envelope, source selection).
- Route spec with request/response schemas for each endpoint (§11), fallback policy (§12), and validation rules (§15) precise enough for VIZ-024 to write data-shape tests against.
- Cross-references (not duplication) to VIZ-022-owned contracts: `FileNode`, `CommitRecord`, `DiffSummary`, `RepoStats`, `scripts/snapshot.mjs`.

## 7. Research Inputs

- Repo docs: `docs/` structure (engineering/, program/), `.stremiium/config/council-department-mapping.json` (zone/council taxonomy), plan §6 data layer and §8 failure modes (git binary absent → snapshot-only mode).
- `.stremiium/skills/`: `api-design-principles`, `api-security-best-practices`, `nodejs-backend-patterns`, `backend-patterns`, `davila7-nextjs-best-practices`, `davila7-senior-fullstack`, `git-advanced-workflows`, `typescript-advanced-types`, `security-review`, `code-quality`, `frontend-code-review` (consumer-fit review).
- `.stremiium/workflows/inter-agent-workflows/escalation-protocols.md` (escalation SLA) and `the-artisan-workflows` / agent-workflows process guidance.
- Mark any externally sourced technique as [FACT] (verified against local repo/skills) vs [EST]/[INFER]; mark unknowns [UNKNOWN] rather than inventing behavior.

## 8. Tech Stack References

- Next.js 15 App Router route handlers (TypeScript, `export const revalidate`, `export const runtime = 'nodejs'`), Tailwind/shadcn consumer layer.
- Node `child_process.execFile` (promise-wrapped, `{ timeout: 10_000, maxBuffer: 16 * 1024 * 1024 }`); never `exec`, never `shell: true`, never string interpolation of user input into command arguments.
- Zero-dep validation helpers (`decodeURIComponent` + posix normalize + resolve containment) — optional `zod` only if the scaffold already depends on it.
- Contracts from VIZ-022 (`viz/lib/types.ts`): `FileNode { path, name, type, size, zone, children? }`; `CommitRecord { sha, date, author, message, filesChanged, insertions, deletions }`; `DiffSummary` (numstat per file); `RepoStats { totals, byZone, byType, churnTop }`.
- Snapshot assets: `viz/public/snapshots/{tree,commits,stats}.json` generated by `scripts/snapshot.mjs` (VIZ-022).

## 9. Missing Dependencies

- VIZ-022 data contracts and snapshot generator (`lib/types.ts`, `scripts/snapshot.mjs`, `public/snapshots/*.json`) — block contract drift; escalate overlaps to Sparkling Curious instead of redefining shapes.
- VIZ-020 scaffold must exist before routes are consumed (route handlers can be built ahead of the UI).
- VIZ-023 static-export decision determines whether route handlers ship at all or snapshots are served statically.
- Git binary present in the deployment environment (absence is supported, not required).

## 10. Step-by-Step Implementation Plan

- 1. Read plan §6 and this brief; confirm VIZ-022 contract shapes before writing any wrapper.
- 2. Implement `viz/lib/git.ts` exec wrappers: `logCommits({ since?, limit?, path? })`, `diffNumstat(sha)`, `lsFiles()`, `statusPorcelain()` — all via `execFile('git', args)` with separator-safe parsing.
- 3. Implement `viz/lib/api-utils.ts`: `sanitizePath()` (traversal-proof, §15), `validateSha()`, `validateSince()`, `errorEnvelope()`, `pickSource()` (live-vs-snapshot detection).
- 4. Build routes in dependency order: `/api/stats` (aggregations), `/api/tree` (scan), `/api/commits` (history), `/api/diff/[sha]` (numstat), `/api/file` (content+meta).
- 5. Add caching exports (`revalidate`) per §12 and the `source` field to every response.
- 6. Wire snapshot fallback paths for all five routes; verify behavior with git hidden (rename `.git` in a scratch clone only — never mutate the real repo).
- 7. Hand off to VIZ-024 for data-shape tests and to Sparkling Curious for synthesis (§16).

## 11. API Routes Spec — Commands/Configs/Schemas Where Applicable

- No executable commands run in Ask Mode; the following is the specification Code Mode implements.

### GET /api/tree?path=
- Query `path` (optional; defaults to repo root). Response: `{ source: "live"|"snapshot", path, children: FileNode[] }` — exactly one directory level (lazy levels feed the virtualized tree). Excludes `EXCLUDED_DIRS`; `zone` derived from the top-level segment (docs | prompts | execution | .stremiium | rea | root).

### GET /api/commits?since=
- Query `since` (optional ISO 8601), `limit` (optional, numeric, default 100, max 500). Response: `{ source, commits: CommitRecord[] }`.
- Wrapper: `git log --date=iso --pretty=format:'%H%x1f%ad%x1f%an%x1f%s' --since=<since> -n <limit>` — parse on `%x1f` fields / `%x1e` records, never on spaces.
- Churn fields (`filesChanged`, `insertions`, `deletions`) batched from a single `git log --numstat --format=%H` pass (no N+1 spawns).

### GET /api/diff/[sha]
- Param `sha`, validated `/^[0-9a-f]{7,40}$/` before use. Response: `{ source, sha, date, message, files: [{ path, insertions, deletions, binary }] }` (DiffSummary shape, VIZ-022).
- Wrapper: `git diff --numstat <sha>^ <sha>`; root/merge fallback `git show --first-parent --numstat --format= <sha>`. `-\t-\t<path>` numstat rows mark binary → `binary: true`.
- Snapshot fallback: per-sha `public/snapshots/diffs/<sha>.json` if present, else 404 with `source: "snapshot"`.

### GET /api/stats
- No params. Response: `{ source, stats: RepoStats }` — `{ totals, byZone, byType, churnTop }` aggregated from the repo scan plus the numstat history pass.

### GET /api/file?path=
- Response: `{ source, path, name, type: "file", size, zone, ext, truncated, content: string|null, lastCommit: { sha, date, author, message } | null }`.
- Content rules: UTF-8 text extensions only; size cap 256 KiB (larger → `truncated: true`, content omitted or first chunk); binary/large → `content: null` with `reason: "binary"|"too-large"`.
- `lastCommit` via `git log -n 1 --date=iso --pretty=format:… -- <validatedPath>` (path passed as an execFile argument array element, never interpolated).

### Git commands wrapped (exhaustive list)
- `git log --date=iso --pretty=format:…` (+ `--since`, `-n`, `-- <path>` variants)
- `git diff --numstat <sha>^ <sha>` / `git show --numstat` fallback
- `git ls-files` (tracked inventory baseline for the scan)
- `git status --porcelain` (working-tree dirtiness → snapshot-staleness signal)
- No other git subcommands; no `git add/commit/push` anywhere in the API layer.

## 12. Error Handling, Caching & Snapshot Fallback

- Error envelope on every failure: `{ error: { code, message } }` — `400 INVALID_PATH|INVALID_PARAM`, `404 NOT_FOUND`, `422 PATH_TRAVERSAL|INVALID_SHA`, `500 GIT_FAILED`. Never leak stack traces, absolute server paths, or stderr internals; messages are operator-safe one-liners.
- Git absent / exec failure / ENOENT `.git` → automatic snapshot fallback with `source: "snapshot"` (not 503); only a missing snapshot file too is a 404/500. `git status --porcelain` output feeds a `stale` hint when snapshots predate working-tree changes.
- Caching (Node runtime route handlers): `export const revalidate` — tree 60s, commits 60s, diff 3600s (history is immutable), stats 300s, file 300s; plus `Cache-Control: public, s-maxage=<same>, stale-while-revalidate` headers.
- Static-export mode (VIZ-023): route handlers do not execute; document that `public/snapshots/*.json` is served statically and the client reads snapshots directly — the same JSON shapes, so no consumer changes.
- All exec calls: `{ timeout: 10_000, maxBuffer: 16 * 1024 * 1024 }`; timeouts surface as `500 GIT_FAILED` and trigger fallback.

## 13. Acceptance Criteria

- All five routes exist under `viz/app/api/`, are GET-only, Node runtime, and return the exact §11 shapes validated against VIZ-022 types.
- With git available: responses are live (`source: "live"`) and match real repo data (spot-check ≥3 paths, ≥3 shas).
- With git unavailable: every route still returns correct data from `public/snapshots/` with `source: "snapshot"`; no route 503s or crashes.
- Path traversal attempts (`../`, encoded `%2e%2e%2f`, absolute paths, null bytes, symlink escapes) return `422 PATH_TRAVERSAL` and never read outside the repo root.
- Invalid `sha` (`/^[0-9a-f]{7,40}$/` mismatch, shell metacharacters) returns `422 INVALID_SHA`; no user input ever reaches a shell string.
- `revalidate` values exported on all routes; error envelope present on 400/404/422/500 paths.
- Commit parsing survives authors/messages containing spaces, quotes, and newlines (separator-based parsing proven by test).

## 14. Validation Checklist

- [ ] 16 required sections present, header includes Agent ID, Council, Gate
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — specification language, no execution performed
- [ ] All five routes specified with query params, response schemas, status codes
- [ ] Only the four plan §6 git commands wrapped; no mutation subcommands
- [ ] Snapshot fallback specified for every route incl. diff-by-sha behavior
- [ ] Caching (`revalidate` + Cache-Control) specified per route and per build mode
- [ ] Path traversal prevention specified (decode → segment check → resolve containment → realpath re-check)
- [ ] No placeholders/TBD; open items phrased as §4 questions instead
- [ ] Evidence grades ([FACT]/[EST]/[UNKNOWN]/[INFER]) applied to externally sourced techniques
- [ ] Security considerations and C12 gate named
- [ ] Rollback plan and escalation path specified
- [ ] No private keys, credentials, or PII beyond public git author metadata
- [ ] Artifact path inside the repo prompts/viz/ structure, unconsolidated

## 15. Security Considerations & Compliance Gate

- `sanitizePath(raw)`: `decodeURIComponent` first; reject null bytes, `..` segments, absolute paths, and Windows drive patterns (`/^[A-Za-z]:/`); posix-normalize; `path.resolve(REPO_ROOT, candidate)`; assert `resolved === REPO_ROOT || resolved.startsWith(REPO_ROOT + path.sep)`; then `fs.realpath` and re-assert containment to defeat symlink escapes. Fail closed with `422 PATH_TRAVERSAL`.
- `sha` validated by regex before any use; all git invocations use `execFile('git', [args…])` argument arrays — zero shell interpolation surface.
- `since`/`limit` parsed as ISO date / clamped integer; limits capped (max 500).
- API is strictly read-only: no POST/PUT/DELETE handlers, no write to disk, no env mutations.
- Secrets policy: repo content only; commit author names/emails are already-public git metadata rendered read-only (POPIA-minimal: no enrichment, collection, or new processing of personal data).
- Compliance gate: C11 Dev-Engineering + C12 Cybersecurity-Intel — C12 reviews traversal/symlink/exec hardening before Code Mode sign-off.

## 16. Rollback Plan & Escalation Path

- Rollback: routes are additive and read-only — disable a route by deleting its `route.ts` (no data migrations); git wrappers revert to snapshot-only mode by forcing `pickSource()` to snapshot; any caching regression is reverted per-route via `revalidate` exports.
- Escalation: C11-API-INTEGRATION-ENGINEER → C11 Dev-Engineering Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board. Contract drift with VIZ-022 or build-mode conflict with VIZ-023 escalates to SC for arbitration (per VIZ-001 delegation registry); critical security events skip to SC + C01 + C12 immediately (1h SLA per inter-agent escalation protocols).
- Handoff: this artifact goes to Sparkling Curious for synthesis with other C11 outputs, conflict de-duplication, and gating before Plan/Code Mode execution; VIZ-024 receives the §11/§13 spec as the basis for data-shape tests.
