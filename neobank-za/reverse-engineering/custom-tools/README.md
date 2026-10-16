# REA Custom Tools — Overview

This directory explains how to **extend** REA for NeoBank ZA's own tasks, rather than only
*using* the tools REA already ships. It covers two distinct meanings of "custom tools", and
you should be explicit about which one you mean.

> **Install of REA itself:** this repo assumes `rea-agents` v6.5.0 is installed/registered
> (see [`../playbooks/README.md`](../playbooks/README.md)). Tool semantics are inventoried
> in [`../rea-analysis/`](../rea-analysis/README.md); the source is at `/workspace/rea`.

---

## Two meanings of "custom tool"

### (i) New MCP tools authored *inside* the REA source

You add a first-class tool to REA's single application core, so it appears on **both**
surfaces (MCP `tools/list` and the `rea` CLI) with the same Evidence contract. This is the
highest-fidelity option and the one REA's own design guide ([`/workspace/rea/docs/tool-design.md`](../../../rea/docs/tool-design.md))
targets. It requires touching the layered codebase:

| Layer | Directory | Responsibility |
| --- | --- | --- |
| Domain | `src/domain/` | pure, side-effect-free schemas and logic |
| Contracts | `src/contracts/` | caller-visible Zod input/output schemas |
| Application | `src/application/` | shared CLI/MCP workflows |
| Providers | `src/<engine>/` | one adapter per engine/format |
| Adapters | `src/server/` (MCP), `src/cli/` | registration + CLI wiring |
| Composition | `src/server/createServer.ts` | build providers, register tools |

Follow the repository's dependency invariant: **"dependencies flow inward"** — domain →
contracts → providers → application → CLI/MCP adapters (`/workspace/rea/AGENTS.md`).

→ Step-by-step: [`authoring-guide.md`](./authoring-guide.md)
→ Skeleton: [`tool-contract-template.md`](./tool-contract-template.md)
→ Concrete candidates for a SA neobank: [`example-banking-tools.md`](./example-banking-tools.md)

### (ii) External orchestrator tools that call REA's CLI/MCP

You do **not** modify REA. Instead you wrap it from scripts, CI jobs, or agent skills: run
`rea <command> --json`, parse the returned Evidence, persist ledgers, and (optionally) fan
out across targets. This is the fast path for pipeline integration and is fully supported by
REA's CLI contract (`docs/cli.md`: exit statuses, `--json`, `--snapshot`, evidence
import/export).

→ Patterns and snippets: [`external-orchestration-tools.md`](./external-orchestration-tools.md)

---

## Choosing between them

| Need | Option (i) inside REA | Option (ii) external |
| --- | --- | --- |
| A reusable primitive others will call | ✅ best | ad-hoc |
| First-class Evidence + provenance + paging | ✅ built-in | reuse CLI Evidence, less control |
| Fast, no build of REA | ❌ | ✅ |
| CI/agent pipeline only | possible but heavy | ✅ best |
| Cross-target batch runs | with a workflow tool | ✅ natural |
| "Just compose a few existing tools" | not needed | ✅ |

REA's own guidance: **prefer composition over new tools.** "Agents can compose experiments
with ordinary commands, scripts, and local fixture servers" — a new tool needs an observed
requirement the existing primitives cannot satisfy (`docs/tool-design.md`). So default to
option (ii) unless you are adding a genuinely reusable primitive.

## Guardrails (both options)

- Only analyse software you own or are authorised to examine. See
  [`../playbooks/README.md`](../playbooks/README.md).
- Never build tooling that defeats licence/DRM/integrity protections, or that steals
  credentials.
- Preserve REA's evidence discipline: **observation / inference / unknown**, fail-closed on
  missing authority, no invented tool names.
- Third-party engines stay **bring-your-own**; REA never installs them.

## Files

```
custom-tools/
├── README.md                        ← you are here
├── authoring-guide.md               ← step-by-step, real file paths + validation
├── tool-contract-template.md        ← TypeScript contract skeleton
├── example-banking-tools.md         ← 5 candidate SA-neobank tools (design)
└── external-orchestration-tools.md  ← wrapping REA in CI/agent pipelines
```

---

**Related:** [`../rea-analysis/architecture.md`](../rea-analysis/architecture.md) ·
[`../rea-analysis/tool-catalog.md`](../rea-analysis/tool-catalog.md) ·
`/workspace/rea/docs/tool-design.md` · `/workspace/rea/AGENTS.md`
