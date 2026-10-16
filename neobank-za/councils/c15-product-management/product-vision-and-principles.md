# Product Vision & Principles — Project Umoya

**Council:** C15 Product Management
**As-of:** 2026-10-16 · Parent: [`README.md`](./README.md)

> All figures are labelled **ASSUMPTION** (planning placeholder) or **UNVERIFIED** (single/weak source). Competitive facts are carried from `../../research/neobank-competitors/` and are marked **[FACT]** where the research pack asserts them from a primary/corroborated source.

---

## 1. Vision

> **"Every South African — banked, under-banked or informal — gets a trustworthy, low-cost, phone-first bank that treats their last rand with the same care as a first million."**

The vision has three load-bearing words, deliberately chosen against the competitive evidence:

1. **Trustworthy** — the single hardest problem for a new bank. South Africans are trained by incumbents, watchdog media and the Ombud to be sceptical of new deposit-takers. Trust is a product feature, not a marketing line (see [`../c09-marketing-growth/brand-positioning.md`](../c09-marketing-growth/brand-positioning.md)).
2. **Low-cost** — zero-fee is *already commoditised*: Bank Zero is fee-free, Shoprite Money Market charges ~R5 flat cash withdrawals, and TymeBank is low-fee **[FACT]** (`../../research/neobank-competitors/competitive-matrix.md` §E). We cannot win on fees alone.
3. **Phone-first (but not phone-only)** — app-only has repeatedly lost to distribution; TymeBank's kiosks, Shoprite's 2,800+ stores and Lesaka's 90,000+ township merchants reach the mass market the app cannot **[FACT]**.

**Therefore the intended wedge is not "cheap banking" — it is _trustworthy, full-service banking delivered at the lowest possible cost-to-serve, with a distribution model that meets people where they already are._**

### Mission statement (one sentence)
> Build a licensed, phone-first bank whose unit economics work at a low ARPU, by combining low-cost digital rails (PayShap, USSD/WhatsApp, agent/kiosk cash-in) with responsible everyday credit and SME tools.

---

## 2. Product principles

These principles are the tie-breakers in prioritisation (see [`feature-backlog.md`](./feature-backlog.md)).

| # | Principle | What it means in practice |
|---|---|---|
| P1 | **Ship to the least-connected customer first** | Design for prepaid data users, feature phones (USSD), 2G/3G latency and intermittent power. If it works for a spaza owner in a township, it works for everyone. |
| P2 | **Trust is earned in the first 90 seconds** | Onboarding must be transparent, FICA-compliant, and fast. Every unexplained step is a churn event. |
| P3 | **Fees must be visible before they are incurred** | No hidden "admin" charges. Pricing is a product surface, not a legal annexure. |
| P4 | **Cash is a first-class citizen** | The informal economy runs on cash. Cash-in/cash-out at agent/kiosk/retail points is core, not an edge case. |
| P5 | **Credit is a milestone, never a default** | Lending is opt-in, affordability-assessed (NCA-compliant) and never engineered to create dependence. |
| P6 | **Compliance is a feature, not a tax** | FICA/POPIA/NCA obligations are surfaced in the UX as confidence-building (e.g. "why we ask for this"). |
| P7 | **Multi-language and inclusive by construction** | All customer-facing flows support South Africa's 11 official languages where feasible; accessibility (WCAG 2.2 AA) is a launch requirement, not a fast-follow. See [`../c08-design-creative/design-principles.md`](../c08-design-creative/design-principles.md). |
| P8 | **Cost-to-serve is a product requirement** | Any feature that materially raises cost-to-serve (e.g. manual verification, voice-heavy support) needs an owner and a metric. |
| P9 | **Ecosystem over features** | Prefer a few deep, connected jobs-to-be-done (get paid → spend → save → borrow → protect) over a long shallow feature list. |
| P10 | **Small, reversible, evidence-led** | Ship behind flags, measure, expand. Hypothesis recorded per backlog item. |

---

## 3. Target segments

We deliberately choose a **primary** and two **secondary** segments; SMS are reached through a B2B2C motion ([`../c07-sales-revenue/partnerships-and-bd.md`](../c07-sales-revenue/partnerships-and-bd.md)).

| Segment | Definition (working) | Primary job-to-be-done | Priority |
|---|---|---|---|
| **A. Under-banked & unbanked mass market** | Adults with a transactional need who use cash, a retailer money account, a grant, or a family member's account; often prepaid; often no primary bank. | "Receive money, hold it safely, pay for things, cash out cheaply, without fees eating my money." | **Primary** |
| **B. Young urban professionals & digital migrants** | 20–35, smartphone, employed or side-hustling, frustrated by incumbent fee/complexity; salary-earner. | "A clean, transparent primary account I can run entirely from my phone, with decent interest and credit I understand." | **Secondary (ARPU engine)** |
| **C. Gig, informal & self-employed workers** | Taxi owners, spaza owners, salon/spaza/e-hailing drivers, domestic & farm workers, seasonal workers. | "Prove my income, get paid, smooth uneven cash-flow, get small working capital." | **Secondary (differentiator)** |
| **D. SMEs / micro-businesses** | Spaza shops, service micro-enterprises, registered small businesses. | "Accept payments, manage cash, pay staff/suppliers, get fair working capital." | Reach via white-label/B2B2C |

> **ASSUMPTION:** The SA market is large and the under-banked base is deep mass-market — this is the competitive consensus in the research (`../../research/neobank-competitors/README.md` §6) but the *precise sizes per segment are not established here* and must not be quoted as measured.

**Segments we consciously defer (see [`mvp-scope.md`](./mvp-scope.md) §Out):** affluent/private banking, home loans/mortgages, full investment/stockbroking, and crypto trading at launch.

---

## 4. Value proposition

**For the customer:**
- A **real, licensed bank** (deposits carry the statutory CODI protection of **R100,000 per qualifying depositor per bank** **[FACT]** — `../../research/sa-banking-landscape/README.md` §4), so "safe" is structural, not marketing.
- **Transparent, low pricing** and **free/cheap real-time payments** via PayShap.
- **Cash in / cash out at the places people already shop** (retail + agent network — to be built via partnership).
- **A single app (and USSD/WhatsApp fallbacks)** covering spend, save, borrow and protect.
- **Inclusive by default:** 11 languages where feasible, low-data mode, works on entry-level Android and feature phones.

**For the bank (why it earns money):** see [`../c07-sales-revenue/revenue-model.md`](../c07-sales-revenue/revenue-model.md) — interchange, net interest margin from lending and deposit spread, SME/fee revenue, and premium subscriptions. **Every figure is an ASSUMPTION until unit economics are validated** ([`../c07-sales-revenue/unit-economics.md`](../c07-sales-revenue/unit-economics.md)).

---

## 5. Differentiation vs. the named competitors

The task names four specific competitors. Positioning is stated qualitatively; the competitive facts are from the research pack.

| Competitor | Their position (research) | Umoya's differentiation thesis |
|---|---|---|
| **TymeBank** | Licensed digital commercial bank; kiosk + agent onboarding in Pick n Pay/Boxer; ~11.6m SA customers but **low ARPU**; monetises on interchange + lending + SME (Retail Capital) **[FACT]** | Match their cost-of-acquisition via distribution, but compete on **ARPU via embedded gig/SME credit + rewards**, and on a **fuller app-first experience** than kiosk-led onboarding. |
| **Discovery Bank** | Behavioural "shared-value" Vitality banking; affluent skew; **profitable FY26 (R370m)**; ecosystem cross-sell **[FACT]** | Do **not** fight for the affluent/Vitality segment. Take the **mass and informal segment** the ecosystem play does not serve, with simpler value. |
| **Bank Zero** | Mutual bank; genuinely **zero-fee**; patented card; B2B infrastructure (Mukuru); sub-scale, being acquired by **Lesaka** **[FACT]** | Treat zero-fee as table stakes. Differentiate on **credit, SME tools and distribution** — the things Bank Zero lacked scale to build. |
| **Capitec** | The mass-market champion: ~25m+ active clients, low fee, credit-led, app at scale, trusted **[FACT]** | The hardest competitor. Attack on **(a) full transparency, (b) app-first experience without branch friction, (c) genuine SME/gig tooling** — not on price or scale, which we cannot win early. |

**Non-bank threats the differentiation must also answer** (from research): Shoprite Money Market (4m+ accounts, ~R5 withdrawals) on **cost of cash**; MTN MoMo / Absa ChatWallet on **WhatsApp/USSD reach**; Lesaka/Kazang on **township POS distribution** **[FACT]**.

### Positioning statement (internal)

> For **South Africans the big banks and fee-free newcomers still under-serve** — the cash-reliant, the debt-careful, the self-employed — Umoya is a **licensed, phone-first bank** that is **honest about its fees, safe by statute, and useful at the till and the spaza**. Unlike kiosk-led digital banks we are **app-first**; unlike the big banks we are **simple and low-cost**; unlike fee-free newcomers we are a **full-service bank with responsible credit**.

---

## 6. Non-goals (as important as goals)

- We are **not** building a super-app lifestyle platform (FNB/VodaPay territory) at launch.
- We are **not** competing on rewards richness against eBucks/Vitality — our rewards are a **savings-and-credit nudge**, not a mall-loyalty programme.
- We are **not** an unlicensed wallet "renting" a bank — we intend to hold the licence ([`mvp-scope.md`](./mvp-scope.md) §Dependencies).
- We are **not** launching high-cost channels (branch network, 24/7 voice-first support) that break low-ARPU unit economics.

---

## 7. Open questions (carry into discovery)

1. **Licence route:** full commercial bank (R250m min capital) vs. mutual vs. partner-bank launch? This gates the entire catalogue ([`product-catalogue.md`](./product-catalogue.md)). **UNVERIFIED** until C01/PA path fixed (`../../research/regulatory/banking-licensing.md`).
2. **Distribution partner(s):** which retail/telco/employer partner gives cash-in/out and reach without eroding margin? See [`../c07-sales-revenue/partnerships-and-bd.md`](../c07-sales-revenue/partnerships-and-bd.md).
3. **Credit appetite at launch:** unsecured personal loans need NCR registration + affordability machinery; do we launch with savings-led trust first, then credit? (Recommended: yes — see roadmap.)
4. **Segment sizing / willingness-to-pay:** must be validated with primary research; **not to be assumed from this document**.
