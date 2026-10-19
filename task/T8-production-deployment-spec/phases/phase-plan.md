# T8 phases · phase-plan.md

**Task:** T8.0 Code Mode Execution & Repo Commit
**Primary council:** C00 Sparkling Curious (`SC-MASTER-001`)

---

## T8.1 — `.github/agents/` population
**Status:** `ACTIVE` · **Owner:** C03 (`C03-chief-librarian`) · **Support:** C00
**Deliverables:** `.github/agents/README.md`, `.github/agents/council-roster.md`
Focus: index the 16 council captains + coordinators; map prompts to `.stremiium/agents/`; document the
spawning pattern (Sparkling Curious ➔ Council Captain ➔ Specialist Subagent ➔ Artifact Logging).
Exit: both files present, cross-referenced to `.stremiium/`.

## T8.2 — `.github/skills/` population
**Status:** `ACTIVE` · **Owner:** C03 · **Support:** C11, C12
**Deliverables:** `.github/skills/README.md`, `.github/skills/rea-integration.md`
Focus: explain the `.stremiium/skills/` library + REA skill integration; how skills activate
(reference `SKILLS-ACTIVATION-INDEX.md`); document REA invocation and NOT-INSTALLED status.
Exit: both files present; REA commands + MCP transport documented.

## T8.3 — `.github/workflows/` population
**Status:** `ACTIVE` · **Owner:** C03 · **Support:** C06
**Deliverables:** `.github/workflows/README.md`, `.github/workflows/orchestration.md`
Focus: two-phase Plan Mode ➔ Code Mode engine overview; concrete execution algorithm (gate, TBS
construction, RACI, evidence rules, dispatch, incremental commits).
Exit: both files present; algorithm is unambiguous and executable.

## T8.4 — `UnConsolidated/` format definition
**Status:** `ACTIVE` · **Owner:** C03
**Deliverable:** `UnConsolidated/README.md`
Focus: define the UnConsolidated format (per TASK_INDEX cross-cutting register).
Exit: format definition present and referenced by the agent docs.

## T8.5 — Incremental conventional commits
**Status:** `ACTIVE` · **Owner:** C11 · **Audit:** C12
Focus: stage + commit artefacts as they complete, using `feat:`/`docs:`/`analysis:`/`arch:`.
Exit: history is incremental; C12 secret scan clean; no destructive git operations.

---

## Phase dependency order

```
T8.1 ─┐
T8.2 ─┼─► T8.5 (commit) ── terminal
T8.3 ─┤
T8.4 ─┘
``` 
