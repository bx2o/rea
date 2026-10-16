# System Design — Overview & Principles

**Parent index:** [architecture/README.md](../README.md) · **Status:** Proposed (v0.1) · **As-of:** 2026-10-16.

This folder is the **structural spine** of the Umoya platform. It answers *how the system is shaped* before we talk about *what it models* ([domain-model](../domain-model/README.md)), *what it connects to* ([integrations](../integrations/README.md)), *what it stores* ([data](../data/README.md)) and *how it runs* ([platform](../platform/README.md)).

---

## 1. Files in this folder

| File | Purpose |
|---|---|
| [`context-diagram.md`](./context-diagram.md) | C4 L1 — the bank as a black box: who uses it, who regulates it, what it integrates with. |
| [`container-diagram.md`](./container-diagram.md) | C4 L2 — the deployable building blocks and their interactions. |
| [`component-map.md`](./component-map.md) | C4 L3 — the responsibilities inside each key service. |
| [`bounded-contexts.md`](./bounded-contexts.md) | DDD contexts and the context map (upstream/downstream, shared kernel, ACLs). |
| [`non-functional-requirements.md`](./non-functional-requirements.md) | NFRs and SLOs: availability, latency, throughput, RPO/RTO, scalability, auditability, residency, accessibility, cost. |
| [`technology-selection.md`](./technology-selection.md) | Recommended stack with rationale and alternatives. |

---

## 2. The design stance in one page

Umoya is a **licence-dependent** system: the architecture must be able to operate **under a sponsor bank before we hold our own licence**, and then **transition to direct participation** without a rewrite. This is the single most shaping constraint, and it comes straight from the payments research: as at 2026-10 the non-bank framework is still draft, so we must *"build to be sponsorable today and licensable tomorrow"* ([payments-nps](../../research/regulatory/payments-nps.md) §8, quoted in [integrations/README](../integrations/README.md)).

From that constraint and the regulatory pack, we derive the principles below.

---

## 3. Design principles (expanded)

Each principle states the intent, the architectural consequences, and how we would know it is being violated.

### 3.1 Cloud-native & elastic — *(DESIGN CHOICE)*
- **Intent:** run on managed cloud primitives in a South African region; scale horizontally; treat infrastructure as cattle.
- **Consequences:** stateless services; managed PostgreSQL/Kafka/object storage; autoscaling node pools; no pet servers; no local disk state in services.
- **Violation smell:** a service that cannot be restarted mid-flight without losing work; stateful VMs that must be hand-patched.
- **Grounding:** in-region requirement driven by POPIA cross-border rules ([privacy-popia](../../research/regulatory/privacy-popia.md) §6).

### 3.2 API-first — *(DESIGN CHOICE)*
- **Intent:** every business capability is exposed as a versioned internal API contract before any UI depends on it; the same APIs feed mobile, web, back-office and partners.
- **Consequences:** OpenAPI contracts are the source of truth; BFF (Backend-for-Frontend) patterns per channel; contract testing in CI.
- **Violation smell:** business logic in a BFF that only one UI uses; a capability reachable only by a UI action.

### 3.3 Event-driven backbone — *(DESIGN CHOICE)*
- **Intent:** state changes are published as **domain events** ([domain-events](../domain-model/domain-events.md)); consumers are decoupled in time.
- **Consequences:** an event broker (Kafka) is the integration fabric *inside* the platform; services are idempotent consumers; outbox pattern for reliable publish; schema registry for event evolution.
- **Violation smell:** synchronous call-chains 5+ hops deep for a core flow; two services writing the same tables.

### 3.4 Zero-trust — *(DESIGN CHOICE)*
- **Intent:** no implicit trust from network location. Every request is authenticated, authorised, encrypted and logged, even inside the cluster.
- **Consequences:** mTLS service-to-service (service mesh), short-lived workload identity, least-privilege IAM, secrets in a vault, no shared DB credentials across services.
- **Violation smell:** a service that trusts `X-User-Id` from a header without validating the token; a database reachable from a laptop.
- **Note:** the full control catalogue lives in the planned `architecture/security/` set (W9); this folder states the architectural posture only.

### 3.5 POPIA-by-design — *(DESIGN CHOICE)*
- **Intent:** the eight POPIA conditions are architectural inputs. Lawful basis, purpose specification, minimisation, residency and data-subject participation are designed in.
- **Consequences:** data classification at the field level ([data-model](../data/data-model.md)); purpose tags on data stores; in-region processing by default; DSAR (data-subject access request) tooling as a first-class service; prior-authorisation assessment for SA-ID linking ([privacy-popia](../../research/regulatory/privacy-popia.md) §4).
- **Violation smell:** PII copied into logs; an offshore analytics sandbox holding production customer data with no §72 basis.

### 3.6 Ledger is the source of truth — *(DESIGN CHOICE)*
- **Intent:** money is never mutated; it is *posted*. Balances are derived from immutable double-entry entries ([ledger-model](../domain-model/ledger-model.md)).
- **Consequences:** append-only ledger store; balance projections; reconciliation is continuous, not monthly; corrections are compensating entries, never updates.
- **Violation smell:** an `UPDATE balance SET amount = ...` anywhere in the codebase.

### 3.7 Anti-corruption at the edge — *(DESIGN CHOICE)*
- **Intent:** external models (bureau scores, rail message formats, KYC provider payloads, core-vendor APIs) never leak into our domain. Each external system is wrapped by an **ACL**.
- **Consequences:** adapter services translate to our canonical model; our domain types are not vendor types; swapping a vendor touches the adapter only.
- **Detail:** [integrations/README](../integrations/README.md) §4.

### 3.8 Resilience & graceful degradation — *(DESIGN CHOICE)*
- **Intent:** the bank keeps working when a dependency does not. A KYC provider, bureau or rail outage degrades a *feature*, never the *core*.
- **Consequences:** bulkheads per dependency; circuit breakers; async fallback queues; documented degraded-mode behaviour per capability; multi-AZ; multi-provider where a single vendor is a single point of failure.
- **Violation smell:** onboarding blocks entirely because one bureau is down with no fallback queue.

### 3.9 Auditability as a feature — *(DESIGN CHOICE)*
- **Intent:** any regulated action (posting, payment, decision, access to PII) is reconstructable from evidence-grade logs.
- **Consequences:** immutable audit stream; append-only tamper-evident logs; correlation IDs end-to-end; decision records for credit/AML; retention aligned to FICA ([aml-fica](../../research/regulatory/aml-fica.md)).
- **Detail:** [platform/observability](../platform/observability.md) §6.

### 3.10 In-region by default — *(DESIGN CHOICE)*
- **Intent:** production personal data and the ledger live in South Africa (`af-south-1` or an equivalent SA region). Cross-border is the exception, documented and §72-grounded.
- **Consequences:** region-pinned data stores; residency policy encoded as code (deny-by-default egress tags); DR that also respects residency.
- **Detail:** [deployment-topology](../platform/deployment-topology.md), [data-governance](../data/data-governance.md).

---

## 4. Architectural style summary

| Dimension | Our position *(DESIGN CHOICE unless noted)* |
|---|---|
| **Overall style** | Modular, domain-oriented services over an event backbone. A pragmatic middle ground between a monolith and fine-grained microservices. |
| **Service granularity** | Align one service per **bounded context** where scale/ownership demand it; allow a modular monolith for low-traffic contexts early, with clean seams to split later. |
| **Communication** | Synchronous REST/gRPC for request/response; asynchronous events for state propagation. |
| **Data ownership** | Database-per-service; no cross-service table access; shared data via events or APIs. |
| **Transaction strategy** | Strong ACID **within** the ledger and each owning service; **sagas** with compensation *across_services. |
| **Consistency** | Read-your-writes for the customer's own money views; eventual consistency acceptable for analytics, notifications, fraud enrichment. |
| **Deployment** | Containers on Kubernetes, GitOps, progressive delivery. |
| **Tenancy** | Single-tenant-per-bank (we are the bank); logical separation of environments, not a multi-tenant SaaS. |

---

## 5. Constraints that shape the design

These come from outside engineering and are non-negotiable inputs:

1. **Licence path & sponsorship** ([banking-licensing](../../research/regulatory/banking-licensing.md), [payments-rails](../integrations/payments-rails.md)) — must run pre-licence behind a sponsor, transition without rewrite.
2. **Prudential reporting** ([tax-governance](../../research/regulatory/tax-governance.md) §8) — BA returns (BA 100/200–210/700) must be producible from the data platform.
3. **AML/CFT obligations** ([aml-fica](../../research/regulatory/aml-fica.md)) — CDD/EDD, sanctions/TFS screening, CTR/STR/TPR pipelines with the stated deadlines.
4. **POPIA** ([privacy-popia](../../research/regulatory/privacy-popia.md)) — lawful processing, residency, breach notification, DSAR.
5. **Conduct** ([conduct-fais-nca](../../research/regulatory/conduct-fais-nca.md)) — FAIS/NCA where advice/credit apply; NFO complaint handling.
6. **ISO 20022 & PayShap** ([payments-nps](../../research/regulatory/payments-nps.md) §4–5) — modern rails are ISO 20022-native; message handling must target it natively.
7. **PSMB→SARB transition** ([payments-nps](../../research/regulatory/payments-nps.md) §1) — clearing-house rulebook dependencies migrate toward SARB; keep rail adapters rulebook-isolated.

---

## 6. What this folder does **not** cover

- Detailed security controls → planned `architecture/security/` (W9).
- Product/feature design → customer/product/GTM design (W8).
- Detailed vendor commercial terms → [integrations/third-party-catalogue](../integrations/third-party-catalogue.md) records risk/status, not pricing.
- Code-level design → generated (C4 L4), not hand-authored.

---

## 7. Related reading

- [container-diagram](./container-diagram.md) for the concrete services referenced above.
- [bounded-contexts](./bounded-contexts.md) for the DDD decomposition that justifies the service seams.
- [non-functional-requirements](./non-functional-requirements.md) for the numbers behind "elastic", "available" and "resilient".
- [technology-selection](./technology-selection.md) for the concrete products realising these principles.
