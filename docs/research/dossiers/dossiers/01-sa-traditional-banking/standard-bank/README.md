# Standard Bank Group — Entity Dossier

| Field | Value |
|---|---|
| Program | SC-REA-NEOBANK-5.0 |
| Entity | Standard Bank Group Limited (operating brand **Stanbic** outside South Africa) |
| Folder | `research/banks/standard-bank/` |
| Lead councils | C16 Banking-Fintech, C10 Finance-IR |
| JSE ticker | **SBK** |
| REA status | **not-executed** — no APK/ASAR artefacts supplied (see `07`) |
| Last updated | 2026-10-19 |

## Executive summary

Standard Bank Group is Africa's largest bank by assets and the deliberate, scale-first incumbent that
Stremiium must both learn from and route around. It is a JSE-listed (`SBK`) universal bank whose South
African franchise runs a four-rung retail ladder (MyMo → Elite → Prestige → Private Banking) over a
modernised core — a Finacle-based core banking layer sitting on multi-cloud (AWS/Azure) infrastructure
that replaced legacy IBM mainframe processing — fronted by the Standard Bank Mobile Banking app, the
Shyft forex/travel app and the OneHub B2B portal. Its payments reach runs across BankservAfrica rails
and the PayShap real-time low-value scheme, and its behavioural lock-in is delivered through **UCount
Rewards** (fuel via Caltex/Astron Energy, tiered grocery earn). Standard Bank is SARB Prudential
Authority regulated, has historically run a Tier 1 capital adequacy ratio above 14.5% and a return on
equity of roughly 15–16%. Its strengths for Stremiium to copy are multi-cloud core portability, a
mature rewards-velocity engine and B2B/forex product breadth; its exploitable weaknesses are a
suite-of-apps fragmentation (no single super-app), reward earn that is still merchant-partner-bound,
and no public digital-asset/banking convergence. Every financial figure below is qualified by evidence
class because REA extraction has not run.

## Dossier map

| File | Contents |
|---|---|
| `01-identity-and-financials.md` | Legal identity, listing, ownership, licensing, headline financials |
| `02-technology-and-systems.md` | CBS signature, cloud, app stack, auth, payment rails |
| `03-products-and-pricing.md` | Account ladder, fees, NIM/NIR, merchant economics |
| `04-rewards-and-behaviour.md` | UCount behavioural engine traced end-to-end |
| `05-human-capital.md` | Executives, engineering bands, headcount, B-BBEE |
| `06-regulatory-and-risk.md` | Regulator posture, licences, gaps |
| `07-rea-reverse-engineering.md` | Four-bucket forensic file (Seen/Recovered/Limitations/Unknowns) |
| `08-stremiium-implications.md` | ADOPT / ADAPT / AVOID / BEAT decisions |
| `evidence-ledger.json` | Machine-readable evidence index (schema §6 of brief) |

## Evidence legend

| Class | Meaning | Permitted sources in this dossier |
|---|---|---|
| **SEEN** | Directly verifiable statement | Public filings, published fee schedules, app-store metadata, official docs |
| **INFERRED** | Logical derivation from Seen evidence | Architecture/state-machine reasoning over the Seen set |
| **UNKNOWN** | Unresolvable without REA extraction | Server-side logic, private APIs, artefact-dependent strings |

| Confidence | Meaning |
|---|---|
| high | Corroborated by ≥1 authoritative public source; stable over time |
| medium | Single public source or approximate figure; verify before reuse |
| low | Market estimate or unconfirmed; treat as hypothesis |

> **Honesty note.** REA (`morluto/rea`) is **not installed** in this workspace and **no** APK/ASAR/IPA
> artefacts have been supplied. No item in this dossier claims decompilation evidence. All
> artefact-dependent findings are labelled INFERRED or UNKNOWN, and `07` names the REA extraction step
> that would resolve each Unknown. Quantitative figures are approximate and must be re-verified against
> the cited source before any decision is taken on them.
