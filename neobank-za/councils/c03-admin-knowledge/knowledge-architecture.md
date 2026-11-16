# C03 — Knowledge Architecture

- **Owner:** C03 Chief Librarian · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Related:** [`records-and-retention.md`](./records-and-retention.md)
- **Grounding:** `.stremiium/governance/workflow-routing.md` §5, `.stremiium/config/council-department-mapping.json`, `.stremiium/registry/agent-registry.json`

> This file defines **how program knowledge is structured**. It is deliberately prescriptive: consistency is what makes a large, multi-council workspace retrievable.

---

## 1. The UnConsolidated principle (primary rule)

> **Keep artifacts granular. Never merge prematurely.**

A program that consolidates early loses the ability to:
- attribute a claim to its owner and source,
- evolve one part without touching the whole,
- let a reader find the exact file they need,
- preserve observe / infer / unknown distinctions.

**Operational rules:**
1. **One concern per file.** If a file needs "and" in its title, split it.
2. **Merge only on SC ratification**, and only when two artifacts are provably redundant and their owners agree.
3. **Cross-link, don't copy.** Reference another file rather than duplicating its content (duplication is the enemy of truth).
4. **Preserve history.** Superseded material is *superseded*, not deleted (see retention).
5. **Flat over nested.** Prefer a flat, well-named file set within a council over deep nesting.

**Anti-patterns:**
- A single `everything.md` "master" document.
- Copying a table from another council "for convenience".
- Deleting an artifact because it is "old" (harvest it or archive it).

---

## 2. Workspace taxonomy

```text
/workspace/neobank-za/
├── PLAN.md                     # master plan (UnConsolidated)
├── README.md                   # master index (SC)
├── program/                    # governance, roadmaps, risk, delivery
├── research/                   # research packs (regulatory, competitors, landscape, tech-stack, market-data)
├── reverse-engineering/        # REA analysis, playbooks, custom-tools, targets
├── councils/                   # one folder per council (c01..c16)
│   └── cNN-<name>/             # council artifacts
├── architecture/               # system design, domain model, data, security, platform, integrations
├── skills/                     # reusable skills (SKILL.md convention)
├── workflows/                  # orchestrator workflows
├── templates/                  # reusable templates
└── artifacts/                  # delivery outputs
```

**Layering rule:** `research/` holds **evidence**; `architecture/` holds **design**; `councils/` holds **function/operating model**; `skills|workflows|templates/` hold **reusable machinery**. Do not mix evidence into design prose without a link.

---

## 3. Naming conventions

| Element | Convention | Example |
|---|---|---|
| Council folder | `cNN-<kebab-name>` | `c02-operations`, `c10-finance-cfo` |
| Council files | `kebab-case.md` | `operating-model.md` |
| Skill folder | `kebab-case/` with `SKILL.md` inside | `skills/sa-banking-domain/SKILL.md` |
| Template file | `kebab-case.md` | `templates/decision-record.md` |
| Research file | `kebab-case.md` | `research/regulatory/aml-fica.md` |
| Version header | every file ends its header block with `Version: x.y (UnConsolidated)` | — |
| Cross-link | relative markdown link | `../../research/regulatory/payments-nps.md` |

**Rules:**
- File names use **kebab-case**, lowercase, no spaces.
- Every substantive file opens with a **header block**: owner, version, date, parent, grounding.
- Every file that makes factual claims **cites a source or tags `[UNVERIFIED]`/`[UNKNOWN]`**.
- **Relative links** only (portable across the workspace).

---

## 4. ID scheme

The program uses the ratified Stremiium ID prefixes. **New files violating these are invalid** (`.stremiium/governance/workflow-routing.md` §5).

| Prefix | Entity | Plane | Authority |
|---|---|---|---|
| `SC` | Sparkling Curious (master orchestrator) | executive | top orchestration |
| `EXEC` | CEO-proxy governance node | executive | governance level |
| `Cnn` | Council captain `nn` (e.g. `C02`) | command | Tier-2 |
| `AGT-` | Agent (workforce) | workforce | Tier-3/4/5 |
| `SUB-` | Subagent (under a registered AGT) | workforce | leaf |
| `CRD-` | Coordinator (staff line) | staff | interception rights |
| `META-` | Meta-council (advisory) | advisory | consultative only |
| `SPEC` | Specification artefact | cross-cutting | design contract |

**Hierarchy (from `.stremiium/governance/workflow-routing.md` §1):**

```text
Stremiium
└── Sparkling Curious (SC-MASTER-001)
    ├── Meta-Councils   META-*   advisory only
    ├── Coordinator     CRD-*    cross-cutting gates
    └── Councils        C01–C16  command plane
        └── Departments cNN-*    workforce plane
            └── Agents  AGT-*
                └── Subagents SUB-*
```

> **Note on `SPEC` vs `SC`:** `SC` (Sparkling Curious) and `SPEC` (specification artefacts) are distinct prefixes and must not be confused in IDs.

---

## 5. Metadata & header block standard

Every substantive artifact begins with:

```markdown
# <Title>

- **Owner:** <council / role>
- **Version:** x.y (UnConsolidated) · **Date:** YYYY-MM-DD
- **Parent:** [<link>](...) · **Related:** [<link>](...)
- **Grounding:** <links to evidence>
```

This enables: attribution, staleness detection, cross-link graphs, and RAG-chunking that preserves context.

---

## 6. Evidence & confidence tagging

Every claim class (inherited from PLAN.md §0 and REA methodology `../../reverse-engineering/rea-analysis/methodology.md` §4):

| Tag | Meaning |
|---|---|
| **observed** | directly evidenced (a source, a file, a measured artifact) |
| **inferred** | a labelled derivation |
| **unknown** | not established — must remain explicit |
| `[ASSUMPTION]` | modelled/planning input |
| `[TARGET]` | internal objective |
| `[UNVERIFIED]` | external claim not yet corroborated |
| `[REG]`/`[STATUTE]`/`[REG-GUIDE]`/`[CONSULT]` | regulatory weight (see `../../research/regulatory/README.md`) |

**Rule:** a missing record is an **unknown**, not proof of absence.

---

## 7. Retrieval & memory hygiene

- **Flat-first structure** aids both humans and RAG retrieval.
- **Canonical definitions** live in one file; others link to it.
- **Stale-artifact flagging:** if `research/` is updated, dependent council files are flagged via `crd-knowledge-flow` (SESS `knowledge-bindings.jsonl`).
- **Learnings routing:** lessons captured to the `lessons-ledger` (SESS §9) rather than scattered in prose.

---

## 8. Cross-council linking

- Every council README lists a **file index** and **interlocks**.
- **UP**: link to the evidence you rely on (`research/…`).
- **ACROSS**: link to peer councils you interlock with.
- **DOWN**: link to templates/skills you use.

See `.stremiium/governance/state-architecture.md` §4: cross-ledger references use **ids**, never embedded copies — the same rule applies to knowledge files.

---

## 9. Open items / unknowns

- `[UNKNOWN]` Whether additional ID prefixes are needed for research/eval artifacts (would require SC ratification).
- `[ASSUMPTION]` Header block fields may be extended for machine indexing later.

---

## 10. Cross-links

- Retention → [`records-and-retention.md`](./records-and-retention.md)
- Templates → `../../templates/README.md`
- Routing → `../../workflows/agent-routing.md`
- Governance → `.stremiium/governance/workflow-routing.md`, `.stremiium/governance/state-architecture.md`
