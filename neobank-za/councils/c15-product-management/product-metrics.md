# Product Metrics — Project Umoya

**Council:** C15 Product Management
**As-of:** 2026-10-16 · Parent: [`README.md`](./README.md) · Roadmap: [`product-roadmap.md`](./product-roadmap.md)

> **Rule.** Definitions here are **precise and internal**. Any *target value* is labelled **ASSUMPTION** — we do **not** invent measured market benchmarks. Where an industry figure is referenced it is marked **[FACT]** only if carried from `../../research/` with a source. All metrics must be instrumented **before** MVP launch ([`mvp-scope.md`](./mvp-scope.md) §6).

---

## 1. North-star metric

> ### **Monthly Active Funded Customers (MAFC)** — the number of unique customers who, in a rolling 30-day window, are **funded** (average positive balance **and** at least one inbound value event) **and** performed **≥1 value action** (a payment, card spend, savings deposit, or—post-credit—a repayment).

**Why this is the north star:** it forces us to optimise for customers who **actually bank with us**, not sign-ups. It closes the well-known gap between *registered* and *active/funded* accounts (the research repeatedly notes that customer definitions differ wildly across banks — `../../research/neobank-competitors/competitive-matrix.md` §D). A funded, transacting customer is the only one who generates interchange, deposit float and (later) lendable data.

**Guardrail:** MAFC must not rise by degrading trust metrics (complaints, fraud, churn). See §4.

---

## 2. Metric tree (north star decomposed)

```
                 MAFC (north star)
                        │
     ┌──────────────────┼───────────────────┐
   Acquire            Activate            Retain & monetise
   (CAC)              (activation)        (RAU/MAU, ARPU, LTV, churn, NPS/CSAT)
                        │                       │
                time-to-account,          frequency, primacy,
                first-deposit rate        cross-sell, savings balance
```

---

## 3. Core KPIs — definitions

| KPI | Definition (Umoya internal) | Unit | Target | Evidence basis |
|---|---|---|---|---|
| **Activation rate** | % of completed onboardings that reach "first value event" (first deposit **or** first PayShap/card transaction) within **7 days**. | % | **ASSUMPTION** (to be set from early cohort data) | — |
| **Time-to-account (TTA)** | Median minutes from onboarding start to a live, FICA-verified account + virtual card. | minutes | **ASSUMPTION** (goal: same-session) | TymeBank "minutes at kiosk" is an industry benchmark **[FACT]** |
| **First-deposit rate** | % of activated accounts with ≥1 inbound deposit within 14 days. | % | **ASSUMPTION** | — |
| **RAU (Registered Active Users)** | Unique registered customers with ≥1 login in rolling 30 days. | count | **ASSUMPTION** | — |
| **MAU (Monthly Active Users)** | Unique customers with ≥1 session in rolling 30 days (activity ≠ funded). | count | **ASSUMPTION** | — |
| **MAU/RAU ratio (stick)**: | MAU ÷ RAU — session quality. | ratio | **ASSUMPTION** | — |
| **Primary-banking rate (primacy)** | % of active customers receiving **≥50% of monthly inflow** into Umoya (proxy: salary/gig inflow detected). | % | **ASSUMPTION** | Incumbents track "fully banked" clients — Capitec reported ~9.9m fully banked of 25.2m active (~39%) **[FACT]** as an order-of-magnitude reference |
| **ARPU (Average Revenue Per User)** | Monthly revenue per active customer = (interchange + NIM + fees + subscription) ÷ MAFC. | R/user/month | **ASSUMPTION** | TymeBank's low ARPU mass-market base is a cautionary anchor **[FACT]** |
| **CAC (Customer Acquisition Cost)** | Fully-loaded sales+marketing+distribution cost ÷ new funded customers in period. | R/user | **ASSUMPTION** | See [`../c07-sales-revenue/unit-economics.md`](../c07-sales-revenue/unit-economics.md) |
| **LTV (Lifetime Value)** | Expected gross-margin contribution per customer over expected life. Methodology in [`../c07-sales-revenue/unit-economics.md`](../c07-sales-revenue/unit-economics.md). | R/user | **ASSUMPTION** | — |
| **LTV/CAC** | LTV ÷ CAC. Viability threshold nominal ≥3.0. | ratio | **ASSUMPTION** | — |
| **CAC payback** | Months for cumulative gross margin to repay CAC. | months | **ASSUMPTION** | — |
| **Churn (logo)** | % of MAFC in month *t−1* not present in MAFC in month *t*. | %/month | **ASSUMPTION** | — |
| **Dormancy rate** | % of registered accounts with no activity for **90 days**. | % | **ASSUMPTION** | Gap between registered vs active accounts is a known industry issue **[FACT]** |
| **NPS** | Net Promoter Score from a standard 0–10 recommend question, quarterly. | score (−100..+100) | **ASSUMPTION** | — |
| **CSAT** | Satisfaction on a completed support interaction (1–5 → %). | % | **ASSUMPTION** | Owned with C14 |
| **Cost-to-serve (CTS)** | Fully-loaded servicing cost ÷ active customer per month (support, payments ops, fraud, channel). | R/user/month | **ASSUMPTION** | Central to low-ARPU viability |
| **Deposit balance per active** | Average funded balance across active customers. | R | **ASSUMPTION** | — |
| **Savings attach rate** | % of MAFC with ≥1 active Goal/Pocket. | % | **ASSUMPTION** | — |
| **Interchange revenue per active card** | Card interchange ÷ active cards. | R/card/month | **ASSUMPTION** | Domestic debit interchange is capped, limiting per-swipe value **[FACT]** |
| **Fraud loss rate** | Confirmed fraud losses ÷ total transaction value. | bps | **ASSUMPTION** | Guardrail metric |
| **Complaint rate** | Ombud-able complaints ÷ active customers, per 1,000. | /1k | **ASSUMPTION** | NFO-aligned; see [`../c14-customer-success/support-model.md`](../c14-customer-success/support-model.md) |
| **DSAR/POPIA SLA compliance** | % of data-subject requests resolved within statutory/committed SLA. | % | **ASSUMPTION** | POPIA data-subject participation (`../../research/regulatory/privacy-popia.md` §2) |

> **Target column:** all "ASSUMPTION" targets are placeholders. They must be **replaced with cohort-derived values** after MVP launch and are recorded here so no one mistakes them for benchmarks.

---

## 4. Guardrail metrics (trust & fairness)

These are **not optional**. If a growth metric improves while a guardrail degrades, we investigate before scaling.

| Guardrail | Definition | Why |
|---|---|---|
| **Fraud loss rate** | See §3. | Trust + P&L. |
| **Complaint rate & Ombud escalation rate** | Per 1k actives; escalations to NFO. | Conduct risk (`../../research/regulatory/conduct-fais-nca.md` §6). |
| **Vulnerable-customer handling** | % of flagged vulnerable cases handled per policy. | Fair outcomes; see [`../c14-customer-success/support-model.md`](../c14-customer-success/support-model.md). |
| **Reckless-credit rate** | % of granted loans later flagged reckless/affordability-failed (audit). | NCA compliance (`../../research/regulatory/conduct-fais-nca.md` §3.3). |
| **POPIA breach/incident count** | Security compromises per period. | Regulatory (fines up to R10m) (`../../research/regulatory/privacy-popia.md` §8). |
| **Inclusion coverage** | % of MAFC using USSD/WhatsApp or low-data mode. | Proves we serve segment A, not just urban app users. |

---

## 5. Metric ownership & cadence

| Metric group | Owner | Cadence | Consumer |
|---|---|---|---|
| Activation, TTA | Product Ops | Weekly | C15, C09 |
| MAFC, RAU/MAU, primacy | Product Lead — Everyday | Weekly | C15, C07, SC |
| ARPU, LTV/CAC, payback | C07 + Product Analytics | Monthly | C07, C10, SC |
| CTS | Product Ops + Ops | Monthly | C15, C02 |
| NPS/CSAT, complaints | C14 | Quarterly | C14, C15 |
| Guardrails | C12 + Product Compliance | Monthly | C12, C15, SC |

---

## 6. Anti-metrics (what we deliberately do NOT optimise)

- **Registered accounts** or **downloads** as headline success — these are vanity without funding (the research warns these definitions mislead — `../../research/neobank-competitors/competitive-matrix.md` §D).
- **Raw TPV** without margin — PayShap/EFT are intentionally low-margin.
- **Reward spend** as a growth lever — rewards are a cost centre ([`product-catalogue.md`](./product-catalogue.md) §8).

> Cross-links: unit-economics methodology → [`../c07-sales-revenue/unit-economics.md`](../c07-sales-revenue/unit-economics.md); acquisition funnel & CAC inputs → [`../c09-marketing-growth/acquisition-channels.md`](../c09-marketing-growth/acquisition-channels.md); retention loops → [`../c09-marketing-growth/growth-loops-and-referrals.md`](../c09-marketing-growth/growth-loops-and-referrals.md).
