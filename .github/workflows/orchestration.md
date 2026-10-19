# `.github/workflows/orchestration.md` — Execution Algorithm

**Program:** `SC-REA-NEOBANK-5.0`
**Engine:** Sparkling Curious (`SC-MASTER-001`)
**Owner:** C06 · **Author:** C03
**Last updated:** 2026-10-19

---

## 1. Plan Mode gate

**Inputs:** `task/PROGRAM_BRIEF.md`, `task/TASK_INDEX.md`, `.stremiium/registry/master-registry.json`.

**Algorithm:**
1. Load brief + index; confirm program ID and locked status.
2. Refuse to proceed if any claim would be unlabelled → enforce SEEN / INFERRED / UNKNOWN.
3. Confirm REA status. If NOT installed, cap artefact claims at INFERRED/UNKNOWN (brief §5).
4. Emit a plan that names, per task: owner council, deliverables, acceptance tests.

**Exit gate:** the Accountable captain for each workstream approves the plan; evidence labels valid.

## 2. TBS construction (Task Breakdown Structure)

1. Map each deliverable to a task folder `task/T<n>-<slug>/`.
2. Populate the six TBS subfolders: `audit/` `phases/` `implementation/` `summary/` `context/` `assignments/`
   plus root `status.md`.
3. Every task folder MUST contain:
   - `status.md` — mission, scope, owner, status, entrance/exit criteria, dependency map, risk register, next actions.
   - `audit/inventory.md` — exists / missing / evidence present vs absent.
   - `phases/phase-plan.md` — T<n>.1, T<n>.2 … with owners.
   - `implementation/build-spec.md` — artefacts, paths, acceptance tests.
   - `summary/roll-up.md` — consolidated findings/decisions.
   - `context/references.md` — sources, assumptions, evidentiary reminder.
   - `assignments/raci.md` — RACI × 16 councils + named captains.

## 3. Council RACI assignment

1. For each workstream, assign exactly one **Accountable** council (the task's owner council).
2. Assign **Responsible** council(s) — the doers.
3. Assign **Consulted** councils by domain adjacency (e.g. C07 consulted on acquiring; C01 on legal).
4. Name the **captain agent file** for every Council/Accountable cell (e.g.
   `C16-banking-fintech-captain.agent.md`).
5. Escalation path: workstream R ➔ workstream A ➔ C00 master ➔ Executive.

## 4. Evidence rules (enforced at every step)

| Class | Definition | Source requirement |
|---|---|---|
| SEEN | verifiable strings/bytecode/filings/pricing | citable source OR REA artefact we possess |
| INFERRED | logical architecture synthesised from SEEN | must cite the SEEN basis |
| UNKNOWN | server-side, private API, unreachable logic | must name the resolving extraction step |

- REA NOT installed ⇒ no artefact-derived SEEN. Public sources only for SEEN.
- Every dossier carries `evidence-ledger.json` (brief §6).
- C12 audits evidence classes before any workstream closes.

## 5. Code Mode dispatch

1. Verify Plan-Mode gate passed (approved plan + valid evidence labels).
2. Dispatch each workstream to its Responsible captain via the spawning pattern
   (Sparkling Curious ➔ Council Captain ➔ Specialist Subagent ➔ Artifact Logging).
3. Write artefacts to their declared paths (task folders, `research/<group>/<entity>`, `architecture/`).
4. Run the acceptance tests declared in `implementation/build-spec.md`.
5. Escalate failures back to Plan Mode; do not commit failed artefacts.

## 6. Incremental conventional commits

1. Stage **only** complete, validated artefacts (never secrets).
2. Use exactly one prefix per commit: `feat:`, `docs:`, `analysis:`, `arch:`.
3. Commit one logical artefact set per commit (incremental, reviewable).
4. Never run destructive git operations; never force-push protected branches.
5. C12 scans for secrets before committing.

## 7. End-to-end flow

```
Brief/Index ─► Plan Mode gate ─► TBS construction ─► RACI assignment
      ─► evidence capture (SEEN/INFERRED/UNKNOWN) ─► GATE
      ─► Code Mode dispatch ─► acceptance tests ─► incremental conventional commits ─► done
```
