# Project Umoya — Orchestrator Workflows Index

- **Owner:** SC (orchestration) with C03 (knowledge) · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Governance source:** `.stremiium/governance/workflow-routing.md` (§3 Routing Contract), `.stremiium/agents/sparkling-curious.agent.md`
- **Related:** [`../skills/README.md`](../skills/README.md), [`../templates/README.md`](../templates/README.md)

> These are the program-local **orchestrator workflows** — the procedures the program uses to intake, classify, route, execute and synthesise work. They implement (do not replace) the canonical Stremiium routing contract.

---

## 1. The canonical routing contract (from Stremiium)

Reproduced from `.stremiium/governance/workflow-routing.md` §3:

```text
STEP 1  INTAKE          SC classifies intent → TBS decomposition (T1/T1.1/T1.1.1)
STEP 2  COUNCIL ASSIGN  Resolve owner via council-department-mapping.json (R1)
STEP 3  DELEGATION      Captain → department AGT leads with message contract
                        {TASK, PRIORITY, DEADLINE, SUCCESS_CRITERIA, CONTEXT}
STEP 4  ENFORCEMENT     CRD gates active at every step
STEP 5  SYNTHESIS       Results roll up department → captain → SC synthesis
STEP 6  AUDIT           status.md + task/{id}/summary/ updated per milestone
```

**TBS decomposition:** break intent into a task breakdown structure (`T1` → `T1.1` → `T1.1.1`), each node being a routable unit of work.

---

## 2. The four orchestration flows

| Flow | Purpose | File |
|---|---|---|
| **Intake → Routing → Delegation → Synthesis** | end-to-end orchestrator flow | [`README.md`](./README.md) (this file, §3) |
| **Agent routing (TBS)** | how SC classifies and routes work to councils | [`agent-routing.md`](./agent-routing.md) |
| **Council task onboarding** | how a single task flows *through* a council | [`onboarding-a-council-task.md`](./onboarding-a-council-task.md) |
| **Governance enforcement** | CRD gates at every step | `.stremiium/governance/workflow-routing.md` §3 STEP 4 |

---

## 3. Orchestrator flow (intake → routing → delegation → synthesis)

```text
INTAKE
  ├─ Classify intent (domain? deliverable type? risk class?)
  ├─ TBS-decompose into routable tasks
  └─ Assign task ids (traceable)

ROUTING            → agent-routing.md
  ├─ Resolve owning council via council-department-mapping.json (R1)
  ├─ Detect cross-council work → convene captains (R3)
  └─ Apply CRD gates (R4)

DELEGATION         → onboarding-a-council-task.md
  ├─ Captain decomposes to departments (R2)
  ├─ Issue message contract {TASK, PRIORITY, DEADLINE, SUCCESS_CRITERIA, CONTEXT}
  └─ AGT leads execute; SUB- fan-out only under a registered AGT (R6)

ENFORCEMENT        (CRD gates at every step)
  ├─ git-state-safeguard      (destructive-op guard)
  ├─ security-compliance-sentinel (C01/C12 binding rules)
  ├─ resource-cost-governor   (budget guard)
  └─ workflow-orchestrator    (sequencing & handoffs)

SYNTHESIS
  ├─ Department → captain → SC roll-up
  ├─ Evidence tagged (observe / infer / unknown)
  └─ Conflicts escalated to SC (<24h per R3)

AUDIT
  └─ status + task summary updated per milestone (SESS ledgers)
```

---

## 4. Escalation & SLA

Council Captain → SC → Mychael → Board. **Critical 1h · High 4h · Medium 24h · Low 72h** (PLAN.md §5). Critical security/regulatory issues skip directly to SC/Mychael.

---

## 5. Principles carried into every flow

1. **Physical evidence over stale reports** (`.stremiium/README.md`).
2. **Every task has a traceable artifact.**
3. **Observe vs infer vs unknown** preserved.
4. **No secrets/PII in artifacts.**
5. **UnConsolidated:** keep outputs granular; never merge prematurely (`../councils/c03-admin-knowledge/knowledge-architecture.md`).

---

## 6. Workflow ↔ skill ↔ template triangle

- **Workflows** orchestrate (this folder).
- **Skills** execute (`../skills/`).
- **Templates** standardise outputs (`../templates/`).

A well-run task: a workflow routes it → a council delegates it → a skill performs it → a template captures the output → C03 archives it.

---

## 7. Open items / unknowns

- `[ASSUMPTION]` Task-id format for the program (proposed, pending SC ratification).
- `[UNKNOWN]` Which flows warrant machine enforcement (validators) vs human discipline.

---

## 8. Cross-links

- Routing detail → [`agent-routing.md`](./agent-routing.md)
- Council onboarding → [`onboarding-a-council-task.md`](./onboarding-a-council-task.md)
- Governance → `.stremiium/governance/workflow-routing.md`
- Knowledge → `../councils/c03-admin-knowledge/README.md`
