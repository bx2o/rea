# `.github/skills/` — Skills Library Overview

**Program:** `SC-REA-NEOBANK-5.0`
**Source of truth:** `.stremiium/skills/`
**Owner:** C03 Admin-Knowledge (`C03-chief-librarian`)
**Last updated:** 2026-10-19

---

## 1. What lives here

`.github/skills/` is the GitHub-visible explanation of the Stremiium skills system. The actual skill
library lives in `.stremiium/skills/` (100+ skill folders, each with a `SKILL.md`).

| File | Purpose |
|---|---|
| `README.md` (this) | Library overview + activation model |
| `rea-integration.md` | How `morluto/rea` is invoked in this program + NOT-INSTALLED status |

## 2. The `.stremiium/skills/` library

- **Location:** `.stremiium/skills/<skill-name>/SKILL.md` (plus supporting files).
- **Scale:** 100+ skills across 12 categories — API, Blockchain/Web3, Database, Testing, Backend,
  Frontend/UI, DevOps, Design/Creative, Business/Strategy, Finance/Trading, Legal/Compliance, AI/ML.
- **Index & activation control:** `.stremiium/skills/SKILLS-ACTIVATION-INDEX.md` (machine-readable
  inventory with trigger keywords per skill).
- **Auto-discovery engine:** `.stremiium/skills/SKILLS-AUTO-DISCOVERY-ENGINE.md`.

Skills most relevant to this program:

| Domain | Example skills |
|---|---|
| Banking | `banking-expert`, `pci-compliance` |
| Web3 | `blockchain-developer`, `blockchain-expert`, `smart-contract-security`, `solidity-security`, `web3-testing` |
| Backend/infra | `backend-patterns`, `api-design-principles`, `database-design`, `code-quality` |
| Legal/compliance | `security-compliance`, `pci-compliance`, `regulatory-review-checklist` |
| AI/agents | `multi-agent-orchestration`, MCP skills |

## 3. How skills are activated (conceptual)

Activation is defined by `.stremiium/skills/SKILLS-ACTIVATION-INDEX.md`. The model:

1. **Keyword match** — user/task input contains any of a skill's keywords → skill auto-activates.
2. **Context match** — context implies the domain → skill context-activates.
3. **Priority escalation** — on multiple matches: most keyword hits wins → expertise level → recency.
4. **Skill bundling** — complementary skills applied in sequence (e.g. `database-design` +
   `postgresql-table-design` + `security-compliance`).
5. **De-activation** — skill drops when the topic/context changes.

Each skill carries metadata (`id`, `name`, `file`, `keywords`, `triggers`, `expertise_level`,
`category`, `related_skills`). The activation index is the authoritative mapping; this folder only
explains how to use it.

## 4. REA skill integration

Two layers connect REA to the skill system:

- **Skills as domain knowledge** — e.g. `banking-expert` + `blockchain-expert` inform the *content*
  of REA outputs (what to look for in a CBS signature or token contract).
- **REA as an execution capability** — REA is the *engine* that turns an app artefact into
  string/bytecode/network evidence; see `rea-integration.md` for the exact invocation and transport.

Rule of thumb: skills tell the agents *what bank/crypto concepts matter*; REA tells them *what the
binary actually contains*. Evidence class (SEEN/INFERRED/UNKNOWN) is decided by REA output, not by
skill knowledge.

## 5. Constraints

- No credentials/keys/tokens are ever stored in skills.
- Skills do not create evidence; they guide interpretation. All claims still obey the four
  evidentiary outputs (brief §5).
- `.stremiium/skills/` is authoritative; this folder must mirror it, not fork it.
