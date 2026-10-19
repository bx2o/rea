# VALR — Dossier Index

**Program:** `SC-REA-NEOBANK-5.0` · **Group:** `research/casps-and-wallets/` · **Entity #9** of the 17-entity roster
**Lead council:** C13 (Web3-Finance) · **Supporting:** C01, C16, C11
**Task refs:** T4.0 (CASPs & Crypto Wallets Forensics), T4.2 (VALR High-Frequency Exchange Architecture)
**Dossier compiled:** 2026-10-19 · **REA status:** `not-executed` (no APK/ASAR artefact supplied)

---

## Executive summary

VALR is a Johannesburg-headquartered, **ZAR-native centralised exchange** founded in 2018, positioning itself as South Africa's largest exchange by trade volume and owner of *"the world's deepest ZAR-denominated order books."* Its differentiators are (a) a **high-frequency proprietary matching engine**, (b) **institutional-grade access** (REST + WebSocket + FIX APIs, SDKs, segregation-friendly sub-accounts, multi-user/dual-authorisation access), and (c) an **aggressive fee model** with **negative maker fees (rebates)** on some pairs and low tiered taker fees. It is backed by a prominent investor syndicate (**Pantera Capital, Coinbase Ventures, GSR, F-Prime, Avon Ventures**; ~$55m equity) and has been building a **licence stack** (FSCA CASP Category I & II; an **Over-the-Counter Derivatives Provider (ODP)** licence). For Stremiium, VALR is the benchmark for **exchange-grade matching + institution routing + ZAR liquidity**, and the competitor whose retail/NeoBank gaps Stremiium must attack.

> **Honesty note:** REA is not installed and no VALR artefact exists here. All `Seen` items cite **public** sources (VALR docs/blog, media, FSCA-authorised announcements). Exact orders-per-second figures, latency, and engine internals are `UNKNOWN` — VALR's high-throughput claims are marketing claims, not independently verified benchmarks.

---

## File index

| File | Contents |
|---|---|
| [`01-identity-and-financials.md`](01-identity-and-financials.md) | Corporate identity, backing, licensing, scale |
| [`02-technology-and-systems.md`](02-technology-and-systems.md) | Matching engine, APIs, sub-accounts, custody |
| [`03-products-and-pricing.md`](03-products-and-pricing.md) | Spot/margin/futures, OTC, lending, fee ladder |
| [`04-rewards-and-behaviour.md`](04-rewards-and-behaviour.md) | Fee rebates, volumes, institutional behaviour |
| [`05-human-capital.md`](05-human-capital.md) | Leadership, headcount, SA bands |
| [`06-regulatory-and-risk.md`](06-regulatory-and-risk.md) | FSCA CASP/ODP, FICA, SARB, EU posture |
| [`07-rea-reverse-engineering.md`](07-rea-reverse-engineering.md) | Four-bucket forensics + on-chain/contract notes |
| [`08-stremiium-implications.md`](08-stremiium-implications.md) | ADOPT / ADAPT / AVOID / BEAT |
| [`evidence-ledger.json`](evidence-ledger.json) | Machine-readable evidence index |

---

## Evidence legend

| Class | Meaning |
|---|---|
| **SEEN** | Published, citable source (docs, blog, licence announcement, fee page). |
| **INFERRED** | Logical conclusion synthesised from Seen evidence. |
| **UNKNOWN** | Server-side/artefact-dependent, unverifiable without REA or verified explorer. |
| **LIMITATION** | Known boundary blocking verification. |

**Rules:** No decompilation claims; no fabricated licence numbers, user counts, TVL or contract addresses. Throughput/latency claims are labelled marketing unless independently verified.
