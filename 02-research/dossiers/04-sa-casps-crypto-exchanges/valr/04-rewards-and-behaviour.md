# 04 — Rewards & Behaviour

**Entity:** VALR · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19

VALR runs **no consumer loyalty/points programme**. Its "rewards" are **economic**: **negative maker fees (rebates)** for liquidity providers and **volume-tiered discounts**. The behavioural engine is *trader/trader-volume-driven*, not consumer-habit-driven.

---

## 1. Behavioural mechanics

| Action | Mechanism | Reward / effect | Evidence |
|---|---|---|---|
| Provide liquidity (limit orders on ZAR pairs) | Maker rebate | **Negative fee** (earn −0.01%) | SEEN (published) |
| Trade high volume | Tiered fee schedule | Lower taker fees | SEEN |
| Bring institutional flow | Sub-accounts, FIX, dual-auth | Lower all-in cost, segregation | SEEN |
| Hold/institutional custody | Lending, staking | Yield | SEEN |
| Large block trades | OTC desk | Price improvement vs order book | SEEN |

**INFERRED market-making loop:**

```
Maker posts ZAR limit order ──► provides liquidity ──► earns rebate (−0.01%)
        ▲                                                        │
        │                                                        ▼
   deeper ZAR books  ◄──── attracts takers (pay 0.05–0.10%) ◄────┘
        │
   more volume ──► lower fee tier ──► more volume (volume flywheel)
```

---

## 2. Tier / status math

| Tier dimension | Exists? | Notes |
|---|---|---|
| Behavioural loyalty tiers | No | Absent |
| **Volume-based fee tiers** | Yes | 30-day volume → fee discount |
| Maker rebate tiers | Yes (ZAR) | Liquidity mining |
| Non-monetary rewards | No public evidence | — |
| Gamification (badges/streaks) | No public evidence | — |

> VALR's "tier" is purely **economic/volume**, not **loyalty/behavioural**.

---

## 3. Partner funding model

- VALR's rebates are funded from **exchange revenue** (taker fees), not merchant partners.
- There is **no merchant-funded rewards scheme** and **no spend loop** — even `VALR Pay` is a transfer utility, not an interchange-funded rewards engine.

---

## 4. Currency velocity & retention

| Dimension | Observation |
|---|---|
| Currency velocity | Variable: traders rotate assets; holders stake/lend |
| Retention | Fee tiers + API integration + sub-account lock-in (institutional) |
| Churn trigger | Fee undercutting, outages, liquidity fragmentation |
| Consumer stickiness | **Low** — no status/rewards, no spend loop |

---

## 5. Gaps vs Stremiium

| VALR gap | Stremiium opportunity |
|---|---|
| No loyalty/status | `$STM` status ladder |
| No spend/interchange loop | Card interchange-funded rewards |
| No deposit/credit bundle | NeoBank deposit + credit products |
| Rebates are complex/hidden | Transparent, simple `$STM` fee discounts |
| Trader-centric onboarding | Consumer-first onboarding + gamified adoption |

**Recommendation:** **ADOPT** maker rebate mechanics to seed liquidity; **BEAT** on consumer rewards, spend loops and status tiers — none of which VALR offers.
