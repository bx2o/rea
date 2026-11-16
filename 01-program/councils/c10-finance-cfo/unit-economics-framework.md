# C10 — Unit Economics Framework

- **Owner:** C10 Chief Financial Officer · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Model:** [`financial-model.md`](./financial-model.md) · **Cost-to-serve interlocks:** `../c02-operations/service-levels.md`

> **No measured economics are asserted.** Every value is `[ASSUMPTION]` (placeholder for structure) or `[OPEN ITEM]` (needs real data). Benchmarks from outside are `[UNVERIFIED]`. This framework exists so that when real data arrives, it lands in a defined place.

---

## 1. Purpose

Unit economics answer one question honestly: **does acquiring and serving a customer create or destroy value, and how fast?** In a bank this is harder than in SaaS because a customer has *multiple* value streams (float, NII, interchange, fees) and *multiple* cost streams (CAC, servicing, fraud, funding, capital).

---

## 2. Metric definitions

| Metric | Definition | Notes |
|---|---|---|
| **CAC** | fully-loaded cost to acquire one *funded/active* account | include marketing, channel, onboarding ops, incentives |
| **ARPU** | average revenue per active user per period | split: NII vs fees vs interchange |
| **Gross margin** | revenue − direct variable cost (servicing, scheme, fraud, funding) | excludes fixed cost |
| **Cost-to-serve** | fully-loaded cost to serve one active account / period | ops + tech + support, allocated |
| **LTV** | present value of a customer's contribution over expected life | must net cost-to-serve, fraud, funding, capital drag |
| **Payback** | months for cumulative contribution to recover CAC | key early-stage gate |
| **Contribution margin** | revenue − all variable cost, per account | the honest per-customer profit |
| **Capital intensity** | regulatory capital consumed per active account | unique to banking |

---

## 3. Framework structure

```text
Per active account (monthly) `[ASSUMPTION placeholders]`
  Revenue
    + NII share                  (from balances × NIM)          A5,A6
    + payment/interchange        (TPV × take rate)              A10,A11
    + account/subscription fee                                   A4
    + lending margin             (book × yield − funding − loss) A7,A8,A9
  − Variable cost
    − servicing / cost-to-serve
    − scheme / rail fees
    − fraud & dispute cost
    − funding cost
  = Contribution margin
  − Capital drag (capital consumed × cost of capital)
  = Risk-adjusted contribution

Acquisition
  CAC  vs  Σ(discounted contribution) = LTV
  Payback = months to cumulative contribution ≥ CAC
```

---

## 4. Placeholder inputs (structure-test only)

| Ref | Input | Placeholder | Tag |
|---|---|---|---|
| U1 | CAC per funded account | R 450 | `[ASSUMPTION]` |
| U2 | Blended ARPU / month | R 25 | `[ASSUMPTION]` |
| U3 | Interchange contribution / month | R 20 | `[ASSUMPTION]` |
| U4 | NII contribution / month | R 15 | `[ASSUMPTION]` |
| U5 | Variable cost-to-serve / month | R 30 | `[ASSUMPTION]` |
| U6 | Fraud & dispute cost / month | R 8 | `[ASSUMPTION]` |
| U7 | Expected customer life | 36 months | `[ASSUMPTION]` |
| U8 | Discount rate | 15% p.a. | `[ASSUMPTION]` |
| U9 | Cost of capital | `[OPEN ITEM]` | `[UNKNOWN]` |
| U10 | Regulatory capital per account | `[OPEN ITEM]` | `[UNKNOWN]` |

**Worked mechanics (placeholder, NOT a result):** monthly contribution ≈ `ARPU + interchange + NII − cost-to-serve − fraud` = `25 + 20 + 15 − 30 − 8 = R22` `[ASSUMPTION]`. At CAC `R450`, indicative payback ≈ `450 / 22 ≈ 20 months` `[ASSUMPTION]` (undiscounted, ignores capital drag). **This illustrates the arithmetic, not a forecast.** With U9/U10 unknown, LTV is deliberately left uncomputed.

---

## 5. Cohort & segmentation discipline

- Compute economics **per cohort** (acquisition month) and **per segment** (mass, affluent, business) — never rely on a single blended average (`../c05-hr-people/culture-and-values.md` "reconcile the truth").
- Watch **negative-margin cohorts**: accounts that are active but unprofitable (e.g. fee-waived, high-fraud) must be visible.
- **Cost-to-serve** must reconcile to Ops capacity metrics (`../c02-operations/service-levels.md` KPI-004).

---

## 6. Decision gates (proposed `[TARGET]`)

| Gate | Rule `[ASSUMPTION]` | Action |
|---|---|---|
| Payback | ≤ 24 months | pursue |
| 24–36 months | review, optimise channel mix |
| > 36 months | halt/redesign acquisition |
| Contribution margin | must be positive at steady state | premise for scale |
| LTV:CAC | `[TARGET]` ratio set once U9/U10 known | — |

> These gates are internal `[TARGET]`s pending real cost-of-capital data. They are **not** industry facts.

---

## 7. Data sources required

| To compute | Need from |
|---|---|
| CAC | C09 (marketing spend, channel attribution) |
| Cost-to-serve | C02 (ops effort per account, BPO rates) |
| Fraud/dispute cost | C12/C02 (cases, write-offs) |
| NII / funding cost | C10 treasury + `../c16-banking-fintech/` |
| Interchange | scheme schedules (C16) |
| Capital per account | RWA model (C10 + C12) |

---

## 8. Open items / unknowns

- `[UNKNOWN]` Cost of capital and capital-per-account (U9/U10) — blocks LTV.
- `[UNKNOWN]` Real CAC and cost-to-serve.
- `[ASSUMPTION]` All placeholders above are illustrative.
- `[UNVERIFIED]` Any external benchmark used must be cited, dated and re-verified.

---

## 9. Cross-links

- Model → [`financial-model.md`](./financial-model.md)
- Capacity costs → `../c02-operations/service-levels.md`
- Capital → [`capital-and-funding.md`](./capital-and-funding.md)
- Controls → [`financial-controls.md`](./financial-controls.md)
