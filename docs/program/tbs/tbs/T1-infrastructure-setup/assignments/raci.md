# T1 assignments · raci.md

**Task:** T1.0 Environment & REA Setup
**Legend:** R = Responsible · A = Accountable · C = Consulted · I = Informed

---

## 1. RACI by workstream × council

| Workstream | C01 | C02 | C03 | C04 | C05 | C06 | C07 | C08 | C09 | C10 | C11 | C12 | C13 | C14 | C15 | C16 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| WS1 REA install & doctor (T1.1) | I | I | C | – | – | **A** | – | – | – | – | **R** | C | C | – | – | C |
| WS2 Custom banking plugin (T1.2) | C | – | C | – | – | C | – | – | – | – | **R/A** | C | C | – | C | **C** |
| WS3 Evidence ledger & honesty gate (T1.3) | C | I | **R/A** | C | – | C | – | – | – | – | C | **C/A** | C | – | – | C |
| WS4 MCP transport wiring (T1.4) | I | C | I | – | – | **R/A** | – | – | – | – | C | **C** | C | – | – | – |
| WS5 Folder conventions & artifact register | I | C | **R/A** | I | – | C | – | – | – | – | C | I | I | – | – | I |

## 2. Named council captains

| Council | Captain agent file (`.stremiium/agents/council-agents/`) | Role in T1 |
|---|---|---|
| C03 | `C03-chief-librarian.agent.md` | Accountable for ledger honesty gate & conventions |
| C06 | `C06-chief-technology-officer.agent.md` | Overall task owner; install + transport |
| C11 | `C11-dev-engineering-captain.agent.md` | Builds doctor contract + banking plugin |
| C12 | `C12-cybersecurity-intel-captain.agent.md` | Co-signs tooling; secret/evidence audit |
| C16 | `C16-banking-fintech-captain.agent.md` | Reviews CBS/rail signature taxonomy |
| C13 | `C13-web3-finance-captain.agent.md` | Consulted for later on-chain analysis hooks |
| C01 | `C01-legal-compliance-captain.agent.md` | Consulted on data/regulatory handling |

## 3. Escalation path

Workstream blocker ➔ workstream R ➔ C06 CTO (A) ➔ Sparkling Curious (`SC-MASTER-001`) ➔ Executive.

## 4. RACI notes

- WS3 (ledger) is the **honesty spine**: C03 owns the template, C12 owns the validation gate.
- WS1 exit unblocks WS4; WS2 feeds T7.1. No SEEN-class claims ship until WS1+WS3 close.
- Every council that will consume REA output (C13, C16, C11) is Consulted at T1 by design.
