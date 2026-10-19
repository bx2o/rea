# `.github/agents/` — Agent Index

**Program:** `SC-REA-NEOBANK-5.0`
**Source of truth:** `.stremiium/agents/` (this folder indexes it; it does not replace it)
**Owner:** C03 Admin-Knowledge (`C03-chief-librarian`)
**Last updated:** 2026-10-19

---

## 1. What lives here

`.github/agents/` is the **GitHub-visible index** of the Stremiium agent system. The authoritative
definitions live in `.stremiium/agents/`; these files explain how to find and use them.

| File | Purpose |
|---|---|
| `README.md` (this) | Index of captains + coordinators; prompting + spawning model |
| `council-roster.md` | Full roster table: id, name, captain file, tier, mandate, owned T-tasks |

## 2. The roster at a glance

- **16 council captains** — `.stremiium/agents/council-agents/Cxx-*.agent.md`
  (C01–C16; see `council-roster.md` for the full table).
- **16 coordinators** — `.stremiium/agents/coordinators/CRD-*.agent.md`, including:
  - `CRD-research-ops.agent.md` — research workstream orchestration (drives T2–T6).
  - `CRD-knowledge-flow.agent.md` — artefact flow into the TBS folders (T1–T8).
  - `CRD-project-sync.agent.md` — cross-council status synchronisation.
  - `CRD-engineering-product.agent.md` — T7 architecture synthesis support.
  - `CRD-deployment.agent.md` — T8 Code-Mode delivery.
  - `CRD-council-liaison.agent.md`, `CRD-executive-liaison.agent.md`, `CRD-compliance-ops.agent.md`,
    `CRD-data-governance.agent.md`, `CRD-incident-response.agent.md`, `CRD-agent-lifecycle.agent.md`.
  - Support guards: `crd-git-state-safeguard.agent.md`, `crd-resource-cost-governor.agent.md`,
    `crd-security-compliance-sentinel.agent.md`, `crd-workflow-orchestrator.agent.md`.
- **Executive + meta** — `.stremiium/agents/executive/EXEC-council-ceo.agent.md`,
  `.stremiium/agents/meta-councils/*`, and the master `sparkling-curious.agent.md`.

## 3. Prompt → agent mapping

| Prompt artefact | Resolves to |
|---|---|
| Council captain prompt | `.stremiium/agents/council-agents/Cxx-<name>-captain.agent.md` |
| Coordinator prompt | `.stremiium/agents/coordinators/CRD-<function>.agent.md` |
| Master orchestrator | `.stremiium/agents/sparkling-curious.agent.md` (`SC-MASTER-001`) |
| Machine-readable registry | `.stremiium/registry/master-registry.json` |
| Council configs | `.stremiium/config/councils/Cxx-*.config.json` |

A prompt that names a council (e.g. "ask C13 to..." ) resolves to the file
`C13-web3-finance-captain.agent.md` under `council-agents/`.

## 4. Spawning pattern

The execution hierarchy for every workstream in this program:

```
Sparkling Curious (SC-MASTER-001)        ← master orchestrator, owns the program
        │
        ▼
Council Captain (e.g. C16-banking-fintech-captain)   ← owns mandate + RACI accountability
        │
        ▼
Specialist Subagent (e.g. reversing engineer, banking analyst)   ← does the work
        │
        ▼
Artifact Logging (C03)                   ← writes to task/T<n>/… and research/<group>/<entity>/
```

**Rules**
1. Only Sparkling Curious spawns council captains; captains spawn only within their own mandate.
2. Every spawned agent inherits the evidence rules (SEEN / INFERRED / UNKNOWN) and the no-credentials rule.
3. Every artefact a subagent produces is logged by C03 into the correct TBS folder (see §5).
4. Cross-council work requires the captain named Accountable in the T-task RACI to approve.

## 5. Artifact logging targets

| Root | Contents |
|---|---|
| `task/T1..T8/{audit,phases,implementation,summary,context,assignments}` | TBS task artefacts |
| `research/{banks,casps-and-wallets,global-benchmarks,web3-competitors}/<entity>` | 9-file dossiers |
| `architecture/` | T7 blueprint specs |
| `.github/` | This index set (T8) |
