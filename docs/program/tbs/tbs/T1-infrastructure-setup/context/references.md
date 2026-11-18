# T1 context · references.md

**Task:** T1.0 Environment & REA Setup
**Owner:** C03 Admin-Knowledge.

---

## 1. Primary sources

| Ref | Source | Use |
|---|---|---|
| [R1] | `task/PROGRAM_BRIEF.md` §5, §8, §9 | Evidentiary rules, target stack, conventions |
| [R2] | `task/TASK_INDEX.md` | Statuses, deliverable paths, evidence rules |
| [R3] | `morluto/rea` (GitHub: `morluto/rea`) | The REA binary & MCP engine (NOT installed) |
| [R4] | `.stremiium/agents/council-agents/` | Council captain definitions |
| [R5] | `.stremiium/registry/master-registry.json` | Machine-readable council/agent registry |
| [R6] | `.stremiium/skills/SKILLS-ACTIVATION-INDEX.md` | Skill activation model |
| [R7] | `.stremiium/config/councils/COUNCIL_REGISTRY.json` | Tiers, captains, RACI collaboration matrix |

## 2. Entity folders under `research/` (inputs for downstream, not T1)

- `research/banks/`: standard-bank, fnb, absa, nedbank, discovery-bank, tymebank, african-bank
- `research/casps-and-wallets/`: luno, valr, flex-one
- `research/global-benchmarks/`: jpmorgan-chase, morgan-stanley
- `research/web3-competitors/`: sorare, socios-chiliz, polymarket, fanduel, fanatics

All folders currently **empty** — populated by T2–T6.

## 3. Assumptions

- A1: The environment can reach npm/registry to install `rea-agents`.
- A2: Executives can supply at least one app artefact; otherwise T1's forensic exit is unattainable.
- A3: The two-phase Plan/Code engine (brief §7) is authoritative for orchestration.
- A4: No secrets are needed to run REA; if auth is required, it is provided out-of-band and never committed.

## 4. Evidentiary-class reminder (standing banner)

> **SEEN** = verifiable strings/bytecode/filings/pricing we can cite.
> **INFERRED** = logical architecture synthesised from SEEN.
> **UNKNOWN** = proprietary server-side logic, private APIs, unreachable code.
>
> Because REA is **not installed** and **no artefacts exist**, "SEEN" is limited to public sources;
> everything artefact-dependent is INFERRED/UNKNOWN with the resolving extraction step named.

## 5. Compliance constraints

- No credentials, keys, tokens, or personal data in any file (brief §9).
- Conventional commits only when T8 commits (`feat:`, `docs:`, `analysis:`, `arch:`).
- POPIA/FICA awareness for any data referenced from public sources.
