# Fanatics — 02 Technology & Systems

> **REA caveat:** No Fanatics artefact supplied; REA not run. App-internal claims are
> INFERRED/UNKNOWN and name the required extraction step.

## 1. The architectural signature: unified identity across verticals

| Layer | Finding | Class |
|---|---|---|
| Unified customer ID | One account/identity across e-commerce, collectibles and betting | SEEN-as-reported |
| Loyalty currency | **FanCash** — cross-vertical rewards currency | SEEN |
| Storefront | High-scale e-commerce platform (catalogue, checkout, fulfilment) | SEEN |
| Collectibles | Topps card catalogue + digital break/live-commerce integration | SEEN-as-reported |
| Betting | Sportsbook stack (from the acquired operator base) | SEEN-as-reported |
| Live commerce | Streaming "breaks" with real-time purchasing | SEEN-as-reported |
| Wallet/ledger | FanCash ledger + reward accrual across verticals | INFERRED |

> No API endpoints, auth protocols, or vendor lists are asserted. These require REA
> network-trace on an artefact.

## 2. Recoverable architecture (Synthesised)

```
                 ┌─────────────────────────────────────────┐
                 │  UNIFIED CUSTOMER IDENTITY (SSO)         │
                 └───────────────┬─────────────────────────┘
                                 │
     ┌───────────────┬───────────┼────────────┬───────────────┐
     ▼               ▼           ▼            ▼               ▼
 Commerce        Collectibles  Live-commerce Betting      Events
 (storefront)    (Topps)       (breaks)      (sportsbook)   (shows)
     └───────────────┴───────────┴────────────┴───────────────┘
                                 │
                        FanCash loyalty ledger
                     (earn across verticals → redeem)
```

* **FanCash is the glue**: the same currency earned on merch is spent on collectibles, and
  vice-versa, which lifts cross-sell and lifetime value.
* **Identity reuse** (one login/KYC across commerce and betting) is the strategic payload.

## 3. Application delivery

| Surface | Finding | Class |
|---|---|---|
| Mobile apps | iOS/Android (commerce + collectibles + betting apps) | SEEN |
| Web | Multiple web storefronts | SEEN |
| Client stack | Native vs RN vs webview: **UNKNOWN** — resolvable via REA static analysis | UNKNOWN |
| Auth | Account-based; betting side requires KYC | INFERRED |

## 4. Integration switches relevant to Stremiium

* **Unified customer ID across verticals** is exactly Stremiium's "one identity, one
  rewards engine" ambition — study how FanCash connects categories.
* **Collectibles ↔ commerce ↔ betting** cross-sell loop is directly portable to
  *collectibles ↔ banking ↔ prediction/DFS*.
* Fanatics' currency is **centralised** (no token); Stremiium's `$STM` adds on-chain
  settlement and programmatic buy-back/burn — a differentiator to design carefully.

## 5. Unknowns to resolve

| Question | Resolve via |
|---|---|
| Client delivery model | REA static analysis of mobile package |
| FanCash ledger internals (accrual/expiry) | Program terms + network-trace |
| Auth/SSO protocol, identity vendor | Network-trace on login |
| Betting KYC/geolocation vendors | Network-trace on onboarding |
| API endpoints/hosts | Network-trace + cert-pinning check |
