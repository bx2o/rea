# First National Bank (FirstRand Group) — Entity Dossier

| Field | Value |
|---|---|
| Program | SC-REA-NEOBANK-5.0 |
| Entity | FirstRand Limited — **FNB** (First National Bank) is its retail/business banking division |
| Folder | `research/banks/fnb/` |
| Lead councils | C16 Banking-Fintech, C09 Marketing-Comms, C11 Dev-Engineering |
| JSE ticker | **FSR** |
| REA status | **not-executed** — no APK/ASAR artefacts supplied (see `07`) |
| Last updated | 2026-10-19 |

## Executive summary

FirstRand's FNB is the profitability benchmark of South African retail banking and the incumbent whose
**behavioural rewards machine** Stremiium most directly has to beat. FNB runs a hybrid mobile app
(React Native shell over webview components) that fronts an in-house middleware layer sitting over the
Hogan core banking system, with Kafka event-driven integration, real-time API layers and strong
biometric auth. Its product ladder (Easy → Aspire → Premier → Private Clients/Wealth, plus Gold
Business) is bundled with ancillary businesses — **FNB Connect** (MVNO) and **nav>>** lifestyle tools —
that raise switching cost. The crown jewel is **eBucks Rewards**: a five-level behavioural programme
where tier status is earned through product adoption, card usage, app logins and auto-sweep behaviour,
funded by merchant partners (Checkers, Engen, iStore, flights) that discount up to ~40%. FNB
consistently posts group ROE above ~19% with a cost-to-income ratio around 51–53% — the efficiency
Stremiium must plan against. The exploitable seams are eBucks complexity and its merchant-partner
dependence, a closed rewards currency, and the absence of any digital-asset or tokenised-loyalty
convergence.

## Dossier map

| File | Contents |
|---|---|
| `01-identity-and-financials.md` | Legal identity, listing, ownership, licensing, headline financials |
| `02-technology-and-systems.md` | CBS signature, cloud, app stack, auth, payment rails |
| `03-products-and-pricing.md` | Account ladder, fees, NIM/NIR, merchant economics |
| `04-rewards-and-behaviour.md` | eBucks behavioural engine traced end-to-end |
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

> **Honesty note.** REA (`morluto/rea`) is **not installed** and **no** FNB app artefact has been
> supplied. No item claims decompilation evidence. The app framework claim (React Native + webview) is
> treated as **publicly reported / INFERRED**, not extracted. eBucks tier math is server-side and
> labelled UNKNOWN.
