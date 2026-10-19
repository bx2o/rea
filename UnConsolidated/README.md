# UnConsolidated — Atomised Knowledge Layer for the Stremiium Agent Operating System

**Program:** `SC-REA-NEOBANK-5.0`
**Master prompt generation:** **v5.0** — *Stremiium NeoBank & Reverse Engineering Protocol*
(operational horizon 2026/2027 production grade)
**Owning council:** C03 Admin-Knowledge (`C03-chief-librarian`)
**Squad:** Knowledge-Architecture (Council C03 – Chief-Librarian)
**Status:** derived / additive — no `.stremiium/` file is modified by this folder
**Generated:** 2026-10-19 · **Revised:** 2026-10-19 (v5.0 enrichment pass)

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

## 2. Sources — now dual-generation (v4.0 consolidated + v5.0 master prompt)

As of the v5.0 enrichment pass this folder draws on **two held source artefacts**:

| Source | Generation | What it contributes |
|---|---|---|
| `.stremiium/agents/sparkling-curious.agent.md` (+ council captains, configs, registries) | **v4.0** — "Complete 16-Section Unconsolidated Format" | Verified on-disk organisational reality: two-plane hierarchy, 16 captains, coordinators, 324-record registry, T0–T80 execution ledger |
| **SPARKLING CURIOUS Master Orchestrator System Prompt v5.0** ("Stremiium NeoBank & Reverse Engineering Protocol") | **v5.0** — supplied by the Executive Directive | Forward-looking program definition: REA (`morluto/rea`) engine architecture, DeepSeek V4.1 Flash Low-Mode swarm spawning, Two-Phase Plan→Code engine, **17 target dossiers** (SA Big Four, challengers, CASPs, global benchmarks, Web3 competitors), council dispatch prompt arsenal, Stremiium NeoBank target stack, `$STM` tokenomics, SA regulatory protocols, behavioral rewards engine, and the **master TBS task index T1.0–T8.0** |

**Reconciliation rule.** v5.0 is the *program intent*; v4.0 `.stremiium/` is the *installed
reality*. Where they diverge (e.g. v5.0 council rosters declare squad sizes that the registry
does not corroborate; v5.0's appendix claims `T1.0 REA Setup = COMPLETED` while REA is not
installed in this workspace), both statements are recorded and the divergence is **logged as a
contradiction, never silently harmonised** (see `05-evidence/`, rules A-7 and §6).

**Evidence convention for v5.0-derived content.** Claims tagged `[SEEN — v5.0 §x]` mean *"the
v5.0 prompt declares this"*. The prompt is a held artefact, so the declaration is verifiable;
the underlying real-world claim (e.g. a competitor's fee schedule) is **not** independently
verified and inherits `[INFERRED]`/`[UNKNOWN]` per the evidence protocol.

---

## 3. Relationship to `.stremiium/` (verified topology)

The two planes defined by `/workspace/.stremiium/config/council-department-mapping.json`
(`"model": "two-plane-hierarchy"`) are the backbone of this folder:

| Plane | Root (verified to exist) | Role | UnConsolidated coverage |
|---|---|---|---|
| **command** | `.stremiium/agents/council-agents/` | strategy, approval, arbitration, escalation to SC | `01-organisation/` |
| **workforce** | `.stremiium/agents/department-agents/` | execution, specialist judgement, subagent fan-out | `01-organisation/` (sub-squads) |
| **staff_line** | `.stremiium/agents/coordinators/` | cross-cutting enforcement (workflow, git-safety, security sentinel, cost governor) | `02-coordinators/` |
| **meta_councils** | `.stremiium/agents/meta-councils/` | cross-org advisory bodies; no line authority | `00-master-orchestrator/` (referenced) |
| **executive** | `.stremiium/agents/executive/` | CEO-proxy governance prompt | `00-master-orchestrator/` (referenced) |

**v5.0 mapping of the same tree.** v5.0 re-expresses the organisation as three tiers
(Tier 1 Strategy & Governance C01–C10 · Tier 2 Tech & Engineering C11–C13 · Tier 3 Client &
Product C14–C16) feeding the **REA Multi-Modal Reverse Engineering Core** and the **DeepSeek
V4.1 Flash Low-Mode swarm**. This is a different *view* of the same 16 councils, not a new
organisation — the tier decomposition is expanded in `01-organisation/`.

---

## 4. Naming conventions

1. **Folder prefix = reading order.** Top-level folders are numbered `00-` … `05-` so the
   folder itself reads as a table of contents.
2. **File suffix = `-unconsolidated.md`.** Every atomised rendering of a consolidated source
   carries the `-unconsolidated.md` suffix, except the organisation tier files, which are
   named by tier (`tier-N-<name>-councils.md`) because they aggregate many captains rather
   than mirror one file.
3. **Stable anchors.** Section headings use `##` for major sections and `###` for their
   atoms, so anchors can be referenced by name.
4. **Cross-reference token.** Inline references use the form
   `[`path`:Lstart-Lend]` — e.g. ``[`.stremiium/agents/sparkling-curious.agent.md`:261-321]``.
   The path is always relative to `/workspace/`, always real, and always points at the
   consolidated source. v5.0 prompt references use the short form `[v5.0 §x.y]`.
5. **Evidence tags.** Claims are tagged `[SEEN]`, `[INFERRED]`, `[LIMITATION]`, or `[UNKNOWN]`
   inline where the provenance is not obvious. See §6 and `05-evidence/`.

---

## 5. The 16-section structure (v4.0) and the v5.0 section map

The v4.0 consolidated prompts are written in a **16-section Unconsolidated Format**. Section
numbering is fixed across the master orchestrator and every council captain so that a section
number means the same thing everywhere:

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

**v5.0 section map (0–16 + appendix), now cross-walked into this folder:**

| v5.0 § | Title | Rendered in |
|---|---|---|
| 0 | Stremiium Company Foundation & SA NeoBank Directive | `00-master-orchestrator/` (§0 atoms) |
| 1 | Agent Identity, Persona & Master Orchestrator Role | `00-master-orchestrator/` (§1) |
| 2 | Context Setup, Organisational Hierarchy & 16 Councils | `01-organisation/` |
| 3 | REA Architecture, Capabilities & Custom Tool Engine | `00-master-orchestrator/` (new §20) + `05-evidence/` |
| 4 | DeepSeek V4.1 Flash Low-Mode Orchestration & Spawning | `00-master-orchestrator/` (new §21) |
| 5 | Two-Phase Operational System (Plan ➔ Code) | `04-execution/` (new §8) |
| 6 | TBS & Folder Architecture Protocol | `04-execution/` (new §9) |
| 7 | Reverse Engineering Target Dossiers (17 entities) | `00-master-orchestrator/` (new §22) |
| 8 | Cross-Functional RE Prompt Arsenal (16 councils) | `01-organisation/` tier files (dispatch directives) |
| 9 | Engineering, Technical Stack & System Architecture | `00-master-orchestrator/` (new §23) |
| 10 | Financial, Banking & Economic Modelling | `00-master-orchestrator/` (new §24) |
| 11 | Legal, Regulatory & Compliance Protocols (SA) | `01-organisation/tier-1` (C01) + `05-evidence/` |
| 12 | UX, Behavioral Gamification & CRM Reverse Engineering | `00-master-orchestrator/` (new §25) |
| 13 | Subagent Delegation, Conflict Arbitration & Co-Pilot | `00-master-orchestrator/` (§17) + `02-coordinators/` |
| 14 | Artifact System, Memory Retention & Learning | `03-registry/` + `02-coordinators/` (knowledge-flow) |
| 15 | RAG Structure, Knowledge Retrieval & Evidence Mgmt | `05-evidence/` (audit-trace template) |
| 16 | Continuous Improvement, Gap Analysis & Launch Blueprint | `04-execution/` (launch milestones) |
| Appendix | Master TBS Task Index T1.0–T8.0 | `04-execution/` (new §9) |

---

## 6. Evidence discipline (non-negotiable)

Un-consolidation is an act of **re-writing**, so it is an opportunity to fabricate. It is
forbidden. Every UnConsolidated document obeys the same four-bucket evidentiary model that the
Program Brief mandates for reverse-engineering dossiers
([`/workspace/task/PROGRAM_BRIEF.md`:119-135]) and that v5.0 §3.2 re-states as the **Four
Evidentiary Outputs** (Evidence/Seen · Recovered Graph/Synthesised · Limitations · Unknowns):

1. **Seen (Evidence)** — verifiable in an artefact or public source we actually hold.
2. **Inferred (Synthesised)** — a logical model derived from Seen evidence.
3. **Limitations** — known boundaries (obfuscation, stripped symbols, missing artefacts).
4. **Unknowns** — unresolved questions requiring a named extraction step.

The full protocol, the evidence-ledger JSON schema, and the v5.0 **Evidentiary Audit Trace**
template are in `05-evidence/evidence-protocol-unconsolidated.md`.

**Honesty note carried forward (and re-confirmed against v5.0):** REA (`morluto/rea`) is not
installed in this workspace and no APK/ASAR artefacts have been supplied. The v5.0 appendix
marks `T1.0 Environment & REA Setup` as "COMPLETED" — this is a **declared claim contradicted
by physical workspace evidence** and is logged as such (`05-evidence/` §6, contradiction C-v5-1).
Therefore, in every document here, anything that would depend on decompiled artefacts is
tagged `[INFERRED]` or `[UNKNOWN]` with the extraction step named — never `[SEEN]`.

---

## 7. How to regenerate

Un-consolidation is a deterministic projection of its sources, so it is regenerable:

1. **Re-read the v4.0 sources.** At minimum:
   `.stremiium/agents/sparkling-curious.agent.md`; `.stremiium/agents/council-agents/C*.agent.md`;
   `.stremiium/config/council-department-mapping.json`;
   `.stremiium/config/councils/COUNCIL_REGISTRY.json` and `C*.config.json`;
   `.stremiium/registry/master-registry.json`;
   `.stremiium/execution/EXECUTION_STATUS.md` and `t0-t80-ledger.json`.
2. **Re-read the v5.0 master prompt** (held by the Executive Directive) and re-apply the
   section cross-walk in §5 above.
3. **Re-derive the aggregates** for `03-registry/` with `jq`:
   ```bash
   jq -r '.records | group_by(.council) | map({c:(.[0].council), n:length}) | .[] | "\(.c) \(.n)"' \
      /workspace/.stremiium/registry/master-registry.json
   ```
4. **Diff against the last UnConsolidated run** (line-range anchors make this mechanical).
5. **Re-tag evidence classes** — anything that was `[UNKNOWN]` because an artefact was absent
   must be re-evaluated once the artefact exists (e.g. once REA is genuinely installed and
   `rea doctor --verbose` output is on disk, T1.0 may legitimately move to COMPLETED).
6. **Never edit in both directions.** Fix the consolidated source; regenerate the derived view.

---

## 8. Full index of this folder

| File | Purpose | Primary source(s) |
|---|---|---|
| `README.md` | This document — format definition, v4.0/v5.0 dual-source rule, conventions, index | `.stremiium/README.md`, `task/PROGRAM_BRIEF.md`, v5.0 prompt |
| `00-master-orchestrator/sparkling-curious-unconsolidated.md` | Section-by-section expansion of the master orchestrator (v4.0 S0–S16 **plus v5.0 §20–§25**: REA engine, swarm spawning, target dossiers, NeoBank stack, economics, behavioral engine), plus arbitration protocol, escalation ladder, anti-sycophancy/evidence rules | `.stremiium/agents/sparkling-curious.agent.md`; v5.0 §0–§16 |
| `01-organisation/README.md` | Index + tier map for the organogram | `.stremiium/config/council-department-mapping.json`; v5.0 §2 |
| `01-organisation/tier-1-strategic-governance-councils.md` | C01–C10 detail + v5.0 rosters & dispatch directives | `.stremiium/agents/council-agents/C01…C10`, `config/councils/*`; v5.0 §2, §8, §11 |
| `01-organisation/tier-2-technical-specialist-councils.md` | C11–C13 detail + v5.0 rosters & dispatch directives | `.stremiium/agents/council-agents/C11…C13`; v5.0 §2, §8 |
| `01-organisation/tier-3-client-product-councils.md` | C14–C16 detail + v5.0 rosters & dispatch directives | `.stremiium/agents/council-agents/C14…C16`; v5.0 §2, §8 |
| `02-coordinators/coordinators-unconsolidated.md` | 16 staff-line coordinator roles + v5.0 conflict-arbitration mapping | `.stremiium/config/council-department-mapping.json`, `.stremiium/agents/coordinators/`; v5.0 §13 |
| `03-registry/master-registry-unconsolidated.md` | Registry schema + aggregate distribution + v5.0 roster reconciliation | `.stremiium/registry/master-registry.json`, `registry/schema/`; v5.0 §2 |
| `04-execution/execution-model-unconsolidated.md` | T0–T80 prompt ledger + status vocabulary + v5.0 Two-Phase engine & T1.0–T8.0 program index | `.stremiium/execution/EXECUTION_STATUS.md`, `t0-t80-ledger.json`; v5.0 §5, §6, §16, appendix |
| `05-evidence/evidence-protocol-unconsolidated.md` | Four-bucket evidence protocol + ledger JSON schema + REA pipeline & audit-trace template | `task/PROGRAM_BRIEF.md` §5–6; v5.0 §3, §15 |

**Index integrity note.** This folder contains **10 files** (the nine content documents
enumerated above plus the `01-organisation/README.md` tier index).

---

## 9. Reading order

```
README.md  →  00-master-orchestrator  →  01-organisation (tier 1 → 2 → 3)
           →  02-coordinators  →  03-registry  →  04-execution  →  05-evidence
```

- **New to the system?** Read `00-` then `01-`.
- **Running the REA reverse-engineering program?** Read `00-` §20–§22, then `04-` §8–§9, then `05-`.
- **Maintaining a prompt?** Read `02-` then `03-`.
- **Auditing a claim?** Read `05-` first.
- **Tracking a task?** Read `04-`.
