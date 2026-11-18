# Discovery Bank — Entity Dossier

**Program:** `SC-REA-NEOBANK-5.0` (Stremiium NeoBank reverse-engineering)
**Lead councils:** C04 Strategy-Growth · C11 Dev-Engineering — **Contributing:** C16 Banking-Fintech · C10 Finance-IR
**Entity type:** Licensed retail bank (South Africa) · wholly-owned subsidiary of Discovery Limited (JSE: `DSY`)
**Dossier compiled:** 2026-10-19 · **REA status:** `not-executed`
**Evidence posture:** all "Seen" claims derive from public, citable sources only (filings, published pricing, vendor docs, app-store metadata). No APK/ASAR artefact was supplied.

## Executive summary

Discovery Bank is South Africa's **shared-value behavioural bank** — the first retail bank globally purpose-built on a Vitality-style behavioural economics engine rather than product-first banking. Launched publicly in March 2019 (soft launch November 2018) after its banking licence was approved in November 2017, the bank is a wholly-owned subsidiary of JSE-listed Discovery Limited, giving it a captive funnel into Discovery Health, Discovery Life, Discovery Insure and Vitality membership. Its differentiator is a **real-time, dynamic pricing engine**: a client's *Vitality Money* status (derived from six tracked financial behaviours, itself blended with Vitality Health and Vitality Drive engagement) directly moves everyday-account interest, demand-savings interest and borrowing rates, and gates rewards including **Discovery Miles** and up to **75% off flight prices**. Fees are subsidised by engagement and can be driven toward zero. The bank reached monthly break-even in H1 FY2025 and recorded its **first profitable period in H2 FY2025**, then a full-year profit of **R370 million in FY2026** on revenue of **R3.1 billion**, with **1.57 million clients**. Its ambition, per its FY2025 Pillar III disclosure, is **2 million clients and R3 billion profit by FY2029**. Technologically it runs a **SAP banking engine on a high-availability cloud**, with AI delivered through **Microsoft Azure OpenAI + Azure Databricks** ("Discovery AI"). For Stremiium, Discovery is the single most important benchmark for the **behavioural rewards loop** — and the sharpest illustration of a **closed-loop loyalty currency** Stremiium should deliberately open up with `$STM`.

## Dossier index

| File | Contents |
|---|---|
| `01-identity-and-financials.md` | Corporate identity, licensing, ownership, headline financials |
| `02-technology-and-systems.md` | Core banking, cloud, AI stack, integrations, auth |
| `03-products-and-pricing.md` | Account ladder, dynamic interest, FX, credit-card economics |
| `04-rewards-and-behaviour.md` | Vitality Money engine traced action ➔ status ➔ rate ➔ redemption |
| `05-human-capital.md` | Executives, engineering bands, headcount, B-BBEE |
| `06-regulatory-and-risk.md` | SARB/FSCA/NCR/FIC/POPIA posture and exploitable gaps |
| `07-rea-reverse-engineering.md` | Four-bucket forensic file (Evidence/Graph/Limitations/Unknowns) |
| `08-stremiium-implications.md` | ADOPT / ADAPT / AVOID / BEAT decisions |
| `evidence-ledger.json` | Machine-readable evidence index (≥8 entries) |

## Evidence legend

| Tag | Meaning |
|---|---|
| `[SEEN]` | Verifiable claim from a public, citable source (filing, published price, vendor doc, app-store listing). |
| `[INFERRED]` | Logical conclusion synthesised from one or more Seen items; not directly stated by the entity. |
| `[UNKNOWN]` | Unresolved; requires an REA extraction step (named inline) once artefacts are supplied. |

Confidence `high | medium | low` is carried per claim in `evidence-ledger.json`.

## Honesty statement

Per Program Brief §5, REA (`morluto/rea`) is **not installed** in this workspace and **no APK/ASAR artefacts exist**. Therefore **no item in this dossier claims decompilation or bytecode evidence**. Every artefact-dependent conclusion is marked `[INFERRED]` or `[UNKNOWN]` and names the extraction step that would resolve it.
