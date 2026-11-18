# Workflow — Agent Routing (TBS Decomposition)

- **Owner:** SC (orchestration) · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Related:** [`onboarding-a-council-task.md`](./onboarding-a-council-task.md)
- **Governance source:** `.stremiium/governance/workflow-routing.md` §3, `.stremiium/config/council-department-mapping.json`

> This file explains **how Sparkling Curious classifies incoming work and routes it to a council**, using TBS (Task Breakdown Structure) decomposition and the ratified routing rules R1–R6.

---

## 1. What TBS decomposition is

TBS = **Task Breakdown Structure**. Intent arrives as a natural-language request; it is decomposed into a tree of routable tasks:

```text
T1        <top-level intent>
├── T1.1  <workstream>
│   ├── T1.1.1  <discrete deliverable>   → routable to one council
│   └── T1.1.2  <discrete deliverable>   → routable to one council
└── T1.2  <workstream>
    └── T1.2.1  <discrete deliverable>
```

Each leaf (`T#.#.#`) is **independently routable** — it has one owning council, one deliverable, one success criterion.

---

## 2. Classification dimensions

SC classifies each leaf along four axes:

| Axis | Question | Determines |
|---|---|---|
| **Domain** | Which business function? | owning council |
| **Deliverable type** | Research? Design? Code? Decision? | skill/template to use |
| **Risk class** | Money/data/regulatory surface? | CRD gate intensity |
| **Dependency** | Blocks/blocked-by other tasks? | sequencing |

---

## 3. Routing rules (ratified — from Stremiium)

| Rule | Statement |
|---|---|
| **R1** | Task → owning council captain by domain matrix **before any department contact**. |
| **R2** | Captain decomposes to **its listed departments only**. |
| **R3** | Cross-council tasks **convene captains**; SC arbitrates conflicts < 24h. |
| **R4** | Coordinators (CRD-*) may **intercept** any step for git-safety/security/cost gates. |
| **R5** | Meta-councils **advise** SC on request; never command departments directly. |
| **R6** | Subagents (SUB-) instantiate **only under a registered AGT parent**. |

Source: `.stremiium/governance/workflow-routing.md` §3 and `.stremiium/config/council-department-mapping.json` `routing_rules`.

---

## 4. Domain → council routing matrix

Derived from `.stremiium/config/council-department-mapping.json`:

| Domain signal | Owning council | Department path(s) |
|---|---|---|
| Legal, compliance, risk, conduct | **C01** | `c01-legal-compliance` |
| Operations, reconciliation, vendor | **C02** | `c02-operations`, `c02-operations-infrastructure` |
| Knowledge, records, documentation | **C03** | `c03-admin-knowledge` |
| Strategy, growth, research | **C04** | `c04-strategy-*` |
| People, culture, hiring | **C05** | `c05-hr-culture`, `c05-hr-people` |
| Engineering infrastructure | **C06** | `c06-engineering-infrastructure` |
| Sales, revenue, BD | **C07** | `c07-sales-*` |
| Design, creative | **C08** | `c08-design-creative` |
| Marketing, brand, comms | **C09** | `c09-marketing-*` |
| Finance, treasury, IR | **C10** | `c10-finance-cfo`, `c10-finance-investor-relations`, `c10-algo-trading` |
| Software engineering / QA | **C11** | `c11-dev-engineering` |
| Cybersecurity, intel, fraud | **C12** | `c12-cybersecurity-intel` |
| Web3, digital assets, rails policy | **C13** | `c13-web3-finance` |
| Customer success, support | **C14** | `c14-customer-success` |
| Product management | **C15** | `c15-product-management`, `c15-products-*` |
| Banking, payments, fintech, rails | **C16** | `c16-banking-fintech`, `c16-website-product` |

**Conflict rule:** if a task genuinely spans councils (e.g. "build a compliant crypto on-ramp" = C13 + C01 + C16), **convene the captains** (R3); SC arbitrates.

---

## 5. Worked routing example (this program)

**Intent:** "Produce Web3/stablecoin rails analysis."
- TBS: `T1` = Web3 rails → `T1.1` regulation → `T1.2` stablecoins → `T1.3` tokenisation → `T1.4` DeFi risk.
- Domain = Web3/digital assets → **C13** (owner), with **C01** consulted for regulatory weight.
- Deliverable type = analysis → use `research-report` template (`../templates/research-report.md`).
- Risk class = regulatory → C01/C12 screens apply.
- Route: C13 captain → `c13-web3-finance` department.

---

## 6. Enforcement gates (CRD-*)

At every routing/delegation step:

| Gate | Intercepts when |
|---|---|
| `crd-git-state-safeguard` | destructive git/workspace op lacking approval |
| `crd-security-compliance-sentinel` | C01/C12 binding rule would be breached |
| `crd-resource-cost-governor` | budget/cost guard breached |
| `crd-workflow-orchestrator` | sequencing/handoff violation |

---

## 7. Message contract (delegation)

When a leaf is routed, the captain issues:

```json
{
  "TASK": "...",
  "PRIORITY": "Critical | High | Medium | Low",
  "DEADLINE": "...",
  "SUCCESS_CRITERIA": "...",
  "CONTEXT": "links + evidence refs"
}
```

---

## 8. Open items / unknowns

- `[ASSUMPTION]` Task-id format pending SC ratification.
- `[UNKNOWN]` Automation level for the domain matrix (manual vs registry-driven).

---

## 9. Cross-links

- Council onboarding → [`onboarding-a-council-task.md`](./onboarding-a-council-task.md)
- Stremiium routing → `.stremiium/governance/workflow-routing.md`
- Mapping source → `.stremiium/config/council-department-mapping.json`
- Templates → `../templates/README.md`
