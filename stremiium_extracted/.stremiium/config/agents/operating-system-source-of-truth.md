# Agent Operating System Source of Truth

`.github/agents/` remains the current source tree for agent definitions. `.github/config/agents/` contains versioned schemas, registries, policies, lifecycle contracts, and generated audits. `.github/workflows/` contains GitHub-native validation only.

The normalized registry is the identity source; prompt files are evidence-backed definitions; generated reports are projections. No runtime, Notion workspace, or external tool may silently become a competing source of truth.

Changes to prompts, permissions, lifecycle state, or registry identity require schema validation, policy checks, owner review, and a rollback reference. Existing definitions are not moved, deleted, or rewritten by the foundation validator.

## Prompt execution evidence

`prompt-execution-ledger.json` records the sequential T0–T9 execution status, evidence sources, mutations, and unresolved validation boundaries. “Executed” means the prompt's required investigation or check ran; it does not claim production runtime activation.

Prompt migration is controlled by `prompt-migration-manifest.json` and `prompt-migration-approvals.json`. The migration runner preserves source hashes and refuses edits without owner, council, security, and evaluation approvals plus role-specific replacements.

The latest generated inventory contains 285 prompts: 122 have provisional council ownership plus review requirements, 57 require incomplete-content remediation review, and 106 still require owner assignment. No content rewrite is authorized by the empty approval manifest.

`prompt-ownership-map.json` provides provisional council-captain ownership from `COUNCIL_REGISTRY.json`. Provisional ownership does not grant security, compliance, evaluation, or rewrite approval.
