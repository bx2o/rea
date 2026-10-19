# TASK_INDEX.md — STREMIUM REVERSE-ENGINEERING & NEOBANK ARCHITECTURE

**Program:** `SC-REA-NEOBANK-5.0`
**Owner:** Sparkling Curious (`SC-MASTER-001`)
**Brief:** [`PROGRAM_BRIEF.md`](PROGRAM_BRIEF.md)
**Last updated:** 2026-10-19

> Status vocabulary: `COMPLETED` · `ACTIVE` · `PENDING` · `PARTIAL` · `BLOCKED`.
> A task is `COMPLETED` only when its evidence artefacts exist in this workspace.

| Task ID | Task Description | Assigned Council | Status | Deliverables |
|---|---|---|---|---|
| **T1.0** | **Environment & REA Setup** | Engineering-Infra (C06) | PARTIAL | `rea doctor` contract; MCP toolchain spec (REA binary not yet installed) |
| T1.1 | REA Doctor & Provider Verification | Dev-Engineering (C11) | PENDING | `task/T1-infrastructure-setup/implementation/rea-doctor-contract.md` |
| T1.2 | Custom Banking REA Tool Engine | Dev-Engineering (C11) | ACTIVE | `architecture/core-banking/stremiium-rea-banking-plugin.ts` |
| **T2.0** | **SA Big Four Reverse Engineering** | Multi-Squad Taskforce | ACTIVE | Dossiers in `research/banks/` |
| T2.1 | Standard Bank Systems & Shyft Reversing | Banking-Fintech (C16) | ACTIVE | `research/banks/standard-bank/` |
| T2.2 | FNB App & eBucks Algorithmic Deconstruction | Marketing (C09) / Dev (C11) | ACTIVE | `research/banks/fnb/` |
| T2.3 | ABSA Systems & Cloud Migration Analysis | Engineering-Infra (C06) | ACTIVE | `research/banks/absa/` |
| T2.4 | Nedbank Money App & Avo Ecosystem Reversing | Product (C15) | ACTIVE | `research/banks/nedbank/` |
| **T3.0** | **SA NeoBank & Challenger Analysis** | Multi-Squad Taskforce | ACTIVE | Dossiers in `research/banks/` |
| T3.1 | TymeBank Kiosk & Mambu CBS Forensics | Banking-Fintech (C16) | ACTIVE | `research/banks/tymebank/` |
| T3.2 | Discovery Bank Vitality Behavioural Engine | Strategy (C04) / Dev (C11) | ACTIVE | `research/banks/discovery-bank/` |
| T3.3 | African Bank MyWorld & Tap2Glass SoftPOS | Dev-Engineering (C11) | ACTIVE | `research/banks/african-bank/` |
| **T4.0** | **CASPs & Crypto Wallets Forensics** | Web3-Finance (C13) | ACTIVE | Dossiers in `research/casps-and-wallets/` |
| T4.1 | Luno Merkle PoR & ZAR Orderbook Dissection | Web3-Finance (C13) | ACTIVE | `research/casps-and-wallets/luno/` |
| T4.2 | VALR High-Frequency Exchange Architecture | Web3-Finance (C13) | ACTIVE | `research/casps-and-wallets/valr/` |
| T4.3 | Flex.one Crypto Card Issuance & Settlement | Banking-Fintech (C16) | ACTIVE | `research/casps-and-wallets/flex-one/` |
| **T5.0** | **Global Benchmarks Dissection** | Strategy-Growth (C04) | ACTIVE | Dossiers in `research/global-benchmarks/` |
| T5.1 | JPMorgan Chase Kinexys / JPM Coin Analysis | Web3-Finance (C13) | ACTIVE | `research/global-benchmarks/jpmorgan-chase/` |
| T5.2 | Morgan Stanley Wealth Management Systems | Finance-IR (C10) | ACTIVE | `research/global-benchmarks/morgan-stanley/` |
| **T6.0** | **Stremiium Competitor Dissection** | Product (C15) / Web3 (C13) | ACTIVE | Dossiers in `research/web3-competitors/` |
| T6.1 | Sorare StarkEx L2 & NFT Fantasy Mechanics | Web3-Finance (C13) | ACTIVE | `research/web3-competitors/sorare/` |
| T6.2 | Socios / Chiliz Fan Token Generation Events | Web3-Finance (C13) | ACTIVE | `research/web3-competitors/socios-chiliz/` |
| T6.3 | Polymarket Gnosis CTF & UMA Settlement | Web3-Finance (C13) | ACTIVE | `research/web3-competitors/polymarket/` |
| T6.4 | FanDuel DFS Real-Time Engine & Odds Ingestion | Dev-Engineering (C11) | ACTIVE | `research/web3-competitors/fanduel/` |
| T6.5 | Fanatics Collectibles & FanCash Ecosystem | Strategy-Growth (C04) | ACTIVE | `research/web3-competitors/fanatics/` |
| **T7.0** | **Stremiium NeoBank Unified Blueprint** | Sparkling Curious (C00) | ACTIVE | `architecture/` |
| T7.1 | Core Banking & PayShap Integration Specs | Banking-Fintech (C16) | ACTIVE | `architecture/core-banking/`, `architecture/payment-rails/` |
| T7.2 | $STM Token Utility & MPC Wallet System | Web3-Finance (C13) | ACTIVE | `architecture/web3-bridge/` |
| T7.3 | Regulatory Dossier for FSCA & SARB | Legal-Compliance (C01) | ACTIVE | `architecture/regulatory-compliance/` |
| **T8.0** | **Code Mode Execution & Repo Commit** | Sparkling Curious (C00) | ACTIVE | `.github/`, `UnConsolidated/`, git history |

## Cross-cutting registers

| Register | Path |
|---|---|
| Program brief & rules | [`task/PROGRAM_BRIEF.md`](PROGRAM_BRIEF.md) |
| UnConsolidated format definition | [`UnConsolidated/README.md`](../UnConsolidated/README.md) |
| Agent/coordinator prompts | [`.github/agents/`](../.github/agents/) |
| Skills & tooling | [`.github/skills/`](../.github/skills/) |
| Orchestration workflows | [`.github/workflows/`](../.github/workflows/) |
| Live status board | [`task/TASK_INDEX.md`](TASK_INDEX.md) (this file) |

## Evidence rules (summary)

1. `Seen` requires a citable public source or a REA artefact we actually possess.
2. REA is **not yet installed**; artefact-derived claims are `Inferred`/`Unknown` until extraction runs.
3. Every dossier carries an `evidence-ledger.json`.
4. No credentials, keys, tokens, or personal data are committed.
