# Implementation Plan — NeoBank ZA (`Project Umoya`)

**Owner:** C04 Strategy-Growth (plan) · C02 Operations (execution) · **Ratified by:** Sparkling Curious
**Version:** 1.0 · **Date:** 2026-10-16 · **Status:** PROPOSED

> A **phased** implementation plan: Phase 0 Foundations → Phase 1 Licence-in-progress → Phase 2 MVP build → Phase 3 Pilot → Phase 4 Public launch → Phase 5 Scale.
> **No hour estimates.** Phases, milestones, dependencies and council ownership only. Milestone IDs align with [`launch-roadmap.md`](./launch-roadmap.md).

Back-links: [roadmap guide](./README.md) · [launch roadmap](./launch-roadmap.md) · [governance](../governance/README.md) · [risk](../risk/README.md).

---

## Phase 0 — Foundations

**Goal:** a structurally valid, fundable, governable entity ready to file applications.
**Lead council:** C04 (strategy) with C01, C03, C10, C16.

| # | Workstream | Key deliverables | Owner council | Depends on |
|---|---|---|---|---|
| 0.1 | Entity & structure | Public company incorporated (CIPC); shareholding/controlling structure agreed | C01 + C10 | — |
| 0.2 | Governance foundation | Board + Key Individuals bench; King IV board charter; this governance tree | C03 + C01 | 0.1 |
| 0.3 | Foundational decisions | D-001 sponsor strategy, D-004 licence path ratified (Level 3) | SC + C04 + C16 | 0.1 |
| 0.4 | Privacy kick-off | Information Officer appointed + registered (POPIA s55); PAIA manual started | C01 | 0.1 |
| 0.5 | AML kick-off | Draft RMCP; CDD/sanctions scope | C01 + C12 | 0.1 |
| 0.6 | Capital strategy | Equity-raise design vs threshold (R250m bank / R10m mutual); CAR/LCR/NSFR model | C10 | 0.3 |
| 0.7 | Program scaffolding | Roadmaps, risk register, delivery model baselined | C02 + C03 + C04 | — |

**Gate G0 (→ Phase 1):** entity registered · board seated · IO registered · draft RMCP · credible capital plan · D-001/D-004 ratified.

---

## Phase 1 — Licence-in-progress

**Goal:** regulatory applications filed and sponsor/rail arrangements secured.
**Lead council:** C01 (applications) with C16, C10, C07.

| # | Workstream | Key deliverables | Owner council | Depends on |
|---|---|---|---|---|
| 1.1 | Banking authorisation | Banks Act s12 application pack (or mutual/non-bank path per D-004) | C01 + C16 | G0 |
| 1.2 | Sponsor-bank arrangement | Term sheet + operational agreement with sponsor bank (if D-001 approved) | C16 + C10 | G0 |
| 1.3 | Conduct licence | FSP application (FSCA), NCR credit-provider registration (if lending) | C01 | 1.1 |
| 1.4 | FIC registration | Accountable-institution registration (goAML) | C01 | 0.1 |
| 1.5 | Payments access | Clearing/settlement participation or sponsor-based rail access; PayShap readiness | C16 | 1.2 |
| 1.6 | Regulatory engagement | PA queries, pre-application alignment, sandbox if novel | C01 + C16 | 1.1 |

**Gate G1 (→ Phase 2):** authorisation obtained **or** documented PA path + sponsor agreement signed + payments access confirmed.

---

## Phase 2 — MVP build

**Goal:** a compliant, working MVP on a defensible architecture.
**Lead council:** C06 + C11 with C15, C12, C16.

| # | Workstream | Key deliverables | Owner council | Depends on |
|---|---|---|---|---|
| 2.1 | Core & ledger | D-003 solution (build/buy/hybrid) stood up; ledger, accounts, balances | C06 + C11 | G1 |
| 2.2 | Payments build | ISO 20022 messaging; instant payments; card issuance | C11 + C16 | 2.1 |
| 2.3 | KYC/AML systems | FICA Tier-1 CDD, UBO tracing, TFS screening, STR/CTR pipelines | C12 + C01 | 2.1 |
| 2.4 | Privacy programme | Privacy notices, consent, cross-border mechanisms, breach runbook | C01 | 0.4 |
| 2.5 | Customer app | Onboarding, account, payments UX | C08 + C15 | 2.1 |
| 2.6 | Fraud controls | Transaction monitoring, device/behavioural signals, BEC defences | C12 | 2.2 |
| 2.7 | Data platform | Analytics, reporting, BA-return groundwork | C06 + C10 | 2.1 |
| 2.8 | Security engineering | Threat model, pen-test prep, secrets/keys management | C12 | 2.1 |

**Gate G2 (→ Phase 3):** MVP passes all [quality gates](../delivery/quality-gates.md) · compliance sign-offs (FICA/POPIA/PCI) · pen-test passed · no open Critical risks without treatment.

---

## Phase 3 — Pilot

**Goal:** prove demand and operational readiness with a controlled cohort.
**Lead council:** C14 + C15 with C02, C12.

| # | Workstream | Key deliverables | Owner council | Depends on |
|---|---|---|---|---|
| 3.1 | Pilot design | Cohort definition, success metrics, consent | C14 + C15 | G2 |
| 3.2 | Service operations | Support runbooks, incident response, SLA monitoring | C02 | G2 |
| 3.3 | Fraud/AML monitoring live | Real-time monitoring + FICA reporting | C12 + C01 | 2.6 |
| 3.4 | OA/Ops readiness | Reconciliation, dispute handling, call-centre flows | C02 + C16 | G2 |
| 3.5 | Learning loop | NPS, friction, revenue-per-user, defect triage | C14 + C15 | 3.1 |

**Gate G3 (→ Phase 4):** pilot metrics met (see [`../../research/neobank-competitors/README.md`](../../research/neobank-competitors/README.md) for benchmarks) · incident response proven · no unresolved Critical/High findings.

---

## Phase 4 — Public launch

**Goal:** general availability with marketing and compliance in lockstep.
**Lead council:** C09 + C07 with C15, C14, C16.

| # | Workstream | Key deliverables | Owner council | Depends on |
|---|---|---|---|---|
| 4.1 | Go-to-market | Launch campaign, acquisition funnel, partnerships | C09 + C07 | G3 |
| 4.2 | Scale-readiness | Load/capacity validation, cost controls | C06 + C10 | G3 |
| 4.3 | Compliance lock | NFO membership, Code of Banking Practice, COFI-readiness mapping | C01 + C16 | G3 |
| 4.4 | Launch | Controlled GA → surge | C02 + SC | 4.1, 4.2 |

**Gate G4 (→ Phase 5):** GA stable · early cohort KPIs on track · regulatory reporting live.

---

## Phase 5 — Scale

**Goal:** sustainable growth, resilience and capability maturity.
**Lead council:** C04 with C02, C06, C10.

| # | Workstream | Key deliverables | Owner council | Depends on |
|---|---|---|---|---|
| 5.1 | Growth | Acquisition, retention, cross-sell (within scope) | C09 + C07 | G4 |
| 5.2 | Resilience | DR/BCP tested, multi-AZ, capacity headroom | C06 + C12 | G4 |
| 5.3 | Capability maturity | Advance capabilities per [`capability-maturity-model.md`](./capability-maturity-model.md) | domain councils | G4 |
| 5.4 | Full licence migration | Migrate sponsor-held funds to own licence if licensed | C16 + C01 | 1.1 |
| 5.5 | Continuous compliance | BA returns, AEOI, POPIA/PAIA cycles | C10 + C01 | G4 |

---

## Dependency map (critical path)

```text
Phase 0 entity ──► D-001/D-004 ratified ──► Phase 1 applications + sponsor
                                               │
                                               ▼
                          G1 authorisation/sponsor ──► Phase 2 MVP build
                                                          │
                                                          ▼
                                                 G2 quality/compliance
                                                          │
                                                          ▼
                                                   Phase 3 Pilot ──► G3 metrics
                                                          │
                                                          ▼
                                               Phase 4 Launch ──► G4 stable
                                                          │
                                                          ▼
                                                     Phase 5 Scale
```

**Cross-phase dependencies (hard):**
- Capital strategy (0.6) depends on D-004; the raise cannot be sized before the licence path is chosen.
- Payments access (1.5) depends on sponsor arrangement (1.2) **or** independent licence (1.1).
- Fraud controls (2.6) are a prerequisite of live money movement, not a follow-on.
- POPIA/privacy programme (2.4) must complete **before** any customer data is processed at scale.

---

## Council ownership summary

| Phase | Lead | Primary support | Deciders |
|---|---|---|---|
| 0 Foundations | C04 | C01, C03, C10, C16 | SC + Board |
| 1 Licence-in-progress | C01 | C16, C10, C07 | SC + Board |
| 2 MVP build | C06 + C11 | C15, C12, C16, C08 | SC (C15 product authority) |
| 3 Pilot | C14 + C15 | C02, C12 | C14/C15 captains |
| 4 Public launch | C09 + C07 | C15, C14, C16 | SC |
| 5 Scale | C04 | C02, C06, C10 | SC + Board |
