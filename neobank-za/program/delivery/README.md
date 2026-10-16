# Delivery Model — NeoBank ZA

**Owner:** C02 Operations · **Assured by:** C03 Admin-Knowledge · **Executive:** Sparkling Curious
**Version:** 1.0 · **Date:** 2026-10-16

> How work moves from idea to shipped artifact on `Project Umoya`. The delivery model is **async-first, artifact-driven, and evidence-over-reports**. It inherits the SAOS routing contract ([`workflow-routing.md §3`](file:///workspace/_stremiium/.stremiium/governance/workflow-routing.md)) and the quality standards in [`sparkling-curious-instructions.md §4`](file:///workspace/_stremiium/.stremiium/governance/rules/sparkling-curious-instructions.md).

Back-links: [governance](../governance/README.md) · [roadmaps](../roadmaps/README.md) · [risk](../risk/README.md) · [councils](../../councils/README.md).

---

## 1. Document index

| File | Purpose |
|---|---|
| [`README.md`](./README.md) | This delivery model overview |
| [`definition-of-done.md`](./definition-of-done.md) | DoD per task type: design, build, release, research |
| [`quality-gates.md`](./quality-gates.md) | Quality gates mapped to the Sparkling Curious universal standards |
| [`ways-of-working.md`](./ways-of-working.md) | Async-first, artifact-driven, evidence over reports, review cadence |

---

## 2. Delivery principles

1. **Artifact-driven.** Progress is evidenced by an artifact, not by a status message. If it isn't written down, it didn't happen.
2. **Async-first.** Decisions and reviews happen in artifacts, not live calls. Real-time only for Critical incidents.
3. **Evidence over reports.** Physical workspace evidence overrides stale reports; every claim carries a source or an explicit `unverified` marker.
4. **Observe / infer / unknown.** Every finding is labelled with its confidence, never blurred.
5. **Single-owner accountability.** One accountable captain per workstream (see [RACI](../governance/raci.md)).
6. **Traceability.** Each task carries an ID; each outcome links to its evidence, decisions and risks.
7. **Small, gated steps.** Work proceeds in reviewed increments; each increment clears its gate before the next.

---

## 3. Task lifecycle

```
INTAKE → DECOMPOSE → ASSIGN → EXECUTE → REVIEW → GATE → RELEASE → AUDIT
  SC      TBS (T1..)   captain   agent    peer    QG     DoD      log
```

| Stage | Actor | Output |
|---|---|---|
| Intake | SC | Classified intent, priority |
| Decompose | SC / captain | Task tree `{TASK, PRIORITY, DEADLINE, SUCCESS_CRITERIA, CONTEXT}` |
| Assign | Council captain | Owner + supporting councils |
| Execute | Agent/subagent | Draft artifact + evidence |
| Review | Peer/senior agent | Reviews against DoD |
| Gate | Gate owners (see quality gates) | Pass/fail |
| Release | Owner council | Shipped, cross-linked artifact |
| Audit | C03 | Logged, indexed, traceable |

---

## 4. Task types and their DoD

| Task type | Definition of done (summary) | Full spec |
|---|---|---|
| Design | Reviewed design artifact, decisions logged, interfaces defined | [`definition-of-done.md#design`](./definition-of-done.md) |
| Build | Meets quality gates, tests ≥ 80%, no secrets, peer-reviewed | [`definition-of-done.md#build`](./definition-of-done.md) |
| Release | All gates green, sign-offs obtained, runbook updated | [`definition-of-done.md#release`](./definition-of-done.md) |
| Research | Sourced, labelled confidence, cross-linked, unknowns recorded | [`definition-of-done.md#research`](./definition-of-done.md) |

---

## 5. Enforcement hooks (CRD staff line)

The Coordinator Staff Line gates every delivery step:

| Gate | CRD node | Power |
|---|---|---|
| State safety | `CRD-git-state-safeguard` | Blocks destructive operations without approval |
| Compliance | `CRD-security-compliance-sentinel` | Blocks on C01/C12 rule breach |
| Cost | `CRD-resource-cost-governor` | Blocks on budget breach |
| Sequencing | `CRD-workflow-orchestrator` | Enforces handoffs and order |

A gate breach may halt a workflow before the owning captain is consulted — the owning captain and SC are notified afterwards (see [escalation](../governance/escalation-protocols.md)).

---

## 6. Review cadence

Detailed in [`ways-of-working.md`](./ways-of-working.md): daily triage, per-artifact review, gate reviews, monthly health check, quarterly strategic review.
