# T8 implementation · build-spec.md

**Task:** T8.0 Code Mode Execution & Repo Commit
**Owner:** C00 Sparkling Curious · **Convention authority:** C03.

---

## 1. Artefacts to produce

| # | Artefact | Path | Owner |
|---|---|---|---|
| A1 | Agents index | `.github/agents/README.md` | C03 |
| A2 | Council roster | `.github/agents/council-roster.md` | C03 |
| A3 | Skills overview | `.github/skills/README.md` | C03 |
| A4 | REA integration | `.github/skills/rea-integration.md` | C03/C11 |
| A5 | Workflows overview | `.github/workflows/README.md` | C03 |
| A6 | Orchestration algorithm | `.github/workflows/orchestration.md` | C03/C06 |
| A7 | UnConsolidated format | `UnConsolidated/README.md` | C03 |

## 2. Commit policy (conventional commits)

| Prefix | Use |
|---|---|
| `feat:` | new capability / artefact set |
| `docs:` | documentation (this task's .github + UnConsolidated) |
| `analysis:` | dossier findings (T2–T6) |
| `arch:` | architecture specs (T7) |

Rules: incremental commits (one logical artefact set per commit); never commit secrets/keys/tokens/
personal data; never destructive git ops; no `--force` to protected branches.

## 3. Acceptance tests

| Test | Method | Pass |
|---|---|---|
| T-GH-6 | six files present under `.github/{agents,skills,workflows}` | ✅/❌ |
| T-UNCONS | `UnConsolidated/README.md` present | ✅/❌ |
| T-COMMITS | history uses conventional prefixes | ✅/❌ |
| T-NOSECRET | C12 secret scan clean across commits | ✅/❌ |
| T-SOURCETRUTH | `.github/` docs cross-reference `.stremiium/` | ✅/❌ |
| T-NODESTRUCTIVE | no force-push / history rewrite | ✅/❌ |

## 4. Content requirements (this task's doc set)

- **agents/README.md** — index 16 captains + coordinators; prompt→`.stremiium/agents/` mapping;
  spawning pattern (Sparkling Curious ➔ Council Captain ➔ Specialist Subagent ➔ Artifact Logging).
- **agents/council-roster.md** — table: id, name, captain agent file, tier, mandate, owned T-tasks.
- **skills/README.md** — `.stremiium/skills/` library + REA skill integration + activation model
  (reference `SKILLS-ACTIVATION-INDEX.md`).
- **skills/rea-integration.md** — REA invocation (`npx rea-agents setup`, `rea doctor --verbose`,
  `npx -y rea-agents@latest analyze-javascript-application <path> --json`), MCP transport,
  NOT-INSTALLED status.
- **workflows/README.md** — two-phase Plan Mode ➔ Code Mode engine overview.
- **workflows/orchestration.md** — concrete algorithm (gate, TBS, RACI, evidence, dispatch, commits).
