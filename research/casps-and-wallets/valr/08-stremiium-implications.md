# 08 — Stremiium Implications

**Entity:** VALR · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19
**Filter: ADOPT / ADAPT / AVOID / BEAT.**

---

## 1. Decision matrix

| # | VALR finding | Decision | Stremiium action |
|---|---|---|---|
| 1 | Proprietary high-frequency matching engine | **ADAPT** | Don't build HFT from scratch at launch; use a proven engine/partner first, then internalise |
| 2 | REST + WebSocket + **FIX** API stack | **ADOPT** | Ship REST+WS at launch; add FIX for institutional rail |
| 3 | **Sub-accounts** with segregation + dual authorisation | **ADOPT** | Non-negotiable for institutional/end-client flows |
| 4 | **Negative maker fees** on ZAR pairs | **ADOPT** | Liquidity-mining rebates to seed ZAR depth |
| 5 | Aggressive taker/instant fee undercutting | **BEAT** | Simple transparent `$STM` fee discount layer |
| 6 | FSCA CASP + **ODP derivatives** licence sequencing | **ADAPT** | Phase: CASP/FSP first; derivatives later (capital + conduct heavy) |
| 7 | Institutional-first, trader-centric design | **BEAT** | Consumer-first onboarding + NeoBank bundle |
| 8 | No consumer loyalty/status | **BEAT** | `$STM` status ladder + spend rewards |
| 9 | No deposit/credit/card products | **BEAT** | NeoBank deposit + card + credit |
| 10 | No public Proof-of-Reserves | **BEAT** | Real-time on-chain reserve attestation |
| 11 | Custodial-only | **AVOID/beat** | Offer non-custodial MPC option |
| 12 | xStocks tokenised equities | **AVOID (near-term)** | Securities complexity; revisit post-core |
| 13 | Deep ZAR liquidity as moat | **ADAPT** | Aggregate liquidity via partner/market-maker arrangements early |

---

## 2. Concrete build directives

| Directive | Owner | Rationale |
|---|---|---|
| Ship **REST + WebSocket** API at launch; FIX in Phase 2 | C11, C13 | Match institutional accessibility without HFT cost |
| Implement **sub-account segregation + dual authorisation** | C11, C16 | Institutional requirement; VALR's proven model |
| Run **maker-rebate liquidity programme** on ZAR pairs | C13, C10 | Seed order-book depth; fund from taker revenue |
| Sequence licences: **CASP/FSP → ODP derivatives** | C01 | Derivatives need capital + conduct infrastructure |
| Build **consumer-first** onboarding + `$STM` rewards | C09, C15 | Occupy VALR's retail gap |
| Publish **real-time PoR** on-chain | C13, C01 | Beat VALR's transparency gap |

---

## 3. Risk register

| Risk | VALR lesson | Stremiium control |
|---|---|---|
| Low-latency engineering scarce/expensive | VALR invested heavily in engine | Partner-once, internalise-later; budget quant talent |
| Derivatives conduct/licensing | ODP is a distinct, heavier licence | Sequence after core CASP |
| Liquidity cold-start | VALR's ZAR depth = its moat | Market-maker agreements + rebates from day one |
| Custody concentration | Custodial-only exposure | MPC + HSM + continuous PoR |
| Fee war erosion | Rebates compress margins | Differentiate on rewards/spend, not just fees |

---

## 4. Bottom line

VALR is the **exchange-engineering and institutional-plumbing benchmark** for the ZAR market. Stremiium should **ADOPT** its API stack, sub-account model, FIX access and maker-rebate liquidity mechanics; **ADAPT** its matching-engine and licence sequencing (partner-first, derivatives later); **BEAT** its retail/consumer and NeoBank gaps, transparency gap and loyalty absence; and **AVOID** building an HFT engine and launching securities-like products prematurely.
