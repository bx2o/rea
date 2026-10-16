# C14 — Customer Success (Project Umoya)

**Council:** C14 Customer Success
**Program:** Project Umoya — greenfield NeoBank, South Africa *(codename placeholder)*
**As-of:** 2026-10-16 · **Status:** Draft v1.0 (UnConsolidated)

> **Evidence discipline.** Figures are **ASSUMPTION** or **UNVERIFIED** unless carried as **[FACT]** from `../../research/`. We do not invent measured market statistics (e.g. industry average call-handling times are **not** asserted here).

---

## 1. Purpose of the customer success function

Customer Success & Support is the **trust engine** of a new bank. For an unproven deposit-taker, every support interaction *is* the product experience. The function owns:

- **end-to-end customer journeys** — from FICA onboarding to closure ([`customer-journeys.md`](./customer-journeys.md));
- the **multi-channel support model**, tiering, SLAs and self-service ([`support-model.md`](./support-model.md));
- **complaint handling** aligned to the **National Financial Ombud Scheme (NFO)** and the **Code of Banking Practice**;
- **vulnerable-customer** handling and **POPIA data-subject (DSAR)** handling;
- **retention** and **cost-to-serve (CTS)** as a shared target with Product ([`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md)).

It does **not** own acquisition ([`../c09-marketing-growth/`](../c09-marketing-growth/README.md)) or credit decisions (C15/C07) — but supports both.

---

## 2. Function organisation (target)

| Role | Reports to | Accountability |
|---|---|---|
| **Head of Customer Success (Captain)** | C14 | Strategy, SLAs, NFO relationship, fair-outcomes culture |
| **Head of Support Operations** | Captain | Channel ops, tiering, workforce, QA |
| **Support Team Leads × channels** | Support Ops | In-app, WhatsApp, phone, email/self-service |
| **Complaints & Escalations Manager** | Captain | Internal complaints, NFO escalations, root-cause |
| **Vulnerable Customer & Accessibility Lead** | Captain | Vulnerable-customer policy, accessibility support |
| **POPIA/DSAR Officer (dotted to IO)** | Captain + Information Officer | Data-subject requests, preference management |
| **Customer Insights Analyst** | Captain | CSAT/NPS, journey analytics, churn/dormancy |
| **Community/Agent Network Liaison** | Support Ops | Assisted-agent and partner support quality |

> **ASSUMPTION:** headcount scales with MAFC; start lean and self-service-heavy because low ARPU cannot fund voice-first support ([`../c15-product-management/product-vision-and-principles.md`](../c15-product-management/product-vision-and-principles.md) P8).

---

## 3. Design tenets

1. **Self-service first, human when it matters.** Most "where is my money / how do I…" queries must be resolvable in-app, in WhatsApp, or in USSD without an agent.
2. **Channels where the customer already is.** WhatsApp, USSD and assisted agents — not just an app inbox — because segment A is not app-native.
3. **Fair outcomes, not just SLAs.** We optimise resolution *quality* and complaint *root-cause*, not speed alone.
4. **Multi-language.** Support available in South Africa's **11 official languages** where feasible (see [`../c08-design-creative/design-principles.md`](../c08-design-creative/design-principles.md)).
5. **Data-cost aware.** Customer contact should never push cost onto a low-income customer (toll-free / app-side / WhatsApp).
6. **Compliance by design.** FICA/POPIA/NCA and NFO obligations are embedded in the journey, not bolted on.

---

## 4. File index (this council)

| File | Purpose |
|---|---|
| [`README.md`](./README.md) | This overview. |
| [`customer-journeys.md`](./customer-journeys.md) | End-to-end journeys: onboarding/FICA/KYC, first deposit, card issue/activate, payments, dispute, loan application, complaint, closure. |
| [`support-model.md`](./support-model.md) | Channels, tiering, SLAs, self-service, NFO complaints, vulnerable customers, POPIA DSAR. |

## 5. Cross-council links

- **Product & metrics:** [`../c15-product-management/README.md`](../c15-product-management/README.md), [`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md) (CSAT/complaints/CTS owned here)
- **Design & flows:** [`../c08-design-creative/ux-flows.md`](../c08-design-creative/ux-flows.md)
- **GTM (what we promise customers):** [`../c09-marketing-growth/brand-positioning.md`](../c09-marketing-growth/brand-positioning.md)
- **Conduct regulation:** [`../../research/regulatory/conduct-fais-nca.md`](../../research/regulatory/conduct-fais-nca.md), [`../../research/regulatory/privacy-popia.md`](../../research/regulatory/privacy-popia.md), [`../../research/regulatory/aml-fica.md`](../../research/regulatory/aml-fica.md)
