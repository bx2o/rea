# 04 — Rewards & Behaviour

**Entity:** Morgan Stanley · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19

Morgan Stanley runs **no points/loyalty currency** in the consumer-bank sense. Its behavioural engine is **relationship deepening**: the "**advisor funnel**" that converts self-directed/lower-engagement clients into advisor-managed, fee-based relationships, and the **automatic cash-sweep** that keeps cash on-balance-sheet.

---

## 1. Behavioural mechanics

| Action | Mechanism | Effect | Evidence |
|---|---|---|---|
| Join self-directed (E*TRADE) | Digital account | Entry into ecosystem | SEEN |
| Accumulate assets | Relationship thresholds | Eligibility for advisory | SEEN |
| Convert to advisor relationship | "Advisor funnel" | **Fee-based AUM** stickiness | SEEN |
| Idle cash | **Auto cash-sweep** | NII; cash stays at firm | SEEN |
| Borrow against portfolio | SBL | NII + lock-in (collateral) | SEEN |
| Plan goals | Monte Carlo planning tools | Engagement + retention | SEEN |

**INFERRED relationship-deepening loop:**

```
   Self-directed (E*TRADE) ──► assets grow ──► advisory ladder ──► fee-based AUM
          ▲                                          │
          │                                          ▼
   digital tools / planning ◄──── NII (sweep + SBL) ── more assets
```

---

## 2. The "advisor funnel" (publicly referenced)

- Management describes an **advisor funnel** converting large pools of self-directed/client assets into advisor-managed relationships (a **$100bn** client-asset conversion referenced in analyst coverage).
- **INFERRED:** the funnel is the *acquisition-to-advisory* pipeline — digital entry, human conversion, fee-based retention.

---

## 3. Tier / status math

| Dimension | Exists? | Notes |
|---|---|---|
| Loyalty points currency | No | Not a points programme |
| Relationship tiers | Yes (implicit) | Asset thresholds unlock advisory/private banking |
| Card rewards | Limited (bank context) | Not the core engine |
| Crypto loyalty tier | No | — |

---

## 4. Partner funding model

- Revenue is **client-funded** (advisory fees, NII), not partner-funded. No merchant/interchange rewards engine at the wealth layer.
- **Contrast:** Stremiium's `$STM` rewards are *engineered*; Morgan Stanley's "rewards" are *relationship access + convenience*.

---

## 5. Currency velocity & retention

| Dimension | Observation |
|---|---|
| Cash velocity | Managed via sweep (kept on-platform) |
| Asset velocity | Low (long-term advisory relationships) |
| Retention | Very high (advisor relationship + SBL collateral + planning lock-in) |
| Consumer gamification | None |

---

## 6. Implications for Stremiium

| MS lesson | Stremiium action |
|---|---|
| **Advisor funnel** (digital → advisory) | ADOPT a tiered "digital → guided → premium" ladder |
| Auto cash-sweep (NII) | ADAPT transparently (avoid opaque sweep conduct risk) |
| Planning tools drive retention | ADAPT: automated advice + `$STM` goal rewards |
| No loyalty currency | BEAT with `$STM` status/rewards |
| Very high retention via collateral lock-in | ADAPT carefully (SBL is NCA/risk-sensitive) |
