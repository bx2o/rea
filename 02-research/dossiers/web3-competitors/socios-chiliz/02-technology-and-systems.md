# Socios.com / Chiliz — 02 Technology & Systems

> **REA caveat:** No Chiliz/Socios artefact supplied; REA not run. App-internal claims are
> INFERRED/UNKNOWN and name the required extraction step.

## 1. Chain & token layer (architectural signature)

| Layer | Finding | Class |
|---|---|---|
| Initial deployment | Fan tokens historically issued on **Ethereum** as ERC-20 (`$BAR`, `$PSG`, `$CITY`, `$UFC`, etc.) | SEEN-as-reported |
| Current chain | **Chiliz Chain** — an **EVM-compatible Layer-1** purpose-built for sports/entertainment tokens | SEEN (Chiliz docs) |
| Migration | Migration from legacy/Ethereum-based infrastructure to Chiliz Chain (Chiliz Chain 2.0 era) | SEEN-as-reported |
| Token standard | ERC-20-compatible (BEP-20 history on Binance chain for some tokens) | SEEN-as-reported |
| Native token | `$CHZ` — gas + primary FTO denomination | SEEN |

**Contract addresses, validator set, bridge contracts, and staking pools: NOT recorded.**
They must be pulled from Chiliz official chain registry and verified on the Chiliz Chain
explorer (e.g., Chiliscan) before any assertion. Recording unverified addresses violates
the program's honesty rule.

## 2. Application delivery

| Surface | Finding | Class |
|---|---|---|
| Socios.com app | Mobile apps (App Store / Google Play) + web | SEEN |
| Auth | Account + wallet abstraction typical (Custodial/embedded wallet for retail) | INFERRED |
| Token custody | Users hold app-managed token balances; withdrawal to external wallet | INFERRED |
| Client stack | Native vs RN vs webview: **UNKNOWN** — resolvable via REA static analysis | UNKNOWN |

## 3. Backend & integration surface

| Component | Finding | Class |
|---|---|---|
| FTO engine | Primary-sale mechanics issuing club tokens against `$CHZ` | INFERRED (product design) |
| Chain indexer | Balance/history reads over Chiliz Chain | INFERRED (necessary) |
| CEX integration | `$CHZ` tradable off-platform | SEEN |
| Social/engagement | Polls, voting, reward distribution tied to token holding | SEEN-as-reported |
| Payment rails | Fiat on-ramp for buying `$CHZ`; PSP identity unconfirmed | UNKNOWN |

## 4. Recoverable architecture (Synthesised)

```
Socios.com client (mobile/web)
   │ account + embedded wallet
   ▼
Socios backend (auth, polls, rewards, FTO orchestration)
   ├─→ Chiliz Chain L1 (EVM) : club ERC-20 fan tokens, $CHZ gas
   │        └─ bridge ↔ Ethereum (legacy tokens)      [INFERRED]
   ├─→ Fiat on-ramp (buy $CHZ)                        [INFERRED]
   └─→ reward/VIP fulfilment service                  [INFERRED]
CEX liquidity ($CHZ)  ◄──►  market
```

Token life cycle (synthesised):

```
FTO(fan token minted, priced in $CHZ) --> HELD
   HELD --vote--> engagement credit
   HELD --stake/reward--> benefits
   HELD --sell on CEX--> exit
```

## 5. Integration switches relevant to Stremiium

* **EVM-compatible L1 = same toolchain as Stremiium's Polygon PoS/ZK-EVM target.** Contracts, indexers (The Graph) and wallet patterns transfer.
* **Fan-token-per-club** model creates thousands of low-liquidity tokens; Stremiium's single-`$STM` approach avoids that fragmentation.
* **Embedded wallet** is the retail gateway — mirrors Stremiium's MPC Wallet-as-a-Service plan.

## 6. Unknowns to resolve

| Question | Resolve via |
|---|---|
| Client delivery model | REA static analysis of `.apk`/`.ipa` |
| Auth/wallet key custody model | Network-trace + on-chain permission inspection |
| Chain RPC endpoints/validators | Network-trace + Chiliz Chain registry + explorer |
| Bridge contracts | Official registry + explorer verification |
| FTO fee formula | Official docs / in-app capture |
