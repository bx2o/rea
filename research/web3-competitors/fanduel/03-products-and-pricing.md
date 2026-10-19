# FanDuel / DraftKings — 03 Products & Pricing

> Real-money pricing (vig/commission/promos) is state- and time-specific and was **not
> captured in-app** (REA not executed). Numbers are flagged, not asserted.

## 1. Product ladder

| Product | Description | Class |
|---|---|---|
| Daily Fantasy Sports (DFS) | Salary-cap contests; entry fees; prize pools | SEEN |
| Sportsbook | Pre-match + in-play betting on sports | SEEN |
| Online casino | Slots/table games (where licensed) | SEEN |
| Horse racing | via FanDuel Racing/TVG | SEEN-as-reported |
| Free-to-play / pick'em | Promotional prediction-style games | SEEN-as-reported |
| Same-game parlays | Bundled correlated bets | SEEN |

## 2. Pricing mechanics

| Line | Model | Class |
|---|---|---|
| Sportsbook | **Vig/juice** embedded in odds; margin to operator | SEEN (industry mechanic) |
| DFS | **Rake** on contest entry (user-vs-user pools) | SEEN (industry mechanic) |
| Casino | House edge on games | SEEN |
| Promotions | Deposit matches, risk-free bets, odds boosts (CAC spend) | SEEN-as-reported |

> **No specific vig %, rake %, or promo amounts are asserted.** These vary by market/state
> and must be captured from public pricing before use.

## 3. DFS vs sportsbook economics

| Lever | DFS | Sportsbook |
|---|---|---|
| Revenue source | Rake on entry fees | Hold (margin) on book |
| Risk exposure | Low (pooled, user-vs-user) | High (operator takes the other side) |
| Skill framing | Skill (legal in many states) | Chance/betting |
| Legal complexity | Lower in DFS-legal states | Higher (state betting licensing) |

## 4. Reward/promo structure (acquisition + retention)

| Type | Purpose | Class |
|---|---|---|
| Sign-up bonus / deposit match | Acquisition (CAC) | SEEN-as-reported |
| Risk-free bet | Trial conversion | SEEN-as-reported |
| Odds boost | Volume stimulation | SEEN-as-reported |
| **Loyalty/rewards program** | Tiered retention (see `04-rewards-and-behaviour.md`) | SEEN-as-reported |

## 5. Economics Stremiium cares about

| Lever | FanDuel behaviour | Stremiium read |
|---|---|---|
| CAC via promos | Heavy promo spend | Budget realistic CAC; promos must be licensed-compliant |
| Take rate | Vig + rake | Model hold; SA provincial rules may cap/regulate |
| Responsible-gaming cost | Mandatory | Build in, don't bolt on |
| Compliance cost | Per-state licensing + monitoring | Per-province in SA |

## 6. Warnings

* Do not copy US promo mechanics blindly into SA — bonus/gambling promo rules differ.
* Any "hold %" or "rake %" quoted must be sourced and dated; it varies materially.
* DFS vs sportsbook legal treatment is **jurisdiction-specific**; never generalise.
