# C06 — Engineering-Infrastructure Council

- **Council ID:** C06 (`c06-engineering-infrastructure`)
- **Captain:** Chief-Technology-Officer (`C06-cto.agent.md`) — Tier 2
- **Program:** Project Umoya — NeoBank ZA (codename only, not a brand decision)
- **Owner council RACI:** Accountable for platform, cloud, reliability and architecture; Consulted on application delivery
- **Status:** Draft v1.0 (UnConsolidated) — 2026-10-16

> **Evidence discipline (inherited from PLAN.md §0).** Architecture statements here are **DESIGN CHOICE** (our engineering decisions), not law. Non-functional targets are `[TARGET]` (internal objectives), not regulatory figures. Where a value is externally sourced it is tagged; where it is unverified it is marked **UNVERIFIED**.

---

## 1. Purpose

C06 owns the **foundation the bank runs on**: the target architecture, cloud region and residency posture (D-002), environments, CI/CD, observability, resilience, capacity and the core build-vs-buy analysis (D-003). It holds the **technical/architecture authority**, shared with C11.

This council sits at the intersection of:

- **C11 Dev-Engineering** — architecture ↔ implementation; C06 defines the shape, C11 builds inside it.
- **C12 Cybersecurity-Intel** — secure architecture, segmentation, zero-trust.
- **C02 Operations** — runtime resilience, monitoring, deployment execution.
- **C10 Finance-CFO** — cloud cost governance.
- **C16 Banking-Fintech** — payments/settlement infrastructure.

The full mandate and roster are fixed in [`CHARTER.md`](./CHARTER.md).

---

## 2. Relationship to C11

C06 and C11 share **technical/architecture authority** but with a deliberate split:

| Dimension | **C06 (Engineering-Infrastructure)** | **C11 (Dev-Engineering)** |
|---|---|---|
| Question | "What does the platform look like, and how is it run?" | "Does the code satisfy that shape?" |
| Owns | architecture, cloud, environments, CI/CD, observability, capacity, DR | application code, test strategy, coverage, release candidates |
| Gates | G-DEP, G-DOC (infra) | G-COV, G-VAL |
| Seam | Golden paths / templates C11 builds on | ADR/architecture-alignment tests C06 enforces |
| Conflict rule | Escalate jointly to SC if the two authorities disagree on a material architecture decision |

The interface is a **contract**: C06 publishes golden paths and platform capabilities; C11 consumes them and raises ADR-level changes back through C06.

---

## 3. Scope of this council

**In scope:** architecture; cloud/region; environments; CI/CD; observability; resilience & DR; capacity & performance; infrastructure cost; core-infrastructure analysis (D-002/D-003).

**Out of scope (route elsewhere):** application code ownership (C11), security posture (C12), commercial cloud contracts (C10 with C01). See [`../../workflows/agent-routing.md`](../../workflows/agent-routing.md).

---

## 4. File index

| File | Contents |
|---|---|
| [`README.md`](./README.md) | This overview; C11 relationship. |
| [`platform-engineering.md`](./platform-engineering.md) | Internal developer platform, golden paths, IaC, Kubernetes, environments. |
| [`devops-and-sre.md`](./devops-and-sre.md) | CI/CD, SLOs, error budget, on-call, incident command. |
| [`capacity-and-scaling.md`](./capacity-and-scaling.md) | Load model, scaling strategy, SA-region considerations. |
| [`engineering-standards.md`](./engineering-standards.md) | Code review, testing pyramid, 80% coverage gate, secure-SDLC hooks. |

---

## 5. Anchor architecture (grounded)

The platform architecture this council governs is documented in the architecture tree:

| Concern | Reference | Key choice |
|---|---|---|
| Target architecture | [`../../architecture/`](../../architecture/README.md) | DDD bounded contexts BC1–BC14 |
| Cloud region | [`../../architecture/system-design/technology-selection.md`](../../architecture/system-design/technology-selection.md) §1 | AWS `af-south-1` (Cape Town) primary (D-002) |
| Orchestration | technology-selection §3 | EKS + Karpenter + Istio |
| Ledger store | technology-selection §6 | Aurora PostgreSQL (dedicated) |
| Backbone | technology-selection §5 | Kafka (MSK) + Debezium |
| Delivery | [`../../architecture/platform/devops-and-sdlc.md`](../../architecture/platform/devops-and-sdlc.md) | Terraform + Helm + Argo CD |
| NFRs | [`../../architecture/system-design/non-functional-requirements.md`](../../architecture/system-design/non-functional-requirements.md) | T0–T3 service tiers |
| Observability | [`../../architecture/platform/observability.md`](../../architecture/platform/observability.md) | OpenTelemetry + Prometheus/Grafana/Loki/Tempo |

---

## 6. Interlocks & governance hooks

| Interlock | Contract |
|---|---|
| C11 implementation | Golden paths + architecture tests (`./platform-engineering.md`, `./engineering-standards.md`). |
| C12 security | Segmented, zero-trust infrastructure; secure SDLC hooks (`../c12-cybersecurity-intel/README.md`). |
| C02 operations | Runbooks, monitoring, deployment, resilience execution (`../c02-operations/service-levels.md`). |
| C10 cost | Cost-per-transaction guardrails (`../c10-finance-cfo/README.md`). |
| C16 rails | Settlement/payments infrastructure (`../c16-banking-fintech/README.md`). |
| Escalation | Council Captain → SC → Mychael → Board; Critical 1h · High 4h · Medium 24h · Low 72h (PLAN.md §5). |

---

## 7. KPIs

| KPI | Target |
|---|---|
| Architecture decisions documented (ADRs) | 100% |
| Availability SLO | ≥ 99.9% (T0 target 99.99%) |
| DR/BCP tested | Per gate |
| Deployment pipeline reliability | ≥ 95% success |
| Cost per transaction trend | Improving |

---

## 8. SA-specific notes

- **Data residency:** target a **SA cloud region** (D-002) to simplify POPIA s72 and latency (`../../research/regulatory/privacy-popia.md` §6).
- **Resilience:** design for **load-shedding** and customer-channel connectivity variability.
- **Payments infra:** align to **ISO 20022** and **PayShap**; track the **PSMB→SARB** transition (`../../research/regulatory/payments-nps.md` §1).
- **Regulatory systems:** infrastructure for **BA-return** and **FICA** reporting pipelines (with C10/C01).

---

## 9. Open items / unknowns

- `[UNKNOWN]` Specific service availability in `af-south-1` for some managed services (`../../architecture/system-design/technology-selection.md` §13).
- `[UNKNOWN]` Required change-management evidence format for auditors/regulators (`../../architecture/platform/devops-and-sdlc.md` §11).
- `[ASSUMPTION]` Second cloud/region for DR vs AWS-only multi-AZ — open decision.

_Codename `Project Umoya` is a working label only._
