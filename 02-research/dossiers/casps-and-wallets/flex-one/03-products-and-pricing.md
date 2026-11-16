# 03 — Products & Pricing

**Entity:** Flex.one · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19
**Caveat:** Flex does not publish a full public price schedule in reviewed sources; figures are described qualitatively and marked accordingly. **No fabricated fee numbers.**

---

## 1. Product ladder

| Product | Description | Target | Evidence |
|---|---|---|---|
| **Global Card (Visa)** | Card connected to stablecoin balance; spend at 150M+ Visa merchants in 170+ countries | Business owners/HNW | SEEN |
| **Business spend / bill-pay** | Corporate cards + bill payments | Businesses | SEEN |
| **Institutional USD account** | USD access for foreign business owners | International businesses | SEEN |
| **Multi-currency accounts** | 76 countries, 32 currencies | Global businesses | SEEN |
| **Stablecoin rails** | Deposit/spend USDC/USDT; cross-border in minutes | Crypto-native businesses | SEEN |
| **Private credit** | Credit in 20+ countries | Businesses | SEEN |
| **Subscription tiers** | Platform subscription | Businesses | INFERRED (anchor + media) |

---

## 2. Pricing model (qualitative — monetisation levers)

| Lever | Mechanism | Evidence |
|---|---|---|
| Card/interchange | Interchange on card spend (shared) | INFERRED (anchor + standard model) |
| FX markup | Margin on multi-currency conversion | INFERRED |
| Subscription | Platform fee tiers | INFERRED (media) |
| Card issuance fees | Issuance/management fees | INFERRED (anchor) |
| Credit interest | Interest on private credit | SEEN (product) |

> **Do NOT cite specific %s** — Flex does not publish a public SA-relevant fee schedule in the sources reviewed. Any % would be fabrication.

---

## 3. Mechanic: spend-against-stablecoin

```
  USDC/USDT balance (non-custodial) ──► Card auth at merchant
             │                                │
             │                    (real-time liquidation assumed)
             ▼                                ▼
        FX/liquidation  ──►  Visa settlement ──► merchant paid in USD/local
             │
        (spread / FX markup retained by platform)
```

| Design question | Flex answer (observed) | Stremiium must decide |
|---|---|---|
| Funding asset | Stablecoin (USDC/USDT) | ZAR + stablecoin hybrid |
| Liquidation timing | Real-time (claimed) | Auth-time vs settlement-time |
| FX risk bearer | UNKNOWN | Explicit policy required |
| Network | Visa | Visa (SA) |
| Issuer | Lead Bank (US) | SA bank/BaaS partner (different regime) |

---

## 4. Comparison note (for Stremiium)

| Feature | Flex (verified) | Stremiium target |
|---|---|---|
| Market | US/HNW business | SA consumer NeoBank |
| Card asset | Stablecoin | ZAR + stablecoin |
| Network | Visa | Visa (SA) |
| Rewards | Not a points programme | `$STM` spend rewards |
| Regulatory wrapper | US BaaS | SA bank + FSP/CASP |

**Conclusion:** Flex is a **mechanic donor** (stablecoin-funded card + BaaS issuance + multi-currency), not a head-to-head competitor in SA. Its public pricing is too thin to model — Stremiium should design its own ZAR-first fee schedule.
