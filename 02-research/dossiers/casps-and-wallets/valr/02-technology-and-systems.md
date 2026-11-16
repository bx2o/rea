# 02 — Technology & Systems

**Entity:** VALR · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19
**REA status:** `not-executed` — no artefact; stack claims from public docs or marked INFERRED/UNKNOWN.

---

## 1. Matching engine (the core asset)

| Property | Claim / observation | Class |
|---|---|---|
| Type | **Proprietary, high-frequency matching engine** | SEEN (VALR positioning) |
| Throughput | "Very high orders/sec" — VALR markets high rate limits & HFT suitability | **SEEN-as-marketing / UNKNOWN-as-fact** |
| Latency | "Low latency" claimed | **UNKNOWN** (no independent benchmark) |
| Order book | Deepest ZAR-denominated books claimed | SEEN (self/market claim) |
| Markets matched | Spot, spot margin, perpetual futures | SEEN |
| Order types | Limit/market + advanced (per API docs) | SEEN (docs) |

> **CRITICAL:** VALR's orders-per-second and latency numbers are **marketing claims**. No independent, verifiable benchmark exists in this workspace. They are recorded as `SEEN (claim)` = the claim is public; the *fact* is `UNKNOWN`. Resolving step: independent throughput benchmark or REA dynamic instrumentation (still server-side → likely unreachable).

---

## 2. API surface (institutional-grade)

| Surface | Detail | Evidence |
|---|---|---|
| **REST API** | Account management + trading; documented at docs.valr.com | SEEN (VALR API docs) |
| **WebSocket** | Market data / order updates; endpoint `/ws` with rate limits | SEEN (docs) |
| **FIX API** | FIX protocol access (institutional) | SEEN (VALR API page) |
| **SDKs** | Python, Node.js, Java | SEEN (docs/aggregators) |
| **Sub-accounts** | `POST /v1/account/subaccount`; segregated per end-client; transfers `/v1/account/subaccount/transfer` | SEEN (docs) |
| **Multi-user access** | Multiple user access + **dual authorisation** without sharing credentials | SEEN (VALR business page) |
| **Rate limits** | e.g. subaccount create 1/s; transfer 20/s; WebSocket 60/min | SEEN (docs) |

```
Institution ──► FIX / REST ──► ┌───────────────────────────┐
Retail app  ──► WebSocket ───► │  VALR Matching Engine     │◄──► Market data feed
Algo bot    ──► REST+WS ─────► │  (spot / margin / perp)   │
                               └─────────┬─────────────────┘
                                         │
                    ┌────────────────────┼─────────────────────┐
                    ▼                    ▼                     ▼
             Sub-accounts         Custody / wallet        OTC desk / Lending
             (segregated)         (hot/cold)              (block execution)
```

---

## 3. Custody & wallets

| Layer | Observation | Class |
|---|---|---|
| Custody model | Custodial exchange (platform holds keys) | SEEN/INFERRED |
| Cold/hot split | Standard hot/cold split (specifics not published) | INFERRED |
| Qualified custodian | Not publicly disclosed in the sources reviewed | UNKNOWN |
| Segregation | Business/institutional funds via sub-accounts | SEEN (business page); legal segregation UNKNOWN |

---

## 4. Platform & delivery

| Dimension | Observation | Class |
|---|---|---|
| Web platform | Full trading UI (charts, order book) | SEEN |
| Mobile apps | iOS + Android | SEEN (app stores) |
| App framework | UNKNOWN (no artefact) | UNKNOWN |
| Auth (user) | 2FA; multi-user accounts with permissions | SEEN (business page) |
| Auth (API) | API key + secret, signed | INFERRED |

---

## 5. Integration surfaces & third parties

| Surface | Detail | Class |
|---|---|---|
| ZAR deposits | EFT + card rail(s) | SEEN (docs) |
| ZAR withdrawals | Bank transfer (fee ~ flat, per aggregator) | SEEN (LOW) |
| Crypto networks | Multi-chain (BTC, ETH/ERC-20, others) | SEEN |
| Tokenised equities | **xStocks** — tokenised US equities trading (2025) | SEEN (VALR blog) |
| DERIVATIVES | Futures/perp via ODP licence | SEEN |

---

## 6. Gaps / opportunities

| Gap | Stremiium angle |
|---|---|
| Custodial-only, exchange-centric | Non-custodial MPC option as differentiator |
| No core-banking/deposit products | NeoBank bundle beats it |
| Engine claims unverified | Publish verifiable benchmarks → trust |
| No consumer loyalty/status | `$STM` engine fills the gap |
| No B-BBEE/SA-ownership signalling surfaced | Domestic ownership wedge |
