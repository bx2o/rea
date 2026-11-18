# T7 audit · inventory.md

**Task:** T7.0 Stremiium NeoBank Unified Blueprint
**Owner:** C00 Sparkling Curious
**Evidence date:** 2026-10-19

---

## 1. What exists

| Asset | State | Evidence class |
|---|---|---|
| Target stack definition (brief §8) | defined | SEEN (brief) |
| `$STM` tokenomics (brief §8) | defined (1bn supply, buy-back/burn, fee discount) | SEEN (brief) |
| Council context (C16 banking, C13 web3, C01 legal) | present | SEEN (repo) |
| `architecture/` tree | **absent** | — |
| `architecture/core-banking/`, `payment-rails/`, `web3-bridge/`, `regulatory-compliance/` | **absent** | — |

## 2. What is missing

| Gap | Resolves via |
|---|---|
| No `architecture/` tree or specs | T7.x |
| No core-banking/CBS implementation spec | T7.1 |
| No PayShap/BankservAfrica integration spec | T7.1 |
| No $STM utility / MPC wallet design | T7.2 |
| No FSCA/SARB regulatory dossier | T7.3 |
| Upstream T2–T6 dossiers empty (weak evidence base) | T2–T6 |
| No traceability matrix (decision → source finding) | T7 (C00) |

## 3. Evidence present vs absent

**Present:**
- The program's **own target design** (brief §8) — this is authoritative SEEN for *what Stremiium intends*.
- Regulatory framework knowledge (FSCA CASP, FICA, SARB FinSurv, POPIA, NCA, NGB).

**Absent:**
- Validated competitor evidence (T2–T6 empty) → decision traceability currently impossible.
- Vendor confirmation of Mambu CBS capabilities / PayShap integration specifics.

## 4. Blueprint workstream checklist

| Workstream | Output folder | Owner | Status |
|---|---|---|---|
| T7.1 Core banking | `architecture/core-banking/` | C16 | not started |
| T7.1 Payment rails | `architecture/payment-rails/` | C16 | not started |
| T7.2 $STM + MPC wallet | `architecture/web3-bridge/` | C13 | not started |
| T7.3 Regulatory dossier | `architecture/regulatory-compliance/` | C01 | not started |
| Traceability matrix | `task/T7-.../implementation/` | C00 | not started |

## 5. Audit verdict

T7 is the **synthesis gate**: it cannot be meaningfully built until T2–T6 produce content, and it
**must not** fabricate evidence. Its evidentiary posture is *prescriptive* (design decisions), not
forensic — but each prescription must cite a source finding. Currently `architecture/` is absent and
upstream evidence is empty, so T7 is `ACTIVE` but **evidence-blocked**.
