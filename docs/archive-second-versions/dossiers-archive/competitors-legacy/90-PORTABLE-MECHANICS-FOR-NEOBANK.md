---
scope: "Prioritised, SA-legality-screened catalogue of fan-engagement/loyalty/gamification mechanics a South African NeoBank could adopt, each with source competitor, legal status, implementation sketch and risk"
council: "C13"
department: "web3-competitor-research"
status: "partial"
confidence: "medium"
sources:
  - "https://sacra.com/c/fanatics/"
  - "https://sacra.com/c/polymarket/"
  - "https://www.bitbase.com/blog/sorare-vs-fifa-collect"
  - "https://sorare.com/tr/help/a/4402780446097/what-is-a-sorare-card"
  - "https://www.socios.com/socios-securitize-partner-tokenized-sports-equity-offerings/"
  - "https://flutter.com/media/k2lju3sf/q2-factsheet-2026.pdf"
  - "https://www.gate.com/learn/articles/gatecom-licenses-global-regulatory-guide"
  - "https://www.ngb.org.za/wp-content/uploads/2024/02/NGB1_Legal-Modes-of-Gambling-Article.pdf"
  - "https://cms.law/en/int/expert-guides/cms-expert-guide-to-crypto-regulation/south-africa"
  - "https://www.resbank.co.za/en/home/what-we-do/financial-surveillance/FinSurvFAQ"
last_updated: "2026-10-16"
---

# Portable Mechanics for the NeoBank — Prioritised Catalogue

> 14 mechanics ranked by **(legal safety × engagement value × portability)**. SA-legal status references
> `80-SA-LEGALITY-MATRIX.md`. All claims tagged `[OBS]`/`[DER]`/`[INF]`/`[EST]`/`[UNK]`. **Not legal advice.**

## Priority summary

| # | Mechanism | Source competitor | SA legal status | Priority |
|---|---|---|---|---|
| 1 | Closed-loop rewards currency ("FanCash") | Fanatics | **SAFE** | P1 |
| 2 | Interchange-funded cash-back | Fanatics ONE / FanDuel | **SAFE** | P1 |
| 3 | Tiered/scarcity loyalty ladder | Sorare | **SAFE** | P1 |
| 4 | Free-to-play gamification (non-cash prizes) | Sorare Arcade | **SAFE** | P1 |
| 5 | Single-account cross-sell flywheel | FanDuel | **SAFE** | P1 |
| 6 | Branded card + rewards integration | Fanatics | **SAFE** (NCA if credit) | P1 |
| 7 | Referral + social leaderboards | Polymarket / Fanatics | **SAFE** | P1 |
| 8 | Merchant redemption marketplace | Fanatics Commerce | **SAFE** | P1 |
| 9 | Transparency / trust communications | Gate | **SAFE** | P2 |
| 10 | Non-financial poll / vote utility | Socios | **SAFE (low value)** | P2 |
| 11 | Embedded "fan sentiment" data feed | Polymarket | **SAFE (data only)** | P2 |
| 12 | Zero-fee licensed investing loss-leader | Gate | **Licence required (FSCA)** | P2 |
| 13 | Non-tradeable NFT collectibles | Sorare / Topps | **CAUTION (FSCA/FICA)** | P3 |
| 14 | No-stake prediction/poll game | Polymarket-lite | **CAUTION** | P3 |
| — | *Tradeable fan tokens* | Socios | **HIGH RISK** | Avoid |
| — | *Crypto trading / self-custody* | Gate | **HIGH RISK** | Avoid |
| — | *Sports wagering integration* | FanDuel | **HIGH RISK** | Avoid |

---

## P1 — Safest & highest-value

### 1. Closed-loop rewards currency (the "FanCash" model)
- **Mechanism:** a centralised, **non-transferable** points/currency earned on spend and redeemable for goods,
  vouchers and experiences. [OBS] ([sacra](https://sacra.com/c/fanatics/))
- **Source competitor:** Fanatics **FanCash** (5–10% back, ~10M converted users at launch). [OBS]
- **SA legal status:** **SAFE** — ordinary loyalty scheme, not a financial product or gambling. Note **CPA**
  requires voucher/gift-card validity of **≥3 years** and clear expiry. [OBS] ([Shoprite T&C](https://www.termsconditions.co.za/content/dam/ShopriteGroup/Terms/PDFS/Shoprite%20Checkers%20Gift%20Card.pdf))
- **Implementation sketch:** ledger-based points in the core banking app; earn on card interchange, Airtime/data,
  bill pay; redeem against a closed merchant catalogue; no P2P transfer, no cash-out.
- **Risk:** breakage/liability accounting; CPA expiry rules; avoid any secondary market for points. [INF]

### 2. Interchange-funded cash-back
- **Mechanism:** reward funded by card interchange margin rather than marketing spend — self-financing loyalty. [OBS]/[INF]
- **Source competitor:** Fanatics ONE (up to 10% on bets), FanDuel pricing generosity. [OBS] ([sacra](https://sacra.com/c/fanatics/))
- **SA legal status:** **SAFE** (a loyalty/rebate feature); if lending-linked, **NCA** applies. [INF]
- **Implementation sketch:** tiered cash-back on debit card spend; funding modeled against interchange yield;
  cap and category exclusions (e.g., cash advances).
- **Risk:** margin compression if tiers are too generous; avoid knock-on "bonus-chasing" dynamics. [INF]

### 3. Tiered / scarcity loyalty ladder
- **Mechanism:** status tiers (bronze→platinum) with escalating perks; scarcity as the value driver. [OBS] ([sorare help](https://sorare.com/tr/help/a/4402780446097/what-is-a-sorare-card))
- **Source competitor:** Sorare rarity tiers (Common→Unique). [OBS]
- **SA legal status:** **SAFE** — status tiers are not gambling or a financial product. [INF]
- **Implementation sketch:** 4–5 tiers by 90-day activity; perks = fee waivers, higher savings rates, event access,
  limited-edition digital badges (non-tradeable).
- **Risk:** tier inflation eroding perceived exclusivity; keep thresholds transparent. [INF]

### 4. Free-to-play gamification with non-cash prizes
- **Mechanism:** no-entry-fee "predict-the-score"/quiz/streak games with **non-cash** rewards (points, badges,
  merch). [OBS] ([blockchaingamer](https://www.blockchaingamer.biz/news/42931/sorare-raises-10-million-rebuilds-profitability/))
- **Source competitor:** Sorare **Arcade** (free-to-play); FanDuel free-to-play. [OBS]
- **SA legal status:** **SAFE if genuinely free and prizes are not cash/consideration**; paid entry risks NGA
  gambling characterisation. [INF] ([NGB](https://www.ngb.org.za/wp-content/uploads/2024/02/NGB1_Legal-Modes-of-Gambling-Article.pdf))
- **Implementation sketch:** daily free contest; scoring from real match data; prizes in rewards currency/merch;
  **no wager, no cash payout, no skill-for-cash**.
- **Risk:** any entry fee/stake converts the mechanic into possible gambling; keep prizes promotional. [INF]

### 5. Single-account cross-sell flywheel
- **Mechanism:** one account and identity across products to lift share-of-wallet; loyalty as retention glue. [OBS] ([flutter factsheet](https://flutter.com/media/k2lju3sf/q2-factsheet-2026.pdf))
- **Source competitor:** FanDuel (sportsbook → iGaming → prediction markets). [OBS]
- **SA legal status:** **SAFE** — internal product design; each added product still needs its own licence. [INF]
- **Implementation sketch:** unified onboarding; rewards accelerate cross-adoption (e.g., bonus points on first
  insurance/investment/savings product).
- **Risk:** mis-selling/conduct risk; NCA/FAIS/Twin Peaks conduct obligations per product. [INF]

### 6. Branded card with integrated rewards
- **Mechanism:** a Visa/Mastercard card whose rewards are fungible across the ecosystem — the consumer-finance
  monetisation layer. [OBS] ([sacra](https://sacra.com/c/fanatics/))
- **Source competitor:** Fanatics branded credit card (2026); FanDuel. [OBS]
- **SA legal status:** **SAFE for a debit card**; a **credit** card triggers **NCA** registration and affordability
  rules. [INF]
- **Implementation sketch:** launch debit-first with rewards; add credit only with NCA authorisation and a
  responsible-lending framework. [INF]
- **Risk:** NCA compliance, affordability assessments; keep rewards non-tradeable. [INF]

### 7. Referral + social leaderboards
- **Mechanism:** viral referral loops with public leaderboards and achievable milestones. [OBS] ([sacra](https://sacra.com/c/polymarket/))
- **Source competitor:** Polymarket (social/leaderboards), Fanatics Live. [OBS]
- **SA legal status:** **SAFE** — standard growth mechanics (POPIA consent for data use). [INF]
- **Implementation sketch:** invite codes, tiered referral rewards, opt-in leaderboards on savings/gamified goals.
- **Risk:** POPIA/privacy on social data; anti-abuse against referral farming. [INF]

### 8. Merchant redemption marketplace
- **Mechanism:** a curated catalogue where rewards buy real goods/experiences — closing the earn→burn loop. [OBS] ([sacra](https://sacra.com/c/fanatics/))
- **Source competitor:** Fanatics Commerce (merchandise) + Collectibles. [OBS]
- **SA legal status:** **SAFE** — ordinary retail marketplace. [INF]
- **Implementation sketch:** partner ZA merchants/vouchers/experiences; points priced to a transparent ZAR rate.
- **Risk:** merchant economics/margin; inventory of vouchers; CPA validity rules. [INF]

---

## P2 — Safe, lower direct value or licence-gated

### 9. Transparency / trust communications
- **Mechanism:** publish solvency/liquidity/uptime "transparency" reporting as a marketing trust signal. [OBS] ([gate](https://www.gate.com/learn/articles/gatecom-licenses-global-regulatory-guide))
- **Source competitor:** Gate proof-of-reserves (117–127% ratio). [OBS]
- **SA legal status:** **SAFE** — communications; must not misstate (CPA/consumer law). [INF]
- **Implementation sketch:** quarterly "trust report": depositor-protection status, liquidity, complaint stats; align
  to SA bank disclosure norms. [INF]
- **Risk:** over-claiming safety; regulatory advertising rules for banks. [INF]

### 10. Non-financial poll / vote utility
- **Mechanism:** let users vote on branding/community decisions via app — engagement without investability. [OBS] ([bitbase](https://www.bitbase.com/blog/what-fan-tokens-actually-vote-on))
- **Source competitor:** Socios club polls. [OBS]
- **SA legal status:** **SAFE but low value** — voting utility is a weak hook on its own. [OBS]/[INF]
- **Implementation sketch:** community polls on product/charity features; no monetary token required.
- **Risk:** novelty wears off; governance expectations may exceed delivered influence. [INF]

### 11. Embedded "fan sentiment" data feed
- **Mechanism:** distribute aggregated sentiment/price data as an information product (not a wager). [OBS] ([sacra](https://sacra.com/c/polymarket/))
- **Source competitor:** Polymarket data on X/Google/Yahoo and ICE "Signals & Sentiment". [OBS]
- **SA legal status:** **SAFE if strictly data/information** — no tradable contract and no staking. [INF]
- **Implementation sketch:** in-app "fan pulse"/sentiment widgets for sports partners; clearly informational.
- **Risk:** if the widget becomes actionable trading/betting it crosses into licensed activity. [INF]

### 12. Zero-fee licensed investing loss-leader
- **Mechanism:** zero-fee equities/ETFs as an acquisition hook, monetised via spread/pro tiers. [OBS] ([gate](https://www.gate.com/announcements/article/101129))
- **Source competitor:** Gate TradFi zero-fee US stocks. [OBS]
- **SA legal status:** **Licence required** — FSCA **FSP** authorisation (advice/intermediary); derivative/equity
  products via licensed venues (JSE/stockbroker). [OBS] ([licentium](https://www.licentium.io/post/south-africa-casp-licensing))
- **Implementation sketch:** partner a licensed stockbroker/LISP rather than build in-house initially.
- **Risk:** FSCA licensing, conduct, and suitability requirements; operational complexity. [INF]

---

## P3 — Caution mechanics

### 13. Non-tradeable NFT / digital collectibles
- **Mechanism:** limited-edition digital collectibles as rewards (ownership + display, not investment). [OBS] ([sorare help](https://sorare.com/tr/help/a/4402780446097/what-is-a-sorare-card))
- **Source competitor:** Sorare cards; Topps digital. [OBS]
- **SA legal status:** **CAUTION** — no bespoke law; FSCA exempts **NFT-only** services from FAIS s.7(1), but
  **FICA may still apply**, and any secondary market/tradeable framing raises **FSCA/FMA** risk. [OBS] ([CMS](https://cms.law/en/int/expert-guides/cms-expert-guide-to-crypto-regulation/south-africa), [WhereLegalCrypto](https://wherelegalcrypto.com/south-africa/nfts/))
- **Implementation sketch:** only if a clear consumer proposition exists; keep **non-transferable**, no secondary
  market, no promised value; avoid anything sounding like an investment.
- **Risk:** securities/AML re-characterisation; ASA-style advertising risk (as with Arsenal/Socios). [INF]

### 14. No-stake prediction / poll game
- **Mechanism:** predict event outcomes for points only — a "Polymarket-lite" with **no money at stake**. [OBS] ([sacra](https://sacra.com/c/polymarket/))
- **Source competitor:** Polymarket (concept only). [OBS]
- **SA legal status:** **CAUTION** — no SA law licenses prediction markets; SABA (Jul 2026) argues even
  no-framework event products should be treated as **illegal exchange betting**. Free/no-stake versions are lower
  risk but the **precedent is adverse**. [OBS] ([nextpredict](https://nextpredict.io/legal/africa/))
- **Implementation sketch:** only as pure marketing gamification with **zero consideration and non-cash prizes**,
  clearly labelled non-betting; obtain legal opinion first.
- **Risk:** regulator could still characterise as gambling; reputational/announcement risk. [INF]

---

## Avoid (not portable to an SA bank)
- **Tradeable fan tokens** (Socios): securities/gambling-like + ASA-style advertising + ~99% price decay. [OBS]
- **Crypto trading / self-custody** (Gate): needs FSP/CASP licence, FICA registration and SARB FinSurv
  cross-border authorisation. [OBS] ([SARB](https://www.resbank.co.za/en/home/what-we-do/financial-surveillance/FinSurvFAQ))
- **Sports wagering** (FanDuel): requires a **provincial bookmaker licence**; online casino prohibited. [OBS]

## Sources
- [Sacra — Fanatics (FanCash, card)](https://sacra.com/c/fanatics/)
- [Sacra — Polymarket (data/social)](https://sacra.com/c/polymarket/)
- [Sorare Help — card types](https://sorare.com/tr/help/a/4402780446097/what-is-a-sorare-card)
- [Bitbase — What Fan Tokens vote on](https://www.bitbase.com/blog/what-fan-tokens-actually-vote-on)
- [BlockchainGamer.biz — Sorare Arcade](https://www.blockchaingamer.biz/news/42931/sorare-raises-10-million-rebuilds-profitability/)
- [Flutter — Q2 2026 factsheet](https://flutter.com/media/k2lju3sf/q2-factsheet-2026.pdf)
- [Gate — Licenses & regulatory guide](https://www.gate.com/learn/articles/gatecom-licenses-global-regulatory-guide)
- [Gate — July 2026 report (TradFi)](https://www.gate.com/announcements/article/101129)
- [NGB — Legal Modes of Gambling](https://www.ngb.org.za/wp-content/uploads/2024/02/NGB1_Legal-Modes-of-Gambling-Article.pdf)
- [CMS — Crypto regulation South Africa](https://cms.law/en/int/expert-guides/cms-expert-guide-to-crypto-regulation/south-africa)
- [WhereLegalCrypto — NFTs in South Africa](https://wherelegalcrypto.com/south-africa/nfts/)
- [NextPredict — Prediction markets in Africa](https://nextpredict.io/legal/africa/)
- [SARB — FinSurv FAQ](https://www.resbank.co.za/en/home/what-we-do/financial-surveillance/FinSurvFAQ)
- [Shoprite Checkers — Gift card T&Cs](https://www.termsconditions.co.za/content/dam/ShopriteGroup/Terms/PDFS/Shoprite%20Checkers%20Gift%20Card.pdf)
