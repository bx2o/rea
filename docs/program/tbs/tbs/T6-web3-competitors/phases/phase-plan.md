# T6 phases · phase-plan.md

**Task:** T6.0 Stremiium Competitor Dissection
**Primary council:** C15 Product-Management (`C15-product-management-captain`) / C13 Web3-Finance (`C13-web3-finance-captain`)

---

## T6.1 — Sorare StarkEx L2 & NFT Fantasy Mechanics
**Status:** `ACTIVE` · **Owner:** C13 (`C13-web3-finance-captain`)
**Deliverable:** `research/web3-competitors/sorare/` (9 files)
Focus: StarkEx L2 scaling, NFT card economy, fantasy scoring, on-chain trade/settlement.
Exit: L2 + NFT mechanics evidence-classed; fantasy scoring model; implications for $STM/NFT design.

## T6.2 — Socios / Chiliz Fan Token Generation Events
**Status:** `ACTIVE` · **Owner:** C13
**Deliverable:** `research/web3-competitors/socios-chiliz/` (9 files)
Focus: Chiliz chain, Fan Token Offering mechanics, club partnering model, token utility/voting.
Exit: token-generation-event model documented; direct implications for Stremiium fan/BLT tokens.

## T6.3 — Polymarket Gnosis CTF & UMA Settlement
**Status:** `ACTIVE` · **Owner:** C13 · **Legal flag:** C01
**Deliverable:** `research/web3-competitors/polymarket/` (9 files)
Focus: Gnosis Conditional Token Framework (CTF), UMA optimistic oracle settlement, dispute flow, and
regulatory history (including enforcement).
Exit: CTF+UMA mechanics documented; **C01 must state SA legality/risk** and an ADAPT/AVOID decision.

## T6.4 — FanDuel / DraftKings DFS Real-Time Engine & Odds Ingestion
**Status:** `ACTIVE` · **Owner:** C11 (`C11-dev-engineering-captain`)
**Deliverable:** `research/web3-competitors/fanduel/` (9 files)
Focus: real-time DFS scoring, odds-data ingestion pipeline, latency posture, contest mechanics.
Exit: engine architecture documented (INFERRED); ingestion pipeline modelled; implications for
Stremiium DFS fantasy.

## T6.5 — Fanatics Collectibles & FanCash Ecosystem
**Status:** `ACTIVE` · **Owner:** C04 (`C04-chief-strategist`)
**Deliverable:** `research/web3-competitors/fanatics/` (9 files)
Focus: physical+digital collectibles model, FanCash loyalty currency, partner funding.
Exit: collectibles/FanCash economics modelled; implications for Stremiium phygital collectibles.

## Cross-phase: Feature parity matrix (C15)
**Owner:** C15
Consolidate all five into a single parity matrix (feature × competitor × Stremiium target).

---

## Phase dependency order

```
T1 ──► [T6.1 | T6.2 | T6.3 | T6.4 | T6.5 parallel]
                    └─ C15 feature parity matrix ─► T7 (fan/BLT/prediction/DFS feature set)
                    └─ C01 gambling-risk flag ────► T7.3 (regulatory)
```
