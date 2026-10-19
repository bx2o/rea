# T4 assignments · raci.md

**Task:** T4.0 CASPs & Crypto Wallets Forensics
**Legend:** R = Responsible · A = Accountable · C = Consulted · I = Informed

---

## 1. RACI by workstream × council

| Workstream | C01 | C02 | C03 | C04 | C05 | C06 | C07 | C08 | C09 | C10 | C11 | C12 | C13 | C14 | C15 | C16 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| WS1 Luno PoR/orderbook | C | – | C | – | – | C | – | – | – | C | C | C | **R/A** | – | – | C |
| WS2 VALR exchange arch | C | – | C | – | – | C | – | – | – | C | C | C | **R/A** | – | – | C |
| WS3 Flex.one card | C | – | C | – | – | C | C | – | – | C | C | C | C | – | C | **R/A** |
| WS4 Travel Rule comparison | **R/A** | – | C | – | – | – | – | – | – | – | C | C | C | – | – | C |
| WS5 Evidence-ledger conformance | C | – | **R/A** | – | – | – | – | – | – | – | C | **C/A** | C | – | – | C |

## 2. Named council captains

| Council | Captain agent file (`.stremiium/agents/council-agents/`) | Role in T4 |
|---|---|---|
| C13 | `C13-web3-finance-captain.agent.md` | Task owner; Luno/VALR (WS1/WS2) |
| C16 | `C16-banking-fintech-captain.agent.md` | Owns Flex.one card (WS3) |
| C01 | `C01-legal-compliance-captain.agent.md` | Owns Travel Rule comparison (WS4) |
| C12 | `C12-cybersecurity-intel-captain.agent.md` | Custody/threat analysis; evidence audit |
| C10 | `C10-chief-financial-officer.agent.md` | Financials/market-microstructure review |
| C03 | `C03-chief-librarian.agent.md` | Ledger conformance |
| C11 | `C11-dev-engineering-captain.agent.md` | API/reversing support |

## 3. Escalation path

WS blocker ➔ WS R ➔ C13 (A) / C16 (A WS3) / C01 (A WS4) ➔ Sparkling Curious.

## 4. Notes

- WS3 (Flex.one) crosses into banking/fintech, hence C16 accountable and C07 consulted.
- WS4 (Travel Rule) is a legal gate owned by C01 and feeds T7.3 directly.
- C12 consulted on all custody/key-architecture findings; C13 supports wallet design.
