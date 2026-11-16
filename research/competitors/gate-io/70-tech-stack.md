---
entity: "Gate.io / Gate"
council: "C13"
department: "web3-competitor-research"
status: "partial"
confidence: "medium"
sources:
  - "https://bi.live/announcements/article/49713"
  - "https://www.gateioservicefront.com/blog/gate-releases-latest-proof-of-reserves-report-total-reserve-ratio-reaches-127-total-reserves-exceed-8.215-billion"
  - "https://pt.m.wikipedia.org/wiki/Gate.io"
last_updated: "2026-10-16"
---

# Gate.io / Gate — Tech Stack

## Own chain / infrastructure
- **GateChain** — the group's blockchain; **Gate Layer** (L2) showed **>100M addresses** and **+22% MoM transaction volume** (Jan 2026). [OBS] ([Gate Jan 2026](https://bi.live/announcements/article/49713))
- Announced **fully on-chain cross-chain solution** for GateChain (Jan 2026). [OBS]

## Exchange architecture
- High-throughput **matching engine** supporting spot, futures (100x), margin, ETF; multi-asset (crypto + TradFi) in a single account. [OBS]
- **Proof of Reserves** with **zk-SNARK** + **Merkle-tree** verification (cryptographic, verifiable). [OBS] ([Gate PoR](https://www.gateioservicefront.com/blog/gate-releases-latest-proof-of-reserves-report-total-reserve-ratio-reaches-127-total-reserves-exceed-8.215-billion))
- **Web3 wallet**, NFT marketplace, Gate Square (social). [OBS]

## Security posture
- Reserve ratio consistently **>100%** (117–127%); core assets (BTC ~140.69% Jan 2026). [OBS]
- History note: predecessor **Bter.com** suffered a 2015 hack ~$1.75M — relevant context for exchange security: [UNVERIFIED]. [INF]

## Reading for the NeoBank [INF]
- **Verifiable proof of reserves via ZK** is the most transferable technology idea: a NeoBank could publish **cryptographically verifiable solvency/deposit attestations**, differentiating on trust.

## Open questions
- Matching-engine vendor, cloud infra, custody architecture (MPC/multisig): [UNK].

## Sources
- [Gate — Jan 2026 report (Gate Layer, PoR 125%)](https://bi.live/announcements/article/49713)
- [Gate — Proof of Reserves (127%, $8.215B)](https://www.gateioservicefront.com/blog/gate-releases-latest-proof-of-reserves-report-total-reserve-ratio-reaches-127-total-reserves-exceed-8.215-billion)
- [Wikipedia (PT) — Gate.io](https://pt.m.wikipedia.org/wiki/Gate.io)
