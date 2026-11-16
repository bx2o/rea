# REA Architecture

This document describes how REA is structured internally, based on read-only inspection
of `/workspace/rea`. The authoritative visual reference is
`/workspace/rea/docs/architecture.mermaid`; the layering rule is stated in
`/workspace/rea/AGENTS.md`.

## 1. Layering rule

`AGENTS.md` states the dependency invariant explicitly:

> "Dependencies flow inward: domain semantics and contracts, provider adapters, shared
> application workflows, then CLI/MCP adapters."

The `architecture.mermaid` diagram realizes this as an inward-only graph. Dependencies
point from adapters toward domain (e.g. `SERVER --> CONTRACTS`, `SERVER --> APP`,
`APP --> DOMAIN`), and never outward.

| Layer | Directory | Responsibility | Evidence |
| --- | --- | --- | --- |
| Domain | `src/domain/` | "Pure side-effect-free modules — evidence, comparisons, application graphs" | `docs/architecture.mermaid` |
| Contracts | `src/contracts/` | "Caller-visible schemas for analysis, reverse engineering, managed, browser, Electron, application, and session tools"; shared error schemas in `errorSchemas.ts` | `docs/architecture.mermaid`, `src/contracts/toolContracts.ts` |
| Configuration | `src/config/` | "Zod-validated env parsing — provider settings and origins" | `docs/architecture.mermaid` |
| Provider layers | `src/hopper/`, `src/ghidra/`, `src/ida/`, `src/native/`, `src/wasm/`, `src/evm/`, `src/dotnet/`, `src/android/`, `src/firmware/`, `src/browser/`, `src/objdump/`, `src/rizin/`, `src/gdb/`, … | One adapter per engine/format | `docs/architecture.mermaid` |
| Provider process foundation | `src/process/`, `src/windows/`, `native/windows/src/` | Owned process groups, private roots, deadlines, bounded reads, cleanup | `docs/architecture.mermaid` |
| Application layer | `src/application/` | "Shared CLI/MCP workflows — enhanced analysis and investigations" | `docs/architecture.mermaid` |
| Production composition | `src/composition/` | "fresh typed provider and session factories; one-shot binding and independent optional loading" | `docs/architecture.mermaid` |
| Adapters | `src/server/`, `bridge/**`, `src/cli/…`, `src/application/Setup*` | MCP request translation, host installation | `docs/architecture.mermaid` |
| Entry points | `src/cli.ts`, `src/main.ts`, `scripts/rea.mjs` | One-shot CLI, MCP stdio server, executable dispatcher | `docs/architecture.mermaid`, `package.json` (`bin`) |

## 2. Entry points and dispatch

Three entry points (`docs/architecture.mermaid`, "Entry Points"):

- **`scripts/rea.mjs`** — executable dispatcher that "routes mcp / one-shot". Both
  `rea` and `rea-agents` map to it (`package.json` `bin`).
- **`src/cli.ts` + `src/cli/`** — one-shot CLI adapter: "setup, diagnostics, analysis,
  decompilation".
- **`src/main.ts` + `src/main/`** — MCP stdio server adapter: "config, session,
  process lifetime".

Dispatch logic connects `DISPATCH --> CLI` and `DISPATCH --> MAIN`. Both adapters reach
the shared application layer (`CLI --> APP`, `MAIN --> APP`) and the composition root
(`CLI --> COMPOSITION`, `MAIN --> COMPOSITION`). This is why the CLI and MCP server
behave identically: `docs/cli.md` states they "use the same application workflows and
evidence contracts".

## 3. Composition root

`src/server/createServer.ts` is the working composition root. Key responsibilities:

- **Provider construction.** All provider services are created or injected via
  `options.*` (so tests can substitute fakes): `createPacketCaptureService`,
  `createSignalRecordingService`, `wasmArtifactModule.create`, `createPeResourcesService`,
  `evmInterfaceModule.create`, `createSqliteDatabaseService`,
  `createRecordedCrashService`, `createGoBinaryService`, `createRustBinaryService`,
  `createBinaryLayoutService`, `createElectronFuseService`, `createFirmwareAnalysisProvider`, etc.
  (`src/server/createServer.ts`).
- **Session creation and the MCP server object.** `createMcpServer(session, delivery,
  selectCompactInputSchemaPresentation(environment), omitOutputSchemas)`
  (`src/server/createServer.ts`).
- **Tool registration.** It calls `registerBinaryAnalysisTools`,
  `registerReverseEngineeringTools`, `registerFridaTools`, `registerCutterTools`,
  `registerGdbTools`, and the remaining `registerXxxTools` modules under `src/server/`
  (`src/server/createServer.ts`, `src/server/` directory listing).
- **Feature gating.** `installSessionToolAvailability(session, options, environment,
  fridaInstrumentation)` computes per-feature availability from environment variables
  (see §7).
- **Provider cleanup.** `closeProviders()` aggregates every provider's `close()` with
  `Promise.allSettled`, and throws an `AggregateError("REA provider cleanup failed")`
  if any cleanup rejected (`src/server/createServer.ts`).

The composition layer lives in `src/composition/` and provides "fresh typed provider and
session factories", including "static WASM/EVM descriptors: named contracts, factories,
retryable lifetimes" (`docs/architecture.mermaid`).

## 4. Session model

The application layer exposes a **`SessionProviderRouter` + `BinarySession`** pair with
"one immutable deep binding per target" and "disjoint auxiliary routing"
(`docs/architecture.mermaid`).

Observed behavior:

- A native/archive target is bound once via **`open_binary`**; the selected provider
  stays bound "until an explicit switch or close" (`docs/cli.md`).
- **`binary_session`** with no arguments reports the open target, the selected provider,
  and alignment; its `result.tool_availability` carries the complete grouped inventory
  of available tools, reasons, remediation, modes, and flags
  (`.agents/skills/.../references/native-and-artifacts.md`).
- `analysis_provider_binding` names the selected provider; "Top-level session
  capabilities describe the current route", while candidate capabilities "describe
  possible providers" (`.agents/skills/.../references/native-and-artifacts.md`).
- Provider selection is deterministic and has no fallback:
  `AnalysisProviderRegistry` holds "sorted deep candidates — deterministic selection, no
  fallback" (`docs/architecture.mermaid`). Selection errors surface `details.candidate_ids`
  (ambiguous) or `details.rejections` (unavailable) (`docs/cli.md`).
- `close_binary` clears retained evidence references
  (`references/javascript-applications.md`).

Auxiliary "disjoint" routes (browser CDP, Electron, packet capture, signals, etc.) are
routed separately from the deep binary provider binding (`docs/architecture.mermaid`;
`SKILL.md` "do not call an unadvertised tool").

## 5. Evidence and ledger model

Evidence is the central output type. `docs/mcp-contracts.md` documents:

- Every tool result carries an **`evidence_id`** of the form `ev_` + 64 lowercase hex
  characters (also stated in `references/javascript-applications.md`: `ev_<64 lowercase
  hex characters>`).
- Records contain **artifact identity, source locations, observations, inferences and
  unresolved findings** (`docs/cli.md`, "Import, export and compare Evidence").
- **`detail: summary | complete`**: `summary` returns a linked `inspect_analysis_view`
  record with a distinct ID and a `normalized_result.parent_evidence_id` pointing at the
  complete retained record (`docs/mcp-contracts.md`; contract descriptions in e.g.
  `src/contracts/android/androidToolContracts.ts`, `managedToolContracts.ts`).
- **`inspect_analysis_view`** projects a summary, one section/module, or a stable page
  from a retained reference, without repeating analysis. Views are typed by `kind`
  (`native`, `inventory`, `wasm`, `macho`, `interface-builder`, `api-surface`, `managed`,
  `managed-members`, `javascript`, `javascript-facts`, `capture`, `android`,
  `page`, `item`, `summary`) (`docs/mcp-contracts.md`; contract descriptions across
  `src/contracts/**`).
- **Retained references** use the input form
  `{"kind":"retained-evidence","evidence_id":"ev_<64 lowercase hex characters>"}` and
  belong to one MCP connection (`references/javascript-applications.md`,
  `docs/mcp-contracts.md`).
- **Unknowns are first-class**: `list_unknowns`, `record_unknown`, `update_unknown`,
  `verify_unknown_resolution` are session tools (`src/contracts/sessionToolContracts.ts`).
  The application layer owns "composed InvestigationRecords + narrow ports —
  EvidenceLedger and Unknown ownership" (`docs/architecture.mermaid`, `RECORDS`).
- **Export/import**: `export_evidence_bundle` / `import_evidence_bundle`
  (`src/contracts/sessionToolContracts.ts`; CLI `evidence-export` / `evidence-import` in
  `src/cliCommandNames.ts`).

The ledger also persists across CLI invocations through **snapshots**
(`BinarySessionRecords + AnalysisSnapshotCache`, `docs/architecture.mermaid`; `docs/cli.md`
"Save and reuse analysis snapshots"). Snapshots are local, owner-only, and reuse "an
exact result when the target bytes, operation, parameters, provider and settings match";
MCP `close_binary` accepts `snapshot_path` and optional `overwrite: true` (`docs/cli.md`).

## 6. Provider abstraction

REA abstracts analysis engines behind provider adapters so the same tools work across
engines. Providers evidenced by `docs/architecture.mermaid` and `src/**`:

| Provider | Adapter location | Notes | Evidence |
| --- | --- | --- | --- |
| Hopper | `src/hopper/` + `bridge/hopper_bridge.py` | Launch + Unix-socket protocol; bridge runs inside Hopper's Python API | `docs/architecture.mermaid` |
| Ghidra | `src/ghidra/` + `bridge/ghidra/ReaGhidraBridge.java` | Discovery, profile, decompiler, references, CFG; snapshot; Unix/Windows transport | `docs/architecture.mermaid` |
| IDA | `src/ida/` + external `ida-pro-mcp` | "live GUI binding or owned headless database"; upstream installed separately | `docs/architecture.mermaid`, `docs/ida-provider.md`, `SKILL.md` |
| Kuna | `src/kuna` (config) | Whole-program cached export; `provider_id: "kuna"` | `SKILL.md` |
| Cutter | `bridge/cutter/rea_bridge.py` | `list_cutter_sessions`, `cutter_command` | `src/contracts/cutterToolContracts.ts` |
| GNU objdump | `src/objdump/` | "command profile" | `docs/architecture.mermaid`, `docs/reverse-engineering-tools.md` |
| Rizin | `src/rizin/` | Static command profile + persistent debugger sessions | `docs/architecture.mermaid`, `src/contracts/rizinDebugToolContracts.ts` |
| GDB (MI) | `src/gdb/` | Persistent GDB/MI sessions, owned lifecycle | `docs/architecture.mermaid`, `src/contracts/gdbToolContracts.ts` |
| pwntools / pwndbg | `src/native/pwntools/`, `src/native/pwndbg/` | BYO offline ELF/core adapters; `inspect_binary_layout`, `inspect_recorded_crash` | `docs/architecture.mermaid` |

Provider-aware environment variables (`docs/reverse-engineering-tools.md`):
`REA_OBJDUMP_COMMAND`, `REA_GDB_COMMAND`, `REA_RIZIN_COMMAND` (see
`src/composition/reverseEngineering.ts`, `src/rizin/RizinDebugSessionManager.ts`).
Ghidra adds `REA_GHIDRA_*` settings (language/compiler override, seed file, disabled
analyzers, NativeAOT JAR) (`src/ghidra/**`).

The provider contract is expressed through tool names; for a native target, the "official
provider proxy" family (`src/contracts/officialToolContracts.ts`) maps directly onto the
selected engine's operations (e.g. `procedure_pseudo_code`, `xrefs`, `list_segments`),
while "enhanced" tools (`src/contracts/enhancedToolContracts.ts`) compose higher-level
workflows (`binary_overview`, `analyze_function`, `trace_feature`).

## 7. Process supervision

`src/process/` is the shared foundation: "owned process groups, private roots, deadlines,
bounded file reads and diagnostics, cleanup" (`docs/architecture.mermaid`, `PROCESS`).
Provider adapters depend on it (`HOPPER --> PROCESS`, `GHIDRA --> PROCESS`,
`WASM --> PROCESS`, `GDB --> PROCESS`, `FIRMWARE --> PROCESS`, `ANDROID --> PROCESS`, …).

Windows has its own boundary: `src/windows/` provides "package loader, opaque handles,
owned jobs and private runtimes", backed by the Node-API module in `native/windows/src/`
("NTFS admission, protected DACLs and atomic Job Object assignment")
(`docs/architecture.mermaid`, `WINDOWS` / `WINDOWS_NATIVE`).

Operational consequences:

- Providers run in owned process groups with deadlines; on Linux a procps-compatible
  `ps` is required (`docs/installation.md`, "Linux owned-process prerequisite").
- Provider processes are cleaned up by `closeProviders()`; incomplete cleanup is
  reported as `cleanup_incomplete` and never claimed as verified removal
  (`src/server/createServer.ts`, `docs/cli.md`, `docs/installation.md`).

## 8. Evidence provenance rules

REA enforces a strict separation between **observed**, **inferred**, and **unknown**
facts, and marks untrusted target content.

- **Three server instruction strings** are defined in `src/server/createServer.ts`:
  `TARGET_FREE_INSTRUCTIONS`, `ACTIVE_TARGET_INSTRUCTIONS`, and
  `UNTRUSTED_CONTENT_INSTRUCTIONS`.
- **Untrusted content marker.** Tool results that return target-derived content carry a
  provenance marker (`src/server/toolResultEncoding.ts`; `TARGET_CONTENT_RESULT_META`),
  driven by `toolReturnsTargetContent` in `src/contracts/toolEffects.ts`. This is the
  `_meta.provenance.untrusted_content` marker referenced across the skill guides.
- **Observed vs inferred vs unknown.** Per `SKILL.md` "Finish the task": "Every
  conclusion must distinguish observations, inferences, and unknowns. Cite Evidence IDs,
  preserve limitations and incomplete coverage, and never imply that static analysis
  observed execution." Contract descriptions consistently restate this (e.g. "Addresses
  and recovered pseudocode are analysis observations, not original source";
  `references/native-and-artifacts.md`).
- **Effect/annotation vocabularies.** Each tool advertises fixed `effects` and
  `annotations` arrays via `toolContractMetadata` (`src/contracts/toolEffects.ts`); "an
  omitted known flag is false" (`references/native-and-artifacts.md`).
- **Request scope.** "Runtime requests execute the declared target and lifecycle; do not
  broaden the target or action beyond those fields" (`SKILL.md`).
- **Integrity record-and-continue.** Integrity mismatches are recorded rather than
  aborting (`docs/mcp-contracts.md`).

## 9. Configuration and feature gating

`src/config/` provides Zod-validated env parsing (`docs/architecture.mermaid`). Feature
availability is computed in `installSessionToolAvailability`
(`src/server/createServer.ts`), gating tool families on absolute-path settings:

| Feature | Gate (env) | Evidence |
| --- | --- | --- |
| Packet capture | `REA_TSHARK_COMMAND` (Linux) | `src/server/createServer.ts` |
| Signal recording | `REA_SIGROK_COMMAND` (Linux) | `src/server/createServer.ts` |
| WASM artifact | `REA_WABT_BIN_DIRECTORY` | `src/server/createServer.ts` |
| EVM interface | available on `linuxX64` | `src/server/createServer.ts` |
| Browser module resolution | `REA_BROWSER_EXECUTABLE` | `src/server/createServer.ts` |
| Recorded crash / binary layout | `REA_PWNTOOLS_PYTHON` (absolute, `linuxX64`) | `src/server/createServer.ts` |
| Firmware inspection | `REA_BINWALK_COMMAND` (Linux) | `src/server/createServer.ts` |
| Firmware extraction | `REA_UNBLOB_COMMAND` (Linux) | `src/server/createServer.ts` |
| JavaScript recovery | `REA_WAKARU_COMMAND` (`linuxX64`) | `src/server/createServer.ts` |

Additional related settings observed in source: `REA_MCP_MAX_RESPONSE_BYTES`,
`REA_MCP_OUTPUT_SCHEMA_PROFILE`, `REA_MCP_INPUT_SCHEMA_PROFILE`
(`src/server/createServer.ts`); `REA_ANALYSIS_PROVIDER` (`docs/cli.md`);
`REA_JADX_MCP_JAR`, `REA_JADX_HEAP_MIB` (`references/android-applications.md`);
`REA_JEB_MCP_URL`, `REA_JEB_MCP_TIMEOUT_MS` (`src/jeb/JebProvider.ts`);
`REA_APKTOOL_COMMAND` (`src/apktool/ApktoolConfiguration.ts`); `REA_ADB_PATH`
(`src/contracts/adb/adbToolContracts.ts`); `REA_TSHARK_COMMAND`, `REA_CAPINFOS_COMMAND`
(`src/pcap/PcapConfiguration.ts`); `REA_IDA_MCP_CONFIG` (`src/ida/IdaConfiguration.ts`);
`REA_REFERENCE_SECRET_PATTERNS_JSON` (`docs/cli.md`).

## 10. MCP server adapter details

`src/server/EvidenceMcpServer.ts` extends the SDK `McpServer` and adds:

- `currentMcpRequestSignal()` — an `AsyncLocalStorage`-backed signal for the
  currently-dispatched completion request (used to propagate cancellation).
- `omitOutputSchemasFromToolsList()` — strips `outputSchema` from the client-visible
  `tools/list` result while keeping SDK registrations canonical.
- `forgetPendingMcpRequest(...)` — releases transport-owned references for a
  cancelled/completed request.

Schemas can be reduced via the compact input-schema presentation
(`src/contracts/compactInputSchema.ts`, `presentAdvertisedInputSchema`). See
[`mcp-vs-cli.md`](./mcp-vs-cli.md) for the profile settings and response budget.

## 11. Data-flow summary

```
user/agent request
      │
      ▼
scripts/rea.mjs ──► src/cli.ts (one-shot)   src/main.ts (MCP stdio)
                          │                        │
                          └──────────┬─────────────┘
                                     ▼
                    src/server/createServer.ts (composition root)
                                     │
                     ┌───────────────┼────────────────┐
                     ▼               ▼                ▼
              src/composition   src/application   src/contracts
                     │               │
                     ▼               ▼
             provider adapters   SessionProviderRouter
        (hopper/ghidra/ida/…)    + BinarySession + ledger
                     │
                     ▼
              src/process (owned process foundation)
                     │
                     ▼
                Evidence record  ──►  summary / inspect_analysis_view / export_evidence_bundle
```

All facts above are drawn from `docs/architecture.mermaid`, `AGENTS.md`,
`src/server/createServer.ts`, and the contract files cited inline.
