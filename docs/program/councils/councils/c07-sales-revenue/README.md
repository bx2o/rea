# C07 — Sales & Revenue (Project Umoya)

**Council:** C07 Sales & Revenue
**Program:** Project Umoya — greenfield NeoBank, South Africa *(codename placeholder)*
**As-of:** 2026-10-16 · **Status:** Draft v1.0 (UnConsolidated)

> **Evidence discipline.** Revenue mix, margins, CAC, LTV and payback are **ASSUMPTIONS** with explicit placeholders — we do **not** fabricate market-measured numbers. Competitive/revenue facts are carried **[FACT]** from `../../research/`. Bank financials quoted from research are other banks' *reported* figures, used only as context, never as our forecast.

---

## 1. Purpose of the revenue function

Sales & Revenue owns **how the bank makes money** and **how it sells** — turning product ([`../c15-product-management/`](../c15-product-management/README.md)) and demand ([`../c09-marketing-growth/`](../c09-marketing-growth/README.md)) into durable, licence-compliant income at viable unit economics. It owns:

- the **revenue model** — the streams, their mechanics and their licence dependencies ([`revenue-model.md`](./revenue-model.md));
- the **unit-economics framework** — CAC/LTV/ARPU/payback ([`unit-economics.md`](./unit-economics.md));
- **partnerships & business development** — retail/telco/employer/e-commerce and the SME/B2B motion ([`partnerships-and-bd.md`](./partnerships-and-bd.md)).

It sits between Product (what we build), Marketing (who we acquire) and Finance (C10, what we recognise), and is jointly accountable with C09 for **CAC** and with C15 for **ARPU**.

---

## 2. Function organisation (target)

| Role | Reports to | Accountability |
|---|---|---|
| **Head of Sales & Revenue (Captain)** | C07 | Revenue model, targets, pricing, partnerships P&L |
| **Revenue/Pricing Manager** | Captain | Stream mix, pricing, margin management with C10 |
| **Head of Partnerships & BD** | Captain | Retail/telco/employer/e-commerce partnerships |
| **Head of SME/B2B** | Captain | Business banking + merchant acquirer relationships |
| **Unit-Economics Analyst** | Captain | CAC/LTV cohort modelling, payback |
| **Revenue Operations** | Captain | Billing, commission flows, reporting |

> **ASSUMPTION:** structure scales with licence/launch; SME and partnerships leads are hired only when Phase 2–4 work ([`../c15-product-management/product-roadmap.md`](../c15-product-management/product-roadmap.md)) begins.

---

## 3. Revenue principles

1. **Licence-compliance first.** Each stream is tagged to the permission it requires; nothing is sold without the licence/registration ([`revenue-model.md`](./revenue-model.md) §"licence dependency").
2. **Transparency.** Pricing is a product surface; no hidden fees (brand pillar "Honest").
3. **Diversified, not single-stream.** Interchange alone cannot carry a low-ARPU bank — diversify across NIM, fees, SME, subscriptions.
4. **Customer-fair monetisation.** No fee for the mere holding of money; no exploitative credit.
5. **Evidence-led targets.** Every target starts as an ASSUMPTION and is replaced by cohort data ([`unit-economics.md`](./unit-economics.md)).
6. **Cost-to-serve aware.** No revenue stream is worthwhile if its servicing cost consumes it ([`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md) CTS).

---

## 4. File index (this council)

| File | Purpose |
|---|---|
| [`README.md`](./README.md) | This overview. |
| [`revenue-model.md`](./revenue-model.md) | Revenue streams (interchange, NIM, fees, FX, subscription, B2B/SME) and licence dependencies. |
| [`unit-economics.md`](./unit-economics.md) | CAC/LTV/ARPU/payback framework with labelled ASSUMPTION placeholders. |
| [`partnerships-and-bd.md`](./partnerships-and-bd.md) | Partnership strategy (retail, telco, employer, e-commerce) and SME/B2B motion. |

## 5. Cross-council links

- **Product & catalogue:** [`../c15-product-management/product-catalogue.md`](../c15-product-management/product-catalogue.md) · [`../c15-product-management/product-roadmap.md`](../c15-product-management/product-roadmap.md)
- **Marketing (CAC driver):** [`../c09-marketing-growth/acquisition-channels.md`](../c09-marketing-growth/acquisition-channels.md) · [`../c09-marketing-growth/go-to-market-strategy.md`](../c09-marketing-growth/go-to-market-strategy.md)
- **Metrics definitions:** [`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md)
- **Regulatory licence perimeter:** [`../../research/regulatory/`](../../research/regulatory/README.md)
- **Finance linkage:** council C10 (Finance/CFO) — capital, treasury, recognition.
