# REA — Reverse Engineer Anything

Technical analysis of the REA project (MCP server + CLI) as cloned at `/workspace/rea`.
The content below is based on read-only inspection of that repository. Every claim is
tied to a source file path; where a fact could not be confirmed it is marked as such.

## What REA is

REA ("Reverse Engineer Anything") is a local reverse-engineering tool that exposes a
single set of application workflows through **two entry points**:

- a **one-shot CLI** (`rea`), and
- an **MCP (Model Context Protocol) stdio server** (`rea mcp`), used by coding agents.

Both entry points "use the same application workflows and evidence contracts"
(`docs/cli.md`). It is published to npm as `rea-agents` and registered in the MCP
registry as `io.github.morluto/rea`.

| Property | Value | Evidence |
| --- | --- | --- |
| Package name | `rea-agents` | `package.json` |
| MCP name | `io.github.morluto/rea` | `package.json`, `server.json` |
| Version (this checkout) | `6.5.0` | `package.json`, `server.json` |
| License | MIT | `package.json`, `LICENSE` |
| Transport | stdio | `server.json` |
| Package arguments | `["mcp"]` | `server.json` |
| Node engines | `^22.19.0 \|\| ^24.11.0 \|\| >=26.0.0` | `package.json` |
| Package manager | `npm@11.16.0` | `package.json` |
| Binaries | `rea`, `rea-agents` → `scripts/rea.mjs` | `package.json` |
| Tool count | 172 tools (advertised surface) | `docs/client-configuration.md` ("with 172 tools…"), `docs/mcp-contracts.md` |

## What REA does

REA analyzes **shipped artifacts and runtime behavior**, not source repositories. The
canonical skill states: "Skip REA for ordinary source-repository architecture
analysis" and use it "when a claim depends on a shipped binary or package,
decompilation, passive application runtime evidence, or comparison with behavior not
established by available source"
(`.agents/skills/reverse-engineer-anything/SKILL.md`).

Capability families (each backed by contracts under `src/contracts/**`):

| Family | Representative tools | Evidence |
| --- | --- | --- |
| Native binaries (decompile / xrefs / strings / memory) | `open_binary`, `analyze_function`, `binary_overview`, `procedure_pseudo_code`, `xrefs`, `search_strings` | `src/contracts/officialToolContracts.ts`, `src/contracts/enhancedToolContracts.ts`, `src/contracts/functionWorkflowToolContracts.ts` |
| Native platform (macOS) | `inspect_macho`, `inspect_plist`, `inspect_signature`, `list_architectures`, `demangle_swift`, `observe_native_calls` | `src/contracts/native/nativeToolContracts.ts` |
| Artifacts & archives | `inspect_artifact`, `extract_artifact`, `inspect_asset_catalog`, `decode_interface_builder`, `trace_dylib_resolution` | `src/contracts/artifactToolContracts.ts` |
| JavaScript / Electron | `analyze_javascript_application`, `trace_application_feature`, `compare_application_versions`, `inspect_electron_fuses` | `src/contracts/javascript/electronToolContracts.ts`, `src/contracts/applicationToolContracts.ts` |
| Browser / web runtime | `list_browser_targets`, `observe_web_session`, `capture_browser_scenario`, `inspect_web_network_capture` | `src/contracts/browserToolContracts.ts`, `src/contracts/browserScenarioToolContracts.ts`, `src/contracts/webNetworkCaptureToolContracts.ts` |
| Managed (.NET / PE-CLI) | `inspect_managed_artifact`, `inspect_managed_members`, `inspect_managed_native_boundaries` | `src/contracts/managed/managedToolContracts.ts` |
| Android | `inspect_android_package`, `search_android_classes`, `inspect_android_method`, `decode_android_resources` | `src/contracts/android/androidToolContracts.ts`, `src/contracts/apktool/apktoolToolContracts.ts` |
| Android devices (ADB) | `list_adb_devices`, `pull_adb_package`, `read_adb_logcat`, `capture_adb_screen` | `src/contracts/adb/adbToolContracts.ts` |
| Firmware | `inspect_firmware_regions`, `extract_firmware` | `src/contracts/firmware/firmwareToolContracts.ts` |
| Format-specific | `inspect_wasm_artifact`, `inspect_evm_interface`, `inspect_go_binary`, `inspect_rust_binary`, `inspect_sqlite_database`, `inspect_pe_resources`, `inspect_binary_layout`, `inspect_recorded_crash` | `src/contracts/wasm/`, `evm/`, `go/`, `rust/`, `sqlite/`, `native/binaryDiagnosticsToolContracts.ts` |
| Packet / signal captures | `inspect_packet_capture`, `inspect_pcap_capture`, `decode_signal_recording` | `src/contracts/captures/`, `src/contracts/pcap/`, `src/contracts/signals/` |
| Instrumentation | `instrument_with_frida`, `debug_with_gdb`, `debug_with_rizin`, `cutter_command`, `inspect_with_objdump` | `src/contracts/fridaToolContracts.ts`, `src/contracts/gdbToolContracts.ts`, `src/contracts/rizinDebugToolContracts.ts`, `src/contracts/cutterToolContracts.ts`, `src/contracts/reverseEngineeringToolContracts.ts` |

The full, grouped inventory is in [`tool-catalog.md`](./tool-catalog.md).

## How REA works end-to-end

1. **The skill/agent routes the target.** The first tool is chosen from the artifact
   type the user supplied (e.g. an ASAR → `analyze_javascript_application`; an APK →
   `inspect_android_package`; a native executable → `open_binary`). Target-free tools
   take their own explicit path and do not need `open_binary`
   (`.agents/skills/reverse-engineer-anything/SKILL.md`, "Route the target first").
2. **A composition root builds typed providers and one session.** `createServer`
   (`src/server/createServer.ts`) instantiates every provider, wires feature gating,
   and registers tools.
3. **Workflows run and produce an Evidence record.** Every result is an Evidence record
   with `evidence_id`, artifact identity, source locations, observations, limitations,
   inferences and unknowns (`docs/mcp-contracts.md`).
4. **Results are summary-first and paged.** Large records are retained under a
   `parent_evidence_id`; the caller projects a summary, one module/section, or a stable
   page with `inspect_analysis_view` instead of repeating analysis
   (`docs/mcp-contracts.md`, `.agents/skills/.../SKILL.md`, "Work summary-first").
5. **The session is closed.** A native session is ended with `close_binary`; retained
   references are cleared, so evidence should be exported before closing
   (`.agents/skills/.../references/javascript-applications.md`).

## Install and prerequisites

Quick start (from `README.md`, `docs/installation.md`):

```bash
npx rea-agents setup
```

`setup` plans and applies client registration plus installation of the bundled skill;
it supports `--dry-run --json` review, backups, and `--client <id>` scoping
(`docs/installation.md`).

Prerequisites:

- **Node.js** `^22.19.0 || ^24.11.0 || >=26.0.0` (`package.json`).
- **Native disassembly engines are bring-your-own.** Native binary analysis can use an
  existing Hopper, Ghidra, or IDA installation (`docs/index.md`); Kuna and Cutter are
  additional providers (`docs/kuna-provider.md`, `docs/reverse-engineering-tools.md`).
  REA setup "never installs or upgrades Node.js, npm, Homebrew, Java, Ghidra, IDA,
  JADX, Kuna, Binwalk, or Unblob" (`.agents/skills/.../SKILL.md`).
- **Static JavaScript analysis needs no native engine** (`docs/index.md`).
- **Android static analysis** needs a caller-supplied headless JADX MCP JAR and JDK
  (`src/server/registerSessionTools.ts`, `references/android-applications.md`).
- **Linux owned-process prerequisite**: REA's shared process supervisor requires a
  procps-compatible `ps` on `PATH` (`docs/installation.md`).
- Several providers are gated by absolute-path environment variables (for example
  `REA_TSHARK_COMMAND`, `REA_WABT_BIN_DIRECTORY`, `REA_BROWSER_EXECUTABLE`,
  `REA_WAKARU_COMMAND`) — see `src/server/createServer.ts` and
  [`mcp-vs-cli.md`](./mcp-vs-cli.md).

## Licensing and legality

- REA itself is **MIT** (`package.json`, `LICENSE`).
- Third-party licenses and upstream sources are tracked in `licenses/` and
  `THIRD_PARTY_NOTICES.md`.
- The project carries a **disclaimer**: commercial engines must be obtained legally by
  the operator (`README.md`, `DISCLAIMER.md`).

## Document set

| File | Scope |
| --- | --- |
| [`README.md`](./README.md) | This executive overview. |
| [`architecture.md`](./architecture.md) | Layered architecture, composition root, session/evidence/ledger model, providers, process supervision, provenance rules. |
| [`tool-catalog.md`](./tool-catalog.md) | Complete grouped inventory of MCP tools (and CLI commands), with purpose/inputs/outputs/evidence/limitations. |
| [`mcp-vs-cli.md`](./mcp-vs-cli.md) | How MCP registration differs from the CLI; env vars; supported clients; evidence and exit-status semantics. |
| [`methodology.md`](./methodology.md) | The REA investigation methodology (routing, summary-first, paging, observe/infer/unknown, corroboration, staged workflow, close). |

## Source map (evidence index)

| Area | Path |
| --- | --- |
| Executive overview | `/workspace/rea/README.md` |
| Repository guidelines | `/workspace/rea/AGENTS.md` |
| Layered diagram | `/workspace/rea/docs/architecture.mermaid` |
| MCP contracts | `/workspace/rea/docs/mcp-contracts.md` |
| CLI guide | `/workspace/rea/docs/cli.md` |
| Tool design | `/workspace/rea/docs/tool-design.md` |
| Installation | `/workspace/rea/docs/installation.md` |
| Client configuration | `/workspace/rea/docs/client-configuration.md` |
| RE tools (objdump/GDB/Rizin/Cutter) | `/workspace/rea/docs/reverse-engineering-tools.md` |
| Skill | `/workspace/rea/.agents/skills/reverse-engineer-anything/SKILL.md` |
| Contracts (tool inventory) | `/workspace/rea/src/contracts/**` |
| Composition root | `/workspace/rea/src/server/createServer.ts` |
| MCP server subclass | `/workspace/rea/src/server/EvidenceMcpServer.ts` |
| CLI command names | `/workspace/rea/src/cliCommandNames.ts` |
