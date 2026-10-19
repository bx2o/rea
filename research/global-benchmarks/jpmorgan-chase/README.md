# JPMorgan Chase (Kinexys) — Dossier Index

**Program:** `SC-REA-NEOBANK-5.0` · **Group:** `research/global-benchmarks/` · **Entity #11** of the 17-entity roster
**Lead councils:** C13 (Web3-Finance), C10 (Finance-IR) · **Supporting:** C16, C06, C01
**Task refs:** T5.0 (Global Benchmarks Dissection), T5.1 (JPMorgan Chase Kinexys / JPM Coin Analysis)
**Dossier compiled:** 2026-10-19 · **REA status:** `not-executed` (no artefact supplied)

---

## Executive summary

JPMorgan Chase & Co. (NYSE: **JPM**) is the world's largest bank by market capitalisation and the operator of **Kinexys** (rebranded from **Onyx** in **November 2024**), its institutional blockchain business unit. Kinexys runs a **permissioned, EVM-compatible ledger** (historically the **Quorum/GoQuorum** enterprise-Ethereum lineage) for **wholesale cross-border settlement**, **intraday repo**, and **tokenised collateral**, together with **JPM Coin / Kinexys Digital Payments** (deposit-token money movement via **Blockchain Deposit Accounts**) and **Programmable Payments** (conditional/rule-based liquidity). In 2025 JPMorgan extended deposit tokens to a **public blockchain (Base, an Ethereum L2)** for institutional clients — a first for a major bank. Reported scale: **procesa ~$12 trillion/day** across JPMorgan Payments, with Kinexys itself averaging **~$7 billion/day** and **>$4 trillion cumulative** since inception. For Stremiium, Kinexys is the **forensic benchmark for institutional settlement logic, deposit-token design and programmable money** — the architecture Stremiium's own settlement and `$STM`-adjacent rails should learn from (and safely diverge from).

> **Honesty note:** REA is not installed and no JPMorgan artefact exists in this workspace. All `Seen` items cite **public** sources (JPMorgan disclosures, earnings releases, filings). Where a figure is a Kinexys marketing/case-study statistic, it is labelled as such. **Reporting periods are cited explicitly.**

---

## File index

| File | Contents |
|---|---|
| [`01-identity-and-financials.md`](01-identity-and-financials.md) | Corporate identity, Kinexys structure, headline financials (with periods) |
| [`02-technology-and-systems.md`](02-technology-and-systems.md) | Permissioned ledger, BDA, programmable payments, JPMD on Base |
| [`03-products-and-pricing.md`](03-products-and-pricing.md) | Deposit tokens, intraday repo, TCN, wealth/retail products |
| [`04-rewards-and-behaviour.md`](04-rewards-and-behaviour.md) | Client stickiness, Wealth Plan, Lifestyle Services |
| [`05-human-capital.md`](05-human-capital.md) | Leadership, headcount, compensation |
| [`06-regulatory-and-risk.md`](06-regulatory-and-risk.md) | US/global regulation, DLT risk, settlement finality |
| [`07-rea-reverse-engineering.md`](07-rea-reverse-engineering.md) | Four-bucket forensics + DLT/on-chain considerations |
| [`08-stremiium-implications.md`](08-stremiium-implications.md) | ADOPT / ADAPT / AVOID / BEAT |
| [`evidence-ledger.json`](evidence-ledger.json) | Machine-readable evidence index |

---

## Evidence legend

| Class | Meaning |
|---|---|
| **SEEN** | Published, citable source (earnings release, filing, JPMorgan disclosure, case study). |
| **INFERRED** | Logical architecture/data model synthesised from Seen evidence. |
| **UNKNOWN** | Proprietary/artefact-dependent; unverifiable without REA or verified explorer. |
| **LIMITATION** | Known boundary blocking verification. |

**Rules:** No decompilation claims; no fabricated figures. Every financial figure carries its **reporting period**. Contract addresses are never asserted without a verified explorer source.
