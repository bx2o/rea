# Polymarket — Dossier Index

**Program:** `SC-REA-NEOBANK-5.0` · **Task:** T6.3
**Lead council:** C13 (Web3-Finance) · **Support:** C15 (Product), C11 (Dev), C01 (Legal)
**Entity folder:** `research/web3-competitors/polymarket/`
**Evidence state:** REA **not executed** — no APK/ASAR artefact supplied.
**Last updated:** 2026-10-19

## Executive summary (one paragraph)

Polymarket is a decentralised **prediction market** built on **Polygon PoS**. It settles
via the **Gnosis Conditional Tokens Framework (CTF)** and uses a **hybrid central-limit
order book (CLOB)**: orders are matched off-chain for speed and cost, and settlement
happens on-chain. Market resolution is delegated to the **UMA Optimistic Oracle**, and
collateral is **USDC**. Trading has historically been **zero-fee**, with liquidity funded
by maker incentives rather than an explicit take rate. It is the global reference for
"information-market" mechanics, and the sharpest regulatory case study in this set: a 2022
**CFTC** settlement forced it to geoblock US users, followed by a later US re-entry via an
acquired CFTC-licensed venue. For Stremiium, Polymarket is the benchmark for a **prediction
market line** — and its compliance history is the single biggest warning. All chain-level
and contract specifics carry the REA caveat: nothing was decompiled here.

## File map

| File | Purpose |
|---|---|
| `README.md` | This index + summary + evidence legend |
| `01-identity-and-financials.md` | Corporate identity, ownership, financials |
| `02-technology-and-systems.md` | CTF, hybrid CLOB, UMA oracle, Polygon, USDC |
| `03-products-and-pricing.md` | Binary/negative-risk markets, fees, incentives |
| `04-rewards-and-behaviour.md` | Loyalty loop for a prediction market |
| `05-human-capital.md` | Founder, execs, bands, headcount |
| `06-regulatory-and-risk.md` | CFTC history + South Africa (FSCA/NGB/POPIA) |
| `07-rea-reverse-engineering.md` | Four-bucket forensic file |
| `08-stremiium-implications.md` | ADOPT / ADAPT / AVOID / BEAT for the prediction line |
| `evidence-ledger.json` | Machine-readable evidence index |

## Evidence legend

* **SEEN** — citable public source (CFTC order, official docs, app-store metadata, published pricing).
* **INFERRED** — derived logically; names the extraction step to confirm.
* **UNKNOWN** — server-side/proprietary or unverified; never fabricated.
* **LIMITATION** — known exam boundary (no artefact, geoblock, obfuscation).

> **Honesty rule:** REA is not installed and no Polymarket artefact was supplied. No
> contract address, TVL, or volume figure is asserted unless from a named public document;
> any chain claim is marked as requiring explorer/contract verification.
