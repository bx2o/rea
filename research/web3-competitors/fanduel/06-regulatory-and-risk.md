# FanDuel / DraftKings — 06 Regulatory & Risk

## 1. Home-market posture (US / UK)

| Regulator / regime | Relationship | Class |
|---|---|---|
| **US state gaming regulators** | Per-state sportsbook/casino licences (e.g., NJ DGE, PA PGCB, and other state boards) + tribal compacts | SEEN (regulators exist) / licence numbers NOT asserted |
| **US DFS legality** | DFS is regulated/legal in many (not all) states, typically framed as skill | SEEN-as-reported |
| **PASPA repeal (2018)** | *Murphy v. NCAA* struck down the federal sports-betting ban → state-by-state legalisation | SEEN |
| **UK Gambling Commission** | Flutter group UK operations separately licensed | SEEN-as-reported |
| **Federal AML (BSA)** | Bank Secrecy Act AML program obligations for money-transmitting/gaming activity | SEEN (regime) |
| **Responsible gaming** | Deposit/wager limits, self-exclusion, reality checks mandated | SEEN (regime) |

> The exact set of state licences and any UKGC number must be read from the respective
> public register before citation. None are asserted here.

## 2. Structural risk register

| Risk | Description | Severity |
|---|---|---|
| Licensing fragmentation | Dozens of US state regimes; SA has 9 provinces | High |
| Promo/affordability rules | Regulators increasingly restrict inducements and require affordability checks | High |
| AML/CTF | Real-money flows = full AML obligations | High |
| Responsible-gaming liability | Gamification vs harm-prevention tension | High |
| Anti-collusion | DFS integrity (syndicates, shared accounts) | Medium |
| Athletic/data integrity | Dependence on official data deals | Medium |
| Tax | Per-state(-province) betting taxes | Medium |

## 3. South Africa comparison

| SA regime | Relevance to a FanDuel-like product | Class |
|---|---|---|
| **NGB / provincial gambling boards** (National Gambling Act 7 of 2004) | Sports betting is licensed **provincially** (bookmaker/totalisator); DFS may be treated as betting. **Online gambling** licensing is evolving under the National Gambling Amendment Bill. | SEEN (statute) / INFERRED (application) |
| **FSCA** (FAIS; crypto assets = financial products 2022; CASP licensing) | Not directly the gambling regulator, but relevant if products are derivative-like or tokenised; a real-money sports token could attract both regimes. | SEEN (regime) / INFERRED |
| **FICA** (Act 38 of 2001; Directive 9 Travel Rule) | KYC/CDD for players, PEP/sanctions screening, record-keeping; crypto payouts trigger Travel Rule. | SEEN |
| **POPIA** (Act 4 of 2013) | Player data, KYC, behavioural/gaming profiling → lawful basis, consent, security, retention limits. | SEEN |
| **SARB / FinSurv / Exchange Control** | Cross-border winnings/data flows, crypto settlement. | SEEN (regime) |
| **Consumer Protection Act 68 of 2008** | Bonus terms, promo transparency, fair marketing. | SEEN (regime) |
| **Responsible-gaming duties** | SA provincial conditions impose responsible-gaming obligations. | SEEN (regime) |

## 4. Gaps Stremiium can exploit

1. **Licensed-by-design, province-aware:** build geofencing/geo-gating per SA province from day one (mirrors US state gating) — a compliance moat most challengers skip.
2. **Responsible-gaming-first rewards:** reward *engagement/learning*, not raw wagering volume → a differentiator vs FanDuel's volume-tier design.
3. **POPIA-native data handling** + data residency in `af-south-1`.
4. **FICA-integrated KYC** reuse from the banking side — a NeoBank can KYC once and reuse across verticals, unlike a standalone sportsbook.

## 5. Red lines

* Never assert a state/provincial licence number, penalty, or approval without a register read.
* Never imply DFS or prediction markets are legal in SA without explicit C01 review.
* Never let promo/gamification mechanics bypass responsible-gaming controls.
