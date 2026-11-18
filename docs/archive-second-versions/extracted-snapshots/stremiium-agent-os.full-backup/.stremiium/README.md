# Stremiium Agent Operating System Workspace

This is the canonical, repository-local operating workspace for the Stremiium Agent Operating System.

It is independent of Git metadata and does not replace application source code. Its purpose is to hold the versioned registry, policies, execution evidence, migration plans, runbooks, contracts, evaluations, and production-readiness records needed to operate the agent system.

## Rules

- Physical workspace evidence overrides stale task reports.
- Every prompt execution has a traceable entry in `execution/`.
- Agent prompt rewrites require a versioned rollback copy, role-specific source evidence, validation, and recorded approval.
- No credentials, API keys, private keys, access tokens, or personal data belong in this workspace.
- `.trae`, `.Codex`, `.gemini`, and `.windsurf` are not created or used.

## Structure

- `execution/` — Prompt execution ledgers and factual run reports.
- `registry/` — Agent, capability, tool, plugin, model, and ownership registries.
- `policies/` — Security, identity, approval, lifecycle, memory, cache, and retention controls.
- `contracts/` — Machine-readable task, message, graph, workflow, and evaluation contracts.
- `plans/` — UnConsolidated migration, runtime, and rollout plans.
- `audits/` — Inventory, prompt completeness, reference, and adversarial findings.
- `runbooks/` — Human-operable implementation and recovery procedures.
- `evaluations/` — Benchmark definitions and results (no sensitive data).
- `docs/` — Authority hierarchy and architecture decisions.
