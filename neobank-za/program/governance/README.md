# Program Governance — NeoBank ZA ("Project Umoya")

**Owner:** C03 Admin-Knowledge (governance steward) with C01 Legal-Compliance (authority assurance)
**Program:** NeoBank South Africa (`Project Umoya` — working codename, not a brand decision)
**Authority model:** Sparkling Curious (Executive) → Council Captains (Command) → Agents (Operational) → Subagents
**Version:** 1.0 · **Date:** 2026-10-16 · **Status:** Active (proposed founds, see [`decision-log.md`](./decision-log.md))

> This directory is the **governance spine** of the NeoBank ZA program. It is modelled on the Stremiium Agent Operating System (SAOS) governance files — specifically [`workflow-routing.md`](file:///workspace/_stremiium/.stremiium/governance/workflow-routing.md) and [`sparkling-curious-instructions.md`](file:///workspace/_stremiium/.stremiium/governance/rules/sparkling-curious-instructions.md). Where those files say "Squad", this program says **Council** (vocabulary law — see below).

---

## 1. Document index

| File | Purpose |
|---|---|
| [`README.md`](./README.md) | This overview: model, authority hierarchy, two-plane model, escalation summary |
| [`charter.md`](./charter.md) | Program charter: vision, mission, objectives, scope, success metrics, stakeholders |
| [`authority-matrix.md`](./authority-matrix.md) | Decision authority matrix (decision type × who decides × who consults × SLA), level-1/2/3 |
| [`raci.md`](./raci.md) | RACI across the launch program's major workstreams |
| [`escalation-protocols.md`](./escalation-protocols.md) | Escalation ladder, triggers, SLAs, message formats |
| [`decision-log.md`](./decision-log.md) | Seeded decision log of foundational program decisions (D-001 … D-005) |

Related program artifacts: [`../roadmaps/`](../roadmaps/README.md) · [`../risk/`](../risk/README.md) · [`../delivery/`](../delivery/README.md) · [`../../councils/`](../../councils/README.md).

---

## 2. Authority hierarchy

The hierarchy is inherited unchanged from SAOS `workflow-routing.md`. **Four nodes, one line of authority.**

```text
Stremiium
└── Sparkling Curious (SC-MASTER-001)          EXECUTIVE  — final arbitration, strategy, crisis
    ├── Meta-Councils            META-*         ADVISORY   — recommendations to SC only, no line authority
    ├── Coordinator Staff Line   CRD-*          STAFF      — cross-cutting gates; may intercept
    └── Councils                 C01–C16        COMMAND    — domain strategy, department assignment
        └── Departments          cNN-*          WORKFORCE  — execution units
            └── Agents           AGT-*          WORKFORCE  — owned task execution
                └── Subagents    SUB-*          WORKFORCE  — leaf execution
                    └── Skills / Tools / Workflows   capability leaves
Executive node: EXEC-council-ceo.agent.md (CEO proxy, governance level)
```

**Authority tiers (top-down):**

| Tier | Node | Decides | Cannot decide |
|---|---|---|---|
| T1 | Sparkling Curious | Org strategy, multi-council arbitration, governance, crisis | — (reports to Board/executive) |
| T2 | Council Captains (C01–C16) | Council strategy, agent assignment, SLA targets, escalation to SC | Org strategy, other councils' resources |
| T3 | Agents (AGT-*) | Tactical execution within assigned domain | Cross-council commitments |
| T4 | Subagents (SUB-*) | Leaf task execution | Anything above assigned scope |

> The full tier-by-tier breakdown lives in [`authority-matrix.md`](./authority-matrix.md). Chains of command for the program's foundational decisions are logged in [`decision-log.md`](./decision-log.md).

---

## 3. Two-plane operating model

Council work is split across **two planes**. Staff and Advisory nodes sit *outside* both planes and act on them.

| Plane | Members | Authority | May decide |
|---|---|---|---|
| **Command plane** | C01–C16 captains | Tier-2 | Domain strategy, department assignment, SLA targets, escalation to SC |
| **Workforce plane** | AGT-/SUB- agents inside `cNN-*` departments | Tier-3/4 | Execution detail within assigned scope |
| **Staff (cross-plane)** | CRD-workflow-orchestrator, CRD-git-state-safeguard, CRD-security-compliance-sentinel, CRD-resource-cost-governor | Interception rights | Block/halt on gate breach; report to SC + owning captain |
| **Advisory (off-line)** | META-agents-council-charter, META-captains-advisors-council, META-council-cabinet, META-agents-council-master | Consultative | Recommendations to SC only |

**Plane interaction rules:**

1. Command decides; Workforce executes. A Workforce agent never commits another council's work.
2. Staff (CRD) gates are **binding** at every step and may halt a workflow without consulting the owning captain first — the halt is reported *after* the fact.
3. Advisory (META) may recommend but never directs; a META recommendation is an input to an SC/Command decision, never a decision itself.
4. Every cross-plane handoff carries an explicit message contract: `{TASK, PRIORITY, DEADLINE, SUCCESS_CRITERIA, CONTEXT}`.

---

## 4. Routing contract (normative)

Inherited from SAOS `workflow-routing.md §3` and applied to this program:

```
STEP 1  INTAKE          SC classifies intent → TBS decomposition (T1 / T1.1 / T1.1.1)
STEP 2  COUNCIL ASSIGN  Resolve owner council via council→department mapping (C01–C16)
STEP 3  DELEGATION      Captain → department AGT leads with message contract
STEP 4  ENFORCEMENT     CRD gates active throughout:
                          git-state-safeguard          (no destructive ops without approval)
                          security-compliance-sentinel  (C01/C12 binding rules)
                          resource-cost-governor        (budget guard)
                          workflow-orchestrator         (sequencing, handoffs)
STEP 5  SYNTHESIS       Results roll up department → captain → SC synthesis
STEP 6  AUDIT           Status + task summaries updated per milestone
```

---

## 5. Escalation (summary)

Escalation ladder: **Council Agent → Council Captain → Sparkling Curious → Board.**

Response SLAs — **Critical 1h · High 4h · Medium 24h · Low 72h.**
Critical security/regulatory issues skip the captain tier and go straight to SC.

Full triggers, ladder, formats and post-incident review are in [`escalation-protocols.md`](./escalation-protocols.md). Who decides what is in [`authority-matrix.md`](./authority-matrix.md).

---

## 6. Vocabulary law (binding on this program)

- **"Council" is the sole canonical collective noun.** The word **"squad" is retired** — do not use it in any NeoBank ZA artifact.
- Valid node prefixes: `AGT`, `SUB`, `CRD`, `META`, `EXEC`, `Cnn` (council), `SPEC`, `SC`.
- A file that violates an ID prefix is **invalid** by policy.
- Council names in this program follow SAOS §1.2 (see [`../../councils/README.md`](../../councils/README.md)).

---

## 7. Related governance sources (SAOS)

| SAOS file | What it governs |
|---|---|
| [`workflow-routing.md`](file:///workspace/_stremiium/.stremiium/governance/workflow-routing.md) | Canonical hierarchy, routing contract, vocabulary law |
| [`rules/sparkling-curious-instructions.md`](file:///workspace/_stremiium/.stremiium/governance/rules/sparkling-curious-instructions.md) | Orchestration, escalation tiers, quality gates |
| [`rules/agent-authority-framework.md`](file:///workspace/_stremiium/.stremiium/governance/rules/agent-authority-framework.md) | 5-tier agent authority |
| [`rules/council-governance-framework.md`](file:///workspace/_stremiium/.stremiium/governance/rules/council-governance-framework.md) | Decision categories, special authorities |
