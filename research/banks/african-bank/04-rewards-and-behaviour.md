# 04 — Rewards & Behaviour · African Bank

## Audacious Rewards — activity-driven points engine

African Bank runs **Audacious Rewards**, a loyalty programme that pays points for **everyday banking activity**, redeemable at the Audacious Rewards store. It is a **behaviour-reward** design (like Discovery) but **simpler and non-ecosystem-gated** (unlike Discovery's health/Vitality dependency).

```
ACTION                                     POINTS           REDEMPTION
------------------------------------------ ---------------- --------------------------------
Save / deposit into MyWorld                  -> points       Airtime & data
Repay a loan on time                         -> points       Groceries
Swipe the African Bank card                  -> points       Travel
Buy electricity / airtime (VAS)              -> points       Entertainment
(qualifying everyday banking)                -> points       Audacious Rewards store

Rule: points credited only after the qualifying transaction is fully processed/cleared;
no points for pending, disputed, returned or fraudulent transactions.
```

## The earning rules (traced)

| Earn action | Reward | Class |
|---|---|---|
| Everyday banking transactions | Points | [SEEN] |
| Savings behaviour | Points | [SEEN] |
| Loan repayment behaviour | Points | [SEEN] |
| Card swipes | Points | [SEEN] |
| Buying electricity/airtime (VAS) | Points | [SEEN] |
| Redeemable for | Airtime, data, groceries, travel, entertainment (Audacious Rewards store) | [SEEN] |
| Crediting rule | After transaction clears; excludes pending/disputed/returned/fraud | [SEEN] |

## Partner / funding model

| Source | Mechanism | Class |
|---|---|---|
| Bank-funded rewards | Points funded from lending margin + fee income, not a health/insurance P&L | [INFERRED] |
| Redemption partners | Vouchers (airtime/data/grocery/travel/entertainment) sourced via the rewards store | [SEEN] |
| Breakage | Unredeemed points retained | [INFERRED] |

## Retention / velocity effect

* **Behavioural targeting:** rewards specifically incentivise **loan repayment** and **savings** — i.e. the behaviours that reduce credit risk and deepen deposits — making the loyalty programme a **risk-management tool**, not just a marketing tool. [INFERRED]
* **No health dependency:** unlike Discovery, Audacious Rewards is available to any client based on banking activity alone → broader addressable market. [INFERRED]
* **Currency nature:** appears to be a **closed-loop points balance** (store redemption), not a transferable currency. [INFERRED]

## Thin-data caveats

* The **exact point values, earning rates and tier structure** are defined in the Audacious Rewards T&Cs (v29, 2025) and are **not transcribed here**; Stremiium must read the T&C Appendix A for precise rates. [SEEN, values not extracted]
* Whether points expire, and the redemption conversion values, were not extracted. [UNKNOWN]
