---
entity: "Socios.com / Chiliz (CHZ)"
council: "C13"
department: "web3-competitor-research"
status: "partial"
confidence: "medium"
sources:
  - "https://www.chiliz.com/CHZ_whitepaper_v1.1.pdf"
  - "https://www.chiliz.com/"
  - "https://www.fujitac.com/flash/4b3987c8144cd992.html"
  - "https://grokipedia.com/page/chiliz"
last_updated: "2026-10-16"
---

# Socios.com / Chiliz — Tech Stack

## Chiliz Chain
- **Chiliz Chain** is a **sports-focused blockchain** hosting fan tokens and Socios.com engagement; evolved to support **EVM-compatible** token deployment and a **Dragon 8** consensus/economics upgrade. [OBS] ([chiliz whitepaper](https://www.chiliz.com/CHZ_whitepaper_v1.1.pdf))
- Validators include **OKX, Animoca Brands, Ankr, SBI Holdings, EDF Group**, plus a football-league validator (K League). [OBS] ([chiliz](https://www.chiliz.com/))

## Token contracts
- Fan Tokens are described as **ERC-20-style** contracts with **club/platform multisig mint control** — i.e., supply is centrally administered. [OBS]/[UNVERIFIED] ([fujitac](https://www.fujitac.com/flash/4b3987c8144cd992.html))
- CHZ is the **native/utility token**, subject to an inflationary consensus mechanism (validator/delegator rewards). [OBS]

## Platform architecture
- **Socios.com app** abstracts wallet/crypto complexity for fans (fiat on-ramp → CHZ → Fan Token). [OBS]
- Regulatory infra: **MiCA-authorised Socios Europe Services** (EU), with compliant gateway to purchase/trade Fan Tokens. [OBS] ([socios](https://www.socios.com/the-chiliz-group-celebrates-dual-mica-milestone-european-licence-for-socios-europe-services-and-mica-compliant-chz-white-paper/))

## Reading [INF]
- Chiliz is a **purpose-built L1/EVM chain + app** — heavier than Sorare's L2 approach, because it needs to host many club tokens and pay validators. For the NeoBank, a **dedicated chain is almost certainly over-engineering**; an L2 or off-chain rewards ledger suffices.

## Open questions
- Consensus mechanism specifics (PoSA/DPoS), TPS, exact Dragon 8 parameters: [UNK].

## Sources
- [Chiliz White Paper v1.1](https://www.chiliz.com/CHZ_whitepaper_v1.1.pdf)
- [Chiliz — official site (validators)](https://www.chiliz.com/)
- [Fujitac — fan token contract critique](https://www.fujitac.com/flash/4b3987c8144cd992.html)
- [Socios.com — MiCA gateway](https://www.socios.com/the-chiliz-group-celebrates-dual-mica-milestone-european-licence-for-socios-europe-services-and-mica-compliant-chz-white-paper/)
