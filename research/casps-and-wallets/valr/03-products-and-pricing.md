# 03 — Products & Pricing

**Entity:** VALR · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19
**Caveat:** Fee figures are **published pricing**, but multiple third-party sources conflict; conflicts are shown and confidence downgraded.

---

## 1. Product ladder

| Product | Description | Target | Evidence |
|---|---|---|---|
| **Simple Buy/Sell** | Instant crypto purchase/sale at a quoted spread | Retail beginners | SEEN |
| **Spot Trading** | Order-book trading (60–100+ assets) vs ZAR/USDT/BTC | Retail + pro | SEEN |
| **Spot Margin** | Leveraged spot (up to ~5x) | Active traders | SEEN |
| **Perpetual Futures** | Leveraged perps (up to ~10x per aggregators; site references higher across pairs) | Pro traders | SEEN |
| **OTC Desk** | Block execution for large trades | Institutions/HNW | SEEN |
| **Crypto Lending/Borrowing** | Earn interest / borrow against crypto | Holders/HNW | SEEN |
| **Staking** | Stake supported assets for yield | Holders | SEEN |
| **VALR Pay** | Crypto payment utility | Consumers/merchants | SEEN |
| **Sub-accounts** | Segregated accounts for institutions/end-clients | Institutions | SEEN |
| **xStocks** | Tokenised US equities trading | Investors | SEEN (2025 launch) |
| **API services** | REST/WS/FIX programmatic access | Algo/institutions | SEEN |

---

## 2. Fee schedule (published; conflicting sources)

### 2.1 Spot — maker/taker

| Source | Maker | Taker | Note |
|---|---|---|---|
| solanacompass | 0% base (ZAR) → **−0.01% rebate** on ZAR pairs | 0.05%–0.10% | ZAR makers earn rebate |
| coinranking | **−0.01% rebate** | 0.05%–0.10% | — |
| moneyweb | −0.01% → 0.18% maker (fiat); 0% → 0.08% maker (crypto) | 0.05%→0.35% (fiat); 0.035%→0.1% (crypto) | Tiered by volume |
| asiaforexmentor | 0.01% rebate | 0.10% | Simplified |

**Confidence: MEDIUM.** Consistent core: ZAR makers ≈ **−0.01% (rebate)**; takers start ≈ **0.05–0.10%**, tiering with volume.

### 2.2 Simple Buy/Sell & other

| Item | Fee | Source |
|---|---|---|
| Simple (instant) buy/sell | **0.75%** (coinranking) / **1.6%** (moneyweb) | conflicting |
| ZAR deposit | Free | aggregators |
| ZAR withdrawal | Flat fee (~R… per aggregator) | LOW |
| Futures/perp | Maker ~0%, taker tiered | aggregators (LOW) |
| Crypto deposit | Typically free | aggregators |

---

## 3. Pricing strategy analysis

| Lever | VALR's choice | vs Luno |
|---|---|---|
| Order-book maker | Negative (rebate) on ZAR | Aggressive liquidity mining |
| Order-book taker | Low (0.05–0.10%) | Undercuts Luno's 0.20% base |
| Instant ramp | ~0.75–1.6% | Undercuts Luno's ~2% |
| Institutional | Sub-accounts + FIX + dual auth | Luno weaker here |

**INFERRED state machine (institutional trade):**

```
Funds in → Sub-account (segregated) ──► FIX/REST order ──► Matching engine
        │                                                        │
        │                                              maker rebate / taker fee
        ▼                                                        ▼
  Settled balances  ◄────────────  Trade confirmation (WS)  ──────┘
        │
  [OTC desk] → block execution off-book (for size)
        │
  [Lending] → borrow/earn against balances
```

---

## 4. Competitive comparison (SA, indicative)

| Feature | VALR | Luno | Stremiium target |
|---|---|---|---|
| ZAR maker | −0.01% rebate | 0.10% base → −0.02% | Match/beat with `$STM` fee discount |
| ZAR taker | 0.05–0.10% | 0.20% base | Competitive |
| Instant ramp | 0.75–1.6% | ~2% | Undercut via PayShap-native |
| Derivatives | Yes (ODP licence) | No public evidence | Phase 2 (licence sequencing) |
| Sub-accounts/FIX | Yes | No public evidence | Include for institutional rail |
| Self-custody | No | No | Yes (MPC) |
| NeoBank bundle | No | No | Yes (deposit/card/credit) |

> **Careful:** headline numbers differ across dates/sources; use directionally.

---

## 5. What Stremiium should not copy in retail

- VALR is **trader/institution-obsessed**; its retail onboarding and consumer value chain are thin. Stremiium should **BEAT** on consumer UX, spend rewards and deposit products while **ADOPTING** the maker-rebate liquidity mechanics.
