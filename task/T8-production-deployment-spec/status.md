# T8 — Code Mode Execution & Repo Commit · status.md

**Program:** `SC-REA-NEOBANK-5.0`
**Task:** T8.0 Code Mode Execution & Repo Commit
**Owner council:** C00 Sparkling Curious (`SC-MASTER-001`)
**Supporting councils:** C03 Admin-Knowledge (`C03-chief-librarian`), C11 Dev-Engineering (`C11-dev-engineering-captain`), C06 Engineering-Infra (`C06-chief-technology-officer`), C12 Cybersecurity-Intel (`C12-cybersecurity-intel-captain`)
**Status:** `ACTIVE`
**Last updated:** 2026-10-19

---

## 1. Mission

Execute the **Code Mode** half of the two-phase dual engine (brief §7): convert the approved Plan-Mode
artefacts into committed repository state. T8 owns `.github/` (agents, skills, workflows),
`UnConsolidated/` (format definition), and the git history — using conventional commits
(`feat:`, `docs:`, `analysis:`, `arch:`) with no credentials ever committed.

## 2. Scope

- `.github/agents/` — agent index + council roster.
- `.github/skills/` — skills library overview + REA integration.
- `.github/workflows/` — Plan Mode ➔ Code Mode orchestration overview + algorithm.
- `UnConsolidated/` — UnConsolidated format definition (per TASK_INDEX cross-cutting register).
- Incremental conventional commits of all program artefacts.

## 3. Entrance / Exit criteria

| Gate | Criterion | State |
|---|---|---|
| Entrance | Plan Mode artefacts exist (task folders, dossiers, architecture) | ⏳ |
| Entrance | Git-safety policy acknowledged | ✅ (policy exists in `.stremiium/config`) |
| Exit | `.github/{agents,skills,workflows}` populated | ⏳ |
| Exit | `UnConsolidated/README.md` present | ⏳ |
| Exit | All artefacts committed with conventional-commit messages | ⏳ |
| Exit | No secret material in any committed file (C12 scan clean) | ⏳ |
| Exit | Repo history is incremental and reviewable | ⏳ |

## 4. Dependency map

```
T1..T7 (Plan Mode output) ──► T8 (Code Mode execution + commit)
                                ├─ .github/ (this program's agent/skill/workflow docs)
                                ├─ UnConsolidated/ (format definition)
                                └─ git history (conventional commits)
```
T8 is the **terminal task**: it cannot meaningfully commit until upstream artefacts exist.

## 5. Risk register

| # | Risk | L | I | Mitigation | Owner |
|---|---|---|---|---|---|
| R1 | Committing secrets/keys | L | H | `.gitignore`, C12 secret scan, no-credentials rule | C12 |
| R2 | Committing broken/incomplete artefacts | M | M | Only commit complete, validated files | C03 |
| R3 | Non-conventional commit messages | M | L | Enforce prefixes; pre-commit lint | C11 |
| R4 | Force-push / history rewrite damage | L | H | Git-safety policy; no destructive commands | C06 |
| R5 | `.github/` docs drift from `.stremiium/` source of truth | M | M | Cross-reference `.stremiium/` files | C03 |

## 6. Next actions

1. **C03** — populate `.github/agents/`, `.github/skills/`, `.github/workflows/`.
2. **C03** — author `UnConsolidated/README.md` (format definition).
3. **C11** — stage incremental conventional commits as artefacts complete.
4. **C12** — secret scan + evidence-scope check before each commit.
5. **C06** — enforce git-safety policy (no destructive commands).
