# Sorare — 04 Rewards & Behavioural Loop (Reverse-Engineered Model)

> The loop below is reverse-engineered from product design and publicly described
> mechanics. It is a **model**, not a decompiled truth. Steps depending on server-side
> logic are INFERRED; the extraction step that would confirm them is named.

## 1. The action ➔ currency ➔ tier ➔ redemption loop

```
ACTION            CURRENCY               TIER / SCARCITY          REDEMPTION
─────────────     ─────────────────      ───────────────────      ─────────────────
Build lineup  ➔   (none: skill-based) ➔  Contest tier (Div/level)➔ ETH + card prizes
Win contests  ➔   ETH + rare cards    ➔  Better squad cards     ➔ Reinvest into rare cards
Buy card      ➔   Card asset (NFT)    ➔  Scarcity tier ↑        ➔ Field in higher-tier contests
Sell card     ➔   ETH / credit       ➔  (liquidity)            ➔ Cash out / rebuy
Open "packs"  ➔   random cards       ➔  Scarcity roll          ➔ Feed the roster
```

**Currency surface:** three moneys — *fiat* (top-ups), *ETH* (buy/sell/prize), *cards*
(the skill token). Sorare's design deliberately avoids a single points ledger; the card
IS the token.

## 2. Traced mechanics (with class)

| Mechanic | Behaviour (reverse-engineered) | Class |
|---|---|---|
| Scarcity tiers | Tier caps mint supply; tier gates both price and contest eligibility | SEEN-as-reported |
| Contest eligibility | Higher-scarcity cards needed for higher-reward contests → upward spending pressure | INFERRED |
| Prize distribution | Skill-weighted; variance designed to retain ("near-miss" payouts) | INFERRED |
| Reinvestment loop | ETH prizes most useful when re-spent on cards → closed-loop currency velocity | INFERRED |
| New-player grants | Free/cheap starter cards to seed the roster (onboarding hook) | INFERRED-as-reported |
| Progression | Manager level / division climbing ties contests to a ladder | SEEN-as-reported |

## 3. Tier math (illustrative shape, NOT asserted numbers)

```
Expected reward per contest ≈ f(entry size, card scarcity of squad, skill percentile)
Progress:        div_n --(win)--> div_{n+1}  → higher entry caps + richer pools
Spending trigger: qualification for richer contest requires scarcer cards
Retention trigger: sunk card portfolio + ongoing league seasons
```

Exact formulas: **UNKNOWN** (server-side scoring). Would require either official docs or
a black-box experiment harness — not a decompiler.

## 4. Partner / funding model

* Licensors (clubs, leagues, players) receive royalties → they are the "partner" whose
  IP funds the reward economy.
* Class: **INFERRED** (industry norm; contract terms private).

## 5. Currency velocity & retention

| Signal | Reading | Class |
|---|---|---|
| Closed loop (ETH → cards) | Maximises in-platform GMV | INFERRED |
| Seasonal reset (new season cards) | Re-engagement + re-monetisation each season | SEEN-as-reported |
| Scarcity gates | Convert "fun" into "spend" | INFERRED |
| Portfolio stickiness | Sunk-cost retention | INFERRED |

## 6. What Stremiium should note

* Sorare's loop is **skill-first, spend-second** — the reward feels *earned*, not bought.
  This is the single most transferable behavioural insight.
* The absence of a fungible points token means **no single redemption currency** — which
  is *good* for regulatory surface but *weaker* for cross-sell. Stremiium's `$STM` +
  FanCash-style currency must reconcile both.
* Any exact contest scoring, division thresholds, or prize tables are UNKNOWN here.
