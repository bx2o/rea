# C06 — Platform Engineering

- **Owner:** C06 Chief-Technology-Officer · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Delivery:** [`devops-and-sre.md`](./devops-and-sre.md) · **Standards:** [`engineering-standards.md`](./engineering-standards.md)
- **Grounding:** [`../../architecture/platform/devops-and-sdlc.md`](../../architecture/platform/devops-and-sdlc.md), [`../../architecture/system-design/technology-selection.md`](../../architecture/system-design/technology-selection.md)

> **Evidence discipline.** Everything in this file is a **DESIGN CHOICE** — our engineering posture — unless tagged otherwise. Tool selections are recommendations; the final vendor outcomes of D-003 and the deferred tooling decisions remain open.

---

## 1. What platform engineering means here

Platform engineering exists so product teams (C11) **spend their time on banking, not on plumbing**. We provide an **internal developer platform (IDP)**: a set of golden paths, self-service capabilities and guardrails that make the *correct* way to ship the *easiest* way to ship.

**Three commitments:**

1. **Self-service by default** — a new service is provisioned via a template, not a ticket.
2. **Guardrails, not gates-as-surprises** — policy is enforced in CI/GitOps, discoverable up front.
3. **Boring, managed, in-region, swappable** — the stance inherited from `technology-selection.md`.

---

## 2. Internal developer platform (IDP)

| Capability | What it provides | Status `[DESIGN]` |
|---|---|---|
| **Service scaffolding** | Golden-path template: repo, CI pipeline, observability, security baseline pre-wired | Planned |
| **Environment provisioning** | Self-service ephemeral + shared environments | Planned |
| **Service catalogue** | Ownership, dependencies, SLOs, runbooks | Planned (feeds `../c11-dev-engineering/service-catalogue.md`) |
| **Docs-as-code / ADRs** | Architecture decisions live with the code | Planned |
| **Secrets & identity** | Vault + workload identity; no long-lived keys | DESIGNED |
| **Observability defaults** | Metrics/logs/traces emitted from the first commit | DESIGNED |

> **Rule:** if a team needs a platform capability that does not exist, the request becomes a platform backlog item (with a golden path), not a snowflake.

---

## 3. Golden paths

A golden path is the **sanctioned, supported way** to deliver a class of thing:

| Path | For | Includes |
|---|---|---|
| **Stateless service** | Backend APIs (Kotlin/Java) | Helm chart, CI, health checks, OTel, HPA, network policy, OIDC CI auth |
| **Rail adapter** | Payment/card/KYC ACLs | Adapter template, idempotency skeleton, contract tests, reconciliation hooks |
| **Batch job** | EFT/reporting jobs | Scheduler, run-once semantics, DLQ, alerting |
| **Data pipeline** | CDC/analytics | Debezium/Kafka + Iceberg sink, lineage |
| **Mobile/web app** | Customer channels | Build pipeline, signing, mobile-security baseline |

Golden paths are **opinionated**; deviations require an ADR and C06 review (see `./engineering-standards.md`).

---

## 4. Infrastructure as Code

**Everything as code. Git is the desired state.** *(DESIGN CHOICE)*

| Concern | Tooling | Notes |
|---|---|---|
| Provisioning | **Terraform** (+ Terragrunt env layering) | Remote state locked |
| K8s config | **Helm** charts | Versioned |
| GitOps | **Argo CD** | Reconciler applies Git state |
| Policy as code | **OPA/Gatekeeper** + Conftest | Deny-by-default guardrails |
| Drift | Argo CD + IaC drift checks | Alert on drift |
| Secrets | Vault | Never in Git |

**Rule:** production changes go through **Git + PR + automated reconcile** — no manual console changes. Break-glass is pre-authorised, logged and reviewed post-hoc.

---

## 5. Kubernetes & runtime

| Aspect | Choice `[DESIGN]` |
|---|---|
| Platform | **Amazon EKS** (managed control plane) |
| Autoscaling | **Karpenter** (nodes) + HPA (pods) |
| Service mesh | **Istio** (mTLS, traffic policy, retries) — *(Linkerd is the lighter alternative; open decision)* |
| Isolation | namespace-per-context; default-deny network policy; non-root, read-only root FS |
| Ingress | Managed API gateway + WAF at edge |
| Workload identity | OIDC federation (no long-lived cloud keys) |

**Explicit exclusion:** Kubernetes is **not** used for the ledger *database* — that is managed Aurora PostgreSQL. K8s runs stateless services only (`technology-selection.md` §12).

---

## 6. Environments

Promotion flow: **dev → test → staging → production** *(DESIGN CHOICE)*.

| Environment | Purpose | Data |
|---|---|---|
| **dev** | Developer iteration | Synthetic |
| **test** | Integration/contract | Synthetic |
| **ephemeral PR envs** | e2e per pull request | Synthetic |
| **staging** | Prod-like rehearsal (perf/security/DR) | **Masked** |
| **production** | Live | Real (in-region) |

**Guarantees:** identical artefacts promoted (only config differs); staging is prod-like; production deploys are automated via GitOps with approvals for high-risk changes. Environments are reproducible from IaC — **no snowflake prod**.

---

## 7. Provisioning & cost guardrails

- Cloud resources are provisioned in-region (D-002); budgets and anomaly alerts are mandatory.
- Golden paths embed right-sizing defaults (limits/requests, autoscaling) to avoid idle fleets.
- Cost is an NFR: material architecture changes must include a **cost-model delta** (`../../architecture/system-design/non-functional-requirements.md` §12).

---

## 8. Governance hooks

- **Architecture tests** (in CI) enforce boundaries — e.g. no vendor SDK imported into a domain module (ACL discipline, `../../architecture/integrations/README.md` §4.2).
- **Policy gates** block: `latest` image tags, missing resource limits, disallowed registries, public buckets.
- **ADR register** records any deviation from a golden path, with rationale and owner.

---

## 9. Open items / unknowns

- `[UNKNOWN]` CI/CD platform final choice (GitHub vs GitLab) depends on the org (`../../architecture/platform/devops-and-sdlc.md` §11).
- `[UNKNOWN]` Managed service availability parity in `af-south-1` for some capabilities.
- `[ASSUM]` Service mesh Istio vs Linkerd remains an open ops-cost decision.

_Codename `Project Umoya` is a working label only._
