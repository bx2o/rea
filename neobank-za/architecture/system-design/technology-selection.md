# Technology Selection

**Parent:** [system-design/README.md](./README.md) · **Status:** Proposed (v0.1) · **As-of:** 2026-10-16.

This file recommends the technology stack for Umoya, with **rationale** and an **alternatives table** for each major choice. Every recommendation is a **DESIGN CHOICE**. Any vendor capability we have not verified is marked **UNVERIFIED**.

Guiding stance *(DESIGN CHOICE)*: **boring, managed, in-region, and swappable.** We prefer managed services we can run in a South African region, avoid exotic tech in the money path, and keep every external dependency behind an [ACL](../integrations/README.md) so it is replaceable.

---

## 1. Cloud region

**Recommendation: AWS `af-south-1` (Cape Town) as primary; Azure South Africa North (Johannesburg) considered as an alternative/secondary.** *(DESIGN CHOICE)*

| Option | Pros | Cons | Our view |
|---|---|---|---|
| **AWS af-south-1 (Cape Town)** | In-country; broad managed-service catalogue (EKS, MSK, Aurora, S3); matches cloud-native reference architectures and the TymeBank-style AWS pattern seen in market ([digital-banks](../../research/neobank-competitors/digital-banks.md)). | Traffic egress costs; some services may lag other regions' feature parity. **UNVERIFIED** for specific service availability in `af-south-1`. | **Primary choice.** |
| **Azure South Africa North (Johannesburg)** | In-country; strong enterprise identity (Entra ID), good hybrid story. | Catalog differences vs AWS; team familiarity assumed lower. | **Credible alternative / DR candidate.** |
| **GCP** | Strong data/analytics (BigQuery). | **No South African region** — conflicts with in-region residency. | **Rejected for core** (POPIA residency, [privacy-popia](../../research/regulatory/privacy-popia.md) §6); possible non-PII analytics only under a §72 basis. |
| **On-prem / colocation** | Full control; some SA banks colocate. | Slow to build, capital-heavy, worse elasticity. | **Rejected** for a new entrant. |

> **Residency is a hard constraint, not a preference:** in-region by default ([NFR §9](./non-functional-requirements.md)). Any multi-cloud or non-region use must carry a documented §72 basis.

---

## 2. Language & runtime

**Recommendation: Java 21 (LTS) with Spring Boot for the money core; Kotlin for backend services; Go for edge/gateway and high-throughput adapters; TypeScript/React Native for apps.** *(DESIGN CHOICE)*

| Layer | Recommended | Rationale | Alternatives |
|---|---|---|---|
| Ledger / money core | **Java 21 + Spring Boot** | Mature ACID/JTA story, strong typing for money, huge talent pool in SA, excellent observability tooling. | Kotlin/JVM; C#/.NET; Go (weaker ORM/transaction ergonomics). |
| Backend services | **Kotlin (JVM)** | Concise, null-safe, interoperates with Java core; same toolchain. | Java; Go; Node/TypeScript. |
| Edge / gateway plugins / adapters | **Go** | Low memory, fast start, great concurrency for IO-bound adapters/functions. | Rust (steeper); Node. |
| Mobile | **React Native** (retail) or **native** (if card/biometric depth needs it) | Shared codebase across iOS/Android; speed to market. | Flutter; full native Swift/Kotlin. |
| Web / back-office | **TypeScript + React** | Ubiquitous, strong ecosystem, good accessibility libraries (WCAG). | Vue; Angular. |
| Data / ML | **Python** | Ecosystem for ML/analytics. | Scala/Spark; R. |

**Why polyglot is acceptable here:** each language owns a *domain shape* (money vs edge vs data). We avoid "polyglot sprawl" by fixing one language per layer and enforcing code owners.

---

## 3. Container orchestration & runtime

**Recommendation: Kubernetes (managed — Amazon EKS) with Karpenter autoscaling; service mesh for mTLS.** *(DESIGN CHOICE)*

| Option | Pros | Cons | View |
|---|---|---|---|
| **Amazon EKS** | Managed control plane; Karpenter scaling; integrates with IAM/Vault. | K8s operational learning curve. | **Primary.** |
| **ECS/Fargate** | Simpler than K8s; serverless containers. | Less ecosystem; portability weaker. | Fallback for simpler services. |
| **Azure AKS** | If Azure chosen. | — | Alternative. |
| **Serverless (Lambda)** | Great for spiky/adapters. | Cold starts, VPC ergonomics, less suited to long-lived money services. | Use **only** for glue/adapters, not the ledger. |

**Service mesh:** recommended **Istio** (or **Linkerd** for lighter footprint) for mTLS, traffic policy, retries, and observability. *(DESIGN CHOICE)*

**Runtime isolation:** namespace-per-context-cluster; network policies default-deny; pods run as non-root with read-only root FS. *(DESIGN CHOICE)*

---

## 4. API & inter-service communication

**Recommendation: REST/JSON + OpenAPI for external & channel-facing APIs; gRPC for internal service calls.** *(DESIGN CHOICE)*

| Concern | Recommended | Alternatives |
|---|---|---|
| Contract-first APIs | **OpenAPI 3.1** | RAML; AsyncAPI (for events). |
| Internal RPC | **gRPC (protobuf)** | REST; GraphQL (consider for BFF aggregation). |
| Edge gateway | **Managed API gateway + WAF** (e.g. AWS API Gateway/ALB + WAF) or **Kong/Envoy Gateway** | Apigee; Azure APIM. |
| BFF | Lightweight service (Kotlin/Node) | GraphQL federation. |
| Event contracts | **AsyncAPI + schema registry** | Avro/JSON Schema alone. |

---

## 5. Messaging & event backbone

**Recommendation: Apache Kafka (Amazon MSK) as the domain-event backbone; managed queues (SQS/SNS) for edge glue; Debezium for CDC.** *(DESIGN CHOICE)*

| Option | Pros | Cons | View |
|---|---|---|---|
| **Kafka (MSK)** | Durable log, replay, ordered per partition, ecosystem (Connect, schema registry). | Operational weight; capacity planning. | **Primary backbone.** |
| **SQS/SNS** | Simple, cheap, elastic. | No replay/ordering guarantees; not a log. | **Edge glue only.** |
| **AWS EventBridge** | Serverless routing. | Less control for money events. | Glue/notification only. |
| **RabbitMQ** | Easy routing. | Not ideal for high-throughput replayable streams. | Rejected for backbone. |
| **Pulsar** | Multi-tenancy, tiered storage. | Less mature managed offering in-region (**UNVERIFIED**). | Not chosen. |

Patterns *(DESIGN CHOICE)*: **transactional outbox** for reliable publish; **idempotent consumers**; **schema registry** with backward-compatible evolution; DLQs per consumer.

---

## 6. Data stores

| Need | Recommended | Rationale | Alternatives |
|---|---|---|---|
| **Ledger (system of record)** | **PostgreSQL (Amazon Aurora PostgreSQL)** — dedicated cluster | ACID, mature, strong constraints, in-region, and *no vendor lock in the money path*. | CockroachDB (distributed SQL); YugabyteDB; Oracle. **Rejected:** NoSQL for the ledger (we need strict multi-row ACID). |
| Service OLTP | **PostgreSQL** per service | Consistency & familiarity; not over-diversified. | MySQL; DynamoDB for specific access patterns. |
| Ephemeral/cache | **Redis (ElastiCache)** | Sessions, idempotency, rate-limit. | Memcached. |
| Search/logs | **OpenSearch** | Log & search analytics. | Elastic Cloud. |
| Object storage | **S3** | Data lake, documents, backups. | Azure Blob. |
| Lakehouse/warehouse | **S3 + Apache Iceberg + query engine** (e.g. Athena/Snowflake/Databricks) | Open table format avoids lock-in; supports reporting & ML. | Redshift; BigQuery (non-region). |
| Streaming store | **Kafka** | See §5. | Kinesis. |
| Graph (fraud rings) | Optional **Neo4j/Neptune** | Relationship analysis for fraud/AML. | — (phase 2). |

**Ledger store rationale (important):** keeping the ledger on PostgreSQL means we are *not locked* to a core-banking vendor's proprietary store and can satisfy reconciliation/audit independently. This complements the build-vs-buy analysis in [core-banking-build-vs-buy](../integrations/core-banking-build-vs-buy.md).

---

## 7. Identity, security & secrets

| Concern | Recommended | Alternatives *(DESIGN CHOICE)* |
|---|---|---|
| Customer auth | **FIDO2/passkeys** + OTP fallback | Username/password+OTP; social login (rejected for a bank). |
| Identity provider | **OIDC-based IdP** (Keycloak / Ory / managed Cognito) — **decision deferred**, see below | Auth0/Okta (vendor cost, residency **UNVERIFIED**). |
| Staff SSO | Enterprise IdP with MFA + conditional access | — |
| Secrets/key mgmt | **HashiCorp Vault** + cloud KMS/HSM | Cloud-native secrets manager. |
| Card key management | **HSM** (scheme-certified) | — |
| WAF/bot defence | Managed WAF + bot control | Third-party bot mgmt. |
| PKI | Managed private CA for mTLS | Self-run CA. |

> **Identity provider is a deferred decision (DESIGN CHOICE, open).** We need passkey support, in-region/§72-cleared data residency, and open-finance-grade consent. Evaluate Keycloak (self-hosted, in-region) vs a managed IdP. **UNVERIFIED** residency terms per vendor.

---

## 8. Data platform, analytics & ML

| Concern | Recommended | Alternatives |
|---|---|---|
| Ingestion | Debezium CDC + Kafka Connect | Custom ETL. |
| Table format | Apache Iceberg on S3 | Delta Lake; Hudi. |
| Compute | Serverless SQL + Spark (elastic, in-region) | Fixed warehouse. |
| BI | Open-source BI (e.g. Metabase/Superset) or managed | Power BI/Tableau. |
| Feature store | Managed feature store (e.g. SageMaker Feature Store / Feast) | Custom. |
| Orchestration | Airflow / Dagster | Managed MWAA. |
| ML serving | Containerised models on K8s | Managed endpoints. |

Detail: [data/README](../data/README.md), [ai-and-ml](../data/ai-and-ml.md).

---

## 9. Platform engineering / IaC / CI-CD

| Concern | Recommended | Alternatives |
|---|---|---|
| IaC | **Terraform** (+ Terragrunt for env layering) | Pulumi; CDK; Crossplane. |
| Config/K8s packaging | **Helm** + **Argo CD (GitOps)** | Flux; plain kubectl. |
| CI | **GitHub Actions / GitLab CI** with reusable workflows | Jenkins. |
| Policy as code | **OPA/Gatekeeper** + IaC scanners (tfsec/Checkov) | Sentinel. |
| Artifacts | OCI registry (ECR) with signed images (cosign) | Artifactory. |
| Secrets in CI | OIDC federation to cloud (no long-lived keys) | — |
| Progressive delivery | Argo Rollouts / Flagger (canary, blue-green) | Manual. |

Detail: [devops-and-sdlc](../platform/devops-and-sdlc.md).

---

## 10. Observability

**Recommendation: OpenTelemetry as the instrumentation standard; Prometheus + Grafana (metrics), Loki (logs), Tempo (traces); optional commercial APM.** *(DESIGN CHOICE)*

| Concern | Recommended | Alternatives |
|---|---|---|
| Instrumentation | OpenTelemetry SDKs | Vendor agents (lock-in risk). |
| Metrics | Prometheus + Grafana (or managed Prometheus) | Datadog/New Relic. |
| Logs | Loki/OpenSearch | CloudWatch. |
| Traces | Tempo/Jaeger | Commercial. |
| Alerting | Alertmanager + PagerDuty/Opsgenie | — |

Detail: [observability](../platform/observability.md).

---

## 11. Recommended stack summary (one table)

| Layer | Choice *(DESIGN CHOICE)* |
|---|---|
| Cloud region | AWS `af-south-1` (primary) |
| Orchestration | Amazon EKS + Karpenter + Istio |
| Languages | Java 21 / Kotlin (core), Go (edge/adapters), TS/React (UI), Python (data/ML) |
| APIs | OpenAPI 3.1 (REST), gRPC internal |
| Backbone | Kafka (MSK) + Debezium |
| Ledger DB | Aurora PostgreSQL (dedicated) |
| Other DB | PostgreSQL, Redis, OpenSearch, S3 |
| Lakehouse | S3 + Iceberg |
| Identity | OIDC IdP + FIDO2/passkeys (deferred vendor) |
| Secrets | HashiCorp Vault + KMS/HSM |
| IaC / delivery | Terraform + Helm + Argo CD |
| Observability | OpenTelemetry + Prometheus/Grafana/Loki/Tempo |

---

## 12. Explicitly avoided (and why) *(DESIGN CHOICE)*

| Avoided | Reason |
|---|---|
| NoSQL as the ledger of record | Cannot guarantee multi-row ACID + audit invariants. |
| Non-region primary processing of production PII | POPIA residency default. |
| Tight coupling to a single core-banking vendor's proprietary store | Lock-in; conflicts with build-vs-buy flexibility ([core-banking-build-vs-buy](../integrations/core-banking-build-vs-buy.md)). |
| Long-lived cloud credentials | Zero-trust; OIDC federation + vault instead. |
| Kubernetes for the ledger *database* | We use managed Postgres; K8s runs stateless services. |
| Vendor-proprietary event formats on the backbone | Schema-registry-governed canonical events only. |

---

## 13. Open decisions (tracked) *(UNVERIFIED / DESIGN CHOICE open)*

1. Identity provider vendor & residency terms. **UNVERIFIED.**
2. Lakehouse query engine (serverless SQL vs Snowflake vs Databricks) — cost vs capability. **DESIGN CHOICE open.**
3. Service mesh: Istio vs Linkerd (ops cost). **DESIGN CHOICE open.**
4. Core-banking build vs buy outcome — this file assumes **build the ledger**; the alternative is analysed in [core-banking-build-vs-buy](../integrations/core-banking-build-vs-buy.md).
5. Second cloud/region for DR vs AWS-only multi-AZ. **DESIGN CHOICE open** ([deployment-topology](../platform/deployment-topology.md)).

---

## 14. Related reading

- [non-functional-requirements.md](./non-functional-requirements.md) — the targets this stack must meet.
- [deployment-topology.md](../platform/deployment-topology.md) — how the stack is laid out.
- [core-banking-build-vs-buy.md](../integrations/core-banking-build-vs-buy.md) — the ledger decision this file assumes.
- [devops-and-sdlc.md](../platform/devops-and-sdlc.md) — the delivery toolchain.
