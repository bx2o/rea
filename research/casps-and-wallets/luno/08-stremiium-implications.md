# 08 — Stremiium Implications

**Entity:** Luno · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19
**Decisions use the mandatory filter: ADOPT / ADAPT / AVOID / BEAT.**

---

## 1. Decision matrix

| # | Luno mechanic / finding | Decision | Stremiium action |
|---|---|---|---|
| 1 | **Monthly Merkle Proof of Reserves (Moore, ISRS 4400)** | **ADOPT** → then **BEAT** | Reproduce audited PoR, but publish **real-time on-chain reserve attestation** on Polygon; monthly report remains the auditor artefact |
| 2 | **Instant EFT ZAR on/off-ramp** | **ADAPT** | Add **PayShap-native** funding + card top-up; keep EFT as fallback; bank-partner for ExCon/AML |
| 3 | **~2% instant buy/sell margin** | **BEAT** | Undercut with a transparent, tiered ramp fee funded partly by `$STM` fee discounts |
| 4 | **Off-chain internal ledger (free internal transfers)** | **ADOPT** | Replicate (PostgreSQL ACID ledger + Kafka) — instant internal transfers are a retention engine |
| 5 | **Custodial-only model** | **AVOID** (for Stremiium's core) / **BEAT** | Offer **non-custodial MPC wallet** option alongside custody — Luno has no self-custody |
| 6 | **Maker-taker order book with negative maker fees** | **ADOPT** | Reproduce volume-tiered maker rebates to seed ZAR book depth |
| 7 | **Recurring buys (DCA)** | **ADOPT** | Build scheduled buys; tie to `$STM` rewards for streak behaviour |
| 8 | **ETH staking product** | **ADAPT** | Offer staking but be explicit on commission take-rate and validator risk; recognise as unregulated-peril product |
| 9 | **No loyalty/status tier** | **BEAT** | Stremiium's `$STM` status ladder + spend rewards = loop Luno lacks |
| 10 | **No spend/POS loop** | **BEAT** | Card interchange + merchant rewards close the loop Luno cannot |
| 11 | **Foreign parent (DCG) perceived contagion risk** | **BEAT** | SA-domiciled, SA-owned, B-BBEE-led positioning |
| 12 | **Snapshot PoR only** | **BEAT** | Continuous proof; publish merkle roots on-chain at intervals |
| 13 | **Reliance on bank rails for fiat ramp** | **ADAPT** | Multi-rail: PayShap + EFT + card; reduce single-rail dependency |
| 14 | **Tokenised stocks (added Aug-2025)** | **AVOID (near-term)** | Regulatory complexity (securities) — revisit after core launch |

---

## 2. Concrete build directives

| Directive | Owner council | Rationale |
|---|---|---|
| Publish **on-chain reserve roots** (Polygon) on a schedule, in addition to a quarterly/monthly third-party AUP report | C13, C01 | Turn Luno's monthly snapshot into a real-time trust feature |
| Build **internal ledger** on PostgreSQL + Kafka from day one | C11, C06 | Enables free/instant internal transfers (proven sticky mechanic) |
| Ship **PayShap + EFT + card** funding rails | C16 | Beat Luno's EFT-only dependency |
| Implement **Travel-Rule payload service** (Directive 9, R5,000 threshold) before launch | C01 | Non-negotiable FIC obligation; Luno already bears it |
| Offer **non-custodial MPC wallet** as an option | C13, C12 | Differentiator vs Luno's custodial-only design |
| Launch **`$STM` status ladder** + spend rewards at go-live | C09, C15 | Occupies the retention gap Luno leaves open |

---

## 3. Risk register (from this dossier)

| Risk | Luno lesson | Stremiium control |
|---|---|---|
| Regulatory (FSCA/FIC) | Luno's licence is its moat *and* its cost | Budget compliance from day one; mirror FSP+NCR registration path |
| Custody | Deep-freeze + multi-sig + RBAC is the baseline | MPC + HSM + multi-party approval; continuous PoR |
| ExCon | ZAR ramps are constrained | Work with a licensed SA bank partner |
| Concentration | DCG parent risk perception | Domestic ownership + transparent governance |

---

## 4. Bottom line

Luno is the **domestic benchmark for licensed, custody-first, fiat-railed crypto**. Stremiium should **ADOPT** its PoR discipline, internal ledger, ramp and maker-taker economics; **BEAT** it on self-custody, real-time reserves, spend loops, status tiers and SA ownership; **ADAPT** the staking and ramp into a multi-rail, MPC-enabled NeoBank; and **AVOID** custodial-only design and premature securities-like products (tokenised stocks).
