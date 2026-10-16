# Growth Loops & Referrals — Project Umoya

**Council:** C09 Marketing & Growth
**As-of:** 2026-10-16 · Parent: [`README.md`](./README.md) · Channels: [`acquisition-channels.md`](./acquisition-channels.md)

> ⚠️ **All coefficients, reward values and loop multipliers are ASSUMPTIONS** (Placeholders). No measured viral coefficients or referral rates are asserted. Replace with observed data post-launch.

---

## 1. Why loops, not just funnels

A paid funnel has a linear cost that never stops. For a **low-ARPU** bank, durable growth must come from **loops** that get cheaper as they scale. The two strongest loops available to a cash-heavy, social, prepaid market are:

1. **Payment/P2P loop** — the more people who use Umoya, the more useful it is to pay *and be paid* (PayShap aliases). Value compounds with network size.
2. **Referral loop** — satisfied customers bring in their household/community, especially where trust is word-of-mouth (segment A).

---

## 2. Loop inventory

### 2.1 Payment / P2P network loop
```
      Customer joins & gets funded
                │
                ▼
      Sends/receives via PayShap (ShapID)
                │
                ▼
   Counterpart (friend/family/merchant) experiences Umoya
                │
                ▼
   Counterpart opens an account to reply / get paid
                │
                └────────────▶ back to top (new funded customer)
```
- **Mechanic:** frictionless PayShap P2P; request-money; group/community payments; stokvel payouts (ASSUMPTION).
- **Enabler:** alias-based payments mean the counterpart needs no account number — only a phone number.
- **Risk to loop:** receiving a payment to an account they don't have drives them to their *bank* — so we must make "get paid here" trivially easy.

### 2.2 Referral loop
```
      Funded, active customer
              │
              ▼
   Shares invite (airtime/data/cash reward)
              │
              ▼
   Referee onboards & becomes FUNDED + ACTIVE
              │
              ▼
   Reward released to BOTH (referrer + referee)
              │
              └────────────▶ referee refers others
```
- **Gating (critical):** reward only when the referee is **funded and active** — prevents "install farming" and protects CAC ([`acquisition-channels.md`](./acquisition-channels.md) §4).
- **Reward type (ASSUMPTION):** airtime/data/electricity (segment-A currency) or small cash into Goals (nudges saving). See [`../c15-product-management/product-catalogue.md`](../c15-product-management/product-catalogue.md) §8.

### 2.3 Savings / Goals loop (engagement)
- Goals + round-ups create habitual weekly engagement → higher MAU → more word-of-mouth → more referral.
- Group savings (stokvel) feature could be a **social loop** (members invite members) — **ASSUMPTION, to validate**.

### 2.4 Partner-distribution loop
```
   Employer/retail/telco partner onboards its base
              │
              ▼
   Customers use cash-in/out & payroll there
              │
              ▼
   Partner sees higher footfall/float → invests more in co-marketing
              │
              └────────────▶ more reach → more customers
```
- Detailed partner economics: [`../c07-sales-revenue/partnerships-and-bd.md`](../c07-sales-revenue/partnerships-and-bd.md).

---

## 3. Viral-loop math (illustrative — ASSUMPTION)

> ⚠️ Pure illustration of *mechanics*, not a forecast. Numbers chosen to show sensitivity.

Let, per existing cohort of 100 active customers per month (ASSUMPTION):

| Parameter | Placeholder value | Meaning |
|---|---|---|
| Referrers (share an invite) | 15% | active customers who refer |
| Invites per referrer | 3 | shares |
| Invite → funded conversion | 20% | referee becomes funded+active |
| **New funded per 100 actives** | **0.15 × 3 × 0.20 = 0.09 → 9** | — |
| **Viral coefficient (k) placeholder** | **0.09** | < 1 → not self-sustaining alone |

**Implication (honest):** with these placeholders, referral is a **CAC reducer**, not a self-sustaining engine. Growth must combine referral **+** partner distribution **+** paid tests. If `k` can be lifted (better incentives, in-language invites, group loops), referral cost approaches zero — the goal, not a given.

---

## 4. Retention (the other half of LTV)

Growth without retention is a leaky bucket. Retention levers:

| Lever | Mechanic | Owner |
|---|---|---|
| **Primacy (inflow share)** | Route salary/gig inflow to Umoya via employer/partner | C09 + C07 |
| **Goals & Pockets** | Goal progress + round-ups create habit | C15 |
| **Rewards-lite** | Airtime/data nudges for saving/transacting | C15 |
| **Card primacy** | Card controls + rewards on chosen spend categories | C15 |
| **Trust & support** | Fast, fair support reduces churn after incidents | C14 |
| **Lifecycle CRM** | Onboarding nudges, dormancy win-back, milestone messages | C09 Lifecycle |
| **Reasonable credit** | Timely, affordable credit deepens the relationship | C15/C07 |

**Retention metrics:** MAFC, dormancy rate (90-day), primacy rate, churn ([`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md)).

---

## 5. Anti-patterns (what we will NOT do)

- **Do not reward sign-ups/installs** — only funded, active customers (protects CAC and trust).
- **Do not spam referrals** — frequency caps; respect POPIA consent and opt-out ([`../../research/regulatory/privacy-popia.md`](../../research/regulatory/privacy-popia.md)).
- **Do not use dark patterns** to drive funding (e.g. deceptive "you must deposit to activate").
- **Do not buy lists** or market to non-consented contacts (POPIA direct-marketing rules; the Regulator has fined direct-marketing violations **[FACT]** — `../../research/regulatory/privacy-popia.md` §8).
- **Do not reward borrowing** — credit is never gamified ([`../c15-product-management/product-vision-and-principles.md`](../c15-product-management/product-vision-and-principles.md) P5).

---

## 6. Governance & measurement

| Item | Metric | Cadence |
|---|---|---|
| Referral performance | Referral rate, invite→funded conversion, k | Monthly |
| Referral cost | Cost per referred funded customer | Monthly |
| Loop health | P2P counterpart conversion to funded | Monthly |
| Retention | MAFC, churn, dormancy, primacy | Monthly |
| Gaming/fraud | Referral fraud rate | Monthly (with C12) |

> **Cross-links:** channels → [`acquisition-channels.md`](./acquisition-channels.md); unit economics → [`../c07-sales-revenue/unit-economics.md`](../c07-sales-revenue/unit-economics.md); metrics → [`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md).
