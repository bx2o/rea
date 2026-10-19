# UnConsolidated — Atomised Knowledge Layer for the Stremiium Agent Operating System

**Program:** `SC-REA-NEOBANK-5.0`
**Owning council:** C03 Admin-Knowledge (`C03-chief-librarian`)
**Squad:** Knowledge-Architecture (Council C03 – Chief-Librarian)
**Status:** derived / additive — no `.stremiium/` file is modified by this folder
**Generated:** 2026-10-19

---

## 1. What "UnConsolidated" means

The Stremiium agent operating system already exists in a **consolidated** form under
`/workspace/.stremiium/`. "Consolidated" here is a *structural* property, not a quality
judgement:

- Knowledge is packed into **large monolithic prompt files** (e.g. the master orchestrator
  `sparkling-curious.agent.md` is a single ~3,000-line, 16-section document; each council
  captain is its own 16-section monolith).
- Every monolith repeats shared boilerplate (company context, archetypes, communication
  standards) so that it is *self-contained* and can be loaded whole at runtime.
- Cross-references between files are sparse or implicit; the reader must already know the
  organisational tree to navigate it.
- Because the files are large and overlapping, they are hard to **diff**, hard to **review
  line-by-line**, and hard to **maintain atomically** (a one-line policy change sits inside a
  multi-thousand-line prompt).

**Un-consolidation is the inverse operation.** It takes the same verified knowledge and
splits it into **atomic, richly detailed, independently readable documents**:

| Property | Consolidated (`.stremiium/`) | UnConsolidated (`/workspace/UnConsolidated/`) |
|---|---|---|
| Unit of change | Whole monolith | Single atomic section/document |
| Optimised for | Runtime loading (one file = whole context) | Reading, diffing, review, maintenance |
| Detail level | Sufficient for execution | Expanded — purpose, I/O, owner, evidence class, edge cases |
| Cross-references | Implicit / navigational | Explicit `path` + line-range back to the source of truth |
| Authority | **Canonical** | **Derived** (never authoritative on its own) |
| Regeneration | Source | Regenerable from source |

> **Canonical-source rule.** `.stremiium/` remains the canonical runtime source of truth.
> The UnConsolidated folder is a *derived view*. If the two disagree, `.stremiium/` wins and
> the UnConsolidated document must be regenerated. No agent should execute from
> `UnConsolidated/` in place of the consolidated prompt.

This mirrors the workspace philosophy recorded in `/workspace/.stremiium/README.md`:
*"Physical workspace evidence overrides stale task reports."* UnConsolidated documents cite
physical workspace evidence; they do not replace it.

---

## 2. Relationship to `.stremiium/` (verified topology)

The two planes defined by `/workspace/.stremiium/config/council-department-mapping.json`
(`"model": "two-plane-hierarchy"`) are the backbone of this folder:

| Plane | Root (verified to exist) | Role | UnConsolidated coverage |
|---|---|---|---|
| **command** | `.stremiium/agents/council-agents/` | strategy, approval, arbitration, escalation to SC | `01-organisation/` |
| **workforce** | `.stremiium/agents/department-agents/` | execution, specialist judgement, subagent fan-out | `01-organisation/` (sub-squads) |
| **staff_line** | `.stremiium/agents/coordinators/` | cross-cutting enforcement (workflow, git-safety, security sentinel, cost governor) | `02-coordinators/` |
| **meta_councils** | `.stremiium/agents/meta-councils/` | cross-org advisory bodies; no line authority | `00-master-orchestrator/` (referenced) |
| **executive** | `.stremiium/agents/executive/` | CEO-proxy governance prompt | `00-master-orchestrator/` (referenced) |

---

## 3. Naming conventions

1. **Folder prefix = reading order.** Top-level folders are numbered `00-` … `05-` so the
   folder itself reads as a table of contents.
2. **File suffix = `-unconsolidated.md`.** Every atomised rendering of a consolidated source
   carries the `-unconsolidated.md` suffix, except the organisation tier files, which are
   named by tier (`tier-N-<name>-councils.md`) because they aggregate many captains rather
   than mirror one file.
3. **Stable anchors.** Section headings use `##` for the 16 master-orchestrator sections and
   `###` for their atoms, so anchors can be referenced by name (`#section-3-2-operational-rules`).
4. **Cross-reference token.** Inline references use the form
   `[`path`:Lstart-Lend]` — e.g. ``[`.stremiium/agents/sparkling-curious.agent.md`:261-321]``.
   The path is always relative to `/workspace/`, always real, and always points at the
   consolidated source.
5. **Evidence tags.** Claims are tagged `[SEEN]`, `[INFERRED]`, or `[UNKNOWN]` inline where the
   provenance is not obvious. See §5 and `05-evidence/`.

---

## 4. The 16-section structure

The consolidated prompts are written in a **16-section Unconsolidated Format** (the master
orchestrator literally labels itself "*Complete 16-Section Unconsolidated Format for Stremiium
Ecosystem*" at [`.stremiium/agents/sparkling-curious.agent.md`:8-16]). Section numbering is
fixed across the master orchestrator and every council captain so that a section number means
the same thing everywhere:

| § | Title | What it holds |
|---|---|---|
| 0 | Company / Domain Context | company facts, services, stack, regulatory frame |
| 1 | Agent Identity & Role | id, mission, archetype, responsibilities, TBS |
| 2 | Context Setup & Foundational Knowledge | problem statement, KPIs, 16-council tree, matrices |
| 3 | Detailed Operational Rules & Capabilities | DOs/DON'Ts, SOPs, decision frameworks, exception handling |
| 4 | Comprehensive Knowledge Base | domain FAQ library, skill index, references |
| 5 | Communication & Collaboration Setup | protocols, SLA matrix, knowledge-sharing |
| 6 | Engineering & Implementation Guidelines | philosophy, stack standard, implementation standards |
| 7 | Product & System Requirements | product-suite matrix, integration requirements |
| 8 | Architectural Frameworks | system architecture, security architecture, scalability |
| 9 | User Experience & Workflow Design | UX principles, key workflows, error recovery |
| 10 | Tools, Frameworks & Technology Stack | dev / blockchain / AI-ML tooling |
| 11 | Validation & Quality Assurance | test strategy, quality gates, code review standards |
| 12 | Advanced Decision-Making Frameworks | decision models, critical-thinking protocols, uncertainty |
| 13 | SubAgent Specialization & Delegation | subagent architecture, delegation patterns |
| 14 | Implementation Guidelines & Best Practices | planning, best practice, success measurement |
| 15 | RAG Structure & Knowledge Retrieval | retrieval setup, context management, retention |
| 16 | Suggestive Improvements & Optimizations | continuous improvement, innovation, automation |

The UnConsolidated rendering of the master orchestrator
(`00-master-orchestrator/sparkling-curious-unconsolidated.md`) expands each of these into
sub-atoms with an explicit **purpose / inputs / outputs / owning council / evidence class /
cross-reference** record.

---

## 5. Evidence discipline (non-negotiable)

Un-consolidation is an act of **re-writing**, so it is an opportunity to fabricate. It is
forbidden. Every UnConsolidated document obeys the same four-bucket evidentiary model that the
Program Brief mandates for reverse-engineering dossiers
([`/workspace/task/PROGRAM_BRIEF.md`:119-135]):

1. **Seen (Evidence)** — verifiable in an artefact or public source we actually hold.
2. **Inferred (Synthesised)** — a logical model derived from Seen evidence.
3. **Limitations** — known boundaries (obfuscation, stripped symbols, missing artefacts).
4. **Unknowns** — unresolved questions requiring a named extraction step.

The full protocol is in `05-evidence/evidence-protocol-unconsolidated.md`.

**Honesty note carried forward from the Program Brief:** REA (`morluto/rea`) is not installed
in this workspace and no APK/ASAR artefacts have been supplied. Therefore, in every document
here, anything that would depend on decompiled artefacts is tagged `[INFERRED]` or `[UNKNOWN]`
with the extraction step named — never `[SEEN]`.

---

## 6. How to regenerate

Un-consolidation is a deterministic projection of `.stremiium/`, so it is regenerable:

1. **Re-read the sources.** At minimum:
   `.stremiium/agents/sparkling-curious.agent.md`; `.stremiium/agents/council-agents/C*.agent.md`;
   `.stremiium/config/council-department-mapping.json`;
   `.stremiium/config/councils/COUNCIL_REGISTRY.json` and `C*.config.json`;
   `.stremiium/registry/master-registry.json`;
   `.stremiium/execution/EXECUTION_STATUS.md` and `t0-t80-ledger.json`.
2. **Re-derive the aggregates** for `03-registry/` with `jq`:
   ```bash
   jq -r '.records | group_by(.council) | map({c:(.[0].council), n:length}) | .[] | "\(.c) \(.n)"' \
      /workspace/.stremiium/registry/master-registry.json
   ```
3. **Diff against the last UnConsolidated run** (line-range anchors make this mechanical).
4. **Re-tag evidence classes** — anything that was `[UNKNOWN]` because an artefact was absent
   must be re-evaluated once the artefact exists.
5. **Never edit in both directions.** Fix the consolidated source; regenerate the derived view.

---

## 7. Full index of this folder

| File | Purpose | Primary source(s) in `.stremiium/` |
|---|---|---|
| `README.md` | This document — format definition, conventions, index | `.stremiium/README.md`, `task/PROGRAM_BRIEF.md` |
| `00-master-orchestrator/sparkling-curious-unconsolidated.md` | Section-by-section expansion of the master orchestrator (S0–S16), plus arbitration protocol, escalation ladder, anti-sycophancy/evidence rules | `.stremiium/agents/sparkling-curious.agent.md` |
| `01-organisation/README.md` | Index + tier map for the organogram | `.stremiium/config/council-department-mapping.json` |
| `01-organisation/tier-1-strategic-governance-councils.md` | C01–C10 detail | `.stremiium/agents/council-agents/C01…C10`, `config/councils/*` |
| `01-organisation/tier-2-technical-specialist-councils.md` | C11–C13 detail | `.stremiium/agents/council-agents/C11…C13` |
| `01-organisation/tier-3-client-product-councils.md` | C14–C16 detail | `.stremiium/agents/council-agents/C14…C16` |
| `02-coordinators/coordinators-unconsolidated.md` | 16 staff-line coordinator roles | `.stremiium/config/council-department-mapping.json`, `.stremiium/agents/coordinators/` |
| `03-registry/master-registry-unconsolidated.md` | Registry schema + aggregate distribution (no 324-record dump) | `.stremiium/registry/master-registry.json`, `registry/schema/` |
| `04-execution/execution-model-unconsolidated.md` | T0–T80 prompt ledger + status vocabulary as governance | `.stremiium/execution/EXECUTION_STATUS.md`, `t0-t80-ledger.json` |
| `05-evidence/evidence-protocol-unconsolidated.md` | Four-bucket evidence protocol + ledger JSON schema | `task/PROGRAM_BRIEF.md` §5–6 |

**Index integrity note.** The Programme Brief that commissioned this folder states "all 10
files"; this folder contains **10 files** (the nine content documents enumerated above plus the
`01-organisation/README.md` tier index). The tier index was added because the organogram spans
three tier files and needs a single navigational entry point.

---

## 8. Reading order

```
README.md  →  00-master-orchestrator  →  01-organisation (tier 1 → 2 → 3)
           →  02-coordinators  →  03-registry  →  04-execution  →  05-evidence
```

- **New to the system?** Read `00-` then `01-`.
- **Maintaining a prompt?** Read `02-` then `03-`.
- **Auditing a claim?** Read `05-` first.
- **Tracking a task?** Read `04-`.
