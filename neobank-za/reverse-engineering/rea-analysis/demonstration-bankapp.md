# REA Worked Demonstration — Reverse-Engineering a Demo Banking App

- **Program:** Project Umoya · **Council:** C11 Dev-Engineering · **Date:** 2026-10-16
- **Purpose:** prove the REA toolchain works end-to-end on a *self-owned* app, and model the exact method we will use on authorised bank-app targets.
- **Status:** ✅ executed, real output captured.

> **Ethics & scope.** This demonstration analyses a fixture **we wrote ourselves**. Per [playbooks/README.md](file:///workspace/neobank-za/reverse-engineering/playbooks/README.md), we only analyse software we own or are explicitly authorised to examine. No real bank app was analysed, and no findings about any real institution are claimed here.

---

## 1. The fixture

A deliberately small **Electron/CommonJS banking prototype** with the four subsystems a real mobile/web bank exposes: auth, KYC, payments, and a shared HTTP core.

```
/tmp/bankapp-demo
├── package.json                # main: src/main.js
└── src
    ├── main.js                 # Electron main: BrowserWindow + ipcMain handlers
    ├── preload.js              # contextBridge exposes window.bank {login, pay}
    ├── auth/login.js           # login() -> verifyKyc() + POST /auth/login
    ├── kyc/verify.js           # verifyKyc() -> POST /kyc/verify
    ├── payments/pay.js         # initiatePayment() -> POST /payments/payshap
    └── core/http.js            # shared POST helper -> https://api.demo-bank.co.za
```

A copy is kept in the deliverable at [targets/fixtures/demo-bankapp/](file:///workspace/neobank-za/reverse-engineering/targets/fixtures/demo-bankapp).

Deliberate design points (so REA has something real to find):
- **Electron boundary:** renderer (preload/contextBridge) ↔ main (`ipcMain.handle`), 2 literal channels (`auth:login`, `pay:initiate`).
- **Cross-module requires:** a small dependency cycle (`login → kyc`, `pay → login`) to test graph reconstruction.
- **A hardcoded API base URL** in `core/http.js` — the kind of fact a teardown is looking for.
- **A payments rail name** (`/payments/payshap`) — PayShap is South Africa's instant-payment rail, so this mirrors the local domain.

---

## 2. Command

```bash
cd /workspace/rea
node scripts/rea.mjs analyze-javascript-application /tmp/bankapp-demo --json
```

REA streamed 20 progress phases to stderr and emitted a single canonical **Evidence** JSON record on stdout (522,787 bytes). Filed at [findings/demo-bankapp/evidence-export.json](file:///workspace/neobank-za/reverse-engineering/targets/findings/demo-bankapp/evidence-export.json).

---

## 3. Evidence record (observed)

| Field | Value |
|---|---|
| `evidence_id` | `ev_cc7266b3c86b2defce6913519bcb1f66b55b9d59688e4cf01ea6723e706b3e64` |
| `operation` | `analyze_javascript_application` |
| `predicate_type` | `rea.javascript-application-analysis` |
| `provider.id` | `rea-javascript-application` (v1) |
| `subject.name` | `bankapp-demo` |
| `subject.format` | `directory` |
| `subject.digest.sha256` | `4d8f1388cb611e4a4cfed8f56940af8c8f1d155a318201344e6de00ef523ac0f` |
| `parameters.integrity_policy` | `fail` |
| `normalized_result.integrity_contradictions` | *(none reported)* |

### 3.1 Application graph summary (Electron boundaries)

| Signal | Count | Meaning |
|---|---|---|
| `browser_windows` | **1** | one `new BrowserWindow` recovered |
| `explicit_web_preferences` | **1** | `webPreferences: { preload }` recovered |
| `preload_entrypoints` | **1** | `src/preload.js` identified as preload |
| `context_bridge_apis` | **1** | one `contextBridge.exposeInMainWorld` call |
| `exposed_api_members` | **2** | `login`, `pay` |
| `ipc.operations` | **4** | IPC call sites |
| `ipc.literal_channels` | **2** | `auth:login`, `pay:initiate` |
| `ipc.dynamic_channel_operations` | **0** | no obfuscated/dynamic channels |
| `ipc.renderer_transmissions` | **2** | renderer → main invokes |
| `ipc.main_handlers` | **2** | `ipcMain.handle` handlers |
| `ipc.paired_renderer_transmissions` | **2** | both sends paired to a handler |
| `ipc.unpaired_literal_renderer_transmissions` | **0** | no dangling channels |
| `sender_validation_observations` | **0** | no `event.senderFrame` validation found |

Every value matches the fixture by construction — REA reconstructed the graph **exactly**, with **zero unpaired channels**.

### 3.2 Parse statistics

| Statistic | Value |
|---|---|
| `relevant_files` | 7 |
| `parsed_javascript_files` | 6 |
| `parse_failures` | 0 |
| `visited_ast_nodes` | 280 |
| `findings` | 35 |
| `text_bytes_read` | 1,440 |
| `invalid_utf8_files` | 0 |
| `nested_asar_containers` | 0 |

### 3.3 Limitations REA itself declared (verbatim themes)

- CommonJS/ESM bindings were recovered from **inert syntax** and resolved only within the inventoried container.
- Electron relationships are **derived from inert syntax**; runtime registration, reachability, defaults and enforcement **remain unproven**.
- JavaScript and HTML were **parsed as inert text; bundle bootstrap code was never executed**.
- Static paths/relationships may remain unresolved when dynamic or obfuscated.

**Interpretation:** REA correctly refuses to claim that static analysis observed execution. `sender_validation_observations: 0` is a **bounded negative** — it means no `senderFrame` validation was *recovered statically*, not that none exists at runtime. This is the observe/infer/unknown discipline in action.

---

## 4. What this proves, and how we reuse it

| Proven capability | Reused for real targets |
|---|---|
| Static application graph without executing the target | Receiving a supplied/authorised bank app bundle and mapping its modules |
| Electron/JS boundary reconstruction (preload, contextBridge, IPC) | Desktop/web banking clients |
| AST-level fact extraction with counts (`findings: 35`) | Secret/endpoint/SDK discovery — see [android-banking-app-analysis.md](file:///workspace/neobank-za/reverse-engineering/playbooks/android-banking-app-analysis.md) |
| Immutable, hashed, digest-addressed Evidence + declared limitations | Audit trail for every teardown (see [evidence-ledger-template.md](file:///workspace/neobank-za/reverse-engineering/playbooks/evidence-ledger-template.md)) |
| Deterministic re-run (same `subject.sha256` → comparable Evidence) | `compare-application-versions` for competitor version diffs |

### Findings ledger (demo)

| # | Question | Tool | Evidence ID | Observation | Inference | Unknown | Confidence |
|---|---|---|---|---|---|---|---|
| 1 | What are the app's renderer↔main boundaries? | `analyze_javascript_application` | `ev_cc7266b3…` | 1 window, 1 preload, 1 contextBridge w/ 2 members, 4 IPC ops over 2 literal channels | Minimal surface; no dynamic channels | Runtime enforcement unproven | High (static) |
| 2 | Is IPC sender validated? | `analyze_javascript_application` | `ev_cc7266b3…` | `sender_validation_observations: 0` | No static validation found | Could be validated at runtime/build | Medium (bounded negative) |
| 3 | Where does the app call out to? | `analyze_javascript_application` | `ev_cc7266b3…` | Hardcoded base `https://api.demo-bank.co.za`; paths `/auth/login`, `/kyc/verify`, `/payments/payshap` | PayShap rail in use | Auth scheme, mTLS, pinning | Medium |
| 4 | How complex is the app? | `analyze_javascript_application` | `ev_cc7266b3…` | 7 files, 6 parsed, 280 AST nodes, 35 findings | — | Full bundle unmeasured | High |

---

## 5. Next probes on a real authorised target

1. `open_binary` (APK/IPA/archive) → `inspect_android_package` / `inspect_macho`.
2. `inspect_android_class` / `inspect_android_method` on modules surfaced by the graph.
3. `decode_android_resources` for strings/flags; `identify_flutter_build` if Dart AOT present.
4. `inspect_web_network_capture` / `inspect_pcap_capture` on **authorised** captures to recover the live API surface.
5. File each finding per [findings/README.md](file:///workspace/neobank-za/reverse-engineering/targets/findings/README.md) and log it in the ledger.

See [playbooks/](file:///workspace/neobank-za/reverse-engineering/playbooks/README.md) for the full per-platform workflows.
