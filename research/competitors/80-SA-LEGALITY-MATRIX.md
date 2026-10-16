---
scope: "South African legality matrix mapping competitor models (gambling/wagering, crypto trading, prediction markets, fan tokens, NFT collectibles, fantasy sports) against the National Gambling Act, FSCA/FAIS, SARB exchange control and related SA law"
council: "C13"
department: "web3-competitor-research"
status: "verified"
confidence: "medium"
sources:
  - "https://www.ngb.org.za/wp-content/uploads/2024/02/NGB1_Legal-Modes-of-Gambling-Article.pdf"
  - "https://www.ngb.org.za/wp-content/uploads/2026/02/Media-Release_RGS.pdf"
  - "https://www.ngb.org.za/faqs/"
  - "https://cms.law/en/int/expert-guides/cms-expert-guide-to-crypto-regulation/south-africa"
  - "https://www.cliffedekkerhofmeyr.com/export/sites/cdh/news/publications/2022/Practice/Finance/Downloads/Finance-Banking-Alert-20-October-2022.pdf"
  - "https://www.dlapiperafrica.com/en/south-africa/insights/2026/FSCA_Update_on_Licensing_and_Supervision_of_Crypto_Asset_Service_Providers"
  - "https://www.resbank.co.za/en/home/what-we-do/financial-surveillance/FinSurvFAQ"
  - "https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight-and-supervision/designation-notices/280526%20Joint%20Communication_Crypto%20assets%20for%20domestic%20payment%20purposes.pdf"
  - "https://www.treasury.gov.za/public%20comments/CapFlow/Draft%20Capital%20Flow%20Management%20Regulations%202026%20April.pdf"
  - "https://www.supremecourtofappeal.org.za/index.php/judgements/send/26-judgments-2011/1912-casino-enterprises-v-the-gauteng-gambling-board-653-10-2011-zasca-155-28-september-2011"
  - "https://nextpredict.io/legal/africa/"
  - "https://www.sars.gov.za/individuals/crypto-assets-tax/"
last_updated: "2026-10-16"
---

# SA Legality Matrix — Competitor Models vs South African Law

> **Not legal advice.** This matrix maps *public* regulatory positions to competitor mechanics for
> research/design-filtering purposes only. Any NeoBank feature must be cleared by SA counsel. Claims are
> tagged `[OBS]`/`[DER]`/`[INF]`/`[EST]`/`[UNK]`.

## 1. Model-layer matrix (the five legal pins)

| Model layer (as implemented by competitors) | SA legal status | Governing instrument / regulator | Key constraint | Tag |
|---|---|---|---|---|
| **Gambling / wagering** (FanDuel sportsbook; sports & horse betting) | **Legal only via a provincial bookmaker licence**; online *casino* is **unlawful** | National Gambling Act **7 of 2004**; 9 provincial gambling boards | s.11 bans "interactive games" absent national authorisation; only casinos/bingo/betting/LPMs are legal modes | [OBS] |
| **Crypto trading / exchange** (Gate.io; crypto custody) | **Legal but licensed** | **FSCA / FAIS Act 37 of 2002** (crypto = financial product); **FICA** | CASP = FSP licence (subcategory 1.28); FICA accountable institution; fit-and-proper; RE1 | [OBS] |
| **Prediction markets** (Polymarket; FanDuel Predicts; Fanatics Markets) | **Legal gap — likely unlawful/unauthorised** | NGA (argued) + SARB/exchange control; SABA position | No SA law licenses event contracts; SABA argues treat as exchange betting → illegal absent framework | [OBS] |
| **Fan tokens** (Socios/Chiliz club tokens) | **Unregulated but high-risk** | **FSCA/FAIS** (crypto asset); **FMA 19 of 2012**; CPA/marketing | Tradeable, price-fluctuating asset marketed to fans → securities/gambling-like + advertising risk | [INF] |
| **NFT collectibles** (Sorare cards; Topps digital) | **No bespoke law; carve-out exists** | FICA (NFTs within "crypto asset"); FSCA NFT exemption | FSCA exempts *NFT-only* financial services from FAIS s.7(1); FICA may still apply; narrow reading | [OBS] |
| **Fantasy sports** (FanDuel DFS; Sorare fantasy) | **Not clearly licensed — depends on entry fee** | NGA (gambling characterisation); CPA | Paid-entry-for-prize may be gambling; free-to-play with non-cash prizes far lower risk | [INF] |
| **Closed-loop loyalty / rewards** (Fanatics FanCash; promo credits) | **Legal (ordinary loyalty scheme)** | CPA (expiry ≥ 3 yrs for vouchers/gift cards); NCA (if credit) | Non-transferable, goods-redeemable points are not a financial product or gambling | [OBS]/[INF] |

## 2. Competitor → SA status matrix

| Competitor | Core model | SA classification | Controlling instrument(s) | Transferable to a bank in SA? | Tag |
|---|---|---|---|---|---|
| **Sorare** | NFT fantasy cards, paid auctions + 5% resale | Paid-entry fantasy contests risk = **gambling**; NFTs = crypto asset | NGA s.11; FSCA/FAIS; FICA | **No** (paid fantasy); **caution** (free collectibles) | [INF] |
| **Socios / Chiliz** | Fan tokens + voting + VIP rewards | Fan tokens = **crypto asset**; voting utility weak | FSCA/FAIS; FMA; CPA advertising | **No** for tradeable tokens; yes for non-tradeable access rewards | [INF] |
| **Polymarket** | Binary event contracts (USDC) | **Legal gap → likely gambling**, unlicensed | NGA; SARB exchange control; SABA | **No** (products); yes for data/sentiment only | [OBS] |
| **FanDuel** | Sportsbook + iGaming + DFS | Requires **provincial bookmaker licence**; online casino illegal | NGA; provincial Gambling & Racing Acts | **No** (wagering); yes for loyalty mechanic | [OBS] |
| **Fanatics** | Commerce + collectibles + FanCash | Commerce/collectibles = **legal retail**; betting licensed | NGA (betting); CPA; FSCA (if digital assets) | **Yes** — most portable (loyalty + commerce) | [OBS] |
| **Gate.io / Gate** | Crypto exchange + GT token + stocks | **Requires FSP/CASP licence + FICA**; exchange control | FSCA/FAIS; FICA; SARB FinSurv | **No** without licensing; yes for zero-fee *licensed* investing | [OBS] |

## 3. National Gambling Act 7 of 2004 — detail
- Only **casinos, bingo, betting and limited-payout machines** are legal modes, and only if offered by a
  **provincially licensed** operator. [OBS] ([NGB FAQ](https://www.ngb.org.za/faqs/))
- **s.11** prohibits engaging in or making available an **"interactive game"** (gambling played via an
  electronic agent over the internet) **except as authorised by national law — and no national law authorises
  it**. Online casino/slots/poker are therefore unlawful. [OBS] ([Chambers Gaming Law 2025](https://practiceguides.chambers.com/practice-guides/gaming-law-2025/south-africa), [HSF Kramer](https://www.hsfkramer.com/notes/africa/2021-08/lexology-getting-the-deal-through-gaming-2021-south-africa/))
- **Online sports/horse betting is legal** through a **provincially licensed bookmaker** (most volume via
  **Western Cape GCGRB** and **Mpumalanga Economic Regulator**). [OBS] ([softaggregator](https://softaggregator.com/licences/south-africa-gambling-licence/), [GameBridge](https://gamebridge.io/markets/countries/south-africa.html))
- **Reform stalled:** the **National Gambling Amendment Act 10 of 2008** (national interactive licensing) was
  assented but **never brought into force**; the **Remote Gambling Bill B11-2024** (DA, Apr 2024) — which
  would create a national remote-gambling licensing framework — has **not become law**. [OBS] ([Mg.co.za](https://mg.co.za/partner-content/2026-07-22-is-online-gambling-legal-in-south-africa-what-the-data-actually-shows/), [NGB Bill PDF](https://www.ngb.org.za/wp-content/uploads/2024/05/NGB4_Remote_Gambling-Bill.pdf))
- **Feb 2026 NGB media release:** *remote gambling servers* (RGS) are **not lawful gambling systems**;
  interactive/remote gambling remains unlawful except where explicitly authorised by national legislation. [OBS] ([NGB RGS release](https://www.ngb.org.za/wp-content/uploads/2026/02/Media-Release_RGS.pdf))
- **Enforcement:** NGB ran a site-blocking **Expression of Interest** (2026) against unlicensed offshore sites;
  ~**R3.075M in unlawful winnings forfeited** to the State under NGA s.16 (2025/26–Apr 2026). [OBS] ([Savannah Herald](https://savannahherald.com/illegal-online-gambling-operators-in-spotlight/), [The iGaming](https://theigaming.eu/2026/08/24/south-africa-plans-to-block-illegal-gambling-websites/))

### Relevant SA rulings
- **Casino Enterprises (Pty) Ltd v The Gauteng Gambling Board** [2011] **ZASCA 155** — gambling takes place
  where the **player** is; unlicensed interactive gambling from SA is **unlawful** (offshore casino). [OBS] ([SCA judgment](https://www.supremecourtofappeal.org.za/index.php/judgements/send/26-judgments-2011/1912-casino-enterprises-v-the-gauteng-gambling-board-653-10-2011-zasca-155-28-september-2011), [PracticeSource](https://practicesource.com/south-africas-supreme-court-of-appeal-reaffirms-online-casino-ban/))
- **Hollywood Sportsbook KZN (Pty) Ltd v Capitec Bank** — KZN High Court ordered winnings repaid where there
  was **no valid wager** (no consideration/risk) → unjust enrichment. [OBS] ([ITLawCo](https://itlawco.com/hollywood-sportsbook-kzn-pty-ltd-v-capitec-bank-ltd-and-others/))

## 4. FSCA / FAIS — crypto assets, CASPs, NFTs
- **19 Oct 2022** — FSCA **General Notice 1350 of 2022** declared a **crypto asset a financial product** under
  **FAIS**. [OBS] ([Cliffe Dekker Hofmeyr](https://www.cliffedekkerhofmeyr.com/export/sites/cdh/news/publications/2022/Practice/Finance/Downloads/Finance-Banking-Alert-20-October-2022.pdf), [DLA Piper Africa](https://www.dlapiperafrica.com/en/south-africa/insights/2026/FSCA_Update_on_Licensing_and_Supervision_of_Crypto_Asset_Service_Providers))
- A **CASP** is an **FSP licence holder** (crypto subcategory **1.28**) with fit-and-proper requirements
  (incl. RE1 exam); CASPs are **accountable institutions under FICA**. [OBS] ([Zitadelle](https://www.zitadelleag.com/services/vasp-licensing/south-africa-vasp), [Licentium](https://www.licentium.io/post/south-africa-casp-licensing))
- **NFT carve-out:** the Declaration **exempts** persons rendering financial services **in relation to NFTs**
  from FAIS **s.7(1)** authorisation (regulator treats a unique collectible as lower risk). The exemption is
  **narrow** — an NFT platform that also handles fungible tokens is not wholly exempt. [OBS] ([FSCA Policy Document](https://regalert.today/document/policy-document-supporting-the-declaration-of-crypto-assets-as-financial-product-9033193d-9106-4343-9694-cf8176eec422/text), [WhereLegalCrypto](https://wherelegalcrypto.com/south-africa/nfts/))
- **FICA breadth:** CMS's view is that the broad FICA "crypto asset" definition **includes NFTs**, so
  NFT activity is FICA-regulated like other crypto. [OBS] ([CMS](https://cms.law/en/int/expert-guides/cms-expert-guide-to-crypto-regulation/south-africa))
- **CASP transitional exemption** extended until **30 June 2025** (then RE compliance required). [OBS] ([FIC/FSCA release](https://www.fic.gov.za/wp-content/uploads/2025/01/FSCA-media-release-Update-on-licensed-crypto-asset-service-providers.pdf))
- **CISCA bars crypto from collective schemes** (Board Notices 90 of 2014, 52 of 2015); **Regulation 28**
  (Pension Funds Act) and the **Financial Markets Act** do not treat crypto as securities. [OBS] ([IFWG Position Paper](https://www.resbank.co.za/content/dam/sarb/publications/media-releases/2020/9868/IFWG-Position-Paper-on-Crypto-Assets.pdf))

## 5. SARB — exchange control & payments
- SARB **does not currently regulate crypto assets** and has no supervisory mandate; crypto is **not legal
  tender** (2014 Position Paper). [OBS] ([SARB FinSurv FAQ](https://www.resbank.co.za/en/home/what-we-do/financial-surveillance/FinSurvFAQ))
- **Exchange control:** Reg **10(1)(c)** prohibits exporting capital/right to capital without Treasury
  approval; Reg **3(1)(c)** restricts foreign-currency acquisition to authorised dealers — breaching these is
  a **criminal offence**. [OBS] ([IFWG Crypto FAQ](https://www.treasury.gov.za/comm_media/press/2021/IFWG_CAR%20WG_Crypto%20assets%20FAQs_Final.pdf), [Thompsons](https://thompsons.legal/blogs/news/south-africa-crypto-regulations))
- **Draft Capital Flow Management Regulations, 2026 + draft Crypto Asset Manual for Cross-Border Activities**
  would require CASPs to obtain **separate SARB FinSurv authorisation** for cross-border crypto, with reporting;
  a threshold-based restriction limits crypto purchases/sales/loans outside authorised CASPs. [OBS] ([National Treasury draft](https://www.treasury.gov.za/public%20comments/CapFlow/Draft%20Capital%20Flow%20Management%20Regulations%202026%20April.pdf), [Baker McKenzie](https://www.bakermckenzie.com/en/insight/publications/2026/08/south-africa-proposed-framework-for-cross-border-crypto-asset-transactions))
- **Joint Communication 1 of 2026 (28 May 2026)** — SARB/FSCA/PA/FIC confirmed crypto assets **incl.
  stablecoins are not money/legal tender** and fall **outside the National Payment System Act** for domestic
  payment purposes. [OBS] ([SARB joint communication](https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight-and-supervision/designation-notices/280526%20Joint%20Communication_Crypto%20assets%20for%20domestic%20payment%20purposes.pdf), [Payments.gi](https://payments.gi/jurisdictions/south-africa/))
- **NPS Act 78 of 1998:** only **registered SA banks** may issue e-money — crypto is excluded. [OBS] ([IFWG Crypto FAQ](https://www.treasury.gov.za/comm_media/press/2021/IFWG_CAR%20WG_Crypto%20assets%20FAQs_Final.pdf))

## 6. Prediction markets — SA-specific gap
- **No SA law classifies prediction markets**; ENSafrica places them between crypto, exchange control and
  gambling law. [OBS] ([NextPredict](https://nextpredict.io/legal/africa/))
- **SABA Policy Position Paper (27 Jul 2026)** argues prediction markets should be regulated as **exchange
  betting** and are otherwise **outside the legislative framework → should be treated as illegal**; it cites
  R700,000+ staked on Johannesburg's next mayor via **Polymarket** without SA licence/tax/safeguards. [OBS] ([iGaming Expert](https://igamingexpert.com/news/regulation/south-africa-betting-prediction-markets/), [CNBC Africa](https://www.cnbcafrica.com/media/7785235474667/the-dangers-of-unregulated-prediction-markets))
- **Read-across:** a NeoBank must **not** offer event-contract trading in SA; the **data/sentiment** layer is
  the only safe extraction. [INF]

## 7. Adjacent SA law a NeoBank programme touches
| Area | Instrument | Relevance | Tag |
|---|---|---|---|
| Tax | Income Tax Act / **SARS crypto guidance**; **CARF** from **2 Mar 2026**; CGT annual exclusion **R50,000** | Rewards redeemed as crypto/goods may be taxable; reportable | [OBS] ([SARS](https://www.sars.gov.za/individuals/crypto-assets-tax/), [TokenTax](https://tokentax.co/blog/crypto-taxes-in-south-africa)) |
| AML/CFT | **FICA 38 of 2001** | CASPs/NFT activity = accountable institution | [OBS] |
| Consumer | **Consumer Protection Act 68 of 2008** | Vouchers/gift cards need **≥3-year validity**; clear expiry | [OBS] ([Shoprite T&C](https://www.termsconditions.co.za/content/dam/ShopriteGroup/Terms/PDFS/Shoprite%20Checkers%20Gift%20Card.pdf)) |
| Credit | **National Credit Act 34 of 2005** | Card/credit features require NCA registration | [INF] |
| Banking | **Banks Act 94 of 1990**; NPS Act | Deposit-taking/e-money restricted to licensed banks | [OBS]/[INF] |

## 8. Net conclusions for the NeoBank
1. **Legal and portable:** closed-loop rewards (FanCash), loyalty tiers, free-to-play gamification,
   commerce/collectible redemptions, transparency communications. [INF]
2. **Requires licensing, avoid or partner:** crypto trading (FSP/CASP + FICA), sports betting (provincial
   bookmaker), licensed investing (FSCA). [INF]
3. **Avoid:** paid-entry fantasy/prediction games, online casino-style mechanics, tradeable fan tokens, and any
   cross-border crypto flow without FinSurv authorisation. [INF]

## Sources
- [NGB — Legal Modes of Gambling (NGA 7 of 2004)](https://www.ngb.org.za/wp-content/uploads/2024/02/NGB1_Legal-Modes-of-Gambling-Article.pdf)
- [NGB — FAQ](https://www.ngb.org.za/faqs/)
- [NGB — Media release: remote gambling servers (Feb 2026)](https://www.ngb.org.za/wp-content/uploads/2026/02/Media-Release_RGS.pdf)
- [NGB — Remote Gambling Bill B11-2024](https://www.ngb.org.za/wp-content/uploads/2024/05/NGB4_Remote_Gambling-Bill.pdf)
- [Chambers — Gaming Law 2025: South Africa](https://practiceguides.chambers.com/practice-guides/gaming-law-2025/south-africa)
- [HSF Kramer — Interactive gaming s.11](https://www.hsfkramer.com/notes/africa/2021-08/lexology-getting-the-deal-through-gaming-2021-south-africa/)
- [SoftAggregator — SA provincial gambling licences](https://softaggregator.com/licences/south-africa-gambling-licence/)
- [GameBridge — SA online gambling guide](https://gamebridge.io/markets/countries/south-africa.html)
- [Mg.co.za — Is online gambling legal in SA (2026)](https://mg.co.za/partner-content/2026-07-22-is-online-gambling-legal-in-south-africa-what-the-data-actually-shows/)
- [SCA — Casino Enterprises v Gauteng Gambling Board [2011] ZASCA 155](https://www.supremecourtofappeal.org.za/index.php/judgements/send/26-judgments-2011/1912-casino-enterprises-v-the-gauteng-gambling-board-653-10-2011-zasca-155-28-september-2011)
- [PracticeSource — SCA reaffirms online casino ban](https://practicesource.com/south-africas-supreme-court-of-appeal-reaffirms-online-casino-ban/)
- [ITLawCo — Hollywood Sportsbook KZN v Capitec](https://itlawco.com/hollywood-sportsbook-kzn-pty-ltd-v-capitec-bank-ltd-and-others/)
- [Cliffe Dekker Hofmeyr — FSCA crypto declaration (GN 1350 of 2022)](https://www.cliffedekkerhofmeyr.com/export/sites/cdh/news/publications/2022/Practice/Finance/Downloads/Finance-Banking-Alert-20-October-2022.pdf)
- [DLA Piper Africa — FSCA CASP update](https://www.dlapiperafrica.com/en/south-africa/insights/2026/FSCA_Update_on_Licensing_and_Supervision_of_Crypto_Asset_Service_Providers)
- [FSCA Policy Document — crypto as financial product (NFT exemption)](https://regalert.today/document/policy-document-supporting-the-declaration-of-crypto-assets-as-financial-product-9033193d-9106-4343-9694-cf8176eec422/text)
- [WhereLegalCrypto — NFTs in South Africa](https://wherelegalcrypto.com/south-africa/nfts/)
- [CMS — Crypto regulation South Africa (NFT/FICA)](https://cms.law/en/int/expert-guides/cms-expert-guide-to-crypto-regulation/south-africa)
- [Zitadelle — SA CASP/FSP subcategory 1.28](https://www.zitadelleag.com/services/vasp-licensing/south-africa-vasp)
- [Licentium — SA CASP licensing](https://www.licentium.io/post/south-africa-casp-licensing)
- [FIC/FSCA — CASP exemption extended to 30 Jun 2025](https://www.fic.gov.za/wp-content/uploads/2025/01/FSCA-media-release-Update-on-licensed-crypto-asset-service-providers.pdf)
- [SARB — IFWG Position Paper on Crypto Assets](https://www.resbank.co.za/content/dam/sarb/publications/media-releases/2020/9868/IFWG-Position-Paper-on-Crypto-Assets.pdf)
- [SARB — FinSurv FAQ](https://www.resbank.co.za/en/home/what-we-do/financial-surveillance/FinSurvFAQ)
- [IFWG — Crypto assets FAQ (exchange control)](https://www.treasury.gov.za/comm_media/press/2021/IFWG_CAR%20WG_Crypto%20assets%20FAQs_Final.pdf)
- [National Treasury — Draft Capital Flow Management Regulations 2026](https://www.treasury.gov.za/public%20comments/CapFlow/Draft%20Capital%20Flow%20Management%20Regulations%202026%20April.pdf)
- [Baker McKenzie — Cross-border crypto framework](https://www.bakermckenzie.com/en/insight/publications/2026/08/south-africa-proposed-framework-for-cross-border-crypto-asset-transactions)
- [SARB — Joint Communication 1 of 2026 (crypto/payments)](https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight-and-supervision/designation-notices/280526%20Joint%20Communication_Crypto%20assets%20for%20domestic%20payment%20purposes.pdf)
- [NextPredict — Prediction markets in Africa](https://nextpredict.io/legal/africa/)
- [iGaming Expert — SA bookmakers vs prediction markets](https://igamingexpert.com/news/regulation/south-africa-betting-prediction-markets/)
- [SARS — Crypto Assets & Tax](https://www.sars.gov.za/individuals/crypto-assets-tax/)
- [Shoprite Checkers — Gift card T&Cs (CPA 3-year validity)](https://www.termsconditions.co.za/content/dam/ShopriteGroup/Terms/PDFS/Shoprite%20Checkers%20Gift%20Card.pdf)
