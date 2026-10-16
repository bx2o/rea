---
entity: "Sorare"
council: "C13"
department: "web3-competitor-research"
status: "verified"
confidence: "high"
sources:
  - "https://www.bitbase.com/blog/sorare-vs-fifa-collect"
  - "https://sorareintelligence.substack.com/p/sorare-is-not-your-usual-startup"
  - "https://zugestates.com/platforms/sorare-review-sports-card-nft-platform-2026/"
  - "https://coinmarketcap.com/academy/article/what-is-starkware-the-ultimate-guide-to-the-starkware-starknet-and-starkex-ecosystem"
last_updated: "2026-10-16"
---

# Sorare — Tech Stack

## Blockchain evolution
| Phase | Chain | Reason | Tag |
|---|---|---|---|
| Original | Ethereum L1 | initial build | [OBS] |
| 2020 | Loom → Ethereum | forced migration (May 2020) | [OBS] |
| **Oct 2021** | **StarkNet (StarkEx L2)** | cut gas fees | [OBS] |

([bitbase](https://www.bitbase.com/blog/sorare-vs-fifa-collect), [sorareintelligence](https://sorareintelligence.substack.com/p/sorare-is-not-your-usual-startup))

## Architecture
- **StarkEx (StarkWare)** zero-knowledge rollup enables **gas-free** NFT minting/trading for users. [OBS] ([coinmarketcap academy](https://coinmarketcap.com/academy/article/what-is-starkware-the-ultimate-guide-to-the-starkware-starknet-and-starkex-ecosystem))
- **Two-layer product**: ownership layer (wallet-held NFTs) + game layer (fantasy scoring on real match data). [OBS] ([zugestates](https://zugestates.com/platforms/sorare-review-sports-card-nft-platform-2026/))
- Uses a **marketplace** with escrow-style trading and 5% fee. [OBS]

## Engineering notes
- Sorare is noted as having a "super-strong engineering team," having executed **two hard L1/L2 migrations** (Loom→Ethereum, Ethereum→StarkWare). [OBS] ([sorareintelligence](https://sorareintelligence.substack.com/p/sorare-is-not-your-usual-startup))

## Read-across for the NeoBank [INF]
- A **ZK-rollup L2** is the standard pattern for **low-cost, high-frequency collectible mechanics** — relevant if the NeoBank wants on-chain loyalty without gas friction. But note the **custody/UX burden** of wallets; Sorare abstracts this, which is now table-stakes.

## Open questions
- Exact backend/cloud stack, mobile frameworks: [UNK].

## Sources
- [Bitbase — Sorare chain migration](https://www.bitbase.com/blog/sorare-vs-fifa-collect)
- [Sorare Intelligence — engineering](https://sorareintelligence.substack.com/p/sorare-is-not-your-usual-startup)
- [Zugestates — two-layer model](https://zugestates.com/platforms/sorare-review-sports-card-nft-platform-2026/)
- [CoinMarketCap Academy — StarkEx / Sorare](https://coinmarketcap.com/academy/article/what-is-starkware-the-ultimate-guide-to-the-starkware-starknet-and-starkex-ecosystem)
