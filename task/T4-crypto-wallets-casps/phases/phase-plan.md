# T4 phases · phase-plan.md

**Task:** T4.0 CASPs & Crypto Wallets Forensics
**Primary council:** C13 Web3-Finance (`C13-web3-finance-captain`)

---

## T4.1 — Luno Merkle PoR & ZAR Orderbook Dissection
**Status:** `ACTIVE` · **Owner:** C13 · **Support:** C01, C12
**Deliverable:** `research/casps-and-wallets/luno/` (9 files)
Focus: Merkle-tree Proof-of-Reserves construction & published attestations; ZAR orderbook model
(spread, depth, fee tiers); custody model; FSCA licence.
Exit: PoR method evidenced (SEEN from published attestation; internal UNKNOWN); orderbook modelled.

## T4.2 — VALR High-Frequency Exchange Architecture
**Status:** `ACTIVE` · **Owner:** C13
**Deliverable:** `research/casps-and-wallets/valr/` (9 files)
Focus: matching-engine characteristics, API surface, latency/liquidity posture, fee model, custody.
Exit: architecture reconstructed (INFERRED) with public-behaviour evidence; private internals UNKNOWN.

## T4.3 — Flex.one Crypto Card Issuance & Settlement
**Status:** `ACTIVE` · **Owner:** C16 (`C16-banking-fintech-captain`)
**Deliverable:** `research/casps-and-wallets/flex-one/` (9 files)
Focus: crypto-backed card issuance (issuer/BIN arrangement), authorisation→settlement flow,
conversion mechanics, fees; relevance to Stremiium's planned card program.
Exit: issuance/settlement flow mapped; Stremiium card implications (ADOPT/ADAPT/AVOID/BEAT).

## Cross-phase: Regulatory comparison (C01)
**Owner:** C01 (`C01-legal-compliance-captain`)
Build a single Travel Rule (FICA Dir.9) + custody-licensing comparison across Luno/VALR/Flex.one
to feed T7.3.

---

## Phase dependency order

```
T1 ──► [T4.1 | T4.2 | T4.3 parallel] ──► T7.2 (token/MPC wallet) + T7.3 (regulatory)
                     └─ C01 cross-CASP regulatory comparison ──► T7.3
```
