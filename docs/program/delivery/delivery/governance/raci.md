# RACI — NeoBank ZA Launch Program

**Owner:** C02 Operations · **Assured by:** C03 Admin-Knowledge
**Version:** 1.0 · **Date:** 2026-10-16

> **R** = Responsible (does the work) · **A** = Accountable (owns the outcome, one per row) · **C** = Consulted (two-way) · **I** = Informed (one-way).
> Councils: C01 Legal-Compliance, C02 Operations, C03 Admin-Knowledge, C04 Strategy-Growth, C05 HR-People, C06 Engineering-Infra, C07 Sales-Revenue, C08 Design-Creative, C09 Marketing-Growth, C10 Finance-CFO, C11 Dev-Engineering, C12 Cybersecurity-Intel, C13 Web3-Finance, C14 Customer-Success, C15 Product-Mgmt, C16 Banking-Fintech.

Back-links: [governance overview](./README.md) · [authority matrix](./authority-matrix.md) · [roadmaps](../roadmaps/README.md).

---

## 1. Workstream RACI (W0–W11, from `PLAN.md`)

| Workstream | C01 | C02 | C03 | C04 | C05 | C06 | C07 | C08 | C09 | C10 | C11 | C12 | C13 | C14 | C15 | C16 | SC |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **W0** Governance & orchestration | C | R | **A** | C | I | I | I | I | I | C | I | C | I | I | I | C | A |
| **W1** REA install & capability map | I | I | C | I | I | **A** | I | I | I | I | R | C | I | I | I | I | I |
| **W2** SA traditional banking research | I | I | C | **A/R** | I | I | C | I | I | C | I | I | I | C | C | C | I |
| **W3** SA neobank / challenger research | I | I | C | **A/R** | I | I | C | I | C | I | I | I | C | C | C | C | I |
| **W4** SA regulatory & licensing pack | **A** | I | C | C | I | I | I | I | I | C | I | R | I | I | I | C | I |
| **W5** REA RE playbooks | C | I | C | C | I | C | I | I | I | I | **A/R** | C | I | I | C | C | I |
| **W6** REA custom-tool authoring | I | I | C | I | I | C | I | I | I | I | **A/R** | I | I | I | I | I | I |
| **W7** Platform architecture | I | I | C | C | I | **A** | I | I | I | C | R | C | I | I | C | C | I |
| **W8** Customer / product / GTM design | I | I | C | C | I | I | C | C | C | I | I | I | I | C | **A/R** | C | I |
| **W9** Security, fraud & compliance controls | C | I | I | I | I | C | I | I | I | I | C | **A/R** | I | I | I | C | I |
| **W10** Skills / workflows / templates | C | I | **A/R** | I | C | I | I | I | I | I | C | I | I | I | I | I | I |
| **W11** Synthesis & delivery | C | I | C | C | I | I | I | I | I | I | I | I | I | I | I | I | **A/R** |

---

## 2. Foundational-decision RACI

| Decision | C01 | C02 | C03 | C04 | C05 | C06 | C07 | C08 | C09 | C10 | C11 | C12 | C13 | C14 | C15 | C16 | SC |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **D-001** Sponsor-bank-first | C | I | I | R | I | I | I | I | I | C | I | I | I | I | C | R | **A** |
| **D-002** Cloud region / residency | C | I | I | I | I | R | I | I | I | C | C | C | I | I | I | C | **A** |
| **D-003** Build-vs-buy core | C | I | I | C | I | R | I | I | I | C | R | C | I | I | C | C | **A** |
| **D-004** Licence path | R | I | I | C | I | I | I | I | I | C | I | C | I | I | I | R | **A** |
| **D-005** MVP scope | C | I | I | C | I | C | I | C | C | I | C | C | I | C | R | C | **A** |

---

## 3. Governance-artifact RACI (this `program/` tree)

| Artifact | C01 | C02 | C03 | C04 | C10 | C12 | C16 | SC |
|---|---|---|---|---|---|---|---|---|
| `governance/README.md` | C | C | **A/R** | C | I | C | C | C |
| `governance/authority-matrix.md` | C | C | **A/R** | C | C | C | C | **A** |
| `governance/raci.md` | C | **A/R** | C | C | C | I | C | I |
| `governance/escalation-protocols.md` | C | **A/R** | C | I | I | C | C | **A** |
| `governance/decision-log.md` | C | I | **A/R** | C | C | C | C | **A** |
| `governance/charter.md` | C | C | **A/R** | R | C | C | C | **A** |
| `roadmaps/*` | C | C | C | **A/R** | C | I | C | **A** |
| `risk/risk-register.md` | C | I | C | C | C | **A/R** | C | **A** |
| `risk/risk-appetite-statement.md` | C | I | C | C | C | R | C | **A** |
| `delivery/*` | C | R | C | I | I | C | I | **A** |
| `councils/*/CHARTER.md` | varies | varies | **A** (index) | varies | varies | varies | varies | **A** |

> A single **A** per row. Where SC holds **A** on a Level-3 artifact, the named council captain holds **R** for its production.
