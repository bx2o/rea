---
entity: "Polymarket"
council: "C13"
department: "web3-competitor-research"
status: "verified"
confidence: "high"
sources:
  - "https://sacra.com/c/polymarket/"
  - "https://www.panewslab.com/zh-hant/articles/019ed88f-da6b-736e-bf06-dfbda97f5965"
last_updated: "2026-10-16"
---

# Polymarket — Tech Stack

## Blockchain & settlement
- **Polygon** (Ethereum L2) for settlement; **USDC** stablecoin as the trading denomination. [OBS] ([sacra](https://sacra.com/c/polymarket/))
- Chosen over earlier Ethereum-mainnet prediction markets (Augur, Gnosis) for **lower fees, higher speed, and a near-conventional internet-product UX**. [OBS] ([panewslab](https://www.panewslab.com/zh-hant/articles/019ed88f-da6b-736e-bf06-dfbda97f5965))

## Architecture choices
- **Non-custodial**: the protocol never holds user funds; **UMA oracle** writes resolution results on-chain — a critical design that let it keep operating while offshore. [OBS]
- **Meta-transactions** remove visible gas costs. [OBS]
- **Wallet-less onboarding** via MoonPay/Stripe fiat rails and social-login hot wallets. [OBS]
- **Maker-incentive engine** pays performance rewards to post tight two-sided liquidity. [OBS]

## Corporate / infra
- Acquired **Brahma** (crypto/DeFi infrastructure startup) to simplify and scale blockchain operations. [OBS]
- US arm operates as **QCX LLC (Polymarket US)** under CFTC designation, clearing via **Polymarket Clearing**. [OBS]

## Reading for the NeoBank [INF]
- The **non-custodial + oracle + meta-transaction** stack is a template for **regulator-friendly on-chain products**: the operator is a software/matching layer, not a custodian of funds. This lowers certain regulatory exposures compared to holding balances (as a bank does).

## Open questions
- Smart-contract language/details, exact oracle configuration, cloud infra: [UNK].

## Sources
- [Sacra — Polymarket technology](https://sacra.com/c/polymarket/)
- [PANews — Polymarket six years](https://www.panewslab.com/zh-hant/articles/019ed88f-da6b-736e-bf06-dfbda97f5965)
