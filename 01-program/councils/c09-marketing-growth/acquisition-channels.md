# Acquisition Channels & Funnel — Project Umoya

**Council:** C09 Marketing & Growth
**As-of:** 2026-10-16 · Parent: [`README.md`](./README.md) · GTM: [`go-to-market-strategy.md`](./go-to-market-strategy.md)

> ⚠️ **ALL COSTS, CONVERSION RATES AND VOLUMES ON THIS PAGE ARE ASSUMPTIONS.** They are **planning placeholders**, not measured market data and not benchmarks. Every number must be validated by controlled tests and replaced with observed values before external use. Competitive facts are marked **[FACT]**.

---

## 1. Channel strategy overview

Priority is **distribution-led** (partnerships, referral, community) over pure paid, because the research shows **distribution beats product** in SA and paid CAC against a low ARPU is fragile (`../../research/neobank-competitors/competitive-matrix.md` §F2, §F3).

| Priority | Channel | Role | Cost profile (ASSUMPTION) | Trust transfer |
|---|---|---|---|---|
| **1** | **Partnerships (employer/retail/telco/SME)** | Primary acquisition engine | Low per activated (revenue-share) | High |
| **2** | **Referral** | Compounding, low-cost growth | Incentive cost only | High |
| **3** | **Community / grassroots** | Mass-market reach, trust | Medium-low | High |
| **4** | **Influencer / creator** | Credibility + reach | Medium | Medium |
| **5** | **Paid digital (search/social/radio)** | Reach, brand, controlled tests | Highest per funded | Low |
| **6** | **SME networks / B2B2C** | Business segment | Low per business | High |

---

## 2. Channel detail

### 2.1 Partnerships (primary)
- **Employer/payroll:** onboard workforces (B2B2C); salary-credit triggers primacy.
- **Retail & township agents:** assisted onboarding + cash-in/out; anchored in proven retail/township reach (TymeBank kiosks; Shoprite 2,800+ stores; Lesaka 90k+ merchants **[FACT]**).
- **Telco/wallet:** reach prepaid/USSD users; co-marketing (MTN MoMo / Absa ChatWallet precedent **[FACT]**).
- **SME networks:** embed business accounts + merchant acceptance (Yoco/iKhokha/Payfast embedded model **[FACT]**).
- **Economics (ASSUMPTION):** referral/revenue-share per **activated funded** customer — paid on outcome, not sign-up, to protect CAC.
- **Owner:** Partnership Marketing Lead + C07 BD ([`../c07-sales-revenue/partnerships-and-bd.md`](../c07-sales-revenue/partnerships-and-bd.md)).

### 2.2 Referral (compounding)
- Both-side reward (referrer + referee) on the **referee becoming funded and active** — not on install.
- Airtime/data rewards appeal to segment A (prepaid currency).
- Details & loop math: [`growth-loops-and-referrals.md`](./growth-loops-and-referrals.md).

### 2.3 Community / grassroots
- Presence at taxi ranks, markets, spaza clusters, churches, stokvels, community events.
- **Stokvel** angle: group savings culture is a natural fit for "Goals"/group tools (ASSUMPTION).
- Trained **community champions / agents** in-language.

### 2.4 Influencer / creator
- Local-language creators, financial-literacy voices, township creators, taxi/gig community figures.
- Emphasis on **credibility over reach**; disclosures per CPA/POPIA ad rules.

### 2.5 Paid digital
- Search (high-intent), social (reach), community radio (mass-market, low-data audiences).
- Used primarily for **controlled tests** in G1 before scaling ([`go-to-market-strategy.md`](./go-to-market-strategy.md) §7).
- Radio is emphasised for segment A reach (ASSUMPTION).

### 2.6 SME networks / B2B2C
- Associations, franchisors, payment enablers, supplier networks — cross-sell SME accounts + merchant acceptance.

---

## 3. Funnel (with ASSUMPTION conversion placeholders)

> Funnel steps map to journeys in [`../c14-customer-success/customer-journeys.md`](../c14-customer-success/customer-journeys.md) and metrics in [`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md).

| Stage | Definition | Conversion to next (ASSUMPTION) | Lever |
|---|---|---|---|
| **1. Awareness** | Sees brand/partner content | — | Brand, partner reach, radio |
| **2. Interest** | Engages (clicks/asks/visits) | 8% (ASSUMPTION) | Content, proof points |
| **3. Consideration** | Visits landing/app store, reads pricing | 35% (ASSUMPTION) | Trust messaging, transparency |
| **4. Onboarding start** | Begins signup | 45% (ASSUMPTION) | Simple entry, assisted option |
| **5. FICA complete** | Verified account created | 65% (ASSUMPTION) | Fast/liveness, resumable, agent help |
| **6. Funded** | First deposit/inflow | 60% (ASSUMPTION) | Cash-in access, PayShap/EFT ease |
| **7. Active** | ≥1 value action in 30 days | 70% (ASSUMPTION) | Card activation, rewards nudge |
| **8. Primary bank** | ≥50% inflow share | 25% (ASSUMPTION) | Payroll, savings, credit |

**End-to-end (Awareness → Funded) placeholder:** ~0.4% (ASSUMPTION) — deliberately unimpressive to force honest re-baselining; the point is to **measure and replace**, not to believe it.

---

## 4. CAC assumptions (PLACEHOLDERS — must be replaced)

> ⚠️ The table below contains **no measured data**. Values are illustrative magnitudes chosen to frame target-setting, not findings.

| Channel | CAC per funded customer (ASSUMPTION) | Notes |
|---|---|---|
| Referral | R 40–80 | Incentive-led; lowest |
| Employer/partner | R 60–120 | Revenue-share on activation |
| Community/agent | R 80–160 | Assisted onboarding cost |
| Influencer/creator | R 100–200 | Reach + credibility |
| Paid digital | R 150–350 | Highest; used in tests |
| **Blended target (ASSUMPTION)** | **R 80–150** | To be validated vs ARPU/LTV |

**Constraint:** CAC must be viable against the ARPU and LTV assumptions in [`../c07-sales-revenue/unit-economics.md`](../c07-sales-revenue/unit-economics.md). If blended CAC cannot clear the **LTV/CAC ≥ 3** and payback targets there, **scaling stops** until the channel mix or product ARPU improves.

---

## 5. Measurement & attribution framework

- **Outcome-based payment** to channel partners (pay on funded/active).
- **Channel-level CAC** and **payback** tracked continuously ([`../c07-sales-revenue/unit-economics.md`](../c07-sales-revenue/unit-economics.md)).
- **Cohort retention** by channel (a cheap channel that churns is expensive).
- **Incrementality tests** for paid channels before scaling.
- **Consent & POPIA compliance** in every data capture (`../../research/regulatory/privacy-popia.md`); opt-in direct marketing only.

---

## 6. Channel risk register

| Risk | Mitigation |
|---|---|
| CAC exceeds low ARPU viability | Distribution-led mix; outcome-based partner pay; halt underperformers |
| Over-reliance on one partner | Multi-partner portfolio; direct/referral backup |
| Paid digital underperforms for segment A | Shift budget to radio/community/partners |
| Ad-claim compliance (CPA/POPIA) | C01 review of all claims and consent flows |
| Incentive gaming (referral fraud) | Funded+active gating; fraud checks (C12) |

> **Cross-links:** referral loops → [`growth-loops-and-referrals.md`](./growth-loops-and-referrals.md); unit economics → [`../c07-sales-revenue/unit-economics.md`](../c07-sales-revenue/unit-economics.md); partnerships → [`../c07-sales-revenue/partnerships-and-bd.md`](../c07-sales-revenue/partnerships-and-bd.md); metrics → [`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md).
