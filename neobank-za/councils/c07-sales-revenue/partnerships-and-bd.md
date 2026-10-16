# Partnerships & Business Development — Project Umoya

**Council:** C07 Sales & Revenue
**As-of:** 2026-10-16 · Parent: [`README.md`](./README.md) · GTM: [`../c09-marketing-growth/go-to-market-strategy.md`](../c09-marketing-growth/go-to-market-strategy.md) · Revenue: [`revenue-model.md`](./revenue-model.md)

> **Evidence note.** Partner economics and revenue-share structures are **ASSUMPTIONs**. Competitive facts about existing distribution models are **[FACT]** from `../../research/`. We assert no measured partner volumes for Umoya.

---

## 1. Why partnerships are strategic (not tactical)

The research is unequivocal: in SA retail banking **distribution beats product**. The mass market is reached at the till (Shoprite 2,800+ stores), through kiosks/agents (TymeBank in PnP/Boxer), via township POS (Lesaka/Kazang 90k+ merchants **[FACT]**), and through telco reach (MTN MoMo, Absa ChatWallet **[FACT]**). Consolidation confirms it: banks buy distribution (Nedbank→iKhokha), fintechs buy licences (Lesaka→Bank Zero) **[FACT]** (`../../research/neobank-competitors/competitive-matrix.md` §F).

**Therefore BD is a first-class revenue function**, owning the channels that (a) acquire customers cheaply, (b) provide cash-in/out, and (c) generate B2B/SME revenue.

---

## 2. Partnership categories

| Category | Partner types | What we get | What they get | Revenue/comp model (ASSUMPTION) |
|---|---|---|---|---|
| **Retail / FMCG** | Grocery, discount retail, spaza networks | Cash-in/out, assisted onboarding, footfall | Footfall, float, commission, basket uplift | Per-transaction + per-activation revenue-share |
| **Telco / wallet** | Mobile network operators, wallet providers | Reach to prepaid/USSD users, co-marketing | Engagement, data/airtime monetisation | Co-marketing + referral + VAS commission |
| **Employer / payroll** | Corporates, SMEs, payroll bureaus | Salary-credit inflow, primacy, bulk onboarding | Employee benefit, admin savings | Per-employee activation + payroll fee (ASSUMPTION) |
| **E-commerce / marketplace** | Online platforms, delivery, gig platforms | Payment acceptance, BNPL, gig worker banking | Checkout options, worker payouts | MDR + BNPL fee share |
| **SME networks** | Associations, franchisors, payment enablers | SME accounts + merchant acceptance | Member value, settlement | MDR + SaaS + embedded credit share |
| **NGO / inclusion** | Development orgs, community bodies | Credibility, community trust | Mission alignment | Grant/co-funding (ASSUMPTION) |

---

## 3. Retail partnership (deep-dive)

**Model:** Umoya provides the licensed banking; the retailer/agent provides physical reach for **cash-in/cash-out** and **assisted onboarding**.
- **Customer value:** cash access where they already shop; no need to travel to a bank branch.
- **Economics (ASSUMPTION):** commission per cash transaction + activation bounty; must be cheaper than building branches (which break low-ARPU economics).
- **Comparators [FACT]:** TymeBank kiosks (PnP/Boxer); Shoprite Money Market (R5 withdrawal); Standard Bank Instant Money (400k+ cash-out points via OTT/Flash/Shop2Shop). These show the model works but that **the partner holds power** — hence multi-partner strategy.
- **Risk:** single-partner dependency → mitigate with a **portfolio** of retail/agent partners.

## 4. Telco partnership

- **Reach:** prepaid base + USSD/feature-phone users + WhatsApp.
- **Model (ASSUMPTION):** co-marketing + referral; possible **airtime/data as reward currency** ([`../c09-marketing-growth/growth-loops-and-referrals.md`](../c09-marketing-growth/growth-loops-and-referrals.md) §2.2).
- **Caution [FACT]:** telco mobile money failed once in SA (M-Pesa SA closed 2016) — telcos reach customers but consumers prefer **bank/retail rails**. So we **partner for reach**, not for the bank itself.

## 5. Employer / payroll partnership

- **Why it matters:** salary inflow is the strongest **primacy and retention** trigger and the best source of **affordability data** for responsible lending (NCA assessment — `../../research/regulatory/conduct-fais-nca.md` §3.2).
- **Model (ASSUMPTION):** B2B2C onboarding of employees as a benefit; per-activated pricing; optional payroll processing fee.
- **Risk:** corporate sales cycles are long; mitigate with SME-cluster and gig-platform angles.

## 6. E-commerce / gig partnership

- **What:** payment acceptance + BNPL at checkout; gig-worker banking (get paid, cash out, working capital).
- **Model (ASSUMPTION):** MDR + BNPL fee share + gig payout fee.
- **Comparators [FACT]:** Payfast↔TymeBank embedded SME funding; Peach↔Happy Pay BNPL (`../../research/neobank-competitors/payments-fintech.md`).

---

## 7. SME / B2B motion

**The SME motion is the highest-ARPU engine** and the clearest differentiator against digital challengers who stayed consumer-only **[FACT]** (competitive matrix §F3).

**Motion:**
1. **Acquire via networks** — associations, franchisors, payment enablers, supplier ecosystems (B2B2C).
2. **Land** with a business account + **merchant acceptance** (QR/softPOS) — but note acquiring sits under the **draft NPS/PEM framework** (non-binding; capital thresholds are drafts — `../../research/regulatory/payments-nps.md` §3).
3. **Expand** with **invoicing/payroll-lite**, then **working-capital advances** (revenue-based, NCR-compliant).
4. **Retain** via integration (accounting tools, supplier payments) → higher switching cost.

**Revenue (ASSUMPTION):** MDR (acquiring) + SaaS subscription (tools) + embedded credit margin — the Yoco/iKhokha/Payfast model **[FACT]** (`revenue-model.md` §7).

**Regulatory gates:** business FICA / **beneficial ownership** tracing (`../../research/regulatory/aml-fica.md` §3.2); NCR for business credit; acquiring under draft framework.

---

## 8. Partnership operating model

| Stage | Activity | Owner |
|---|---|---|
| Identify | Map target partners per category by reach/fit | Head of BD |
| Negotiate | Commercial terms, data-sharing, compliance (POPIA), co-marketing | BD + C01 |
| Integrate | Technical integration (payments/API) | C06/C11 + BD |
| Launch | Co-branded campaign | BD + C09 |
| Manage | Performance review, revenue-share settlement | Revenue Ops |
| Scale/exit | Scale winners; exit underperformers | Head of BD |

**Contracting rules:**
- **Outcome-based** economics where possible (pay per activated/funded customer) — protects CAC ([`../c09-marketing-growth/acquisition-channels.md`](../c09-marketing-growth/acquisition-channels.md) §4).
- **POPIA-compliant** data-sharing with clear controller/processor roles and lawful bases (`../../research/regulatory/privacy-popia.md`).
- **Conduct** alignment: co-marketing claims reviewed by C01 (CPA/POPIA).
- **No exclusivity that creates fatal dependency** — cap single-partner concentration.

---

## 9. Prioritisation & risks

| Partner category | Time-to-revenue | Strategic value | Priority |
|---|---|---|---|
| Retail/township agents | Medium | High (cash + reach) | **1** |
| Employer/payroll | Medium-long | High (primacy + data) | **2** |
| SME networks / e-commerce | Medium | High (ARPU) | **3** |
| Telco/wallet | Medium | Medium (reach) | **4** |
| NGO/inclusion | Long | Medium (trust) | **5** |

| Risk | Mitigation |
|---|---|
| Partner holds power / margin erosion | Multi-partner portfolio; own the customer relationship |
| Regulatory change (PEM framework) | Build to be **sponsorable today, licensable tomorrow** (`../../research/regulatory/payments-nps.md` §3) |
| Data/privacy breach via partners | Strict POPIA contracts + audit |
| Partner channel churn | Direct + referral backup |

> **Cross-links:** GTM → [`../c09-marketing-growth/go-to-market-strategy.md`](../c09-marketing-growth/go-to-market-strategy.md); revenue streams → [`revenue-model.md`](./revenue-model.md); SME product → [`../c15-product-management/product-catalogue.md`](../c15-product-management/product-catalogue.md) §7.
