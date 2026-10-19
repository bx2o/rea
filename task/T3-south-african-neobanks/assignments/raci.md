# T3 assignments · raci.md

**Task:** T3.0 SA NeoBank & Challenger Analysis
**Legend:** R = Responsible · A = Accountable · C = Consulted · I = Informed

---

## 1. RACI by workstream × council

| Workstream | C01 | C02 | C03 | C04 | C05 | C06 | C07 | C08 | C09 | C10 | C11 | C12 | C13 | C14 | C15 | C16 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| WS1 TymeBank/Mambu | C | – | C | C | – | C | – | – | – | C | C | C | I | – | C | **R/A** |
| WS2 Discovery Vitality | C | – | C | **R** | – | – | – | – | C | C | **R** | C | – | – | C | C |
| WS3 African Bank SoftPOS | C | – | C | C | – | C | **C** | C | – | – | **R/A** | C | – | – | C | C |
| WS4 Vitality↔eBucks comparison | C | – | C | **R/A** | – | – | – | – | C | – | C | C | – | – | C | C |
| WS5 Evidence-ledger conformance | C | – | **R/A** | – | – | – | – | – | – | – | C | **C/A** | – | – | – | C |

## 2. Named council captains

| Council | Captain agent file (`.stremiium/agents/council-agents/`) | Role in T3 |
|---|---|---|
| C16 | `C16-banking-fintech-captain.agent.md` | Task owner; Tyme/Mambu authority (WS1) |
| C04 | `C04-chief-strategist.agent.md` | Owns Vitality engine + comparison (WS2/WS4) |
| C11 | `C11-dev-engineering-captain.agent.md` | Reversing + SoftPOS (WS2/WS3) |
| C06 | `C06-chief-technology-officer.agent.md` | Cloud/CBS architecture support |
| C07 | `C07-rainmaker-captain.agent.md` | Consulted for SoftPOS acquiring implications |
| C15 | `C15-product-management-captain.agent.md` | Product-ladder comparison |
| C10 | `C10-chief-financial-officer.agent.md` | Financials review |
| C12 | `C12-cybersecurity-intel-captain.agent.md` | Evidence-class audit |
| C03 | `C03-chief-librarian.agent.md` | Ledger conformance |

## 3. Escalation path

WS blocker ➔ WS R ➔ C16 (A) / C04 (A for WS2/WS4) ➔ Sparkling Curious.

## 4. Notes

- WS2/WS4 are jointly owned by C04 (strategy) and C11 (engineering) with C04 accountable.
- WS3's C07 "Consulted" is deliberate: SoftPOS has direct merchant-acquiring consequences.
- C03+C12 jointly gate ledger conformance for all three dossiers.
