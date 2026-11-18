# Polymarket — 03 Products & Pricing

> Fees and volumes were **not captured in-app** (REA not executed). Numbers are flagged,
> not asserted.

## 1. Product ladder

| Product | Description | Class |
|---|---|---|
| Binary markets | Yes/No outcome shares on an event | SEEN |
| Categorical / multi-outcome markets | N-outcome events | SEEN-as-reported |
| Negative-risk markets | Multi-outcome ("who wins?") markets with negative-risk conversion for capital efficiency | SEEN-as-reported |
| Scalar/other variants | Range-style markets | INFERRED |
| Portfolio / positions UI | Track and sell positions pre-resolution | SEEN |

## 2. Market mechanics

| Mechanic | Description | Class |
|---|---|---|
| Outcome tokens | ERC-1155 conditional tokens (via Gnosis CTF) | SEEN (docs) |
| Price = probability | Share price in USDC reflects implied probability | SEEN (docs) |
| Collateral | USDC on Polygon | SEEN (docs) |
| Resolution | UMA Optimistic Oracle, dispute window | SEEN (docs) |
| Settlement | Winner tokens redeem 1 USDC; losers 0 | SEEN (docs) |

## 3. Pricing & fee structure

| Revenue line | Model | Class |
|---|---|---|
| Trading fee | Historically **zero** | SEEN-as-reported |
| Maker incentives | Liquidity rewards to bootstrap markets | SEEN-as-reported |
| Spread | Implicit cost (bid/ask) | INFERRED |
| Other monetisation | Opaque / evolving | UNKNOWN |

> Do **not** quote a specific fee % or a specific incentive budget — neither is asserted here.

## 4. Probability/pricing shape (illustrative, NOT asserted)

```
price(YES share) ≈ market-implied probability
payout = 1 USDC if resolves YES, else 0
implied_edge = |model_prob - market_prob| (trader's view, not guaranteed)
```

## 5. Economics Stremiium cares about

| Lever | Polymarket behaviour | Stremiium read |
|---|---|---|
| Take rate | ~zero trading fee | Unsustainable alone → Stremiium needs a different monetisation (fee spread, subscription, or no-launch) |
| Liquidity | Incentive-funded | Budget as CAC/market-making cost |
| Capital efficiency | Negative-risk conversion | Reusable mechanic |
| Oracle cost/trust | UMA dependency | Decide build vs oracle |

## 6. Warnings

* Prediction markets are **high-scrutiny** products; a "zero fee" headline hides the real
  regulatory and market-making costs.
* Any implied-probability claim is *market* opinion, not fact — non-negotiable framing.
* Do not present prediction-market participation as investment advice.
