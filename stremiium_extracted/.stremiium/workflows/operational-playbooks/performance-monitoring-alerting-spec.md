---
document_type: 'specification'
product: 'Stremiium Ecosystem'
title: 'Performance Monitoring & Alerting System Specification'
parent: 'Stremiium (Pty) Ltd'
owner: 'Engineering-Infrastructure-Squad (C06)'
co_owners:
  - 'Operations-Squad (C02)'
  - 'Cybersecurity-Intel-Squad (C12)'
  - 'Dev-Engineering-Squad (C11)'
contributors:
  - 'Web3-Finance-Squad (C13)'
  - 'Customer-Success-Squad (C14)'
version: '1.0'
status: 'Draft for Engineering Sign-off'
last_updated: '2026-06-22'
task_ref: 'P2T05'
stack_context: 'Prometheus + Grafana + ELK Stack + Jaeger + PagerDuty (per DevOps Infrastructure Agent spec)'
---

# Performance Monitoring & Alerting System Specification

> [!Important] This specification defines the **observability, monitoring, and alerting architecture** for the Stremiium Neobank platform. It underpins PRD §9.6 (observability NFRs) and works in concert with the CI/CD Pipeline Spec (P2T03) to provide end-to-end operational visibility. The monitoring stack (Prometheus, Grafana, ELK, Jaeger, PagerDuty) is aligned with the DevOps Infrastructure Agent's defined SRE practices.

---

## 0. Document Control

| Field          | Value                                                                                |
| -------------- | ------------------------------------------------------------------------------------ |
| Owner          | Engineering-Infrastructure-Squad (C06)                                               |
| Co-Owners      | Operations-Squad (C02); Cybersecurity-Intel-Squad (C12); Dev-Engineering-Squad (C11) |
| Approval Gate  | CTO (C06) + C02 Captain + C11 Captain sign-off                                       |
| Review Cadence | Quarterly (or on stack/platform change)                                              |

### Revision History

| Version | Date       | Author  | Change                             |
| ------- | ---------- | ------- | ---------------------------------- |
| 1.0     | 2026-06-22 | C06/C02 | Initial monitoring & alerting spec |

### Related Artifacts

- PRD v1.0 §9.6 (Observability NFRs): `workspaces/stremiium-neobank/PRD.md`
- CI/CD Pipeline Spec: `.github/workflows/operational-playbooks/devops-cicd-pipeline-spec.md`
- DevOps Infrastructure Agent: `.github/agents/squad-agents/engineering-agents/dev-engineering-squad/DevOps-Infrastructure-Agent-Complete-System-Prompt.md`
- Operational Playbooks: `.github/workflows/operational-playbooks/` (incident-response, on-call, performance-troubleshooting, scaling)
- Deployment Rollback Playbook: `.github/workflows/operational-playbooks/deployment-rollback-playbook.md`

---

## 1. Purpose & Scope

### 1.1 Purpose

Define a **unified, layered observability platform** that provides real-time visibility into the health, performance, and security posture of all Stremiium services — from API endpoints to smart-contract execution. Goals: (1) detect and respond to incidents before users are impacted, (2) provide actionable data for SLO-driven deployment decisions (canary/rollback), (3) generate audit evidence for SOC 2 / FSCA compliance, (4) empower on-call engineers with context-rich alerts, not noise.

### 1.2 Scope — In

- Metrics collection, storage, and visualization (Prometheus + Grafana).
- Log aggregation, indexing, and search (ELK Stack: Elasticsearch + Logstash/Filebeat + Kibana).
- Distributed tracing for microservices (Jaeger/OpenTelemetry).
- Alerting rules, escalation policies, and on-call routing (PagerDuty + Grafana Alerting).
- Dashboard templates for all stakeholder tiers (engineering, operations, compliance, executive).
- SLO burn-rate alerting and error budget tracking.
- Smart-contract monitoring (on-chain metrics, gas oracle, proxy health).
- Uptime/synthetics monitoring (external health checks).
- Audit-log observability for compliance evidence.

### 1.3 Scope — Out

- Application Performance Monitoring (APM) deep-dive (New Relic/DataDog alternatives) — evaluated in Phase D.
- CI/CD pipeline metrics (covered by P2T03 CI/CD spec).
- Business intelligence / analytics dashboards (P3T02 BI Platform).
- Customer-facing status page design (operations owns the content; spec covers the data source).

---

## 2. Design Principles

1. **Three pillars of observability.** Metrics (what), logs (why), traces (where) — collected independently, correlated at query time.
2. **SLO-driven alerting.** Alerts fire on SLO burn rates and error budgets, not raw thresholds. This reduces alert fatigue and focuses on user impact.
3. **Layered dashboards.** Executive (KPIs, uptime), Operations (SLOs, error budgets), Engineering (latency, throughput, traces), Security (threat feeds, audit logs).
4. **Shift-left observability.** Service owners define their SLIs/SLOs and dashboards during development; monitoring is not an afterthought.
5. **Cardinality control.** Label design guidelines to prevent Prometheus metric explosion; enforce cardinality budgets per service.
6. **Auditability.** Every alert, incident, and response action is logged for SOC 2 / FSCA evidence packs.
7. **On-call quality.** Alerts include runbook links, recent changes, and affected services — context to resolve, not just notify.

---

## 3. Monitoring Stack Architecture

### 3.1 Stack Components

| Component         | Tool                         | Purpose                                                   | Data Source                                          |
| ----------------- | ---------------------------- | --------------------------------------------------------- | ---------------------------------------------------- |
| **Metrics**       | Prometheus                   | Time-series metrics collection, storage, querying         | Service exporters, kube-state-metrics, node-exporter |
| **Visualization** | Grafana                      | Dashboards, alerting UI, SLO tracking                     | Prometheus, Loki, Jaeger, Elasticsearch              |
| **Logs**          | ELK Stack                    | Log aggregation, full-text search, compliance audit trail | Filebeat/Fluentd → Elasticsearch → Kibana            |
| **Traces**        | Jaeger + OpenTelemetry       | Distributed tracing across microservices                  | OTel SDK instrumentation in services                 |
| **Alerting**      | PagerDuty + Grafana Alerting | Alert routing, escalation, on-call scheduling             | Prometheus rules, Grafana alerts                     |
| **Uptime**        | Prometheus Blackbox Exporter | Synthetic health checks from external vantage points      | HTTP/HTTPS probes to API endpoints                   |

### 3.2 Data Flow

```
Services ──┬── Metrics (Prometheus exporters / OTel)
           ├── Logs (Filebeat → Logstash → Elasticsearch)
           ├── Traces (OTel SDK → Jaeger Collector)
           └── Audit Events (Filebeat → dedicated ELK index)

Prometheus ──→ Grafana Dashboards + Alert Rules
Jaeger ──────→ Grafana Traces Panel
Elasticsearch ──→ Kibana Dashboards + Audit Log Viewer

Grafana Alerting ──→ PagerDuty ──→ On-Call (Slack + SMS + Call)
                    └──→ Slack #stremiium-incidents (all alerts)
                    └──→ Audit Log (incident record for SOC 2)
```

### 3.3 Infrastructure Placement

| Component         | Environment                        | Deployment                         |
| ----------------- | ---------------------------------- | ---------------------------------- |
| Prometheus        | Per-environment (dev/staging/prod) | EKS StatefulSet with PVC           |
| Grafana           | Shared (multi-datasource)          | EKS Deployment + managed           |
| Elasticsearch     | Per-environment                    | EKS StatefulSet (3-node cluster)   |
| Jaeger            | Per-environment                    | EKS Deployment (Collector + Query) |
| PagerDuty         | Global (SaaS)                      | Cloud service                      |
| Blackbox Exporter | Per-environment                    | EKS DaemonSet                      |

> Infrastructure provisioning via Terraform modules in `infra/terraform/` (currently scaffolded, empty — to be populated in Phase A).

---

## 4. Service Level Indicators (SLIs) & Objectives (SLOs)

### 4.1 Core SLIs

| SLI Name                           | Description                                      | Measurement                                                                            | Source                |
| ---------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------- | --------------------- |
| **API Availability**               | % of successful HTTP requests (2xx/3xx vs 5xx)   | `sum(rate(http_requests_total{code=~"5.."}[5m])) / sum(rate(http_requests_total[5m]))` | Prometheus            |
| **API Latency (P50)**              | Median response time per endpoint                | `histogram_quantile(0.5, rate(http_request_duration_seconds_bucket[5m]))`              | Prometheus            |
| **API Latency (P95)**              | 95th percentile response time                    | `histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))`             | Prometheus            |
| **Card Authorization Rate**        | % of card transactions authorized successfully   | `card_auth_success / card_auth_total`                                                  | Application metrics   |
| **Fiat On-Ramp Success Rate**      | % of fiat deposits completed successfully        | `fiat_deposit_success / fiat_deposit_total`                                            | Application metrics   |
| **Crypto Withdrawal Success Rate** | % of crypto withdrawals broadcast and confirmed  | `crypto_withdraw_success / crypto_withdraw_total`                                      | Application metrics   |
| **Remittance Settlement Time**     | Median time from initiation to recipient receipt | Application latency metric                                                             | Application metrics   |
| **Smart-Contract Gas Cost**        | Gas used per transaction type vs. baseline       | Polygon RPC + internal tracking                                                        | On-chain + Prometheus |
| **Error Budget Remaining**         | 1 - (current_bad_events / SLO_budget)            | Derived from availability SLO                                                          | Grafana               |

### 4.2 SLO Targets

| SLO                         | Target   | Error Budget (30 days)     | Alert Threshold                    |
| --------------------------- | -------- | -------------------------- | ---------------------------------- |
| API Availability            | ≥ 99.99% | 4.32 min downtime          | Burn rate > 14.4x for 5 min (page) |
| API Latency (P50)           | < 200ms  | N/A                        | P50 > 400ms for 5 min              |
| API Latency (P95)           | < 500ms  | N/A                        | P95 > 1s for 5 min                 |
| Card Authorization Rate     | ≥ 95%    | 1.5% of daily transactions | < 93% for 10 min                   |
| Fiat Deposit Success        | ≥ 98%    | 0.6% of daily deposits     | < 96% for 30 min                   |
| Crypto Withdrawal Success   | ≥ 99.5%  | 0.15% of daily withdrawals | < 99% for 15 min                   |
| Remittance Settlement (P50) | < 60s    | N/A                        | P50 > 120s for 15 min              |
| Remittance Settlement (P95) | < 5 min  | N/A                        | P95 > 10 min for 15 min            |

> Source: PRD §3.3 (OKRs), DevOps Infrastructure Agent SLOs (99.99% availability, P95 < 200ms)

### 4.3 Burn-Rate Alerting Model

Alerts use a **multi-window, multi-burn-rate** approach to catch both sudden outages and slow degradation:

| Window  | Burn Rate | Severity    | Action                                     |
| ------- | --------- | ----------- | ------------------------------------------ |
| 1 hour  | 14.4x     | P1 Critical | Page on-call immediately                   |
| 6 hours | 6.0x      | P2 High     | Page on-call during business hours         |
| 3 days  | 1.0x      | P3 Medium   | Slack notification (error budget trending) |
| 6 days  | 0.5x      | P4 Low      | Weekly SLO review (error budget on track)  |

---

## 5. Dashboard Architecture

### 5.1 Dashboard Hierarchy

| Dashboard                     | Audience         | Refresh Rate    | Content                                                                       |
| ----------------------------- | ---------------- | --------------- | ----------------------------------------------------------------------------- |
| **Executive Overview**        | C-Suite, Board   | 5 min           | Uptime %, MAU, revenue, incident count, SLO status (red/amber/green)          |
| **Service Health**            | C02 Ops, C11 Dev | 30s             | All service SLOs, error budgets, active incidents, recent deployments         |
| **API Deep-Dive**             | C11 Dev          | 15s             | Per-endpoint latency histograms, throughput, error rates, p99 traces          |
| **Wallet & Transactions**     | C16 Banking      | 30s             | Deposit/withdrawal success rates, remittance settlement times, card auth      |
| **Smart-Contract Monitoring** | C13 Web3         | 1 min           | Gas usage, contract call counts, on-chain event monitoring, proxy health      |
| **Security Operations**       | C12 Cyber        | 1 min           | Threat indicators, failed auth attempts, Travel Rule compliance, audit log    |
| **Infrastructure**            | C06 Engineering  | 15s             | CPU, memory, disk, network per pod/node, Kubernetes events, Istio mesh health |
| **Compliance Audit Trail**    | C01 Legal        | N/A (on-demand) | Filterable audit log of all actions, approvals, deployments, access changes   |
| **CI/CD Pipeline**            | C06/C11          | 1 min           | Pipeline success rates, build times, deployment frequency, rollback events    |

### 5.2 Grafana Folder Structure

```
Stremiium/
├── Executive/
│   └── Executive Overview
├── Operations/
│   ├── Service Health
│   └── SLO Dashboard
├── Engineering/
│   ├── API Deep-Dive
│   ├── Infrastructure
│   └── CI/CD Pipeline
├── Product/
│   ├── Wallet & Transactions
│   ├── Card Services
│   └── Smart-Contract Monitoring
├── Security/
│   ├── Security Operations
│   └── Compliance Audit Trail
└── On-Call/
    └── Incident Commander (live view during incidents)
```

---

## 6. Alerting Rules & Escalation

### 6.1 Alert Severity Framework

| Severity | Label       | Response Time       | Notification Channel                                  | Example                                                 |
| -------- | ----------- | ------------------- | ----------------------------------------------------- | ------------------------------------------------------- |
| **P1**   | 🔴 Critical | Immediate (< 5 min) | PagerDuty (phone call + SMS + app) + Slack #incidents | Production API returning 500s for > 5 min               |
| **P2**   | 🟠 High     | < 30 min            | PagerDuty (app + SMS) + Slack #incidents              | SLO burn rate high; card auth rate dropping             |
| **P3**   | 🟡 Medium   | < 4 hours           | Slack #alerts + PagerDuty (low urgency)               | Elevated error rate not yet impacting SLO               |
| **P4**   | 🔵 Low      | Next business day   | Slack #alerts                                         | Error budget trending; non-critical service degradation |
| **P5**   | ⚪ Info     | No action required  | Dashboard annotation                                  | Scheduled deployment; planned maintenance               |

### 6.2 Core Alert Rules

| Alert ID | Name                                | Condition                                                | Severity | Runbook Link                                |
| -------- | ----------------------------------- | -------------------------------------------------------- | -------- | ------------------------------------------- |
| A001     | API 5xx Rate Spike                  | `rate(http_requests_total{code=~"5.."}[5m]) > threshold` | P1       | `docs/runbooks/api-5xx-spike.md`            |
| A002     | High Latency (P95)                  | `histogram_quantile(0.95, ...) > 1s for 10m`             | P2       | `docs/runbooks/high-latency.md`             |
| A003     | SLO Burn Rate Critical              | Burn rate > 14.4x in 1h window                           | P1       | `docs/runbooks/slo-burn-critical.md`        |
| A004     | Card Auth Rate Drop                 | `card_auth_rate < 93% for 10m`                           | P1       | `docs/runbooks/card-auth-failure.md`        |
| A005     | Crypto Withdrawal Failures          | `crypto_withdraw_success < 99% for 15m`                  | P2       | `docs/runbooks/withdrawal-failure.md`       |
| A006     | Fiat Deposit Failures               | `fiat_deposit_success < 96% for 30m`                     | P2       | `docs/runbooks/deposit-failure.md`          |
| A007     | Database Connection Pool Exhaustion | `pg_connections_near_limit > 90%`                        | P2       | `docs/runbooks/db-connection-exhaustion.md` |
| A008     | Kubernetes Pod CrashLoopBackOff     | `kube_pod_container_status_restarts_total > 3`           | P2       | `docs/runbooks/pod-crashloop.md`            |
| A009     | Smart-Contract Gas Anomaly          | `gas_per_tx > 3x baseline for 15m`                       | P3       | `docs/runbooks/gas-anomaly.md`              |
| A010     | Certificate Expiry Warning          | `cert_expiry < 14 days`                                  | P3       | `docs/runbooks/cert-expiry.md`              |
| A011     | Disk Usage High                     | `node_disk_usage > 85%`                                  | P3       | `docs/runbooks/disk-usage.md`               |
| A012     | Failed Authentication Spike         | `auth_failures > 5x baseline for 10m`                    | P2       | `docs/runbooks/auth-spike.md`               |
| A013     | Prometheus Target Down              | `up == 0 for 5m`                                         | P3       | `docs/runbooks/target-down.md`              |
| A014     | Error Budget Exhausted              | `error_budget_remaining < 5%`                            | P1       | `docs/runbooks/error-budget-exhausted.md`   |

### 6.3 Escalation Policy (PagerDuty)

| Level                | Wait Time | Notify                               |
| -------------------- | --------- | ------------------------------------ |
| L1 (Primary On-Call) | Immediate | Assigned on-call engineer (rotating) |
| L2 (Secondary)       | 5 min     | Secondary on-call engineer           |
| L3 (Squad Captain)   | 15 min    | C11 Dev Captain or C06 CTO           |
| L4 (Management)      | 30 min    | Incident Commander (C02 Ops Captain) |

### 6.4 Alert Quality Standards

- **No alert without a runbook.** Every alert rule links to a documented runbook.
- **Include context in alert payload:** service name, endpoint, error rate, recent deployments, link to trace.
- **Alert review cadence:** Weekly review of triggered alerts; delete or tune alerts that fire without action.
- **Flaky alert quarantine:** Alerts that fire repeatedly without incident are quarantined and reviewed within 1 sprint.

---

## 7. Logging Architecture

### 7.1 Log Standards

All services produce **structured JSON logs** with the following mandatory fields:

```json
{
  "timestamp": "2026-06-22T14:30:00.000Z",
  "level": "INFO|WARN|ERROR|FATAL",
  "service": "wallet-service",
  "version": "1.2.3",
  "trace_id": "abc123def456",
  "span_id": "789ghi",
  "user_id": "usr_hashed", // hashed, PII-redacted
  "correlation_id": "corr_123", // links multi-service flows
  "method": "POST",
  "path": "/api/v1/wallets/deposit",
  "status_code": 200,
  "duration_ms": 45,
  "message": "Fiat deposit completed",
  "environment": "prod",
  "region": "za-cpt-1"
}
```

### 7.2 PII & Sensitive Data Handling

- **Never log:** private keys, seed phrases, passwords, OTPs, full ID numbers, full account numbers.
- **Hash PII:** user IDs, phone numbers, email addresses are hashed (SHA-256) before logging.
- **Compliance logs:** separate Elasticsearch index (`audit-*`) with stricter retention and access controls for regulatory audit trail.

### 7.3 Log Retention

| Log Type              | Environment | Retention                      | Storage          |
| --------------------- | ----------- | ------------------------------ | ---------------- |
| Application logs      | dev         | 7 days                         | Hot              |
| Application logs      | staging     | 30 days                        | Hot              |
| Application logs      | prod        | 90 days hot + 1 year cold (S3) | Hot + S3 Glacier |
| Audit/compliance logs | prod        | 5 years (FICA requirement)     | S3 + encrypted   |

---

## 8. Distributed Tracing

### 8.1 Implementation

- **Instrumentation:** OpenTelemetry SDK auto-instrumentation for all Node.js/TypeScript services.
- **Propagation:** W3C Trace Context headers across all inter-service calls.
- **Sampling:** 100% for errors, 10% for happy-path (adjustable per service).
- **Backend:** Jaeger Collector → Elasticsearch storage (shared with logs for correlation).

### 8.2 Key Trace Flows

| Flow              | Services Involved                                                            | Critical Path          |
| ----------------- | ---------------------------------------------------------------------------- | ---------------------- |
| Fiat Deposit      | API Gateway → Wallet Service → Banking Partner API → Ledger                  | Partner API latency    |
| Crypto Withdrawal | API Gateway → Wallet Service → MPC Signer → Polygon RPC                      | MPC signing + RPC      |
| Card Transaction  | API Gateway → Card Service → Card Processor → Ledger                         | Card processor auth    |
| Remittance        | API Gateway → Wallet Service → Stablecoin Bridge → Partner Agent → Recipient | Bridge + partner agent |
| KYC Verification  | API Gateway → User Service → KYC Vendor → User Service → DB                  | KYC vendor latency     |

### 8.3 Trace Quality SLIs

| SLI                                       | Target |
| ----------------------------------------- | ------ |
| Trace completeness (all services in flow) | ≥ 95%  |
| Trace sampling coverage (error traces)    | 100%   |
| Trace-to-log correlation accuracy         | ≥ 90%  |

---

## 9. Smart-Contract Monitoring

### 9.1 On-Chain Metrics

| Metric                      | Description                               | Alert                                   |
| --------------------------- | ----------------------------------------- | --------------------------------------- |
| `contract_call_count`       | Number of calls to each contract function | Spike detection (5x baseline)           |
| `contract_gas_used`         | Gas consumed per transaction              | Anomaly detection (> 3x baseline)       |
| `contract_error_count`      | Reverted transactions                     | Any revert on critical path             |
| `proxy_implementation_hash` | Current implementation contract hash      | Change detection (unauthorized upgrade) |
| `multisig_pending_tx`       | Pending multisig transactions             | Age > 24h (stuck transaction)           |
| `treasury_balance`          | Smart-contract treasury balances          | Drop > 10% in 1h                        |
| `token_transfer_volume`     | STM/USDC transfer volumes                 | Anomaly detection                       |

### 9.2 Blockchain Node Health

| Metric                   | Target                 | Alert           |
| ------------------------ | ---------------------- | --------------- |
| Polygon RPC sync lag     | < 5 blocks behind head | Lag > 20 blocks |
| Polygon RPC success rate | ≥ 99.9%                | < 99% for 5 min |
| RPC response time (P50)  | < 500ms                | > 2s for 5 min  |

---

## 10. Synthetic & Uptime Monitoring

### 10.1 External Health Checks

- **Endpoints probed:** All public API endpoints, health check endpoints, card processing webhooks.
- **Frequency:** Every 30 seconds (critical), every 60 seconds (standard).
- **Probe locations:** AWS Cape Town (za-cpt-1), Frankfurt (eu-central-1), Virginia (us-east-1) — matching our deployment regions.
- **Protocol:** HTTPS with TLS certificate expiry check.
- **Response expectations:** HTTP 200 within 5 seconds; JSON body contains `{"status": "healthy"}`.

### 10.2 Uptime SLA Targets

| Environment | Uptime Target | Measurement Period |
| ----------- | ------------- | ------------------ |
| Production  | ≥ 99.99%      | Rolling 30 days    |
| Staging     | ≥ 99.9%       | Rolling 30 days    |
| Dev         | ≥ 99%         | Rolling 7 days     |

---

## 11. Compliance & Audit Evidence

### 11.1 Audit Log Events

Every monitoring system captures the following events for SOC 2 / FSCA evidence:

- **Alert fired / acknowledged / resolved** (who, when, what).
- **Incident declared / updated / resolved** (commander, timeline, post-mortem).
- **Deployment events** (from P2T03 CI/CD pipeline — promotion, rollback).
- **Access changes** (new user, permission change, API key creation).
- **Configuration changes** (alert rule modified, dashboard created, SLO changed).

### 11.2 Evidence Export

- **Automated:** Monthly export of audit logs to S3 (encrypted, immutable).
- **On-demand:** Grafana dashboard PDF export for audit packs.
- **Incident post-mortems:** Stored in `.github/artifacts/incidents/` with template.

### 11.3 Incident Post-Mortem Template

```markdown
# Incident [ID] - [Title]

- **Date:** YYYY-MM-DD
- **Duration:** X hours Y minutes
- **Impact:** X users affected, Y transactions failed
- **Severity:** P1/P2/P3
- **Commander:** [Name]
- **Status:** Resolved

## Timeline

| Time (SAST) | Event                 |
| ----------- | --------------------- |
| HH:MM       | Alert fired           |
| HH:MM       | On-call acknowledged  |
| HH:MM       | Root cause identified |
| HH:MM       | Mitigation applied    |
| HH:MM       | Incident resolved     |

## Root Cause

[Description]

## Resolution

[Steps taken]

## Action Items

| #   | Action   | Owner  | Due Date |
| --- | -------- | ------ | -------- |
| 1   | [Action] | [Name] | [Date]   |

## Lessons Learned

- What went well:
- What could be improved:
```

---

## 12. SRE Practices

### 12.1 Error Budget Policy

- Error budgets are calculated per SLO per 30-day window.
- When error budget remaining < **50%**: freeze feature deploys to the affected service (deploy only fixes).
- When error budget remaining < **20%**: all deploys to affected service require C11 Captain + C06 CTO approval.
- When error budget is **exhausted (0%)**: mandatory reliability sprint — no feature work until budget is replenished.

### 12.2 Toil Reduction

- **Automation targets:** Reduce manual operational work by 50% per quarter.
- **Runbook automation:** Convert top-10 triggered runbooks into automated remediation scripts (Phase D).
- **Self-healing:** Kubernetes HPA + VPA for auto-scaling; Istio circuit breakers for fault isolation.

### 12.3 On-Call Rotation

- **Rotation:** Weekly rotation among C11 Dev Engineers (minimum 3-person pool).
- **Handoff:** 30-min overlap with shift handoff document in Slack #oncall-handoff.
- **Load balancing:** On-call burden tracked (pages per week, incident count); rebalance if one engineer is paged > 2x the average.

### 12.4 Incident Response Integration

This spec integrates with the existing operational playbooks:

- **Incident Response:** `.github/workflows/operational-playbooks/incident-response-playbook.md`
- **On-Call Runbook:** `.github/workflows/operational-playbooks/on-call-runbook.md`
- **Performance Troubleshooting:** `.github/workflows/operational-playbooks/performance-troubleshooting-playbook.md`
- **Deployment Rollback:** `.github/workflows/operational-playbooks/deployment-rollback-playbook.md`
- **Security Incident:** `.github/workflows/operational-playbooks/security-incident-playbook.md`

---

## 13. Phased Implementation Plan

### Phase A — Foundation (Weeks 1–2)

- [ ] Deploy Prometheus + Grafana to dev environment.
- [ ] Deploy ELK stack (Filebeat + Elasticsearch + Kibana) to dev.
- [ ] Instrument all services with OpenTelemetry (metrics + traces + logs).
- [ ] Create core dashboards: Service Health, API Deep-Dive, Infrastructure.
- [ ] Deploy Blackbox Exporter for synthetic health checks.

### Phase B — Alerting & SLOs (Weeks 2–4)

- [ ] Define and implement SLI/SLO metrics for all core services.
- [ ] Configure Prometheus recording and alerting rules (A001–A014).
- [ ] Integrate PagerDuty with escalation policy.
- [ ] Implement burn-rate alerting for all SLOs.
- [ ] Create SLO dashboard with error budget tracking.
- [ ] Wire PagerDuty → Slack incident channel integration.

### Phase C — Advanced Observability (Weeks 4–6)

- [ ] Deploy Jaeger for distributed tracing.
- [ ] Implement trace-to-log correlation in Grafana.
- [ ] Create product dashboards (Wallet, Card, Remittance, Smart-Contract).
- [ ] Implement smart-contract on-chain monitoring.
- [ ] Create compliance audit trail dashboard and export pipeline.
- [ ] Implement on-call runbook automation for top-5 triggered alerts.

### Phase D — Hardening & Optimization (Weeks 6–8)

- [ ] Extend monitoring to staging and production environments.
- [ ] Implement cardinality budgets and enforce via CI (P2T03).
- [ ] Convert remaining runbooks to automated remediation.
- [ ] Load testing + validation of all SLO targets under realistic traffic.
- [ ] Conduct tabletop exercises: outage detection → alert → respond → resolve.
- [ ] Quarterly review cadence scheduled (C06).

---

## 14. Risks & Mitigations

| Risk                                               | Mitigation                                                                                    |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Alert fatigue (too many alerts, on-call burnout)   | SLO burn-rate alerting; weekly alert review; flaky alert quarantine                           |
| Prometheus cardinality explosion                   | Label design guidelines; cardinality budgets per service; CI enforcement                      |
| Log volume exceeds storage budget                  | Log-level filtering in prod; tiered retention (hot/warm/cold); compression                    |
| Single point of failure in monitoring stack itself | Multi-zone Prometheus HA; Grafana is SaaS-managed; Elasticsearch cluster 3+ nodes             |
| Smart-contract monitoring blind spot               | On-chain metric collection is independent of application metrics; proxy hash change detection |
| Compliance audit trail gaps                        | Mandatory audit log for all alert/deployment/access events; automated monthly export          |

---

## 15. Roles & RACI

| Activity                             | C06 CTO | C02 Ops | C11 Dev | C12 Cyber | C13 Web3 | C14 CS |
| ------------------------------------ | :-----: | :-----: | :-----: | :-------: | :------: | :----: |
| Monitoring stack design & platform   | **A/R** |    R    |    R    |     C     |    C     |   I    |
| SLI/SLO definition (per service)     |    C    |    C    | **A/R** |     C     |    C     |   I    |
| Alert rules & runbooks               |    C    |    R    | **A/R** |     C     |    C     |   I    |
| Dashboard design                     |    C    |    R    |  **R**  |     C     |    C     |   R    |
| On-call rotation & incident response |    I    | **A/R** |    R    |     C     |    I     |   I    |
| Smart-contract monitoring            |    C    |    I    |    C    |     C     | **A/R**  |   I    |
| Compliance audit trail               |    C    |    R    |    R    |   **A**   |    C     |   I    |
| SLO review & error budget decisions  |  **A**  |    R    |    R    |     C     |    I     |   I    |

---

## 16. Open Decisions (for sign-off)

| #   | Decision                                                    | Owner       |
| --- | ----------------------------------------------------------- | ----------- |
| D1  | Prometheus vs. Thanos/Cortex for long-term metric storage   | C06         |
| D2  | Grafana Cloud (managed) vs. self-hosted Grafana             | C06/C02     |
| D3  | ELK vs. Loki+Tempo for log+trace backend                    | C06/C11     |
| D4  | PagerDuty vs. Opsgenie vs. VictorOps for alert routing      | C02/C06     |
| D5  | Synthetic monitoring vendor (Datadog/Catchpoint/custom)     | C06         |
| D6  | Error budget policy thresholds (freeze/approve percentages) | C06/C11/C02 |

---

## Glossary

- **SLI** — Service Level Indicator: a quantitative measure of service health (e.g., availability, latency).
- **SLO** — Service Level Objective: a target value for an SLI (e.g., 99.99% availability).
- **Error Budget** — the allowable amount of unreliability within an SLO (e.g., 4.32 min downtime per 30 days for 99.99%).
- **Burn Rate** — how fast the error budget is being consumed relative to the window.
- **OTel** — OpenTelemetry: an open-source observability framework (metrics, logs, traces).
- **HPA/VPA** — Horizontal/Vertical Pod Autoscaler: Kubernetes auto-scaling mechanisms.

---

**Document Status:** Draft for Engineering Sign-off (v1.0). On approval by CTO (C06) + C02 Captain + C11 Captain, Phase A implementation begins. Status recorded in the Implementation Log.
