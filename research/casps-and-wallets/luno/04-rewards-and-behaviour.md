# 04 — Rewards & Behaviour

**Entity:** Luno · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19

Luno does **not** run a points/loyalty programme in the traditional bank sense (no eBucks/Greenbacks equivalent). Its behavioural engine is built from **habit-forming product mechanics** rather than a points currency. That distinction matters for Stremiium, whose `$STM` rewards engine is a points-like system.

---

## 1. Behavioural mechanics traced end-to-end

| Action (trigger) | Mechanism | Reward / effect | Evidence |
|---|---|---|---|
| Set a **recurring buy** | Scheduled DCA on a chosen cadence | Automatic accumulation; removes timing anxiety | SEEN (feature) |
| Use **Instant Buy** (vs Exchange) | One-click at ~2% margin | Convenience premium; higher lifetime friction cost | SEEN/INFERRED |
| Hold on-platform | Off-chain ledger → instant free internal transfers | Reduces withdrawal incentive → AUM stickiness | SEEN/INFERRED |
| **Learn-and-earn** content / academy | Educational content; historically rewarded learners with small coin grants | Onboarding + activation | INFERRED (historically offered; verify current) |
| Stake ETH | Lock/delegate for yield | Retention of ETH balances on-platform | SEEN (staking) |
| Referrals | Referral incentives | CAC reduction | INFERRED (common; not asserted as current) |

> **Honesty:** the exact reward amounts, referral rates and any "Learn & Earn" campaign terms are **not** asserted here — only the mechanics are documented.

---

## 2. The habit loop (INFERRED)

```
   Trigger ──────────────► Routine ──────────────► Reward ──────────► Investment
   (recurring buy date /    (instant buy or         (accumulated       (grows balance,
    price alert / academy    scheduled buy)          crypto)            raises exit cost)
    content)
        ▲                                                                     │
        └─────────────────────────────────────────────────────────────────────┘
                        (balance growth re-triggers engagement)
```

| Loop property | Luno's approach | Weakness |
|---|---|---|
| Variable reward | Price volatility = natural variable reward | Not *engineered*; no gamified points |
| Trigger | Scheduled buys, notifications | No tier-driven triggers |
| Investment (switching cost) | Custodial balances + habit | No lock-in/tier status; user can leave freely |
| Social proof | Community/academy | Not a shareable status system |

---

## 3. Tier / status math

- **No published loyalty tiers.** There is no VIP/status ladder tied to behaviour (unlike a bank or an airline).
- **INFERRED:** fee tiers exist on **30-day trading volume** (a *transactional* tier, not a *loyalty* tier). This is a volume-discount ladder, not a behavioural gamification loop.

| Tier dimension | Exists? | Notes |
|---|---|---|
| Behavioural tiers (points→status) | No | Absent |
| Volume-based fee tiers | Yes (inferred) | Trading-volume discount |
| Non-monetary rewards (badges, benefits) | No public evidence | — |
| Referral program | Inferred | Not asserted |

---

## 4. Partner funding model

- Luno is **not** a partner-funded rewards scheme; all "rewards" (staking yield, low fees) are funded from **platform revenue** or **protocol yield**, not merchant/partner subsidy.
- **Contrast with banks:** eBucks/Discovery Vitality are funded jointly by partners; Luno's economics are single-sided (user pays fees).

---

## 5. Currency velocity & retention

| Dimension | Observation |
|---|---|
| Currency velocity | Low: balances are held, not spent (no card/POS spend) |
| Retention effect | Staking + custodial habit + recurring buys |
| Churn trigger | Withdrawal fees, price drawdowns, competitor undercutting |

> **BEAT opportunity:** Luno has **no spend loop** and **no status tier**. Stremiium can bolt rewards onto real spending (card interchange) and a visible `$STM` status ladder — two loops Luno structurally lacks.

---

## 6. What Stremiium should lift vs leave

| Mechanic | Recommendation | Reason |
|---|---|---|
| Recurring buys (DCA) | **ADOPT** | Proven, cheap activation mechanic |
| Learn-and-earn stretch | **ADAPT** | Fund via `$STM` from treasury, not coin grants |
| Volume-based fee tiers | **ADOPT/ADAPT** | Combine with loyalty status |
| No-status/no-spend model | **AVOID** | Leaves retention on the table |
| No partner funding | **BEAT** | Stremiium can subsidise via interchange + partner funding |
