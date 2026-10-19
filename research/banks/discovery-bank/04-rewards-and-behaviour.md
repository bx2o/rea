# 04 — Rewards & Behaviour · Discovery Bank

## The Vitality Money behavioural engine (traced end-to-end)

Discovery Bank's rewards are not points-first; they are **status-first**. A client's behaviour sets a *status*, and the status programmatically sets *price and reward levels*.

```
ACTION (6 tracked financial behaviours)
        |
        v
VITALITY MONEY SCORE  --- blended with --->  Vitality Health (health checks)
        |                                     Vitality Drive (driving)
        v
VITALITY MONEY STATUS  (Blue ➔ Bronze ➔ Silver ➔ Gold ➔ Diamond)
        |
   +----+----------------------------+---------------------------+
   v                                 v                           v
DYNAMIC INTEREST RATES        FEE SUBSIDY                 REWARD BOOST
(credit ↑ / debit ↓)     (admin fee ↓ toward 0)     (Miles, travel, retail)
        |                                                         |
        +--------------------------+------------------------------+
                                   v
                         REDEMPTION SURFACES
             Discovery Miles · Vitality Travel · Ð-Day retail · Wearables
```

## The six tracked financial behaviours

The bank states it reviews financial health based on **six key financial behaviours** to derive Vitality Money status. [SEEN — count confirmed; the individual six criteria are published by Discovery but not transcribed here]

Typical monitored behaviours (per public Vitality Money literature) include: [INFERRED]
1. Saving / emergency-fund behaviour
2. Spending vs income discipline
3. Debt/credit utilisation behaviour
4. Insurance cover adequacy
5. Investment/retirement behaviour
6. Paying accounts on time

## Status tiers & effects

| Status | Effect on pricing | Effect on rewards | Class |
|---|---|---|---|
| Blue → Bronze → Silver → Gold → Diamond | Monotonic: better status = better rate + lower fee | Monotonic: better status = higher Miles earn/spend + bigger travel discount | [SEEN] |
| Diamond (top) | Top dynamic rates; fee → 0 | Max Miles, up to 75% flight discount | [SEEN] |

## Discovery Miles — the cross-ecosystem currency

| Property | Detail | Class |
|---|---|---|
| Scope | Earned across **Vitality Health, Vitality Drive, Vitality Money and banking** | [SEEN] |
| Banking earn | Up to **1 Mile per R15** qualifying spend | [SEEN] |
| Travel redemption | Flights, accommodation, car hire via Vitality Travel | [SEEN] |
| Flight value | **10%–75% off** international flights; up to 100% off base fares (2027 Superbank announcements) | [SEEN] |
| Retail redemption | **Ð-Day on the 15th** — up to 15% off daily, doubling to **up to 30%** for 24h | [SEEN] |
| Currency nature | **Closed-loop** loyalty currency, issuer-controlled, non-transferable, non-cash | [INFERRED] |

## Partner funding model (how it is paid for)

| Funding source | Mechanism | Class |
|---|---|---|
| Group cross-subsidy | Health/Life/Insure profits fund banking rewards to lock the whole relationship | [INFERRED] |
| Interchange | Card spend generates interchange that partially funds Miles | [INFERRED] |
| Partner co-funding | Airlines/retailers discount inventory in exchange for volume + customer acquisition | [INFERRED] |
| Breakage | Unredeemed Miles/points retained | [INFERRED] |

## Retention / velocity effect

* The engine converts a **health/insurance relationship** into a **low-cost deposit and card-spend relationship**, and vice-versa. High engagement → lower funding cost + higher NIR, which is the structural reason the bank can afford aggressive "up to X% off" offers.
* **Velocity loop:** tracked behaviour → status upgrade → visible price improvement → deeper product use → more data → sharper scoring.

## Thin-data caveats

* The **exact six behaviours, the status thresholds, and the Miles valuation** are published by Discovery but are not transcribed here; Stremiium must pull the current Vitality Money rules PDF. [SEEN, values not extracted]
* Whether Miles can ever be converted to cash / transferred is **not** — treat the currency as strictly closed-loop until proven otherwise. [UNKNOWN]
