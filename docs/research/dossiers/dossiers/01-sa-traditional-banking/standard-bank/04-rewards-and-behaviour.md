# 04 — Rewards & Behaviour: Standard Bank Group

## UCount Rewards — engine overview

UCount is Standard Bank's group-wide loyalty programme. It is a **partner-funded points engine** where
earn is tied to product holding and partner spend, and redemption converts points to fuel/grocery value.

| Element | Assessment | Class / Confidence |
|---|---|---|
| Programme name | **UCount Rewards** | SEEN / high |
| Core earn | Product holding + qualifying monthly behaviour + partner spend | SEEN / medium |
| Fuel partner | **Caltex**, now **Astron Energy** (Caltex SA rebranded to Astron after 2018 Glencore acquisition) | SEEN / medium |
| Grocery partner | Tiered grocery retail partner (verify current partner) | INFERRED / low |
| Tier structure | Graded tiers (typically Blue → Silver → Gold → Black) | INFERRED / medium |
| Redemption | Points → fuel/grocery/vouchers | SEEN / medium |

## Behavioural loop traced end-to-end

| Stage | Mechanic | Class |
|---|---|---|
| 1. Action | Hold/use products (accounts, cards), shop at partner stores, fuel at partner stations | SEEN / medium |
| 2. Points | Points accrue per qualifying action and per Rand spent | INFERRED / medium |
| 3. Tier | Monthly/period qualifying spend and product count set tier level | INFERRED / medium |
| 4. Redemption | Points convert to partner value (fuel/grocery discounts) | SEEN / medium |
| 5. Retention | Sunk points balance + tier status create switching cost | INFERRED / high |

## Partner funding model

| Question | Assessment | Class |
|---|---|---|
| Who pays for rewards? | Predominantly merchant/partner-funded discounts, partly bank-funded | INFERRED / medium |
| Partner economics | Partners buy footfall; bank captures loyalty | INFERRED / medium |
| Breakage | Unredeemed points are a float/income source for loyalty operators | INFERRED / low |

## Currency velocity & retention

- Reward **velocity** (points earned → redeemed) is not publicly disclosed. — UNKNOWN / low
- Retention effect is inferable from the point-balance switching cost. — INFERRED / high

## Comparison hook for Stremiium

| Dimension | Standard Bank UCount | Stremiium opportunity |
|---|---|---|
| Reward unit | Points (partner-bound) | Native token `$STM` (programmable) |
| Earn trigger | Product + partner spend | Any transaction + behavioural quests |
| Redemption | Fuel/grocery via partners | Token, fee discounts, BLT, collectibles |
| Transparency | Opaque tier math | On-chain/auditable programmatics |

## Rewards findings summary

1. Partner-funded earn lowers the bank's cost but caps earn flexibility. INFERRED/medium
2. Tier status + point float are powerful retention locks Stremiium should replicate in tokenised form. INFERRED/high
3. No digital-asset rewards linkage exists — a clear Stremiium differentiation lane. INFERRED/medium
