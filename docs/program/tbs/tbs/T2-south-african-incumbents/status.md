# T2 — SA Big Four Reverse Engineering · status.md

**Program:** `SC-REA-NEOBANK-5.0`
**Task:** T2.0 SA Big Four Reverse Engineering (Standard Bank, FNB, ABSA, Nedbank)
**Owner council:** Multi-Squad Taskforce — lead C16 Banking-Fintech (`C16-banking-fintech-captain`)
**Supporting councils:** C09 Marketing (`C09-chief-marketing-officer`), C11 Dev-Engineering (`C11-dev-engineering-captain`), C06 Engineering-Infra (`C06-chief-technology-officer`), C15 Product (`C15-product-management-captain`), C10 Finance-IR (`C10-chief-financial-officer`)
**Status:** `ACTIVE`
**Last updated:** 2026-10-19

---

## 1. Mission

Produce evidentiary dossiers on South Africa's Big Four banks so Stremiium can copy what works,
avoid their legacy cost structures, and strike at their weaknesses. These are the incumbents whose
customer base Stremiium must peel away: Standard Bank (incl. Shyft), FNB (incl. eBucks — the loyalty
benchmark), ABSA (cloud migration), Nedbank (Money App + Avo).

## 2. Scope

Per entity, produce the 9-file dossier (`README` + 01–08 + `evidence-ledger.json`, brief §4):
- T2.1 Standard Bank — systems + Shyft reversing → `research/banks/standard-bank/`
- T2.2 FNB — app + **eBucks algorithmic deconstruction** → `research/banks/fnb/`
- T2.3 ABSA — systems + cloud-migration analysis → `research/banks/absa/`
- T2.4 Nedbank — Money App + Avo ecosystem reversing → `research/banks/nedbank/`

Emphasis: CBS family, app delivery/auth model, payment-rail switches, fee ladders, and the loyalty
engine (eBucks is the primary mechanic to reverse).

## 3. Entrance / Exit criteria

| Gate | Criterion | State |
|---|---|---|
| Entrance | T1 environment scaffold available (public-source path) | ✅ |
| Entrance | Brief + TASK_INDEX read | ✅ |
| Exit | 4 dossiers, each 9 files, schema-complete | ⏳ |
| Exit | Each `07-rea-reverse-engineering.md` uses the 4 evidentiary buckets | ⏳ |
| Exit | Each `evidence-ledger.json` validates; REA status stated | ⏳ |
| Exit | Each `08-stremiium-implications.md` ends in ADOPT/ADAPT/AVOID/BEAT | ⏳ |
| Exit | C12 evidence-class audit passed | ⏳ |

## 4. Dependency map

```
T1 ──► T2 (this) ──► T7.1 core-banking spec
               └──► T7 unified blueprint (loyalty/behaviour inputs from T2.2)
```
T2.2 (eBucks) feeds T3.2 Discovery Vitality comparison and the T7 behavioural-rewards engine design.

## 5. Risk register

| # | Risk | L | I | Mitigation | Owner |
|---|---|---|---|---|---|
| R1 | REA not installed → no bytecode-level reversing (esp. Shyft/eBucks) | H | H | Public-source + app-store metadata; label INFERRED; queue REA run | C16/C11 |
| R2 | eBucks algorithm is server-side → fundamentally UNKNOWN | H | M | Reverse observable tiers/fee rules; model as black box | C09 |
| R3 | Financial figures taken from mismatched reporting periods | M | M | Cite period per figure; C10 review | C10 |
| R4 | Over-claiming "Seen" from marketing copy | M | H | C12 gate; require citable source per item | C12 |
| R5 | ABSA cloud-migration detail is proprietary | H | M | Label UNKNOWN; cite public statements only | C06 |

## 6. Next actions

1. **C16** — seed `research/banks/standard-bank/` README + identity/financials.
2. **C09** — deconstruct eBucks: action➔points➔tier➔redemption, tier math, partner funding.
3. **C06** — ABSA cloud-migration posture (public statements only).
4. **C15** — Nedbank Money App + Avo ecosystem map.
5. **C03** — enforce ledger conformance; **C12** — evidence-class audit at close.
