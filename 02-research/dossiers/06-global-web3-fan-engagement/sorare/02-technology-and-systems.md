# Sorare — 02 Technology & Systems

> **REA caveat:** No Sorare binary/ASAR artefact was supplied and REA did not run. All
> app-internal claims are INFERRED or UNKNOWN and name the extraction step required.

## 1. Chain & scaling layer (the architectural signature)

| Layer | Finding | Class |
|---|---|---|
| Settlement base | Ethereum (L1) as the security/settlement anchor | SEEN (StarkWare material) |
| Scaling engine | **StarkEx** — a STARK-based **Validium** ZK-rollup (data availability off-chain, validity proof on-chain) | SEEN (StarkWare public docs) |
| User-facing benefit | Gasless minting/trading subsidised by the operator (users transact in-app without paying L1 gas) | SEEN-as-reported; verify in-app |
| Later direction | Reported movement of newer collections toward **Starknet** (permissionless STARK L2) | INFERRED — needs confirmation via Sorare docs + Starknet explorer |
| Rollup mode nuance | "Validium" = validity proof ON-chain, data OFF-chain (vs zk-Rollup with data on-chain) | SEEN (StarkWare terminology) |

**Contract addresses, exchange/router addresses, and validator sets: NOT recorded here.**
They must be obtained from a StarkWare/Sorare official registry and then verified on a
block explorer (Etherscan / Starkscan / Voyager). Recording an address without that
verification would violate the program's honesty rule.

## 2. Application delivery model

| Surface | Finding | Class |
|---|---|---|
| iOS / Android apps | Native mobile clients distributed via App Store / Google Play | SEEN (app-store metadata) |
| Web client | Browser application | SEEN |
| Auth | Account created with email + password; social/third-party OAuth commonly offered | INFERRED — confirm via reverse-engineered network calls |
| Session/crypto | Wallet abstraction — user keys are managed/abstracted by the platform (custodial-ish "managed wallet" model typical of StarkEx apps) | INFERRED — StarkEx apps commonly use an operator-managed key; requires artifact/network-trace to confirm |
| Client stack | UNKNOWN (native vs RN vs webview) — **would be resolved by REA static analysis of the mobile package** | UNKNOWN |

## 3. Backend & integration surface

| Component | Finding | Class |
|---|---|---|
| Chain indexer | Platform must index StarkEx state to show ownership/lineups | INFERRED (necessary given L2 state off main view) |
| Fiat rails | Fiat on-ramp / payment processor for card top-ups; exact PSP not confirmed | UNKNOWN |
| Exchange/oracle | ETH pricing feed for auction and prize valuation | INFERRED |
| Data feeds | Football/NBA/MLB player-stat feeds required to score fantasy contests | INFERRED — provider not confirmed |
| Anti-fraud | Multi-account / collusion monitoring | INFERRED (standard for prize platforms) |

## 4. Recoverable architecture (Synthesised)

```
User (mobile/web)
   │  email+pw / OAuth
   ▼
Sorare app backend (auth, lineup, scoring, auctions)
   │                                   │
   │  card ownership read/write        │  fiat top-up
   ▼                                   ▼
StarkEx layer (Validium)          Payment processor
   │  validity proof                  │
   ▼                                   │
Ethereum L1 (settlement anchor) ◄──────┘
   ▲
   │  pricing
 ETH market feeds
```

## 5. Integration switches relevant to Stremiium

* **Wallet abstraction is the key UX lesson** — retail users never touch a seed phrase. Stremiium's MPC Wallet-as-a-Service target stack (Brief §8) achieves the same UX with a different trust model (non-custodial MPC vs operator-managed key).
* **Subsidised gas** is a product decision, not a chain requirement; Stremiium must budget it as a marketing/CAC cost, same as Sorare does.

## 6. Unknowns to resolve (extraction plan)

| Question | How to resolve |
|---|---|
| Client delivery model (native/RN/webview) | REA static analysis of `.ipa`/`.apk` and `app.asar` |
| Auth token format, refresh, device binding | REA dynamic network-trace on login |
| Actual chain endpoints / RPC hosts | Network-trace + certificate pinning check |
| Managed-wallet key custody model | Needs both network-trace and on-chain key-permission inspection |
| Scoring service internals | Server-side → likely permanently UNKNOWN |
