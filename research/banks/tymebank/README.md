# TymeBank / GoTymeBank — Entity Dossier

**Program:** `SC-REA-NEOBANK-5.0` (Stremiium NeoBank reverse-engineering)
**Lead councils:** C16 Banking-Fintech · C06 Engineering-Infra — **Contributing:** C11 Dev-Engineering · C07 Sales-BizDev
**Entity type:** Licensed branchless digital retail bank (South Africa) · part of **Tyme Group** (HQ Singapore)
**Dossier compiled:** 2026-10-19 · **REA status:** `not-executed`
**Evidence posture:** all "Seen" claims derive from public, citable sources only (AFS, Pillar III, published pricing, vendor case studies, press). No APK/ASAR artefact was supplied.

## Executive summary

TymeBank is South Africa's **first fully-digital, branchless retail bank** to secure a full banking licence in ~18 years (registered by the SARB Prudential Authority in **September 2017**; launched to the public in **February 2019** after a December 2018 soft launch). Its defining innovation is a **distribution model, not a product**: instead of branches it uses **biometric self-service kiosks inside retail partners** (Pick n Pay, Boxer, TFG — several hundred stores), where a client opens an account and is issued an activated Visa debit card in about **five minutes**, using only an SA ID number. Underneath, it is **cloud-native**: a **Mambu SaaS core banking** system on **AWS** (the great majority of systems), with a home-grown Java/Docker stack and WSO2 API management. Products are deliberately sparse and low-cost: a **zero-monthly-fee EveryDay Account**, **GoalSave** tiered high-interest savings, **TymeAdvance** (salary-linked earned-wage access), and **TymePOS** (Android softPOS for merchants). Revenue is built from **interchange, card/kiosk issuance economics and value-added services** (airtime, electricity) rather than fees. Financially it has crossed into profitability and unicorn valuation: after a **US$250m Series D (December 2024) at ~US$1.5bn** led by Nubank, majority shareholder **African Rainbow Capital (Patrice Motsepe)** sits at ~40%. For FY2025 (year to 30 June 2025) **customers grew 21% to 11.6 million**, deposits **+22% to R7.7bn** and net advances **+17% to R2.25bn**. Internationally it exports the same engine as **GoTyme** in the Philippines, with Indonesia, Hong Kong and (planned) Vietnam. For Stremiium, TymeBank is the masterclass in **cheap acquisition + cloud-core economics**, and its **lack of a real loyalty currency** is the weakness Stremiium attacks.

## Dossier index

| File | Contents |
|---|---|
| `01-identity-and-financials.md` | Corporate identity, licensing, ownership, headline financials |
| `02-technology-and-systems.md` | Mambu CBS, AWS, kiosks, APIs, auth |
| `03-products-and-pricing.md` | EveryDay, GoalSave, TymeAdvance, TymePOS pricing |
| `04-rewards-and-behaviour.md` | Behavioural hooks without a loyalty currency |
| `05-human-capital.md` | Executives, engineering bands, headcount, B-BBEE |
| `06-regulatory-and-risk.md` | SARB/FSCA/NCR/FIC/POPIA posture and gaps |
| `07-rea-reverse-engineering.md` | Four-bucket forensic file |
| `08-stremiium-implications.md` | ADOPT / ADAPT / AVOID / BEAT decisions |
| `evidence-ledger.json` | Machine-readable evidence index (≥8 entries) |

## Evidence legend

| Tag | Meaning |
|---|---|
| `[SEEN]` | Verifiable claim from a public, citable source. |
| `[INFERRED]` | Logical conclusion synthesised from Seen items. |
| `[UNKNOWN]` | Unresolved; requires a named REA extraction step. |

## Honesty statement

Per Program Brief §5, REA (`morluto/rea`) is **not installed** and **no APK/ASAR artefacts exist** here. No item claims decompilation evidence; all artefact-dependent conclusions are `[INFERRED]`/`[UNKNOWN]` with the resolving REA step named in `07`.
