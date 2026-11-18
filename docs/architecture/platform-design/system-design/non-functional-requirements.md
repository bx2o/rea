# Non-Functional Requirements (NFRs)

**Parent:** [system-design/README.md](./README.md) · **Status:** Proposed (v0.1) · **As-of:** 2026-10-16.

This file states the **non-functional targets** the Umoya platform is designed to meet: availability, latency, throughput, durability (RPO/RTO), scalability, auditability, data residency, security posture, accessibility and cost. NFRs are **engineering commitments**, so they must be measurable and testable.

> **Every numeric target below is a DESIGN CHOICE** — a proposed starting point. They are *not* regulatory figures. Where a requirement is driven by a regulator, we cross-link and treat the regulatory value as authoritative. **UNVERIFIED** marks any external number we have not confirmed.

---

## 1. How to read the targets

- **SLO** = Service Level Objective (internal target). **SLI** = the indicator measured. **SLA** = external contractual promise (to customers/partners) — always ≤ the internal SLO headroom.
- Targets are per **service tier**, not uniform, because "the ledger" and "a promo banner" have different criticality.

### Service tiers *(DESIGN CHOICE)*

| Tier | Description | Examples |
|---|---|---|
| **T0 — Money-moving core** | Postings, authorisations, settlement. | Core Ledger (C8), Payments (C10), Cards authorisation (C12). |
| **T1 — Customer-critical** | Login, balances, onboarding, notifications. | Identity (C6), Customer (C7), KYC (C13), Notification (C17). |
| **T2 — Important** | Credit origination, AML cases, back-office. | Credit (C16), AML (C15), Back-Office (C18). |
| **T3 — Analytical/back-office batch** | Reporting, BI, ML training. | Data Platform (C22), Regulatory reporting (C13). |

---

## 2. Availability

| Tier | Availability SLO *(DESIGN CHOICE)* | Allowed downtime/month | Notes |
|---|---|---|---|
| T0 | **99.99%** | ~4.3 min | Measured per rail-facing capability; degraded mode defined (see §7). |
| T1 | **99.95%** | ~21.6 min | |
| T2 | **99.9%** | ~43 min | |
| T3 | **99.5%** | ~3.6 h | Batch may run in windows. |

- **Rationale:** a bank's card/authorisation path and login must be near-continuous; the research shows customers expect real-time rails (PayShap) to be always-on ([payments-nps](../../research/regulatory/payments-nps.md) §4). *(DESIGN CHOICE)*
- Multi-AZ within region is required for T0/T1 (see [deployment-topology](../platform/deployment-topology.md)).
- **Deployment downtime:** zero-downtime for T0/T1 via progressive delivery; maintenance windows only for T3.

---

## 3. Latency

| Capability | Target | Percentile | Notes *(DESIGN CHOICE)* |
|---|---|---|---|
| API read (balance, profile) | < 300 ms | p95 | From client at gateway edge, in-region. |
| API read | < 800 ms | p99 | |
| Payment initiation (accept → ack) | < 500 ms | p95 | Excludes rail time. |
| Card authorisation decision | < 150 ms | p95 | Includes fraud score; scheme SLA typically stricter (**UNVERIFIED** per scheme). |
| Fraud scoring call | < 100 ms | p99 | In-path; must not dominate authorisation budget. |
| Login (passwordless/passkey) | < 2 s | p95 | End-to-end including device. |
| UPI/mobile page interactions | < 100 ms | p95 | Perceived responsiveness (client-side). |
| Ledger posting | < 50 ms | p99 | Single-writer append. |
| Balance projection freshness | < 1 s | p99 | Read-your-writes for own money views. |

---

## 4. Throughput & capacity

| Metric | Design target *(DESIGN CHOICE)* | Basis |
|---|---|---|
| Payment transactions | **≥ 200 TPS** sustained, **≥ 1,000 TPS** burst | Placeholder sizing for a new entrant; revisit vs market volumes (**UNVERIFIED**). |
| Card authorisations | **≥ 300 TPS** sustained, **≥ 1,500 TPS** burst | Peak-hour shopping. |
| Ledger postings | **≥ 1,000 TPS** sustained | Comfortably above payment/card rates. |
| Concurrent sessions | **≥ 50,000** | Retail peak. |
| Batch/EFT | Files up to **100,000 lines** per batch, processed within a defined window. | Salary/debit-order runs. |
| Event backbone | **≥ 5,000 msg/s** sustained per cluster | Headroom over transactional peak. |

We size for **10× current expected peak** to avoid re-architecture at growth milestones; the exact multipliers are re-based as real volumes appear. (**UNVERIFIED** — no committed customer volumes yet.)

---

## 5. Durability, RPO & RTO

| Tier | RPO | RTO | Mechanism *(DESIGN CHOICE)* |
|---|---|---|---|
| T0 (ledger, payments, cards) | **≈ 0 (near-zero)** | **≤ 15 min** | Multi-AZ sync replication; PITR; cross-region standby for DR. |
| T1 | ≤ 5 min | ≤ 30 min | Multi-AZ; automated failover. |
| T2 | ≤ 15 min | ≤ 2 h | Multi-AZ. |
| T3 | ≤ 24 h | ≤ 24 h | Recomputable from sources. |

- **Ledger durability is non-negotiable:** committed postings must survive AZ loss. We treat the ledger as **never-lose** data. *(DESIGN CHOICE)*
- **RPO/RTO are tested** at least twice a year via game-days (see [deployment-topology](../platform/deployment-topology.md) §DR).
- Backups: encrypted, in-region, with restore drills; retention aligned to FICA/POPIA ([aml-fica](../../research/regulatory/aml-fica.md), [privacy-popia](../../research/regulatory/privacy-popia.md)).

---

## 6. Scalability & elasticity

- **Horizontal scale** for all stateless services; autoscaling on CPU/latency/queue depth. *(DESIGN CHOICE)*
- **Partitioning strategy:** ledger accounts sharded by account aggregate; events keyed for ordering per aggregate.
- **Elastic batch** for reporting/ML (burst to cloud capacity off-peak, in-region).
- **No hard caps** in the data model that block growth (e.g. sequence-number strategies that assume single-node are avoided).
- **Scale test cadence:** quarterly load tests to the burst targets in §4.

---

## 7. Resilience & degraded modes

Each capability must define what still works when a dependency fails. Examples *(DESIGN CHOICE)*:

| Failure | Degraded behaviour |
|---|---|
| KYC provider outage | Queue onboarding for later verification; allow provisional account with restricted limits (configurable). |
| Bureau outage | Defer credit decision; informational pull only. |
| Fraud service latency spike | Fall back to deterministic rules; log for review. |
| Card scheme connectivity loss | Stand-in processing: approve up to a capped amount per offline rules (**UNVERIFIED** per scheme). |
| Notification provider outage | Persist and retry; secondary channel. |
| Analytics/BI outage | No operational impact (T3 isolation). |

- **Circuit breakers, bulkheads, timeouts** per external dependency. *(DESIGN CHOICE)*
- **Chaos testing** on T0/T1 dependencies before launch.

---

## 8. Auditability & traceability

| Requirement | Target *(DESIGN CHOICE)* |
|---|---|
| Regulated action reconstruction | 100% of money movements reconstructable from immutable records. |
| Audit completeness | Every PII access and every override produces an audit event. |
| Tamper evidence | Hash-chained append-only audit log (see [observability](../platform/observability.md) §6). |
| Traceability | End-to-end correlation ID across services and events. |
| Retention | Aligned to FICA (≥5 years, confirm current period — [aml-fica](../../research/regulatory/aml-fica.md) §8) and POPIA minimisation. |
| Decision explainability | Credit/AML/fraud decisions store reason codes and model versions. |

---

## 9. Data residency & privacy

- **In-region by default:** production personal data + ledger in a South African region. *(DESIGN CHOICE)* ([deployment-topology](../platform/deployment-topology.md))
- **Cross-border** only under a documented POPIA §72 basis; every exception logged ([privacy-popia](../../research/regulatory/privacy-popia.md) §6; [data-governance](../data/data-governance.md)).
- **Minimisation & purpose tags** on data stores ([data-model](../data/data-model.md) §PII).
- **DSAR** (access/correction/deletion) supported within POPIA timeframes. Target: **≤ 30 days** to fulfil. *(DESIGN CHOICE)*
- **Breach notification** workflow target: detect and notify within regulator expectations; runbook required ([privacy-popia](../../research/regulatory/privacy-popia.md) §7).

---

## 10. Security posture (NFR-level only)

Full controls live in the planned `architecture/security/` set (W9). At the NFR level *(DESIGN CHOICE)*:

- Encryption **in transit (TLS 1.3, mTLS internally)** and **at rest** (KMS-managed keys).
- **FIDO2/passkeys** preferred for customer auth; step-up for money movement.
- **PCI-DSS** alignment for card data (scope minimised via tokenisation; targets per PCI).
- **Least privilege** IAM + workload identity; no standing production access.
- **Secrets** only from the vault; no secrets in code/images ([PLAN.md](../../PLAN.md) §4).
- **Vulnerability & dependency scanning** in CI (see [devops-and-sdlc](../platform/devops-and-sdlc.md)).

---

## 11. Accessibility & inclusivity (South Africa context)

- **WCAG 2.2 AA** target for customer-facing channels. *(DESIGN CHOICE)*
- **Low-bandwidth tolerance:** the app must function on constrained networks; offline-tolerant states; minimised payloads.
- **Multilingual:** SA official languages for key journeys (progressive — start with English, isiZulu, Afrikaans, isiXhosa, Sesotho). *(DESIGN CHOICE)*
- **Inclusive onboarding:** support for customers without email (mobile-first, USSD/agent-assisted fallback for edge cases). *(DESIGN CHOICE)*
- **Data-cost awareness:** avoid heavy media on metered connections.

---

## 12. Cost & efficiency

- **Unit economics** tracked per capability (cost per active customer, per payment, per card auth). *(DESIGN CHOICE)*
- **Cloud cost guardrails:** budgets & anomaly alerts; right-sizing; reserved/savings plans for steady state (in-region).
- **Target:** keep run-rate dominated by **variable** costs that scale with customers, not a fixed heavy footprint. *(DESIGN CHOICE)*
- **Cost as an NFR:** major architecture changes must include a cost model delta.

| Cost dimension | Guardrail *(DESIGN CHOICE)* |
|---|---|
| Compute | Autoscale; no idle fleets. |
| Storage | Tiering (hot/warm/cold) for the lakehouse. |
| Egress | Residency policy already minimises cross-border egress. |
| Third parties | Per-call cost modelled (KYC, screening, bureau) and capped/alerted. |

---

## 13. Operability & supportability

- **Observability-first:** every service ships metrics/logs/traces (see [observability](../platform/observability.md)).
- **Runbooks** for every T0/T1 alert; on-call rotations defined.
- **Change safety:** progressive delivery, automated rollback, feature flags. *(DESIGN CHOICE)*
- **Reproducible environments** via IaC; no snowflake prod. ([devops-and-sdlc](../platform/devops-and-sdlc.md))

---

## 14. Compliance-driven NFRs (cross-links)

| Regime | NFR implication | Source |
|---|---|---|
| Prudential (Basel III/IV) | Reporting completeness, capital/liquidity data quality, large-exposure tracking. | [tax-governance](../../research/regulatory/tax-governance.md) §8 |
| NPS / clearing rules | ISO 20022 message fidelity, settlement reconciliation, availability of rail interfaces. | [payments-nps](../../research/regulatory/payments-nps.md) §5 |
| FICA | CDD records, CTR/STR/TPR timeliness, 5-year retention. | [aml-fica](../../research/regulatory/aml-fica.md) |
| POPIA | Residency, minimisation, breach notification, DSAR. | [privacy-popia](../../research/regulatory/privacy-popia.md) |
| FAIS/NCA | Decision records, affordability evidence, complaint handling. | [conduct-fais-nca](../../research/regulatory/conduct-fais-nca.md) |
| AEOI | FATCA/CRS/CARF reporting accuracy and annual cadence. | [tax-governance](../../research/regulatory/tax-governance.md) §4 |

---

## 15. Open NFR questions *(UNVERIFIED)*

1. **Card scheme authorisation SLAs** and stand-in processing limits. **UNVERIFIED.**
2. **PayShap / clearing** response-time expectations as imposed by the rulebook. **UNVERIFIED.**
3. **Regulator submission windows** (exact SLA) for PA returns. **UNVERIFIED.**
4. **Payment volume sizing** — real committed volumes to replace the placeholder TPS targets. **UNVERIFIED.**
5. **PCI-DSS scope** decision (full vs tokenised/SAD-minimised). **UNVERIFIED.**

---

## 16. Related reading

- [technology-selection.md](./technology-selection.md) — products that can meet these NFRs.
- [deployment-topology.md](../platform/deployment-topology.md) — how availability/RPO/RTO are realised.
- [observability.md](../platform/observability.md) — how SLOs are measured.
- [data-governance.md](../data/data-governance.md) — residency & privacy realisation.
