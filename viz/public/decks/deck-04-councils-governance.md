## 16 Councils, Two Planes, Six Routing Rules

- Governance model: **`two-plane-hierarchy`** · mapping v1.1.0 (2026-08-22)
- Owner: Sparkling Curious (`SC-MASTER-001`)
- Machine-readable sources: `.stremiium/config/council-department-mapping.json`, `.stremiium/registry/master-registry.json`
- Learn deck 04 of 04 · 14 slides

*Source: `.stremiium/config/council-department-mapping.json` header · `.stremiium/governance/workflow-routing.md`*

Note: The governance deck: how work enters the org, who may command whom, and where escalation stops. Routing rules are quoted verbatim from the governance sources.

---

## The two-plane hierarchy

```text
Stremiium
└── Sparkling Curious (SC-MASTER-001)
    ├── Meta-Councils            META-*   advisory only, no line authority
    ├── Coordinator Staff Line   CRD-*    cross-cutting gates; may intercept
    └── Councils                 C01–C16  COMMAND PLANE
        └── Departments          cNN-*    WORKFORCE PLANE
            └── Agents           AGT-*
                └── Subagents    SUB-*
```

- **Command plane** (`.stremiium/agents/council-agents`): strategy, approval, arbitration, escalation to SC
- **Workforce** (`.stremiium/agents/department-agents`): execution, specialist judgment, subagent fan-out
- **Staff line** (`.stremiium/agents/coordinators`): cross-cutting enforcement · **Advisory** (`.stremiium/agents/meta-councils`): no line authority
- Executive node: `EXEC-council-ceo.agent.md` (CEO proxy)

*Source: `.stremiium/governance/workflow-routing.md` §1 "Canonical Hierarchy" + §2 · `.stremiium/config/council-department-mapping.json` "planes"*

Note: Captains command, departments execute, coordinators intercept on gates, meta-councils only advise. The tree is ratified policy, not an org chart sketch.

---

## Sparkling Curious (`SC-MASTER-001`)

The master orchestrator's role in the routing contract:

- **STEP 1 Intake** — SC classifies intent → TBS decomposition
- **STEP 2 Council assign** — resolves owner via `council-department-mapping.json` (R1)
- **STEP 5 Synthesis** — results roll up department → captain → SC
- **STEP 6 Audit** — status boards updated per milestone
- **Arbitration** — cross-council conflicts settled < 24h (R3)
- **Escalation node** — Council Captain → SC → Mychael → Board

*Source: `.stremiium/governance/workflow-routing.md` §3 "Routing Contract" + §4 · `.stremiium/config/council-department-mapping.json` "owner"*

Note: Sparkling Curious is the single entry point: intake, ownership, synthesis, audit, arbitration, and escalation all route through SC-MASTER-001.

---

## R1 — intake ownership

> "R1: task -> owning council captain by domain matrix **before any department contact**"

- Every task is first mapped to its owning council via the domain matrix in `.stremiium/config/council-department-mapping.json`
- Departments are never contacted directly by the task source

*Source: `.stremiium/config/council-department-mapping.json` "routing_rules"[0] · `.stremiium/governance/workflow-routing.md` §3 STEP 2*

Note: Rule one: ownership before delegation. The domain matrix decides which captain receives the task — no shortcuts straight to departments.

---

## R2 — decomposition limits

> "R2: captain decomposes to departments **listed above only**"

- A captain may only fan work out to the departments registered under their council in the mapping
- Example: C15 may decompose to `c15-product-management`, `c15-products-blt`, `c15-products-fan-tokens` — no others

*Source: `.stremiium/config/council-department-mapping.json` "routing_rules"[1] + "councils".C15*

Note: Rule two bounds the blast radius: a captain commands exactly their registered departments, nothing else.

---

## R3 — cross-council arbitration

> "R3: cross-council tasks convene captains; **SC arbitrates conflicts <24h**"

- Tasks spanning multiple councils convene the relevant captains
- Conflicts between councils are arbitrated by Sparkling Curious within 24 hours

*Source: `.stremiium/config/council-department-mapping.json` "routing_rules"[2] · `.stremiium/governance/workflow-routing.md` §4*

Note: Rule three keeps shared work from stalling: captains convene, and if they disagree, SC settles it inside a day.

---

## R4 — coordinator interception

> "R4: coordinators (CRD-*) may intercept any step for **git-safety/security/cost gates**"

- Staff-line coordinators can halt or block any step on a gate breach
- Standing gates: git-state-safeguard (no destructive ops without approval), security-compliance-sentinel (C01/C12 binding rules), resource-cost-governor (budget guard), workflow-orchestrator (sequencing)

*Source: `.stremiium/config/council-department-mapping.json` "routing_rules"[3] · `.stremiium/governance/workflow-routing.md` §2 "Staff" + §3 STEP 4*

Note: Rule four is the enforcement backstop: at every step, the staff line can stop work for git safety, security, or cost — and reports to SC plus the owning captain.

---

## R5 — advisory boundary

> "R5: meta-councils advise SC **on request; never command departments directly**"

- Meta-councils (META-*) are consultative bodies with recommendations to SC only
- They hold no line authority over departments or agents

*Source: `.stremiium/config/council-department-mapping.json` "routing_rules"[4] · `.stremiium/governance/workflow-routing.md` §2 "Advisory"*

Note: Rule five: advice flows upward to SC on request, never sideways into the workforce. Advisory influence, zero command.

---

## R6 — subagent containment

> "R6: subagents (SUB-/The-*) instantiate **only under a registered AGT parent**"

- Every subagent hangs off a registered parent agent
- New files violating ID prefixes (AGT/SUB/CRD/META/EXEC/Cnn/SPEC/SC) are invalid

*Source: `.stremiium/config/council-department-mapping.json` "routing_rules"[5] · `.stremiium/governance/workflow-routing.md` §5*

Note: Rule six keeps the leaf of the tree attached: subagents exist only under registered parents, and prefix law validates every new agent file.

---

## Council captain map (C01–C16)

| Council | Captain | Departments |
|---|---|---|
| C01 Legal-Compliance | `C01-legal-compliance-captain` | c01-legal-compliance |
| C02 Operations | `C02-vp-operations` | c02-operations, c02-operations-infrastructure |
| C03 Admin-Knowledge | `C03-chief-librarian` | c03-admin-knowledge |
| C04 Strategy-Growth | `C04-chief-strategist` | c04-strategy-growth, strategy-operations, strategy-research, strategy-core |
| C05 HR-Culture | `C05-chief-people-officer` | c05-hr-culture, c05-hr-people |
| C06 Engineering-Infra | `C06-chief-technology-officer` | c06-engineering-infrastructure |
| C07 Sales-BizDev | `C07-rainmaker-captain` | c07-sales-business-development, c07-sales-revenue |
| C08 Design-Creative | `C08-chief-design-officer` | c08-design-creative |
| C09 Marketing-Comms | `C09-chief-marketing-officer` | c09-marketing-brand, c09-marketing-growth, c09-marketing-communications |
| C10 Finance-IR | `C10-chief-financial-officer` | c10-finance-cfo, c10-finance-investor-relations, c10-algo-trading |
| C11 Dev-Engineering | `C11-dev-engineering-captain` | c11-dev-engineering |
| C12 Cybersecurity-Intel | `C12-cybersecurity-intel-captain` | c12-cybersecurity-intel |
| C13 Web3-Finance | `C13-web3-finance-captain` | c13-web3-finance |
| C14 Customer-Success | `C14-customer-success-captain` | c14-customer-success |
| C15 Product-Management | `C15-product-management-captain` | c15-product-management, c15-products-blt, c15-products-fan-tokens |
| C16 Banking-Fintech | `C16-banking-fintech-captain` | c16-banking-fintech, c16-website-product |

*Source: `.stremiium/config/council-department-mapping.json` "councils" (v1.1.0) — department IDs as listed, abbreviated only by dropping the repeated `cNN-` prefix within C04*

Note: The full command plane: sixteen captains and their registered departments, straight from the machine-readable mapping. This is the table R1 and R2 operate on.

---

## 15 CRD coordinators (staff line)

| Coordinator | Duty |
|---|---|
| `crd-workflow-orchestrator` | sequencing, handoffs, task-routing table |
| `crd-git-state-safeguard` | destructive-op guard |
| `crd-security-compliance-sentinel` | security interception |
| `crd-resource-cost-governor` | budget/cost guard |
| `crd-engineering-product` | engineering coordination |
| `crd-council-liaison` | consult clocks + department fold coverage |
| `crd-compliance-ops` | regulatory screen calendar (C01 staff) |
| `crd-executive-liaison` | briefings + override-log integrity |
| `crd-research-ops` | evidence library + contradiction queue (C04 staff) |
| `crd-data-governance` | PI inventory + flow declarations (C01/C12 staff) |
| `crd-knowledge-flow` | learnings routing + memory hygiene (C03 staff) |
| `crd-incident-response` | incident command process (C12 staff) |
| `crd-deployment` | release gates + rollback readiness (C06/C11 staff) |
| `crd-agent-lifecycle` | P12 transition mechanics + registry parity |
| `crd-project-sync` | milestones + dependency chains |

*Source: `.stremiium/config/council-department-mapping.json` "coordinators" (duties quoted)*

Note: The staff line: fifteen coordinators with interception rights under R4, several of them embedded as C01–C12 staff.

---

## Escalation path + SLAs

> "Council Captain → SC → Mychael → Board. Critical security/regulatory skips to SC/Mychael."
> "Response SLAs: **Critical 1h · High 4h · Medium 24h · Low 72h**."

- Critical security/regulatory/privacy events skip straight to SC + C01 + C16 immediately (1h SLA)
- VIZ-task conflicts escalate to Sparkling Curious for arbitration per routing R3 (< 24h)

*Source: `.stremiium/governance/workflow-routing.md` §4 "Escalation & SLA" · `prompts/viz/c03-admin-knowledge/documentation-specialist/prompt.md` §14*

Note: Every chain ends at the Board, but critical events jump the queue: straight to SC plus Legal-Compliance and Banking-Fintech within the hour.

---

## Private-funded boundary · model lock · vocabulary

- **Private-funded boundary:** no public investor/client funds without separate C01 + C16 + C10 + Mychael approval — all execution artifacts state **private-funded-only** unless separately approved
- **Model lock:** `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`) — do not substitute another model
- **Vocabulary law:** "Council" is the sole canonical collective noun; "Squad" is retired (structurally and lexically); frontmatter `aliases: [squad]` tolerated one release cycle

*Source: `.kilo/plans/1794948779713-neobank-code-mode-execution.md` (boundary clause) · `prompts/viz/c03-admin-knowledge/documentation-specialist/prompt.md` header (model lock) · `.stremiium/governance/workflow-routing.md` §5*

Note: Three standing laws: private funding by default, a locked execution model, and one canonical vocabulary for every collective.

---

## Closing — governance in one sentence

> **Captains command, departments execute, coordinators intercept, meta-councils advise — and every path escalates through Sparkling Curious.**

- Continue the tour: **deck 01 — Repo Orientation** · **deck 02 — Program Brief** · **deck 03 — Prompts & Replies**
- Live view: `/councils` — the 16-council interactive graph (SC → CRD → C01–C16 → departments)

*Sources: `.stremiium/config/council-department-mapping.json` · `.stremiium/governance/workflow-routing.md` · `viz/README.md` "Views" table*

Note: That is the governance model end to end. Open the councils view to walk the graph interactively, or return to deck one to revisit the workspace map.
