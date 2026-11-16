# Organisation — Tier Index & Navigational Map

**Derived from:** `.stremiium/config/council-department-mapping.json`, `.stremiium/config/councils/COUNCIL_REGISTRY.json`, `.stremiium/agents/council-agents/`, `.stremiium/agents/department-agents/`
**Canonical status:** `.stremiium/` is authoritative; this folder is a derived view.

This folder atomises the Stremiium organogram into one document per tier:

| Tier | File | Councils |
|---|---|---|
| Tier 1 — Strategic Governance (command & control) | [`tier-1-strategic-governance-councils.md`](./tier-1-strategic-governance-councils.md) | C01–C10 |
| Tier 2 — Technical Specialist (domain experts) | [`tier-2-technical-specialist-councils.md`](./tier-2-technical-specialist-councils.md) | C11–C13 |
| Tier 3 — Client & Product (user-facing) | [`tier-3-client-product-councils.md`](./tier-3-client-product-councils.md) | C14–C16 |

## Two-plane hierarchy (verified)

From `.stremiium/config/council-department-mapping.json` (`"model": "two-plane-hierarchy"`):

- **Command plane** — `.stremiium/agents/council-agents/`: 16 captain files + 13 `SPEC-*`
  specialists. Role: strategy, approval, arbitration, escalation to SC.
- **Workforce plane** — `.stremiium/agents/department-agents/`: department agents (`AGT-*`) and
  subbenches (`SUB-*`). Role: execution, specialist judgement, subagent fan-out.
- **Staff-line** — `.stremiium/agents/coordinators/`: cross-cutting enforcement (documented in
  `../02-coordinators/`).
- **Meta-councils** — `.stremiium/agents/meta-councils/`: advisory bodies, no line authority.
- **Executive** — `.stremiium/agents/executive/EXEC-council-ceo.agent.md`: CEO-proxy governance.

## Tier map (counts are model counts, distinct from registry record counts)

`COUNCIL_REGISTRY.json` `tiers`: Tier-1 = 10, Tier-2 = 3, Tier-3 = 3, `totalCouncils` = 16,
`totalAgents` = "100+", health `Operational`.

## Navigating a council

Every council block in the tier files is organised as: **id · name · captain (agent file) ·
mandate · sub-squads · RACI · owned T-tasks · key skills · escalation path · current status**.
Sub-squads are evidenced by department folders (`AGT-*`), subbenches (`SUB-*`) and council
specialists (`SPEC-*`) that were verified on disk.
