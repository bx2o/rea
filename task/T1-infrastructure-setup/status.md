# T1 — Environment & REA Setup · status.md

**Program:** `SC-REA-NEOBANK-5.0`
**Task:** T1.0 Environment & REA Setup
**Owner council:** C06 Engineering-Infra (`C06-chief-technology-officer`)
**Supporting councils:** C11 Dev-Engineering (`C11-dev-engineering-captain`), C03 Admin-Knowledge (`C03-chief-librarian`), C12 Cybersecurity-Intel (`C12-cybersecurity-intel-captain`)
**Status:** `PARTIAL` (T1.0 PARTIAL · T1.1 `PENDING` · T1.2 `ACTIVE`)
**Last updated:** 2026-10-19

---

## 1. Mission

Stand up the deterministic execution substrate for the entire reverse-engineering program so every
downstream dossier (T2–T6) and architecture spec (T7) can be produced with verifiable evidence:
workspace tree, artifact conventions, the `morluto/rea` binary + MCP transport, and a bank-specific
REA analysis plugin. T1 is the **hard gate** — no `Seen`-class forensic claim may be produced until
T1 exits.

## 2. Scope

**In scope**
- Workspace directory conventions under `task/T1..T8`, `research/`, `architecture/`, `UnConsolidated/`.
- `morluto/rea` installation, `rea doctor --verbose` verification, provider/model check.
- MCP transport contract for invoking REA from council agents.
- Custom REA banking plugin (`stremiium-rea-banking-plugin.ts`) for CBS/payment-rail signatures.
- Evidence-ledger schema wiring (`evidence-ledger.json` per §6 of the brief).

**Out of scope**
- Actual entity decomposition (T2–T6).
- Production infra (`af-south-1` K8s/HSM) — that is T7/T8 and `architecture/`.

## 3. Entrance / Exit criteria

| Gate | Criterion | State |
|---|---|---|
| Entrance | Program brief + TASK_INDEX read and locked | ✅ met |
| Entrance | Folder tree + empty subfolders exist | ✅ met |
| Exit | REA binary installed and resolvable | ❌ not installed |
| Exit | `rea doctor --verbose` returns provider/model health | ❌ no capture |
| Exit | MCP transport reachable from a council agent | ❌ unverified |
| Exit | `stremiium-rea-banking-plugin.ts` compiles and exposes CBS signature extraction | ⏳ T1.2 ACTIVE |
| Exit | `implementation/rea-doctor-contract.md` signed off by C06 + C12 | ⏳ T1.1 PENDING |

## 4. Dependency map

```
T1 (env + REA) ──► T2 SA Big Four
               ├─► T3 SA NeoBanks
               ├─► T4 CASPs & Wallets
               ├─► T5 Global Benchmarks
               ├─► T6 Web3 Competitors
               └─► T7 Unified Blueprint ──► T8 Code Mode & Commit
```
T1 is a **predecessor to all** tasks. T1.2 (plugin) depends on T1.1 (doctor/provider verification).
T7.1 core-banking spec consumes T1.2 plugin output. C12 must co-sign all REA/security tooling.

## 5. Risk register

| # | Risk | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|---|
| R1 | REA binary never installed → no forensic evidence, program stuck on public sources | High | High | Escalate to exec for artifact drop + install window; proceed with public-source `Inferred` | C06 |
| R2 | No APK/ASAR/IPA artifacts supplied by executives | High | High | Formal artifact request; label all artifact claims `Unknown` | C03 |
| R3 | MCP transport/provider auth unavailable in sandbox | Medium | High | Fallback to pinned local CLI invocation; document transport gap | C11 |
| R4 | Custom plugin drifts from REA public API surface | Medium | Medium | Contract-test against `rea doctor` version; version-pin | C11 |
| R5 | Evidence ledger populated with unverifiable claims (honesty breach) | Medium | High | C12 audit gate; enforce SEEN/INFERRED/UNKNOWN vocabulary | C12 |
| R6 | Secret leakage into committed config | Low | High | Repo `.gitignore`, no-credentials rule (§9), C12 secret scan | C12 |

## 6. Next actions

1. **C06** — raise install ticket for `morluto/rea`; capture `rea doctor --verbose` output to `implementation/rea-doctor-contract.md`.
2. **C11** — author `stremiium-rea-banking-plugin.ts` skeleton (T1.2) and contract-test it.
3. **C03** — publish artifact-drop register and folder-convention note to `context/`.
4. **C12** — define the evidence-class validation gate for all REA outputs.
5. **C06** — confirm MCP transport path; if unavailable, record fallback in `implementation/`.
