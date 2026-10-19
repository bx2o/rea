# T6 assignments · raci.md

**Task:** T6.0 Stremiium Competitor Dissection
**Legend:** R = Responsible · A = Accountable · C = Consulted · I = Informed

---

## 1. RACI by workstream × council

| Workstream | C01 | C02 | C03 | C04 | C05 | C06 | C07 | C08 | C09 | C10 | C11 | C12 | C13 | C14 | C15 | C16 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| WS1 Sorare L2/NFT | C | – | C | C | – | C | – | C | C | – | C | C | **R/A** | – | C | – |
| WS2 Socios/Chiliz | C | – | C | C | – | – | – | C | C | – | C | C | **R/A** | – | C | – |
| WS3 Polymarket CTF/UMA | **C/A** | – | C | – | – | – | – | – | – | – | C | C | **R** | – | C | – |
| WS4 FanDuel/DK engine | C | – | C | C | – | C | – | – | C | – | **R/A** | C | C | – | C | – |
| WS5 Fanatics/FanCash | C | – | C | **R/A** | – | – | C | C | C | C | C | C | C | – | C | – |
| WS6 Feature parity matrix | C | – | C | C | – | – | C | C | C | – | C | C | C | – | **R/A** | C |
| WS7 Evidence-ledger conformance | C | – | **R/A** | – | – | – | – | – | – | – | C | **C/A** | – | – | C | – |

## 2. Named council captains

| Council | Captain agent file (`.stremiium/agents/council-agents/`) | Role in T6 |
|---|---|---|
| C15 | `C15-product-management-captain.agent.md` | Task co-owner; parity matrix (WS6) |
| C13 | `C13-web3-finance-captain.agent.md` | Task co-owner; on-chain mechanics (WS1–3) |
| C11 | `C11-dev-engineering-captain.agent.md` | FanDuel DFS engine (WS4) |
| C04 | `C04-chief-strategist.agent.md` | Fanatics/FanCash (WS5) |
| C01 | `C01-legal-compliance-captain.agent.md` | **Accountable** for gambling/securities risk (WS3) |
| C09 | `C09-chief-marketing-officer.agent.md` | Consulted on fan-engagement mechanics |
| C08 | `C08-chief-design-officer.agent.md` | Consulted on fan UX/collectibles presentation |
| C12 | `C12-cybersecurity-intel-captain.agent.md` | Evidence-class audit |
| C03 | `C03-chief-librarian.agent.md` | Ledger conformance |

## 3. Escalation path

WS blocker ➔ WS R ➔ C15/C13 (A) ➔ C01 (for WS3 legal) ➔ Sparkling Curious.

## 4. Notes

- WS3 (Polymarket) is legal-gated: C01 is Accountable because a wrong call creates regulatory exposure.
- WS6 is the synthesis output consumed by T7's feature set.
- C09/C08 consulted deliberately: these competitors are as much engagement/UX as technology.
