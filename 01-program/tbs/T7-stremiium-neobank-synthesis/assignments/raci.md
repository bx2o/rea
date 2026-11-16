# T7 assignments · raci.md

**Task:** T7.0 Stremiium NeoBank Unified Blueprint
**Legend:** R = Responsible · A = Accountable · C = Consulted · I = Informed

---

## 1. RACI by workstream × council

| Workstream | C01 | C02 | C03 | C04 | C05 | C06 | C07 | C08 | C09 | C10 | C11 | C12 | C13 | C14 | C15 | C16 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| WS1 Core banking (T7.1) | C | C | C | – | – | C | – | – | – | C | C | C | I | – | C | **R/A** |
| WS2 Payment rails/PayShap (T7.1) | C | C | C | – | – | C | **C** | – | – | C | C | C | – | – | – | **R/A** |
| WS3 $STM token (T7.2) | **C** | – | C | C | – | – | – | – | C | **C** | C | C | **R/A** | – | C | C |
| WS4 MPC wallet (T7.2) | C | – | C | – | – | C | – | – | – | – | C | **C** | **R/A** | – | C | C |
| WS5 Regulatory dossier (T7.3) | **R/A** | C | C | – | – | – | – | – | – | C | – | C | C | – | – | C |
| WS6 Traceability matrix | C | – | C | – | – | C | – | – | – | – | C | C | C | – | C | C |
| WS7 Overall blueprint coherence | C | C | C | C | C | C | C | C | C | C | C | C | C | C | C | C |

*C00 Sparkling Curious is Accountable for WS6 and WS7 (overall coherence).*

## 2. Named council captains

| Council | Captain agent file (`.stremiium/agents/council-agents/`) | Role in T7 |
|---|---|---|
| C00 | `sparkling-curious.agent.md` (master) | Accountable for blueprint coherence + traceability |
| C16 | `C16-banking-fintech-captain.agent.md` | Core banking + PayShap (WS1/WS2) |
| C13 | `C13-web3-finance-captain.agent.md` | $STM token + MPC wallet (WS3/WS4) |
| C01 | `C01-legal-compliance-captain.agent.md` | Regulatory dossier (WS5) + token legality |
| C06 | `C06-chief-technology-officer.agent.md` | Infrastructure/platform |
| C10 | `C10-chief-financial-officer.agent.md` | Tokenomics/fee-model finance |
| C11 | `C11-dev-engineering-captain.agent.md` | Engineering implementation specs |
| C12 | `C12-cybersecurity-intel-captain.agent.md` | Security of wallet/core |
| C15 | `C15-product-management-captain.agent.md` | Product scope discipline |
| C07 | `C07-rainmaker-captain.agent.md` | Merchant-acquiring requirements |

## 3. Escalation path

WS blocker ➔ WS R ➔ workstream A (C16/C13/C01/C00) ➔ C00 master ➔ Executive.

## 4. Notes

- Every workstream is Consulted to **all** councils on WS7 (coherence) — the blueprint is cross-cutting.
- C01 is Accountable for WS5 (regulatory) and consulted on WS3 (token legality).
- C00 declares the final go/no-go for the T8 build based on traceability completeness.
