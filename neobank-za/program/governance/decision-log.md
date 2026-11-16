# Decision Log — NeoBank ZA

**Owner:** C03 Admin-Knowledge · **Ratified by:** Sparkling Curious (SC-MASTER-001)
**Version:** 1.0 · **Date:** 2026-10-16 · **Status:** Seeded (foundational decisions `PROPOSED`)

> Institutional memory for Level-2/3 decisions. A strategic decision that is **not** in this log is **not** a decision. Format adapted from SAOS `context.md`. Decision levels and SLAs are defined in [`authority-matrix.md`](./authority-matrix.md).

Back-links: [governance overview](./README.md) · [authority matrix](./authority-matrix.md) · [roadmaps](../roadmaps/README.md) · [risk register](../risk/risk-register.md).

---

## Status values

`PROPOSED` → `UNDER REVIEW` → `ACCEPTED` → `SUPERSEDED` / `REJECTED` / `DEFERRED`.

---

## Foundational decisions

### D-001 — Sponsor-bank-first strategy

| Field | Value |
|---|---|
| **ID** | D-001 |
| **Decision** | Adopt a **sponsor-bank-first** go-to-market: launch payment/deposit-like products under a licensed sponsor bank's umbrella while the de novo licence is pursued, rather than waiting for the full licence before any customer-facing launch. |
| **Level** | 3 (Strategic) |
| **Status** | **PROPOSED** |
| **Proposed by** | C04 Strategy-Growth + C16 Banking-Fintech |
| **Decider** | Sparkling Curious + Board |
| **Consulted** | C04, C16, C10, C01, C12 |
| **Rationale (proposed)** | De-risks the long/non-statutory PA timeline (6–9 months guidance); enables revenue and learning earlier; sponsor-bank dependency becomes a managed risk rather than a blocker. |
| **Alternatives considered** | (A) Licence-first, no launch until s16 registration; (B) Sponsor-first then migrate; (C) Acquire an existing licensed entity. |
| **Linked risks** | R-002 sponsor-bank dependency; R-001 licensing delay; R-004 funding. |
| **Linked roadmap** | [`implementation-plan.md` Phase 1](../roadmaps/implementation-plan.md) |
| **Date opened** | 2026-10-16 |

### D-002 — Cloud region / data residency

| Field | Value |
|---|---|
| **ID** | D-002 |
| **Decision** | Target a **South African cloud region** (or a formally approved in-region residency posture) for production customer data and transactional systems, in line with POPIA s72 cross-border constraints. |
| **Level** | 3 (Strategic) |
| **Status** | **PROPOSED** |
| **Proposed by** | C06 Engineering-Infrastructure |
| **Decider** | Sparkling Curious |
| **Consulted** | C06, C12, C01, C10, C11, C16 |
| **Rationale (proposed)** | Simplifies POPIA cross-border-transfer obligations, supports latency and payment-rail proximity, and reduces supervisory friction. |
| **Alternatives considered** | (A) In-region only; (B) Multi-region with adequacy/BCR controls; (C) Global provider with contractual safeguards. |
| **Linked risks** | R-010 cloud residency; R-006 POPIA breach; R-012 downtime. |
| **Linked roadmap** | [`implementation-plan.md` Phase 0/2](../roadmaps/implementation-plan.md) |
| **Date opened** | 2026-10-16 |

### D-003 — Build-vs-buy core

| Field | Value |
|---|---|
| **ID** | D-003 |
| **Decision** | Decide the sourcing model for the **core banking ledger** — build a thin ledger on a modern stack vs buy a proven core-banking platform vs a hybrid (buy core, build the experience layer). |
| **Level** | 3 (Strategic) |
| **Status** | **PROPOSED** |
| **Proposed by** | C06 Engineering-Infrastructure + C11 Dev-Engineering |
| **Decider** | Sparkling Curious |
| **Consulted** | C06, C11, C10, C16, C15, C12 |
| **Rationale (proposed)** | Core choice gates cost, speed, resilience and regulatory defensibility; must be settled before Phase 2 build. |
| **Alternatives considered** | (A) Build thin core; (B) Buy proven core; (C) Hybrid buy-core/build-experience. |
| **Linked risks** | R-007 legacy/core integration; R-013 model risk; R-004 funding. |
| **Linked roadmap** | [`implementation-plan.md` Phase 2](../roadmaps/implementation-plan.md) |
| **Date opened** | 2026-10-16 |

### D-004 — Licence path

| Field | Value |
|---|---|
| **ID** | D-004 |
| **Decision** | Select the regulatory permission stack: full **Banks Act s12/s16** licence vs **mutual/co-operative bank** vs **sponsor-bank model** vs **non-bank payment institution** (under the emerging framework). |
| **Level** | 3 (Strategic) |
| **Status** | **PROPOSED** |
| **Proposed by** | C01 Legal-Compliance + C16 Banking-Fintech |
| **Decider** | Sparkling Curious + Board |
| **Consulted** | C01, C16, C10, C04, C12 |
| **Rationale (proposed)** | Determines capital threshold (R250m full bank vs R10m mutual), product scope, timelines and sponsor dependencies; must be decided before capital strategy. |
| **Alternatives considered** | (A) Full banking licence; (B) Mutual/co-operative bank; (C) Sponsor-bank route; (D) Non-bank PSP only. |
| **Linked research** | [`../../research/regulatory/licensing-roadmap.md`](../../research/regulatory/licensing-roadmap.md), [`banking-licensing.md`](../../research/regulatory/banking-licensing.md) |
| **Linked risks** | R-001 licensing delay; R-002 sponsor dependency; R-003 capital adequacy. |
| **Date opened** | 2026-10-16 |

### D-005 — MVP scope

| Field | Value |
|---|---|
| **ID** | D-005 |
| **Decision** | Define the **MVP scope** for the pilot: candidate core = transactional account (sponsor-held), instant payments (PayShap/RTC), card issuance, basic KYC (FICA Tier-1) and app experience. Lending, crypto and investments deferred. |
| **Level** | 2 → 3 (C15 proposes, SC ratifies) |
| **Status** | **PROPOSED** |
| **Proposed by** | C15 Product-Management |
| **Decider** | Sparkling Curious (ratify C15 proposal) |
| **Consulted** | C04, C06, C11, C16, C12, C14, C09 |
| **Rationale (proposed)** | Smallest credible product that proves demand and satisfies compliance gates without over-scoping before the licence path is settled. |
| **Alternatives considered** | (A) Lean payments-only MVP; (B) Payments + card + KYC (recommended); (C) Full feature set including lending. |
| **Linked risks** | R-011 scope creep; R-016 model risk; R-005 BEC/fraud. |
| **Linked roadmap** | [`../roadmaps/launch-roadmap.md` M3–M6](../roadmaps/launch-roadmap.md) |
| **Date opened** | 2026-10-16 |

---

## Decision log index

| ID | Title | Level | Status | Date opened |
|---|---|---|---|---|
| D-001 | Sponsor-bank-first strategy | 3 | PROPOSED | 2026-10-16 |
| D-002 | Cloud region / data residency | 3 | PROPOSED | 2026-10-16 |
| D-003 | Build-vs-buy core | 3 | PROPOSED | 2026-10-16 |
| D-004 | Licence path | 3 | PROPOSED | 2026-10-16 |
| D-005 | MVP scope | 2→3 | PROPOSED | 2026-10-16 |

**Change control:** edits to an `ACCEPTED` entry create a new revision and move the prior version to `SUPERSEDED`; the original rationale is never deleted.
