# 04 — Rewards & Behaviour

**Entity:** Flex.one · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19

Flex's behavioural engine is **spend-and-hold on a business platform**, not a consumer points/loyalty system. **No points currency, no tiered status ladder** is evidenced.

---

## 1. Behavioural mechanics (observed/inferred)

| Action | Mechanism | Effect | Evidence |
|---|---|---|---|
| Spend via Global Card | Stablecoin balance → Visa spend | Keeps balances on-platform; interchange revenue | SEEN |
| Deposit stablecoins | Fund balance | AUM/hold | SEEN |
| Use multi-currency | Convert across currencies | FX markup revenue; more platform use | SEEN/INFERRED |
| Subscribe | Platform subscription | Recurring revenue | INFERRED |
| Borrow (private credit) | Credit use | Interest revenue | SEEN |

**INFERRED loop:**

```
Fund stablecoin ──► hold balance ──► spend on card ──► interchange + FX markup
       ▲                                                      │
       └──────── convenience / multi-currency need ◄──────────┘
```

---

## 2. Tier / status math

| Dimension | Exists? | Notes |
|---|---|---|
| Points/loyalty currency | No evidence | Business platform |
| Status tiers | Not a behavioural ladder | Subscription tiers ≠ loyalty status |
| Volume/spend rewards | No cashback scheme evidenced | — |
| Partner-funded rewards | No evidence | — |

---

## 3. Partner funding model

- Flex monetises **interchange + FX + subscription + credit interest**; there is **no merchant/partner-funded rewards pool**.
- **Contrast:** Stremiium's `$STM` engine is a *rewards* system; Flex's is a *fee-monetised spend platform*. Different economics.

---

## 4. Currency velocity & retention

| Dimension | Observation |
|---|---|
| Currency velocity | **High** (business spend) vs Luno/VALR (hold) |
| Retention | Platform integration + multi-currency + credit = sticky for business |
| Consumer gamification | None |

---

## 5. Implications for Stremiium

| Flex lesson | Stremiium action |
|---|---|
| Spend-against-stablecoin drives velocity | ADOPT the spend loop; add `$STM` rewards Flex lacks |
| No consumer loyalty | BEAT with a status ladder |
| FX markup is a real revenue line | ADAPT — but be transparent (SA consumer protection) |
| Business-first | Different market; borrow mechanics only |
