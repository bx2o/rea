# Launch Roadmap — NeoBank ZA (`Project Umoya`)

**Owner:** C04 Strategy-Growth · **Gate authority:** Sparkling Curious · **Assured by:** C02 Operations
**Version:** 1.0 · **Date:** 2026-10-16 · **Status:** PROPOSED

> Milestone-based roadmap **M0 → M12+**. Each milestone has an **entry gate** (what must be true to start) and a **gating criterion** (what must be true to pass). Milestones are sequenced by dependency, not by calendar — the calendar column is a *planning assumption*, not a commitment.

Back-links: [roadmap guide](./README.md) · [implementation plan](./implementation-plan.md) · [governance](../governance/README.md) · [risk](../risk/risk-register.md).

---

## Milestone summary

| M | Name | Phase | Owner council | Planning anchor (assumption) |
|---|---|---|---|---|
| M0 | Program stand-up | 0 | C03 + C02 | Now |
| M1 | Entity & decisions ratified | 0 | C04 + C01 | +1 quarter |
| M2 | Applications filed | 1 | C01 | +2 quarters |
| M3 | Sponsor & rail secured | 1 | C16 | +2–3 quarters |
| M4 | Authorisation / documented path | 1 | C01 + C16 | +3 quarters |
| M5 | Core & ledger live (non-prod) | 2 | C06 + C11 | +4 quarters |
| M6 | MVP feature-complete | 2 | C15 + C11 | +5 quarters |
| M7 | Controls live (KYC/AML/fraud/privacy) | 2 | C12 + C01 | +5 quarters |
| M8 | Security & quality gate passed | 2 | C12 + C06 | +5–6 quarters |
| M9 | Pilot live | 3 | C14 | +6 quarters |
| M10 | Pilot reviewed & go/no-go | 3 | C14 + C15 | +6–7 quarters |
| M11 | Public launch | 4 | C09 + C07 | +7 quarters |
| M12 | Scale & maturity | 5 | C04 | +8 quarters onward |

---

## Milestone detail

### M0 — Program stand-up
- **Deliverables:** governance tree, council charters, roadmap/risk/delivery baselines.
- **Entry gate:** program mandate from SC.
- **Gating criterion:** program artifacts published and cross-linked; vocabulary law applied.

### M1 — Entity & decisions ratified
- **Deliverables:** public company incorporated; board seated; D-001 sponsor strategy and D-004 licence path ratified; capital plan drafted.
- **Entry gate:** M0.
- **Gating criterion:** **G-1** — entity valid + D-001/D-004 `ACCEPTED` + IO registered + draft RMCP.

### M2 — Applications filed
- **Deliverables:** Banks Act s12 (or path per D-004) filed; FSP/NCR/FIC applications filed.
- **Entry gate:** G-1.
- **Gating criterion:** **G-2** — complete submissions acknowledged by regulators; query-response process running.

### M3 — Sponsor & rail secured
- **Deliverables:** sponsor-bank agreement signed (if D-001); payments/clearing access confirmed.
- **Entry gate:** G-1.
- **Gating criterion:** **G-3** — signed sponsor agreement **or** independent rail access; funds-custody model documented.

### M4 — Authorisation / documented path
- **Deliverables:** PA authorisation or documented, agreed path; conditions register opened.
- **Entry gate:** G-2, G-3.
- **Gating criterion:** **G-4** — authorisation obtained or PA path documented; conditions tracked.

### M5 — Core & ledger live (non-prod)
- **Deliverables:** D-003 core solution; ledger, accounts, balances in non-prod; data platform seeded.
- **Entry gate:** G-4.
- **Gating criterion:** **G-5** — ledger reconciliation proven; architecture signed off (C06).

### M6 — MVP feature-complete
- **Deliverables:** onboarding, account, payments (PayShap/RTC), card, app (per D-005).
- **Entry gate:** G-5.
- **Gating criterion:** **G-6** — D-005 scope complete against acceptance criteria; UX signed off (C08/C15).

### M7 — Controls live
- **Deliverables:** FICA Tier-1 KYC, sanctions screening, transaction monitoring, POPIA notices, breach runbook.
- **Entry gate:** G-5.
- **Gating criterion:** **G-7** — C01 + C12 compliance sign-offs; no secrets; POPIA/FICA evidence pack.

### M8 — Security & quality gate passed
- **Deliverables:** threat model, pen-test, secrets management, 80%+ coverage, dependency scan.
- **Entry gate:** G-6, G-7.
- **Gating criterion:** **G-8** — all [quality gates](../delivery/quality-gates.md) green; no open Critical findings.

### M9 — Pilot live
- **Deliverables:** controlled cohort onboarded; support runbooks; real-time monitoring.
- **Entry gate:** G-8.
- **Gating criterion:** **G-9** — pilot cohort live; incident response exercised; metrics instrumented.

### M10 — Pilot reviewed & go/no-go
- **Deliverables:** pilot report (NPS, activation, friction, revenue-per-user, defects, incidents).
- **Entry gate:** G-9.
- **Gating criterion:** **G-10** — SC go/no-go; all High findings remediated or accepted with treatment.

### M11 — Public launch
- **Deliverables:** GTM campaign, capacity validation, NFO membership, Code adoption, COFI mapping.
- **Entry gate:** G-10 (go).
- **Gating criterion:** **G-11** — GA stable; reporting live; early KPIs on track.

### M12 — Scale & maturity
- **Deliverables:** growth engine, DR/BCP tested, capability maturity advanced (see [maturity model](./capability-maturity-model.md)), sponsor→licence migration if licensed.
- **Entry gate:** G-11.
- **Gating criterion:** **G-12** — sustained growth + resilience proven + target maturity levels met.

---

## Gating criteria (consolidated)

| Gate | Must be true | Decider |
|---|---|---|
| G-1 | Entity valid; D-001/D-004 accepted; IO registered; draft RMCP | SC |
| G-2 | Regulator submissions complete & acknowledged | C01 + SC |
| G-3 | Sponsor agreement signed or independent rail access | C16 + SC |
| G-4 | Authorisation or documented PA path; conditions register | SC + Board |
| G-5 | Ledger reconciliation proven; architecture signed off | C06 |
| G-6 | MVP scope complete; UX signed off | C15 |
| G-7 | Compliance sign-offs (FICA/POPIA) | C01 + C12 |
| G-8 | All quality gates green; no open Criticals | C12 + C06 |
| G-9 | Pilot live; incident response exercised | C14 + C02 |
| G-10 | Pilot metrics met; go/no-go decision | SC |
| G-11 | GA stable; reporting live | SC + C02 |
| G-12 | Growth + resilience + maturity targets met | SC + Board |

---

## Critical-path and blockers

- **Blocking chain:** entity → D-001/D-004 → applications → sponsor/rail → build → pilot → launch. A slip in any earlier link slips all later links.
- **Top blockers to watch:** licensing delay (R-001), sponsor-bank dependency (R-002), funding (R-004), rail access (R-009), cloud residency (R-010). See [`../risk/risk-register.md`](../risk/risk-register.md).
- **No milestone passes with an open Critical risk lacking a treatment** (see [risk appetite](../risk/risk-appetite-statement.md)).

---

## Governance hooks per milestone

Every milestone requires: an **owner council**, a **decision logged** where a Level-2/3 call is made ([decision log](../governance/decision-log.md)), **quality gates passed** ([delivery/quality-gates.md](../delivery/quality-gates.md)), and **escalation SLAs honoured** ([escalation-protocols.md](../governance/escalation-protocols.md)).
