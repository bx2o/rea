# Artifacts — NeoBank ZA (`Project Umoya`)

- **Program:** Project Umoya — NeoBank ZA (codename only, not a brand decision)
- **Owner:** Sparkling Curious (SC-MASTER-001); maintained by C03 Admin-Knowledge
- **Status:** Draft v1.0 (UnConsolidated) — 2026-10-16

> **Evidence discipline (inherited from PLAN.md §0).** Artifacts in this folder are **records of work performed**, not plan promises. Where a record summarises a figure, the figure keeps its origin tag (`[ASSUMPTION]`, `[TARGET]`, `[UNVERIFIED]`, `[FACT]`). No secrets, credentials or live PII belong in any artifact here.

Back-links: [program plan](../PLAN.md) · [councils index](../councils/README.md) · [research](../research/) · [architecture](../architecture/).

---

## 1. Purpose

`artifacts/` holds the **execution evidence trail** of the programme: the tangible outputs that prove workstreams ran, what they produced, and where the products live. It is the bridge between the *plan* ([`PLAN.md`](../PLAN.md)) and the *deliverables* (the populated trees under `research/`, `architecture/`, `councils/`, etc.).

This folder answers the governance question: **"Show me the evidence that this work happened."**

---

## 2. The governing rule

The programme inherits the Stremiium rule:

> **"Every prompt execution has a traceable entry."**

This rule is stated in the REA verification record (see [`../reverse-engineering/rea-analysis/setup-and-verification.md`](../reverse-engineering/rea-analysis/setup-and-verification.md) §9) and in the governor documents ([`PLAN.md`](../PLAN.md) §0). Concretely, it means:

- Every substantive task leaves behind an **artifact** (a file, a report, a ledger row).
- Every artifact is **discoverable** — linked from the relevant council or workstream, and indexed in the [execution ledger](./execution-ledger.md).
- Every claim in an artifact is **attributable** — sourced, or explicitly marked `[UNVERIFIED]`/`[UNKNOWN]`.
- Observe vs. infer vs. unknown is **preserved** ([`PLAN.md`](../PLAN.md) §3).

---

## 3. What goes in `artifacts/`

| Artifact type | What it is | Example |
|---|---|---|
| **Execution ledger** | The master index of workstreams, tasks and produced artifacts | [`execution-ledger.md`](./execution-ledger.md) |
| **Run reports** | Point-in-time records of an execution (what ran, commands, results) | REA run summaries |
| **Evidence exports** | Raw or distilled outputs retained as proof (captures, matrices, scans) | Regulatory research packs (referenced, not duplicated here) |
| **Decision records** | Formalised decisions with rationale and status | Pointers to [`../program/governance/decision-log.md`](../program/governance/decision-log.md) (D-001…D-005) |
| **Verification records** | Setup/compliance verification with pass/fail evidence | REA setup-and-verification |

> **Boundary rule.** `artifacts/` holds **records and indexes**, not the deliverables themselves. The deliverables live in their topic trees (e.g. the regulatory pack lives in `research/regulatory/`); the artifact records *that it exists, when, and by whom*, and links to it. We link rather than duplicate, to avoid drift.

---

## 4. Evidence discipline for artifacts

1. **Source or mark it.** Every externally-asserted number carries a source (`[S#]`) or an `[UNVERIFIED]` tag.
2. **Separate statute from guidance from design.** `[STATUTE]` / `[REG]` ≠ `[REG-GUIDE]` ≠ `[DESIGN]`.
3. **Distinguish observe/infer/unknown.** Never present an inference as an observation.
4. **No secrets, no live PII** (Stremiium gate G2).
5. **Immutable once recorded.** Corrections are **additive** (a new row or amendment note), never a silent edit of history — mirroring the ledger's compensating-entry principle.

---

## 5. File index

| File | Contents |
|---|---|
| [`README.md`](./README.md) | This overview + the traceable-entry rule. |
| [`execution-ledger.md`](./execution-ledger.md) | Master execution ledger: Date · Workstream · Council · Task · Artifact · Status. |

---

## 6. Interlocks

| Interlock | Contract |
|---|---|
| [PLAN.md](../PLAN.md) §2 | Workstreams (W0–W11) and their deliverable roots — the source of the ledger rows. |
| [program/governance/decision-log.md](../program/governance/decision-log.md) | Decision records referenced by artifacts. |
| [councils/](../councils/) | Each council's own artifacts are indexed from its README. |
| [C03 Admin-Knowledge](../councils/c03-admin-knowledge/README.md) | Records retention and documentation standards. |
| Escalation | Captain → SC → Board; Critical 1h · High 4h · Medium 24h · Low 72h (PLAN.md §5). |

---

## 7. Open items / unknowns

- `[ASSUMPTION]` The ledger currently reflects the **initial W1–W10 execution wave**; later waves append rows.
- `[UNKNOWN]` Retention period for raw evidence exports is governed by [records-and-retention](../councils/c03-admin-knowledge/records-and-retention.md).
- `[UNKNOWN]` Whether a machine-readable ledger (JSON/CSV) export is needed for tooling.

_Codename `Project Umoya` is a working label only._
