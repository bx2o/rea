# Definition of Done (DoD) — NeoBank ZA

**Owner:** C02 Operations · **Assured by:** C03 Admin-Knowledge
**Version:** 1.0 · **Date:** 2026-10-16

> The explicit, checkable criteria that make a task "done" on `Project Umoya`. A task is **not done** until its DoD is met and evidenced. DoD is applied at the review stage of the [delivery lifecycle](./README.md#3-task-lifecycle).

Back-links: [delivery model](./README.md) · [quality gates](./quality-gates.md) · [ways of working](./ways-of-working.md).

---

## Universal DoD (all task types)

- [ ] **Artifact exists** and is written to the workspace (not a chat message).
- [ ] **Traceable ID** assigned (task ID / decision ID / risk ID / milestone).
- [ ] **Cross-linked** from the relevant index (relative links only).
- [ ] **Evidence labelled** — observe / infer / unknown preserved; claims sourced or marked `unverified`.
- [ ] **No secrets / credentials / PII** in the artifact.
- [ ] **Owner council** named; accountable person identified.
- [ ] **Reviewed** by a qualified peer (or senior agent) and review outcome recorded.
- [ ] **Vocabulary law** honoured ("Council", not "squad"; valid ID prefixes).

---

## 1. Design

**Definition:** a specification, architecture, flow, or plan artifact.

- [ ] Problem/objective stated and bounded (in/out of scope).
- [ ] Requirements and constraints captured.
- [ ] Options considered with trade-offs (≥ 2 options, or explicit "only viable option + why").
- [ ] Interfaces / contracts to other councils defined.
- [ ] Decisions required are logged in the [decision log](../governance/decision-log.md).
- [ ] Risks introduced are added to the [risk register](../risk/risk-register.md).
- [ ] Reviewer sign-off by owning captain (and C06/C15 for architecture/product respectively).
- [ ] Design is implementable at the stated maturity level ([capability maturity model](../roadmaps/capability-maturity-model.md)).

## 2. Build

**Definition:** code, config, or a constructed system component.

- [ ] Acceptance criteria met.
- [ ] **≥ 80% test coverage** on produced code (or a documented, approved exception).
- [ ] Error paths handled; inputs validated; outputs encoded.
- [ ] **No hardcoded secrets**; configuration externalised.
- [ ] Dependency scan clean (no unmitigated Critical/High).
- [ ] Peer code review completed; comments resolved.
- [ ] Documentation updated (README/runbook/changelog as applicable).
- [ ] CI green (build, tests, lint, scan).
- [ ] Meets [quality gates](./quality-gates.md) appropriate to the component.

## 3. Release

**Definition:** shipping an artifact to users or production.

- [ ] All [quality gates](./quality-gates.md) passed and recorded.
- [ ] Compliance sign-offs obtained where money/data surfaces are involved (C01/C12/C16).
- [ ] Security review passed (C12); penetration test passed for money/data surfaces.
- [ ] Runbook / rollback plan documented.
- [ ] Monitoring and alerting configured.
- [ ] Release notes / changelog entry published.
- [ ] 5-role sign-off (per SAOS §2.3): Tech Lead → CTO → Security → Privacy → Sparkling Curious.
- [ ] Post-release verification window observed with no Critical findings.

## 4. Research

**Definition:** market, regulatory, competitive or reverse-engineering analysis.

- [ ] Question and scope stated.
- [ ] **Every claim carries a source reference** or is explicitly marked `unverified`.
- [ ] **Confidence labelled**: observe / infer / unknown.
- [ ] Search boundary stated (what was and was not searched).
- [ ] Conflicting sources flagged, both positions recorded.
- [ ] Unknowns and limitations listed.
- [ ] Findings linked to decisions/risks they inform.
- [ ] Reviewed by the owning council captain (C04 for market, C01 for regulatory).

---

## Review outcomes

| Outcome | Meaning | Next |
|---|---|---|
| **Pass** | DoD fully met | Advance to gate / release |
| **Pass with conditions** | Minor gaps, non-blocking | Advance; conditions tracked |
| **Fail** | Blocking gap | Return to owner; re-review |

Reviewer identity, date and outcome are recorded on the artifact (frontmatter or review section).
