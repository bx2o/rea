# NeoBank ZA — Program Charter (`Project Umoya`)

**Program:** NeoBank South Africa · **Codename:** `Project Umoya` (working label, not a brand decision)
**Plan owner:** Sparkling Curious (SC-MASTER-001), acting as Manager / Coach
**Sponsor council:** C04 Strategy-Growth · **Governance steward:** C03 Admin-Knowledge
**Version:** 1.0 · **Date:** 2026-10-16 · **Status:** PROPOSED (pending ratification per [`decision-log.md`](./decision-log.md))
**Jurisdiction:** Republic of South Africa

---

## 1. Vision

> *Banking that meets South Africans where they are — every township, every village, every phone — with the trust of a bank and the speed of a fintech.*

## 2. Mission

Establish and launch a **licensed South African digital bank (neobank)** that is:
1. **Compliant-by-design** with the SA regulatory perimeter (Banks Act, FICA, POPIA, NPS, FAIS/NCA).
2. **Accessible** to under-served segments (low-income, township, informal-economy, unbanked) at low cost.
3. **Competitive** against TymeBank, Discovery Bank, Bank Zero, OM Bank and the retail-wallet/MoMo challengers.
4. **Well-governed** to institutional-investor and Prudential Authority (PA) standards.

## 3. Objectives

| # | Objective | Success indicator | Owner council |
|---|---|---|---|
| O1 | Secure the banking licence path | Documented, verified licensing strategy with PA engagement | C01 + C16 |
| O2 | Establish a de-risked go-to-market | Well-argued sponsor-bank-first vs licence-first decision (D-001) | C04 + C16 |
| O3 | Design a scalable, compliant core platform | Architecture signed off at quality gates | C06 + C11 |
| O4 | Prove demand with an MVP and pilot cohort | MVP shipped, pilot cohort onboarded, metrics met | C15 + C14 |
| O5 | Protect customers, data and the institution | No unremediated Critical risks; POPIA/FICA controls live | C12 + C01 |
| O6 | Operate the program transparently | Artifacts current; decisions logged; SLAs met | C03 + C02 |

## 4. Scope

### 4.1 In scope
- Program governance, council charters, roadmaps, risk and delivery artifacts (this `program/` tree).
- South African banking/neobank market and regulatory research (see [`../../research/regulatory/README.md`](../../research/regulatory/README.md)).
- Reverse-engineering evidence and REA playbooks for competitive intelligence (see [`../../reverse-engineering/rea-analysis/README.md`](../../reverse-engineering/rea-analysis/README.md)).
- Target architecture for the NeoBank platform, security and fraud controls.
- Customer, product and go-to-market design.
- Skills / workflows / templates localised to the SA context.

### 4.2 Out of scope (for this program iteration)
- Actual capital raising or contractual close (modelled, not executed).
- Brand naming, trademark registration, visual identity sign-off (see D-… naming is deferred).
- Production infrastructure procurement and vendor contracting.
- Ongoing post-launch operations BAU (this program hands over to operations at launch).

### 4.3 Explicitly deferred
- Smart-contract / on-chain execution stack (SAOS deferral record `T-SAOS-001`).
- Crypto-enabled product lines pending the non-bank payments framework and CASP rulings.

## 5. Success metrics

| Dimension | Metric | Target (initial) |
|---|---|---|
| Governance | Foundational decisions logged with rationale | 100% of D-001…D-005 |
| Governance | Artifacts current within one milestone | ≥ 95% |
| Compliance | Pre-launch compliance sign-offs (FICA/POPIA/PCI/NPS) | 100% before money/data surfaces ship |
| Delivery | Quality gates passed before release | 100% |
| Delivery | Critical escalations resolved within SLA | 100% (1h) |
| Product | MVP scope delivered vs agreed | ≥ 90% |
| Customer | Pilot cohort NPS | ≥ +30 (target; validate) |
| Risk | Critical risks with owner + mitigation | 100% |

> Metrics are directional at charter stage and are expected to be sharpened as the milestone roadmap ([`../roadmaps/launch-roadmap.md`](../roadmaps/launch-roadmap.md)) is baselined.

## 6. Stakeholders

| Stakeholder | Interest | Interface |
|---|---|---|
| Sparkling Curious (SC-MASTER-001) | Program success, final arbitration | Direct |
| Board / Executive node (`EXEC-council-ceo`) | Strategy, capital, risk appetite | Via SC |
| Prudential Authority (SARB) | Prudential soundness, licensing | C16 + C01 |
| FSCA / FIC / Information Regulator / NCR / SARB NPS | Conduct, AML, privacy, credit, payments | C01 + C12 + C16 |
| Sponsor bank (if sponsor-first path, D-001) | Partner risk, funds custody | C16 + C10 |
| Customers (SA retail, township, under-served) | Access, price, trust | C14 + C15 + C09 |
| Investors / funders | Return, de-risking | C10 + C04 |
| Incumbent banks & challengers | Competitive dynamics | C04 |

## 7. Governance alignment

This charter is subordinate to the program governance model in [`README.md`](./README.md) and to the SAOS governor documents it inherits. Decision authority is defined in [`authority-matrix.md`](./authority-matrix.md); escalation is defined in [`escalation-protocols.md`](./escalation-protocols.md); the foundational decisions this charter assumes are seeded in [`decision-log.md`](./decision-log.md).

**Ratification:** intended via the authority matrix "Strategic direction" decision type (Sparkling Curious, up to 15–20 business days) — see [`authority-matrix.md`](./authority-matrix.md).
