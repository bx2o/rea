# Execution Model — UnConsolidated

**Derived from:** `/workspace/.stremiium/execution/EXECUTION_STATUS.md`, `/workspace/.stremiium/execution/t0-t80-ledger.json`
**Related artefacts:** `.stremiium/config/agents/prompt-execution-ledger.json`, `prompt-execution-ledger-t10-t19.json` … `-t50-t59.json`, `prompt-ownership-map.json`, `prompt-migration-manifest.json`, `prompt-remediation-plan.json`, `production-readiness-gates.json`
**Canonical status:** the two `.stremiium/execution/` files are authoritative; this is a derived view.

> This document turns the execution status vocabulary and the T0–T80 ledger into an explicit
> **execution-governance model**: what each status means, how a task enters and leaves it, what
> evidence is required, and which gates require human authorization.

---

## 1. Scope and shape (verified)

| Fact | Value | Source |
|---|---|---|
| Prompt range | **T0 … T80** (81 prompts) | `t0-t80-ledger.json`:6-88 |
| Ledger version | `1.0.0` | `t0-t80-ledger.json`:2 |
| Ledger generated | `2026-09-07` | `:3` |
| `source_workspace` | `F:/win11/stremiium-` (Windows authoring host) | `:4` |
| `canonical_workspace` | `.stremiium` | `:5` |
| Current run statement | "T0–T59: re-execution in progress. T60–T80: not started." | `EXECUTION_STATUS.md`:17-18 |

**A note on two different "T" systems — do not conflate them:**

- **T0–T80** = the *execution ledger* prompts (this document).
- **T1–T8** = the *Task Breakdown Structure* categories in the master orchestrator
  (`sparkling-curious.agent.md`:250-257; see `../00-master-orchestrator/`). Same letter, different axis.

---

## 2. Status vocabulary (5 states)

From `EXECUTION_STATUS.md`:9-13, with entry/exit criteria and evidence rules synthesised below
(the definitions are SEEN; entry/exit criteria are `[INFERRED]` governance):

### 2.1 `not-started`
- **Definition (SEEN):** no current-workspace execution evidence.
- **Entry criteria:** prompt is in range and queued; no evidence file exists.
- **Exit criteria:** first evidence artefact produced → `in-progress`.
- **Evidence required to leave:** a produced artefact (inventory, draft, or run report).
- **Failure mode:** queued forever with no owner (registry `owner: null` pattern, §5).

### 2.2 `in-progress`
- **Definition (SEEN):** evidence collection or implementation underway.
- **Entry criteria:** at least one artefact exists; work is active.
- **Exit criteria:** required action completes with evidence → `executed`; or a blocker appears → `blocked`;
  or a contract exists but service is incomplete → `partial`.
- **Evidence required:** partial artefacts + a run report in the prompt's ledger entry.

### 2.3 `executed`
- **Definition (SEEN):** required investigation, validation, or implementation action completed **with evidence**.
- **Entry criteria:** all in-scope actions done **and** evidence recorded.
- **Exit criteria:** terminal, unless the prompt is re-opened after a workspace change.
- **Evidence required (non-negotiable):** a traceable entry in `execution/` (workspace rule:
  *"Every prompt execution has a traceable entry in `execution/`"*, `.stremiium/README.md`:10).
- **Guard:** "executed" may never be claimed from a *prior task claim* — execution starts from the
  current workspace (`EXECUTION_STATUS.md`:5).

### 2.4 `partial`
- **Definition (SEEN):** a contract/design exists, but required service, migration, external evidence,
  or activation is incomplete.
- **Entry criteria:** design/contract artefact exists; service/migration/external/activation missing.
- **Exit criteria:** missing service/migration/evidence supplied → `executed`.
- **Evidence required:** the contract artefact **plus** an explicit list of what is outstanding.
- **Why it matters:** `partial` is where most prompt-migration work sits (contracts exist in
  `config/agents/*.schema.json` and `contracts/`), so `partial` must be treated as *honest, not failing*.

### 2.5 `blocked`
- **Definition (SEEN):** work cannot safely continue because a required source, decision, or
  authorization is absent.
- **Entry criteria:** a hard dependency is missing (source, decision, authorization).
- **Exit criteria:** the dependency is supplied; then → `in-progress`.
- **Evidence required:** a named blocker and the exact dependency that would unblock it.
- **Link:** most `blocked` states are activation gates (§4).

---

## 3. The T0–T80 ledger

`t0-t80-ledger.json` is a flat array of 81 `{id, status}` entries. Verified current values:

| Range | Ledger status | `EXECUTION_STATUS.md` narrative | Reconciliation |
|---|---|---|---|
| T0 | `in-progress` | covered by "T0–T59 re-execution" | consistent |
| T1–T59 | `not-started` | "T0–T59: re-execution in progress" | **contradiction** — the narrative claims re-execution in progress, the ledger shows only T0 active |
| T60–T80 | `not-started` | "not started; queued" | consistent |

**Contradiction flag (SEEN).** The ledger and the status narrative disagree for T1–T59. Per the
workspace rule "physical workspace evidence overrides stale task reports", the **ledger is the
better evidence**; the narrative is aspirational/stale. `[SEEN]`. Also note
`EXECUTION_STATUS.md`:19 states "Prompt count: unresolved pending fresh census" — the authoritative
range (81 prompts, T0–T80) is confirmed by the ledger, so the *count* is in fact resolvable.

**Related per-range ledgers (SEEN to exist, in `.stremiium/config/agents/`):**
`prompt-execution-ledger.json`, `prompt-execution-ledger-t10-t19.json`, `…-t20-t29.json`,
`…-t30-t39.json`, `…-t40-t49.json`, `…-t50-t59.json`. These granular ledgers are the per-prompt
evidence trail the roll-up `t0-t80-ledger.json` summarises.

---

## 4. Non-negotiable activation gates

`EXECUTION_STATUS.md`:21-23 defines gates that **always require human authorization**, regardless of
prompt status. These are `blocked`-class by default until an authorizer acts.

| Gate | Examples | Why gated |
|---|---|---|
| Irreversible actions | force-push, history rewrite, destructive schema change | cannot be undone |
| Regulated submissions | FSCA/FICA/SARS/NGB filings | legal liability |
| External communications | public marketing, regulator correspondence | brand/legal exposure |
| Financial transactions | real money movement, treasury ops | direct loss |
| Production deployment | mainnet contracts, live banking rails | customer impact |
| Destructive filesystem operations | recursive delete, volume wipe | data loss |
| Use of credentials | secrets, keys, tokens | security |

**Crucial scope note (SEEN):** these gates **do not prevent** research, inventory, drafting, testing,
or non-destructive implementation (`EXECUTION_STATUS.md`:23). In other words, a prompt can advance
freely through `not-started → in-progress → executed` for anything non-gated; only the *gated step*
within a prompt becomes `blocked` pending authorization. This keeps the ledger moving without
compromising safety.

**Interaction with the staff line:** the git-safety and secrets portions of these gates are enforced
operationally by `crd-git-state-safeguard` and `crd-security-compliance-sentinel`
(see `../02-coordinators/`); the authorization itself is human.

---

## 5. Evidence rules for execution

1. **Traceability.** Every execution has a `execution/` entry (workspace rule).
2. **Current-workspace primacy.** No "executed" from a prior claim; start from the workspace
   (`EXECUTION_STATUS.md`:5).
3. **No promotion without evidence.** Moving to `executed` requires the artefact, not the assertion.
4. **Blockers are named.** `blocked` must state the exact missing source/decision/authorization.
5. **Contradictions are logged, not smoothed.** Ledger-vs-narrative conflicts (T1–T59) are recorded
   as evidence (§3) and routed via `crd-research-ops`' contradiction queue.
6. **Gates are per-step, not per-prompt.** A prompt is not wholly `blocked` because one step is gated.

---

## 6. Status transition model

```
                       (queued)
                          │
                    not-started
                          │ first artefact
                          ▼
                    in-progress ──────────────► blocked  (missing source/decision/authz)
                       │     ▲                      │
            action done│     │ dependency supplied  │
                       ▼     └──────────────────────┘
                    executed
                       ▲
        contract only  │  missing service/migration/external/activation
                    partial ──────────────────────────────► executed
```

- `executed` is the only terminal happy state; `blocked` and `partial` are recoverable.
- The **activation gates** (§4) are the usual cause of `blocked`.
- The **granular per-range ledgers** are where the evidence trail lives; the roll-up answers "how far along is the programme" at a glance.

---

## 7. Open items requiring a decision

| ID | Item | Class |
|---|---|---|
| E-1 | Reconcile T1–T59: ledger says `not-started`, narrative says "re-execution in progress". | SEEN contradiction |
| E-2 | "Prompt count: unresolved" — actually resolvable (81, T0–T80) from the ledger. | SEEN |
| E-3 | `source_workspace` is a Windows path (`F:/win11/stremiium-`); confirm the canonical workspace is the only live source. | SEEN |
| E-4 | No owner field exists per prompt in the ledger → prompts can stall without accountability. | INFERRED |
