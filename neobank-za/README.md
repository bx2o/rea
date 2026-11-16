# Project Umoya — NeoBank ZA

> **UnConsolidated program architecture.** Codename `Project Umoya` is a working label only — not a brand decision.
> Governed by the **Sparkling Curious** orchestration model extracted from `stremiium.zip`.

- **Owner:** Sparkling Curious (SC-MASTER-001), acting as Manager / Coach
- **Mode:** Plan Mode → Code Mode · **Date:** 2026-10-16
- **Master plan:** [PLAN.md](file:///workspace/neobank-za/PLAN.md)
- **Execution ledger:** [artifacts/execution-ledger.md](file:///workspace/neobank-za/artifacts/execution-ledger.md)

---

## 1. What this deliverable is

A maximally-granular ("UnConsolidated") program architecture for launching a NeoBank in South Africa, built from three evidence streams:

1. **Tooling** — `morluto/rea` (Reverse Engineer Anything) cloned, installed, built, and **verified working**.
2. **Research** — sourced competitive and regulatory analysis of every bank, neobank, fintech and rail in South Africa.
3. **Design** — the platform, security, product, operational and organisational architecture for the new bank.

**Totals:** 216 files · 57 directories · 207 markdown documents · ~27,600 lines.

---

## 2. Map of the repository

| Area | Path | What's inside |
|---|---|---|
| **Master plan** | [PLAN.md](file:///workspace/neobank-za/PLAN.md) | WBS W0–W11, method, quality gates, DoD |
| **REA analysis** | `reverse-engineering/rea-analysis/` | How REA works, its 207 tools, setup/verification, worked demo |
| **RE playbooks** | `reverse-engineering/playbooks/` | Per-platform teardown workflows for bank apps |
| **Custom tools** | `reverse-engineering/custom-tools/` | How to author new REA tools + external orchestration |
| **Targets** | `reverse-engineering/targets/` | Target register, findings convention, demo evidence |
| **Banking landscape** | `research/sa-banking-landscape/` | Big Five, Tier-2, specialised/development banks, institution matrix |
| **Challengers** | `research/neobank-competitors/` | Digital banks, payments fintechs, wallets, crypto/CASP, matrix |
| **Regulatory** | `research/regulatory/` | Licensing, NPS/payments, AML/FICA, POPIA, FAIS/NCA, tax, roadmap |
| **Architecture** | `architecture/` | system-design, domain-model, integrations, data, platform, security |
| **Councils** | `councils/` | 16 council charters + domain documentation |
| **Program** | `program/` | governance, roadmaps, risk, delivery |
| **Reusable assets** | `skills/`, `workflows/`, `templates/`, `artifacts/` | SKILL.md packages, routing workflows, templates, ledgers |

---

## 3. REA — the reverse-engineering engine (verified)

| Item | Value |
|---|---|
| Repo | https://github.com/morluto/rea · npm `rea-agents` **v6.5.0** · MIT |
| Cloned to | `/workspace/rea` (4,072 files) |
| Toolchain | Node **24.18.0** (repo-pinned) + npm **11.16.0** |
| Build | `npm ci` (548 pkgs) → `npm run build:cached` ✅ |
| Surface | **207 MCP tools** + **153 CLI commands** + 6 prompts |
| Proof | `rea doctor` → node/host healthy; catalog generated; live analysis produced sealed Evidence `ev_cc7266b3…` |

- Start here → [rea-analysis/README.md](file:///workspace/neobank-za/reverse-engineering/rea-analysis/README.md)
- Setup & verification record → [setup-and-verification.md](file:///workspace/neobank-za/reverse-engineering/rea-analysis/setup-and-verification.md)
- Full tool inventory → [tool-catalog.md](file:///workspace/neobank-za/reverse-engineering/rea-analysis/tool-catalog.md) · [mcp-tool-names.tsv](file:///workspace/neobank-za/reverse-engineering/rea-analysis/mcp-tool-names.tsv)
- Worked demonstration (real output) → [demonstration-bankapp.md](file:///workspace/neobank-za/reverse-engineering/rea-analysis/demonstration-bankapp.md)

**Capability boundary (observed):** static JavaScript/Electron, Go/Rust metadata, WASM/EVM/SQLite/PE/binary-layout, archive inventory — **available now**. Native/APK deep analysis needs a BYO engine (Hopper/Ghidra/IDA/JADX) which this sandbox does not have configured.

---

## 4. South African market research (all sourced)

| Pack | Coverage | Index |
|---|---|---|
| Traditional banks | Big Five + 15+ Tier-2 + specialised/development banks | [README](file:///workspace/neobank-za/research/sa-banking-landscape/README.md) · [matrix](file:///workspace/neobank-za/research/sa-banking-landscape/institution-matrix.md) |
| Neobanks & challengers | 33 entities: digital banks, payments, wallets, crypto/CASP | [README](file:///workspace/neobank-za/research/neobank-competitors/README.md) · [matrix](file:///workspace/neobank-za/research/neobank-competitors/competitive-matrix.md) |
| Regulatory & licensing | Licensing routes, NPS, FICA, POPIA, FAIS/NCA, tax, 0–24m roadmap | [README](file:///workspace/neobank-za/research/regulatory/README.md) |

**Evidence discipline:** every claim carries an `[S#]` reference (300+ sources total across the three `sources.md` files), tagged `[FACT]` / `[EST]` / `[UNKNOWN]`, with access date **2026-10-16**. Regulatory items are tagged `[STATUTE]` (binding) vs `[REG-GUIDE]` (guidance) vs `[DESIGN]`. **No figure was invented**; unverifiable items are marked explicitly.

> ⚠️ **Verification caveat:** figures reported for financial years ending 2025/2026 come from web sources accessible on the access date. Before any board or regulator submission, re-verify every financial figure against the relevant primary annual report / regulator register.

---

## 5. Architecture

- **System design** — context / container / component (C4), bounded contexts, NFRs, technology selection → [architecture/system-design/](file:///workspace/neobank-za/architecture/system-design/README.md)
- **Domain model** — entities, aggregates, events, double-entry ledger, money & currency → [architecture/domain-model/](file:///workspace/neobank-za/architecture/domain-model/README.md)
- **Integrations** — PayShap/EFT/RTC/cards, KYC, core build-vs-buy, open finance, vendor catalogue → [architecture/integrations/](file:///workspace/neobank-za/architecture/integrations/README.md)
- **Security & compliance** — STRIDE threat model, controls (ISO 27001 / NIST CSF), IAM, fraud, AML, crypto, IR, POPIA, secure SDLC, vendor risk → [architecture/security/](file:///workspace/neobank-za/architecture/security/README.md)
- **Data** — data model, governance, analytics/regulatory reporting, AI/ML → [architecture/data/](file:///workspace/neobank-za/architecture/data/README.md)
- **Platform** — deployment topology, observability, DevOps/SDLC → [architecture/platform/](file:///workspace/neobank-za/architecture/platform/README.md)

---

## 6. Organisation & delivery

- **Councils** — 16 charters (C01–C16) + domain docs → [councils/README.md](file:///workspace/neobank-za/councils/README.md)
- **Governance** — authority matrix, RACI, escalation, decision log, charter → [program/governance/](file:///workspace/neobank-za/program/governance/README.md)
- **Roadmaps** — phased implementation, milestone launch plan, capability maturity → [program/roadmaps/](file:///workspace/neobank-za/program/roadmaps/README.md)
- **Risk** — 30-entry seeded risk register + appetite statement → [program/risk/](file:///workspace/neobank-za/program/risk/README.md)
- **Delivery** — DoD, quality gates, ways of working → [program/delivery/](file:///workspace/neobank-za/program/delivery/README.md)

---

## 7. How to read this (recommended order)

1. [PLAN.md](file:///workspace/neobank-za/PLAN.md) — the plan and WBS.
2. [rea-analysis/README.md](file:///workspace/neobank-za/reverse-engineering/rea-analysis/README.md) — the tool.
3. [research/sa-banking-landscape/README.md](file:///workspace/neobank-za/research/sa-banking-landscape/README.md) → [neobank-competitors](file:///workspace/neobank-za/research/neobank-competitors/README.md) → [regulatory](file:///workspace/neobank-za/research/regulatory/README.md) — the market.
4. [architecture/README.md](file:///workspace/neobank-za/architecture/README.md) — the build.
5. [councils/README.md](file:///workspace/neobank-za/councils/README.md) + [program/](file:///workspace/neobank-za/program/governance/README.md) — the organisation.

---

## 8. Provenance & provenance rules

- **Governors:** `/workspace/_stremiium/.stremiium/governance/` (routing, orchestration, registries).
- **Plan drives execution; physical workspace evidence overrides stale reports.**
- **Nothing in this tree is fabricated.** Where a fact could not be verified it is labelled `[UNVERIFIED]` / `[UNKNOWN]` / `[CONFIRM]`.
- **No secrets or PII** are stored in this tree.
- **Legal boundary:** reverse-engineering playbooks apply only to software you own or are expressly authorised to examine; they contain no licence-bypass or credential-theft instructions.
