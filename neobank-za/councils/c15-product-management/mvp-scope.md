# MVP Scope — Project Umoya

**Council:** C15 Product Management
**As-of:** 2026-10-16 · Parent: [`README.md`](./README.md) · Catalogue: [`product-catalogue.md`](./product-catalogue.md)

> **Definition.** The MVP is the **smallest licensed, trustworthy, revenue-capable product set** we can launch after authorisation — enough to open a real account, hold money safely, move money cheaply in and out, and start earning. It is deliberately **savings-and-transactions-led, not credit-led**, so we can launch on the licence + FICA rails without waiting for the full credit build.

The MVP is scoped against the licence/rail dependencies in `../../research/regulatory/licensing-roadmap.md` (Phases 0–3).

---

## 1. MVP statement

> **A licensed, phone-first transactional + savings account with an instantly-issued debit card, real-time PayShap/EFT payments, cash-in/out via agent/retail partners, USSD/WhatsApp fallbacks, and multi-language, low-data design — launchable once the banking licence, FICA onboarding and payment-clearing rails are live.**

---

## 2. In scope (MVP)

| ID | Capability | Why it's in | Key dependency |
|---|---|---|---|
| MVP-1 | **FICA-compliant digital onboarding** (ID + selfie/liveness + address + sanctions/PEP screening) | Legally mandatory; first trust moment | FICA RMCP, KYC vendor, DHA/Home Affairs ID verification cost (TymeBank flagged the ID-fee hike as a pain point **[FACT]**) |
| MVP-2 | **Transactional account** with account number, statements, debit orders | Core deposit product | 🟢 Banking licence |
| MVP-3 | **Savings: Pockets + Goals** (instant access) | Drives deposit stickiness; funding benefit | 🟢 Banking licence |
| MVP-4 | **Virtual + physical debit card** with in-app controls | Spend + interchange; instant virtual card is a differentiator | 🟢 Issuing / 🟡 scheme |
| MVP-5 | **Payments in/out:** PayShap (ShapID), EFT, card acceptance | Legal + practical money movement | NPS participation, ISO 20022, PayInc |
| MVP-6 | **Cash-in / cash-out via agent/retail partner** | Cash is core to segment A | Partner contracts (`../c07-sales-revenue/partnerships-and-bd.md`) |
| MVP-7 | **USSD + WhatsApp + assisted-agent fallback** | Reach feature-phone and low-data users | Telco/WhatsApp Business APIs |
| MVP-8 | **Notification & fraud basics** (transaction alerts, block card, report fraud) | Trust + conduct | Fraud vendor, POPIA |
| MVP-9 | **Customer support** (in-app, WhatsApp, self-service FAQ) | PoC for conduct + NFO | See [`../c14-customer-success/support-model.md`](../c14-customer-success/support-model.md) |
| MVP-10 | **Rewards-lite** (airtime/data nudge on goals & primacy) | Cheap retention hook | Airtime partner |
| MVP-11 | **Data-light & multi-language UX** (11 official languages where feasible; WCAG 2.2 AA) | Inclusion is the wedge | See [`../c08-design-creative/design-principles.md`](../c08-design-creative/design-principles.md) |

---

## 3. Out of scope (deferred) — with rationale

| Deferred | Rationale | Earliest phase |
|---|---|---|
| **Credit:** personal loans, overdraft, BNPL | Needs NCR registration, affordability machinery, credit policy and capital; delaying protects launch date and avoids responsible-lending risk at scale. **Launch savings-led.** | P1–P3 (see [`product-roadmap.md`](./product-roadmap.md)) |
| **Credit card** | Distinct credit + scheme + risk build; not needed for MVP primacy. | P3 |
| **Insurance wraps** | Needs FSP licence + partner underwriting. | P2 |
| **SME/business banking & merchant acquiring** | Higher regulatory (business FICA/UBO, acquiring under draft PEM rules) and build cost; better as a focused Phase-2 B2B2C push. | P2 |
| **Home loans, vehicle finance** | Long-horizon, capital-heavy, branch/valuation dependent — explicitly not a neobank MVP. | Post-P3 / partner |
| **Investing / stockbroking / crypto** | Separate FSCA/FAIS (and FICA item-12 for crypto) perimeter; distract from core. | Not planned |
| **Cross-border remittance** | Corridor licensing + FX (AD/ADLA) is a separate gate (`../../research/regulatory/banking-licensing.md` §6). Partner-led later. | P3 (partner) |
| **Premium subscription tiers** | Only meaningful once there is enough differentiated value to pay for; premature at MVP. | P3 |
| **Native iOS + full-feature Android + rich super-app** | Data/budget; MVP ships a lean Android-first + USSD/WhatsApp web app. | Progressive |

---

## 4. Rationale (why this MVP)

1. **Licence-gated realism.** Everything in-scope is achievable with **one** permission set (banking licence + FICA + payment-clearing). Nothing in MVP needs FSP/NCR/insurance licences — so credit and insurance complexity does not block launch (`../../research/regulatory/licensing-roadmap.md`).
2. **Trust before monetisation.** A savings-led launch lets customers see the bank keep its promises *before* we ask them to borrow — critical for a new brand. Discovery and Tyme both reached profitability only after years **[FACT]**.
3. **Cost-to-serve discipline.** The MVP avoids the high cost-to-serve features (branch, 24/7 voice, manual verification) that break low-ARPU economics.
4. **Distribution, not just app.** MVP includes assisted-agent and USSD/WhatsApp because app-only has repeatedly lost the mass market **[FACT]** (`../../research/neobank-competitors/competitive-matrix.md` §F2).
5. **Fast feedback.** A narrow set of well-instrumented jobs (get paid, spend, save, cash out) yields clean metrics ([`product-metrics.md`](./product-metrics.md)) to steer the Phase-1 credit build.

---

## 5. Dependencies on licence & rails (blockers)

| Dependency | Owner | Gates | Status |
|---|---|---|---|
| **Banking licence** (s12 authorisation → s16 registration within 12 months) | C01 / PA | Taking deposits, the whole MVP | **Not started — planning** (`../../research/regulatory/banking-licensing.md` §3) |
| **Minimum capital** R250m (bank) / R10m (mutual) **[FACT, minimums]** | C10 / investors | Licence | Planning |
| **FICA RMCP + goAML registration** | C01/C12 | Onboarding (MVP-1) | Planning |
| **POPIA Information Officer + prior-authorisation assessment** | C01/C12 | Any personal-data processing; s60 for ID-linking/credit | Planning (`../../research/regulatory/privacy-popia.md`) |
| **Payment participation** (PayShap/EFT/ISO 20022; settlement account or sponsorship) | C06/C11 + Treasury | MVP-5 | Planning; PASA→SARB transition risk (`../../research/regulatory/payments-nps.md` §1) |
| **Scheme/issuer for debit card** | C06/C07 | MVP-4 | Vendor selection pending |
| **KYC/ID-verification vendor + Home Affairs ID verification** | C12/C06 | MVP-1 | Vendor selection pending; **ID-verification fee cost is a known industry pain point [FACT]** |
| **Cash-in/out partner** | C07 | MVP-6 | BD pending (`../c07-sales-revenue/partnerships-and-bd.md`) |
| **Core banking + ledger + fraud stack** | C06/C11 | Everything | Architecture phase (W7) |

> **Critical-path note:** the licence and the payments rails are **hard gates**. Per `../../research/regulatory/licensing-roadmap.md`, authorisation is targeted ~Month 6 (6–9 month guidance, **best case**) with launch in the Month 12–24 window. Any slip here slips the whole MVP — so the roadmap ([`product-roadmap.md`](./product-roadmap.md)) is expressed in **phase-relative** terms, not calendar promises.

---

## 6. MVP "definition of done"

- [ ] A customer can **open a FICA-verified account and get a working virtual card in one sitting.**
- [ ] They can **receive (PayShap/EFT), spend (card), save (Goals/Pockets) and cash out** end-to-end with alerts.
- [ ] **USSD and WhatsApp** parity for the core four jobs.
- [ ] **11-language support** (where feasible) and **WCAG 2.2 AA** verified; low-data mode shipping.
- [ ] **Support** live on the channels in [`../c14-customer-success/support-model.md`](../c14-customer-success/support-model.md) with NFO-aligned complaints handling.
- [ ] **Security/privacy gates green:** PCI-DSS, POPIA, FICA per `PLAN.md` §4.
- [ ] **Instrumentation live** for every metric in [`product-metrics.md`](./product-metrics.md) before launch.
