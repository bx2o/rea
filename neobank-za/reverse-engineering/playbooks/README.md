# REA Playbooks — Analysing South African Banking / Neobank Targets

This directory holds **reverse-engineering playbooks** for the NeoBank ZA programme. Each
playbook is a repeatable workflow that drives [REA ("Reverse Engineer Anything")](https://github.com/morluto/rea)
— the MCP server + `rea` CLI analysed under [`../rea-analysis/`](../rea-analysis/README.md)
— against a specific class of shipped artefact. Playbooks describe **methodology**, never
results: we have not analysed any real bank app on this page.

> **Scope:** the REA surface used here is the one authoritatively inventoried in
> [`../rea-analysis/mcp-tool-names.tsv`](../rea-analysis/mcp-tool-names.tsv) and
> [`../rea-analysis/tool-catalog.md`](../rea-analysis/tool-catalog.md). Every tool and CLI
> command named in these playbooks is a real REA identifier. Tool semantics are summarised
> from the REA source contracts under `/workspace/rea/src/contracts/**`; consult the
> analysis set for the underlying evidence.

---

## ⚠️ Legal, ethical and authorised-use boundary

**Only analyse software that you own or that you are explicitly authorised in writing to
examine.** A bank's mobile app, web bundle, API traffic and infrastructure are almost
always covered by copyright, contract terms, and South African law (including the
Cybercrimes Act 19 of 2020, POPIA, and ECTA). Unauthorised access, interception or
circumvention is unlawful.

Rules for every playbook in this directory:

1. **Authorisation first.** A target moves out of `UNVERIFIED` in the
   [target register](../targets/target-register.md) **only** after a named owner records
   written authorisation. Playbooks are executed against authorised targets only.
2. **No protection circumvention.** These playbooks must **not** be used to defeat licence
   checks, DRM, code-signing, anti-cheat, or platform integrity controls; nor to extract
   credentials, private keys, or session tokens belonging to others. Where a bank app
   performs root/jailbreak detection or certificate pinning, we *observe and document the
   signal* as a defensive finding — we do not publish bypass recipes.
3. **Read-only by default.** Prefer read-only static inspection. Runtime observation tools
   (e.g. `capture_browser_scenario`, `observe_native_calls`, `instrument_with_frida`) run
   real code and can change state or touch the network; use them only against test
   accounts, test environments, or your own devices, and only when the authorisation
   covers active testing.
4. **No credential theft / no offence.** If a workflow would acquire or exfiltrate another
   party's secrets, it is out of scope. See [`fraud-and-security-review.md`](./fraud-and-security-review.md)
   for the defensive-vs-offensive line.
5. **Third-party SDKs and upstream engines are bring-your-own.** REA never installs JADX,
   apktool, Java, tshark, Frida, or a browser; you supply them legally under
   [`REA_JADX_MCP_JAR`, `REA_APKTOOL_COMMAND`, `REA_TSHARK_COMMAND` and friends](../rea-analysis/mcp-vs-cli.md).

## Evidence discipline (applies to every playbook)

REA is built around **Evidence records** and a strict epistemic split. Honour it:

- Every result carries an `evidence_id` of the form `ev_` + 64 lowercase hex characters.
- Classify every statement as **Observation** (a decoded fact at a source location),
  **Inference** (a labelled derivation), or **Unknown** (not established — never rendered
  as "false").
- **Never claim static analysis observed execution.** Runtime behaviour requires a runtime
  observation tool; static reachability is not execution.
- Start **summary-first** (`detail: "summary"`), then page with `inspect_analysis_view`
  using `normalized_result.parent_evidence_id` instead of repeating an expensive analysis.
- Keep a **finding ledger** (see [`evidence-ledger-template.md`](./evidence-ledger-template.md))
  linking each conclusion to an Evidence ID, confidence, and search boundary.
- Track residual unknowns with `record_unknown` / `update_unknown` / `verify_unknown_resolution`.
- **Export before close.** `export_evidence_bundle` writes the complete session; retained
  references are connection-scoped and `close_binary` clears them.

See [`../rea-analysis/methodology.md`](../rea-analysis/methodology.md) for the full
routing / summary-first / observe-infer-unknown methodology.

---

## How to choose a playbook by target type

| You have… | Target type | Playbook |
| --- | --- | --- |
| An Android `.apk` / `.aab` (bank or challenger app) | Android | [`android-banking-app-analysis.md`](./android-banking-app-analysis.md) |
| An iOS `.ipa`, a `.app` bundle, or a distributed app binary | Apple / iOS | [`ios-app-analysis.md`](./ios-app-analysis.md) |
| A web banking / onboarding site or SPA | Web / browser | [`web-banking-analysis.md`](./web-banking-analysis.md) |
| Captured API traffic (HAR, SAZ, mitmproxy, qlog, PCAP) | Network | [`network-capture-analysis.md`](./network-capture-analysis.md) |
| Captures + app strings to turn into an API/domain model | Backend/API | [`backend-and-api-reconstruction.md`](./backend-and-api-reconstruction.md) |
| A mandate to find *our own* app's weaknesses | Defensive security | [`fraud-and-security-review.md`](./fraud-and-security-review.md) |
| A competitor app to compare against our feature set | Competitive | [`competitive-feature-teardown.md`](./competitive-feature-teardown.md) |
| (any) the ledger you keep while doing the above | Cross-cutting | [`evidence-ledger-template.md`](./evidence-ledger-template.md) |

**Routing rule from REA:** pick the first tool from the *artefact the user supplied*
(`.agents/skills/reverse-engineer-anything/SKILL.md`, "Route the target first"). An APK →
`inspect_android_package`; an IPA → `open_binary` then `inspect_artifact`; a HAR → `inspect_web_network_capture`;
a live page → `list_browser_targets`.

## Playbook map

```
playbooks/
├── README.md                            ← you are here
├── android-banking-app-analysis.md      ← APK static workflow
├── ios-app-analysis.md                  ← IPA / .app workflow
├── web-banking-analysis.md              ← website / web-app workflow
├── network-capture-analysis.md          ← HAR / SAZ / mitmproxy / PCAP
├── backend-and-api-reconstruction.md    ← captures + strings → API model
├── fraud-and-security-review.md         ← defensive review (not exploitation)
├── competitive-feature-teardown.md      ← competitor vs our feature set
└── evidence-ledger-template.md          ← reusable ledger template
```

Adjacent material:

- REA analysis set (authoritative tool semantics): [`../rea-analysis/README.md`](../rea-analysis/README.md)
- Authoring our own REA tools: [`../custom-tools/README.md`](../custom-tools/README.md)
- Target register & per-target findings: [`../targets/target-register.md`](../targets/target-register.md),
  [`../targets/findings/README.md`](../targets/findings/README.md)

## Prerequisite summary

Install once (see [`../rea-analysis/mcp-vs-cli.md`](../rea-analysis/mcp-vs-cli.md) §4 and
`/workspace/rea/docs/installation.md`):

```bash
# Register the MCP server with your agent and install the bundled skill
npx rea-agents setup --client <id> --yes
# Verify registration (does not prove the live agent connection)
npx rea-agents doctor --client <id> --json
```

Bring-your-own engines are gated by absolute-path environment variables. Only the ones your
playbook needs:

| Playbook | Required settings |
| --- | --- |
| Android static | `REA_JADX_MCP_JAR` (absolute path to a headless JADX MCP JAR) + a JDK; `REA_APKTOOL_COMMAND` for `decode_android_resources`; optional `REA_JADX_HEAP_MIB` |
| ADB device pull | `REA_ADB_PATH` (absolute, or `adb` on `PATH`) |
| iOS / macOS | `open_binary` + native provider; `observe_native_*` require macOS + `get-task-allow`; `demangle_swift`/`inspect_macho` need no Hopper |
| Web / browser | `REA_BROWSER_EXECUTABLE` (absolute Chromium) for the browser lane; `REA_WAKARU_COMMAND` for JS source recovery |
| Network captures | `REA_TSHARK_COMMAND` + `REA_CAPINFOS_COMMAND` (+ util-linux `prlimit` on Linux) for PCAP and TShark field extraction; HAR/SAZ/qlog need no external engine |
| Native binaries | A deep provider (Hopper / Ghidra / IDA / Kuna), or `REA_OBJDUMP_COMMAND` / `REA_RIZIN_COMMAND` / `REA_GDB_COMMAND` |

Continue to a playbook above based on your target type.
