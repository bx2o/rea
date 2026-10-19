# FanDuel / DraftKings — 04 Rewards & Behavioural Loop (Reverse-Engineered Model)

> Reverse-engineered model from product mechanics and reported program design. Not
> decompiled truth; server-side tier math is UNKNOWN.

## 1. Action ➔ currency ➔ tier ➔ redemption loop

```
ACTION                        CURRENCY / POINTS            TIER                    REDEMPTION
──────────────────────────    ──────────────────────────   ─────────────────────   ─────────────────
Sign up / deposit          ➔  sign-up promo / bonus     ➔  (entry)             ➔ Risk-free bet / bonus credit
Place bets / enter DFS     ➔  loyalty points / tokens   ➔  Loyalty tier ↑      ➔ Bonus bets, perks, VIP
Play casino / parlays      ➔  points (weighted)         ➔  Status ↑            ➔ Free play, boosts
Sustain volume (weekly)    ➔  points + streak           ➔  Tier maintained     ➔ Exclusive promos, events
Refer a friend             ➔  referral credit          ➔  (growth)            ➔ Bonus credit
```

**Currency surface:** **promotional credits (bonus bets/free play) + a loyalty points
ledger**. The "currency" is effectively *site credit* — spendable only on the platform —
which locks users into the ecosystem.

## 2. Traced mechanics (with class)

| Mechanic | Behaviour (reverse-engineered) | Class |
|---|---|---|
| Promo credits as currency | Bonus bets/free play are non-withdrawable, spend-only → closed loop | SEEN-as-reported |
| Loyalty tiers | Volume-weighted points → status tiers → escalating perks | SEEN-as-reported |
| Odds boosts | Targeted margin giveaway to stimulate specific bet types | SEEN-as-reported |
| Streaks/missions | Gamified daily/weekly tasks drive frequency | INFERRED |
| VIP programs | High-value player relationship management (hosts, bespoke perks) | SEEN-as-reported |
| Bonus-expiry | Credits expire → urgency / velocity | INFERRED |

## 3. Tier math (illustrative shape, NOT asserted numbers)

```
points ≈ w1*bets_placed + w2*stake + w3*parlay_complexity + w4*streak
tier = threshold(points)  →  unlocks(refresh bonuses, boosts, VIP status)
credit_value ∈ {withdrawable?, spend-only}  (bonus credit typically spend-only)
```

Exact weights, thresholds, and credit terms: **UNKNOWN** (server-side / state-specific).

## 4. Partner / funding model

* No third-party licensor as the "partner" (unlike Sorare/Chiliz). The economy is funded by
  the operator's **hold/rake margin**, recycled into promos.
* Sports data providers are **suppliers**, not reward partners.
* Class: **INFERRED**.

## 5. Currency velocity & retention

| Signal | Reading | Class |
|---|---|---|
| Spend-only bonus credits | Maximise on-platform reuse | SEEN-as-reported |
| Volume-weighted tiers | Incentivise *more* wagering (responsible-gaming tension) | INFERRED |
| Expiry on credits | Creates urgency/velocity | INFERRED |
| VIP relationship | High-value retention | SEEN-as-reported |
| Promo-driven CAC | Blended with loyalty | INFERRED |

## 6. What Stremiium should note

* This is the **classic real-money loyalty loop**: promo credits + volume tiers + VIP.
  It is highly effective but **inherently gamifies spending** — a tension with
  responsible-gaming obligations.
* Stremiium's `$STM`/FanCash model should capture the *tiering + perks* value while
  **decoupling rewards from pure wagering volume** (reward engagement/learning, not just
  money spent) — a BEAT opportunity.
* Exact tier math and credit terms remain UNKNOWN.
