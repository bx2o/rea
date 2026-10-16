# C03 — Admin / Knowledge Council

- **Council ID:** C03 (department path `c03-admin-knowledge`)
- **Captain:** C03 Chief Librarian (`C03-chief-librarian.agent.md`) — per `.stremiium/config/council-department-mapping.json`
- **Staff-line partner:** `crd-knowledge-flow` (learnings routing + memory hygiene), `crd-data-governance` (PI inventory) per `.stremiium/governance/state-architecture.md` §9
- **Program:** Project Umoya — NeoBank ZA (codename only)
- **Status:** Draft v1.0 (UnConsolidated) — 2026-10-16

> **Evidence discipline.** C03 enforces the program's core epistemic rules: observe vs infer vs unknown; physical workspace evidence overrides stale reports; no secrets/PII in artifacts (`.stremiium/README.md`, PLAN.md §0).

---

## 1. Purpose

C03 is the **memory of the program**. It owns how knowledge is structured, named, versioned, retained and retrieved — so that every other council can build on prior work instead of re-deriving it, and so that the bank can prove, to an auditor or regulator, *what it knew and when*.

Two ideas define this council:

1. **The UnConsolidated principle** — keep artifacts granular; **never merge prematurely**. A file that tries to be everything becomes nothing. See [`knowledge-architecture.md`](./knowledge-architecture.md).
2. **Records as evidence** — in a regulated bank, documents are not just knowledge; they are **retention-governed records** subject to FICA/POPIA/Companies Act obligations. See [`records-and-retention.md`](./records-and-retention.md).

---

## 2. Functions

| Function | Owns |
|---|---|
| Knowledge architecture | folder taxonomy, naming conventions, ID scheme |
| The UnConsolidated principle | anti-merge discipline; granularity rules |
| Records management | retention schedule, archival, disposal |
| Metadata & cataloguing | indexes, cross-links, version headers |
| Retrieval & memory hygiene | RAG-friendly structure, stale-artifact flagging |
| Evidence library stewardship | with `crd-research-ops` (evidence index, contradiction queue) |

**Out of scope:** producing domain content (owned by each council), legal interpretation of retention law (C01), systems engineering (C06/C11).

---

## 3. Governance alignment

| Reference | Relevance |
|---|---|
| `.stremiium/governance/state-architecture.md` (SESS) | state is derived, appended, never mutated; ledgers named; `crd-knowledge-flow` owns knowledge-bindings/lessons ledgers |
| `.stremiium/governance/workflow-routing.md` §5 | **Vocabulary Law** — "Council" is canonical; new files violating ID prefixes are invalid |
| `.stremiium/registry/agent-registry.json`, `master-registry.json` | ID scheme source of truth |
| PLAN.md §0 | governor documents + evidence rules |

---

## 4. File index

| File | Contents |
|---|---|
| [`README.md`](./README.md) | This overview. |
| [`knowledge-architecture.md`](./knowledge-architecture.md) | Program knowledge structure, UnConsolidated principle, naming conventions, ID scheme (AGT-/SUB-/CRD-/META-/EXEC/Cnn/SPEC/SC). |
| [`records-and-retention.md`](./records-and-retention.md) | Records management, POPIA/FICA-aligned retention schedule, archival. |

---

## 5. ID scheme (quick reference — detail in knowledge-architecture.md)

| Prefix | Meaning | Plane |
|---|---|---|
| `SC` | Sparkling Curious (master orchestrator) | executive |
| `EXEC` | CEO-proxy governance node | executive |
| `Cnn` | Council `nn` (e.g. `C02`, `C13`) | command |
| `AGT-` | Agent (workforce) | workforce |
| `SUB-` | Subagent (under a registered AGT) | workforce |
| `CRD-` | Coordinator (staff line) | staff |
| `META-` | Meta-council (advisory) | advisory |
| `SPEC` | Specification artefact | cross-cutting |
| `SC` | (as above) | — |

Source: `.stremiium/governance/workflow-routing.md` §5 and `.stremiium/config/council-department-mapping.json`.

---

## 6. Open items / unknowns

- `[UNKNOWN]` Exact retention periods for some FICA records — confirm against the consolidated FIC Act (`../../research/regulatory/aml-fica.md` §8).
- `[ASSUMPTION]` ID-scheme extensions beyond the ratified prefixes require SC ratification.

_Codename `Project Umoya` is a working label only._
