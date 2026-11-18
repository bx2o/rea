# T6 — Stremiium Competitor Dissection · status.md

**Program:** `SC-REA-NEOBANK-5.0`
**Task:** T6.0 Stremiium Competitor Dissection
**Owner council:** C15 Product-Management (`C15-product-management-captain`) / C13 Web3-Finance (`C13-web3-finance-captain`)
**Supporting councils:** C11 Dev-Engineering (`C11-dev-engineering-captain`), C04 Strategy-Growth (`C04-chief-strategist`), C01 Legal-Compliance (`C01-legal-compliance-captain`), C09 Marketing (`C09-chief-marketing-officer`)
**Status:** `ACTIVE`
**Last updated:** 2026-10-19

---

## 1. Mission

Reverse-engineer the direct product competitors Stremiium's fan/BLT features compete against:
Sorare (NFT fantasy), Socios/Chiliz (fan tokens), Polymarket (prediction markets), FanDuel/DraftKings
(DFS + odds), Fanatics (collectibles + FanCash). These define the **feature parity matrix** and the
mechanics Stremiium must ADOPT/ADAPT/AVOID/BEAT to win the unified fiat+crypto fan economy.

## 2. Scope

- T6.1 Sorare — StarkEx L2 & NFT fantasy mechanics → `research/web3-competitors/sorare/`
- T6.2 Socios / Chiliz — fan token generation events → `research/web3-competitors/socios-chiliz/`
- T6.3 Polymarket — Gnosis CTF & UMA settlement → `research/web3-competitors/polymarket/`
- T6.4 FanDuel / DraftKings — DFS real-time engine & odds ingestion → `research/web3-competitors/fanduel/`
- T6.5 Fanatics — collectibles & FanCash ecosystem → `research/web3-competitors/fanatics/`

Each entity → the 9-file §4 dossier.

## 3. Entrance / Exit criteria

| Gate | Criterion | State |
|---|---|---|
| Entrance | T1 scaffold available | ✅ |
| Exit | 5 dossiers, 9 files each | ⏳ |
| Exit | A consolidated **feature parity matrix** exists across all five | ⏳ |
| Exit | On-chain mechanics (Sorare L2, Chiliz, CTF/UMA) evidence-classed | ⏳ |
| Exit | Odds-ingestion architecture (FanDuel) documented | ⏳ |
| Exit | Gambling-regulation adjacency flagged by C01 (prediction/DFS risk) | ⏳ |

## 4. Dependency map

```
T1 ──► T6 ──► T7 (blueprint: fan/BLT + prediction + DFS feature set)
          └─► T7.2 ($STM token mechanics modelled on Sorare/Socios/Polymarket)
C01 flags gambling/DFS regulatory exposure; C13 owns on-chain mechanics.
```

## 5. Risk register

| # | Risk | L | I | Mitigation | Owner |
|---|---|---|---|---|---|
| R1 | Competitor smart contracts differ from public description | M | M | Prefer verifiable on-chain data (block explorers) as SEEN | C13 |
| R2 | Polymarket regulatory history (settlement/bans) → Stremiium exposure | H | H | C01 assesses SA legality; ADAPT/AVOID decision mandatory | C01 |
| R3 | DFS odds engines proprietary → UNKNOWN | H | M | Document public-facing behaviour + latency observation | C11 |
| R4 | FanCash/collectibles economics opaque | M | M | Public programme terms; INFERRED model | C04 |
| R5 | REA absent blocks app-level reversing | H | M | Public-source + on-chain path; queue REA | C11 |

## 6. Next actions

1. **C13** — Sorare L2, Chiliz fan tokens, Polymarket CTF/UMA.
2. **C11** — FanDuel/DraftKings real-time engine & odds ingestion.
3. **C04** — Fanatics collectibles + FanCash ecosystem.
4. **C01** — gambling/DFS/prediction-market regulatory flag for SA.
5. **C15** — maintain the consolidated feature parity matrix.
