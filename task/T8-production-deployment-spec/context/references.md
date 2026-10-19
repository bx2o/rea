# T8 context · references.md

**Task:** T8.0 Code Mode Execution & Repo Commit
**Owner:** C03 Admin-Knowledge.

---

## 1. Primary sources

| Ref | Source | Use |
|---|---|---|
| [R1] | `task/PROGRAM_BRIEF.md` §7, §9 | Two-phase engine; conventions; no-credentials rule |
| [R2] | `task/TASK_INDEX.md` (T8 row + cross-cutting registers) | Deliverables; `UnConsolidated/` reference |
| [R3] | `.stremiium/agents/` | Captain + coordinator source of truth |
| [R4] | `.stremiium/skills/` | Skills source of truth incl. `SKILLS-ACTIVATION-INDEX.md` |
| [R5] | `.stremiium/workflows/` | Workflow source of truth |
| [R6] | `.stremiium/config/agents/git-safety-policy.json` | Commit safety constraints |
| [R7] | `.stremiium/governance/rules/` | Authority framework, workspace rules |

## 2. Output locations

- `.github/agents/`, `.github/skills/`, `.github/workflows/`
- `UnConsolidated/README.md`
- Git history (conventional commits)

## 3. Commit prefixes (from brief §9)

```
feat:      new capability / artefact set
docs:      documentation
analysis:  dossier findings
arch:      architecture specs
```

## 4. Assumptions

- A1: `.stremiium/` is complete enough to derive `.github/` docs from.
- A2: The repository is (or will be) initialised for version control.
- A3: `UnConsolidated/README.md` does not yet exist and must be authored, not merely referenced.

## 5. Evidentiary-class reminder

> T8 does not create forensic evidence; it **publishes** existing artefacts. It must preserve each
> artefact's evidence class verbatim when committing (no upgrading INFERRED→SEEN).

## 6. Compliance constraints

- **No credentials, keys, tokens, or personal data** in any committed file (brief §9).
- No destructive git operations; no force-push to protected branches.
- Conventional commits only; incremental and reviewable.
