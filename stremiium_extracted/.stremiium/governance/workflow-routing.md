---
title: SAOS Workflow Routing & Hierarchy Governance
document_type: governance_standard
version: '1.0'
status: active
owner: Sparkling Curious (SC-MASTER-001)
approved_by: Executive decision — Batch 1 directives (D1–D4)
last_updated: '2026-08-22'
machine_binding: .stremiium/config/council-department-mapping.json
---

# WORKFLOW ROUTING & HIERARCHY GOVERNANCE

## 1. Canonical Hierarchy (Prompt 08 verdict — RATIFIED)

```text
Stremiium
└── Sparkling Curious (SC-MASTER-001)
    ├── Meta-Councils            META-*   advisory only, no line authority
    ├── Coordinator Staff Line   CRD-*    cross-cutting gates; may intercept
    └── Councils                 C01–C16  COMMAND PLANE
        └── Departments          cNN-*    WORKFORCE PLANE
            └── Agents           AGT-*
                └── Subagents    SUB-*
                    └── Skills / Tools / Workflows   capability leaves
Executive node: EXEC-council-ceo.agent.md (CEO proxy, governance level)
```

**Exceptions ratified:** Meta-Councils node added between SC and Councils;
Coordinator Staff Line hangs directly off SC (matrix org). No existing agent is
excluded from this hierarchy.

## 2. Two-Plane Operating Model

| Plane | Members | Authority | May decide |
|---|---|---|---|
| Command | C01–C16 captains | Tier-2 | Domain strategy, department assignment, SLA targets, escalation to SC |
| Workforce | AGT-/SUB- in `cNN-*` departments | Tier-3/4/5 | Execution detail within assigned scope |
| Staff | CRD-workflow-orchestrator, CRD-git-state-safeguard, CRD-security-compliance-sentinel, CRD-resource-cost-governor (+alt legacy twin) | Interception rights | Block/halt on gate breach; report to SC + owning captain |
| Advisory | META-agents-council-charter, META-captains-advisors-council, META-council-cabinet, META-agents-council-master | Consultative | Recommendations to SC only |

## 3. Routing Contract (normative)

```
STEP 1  INTAKE          SC classifies intent → TBS decomposition (T1/T1.1/T1.1.1)
STEP 2  COUNCIL ASSIGN  Resolve owner via council-department-mapping.json (R1)
STEP 3  DELEGATION      Captain → department AGT leads with message contract
                        {TASK, PRIORITY, DEADLINE, SUCCESS_CRITERIA, CONTEXT}
STEP 4  ENFORCEMENT     CRD gates active at every step:
                        git-state-safeguard (no destructive ops w/o approval),
                        security-compliance-sentinel (C01/C12 binding rules),
                        resource-cost-governor (budget guard),
                        workflow-orchestrator (sequencing, handoffs)
STEP 5  SYNTHESIS       Results roll up department → captain → SC synthesis
STEP 6  AUDIT           status.md + task/{id}/summary/ updated per milestone
```

## 4. Escalation & SLA (unchanged from authority framework)

Council Captain → SC → Mychael → Board. Critical security/regulatory skips to SC/Mychael.
Response SLAs: Critical 1h · High 4h · Medium 24h · Low 72h.

## 5. Vocabulary Law

"Council" is the sole canonical collective noun. "Squad" is retired structurally
(directory `squad-agents` → `department-agents`; inner `-squad` suffixes dropped) and
lexically (active docs); frontmatter `aliases: [squad]` tolerated one release cycle.
New files violating ID prefixes (AGT/SUB/CRD/META/EXEC/Cnn/SPEC/SC) are invalid.

## 6. Compliance Hooks

- FSCA/FICA/POPIA/NGB screens: mandatory before any SVC touching money/gaming/data ships (services-catalog regulatory surfaces).
- $STM tokenomics changes: C13 ruling + cross-council consult (Constitution Art. III).
- Smart contracts: deferred until tooling/agent stack updated (T-SAOS-001 deferral record).
