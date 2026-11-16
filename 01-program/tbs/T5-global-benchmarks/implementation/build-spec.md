# T5 implementation · build-spec.md

**Task:** T5.0 Global Benchmarks Dissection
**Owner:** C04 · **Convention authority:** C03.

---

## 1. Artefacts to produce

| Entity | Folder | Files |
|---|---|---|
| JPMorgan Chase (Kinexys) | `research/global-benchmarks/jpmorgan-chase/` | README, 01–08, evidence-ledger.json |
| Morgan Stanley | `research/global-benchmarks/morgan-stanley/` | README, 01–08, evidence-ledger.json |

## 2. Per-file content contract (highlights)

- **01 Identity** — legal identity, listing, financials (SEC filings, reporting period).
- **02 Technology** — Kinexys permissioned network, tokenised-deposit rails; Morgan Stanley platform
  stack (INFERRED). Mark private internals UNKNOWN.
- **03 Products** — institutional settlement products / wealth advisory tiers & fee model.
- **04 Rewards** — mostly n/a; record explicitly (no consumer loyalty engine at these firms).
- **06 Regulatory** — US/global posture; note non-transferability to SA (ADAPT).
- **07 REA** — 4 buckets; near-total UNKNOWN for internals.
- **08 Implications** — **principle-level** ADOPT/ADAPT/AVOID/BEAT for Stremiium (SA scale).

## 3. Acceptance tests

| Test | Method | Pass |
|---|---|---|
| T-DOSSIER-9 | 9 files per folder | ✅/❌ |
| T-KINEXYS | 07 documents tokenised-settlement model with evidence classes | ✅/❌ |
| T-JURIS | transferability to SA explicitly assessed (ADAPT) | ✅/❌ |
| T-LEDGER | ledgers validate | ✅/❌ |
| T-FILTER | 08 uses ADOPT/ADAPT/AVOID/BEAT at principle level | ✅/❌ |

## 4. Strategic priority

T5.1 is the ceiling-setter for Stremiium's tokenised-deposit and $STM settlement ambition — the
closest global analogue to a bank-issued settlement token. C04 must convert its findings into
SA-adapted principles (not copies) for the T7 blueprint.
