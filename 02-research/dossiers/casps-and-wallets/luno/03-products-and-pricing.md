# 03 — Products & Pricing

**Entity:** Luno · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19
**Caveat:** Fee percentages below are **published pricing** (citable) but Luno changes them; several third-party sources conflict. Where sources conflict, the conflict is shown and the confidence downgraded.

---

## 1. Product ladder

| Product | What it is | Who it targets | Evidence |
|---|---|---|---|
| **Instant Buy/Sell** | One-click fiat↔crypto conversion at a quoted price (spread/margin built in) | Beginners | SEEN |
| **Exchange (order book)** | Limit/market order-book trading on ZAR & crypto pairs | Active traders | SEEN |
| **Recurring Buys** | Scheduled automatic purchases (DCA) | Savers/beginner investors | SEEN |
| **Send / Receive** | On-chain send + receive; internal transfers instant | All | SEEN |
| **Luno Savings / Earn / Staking** | Earn on crypto balances; ETH staking | Holders | SEEN (staking product) |
| **Luno Pay** (legacy/regional) | Pay merchants in crypto (historically) | Consumers | SEEN (regional) |
| **Tokenised Stocks** (offered by Luno (Pty) Ltd) | Tokenised equity exposure (risk disclosure 04-Aug-2025) | Investors | SEEN (Luno risk disclosure) |

---

## 2. Fee schedule (published, SA)

### 2.1 Fiat ramp — Instant Buy/Sell

| Transaction | Fee | Source |
|---|---|---|
| Buying crypto (instant) | **~2%** | Luno SA help page |
| Selling crypto (instant) | **~2%** | Luno SA help page |
| Third-party range quoted | 1.5% – 3.5% | Third-party reviews (LOW) |

> The instant ramp fee is described by Luno's own help centre as applying to instant transactions and **not** to Exchange trades.

### 2.2 Exchange — maker/taker (order book)

| Source | Maker | Taker | Notes |
|---|---|---|---|
| Luno SA help | 0.10% (base) | 0.20% (base) | Base tier |
| Moneyweb | 0.40% → **-0.02%** maker | 0.60% → 0.05% taker | Volume-tiered; Luno claims lowest maker in SA |
| Third-party (USDT/ZAR tier 1 R0–R20k) | 0.20% (USDT/ZAR) | — | Tier-1 example |

**Confidence: MEDIUM.** Base rates are consistent; volume-tier extremes vary by source. Treat the schedule as **tiered by 30-day volume**.

### 2.3 Other

| Item | Fee | Evidence |
|---|---|---|
| On-chain withdrawal | Asset-dependent fee | SEEN (fee page) |
| Internal Luno→Luno transfer | Effectively instant/low-cost via internal ledger | SEEN/INFERRED |
| ZAR EFT deposit | Free/low (instant EFT) | SEEN |
| Staking | Commission take-rate on rewards | INFERRED (rate not published) |

---

## 3. Pricing strategy analysis

| Lever | Luno's choice | Rationale |
|---|---|---|
| Ramp price | ~2% flat (high, simplicity-first) | Monetises beginners who won't use the order book |
| Order-book price | Competitive/low maker (down to negative) | Attracts liquidity providers to deepen ZAR books |
| Switching friction | Off-chain ledger makes internal moves free/instant | Stickiness (funds stay on-platform) |
| Learning curve | "Simple view" default, Exchange as opt-in | Onboarding funnel |

**INFERRED state machine (buy flow):**

```
ZAR funds (instant EFT)  ──►  Balance (ZAR)
        │                            │
   [Simple Buy]                 [Exchange limit order]
        │  ~2% inst. margin            │  maker/taker fee
        ▼                               ▼
   Crypto balance (custodial)  ◄───  Crypto balance
        │
   [Recurring buy schedule]  ──► auto-repeats
        │
   [Staking] ──► yield (minus commission) ──► rewards in kind
        │
   [Internal transfer] ──► instant off-chain ledger move
```

---

## 4. Competitive comparison (SA, indicative)

| Feature | Luno | VALR | Stremiium target |
|---|---|---|---|
| Instant ramp fee | ~2% | ~0.75–1.6% | Undercut with PayShap-native ramp |
| Order-book maker | 0.10% base → −0.02% | 0% base → −0.01% (ZAR) | Match/beat |
| Self-custody wallet | No | No | Yes (MPC) |
| PoR | Monthly Merkle (Moore) | Not the same public cadence | Real-time on-chain |
| Fiat rail | Instant EFT | EFT + card | Instant EFT + PayShap |

> **Careful:** exact headline numbers differ between sources and dates; use as *relative direction*, not contractual figures.

---

## 5. What Stremiium should not copy

- The **~2% flat ramp** is the most monetisable but most beatable line — competitors already undercut it.
- Luno's product set is crypto-only; no deposit/credit/insurance bundle. Stremiium's NeoBank bundle is the differentiation axis.
