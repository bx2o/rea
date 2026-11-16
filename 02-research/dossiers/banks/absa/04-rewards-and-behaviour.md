# 04 — Rewards & Behaviour: ABSA Group

## Absa Rewards — engine overview

| Element | Assessment | Class / Confidence |
|---|---|---|
| Programme name | **Absa Rewards** | SEEN / high |
| Core mechanic | **Cashback** + tiered grocery/fuel rebates | SEEN / medium |
| Fuel partner | **Sasol** | SEEN / medium |
| Tier structure | Tiered (e.g. Silver/Gold/Platinum-type) rebate levels | INFERRED / medium |
| Redemption | Cash back to account / partner rebates | SEEN / medium |
| Behavioural complexity | Lower than FNB eBucks (spend-centric) | INFERRED / medium |

## Behavioural loop traced end-to-end

| Stage | Mechanic | Class |
|---|---|---|
| 1. Action | Use Absa card/products; spend at partner merchants | SEEN / medium |
| 2. Accrual | Qualifying spend accrues cashback/rebate value | INFERRED / medium |
| 3. Tier | Spend threshold sets rebate tier | INFERRED / medium |
| 4. Redemption | Cashback into account; partner rebates (fuel/grocery) | SEEN / medium |
| 5. Retention | Rebate + tier status create modest switching cost | INFERRED / medium |

> **Server-side caution.** The precise rebate/tier formula is not public and is labelled UNKNOWN. See
> `07` U2 for the resolving REA step.

## Partner funding model

| Question | Assessment | Class |
|---|---|---|
| Who funds rebates? | Mixed: cashback bank-funded + partner-funded fuel/grocery | INFERRED / medium |
| Fuel partner | Sasol | SEEN / medium |
| Breakage | Less relevant (cashback is paid out, not points-floated) | INFERRED / low |

## Currency velocity & retention

- Cashback is direct value (no float), so Absa's retention relies more on tier status and product
  bundling than on accumulated currency. — INFERRED / medium
- Compared to FNB eBucks, Absa's programme is **less behaviourally gamified** — a seam. — INFERRED / medium

## Comparison hook for Stremiium

| Dimension | Absa Rewards | Stremiium opportunity |
|---|---|---|
| Reward unit | Cashback + rebates | `$STM` token + cashback hybrid |
| Tier gate | Spend thresholds | Behaviour + spend quest score |
| Fuelling | Bank + partner funded | Protocol-funded token rewards |
| Engagement | Low gamification | Gamified quests, streaks, collectibles |
| Transparency | Opaque rebate tables | Auditable, simulatable rules |

## Rewards findings summary

1. Cashback is clear value but weak gamification — Stremiium can be both clear **and** engaging. INFERRED/medium
2. Absa's fuel partnership (Sasol) shows partner-funded fuel rebates work in SA. SEEN/medium
3. Absa's rewards are less behaviourally sticky than eBucks — a competitor weakness to beat. INFERRED/medium
