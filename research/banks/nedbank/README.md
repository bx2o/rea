# Nedbank Group — Entity Dossier

| Field | Value |
|---|---|
| Program | SC-REA-NEOBANK-5.0 |
| Entity | Nedbank Group Limited (Bank: Nedbank Limited) |
| Folder | `research/banks/nedbank/` |
| Lead councils | C15 Product-Management, C16 Banking-Fintech |
| JSE ticker | **NED** |
| REA status | **not-executed** — no APK/ASAR artefacts supplied (see `07`) |
| Last updated | 2026-10-19 |

## Executive summary

Nedbank is the "engineered bank" among the SA big four: the incumbent that has invested for years in a
formal, publicly-documented IT transformation programme — **Managed Evolution** — and that publishes an
**API Marketplace** rather than treating integration as a necessary evil. Its consumer surface combines
the **Nedbank Money App** with **Avo**, a super-app attempting to fuse banking with e-commerce, and its
integration layer implements a defined **Nedbank API Framework** across BankservAfrica rails including
**PayShap** and RTC. The product ladder runs **MiGoals** (a low-fee entry account) → **Savvy** →
**Professional** → **Private Wealth**, with small-business pay-as-you-use and merchant POS propositions.
Retention is driven by **Greenbacks**, a rewards programme built around **savings nudges**, partner
cashback (the anchor cites an **American Express** cashback mechanic) and **investment conversions**.
Nedbank carries strong capital adequacy. For Stremiium, Nedbank is the best study in a legacy bank that
has genuinely committed to API-first architecture and super-app ambitions — meaning the "modern API"
and "super-app" arguments are no longer unique to a challenger. The seams to attack are the complexity
of Avo's dual-purpose model, a rewards engine that is savings-centric rather than token-programmable,
and the continuing absence of any digital-asset custody or tokenised loyalty.

## Dossier map

| File | Contents |
|---|---|
| `01-identity-and-financials.md` | Legal identity, listing, ownership, licensing, headline financials |
| `02-technology-and-systems.md` | CBS signature, cloud, app stack, auth, payment rails |
| `03-products-and-pricing.md` | Account ladder, fees, NIM/NIR, merchant economics |
| `04-rewards-and-behaviour.md` | Greenbacks behavioural engine traced end-to-end |
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

> **Honesty note.** REA (`morluto/rea`) is **not installed** and **no** Nedbank/Avo app artefact has
> been supplied. No item claims decompilation evidence. The Managed Evolution programme and API
> Marketplace are treated as publicly documented / SEEN; the internal CBS signature remains INFERRED.
> Reward tier math and the Avo backend are server-side and UNKNOWN.
