# T5 — Global Benchmarks Dissection · status.md

**Program:** `SC-REA-NEOBANK-5.0`
**Task:** T5.0 Global Benchmarks Dissection
**Owner council:** C04 Strategy-Growth (`C04-chief-strategist`)
**Supporting councils:** C13 Web3-Finance (`C13-web3-finance-captain`), C10 Finance-IR (`C10-chief-financial-officer`), C06 Engineering-Infra (`C06-chief-technology-officer`)
**Status:** `ACTIVE`
**Last updated:** 2026-10-19

---

## 1. Mission

Dissect global best-in-class benchmarks to set the *ceiling* for Stremiium's ambition: JPMorgan's
**Kinexys / JPM Coin** (institutional tokenised settlement) and **Morgan Stanley** (wealth-management
systems). These define what "world-class" looks like for tokenised deposits and wealth rails —
the standard Stremiium's architecture must aim toward rather than merely match local peers.

## 2. Scope

- T5.1 JPMorgan Chase — Kinexys / JPM Coin analysis → `research/global-benchmarks/jpmorgan-chase/`
- T5.2 Morgan Stanley — wealth management systems → `research/global-benchmarks/morgan-stanley/`

Each entity → the 9-file §4 dossier.

## 3. Entrance / Exit criteria

| Gate | Criterion | State |
|---|---|---|
| Entrance | T1 scaffold available | ✅ |
| Exit | 2 dossiers, 9 files each | ⏳ |
| Exit | Kinexys tokenised-deposit architecture documented (INFERRED where private) | ⏳ |
| Exit | JPM Coin settlement model → implications for $STM / Stremiium settlement | ⏳ |
| Exit | Morgan Stanley wealth stack documented; advisory/portfolio mechanics mapped | ⏳ |
| Exit | C10 finance review passed | ⏳ |

## 4. Dependency map

```
T1 ──► T5 ──► T7.2 ($STM token utility / settlement design)
          └─► T7.3 (regulatory: institutional-grade posture)
C10 governs financial-benchmark interpretation.
```

## 5. Risk register

| # | Risk | L | I | Mitigation | Owner |
|---|---|---|---|---|---|
| R1 | Institutional systems largely private → mostly UNKNOWN | H | M | Cite public patents/docs; label INFERRED | C13/C10 |
| R2 | Jurisdictional mismatch (US/EU vs SA) → limited direct transferability | M | M | Extract principles; ADAPT for SA regulatory fit | C04 |
| R3 | Wealth-management specifics proprietary | H | M | Public disclosures + business model analysis | C10 |
| R4 | Over-claiming from marketing material | M | H | C12 evidence-class audit | C12 |

## 6. Next actions

1. **C13** — T5.1 Kinexys/JPM Coin tokenised-settlement model.
2. **C10** — T5.2 Morgan Stanley wealth stack + financial mechanics.
3. **C04** — translate benchmarks into Stremiium design principles (ADAPT for SA).
4. **C06** — infrastructure implications (settlement, custody, latency).
