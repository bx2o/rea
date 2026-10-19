# T6 summary · roll-up.md

**Task:** T6.0 Stremiium Competitor Dissection
**Prepared by:** C15 Product-Management (roll-up template, pre-filled).

---

## 1. Consolidated findings

| # | Finding | Evidence class | Source |
|---|---|---|---|
| F1 | Five competitor dossiers queued but **empty**. | SEEN | repo `research/web3-competitors/` |
| F2 | Sorare runs on StarkEx L2 with an NFT card economy. | SEEN (on-chain/public) | StarkEx / Sorare docs |
| F3 | Socios/Chiliz use fan tokens on the Chiliz chain. | SEEN (on-chain/public) | Chiliz / contract data |
| F4 | Polymarket uses Gnosis CTF + UMA optimistic oracle settlement. | SEEN (on-chain/public) | Polygon contracts / UMA |
| F5 | FanDuel/DraftKings operate real-time DFS with centralised odds ingestion. | INFERRED | public behaviour |
| F6 | Fanatics blends physical+digital collectibles with FanCash loyalty. | SEEN (public) | Fanatics programme terms |
| F7 | Prediction markets/DFS raise gambling-regulation exposure for SA. | INFERRED→risk | C01 assessment |

## 2. Decisions recorded

- **D1** — On-chain mechanics are the program's **strongest SEEN source** (public chain state).
- **D2** — Polymarket requires a mandatory C01 SA-legality + ADAPT/AVOID decision.
- **D3** — C15 owns and maintains the consolidated feature parity matrix.
- **D4** — Centralised engines (odds/matching/oracle internals) declared UNKNOWN.

## 3. Status snapshot

| Sub-task | Status |
|---|---|
| T6.0 (parent) | ACTIVE |
| T6.1 Sorare | ACTIVE |
| T6.2 Socios/Chiliz | ACTIVE |
| T6.3 Polymarket | ACTIVE |
| T6.4 FanDuel/DraftKings | ACTIVE |
| T6.5 Fanatics | ACTIVE |

## 4. Preliminary strategic read

- **ADOPT** — NFT/fantasy mechanics (Sorare), token-voting utility (Socios), FanCash-style loyalty loop.
- **ADAPT** — fan tokens to SA/BLT context; collectibles to phygital.
- **AVOID** — prediction-market regulatory exposure (Polymarket pattern) absent legal cover.
- **BEAT** — all on fiat+crypto+rewards unification in one licensed app.

## 5. Open questions

1. Are fan/BLT tokens securities under SA law? — C01 (UNKNOWN).
2. Can Stremiium legally offer prediction markets in SA? — C01 (likely NO → AVOID).
3. What odds-data providers can Stremiium license? — T7 scoping.
