# T2 assignments · raci.md

**Task:** T2.0 SA Big Four Reverse Engineering
**Legend:** R = Responsible · A = Accountable · C = Consulted · I = Informed

---

## 1. RACI by workstream × council

| Workstream | C01 | C02 | C03 | C04 | C05 | C06 | C07 | C08 | C09 | C10 | C11 | C12 | C13 | C14 | C15 | C16 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| WS1 Standard Bank/Shyft | C | – | C | C | – | C | C | – | – | C | C | C | I | – | C | **R/A** |
| WS2 FNB / eBucks | C | – | C | C | – | – | C | – | **R/A** | C | **R** | C | – | – | C | **C** |
| WS3 ABSA cloud | C | – | C | C | – | **R/A** | – | – | – | C | C | C | I | – | – | C |
| WS4 Nedbank/Avo | I | – | C | C | – | I | C | C | C | – | C | C | – | C | **R/A** | C |
| WS5 Loyalty synthesis | C | – | C | C | – | – | C | – | **R/A** | C | C | C | – | – | C | C |
| WS6 Evidence-ledger conformance | C | – | **R/A** | – | – | – | – | – | – | – | C | **C/A** | – | – | – | C |

## 2. Named council captains

| Council | Captain agent file (`.stremiium/agents/council-agents/`) | Role in T2 |
|---|---|---|
| C16 | `C16-banking-fintech-captain.agent.md` | Task owner; WS1 CBS/rail authority |
| C09 | `C09-chief-marketing-officer.agent.md` | Owns eBucks deconstruction (WS2) + loyalty synthesis |
| C11 | `C11-dev-engineering-captain.agent.md` | App/reversing engineering support |
| C06 | `C06-chief-technology-officer.agent.md` | ABSA cloud analysis (WS3) |
| C15 | `C15-product-management-captain.agent.md` | Nedbank Money App/Avo (WS4) |
| C10 | `C10-chief-financial-officer.agent.md` | Financials/period review |
| C12 | `C12-cybersecurity-intel-captain.agent.md` | Evidence-class audit + REA security |
| C03 | `C03-chief-librarian.agent.md` | Ledger conformance & artifact standards |

## 3. Escalation path

WS blocker ➔ WS R ➔ C16 (A) ➔ C04 Strategy (cross-bank positioning) ➔ Sparkling Curious.

## 4. Notes

- WS2 has two Rs (C09 lead, C11 supporting) with C16 accountable on banking accuracy.
- WS6 is a gate owned jointly by C03 (template) and C12 (validation).
- C01 Consulted on all regulatory/regulator-content; C07 Consulted for acquiring economics.
