# 08 — Stremiium Implications

**Entity:** Flex.one · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19
**Filter: ADOPT / ADAPT / AVOID / BEAT.**

---

## 1. Decision matrix

| # | Flex finding | Decision | Stremiium action |
|---|---|---|---|
| 1 | **Card spends a stablecoin balance** | **ADOPT** | Allow card spend against stablecoin/crypto balances (real-time liquidation) |
| 2 | **BaaS-issued card via partner bank (Lead/Thread)** | **ADAPT** | Use a **SA** bank/BaaS issuer under SA regime, not US partners |
| 3 | **Visa network** | **ADOPT** | Visa issuing in SA |
| 4 | **Non-custodial stablecoin balance** | **ADOPT/ADAPT** | Aligns with Stremiium's MPC wallet; SA-localise custody |
| 5 | **Multi-currency accounts (32 currencies)** | **ADAPT** | Phase 2 for HNW/SME segment; ZAR-first initially |
| 6 | **FX markup revenue** | **ADAPT** | Monetise FX but **disclose transparently** (SA consumer protection) |
| 7 | **Subscription tiers** | **ADAPT** | Consider premium tier funded by `$STM`/benefits |
| 8 | **Private credit** | **ADAPT** | NCA-compliant credit later (own FSP/NCR registration) |
| 9 | **No consumer rewards/loyalty** | **BEAT** | `$STM` spend rewards + status ladder |
| 10 | **US-only footprint (no SA)** | **BEAT** | Own the SA ZAR + stablecoin spend niche |
| 11 | **Real-time liquidation timing/FX-risk unclear** | **AVOID** copying blindly | Define explicit timing + FX-risk policy |
| 12 | **Identity ambiguity of anchor entity** | **AVOID assumptions** | Resolve entity before copying; do not assume Mastercard |

---

## 2. Concrete build directives

| Directive | Owner | Rationale |
|---|---|---|
| Design **card-spends-balance** architecture (ZAR + stablecoin) | C16, C13 | Core differentiated mechanic from Flex |
| Select **SA BaaS/bank issuer** + Visa programme | C16, C07 | Replace US partner model with SA-legal wrapper |
| Build **transparent FX engine** with published spread | C10, C01 | Monetise but stay NCA/consumer-protection safe |
| Implement **`$STM` spend rewards** on card | C09, C13 | Flex has no rewards → BEAT |
| Define **liquidation timing & FX-risk policy** | C10, C02 | Flex leaves this UNKNOWN → Stremiium must own it |
| Do **not** assume Mastercard; start with Visa | C16 | Sources corroborate Visa only |

---

## 3. Risk register

| Risk | Flex lesson | Stremiium control |
|---|---|---|
| FX/liquidation slippage | Flex's timing opaque | Explicit treasury/FX policy + buffer |
| Issuer dependency | Flex relies on partner banks | Diversify issuers; strong SLA |
| Chargebacks | Card scheme liability | Reserves + dispute ops |
| Identity/scope confusion | Anchor ≠ verified entity | Entity resolution prerequisite |
| Regulatory transplant risk | US BaaS ≠ SA regime | Build SA-native from the start |

---

## 4. Bottom line

Flex is a **mechanic donor, not an SA competitor**. Stremiium should **ADOPT** the **card-spends-stablecoin-balance** loop and Visa issuance; **ADAPT** the BaaS, multi-currency, FX and credit components to the **SA regulatory regime**; **AVOID** copying Flex's opaque liquidation timing and assuming a Mastercard programme; and **BEAT** Flex's consumer-rewards and SA-absence gaps with `$STM` spend rewards and a ZAR-native, fully-disclosed card. **First, resolve the entity-identity ambiguity** flagged in the README.
