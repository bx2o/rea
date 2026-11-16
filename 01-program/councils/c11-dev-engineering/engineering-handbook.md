# Engineering Handbook (C11)

**Owner:** C11 Dev-Engineering Captain · **Status:** Proposed (v0.1) · **As-of:** 2026-10-16.

The day-to-day rules every C11 engineer follows. This is the **human-facing** companion to [`../c06-engineering-infrastructure/engineering-standards.md`](../c06-engineering-infrastructure/engineering-standards.md) (the standards), [`devops-and-sre`](../c06-engineering-infrastructure/devops-and-sre.md) (the pipeline) and [`../../architecture/platform/devops-and-sdlc.md`](../../architecture/platform/devops-and-sdlc.md) (the SDLC).

Everything here is a **DESIGN CHOICE** unless marked `[REG]`

---

## 1. Branching model

We use **trunk-based development with short-lived branches** — consistent with [`../../architecture/platform/devops-and-sdlc.md`](../../architecture/platform/devops-and-sdlc.md).

| Rule | Detail |
|---|---|
| Main branch | `main` is always releasable; protected (no direct pushes) |
| Branch lifetime | Target **≤ 2 days**; long-lived branches are a smell |
| Branch naming | `<type>/<ticket>-<slug>` e.g. `feat/UMO-142-payshap-adapter` |
| Feature flags | Incomplete work ships **dark** behind a flag, not on a long branch |
| Merge strategy | Squash-merge to keep a linear, auditable history |
| Releases | Cut from `main` via tags; no release branches except for hotfixes |

> **Why trunk-based for a bank:** the smaller the change, the smaller the audit surface and the safer the rollback. A 3-week branch on a ledger is an unacceptable risk.

---

## 2. Commit conventions

We use **Conventional Commits**, because the history is also an audit artefact.

```
<type>(<scope>): <subject>

<body — what & why, not how>

<footer — ticket refs, breaking changes>
```

| Type | Use |
|---|---|
| `feat` | New capability |
| `fix` | Bug fix |
| `refactor` | No behaviour change |
| `test` | Tests only |
| `docs` | Documentation |
| `chore` | Build/tooling |
| `perf` | Performance |
| `sec` | Security fix (linked to a C12 finding) |

**Rules:** imperative mood; subject ≤ 72 chars; reference the ticket in the footer; a commit that touches a **posting rule** cites the finance sign-off reference ([`../../architecture/domain-model/ledger-model.md`](../../architecture/domain-model/ledger-model.md) §5).

---

## 3. Pull-request readiness

A PR is **ready for review** only when all of the following are true:

- [ ] The change is **small and single-purpose** (one concern).
- [ ] The description states **what, why, and risk**; links the ticket.
- [ ] **Tests** accompany the change; coverage gate not reduced (G-COV ≥ 80%).
- [ ] **Idempotency** considered for any money-movement path ([`api-standards.md`](./api-standards.md) §4).
- [ ] **No secrets** committed; scanning passes (G-DEP).
- [ ] **Threat-model hooks** addressed for any new external edge (C12 review where required — [`../../architecture/security/secure-sdlc.md`](../../architecture/security/secure-sdlc.md)).
- [ ] Observability added: logs, metrics, traces for new paths ([`../../architecture/platform/observability.md`](../../architecture/platform/observability.md)).
- [ ] Docs/API spec updated (G-DOC) if a contract changed.
- [ ] **At least one reviewer** — and for money/data surfaces, a **Money Core or Security reviewer**.

### 3.1 Review expectations

| Aspect | Expectation |
|---|---|
| Turnaround | First response within **1 business day** `[TARGET]` |
| Focus | Correctness, boundary/contract, tests, security, operability — in that order |
| Tone | Blameless, specific, actionable; review the code, not the person |
| Approval rule | Money/ledger changes require **two** approvals (one from Money Core) |

---

## 4. Definition of done

A story is **done** only when:

| # | Criterion |
|---|---|
| 1 | Code merged to `main` behind any needed flag |
| 2 | Unit + integration tests pass; **coverage ≥ 80%** on changed code |
| 3 | Contract tests pass for any changed API/event |
| 4 | Security checks pass (SAST/DAST/dependency/secrets) |
| 5 | Observability in place (metrics, logs, traces, alert) |
| 6 | Runbook / on-call note written for operational paths |
| 7 | Docs updated (API spec, ADR if a decision was made) |
| 8 | Feature flag state documented; rollout/rollback plan stated |
| 9 | Product acceptance met (C15) |
| 10 | Any new external dependency registered ([`../../architecture/integrations/third-party-catalogue.md`](../../architecture/integrations/third-party-catalogue.md)) |

> **Bank-specific addendum.** For money-movement work, also: a **reconciliation path** exists and a **compensating/reversal** path is tested ([`ledger-model`](../../architecture/domain-model/ledger-model.md) §8).

---

## 5. Testing discipline

The full pyramid lives in [`../c06-engineering-infrastructure/README.md`](../c06-engineering-infrastructure/README.md) §3; C11 owns the *execution*.

| Level | Owner | Gate |
|---|---|---|
| Unit | Author | G-COV ≥ 80% |
| Integration | Stream team | Contract + data |
| Contract | Stream team | Consumer-driven |
| E2E | Stream + test-engineer | Critical journeys |
| Non-functional | With C06 | Load/perf per NFRs |

**Posting rules are unit-tested per type** — no posting rule ships without a test asserting the exact debits/credits.

---

## 6. South-Africa-specific engineering habits

- **Idempotency everywhere on rails** — SA real-time rails (PayShap) return *unknown* status; never assume failure ([`api-standards.md`](./api-standards.md) §4).
- **Load-shedding tolerance** — the mobile channel must degrade gracefully (queue, retry, offline state), not fail hard.
- **Data residency** — no SA personal information in a non-approved region (D-002).
- **FICA/POPIA in code** — CDD thresholds, screening calls and consent captures are code paths, not just policy.

---

## 7. Open items / unknowns

- `[ASSUMPTION]` Trunk-based flow assumes reliable CI (build success ≥ 95% `[TARGET]`).
- `[UNKNOWN]` Exact protected-branch rules and required-check set are configured in C06's platform.
- `[UNKNOWN]` Hotfix/release-branch policy for the first production launch.

_Codename `Project Umoya` is a working label only._
