# Observability

**Parent:** [platform/README.md](./README.md) · **Status:** Proposed (v0.1) · **As-of:** 2026-10-16.

How Umoya is **seen, measured and evidenced**: logs, metrics, traces, SLOs, alerting, and — critically for a bank — **audit logging for regulators**. Instrumentation standard and tooling are **DESIGN CHOICE**; audit obligations are cross-linked ([FICA](../../research/regulatory/aml-fica.md), [POPIA](../../research/regulatory/privacy-popia.md)).

---

## 1. The three pillars (+ audit)

| Pillar | Tooling *(DESIGN CHOICE)* | Purpose |
|---|---|---|
| **Metrics** | Prometheus + Grafana | Rates, latencies, saturation, SLOs. |
| **Logs** | Loki/OpenSearch | Structured events, debugging, error tracking. |
| **Traces** | Tempo/Jaeger (OpenTelemetry) | End-to-end request flow. |
| **Audit (fourth pillar)** | Append-only tamper-evident store | Regulatory evidence ([§6](#6-audit-logging-for-regulators)). |

OpenTelemetry is the single instrumentation standard across all services; adoption is mandatory. *(DESIGN CHOICE)*

---

## 2. Instrumentation rules *(DESIGN CHOICE)*

- **Structured logs** (JSON) with `traceId`, `spanId`, `correlationId`, `service`, `env`, `severity`. No free-text-only logs in the money path.
- **No secrets, no PII** in logs/metrics/traces ([PLAN.md](../../PLAN.md) §4). PAN, ID numbers, biometrics, screening payloads are **never logged** ([data-governance](../data/data-governance.md) §5).
- **Correlation IDs** propagate across HTTP, gRPC and the event backbone (headers + event envelope — [domain-events](../domain-model/domain-events.md) §1).
- **Cardinality discipline:** avoid unbounded labels (no raw IDs as metric labels).
- **Semantic conventions** (OTel) for HTTP/DB/messaging spans.

---

## 3. Key signals per capability

| Capability | Golden signals + domain metrics |
|---|---|
| Ledger | Posting latency (p99), postings/sec, out-of-balance count (must be 0), projection lag |
| Payments | Initiation latency, success rate, per-rail latency, return rate, DLQ depth |
| Cards | Auth latency (p95 < 150 ms — [NFR §3](../system-design/non-functional-requirements.md)), approve rate, scheme connectivity |
| Onboarding | Funnel drop-off, verification pass rate, screening latency |
| Fraud/AML | Score latency, alert rate, false-positive rate, STR throughput |
| Data platform | Pipeline freshness, quality failures, lineage completeness |
| Platform | Node/pod health, CPU/mem, Kafka lag, DB connections |

---

## 4. SLOs & error budgets

- Each service has **SLOs** derived from the [NFRs](../system-design/non-functional-requirements.md) (availability + latency per tier).
- **Error budgets** govern release velocity: if a service burns budget, releases pause and reliability work takes priority. *(DESIGN CHOICE)*
- **Burn-rate alerting:** fast-burn and slow-burn alerts on SLO violations. *(DESIGN CHOICE)*
- **Dashboards per service** showing SLIs, SLOs and budget.

---

## 5. Alerting & on-call

| Aspect | Approach *(DESIGN CHOICE)* |
|---|---|
| Alerting engine | Alertmanager (or managed), routed to PagerDuty/Opsgenie |
| Severity | SEV1 (money down) → SEV4 (cosmetic) |
| Paging | SEV1/SEV2 page on-call; others ticketed |
| Runbooks | Required for every paging alert ([NFR §13](../system-design/non-functional-requirements.md)) |
| Noise control | Alerts must be actionable; suppression during deploys |
| Post-incident | Blameless postmortems; action items tracked |

**SEV1 candidates:** ledger unavailable, payment rail down, card auth failing, data loss risk, security breach.

---

## 6. Audit logging for regulators

This is **distinct from operational logging** and is an evidence artefact. *(DESIGN CHOICE)*

| Property | Requirement |
|---|---|
| **What is audited** | Every money posting; every PII access; every override; every consent change; every regulatory submission; every admin/privileged action; every authentication. |
| **Completeness** | Regulated action reconstruction 100% ([NFR §8](../system-design/non-functional-requirements.md)). |
| **Tamper evidence** | Append-only, **hash-chained** log; periodic seals; write-once storage. |
| **Attribution** | Actor (human ID or workload identity), timestamp (UTC), source, target, reason. |
| **Correlation** | Links to the business transaction and the ledger journal. |
| **Separation** | Audit store is separate from operational logs; least-privilege + separate retention. |
| **Retention** | Long, aligned to FICA/POPIA (confirm periods — [aml-fica](../../research/regulatory/aml-fica.md) §8). |
| **Access** | Auditors/regulators get scoped, logged, read-only access. |

**Ledger audit** is intrinsic: the ledger itself is immutable and hash-sealed ([ledger-model](../domain-model/ledger-model.md) §8). The audit stream covers activity *around* it (who did what, when).

---

## 7. Privacy in observability

- **Log hygiene:** redaction filters; PII never enters log pipelines.
- **Access to observability data:** least privilege; logs that may contain incidental PII are classified and protected.
- **Retention:** operational logs shorter than audit logs; documented.
- **DSAR:** observability data is included in lineage so DSARs can locate it ([data-governance](../data/data-governance.md) §10).

---

## 8. Observability of third parties

- External dependencies (rails, KYC, bureaus, schemes) are instrumented as **SLO-tracked dependencies** in adapters ([integrations/README](../integrations/README.md) §4.1).
- Vendor availability/latency feeds dashboards and alerts; SLA breaches flagged for procurement.

---

## 9. Open questions *(UNVERIFIED)*

1. Whether regulators require a **specific audit format/export** (e.g. for PA/FIC). **UNVERIFIED.**
2. Required **audit retention period** beyond FICA's ≥5 years. **UNVERIFIED.**
3. Whether a **commercial APM** is needed for trace depth at scale (residency terms — [third-party-catalogue](../integrations/third-party-catalogue.md)). **UNVERIFIED.**

---

## 10. Related reading

- [deployment-topology.md](./deployment-topology.md) — where these signals are emitted.
- [devops-and-sdlc.md](./devops-and-sdlc.md) — SLOs feeding release gates.
- [system-design/non-functional-requirements.md](../system-design/non-functional-requirements.md) — the SLO targets.
- [data/data-governance.md](../data/data-governance.md) — privacy in telemetry.
