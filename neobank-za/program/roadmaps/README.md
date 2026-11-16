# Program Roadmaps — NeoBank ZA

**Owner:** C04 Strategy-Growth · **Assured by:** C02 Operations
**Version:** 1.0 · **Date:** 2026-10-16

> The planning spine of `Project Umoya`. Roadmaps describe **phases, milestones, dependencies and ownership** — never hour-level estimates. Sequencing follows the regulatory dependency order documented in [`../../research/regulatory/licensing-roadmap.md`](../../research/regulatory/licensing-roadmap.md).

Back-links: [governance](../governance/README.md) · [risk](../risk/README.md) · [delivery](../delivery/README.md) · [councils](../../councils/README.md).

---

## 1. How to read these roadmaps

1. **Phase → Milestone → Gate.** Each roadmap advances through **phases**; each phase ends at a **milestone**; each milestone has a **gating criterion** that must be met before the next phase starts.
2. **No hours, no dates-as-truth.** Durations are expressed as phases and milestone order. Where a calendar anchor exists it is a *planning assumption*, not a commitment.
3. **Dependencies are explicit.** If a dependency is unmet, the phase does not start — it does not "start anyway".
4. **Every milestone has an owner council.** Ownership means accountability for the artifact, not for doing all the work.
5. **Evidence over report.** Progress is evidenced by artifacts (see [`../delivery/definition-of-done.md`](../delivery/definition-of-done.md)), not by status prose.

---

## 2. File index

| File | What it contains |
|---|---|
| [`README.md`](./README.md) | This guide + roadmap-reading conventions |
| [`implementation-plan.md`](./implementation-plan.md) | Phased plan (Phase 0–5) with dependencies and council ownership |
| [`launch-roadmap.md`](./launch-roadmap.md) | Milestone roadmap M0–M12 with gating criteria |
| [`capability-maturity-model.md`](./capability-maturity-model.md) | Maturity levels 1–5 per capability (payments, KYC, fraud, data, ops, security) |

Governance context: [decision log](../governance/decision-log.md) seeds D-001…D-005 that these roadmaps assume.

---

## 3. Phase legend (used across roadmap files)

| Phase | Name | Theme | Terminal milestone |
|---|---|---|---|
| **Phase 0** | Foundations | Entity, governance, structure, decisions | M0–M1 |
| **Phase 1** | Licence-in-progress | Regulatory applications, sponsor arrangements | M2–M4 |
| **Phase 2** | MVP build | Platform, controls, product | M5–M8 |
| **Phase 3** | Pilot | Controlled cohort, learning | M9–M10 |
| **Phase 4** | Public launch | General availability, marketing | M11 |
| **Phase 5** | Scale | Growth, resilience, maturity | M12+ |

---

## 4. Guiding constraints

- **Regulation is the critical path, not engineering.** Licensing, FICA, POPIA and payments access gate everything downstream.
- **The sponsor-bank decision (D-001) and licence path (D-004) are the two biggest forks.** They are decided in Phase 0–1 and re-validated at every gate.
- **Risk drives sequencing.** The top risks in [`../risk/risk-register.md`](../risk/risk-register.md) must each have a named owner and a treatment before a gate closes.
- **Quality gates are non-negotiable.** See [`../delivery/quality-gates.md`](../delivery/quality-gates.md).
