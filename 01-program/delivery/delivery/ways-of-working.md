# Ways of Working — NeoBank ZA

**Owner:** C02 Operations · **Assured by:** C03 Admin-Knowledge
**Version:** 1.0 · **Date:** 2026-10-16

> How council teams actually operate day-to-day on `Project Umoya`: **async-first, artifact-driven, evidence over reports**, with a defined review cadence. Inherits SAOS orchestration norms.

Back-links: [delivery model](./README.md) · [definition of done](./definition-of-done.md) · [governance](../governance/README.md).

---

## 1. Operating principles

1. **Async-first.** Default to written, asynchronous collaboration. Real-time meetings are the exception, reserved for Critical incidents and irreversible decisions.
2. **Artifact-driven.** The source of truth is the workspace, not memory or chat. Every decision, plan and finding lands in a versioned artifact.
3. **Evidence over reports.** Where physical workspace evidence contradicts a report, evidence wins. Stale reports are corrected, not trusted.
4. **Observe / infer / unknown.** Every statement is labelled; ambiguity is never smoothed over.
5. **One accountable owner** per workstream; RACI governs consult/inform ([RACI](../governance/raci.md)).
6. **Escalate early, not late.** Raise blockers at first sign, per the [escalation SLAs](../governance/escalation-protocols.md) (Critical 1h · High 4h · Medium 24h · Low 72h).
7. **Respect the staff line.** CRD gates are binding; do not work around a gate.

---

## 2. Async-first practices

| Practice | Rule |
|---|---|
| Ticket / task update | Written with status, next step, blocker, links |
| Decision | Written in the [decision log](../governance/decision-log.md) before implementation |
| Review | Written comments on the artifact, resolved before merge |
| Handoff | Written message contract `{TASK, PRIORITY, DEADLINE, SUCCESS_CRITERIA, CONTEXT}` |
| Meeting | Only if async would take > 2 cycles or the decision is irreversible; minutes become an artifact and feed the decision log |
| Notification | Inform (I) councils are notified via the artifact link, not a verbal brief |

---

## 3. Artifact discipline

- **Naming:** lowercase, hyphenated, descriptive; no personal names; no secrets.
- **Frontmatter/metadata:** owner, version, date, status where the artifact type warrants it.
- **ID prefixes:** valid prefixes only — `AGT`, `SUB`, `CRD`, `META`, `EXEC`, `Cnn`, `SPEC`, `SC`, plus `D-` (decisions), `R-` (risks), `M` (milestones).
- **Cross-linking:** relative links only; every artifact linked from at least one index.
- **One home:** each artifact lives in exactly one place; indexes point to it (no duplication).

---

## 4. Review cadence

| Cadence | Ceremony | Participants | Output |
|---|---|---|---|
| Daily | Async triage | Council leads | Blockers surfaced; top priority set |
| Per artifact | Peer review | Reviewer + author | Review outcome recorded |
| Per gate | Gate review | Gate owners | Gate pass/fail recorded |
| Weekly | Cross-council sync (async) | All captains | Dependency + blocker status |
| Monthly | Health check | SC + captains | SLA, artifact, risk movement |
| Quarterly | Strategic review | SC + Board input | Priorities, appetite, roadmap update |

### Monthly health check agenda
1. Council health — any blocked/struggling councils?
2. Artifact health — are plans, decision log, risk register current?
3. Process health — SLAs met? escalations efficient? handoffs smooth?
4. Risk movement — top-10 re-scored; appetite adherence.
5. Improvements added to the [implementation plan](../roadmaps/implementation-plan.md).

### Quarterly strategic review agenda
1. Progress vs [roadmap](../roadmaps/launch-roadmap.md) goals.
2. Multi-council orchestration effectiveness.
3. Capability gaps vs [maturity model](../roadmaps/capability-maturity-model.md).
4. Next-quarter priorities (P0–P4).
5. Appetite review vs [risk appetite statement](../risk/risk-appetite-statement.md).

---

## 5. Definition of "ready" and "done"

- **Ready** (to start): task decomposed, owner assigned, success criteria and context provided, dependencies identified.
- **Done:** meets the [DoD](./definition-of-done.md) for its task type and clears the relevant [quality gates](./quality-gates.md).

---

## 6. Communicating status

Status updates follow a fixed shape so they are comparable:
```
STATUS [ID] | COUNCIL: [Cn] | OWNER: [role]
STATE: On track | At risk | Blocked
PROGRESS: [artifact + evidence link]
NEXT: [next step]
BLOCKER: [none | description + escalation ID]
```
No status without an artifact link. A "Blocked" status must reference an escalation.

---

## 7. Continuous improvement

- Every post-incident review (Critical 24h / High 72h) produces process changes captured in the appropriate artifact.
- Lessons are shared across all 16 councils, not siloed.
- Improvements are sequenced onto the [implementation plan](../roadmaps/implementation-plan.md) rather than done ad hoc.
