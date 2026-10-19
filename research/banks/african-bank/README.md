# African Bank — Entity Dossier

**Program:** `SC-REA-NEOBANK-5.0` (Stremiium NeoBank reverse-engineering)
**Lead councils:** C11 Dev-Engineering · C16 Banking-Fintech — **Contributing:** C14 Customer-Success · C10 Finance-IR
**Entity type:** Licensed retail & commercial bank (South Africa) · group holding **African Bank Holdings Limited (ABHL)**
**Dossier compiled:** 2026-10-19 · **REA status:** `not-executed`
**Evidence posture:** all "Seen" claims derive from public, citable sources only (SENS filings, AFS, published pricing, product/FAQ pages). No APK/ASAR artefact was supplied.

## Executive summary

African Bank is a **consumer-credit originator turned full-service retail and commercial bank**. Founded in 1975, it collapsed into curatorship in 2014 and was rebuilt in 2016 under a consortium that includes the **South African Reserve Bank, a consortium of six banks, the Government Employees Pension Fund (managed by the Public Investment Corporation) and an employee trust**. It then bought its way into full-service and business banking by acquiring **Grindrod Bank** and **Ubank** (2022), giving it a deposit franchise and SME capability it previously lacked. Its proposition is **low-fee everyday banking plus high-margin unsecured lending**: the **MyWorld Account** carries a zero monthly fee with one transactional account plus up to **5 pockets**, overdraft up to **R100,000**, and the **Audacious Rewards** programme pays points for everyday banking behaviour (saving, repaying loans, card swipes, buying airtime/electricity) redeemable for airtime, data, groceries, travel and entertainment. On the merchant side it is developing **Tap2Glass**, an Android **softPOS** app that lets a merchant accept card payments on an NFC phone without a terminal. Financially it is mid-turnaround: **H1 FY2025 (six months to 31 March 2025) net profit rose 15% to R202m**, while the full FY2025 (year to 30 September 2025) showed improved asset quality (**credit loss ratio 5.3% vs 6.3%**) but press reporting of a **net loss of c.R624m attributed to transformation and integration costs** — a discrepancy Stremiium must resolve from the primary AFS. A JSE relisting is targeted for **2027**. For Stremiium, African Bank is the model for **unsecured lending economics, activity-based rewards and softPOS merchant acquiring** — and a cautionary tale on legacy-system integration risk.

## Dossier index

| File | Contents |
|---|---|
| `01-identity-and-financials.md` | Corporate identity, licensing, ownership, headline financials |
| `02-technology-and-systems.md` | Core banking, app, Tap2Glass softPOS, integrations |
| `03-products-and-pricing.md` | MyWorld, business accounts, credit cards, lending |
| `04-rewards-and-behaviour.md` | Audacious Rewards engine traced end-to-end |
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

Per Program Brief §5, REA (`morluto/rea`) is **not installed** and **no APK/ASAR artefacts exist** here. No item claims decompilation evidence; all artefact-dependent conclusions are `[INFERRED]`/`[UNKNOWN]` with the resolving REA step named in `07`. Where public sources conflict (notably the FY2025 profit/loss question), the conflict is stated rather than resolved by assumption.
