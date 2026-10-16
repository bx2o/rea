# Product Roadmap — Project Umoya

**Council:** C15 Product Management
**As-of:** 2026-10-16 · Parent: [`README.md`](./README.md) · Backlog: [`feature-backlog.md`](./feature-backlog.md) · Scope: [`mvp-scope.md`](./mvp-scope.md)

> **How this roadmap is expressed.** It is anchored to the **program/licence phases** in `../../research/regulatory/licensing-roadmap.md` (Phase 0 Foundations → Phase 1 Authorisation → Phase 2 Build → Phase 3 Registration & Launch), which themselves map to the program WBS in `../../PLAN.md` §2. It is **phase-relative, not date-promised**, because the licence timeline is gated by the Prudential Authority (**6–9 months is guidance, not statutory — treat as best case**) (`../../research/regulatory/banking-licensing.md` §3). Re-baseline quarterly.

---

## 1. Phase map

| Roadmap phase | Aligns to licence phase | Aligns to program WBS | Theme | Exit criterion |
|---|---|---|---|---|
| **R0 — Discovery & Foundations** | Licence Phase 0 (Months 0–3) | W0, W7, W8 | Lock vision, segments, MVP scope; define metrics; discovery research | MVP scope approved; instrumentation spec done |
| **R1 — Design & Build (pre-licence)** | Licence Phase 1–2 (Months 3–18) | W7 (architecture), W8 | Build core, KYC, payments, card, USSD/WhatsApp; compliance wiring | MVP feature-complete in staging; security/privacy gates green |
| **R2 — Soft Launch (MVP)** | Licence Phase 3 (Months 12–24) | W11 | Controlled launch of transactions + savings + debit card | MVP "definition of done" ([`mvp-scope.md`](./mvp-scope.md) §6) |
| **R3 — Monetise (Credit & Rewards)** | Post-launch | W8 | Personal loans, overdraft, rewards-lite; NCR build | Credit live, healthy early loss curve, ARPU rising |
| **R4 — Expand (SME, Insurance, Ecosystem)** | Post-launch | W8 | SME/business, merchant acceptance, insurance wraps, premium tiers | SME ARPU live; partner-led distribution scaling |
| **R5 — Scale & Optimise** | Steady state | W8, W9 | Cost-to-serve reduction, open-finance readiness, new segments | Unit economics (LTV/CAC, payback) within target |

---

## 2. Now / Next / Later

### NOW — R0/R1: get to a licensed MVP

| Workstream | Scope | Key dependencies | Links |
|---|---|---|---|
| Onboarding & KYC | FICA CDD, liveness, sanctions/PEP, NCR-score-ready data model | FICA RMCP; DHA ID verification | [`../c14-customer-success/customer-journeys.md`](../c14-customer-success/customer-journeys.md) |
| Core ledger & account | Transactional account, statements, debit orders | Core banking vendor; licence | — |
| Payments | PayShap, EFT/RTC, ISO 20022 | NPS participation; PayInc | `../../research/regulatory/payments-nps.md` |
| Cards | Virtual card + controls; physical later | Scheme/issuer | [`../c08-design-creative/ux-flows.md`](../c08-design-creative/ux-flows.md) |
| Savings | Pockets + Goals | — | [`product-catalogue.md`](./product-catalogue.md) §2 |
| Channels | App (Android-first) + USSD + WhatsApp + agent | Telco APIs; partner BD | [`../c07-sales-revenue/partnerships-and-bd.md`](../c07-sales-revenue/partnerships-and-bd.md) |
| Trust & safety | Alerts, freeze, fraud report, POPIA notices | POPIA IO registration | `../../research/regulatory/privacy-popia.md` |
| Metrics & instrument | Every KPI in [`product-metrics.md`](./product-metrics.md) | Analytics stack | — |

### NEXT — R3: start earning

- **Personal loans** (NCR registration, affordability engine, credit policy, collections) — the core ARPU lever.
- **Overdraft/Buffer** (capped, responsible).
- **Rewards-lite** (airtime/data nudges) to lift primacy and retention.
- **Savings Boost** (locked, higher-rate) to deepen deposit stickiness.
- **Open-finance-ready API/consent layer** (build-to-be-ready while the IFWG framework is still draft) (`../../research/regulatory/payments-nps.md` §6).

### LATER — R4/R5: broaden and optimise

- **SME & Business banking** + **merchant acceptance** (QR/softPOS) — B2B2C motion.
- **Insurance wraps** via FSP-licensed distribution + underwriting partners.
- **BNPL** via retail partners; **credit card** when risk capability matures.
- **Premium subscription tier**; **employer/telco payroll** onboarding; partner **remittance**.
- **Cost-to-serve programme**: automate support, reduce manual KYC, shift to self-service.

---

## 3. Phase → product-line coverage

| Product line (catalogue §) | R0/R1 | R2 (MVP) | R3 | R4 | R5 |
|---|---|---|---|---|---|
| 1 Transactional account | build | **live** | scale | scale | optimise |
| 2 Savings (Goals/Pockets) | build | **live** | Boost | scale | optimise |
| 3 Debit card | build | **live** | physical | scale | optimise |
| 4 Payments (PayShap/EFT/QR) | build | **live** | QR/softPOS | scale | optimise |
| 5 Lending (loan/overdraft/BNPL) | — | — | **loans/overdraft** | BNPL | optimise |
| 6 Insurance wraps | — | — | — | **live** | scale |
| 7 SME & Business | — | — | pilot | **live** | scale |
| 8 Rewards | — | rewards-lite | **live** | evolve | optimise |

---

## 4. Program-phase alignment (WBS cross-walk)

| Program WBS (`PLAN.md`) | Roadmap phase | Product deliverable |
|---|---|---|
| W0 Governance | R0 | Product decision model, RACI ([`README.md`](./README.md) §3) |
| W7 Platform architecture | R0/R1 | Product-to-architecture requirements |
| W8 Product/GTM design | R0–R5 | This council's documents |
| W9 Security/fraud/compliance | R1/R2 | Trust & safety features ([`product-metrics.md`](./product-metrics.md)) |
| W11 Synthesis | R2+ | Launch readiness |

---

## 5. Milestone gates (phase-relative)

```
G0  Scope frozen ............ MVP scope + instrumentation spec approved        [R0 exit]
G1  Licence secured ......... s12 authorisation → s16 registration path clear [dependencies]
G2  Feature-complete ........ MVP in staging; PCI/POPIA/FICA gates green       [R1 exit]
G3  MVP launch .............. DoD met; metrics live                            [R2 exit]
G4  Credit live ............. NCR registration; affordability + policy live    [R3 exit]
G5  Unit economics proven ... LTV/CAC + payback within target (ASSUMPTION)     [R5]
```

**Known calendar risk:** the 6–9 month PA figure is guidance; de novo timelines run longer (`../../research/regulatory/licensing-roadmap.md` §"Highest-risk assumptions"). All dates downstream are provisional.

---

## 6. Roadmap principles

- **Licence-first sequencing:** no feature ships ahead of its permission.
- **Savings before credit:** build trust, then monetise.
- **Distribution alongside product:** every phase has a partner/channel deliverable, not just a feature.
- **Measure before scaling:** each phase exits against a single primary metric ([`product-metrics.md`](./product-metrics.md)).

> Cross-links: revenue sequencing → [`../c07-sales-revenue/revenue-model.md`](../c07-sales-revenue/revenue-model.md); GTM phases → [`../c09-marketing-growth/go-to-market-strategy.md`](../c09-marketing-growth/go-to-market-strategy.md); support scaling → [`../c14-customer-success/support-model.md`](../c14-customer-success/support-model.md).
