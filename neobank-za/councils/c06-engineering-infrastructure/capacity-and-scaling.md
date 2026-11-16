# C06 — Capacity & Scaling

- **Owner:** C06 Chief-Technology-Officer (with C10 Finance for cost) · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **NFRs:** [`../../architecture/system-design/non-functional-requirements.md`](../../architecture/system-design/non-functional-requirements.md)
- **Topology:** [`../../architecture/platform/deployment-topology.md`](../../architecture/platform/deployment-topology.md)

> **Evidence discipline.** All capacity targets below are **`[TARGET]` / DESIGN CHOICE** placeholder sizing for a new entrant. **None is a committed volume** — real volumes do not yet exist. Any externally sourced figure is tagged; everything else is a modelled assumption to re-base when real data arrives.

---

## 1. Load model

We model the bank as four load shapes, each sized to its own tier:

| Load shape | Pattern | Tier | Notes |
|---|---|---|---|
| **Transactional (money)** | Steady with daily peaks (paydays, month-end) | T0 | Payments, ledger postings, card auth |
| **Session (customer)** | Morning/evening peaks; event spikes | T1 | Login, balance reads, onboarding |
| **Batch** | Nightly + windowed runs | T3 | EFT files, reporting, interest accrual |
| **Analytical/ML** | Off-peak elastic | T3 | Dashboards, model training |

**Peak drivers to plan for:** salary-day and month-end bursts, promo/PR spikes, month-end interest/fee runs, and (for card) weekend/holiday shopping peaks.

---

## 2. Throughput & capacity targets `[TARGET]`

From the NFR pack (`../../architecture/system-design/non-functional-requirements.md` §4) — **placeholder sizing**:

| Metric | Sustained | Burst |
|---|---|---|
| Payment transactions | **≥ 200 TPS** | **≥ 1,000 TPS** |
| Card authorisations | **≥ 300 TPS** | **≥ 1,500 TPS** |
| Ledger postings | **≥ 1,000 TPS** | — |
| Concurrent sessions | **≥ 50,000** | — |
| Event backbone | **≥ 5,000 msg/s** per cluster | — |
| Batch (EFT) | files up to **100,000 lines** within a defined window | — |

**Sizing rule:** design for **10× current expected peak** to avoid re-architecture at growth milestones. The multiplier is re-based as real volumes appear (**UNVERIFIED** — no committed customer volumes yet).

---

## 3. Latency targets `[TARGET]`

| Capability | Target | Percentile |
|---|---|---|
| API read (balance/profile) | < 300 ms | p95 |
| Payment initiation (accept→ack) | < 500 ms | p95 |
| Card authorisation decision | < 150 ms | p95 |
| Fraud scoring call | < 100 ms | p99 |
| Ledger posting | < 50 ms | p99 |
| Balance projection freshness | < 1 s | p99 |

Card-scheme authorisation SLAs are typically stricter than our design target — **UNVERIFIED per scheme**.

---

## 4. Scaling strategy

| Concern | Strategy `[DESIGN]` |
|---|---|
| Stateless services | Horizontal scale; HPA on CPU/latency/queue depth |
| Nodes | Karpenter just-in-time provisioning |
| Ledger | Single-writer append; **shard by account aggregate**; ordering per aggregate |
| Events | Kafka partitions keyed for per-aggregate ordering |
| Batch/ML | Elastic burst off-peak, in-region |
| Data model | **No hard caps** that block growth (e.g. single-node sequence assumptions avoided) |

**Scale test cadence:** quarterly load tests to the burst targets above, in a prod-like staging environment.

---

## 5. Durability, RPO/RTO

| Tier | RPO `[TARGET]` | RTO `[TARGET]` | Mechanism |
|---|---|---|---|
| **T0** (ledger, payments, cards) | **≈ 0 (near-zero)** | **≤ 15 min** | Multi-AZ sync replication; PITR; cross-region standby for DR |
| T1 | ≤ 5 min | ≤ 30 min | Multi-AZ; automated failover |
| T2 | ≤ 15 min | ≤ 2 h | Multi-AZ |
| T3 | ≤ 24 h | ≤ 24 h | Recomputable from sources |

**Ledger durability is non-negotiable** — committed postings must survive AZ loss (treated as *never-lose* data). RPO/RTO are tested at least twice a year via game-days.

---

## 6. South-Africa region considerations

| Consideration | Implication `[DESIGN]` |
|---|---|
| **Region** | Primary **AWS `af-south-1` (Cape Town)** (D-002); Azure SA North a DR candidate |
| **Service parity** | Some managed services may lag other regions' feature parity — **UNVERIFIED**; verify per service |
| **Egress cost** | Cross-border egress minimised by in-region residency policy |
| **Latency** | In-region compute keeps customer-channel latency low |
| **Connectivity variability** | Design degraded modes for constrained networks (`../../architecture/system-design/non-functional-requirements.md` §7) |
| **Power (load-shedding)** | Customer-channel and partner resilience; cloud region is protected from local grid but channel devices are not |

---

## 7. Degraded modes

Each capability defines what still works when a dependency fails (`../../architecture/system-design/non-functional-requirements.md` §7):

| Failure | Degraded behaviour |
|---|---|
| KYC provider outage | Queue onboarding; provisional account with restricted limits (configurable) |
| Fraud service latency spike | Fall back to deterministic rules; log for review |
| Card scheme connectivity loss | Stand-in processing up to a capped amount (per-scheme rules **UNVERIFIED**) |
| Analytics outage | No operational impact (T3 isolation) |
| Notification outage | Persist and retry; secondary channel |

Circuit breakers, bulkheads and timeouts on every external dependency.

---

## 8. Cost & efficiency

- Unit economics tracked per capability (cost per active customer, per payment, per card auth).
- Cloud cost guardrails: budgets, anomaly alerts, right-sizing, savings plans for steady state.
- Target run-rate dominated by **variable** costs that scale with customers (`../../architecture/system-design/non-functional-requirements.md` §12).

---

## 9. Open items / unknowns

- `[UNVERIFIED]` Real committed payment/card volumes — to replace the placeholder TPS targets.
- `[UNVERIFIED]` Card-scheme auth SLAs and stand-in limits.
- `[UNVERIFIED]` `af-south-1` managed-service feature parity for specific services.
- `[ASSUMPTION]` 10× headroom multiplier is a planning choice, not a measured requirement.

_Codename `Project Umoya` is a working label only._
