# Unit Economics — Project Umoya

**Council:** C07 Sales & Revenue
**As-of:** 2026-10-16 · Parent: [`README.md`](./README.md) · Revenue: [`revenue-model.md`](./revenue-model.md)

> ⚠️⚠️ **THIS FILE CONTAINS NO FABRICATED MARKET DATA.** Every numeric value is an explicit **ASSUMPTION placeholder** used to build the *framework*. The purpose of this page is to define **how** we will compute CAC, LTV, ARPU and payback — and to state the **thresholds** that will gate scaling. Real values must come from observed cohorts post-launch.

---

## 1. Framework overview

```
   CAC  ────────────▶  [ months to repay ]  ◀──────── Gross margin per user / month
    │                                                     │
    │                                                     └── ARPU × gross-margin %
    └── Acquisition spend ÷ new FUNDED customers

   LTV  =  ARPU × gross margin %  ×  expected customer lifetime (months)
           (reduced by cost-to-serve and expected credit losses where relevant)

   Viability gate:  LTV / CAC ≥ 3.0  AND  CAC payback ≤ target months
```

All inputs are derived from metrics defined in [`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md) (must be instrumented before launch).

---

## 2. Definitions (canonical)

| Term | Definition |
|---|---|
| **CAC** | Fully-loaded acquisition cost (media + partner/referral incentives + assisted-onboarding cost + allocated marketing overhead) ÷ **newly funded customers** in the period. |
| **ARPU** | Monthly revenue per active customer = (interchange + NIM + fees + subscription + B2B share) ÷ MAFC. |
| **Gross margin % (GM%)** | (Revenue − variable servicing cost) ÷ Revenue. Variable servicing = payments ops, fraud, support cost-to-serve, card/rail costs. |
| **Cost-to-serve (CTS)** | Fully-loaded servicing cost per active customer per month. |
| **Lifetime (months)** | 1 ÷ monthly churn rate (logo churn). |
| **LTV** | ARPU × GM% × lifetime. For credit-bearing cohorts, subtract expected credit-loss provision. |
| **CAC payback** | CAC ÷ (ARPU × GM%) in months. |
| **Contribution margin** | ARPU × GM% − (variable credit loss where applicable). |

---

## 3. ASSUMPTION placeholder table

> ⚠️ **Illustrative only.** Values are chosen to make the framework concrete; they are **not** findings, forecasts, or benchmarks. Replace each with an observed value.

| Input | Placeholder (ASSUMPTION) | Range to test | Source of truth when real |
|---|---|---|---|
| Blended CAC | R 110 | R 80–150 | [`../c09-marketing-growth/acquisition-channels.md`](../c09-marketing-growth/acquisition-channels.md) |
| ARPU (all-in) | R 45 / month | R 25–70 | Revenue model + cohort |
| Gross margin % | 55% | 45–65% | Finance + Ops |
| Cost-to-serve (CTS) | R 12 / month | R 8–20 | Ops + C14 |
| Monthly churn | 2.5% | 1–4% | Retention cohort |
| Implied lifetime | 40 months | 25–100 | Derived |
| **LTV (placeholder)** | **R 45 × 0.55 × 40 ≈ R 990** | — | Derived |
| **LTV / CAC (placeholder)** | **≈ 9.0** | — | Derived |
| **CAC payback (placeholder)** | **R110 ÷ (R45×0.55) ≈ 4.4 months** | — | Derived |

> **Sanity warning:** the placeholder LTV/CAC (~9) looks attractive **because the inputs are placeholders optimised for illustration**. Real low-ARPU mass-market banking is far less forgiving (TymeBank reached only *monthly* profitability after years; Bank Zero remained sub-scale and was acquired **[FACT]**). Treat any headline ratio > 5 as a **red flag that inputs are too optimistic**, not a win.

**Sensitivity (ASSUMPTION):** the model is **hyper-sensitive to churn and ARPU**. Halving implied lifetime (churn → ~5%) and cutting ARPU to R30 drives LTV/CAC toward **~2.5–3** — i.e. the difference between viable and not. Hence retention ([`../c09-marketing-growth/growth-loops-and-referrals.md`](../c09-marketing-growth/growth-loops-and-referrals.md)) and ARPU depth (credit/SME) are existential.

---

## 4. Segment-level framing

Because the segments have very different economics, unit economics must be tracked **per segment** (A/B/C/D — [`../c15-product-management/product-vision-and-principles.md`](../c15-product-management/product-vision-and-principles.md) §3).

| Segment | ARPU shape (ASSUMPTION) | CAC shape (ASSUMPTION) | Key lever |
|---|---|---|---|
| **A — under-banked** | Low | Low–medium (assisted) | Cost-to-serve discipline; deposit float; keep CTS down |
| **B — young urban pro** | Medium–high | Medium | Credit + savings; primary banking |
| **C — gig/informal** | Medium | Medium | Working capital; inflow detection |
| **D — SME** | High | Low per rand (B2B2C) | MDR + SaaS + credit |

**Strategic reading:** A provides volume and funding; **B/C/D provide margin**. The roadmap sequences A first (trust/savings), then B/C credit, then D SME ([`../c15-product-management/product-roadmap.md`](../c15-product-management/product-roadmap.md)).

---

## 5. Scaling gates

| Gate | Condition (ASSUMPTION thresholds) | Action if failed |
|---|---|---|
| **Channel gate** | Channel CAC × payback within target | Pause channel; renegotiate or shift mix |
| **Product gate** | ARPU trending toward target with retention stable | Improve value (credit/savings/partners) |
| **Unit-economics gate** | LTV/CAC ≥ 3 and payback ≤ target | **Do not scale spend** until fixed |
| **Credit gate** | Loss rate within risk appetite; reckless-credit rate = 0 | Tighten policy before growing loan book |

---

## 6. Method notes & caveats

1. **Funded ≠ registered.** All denominators use **funded/active** customers ([`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md) §6), never installs.
2. **Attribution risk.** Blended CAC can hide expensive channels; always review channel-level.
3. **Credit LTV.** Lending adds revenue *and* loss volatility; LTV must net expected credit losses per cohort, not assume zero.
4. **Cost-to-serve is real revenue leakage.** CTS is subtracted inside GM%; a low-CTS bank wins a low-ARPU market.
5. **No fabrication.** Every figure above is labelled; when replaced, cite the observation window and cohort.

> **Cross-links:** revenue streams → [`revenue-model.md`](./revenue-model.md); CAC inputs → [`../c09-marketing-growth/acquisition-channels.md`](../c09-marketing-growth/acquisition-channels.md); metric definitions → [`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md); partnerships (B2B ARPU) → [`partnerships-and-bd.md`](./partnerships-and-bd.md).
