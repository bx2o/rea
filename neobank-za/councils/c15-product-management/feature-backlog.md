# Feature Backlog — Project Umoya

**Council:** C15 Product Management
**As-of:** 2026-10-16 · Parent: [`README.md`](./README.md) · Scope: [`mvp-scope.md`](./mvp-scope.md) · Sequencing: [`product-roadmap.md`](./product-roadmap.md)

> **Prioritisation method.** Every item carries a **MoSCoW** tier (Must / Should / Could / Won't-this-phase) and a **RICE-style score**. RICE = `(Reach × Impact × Confidence) ÷ Effort`. **All scores are ASSUMPTIONs** used only to *order* work — they are not measured facts and must be re-scored with real data as metrics arrive. Confidence reflects regulatory/technical uncertainty: items blocked on a licence or draft rule score low confidence (see the "Deps" column).

---

## 1. Scoring key

| Factor | Scale | Notes |
|---|---|---|
| **Reach** | 1 (few) – 5 (all customers) | Breadth of customers affected per quarter (ASSUMPTION). |
| **Impact** | 0.5 = minimal · 1 = low · 2 = medium · 3 = high | Effect on the north-star metric ([`product-metrics.md`](./product-metrics.md)). |
| **Confidence** | 0.3 = 🟡 blocked/draft · 0.6 = dependant · 1.0 = de-risked | Penalise licence/vendor/draft-rule uncertainty. |
| **Effort** | 1 (S) – 5 (XL) | Engineering + compliance build. |
| **RICE** | (R×I×C)/E | Higher = earlier. |

**Dependencies legend:** 🟢 available now (planning) · 🟡 rail/vendor/draft-rule dependent · 🔴 licence/registration required · ⛔ out of MVP.

---

## 2. MoSCoW + RICE backlog

### MUST — MVP / Phase 0–1 (launch-blocking)

| ID | Feature | MoSCoW | Reach | Impact | Conf | Effort | RICE | Deps |
|---|---|---|---|---|---|---|---|---|
| B-01 | FICA digital onboarding (ID + liveness + address + sanctions/PEP) | Must | 5 | 3 | 0.6 | 4 | **2.25** | 🔴 FICA/PA |
| B-02 | Transactional account + real-time balance + statements | Must | 5 | 3 | 0.6 | 4 | **2.25** | 🔴 Bank |
| B-03 | PayShap send/receive (ShapID alias) | Must | 5 | 3 | 0.6 | 3 | **3.00** | 🟡 PayInc/NPS |
| B-04 | EFT/RTC in & out (ISO 20022) | Must | 5 | 3 | 0.6 | 3 | **3.00** | 🟡 NPS |
| B-05 | Virtual debit card + in-app controls | Must | 5 | 2 | 0.6 | 3 | **2.00** | 🟡 Scheme |
| B-06 | Savings Pockets + Goals (instant access) | Must | 4 | 2 | 0.8 | 3 | **2.13** | 🔴 Bank |
| B-07 | USSD + WhatsApp core journeys | Must | 4 | 3 | 0.6 | 3 | **2.40** | 🟡 Telco API |
| B-08 | Transaction alerts + card freeze + fraud report | Must | 5 | 2 | 0.8 | 2 | **4.00** | 🟢 |
| B-09 | Cash-in/out via partner network | Must | 4 | 3 | 0.5 | 4 | **1.50** | 🟡 Partner BD |
| B-10 | 11-language + low-data UX + WCAG 2.2 AA | Must | 5 | 2 | 0.7 | 4 | **1.75** | 🟢 |
| B-11 | In-app + WhatsApp support + self-service FAQ | Must | 4 | 2 | 0.7 | 3 | **1.87** | 🟢 |
| B-12 | Onboarding + KPI instrumentation | Must | 4 | 3 | 0.8 | 2 | **4.80** | 🟢 |

### SHOULD — Phase 1–2

| ID | Feature | MoSCoW | Reach | Impact | Conf | Effort | RICE | Deps |
|---|---|---|---|---|---|---|---|---|
| B-13 | Physical debit card (delivery/collection) | Should | 4 | 2 | 0.7 | 3 | **1.87** | 🟡 Scheme |
| B-14 | Personal loan (affordability-assessed) | Should | 4 | 3 | 0.5 | 5 | **1.20** | 🔴 NCR |
| B-15 | Overdraft / "Buffer" (capped) | Should | 3 | 2 | 0.4 | 4 | **0.60** | 🔴 NCR |
| B-16 | Rewards-lite (airtime/data nudge) | Should | 4 | 2 | 0.7 | 2 | **2.80** | 🟢 |
| B-17 | Savings "Boost" locked goal (higher rate) | Should | 3 | 1 | 0.7 | 2 | **1.05** | 🟢 |
| B-18 | QR / softPOS merchant acceptance | Should | 3 | 3 | 0.4 | 4 | **0.90** | 🟡 PEM draft |
| B-19 | SME business account | Should | 3 | 3 | 0.4 | 5 | **0.72** | 🔴 FICA(UBO) |
| B-20 | Insurance wraps (funeral/device) | Should | 3 | 2 | 0.4 | 3 | **0.80** | 🔴 FSP |
| B-21 | Payroll-lite / supplier payments (SME) | Should | 2 | 2 | 0.4 | 4 | **0.40** | 🟡 |
| B-22 | Open-finance-ready consent & API layer | Should | 3 | 2 | 0.5 | 4 | **0.75** | 🟡 IFWG draft |

### COULD — Phase 2–3

| ID | Feature | MoSCoW | Reach | Impact | Conf | Effort | RICE | Deps |
|---|---|---|---|---|---|---|---|---|
| B-23 | BNPL / Pay-in-4 (retail partner) | Could | 3 | 2 | 0.4 | 4 | **0.60** | 🔴 NCR + partner |
| B-24 | Credit card | Could | 3 | 2 | 0.3 | 5 | **0.36** | 🔴 NCR/Scheme |
| B-25 | Premium subscription tier | Could | 2 | 2 | 0.4 | 3 | **0.53** | 🟢 |
| B-26 | Cross-border remittance (partner) | Could | 2 | 2 | 0.3 | 4 | **0.30** | 🔴 AD/ADLA |
| B-27 | Employer/telecom payroll onboarding | Could | 3 | 2 | 0.4 | 3 | **0.80** | 🟡 Partner |
| B-28 | Goal-based micro-investing (partner) | Could | 2 | 1 | 0.4 | 3 | **0.27** | 🔴 FSP |

### WON'T (this program horizon)

| ID | Feature | Why not |
|---|---|---|
| B-W1 | Home loans / vehicle finance | Capital-heavy, branch/valuation dependent; not a neobank MVP ([`mvp-scope.md`](./mvp-scope.md)). |
| B-W2 | Full stockbroking / crypto trading | Separate FSCA perimeter; distracts from core; crypto adds FIC item-12 + travel rule (`../../research/regulatory/aml-fica.md` §5). |
| B-W3 | Branch network / cash depot build | Breaks low-ARPU cost-to-serve model; use agents/partners instead. |
| B-W4 | Lifestyle super-app (e-commerce/lifestyle) | FNB/VodaPay territory; low strategic fit. |

---

## 3. Sequencing rules (how the order is enforced)

1. **Must-before-Should at MVP** — no Phase-2 work starts until MVP launch criteria ([`mvp-scope.md`](./mvp-scope.md) §6) are met.
2. **Dependency over score** — an item with a 🔴 licence/registration dependency cannot start before that permission is live, regardless of RICE (e.g. B-14 loan can't leapfrog B-01 onboarding).
3. **One north-star per phase** — each phase has a single primary metric it is optimising ([`product-metrics.md`](./product-metrics.md)); the phase backlog is filtered by it.
4. **Confidence penalty is deliberate** — draft-rule items (B-18 acquiring, B-22 open finance) score low confidence because the underlying SARB instruments are **non-binding drafts** as at 2026-10 (`../../research/regulatory/payments-nps.md` §3).
5. **Re-score quarterly** against real Reach/Impact from instrumentation.

---

## 4. Item template (for grooming new work)

```
ID · Title
Job-to-be-done: <as a … I want … so that …>
Segment: A | B | C | D
MoSCoW: Must/Should/Could/Won't
RICE: R=? I=? C=? E=? → score
Dependency: 🟢/🟡/🔴/⛔ (+ named licence/rail/vendor)
Compliance note: <FICA/POPIA/NCA/FAIS/NPS/PCI hook>
Metric moved: <north-star or KPI>
Acceptance criteria: <bulleted>
Hypothesis: <what we expect to change>
```

> **Cross-links:** journeys these items enable → [`../c14-customer-success/customer-journeys.md`](../c14-customer-success/customer-journeys.md); flows → [`../c08-design-creative/ux-flows.md`](../c08-design-creative/ux-flows.md); revenue → [`../c07-sales-revenue/revenue-model.md`](../c07-sales-revenue/revenue-model.md).
