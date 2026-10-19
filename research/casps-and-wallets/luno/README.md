# Luno — Dossier Index

**Program:** `SC-REA-NEOBANK-5.0` · **Group:** `research/casps-and-wallets/` · **Entity #8** of the 17-entity roster
**Lead councils:** C13 (Web3-Finance), C01 (Legal-Compliance) · **Supporting:** C11, C16
**Task refs:** T4.0 (CASPs & Crypto Wallets Forensics), T4.1 (Luno Merkle PoR & ZAR Orderbook Dissection)
**Dossier compiled:** 2026-10-19 · **REA status:** `not-executed` (no APK/ASAR artefact supplied)

---

## Executive summary

Luno is a South African–founded (Cape Town, 2013, originally **BitX**) centralised crypto exchange and custodial wallet, now an independently-operated wholly-owned subsidiary of **Digital Currency Group (DCG)** following the September 2020 acquisition. Its strategic identity is *"compliance-as-a-competitive-strategy"*: it markets itself as a beginner-first, low-friction fiat on/off-ramp for the ZAR market and leans heavily on regulatory posture (**FSP No. 53314** under FAIS, **NCRCP22123** credit-provider registration) and transparency (**monthly Merkle-tree Proof of Reserves** attested by Moore under ISRS 4400 (Revised)). For Stremiium, Luno is the closest domestic comparator for a **licensed, fiat-railed, custody-first crypto proposition** — its Proof-of-Reserves cadence, ZAR EFT ramp, and staking-as-a-feature are the mechanics to study; its thin global order-book depth and custodial model are the weaknesses to beat.

> **Honesty note:** REA is not installed and no Luno application artefact is in this workspace. Every `Seen` item below cites a **public** source. App-internal behaviour (auth flows, hot-wallet key topology, matching-engine internals) is `Inferred` or `Unknown` with the resolving step named.

---

## File index

| File | Contents |
|---|---|
| [`01-identity-and-financials.md`](01-identity-and-financials.md) | Corporate identity, DCG ownership, licensing, headline financials |
| [`02-technology-and-systems.md`](02-technology-and-systems.md) | Wallet architecture, custody, app/documentation-delivery stack, APIs |
| [`03-products-and-pricing.md`](03-products-and-pricing.md) | Ramp, exchange, instant buy/sell, staking, fee ladder |
| [`04-rewards-and-behaviour.md`](04-rewards-and-behaviour.md) | Recurring buys, learn-and-earn loops, behavioural mechanics |
| [`05-human-capital.md`](05-human-capital.md) | Founder/exec team, headcount, SA engineering bands |
| [`06-regulatory-and-risk.md`](06-regulatory-and-risk.md) | FSCA/FAIS, FICA Directive 9, custody, data-residency, gaps |
| [`07-rea-reverse-engineering.md`](07-rea-reverse-engineering.md) | Four-bucket forensic structure (Seen/Inferred/Unknown/Limitations) + on-chain/contract considerations |
| [`08-stremiium-implications.md`](08-stremiium-implications.md) | ADOPT / ADAPT / AVOID / BEAT classification |
| [`evidence-ledger.json`](evidence-ledger.json) | Machine-readable evidence index |

---

## Evidence legend

| Class | Meaning in this dossier |
|---|---|
| **SEEN** | A published, citable source (filing, licence register entry, published fee page, app-store metadata, audit report) that a reader can verify independently. |
| **INFERRED** | A synthesised logical conclusion drawn from Seen evidence — architecture, data model, state machine — not directly observed. |
| **UNKNOWN** | Proprietary server-side or artefact-dependent behaviour that cannot be confirmed without REA extraction / verified explorer data. |
| **LIMITATION** | A known boundary that blocks verification (no artefact, WAF, stripped symbols, private API). |

**Rules applied:** No decompilation claims. No fabricated licence numbers, user counts, TVL figures or contract addresses. Token/contract addresses are never asserted without a verified explorer source.
