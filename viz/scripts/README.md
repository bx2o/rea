# viz/scripts — snapshot generation & QA verification

Zero-dependency Node scripts (Node builtins only, no npm packages, no network).
Run them from any working directory — paths resolve from the script location, not the CWD.

## verify-viz.mjs — VIZ-024 QA gate

Static verification of the viz app: snapshot contract shapes (VIZ-022
`lib/types.ts`), coverage reconciliation, source completeness, static a11y
smoke, and the VIZ-017 no-hex single-source rule. It is read-only — it never
mutates the repo, runs no git commands, and writes nothing unless `--report`
is passed.

### Run

```bash
cd viz
node scripts/verify-viz.mjs            # or: pnpm verify  (package.json alias)
```

Flags:

| Flag | Effect |
|---|---|
| `--snapshots <dir>` | Snapshot directory to verify (default `public/snapshots`, relative to `viz/`). Accepts `--snapshots=<dir>` too. |
| `--report <file>` | Also write a machine-readable JSON report (`{generatedAt, exitCode, totals, results[]}` with `{checkId, area, status, cls, owner, detail}` per check). Default: no file written. |
| `--help` | Print usage and exit 0. |

### Checks

One output line per check: `[PASS]|[FAIL]|[WARN] <id> <name> — <detail>`,
then a summary. `cls` is the failure class used for the exit code; the
`owner` column routes triage per the VIZ-024 §7.9 routing table.

| ID | Check | Validates | cls | owner |
|---|---|---|---|---|
| V01 | snapshots/parse | all 5 snapshot files exist and parse | 1 | VIZ-022 |
| V02 | snapshots/tree-shape | `tree.json` root is a `FileNode[]`; every node (full census, 50-node sample floor) has `path/name/type/size/zone`, `type ∈ file\|dir`, `zone ∈` the 6 zones | 1 | VIZ-022 |
| V03 | snapshots/commits-shape | `commits.json` array with `sha/date/author/message/filesChanged/insertions/deletions` per commit | 1 | VIZ-022 |
| V04 | snapshots/stats-shape | `totalFiles > 0`; `byZone` files/dirs sums reconcile to totals **dynamically** (no hardcoded zone counts); `churnTop` sorted desc by commits | 1 | VIZ-022 |
| V05 | snapshots/graph-shape | `graph.json` nodes (`id/type/label`) and edges (`source/target/type`) with valid enum values; edge endpoints resolve to node ids | 1 | VIZ-031 |
| V06 | snapshots/tours-shape | `tours.json` ≥ 3 tours, each ≥ 2 steps, step fields `id/title/description/route` | 1 | VIZ-025 |
| V07 | coverage/tree-vs-stats | recursive `tree.json` file/dir counts === `stats.totalFiles/totalDirs` | 2 | VIZ-022 |
| V08 | coverage/history-churn | `commits.json` length === `stats.totalCommits`; every `churnTop` entry has `commits ≥ 1` | 2 | VIZ-022 |
| V09 | coverage/prompts-register | exactly **19** `prompt.md` files under `../prompts/viz` (drift in either direction fails) | 2 | SC-orchestration |
| V10 | coverage/learn-decks | ≥ 4 deck `.md` in `content/decks/`, ≥ 4 files in `public/decks/`, and a decks manifest (`decks.manifest.json` or `decks.json`) with ≥ 4 entries | 2 | VIZ-030 |
| V11 | source/complete | the 11 key source files exist (7 routes, nav shell, brand/types libs, snapshot script); prints the missing list | 2 | VIZ-020 |
| V12 | a11y/use-client | interactive components (names matching `file-tree|timeline|globe|deck|reveal|app-shell|nav|tour`) carry `"use client"` | 3 | VIZ-020 |
| V13 | a11y/reduced-motion | `app/globals.css` contains a `prefers-reduced-motion` media query | 3 | VIZ-014 |
| V14 | a11y/shell-skip-main | app-shell contains a skip link (`skip`) and a main landmark (`<main>` or `role="main"`) | 3 | VIZ-014 |
| V15 | a11y/file-tree-role | file-tree component(s) expose `role="tree"` | 3 | VIZ-014 |
| V16 | a11y/charts-aria | `app/page.tsx` mentions `aria-label` or `role="img"` — **warn-level only, never fails** | — | VIZ-014 |
| V17 | nohex/drift | no hardcoded hex colors (`#RGB`/`#RRGGBB`/`#RRGGBBAA`) in `app/` + `components/`, excluding `lib/brand.ts` and `app/globals.css` | 1 | VIZ-017 |

### Exit codes (VIZ-024 §8 contract)

| Exit | Meaning | Triggered by |
|---|---|---|
| `0` | all checks pass | no failures (warnings allowed) |
| `1` | shape/contract errors | V01–V06 snapshot shape violations, V17 no-hex drift |
| `2` | coverage errors | V07–V11 count reconciliation, prompt register, decks, missing source |
| `3` | a11y static failures | V12–V15 |
| `4` | exception | a check threw unexpectedly — the run is incomplete; fix the script/input and re-run |

Precedence is fail-closed: `4 > 1 > 2 > 3 > 0`. An exception invalidates the
whole run (exit 4); otherwise, when multiple classes fail, the **lowest**
failing class wins (fix the most fundamental problem first, re-run, repeat).
`[WARN]` lines never change the exit code.

### Notes & limitations

- All count checks reconcile dynamically — expected values are never
  hardcoded, so repo growth never false-fails the gate (the `prompts/viz`
  register count is the one intentional exact-match constant, per the VIZ-024
  drift concern; update it only through a TASK-INDEX decision, never to make
  a failing run green).
- The a11y checks are **static attribute checks only** — a passing V12–V16
  does not replace the manual keyboard walkthrough, reduced-motion toggle
  pass, and AA contrast audit owned by VIZ-014.
- The verifier cannot prove the Next.js build; combine with
  `pnpm exec tsc --noEmit && pnpm build` for the full VIZ-023/024 gate.
- Snapshot contract failures: regenerate via `scripts/snapshot.mjs` at the
  current HEAD, then re-verify. If the contract itself is wrong, escalate to
  VIZ-022 — do not edit the verifier to match a broken snapshot.

## snapshot.mjs — snapshot generator (VIZ-022 §8.4)

Emits `public/snapshots/{tree,commits,stats,graph,tours}.json` atomically
from the real repo. Degrades gracefully when git is absent (empty commits,
`headSha: null`, exit 0).

```bash
node scripts/snapshot.mjs                 # full emission (also: pnpm snapshot)
node scripts/snapshot.mjs --collapse-rea   # collapse rea/ internals in tree emission only
node scripts/snapshot.mjs --exclude dir    # repeatable extra exclude (e.g. .next, dist)
node scripts/snapshot.mjs --no-meta       # drop meta block (byte-identical re-runs)
```

Run it after any repo change, then run `verify-viz.mjs` to re-gate.
