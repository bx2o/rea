# Sorare — Dossier Index

**Program:** `SC-REA-NEOBANK-5.0` · **Task:** T6.1
**Lead council:** C13 (Web3-Finance) · **Support:** C15 (Product), C11 (Dev), C01 (Legal)
**Entity folder:** `research/web3-competitors/sorare/`
**Evidence state:** REA **not executed** — no APK/ASAR/bytecode artefact supplied.
**Last updated:** 2026-10-19

## Executive summary (one paragraph)

Sorare is a Paris-headquartered fantasy-sports platform that issues officially licensed
digital player cards as non-fungible tokens and lets users field those cards in scored
fantasy competitions. It pioneered a mainstream "collectible + gameplay + secondary market"
loop on Ethereum via StarkWare's **StarkEx Validium ZK-rollup**, which delivers gasless
minting and transfers to retail users. Its commercial engine is a three-currency surface
(fiat top-ups, ETH, and card scarcity tiers) feeding primary auctions, a secondary
marketplace with a platform fee, and tournament prize pools paid in ETH and rare cards.
For Stremiium, Sorare is the global reference for **licensed digital collectibles + skill
competition**, and the benchmark against which a South-African phygital collectibles line
should be judged. All chain-level and fee-level specifics in this dossier carry the REA
caveat: nothing was decompiled here.

## File map

| File | Purpose |
|---|---|
| `README.md` | This index + summary + evidence legend |
| `01-identity-and-financials.md` | Corporate identity, licensing, ownership, funding, financials |
| `02-technology-and-systems.md` | StarkEx/Starknet stack, app delivery, auth, integrations |
| `03-products-and-pricing.md` | Scarcity tiers, auctions, marketplace fees, tournaments |
| `04-rewards-and-behaviour.md` | Loyalty loop: action ➔ currency ➔ tier ➔ redemption |
| `05-human-capital.md` | Founders, execs, engineering bands, headcount |
| `06-regulatory-and-risk.md` | Home-market (FR/EU/UK/US) + South Africa (FSCA/NGB/POPIA) |
| `07-rea-reverse-engineering.md` | Four-bucket forensic file (Seen/Inferred/Unknown/Limitations) |
| `08-stremiium-implications.md` | ADOPT / ADAPT / AVOID / BEAT decisions |
| `evidence-ledger.json` | Machine-readable evidence index |

## Evidence legend

* **SEEN** — verifiable from a citable public source (filing, published pricing, official docs, app-store metadata). No decompiled artefact was used.
* **INFERRED** — logically derived from Seen evidence; explicitly names the extraction step that would confirm it.
* **UNKNOWN** — server-side/proprietary logic that no public source resolves.
* **LIMITATION** — a known boundary on what could be examined (no artefact, geoblock, obfuscation).

> **Honesty rule (Program Brief §5):** REA (`morluto/rea`) is not installed and no Sorare
> binary/ASAR was supplied. Therefore no item here claims decompiler provenance. Any
> on-chain address, TVL, or user-count figure is deliberately omitted unless it comes from
> a named public document, and even then is labelled as requiring explorer/contract
> verification.
