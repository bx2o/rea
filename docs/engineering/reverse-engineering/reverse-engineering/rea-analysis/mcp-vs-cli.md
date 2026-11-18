# REA: MCP vs CLI

REA ships one application core with **two adapters**: the MCP stdio server and the
one-shot CLI. They "use the same application workflows and evidence contracts"
(`docs/cli.md`). This document contrasts the two surfaces, lists the configuration
environment variables, the supported agent clients, and the shared evidence/exit-status
semantics. Sources: `docs/cli.md`, `docs/installation.md`, `docs/client-configuration.md`,
`src/cliCommandNames.ts`, `src/server/createServer.ts`, `scripts/rea.mjs`.

## 1. Two entry points, one core

`docs/architecture.mermaid` ("Entry Points") and `package.json`:

| Aspect | MCP server | One-shot CLI |
| --- | --- | --- |
| Adapter | `src/main.ts` + `src/main/` | `src/cli.ts` + `src/cli/` |
| Dispatch | `scripts/rea.mjs` routes `mcp` vs one-shot; `server.json` `packageArguments: ["mcp"]` | same dispatcher |
| Transport | stdio | process invocation |
| Invocation | `rea mcp` (agent-launched) | `rea <command> [args]` |
| Lifetime | long-lived; retains session + evidence references | one process per command; "save results when you want to use them in a later command" |
| Result | Evidence record over MCP frames; subject to response budget | returns "the Evidence record directly" |
| Shared core | `src/application/` workflows + `src/server/createServer.ts` composition | identical |

The CLI is also the documented **fallback** when MCP is unavailable:

```bash
npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json
```

This "requires no native engine" for static JavaScript
(`.agents/skills/reverse-engineer-anything/SKILL.md`).

## 2. How MCP registration works

- REA is an **MCP stdio server**. `server.json` declares `transport: stdio`,
  `package: rea-agents`, and `packageArguments: ["mcp"]`.
- `rea setup` writes client configuration and installs the bundled skill. A **skill-only
  installation does not register MCP**: "Installing this skill supplies instructions; it
  does not register the REA MCP server, install analysis engines, or add tools to an
  already-running agent" (`SKILL.md`).
- Registration is verified with `rea doctor --client <id> --json`. Doctor "checks
  registration; it cannot establish the current agent's connection" — an aligned
  registration with no tools in a live session needs a client restart
  (`references/connection-and-recovery.md`).
- Repair flow: `rea setup --client <id> --dry-run --json` (read-only plan) → review paths,
  backups, skill replacement → `rea setup --client <id> --yes`
  (`SKILL.md`, `references/connection-and-recovery.md`).
- Clients with a **tool-search** requirement (e.g. Claude Code) or MSIX install (Claude
  Desktop) have per-client caveats (`docs/client-configuration.md`).
- `grok_bot` has no local `mcp.json`: "doctor reports the Grok Bot chat step, and setup
  does not write `mcp.json`" (`SKILL.md`).
- Unsupported client → "manual stdio registration with a version-pinned `rea-agents`
  package or continue through the CLI" (`SKILL.md`).

### MCP request/response handling (server internals)

- `src/server/EvidenceMcpServer.ts` extends the SDK `McpServer`, tracks the current
  request's `AbortSignal` (`currentMcpRequestSignal`), and strips `outputSchema` from the
  client-visible `tools/list` (`omitOutputSchemasFromToolsList`).
- **Response budget.** The default MCP receive budget is 10 MiB; an oversized reply returns
  `resource_constraint` with `details.resource: "transport"` and a same-session evidence
  reference. Complete CLI JSON output "streams without a single MCP frame"
  (`SKILL.md`, `references/javascript-applications.md`).
- **Schema profiles.** `REA_MCP_INPUT_SCHEMA_PROFILE` (`full`/`compact`) and
  `REA_MCP_OUTPUT_SCHEMA_PROFILE` (`full`/`off`) control advertised schema size
  (13,312-byte compact budget; `docs/mcp-contracts.md`; `parseMcpInputSchemaProfile` /
  `parseMcpOutputSchemaProfile` in `src/config/`, wired in `src/server/createServer.ts`).
- **Cancellation.** `currentMcpRequestSignal` + `forgetPendingMcpRequest` release
  transport-owned references for cancelled/completed requests
  (`src/server/EvidenceMcpServer.ts`).

## 3. How the CLI works

`docs/cli.md`:

- Commands: `rea analyze|inspect|decompile|function|instructions|xrefs|trace|search`,
  `rea providers`, `rea capabilities`, `rea setup`, `rea doctor`, `rea uninstall`,
  `rea update`, `rea evidence-import|evidence-export|compare`,
  `rea import-reference-source`, and per-provider commands
  (`src/cliCommandNames.ts`).
- **Command aliases.** `CLI_COMMAND_ALIASES = ["compare-bundles"]`; explicit MCP mapping
  in `CLI_COMMAND_TOOL_ALIASES` (e.g. `analyze → binary_overview`,
  `decompile → procedure_pseudo_code`, `function → analyze_function`,
  `trace → trace_feature`, `search → [search_strings, search_procedures]`) —
  `src/cliCommandNames.ts`.
- **Output format.** Default terminal format is TOON; `--json` selects JSON (indented on a
  TTY, compact when piped). Output flags: `--format`, `--filter-output`, `--token-limit`,
  `--token-offset`; a missing value fails with `MISSING_OUTPUT_VALUE` before the command
  runs (`docs/cli.md`).
- **Snapshots.** `--snapshot <file>` retains exact query results keyed by target bytes,
  operation, parameters, provider and settings; mutations/cursor-dependent calls are
  excluded (`docs/cli.md`, "Save and reuse analysis snapshots").
- **Provider selection.** `--provider` overrides `REA_ANALYSIS_PROVIDER`; in MCP, pass
  `provider_id` to `open_binary` (`docs/cli.md`).
- **Pipe safety.** With `set -o pipefail`, a downstream formatter preserves REA's failure
  status; early reader close yields exit 141 (`docs/cli.md`).

### CLI ↔ MCP name differences

The CLI generally uses kebab-case (`inspect-go-binary`) while the MCP tool uses snake_case
(`inspect_go_binary`) — see `CLI_COMMANDS` vs contract names in `src/cliCommandNames.ts`
and `src/contracts/**`. Many MCP tools have **no dedicated CLI command**
(`MCP_TOOLS_WITHOUT_DEDICATED_CLI`).

## 4. Configuration environment variables

### MCP transport / schema

| Variable | Purpose | Evidence |
| --- | --- | --- |
| `REA_MCP_MAX_RESPONSE_BYTES` | MCP response budget | `src/server/createServer.ts`, `src/config/mcpResponseBudget.ts` |
| `REA_MCP_OUTPUT_SCHEMA_PROFILE` | `full` / `off` output schemas | `src/server/createServer.ts` |
| `REA_MCP_INPUT_SCHEMA_PROFILE` | `full` / `compact` input schemas | `src/server/createServer.ts` |

### Provider / engine selection

| Variable | Purpose | Evidence |
| --- | --- | --- |
| `REA_ANALYSIS_PROVIDER` | Standing provider preference | `docs/cli.md` |
| `REA_OBJDUMP_COMMAND` | objdump binary (default `objdump`) | `docs/reverse-engineering-tools.md`, `src/composition/reverseEngineering.ts` |
| `REA_GDB_COMMAND` | GDB binary | `docs/reverse-engineering-tools.md` |
| `REA_RIZIN_COMMAND` | Rizin binary (default `rizin`) | `docs/reverse-engineering-tools.md`, `src/rizin/RizinDebugSessionManager.ts` |
| `REA_IDA_MCP_CONFIG` | Upstream IDA MCP JSON registration | `src/ida/IdaConfiguration.ts`, `docs/ida-provider.md` |
| `REA_GHIDRA_LANGUAGE_ID`, `REA_GHIDRA_COMPILER_SPEC_ID`, `REA_GHIDRA_SEED_FILE`, `REA_GHIDRA_DISABLED_ANALYZERS`, `REA_GHIDRA_NATIVEAOT_JAR`, `REA_GHIDRA_STARTUP_TIMEOUT_MS` | Ghidra profile/overrides | `src/ghidra/**` |

### Feature gates (enable optional tool families)

| Variable | Enables | Evidence |
| --- | --- | --- |
| `REA_TSHARK_COMMAND` | packet capture (`inspect_packet_*`) | `src/server/createServer.ts` |
| `REA_TSHARK_PRLIMIT_COMMAND` | prlimit for packet capture | `src/pcap/PcapNativeBound.ts` |
| `REA_CAPINFOS_COMMAND` | pcap summaries (`inspect_pcap_capture`) | `src/pcap/PcapConfiguration.ts` |
| `REA_SIGROK_COMMAND` | signal recording (`decode_signal_recording`) | `src/server/createServer.ts` |
| `REA_WABT_BIN_DIRECTORY` | WASM (`inspect_wasm_artifact`) | `src/server/createServer.ts` |
| `REA_PWNTOOLS_PYTHON` | Recorded crash + binary layout | `src/server/createServer.ts` |
| `REA_BINWALK_COMMAND` | firmware regions | `src/server/createServer.ts` |
| `REA_UNBLOB_COMMAND` | firmware extraction | `src/server/createServer.ts` |
| `REA_WAKARU_COMMAND` | JavaScript source recovery | `src/server/createServer.ts` |
| `REA_BROWSER_EXECUTABLE` | web module resolution / browser lane | `src/server/createServer.ts` |
| `REA_EVM_PRLIMIT_COMMAND` | EVM prlimit (default `/usr/bin/prlimit`) | `src/evm/EvmoleInterfaceProvider.ts` |
| `REA_JADX_MCP_JAR` | Android static analysis | `src/server/registerSessionTools.ts`, `references/android-applications.md` |
| `REA_JADX_HEAP_MIB` | Android JVM heap | `references/android-applications.md` |
| `REA_JEB_MCP_URL`, `REA_JEB_MCP_TIMEOUT_MS` | JEB provider endpoint/timeout | `src/jeb/JebProvider.ts`, `docs/jeb-analysis.md` |
| `REA_APKTOOL_COMMAND` | Apktool launcher | `src/apktool/ApktoolConfiguration.ts` |
| `REA_ADB_PATH` | adb binary | `src/contracts/adb/adbToolContracts.ts` |

### Other

| Variable | Purpose | Evidence |
| --- | --- | --- |
| `REA_LOG_LEVEL` | logging level | `src/logger.ts` |
| `REA_REFERENCE_SECRET_PATTERNS_JSON` | mark sensitive paths during reference-source import | `docs/cli.md` |

## 5. Supported agent clients

From `docs/installation.md` "Supported agents" (client ID → display name):

| Client | ID |
| --- | --- |
| Claude Code | `claude_code` |
| Claude Desktop | `claude_desktop` |
| Codex | `codex` |
| Cursor | `cursor` |
| Gemini CLI | `gemini_cli` |
| Windsurf | `windsurf` |
| Devin | `devin` |
| OpenCode | `opencode` |
| Antigravity | `antigravity` |
| GitHub Copilot CLI | `copilot_cli` |
| Command Code | `commandcode` |
| Qwen Code | `qwen_code` |
| Kimi Code | `kimi` |
| VS Code | `vscode` |
| Grok Build | `grok_build` |
| OMP | `omp` |
| Pi | `pi` |
| Hermes | `hermes` |
| Qoder | `qoder` |
| Factory Droid | `droid` |
| Trae | `trae` |
| WorkBuddy | `workbuddy` |
| ZCode | `zcode` |
| DeepSeek Harness | `dsh` |
| Grok Bot | `grok_bot` |

Notes:

- `droid`, `dsh`, `kimi`, `qoder`, `trae`, `workbuddy`, `zcode` "require [the newer
  package]" — released from 6.5.0 and absent from the checked npm 6.4.0 package
  (`docs/installation.md`).
- `grok_bot` uses a chat registration step rather than local `mcp.json` (`SKILL.md`,
  `docs/installation.md`).
- Per-client config paths and troubleshooting (MSIX, tool search, etc.) are in
  `docs/client-configuration.md`.
- `rea doctor --provider ID` diagnoses the selected engine for Hopper, Ghidra, IDA and
  JADX only; other adapters (e.g. `pwntools-elf`) report requirements directly and are not
  accepted by `doctor --provider` (`docs/cli.md`).

## 6. Evidence semantics (shared)

Both surfaces return the same Evidence records (`docs/cli.md`,
`docs/mcp-contracts.md`):

- `evidence_id` = `ev_` + 64 lowercase hex characters.
- Records preserve artifact identity, source locations, observations, inferences,
  limitations and unresolved findings.
- `detail: summary | complete`; `summary` returns a linked `inspect_analysis_view` record
  with `normalized_result.parent_evidence_id`.
- Retained references (`{"kind":"retained-evidence","evidence_id":"ev_…"}`) are
  **connection-scoped**: `close_binary` clears them. Export a bundle before closing or
  supply portable inline Evidence on another connection
  (`references/javascript-applications.md`).
- `export_evidence_bundle` writes the complete session; `import_evidence_bundle` validates
  an existing one; exports preserve an existing destination unless `--overwrite` is
  explicit (`docs/cli.md`).
- Untrusted target content is marked; conclusions must separate observed / inferred /
  unknown.

## 7. Exit-status semantics (CLI)

From `docs/cli.md`, "Output and exit status":

| Status | Meaning |
| --- | --- |
| `0` | The operation completed. Its result may include partial evidence, warnings or unresolved questions. |
| `1` | The operation could not complete. Structured output identifies invalid input, permissions, cancellation, timeouts or another failure when available. |
| `128 + N` | Signal-derived status. An unhandled signal may have ended the process; a command may instead have handled the signal, settled cleanup, and assigned the same status (`130` for SIGINT, `143` for SIGTERM), possibly printing a structured `cancelled` result. |
| `141` | `128 + 13`: a writer terminated by SIGPIPE when a reader (e.g. `head`) closes early. The operation may have completed; only its output was declined. |

Additional CLI-contract statuses (`docs/cli.md`):

- Commands routed through `withCommandCancellation` set `130`/`143` after settle
  (process capture/compare, JavaScript analysis, selected browser/web/Electron commands,
  and the platform/provider families for Android/ADB, Apktool/JEB/Flutter, firmware, PCAP
  and signal analysis, WASM/EVM, Go/Rust, binary diagnostics, Frida, Cutter, objdump,
  Rizin and GDB).
- `inspect-artifact` returns a structured `cancelled` result but its direct cancellation
  path exits `1`.
- `setup --dry-run` returns `planned` and exits `0`; a cancelled setup also exits `0`;
  setup returns `1` for `needs_confirmation` or `needs_human`.
- `doctor` returns `1` when required checks in its selected readiness scope fail;
  unavailable optional providers remain informational.

Exit status and structured result are **separate signals** — treat a `cancelled` result and
the process status independently when scripting (`docs/cli.md`).

## 8. Practical differences (summary)

| Concern | MCP | CLI |
| --- | --- | --- |
| Discovery | `tools/list` is canonical; `binary_session` reports per-session availability | `rea --help`, per-command `--help`; `providers`, `capabilities` |
| Approval | Client may require per-call approval (e.g. Codex); REA itself has "no permission-grant handshake" | Host execution permissions only |
| Large results | 10 MiB frame budget → `resource_constraint`; page via `inspect_analysis_view` | Streams complete JSON; redirect to a file |
| Cross-command state | Retained session + references until `close_binary` | Each invocation independent; use `--snapshot` and saved Evidence files |
| Fallback | Needs registration + client support | Works without any MCP registration |

> Client-side approval is not REA readiness: "An advertised tool or successful doctor
> result does not override that client policy" (`references/connection-and-recovery.md`).
