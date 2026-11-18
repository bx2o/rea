# C15 — Product Management (Project Umoya)

**Council:** C15 Product Management
**Program:** Project Umoya — greenfield NeoBank, South Africa *(codename placeholder; not a brand decision)*
**As-of:** 2026-10-16
**Owner:** C15 Council Captain
**Status:** Draft v1.0 (UnConsolidated)

> **Evidence discipline.** Every numeric value in this council's documents is either a sourced fact carried from `research/`, or is explicitly labelled **ASSUMPTION** / **UNVERIFIED**. We do **not** invent measured market statistics. Product claims that depend on a licence, rail or vendor are marked as dependencies.

---

## 1. Purpose of the product function

The Product function turns the program's strategy and licence perimeter into **shippable, compliant, revenue-generating product surface area**. It owns:

- the **product vision, principles and segmentation** (who we build for and why);
- the **product catalogue** (what we sell, how each line earns money, what regulation attaches);
- the **MVP definition** and the phased **roadmap** (what ships, when, and on what dependency);
- the **prioritisation system** (backlog) and the **product metrics** that tell us whether it is working.

It does **not** own licence acquisition (C01/C12), core platform architecture (C06/C11), revenue targets (C07), or customer operations (C14) — but it is tightly coupled to all of them.

---

## 2. Product organisation (target structure)

| Role | Reports to | Core accountability |
|---|---|---|
| **Head of Product (Council Captain, C15)** | Program (SC) | Product vision, roadmap, prioritisation, product P&L contribution |
| **Product Lead — Everyday Banking** | Head of Product | Transactional account, cards, payments, goals/pockets |
| **Product Lead — Credit & Lending** | Head of Product | Personal loans, overdraft, BNPL, affordability integration |
| **Product Lead — SME & Business** | Head of Product | SME account, merchant tooling, embedded finance |
| **Product Lead — Rewards & Engagement** | Head of Product | Rewards, savings boosts, retention mechanics |
| **Product Operations / Analytics** | Head of Product | Metrics, experimentation, backlog hygiene, research ops |
| **Product Compliance Liaison** | Head of Product + C01 (dotted) | Maps every feature to FICA/FAIS/NCA/POPIA/NPS obligations |

> **ASSUMPTION:** headcount above is a v1 planning target for a de novo bank; the exact shape will be revisited after the licence route is fixed (`research/regulatory/banking-licensing.md`). Cross-functional squads pair each Product Lead with design ([`../c08-design-creative/README.md`](../c08-design-creative/README.md)), engineering (C06/C11), data and risk.

---

## 3. How product decisions are made

Product decisions follow a **three-stage funnel** so that strategy, compliance and commercial value are applied in order.

### Stage 1 — Strategic fit (is this us?)
Screened against the vision and principles ([`product-vision-and-principles.md`](./product-vision-and-principles.md)) and the licence perimeter. Anything outside the licensed activity set is rejected or re-scoped until the relevant permission exists (Banks Act / NPS / FSCA / NCR — see `research/regulatory/`).

### Stage 2 — Value & feasibility (is it worth it?)
Scored with a **RICE-style** model (Reach × Impact × Confidence ÷ Effort) plus a **MoSCoW** tier. Regulatory, rails and data dependencies are recorded as **blockers** to sequencing, not just effort. Full backlog: [`feature-backlog.md`](./feature-backlog.md).

### Stage 3 — Governance gate (may we ship it?)
A product cannot pass "definition of done" without sign-off across the program quality gates inherited from `PLAN.md` §4 (Tech → CTO → Security → Privacy → SC). Money/data surfaces additionally require **FICA, POPIA and PCI-DSS** gates to be green. Conduct/fair-outcome review is performed with C14 (see [`../c14-customer-success/support-model.md`](../c14-customer-success/support-model.md)).

### Decision rights (RACI-lite)

| Decision | Accountable | Consulted | Informed |
|---|---|---|---|
| Vision & segment priority | Head of Product | C04 Strategy, C07 Revenue, SC | All councils |
| Catalogue & pricing bundle | Head of Product | C07, C10 Finance, C01 | C14, C09 |
| MVP scope | Head of Product | C06/C11 Eng, C12 Security, C01 | SC |
| Prioritisation within a phase | Product Leads | C07, C14, C09 | SC |
| Ship/no-ship gate (money/data) | SC (with C12/C01) | C15, C06/C11 | Board |

> **Governance cadence (ASSUMPTION):** weekly prioritisation stand-up, monthly product review with C07/C09/C14, quarterly roadmap re-baseline against the licensing roadmap (`research/regulatory/licensing-roadmap.md`).

---

## 4. File index (this council)

| File | Purpose |
|---|---|
| [`README.md`](./README.md) | This overview: function, org, decision model. |
| [`product-vision-and-principles.md`](./product-vision-and-principles.md) | Vision, principles, target segments, value proposition, differentiation. |
| [`product-catalogue.md`](./product-catalogue.md) | The product line: accounts, savings, cards, payments, lending, insurance, SME, rewards — with revenue mechanics and regulatory considerations. |
| [`mvp-scope.md`](./mvp-scope.md) | MVP in/out, rationale, licence & rail dependencies. |
| [`feature-backlog.md`](./feature-backlog.md) | Prioritised backlog (MoSCoW + RICE-style). |
| [`product-roadmap.md`](./product-roadmap.md) | Phased roadmap aligned to program/licence phases. |
| [`product-metrics.md`](./product-metrics.md) | North-star + supporting KPIs with definitions. |

## 5. Cross-council links

- **Customer journeys & support:** [`../c14-customer-success/README.md`](../c14-customer-success/README.md)
- **Go-to-market & acquisition:** [`../c09-marketing-growth/README.md`](../c09-marketing-growth/README.md)
- **Revenue model & unit economics:** [`../c07-sales-revenue/revenue-model.md`](../c07-sales-revenue/revenue-model.md), [`../c07-sales-revenue/unit-economics.md`](../c07-sales-revenue/unit-economics.md)
- **Design & UX flows:** [`../c08-design-creative/design-principles.md`](../c08-design-creative/design-principles.md), [`../c08-design-creative/ux-flows.md`](../c08-design-creative/ux-flows.md)
- **Grounding research:** [`../../research/regulatory/`](../../research/regulatory/README.md), [`../../research/neobank-competitors/`](../../research/neobank-competitors/README.md), [`../../research/sa-banking-landscape/`](../../research/sa-banking-landscape/README.md)
- **Program plan:** [`../../PLAN.md`](../../PLAN.md)
