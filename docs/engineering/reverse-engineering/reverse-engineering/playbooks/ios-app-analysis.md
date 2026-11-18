# Playbook — iOS App (IPA / .app Bundle) Analysis

**Target type:** a South African bank's iOS application distributed as an `.ipa`, or an
extracted `.app` bundle from an authorised device / archive. **Mode:** read-only static
inspection; some runtime observation is macOS-only. **Methodology only** — no real bank
IPA has been analysed here.

> **Authorisation:** only analyse software you own or are expressly authorised to examine.
> Do not use this playbook to defeat code-signing, DRM, FairPlay, or jailbreak-detection
> controls, nor to extract others' credentials. See [`README.md`](./README.md).

---

## 0. Routing and platform reality

iOS is an Apple platform. The first tool from an `.ipa`/`.app` is **`open_binary`**, then
optionally `inspect_artifact` for the graph (`SKILL.md`, routing table). Several tools are
**macOS-native** (they rely on macOS utilities and dyld/Mach-O conventions) and some
require a running device via Frida. Read the capability notes below before promising an
outcome.

```
MCP:  open_binary   { "path": "/abs/targets/Example.ipa" }
      → binds a provider and an immutable target; report binary_session
MCP:  inspect_artifact  { }            # archive graph: Payload/, codesig, frameworks, extensions
MCP:  binary_session    { }            # tool_availability + remediation
CLI:  rea inspect-artifact --path /abs/targets/Example.ipa --json
```

## 1. Application anatomy

```
MCP:  inspect_artifact  { }             # ZIP/IPA graph, integrity, unexplored branches
CLI:  rea inspect-artifact --path /abs/targets/Example.ipa --json
MCP:  project_apple_application_graph   # project authenticated IPA/.app inventory evidence
CLI:  rea project-apple-application-graph ...
```

`project_apple_application_graph` yields **execution-free** inventory: app roots, nested
bundles with **path-convention roles** (app extensions, XPC services, login items,
privileged helpers, system extensions, frameworks), launchd plists, exact component paths
and hashes, runtime-family hints, and path-based bridge hypotheses — **without parsing
plist/CMS semantics or claiming observed runtime calls** (`src/contracts/applicationToolContracts.ts`).

Expect a bank app to contain: the main app, **app extensions** (share, notification service,
widget), a **Watch app** occasionally, embedded **frameworks** (many bank SDKs), possibly an
**XPC service** and **privileged helper**. Enumerate these, then inspect the binaries.

## 2. Mach-O static inspection

```
MCP:  inspect_macho  { }                    # slices, load commands, imports, exports, deps, segments
MCP:  inspect_macho  { "detail": "summary" } # → parent_evidence_id for macho pages
MCP:  inspect_analysis_view { "source": {"kind":"retained-evidence","evidence_id":"ev_…"},
                              "view": {"kind":"macho", "slice": 0, "offset": 0, "limit": 500} }
MCP:  list_architectures  { }               # thin vs universal slices, offsets/sizes
MCP:  inspect_signature   { }               # code-signing identity, entitlements, hardened runtime
MCP:  inspect_plist       { "path": "Payload/Example.app/Info.plist" }
CLI:  rea inspect-macho --json
      rea list-architectures --json
      rea inspect-signature --json
      rea inspect-plist --path Payload/Example.app/Info.plist --json
```

`inspect_macho` returns megabytes for large frameworks: use `detail: "summary"` and page
with `inspect_analysis_view`. Note `source_exhaustive: false` means unreturned symbols may
exist. `inspect_signature` surfaces **entitlements** and **hardened-runtime state** — key to
understanding what the app can do (keychain sharing, app groups, associated domains).

**Observations to capture:** linked frameworks/dylibs (bank + third-party SDKs),
`@rpath` dependencies, entitlements, associated domains (server-side auth), `CFBundleURLTypes`
(deep links), `NSAppTransportSecurity` (cleartext exceptions), `UIBackgroundModes`.

## 3. Swift / Objective-C symbols

```
MCP:  demangle_swift  { "symbols": ["$s...", "$s..."] }     # no Hopper required
CLI:  rea demangle-swift --symbols '$s...' --json
```

Feed mangled symbols harvested from `inspect_macho` exports/imports. After `open_binary`
binds a deep provider you can also use the enhanced Objective-C/Swift tools:
`get_objc_classes`, `get_objc_protocols`, `analyze_swift_types`, `inspect_native_dispatch_metadata`,
and `search_strings` / `analyze_function` / `procedure_pseudo_code`.

**Banking seeds:** class/method name fragments `Auth`, `Login`, `OTP`, `Biometric`,
`LocalAuthentication`, `Keychain`, `Crypto`, `RootDetect`, `Jailbreak`, `Pinning`,
`Integrity`, `DeviceCheck`, `KYC`, `AML`, `Pay`, `Card`, `Transfer`.

## 4. Interface Builder, assets and keyed archives

```
MCP:  decode_interface_builder  { }                         # storyboards & nib object graphs
MCP:  decode_interface_builder  { "detail": "summary" }     # → interface-builder pages
MCP:  inspect_analysis_view { "source": {...}, "view": {"kind":"interface-builder", ...} }
MCP:  inspect_asset_catalog     { "offset": 0, "limit": 1000 }
MCP:  inspect_keyed_archive     { "path": "Contents/Resources/Model.plist" }
CLI:  rea decode-interface-builder --json
      rea inspect-asset-catalog --json
      rea inspect-keyed-archive --path Contents/Resources/Model.plist --json
```

- `decode_interface_builder` decodes storyboard/nib archives into a bounded object,
  hierarchy and connection graph. Unrecognised archive classes and **unresolved code
  handlers remain explicit unknowns** (custom classes compiled in Swift/Obj-C are named but
  not decompiled by this tool).
- `inspect_asset_catalog` reads compiled `Assets.car` metadata (paginated) — UI text/images,
  brand strings, and sometimes onboarding copy.
- `inspect_keyed_archive` reads `NSKeyedArchiver` plists as object tables — useful for
  bundled configuration/model files. It never instantiates classes.
- `trace_dylib_resolution { "roots": [...], "architecture": "arm64" }` resolves
  `@rpath`/`@loader_path`/`@executable_path` loads for the bundle; **system paths outside the
  analysed root stay undetermined** (dyld shared cache).

## 5. What is / isn't possible statically

| Question | Static capability | Tool |
| --- | --- | --- |
| Entitlements & capabilities? | Yes (static) | `inspect_signature` |
| Linked frameworks / SDK inventory? | Yes (static) | `inspect_macho`, `inspect_artifact` |
| Swift/ObjC symbol names? | Yes (static) | `demangle_swift`, `get_objc_*` (provider) |
| UI hierarchy of screens? | Partial (storyboards; unresolved custom handlers) | `decode_interface_builder` |
| Asset/UI text? | Yes (metadata) | `inspect_asset_catalog` |
| Bundled model/config plists? | Yes | `inspect_keyed_archive`, `inspect_plist` |
| **Actual API endpoints** reachable at runtime? | **No** — needs runtime/network capture | [`network-capture-analysis.md`](./network-capture-analysis.md) |
| **Certificate pinning enforced at runtime?** | Static signal only, actual behaviour is runtime | code search + capture |
| **Keychain contents at runtime?** | **No** — not a static artefact | out of scope |
| **Jailbreak-detection behaviour?** | Static strings/classes only | `search_strings` |

Do not present static reachability as observed execution — REA's core rule.

## 6. Runtime observation (macOS only, authorised testing)

Only when the authorisation covers active testing on a device you control, and only on
macOS where the tooling exists:

```
MCP:  observe_native_calls  { "breakpoints": [ {"kind":"objc-method","class_name":"NSURLSession",
                              "selector":"dataTaskWithRequest:completionHandler:"} ],
                              "duration_ms": 5000, "backtrace_frames": 4 }
MCP:  observe_native_ui       { "pid": 123, "window_id": 456 }
MCP:  capture_native_ui_scenario { "pid": 123, "window_id": 456,
                              "steps": [ { "kind": "wait", "milliseconds": 100 } ] }
CLI:  rea observe-native-calls ...
      rea observe-native-ui ...
      rea capture-native-ui-scenario ...
```

Caveats: `observe_native_calls` launches the target **as an owned process under LLDB**; the
process runs with your permissions, may change files, show UI and use the network, and a
**hardened-runtime target needs the `get-task-allow` entitlement** or it will not attach.
System app binaries lack it. REA kills the process at `max_events`/`duration_ms` and reports
exit status and unresolved breakpoints. On a physical iOS device, the iOS path is device
instrumentation via Frida (`list_frida_devices`, `list_frida_processes`, `start_frida_session`,
`load_frida_script`, `instrument_with_frida`) — this is active instrumentation under a
device-testing authorisation.

## 7. Ledger, unknowns, export

Use [`evidence-ledger-template.md`](./evidence-ledger-template.md). Track unresolved items
(e.g. "which SDK owns framework X", "is pinning enforced") with `record_unknown`. Export
with `export_evidence_bundle` / `rea evidence-export` **before** `close_binary` — retained
references are cleared on close.

## 8. Limitations

- Many tools are **macOS-specific**; on Linux/Windows the Mach-O annotation tools may be
  unavailable — check `binary_session.result.tool_availability`.
- Static analysis cannot see runtime keys, Keychain state, or enforced pinning behaviour.
- Large frameworks are paged; `source_exhaustive: false` means coverage is not exhaustive.
- Swift/ObjC recovery is observation-level; recovered types/pseudocode are not original source.

---

**Related:** [`android-banking-app-analysis.md`](./android-banking-app-analysis.md) ·
[`network-capture-analysis.md`](./network-capture-analysis.md) ·
[`backend-and-api-reconstruction.md`](./backend-and-api-reconstruction.md) ·
[`../rea-analysis/tool-catalog.md`](../rea-analysis/tool-catalog.md)
