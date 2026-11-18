# T5 audit · inventory.md

**Task:** T5.0 Global Benchmarks Dissection
**Owner:** C04 Strategy-Growth
**Evidence date:** 2026-10-19

---

## 1. What exists

| Asset | State | Evidence class |
|---|---|---|
| `research/global-benchmarks/jpmorgan-chase/` | folder present, **empty** | SEEN (repo) |
| `research/global-benchmarks/morgan-stanley/` | folder present, **empty** | SEEN (repo) |
| Dossier template (brief §4) | defined | SEEN (brief) |

## 2. What is missing

| Gap | Resolves via |
|---|---|
| No dossier content for either benchmark | T5.x |
| No tokenised-deposit architecture model | T5.1 |
| No wealth-management systems map | T5.2 |
| No REA decompilation (engine not installed; banks rarely ship analysable JS) | T1.1 → T5 |

## 3. Evidence present vs absent

**Present (citable):**
- SEC filings / investor day material (JPMorgan, Morgan Stanley).
- Public Kinexys (ex-Onyx) product and patent publications.
- Public research on tokenised deposits and settlement.

**Absent:**
- Internal settlement-engine implementation, custody architecture.
- Private wealth platforms and advisory algorithms.
- Any analysable application artefact.

## 4. Benchmark recon checklist

| Dimension | JPMorgan (Kinexys) | Morgan Stanley |
|---|---|---|
| Core theme | tokenised deposits / JPM Coin | wealth management systems |
| Settlement model | ? (permissioned) | n/a |
| Custody/digital asset | Kinexys Digital Assets | advisory |
| Client segment | institutional | HNW/wealth |
| Public filings | SEC / investor day | SEC / investor day |
| Transferable to SA? | principles (ADAPT) | principles (ADAPT) |

## 5. Audit verdict

Scaffolded, **content absent**. T5 sets the *aspiration ceiling*; expect mostly INFERRED (public) and
UNKNOWN (private). The strategic output is not replication but **principle extraction** adapted to
SA law and Stremiium's scale.
