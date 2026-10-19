# FanDuel / DraftKings — Dossier Index

**Program:** `SC-REA-NEOBANK-5.0` · **Task:** T6.4
**Lead council:** C11 (Dev-Engineering) · **Support:** C01 (Legal), C15 (Product), C13 (Web3)
**Entity folder:** `research/web3-competitors/fanduel/`
**Evidence state:** REA **not executed** — no APK/ASAR artefact supplied.
**Last updated:** 2026-10-19

> **Scope note:** the brief treats **FanDuel as primary**, with DraftKings as the paired US
> market leader. This dossier foregrounds FanDuel and references DraftKings where the two
> share architecture (DFS + regulated sportsbook).

## Executive summary (one paragraph)

FanDuel is a US-focused **daily fantasy sports (DFS), regulated online sports betting, and
online casino** operator, owned by **Flutter Entertainment**. It sits at the opposite end of
the spectrum from the Web3 entities in this set: fully centralised, heavily licensed,
real-money, and regulated **state-by-state** in the US. Its engineering moat is operational,
not cryptographic — **real-time sports-data ingestion** (via feeds such as Sportradar and
Genius Sports), **sub-second odds engines**, **GeoComply geofencing** for location
compliance, **AML/KYC**, **responsible-gaming** controls, and **anti-collusion monitoring**
across DFS contests. For Stremiium, FanDuel is the reference for *regulated real-money
engagement done at scale* — and the clearest case of why a prediction/DFS line must be
licensed, geo-fenced and monitored rather than merely tokenised. All app-internal specifics
carry the REA caveat: nothing was decompiled here.

## File map

| File | Purpose |
|---|---|
| `README.md` | This index + summary + evidence legend |
| `01-identity-and-financials.md` | Corporate identity, ownership (Flutter), licensing, financials |
| `02-technology-and-systems.md` | Odds engine, data feeds, geofencing, KYC, app stack |
| `03-products-and-pricing.md` | DFS, sportsbook, casino, pricing/vig, promotions |
| `04-rewards-and-behaviour.md` | Loyalty loop: action ➔ currency ➔ tier ➔ redemption |
| `05-human-capital.md` | Execs, engineering bands, headcount |
| `06-regulatory-and-risk.md` | US state regime + UK + South Africa (FSCA/NGB/POPIA) |
| `07-rea-reverse-engineering.md` | Four-bucket forensic file |
| `08-stremiium-implications.md` | ADOPT / ADAPT / AVOID / BEAT for the DFS line |
| `evidence-ledger.json` | Machine-readable evidence index |

## Evidence legend

* **SEEN** — citable public source (parent-company filings, published pricing, official docs, app-store metadata).
* **INFERRED** — derived logically; names the extraction step to confirm.
* **UNKNOWN** — server-side/proprietary or unverified; never fabricated.
* **LIMITATION** — known exam boundary (no artefact, geoblock, obfuscation).

> **Honesty rule:** REA is not installed and no FanDuel artefact was supplied. No licence
> number, revenue figure, or user count is asserted unless from a named public filing; all
> app-internal claims are labelled.
