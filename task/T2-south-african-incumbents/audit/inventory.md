# T2 audit · inventory.md

**Task:** T2.0 SA Big Four Reverse Engineering
**Owner:** C16 Banking-Fintech
**Evidence date:** 2026-10-19

---

## 1. What exists

| Asset | State | Evidence class |
|---|---|---|
| `research/banks/standard-bank/` | folder present, **empty** | SEEN (repo) |
| `research/banks/fnb/` | folder present, **empty** | SEEN (repo) |
| `research/banks/absa/` | folder present, **empty** | SEEN (repo) |
| `research/banks/nedbank/` | folder present, **empty** | SEEN (repo) |
| Dossier template (brief §4) | defined, not instantiated | SEEN (brief) |
| Evidence-ledger schema (brief §6) | defined, not instantiated | SEEN (brief) |

## 2. What is missing

| Gap | Detail | Resolves via |
|---|---|---|
| No dossier files | All four folders lack README/01–08/ledger | T2.x |
| No REA runs | REA not installed → no app decompilation of Shyft/FNB/ABSA/Nedbank apps | T1.1 → T2 |
| No app artefacts | No APK/ASAR for any Big Four app | Exec drop |
| No financials captured | No revenue/NIM/cost-to-income per period | T2.x + C10 |
| No eBucks model | Behavioural engine not yet reverse-engineered | T2.2 |

## 3. Evidence present vs absent

**Present (obtainable, citable):**
- JSE filings & integrated annual reports (Standard Bank, FNB/FirstRand, ABSA, Nedbank).
- Published fee schedules / pricing guides.
- App-store metadata (permissions, size, version history, screenshots).
- Public cloud/technology announcements (esp. ABSA).

**Absent:**
- Decompiled app bytecode / function signatures (needs REA + artefacts).
- Server-side loyalty computation (eBucks) — inherently UNKNOWN.
- Internal CBS configuration.

## 4. Target recon checklist (per bank)

| Dimension | Standard Bank | FNB | ABSA | Nedbank |
|---|---|---|---|---|
| CBS family marker | ? | ? | ? | ? |
| App delivery model | native/RN/webview | ? | ? | ? |
| Auth primitives | ? | ? | ? | ? |
| Rails (Bankserv/PayShap/RTC/EFT) | ? | ? | ? | ? |
| Loyalty engine | UCount | **eBucks** | Absa Rewards | Greenbacks |
| Cloud region | ? | ? | announced | ? |

## 5. Audit verdict

Scaffolding is ready but **zero content** exists. T2's evidentiary ceiling is INFERRED until REA and
artefacts arrive; the loyalty engines (esp. eBucks) will remain partly UNKNOWN regardless, because
their computation is server-side.
