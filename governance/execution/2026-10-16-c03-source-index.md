---
doc_type: execution_ledger
council: "C03"
agent: "AGT-C03-SOURCES"
date: "2026-10-16"
---
# C03 Execution Ledger — Source Library Index (Admin-Knowledge)

- **TASK:** Systematically extract every source URL cited across the 231 markdown artifacts under `research/`, de-duplicate, and build a master categorised source library (`INDEX.md`, `BIBLIOGRAPHY.md`) plus an entity × department `COVERAGE-MATRIX.md`, per the source-citation contract.
- **PRIORITY:** High (cross-cutting consolidation; unblocks C01 consolidation and licence narrative).
- **DEADLINE:** 2026-10-16 (session).
- **SUCCESS_CRITERIA:** Every unique URL that literally appears in `research/` indexed exactly once; categorised into the eight mandated groups; each entry shows title, URL, category and citing entities (approx); a flat alphabetised bibliography with one-line descriptors; a coverage matrix derived from the on-disk file tree; a governance ledger entry. No fabricated URLs; public information only.
- **CONTEXT:** Sponsor = Sparkling Curious, South African Neobank launch programme (SAOS). Owning council C03 (Admin-Knowledge). Contract: `architecture/DATA-MODEL-CONTRACTS.md` §4 (Source Citation) and §6 (No-Fabrication Gate). Corpus produced by councils C13 (crypto), C16 (incumbents), C09 (marketing), etc.
- **RESULT:** **4 files** created under `source-library/` and `governance/execution/`. **953 unique source URLs** extracted from **7,201** total occurrences across **231** files (24 entities + landscape/cross-cutting/department artifacts). Categories (unique / %): Regulators & Government 50 (5.2%), Bank filings & results 89 (9.3%), Company/press 262 (27.5%), Crypto/exchange 69 (7.2%), Academic & research 30 (3.1%), News & media 141 (14.8%), App stores 28 (2.9%), Other 284 (29.8%). Coverage matrix: 24 entities × 9 departments; **12 in-scope department gaps** (all on `flex-one`, `jpmorgan-chase`, `jpmorgan-private-bank`, `morgan-stanley`); 0 stub files.
- **EVIDENCE:** `/workspace/source-library/INDEX.md`; `/workspace/source-library/BIBLIOGRAPHY.md`; `/workspace/source-library/COVERAGE-MATRIX.md`; extraction maps `/tmp/x/urlmap.json`, `/tmp/x/urlcount.json`.
- **KEY FINDINGS:** (1) 841/953 sources are single-entity citations — the tail is long and largely un-cross-validated. (2) Regulator coverage is lopsided: SARB (25 links) and FIC dominate, while FSCA, NCR, PASA and the Ombudsman each appear only once. (3) Grokipedia (28 links, `[UNVERIFIED]`-class secondary wiki) is a recurring single source — claims resting on it fail the ≥2-independent-source rule and should be `partial`. (4) Primary filings (integrated/annual reports, SENS, `reporting.standardbank.com`) exist but several bank financials lean on market-data aggregators. (5) Competitor entities lack `people`/`customer`/`partnerships`/`banking` coverage by design (thematic template).
- **OPEN ITEMS:** Reconcile per-source notes (`sources/SRC-XXXX.md`) against this index; add a human-reviewed title/descriptor pass over the 284 `Other` entries; periodically re-verify point-in-time app-store and market-data citations.
