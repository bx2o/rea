# REA Doctor Contract — T1.1 (C06 Engineering-Infra · C11 Dev-Engineering)

**Program:** `SC-REA-NEOBANK-5.0`  
**Task:** T1.1 REA Doctor & Provider Verification  
**Owner:** C11 Dev-Engineering (primary) · C06 Engineering-Infra (co-owner) · C12 Cybersecurity-Intel (co-sign required)  
**Status:** `PENDING` — execution blocked on REA runtime installation; contract defined below  
**Last updated:** 2026-11-16

---

## 1. Purpose

This document is the build-and-evidence contract for T1.1. It specifies the exact
invocation, expected fields, pass/fail conditions, and the current observed state. Per
`task/PROGRAM_BRIEF.md` §5, no “Seen” forensic claim is produced until REA is installed,
`rea doctor --verbose` runs, and its output is captured here as artefact evidence.

## 2. Canonical invocation contract

```bash
# From workspace root
cd rea

# 1) Install dependencies (pinned by rea/package.json; requires Node >=24.15 or 26+)
npm ci --engine-strict=false

# 2) Build (cached) if dist/ not present
npm run build:cached

# 3) Doctor — provider/model/tool health
node scripts/rea.mjs doctor --verbose

# 4) Capture JSON output to this task folder (never stdout-only)
node scripts/rea.mjs doctor --verbose --json \
  > ../task/T1-infrastructure-setup/implementation/rea-doctor-output.json
```

Alternative (if `npx rea-agents` is preferred after install):

```bash
npx rea-agents setup
rea doctor --verbose --json > task/T1-infrastructure-setup/implementation/rea-doctor-output.json
```

All invocations MUST write JSON to `task/T1-infrastructure-setup/implementation/` so results
are reproducible and auditable (see `task/T1-infrastructure-setup/implementation/build-spec.md` §5).

## 3. Expected `rea doctor` contract shape

| Field | Expected | Pass condition |
|---|---|---|
| `rea version` | Pinned to `rea/package.json` version (currently 6.5.0 per checkout) | Matches checkout |
| `command` | `rea doctor --verbose` (and optionally `--json`) | Exit code `0` |
| `providers[]` | Each provider: `{id,name,version,status,reason?,diagnostics?}` | All required providers `healthy`/`available` or explicitly documented as optional |
| `models[]` | Routing targets / model availability as reported | Reachable or documented fallback |
| `tools` | Registered MCP/CLI tool inventory (e.g. `analyze-javascript-application`, `inspect_android_package`, `open_binary`, …) | Expected banking-relevant tools present |
| `capabilities` | Provider capability groups and operation availability | No unexplained `unavailable` for required operations |
| `mcp transport` | `stdio` or `http` (record actual) | Transport reachable from a council agent or fallback documented |
| `exit_code` | `0` | Healthy |

**Fail conditions:** provider missing, model unreachable, required tool absent, transport
unverified without documented fallback, or exit code ≠ 0.

## 4. Current observed state (evidence-gated)

| Check | Observation | Evidence class | Source |
|---|---|---|---|
| REA source present | `rea/` is a tracked checkout (4,068 files), `package.json` declares `rea-agents` v6.5.0, `scripts/rea.mjs` present | **SEEN** | Workspace inspection 2026-11-16 (`rea/package.json`, `git ls-files rea \| wc -l`) |
| Node modules installed | `rea/node_modules/` absent | **SEEN** | Workspace inspection 2026-11-16 |
| `rea doctor --verbose` executed | Not executed (runtime deps not installed) | **UNKNOWN** | No capture artefact |
| Provider/model health | Not observed | **UNKNOWN** | Blocked on doctor run |
| MCP transport reachable | Not verified | **UNKNOWN** | Blocked on install + runtime test |
| C12 security co-sign | Not obtained | **UNKNOWN** | Requires doctor output + secret scan |

**Blocking condition (R1/R3 from `task/T1-infrastructure-setup/status.md`):** REA binary/runtime
is not installed in this environment. T1.1 cannot exit until `rea doctor --verbose --json`
produces a captured, auditable output and C06+C12 sign off.

## 5. Acceptance tests (T1.1 scope)

| Test | Method | Pass criterion | Current state |
|---|---|---|---|
| T-INSTALL | `npm ci` + build; `node scripts/rea.mjs --help` exits 0 | REA resolvable | ❌ NOT RUN |
| T-DOCTOR | `node scripts/rea.mjs doctor --verbose --json` exit 0; providers/models/tools listed | Health contract satisfied | ❌ NOT RUN |
| T-MCP | Agent invokes REA tool (or documented fallback) and receives JSON | Transport verified | ❌ NOT RUN |
| T-NOSECRET | C12 secret scan over emitted logs/config | No secrets/credentials | ❌ NOT RUN |

## 6. Sign-off

| Role | Council | Decision | Date | Notes |
|---|---|---|---|---|
| Build owner | C11 Dev-Engineering | PENDING | — | Awaiting install window |
| Infra owner | C06 Engineering-Infra | PENDING | — | Awaiting install window |
| Security co-sign | C12 Cybersecurity-Intel | PENDING | — | Required before T1 exit |

## 7. Next actions

1. **C06** — provision Node runtime meeting `rea/package.json` engines, run install/build in `rea/`, capture `rea doctor --verbose --json`.
2. **C11** — attach `rea-doctor-output.json` and update §4 with SEEN provider/tool evidence.
3. **C12** — run secret scan on captured outputs and co-sign.
4. **C06/C11** — if MCP transport unavailable in sandbox, document fallback in `implementation/mcp-transport.md` (A3).

---

*This file is an honest, evidence-gated contract artefact. It does not claim doctor execution that has not occurred.*
