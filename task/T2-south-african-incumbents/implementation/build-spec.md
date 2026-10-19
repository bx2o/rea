# T2 implementation · build-spec.md

**Task:** T2.0 SA Big Four Reverse Engineering
**Owner:** C16 · **Convention authority:** C03.

---

## 1. Artefacts to produce

Four entity dossiers, each exactly the §4 template (9 files):

| Entity | Folder | Files |
|---|---|---|
| Standard Bank | `research/banks/standard-bank/` | README, 01–08, evidence-ledger.json |
| FNB | `research/banks/fnb/` | README, 01–08, evidence-ledger.json |
| ABSA | `research/banks/absa/` | README, 01–08, evidence-ledger.json |
| Nedbank | `research/banks/nedbank/` | README, 01–08, evidence-ledger.json |

## 2. Per-file content contract

| File | Must contain |
|---|---|
| README.md | index, one-paragraph exec summary, evidence legend |
| 01-identity-and-financials.md | legal name, JSE ticker, HQ, ownership, licence status, customer/deposit counts, headline financials **with reporting period** |
| 02-technology-and-systems.md | CBS family, cloud region, app delivery model, auth primitives, integration switches, third parties |
| 03-products-and-pricing.md | account ladder + monthly fees, transaction pricing, rewards-linked pricing, acquiring economics |
| 04-rewards-and-behaviour.md | loyalty engine traced action➔points➔tier➔redemption, partner funding, velocity |
| 05-human-capital.md | named execs, reporting lines, eng salary bands (ZAR), headcount, B-BBEE |
| 06-regulatory-and-risk.md | regulator relationships, licences, enforcement, data residency, exploitable gaps |
| 07-rea-reverse-engineering.md | **4 buckets**: Seen / Recovered Graph / Limitations / Unknowns |
| 08-stremiium-implications.md | ADOPT / ADAPT / AVOID / BEAT decisions |
| evidence-ledger.json | conformant ledger (§6) with `rea_status` |

## 3. Key acceptance tests

| Test | Method | Pass |
|---|---|---|
| T-DOSSIER-9 | 9 files present per folder | ✅/❌ |
| T-LEDGER | ledger validates; every claim has `evidence_class`+`source_ref` | ✅/❌ |
| T-BUCKETS | 07 contains all four evidentiary buckets | ✅/❌ |
| T-FILTER | 08 classifies each major finding ADOPT/ADAPT/AVOID/BEAT | ✅/❌ |
| T-PERIOD | every financial figure cites a reporting period | ✅/❌ |
| T-EBUCKS | T2.2 models eBucks end-to-end with UNKNOWN server-side noted | ✅/❌ |

## 4. High-value forensic targets

- **eBucks (FNB)** — the single most important mechanic; reverse observable tier math even without REA.
- **Shyft (Standard Bank)** — multi-currency wallet model; forex spread mechanics.
- **ABSA cloud** — public migration narrative; multi-cloud posture.
- **Nedbank Avo** — marketplace attach-rate economics.

## 5. Invocation (when REA available)

```bash
npx -y rea-agents@latest analyze-javascript-application <app-path> --json > research/banks/<entity>/rea-output.json
```
Output JSON is evidence input only; the dossier 07 file interprets it into the 4 buckets.
