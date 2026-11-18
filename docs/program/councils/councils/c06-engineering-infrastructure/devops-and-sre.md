# C06 — DevOps & SRE

- **Owner:** C06 Chief-Technology-Officer (with C02 Operations) · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Platform:** [`platform-engineering.md`](./platform-engineering.md) · **Standards:** [`engineering-standards.md`](./engineering-standards.md)
- **Grounding:** [`../../architecture/platform/devops-and-sdlc.md`](../../architecture/platform/devops-and-sdlc.md), [`../../architecture/platform/observability.md`](../../architecture/platform/observability.md), [`../../architecture/system-design/non-functional-requirements.md`](../../architecture/system-design/non-functional-requirements.md)

> **Evidence discipline.** CI/CD practices, SLOs and processes are **DESIGN CHOICE / [TARGET]** — internal engineering objectives, not regulatory commitments. Regulatory deadlines (e.g. incident notification) are quoted only with a source tag from the regulatory pack.

---

## 1. CI/CD pipeline

**Build once, promote the same artefact; trunk-based; small, reversible changes.** *(DESIGN CHOICE)*

```text
PR → Build → Unit → Contract → SAST → SCA → Secret scan → IaC scan
   → Sign image → Publish → Integration/e2e (ephemeral) → Policy gates (OPA) → Ready
```

**Gates** (aligned to PLAN.md §4 and `../../program/delivery/quality-gates.md`):

| Gate | Requirement |
|---|---|
| Tests | Unit + integration + contract; **≥ 80% coverage** on produced code |
| Security | SAST, SCA/dependency, secret, container, IaC scanning |
| Policy | OPA/Gatekeeper (no `latest` tags, limits, allowed registries, no public buckets) |
| Secrets | **Zero** secrets in code/images (scan-blocked) |
| Architecture | No vendor SDK in domain modules (ACL boundary tests) |

---

## 2. Release & change management

| Aspect | Practice `[DESIGN]` |
|---|---|
| Strategy | Canary / blue-green (Argo Rollouts/Flagger); automated rollback on SLO breach |
| Database changes | Expand/contract migrations; backward-compatible only; never destructive in one step |
| Event schema | Backward-compatible; new `eventVersion` for breaking changes |
| Feature flags | Decouple deploy from release; kill-switch per feature |
| Change record | Every prod change tied to PR + ticket + release note |
| Segregation of duties | Author ≠ approver for high-risk changes (audited) |
| Freeze windows | Around critical financial periods (e.g. period close) |
| Emergency changes | Break-glass with post-hoc review and audit |

**High-risk change classes** — ledger posting rules, auth, PII handling, rail adapters — require **extra review + finance/risk sign-off**.

---

## 3. SLOs & error budgets

The bank runs on **service tiers** (`../../architecture/system-design/non-functional-requirements.md` §1). SLOs are per tier.

| Tier | Availability SLO `[TARGET]` | Allowed downtime/month |
|---|---|---|
| **T0** — money-moving core (ledger, payments, card auth) | **99.99%** | ~4.3 min |
| **T1** — customer-critical (login, balances, onboarding, notifications) | **99.95%** | ~21.6 min |
| **T2** — important (credit, AML cases, back-office) | **99.9%** | ~43 min |
| **T3** — analytical/batch | **99.5%** | ~3.6 h |

**Error budget policy** *(DESIGN CHOICE)*:

- The error budget is `1 − SLO` over the window.
- **Budget healthy** → feature delivery proceeds normally.
- **Budget burned fast** → **freeze risky changes** for that service until reliability work restores the budget; the decision sits with the service owner + C06.
- **Budget exhausted** → only reliability/remediation changes ship until restored.

---

## 4. Observability & monitoring

**Three pillars + audit** (`../../architecture/platform/observability.md`):

| Pillar | Tooling (DESIGN) | Use |
|---|---|---|
| Metrics | Prometheus + Grafana | SLOs, dashboards, alerting |
| Logs | Loki / OpenSearch | Debugging, audit |
| Traces | Tempo / Jaeger (OpenTelemetry) | Latency, dependency analysis |
| Audit | Immutable, hash-chained | Regulator-grade reconstruction |

**Alerting rules:** alerts fire on **symptoms** (SLO burn, user-visible failure), not CPU alone; every T0/T1 alert has a runbook. On-call escalation follows the program SLA model.

---

## 5. On-call & incident command

| Role | Responsibility |
|---|---|
| **Primary on-call** | First responder; triage, mitigate |
| **Secondary on-call** | Escalation; backup |
| **Incident Commander (IC)** | Coordinates, decides, owns comms (S1/S2) |
| **Service owner** | Fixes; author ≠ approver |

**Model** *(DESIGN CHOICE)*: primary + secondary 24/7 rota; paging with automatic escalation on no-ack (e.g. 5 min → secondary → IC); war-room bridge for S1/S2; break-glass pre-authorised and logged.

**Incident severity, regulatory notification and forensics** are defined in [`../../architecture/security/incident-response.md`](../../architecture/security/incident-response.md) (sev S1–S4; escalation SLA Critical 1h · High 4h · Medium 24h · Low 72h). C06 provides the **engineering restitution**; C02/C12 own the incident process and notification track.

---

## 6. Reliability practices

- **Testing:** unit, contract, integration, e2e, performance/load, **resilience/chaos**, ledger-correctness (nightly), accessibility (`../../architecture/platform/devops-and-sdlc.md` §7).
- **Chaos/game-days** on T0/T1 dependencies before launch; **DR/failover** tested at least twice a year.
- **Progressive delivery** with automated rollback on SLO breach.
- **Post-incident reviews** (blameless) feed control updates and the risk register.

---

## 7. SDLC metrics `[TARGET]`

| Metric | Target |
|---|---|
| Deployment frequency | Daily+ (low-risk services) |
| Lead time for change | < 1 day (low-risk) |
| Change failure rate | < 15% |
| MTTR (SEV1) | < 1 hour |
| Test coverage | ≥ 80% |
| Critical open findings at release | 0 |

---

## 8. SA-specific notes

- Design for **load-shedding** and connectivity variability on the customer channel; degrade gracefully.
- Rail availability during scheme/clearing hours is effectively always-on (PayShap is real-time) `[FACT]` (`../../research/regulatory/payments-nps.md` §4).
- BA-return/FICA reporting pipelines need protection windows aligned to submission calendars.

---

## 9. Open items / unknowns

- `[UNKNOWN]` Required change-management evidence format for auditors/regulators.
- `[UNKNOWN]` Whether a regulator expects notifiable approval for material IT changes.
- `[ASSUMPTION]` SLO targets are engineering objectives pending business/regulatory confirmation.

_Codename `Project Umoya` is a working label only._
