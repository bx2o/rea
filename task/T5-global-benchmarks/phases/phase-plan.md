# T5 phases · phase-plan.md

**Task:** T5.0 Global Benchmarks Dissection
**Primary council:** C04 Strategy-Growth (`C04-chief-strategist`)

---

## T5.1 — JPMorgan Chase Kinexys / JPM Coin Analysis
**Status:** `ACTIVE` · **Owner:** C13 (`C13-web3-finance-captain`) · **Support:** C10, C06
**Deliverable:** `research/global-benchmarks/jpmorgan-chase/` (9 files)
Focus: Kinexys platform, JPM Coin tokenised-deposit settlement, permissioned-network design,
institutional client model, regulatory posture (US).
Exit: tokenised-settlement architecture documented with evidence classes; direct implications for
$STM utility and Stremiium's settlement design (T7.2).

## T5.2 — Morgan Stanley Wealth Management Systems
**Status:** `ACTIVE` · **Owner:** C10 (`C10-chief-financial-officer`) · **Support:** C15
**Deliverable:** `research/global-benchmarks/morgan-stanley/` (9 files)
Focus: advisory/portfolio technology stack, client segmentation, fee model, digital channels.
Exit: wealth stack documented (public/INFERRED); implications for Stremiium's wealth/collectibles rails.

## Cross-phase: Principle extraction (C04)
**Owner:** C04 (`C04-chief-strategist`)
Translate benchmark findings into **SA-adapted design principles** rather than direct copies.
Output feeds T7 (blueprint) as the "world-class target" section.

---

## Phase dependency order

```
T1 ──► [T5.1 (Kinexys) | T5.2 (Morgan Stanley) parallel]
                        └─ C04 principle extraction ──► T7 (blueprint ceiling)
                        └─ T5.1 ─────────────────────► T7.2 ($STM settlement)
```
