# T2 phases · phase-plan.md

**Task:** T2.0 SA Big Four Reverse Engineering
**Primary council:** C16 Banking-Fintech (`C16-banking-fintech-captain`)

---

## T2.1 — Standard Bank Systems & Shyft Reversing
**Status:** `ACTIVE` · **Owner:** C16 · **Support:** C06, C10
**Deliverable:** `research/banks/standard-bank/` (9 files)
Focus: CBS signature, Shyft (wallet/forex) architecture, UCount loyalty, payment rails, financials.
Exit: dossier complete, ledger valid, 07 uses 4 evidentiary buckets.

## T2.2 — FNB App & eBucks Algorithmic Deconstruction
**Status:** `ACTIVE` · **Owner:** C09 (`C09-chief-marketing-officer`) / C11
**Deliverable:** `research/banks/fnb/` (9 files)
Focus: eBucks action➔points➔tier➔redemption traced end-to-end; tier math; partner funding model;
currency velocity; retention effect. Also FNB app delivery/auth.
Exit: behavioural engine modelled as a black box with observed rules; UNKNOWN server-side noted.

## T2.3 — ABSA Systems & Cloud Migration Analysis
**Status:** `ACTIVE` · **Owner:** C06 (`C06-chief-technology-officer`)
**Deliverable:** `research/banks/absa/` (9 files)
Focus: cloud-migration posture (public statements), CBS family, Absa Rewards, rails.
Exit: migration narrative cited to public sources; proprietary detail labelled UNKNOWN.

## T2.4 — Nedbank Money App & Avo Ecosystem Reversing
**Status:** `ACTIVE` · **Owner:** C15 (`C15-product-management-captain`)
**Deliverable:** `research/banks/nedbank/` (9 files)
Focus: Money App UX/architecture, Avo marketplace ecosystem, Greenbacks, CBS family.
Exit: Avo ecosystem map; implications (ADOPT/ADAPT/AVOID/BEAT).

## Cross-phase: Loyalty synthesis track
**Owner:** C09 · **Feeds:** T3.2, T7

Compare UCount / eBucks / Absa Rewards / Greenbacks on a single axis (earn rate, tier thresholds,
redemption liquidity, funding) to inform Stremiium's behavioural engine.

---

## Phase dependency order

```
T1 ──► [T2.1 | T2.2 | T2.3 | T2.4 in parallel]
                          └─ loyalty synthesis (C09) ──► T3.2 comparison ──► T7 behavioural engine
```
