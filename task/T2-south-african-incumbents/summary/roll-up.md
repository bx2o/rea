# T2 summary · roll-up.md

**Task:** T2.0 SA Big Four Reverse Engineering
**Prepared by:** C16 Banking-Fintech (roll-up template, pre-filled with what is known).

---

## 1. Consolidated findings

| # | Finding | Evidence class | Source |
|---|---|---|---|
| F1 | Four incumbent dossiers are queued but **empty** — no content produced yet. | SEEN | repo `research/banks/` |
| F2 | All four banks are JSE-listed/regulated with public filings usable for 01/06. | SEEN | JSE / SARB |
| F3 | Their loyalty engines (UCount, eBucks, Absa Rewards, Greenbacks) are server-side → core computation UNKNOWN without internal access. | INFERRED→UNKNOWN | public product pages |
| F4 | FNB eBucks is the richest behavioural benchmark and the primary T2 target. | INFERRED | market observation |
| F5 | Shyft (Standard Bank) is the closest incumbent analogue to a multi-currency wallet. | INFERRED | public docs |
| F6 | No REA decompilation has occurred; app-level reversing pending T1.1 + artefacts. | SEEN | gap |

## 2. Decisions recorded

- **D1** — eBucks deconstruction is prioritised above all other T2 work (feeds T7 behavioural engine).
- **D2** — Loyalty engines modelled as black boxes on public tier/rate evidence; server-side declared UNKNOWN.
- **D3** — Financial figures must always carry a reporting period (C10 review).
- **D4** — No "Seen" claim without a citable source (C12 gate).

## 3. Status snapshot

| Sub-task | Status |
|---|---|
| T2.0 (parent) | ACTIVE |
| T2.1 Standard Bank | ACTIVE |
| T2.2 FNB / eBucks | ACTIVE |
| T2.3 ABSA | ACTIVE |
| T2.4 Nedbank | ACTIVE |

## 4. Preliminary strategic read (to be validated)

- **ADOPT** — tiered, partner-funded loyalty with fee-linked earning (eBucks-style), improved with
  on-chain settlement of rewards.
- **AVOID** — legacy mainframe CBS cost structure and slow release cadence.
- **BEAT** — incumbent cross-border FX spreads (Shyft) and low redemption liquidity.

## 5. Open questions

1. What CBS family does each bank actually run? — UNKNOWN (needs REA/internal).
2. Can any Big Four app artefact be obtained for decompilation? — Unknown.
3. What is the true eBucks partner funding split? — UNKNOWN (commercial).
