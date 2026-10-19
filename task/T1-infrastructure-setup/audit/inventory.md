# T1 audit · inventory.md

**Task:** T1.0 Environment & REA Setup
**Owner council:** C06 Engineering-Infra
**Evidence date:** 2026-10-19

---

## 1. What exists (verified on disk)

| Asset | Path | State | Evidence class |
|---|---|---|---|
| Program brief | `task/PROGRAM_BRIEF.md` | present, locked | SEEN (repo) |
| Task index / status board | `task/TASK_INDEX.md` | present | SEEN (repo) |
| Task tree T1..T8 with subfolders | `task/T<n>-<slug>/{audit,phases,implementation,summary,context,assignments}` | present, empty | SEEN (repo) |
| Research entity folders (17) | `research/banks/*`, `research/casps-and-wallets/*`, `research/global-benchmarks/*`, `research/web3-competitors/*` | present, **empty** | SEEN (repo) |
| Council agent definitions (16 + coordinators) | `.stremiium/agents/council-agents/` | present | SEEN (repo) |
| Master registry | `.stremiium/registry/master-registry.json` | present | SEEN (repo) |
| Skills library (100+ skills) | `.stremiium/skills/` | present | SEEN (repo) |
| Skills activation index | `.stremiium/skills/SKILLS-ACTIVATION-INDEX.md` | present | SEEN (repo) |
| Config: council registries, policies | `.stremiium/config/` | present | SEEN (repo) |

## 2. What is missing

| Gap | Detail | Resolves via |
|---|---|---|
| **REA binary NOT installed** | `morluto/rea` is referenced in the brief (§5) but is **not present** on this host. No `rea` executable, no `node_modules/.bin/rea`, no global install. | T1.1 |
| No `rea doctor` capture | No `rea doctor --verbose` transcript; provider/model health unknown. | T1.1 |
| No MCP transport configured | No REA MCP server registration in agent tool config. | T1.1 |
| No analysis artifacts | Zero APK / ASAR / IPA / binary artefacts supplied by executives. | Exec artifact drop |
| No custom banking plugin | `architecture/core-banking/stremiium-rea-banking-plugin.ts` absent. | T1.2 |
| Empty research dossiers | All 17 entity folders contain **no** files (no README, no ledger). | T2–T6 |
| No `architecture/` tree | Target stack spec (§8) referenced but folder not present. | T7 |
| No `UnConsolidated/` tree | Format definition referenced in TASK_INDEX; not present. | T8 |

## 3. Evidence present vs absent

**Present (citable / SEEN):**
- Repository governance artefacts (brief, index, council registry, agent definitions, skills).
- Public, citable sources for all entities (filings, published pricing, app-store metadata) — obtainable without REA.

**Absent (blocks SEEN-class forensic claims):**
- REA extraction output (decompiled bytecode, function signatures, network traces).
- Any supplied app package to analyse.
- Provider/model health proof for REA.

## 4. The REA-not-installed gap (headline finding)

> Per brief §5 honesty rule: because `morluto/rea` is **not installed** and **no artefacts exist**,
> **no "Seen" item anywhere in T2–T7 may claim to derive from decompiled artefact**. Until T1.1
> closes, all artefact-dependent findings must be labelled **INFERRED** (logical architecture from
> public behaviour) or **UNKNOWN** (server-side/private), each citing the extraction step that would
> resolve it (e.g. `npx -y rea-agents@latest analyze-javascript-application <path> --json`).

**Consequence:** T1 is `PARTIAL` and is the program's critical path. Public-source analysis may
proceed in parallel, but the forensic evidentiary class of every dossier stays capped at INFERRED.

## 5. Audit verdict

| Question | Answer |
|---|---|
| Is the environment scaffolded? | Yes — tree + governance artefacts exist. |
| Is the analysis engine present? | **No** — REA not installed. |
| Are source artefacts present? | **No** — none supplied. |
| Can SEEN-class forensic claims be produced today? | **No.** |
| Recommended T1 gate decision | Hold `PARTIAL`; block T7.1 forensic acceptance until T1.1 exits. |
