# External Orchestration — Wrapping REA in CI / Agent Pipelines

For most NeoBank ZA needs you do **not** modify REA. You call its CLI (or MCP server) from
scripts, CI jobs or agent skills, parse the returned **Evidence**, and persist ledgers. This
is "custom tooling" in the second sense described in [`README.md`](./README.md).

> **Authorisation:** only run these pipelines against artefacts/captures you own or are
> authorised to examine. No bypass of licence/DRM/integrity controls; never capture or
> retain credentials. See [`../playbooks/README.md`](../playbooks/README.md).

---

## 0. Why the CLI is a good orchestration surface

From `/workspace/rea/docs/cli.md` and [`../rea-analysis/mcp-vs-cli.md`](../rea-analysis/mcp-vs-cli.md):

- One process per command; **`--json`** returns the Evidence record directly (indented on a
  TTY, compact when piped).
- **Exit status is separate from the result**: `0` = completed (may still include partial
  evidence / unresolved questions); `1` = could not complete; `128+N` = signal-derived
  (`130` SIGINT, `143` SIGTERM); `141` = SIGPIPE from an early-closing reader.
- **Snapshots** (`--snapshot <file>`) reuse an exact result keyed by target bytes, operation,
  parameters, provider and settings — a durable cache across invocations.
- **Evidence import/export**: `rea evidence-export` / `rea evidence-import` move the complete
  canonical session between runs; exports preserve an existing destination unless
  `--overwrite` is explicit.
- Large complete JSON can be hundreds of MB: **redirect to a file** and project a view with
  `inspect-analysis-view` rather than parsing it whole.

The MCP server is the alternative when an agent (not a script) is the driver; both share the
same application workflows and Evidence contracts.

## 1. Shell pattern — run, capture, record

```bash
#!/usr/bin/env bash
set -Eeuo pipefail   # pipefail preserves REA's failure status through formatters

TARGET="/abs/targets/ExerciseApp.apk"
OUT="/analysis/run-$(date -u +%Y%m%dT%H%M%SZ)"
mkdir -p "$OUT"

# 1) Inspect a package (static, no execution). --json writes the Evidence record.
rea inspect-android-package "$TARGET" --json > "$OUT/android-package.json"

# 2) Capture only the evidence_id + a compact projection for the ledger.
EVID=$(jq -r '.normalized_result.evidence_id // .evidence_id // empty' \
        "$OUT/android-package.json")
printf '{"target":"%s","tool":"inspect_android_package","evidence_id":"%s"}\n' \
        "$TARGET" "$EVID" >> "$OUT/ledger.ndjson"

# 3) Reuse a heavy result across runs via a snapshot.
rea search-android-classes --path "$TARGET" --query Auth \
    --snapshot "$OUT/auth.snapshot.json" --json > "$OUT/auth-classes.json"
```

Notes:

- Prefer the pinned local binary (`rea`) over `npx rea-agents@latest` in CI for
  reproducibility; pin the package version (`rea-agents@6.5.0`) if you must use npx.
- A downstream formatter is safe **only** with `set -o pipefail`; an early reader close
  yields `141`, which does not necessarily mean the analysis failed.
- Use `--provider <id>` (or `REA_ANALYSIS_PROVIDER`) to pin the deep engine deterministically.

## 2. Node pattern — spawn, parse Evidence, write a ledger

```js
// orchestrate.mjs — Node >= 22
import { execFile } from "node:child_process";
import { appendFile, mkdir } from "node:fs/promises";
import { promisify } from "node:util";

const run = promisify(execFile);

async function reaJson(args) {
  try {
    const { stdout } = await run("rea", [...args, "--json"], {
      maxBuffer: 1024 * 1024 * 256, // large complete CLI JSON can be big
    });
    return { ok: true, evidence: JSON.parse(stdout) };
  } catch (error) {
    // Exit 1 = could not complete; structured output may be in stderr/stdout.
    return { ok: false, status: error.code, output: error.stdout ?? "", error: String(error) };
  }
}

const evidenceIdOf = (e) =>
  e?.normalized_result?.evidence_id ?? e?.evidence_id ?? null;

async function main() {
  const target = "/abs/targets/ExerciseApp.apk";
  const outDir = "/analysis/run";
  await mkdir(outDir, { recursive: true });

  const res = await reaJson(["inspect-android-package", target]);
  if (!res.ok) {
    // Record the failure as an unknown rather than guessing a result.
    await appendFile(`${outDir}/ledger.ndjson`,
      JSON.stringify({ target, tool: "inspect_android_package", status: res.status }) + "\n");
    throw new Error(`inspect_android_package failed (exit ${res.status})`);
  }

  const row = {
    target,
    tool: "inspect_android_package",
    evidence_id: evidenceIdOf(res.evidence),
    observation: "package identity + permissions decoded",
    inference: null,
    unknown: null,
    confidence: "high",
  };
  await appendFile(`${outDir}/ledger.ndjson`, JSON.stringify(row) + "\n");
}

await main();
```

Key points:

- **Never invent an evidence id.** If the call failed, record the failure as an unknown.
- Keep **observation / inference / unknown** as separate fields (see
  [`../playbooks/evidence-ledger-template.md`](../playbooks/evidence-ledger-template.md)).
- Respect cancellation: REA may set `130`/`143` after settling cleanup; treat status and
  structured result independently (`docs/cli.md`).

## 3. Batch across targets (fan-out)

```bash
#!/usr/bin/env bash
set -Eeuo pipefail
# targets.tsv: <name>\t<path>\t<authorisation>
while IFS=$'\t' read -r name path authz; do
  [ -z "$name" ] && continue
  if [ -z "$authz" ] || [ "$authz" = "UNVERIFIED" ]; then
    echo "skip $name: not authorised" >&2; continue
  fi
  out="/analysis/$name"; mkdir -p "$out"
  if rea inspect-android-package "$path" --json > "$out/package.json" 2> "$out/err.log"; then
    jq -c '{target: "'"$path"'", evidence_id: (.normalized_result.evidence_id // .evidence_id)}' \
      "$out/package.json" >> /analysis/ledger.ndjson
  else
    echo "{\"target\":\"$path\",\"status\":\"failed\"}" >> /analysis/ledger.ndjson
  fi
done < targets.tsv
```

**Authorisation gate first.** Read authorisation status from the
[target register](../targets/target-register.md); skip anything not explicitly authorised.

## 4. Persisting and re-importing evidence

```bash
# After an investigation session (CLI accumulates evidence in snapshots/bundles):
rea evidence-export --output /analysis/bundles/exercise-app-$(date -u +%Y%m%d).json
# …later, on another machine/session:
rea evidence-import --input /analysis/bundles/exercise-app-20261016.json
rea inspect-evidence-bundle --detail summary --json    # list/filters before drilling in
```

Retained MCP references are connection-scoped and cleared by `close_binary`; the CLI likewise
uses independent invocations, so a **bundle export is how evidence survives** into your
ledger repository.

## 5. Agent-skill pattern

If the driver is an agent rather than a shell/CI job:

- Register the MCP server once (`rea setup --client <id> --yes`), then let the agent call the
  snake_case tools directly (`inspect_android_package`, `inspect_web_network_capture`, …).
- Keep the **same ledger contract** as the CLI path — the Evidence shape is identical across
  both surfaces.
- For oversized MCP replies (`resource_constraint`, `details.resource: "transport"`), page
  with `inspect_analysis_view` or `export_evidence_bundle` instead of retrying.
- Respect client approval policy: an advertised tool or passing `doctor` does not override
  the client's per-call approval.

## 6. CI job sketch (GitHub Actions style)

```yaml
name: rea-static-scan
on: workflow_dispatch
jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: "22" }
      - run: npm ci --prefix /opt/rea   # or: npm i -g rea-agents@6.5.0
      - name: Run REA static inspection
        env:
          REA_JADX_MCP_JAR: ${{ secrets.REA_JADX_MCP_JAR }}
          REA_APKTOOL_COMMAND: /usr/local/bin/apktool
        run: bash scripts/rea-scan.sh
      - uses: actions/upload-artifact@v4
        with: { name: rea-evidence, path: analysis/ }
```

Keep large JSON out of logs; upload as artefacts. Store only redacted ledgers where they
will be shared.

## 7. Anti-patterns

- ❌ Parsing a **client-truncated preview** as canonical JSON — treat it as incomplete and
  re-query a smaller view or export.
- ❌ Repeating an identical analysis because the first result was large — page it instead.
- ❌ Retrying a rejected call without a changed input or a resolved blocker.
- ❌ Claiming execution from a static tool's output.
- ❌ Recording an `evidence_id` for a call that failed.

---

**Related:** [`README.md`](./README.md) · [`authoring-guide.md`](./authoring-guide.md) ·
[`../playbooks/evidence-ledger-template.md`](../playbooks/evidence-ledger-template.md) ·
[`../rea-analysis/mcp-vs-cli.md`](../rea-analysis/mcp-vs-cli.md)
