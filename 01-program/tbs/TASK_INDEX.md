# TASK_INDEX.md — STREMIUM REVERSE-ENGINEERING & NEOBANK ARCHITECTURE

**Program:** `SC-REA-NEOBANK-5.0`
**Owner:** Sparkling Curious (`SC-MASTER-001`)
**Brief:** [`PROGRAM_BRIEF.md`](PROGRAM_BRIEF.md)
**Last updated:** 2026-11-16

> Status vocabulary: `COMPLETED` · `ACTIVE` · `PENDING` · `PARTIAL` · `BLOCKED`.
> A task is `COMPLETED` only when its evidence artefacts exist in this workspace.

## Workspace reorganisation (2026-11-16)

Repository restructured into numbered zones with no deletions (Sparkling Curious design, P0–P6):
- `00-governance/` (orchestration, execution-records, UnConsolidated), `01-program/` (tbs, plan, delivery, councils, artifacts, skills, templates, workflows), `02-research/` (dossiers across 6 domain groups, landscape, source-library, synthesis), `03-architecture/` (target-system), `04-engineering/` (rea-toolkit, reverse-engineering), `05-deliverables/` (summaries, synthesis, charts), `06-architecture/` (platform-design), `99-archive/` (source-bundles, extracted-snapshots, canonical-backups, tooling-scratch).
- Canonical roots preserved: `.stremiium/`, `.github/`, `rea/` (compat). All duplicates retained in `99-archive/`.
- Path references in docs updated to new layout; see root `README.md` for zone map.

## Consolidation log (2026-11-16)

All four unmerged `trae/agent-*` remote branches have been integrated into the single
`main` lineage on session branch `kilo/candid-token-zm1`. Working tree is clean; A1–A3
merged without conflict and A4 required the three manual resolutions documented below.

| # | Branch | Tip | Merge commit | Notes |
|---|---|---|---|---|
| A1 | `origin/trae/agent-vOC0E6` | `1bd1382` | fast-forward | `UnConsolidated/README.md` v5.0 enrichment; 4 `.zip` templates |
| A2 | `origin/trae/agent-D7hbv6` | `2bfc21d` | `4eb6d72` | `01-program/tbs/PROGRAM_BRIEF.md` §4.0 depth bar |
| A3 | `origin/trae/agent-9l0OdM` | `e0c9fcd` | `16a7780` | wave-1 research scaffold, UnConsolidated, REA business toolkit, `.stremiium/` |
| A4 | `origin/trae/agent-08wapu` | `a4dac91` | `367f0ed` | 17 SA bank/neobank dossiers, REA analysis playbooks, pre-termination backup |

**Conflict resolution notes (A4):**
1. `README.md` — two divergent root indexes (HEAD's `rea` program index vs A4's
   `/workspace` index). Resolved by keeping the unified-repo `rea` program index; the
   A4 content describing `rea/`, `_stremiium_canonical/` and `neobank-za/` is superseded by the
   canonical paths already present in `main`.
2. `rea/` — A4 carried a stale submodule gitlink (`c884864…`, an object not present in
   this repo). The real `morluto/rea` checkout already exists as a tracked directory tree
   (4,068 files, v6.5.0) in `main`. Kept the directory tree; discarded the gitlink.
3. `_stremiium_canonical/` — A4 staged a duplicate copy of the agent OS nested under a wrapper (renamed 2026-11-16)
   directory (`_stremiium_canonical/.stremiium/`, 2,150 files, byte-identical to `.stremiium/`).
   Removed the redundant wrapper; canonical `.stremiium/` retained.

**Result:** 6,788 files changed, +2,229,298 / −51 vs the pre-merge `main` tip `6a901c0`.
All 17 `evidence-ledger.json` files validate against the §6 schema; every `07-rea-reverse-engineering.md`
file carries the mandatory four-bucket split (Evidence/Seen · Recovered Graph · Limitations · Unknowns).

| Task ID | Task Description | Assigned Council | Status | Deliverables |
|---|---|---|---|---|
| **T1.0** | **Environment & REA Setup** | Engineering-Infra (C06) | PARTIAL | `rea doctor` contract; MCP toolchain spec (REA binary not yet installed) |
| T1.1 | REA Doctor & Provider Verification | Dev-Engineering (C11) | PENDING | `01-program/tbs/T1-infrastructure-setup/implementation/rea-doctor-contract.md` |
| T1.2 | Custom Banking REA Tool Engine | Dev-Engineering (C11) | ACTIVE | `03-architecture/target-system/core-banking/stremiium-rea-banking-plugin.ts` |
| **T2.0** | **SA Big Four Reverse Engineering** | Multi-Squad Taskforce | ACTIVE | Dossiers in `02-research/dossiers/01-sa-traditional-banking/` |
| T2.1 | Standard Bank Systems & Shyft Reversing | Banking-Fintech (C16) | ACTIVE | `02-research/dossiers/01-sa-traditional-banking/standard-bank/` |
| T2.2 | FNB App & eBucks Algorithmic Deconstruction | Marketing (C09) / Dev (C11) | ACTIVE | `02-research/dossiers/01-sa-traditional-banking/fnb/` |
| T2.3 | ABSA Systems & Cloud Migration Analysis | Engineering-Infra (C06) | ACTIVE | `02-research/dossiers/01-sa-traditional-banking/absa/` |
| T2.4 | Nedbank Money App & Avo Ecosystem Reversing | Product (C15) | ACTIVE | `02-research/dossiers/01-sa-traditional-banking/nedbank/` |
| **T3.0** | **SA NeoBank & Challenger Analysis** | Multi-Squad Taskforce | ACTIVE | Dossiers in `02-research/dossiers/01-sa-traditional-banking/` |
| T3.1 | TymeBank Kiosk & Mambu CBS Forensics | Banking-Fintech (C16) | ACTIVE | `02-research/dossiers/01-sa-traditional-banking/tymebank/` |
| T3.2 | Discovery Bank Vitality Behavioural Engine | Strategy (C04) / Dev (C11) | ACTIVE | `02-research/dossiers/01-sa-traditional-banking/discovery-bank/` |
| T3.3 | African Bank MyWorld & Tap2Glass SoftPOS | Dev-Engineering (C11) | ACTIVE | `02-research/dossiers/01-sa-traditional-banking/african-bank/` |
| **T4.0** | **CASPs & Crypto Wallets Forensics** | Web3-Finance (C13) | ACTIVE | Dossiers in `02-research/dossiers/04-sa-casps-crypto-exchanges/` |
| T4.1 | Luno Merkle PoR & ZAR Orderbook Dissection | Web3-Finance (C13) | ACTIVE | `02-research/dossiers/04-sa-casps-crypto-exchanges/luno/` |
| T4.2 | VALR High-Frequency Exchange Architecture | Web3-Finance (C13) | ACTIVE | `02-research/dossiers/04-sa-casps-crypto-exchanges/valr/` |
| T4.3 | Flex.one Crypto Card Issuance & Settlement | Banking-Fintech (C16) | ACTIVE | `02-research/dossiers/04-sa-casps-crypto-exchanges/flex-one/` |
| **T5.0** | **Global Benchmarks Dissection** | Strategy-Growth (C04) | ACTIVE | Dossiers in `02-research/dossiers/02-global-banking-wealth/` |
| T5.1 | JPMorgan Chase Kinexys / JPM Coin Analysis | Web3-Finance (C13) | ACTIVE | `02-research/dossiers/02-global-banking-wealth/jpmorgan-chase/` |
| T5.2 | Morgan Stanley Wealth Management Systems | Finance-IR (C10) | ACTIVE | `02-research/dossiers/02-global-banking-wealth/morgan-stanley/` |
| **T6.0** | **Stremiium Competitor Dissection** | Product (C15) / Web3 (C13) | ACTIVE | Dossiers in `02-research/dossiers/06-global-web3-fan-engagement/` |
| T6.1 | Sorare StarkEx L2 & NFT Fantasy Mechanics | Web3-Finance (C13) | ACTIVE | `02-research/dossiers/06-global-web3-fan-engagement/sorare/` |
| T6.2 | Socios / Chiliz Fan Token Generation Events | Web3-Finance (C13) | ACTIVE | `02-research/dossiers/06-global-web3-fan-engagement/socios-chiliz/` |
| T6.3 | Polymarket Gnosis CTF & UMA Settlement | Web3-Finance (C13) | ACTIVE | `02-research/dossiers/06-global-web3-fan-engagement/polymarket/` |
| T6.4 | FanDuel DFS Real-Time Engine & Odds Ingestion | Dev-Engineering (C11) | ACTIVE | `02-research/dossiers/06-global-web3-fan-engagement/fanduel/` |
| T6.5 | Fanatics Collectibles & FanCash Ecosystem | Strategy-Growth (C04) | ACTIVE | `02-research/dossiers/06-global-web3-fan-engagement/fanatics/` |
| **T7.0** | **Stremiium NeoBank Unified Blueprint** | Sparkling Curious (C00) | ACTIVE | `03-architecture/`, `06-architecture/` |
| T7.1 | Core Banking & PayShap Integration Specs | Banking-Fintech (C16) | ACTIVE | `03-architecture/target-system/core-banking/`, `03-architecture/target-system/payment-rails/` |
| T7.2 | $STM Token Utility & MPC Wallet System | Web3-Finance (C13) | ACTIVE | `03-architecture/target-system/web3-bridge/` |
| T7.3 | Regulatory Dossier for FSCA & SARB | Legal-Compliance (C01) | ACTIVE | `03-architecture/target-system/regulatory-compliance/` |
| **T8.0** | **Code Mode Execution & Repo Commit** | Sparkling Curious (C00) | COMPLETED | `.github/`, `00-governance/UnConsolidated/`, git history — consolidation complete 2026-11-16 |

## Cross-cutting registers

| Register | Path |
|---|---|
| Program brief & rules | [`01-program/tbs/PROGRAM_BRIEF.md`](PROGRAM_BRIEF.md) |
| UnConsolidated format definition | [`00-governance/UnConsolidated/README.md`](../../00-governance/UnConsolidated/README.md) |
| Agent/coordinator prompts | [`.github/agents/`](../.github/agents/) |
| Skills & tooling | [`.github/skills/`](../.github/skills/) |
| Orchestration workflows | [`.github/workflows/`](../.github/workflows/) |
| Live status board | [`01-program/tbs/TASK_INDEX.md`](TASK_INDEX.md) (this file) |

## Evidence rules (summary)

1. `Seen` requires a citable public source or a REA artefact we actually possess.
2. REA is **not yet installed**; artefact-derived claims are `Inferred`/`Unknown` until extraction runs.
3. Every dossier carries an `evidence-ledger.json`.
4. No credentials, keys, tokens, or personal data are committed.
