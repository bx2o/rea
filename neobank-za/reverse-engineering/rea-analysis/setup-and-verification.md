# REA — Setup & Verification Record (Execution Ledger)

- **Program:** Project Umoya (NeoBank ZA)
- **Council:** C06 Engineering-Infrastructure (owner) · C11 Dev-Engineering (contributor)
- **Executed:** 2026-10-16 · sandbox `linux / ubuntu 24.04`
- **Authority:** Sparkling Curious routing contract → W1 (REA install, setup & capability mapping)
- **Rule applied:** *Physical workspace evidence overrides stale task reports.*

This file is the factual record of what was actually executed. Every command below was run; every value is copied from real output, not estimated.

---

## 1. What REA is

`rea` = **Reverse Engineer Anything** — a local-only reverse-engineering tool that ships **one analysis core with two adapters**: a **CLI** and an **MCP server**. Analysis runs locally; results are immutable **Evidence** records.

| Fact | Value | Source |
|---|---|---|
| Upstream repo | https://github.com/morluto/rea | `git clone` |
| Package | `rea-agents` | [package.json](file:///workspace/rea/package.json) |
| Version | **6.5.0** | `node scripts/rea.mjs --version` |
| MCP server name | `io.github.morluto/rea` | `package.json` |
| Licence | MIT (REA-authored code); third-party tools BYO | [LICENSE](file:///workspace/rea/LICENSE) / [THIRD_PARTY_NOTICES.md](file:///workspace/rea/THIRD_PARTY_NOTICES.md) |
| Runtime required | Node `^22.19.0 \|\| ^24.11.0 \|\| >=26.0.0`, npm | [package.json](file:///workspace/rea/package.json) `engines` |
| Declared surface (from source) | **207 MCP tools**, **153 CLI commands**, **6 MCP prompts** | `rea doctor` identity block |

---

## 2. Environment findings (observed)

| Check | Result | Notes |
|---|---|---|
| Pre-installed Node | `v24.1.0` | **below** REA's minimum (`>=24.11`) |
| `.npmrc` | `engine-strict=true` | causes `EBADENGINE` on unsupported Node — observed `npm ci` failure |
| Host | ubuntu 24.04, 3 vCPU, ~5.9 GiB RAM, 1.2 TB free | adequate |

**Resolution:** installed the repo-pinned toolchain from [.nvmrc](file:///workspace/rea/.nvmrc) (`24.18.0`) via `nvm`, which also provided the pinned `npm@11.16.0` (matches `packageManager`).

> Note: sandbox egress is proxied (`HTTPS_PROXY=http://127.0.0.1:18080`). All package/binary downloads went through the egress path.

---

## 3. Executed steps

```bash
# 1. Clone (shallow)
git clone --depth 1 https://github.com/morluto/rea.git /workspace/rea        # 4072 files

# 2. Install the pinned toolchain
export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"
nvm install 24.18.0 && nvm use 24.18.0                                        # node v24.18.0, npm 11.16.0

# 3. Install locked dependencies
cd /workspace/rea && CI=true npm ci --no-audit --no-fund                       # added 548 packages in 10s

# 4. Build the runtime + packaged skill
CI=true npm run build:cached                                                   # 3 tasks successful, 18.1s

# 5. Verify
node scripts/rea.mjs --version                                                 # 6.5.0
node scripts/rea.mjs doctor --json                                             # readiness report
node scripts/generate-mcp-tool-catalog.mjs                                     # .cache/mcp-tool-catalog.json (9.1 MB)
```

Build output confirmed `compile` (tsc + bundle-runtime) and `artifacts:skills` both succeeded.

---

## 4. Readiness report (`rea doctor`)

| Check | `ok` | Classification |
|---|---|---|
| node (`24.18.0`) | ✅ | healthy |
| host (`ubuntu 24.04`) | ✅ | healthy |
| hopper | ❌ | `missing_analysis_engine` |
| ghidra | ❌ | `missing_analysis_engine` (`GHIDRA_INSTALL_DIR` unset) |
| ida-registration | ❌ | `missing_analysis_engine` (`REA_IDA_MCP_CONFIG` unset) |
| jadx | ❌ | `missing_analysis_engine` (`REA_JADX_MCP_JAR` unset) |
| kuna-installation | ❌ | `missing_analysis_engine` (`REA_KUNA_COMMAND` unset) |
| skill:identity | ❌ | `config_drift` (skill not installed for a client) |

**Interpretation (important):** the missing engines gate only *native/APK deep analysis*. They do **not** block:
- static **JavaScript/Electron** analysis,
- **Go / Rust** binary metadata inspection,
- **WASM / EVM / SQLite / PE-resource / binary-layout** inspection,
- **Artifact/archive** inventory and extraction.

REA deliberately does **not** install or upgrade these engines (BYO), except optional Hopper with explicit approval. `rea doctor` exited `healthy:false` because of the absent engines + skill drift — this is **expected in a headless sandbox with no agent client installed**.

---

## 5. Setup (`rea setup`) — result in this environment

`rea setup --dry-run` returned `status: planned`, `plannedActions: []`, `clients: {}` — i.e. **no changes were proposed because no supported agent client is installed in this sandbox** (the client list covers `claude_code`, `claude_desktop`, `codex`, `cursor`, `gemini_cli`, `windsurf`, `devin`, `opencode`, `antigravity`, `copilot_cli`, `commandcode`, `vscode`, `grok_build`, `omp`, `grok_bot`).

**Consequence:** MCP registration is a no-op here; REA was therefore exercised through its **CLI adapter**, which uses the *same* analysis core and Evidence contracts. On a developer workstation the equivalent command is:

```bash
npx rea-agents@latest setup              # review planned changes, then approve
# or, from this source checkout, non-interactively for a named client:
node scripts/rea.mjs setup --client codex --dry-run --json
node scripts/rea.mjs setup --client codex --yes
```

See [mcp-vs-cli.md](file:///workspace/neobank-za/reverse-engineering/rea-analysis/mcp-vs-cli.md) for the full registration/provider guide.

---

## 6. Authoritative tool inventory (VERIFIED)

Generated from the running build — not scraped from docs:

```bash
node scripts/generate-mcp-tool-catalog.mjs      # → /workspace/rea/.cache/mcp-tool-catalog.json
```

- **207** MCP tools, each entry carrying `name`, `title`, `description`, `inputSchema`, `outputSchema`, `effects`, `annotations`, `requiresSession`, `analysisOperation`.
- Full extracted list persisted at [mcp-tool-names.tsv](file:///workspace/neobank-za/reverse-engineering/rea-analysis/mcp-tool-names.tsv).
- Catalog digests (from `rea doctor identity`): `tools_sha256=abe85163…`, `prompts_sha256=7152916a…`, `combined_sha256=e3cbfdec…`.

Top tool-name verb prefixes: `inspect` (47), `list` (21), `compare` (11), `trace` (10), `procedure` (7), `capture` (6), `set`/`get`/`observe`/`start` (5 each), `read`/`search`/`analyze`/`project`/`close` (4 each).

---

## 7. End-to-end functional proof (observed)

See the worked demonstration: [demonstration-bankapp.md](file:///workspace/neobank-za/reverse-engineering/rea-analysis/demonstration-bankapp.md).

Summary: REA statically reconstructed a 7-file banking-app fixture into an authenticated **JavaScript Application Graph**, recovering Electron boundaries, IPC channels and the `contextBridge` API surface, and emitted a sealed Evidence record `ev_cc7266b3c86b2defce6913519bcb1f66b55b9d59688e4cf01ea6723e706b3e64`.

Command:

```bash
node scripts/rea.mjs analyze-javascript-application /tmp/bankapp-demo --json
```

---

## 8. Outstanding items (unknowns — carried forward)

| # | Item | Status |
|---|---|---|
| U-1 | No native engine (Hopper/Ghidra/IDA) configured | **unknown-future**: needed only for native/APK deep analysis |
| U-2 | No JADX JAR configured → APK decompilation not available | **blocked** until `REA_JADX_MCP_JAR` set |
| U-3 | No MCP client in sandbox → registration unverified for a live agent | **not applicable here**; verified surface via CLI |
| U-4 | `.cache/mcp-tool-catalog.json` is test metadata, not shipped | informational |

---

## 9. Traceability

- Build artefacts: `/workspace/rea/dist/` (ignored output), `/workspace/rea/.cache/`.
- This record satisfies the Stremiium rule *"Every prompt execution has a traceable entry."*
- Related: [rea-analysis/README.md](file:///workspace/neobank-za/reverse-engineering/rea-analysis/README.md) · [architecture.md](file:///workspace/neobank-za/reverse-engineering/rea-analysis/architecture.md) · [tool-catalog.md](file:///workspace/neobank-za/reverse-engineering/rea-analysis/tool-catalog.md)
