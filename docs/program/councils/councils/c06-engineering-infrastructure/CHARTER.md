# C06 — Engineering-Infrastructure Council Charter

**Council ID:** C06 · **Directory:** `c06-engineering-infrastructure` · **Tier:** 1 (Strategic)
**SAOS identity:** Engineering-Infrastructure · **Captain role:** Chief-Technology-Officer
**Program:** NeoBank ZA (`Project Umoya`) · **Version:** 1.0 · **Date:** 2026-10-16 · **Status:** PROPOSED

Back-links: [council index](../README.md) · [program governance](../../program/governance/README.md) · [capability maturity](../../program/roadmaps/capability-maturity-model.md).

---

## 1. Council ID & name

**C06 — Engineering-Infrastructure.** The platform, cloud and reliability council. Owns the target architecture, environments, observability, scaling and the core/ledger decision from an infrastructure standpoint.

## 2. Mandate

Provide the **foundation the bank runs on**: target architecture, cloud region/residency posture (D-002), environments, CI/CD, observability, capacity, and build-vs-buy analysis for the core (D-003).

## 3. Captain role

**Chief-Technology-Officer** (Tier-2). Owns: technology strategy, architecture authority (with C11), infrastructure, reliability targets, deployment standards. Escalates to SC.

## 4. Agent roster (PROPOSED)

> ⚠️ **Proposed roster — not staffed.**

| Agent | Focus |
|---|---|
| AGT-solutions-architect | Target architecture, D-003 core analysis |
| AGT-cloud-infrastructure-engineer | Cloud regions, IaC, environments |
| AGT-reliability-engineer | SRE, SLOs, resilience, DR/BCP |
| AGT-observability-engineer | Monitoring, alerting, tracing |
| AGT-capacity-performance-analyst | Load, scaling, cost-performance |
| AGT-networking-engineer | Connectivity, segmentation, latency |
| SUB-* | Environment provisioning, dashboard builds |

## 5. Scope & authority

- **In scope:** architecture, cloud, environments, CI/CD, observability, resilience, capacity, core-infrastructure analysis (D-002/D-003).
- **Authority:** technical/architecture authority (shared with C11); sign-off on G-DEP/G-DOC for infrastructure.
- **Out of scope:** application code ownership (C11), security posture (C12).

## 6. Key artifacts owned

| Artifact | Notes |
|---|---|
| Target architecture | Per plan W7 — [`implementation-plan.md`](../../program/roadmaps/implementation-plan.md) |
| Cloud/residency design | D-002 |
| Reliability & DR/BCP plan | Ops resilience |
| Environment/CI-CD standards | Delivery |
| Capacity/cost model | With C10 |

## 7. Interfaces & dependencies

| Council | Interface |
|---|---|
| C11 Dev-Engineering | Architecture ↔ implementation |
| C12 Cybersecurity-Intel | Secure architecture, segmentation |
| C02 Operations | Runtime resilience, monitoring, deployment |
| C10 Finance-CFO | Cloud cost governance |
| C16 Banking-Fintech | Payments/settlement infrastructure |

## 8. KPIs

| KPI | Target |
|---|---|
| Architecture decisions documented | 100% |
| Availability SLO | ≥ 99.9% (target) |
| DR/BCP tested | Per gate |
| Deployment pipeline reliability | ≥ 95% success |
| Cost per transaction trend | Improving |

## 9. Escalation path

`AGT → Chief-Technology-Officer → Sparkling Curious → Board`.

## 10. South-Africa-specific mandate notes

- **Data residency:** target a **SA cloud region** (D-002) to simplify POPIA s72 and latency.
- **Resilience:** design for **load-shedding** and connectivity variability on the customer channel.
- **Payments infrastructure:** align with **ISO 20022** and **PayShap** timelines and the PSMB→SARB transition.
- **Regulatory systems:** infrastructure for **BA returns** and **FICA** reporting pipelines (with C10/C01).
