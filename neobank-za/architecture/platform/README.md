# Platform Engineering — Overview

**Parent index:** [architecture/README.md](../README.md) · **Status:** Proposed (v0.1) · **As-of:** 2026-10-16 · **Owner:** C06 Engineering-Infrastructure with C11.

This folder describes how Umoya is **run and shipped**: environments and regions, DR/BCP, observability, and the DevOps/SDLC operating model. It is the operational counterpart to the [system design](../system-design/README.md).

> Everything here is a **DESIGN CHOICE**. Regulatory-driven operational needs (audit logging, residency, change control) are cross-linked.

---

## 1. Files in this folder

| File | Scope |
|---|---|
| [`deployment-topology.md`](./deployment-topology.md) | Environments, regions, DR/BCP, multi-AZ, network segmentation. |
| [`observability.md`](./observability.md) | Logs/metrics/traces, SLOs, alerting, audit logging for regulators. |
| [`devops-and-sdlc.md`](./devops-and-sdlc.md) | CI/CD, IaC, environments, release, change management, secure SDLC. |

---

## 2. Platform principles

1. **Everything as code.** Infrastructure, config and policy are version-controlled; no console-only changes. *(DESIGN CHOICE)*
2. **GitOps.** Desired state lives in Git; a reconciler applies it ([devops-and-sdlc](./devops-and-sdlc.md) §4). *(DESIGN CHOICE)*
3. **Immutable artefacts.** Build once, promote the same artefact through environments. *(DESIGN CHOICE)*
4. **Progressive delivery.** Canary/blue-green with automated rollback ([NFR §13](../system-design/non-functional-requirements.md)). *(DESIGN CHOICE)*
5. **Least privilege.** Workload identity, short-lived creds, no standing prod access. *(DESIGN CHOICE)*
6. **Observability-first.** Every service is born instrumented ([observability](./observability.md)). *(DESIGN CHOICE)*
7. **In-region.** Production runs in a South African region ([deployment-topology](./deployment-topology.md)). *(DESIGN CHOICE)*
8. **Recoverability is tested.** Backups and DR are drilled, not assumed ([deployment-topology](./deployment-topology.md) §6). *(DESIGN CHOICE)*
9. **Evidence-grade audit.** Regulated actions are reconstructable ([observability](./observability.md) §6). *(DESIGN CHOICE)*
10. **Boring by default.** Prefer managed, well-understood tooling in the money path ([technology-selection](../system-design/technology-selection.md)). *(DESIGN CHOICE)*

---

## 3. The platform stack (summary)

| Concern | Choice *(DESIGN CHOICE)* |
|---|---|
| Cloud/region | AWS `af-south-1` (in-region) |
| Compute | Amazon EKS (+ Karpenter); serverless for glue |
| Service mesh | Istio/Linkerd (mTLS) |
| CI/CD | GitHub/GitLab CI + Argo CD (GitOps) |
| IaC | Terraform + Terragrunt |
| Secrets | HashiCorp Vault + KMS/HSM |
| Observability | OpenTelemetry + Prometheus/Grafana/Loki/Tempo |
| Data | Aurora PostgreSQL + Kafka (MSK) + S3/Iceberg |

See [technology-selection](../system-design/technology-selection.md) for rationale/alternatives.

---

## 4. Environment model (one line each)

`dev` → `test` → `staging` → `production`, plus `sandbox` (partner/innovation) and `dr` (recovery). Detailed in [deployment-topology](./deployment-topology.md) §2.

---

## 5. Related reading

- [deployment-topology.md](./deployment-topology.md) → [observability.md](./observability.md) → [devops-and-sdlc.md](./devops-and-sdlc.md).
- [system-design/non-functional-requirements.md](../system-design/non-functional-requirements.md) — the targets the platform meets.
- [data/data-governance.md](../data/data-governance.md) — residency/audit requirements.
- [PLAN.md](../../PLAN.md) §4 — quality gates (secrets, coverage, sign-off).
