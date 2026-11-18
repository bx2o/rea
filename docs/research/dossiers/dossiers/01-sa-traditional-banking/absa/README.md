# ABSA Group — Entity Dossier

| Field | Value |
|---|---|
| Program | SC-REA-NEOBANK-5.0 |
| Entity | Absa Group Limited (Bank: Absa Bank Limited) |
| Folder | `research/banks/absa/` |
| Lead councils | C16 Banking-Fintech, C06 Engineering-Infra |
| JSE ticker | **ABG** |
| REA status | **not-executed** — no APK/ASAR artefacts supplied (see `07`) |
| Last updated | 2026-10-19 |

## Executive summary

Absa Group is the South African incumbent defined by its **post-Barclays separation** — a bank that
rebuilt itself after Barclays plc unwound its controlling stake, and whose defining programmatic arc is
an **AWS-led cloud migration** combined with a heterogeneous core-processing estate (SAP and Finacle
running side by side). Absa reaches customers through the Absa Banking App, **Absa Pay**, and one of the
earliest bank **WhatsApp ChatBanking** deployments in the country. Its product ladder runs Transact →
Flexi Core → Ultimate → Wealth, with Islamic Banking and SME working-capital propositions broadening
the base. Retention is driven by **Absa Rewards** — a cashback and tiered grocery/fuel-rebate engine
with **Sasol** as a fuel partner. Absa is SARB Prudential Authority regulated and is an example of an
incumbent mid-transformation: cloud-forward, but carrying a duplicated processing estate and a rewards
programme that is less behaviourally elaborate than FNB's eBucks. For Stremiium, Absa is the clearest
case study in the **cost of a botched core modernisation** and in the value of a single, unified core
from day one; the seams to attack are duplicated back-ends, cashback-only rewards (no tokenised
loyalty) and the absence of digital-asset capability.

## Dossier map

| File | Contents |
|---|---|
| `01-identity-and-financials.md` | Legal identity, listing, ownership, licensing, headline financials |
| `02-technology-and-systems.md` | CBS signature, cloud, app stack, auth, payment rails |
| `03-products-and-pricing.md` | Account ladder, fees, NIM/NIR, merchant economics |
| `04-rewards-and-behaviour.md` | Absa Rewards engine traced end-to-end |
| `05-human-capital.md` | Executives, engineering bands, headcount, B-BBEE |
| `06-regulatory-and-risk.md` | Regulator posture, licences, gaps |
| `07-rea-reverse-engineering.md` | Four-bucket forensic file (Seen/Recovered/Limitations/Unknowns) |
| `08-stremiium-implications.md` | ADOPT / ADAPT / AVOID / BEAT decisions |
| `evidence-ledger.json` | Machine-readable evidence index (schema §6 of brief) |

## Evidence legend

| Class | Meaning | Permitted sources |
|---|---|---|
| **SEEN** | Directly verifiable statement | Public filings, published fee schedules, app-store metadata, official docs |
| **INFERRED** | Logical derivation from Seen evidence | Architecture/state-machine reasoning over the Seen set |
| **UNKNOWN** | Unresolvable without REA extraction | Server-side logic, private APIs, artefact-dependent strings |

| Confidence | Meaning |
|---|---|
| high | Corroborated by ≥1 authoritative public source |
| medium | Single public source or approximate figure |
| low | Market estimate or unconfirmed hypothesis |

> **Honesty note.** REA (`morluto/rea`) is **not installed** and **no** Absa app artefact has been
> supplied. No item claims decompilation evidence. The SAP+Finacle dual-processing claim is treated as
> publicly reported / INFERRED, not extracted. Reward tier math is server-side and UNKNOWN.
