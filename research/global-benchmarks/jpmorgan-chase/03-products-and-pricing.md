# 03 — Products & Pricing

**Entity:** JPMorgan Chase (Kinexys) · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19
**Caveat:** JPMorgan does not publish a retail-style price list for Kinexys; fees are negotiated per institutional relationship. **No fee numbers are fabricated here.**

---

## 1. Institutional product ladder (Kinexys)

| Product | Description | Monetisation | Evidence |
|---|---|---|---|
| **Kinexys Digital Payments (JPM Coin)** | Deposit-token money movement between institutions (BDAs) | Transaction fees, float/NII, FX | SEEN |
| **Programmable Payments** | Conditional/scheduled/rule-based payments | Premium service fees | SEEN |
| **JPMD (deposit token on Base)** | USD deposit token on public chain | Fees / strategic positioning | SEEN |
| **Tokenized Collateral Network (TCN)** | Tokenised collateral mobility | Service fees | SEEN |
| **Intraday repo** | Secured intraday cash against tokenised collateral | Repo interest spread | SEEN |
| **On-chain FX** | USD/EUR (and GBP) FX on ledger | FX spread | SEEN |
| **Cross-border settlement** | 24/7 near-real-time | Transaction fees | SEEN |

---

## 2. Retail / wealth product ladder (context)

| Product | Description | Monetisation | Evidence |
|---|---|---|---|
| **Chase consumer banking** | Deposits, cards, loans | **NII** + fees | SEEN |
| **Chase Mobile** | Retail app | NII/fees | SEEN |
| **Wealth Plan** | Automated advice | Advisory fees | SEEN |
| **Self-directed / brokerage** | (through JPMorgan platforms) | Commissions/fees | SEEN |
| **Lifestyle Services** | UHNWI/family-office (PE co-investment, concierge, aviation finance) | Fees/spreads | SEEN (reported) |
| **J.P. Morgan Private Bank** | HNW wealth | Advisory + NII | SEEN |

---

## 3. The bank P&L mechanics Kinexys feeds (period-cited)

| Driver | FY2025 observation | Period |
|---|---|---|
| Net interest income | Large; driven by rate environment + deposit base (~$2.6T avg deposits) | 4Q25 |
| NII sensitivity | Deposit-token float could shift NII dynamics | INFERRED |
| Cost / scale | ROE 17% | FY2025 |
| Capital | CET1 (Standardized) 14.5–14.6%; Tier 1 15.5% | FY2025 |

**INFERRED:** Kinexys's strategic value is **defensive** (protect wholesale payment flows, deposits, and cross-border revenue) plus optionality on tokenised markets — not a current material P&L line.

---

## 4. Comparison framing for Stremiium

| Dimension | JPMorgan/Kinexys | Stremiium target |
|---|---|---|
| Segment | Institutional wholesale | SA consumer NeoBank |
| Ledger | Permissioned EVM (+ JPMD on Base) | Polygon PoS/ZK-EVM (public) |
| Settlement asset | Bank deposit token (JPM Coin) | `$STM` + ZAR + stablecoin |
| Pricing | Negotiated B2B | Published retail fee schedule |
| Regulatory | US OCC/Fed/global | FSCA/SARB/PayShap |

**Conclusion:** JPMorgan is a **design benchmark**, not a competitor. Stremiium should copy the **deposit-token/BDA architecture** conceptually (adapted to Polygon + SA regulation) and **avoid** replicating a permissioned-server model that undermines Stremiium's public-chain transparency story.

---

## 5. What Stremiium should not copy

- Kinexys's **confidentiality-by-permission** (transactions not publicly visible) is the *opposite* of Stremiium's transparency/PoR value proposition.
- Negotiated B2B pricing is unusable for a retail NeoBank; Stremiium needs a **published, transparent fee schedule**.
