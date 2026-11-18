# T3 phases · phase-plan.md

**Task:** T3.0 SA NeoBank & Challenger Analysis
**Primary council:** C16 Banking-Fintech (`C16-banking-fintech-captain`)

---

## T3.1 — TymeBank Kiosk & Mambu CBS Forensics
**Status:** `ACTIVE` · **Owner:** C16 · **Support:** C06, C11
**Deliverable:** `research/banks/tymebank/` (9 files)
Focus: kiosk acquisition model & unit economics; Mambu cloud-native CBS evidence; GoTymeBank;
rails; fee ladder (low-cost positioning).
Exit: CBS hypothesis evidence-classed (SEEN vs INFERRED); kiosk economics modelled; implications.

## T3.2 — Discovery Bank Vitality Behavioural Engine
**Status:** `ACTIVE` · **Owner:** C04 (`C04-chief-strategist`) / C11
**Deliverable:** `research/banks/discovery-bank/` (9 files)
Focus: Vitality Money action➔points➔status➔reward loop, shared-value model, tier math, correlation
of behaviour to rate; compare directly to FNB eBucks (T2.2).
Exit: engine modelled end-to-end; server-side computation labelled UNKNOWN; comparison table with eBucks.

## T3.3 — African Bank MyWorld & Tap2Glass SoftPOS
**Status:** `ACTIVE` · **Owner:** C11 (`C11-dev-engineering-captain`)
**Deliverable:** `research/banks/african-bank/` (9 files)
Focus: MyWorld product ecosystem, Tap2Glass SoftPOS architecture (card-present on COTS device),
acquiring implications for C07.
Exit: SoftPOS flow mapped; MyWorld ecosystem; implications (esp. merchant acquiring for Stremiium).

---

## Phase dependency order

```
T2.2 (eBucks) ─► T3.2 (Vitality compare) ─┐
T1 ────────────► T3.1 (Mambu) ───────────┼─► T7 (behaviour engine + core banking)
T3.3 (SoftPOS) ───────────────────────────┘
```
