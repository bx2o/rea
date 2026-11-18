# 01 — Identity & Financials

**Entity:** JPMorgan Chase & Co. (Kinexys) · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19

---

## Corporate identity

| Field | Value | Evidence |
|---|---|---|
| Legal name | **JPMorgan Chase & Co.** | SEEN |
| Listing | **NYSE: JPM** | SEEN |
| HQ | New York, USA (270 Park Avenue) | SEEN |
| Nature | Global universal bank (consumer + corporate + investment banking + AWM) | SEEN |
| Blockchain unit | **Kinexys by J.P. Morgan** (rebranded from **Onyx**, announced **6 November 2024**) | SEEN (JPMorgan insights post) |
| Kinexys sub-units | **Kinexys Digital Payments** (JPM Coin System), **Kinexys Digital Assets** (Onyx Digital Assets), **Kinexys Labs** | SEEN |
| Lineage | JPM Coin launched **2019** → Onyx → Kinexys | SEEN |

**Rebrand mapping (Nov-2024):** `JPM Coin System → Kinexys Digital Payments`; `Onyx Digital Assets → Kinexys Digital Assets`; new `Kinexys Labs` for proofs-of-concept.

---

## Headline financials — with reporting periods

> All figures are **as reported** by JPMorgan Chase; **period cited**. Where two sources give slightly different values (e.g. CET1 14.5% vs 14.6%), both are shown.

| Metric | FY2025 | FY2024 | FY2023 | Period / source |
|---|---|---|---|---|
| Return on common equity (ROE) | **17%** | 18% | 17% | FY ended 31-Dec-2025 (annual report) |
| Return on assets (ROA) | 1.4% | 1.5% | 1.3% | FY2025 |
| CET1 capital ratio (Standardized) | **14.5–14.6%** | 15.7% | — | FY2025 / 4Q25 |
| Tier 1 capital ratio | 15.5% | 16.8% | — | FY2025 |
| Total capital ratio | 17.4% | 18.5% | — | FY2025 |
| Book value per share | $126.99 | $116.07 | — | FY2025 |
| Tangible book value / share | $107.56 | $97.3 | — | FY2025 |
| Average loans | ~$1.5T (+9% YoY) | — | — | 4Q25 |
| Average deposits | ~$2.6T (+6% YoY) | — | — | 4Q25 |
| CET1 capital ($) | ~$288B | — | — | 4Q25 |
| Q4'25 net revenue (context) | (see earnings) | — | — | 4Q25 |

> **Period discipline:** ROE/ROA/CET1 are **FY2025 (year ended 31 December 2025)**; loan/deposit figures are **4Q25 averages**. Do not blend periods.

---

## Kinexys scale (reported, marketing/case-study)

| Metric | Value | Confidence | Source |
|---|---|---|---|
| JPMorgan Payments daily volume | ~**$12 trillion/day** ("world's GDP every 10 days") | MEDIUM (JPMorgan) | JPMorgan HBS case study |
| Kinexys average daily volume | **~$7 billion/day** | MEDIUM (JPMorgan) | JPMorgan disclosures |
| Kinexys cumulative | **>$4 trillion** processed since inception | MEDIUM (JPMorgan) | JPMorgan disclosures |
| YoY payment growth | ~10x growth reported | LOW | media |

> Some media cite Kinexys as a "small share of JPMorgan's ~$10T daily payments business" — the daily-volume base itself varies by source ($10T vs $12T). Both treated as **approximately $10–12T/day**.

---

## Product/structural map

| Layer | Offering | Evidence |
|---|---|---|
| Wholesale settlement | Kinexys Digital Payments (JPM Coin / deposit tokens), BDAs | SEEN |
| Digital assets | Tokenised collateral (TCN), intraday repo | SEEN |
| Public-chain deposit token | **JPMD** on **Base** (Ethereum L2) for institutional clients (2025) | SEEN |
| Retail | Chase Mobile app, Chase consumer banking | SEEN |
| Wealth | **Wealth Plan** (automated advice), self-directed | SEEN |
| UHNW | **Lifestyle Services** (PE co-investment, concierge, aviation finance) | SEEN (self/reported) |

---

## Key take-aways for Stremiium

1. **Deposit-token + BDA** is the canonical "bank-money-on-ledger" design — the closest analogue to a licensed NeoBank issuing `$STM`-adjacent settlement.
2. Kinexys proves **dual-ledger (core-banking ∥ ledger) architecture** with **deterministic finality** is production-grade.
3. Programme must **not** copy IBM/permissioned-model assumptions blindly — Stremiium's Polygon path is *public-chain*, closer to **JPMD-on-Base** than to Quorum.
