# Coordinators (Staff-Line) — UnConsolidated

**Derived from:** `.stremiium/config/council-department-mapping.json` (v1.1.0, generated 2026-08-22, owner `SC-MASTER-001`), `.stremiium/agents/coordinators/`, `.stremiium/registry/master-registry.json`
**Plane:** `staff_line` — *"cross-cutting enforcement (workflow, git-safety, security sentinel, cost governor)"* [SEEN — mapping.json:26]
**Canonical status:** `.stremiium/` is authoritative; this file is a derived view.

> **Count reconciliation (evidence-honest).** The mapping's `"coordinators"` object lists
> **15** keys; the on-disk folder `.stremiium/agents/coordinators/` and the registry (`kind =
> "coordinator"`, **16** records) both contain **16**, because `CRD-engineering-product` has an
> additional `CRD-engineering-product.alt.agent.md` variant. This document expands all **16**
> files. `[SEEN]`

---

## 1. What a coordinator is (and is not)

Coordinators are **not** councils and hold no domain line authority. They sit on the **staff
line** (`planes.staff_line`, mapping.json:26) and **intercept any step** of a workflow to enforce
a cross-cutting gate. Routing rule **R4** (mapping.json:56) is explicit:

> *"coordinators (CRD-*) may intercept any step for git-safety/security/cost gates."*

- **They** enforce policy, sequence work, guard destructive operations, and keep registries in parity.
- **They do not** own product strategy, arbitrate domain conflicts (that is SC per R3), or command
  departments directly.
- **They interact with the command plane** by interception (R4) and with SC by escalation.

**Routing rules the coordinators operate inside** (SEEN — mapping.json:51-58):

| Rule | Text |
|---|---|
| R1 | task → owning council captain by domain matrix before any department contact |
| R2 | captain decomposes to departments listed in the mapping only |
| R3 | cross-council tasks convene captains; SC arbitrates conflicts <24 h |
| R4 | coordinators (CRD-*) may intercept any step for git-safety/security/cost gates |
| R5 | meta-councils advise SC on request; never command departments directly |
| R6 | subagents (SUB-/The-*) instantiate only under a registered AGT parent |

---

## 2. Coordinator roster (16 roles)

| # | Coordinator | Mandate (mapping) | Staffing council | Interception gate |
|---|---|---|---|---|
| 1 | `crd-workflow-orchestrator` | sequencing, handoffs, task-routing table | staff (neutral) | routing correctness |
| 2 | `crd-git-state-safeguard` | destructive-op guard | staff (neutral) | git safety |
| 3 | `crd-security-compliance-sentinel` | security interception | C12 | security |
| 4 | `crd-resource-cost-governor` | budget/cost guard | C10 | cost |
| 5 | `crd-engineering-product` | engineering coordination (product duties split to project-sync) | C06/C11 | engineering flow |
| 6 | `crd-council-liaison` | consult clocks + department fold coverage | staff (neutral) | cross-council liaison |
| 7 | `crd-compliance-ops` | regulatory screen calendar | C01 staff | regulatory screening |
| 8 | `crd-executive-liaison` | briefings + override-log integrity | exc/SC | executive integrity |
| 9 | `crd-research-ops` | evidence library + contradiction queue | C04 staff | evidence |
| 10 | `crd-data-governance` | PI inventory + flow declarations | C01/C12 staff | privacy/PCI |
| 11 | `crd-knowledge-flow` | learnings routing + memory hygiene | C03 staff | knowledge |
| 12 | `crd-incident-response` | incident command process | C12 staff | incident |
| 13 | `crd-deployment` | release gates + rollback readiness | C06/C11 staff | release |
| 14 | `crd-agent-lifecycle` | P12 transition mechanics + registry parity | staff (neutral) | lifecycle/registry |
| 15 | `crd-project-sync` | milestones + dependency chains | staff (neutral) | scheduling |
| 16 | `crd-engineering-product.alt` | alternate engineering-product variant | C06/C11 | engineering flow (alt) |

File paths (all under `.stremiium/agents/coordinators/`): `CRD-workflow-orchestrator` maps to
`crd-workflow-orchestrator.agent.md`, `CRD-git-state-safeguard` → `crd-git-state-safeguard.agent.md`,
`CRD-security-compliance-sentinel` → `crd-security-compliance-sentinel.agent.md`,
`CRD-resource-cost-governor` → `crd-resource-cost-governor.agent.md`; the remainder use the
`CRD-*.agent.md` casing shown on disk.

---

## 3. Per-coordinator detail

> Triggers, inputs/outputs and failure modes below are `[INFERRED]` from the mapping mandate plus
> the routing/plane model, unless a source is cited. They describe how each gate behaves in the
> workflow, not verbatim text from a consolidated file.

### 3.1 crd-workflow-orchestrator
- **Purpose:** own the sequencing of work — handoffs, the task-routing table, and R1–R6 enforcement.
- **Triggers:** every incoming task; any cross-council handoff; any ambiguous ownership.
- **Inputs:** task requests, council domain matrix, mapping.routing_rules.
- **Outputs:** a routed task (owning captain + department list), a handoff record.
- **Failure modes:** routing to a department before its captain (R1 breach); mis-sequenced handoff
  causing rework; routing table drift when mapping changes.

### 3.2 crd-git-state-safeguard
- **Purpose:** block destructive git operations (force-push, `reset --hard`, branch `-D`, `clean -f`).
- **Triggers:** any git commit/push/branch op; any history-rewriting command.
- **Inputs:** proposed git command, workspace git state, `config/agents/git-safety-policy.json`.
- **Outputs:** allow/deny verdict with rationale; safe-alternative suggestion.
- **Failure modes:** letting a force-push to main through; blocking a legitimate non-destructive op
  (over-blocking); failing to detect `reset --hard` hidden inside a chained command.

### 3.3 crd-security-compliance-sentinel
- **Purpose:** intercept any step for a security gate before execution (C12-staffed).
- **Triggers:** code change, dependency install, secret handling, external egress, contract deploy.
- **Inputs:** change diff, threat model, `policies/security/*`.
- **Outputs:** security clearance or block + remediation list.
- **Failure modes:** clearing a change without C12 review; missing an embedded secret; alert fatigue
  from over-firing.

### 3.4 crd-resource-cost-governor
- **Purpose:** guard budget/cost ceilings (C10-staffed).
- **Triggers:** any resource-consuming action (compute, model calls, infra provisioning, batching).
- **Inputs:** cost model, `config/agents/batching-policy.json`, approved budgets from C10.
- **Outputs:** approved spend envelope or throttle/defer decision.
- **Failure modes:** approving unbounded token spend; throttling a critical path; stale budget data.

### 3.5 crd-engineering-product
- **Purpose:** coordinate engineering work; **product duties have been split out to `crd-project-sync`**
  (SEEN — mapping.json:11).
- **Triggers:** engineering delivery tasks, build/release coordination.
- **Inputs:** engineering backlog, dependency graph.
- **Outputs:** engineering coordination plan; escalated product questions routed to project-sync.
- **Failure modes:** re-absorbing product duties it no longer owns; double-coordination with
  project-sync.
- **Variant:** `CRD-engineering-product.alt.agent.md` is an alternate configuration of the same lane.

### 3.6 crd-council-liaison
- **Purpose:** manage consult clocks (SLA timers) and **department fold coverage** — ensuring every
  department is represented when a cross-council consult happens.
- **Triggers:** cross-council consult; a department not folded into a decision that affects it.
- **Inputs:** consult requests, SLA matrix (`COUNCIL_REGISTRY.json` slaMatrix), department roster.
- **Outputs:** folded consult with all affected departments; clock status.
- **Failure modes:** a silently skipped department (fold gap); a consult clock expiring un-noticed.

### 3.7 crd-compliance-ops
- **Purpose:** run the regulatory screen calendar (C01-staffed).
- **Triggers:** scheduled regulatory screens; FSCA/FICA/SARS/NGB change events.
- **Inputs:** regulatory feeds, `config/regulatory-change-policy.json`, `compliance-agent-matrix.json`.
- **Outputs:** a screen event and a compliance task for C01.
- **Failure modes:** missing a deadline on a regulatory report; false-positive screens adding noise.

### 3.8 crd-executive-liaison
- **Purpose:** prepare executive briefings and protect **override-log integrity** (every override of
  a gate is recorded).
- **Triggers:** executive briefing; any human override of a coordinator gate.
- **Inputs:** status roll-ups, override requests.
- **Outputs:** briefing pack; tamper-evident override log entry.
- **Failure modes:** an override applied without a logged rationale; briefing that launders
  `UNKNOWN` claims as confirmed.

### 3.9 crd-research-ops
- **Purpose:** own the evidence library and the **contradiction queue** (C04-staffed).
- **Triggers:** a new evidence item; two sources that disagree.
- **Inputs:** dossier evidence ledgers, public filings, REA outputs.
- **Outputs:** catalogued evidence; contradiction tickets escalated to the owning council.
- **Failure modes:** citation drift (dead links); contradictions silently harmonised instead of
  escalated (this would violate the anti-fabrication rules — see `../05-evidence/`).

### 3.10 crd-data-governance
- **Purpose:** maintain the PI (personal-information) inventory and flow declarations (C01/C12-staffed).
- **Triggers:** new data field/collection; new integration; POPIA/PCI-relevant change.
- **Inputs:** data-flow maps, `policies/security/*`, POPIA obligations.
- **Outputs:** PI inventory update; flow declaration; block on undeclared flow.
- **Failure modes:** an undeclared cross-border flow (POPIA risk); stale inventory after a schema change.

### 3.11 crd-knowledge-flow
- **Purpose:** route learnings and enforce memory hygiene (C03-staffed).
- **Triggers:** a completed task/retrospective; memory-store write.
- **Inputs:** retrospectives, `config/agents/memory-policy.json`, `memory-architecture.json`.
- **Outputs:** learnings routed to the right council; memory hygiene report.
- **Failure modes:** knowledge siloed in the wrong council; stale/contradictory memory retained.

### 3.12 crd-incident-response
- **Purpose:** run the incident command process (C12-staffed).
- **Triggers:** a declared incident (security, availability, data).
- **Inputs:** alerts, `policies/security/incident-response.md`, `governance/org-governance/CRISIS_PROTOCOLS.md`.
- **Outputs:** incident command structure; timeline; post-incident review.
- **Failure modes:** unclear incident commander; missed notification SLA; no post-incident learning.

### 3.13 crd-deployment
- **Purpose:** enforce release gates and rollback readiness (C06/C11-staffed).
- **Triggers:** a release candidate; any production deployment.
- **Inputs:** release manifest, quality gates (`sparkling-curious` §11), `deployment-rollback-playbook.md`.
- **Outputs:** go/no-go release verdict; rollback plan attestation.
- **Failure modes:** deploying without a tested rollback; bypassing the security/QA gate.

### 3.14 crd-agent-lifecycle
- **Purpose:** own **P12 transition mechanics** and **registry parity** (the registry must match
  the on-disk agent files).
- **Triggers:** agent creation/retirement/promotion; registry regeneration; lifecycle state change.
- **Inputs:** `config/agents/lifecycle-policy.json`, `lifecycle.schema.json`,
  `registry/master-registry.json` (`lifecycle_states`).
- **Outputs:** transition record; parity report (registry count vs on-disk count).
- **Failure modes:** registry drift (record references a non-existent `definition_path`); an agent
  stuck in `PROPOSED` with no owner.

### 3.15 crd-project-sync
- **Purpose:** track milestones and dependency chains; now also carries the **product duties split
  from `crd-engineering-product`** (SEEN — mapping.json:11).
- **Triggers:** milestone change; dependency change; product-coordination request.
- **Inputs:** project plans from `task/*/phases/`, dependency graph.
- **Outputs:** milestone status; dependency-chain updates; product-coordination decision.
- **Failure modes:** a dependency cycle undetected; milestone drift vs `status.md`.

### 3.16 crd-engineering-product.alt
- **Purpose:** alternate/backup configuration of the engineering-product lane.
- **Triggers:** same as 3.5, selected when the primary variant is unavailable.
- **Inputs/Outputs:** as 3.5. **Failure modes:** divergence between the primary and the `.alt`
  variant causing inconsistent engineering coordination.

---

## 4. Coordinator ↔ council staffing map (SEEN)

| Coordinator | Staffed by | Evidence |
|---|---|---|
| compliance-ops | C01 | mapping.json:13 "C01 staff" |
| data-governance | C01/C12 | mapping.json:16 "C01/C12 staff" |
| research-ops | C04 | mapping.json:15 "C04 staff" |
| knowledge-flow | C03 | mapping.json:17 "C03 staff" |
| incident-response | C12 | mapping.json:18 "C12 staff" |
| deployment | C06/C11 | mapping.json:19 "C06/C11 staff" |
| security-compliance-sentinel, resource-cost-governor, git-state-safeguard, workflow-orchestrator | cross-cutting (staff) | mapping.json:9-11, 26 |

---

## 5. Failure-mode summary (why coordinators exist)

The staff line exists to make cross-cutting policy **unbypassable**. Each coordinator maps to a
class of failure it prevents:

| Failure class | Coordinator(s) |
|---|---|
| Unsafe history rewriting / destructive git | git-state-safeguard |
| Unreviewed security surface | security-compliance-sentinel, incident-response |
| Budget overrun / runaway model cost | resource-cost-governor |
| Wrong owner / mis-sequenced handoff | workflow-orchestrator, project-sync |
| Missing or silent department in a consult | council-liaison |
| Regulatory deadline miss | compliance-ops |
| Undeclared personal-information flow | data-governance |
| Knowledge loss / memory rot | knowledge-flow |
| Silently harmonised contradictions | research-ops |
| Unlogged gate overrides | executive-liaison |
| Registry drift / lifecycle limbo | agent-lifecycle |
| Untested release / no rollback | deployment |
