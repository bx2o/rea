# Polymarket — 04 Rewards & Behavioural Loop (Reverse-Engineered Model)

> Reverse-engineered model from public mechanics. Not decompiled truth; incentive formulas
> are UNKNOWN.

## 1. Action ➔ currency ➔ tier ➔ redemption loop

```
ACTION                     CURRENCY                 TIER                    REDEMPTION
──────────────────────     ──────────────────────   ─────────────────────   ──────────────────
Deposit USDC            ➔  USDC (collateral)     ➔  (account)            ➔ Trade outcome shares
Provide liquidity       ➔  USDC + maker reward  ➔  Maker status        ➔ Incentive payouts
Take a position         ➔  outcome tokens       ➔  Trader profile      ➔ Sell or redeem at 1 USDC
Predict correctly       ➔  USDC payout          ➔  Reputation/leaderboard ➔ Reinvest / withdraw
Engage (markets)        ➔  (no points ledger)   ➔  (none formal)       ➔ — 
```

**Currency surface:** essentially **USDC only** (collateral) with an implicit **implicit
reputation** layer (leaderboards). Polymarket has *no* formal fungible loyalty points in the
classic sense — the "reward" is the trading P&L.

## 2. Traced mechanics (with class)

| Mechanic | Behaviour (reverse-engineered) | Class |
|---|---|---|
| Zero-fee trading | Removes friction; funds growth from incentives/VC | SEEN-as-reported |
| Maker incentives | Pay market-makers to quote → tight spreads → better UX | SEEN-as-reported |
| Leaderboards/reputation | Social proof drives participation | INFERRED |
| Probability framing | "Bet on the future" is more engaging than abstract odds | SEEN-as-reported |
| Event-driven virality | Election/sports events create demand spikes + onboarding waves | SEEN-as-reported |

## 3. Tier math (illustrative shape, NOT asserted numbers)

```
maker_reward ≈ f(quoted_liquidity, time_in_book, spread)
payout = shares * (1 USDC if correct else 0)
No formal tier ladder observed → reputation is social, not ledgered.
```

Exact incentive/leaderboard formulas: **UNKNOWN** (server-side).

## 4. Partner / funding model

* No licensor partner layer like Sorare/Chiliz; the "partner" is effectively the **market
  maker** and the **oracle** (UMA). VC funding subsidises growth.
* Class: **INFERRED**.

## 5. Currency velocity & retention

| Signal | Reading | Class |
|---|---|---|
| Zero fee | Maximises trade volume | SEEN-as-reported |
| Event spikes | Acquisition surges, but retention across quiet periods is the challenge | INFERRED |
| Self-custody USDC | Users can exit freely → weaker lock-in than a points currency | INFERRED |
| No formal loyalty tier | Missing a retention flywheel that points-based rivals have | INFERRED |

## 6. What Stremiium should note

* Polymarket's loop is **PnL-driven, not loyalty-driven** — there is no "action ➔ points ➔
  tier ➔ redemption" currency loop. That is a **gap Stremiium can beat** by wrapping
  prediction participation in its behavioural rewards engine (`$STM`/FanCash).
* Zero-fee economics are only viable with subsidy → Stremiium must design a monetisation
  or deliberately gate the feature.
* Exact incentive/leaderboard mechanics remain UNKNOWN.
