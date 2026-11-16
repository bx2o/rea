# Workflow — Onboarding a Council Task

- **Owner:** SC (orchestration) with council captains · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Related:** [`agent-routing.md`](./agent-routing.md)
- **Governance source:** `.stremiium/governance/workflow-routing.md` §3, `.stremiium/templates/council-captain-standard.md`

> This file describes **how a single task flows through a council** once it has been routed there — from captain intake, through delegation and execution, to evidence, synthesis and audit.

---

## 1. Lifecycle overview

```text
 A  ASSIGNED        SC routes task to council captain (R1)
 B  TRIAGE          Captain validates scope, risk, dependencies
 C  DECOMPOSE       Captain breaks task into department work items (R2)
 D  DELEGATE        Captain issues message contract to AGT lead(s)
 E  EXECUTE         AGT lead performs work (may fan out SUB- under R6)
 F  GATE            CRD-* gates checked throughout (R4)
 G  EVIDENCE        Outputs tagged observe/infer/unknown; ledger updated
 H  SYNTHESISE      Department → captain roll-up
 I  REPORT          Captain reports to SC (cadence per §6)
 J  AUDIT           status + task summary updated; artifacts archived (C03)
```

---

## 2. Stage detail

### A. Assigned
- The task arrives with a **message contract** `{TASK, PRIORITY, DEADLINE, SUCCESS_CRITERIA, CONTEXT}`.
- The captain confirms ownership; if misrouted, returns to SC (do not silently re-route, R1).

### B. Triage
- Validate: is the scope inside this council's mandate?
- Classify **risk** (money/data/regulatory surface?).
- Identify **dependencies** and **cross-council** needs (convene captains if R3 applies).
- Confirm **success criteria** are testable; if not, return for clarification.

### C. Decompose
- Break the task into work items, each mapped to a **department** the captain may address (R2).
- Each work item gets: owner role, deliverable, definition of done, controls.

### D. Delegate
- Issue the message contract to the owning **AGT- lead**.
- State evidence requirements explicitly (five-tag discipline).
- Set the review level (four-eyes, captain, or SC).

### E. Execute
- AGT lead performs the work, invoking **skills** (`../../skills/`) and **templates** (`../../templates/`).
- **SUB- fan-out** only under a registered AGT parent (R6).
- UnConsolidated rule: produce **granular** outputs; do not merge into a mega-document.

### F. Gate
CRD gates may intercept at any stage:
- git-safety, security-compliance, cost, workflow sequencing (R4).

### G. Evidence
- Every claim tagged **observed / inferred / unknown** (PLAN.md §0).
- Maintain a **finding/evidence ledger** (`../../templates/evidence-ledger.md`).
- No secrets/PII in artifacts.

### H. Synthesis
- Department outputs roll up to the captain.
- Captains resolve intra-council inconsistency; escalate cross-council conflicts to SC (<24h, R3).

### I. Report
| Cadence | To | Content |
|---|---|---|
| On milestone | SC | status, blockers, evidence refs |
| Weekly | SC | council dashboard |
| Monthly | SC + board pack | outcomes, KPIs, risks |

### J. Audit
- Update `status` + task summary per milestone (SESS discipline — append-only ledgers, `crd-knowledge-flow`).
- Archive artifacts per `../../councils/c03-admin-knowledge/records-and-retention.md`.

---

## 3. Definition of done (per task)

A council task is **done** when:
1. Every success criterion is met or explicitly marked unresolved.
2. Claims carry sources or explicit tags.
3. Cross-links are in place (UP to evidence, ACROSS to peers, DOWN to templates).
4. Controls have left evidence.
5. The artifact is archived and indexed by C03.
6. The captain has reported to SC.

> "Do not describe a task as complete while required questions remain open" (echoes REA methodology §7).

---

## 4. Escalation within a council task

| Situation | Route |
|---|---|
| Scope dispute | captain → SC |
| Cross-council conflict | convene captains → SC (<24h) |
| Security/compliance breach | `crd-security-compliance-sentinel` → SC immediate |
| Blocked dependency | captain → `crd-project-sync` |
| Cost overrun | `crd-resource-cost-governor` |

Overall SLA: Captain → SC → Mychael → Board; Critical 1h · High 4h · Medium 24h · Low 72h.

---

## 5. Roles in the flow

| Role | Responsibility |
|---|---|
| SC | route in, arbitrate, synthesise out |
| Captain | own the task inside the council |
| AGT- lead | execute the work item |
| SUB- | scoped fan-out under an AGT |
| CRD-* | intercept on gates |
| C03 | archive & index |

---

## 6. Worked example (a C13 task)

**Task:** "Produce the DeFi risk & go/no-go file."
- **Triage:** in C13 mandate; risk class = regulatory → C01/C12 screens.
- **Decompose:** one work item → `c13-web3-finance`.
- **Delegate:** message contract with success criterion "risk register + consolidated go/no-go".
- **Execute:** use `research-report` template + `risk-entry` template.
- **Gate:** C01 confirms regulatory tags preserved.
- **Evidence:** statuses sourced from `research/regulatory/`; business views tagged `[ASSUMPTION]`.
- **Synthesise → Report → Audit:** C13 captain → SC; file archived under `councils/c13-web3-finance/defi-and-risk.md`.

---

## 7. Cross-links

- Routing → [`agent-routing.md`](./agent-routing.md)
- Skills → `../../skills/README.md`
- Templates → `../../templates/README.md`
- Knowledge/records → `../../councils/c03-admin-knowledge/`
- Governance → `.stremiium/governance/workflow-routing.md`
