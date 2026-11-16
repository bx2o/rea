# T6 implementation · build-spec.md

**Task:** T6.0 Stremiium Competitor Dissection
**Owner:** C15 / C13 · **Convention authority:** C03.

---

## 1. Artefacts to produce

| Entity | Folder | Files |
|---|---|---|
| Sorare | `research/web3-competitors/sorare/` | README, 01–08, evidence-ledger.json |
| Socios.com / Chiliz | `research/web3-competitors/socios-chiliz/` | README, 01–08, evidence-ledger.json |
| Polymarket | `research/web3-competitors/polymarket/` | README, 01–08, evidence-ledger.json |
| FanDuel / DraftKings | `research/web3-competitors/fanduel/` | README, 01–08, evidence-ledger.json |
| Fanatics | `research/web3-competitors/fanatics/` | README, 01–08, evidence-ledger.json |

Plus **one consolidated parity matrix** (C15), e.g. `research/web3-competitors/PARITY-MATRIX.md`.

## 2. Per-file content contract (highlights)

- **02 Technology** — chain/L2 (Sorare StarkEx; Chiliz; Polymarket Polygon+Gnosis CTF+UMA),
  settlement mechanism, client delivery. On-chain items cite contract/explorer ⇒ SEEN.
- **03 Products** — entry fees, marketplace fees, token pricing, DFS contest economics.
- **04 Rewards** — fantasy scoring, token voting, FanCash earning loop; map action➔reward.
- **06 Regulatory** — gambling/securities exposure; Polymarket history; C01 SA-legal assessment.
- **07 REA** — 4 buckets; centralised engines UNKNOWN; on-chain SEEN.
- **08 Implications** — ADOPT/ADAPT/AVOID/BEAT for Stremiium fan/BLT/DFS features.

## 3. Acceptance tests

| Test | Method | Pass |
|---|---|---|
| T-DOSSIER-9 | 9 files per folder | ✅/❌ |
| T-ONCHAIN | on-chain mechanics cite contract/explorer as SEEN | ✅/❌ |
| T-PARITY | parity matrix covers ≥12 features × 5 competitors | ✅/❌ |
| T-LEGAL | C01 flags gambling/DFS/prediction SA exposure | ✅/❌ |
| T-LEDGER | ledgers validate | ✅/❌ |

## 4. Strategic priority

Sorare and Socios/Chiliz are the closest token-mechanic analogues to Stremiium's fan/BLT tokens and
$STM utility. Polymarket is the highest regulatory risk (C01 ADAPT/AVOID mandatory). FanDuel informs
the DFS odds/integration engineering. Fanatics informs phygital collectibles.
