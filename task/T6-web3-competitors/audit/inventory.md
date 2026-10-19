# T6 audit · inventory.md

**Task:** T6.0 Stremiium Competitor Dissection
**Owner:** C15 / C13
**Evidence date:** 2026-10-19

---

## 1. What exists

| Asset | State | Evidence class |
|---|---|---|
| `research/web3-competitors/sorare/` | folder present, **empty** | SEEN (repo) |
| `research/web3-competitors/socios-chiliz/` | folder present, **empty** | SEEN (repo) |
| `research/web3-competitors/polymarket/` | folder present, **empty** | SEEN (repo) |
| `research/web3-competitors/fanduel/` | folder present, **empty** | SEEN (repo) |
| `research/web3-competitors/fanatics/` | folder present, **empty** | SEEN (repo) |
| Dossier template (brief §4) | defined | SEEN (brief) |

## 2. What is missing

| Gap | Resolves via |
|---|---|
| No dossier content for any competitor | T6.x |
| No on-chain contract analysis (Sorare/Chiliz/Polymarket) | T6.1–T6.3 |
| No odds-ingestion architecture (FanDuel) | T6.4 |
| No FanCash/collectibles economics (Fanatics) | T6.5 |
| No feature parity matrix | T6 (cross-phase) |
| No REA app decompilation (engine not installed) | T1.1 → T6 |

## 3. Evidence present vs absent

**Present (citable, strong):**
- **On-chain data** — Sorare (StarkEx), Chiliz, Polymarket contracts are publicly verifiable via
  block explorers / the contracts themselves → potentially the **only genuine SEEN forensic source**
  in the whole program (public chain state, not decompilation).
- App-store metadata, published rules, fee schedules, token whitepapers.

**Absent:**
- Centralised server logic (odds engines, matching, settlement oracles internals).
- Any analysable app artefact.

## 4. Competitor recon checklist

| Dimension | Sorare | Socios/Chiliz | Polymarket | FanDuel/DK | Fanatics |
|---|---|---|---|---|---|
| Core product | NFT fantasy | fan tokens | prediction mkt | DFS/sportsbook | collectibles |
| Chain | StarkEx L2 | Chiliz chain | Polygon + Gnosis CTF | off-chain | off-chain |
| Settlement | StarkEx proof | on-chain | **UMA oracle** | internal | internal |
| Token | ETH/StarkEx | CHZ | USDC | n/a | FanCash |
| Reg exposure | gaming | securities? | gambling | gambling | retail |
| SA relevance | high | high | **high-risk** | high | medium |

## 5. Audit verdict

Scaffolded, **content absent**. Notably, T6 is the one task where **public on-chain state may yield
genuine SEEN-class evidence** without REA. All off-chain/centralised mechanics remain INFERRED/UNKNOWN.
