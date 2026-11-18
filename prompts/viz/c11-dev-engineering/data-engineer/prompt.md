# Master Prompt — VIZ-022 C11-DATA-ENGINEER (Data-Engineer — Repo Viz Data Layer)

**Act as the assigned Stremiium viz subagent executing task VIZ-022 of the Repo Visualization & Learning Environment plan (`.kilo/plans/1794948779713-repo-viz-learning-environment.md` §6, Phase 4 — Data Layer & Contracts).**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure; design brief under `prompts/viz/c11-dev-engineering/data-engineer/`, code under `viz/`, handoff artifact under `artifacts/viz/`.  
**Output:** produce one separate unconsolidated artifact at `artifacts/viz/c11-dev-engineering/VIZ-022-data-contracts.md`.  
**Depth:** expand data-modeling, git-internals, determinism, performance, and offline-degradation depth regardless of model specificity.  
**Agent ID:** C11-DATA-ENGINEER (task VIZ-022)  
**Council:** C11 Dev-Engineering  
**Gate:** C11 Dev-Engineering + C01 Legal-Compliance (C12 Cybersecurity-Intel consulted for snapshot secret-surface review)

---

## 1. Summary

- This master prompt instructs C11-DATA-ENGINEER to own the data layer of the repo visualization learning environment (`viz/`): the TypeScript data contracts and the offline snapshot generator that feed every view — explorer tree, commit timeline, dashboard stats, 3D scene, learning decks.
- Objective: one authoritative set of contracts — `FileNode`, `CommitRecord`, `RepoStats`, `ChurnEntry` — produced deterministically from the local filesystem + git history, consumed unchanged by VIZ-021 API routes and VIZ-020 pages, with committed JSON snapshots as fallback so the app works with no git, no network, no GitHub API.
- Deliverables: `viz/lib/types.ts` (contracts — `FileNode`, `CommitRecord`, `DiffSummary`, `RepoStats`, `ChurnEntry` — single source of truth), `viz/scripts/snapshot.mjs` (zero-dependency generator), committed `viz/public/snapshots/tree.json`, `commits.json`, `stats.json`.
- Research data to ingest: repo root layout (`docs/`, `prompts/`, `execution/`, `.stremiium/`, `rea/`), `git log` / `git log --numstat` semantics, plan §4–§6, `.stremiium/` skills `frontend-patterns` and `frontend-code-review` for contract and code quality rules.
- Prompts to improve: this brief is the data spine referenced by VIZ-020 (file tree), VIZ-021 (API routes), VIZ-015 (dashboard), and VIZ-024 (data-shape tests).
- Output artifact: `artifacts/viz/c11-dev-engineering/VIZ-022-data-contracts.md`.

---

## 2. Assumptions

- The repository (`bx2o/rea`) is present locally with full git history; no GitHub API and no network access are required.
- Node ≥ 20 is available; the generator must run as plain `node scripts/snapshot.mjs` with zero npm dependencies (Node builtins only).
- Snapshot JSON files are committed so the app stays functional in git-absent and offline environments (plan §8 failure-mode mitigation).
- VIZ-021 API routes read live git when available and otherwise serve `public/snapshots/*.json`; both paths return identical shapes — these contracts.
- VIZ-020 owns presentation (virtualized tree, rea/ collapsed by default in the UI); this task owns the data those views consume.
- Repo scale is ~3,900 files; tree JSON must stay small enough to load in one request and be virtualized client-side.

---

## 3. Questions

- Merge commits: include? → Yes, with `filesChanged: 0` (plain `git log --numstat` emits no rows for merges).
- Commit message: subject only or full body? → Subject only (`%s`); the timeline shows one line; per-SHA detail is VIZ-021's diff route.
- Author: name or name + email? → Name only (`%an`), never the email (POPIA minimization, §10–§11).
- Default `churnTop` length? → 20, overridable via `--churn-top <n>`.
- Is rea/ collapse a data concern or a UI concern? → Both: the script offers `--collapse-rea` for emission; the frontend collapses rea/ by default regardless (plan §8).
- Should stats.json embed generation metadata? → Yes by default (`meta`), with `--no-meta` for byte-identical re-runs during development.
- How are git-quoted unicode paths handled? → Strip surrounding double quotes and unescape `\"` / `\xNN` sequences (git `core.quotePath`) before storing.
- What zone do root-level files carry (VIZ-021 asked `root` vs `meta`)? → `'other'` per the locked Zone union; any change bumps `meta.schemaVersion` and re-gates all consumers.
- Additional excluded dirs (`.next/`, `dist/` per VIZ-021's shared `EXCLUDED_DIRS`)? → optional repeatable `--exclude <dir>` flag; the mandated defaults stay `node_modules` + the `.git`-contents rule only.
- Per-sha diff snapshots (`public/snapshots/diffs/<sha>.json`)? → optional extension; the mandated emission stays the three core files (plan §4/§6); `/api/diff` serves live git and 404s in snapshot mode unless `diffs/` is populated.

---

## 4. Concerns

- tree.json for ~3,900 files is a committed artifact; minified emission keeps it roughly 300–600 KB — acceptable, but growth must be watched as `viz/` itself accumulates files.
- Non-deterministic output (locale-aware sorting, timestamps) would pollute git diffs — ordering must be byte-order and stable across machines.
- The git binary may be absent in a target environment; the script must degrade, not fail (empty commits, `meta.headSha: null`).
- Commit messages pass through unfiltered — they are already part of repo history, but the snapshot re-publishes them; C12 reviews before commit if concerns exist.
- Filesystem walk hazards: symlink cycles, permission errors, huge `node_modules` trees — all addressed by exclusion rules (§8.5).
- Contract drift: if VIZ-021 re-declares shapes instead of importing `viz/lib/types.ts`, API payloads and snapshots diverge silently.

---

## 5. Suggested Improvements

- Single `git log --numstat --no-renames` invocation feeding both `CommitRecord` and `ChurnEntry` aggregation — one process spawn, one parse pass.
- Byte-order (`a.name < b.name`) sorting everywhere instead of locale-aware collation, for cross-machine determinism.
- Atomic writes: serialize to `<name>.json.tmp` then `fs.rename` into place; trailing newline; minified by default, `--pretty` for debugging.
- Emission invariants asserted before write (totals reconcile with node counts, Σ byZone files = totalFiles, Σ byType = totalFiles) — fail loudly rather than ship inconsistent stats.
- `meta.schemaVersion` for forward-compatible contract evolution without breaking older consumers.
- Document the one-line regenerate command in `viz/README` so any engineer can refresh snapshots.

---

## 6. Missing Dependencies

- `viz/` scaffold from VIZ-020 (`viz/lib/`, `viz/scripts/`, `viz/public/snapshots/` target dirs); contracts and script spec are authored spec-first without it.
- VIZ-021 must import (not re-declare) `viz/lib/types.ts` for `/api/tree`, `/api/commits`, `/api/diff/[sha]`, `/api/stats` route payloads. Their §4 open zone question resolves to `'other'` here; their shared `EXCLUDED_DIRS` maps to the script's `--exclude` flag; `DiffSummary` (§8.1) is owned by this task and consumed by `/api/diff/[sha]`.
- VIZ-025's `tours.json` rides the snapshot pipeline as an additional emitter (§8.5) without altering the three core files.
- VIZ-024 data-shape tests validate emitted JSON against these contracts.
- C01 Legal-Compliance for POPIA sign-off on author-identity minimization; C12 Cybersecurity-Intel for snapshot secret-surface review before snapshots are committed.
- Sparkling Curious (SC-MASTER-001) synthesis of C11 outputs and cross-task arbitration (plan §3 orchestration).

---

## 7. Step-by-Step Implementation or Research Plan

- 1. Read plan §4–§6 and inventory the repo root: confirm the five zone prefixes and root-level files; record counts as baseline.
- 2. Author the §8 contracts in the artifact exactly as specified (§8.1) — field names, types, and optionality are normative.
- 3. Specify the zone classifier (§8.2), ordering/normalization rules (§8.3), the snapshot pipeline, CLI, git invocation, parsing, and git-absent degradation (§8.4), and exclusions (§8.5).
- 4. In Code Mode only (when handed over): implement `viz/lib/types.ts` and `viz/scripts/snapshot.mjs`; run the generator; commit the three JSON files.
- 5. Coordinate consumers: VIZ-021 imports the types for route payloads; VIZ-020 renders FileNode trees with rea/ collapsed by default; VIZ-024 tests the shapes.
- 6. Run validation checklist (§9 below).
- 7. Hand off to Sparkling Curious (§15 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands run in Ask Mode. This section is normative specification text for the Code Mode handover.

### 8.1 TypeScript contracts (`viz/lib/types.ts` — single source of truth)

```ts
// viz/lib/types.ts — VIZ-022 data contracts.
// Consumers: viz/lib/repo-scan.ts, viz/app/api/* routes, viz pages,
// and scripts/snapshot.mjs (mirrors these shapes in plain JS).

/** Top-level repo zone, derived from the first path segment. */
export type Zone = 'docs' | 'prompts' | 'execution' | 'stremiium' | 'rea' | 'other';

export type NodeType = 'file' | 'dir';

/** One node of the repository file tree. The root node has path ''. */
export interface FileNode {
  /** Repo-relative POSIX path; no leading './' or '/'; '' for the root. */
  path: string;
  /** Basename; for the root node, the repository directory name. */
  name: string;
  type: NodeType;
  /** Bytes for files (fs stat). Dirs: 0 by default; summed descendant bytes with --dir-sizes. */
  size: number;
  /** Zone from the top-level path segment (rules in §8.2). */
  zone: Zone;
  /** Dirs only — never present on files. Sorted: dirs first, then files, each byte-order by name.
   *  Omitted when hollowed (.git), collapsed (--collapse-rea), or a leaf dir. */
  children?: FileNode[];
}

/** One commit of the repository history. commits.json is an array, newest first. */
export interface CommitRecord {
  /** Full 40-char SHA (git %H). */
  sha: string;
  /** ISO 8601 author date (git --date=iso, %ad). */
  date: string;
  /** Author name only (git %an). Never the email address. */
  author: string;
  /** Commit subject line (git %s); body excluded. */
  message: string;
  /** Files touched in this commit; 0 for merge commits (numstat emits no rows). */
  filesChanged: number;
  /** Lines added; 0 for merges / all-binary diffs. */
  insertions: number;
  /** Lines removed; 0 for merges / all-binary diffs. */
  deletions: number;
}

/** Per-path churn aggregate; entries feed RepoStats.churnTop. */
export interface ChurnEntry {
  /** Repo-relative POSIX path, unquoted per §8.3. */
  path: string;
  /** Total lines added across history. */
  insertions: number;
  /** Total lines removed across history. */
  deletions: number;
  /** Number of commits that touched the path. */
  commits: number;
}

/** One file row of a per-commit diff. */
export interface DiffFile {
  /** Repo-relative POSIX path, unquoted per §8.3. */
  path: string;
  /** Lines added; 0 when binary. */
  insertions: number;
  /** Lines removed; 0 when binary. */
  deletions: number;
  /** True when numstat prints `-` counts for this row. */
  binary: boolean;
}

/** Per-commit diff summary — the live-git contract for /api/diff/[sha] (VIZ-021).
 *  Not one of the three core snapshot files: the route wraps it as
 *  `{ source, ...DiffSummary }` and falls back to public/snapshots/diffs/<sha>.json
 *  when present (optional extension, §3). */
export interface DiffSummary {
  /** Full 40-char SHA. */
  sha: string;
  /** ISO 8601 author date (git --date=iso). */
  date: string;
  /** Commit subject line (git %s). */
  message: string;
  /** Per-file numstat rows (git diff --numstat <sha>^ <sha>). */
  files: DiffFile[];
}

/** Optional generation metadata embedded in stats.json (drop with --no-meta). */
export interface SnapshotMeta {
  /** Bump on breaking contract changes. */
  schemaVersion: 1;
  /** ISO timestamp of generation; the only non-deterministic field. */
  generatedAt: string;
  /** HEAD sha at generation; null signals git-absent / snapshot-only mode. */
  headSha: string | null;
  /** Repo root that was scanned (resolved --root). */
  root: string;
}

/** Aggregate repository statistics for the dashboard. */
export interface RepoStats {
  totalFiles: number;
  totalDirs: number;
  /** Full history count, independent of any --max-commits slicing. */
  totalCommits: number;
  /** Every Zone key present (zeros allowed). */
  byZone: Record<Zone, { files: number; dirs: number }>;
  /** File counts keyed by lowercase extension without the dot; '' = extensionless. */
  byType: Record<string, number>;
  /** Top paths by (insertions + deletions) desc; ties: commits desc, then path asc. Default 20. */
  churnTop: ChurnEntry[];
  /** Optional; consumers must tolerate its absence. */
  meta?: SnapshotMeta;
}
```

### 8.2 Zone classification rules (path prefixes)

- Applied to every emitted node (files and dirs) via `classifyZone(path)`:
  1. Normalize to repo-relative POSIX (§8.3); the root (`''`) → `'other'`.
  2. Match the **first path segment** (text before the first `/`) exactly and case-sensitively:

     | First segment | Zone        |
     |---|---|
     | `docs` | `'docs'` |
     | `prompts` | `'prompts'` |
     | `execution` | `'execution'` |
     | `.stremiium` | `'stremiium'` |
     | `rea` | `'rea'` |
     | anything else | `'other'` |

  3. No substring or abbreviated-prefix matching; the whole segment must equal the table entry.
  4. Zone is computed per node from its own path (equivalent to top-level inheritance): `rea/src/x.ts` → `'rea'`.
  5. Root-level files (`README.md`, `.gitignore`), `.git`, and new top-level dirs (e.g. `viz/`) classify as `'other'` by design. Extending the `Zone` union requires adding the prefix-table entry and bumping `meta.schemaVersion` in the same change.

### 8.3 Ordering & normalization rules

- Paths: POSIX separators, repo-relative, no leading `./` or `/`, no trailing `/` (root is `''`).
- tree.json `children`: dirs first, then files; each group sorted byte-order ascending by `name` — never locale-aware collation.
- commits.json: newest first (git log default order); sliced to `--max-commits` when given.
- churnTop: sorted by `(insertions + deletions)` desc; ties broken by `commits` desc, then `path` asc (byte-order); sliced to top N (default 20).
- byType key: substring after the last `.`, lowercased; no dot → `''`. Only files counted; dirs never appear in byType.
- git-quoted paths: when a numstat path starts with `"`, strip the quotes and unescape `\"` and `\xNN` sequences before storing.

### 8.4 `scripts/snapshot.mjs` spec

- Location: `viz/scripts/snapshot.mjs`. Node ≥ 20, **zero npm dependencies** — imports limited to `node:fs/promises`, `node:path`, `node:child_process`, `node:util`. Run from `viz/`: `node scripts/snapshot.mjs [flags]`.
- Emits: `public/snapshots/tree.json` (root FileNode), `public/snapshots/commits.json` (CommitRecord[]), `public/snapshots/stats.json` (RepoStats).
- CLI flags (all optional): `--root <dir>` (default: nearest ancestor of the script containing `.git`), `--out <dir>` (default `<viz>/public/snapshots`), `--churn-top <n>` (default 20), `--max-commits <n>` (default all), `--collapse-rea`, `--dir-sizes`, `--pretty`, `--no-meta`, `--exclude <dir>` (repeatable; extra dir names skipped at any depth, e.g. `.next`, `dist`, to match VIZ-021's shared `EXCLUDED_DIRS`).
- Pipeline stages:
  1. **WALK** — recursive `fs.readdir(withFileTypes)` from root applying §8.5 exclusions; `fs.stat` each file for bytes; classify zone per §8.2; build the FileNode tree with §8.3 ordering. Symlinks: emitted as files with size 0, never followed (no cycles, no escapes).
  2. **GIT** — single invocation: `git log --numstat --no-renames --date=iso --pretty=format:%H%x1f%ad%x1f%an%x1f%s`. Parse: header lines carry `\x1f`-separated sha/date/author/subject; numstat rows are `added \t deleted \t path` (binary rows: `- \t - \t path`); blank lines separate commits. One pass builds every CommitRecord and aggregates the per-path ChurnEntry map.
  3. **STATS** — totals from the walk (post-exclusion); `byZone { files, dirs }`; `byType` extension counts; `totalCommits` = full parsed commit count (before any `--max-commits` slice); churnTop sorted/sliced per §8.3; excluded prefixes never counted in churn.
  4. **EMIT** — `mkdir -p` out; write each file to `<name>.json.tmp` then `fs.rename` (atomic); trailing newline; minified unless `--pretty`. Invariants asserted before write: `totalFiles` = file node count, `totalDirs` = dir node count, Σ `byZone.files` = `totalFiles`, Σ `byType` = `totalFiles`, every Zone key present.
  5. **DEGRADE** — if git is absent or the invocation fails (ENOENT / non-zero), still write tree.json and stats.json with `totalCommits: 0`, commits.json as `[]`, `churnTop: []`, `meta.headSha: null`; print one stderr warning; exit 0. Snapshot-only mode is a supported state, not an error (plan §8).
- Exit codes: 0 success (incl. degradation); 1 usage error; 2 root missing / walk failure; 3 git present but failed (tree.json still written, warning emitted).

### 8.5 Exclusions and special nodes

- `node_modules` — fully excluded at ANY depth (covers `rea/node_modules` and `viz/node_modules`): no nodes, no churn rows.
- `.git` — kept as a dir node (`type: 'dir'`, zone `'other'`, size 0) with `children` omitted; contents never walked or emitted. The node is identifiable by `path === '.git'` so consumers (e.g. VIZ-017 git-internals styling: dashed outline, collapsed by default) can special-case it without extra contract fields.
- `--collapse-rea` — the `rea/` node keeps `type: 'dir'` but `children` are omitted from tree.json. stats.json is ALWAYS computed from the full walk: collapse affects emission only, never stats.
- Churn aggregation excludes any path under `node_modules/` or `.git/` regardless of tree emission.
- Hidden files (dotfiles) are NOT excluded; only the rules above apply. `.gitignore` does not filter the walk — the viewer shows the real tree.
- Extension point: the emitter set may grow (e.g. `tours.json` per VIZ-025, `diffs/<sha>.json` per VIZ-021's snapshot fallback, `graph.json` per VIZ-031) without altering the three core files; each extension adds its matching type to `viz/lib/types.ts` and its own emitter stage.

### 8.6 Code Mode commands (for later execution, not Ask Mode)

- Regenerate: `node scripts/snapshot.mjs` (from `viz/`).
- Diff-stable development runs: `node scripts/snapshot.mjs --no-meta`.
- Commit the three outputs: `viz/public/snapshots/tree.json`, `commits.json`, `stats.json`.

---

## 9. Validation Checklist

- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Contracts match §8.1 exactly: FileNode, CommitRecord, DiffSummary (+ DiffFile), RepoStats, ChurnEntry, Zone, NodeType, SnapshotMeta
- [ ] Zone rules cover all six zones with case-sensitive first-segment match and `'other'` fallback
- [ ] Exclusions specified: node_modules (any depth), .git contents (dir kept hollow), `--collapse-rea` option
- [ ] snapshot.mjs spec is zero-dep (Node builtins only), Node ≥ 20, emits tree.json / commits.json / stats.json
- [ ] Git-absent degradation specified (empty commits, `meta.headSha: null`, exit 0)
- [ ] Determinism specified (byte-order sorting, minified output, `--no-meta` for identical re-runs)
- [ ] Author emails never captured (`%an` only); no file contents in snapshots
- [ ] Emission invariants specified (totals reconcile with byZone / byType)
- [ ] Questions, concerns, assumptions, suggested improvements all populated (no placeholders/TBD)
- [ ] Missing dependencies identified (VIZ-020 scaffold, VIZ-021 import, VIZ-024 tests)
- [ ] Security considerations addressed
- [ ] SA regulatory considerations addressed (POPIA re author names)
- [ ] Compliance gate named (C11 + C01; C12 consult)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described
- [ ] No private keys, credentials, or PII in artifact
- [ ] Artifact path inside Stremiium / Independent-projects workspace

---

## 10. Security Considerations

- Snapshots contain metadata only — paths, sizes, counts, commit headers; never file contents.
- Author is captured as name only; email addresses are excluded, reducing the PII surface (§11).
- The generator is read-only on the repo and writes only into `--out`; it makes no network calls; zero dependencies means no supply-chain surface.
- Commit messages are re-published by the snapshot; they are already in-repo, but C12 Cybersecurity-Intel reviews snapshots before they are committed when message-content concerns exist.
- No secrets, tokens, or credentials may appear in the script, the contracts, or the handoff artifact.

---

## 11. South African Regulatory Considerations

- POPIA: commit author names are personal information; minimize (name only, no email) and process no other personal data in the snapshots.
- No financial data is processed by this task; FICA / SARS CARF / FAIS considerations do not attach to repo metadata.
- If the contract is ever extended to capture author emails or other personal identifiers, re-gate through C01 Legal-Compliance before implementation.

---

## 12. Compliance Gate

- C11 Dev-Engineering + C01 Legal-Compliance, consistent with the standing C11-DATA-ENGINEER gate (POPIA data-handling review).
- C12 Cybersecurity-Intel is consulted for snapshot secret-surface review before committed snapshots land.

---

## 13. Rollback Plan

- Snapshots are derived artifacts: delete `public/snapshots/*.json` and regenerate with one command; no source data is lost.
- A contract change bumps `meta.schemaVersion` and requires a coordinated rebuild of consumers (VIZ-020 tree, VIZ-021 routes, VIZ-024 tests); Sparkling Curious arbitrates sequencing.
- On generator failure, fix the root cause and re-run; never hand-edit emitted JSON — it will be overwritten and drift from the spec.

---

## 14. Escalation Path

- C11-DATA-ENGINEER → C11 Dev-Engineering Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).
- Contract conflicts with VIZ-020 / VIZ-021 / VIZ-024 escalate to Sparkling Curious for arbitration via the VIZ-001 delegation registry.

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/viz/c11-dev-engineering/VIZ-022-data-contracts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with the other C11 viz outputs (VIZ-020, VIZ-021, VIZ-023, VIZ-024, VIZ-025), conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- The contracts are the C11 data spine: downstream tasks import `viz/lib/types.ts` rather than re-declaring shapes — VIZ-021's routes consume `DiffSummary` for `/api/diff/[sha]`, VIZ-024 tests all shapes, VIZ-025's `tours.json` extends the emitter set, VIZ-015's chart inputs derive from `CommitRecord[]` / `byZone` / `churnTop`.
- Artifact must pass the §9 Validation Checklist before handoff.
