---
doc_type: execution_ledger
council: "C16"
agent: "AGT-C16-SA-INCUMBENTS-A"
last_updated: "2026-10-16"
---

# Execution Ledger — C16 Incumbents (ABSA, Nedbank)

**TASK:** Reverse-engineer & research ABSA (Absa Group) and Nedbank (Nedbank Group) using only publicly available sources (WebSearch/WebFetch), producing an UnConsolidated research library per `architecture/DATA-MODEL-CONTRACTS.md`.

**PRIORITY:** High

**DEADLINE:** 2026-10-16 (session)

**SUCCESS_CRITERIA:**
- ≥10 files per bank matching the required topic set (overview, legal, financials, products+pricing CSV, marketing, technology, people, customer, partnerships, banking).
- Every file carries required YAML front-matter (bank, council "C16", department, status, confidence, sources, last_updated "2026-10-16").
- Every non-obvious claim cited with a markdown link and tagged [OBS]/[DER]/[INF]/[EST]/[UNK].
- No fabrication; unknowns explicitly marked.

**CONTEXT:** NeoBank launch competitive-intelligence programme (Sparkling Curious / SAOS). This pass covers two of the six SA incumbent banks. Public-only, passive research.

**RESULT:** COMPLETE.
- Created 22 files under `research/banks/absa/` (11) and `research/banks/nedbank/` (11), incl. `products.csv` for each.
- Corrected a brief assumption: Cape Epic is an **Absa** title property; Nedbank's flagship golf asset is the **Nedbank Golf Challenge**.
- ABSA FY2025: total income R115.7bn (+5.2%), headline earnings R24.8bn (+12%), ROE 15.0%, C2I 53.8%, NII R73.9bn, 13.1m customers, 37,033 employees, Level 1 B-BBEE, R10m FIC penalty (2025).
- Nedbank FY2025: total income R75.1bn, headline earnings R17.2bn (+2%), diluted HEPS 3,628c, ROE 15.4%, C2I 57.8%, 8.0m clients (first time), 25,795 permanent employees, Level 1 B-BBEE (8th year), R35m FIC penalty (2022), iKhokha acquisition (R1.65bn).
- Both banks flagged `[UNK]` where public data is unavailable (e.g., NPS/CSAT, exact marketing budgets, core-ledger vendors).

**EVIDENCE:**
- Files: `/workspace/research/banks/absa/**` and `/workspace/research/banks/nedbank/**`.
- Primary sources: Absa FY25 SENS/results booklet/integrated report; Nedbank FY25 highlights/booklet/analyst presentation/transcript; SARB (PA functions, PayShap roadmap, interchange paper); JSE/BusinessTech market comparison.
- Full source lists embedded in each artifact's front-matter and "Sources" section.
