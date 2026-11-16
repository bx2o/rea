# REA Tool & Command Catalog

Complete inventory of the MCP tools REA registers, grouped by capability, with the CLI
command equivalents. Every tool name below is quoted from a contract file under
`/workspace/rea/src/contracts/**` (the authoritative registration source) or from the
docs cited inline. **No tool name has been invented**; where a family is gated or
unverifiable it is stated explicitly.

## How the inventory is assembled

- `src/contracts/toolContracts.ts` assembles the ordered public inventory `TOOL_CONTRACTS`
  from 37 contract groups (OFFICIAL, ENHANCED, NATIVE, BINARY_DIAGNOSTICS, ANALYSIS_VIEW,
  ARTIFACT, EVM, GO, RUST, WASM, SQLITE, CAPTURE, SIGNAL, MANAGED, ANDROID, APKTOOL, PCAP,
  FLUTTER, JEB, ADB, FIRMWARE, MANAGED_WORKFLOW, BROWSER_PROVIDER, ELECTRON,
  JAVASCRIPT_RUNTIME_OBSERVATION, APPLICATION, WEB_SCRIPT, WEB_RUNTIME, WEB_NETWORK_CAPTURE,
  JAVASCRIPT_RECOVERY, SESSION, CUTTER, REVERSE_ENGINEERING, GDB, RIZIN_DEBUG, FRIDA).
- `toolContract(name)` resolves a contract by name (`src/contracts/toolContracts.ts`).
- The published documentation cites a **172-tool** surface at a specific commit
  (`docs/client-configuration.md`: "with 172 tools…"). This source checkout enumerates the
  groups below; the count of *available* tools in a session is further reduced by the
  availability gating in `src/server/createServer.ts` (see the "Availability" column and
  [`architecture.md`](./architecture.md) §9).
- CLI equivalents are from `src/cliCommandNames.ts` (`CLI_COMMANDS`). Many MCP operations
  have **no dedicated CLI command**; those are listed in
  `MCP_TOOLS_WITHOUT_DEDICATED_CLI` (`src/cliCommandNames.ts`) and marked "(MCP-only)" below.

## Legend

- **Evidence** = the shape of the returned record (all tools return an Evidence record
  unless noted).
- **Availability** = the env gate that enables the family (from `src/server/createServer.ts`).
- **(MCP-only)** = the tool has no dedicated CLI command (`src/cliCommandNames.ts`).

---

## 1. Session lifecycle & identity

Source: `src/contracts/sessionToolContracts.ts`.

| Tool | Purpose | Key inputs | Output/Evidence | Notes / limitations |
| --- | --- | --- | --- | --- |
| `open_binary` | Bind a native/archive target to a session; select provider | `path`, optional `provider_id`, `snapshot_path`, `format`, `architecture`, `entry_point` | Session record + binding | One immutable binding per target; IDA binds original input, not `.idb`/`.i64` (`SKILL.md`) |
| `close_binary` | End the native session; optionally save snapshot | optional `snapshot_path`, `overwrite` | Close receipt (`primitive_entries`, `workflow_entries`, `evidence_records`) | Clears retained evidence references; save must succeed or session stays open (`docs/cli.md`) |
| `binary_session` | Report open target, provider, alignment, and full `tool_availability` | none | Session/availability record | Use `{}` for the complete grouped inventory and remediation (`references/native-and-artifacts.md`) |
| `get_navigation_context` | Current navigation context for the session | session-scoped | Context record | (MCP-only) |
| `inspect_address_context` | Aggregate facts around one address | address | Context record | (MCP-only) |

CLI equivalents: `open_binary`/`close_binary`/`binary_session` have no dedicated CLI
command (`MCP_TOOLS_WITHOUT_DEDICATED_CLI`); the CLI exposes `analyze`, `inspect`,
`function`, `decompile`, `xrefs`, `trace`, `search` (see §12).

## 2. Native binary analysis — official provider proxy

Source: `src/contracts/officialToolContracts.ts` (+ memory tools in
`src/contracts/hopperMemoryContracts.ts`). These map directly onto the selected engine's
operations. Provider must be bound (Hopper/Ghidra/IDA/Kuna).

| Tool | Purpose | Notes |
| --- | --- | --- |
| `annotate_native_function` | Set one function name and/or entry comments | Atomic, session-scoped; needs ≥1 change; clears when empty (`references/native-and-artifacts.md`) |
| `inspect_native_load_image` | Measured loaded bytes, mappings, relocations, entry | DOS MZ; verified import ≠ runtime behavior |
| `inspect_native_data_type` | Inspect a data type | Provider-dependent |
| `inspect_native_instruction` | Inspect one instruction | Provider-dependent |
| `resolve_native_call_targets` | Resolve call targets | Indirect targets may remain unknown |
| `read_function_instructions` | Read a function's instructions | CLI `instructions` |
| `procedure_pseudo_code` | Decompile a procedure | CLI `decompile`; accepts `procedure: "file-offset:0x…"` (Ghidra) |
| `procedure_assembly` | Assembly listing for a procedure | |
| `procedure_info` | Procedure metadata | |
| `procedure_address` | Address of a procedure | |
| `procedure_callees` / `procedure_callers` | Call relationships | |
| `procedure_references` | References in/out | `direction: incoming\|outgoing` default `outgoing` |
| `resolve_containing_procedure` | Which procedure contains an address | |
| `search_procedures` | Search procedures by name | CLI `search` |
| `search_strings` | Search strings | CLI `search` |
| `xrefs` | Cross-references | CLI `xrefs`; Kuna filters forwarding aliases |
| `address_name` | Name for an address | |
| `set_address_name` / `set_addresses_names` | Set address name(s) | Works with Ghidra; compact per-address booleans |
| `comment` / `set_comment` | Comments | |
| `inline_comment` / `set_inline_comment` | Inline comments | |
| `list_bookmarks` / `set_bookmark` / `unset_bookmark` | Bookmarks | |
| `list_documents` / `current_document` | Documents | |
| `list_names` | Names | |
| `list_procedures` | Procedures | |
| `list_segments` | Segments | |
| `list_strings` | Strings | |
| `current_address` / `current_procedure` / `goto_address` | Cursor navigation | |
| `next_address` / `prev_address` | Address stepping | |
| `search_bytes` | Search memory bytes | Memory tool |
| `read_bytes` | Read initialized analysis memory | Memory tool |
| `address_to_file_offset` | Anchor an address to file bytes | Memory tool; loader fixups can change a word |

All are in `MCP_TOOLS_WITHOUT_DEDICATED_CLI` except the ones mapped to `analyze`,
`inspect`, `decompile`, `instructions`, `xrefs`, `search` in
`CLI_COMMAND_TOOL_ALIASES` (`src/cliCommandNames.ts`).

## 3. Native binary analysis — enhanced workflows

Sources: `src/contracts/enhancedToolContracts.ts`, `src/contracts/functionWorkflowToolContracts.ts`.

| Tool | Purpose | CLI |
| --- | --- | --- |
| `binary_overview` | Target metadata/inventory summary | `analyze`, `inspect` |
| `analyze_function` | Full function dossier (procedure, pseudo-code, assembly, blocks, callers/callees, references, value flow) | `function` |
| `inspect_native_api` | Native API record | `inspect-native-api` |
| `inspect_native_dispatch_metadata` | Objective-C dispatch metadata | `inspect-native-dispatch-metadata` |
| `get_objc_classes` / `get_objc_protocols` | Objective-C classes/protocols | (MCP-only) |
| `batch_decompile` | Decompile several functions | (MCP-only) |
| `get_call_graph` | Call graph | (MCP-only) |
| `analyze_swift_types` | Swift type analysis | (MCP-only) |
| `find_xrefs_to_name` | Xrefs to a named symbol | (MCP-only) |
| `trace_feature` | Feature trace | `trace` |
| `trace_call_path` | Call-path trace | (MCP-only) |
| `trace_native_ui_action` | Trace a native UI action | `trace-native-ui-action` |
| `trace_native_values` | Trace native values | `trace-native-values` |

Limitations: addresses/pseudocode are observations not original source; provider
unavailability and unsupported metadata remain unknown
(`references/native-and-artifacts.md`).

## 4. Native platform (macOS / Apple)

Source: `src/contracts/native/nativeToolContracts.ts`.

| Tool | Purpose | Key inputs | Notes / limitations |
| --- | --- | --- | --- |
| `observe_native_ui` | Observe native UI | target-scoped | Launches/observes; distinct from static |
| `capture_native_ui_scenario` | Capture declared UI scenario | actions | Values are observations |
| `observe_native_calls` | Which functions/ObjC methods a Mach-O calls by breakpoints | breakpoints, `duration_ms`, `max_events` | Launches a new process under LLDB (target runs, may change files/network); hardened targets need `get-task-allow` (`references/native-and-artifacts.md`) |
| `inspect_macho` | Mach-O slices, load commands, imports/exports | optional `detail: summary` | Large frameworks return MBs; use summary + paging; `source_exhaustive: false` means unreturned symbols may exist |
| `inspect_signature` | Code signature | path | |
| `inspect_plist` | Plist contents | path | |
| `list_architectures` | Architectures in a binary | path | CLI `list-architectures` |
| `demangle_swift` | Demangle a Swift symbol | symbol | CLI `demangle-swift` |

## 5. Offline binary diagnostics

Source: `src/contracts/native/binaryDiagnosticsToolContracts.ts`.

| Tool | Purpose | Key inputs | Availability | Notes / limitations |
| --- | --- | --- | --- | --- |
| `inspect_pe_resources` | PE32/PE32+ resource type/name/language tree, icon groups | `path` | always | Portable, no target/engine; payloads opaque; no image decode or Windows loader simulation (`references/native-and-artifacts.md`) |
| `inspect_binary_layout` | Offline ELF sections, symbols, relocations, mitigations | `path` | `REA_PWNTOOLS_PYTHON` (linuxX64) | Caller-supplied pwntools; no disassembler DB; preserve inference/coverage limits |
| `inspect_recorded_crash` | Linux x86-64 ELF core: threads, signals, notes, registers | `path`, optional `include_debugger_context` | `REA_PWNTOOLS_PYTHON` | Historical PIDs never authorize live attach; missing notes remain unknown |

## 6. Analysis views (paging without re-analysis)

Source: `src/contracts/analysisViewToolContracts.ts`.

| Tool | Purpose | Key inputs | Notes |
| --- | --- | --- | --- |
| `inspect_analysis_view` | Project a summary, one section/module, or a stable page from retained or inline Evidence | `source` (`retained-evidence` or inline), `view` | Views: `summary`, `page`, `item`, `native`, `inventory`, `wasm`, `macho`, `interface-builder`, `api-surface`, `managed`, `managed-members`, `javascript`, `javascript-facts`, `capture`, `android` (`docs/mcp-contracts.md`, `references/*`) |

## 7. Artifacts & archives

Source: `src/contracts/artifactToolContracts.ts`.

| Tool | Purpose | Key inputs | Evidence | Notes / limitations |
| --- | --- | --- | --- | --- |
| `inspect_artifact` | Artifact graph & findings for ZIP/APK/IPA/MSIX/AppX/ASAR/DMG | `path` | Complete graph inline | Cite graph manifest IDs; symlinks/encrypted entries are inventory facts |
| `extract_artifact` | Materialize regular files to a fresh temp dir | optional `integrity_policy` | Materialized dir | Caller does not choose destination; DMG uses read-only mount on supported macOS |
| `decode_interface_builder` | Decode an Interface Builder (XIB/NIB) file | path | Structure | |
| `inspect_keyed_archive` | Keyed archive (NSKeyedArchiver) | path | Structure | |
| `inspect_asset_catalog` | Asset catalog | path | Structure | |
| `trace_dylib_resolution` | Resolve `@rpath`/`@loader_path`/`@executable_path` loads | `roots`, `architecture` | Load graph | System paths stay undetermined (dyld shared cache) |

An internal `inventory_artifact` name also appears in this file but is not part of the
public tool list (`src/contracts/artifactToolContracts.ts`).

## 8. JavaScript / Electron application analysis

Sources: `src/contracts/javascript/electronToolContracts.ts`,
`src/contracts/javascript/javascriptRuntimeObservationToolContracts.ts`,
`src/contracts/applicationToolContracts.ts`,
`src/contracts/javascript/javascriptRecoveryToolContracts.ts`.

| Tool | Purpose | CLI | Notes / limitations |
| --- | --- | --- | --- |
| `analyze_javascript_application` | Analyze operator-supplied ASAR/dir: artifact graph + findings | `analyze-javascript-application` | Retains full inventory but reads only selected `source_paths`; inputs never executed |
| `trace_application_feature` | Trace one seed (node/route/string/API/IPC/module) | `trace-application-feature` | Bidirectional traces include containment; do not treat all reached nodes as participants |
| `trace_javascript_semantics` | Trace JS semantics | `trace-javascript-semantics` | |
| `compare_application_versions` | Compare two versions | `compare-application-versions` | Accept only digest/source-map/fingerprint/semantic matches; module ordinals & minified names are not identity |
| `compare_source_to_bundle` | Compare historical source to bundle | `compare-source-to-bundle` | Requires full `HistoricalSourceGraph`, not the summary |
| `compare_javascript_export_shapes` | Compare one export's returned object shape across versions | `compare-javascript-export-shapes` | Static inference, not runtime; variants only via exact literal discriminant |
| `build_reconstruction_obligation_ledger` | Build a reconstruction obligation ledger | `build-reconstruction-obligation-ledger` | |
| `evaluate_reconstruction_coverage` | Evaluate reconstruction coverage | `evaluate-reconstruction-coverage` | |
| `project_android_application_graph` | Project Android app graph | `project-android-application-graph` | |
| `project_apple_application_graph` | Project Apple app graph (roots, extensions, XPC, frameworks, …) | `project-apple-application-graph` | Roles are path conventions, not parsed plists |
| `project_harmony_application_graph` | Project Harmony app graph | `project-harmony-application-graph` | |

Electron / runtime-observation (`src/contracts/javascript/electronToolContracts.ts`,
`…/javascriptRuntimeObservationToolContracts.ts`):

| Tool | Purpose | CLI |
| --- | --- | --- |
| `list_electron_targets` | List eligible local `file://` targets | `list-electron-targets` |
| `inspect_electron_page` | Inspect an Electron renderer | `inspect-electron-page` |
| `capture_electron_scenario` | Run declared Electron scenario | `capture-electron-scenario` |
| `inspect_electron_fuses` | Read packaged fuse bytes | `inspect-electron-fuses` |
| `list_javascript_runtime_targets` | List Node/Electron Inspector targets | `list-javascript-runtime-targets` |
| `observe_javascript_runtime` | Record script locations/execution contexts | `observe-javascript-runtime` |
| `recover_javascript_sources` | Recover readable source (Wakaru) | `recover-javascript-sources` |
| `reconcile_javascript_runtime` | Reconcile static vs runtime evidence | `reconcile-javascript-runtime` |
| `analyze_web_bundle` | Analyze a web bundle | `analyze-web-bundle` |

Availability: `recover_javascript_sources` needs `REA_WAKARU_COMMAND` (linuxX64);
`analyze_web_bundle`/browser family needs `REA_BROWSER_EXECUTABLE`
(`src/server/createServer.ts`).

## 9. Browser & web runtime

Sources: `src/contracts/browserToolContracts.ts`,
`src/contracts/browserScenarioToolContracts.ts`, `src/contracts/webRuntimeToolContracts.ts`,
`src/contracts/webScriptToolContracts.ts`, `src/contracts/webNetworkCaptureToolContracts.ts`.

| Tool | Purpose | CLI | Notes / limitations |
| --- | --- | --- | --- |
| `list_browser_targets` | List eligible HTTP(S) pages | `list-browser-targets` | Passive; `allowed_origins` optional filter |
| `inspect_web_page` | Inspect a selected page | `inspect-web-page` | Passive capture omits raw headers, credentials, storage values, raw bodies |
| `observe_web_session` | Observe a session | `observe-web-session` | Never claims REA clicked/navigated |
| `discover_webmcp_tools` | Inspect page-declared WebMCP inventory | `discover-webmcp-tools` | Untrusted inventory; never invoked |
| `compare_web_captures` | Compare two normalized captures/scenarios | `compare-web-captures` | |
| `capture_web_screenshot` | Capture pixels | `capture-web-screenshot` | |
| `compare_web_screenshots` | Compare screenshots | `compare-web-screenshots` | |
| `capture_browser_scenario` | Run declared browser actions (click/type/navigate) | `capture-browser-scenario` | Only tool that performs actions; connect mode navigates to `start_url` (can clear form state) |
| `observe_web_execution` | Execution coverage during a window | `observe-web-execution` | Resets counters, disables optimization |
| `inspect_web_event_listeners` | Listener source locations for a CSS match | `inspect-web-event-listeners` | Does not dispatch an event |
| `trace_web_source_location` | Trace a source location | `trace-web-source-location` | |
| `trace_web_module_imports` | Trace module imports | `trace-web-module-imports` | |
| `export_web_scripts` | Export captured scripts | `export-web-scripts` | |
| `inspect_web_network_capture` | Inspect HAR/SAZ/mitmproxy/qlog captures | `inspect-web-network-capture` | Preserve source digest across pages; no live attribution |

## 10. Waste/format-specific analysis

| Tool | Purpose | Source | Availability | CLI |
| --- | --- | --- | --- | --- |
| `inspect_wasm_artifact` | Offline WASM inspection (WABT); decoded WAT is representation, not source | `src/contracts/wasm/wasmToolContracts.ts` | `REA_WABT_BIN_DIRECTORY` | `inspect-wasm-artifact` |
| `compare_wasm_interfaces` | Compare two WASM interface evidences | `src/contracts/wasm/wasmComparisonContracts.ts` | same | `compare-wasm-interfaces` |
| `inspect_evm_interface` | EVM bytecode interface (selectors/mutability are inferred candidates) | `src/contracts/evm/evmToolContracts.ts` | `linuxX64` | `inspect-evm-interface` |
| `inspect_go_binary` | Embedded Go compiler/module/build metadata | `src/contracts/go/goToolContracts.ts` | always (no Go needed) | `inspect-go-binary` |
| `inspect_rust_binary` | Embedded cargo-auditable `.dep-v0` dependency metadata | `src/contracts/rust/rustToolContracts.ts` | always (no Rust needed) | `inspect-rust-binary` |
| `inspect_sqlite_database` | SQLite schema + optional rows from one table | `src/contracts/sqlite/sqliteToolContracts.ts` | Node ≥24.15/26+ | `inspect-sqlite-database` |

Limitations (all): absence of metadata is an unknown, not proof of absence; preserve
inference boundaries (`references/native-and-artifacts.md`, `docs/*-binaries.md`,
`docs/evm-bytecode.md`, `docs/wasm-artifacts.md`, `docs/sqlite-databases.md`).

## 11. Packet, signal & PCAP captures

| Tool | Purpose | Source | Availability | CLI |
| --- | --- | --- | --- | --- |
| `inspect_packet_fields` | Search installed TShark protocols/fields before choosing fields | `src/contracts/captures/captureToolContracts.ts` | `REA_TSHARK_COMMAND` (Linux) | `inspect-packet-fields` |
| `inspect_packet_capture` | Relay/field extraction from a recorded capture (TShark) | `src/contracts/captures/captureToolContracts.ts` | `REA_TSHARK_COMMAND` | `inspect-packet-capture` |
| `inspect_signal_decoders` | Search installed sigrok decoder IDs/help | `src/contracts/signals/signalToolContracts.ts` | `REA_SIGROK_COMMAND` | `inspect-signal-decoders` |
| `decode_signal_recording` | Decode a recorded logic/signal trace (sigrok-cli) | `src/contracts/signals/signalToolContracts.ts` | `REA_SIGROK_COMMAND` | `decode-signal-recording` |
| `inspect_pcap_client` | Inspect selected tshark/capinfos binaries | `src/contracts/pcap/pcapToolContracts.ts` | tshark + capinfos | `inspect-pcap-client` |
| `inspect_pcap_capture` | Address/DNS/SNI/protocol summaries from a pcap | `src/contracts/pcap/pcapToolContracts.ts` | Linux prlimit / Windows Job Objects | `inspect-pcap-capture` |

Notes: packet limits count input packets before filtering; default 50 matching frames;
these tools **read recordings and do not acquire live traffic**
(`SKILL.md` "Route the target first").

## 12. Managed (.NET / PE-CLI)

Sources: `src/contracts/managed/managedToolContracts.ts`,
`src/contracts/managed/managedWorkflowToolContracts.ts`.

| Tool | Purpose | CLI |
| --- | --- | --- |
| `inspect_managed_artifact` | Identity, PE/CLI, classification, module/MVID, frameworks (execution-free) | `inspect-managed-artifact` |
| `inspect_managed_members` | Members, signatures, CIL hashes, call edges, field accesses, user strings | `inspect-managed-members` |
| `inspect_managed_native_boundaries` | Managed→native boundary evidence | `inspect-managed-native-boundaries` |
| `compare_managed_members` | Compare member inventories | `compare-managed-members` |
| `verify_managed_native_boundaries` | Verify native boundary reconstruction | `verify-managed-native-boundaries` |
| `import_managed_reconstruction` | Import a reconstruction oracle result | `import-managed-reconstruction` |
| `project_managed_application_graph` | Project the managed app graph | `project-managed-application-graph` |

Limitations: never claim the assembly was loaded/executed/reflected; NativeAOT method
bodies require native analysis, and recovered types/pseudocode are not original C#
source (`references/native-and-artifacts.md`, `docs/managed-code-analysis.md`).

## 13. Android (static)

Sources: `src/contracts/android/androidToolContracts.ts`,
`src/contracts/apktool/apktoolToolContracts.ts`.

| Tool | Purpose | CLI | Notes |
| --- | --- | --- | --- |
| `inspect_android_package` | APK identity, manifest, permissions, SDK, counts | `inspect-android-package` | Requires JADX MCP JAR + JDK; never executes APK or verifies signatures |
| `search_android_classes` | Search class names (case-sensitive substring) | `search-android-classes` | Names may repeat (`duplicate_names`) |
| `inspect_android_class` | One class's methods/fields/inner classes | `inspect-android-class` | DEX prototypes; overload indices session-consistent |
| `inspect_android_method` | Decompile one method (smali fallback) | `inspect-android-method` | Needs `overload_index` on collisions |
| `trace_android_references` | Incoming static references to a class/method | `trace-android-references` | Counts containing nodes; reflection/dynamic loading unknown |
| `inspect_apktool_client` | Inspect selected apktool launcher | `inspect-apktool-client` | `REA_APKTOOL_COMMAND`; REA never installs Apktool/Java |
| `decode_android_resources` | Decode Android resources | `decode-android-resources` | |

## 14. Android devices (ADB)

Source: `src/contracts/adb/adbToolContracts.ts`. All are MCP tools with matching CLI
commands (`src/cliCommandNames.ts`). `inspect_adb_client` uses `REA_ADB_PATH`.

| Tool | Purpose |
| --- | --- |
| `inspect_adb_client` | Resolved adb binary/version/install path |
| `list_adb_devices` | List devices |
| `inspect_adb_device` | Device properties |
| `list_adb_packages` | List packages |
| `pull_adb_package` | Pull an installed package |
| `read_adb_logcat` | Read logcat |
| `inspect_adb_package` | Inspect a device package |
| `pull_adb_file` / `push_adb_file` | File transfer |
| `capture_adb_screen` | Screenshot |
| `list_adb_processes` / `list_adb_directory` | Process/dir listing |
| `list_adb_features` / `list_adb_services` | Feature/service listing |
| `inspect_adb_display` / `inspect_adb_window` | Display/window info |
| `read_adb_setting` | Read a setting |
| `collect_adb_bugreport` | Bugreport |
| `resolve_adb_packages` | Resolve package names |
| `install_adb_package` / `uninstall_adb_package` | Package install/remove |
| `start_adb_app` / `start_adb_activity` / `stop_adb_app` | App/activity control |

Note: `inspect_adb_client` "Never contacts devices and never starts the adb server"
(`src/contracts/adb/adbToolContracts.ts`).

## 15. JEB & Flutter

| Tool | Purpose | Source | CLI |
| --- | --- | --- | --- |
| `inspect_jeb_client` | Running JEB client engine/version/mode | `src/contracts/jeb/jebToolContracts.ts` | `inspect-jeb-client` |
| `open_jeb_project` | Open a JEB project | same | `open-jeb-project` |
| `list_jeb_units` | List JEB units | same | `list-jeb-units` |
| `decompile_jeb_item` | Decompile a JEB item | same | `decompile-jeb-item` |
| `identify_flutter_build` | Identify a Flutter build | `src/contracts/flutter/flutterToolContracts.ts` | `identify-flutter-build` |
| `inspect_dart_aot` | Inspect Dart AOT snapshot | same | `inspect-dart-aot` |

JEB requires a caller-started client at `REA_JEB_MCP_URL` (default
`http://127.0.0.1:8425/mcp`); "REA never installs or launches JEB"
(`src/contracts/jeb/jebToolContracts.ts`).

## 16. Firmware

Source: `src/contracts/firmware/firmwareToolContracts.ts`.

| Tool | Purpose | Availability | CLI |
| --- | --- | --- | --- |
| `inspect_firmware_regions` | Identify firmware regions (Binwalk) | `REA_BINWALK_COMMAND` (Linux) | `inspect-firmware-regions` |
| `extract_firmware` | Extract firmware (Unblob) to a caller-selected new dir | `REA_UNBLOB_COMMAND` (Linux) | `extract-firmware` |

## 17. Debuggers & instrumentation providers

| Tool | Purpose | Source | CLI |
| --- | --- | --- | --- |
| `list_cutter_sessions` | List Cutter sessions | `src/contracts/cutterToolContracts.ts` | `list-cutter-sessions` |
| `cutter_command` | Run a Cutter command | same | `cutter-command` |
| `inspect_with_objdump` | GNU objdump inspection | `src/contracts/reverseEngineeringToolContracts.ts` | `inspect-with-objdump`, `list-objdump-architectures` |
| `execute_rizin_command` | Run a Rizin static command | same | `execute-rizin-command` |
| `start_gdb_session` | Start a GDB/MI session | `src/contracts/gdbToolContracts.ts` | (MCP-only) |
| `gdb_console` | GDB console command | same | `debug-with-gdb` |
| `gdb_session_status` | GDB session status | same | (MCP-only) |
| `close_gdb_session` | Close GDB session | same | (MCP-only) |
| `start_rizin_debug_session` | Start a Rizin debug session | `src/contracts/rizinDebugToolContracts.ts` | (MCP-only) |
| `rizin_debug_command` | Rizin debug command | same | `debug-with-rizin` |
| `rizin_debug_session_status` | Rizin session status | same | (MCP-only) |
| `close_rizin_debug_session` | Close Rizin session | same | (MCP-only) |

Frida (`src/contracts/fridaToolContracts.ts`): `list_frida_devices`,
`list_frida_processes`, `start_frida_session`, `load_frida_script`,
`resume_frida_session`, `unload_frida_script`, `frida_session_status`,
`close_frida_session`, `instrument_with_frida`. CLI: `list-frida-devices`,
`list-frida-processes`, `instrument-with-frida`; the remaining session operations have
no dedicated CLI command.

Provider env: `REA_OBJDUMP_COMMAND`, `REA_GDB_COMMAND`, `REA_RIZIN_COMMAND`
(`docs/reverse-engineering-tools.md`, `src/composition/reverseEngineering.ts`).

## 18. Session evidence, comparison & verification

Source: `src/contracts/sessionToolContracts.ts`.

| Tool | Purpose | CLI |
| --- | --- | --- |
| `export_evidence_bundle` | Write the complete canonical session to a file | `evidence-export` |
| `import_evidence_bundle` | Validate/import an existing bundle | `evidence-import` |
| `get_evidence_bundle` | Summary/filtered view of retained evidence | `inspect-evidence-bundle` |
| `capture_process_scenario` | Run an executable and capture terminal/exit/filesystem | `capture-process` |
| `compare_process_captures` | Compare two process captures | `compare-process-captures` |
| `compare_artifacts` | Compare two artifacts | (MCP-only) |
| `compare_functions` | Compare two functions | (MCP-only) |
| `compare_bundles` | Compare two bundles | `compare-bundles` (alias) |
| `find_changed_behavior` | Find changed behavior | (MCP-only) |
| `build_call_path` | Build a call path | (MCP-only) |
| `correlate_static_and_runtime` | Correlate static & runtime evidence | (MCP-only) |
| `verify_reconstruction` | Verify a reconstruction | (MCP-only) |
| `list_unknowns` / `record_unknown` / `update_unknown` / `verify_unknown_resolution` | Residual unknown ledger | (MCP-only) |

CLI `compare` maps to `compare_bundles` via the alias, and `evidence-export`/`-import` are
also exposed. Result limitation classes (e.g. `resource_constraint`,
`provider_unavailable`, `resource_constraint` with `details.resource: "transport"`) are
shared across tools (`docs/mcp-contracts.md`).

## 19. MCP prompts (not tools)

`src/contracts/promptContracts.ts` defines named **prompts** (not callable tools):
`investigate_feature`, `compare_application_versions`, `verify_reconstruction`,
`trace_crash`, `audit_residual_unknowns`, `prepare_bounded_process_capture`.

## 20. CLI-only commands

Some CLI commands are not a 1:1 MCP tool (from `src/cliCommandNames.ts`):
`setup`, `doctor`, `uninstall`, `update`, `capabilities`, `providers`,
`import-reference-source`, `inspect-evidence-bundle`, plus the client/diagnostic helpers
described in `docs/installation.md`.

## Complements and boundaries

- **MCP-only tools** are listed verbatim in `MCP_TOOLS_WITHOUT_DEDICATED_CLI`
  (`src/cliCommandNames.ts`); the largest blocks are the official memory/document/cursor
  tools, the enhanced Objective-C/Swift/call-graph tools, session comparison/unknown tools,
  and the GDB/Rizin/Frida session primitives.
- **Availability is not the same as registration.** A complete catalog does not imply every
  operation is available; consult `binary_session.result.tool_availability`
  (`docs/cli.md`, `references/native-and-artifacts.md`).
- **Identifiers not confirmed:** no additional tool identifiers were asserted beyond those
  quoted from contract files and docs above. Where a family is provider-gated (EVM, WASM,
  packet, signals, firmware, JavaScript recovery, browser), its tools only appear when the
  corresponding environment gate is satisfied (see [`architecture.md`](./architecture.md) §9).
