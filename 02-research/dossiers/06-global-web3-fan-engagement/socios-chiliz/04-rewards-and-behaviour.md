# Socios.com / Chiliz — 04 Rewards & Behavioural Loop (Reverse-Engineered Model)

> Reverse-engineered model from product mechanics and public descriptions. Not a
> decompiled truth; server-side weighting is INFERRED/UNKNOWN.

## 1. Action ➔ currency ➔ tier ➔ redemption loop

```
ACTION                     CURRENCY                 TIER                  REDEMPTION
──────────────────────     ──────────────────────   ───────────────────   ──────────────────
Buy $CHZ (fiat)         ➔  $CHZ (native)         ➔  (entry)             ➔ Buy fan token (FTO)
Participate in FTO      ➔  club fan token       ➔  Holder status ↑     ➔ Vote / rewards
Hold token              ➔  voting power         ➔  Engagement tier ↑   ➔ VIP experiences
Vote / engage           ➔  engagement credit    ➔  Loyalty badge ↑     ➔ Drops, content, merch
Trade on CEX/DEX        ➔  $CHZ / fiat          ➔  (exit)              ➔ Cash out
```

**Currency surface:** fiat → `$CHZ` (entry money) → **fan token** (the "membership" asset)
→ engagement credit/experiences (perks). Two-token structure: a *platform* token plus a
*club* token.

## 2. Traced mechanics (with class)

| Mechanic | Behaviour (reverse-engineered) | Class |
|---|---|---|
| Token-weighted voting | Voting power scales with token balance (± duration) | SEEN-as-reported |
| FTO scarcity | Fixed/limited issuance per offering drives "early holder" value | SEEN-as-reported |
| Holder rewards | Token-gated drops and experiences create holding incentive | SEEN-as-reported |
| Two-token flywheel | `$CHZ` demand is driven by FTO access; club tokens drive engagement | INFERRED |
| Retention via identity | Fans holding a club token buy *identity*, not just utility → strong retention | INFERRED |

## 3. Tier math (illustrative shape, NOT asserted numbers)

```
voting_power ≈ f(balance, holding_duration, activity)
engagement_tier ← threshold(voting_power)  → unlocks perks
flywheel: FTO access ↑ $CHZ demand ↑ token price ↑ perceived value ↑ participation
```

Exact weights/thresholds: **UNKNOWN** (server-side).

## 4. Partner / funding model

* Clubs are the "partner": they get issuance proceeds share and fan engagement; the
  platform monetises `$CHZ` flow and trading interest.
* Class: **INFERRED** (contract terms private).

## 5. Currency velocity & retention

| Signal | Reading | Class |
|---|---|---|
| `$CHZ` as required entry money | Converts fiat attention into token demand | INFERRED |
| Club-token identity | Emotional lock-in stronger than points | INFERRED |
| Thin long-tail liquidity | Weak tokens churn users out | INFERRED |
| Rewards tied to holding | Rewards *holding*, not *spending* | SEEN-as-reported |

## 6. What Stremiium should note

* This is the **closest analogue** to Stremiium's fan/BLT token line — study the
  *action ➔ currency ➔ tier ➔ redemption* shape, but note the critical difference:
  Chiliz rewards **holding** a speculative asset; Stremiium rewards **behaviour** with a
  utility token.
* The two-token flywheel is powerful but **fragile** (price correlation, liquidity drag,
  MiCA exposure). Stremiium's single-token + FanCash design is intentionally simpler.
* Exact weighting and reward formulas remain UNKNOWN.
