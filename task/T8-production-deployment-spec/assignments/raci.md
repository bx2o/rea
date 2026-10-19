# T8 assignments · raci.md

**Task:** T8.0 Code Mode Execution & Repo Commit
**Legend:** R = Responsible · A = Accountable · C = Consulted · I = Informed

---

## 1. RACI by workstream × council

| Workstream | C01 | C02 | C03 | C04 | C05 | C06 | C07 | C08 | C09 | C10 | C11 | C12 | C13 | C14 | C15 | C16 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| WS1 `.github/agents/` | I | – | **R/A** | C | C | C | – | – | – | – | C | I | C | C | C | C |
| WS2 `.github/skills/` | C | – | **R/A** | – | – | C | – | – | – | – | C | **C** | C | – | – | C |
| WS3 `.github/workflows/` | C | C | **R/A** | C | – | **C** | – | – | – | – | C | C | C | C | C | C |
| WS4 `UnConsolidated/` | I | – | **R/A** | I | – | C | – | – | – | – | C | I | I | I | I | I |
| WS5 Incremental commits | C | C | C | – | – | **C** | – | – | – | – | **R** | **C/A** | – | – | – | – |
| WS6 Repo coherence & close | C | C | C | C | C | C | C | C | C | C | C | C | C | C | C | C |

*C00 Sparkling Curious is Accountable for WS6 (overall close-out).*

## 2. Named council captains

| Council | Captain agent file (`.stremiium/agents/council-agents/`) | Role in T8 |
|---|---|---|
| C00 | `sparkling-curious.agent.md` (master) | Accountable for T8 close-out |
| C03 | `C03-chief-librarian.agent.md` | Writes/owns `.github/` docs + UnConsolidated format |
| C11 | `C11-dev-engineering-captain.agent.md` | Executes commits; engineering artefacts |
| C12 | `C12-cybersecurity-intel-captain.agent.md` | Secret scan + commit-scope audit (co-sign WS5) |
| C06 | `C06-chief-technology-officer.agent.md` | Enforces git-safety policy |
| C13 | `C13-web3-finance-captain.agent.md` | Consulted for skills/workflow web3 content |
| C16 | `C16-banking-fintech-captain.agent.md` | Consulted for banking content accuracy |

## 3. Escalation path

WS blocker ➔ WS R ➔ C03 (A for docs) / C11 (commits) ➔ C00 master ➔ Executive.

## 4. Notes

- WS5 is a **dual control**: C11 commits, C12 audits (no-secret, no-destructive) before/after.
- WS1–WS3 are documentation derived from `.stremiium/`; C03 is Accountable to prevent drift.
- WS6 requires all councils Informed (repo close-out affects everyone).
