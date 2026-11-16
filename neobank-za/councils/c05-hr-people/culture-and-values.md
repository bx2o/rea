# C05 — Culture & Values

- **Owner:** C05 Chief People Officer · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Related:** [`org-design.md`](./org-design.md), [`learning-and-development.md`](./learning-and-development.md)

> Culture is a **control environment**, not a poster. For a bank, the behaviours we reward directly shape conduct risk, which the FSCA supervises (`../../research/regulatory/conduct-fais-nca.md`). These values are proposed defaults; the board and SC ratify them.

---

## 1. Why culture matters more in a bank

1. **Conduct is regulated.** Treating customers fairly is a supervised obligation, not a marketing choice.
2. **Trust is the product.** A neobank's only durable asset at launch is trust; one conduct failure is existential.
3. **Speed without control is a bank-killer.** We reward *safe* speed — fast where reversible, deliberate where irreversrible.
4. **Evidence culture.** We distinguish observed / inferred / unknown (inherited from PLAN.md §0 and REA methodology).

---

## 2. Values (proposed)

| Value | What it means in practice | Anti-pattern we reject |
|---|---|---|
| **Trustworthy by default** | Do the right thing when no one is watching; log the decision. | Cutting corners on KYC to hit onboarding targets. |
| **Reconcile the truth** | Numbers must tie; disagreements are settled by evidence, not seniority. | Silent write-offs; "close enough" balances. |
| **Customer outcome first** | Judge decisions by the customer's actual outcome, not the metric. | Hitting an SLA by closing a complaint without resolving it. |
| **Safe speed** | Move fast on reversible things; slow and rigorous on irreversible ones. | Shipping a money surface without controls (PLAN.md §4 gate). |
| **Say the unknown** | State what we don't know; never dress up inference as fact. | Overclaiming research as measured data. |
| **Build for the next engineer** | Documentation, tests, clear names. | Heroics that only the author understands. |

---

## 3. Ways of working

- **Evidence over assertion.** Every claim carries a source or an explicit `[UNVERIFIED]`/`[UNKNOWN]` tag (`.stremiium/README.md` "physical workspace evidence overrides stale reports").
- **Maker-checker as a cultural norm** — not just a control: review is a kindness, not an insult.
- **Blameless post-incident reviews.** Incidents are system failures to learn from; hiding them is the only fireable behaviour.
- **Documentation-first.** If it isn't written down, it didn't happen (interlock with C03 records).
- **Async by default, synchronous for hard things.** Programme artefacts live in the workspace, not in inboxes.
- **Small, reversible decisions.** Big, irreversible ones go through an ADR (`../../templates/decision-record.md`).

---

## 4. Meeting & decision hygiene

| Meeting type | Cadence `[TARGET]` | Output |
|---|---|---|
| Council standup | weekly | blockers, SLA signal |
| Decision forum | as needed | ADR recorded |
| Incident review | post-incident | RCA + actions |
| All-hands | monthly | strategy, culture pulse |
| Retrospective | per milestone | process change record |

---

## 5. Conduct & ethics anchors

- **Treating Customers Fairly / Code of Banking Practice** — behavioural expectations for anyone touching a customer outcome (`../../research/regulatory/conduct-fais-nca.md` §5).
- **No secrets in artifacts** — credentials/PII must never enter the workspace (`.stremiium/README.md`).
- **Conflict-of-interest declarations** — for procurement, hiring, and any fit-and-proper role.
- **Whistleblowing** — a protected channel to the audit committee / C01.

---

## 6. How we measure culture (leading indicators)

| Signal | What we watch | Target `[TARGET]` |
|---|---|---|
| Speak-up rate | incidents/risks raised voluntarily | rising trend |
| Post-incident follow-through | actions closed on time | ≥ 90% |
| Onboarding time-to-productivity | days to first independent contribution | falling trend |
| eNPS / engagement | survey | monitor |
| Attrition in fit-and-proper roles | voluntary exits | below `[ASSUMPTION]` threshold |

> No specific numeric thresholds are asserted here beyond internal targets; engagement benchmarks are `[OPEN ITEM]`.

---

## 7. Cross-links

- Capability → [`learning-and-development.md`](./learning-and-development.md)
- Hiring → [`hiring-plan.md`](./hiring-plan.md)
- Conduct regulation → `../../research/regulatory/conduct-fais-nca.md`
- Knowledge/records → `../c03-admin-knowledge/records-and-retention.md`
