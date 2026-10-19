# `.github/workflows/` — Workflow Engine Overview

**Program:** `SC-REA-NEOBANK-5.0`
**Execution modality:** Two-Phase Dual Engine — **Plan Mode ➔ Code Mode** (brief §7)
**Owner:** C06 Engineering-Infra (`C06-chief-technology-officer`) · **Author:** C03
**Last updated:** 2026-10-19

---

## 1. What lives here

`.github/workflows/` describes the program's **execution engine** at the GitHub-visible layer.

| File | Purpose |
|---|---|
| `README.md` (this) | Overview of the two-phase engine |
| `orchestration.md` | The concrete execution algorithm (gate, TBS, RACI, evidence, dispatch, commits) |

> Note: these are **documentation of the agent/orchestration engine**, not GitHub Actions YAML.
> The broader Stremiium CI/CD workflow catalogue lives in `.stremiium/workflows/` and
> `.stremiium/config/`.

## 2. The two-phase engine

```
┌──────────────── PLAN MODE ────────────────┐   ┌──────────── CODE MODE ────────────┐
│ • read brief + TASK_INDEX                 │   │ • execute approved artefacts       │
│ • decompose into TBS task folders (T1–T8) │   │ • write files to disk              │
│ • assign council RACI                     │   │ • run tests / acceptance criteria  │
│ • gather + class evidence (SEEN/INF/UNK)  │   │ • incremental conventional commits │
│ • produce plans, specs, dossiers          │   │ • log to git history               │
└───────────────────┬───────────────────────┘   └──────────────▲─────────────────────┘
                    │  gate: plan approved + evidence labelled  │
                    └──────────────────────────────────────────┘
```

**Plan Mode** is where the program thinks: it reads the brief and index, decomposes work into the
Task Breakdown Structure (TBS), assigns councils, and captures evidence with honest labels.

**Code Mode** is where the program acts: it materialises the plan into repository files, runs
acceptance tests, and commits incrementally.

The **gate** between phases requires: (a) the plan to be approved by the Accountable council, and
(b) every claim to carry a valid evidence class.

## 3. Why two phases

- Prevents speculative commits (Plan Mode must state knowns vs unknowns first).
- Enforces the honesty rule (no SEEN claim without a citable source or REA artefact).
- Makes the program auditable (plans and execution both traceable).

## 4. Relationship to the skill + agent layers

| Layer | Folder | Role |
|---|---|---|
| Agents | `.github/agents/`, `.stremiium/agents/` | Who does the work |
| Skills | `.github/skills/`, `.stremiium/skills/` | What expertise is applied |
| Workflows | `.github/workflows/`, `.stremiium/workflows/` | How the work is sequenced |

## 5. Program tasks as workflow instances

Each T1–T8 is a workflow instance: T1 provisions the engine (REA), T2–T6 gather evidence,
T7 synthesises the blueprint, T8 executes Code Mode and commits. See `orchestration.md` for the
step-by-step algorithm.
