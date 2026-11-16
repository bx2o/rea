# C05 — Target Org Design (by Phase)

- **Owner:** C05 Chief People Officer · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Roles:** [`hiring-plan.md`](./hiring-plan.md)
- **Grounding:** `../../research/regulatory/licensing-roadmap.md`, `../../research/regulatory/tax-governance.md` §6–7

> Headcount figures are `[ASSUMPTION]` placeholders (rounded, order-of-magnitude only). Reporting lines are **structural**, expressed to council captains per the Stremiium two-plane model (`.stremiium/governance/workflow-routing.md` §2).

---

## 1. Design principles

1. **Regulator-first seats.** Board, Key Individuals, Compliance Officer/MLCO and Information Officer are seated before build (`../../research/regulatory/licensing-roadmap.md` Phase 0).
2. **Thin spine, deep specialists.** A small executive layer; deep expertise in risk, compliance, AML and payments.
3. **Council-aligned, not matrixed into mush.** Every domain has one accountable council captain; human reporting lines follow the same boundaries where possible.
4. **Buy vs build vs outsource.** Non-differentiating back-office reverts to BPO (see `../c02-operations/operating-model.md` §8); differentiating engineering stays in-house.
5. **Fit-and-proper by design.** Competence records maintained from day one, not retro-fitted at licence inspection.

---

## 2. Board & executive layer (Phase 0–1)

| Seat | Governance basis | Council alignment |
|---|---|---|
| Non-executive Chair | King IV independent chair | SC / board |
| Non-executive Directors | King IV majority NED (`../../research/regulatory/tax-governance.md` §6) | board |
| CEO | executive lead | EXEC / SC |
| CFO | capital, treasury, BA returns | C10 |
| Chief Risk Officer (CRO) | risk, credit, operational risk | C12 / C01 |
| Chief Compliance Officer (CCO) / MLCO | FICA RMCP, conduct, fit-and-proper | C01 |
| Chief Technology Officer (CTO) | platform, security | C06 |
| Chief Operating Officer (COO) / VP Operations | run-the-bank | C02 |
| Chief People Officer (CPO) | people, culture | C05 |

**Board committees** required: **Audit Committee (s94)** and **Social & Ethics Committee (s72)** (`../../research/regulatory/tax-governance.md` §7). The KI bench must be fit-and-proper (`../../research/regulatory/banking-licensing.md` §4).

---

## 3. Structure by phase

### 3.1 Phase 0 — Foundations (Months 0–3)

```text
Board (Chair + NEDs)
├── CEO
│   ├── Interim Compliance Officer / MLCO           → C01
│   ├── Information Officer (POPIA s55)             → C01/C03
│   ├── Company Secretary / governance              → C01
│   └── Interim CFO (capital strategy)              → C10
```
Seats to fill immediately: Chair, 2–3 NEDs, CEO, interim CO/MLCO, Information Officer `[ASSUMPTION: ~6–9 people]`.

### 3.2 Phase 1 — Applications (Months 3–9)

```text
CEO
├── Compliance & Risk
│   ├── Chief Compliance Officer / MLCO             → C01
│   ├── Risk Officer                                → C12/C01
│   └── AML Officer (RMCP build)                    → C01
├── Finance
│   └── CFO                                         → C10
├── Technology
│   └── CTO + core platform leads                   → C06/C11
├── Operations
│   └── COO + payments/recon design leads           → C02
└── People
    └── CPO                                         → C05
```
`[ASSUMPTION: ~15–25 people]` — mostly senior, licence-focused.

### 3.3 Phase 2 — Build (Months 6–18)

Adds depth: engineering squads (C11), AML operations (C02/C01), treasury (C10), product (C15), design (C08), data (C06/C12). `[ASSUMPTION: ~50–90 people].`

### 3.4 Phase 3 — Launch & scale (Months 12–24)

Adds customer-facing scale: marketing (C09), sales (C07), customer success (C14), expanded ops + BPO (C02). `[ASSUMPTION: ~120–250 people, with a material share via BPO].`

---

## 4. Reporting lines to council captains

Human reporting maps to the Stremiium council captains so that domain accountability is single-threaded:

| Function | Council captain | Notes |
|---|---|---|
| Legal, Compliance, Risk, Conduct | C01 | CCO reports to C01 captain on domain matters |
| Operations | C02 | COO is the C02 captain |
| Knowledge & records | C03 | CIO/Head of Knowledge aligns to C03 |
| Strategy | C04 | |
| People | C05 | CPO is the C05 captain |
| Engineering & infra | C06/C11 | CTO aligns to C06; dev leads to C11 |
| Security | C12 | CRO/CISO aligns to C12 |
| Web3/rails | C13 | aligns on digital-asset policy |
| Product | C15 | |
| Banking-Fintech | C16 | rails/licensing liaison |

> The council model is the **domain authority**; the employment hierarchy is the **reporting** line. Where they differ, the captain is consulted, the people-manager decides (see `.stremiium/governance/workflow-routing.md` §2 two-plane model).

---

## 5. Span-of-control & succession

- `[TARGET]` manager span 5–8 for teams; wider only for analogous IC roles.
- `[TARGET]` every fit-and-proper role has a documented deputy/succession candidate by Phase 3.
- **Key-person risk:** any single-person dependency on the licence critical path is logged with a mitigation.

---

## 6. Cross-links

- Roles & descriptions → [`hiring-plan.md`](./hiring-plan.md)
- Culture → [`culture-and-values.md`](./culture-and-values.md)
- Capability building → [`learning-and-development.md`](./learning-and-development.md)
- Governance → `../../research/regulatory/tax-governance.md`, `../c01-legal-compliance/`
