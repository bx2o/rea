# Polymarket — 01 Identity & Financials

## 1. Corporate identity

| Field | Value | Class |
|---|---|---|
| Trading name | Polymarket | SEEN |
| Operating entity | Polymarket (US-linked private company; historically offshore-operating) | INFERRED (press) |
| Founder | Shayne Coplan | SEEN (press/interviews) |
| Founded | ~2018–2020 (product launched 2020) | SEEN-as-reported |
| HQ | New York, USA | SEEN-as-reported |
| Structure | Private, VC-backed (no public listing) | SEEN |
| Sector | Decentralised prediction market | SEEN |

Exact US state of incorporation / registration numbers: **UNKNOWN** in sources inspected.

## 2. Regulatory identity (the defining fact)

| Event | Detail | Class |
|---|---|---|
| **CFTC settlement (2022)** | Polymarket settled with the US CFTC for operating an unregistered facility offering off-exchange event-based binary options; civil monetary penalty (reported ~US$1.4M) and wind-down/geoblocking of US-facing activity | SEEN (CFTC order) |
| **US geoblock** | US persons blocked from trading post-settlement | SEEN-as-reported |
| **US re-entry (2024–2025)** | Reported return to the US market via an acquired CFTC-licensed designated contract market / exchange | SEEN-as-reported — verify via CFTC register |

> The exact CFTC order number, penalty figure, and the identity of the acquired US venue
> must be read from the CFTC register before being quoted downstream. Penalty figure cited
> as **reported**.

## 3. Ownership & funding

* Private, VC-backed. Reported backers have included large crypto/US VCs (e.g., Founders
  Fund and others — as reported).
* Class: **SEEN-as-reported**; exact cap table **UNKNOWN**.

## 4. Financials

| Metric | Value | Class |
|---|---|---|
| Audited financials | Not publicly filed | UNKNOWN |
| Revenue model | Historically **zero trading fees**; monetisation via incentives/other | SEEN-as-reported |
| Volume | Large (notable spikes around major political events) | SEEN-as-reported (do NOT quote a precise figure) |
| TVL / treasury | Not authoritatively published here | UNKNOWN |

> Caution: prediction-market volume is **event-driven** (elections, sports) and
> extremely spiky; an annualised figure is misleading.

## 5. What is verifiable vs not

| Question | Answer | Class |
|---|---|---|
| Is it on Polygon PoS? | Yes | SEEN (docs) |
| Does it use Gnosis CTF? | Yes | SEEN (docs) |
| Hybrid CLOB + UMA oracle? | Yes | SEEN (docs) |
| USDC collateral? | Yes | SEEN (docs) |
| Exact contract addresses? | Not asserted — verify on explorer | UNKNOWN |
| Exact user/volume numbers? | Not asserted — never invent | UNKNOWN |

## 6. Flags for C01 / C13

* **Regulatory is existential here**: the CFTC action is the model's defining risk. Any
  Stremiium prediction line must be built *inside* a licensed perimeter from day one.
* Zero-fee trading is **not** a free lunch — it is funded by incentives and/or VCs; the
  unit economics are opaque.
* USDC-collateral dependence is a stablecoin-risk exposure.
