# Decision Authority Matrix — NeoBank ZA

**Owner:** C03 Admin-Knowledge · **Assured by:** C01 Legal-Compliance
**Version:** 1.0 · **Date:** 2026-10-16 · **Status:** Active

> Defines **who decides, who consults, and the SLA** for every recurring decision class on the NeoBank ZA program. Decision *levels* (1/2/3) follow SAOS [`sparkling-curious-instructions.md §3.1`](file:///workspace/_stremiium/.stremiium/governance/rules/sparkling-curious-instructions.md). Authority *tiers* follow the [hierarchy](../governance/README.md#2-authority-hierarchy).

Back-links: [governance overview](./README.md) · [RACI](./raci.md) · [escalation](./escalation-protocols.md) · [decision log](./decision-log.md).

---

## 1. Decision levels

| Level | Name | Authority | Scope | SLA |
|---|---|---|---|---|
| **Level 1** | Within-council | Council Captain | Task assignment, process change, performance, urgent ops affecting **one** council | 1–3 business days (urgent: same day) |
| **Level 2** | Cross-council | Sparkling Curious (arbitration) | Multi-council priority, resource allocation, strategy affecting **2+** councils, high-severity issues, tie-breaks | Critical 1h · High 4h · Medium 24h · Low 72h |
| **Level 3** | Strategic / organizational | Sparkling Curious + Board | Org direction, licensing path, market entry, org structure, risk acceptance above appetite | 5–20 business days (Critical: real-time) |

**Rule:** a decision is made at the **lowest level with sufficient authority**, but never lower than the level its *blast radius* requires.

---

## 2. Master matrix (decision type × decide × consult × SLA)

| Decision type | Level | Who decides | Who must be consulted | SLA |
|---|---|---|---|---|
| Within-council task assignment | 1 | Council Captain | Affected agents | 1 day |
| Within-council process change | 1 | Council Captain | Senior/Lead agents | 2–3 days |
| Council SLA target adjustment | 1 | Council Captain | C02 Operations | 3 days |
| Council budget request | 1 → 2 | C10 Finance (approve) | C04 Strategy, C01 Legal | 5–10 days |
| Multi-council priority conflict | 2 | Sparkling Curious | All affected captains | Medium 24h |
| Cross-council resource allocation | 2 | C02 + C10 (joint) | Requesting councils | 5–10 days |
| Product roadmap / MVP scope | 2 | C15 Product (authority) | C04, C06/C11, C09, C16 | 10 days |
| Technical / target architecture | 2 | C06 Engineering | C11, C12, C16 | 5–10 days |
| Security posture / critical incident | 2 | C12 Security (+ SC if Critical) | C01, C06, C16 | Critical 1h · High 4h |
| Banking compliance requirement | 2 | C16 Banking (+ C01) | C12, affected councils | Real-time → 5 days |
| Data protection / POPIA decision | 2 | C01 Legal (privacy authority) | C12, C03, C16 | 3–10 days |
| Vendor / partner selection | 2 | C02 Operations | C10, C01, C16 | 5–10 days |
| Marketing / communications strategy | 2 | C09 Marketing | C04 Strategy | 5–10 days |
| Sales / partnership strategy | 2 | C07 Sales | C04, C10 | 5–10 days |
| **Licensing path (D-004)** | 3 | Sparkling Curious + Board | C01, C16, C10 | 15–20 days |
| **Build-vs-buy core (D-003)** | 3 | Sparkling Curious | C06, C11, C10, C16 | 10–20 days |
| **Sponsor-bank-first strategy (D-001)** | 3 | Sparkling Curious + Board | C04, C16, C10, C01 | 15–20 days |
| **Cloud region / data residency (D-002)** | 3 | Sparkling Curious | C06, C12, C01 | 10 days |
| Organizational structure change | 3 | Sparkling Curious | All captains | 15–20 days |
| Risk acceptance above appetite | 3 | Sparkling Curious + Board | C12, C01, C10 | 5 days |
| Emergency response (outage, breach) | 3 (fast-track) | Lowest qualified authority, ratify within 24h | Affected captains, SC | Real-time |

> **Special authorities** (inherited, binding within their domain): **Budget** — C10 · **Product** — C15 · **Banking compliance** — C16 · **Privacy/Legal compliance** — C01 · **Security** — C12. A special-authority ruling can only be overridden by Level-3 escalation.

---

## 3. Foundational decisions on this program

These five are **Level-3 strategic decisions** and are currently `PROPOSED` in the [decision log](./decision-log.md):

| ID | Decision | Level | Decider | Consult |
|---|---|---|---|---|
| D-001 | Sponsor-bank-first vs licence-first strategy | 3 | SC + Board | C04, C16, C10, C01 |
| D-002 | Cloud region / data residency | 3 | SC | C06, C12, C01 |
| D-003 | Build-vs-buy for the core banking platform | 3 | SC | C06, C11, C10, C16 |
| D-004 | Licence path (full bank / mutual / sponsor / non-bank PSP) | 3 | SC + Board | C01, C16, C10 |
| D-005 | MVP scope | 2→3 | C15 (propose) → SC (ratify) | C04, C06, C11, C16, C12 |

---

## 4. Decision hygiene (all levels)

1. **Document before implement** — every Level-2/3 decision is logged in [`decision-log.md`](./decision-log.md) with rationale and alternatives.
2. **Consult, then decide** — consultation does not confer veto, except for special authorities.
3. **Respect the SLA** — if the SLA lapses without a decision, the issue auto-escalates one level ([`escalation-protocols.md`](./escalation-protocols.md)).
4. **No unlogged strategy** — a Level-3 decision not in the decision log is not a decision.
5. **Never** — override security/compliance; skip escalation; commit another council's resources.
