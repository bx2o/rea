# C16 — Banking-Fintech Council

- **Council ID:** C16 (`c16-banking-fintech`)
- **Captain:** C16 Banking-Fintech Captain (`C16-banking-fintech-captain.agent.md`) — per `.stremiium/config/council-department-mapping.json`
- **Program:** Project Umoya — NeoBank ZA (codename only, not a brand decision)
- **Owner council RACI:** Accountable for banking-domain strategy and rail access; Consulted on legal (C01), build (C11) and industry (C04)
- **Status:** Draft v1.0 (UnConsolidated) — 2026-10-16

> **Evidence discipline (inherited from PLAN.md §0).** Every number in this council's artifacts is a **planning assumption**, not measured data. Figures are tagged `[ASSUMPTION]` (modelled input), `[TARGET]` (internal objective), or `[UNVERIFIED]` (asserted by an external source, not yet corroborated). Regulatory facts cite the research pack `[S#]` and are never invented. Vendor/rail facts are **UNVERIFIED** until contracted.

Back-links: [council index](../README.md) · [charter](./CHARTER.md) · [licensing roadmap](../../research/regulatory/licensing-roadmap.md).

---

## 1. Purpose

C16 is the **banking-domain and payments council** — the programme's **domain-expert council** (the "domain expert" of SAOS §8.3). Where other councils own a discipline (legal, engineering, security), C16 owns **how banking actually works in South Africa**: what a licence requires, how money clears and settles, how a sponsor-bank arrangement behaves, and how fintech capability maps onto a banking model.

C16 holds the **banking-compliance special authority** (binding) and owns:

- the **licence / sponsor strategy** — decisions [D-001](../../program/governance/decision-log.md) (sponsor-bank-first) and [D-004](../../program/governance/decision-log.md) (licence path);
- **payment-rail access** — PayShap, clearing/settlement, cards;
- **prudential interfaces** — with C10 Finance and the Prudential Authority;
- sign-off on the **banking elements of G-COMP**.

The council exists because a neobank can be excellent at software and still fail at banking: without rail access, a licence path and a prudential story, there is no bank.

---

## 2. Mandate & authority

| Dimension | Detail |
|---|---|
| **Mandate** | Provide banking-domain expertise: licensing path, sponsor-bank arrangements, payment rails, prudential interfaces, fintech-capability fit. |
| **Authority** | **Banking-compliance special authority** (binding); sign-off on G-COMP banking elements. |
| **Escalation** | `AGT → Banking-Fintech Captain → Sparkling Curious → Board`; disputes with C01 go to SC. |
| **Out of scope** | Legal interpretation (C01); software build (C11); threat model (C12). |

---

## 3. Scope of this council

**In scope:** licence/sponsor strategy; payment-rail access and specifications; banking-domain analysis; prudential interfaces (capital, BA returns, supervisory engagement); fintech-capability fit and partnership types.

**Out of scope (route elsewhere):** statutory interpretation (C01), engineering implementation (C11), security controls (C12), capital modelling and treasury truth (C10), market/segment strategy (C04). See [`../../workflows/agent-routing.md`](../../workflows/agent-routing.md).

---

## 4. File index

| File | Contents |
|---|---|
| [`README.md`](./README.md) | This overview + mandate. |
| [`banking-domain-glossary.md`](./banking-domain-glossary.md) | SA banking/payments glossary (PayShap, RPP, EFT/AC, RTC, DebiCheck, PASA/PSMB, FICA, NCA, CODI, BA returns, BAS, AD/ADLA…). |
| [`core-banking-requirements.md`](./core-banking-requirements.md) | Functional requirements for core ledger, accounts and payments. |
| [`reporting-requirements.md`](./reporting-requirements.md) | BA returns, FIC reports, CODI, tax certificates, FIC goAML. |
| [`fintech-partnerships.md`](./fintech-partnerships.md) | Sponsor bank, BIN sponsor, card processor, KYC vendors, bureau integrations. |

---

## 5. Interlocks & governance hooks

| Interlock | Contract |
|---|---|
| C01 Legal-Compliance | Joint licensing; banking-compliance disputes go to SC; C01 owns statutory interpretation. |
| C10 Finance-CFO | Capital adequacy, treasury, prudential reporting truth. |
| C11 Dev-Engineering | Payment/rail specifications and the canonical payment model ([`../../architecture/integrations/payments-rails.md`](../../architecture/integrations/payments-rails.md)). |
| C12 Cybersecurity-Intel | Fraud in payment flows; sanctions/TFS. |
| C04 Strategy-Growth | Banking strategy fit; partnership strategy. |
| Escalation | Council Captain → SC → Board; Critical 1h · High 4h · Medium 24h · Low 72h (PLAN.md §5). |

---

## 6. KPIs

| KPI | Target | Weight |
|---|---|---|
| Licence/sponsor milestones met | Per [launch roadmap](../../program/roadmaps/launch-roadmap.md) | `[TARGET]` |
| Payment-rail access secured | By M3 | `[TARGET]` |
| Banking-compliance sign-offs | 100% | `[TARGET]` |
| Prudential reporting readiness | By M4 | `[TARGET]` |

(Mirrors the C16 charter §8. Milestone dates are internal planning targets, not regulator commitments.)

---

## 7. South-Africa-specific notes

- **Licensing:** Banks Act s12 authorisation + s16 registration; alternatives — Mutual Banks Act / Co-operative Banks Act / sponsor model / non-bank PSP ([`../../research/regulatory/banking-licensing.md`](../../research/regulatory/banking-licensing.md); [D-004](../../program/governance/decision-log.md)).
- **Payments:** NPS Act participation, **PayShap**, **ISO 20022**, clearing/settlement access, and the **PSMB→SARB** transition (milestone 11 Aug 2026) ([`../../research/regulatory/payments-nps.md`](../../research/regulatory/payments-nps.md) §1).
- **Standards:** Basel III/IV capital and liquidity; BA-return interfaces; PA supervisory engagement ([`../../research/regulatory/tax-governance.md`](../../research/regulatory/tax-governance.md) §8).
- **Sponsor dependency:** if [D-001](../../program/governance/decision-log.md) (sponsor-first) proceeds, manage counterparty and pricing risk (R-002) with a documented exit plan.
- **FATF context:** maintain AML/CFT rigour post grey-list exit (with C01/C12) ([`../../research/regulatory/aml-fica.md`](../../research/regulatory/aml-fica.md) §6).

---

## 8. Open items / unknowns

- `[UNKNOWN]` Final licence path (D-004) and sponsor-bank identity (D-001) are **PROPOSED**, not decided.
- `[UNVERIFIED]` Non-bank payment framework remains **draft**; capital tiers may change ([`../../research/regulatory/payments-nps.md`](../../research/regulatory/payments-nps.md) §3).
- `[UNVERIFIED]` Card scheme membership route (BIN sponsor vs principal) pre-licence.
- `[CONFIRM]` Exact BA-return set/frequency for a *de novo* bank ([`../../research/regulatory/tax-governance.md`](../../research/regulatory/tax-governance.md) §10).

_Codename `Project Umoya` is a working label only._
