# REA Tooling Analysis — `morluto/rea` ("Reverse Engineer Anything")

> Reverse-engineering **engine** for the NeoBank competitive-intelligence programme.
> Installed at [`/workspace/rea`](../rea) · version **6.5.0** · MIT licence.

---

## 1. What REA Is

REA is a **local-only** reverse-engineering tool exposing **one CLI and one MCP server** over a
shared workflow layer. It analyses **software artifacts** — native binaries, JavaScript/Electron
apps, .NET assemblies, Android APKs, WASM, EVM bytecode, SQLite DBs, firmware, network captures,
and **websites** — and returns findings **with Evidence provenance** (observations vs. derivations
vs. inferences vs. unknowns).

- **Entry points:** `rea <command>` (CLI) · MCP stdio server (`rea --mcp`) · agent skill.
- **Analysis is local.** Artifacts are never uploaded (the model provider's own policy applies).
- **Adapters:** Claude Code, Codex, Cursor, Gemini CLI, Grok Build, and any MCP-capable client.

### Architecture (from `docs/architecture.mermaid`, `AGENTS.md`)
```text
domain semantics & contracts → provider adapters → application workflows → CLI/MCP adapters
```
Dependencies flow **inward**; engine protocols stay out of domain/application layers.

---

## 2. Installation Performed (this workspace)

```bash
git clone --depth 1 https://github.com/morluto/rea.git      # → /workspace/rea
cd /workspace/rea
npm install --engine-strict=false      # sandbox Node v24.1.0 < required ^24.11.0
npm run build:cached                   # compiles dist/ (tsc + bundle-runtime)
node scripts/rea.mjs --help            # verified: 100+ commands
node scripts/rea.mjs doctor            # readiness audit
```

**Sandbox readiness (`rea doctor`)**
| Check | Status | Notes |
|---|---|---|
| node | ⚠️ | v24.1.0 (spec wants ≥24.11.0) — engine-strict overridden; runtime works |
| host | ✅ | ubuntu 24.04 |
| hopper / ghidra / ida | ❌ | no native decompiler installed (bring-your-own) |
| jadx / kuna | ❌ | not installed |
| browser (Chrome-family) | ❌ | required for web/browser commands |
| skill:identity | ⚠️ | run `rea setup` to install skill |

**Consequence:** static **.NET / Go / Rust / WASM / EVM / SQLite / artifact** inspection works
today. **Native** binary decompilation needs Ghidra/Hopper/IDA. **Website/browser** commands need
a Chrome-family browser + CDP target. In this sandbox, web intel is gathered via the orchestrator's
`WebSearch`/`WebFetch` (proxy-aware), while REA is used for static artifact/app analysis where a
target is available.

---

## 3. Tool Inventory (by capability class)

REA ships **100+ commands**. Grouped:

### 3.1 Web / website (the primary bank-facing surface)
`analyze-web-bundle`, `inspect-web-page`, `inspect-web-event-listeners`, `observe-web-session`,
`observe-web-execution`, `capture-web-screenshot`, `capture-browser-scenario`,
`export-web-scripts`, `recover-javascript-sources`, `discover-webmcp-tools`,
`trace-web-module-imports`, `trace-web-source-location`, `compare-web-captures`,
`compare-web-screenshots`, `inspect-web-network-capture`.

### 3.2 JavaScript / Electron
`analyze-javascript-application`, `recover-javascript-sources`, `trace-javascript-semantics`,
`compare-application-versions`, `compare-javascript-export-shapes`,
`project-android-application-graph`, `observe-javascript-runtime`,
`reconcile-javascript-runtime`, `inspect-electron-fuses`, `list-electron-targets`.

### 3.3 Native binaries / disassembly
`inspect`, `analyze`, `decompile`, `function`, `search`, `trace`, `xrefs`, `instructions`,
`inspect-binary-layout`, `inspect-native-api`, `inspect-signature`, `inspect-native-dispatch-metadata`,
`inspect-macho`, `list-architectures`, `decompile-jeb-item`, `cutter-command`,
`debug-with-gdb`, `debug-with-rizin`, `instrument-with-frida`, `observe-native-calls`,
`observe-native-ui`, `capture-native-ui-scenario`, `demangle-swift`.

### 3.4 Language/runtime-specific
`inspect-go-binary` · `inspect-rust-binary` · `inspect-wasm-artifact` · `inspect-evm-interface` ·
`inspect-managed-artifact`, `inspect-managed-members`, `inspect-managed-native-boundaries`,
`compare-managed-members` · `inspect-dart-aot`, `identify-flutter-build`.

### 3.5 Mobile
`inspect-android-package`, `inspect-android-class`, `inspect-android-method`,
`decode-android-resources`, `search-android-classes`, `trace-android-references`,
`project-android-application-graph`, `inspect-adb-*` (device family), `pull-adb-package`, etc.

### 3.6 Data / captures / firmware
`inspect-sqlite-database` · `inspect-web-network-capture` · `inspect-recorded-crash` ·
`inspect-firmware-regions`, `extract-firmware` · `decode-signal-recording`, `inspect-signal-decoders`.

### 3.7 Evidence / comparison / lifecycle
`evidence-export`, `evidence-import`, `inspect-evidence-bundle`, `compare`,
`compare-artifact-*`, `compare-process-captures`, `compare-source-to-bundle`,
`build-reconstruction-obligation-ledger`, `evaluate-reconstruction-coverage`,
`doctor`, `capabilities`, `providers`, `setup`, `update`, `uninstall`.

### 3.8 Integrations
`completions`, `mcp` (register as MCP server / doctor).

---

## 4. How REA Works (investigation flow)

```text
agent/analyst question
   → REA selects target + provider
   → REA inspects & traces the artifact (static or bounded runtime)
   → returns findings + Evidence (observation / derivation / inference / unknown)
   → agent asks follow-ups or reconstructs an implementation
```

Key contracts: `docs/mcp-contracts.md` (tool results, sessions), `docs/mcp-prompts.md`
(guided investigations), `docs/tool-design.md` (analyst-question-first design).

**Evidence discipline (must be preserved):** identity, omission, uncertainty, and source evidence
cross every boundary; a PID/path alone does not establish ownership after exit; unresolved identity
stays `unknown`, never "absent".

---

## 5. Applying REA to Banks & Neobanks

REA reverse-engineers **software**, not balance sheets. Mapped to our target classes:

| Target class | REA capability | Business question answered |
|---|---|---|
| Bank website / online portal | `analyze-web-bundle`, `export-web-scripts`, `inspect-web-page` | Which 3rd-party vendors/CDNs/analytics/trackers power the portal? What frameworks? Which payment/identity providers? |
| Banking mobile app (APK/IPA) | `inspect-android-package`, `project-android-application-graph`, `inspect-managed-artifact` | Which SDKs (fraud, KYC, core-banking, loyalty)? Feature inventory. |
| Electron/desktop banking app | `analyze-javascript-application` | Module graph, IPC boundaries, native add-ons. |
| API surface (public docs) | `inspect-web-network-capture` (HAR/SAZ) | Endpoint taxonomy, auth flows, payload shapes. |
| Open public data (rates/fees) | orchestrator WebFetch | Pricing matrices, product catalogues. |

**Limits:** REA cannot read a bank's private servers, databases, or staff systems. All such facts
must come from **published** sources (results decks, regulator filings, press, app-store metadata).

---

## 6. Custom Tool Design — "REA Business Toolkit"

Location: [`tools/rea-business-toolkit/`](../tools/rea-business-toolkit).

Goal: turn REA's **software** primitives into **business-question** primitives. Each tool is a thin
orchestration layer: **(a)** collects a public artifact (web bundle / APK / HAR), **(b)** runs REA
commands, **(c)** projects the Evidence into a **business-relevant schema** (vendor stack, product
surface, partnership signals, cost drivers).

### 6.1 Tool: `web-stack-recon`
Input: bank homepage URL. Runs: `analyze-web-bundle` → `export-web-scripts` → script import tracing.
Outputs: `tech-stack.md` (frameworks, CDNs, analytics, payment/identity vendors), `vendors.csv`.

### 6.2 Tool: `app-surface-recon`
Input: APK/IPA. Runs: `inspect-android-package`, `project-android-application-graph`,
`inspect-managed-members`. Outputs: `sdk-inventory.md` (fraud/KYC/core-banking/loyalty SDKs),
`features.md`.

### 6.3 Tool: `network-capability-map`
Input: HAR/SAZ of portal session. Runs: `inspect-web-network-capture`.
Outputs: `api-taxonomy.md` (endpoints, auth model, third-party calls).

### 6.4 Tool: `evidence-pack`
Wraps `evidence-export`/`inspect-evidence-bundle` to produce a portable, citable Evidence bundle
per bank, feeding the `source-library/`.

### 6.5 Tool: `business-question-answerer`
A **query bank** (`queries/`) mapping each business question → REA command chain + public-source
fallback. Example rows:

| Business question | REA chain | Fallback |
|---|---|---|
| Which fraud vendor does the app use? | `inspect-android-package` → `search-android-classes <vendor>` | press/SDK storefront |
| Which analytics/trackers on the portal? | `analyze-web-bundle` | WebFetch page source |
| What core-banking stack? | `inspect-managed-artifact` / vendor fingerprints | results decks, job ads |
| Which KYC/identity provider? | `project-android-application-graph` | vendor logos, press |
| What loyalty rails? | app module graph + web bundle | partner pages |

See `queries/business-question-matrix.md` for the full matrix and
`scripts/*.mjs` for runnable implementations.

---

## 7. Reproduction Commands

```bash
cd /workspace/rea
node scripts/rea.mjs doctor
node scripts/rea.mjs capabilities
node scripts/rea.mjs --llms-full | head -200      # LLM-readable manifest
```

See also: [`../tools/rea-business-toolkit/README.md`](../tools/rea-business-toolkit/README.md).
