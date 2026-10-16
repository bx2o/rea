# Councils — NeoBank ZA (`Project Umoya`)

**Steward:** C03 Admin-Knowledge · **Executive:** Sparkling Curious (SC-MASTER-001)
**Version:** 1.0 · **Date:** 2026-10-16

> The 16-council directory for the NeoBank ZA program. Each council is a domain of authority operating under the Sparkling Curious Agent Operating System (SAOS) hierarchy. Every council has a **charter** at `cNN-name/CHARTER.md`. This file is the index and the canonical hierarchy reference.

Back-links: [program governance](../program/governance/README.md) · [roadmaps](../program/roadmaps/README.md) · [risk](../program/risk/README.md) · [delivery](../program/delivery/README.md).

---

## 1. Vocabulary law (binding)

> **"Council" is the sole canonical collective noun. "Squad" is retired entirely** — it must not appear in any NeoBank ZA artifact (structural or lexical). This program follows SAOS [`workflow-routing.md §5`](file:///workspace/_stremiium/.stremiium/governance/workflow-routing.md).

- Valid node prefixes: `AGT` (agent), `SUB` (subagent), `CRD` (coordinator staff), `META` (advisory), `EXEC` (executive), `Cnn` (council), `SPEC`, `SC`.
- Council IDs are `C01`–`C16`; directory slugs are `cNN-name`.
- A file violating an ID prefix is **invalid** by policy.
- Where a council's directory slug differs slightly from the SAOS tier label, the **slug is authoritative for this program** and the SAOS label is retained as the council's formal identity (noted per charter).

---

## 2. Canonical hierarchy

```text
Stremiium
└── Sparkling Curious (SC-MASTER-001)          EXECUTIVE — arbitration, strategy, crisis
    ├── Meta-Councils            META-*         ADVISORY  — recommendations to SC only
    ├── Coordinator Staff Line   CRD-*          STAFF     — cross-cutting gates; may intercept
    └── Councils                 C01–C16        COMMAND PLANE
        └── Departments          cNN-*          WORKFORCE PLANE
            └── Agents           AGT-*          WORKFORCE PLANE
                └── Subagents    SUB-*          capability leaves
                    └── Skills / Tools / Workflows
Executive node: EXEC-council-ceo.agent.md (CEO proxy, governance level)
```

Two planes: **Command** (captains decide domain strategy) and **Workforce** (agents execute). Staff (`CRD-*`) and Advisory (`META-*`) nodes act across/off the planes. Full model: [`../program/governance/README.md`](../program/governance/README.md).

---

## 3. Council directory (C01–C16)

| ID | Directory | Council name (SAOS tier) | Captain role | Charter |
|---|---|---|---|---|
| C01 | `c01-legal-compliance` | Legal-Compliance | Legal-Compliance Captain | [CHARTER](./c01-legal-compliance/CHARTER.md) |
| C02 | `c02-operations` | Operations | VP-Operations | [CHARTER](./c02-operations/CHARTER.md) |
| C03 | `c03-admin-knowledge` | Admin-Knowledge | Chief-Librarian | [CHARTER](./c03-admin-knowledge/CHARTER.md) |
| C04 | `c04-strategy-growth` | Strategy-Growth | Chief-Strategist | [CHARTER](./c04-strategy-growth/CHARTER.md) |
| C05 | `c05-hr-people` | HR-People (SAOS: HR-Culture) | Chief-People-Officer | [CHARTER](./c05-hr-people/CHARTER.md) |
| C06 | `c06-engineering-infrastructure` | Engineering-Infrastructure | Chief-Technology-Officer | [CHARTER](./c06-engineering-infrastructure/CHARTER.md) |
| C07 | `c07-sales-revenue` | Sales-Revenue (SAOS: Sales-Business-Development) | Rainmaker-Captain | [CHARTER](./c07-sales-revenue/CHARTER.md) |
| C08 | `c08-design-creative` | Design-Creative | Chief-Design-Officer | [CHARTER](./c08-design-creative/CHARTER.md) |
| C09 | `c09-marketing-growth` | Marketing-Growth (SAOS: Marketing-Communications) | Chief-Marketing-Officer | [CHARTER](./c09-marketing-growth/CHARTER.md) |
| C10 | `c10-finance-cfo` | Finance-CFO (SAOS: Finance-Investor-Relations) | Chief-Financial-Officer | [CHARTER](./c10-finance-cfo/CHARTER.md) |
| C11 | `c11-dev-engineering` | Dev-Engineering | Dev-Engineering Captain | [CHARTER](./c11-dev-engineering/CHARTER.md) |
| C12 | `c12-cybersecurity-intel` | Cybersecurity-Intel | Cybersecurity-Intelligence Captain | [CHARTER](./c12-cybersecurity-intel/CHARTER.md) |
| C13 | `c13-web3-finance` | Web3-Finance | Web3-Financial-Infrastructure Captain | [CHARTER](./c13-web3-finance/CHARTER.md) |
| C14 | `c14-customer-success` | Customer-Success | VP-Customer-Success | [CHARTER](./c14-customer-success/CHARTER.md) |
| C15 | `c15-product-management` | Product-Management | Product-Management Captain | [CHARTER](./c15-product-management/CHARTER.md) |
| C16 | `c16-banking-fintech` | Banking-Fintech | Banking-Fintech Captain | [CHARTER](./c16-banking-fintech/CHARTER.md) |

### Tier grouping (SAOS)

- **Tier 1 — Strategic (C01–C10):** direction-setting, gatekeeping, constraints.
- **Tier 2 — Technical specialization (C11–C13):** build, inspect, experiment.
- **Tier 3 — Customer & product (C14–C16):** advocate, envision, domain expertise.

---

## 4. Special authorities (binding within domain)

| Authority | Council | Captain | Scope |
|---|---|---|---|
| Budget | C10 | Chief-Financial-Officer | All financial allocation & capital |
| Product | C15 | Product-Management Captain | Roadmap, feature prioritisation |
| Banking Compliance | C16 | Banking-Fintech Captain | Regulatory/payment standards |
| Legal & Privacy Compliance | C01 | Legal-Compliance Captain | POPIA/FICA/FAIS/contracts |
| Security | C12 | Cybersecurity-Intelligence Captain | Security posture, incident response |

Special-authority rulings can only be overridden by a Level-3 escalation ([authority matrix](../program/governance/authority-matrix.md)).

---

## 5. How a council operates

1. **Captain (Tier-2)** owns council strategy, agent assignment, SLA targets and escalation to SC.
2. **Agents (AGT-*, Tier-3)** execute within their domain; they do not make cross-council commitments.
3. **Subagents (SUB-*)** execute leaf tasks.
4. Each council produces **owned artifacts** (per its charter) that are evidence for the program.
5. Every council participates in cross-council review per the [RACI](../program/governance/raci.md) and [ways of working](../program/delivery/ways-of-working.md).

---

## 6. Charter template

Every `cNN-name/CHARTER.md` contains, in order:

1. Council ID & name
2. Mandate
3. Captain role
4. Agent roster (**proposed** — clearly marked)
5. Scope & authority
6. Key artifacts owned
7. Interfaces & dependencies to other councils
8. KPIs
9. Escalation path
10. South-Africa-specific mandate notes

> **Rosters are proposals, not facts.** Agent names in each charter are invented-but-plausible identifiers offered as a starting roster for review; they are not staffed roles until ratified by the captain and SC.
