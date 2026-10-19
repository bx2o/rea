# 04 — Rewards & Behaviour

**Entity:** JPMorgan Chase (Kinexys) · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19

JPMorgan does not run a **crypto/points loyalty engine** on Kinexys; its "rewards" at the institutional layer are **economic** (funding savings, settlement certainty, collateral mobility). At the retail layer, Chase runs card rewards programmes (points/cashback) — the relevant consumer analogue for Stremiium. This file traces **both** the institutional stickiness loop and the retail rewards loop.

---

## 1. Institutional behavioural mechanics (Kinexys)

| Action | Mechanism | Effect | Evidence |
|---|---|---|---|
| Open BDA / join network | Deposit-token account | Funds (deposits) stay within JPMorgan | SEEN |
| Use JPM Coin for settlement | 24/7 near-real-time | **Funding cost savings** (no pre-funding across time zones) | SEEN |
| Post tokenised collateral (TCN) | Collateral mobility | Capital efficiency | SEEN |
| Use **intraday repo** | Borrow vs tokenised collateral | Cheaper intraday funding; no balance-sheet use vs overnight | SEEN |
| Programmable payments | Conditionality | Workflow automation → integration lock-in | SEEN |

**INFERRED institutional stickiness loop:**

```
  Deposit/relationship ──► BDA + JPM Coin rails ──► cheaper/instant settlement
        ▲                                                     │
        │                                                     ▼
   deeper integration (programmable payments) ◄── operational lock-in
        │
   more deposits/flows ──► NII + fee revenue ──► more investment
```

---

## 2. Retail rewards (Chase) — context for Stremiium

| Dimension | Chase approach | Relevance to Stremiium |
|---|---|---|
| Card rewards | Points/cashback programmes | `$STM` rewards analogue |
| Ecosystem stickiness | Deposit + card + wealth integration | NeoBank bundle analogue |
| Automated advice | **Wealth Plan** | Behavioural nudging analogue |
| Data-driven engagement | Mobile app ecosystem | Behavioural engine analogue |

> **Honesty:** Chase retail reward rates and program terms are **not enumerated here** (out of scope and rapidly changing); only the *structural* lesson is recorded.

---

## 3. Tier / status math

| Layer | Existence | Notes |
|---|---|---|
| Institutional fee/terms | Negotiated | Not a "tier" — bespoke |
| Retail card rewards tiers | Exist (Chase programs) | Points/cashback by spend |
| Crypto loyalty tiers | **Absent on Kinexys** | — |

---

## 4. Partner funding model

- **Institutional:** savings are **self-funded** (funding-cost reduction), not partner-subsidised.
- **Retail:** card rewards are funded by **interchange + marketing budget** (standard US model) — a **directly relevant funding model** for Stremiium's `$STM` card rewards.

---

## 5. Implications for Stremiium

| JPMorgan lesson | Stremiium action |
|---|---|
| Settlement certainty = stickiness | Price/highlight instant settlement as a retention feature |
| Programmable payments = integration lock-in | Offer programmable/conditional payouts on `$STM` rails |
| Interchange-funded retail rewards | Fund card `$STM` rewards from interchange |
| No crypto loyalty tier at JPMorgan | `$STM` status ladder is a differentiation opportunity |
