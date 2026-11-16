# Playbook — Android Banking App Static Analysis

**Target type:** a South African bank or challenger-bank Android application, shipped as an
`.apk` (or extracted from an `.aab`). **Mode:** read-only static inspection. **This is a
methodology, not a result** — no real bank APK has been analysed for this document.

> **Authorisation:** only analyse an APK you own or are expressly authorised to examine.
> Never use this playbook to defeat licence checks, DRM, or integrity controls, and never
> to harvest credentials or keys. See the boundary in [`README.md`](./README.md).

---

## 0. Routing

An APK is an Android artefact → **first tool is `inspect_android_package`**
(`SKILL.md`, "Route the target first"). Do **not** start with `open_binary` unless you
also want the archive graph (`inspect_artifact`). The Android family never executes the
APK and never verifies signatures (`src/contracts/android/androidToolContracts.ts`).

## 1. Prerequisites (bring-your-own)

REA installs **none** of these; it only uses what you point it at
(`references/android-applications.md`, `/workspace/rea/docs/android-analysis.md`):

| Need | Why | Setting |
| --- | --- | --- |
| **JDK** (Java) | runs the JADX engine | `java` on `PATH` |
| **Headless JADX MCP JAR** | the decompiler backend | `REA_JADX_MCP_JAR` = absolute path to the JAR |
| **JADX JVM heap** (optional) | large banking APKs | `REA_JADX_HEAP_MIB` |
| **apktool** | `decode_android_resources` (readable manifest, strings) | `REA_APKTOOL_COMMAND` = absolute launcher, or `apktool` on `PATH` |
| **adb** (optional) | pulling an installed package from your own device/emulator | `REA_ADB_PATH` |

Confirm the environment reads correctly before analysis:

```
MCP:  inspect_apktool_client          (no input)         → resolved apktool command/version
CLI:  rea inspect-apktool-client
MCP:  binary_session  {}                                   → full tool_availability + remediation
```

If the Android tools are absent, `binary_session` returns reasons and remediation; read
`references/connection-and-recovery.md` rather than re-running setup blindly.

## 2. Obtain the APK

You may only obtain an APK through lawful means:

- **Play Store (admittable)**: install on your own device and pull it, **or** obtain the
  published artefact through a channel your organisation is licensed to use. REA does not
  download apps.
- **Pulled from your own device / emulator** with ADB (read-only):

  ```
  MCP:  list_adb_devices
  MCP:  list_adb_packages   { "serial": "<serial>", "scope": "third_party" }
  MCP:  pull_adb_package    { "serial": "<serial>", "package": "za.co.example.bank",
                              "output_directory": "/tmp/rea-pulls" }
  ```
  ```
  CLI:  rea list-adb-devices
        rea list-adb-packages --serial <serial> --scope third-party
        rea pull-adb-package --serial <serial> --package za.co.example.bank --output-directory /tmp/rea-pulls
  ```

  Pull the **base APK plus every split** (App Bundles split by ABI/density/locale); a single
  base APK may omit resources and native libraries. `pull_adb_package` digests every pulled
  file (SHA-256) and keeps per-file failure reasons for a partial pull.

- **User-supplied**: an APK your team possesses under authorisation.

Record the SHA-256 of every APK you use; it is your artefact identity in the ledger.

## 3. Package identity, manifest, SDK and permissions

```
MCP:  inspect_android_package  { "path": "/abs/targets/Example.apk" }
CLI:  rea inspect-android-package /abs/targets/Example.apk --json
```

Produces: package name, min/target/compile SDK, declared permissions, decoded manifest,
and class/resource counts; engine identity is retained. For a large APK, request the
retained summary and page the exact manifest later:

```
MCP:  inspect_android_package  { "path": "...", "detail": "summary" }
      → normalized_result.parent_evidence_id = ev_…
MCP:  inspect_analysis_view  { "source": { "kind": "retained-evidence", "evidence_id": "ev_…" },
                               "view": { "kind": "android", "facet": "manifest", "offset": 0, "limit": 500 } }
CLI:  rea inspect-analysis-view ...
```

**Observations to capture:** requested permissions (SMS/contacts/location/biometric
adjacency, `INTERNET`), exported components (from the manifest), `networkSecurityConfig`
reference, `usesCleartextTraffic`, backup flag, and the list of declared `Activity`/
`Service`/`Receiver`/`Provider` entries. These feed the attack-surface section of
[`fraud-and-security-review.md`](./fraud-and-security-review.md).

## 4. Java/Kotlin code inspection

```
MCP:  search_android_classes   { "path": "...", "query": "Login" }     # empty query lists all
      → note duplicate_names; names may repeat
MCP:  inspect_android_class    { "path": "...", "class_name": "za.co.example.bank.LoginActivity" }
      → methods/fields/inner classes, DEX prototypes
MCP:  inspect_android_method   { "path": "...", "class_name": "...", "method_name": "onLogin" }
      → decompiled body (smali fallback); pass explicit "overload_index" on collapse
MCP:  trace_android_references { "path": "...", "class_name": "..." }  # or add method_name + overload_index
```

```
CLI:  rea search-android-classes --path ... --query Login --json
      rea inspect-android-class   --path ... --class-name za.co.example.bank.LoginActivity --json
      rea inspect-android-method  --path ... --class-name ... --method-name onLogin --json
      rea trace-android-references --path ... --class-name ... --json
```

Semantics to respect (`src/contracts/android/*`, `references/android-applications.md`):

- Static observations only; **no execution and no policy enforcement**.
- `inspect_android_method` needs a valid `overload_index` when names collide — take it from
  the class inventory, never guess.
- `trace_android_references` counts **containing nodes**, not invoke instructions; source
  line and containing DEX offset remain **unknown**. `direct_invokes` carries exact DEX
  code-unit offsets when available; `direct_invokes_exhaustive: false` marks byte-bounded
  partial evidence, and `null` means coverage unknown.
- Reflection and dynamic loading stay **unknown** — a negative search is bounded, not absence.

**Banking-oriented search seeds** (examples, adapt if the target's model differs): package
fragments `login`, `auth`, `otp`, `pin`, `biometric`, `kyc`, `acam`, `fica`, `pay`,
`beneficiary`, `transfer`, `card`, `crypto`, `keystore`, `root`, `emulator`, `certificate`,
`ssl`, `pin`, `integrity`, `safetynet`, `play`, `token`, `session`.

## 5. Decode resources (readable manifest + strings)

```
MCP:  decode_android_resources  { "path": "/abs/targets/Example.apk" }           # default locale
MCP:  decode_android_resources  { "path": "...", "locale": "af" }                # one South African locale
CLI:  rea decode-android-resources --path ... [--locale af] --json
```

Runs `apktool d --no-src` in a provider-owned workspace (removed afterwards), SHA-256s the
APK first, and returns the readable `AndroidManifest.xml`, `apktool.yml` version/SDK facts,
up to 2000 string resources for the selected locale, available locales, and the decoded
file count. Smali is **skipped** (Java-source recovery belongs to JADX). Useful for end-user
copy, feature names, and locale coverage (EN/ZU/XH/AF/…).

## 6. Flutter detection and Dart AOT

Many SA neobank apps are Flutter. Detect it without any engine:

```
MCP:  identify_flutter_build  { "path": "/abs/targets/Example.apk" }
CLI:  rea identify-flutter-build /abs/targets/Example.apk --json
```

Parses `lib/<abi>/libapp.so` AOT sections: the Dart VM snapshot hash (vm + isolate,
cross-checked), per-ABI library digests, the engine `libflutter.so` GNU build-id, and any
Dart version / toolchain strings. REA performs **no SDK lookup** — the snapshot hash is the
key you map externally.

```
MCP:  inspect_dart_aot  { "path": "/abs/targets/Example.apk" }           # preferred ABI
MCP:  inspect_dart_aot  { "path": "...", "abi": "arm64-v8a" }
CLI:  rea inspect-dart-aot /abs/targets/Example.apk --json
```

Returns the four AOT snapshot symbols, headers, snapshot hash, and a **bounded string-pool
projection** (package: URIs, dart: URIs, identifier-like tokens) exposing dependency
structure. The string pool is a **byte-pattern observation**, not deserialized semantics —
typed class/function recovery needs an SDK-specific parser and is out of REA's scope.

## 7. Native libraries

Bank apps ship native libs (root/anti-tamper, crypto, fraud SDKs). Route them as native
targets:

```
MCP:  inspect_artifact  { "path": "lib/arm64-v8a/libfrida-detector.so" }   # after extracting
CLI:  rea inspect-artifact --path <...>.so --json
MCP:  open_binary  { "path": "/abs/extracted/libarm64/libfoo.so" }         # bind a deep provider
MCP:  binary_overview
MCP:  search_strings  { "query": "certificate" }        # endpoints, jailbreak/root text
MCP:  list_procedures                                   # then analyze_function / procedure_pseudo_code
CLI:  rea analyze /abs/lib/... ; rea search --query certificate ; rea decompile <proc>
```

You may also see embedded **Go** (`inspect_go_binary`), **Rust** (`inspect_rust_binary`),
or **WASM** (`inspect_wasm_artifact`) components; those tools need no engine (WASM needs
`REA_WABT_BIN_DIRECTORY`). Absence of metadata is an **unknown**, not proof of absence.

## 8. Safety, root and tamper-detection signals

Document these as **defensive observations** (never as bypass targets):

- Java/Kotlin classes: search for `RootBeer`, `SafetyNet`, `Play Integrity`, `Frida`,
  `emulator`, `isDebugged`, `magisk`, `test-keys`.
- Manifest/network: `usesCleartextTraffic=false`, a `networkSecurityConfig`, and the
  presence of a certificate-pinning library (OkHttp `CertificatePinner`, TrustKit,
  `network_security_config` pin-set).
- Native: strings/procedures referencing `ptrace`, `frida-server`, `/system/xbin/su`.

**Observation vs inference:** seeing a `CertificatePinner` call site is an **observation**;
concluding "pinning is enforced for all endpoints" is an **inference** that requires the
hostname/pin evidence. Record both distinctly.

## 9. Certificate pinning & network security signals

Pinning evidence is static only here. Confirm the *actual* TLS behaviour is a runtime
question for [`network-capture-analysis.md`](./network-capture-analysis.md). Statically
look for pin sets in `res/xml/network_security_config.xml` (via
`decode_android_resources`), and `CertificatePinner.Builder().add(...)` call sites in
`inspect_android_method` output.

## 10. Third-party SDK inventory

Banking apps embed many SDKs (payments, fraud, analytics, push, crash, ad). Build the
inventory from package prefixes:

```
MCP:  search_android_classes  { "path": "...", "query": "com." }     # then filter by vendor
```

Typical vendors to bucket: Google/Firebase, Facebook, Adjust/AppsFlyer, Braze, Datadog,
New Relic, Sentry, OneSignal, Stripe/PayPal/Peach/Ozow/Yoco, Entersekt/InAuth/LexisNexis
(device-fraud), and SA-specific SDKs. Record **package → purpose → privacy note**. This is
the input to the candidate `summarise_third_party_sdk_risk` tool discussed in
[`../custom-tools/example-banking-tools.md`](../custom-tools/example-banking-tools.md).

## 11. Secret and endpoint discovery

Static scanning of decompiled code and resources for: API base URLs, hardcoded keys/tokens,
Firebase config, Google API keys, S3/Blob bucket names, and deep-link schemes. Guidance:

- Treat any hardcoded secret as a **finding to report to the app owner**, never to use.
  Do not exfiltrate or authenticate with it.
- Endpoints discovered here feed [`backend-and-api-reconstruction.md`](./backend-and-api-reconstruction.md).
- A string match is an **observation**; "this key is live/valid" is an **inference**
  requiring corroboration the playbook does not authorise.

## 12. Ledger, unknowns, export

- File each claim in the ledger ([`evidence-ledger-template.md`](./evidence-ledger-template.md)).
- Track open questions with `record_unknown` / `update_unknown`.
- **Export before closing** any native session you opened:
  `export_evidence_bundle` (MCP) / `rea evidence-export` (CLI) → then `close_binary`.

## 13. Limitations (state these in every report)

- Static only: no execution, no signature verification, no policy enforcement.
- `trace_android_references` is containing-node based; reflection/dynamic loading unknown.
- Flutter/Dart string pools are byte-pattern observations, not semantically decoded.
- Obfuscated names (R8/ProGuard) may render class/method search ineffective — record as a
  coverage limitation, not absence.

---

**Related:** [`ios-app-analysis.md`](./ios-app-analysis.md) ·
[`network-capture-analysis.md`](./network-capture-analysis.md) ·
[`fraud-and-security-review.md`](./fraud-and-security-review.md) ·
[`../rea-analysis/tool-catalog.md`](../rea-analysis/tool-catalog.md)
