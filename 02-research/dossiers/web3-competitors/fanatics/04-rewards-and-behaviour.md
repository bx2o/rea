# Fanatics — 04 Rewards & Behavioural Loop (Reverse-Engineered Model)

> Reverse-engineered model from public program terms and product mechanics. Not decompiled
> truth; server-side accrual math is UNKNOWN.

## 1. Action ➔ currency ➔ tier ➔ redemption loop (FanCash)

```
ACTION                        CURRENCY                TIER                     REDEMPTION
──────────────────────────    ──────────────────────  ──────────────────────   ─────────────────────
Buy merch (commerce)       ➔  FanCash (%)           ➔  (account)            ➔ Discount on next purchase
Buy cards/collectibles     ➔  FanCash (%)           ➔  (account)            ➔ Apply to cards/merch
Join live breaks           ➔  FanCash (%)           ➔  (engagement)         ➔ Slot credit / discounts
Bet (where licensed)       ➔  FanCash / promos      ➔  (status)             ➔ Bonuses / perks
Refer friends              ➔  FanCash / credit      ➔  (growth)             ➔ Discount credit
```

**Currency surface:** a single **closed-loop loyalty currency (FanCash)** redeemable across
verticals; plus sportsbook *promotional credits* on the betting side. It is spend-only
(closed) — not withdrawable, not tradable.

## 2. Traced mechanics (with class)

| Mechanic | Behaviour (reverse-engineered) | Class |
|---|---|---|
| %-back on purchases | Earn FanCash on merch/cards | SEEN-as-reported |
| Cross-vertical redemption | FanCash usable across categories | SEEN-as-reported |
| Unified identity | One account powers all verticals → lowers repeat CAC | SEEN-as-reported |
| Closed-loop currency | Spend-only → keeps value inside ecosystem | INFERRED |
| Exclusives/bundles | Create redemption targets | INFERRED |
| Betting promos | Separate promo-credit economy on sportsbook | INFERRED |

## 3. Tier/currency math (illustrative shape, NOT asserted numbers)

```
fancash_earned ≈ rate(vertical) * purchase_value
balance lifetime = Σ earned − Σ redeemed
redeem = discount at checkout (closed loop; typically no cash-out)
No formal public tier ladder asserted; status is account/value-based   [UNKNOWN]
```

Exact earn rates, expiry, and any tier thresholds: **UNKNOWN** (program terms / server-side).

## 4. Partner / funding model

* The "partner" economy is **licensors** (leagues/teams/players) whose IP drives merch/cards;
  FanCash is funded by retail margin, not by a third-party.
* Class: **INFERRED**.

## 5. Currency velocity & retention

| Signal | Reading | Class |
|---|---|---|
| Closed-loop, spend-only | Duty to redeem → repeat purchase | INFERRED |
| Cross-vertical redemption | Broadens basket, raises LTV | SEEN-as-reported |
| Unified identity | Reuse lowers re-acquisition cost | SEEN-as-reported |
| Missing cash-out | Weakens "currency" perception vs a token | INFERRED |

## 6. What Stremiium should note

* **Best-in-class cross-vertical loop**: one identity + one currency across categories is
  precisely the Program Brief's "one behavioural rewards engine" goal. This is the model to
  ADOPT (with `$STM`/FanCash as the currency).
* The absence of cash-out / tradability is Fanatics' limit — Stremiium's `$STM` adds
  on-chain utility (fee discount, buy-back/burn) while keeping rewards spend-first.
* Exact FanCash earn rates/thresholds remain UNKNOWN.
