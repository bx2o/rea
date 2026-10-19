# 01 — Identity & Financials

**Entity:** Luno · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19

---

## Corporate identity

| Field | Value | Evidence |
|---|---|---|
| Brand | Luno | SEEN (luno.com) |
| SA operating entity | **Luno (Pty) Ltd** | SEEN (Luno legal pages) |
| Former name | **BitX** (rebranded to Luno) | SEEN (PitchBook profile; company history) |
| Founded | 2013, Cape Town, South Africa | SEEN (company history/press kit) |
| Group HQ | London, United Kingdom (group); SA operations in Cape Town / Johannesburg | SEEN (press kit) |
| Parent / owner | **Digital Currency Group (DCG)** — wholly-owned independent operating subsidiary since 2020 | SEEN (DCG/Luno acquisition press release, 2020-09) |
| Acquisition date | On or about **9 September 2020** (announced); DCG had been an early investor since 2014 | SEEN (BusinessWire / PitchBook) |
| Founders | Marcus Swanepoel, Pieter Heyns, Carel van Wyk, Timothy Stranex | SEEN (press kit / company profiles) |
| Legal status | Private (unlisted); no public equity ticker | SEEN (absence of listing) |

> **Note on numbers:** Luno does not publish audited group financial statements for the SA entity in the public domain the way a JSE-listed bank does. Any specific revenue/user figure below is labelled with its source confidence; the dossier does **not** fabricate a rand figure.

---

## Licensing & registrations

| Licence / registration | Identifier | Regulator | Status | Evidence |
|---|---|---|---|---|
| Financial Services Provider (FSP) — FAIS | **FSP No. 53314** | FSCA | Authorised | SEEN (Luno legal/risk disclosures) |
| Registered credit provider | **NCRCP22123** | NCR (National Credit Regulator) | Registered | SEEN (Luno legal disclosures) |
| Crypto Asset Service Provider (CASP) authorisation | via FAIS FSP licence (crypto as a financial product, FSCA Oct-2022 classification) | FSCA | Reported licensed | SEEN (FSCA Dec-2024 update per media; Luno self-description) |
| Group entity PoR scope | Multiple Luno group entities in scope of ISRS 4400 (Revised) agreed-upon-procedures | Moore (independent auditor) | Recurring monthly | SEEN (Moore AUP report, Oct-2025 / Jan-2025 PDFs) |

**Careful wording:** media variously describes Luno as "the first dedicated CASP to receive an FSCA licence" and reporting the grant in 2024. This dossier records it as *reported* and does not assert a grant date beyond what Luno's own disclosures say.

---

## Ownership structure (simplified)

```
Digital Currency Group (DCG)  [Stamford, CT]
        │ 100%
        ▼
   Luno Group (Holdings)  ──compliance/brand umbrella──►  Luno (Pty) Ltd  [SA, FSP 53314 / NCRCP22123]
                                                          Luno entities in other jurisdictions (EU, NG, MY, ID …)
```

- DCG is a crypto conglomerate (also historically connected to Grayscale, Foundry, Genesis, CoinDesk). Luno operates as an **independent** subsidiary retaining its own brand and management.
- **INFERRED:** DCG ownership creates group-level counterparty/wholesale-funding exposure (e.g., the 2022–23 DCG/Genesis stress), which Luno has publicly sought to distance itself from by emphasising separate custody and 1:1 reserves.

---

## Headline operational metrics (as reported — treat as directional)

| Metric | Value (as reported) | Confidence | Source |
|---|---|---|---|
| Customer base | "millions", spanning 40+ countries | LOW (no exact figure verified) | press kit / media |
| Primary SA ramp | ZAR instant EFT (bank-agnostic) | MEDIUM | Luno help pages |
| Reserves ratio | Reserves ≥ 100% of customer liabilities (Merkle-tree verified) | HIGH (auditor AUP) | Moore AUP report |
| Cold-storage share | ~95% of customer crypto in multi-sig "deep freeze" | MEDIUM | Luno safety pages / media |
| Custody partners | BitGo Custody + Fireblocks | HIGH | Luno safety pages |
| Headcount | ~730 employees (2026, third-party estimate) | LOW | LeadIQ (third-party) |

> **Do not cite user counts as fact.** The program brief forbids fabricated exact subscriber counts; only "millions / 40+ countries" style self-descriptions are recorded, flagged LOW.

---

## Financial model (inferred from product mechanics)

| Revenue line | Mechanism | Evidence class |
|---|---|---|
| Exchange maker-taker fees | Order-book trading fees on ZAR + crypto pairs | SEEN (published schedule) |
| Instant buy/sell "spread" | Quoted-price margin on the fiat ramp (published ~2% for SA instant buy/sell) | SEEN (help page) |
| Staking commission | Take-rate on staking rewards (ETH etc.) | INFERRED (feature exists; exact rate not published) |
| Deposit/withdrawal fees | Withdrawal fees vary by asset/rail | SEEN (fee page) |

**Reporting-period caveat:** There is no public, audited Luno income statement in this workspace. Fee percentages are *published pricing*, not audited financials.

---

## Key take-aways for Stremiium

1. Luno's moat is **trust + ramp simplicity + licence**, not order-book depth or product breadth.
2. The **FSP/CASP duality** (investment-services licence fused with a credit-provider registration) is the licensing pattern Stremiium will need to mirror to offer both a ramp and a card/lending product.
3. Headline financials are **thin in the public domain** — Stremiium should not model Luno revenue from secondary blogs; only fee mechanics are citable.
