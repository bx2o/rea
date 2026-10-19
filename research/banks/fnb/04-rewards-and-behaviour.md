# 04 — Rewards & Behaviour: First National Bank (FirstRand)

## eBucks Rewards — engine overview

eBucks is the most sophisticated retail behavioural-loyalty engine in South African banking and the
single most important competitor mechanic for Stremiium.

| Element | Assessment | Class / Confidence |
|---|---|---|
| Programme name | **eBucks Rewards** | SEEN / high |
| Tier model | **Five reward levels (Reward Level 1 → 5)** | SEEN / medium |
| Earn drivers | Product adoption, card usage, app logins, auto-sweep/behavioural tasks | SEEN / medium |
| Funding | Merchant-funded discounts + partner subsidies | INFERRED / medium |
| Key partners | **Checkers, Engen, iStore, Clicks/Dis-Chem, flights** | SEEN / medium |
| Max discount | Advertised up to **~40%** on certain partner categories (notably flights) | SEEN / medium |

## Behavioural loop traced end-to-end

| Stage | Mechanic | Class |
|---|---|---|
| 1. Action | Log into app, swipe card, hold products, run auto-sweep/savings behaviours, shop at partners | SEEN / medium |
| 2. Points | eBucks accrue per qualifying behaviour and per Rand spent | INFERRED / medium |
| 3. Tier | Monthly composite score (product adoption + usage + app logins + auto-sweep) sets Reward Level 1–5 | INFERRED / medium |
| 4. Redemption | eBucks spent at partner merchants for discounts/points | SEEN / medium |
| 5. Retention | Higher tier → materially better discounts → stickiness + cross-sell | INFERRED / high |

> **Server-side caution.** The exact weighting formula that converts behaviour into a Reward Level is
> **not public** and is labelled UNKNOWN. The behavioural *drivers* are publicly listed; the *weights*
> are not. See `07` U3 for the resolving REA step.

## Partner funding model

| Question | Assessment | Class |
|---|---|---|
| Who funds discounts? | Predominantly merchant partners buying footfall | INFERRED / medium |
| Partner set | Grocery, fuel, tech retail, travel | SEEN / medium |
| Breakage float | Unredeemed eBucks benefit the operator | INFERRED / low |
| Cost to bank | Low direct cost — a funded-discount model | INFERRED / medium |

## Currency velocity & retention

- Velocity (earn→burn) is not disclosed — UNKNOWN / low.
- Tier-gated discounts create a strong "don't drop a level" retention effect. — INFERRED / high

## Comparison hook for Stremiium

| Dimension | FNB eBucks | Stremiium opportunity |
|---|---|---|
| Currency | Closed eBucks points | Portable `$STM` token |
| Tier gate | Composite behaviour score (opaque) | Transparent, auditable quest score |
| Funding | Merchant-funded discounts | Merchant + protocol-funded token rewards |
| Extensibility | Retail/fuel/travel only | + BLT tokens, collectibles, prediction markets |
| Transparency | Opaque weighting | On-chain rule publication |

## Rewards findings summary

1. Behaviour-gated tiering (not just spend) is the killer mechanic — Stremiium must match and exceed it. SEEN/medium
2. Merchant-funded discounts keep the bank's cost low; Stremiium can add protocol-funded token rewards on top. INFERRED/medium
3. Opaque weighting is an attack surface: transparency is a differentiator. INFERRED/medium
