# Polymarket — 02 Technology & Systems

> **REA caveat:** No Polymarket artefact supplied; REA not run. App-internal claims are
> INFERRED/UNKNOWN and name the required extraction step.

## 1. Chain & protocol layer (the architectural signature)

| Layer | Finding | Class |
|---|---|---|
| Settlement chain | **Polygon PoS** (EVM-compatible, low-fee L2/sidechain) | SEEN (docs) |
| Conditional tokens | **Gnosis Conditional Tokens Framework (CTF)** — ERC-1155 outcome tokens | SEEN (docs) |
| Order book | **Hybrid CLOB**: off-chain order matching (fast, cheap) + on-chain settlement | SEEN (docs) |
| Resolution | **UMA Optimistic Oracle** — proposed outcome, dispute window, escalation to DVM if challenged | SEEN (docs) |
| Collateral | **USDC** (Polygon) | SEEN (docs) |
| Data/indexing | Public subgraph/indexer for market/position reads | INFERRED (needed for UI) |
| Fees | Historically **zero trading fee**; maker incentives to bootstrap liquidity | SEEN-as-reported |

**Contract addresses (CTF, CTF Exchange, collateral, UMA adapters) are NOT recorded here.**
They must be pulled from Polymarket official docs/registry and verified on PolygonScan
(bytecode, admin keys, event logs) before any assertion. Recording unverified addresses
would violate the program's honesty rule.

## 2. How the hybrid CLOB works (synthesised, from public docs)

```
Maker/Laker (client)
   │  sign order (EIP-712)
   ▼
Off-chain matching engine (operator)
   │  matched orders
   ▼
On-chain settlement contract (CTF Exchange)
   │  ERC-1155 outcome token transfers + USDC
   ▼
Polygon PoS
   ▲
   │  resolution proposal
UMA Optimistic Oracle --dispute?--> UMA DVM
```

* **Off-chain matching** = centralised speed without centralised custody.
* **On-chain settlement** = self-custody, verifiability.
* Trade-off = **operator/matching centralisation + oracle trust** (the two soft spots).

## 3. Application delivery

| Surface | Finding | Class |
|---|---|---|
| Web app | Primary trading UI | SEEN |
| Mobile apps | iOS/Android | SEEN |
| Wallet model | Non-custodial (user signs); email/social onboarding increasingly abstracted | INFERRED |
| Client stack | Native vs RN vs webview: **UNKNOWN** — resolvable via REA static analysis | UNKNOWN |

## 4. Integration switches relevant to Stremiium

* **Polygon PoS** matches Stremiium's target chain → CTF tooling, USDC rails, and subgraph patterns transfer directly.
* **EIP-712 signed orders** + off-chain matching is the blueprint for a low-cost prediction UI — directly reusable.
* **UMA oracle dependency** is the key trust assumption; Stremiium must decide build vs oracle.
* **USDC collateral** conflicts with an `$STM`-utility + ZAR-first design → adapt.

## 5. Unknowns to resolve

| Question | Resolve via |
|---|---|
| Client delivery model | REA static analysis of mobile package |
| Wallet/auth internals | Network-trace on onboarding/trade |
| Exact on-chain addresses | Official docs + PolygonScan verification |
| Matching-engine internals | Server-side → likely UNKNOWN |
| Fee/incentive formula | Official docs / observed incentives |
| Oracle dispute parameters | Public UMA docs + on-chain config |
