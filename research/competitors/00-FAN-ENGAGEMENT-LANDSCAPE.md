---
scope: "Cross-competitor comparison of fan-engagement / web3-sports models: Sorare, Socios.com/Chiliz, Polymarket, FanDuel, Fanatics, Gate.io — with read-across to a South African NeoBank loyalty/gamification programme"
council: "C13"
department: "web3-competitor-research"
status: "partial"
confidence: "medium"
sources:
  - "https://sacra.com/c/polymarket/"
  - "https://sacra.com/c/fanatics/"
  - "https://flutter.com/media/k2lju3sf/q2-factsheet-2026.pdf"
  - "https://www.chiliz.com/CHZ_whitepaper_v1.1.pdf"
  - "https://www.bitbase.com/blog/sorare-vs-fifa-collect"
  - "https://www.gate.com/learn/articles/gatecom-fees-explained"
  - "https://www.ngb.org.za/wp-content/uploads/2024/02/NGB1_Legal-Modes-of-Gambling-Article.pdf"
  - "https://cms.law/en/int/expert-guides/cms-expert-guide-to-crypto-regulation/south-africa"
  - "https://www.resbank.co.za/en/home/what-we-do/financial-surveillance/FinSurvFAQ"
  - "https://nextpredict.io/legal/africa/"
last_updated: "2026-10-16"
---

# Fan-Engagement & Web3 Sports Landscape — Competitor Comparison

> Companion to the six per-competitor folders under `research/competitors/`. This file consolidates the
> comparison the per-entity files do not make, and — critically — assesses **relevance to a South African
> NeoBank** loyalty/gamification programme. All claims are tagged `[OBS]`/`[DER]`/`[INF]`/`[EST]`/`[UNK]`
> per `architecture/DATA-MODEL-CONTRACTS.md`.

## 1. Purpose & method
- **Purpose:** one comparable view of business model, monetisation/take-rate, funding/valuation, tokenomics,
  regulation and key metrics across the six competitors, then an SA-NeoBank relevance filter. [INF]
- **Method:** synthesis of the existing per-competitor files (sources cited therein) plus primary regulatory
  sources (NGB, FSCA, SARB, National Treasury) for the SA read-across. [OBS]
- **Scope limit:** public information only; private valuations and unsourced figures are marked `[UNK]`/`[UNVERIFIED]`. [OBS]

## 2. Headline comparison matrix

| Entity | Archetype | Primary monetisation (take-rate) | Funding / valuation | Tokenomics | Home-market regulation | Scale signal |
|---|---|---|---|---|---|---|
| **Sorare** | Licensed NFT fantasy-sports marketplace | Primary card issuance + **5%** secondary fee [OBS] | ~$739M raised; **$4.3B peak (2021)**; ~$3.8B [UNVERIFIED]; +$10M bridge 2026 [OBS] | No fungible token; scarcity NFTs only [OBS] | **UK Gambling Commission prosecution** (trial 2027); NCA freeze £10.0M [OBS] | 2023→2024 revenue €59M→€43M [OBS] |
| **Socios / Chiliz** | Fan-token issuance + club IP network | % of Fan Token Offering + trading commissions [OBS] | ~$60–66M private placement 2018; token-priced (CHZ) [OBS] | CHZ (inflationary) + club Fan Tokens; **10% revenue→buybacks** [OBS] | **UK ASA adverse ruling** (Arsenal); US SEC scrutiny; **MiCA-authorised** [OBS] | "$700M+ for sport"; 70–80+ orgs [OBS] |
| **Polymarket** | On-chain event-contract marketplace | Taker fees **0.03–0.07** by category; maker rebates [OBS] | **~$2.76B** disclosed; valuation **~$1B→$15B→~$21B** (2025–26) [OBS] | **No native token** (weighing one) [OBS] | **CFTC settlement $1.4M (2022)** → US re-entry via QCX (2025) [OBS] | ~$1B annualised revenue (Jun 2026) [EST] |
| **FanDuel** | Regulated US sportsbook + iGaming incumbent | House edge (vig); **DFS 5–15%** entry commission [OBS] | Owned by Flutter (~$11.2B mark 2020; NYSE: FLUT) [OBS] | **No token**; promo credits only [OBS] | State-by-state licences; 21+; prediction-market tension [OBS] | **~39–44% US sportsbook GGR share**; ~70% market EBITDA [OBS] |
| **Fanatics** | Vertically integrated fan super-platform | Retail + collectibles margin; **FanCash** loyalty [OBS] | ~$4.8–4.9B raised; **$31B peak (2022)**; ~$33.5B mark (Nov 2025) [OBS] | **No token**; FanCash closed-loop currency [OBS] | Commerce low-risk; betting licensed 24 states; markets via CFTC DCM [OBS] | 2024 revenue $8.1B; 2025E ~$13B [OBS]/[EST] |
| **Gate.io / Gate** | Multi-asset crypto exchange | Spot **0.1%** (0.09% w/ GT); futures **0.02%/0.05%** [OBS] | Bootstrapped, private; no equity valuation [UNK] | **GT** deflationary, revenue-funded burns (>60% burned) [OBS] | 9 licences (MT, VARA, FSA, GFSC, CySEC, AUSTRAC…); blocks US/UK/JP [OBS] | >58M users (Q2 2026) [OBS] |

## 3. Business models — three families
- **Marketplace take-rate** (Sorare, Polymarket): mint/list an asset or market, monetise **flow** with a small
  fee; take **no house risk**. [OBS]/[DER] ([sacra](https://sacra.com/c/polymarket/), [ludo9](https://www.ludo9.com/sorare/cartes-sorare/vendre-cartes-sorare/prix-de-vente-cartes-sorare/))
- **House-edge / wagering** (FanDuel): profit the **vig** regardless of outcome; cross-sell casino/DFS. [OBS] ([grokipedia](https://grokipedia.com/page/FanDuel_Sportsbook))
- **Issuance + IP licensing** (Socios/Chiliz, Sorare, Fanatics): monetise **club/league IP** via token sales,
  licensed collectibles or merch, with revenue-share to rights-holders. [OBS] ([chiliz binance proposal](https://www.chiliz.com/docs/CHZ_binance_proposal.pdf), [sacra](https://sacra.com/c/fanatics/))
- **Exchange fee-velocity** (Gate): monetise **transaction volume** across spot/derivatives, with no lending book. [OBS]/[INF] ([gate fees](https://www.gate.com/learn/articles/gatecom-fees-explained))

## 4. Monetisation & take-rate — normalised view

| Model | Effective take | Notes | Tag |
|---|---|---|---|
| Sorare secondary | **5%** seller-side | + full primary issuance proceeds | [OBS] |
| Chiliz / Socios | % of FTO + commissions | CHZ is exclusive on-platform currency | [OBS] |
| Polymarket | **0.03–0.07** taker by category; US uniform 0.05 | maker rebate −0.0125; cap ~$1.25/100 @ 50¢ (~2.5% of price) | [OBS] |
| FanDuel sportsbook | vig (typically low single-digit %) | DFS entry commission **5–15%** | [OBS] |
| Fanatics | retail/collectible gross margin (>20% EBITDA collectibles) | loyalty cash-back 1–10% | [OBS] |
| Gate | spot 0.1%; futures 0.02–0.05% | GT discount to 0.09% | [OBS] |

- **Take-rate spectrum:** prediction markets compete on **~0–2.5% effective** take vs sportsbooks' **4–5% vig** —
  the structural pressure state regulators warn about. [OBS] ([sccgmanagement](https://sccgmanagement.com/sccg-articles/2026/02/13/three-structural-scenarios-for-the-future-of-u-s-prediction-markets-and-sportsbooks/))
- **Reading:** a **marketplace take-rate** is capital-light and superior for a NeoBank loyalty marketplace; a
  **house-edge** model requires a gambling licence and carries conduct/consumer risk. [INF]

## 5. Funding & valuation

| Entity | Peak valuation | Latest mark / signal | Total raised (approx.) | Tag |
|---|---|---|---|---|
| Sorare | **$4.3B** (Sep 2021) | ~$3.8B [UNVERIFIED]; +$10M bridge 2026 | ~$739M | [OBS] |
| Socios/Chiliz | token-priced | CHZ market cap ~$246M (snapshot) | ~$65M (2018 private) | [OBS] |
| Polymarket | ~$21B (Sep 2026, reported) | ~$15B (Apr 2026) | ~$2.76B | [OBS] |
| FanDuel | embedded in Flutter | $11.2B mark at 95% (2020) | n/a (corporate) | [OBS] |
| Fanatics | **$31B** (Dec 2022) | ~$33.5B Fidelity mark (Nov 2025) | ~$4.8–4.9B | [OBS] |
| Gate.io | n/a (private) | **[UNK]** | bootstrapped | [UNK] |

- **Pattern:** the two **speculative-asset** models (Sorare, Chiliz) boomed in 2021 and retrenched; the
  **incumbent/regulated** models (FanDuel, Fanatics) compounded; the **institutionalised** market
  (Polymarket) re-rated ~15–20× in 12 months on ICE capital. [OBS]/[INF]

## 6. Tokenomics

| Entity | Token? | Value mechanism | Risk read |
|---|---|---|---|
| Sorare | No fungible token | Scarcity NFTs; 5% resale fee | No protocol inflation levers; speculation-driven [INF] |
| Socios/Chiliz | CHZ + club Fan Tokens | Inflationary validator rewards + **10% revenue→buyback** | BAR −~99% from ATH; securities/gambling concern [OBS] |
| Polymarket | No native token | Take-rate on flow; outcome share tokens (0–1) | Avoided token to preserve CFTC clearance [INF] |
| FanDuel | No token | Promo credits / loyalty rewards | Control group: no token needed [INF] |
| Fanatics | No token | **FanCash** closed-loop currency | Regulatory-safe template [INF] |
| Gate | **GT** | Quarterly revenue-funded burns; >60% supply burned | Most defensible "revenue-linked deflation" [INF] |

- **Key design lesson:** across six models, the **most durable value mechanisms are revenue-funded** (Chiliz
  buyback, GT burn, FanCash redemption) — not emission-based speculation. [INF]

## 7. Regulation (home-market, for contrast with SA)
- **Sorare** — UK Gambling Commission prosecution (3 counts); trial listed 2027; NCA froze £10.0M Premier League money. [OBS] ([fortune](https://fortune.com/2026/09/01/crypto-fantasy-platform-premier-league-13-million-uk-criminal-probe/))
- **Socios/Chiliz** — UK **ASA** ruling against Arsenal adverts; US SEC scrutiny; **first sports platform authorised under EU MiCA**. [OBS] ([ASA](https://www.asa.org.uk/rulings/arsenal-football-club-plc-a21-1121873-arsenal-football-club-plc-1.html), [socios](https://www.socios.com/the-chiliz-group-celebrates-dual-mica-milestone-european-licence-for-socios-europe-services-and-mica-compliant-chz-white-paper/))
- **Polymarket** — CFTC cease-and-desist + **$1.4M** penalty (2022), FBI raid (2024), US return via QCX DCM (2025); ~20 states opposed. [OBS] ([britannica](https://www.britannica.com/money/Polymarket), [crypto.news](https://crypto.news/polymarket-hit-1-billion-in-revenue-and-now-20-states-want-to-shut-it-down/))
- **FanDuel** — state-by-state licensing; prediction-market products flagged as possible licence jeopardisers. [OBS]
- **Fanatics** — commerce/collectibles low-risk; betting licensed in 24 states; Fanatics Markets via CFTC-registered DCM (Crypto.com | Derivatives North America). [OBS] ([sacra](https://sacra.com/c/fanatics/))
- **Gate.io** — multi-jurisdiction licences; blocks US/UK/JP; proof-of-reserves transparency. [OBS] ([gate](https://www.gate.com/learn/articles/gatecom-licenses-global-regulatory-guide))

## 8. Key metrics (selected)

| Metric | Value | Entity | Tag |
|---|---|---|---|
| US sportsbook GGR share | ~39–44% | FanDuel | [OBS] |
| Average monthly players (Q2 2026) | 14.3M | FanDuel/Flutter US | [OBS] |
| 2025E revenue | ~$13B | Fanatics | [EST] |
| Annualised revenue (Jun 2026) | ~$1B | Polymarket | [EST] |
| 2026 record day volume | $425M | Polymarket | [OBS] |
| 2023→2024 revenue | €59M→€43M | Sorare | [OBS] |
| Fan Token price decay | ~−99% from ATH | BAR/Socios | [OBS] |
| Registered users (Q2 2026) | >58M | Gate | [OBS] |

## 9. Relevance to a South African NeoBank

### 9.1 Portable mechanics (bank-appropriate)
- **Closed-loop rewards currency** (Fanatics **FanCash**): redeemable for goods/experiences, **not tradeable** —
  the single most legally-defensible engagement mechanic for SA. [OBS]/[INF]
- **Cross-sell single-account flywheel** (FanDuel, Fanatics): core account → loyalty → adjacent products. [OBS]
- **Branded card + rewards** (Fanatics credit card; FanDuel pricing): interchange-funded cash-back. [OBS]
- **Scarcity loyalty tiers & free-to-play gamification** (Sorare Arcade; Sorare tiers): low-CAC entry, paid upgrade. [OBS]
- **Embedded "fan sentiment" data** (Polymarket's X/Google/Yahoo data integrations): market the *information*, not the wager. [OBS]
- **Transparency-as-trust** (Gate proof-of-reserves): adoption for deposit-safety comms. [INF]

### 9.2 Legally risky in SA (see §10 & `80-SA-LEGALITY-MATRIX.md`)
- **Cash-entry fantasy contests / prediction games** — risk classification as gambling under the **National
  Gambling Act 7 of 2004** (s.11 bans interactive games absent national authorisation). [OBS] ([NGB](https://www.ngb.org.za/wp-content/uploads/2024/02/NGB1_Legal-Modes-of-Gambling-Article.pdf))
- **Tradeable fan tokens / NFTs with secondary markets** — dual exposure: **FSCA/FAIS** (crypto assets as
  financial products; NFT carve-out exists but is narrow) and the **Financial Markets Act**. [OBS] ([CMS](https://cms.law/en/int/expert-guides/cms-expert-guide-to-crypto-regulation/south-africa))
- **Crypto custody / exchange features** — trigger **FSP (CASP) licensing**, **FICA** obligations and **SARB
  exchange-control** rules on cross-border crypto. [OBS] ([SARB](https://www.resbank.co.za/en/home/what-we-do/financial-surveillance/FinSurvFAQ))
- **Sports wagering integration** — requires a **provincial bookmaker licence**; online casino prohibited. [OBS]
- **Prediction markets** — SA legal grey area; SABA (Jul 2026) argues they should be treated as unlawful absent
  a framework. [OBS] ([nextpredict](https://nextpredict.io/legal/africa/))

## 10. Open questions
- Sorare private valuation post-2026 and revenue split primary vs secondary: `[UNK]`.
- Chiliz consolidated group revenue/EBITDA: `[UNK]`.
- Gate equity valuation / minority investors: `[UNK]`.
- Whether SA's Remote Gambling Bill (B11-2024) advances in the 2026–27 parliamentary cycle: `[UNK]`. [OBS] ([mg.co.za](https://mg.co.za/partner-content/2026-07-22-is-online-gambling-legal-in-south-africa-what-the-data-actually-shows/))

## Sources
- [Sacra — Polymarket](https://sacra.com/c/polymarket/)
- [Sacra — Fanatics](https://sacra.com/c/fanatics/)
- [Flutter — Q2 2026 factsheet](https://flutter.com/media/k2lju3sf/q2-factsheet-2026.pdf)
- [Chiliz White Paper v1.1](https://www.chiliz.com/CHZ_whitepaper_v1.1.pdf)
- [Bitbase — Sorare vs FIFA Collect](https://www.bitbase.com/blog/sorare-vs-fifa-collect)
- [Gate — Fees Explained](https://www.gate.com/learn/articles/gatecom-fees-explained)
- [NGB — Legal Modes of Gambling (NGA 7 of 2004)](https://www.ngb.org.za/wp-content/uploads/2024/02/NGB1_Legal-Modes-of-Gambling-Article.pdf)
- [CMS — Crypto regulation South Africa](https://cms.law/en/int/expert-guides/cms-expert-guide-to-crypto-regulation/south-africa)
- [SARB — FinSurv FAQ (crypto assets)](https://www.resbank.co.za/en/home/what-we-do/financial-surveillance/FinSurvFAQ)
- [NextPredict — Prediction markets in Africa](https://nextpredict.io/legal/africa/)
- [Fortune — Sorare UK criminal probe](https://fortune.com/2026/09/01/crypto-fantasy-platform-premier-league-13-million-uk-criminal-probe/)
- [ASA — Arsenal/Socios ruling](https://www.asa.org.uk/rulings/arsenal-football-club-plc-a21-1121873-arsenal-football-club-plc-1.html)
- [Socios.com — MiCA milestone](https://www.socios.com/the-chiliz-group-celebrates-dual-mica-milestone-european-licence-for-socios-europe-services-and-mica-compliant-chz-white-paper/)
- [Britannica Money — Polymarket](https://www.britannica.com/money/Polymarket)
- [Gate — Licenses & Global Regulatory Guide](https://www.gate.com/learn/articles/gatecom-licenses-global-regulatory-guide)
- [MG — Is online gambling legal in SA (2026)](https://mg.co.za/partner-content/2026-07-22-is-online-gambling-legal-in-south-africa-what-the-data-actually-shows/)
