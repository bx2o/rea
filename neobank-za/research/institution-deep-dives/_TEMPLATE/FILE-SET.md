# Institution Deep-Dive — Standard File Set (UnConsolidated)

This template defines the **mandatory file set** every institution folder in
`research/institution-deep-dives/` and `research/stremiium-competitors/` must
contain. It is the operating contract for C04 (Strategy / Market-Intelligence)
research agents.

## Required files (10 per institution)

| # | File | Contents |
|---|------|----------|
| 1 | `README.md` | Index of the folder, one-paragraph executive snapshot, "how to read", file map, and the top-10 findings. |
| 2 | `01-profile-and-history.md` | Legal identity, registration numbers, group structure, founding story, timeline of milestones, journey, expansions, acquisitions, ownership changes. |
| 3 | `02-business-model.md` | How the institution makes money; revenue lines; sales motion; go-to-market; pricing philosophy; partnerships/alliances; adjacent & additional businesses; unit economics where public. |
| 4 | `03-products-and-services.md` | Full catalogue of banking products, services, value-added services, loyalty/rewards, insurance, credit, savings, investments, business/commercial offerings, digital features. |
| 5 | `04-financials-and-metrics.md` | Financial results (headline + segment), revenue by period/quarter where public, balance sheet, deposits, advances, capital ratios, KPIs, growth rates, valuation & funding rounds, public listing data (JSE/exchange). |
| 6 | `05-operations-and-technology.md` | Operating model, footprint, channels, core banking system(s) where known, tech stack, cloud/core vendors, CRM, data/AI, digital architecture, contact-centre/BPO ops, fraud & risk ops. |
| 7 | `06-legal-regulatory-and-compliance.md` | Licences, regulators, statutes, corporate governance, KYC/FICA/AML/FATCA, POPIA/privacy, conduct, dispute/ombud processes, key public contracts & schemes membership, litigation/notable enforcement. |
| 8 | `07-people-and-culture.md` | Headcount, org/leadership (executives, board), people-management approach, EVP/culture, B-BBEE/EE/transformation, skills & training, **publicly disclosed** remuneration (remuneration reports, exec pay, salary bands, listco top-up) — clearly marked. |
| 9 | `08-customer-experience.md` | Customer channels, service model, complaint metrics where public, public-facing documents (TS&Cs, fee schedules, product terms, service charters, disclosure docs), digital app reviews summary, brand/perception. |
| 10 | `09-sources.md` | Numbered `[S#]` source list with URL + publisher + accessed date. Must map every inline citation. |

Optional but encouraged: `10-graphs.md` with Mermaid diagrams (ownership,
revenue mix, timeline) — see `visuals/` for the rendered SVG set.

## Evidence discipline (MANDATORY)

- **`[FACT]`** — stated in a primary source (annual report, regulator, official
  site, SENS/RNS/exchange filing, court/company registry) or a reputable
  secondary mirror.
- **`[EST]`** — estimate / rounded / derived (e.g. FX-converted, aggregator).
  Treat as directional.
- **`[UNKNOWN]`** — not verifiable from a usable source. Write
  `not verified — needs primary source (<what>)`. **Never invent a figure.**
- **`[INFER]`** — analytical inference by the NeoBank team; explicitly not
  evidence.
- Every factual claim carries `[S#]` mapping to `09-sources.md`.
- **Golden rule:** no fabricated numbers, quotes, salary bands, contract
  terms, or document text. If it is not public, record the gap and name the
  document that would contain it.

## Research breadth requirement

Each institution must be researched with **as many distinct web searches as
needed** across at least these keyword domains: annual/integrated reports,
SENS/RNS/exchange filings, regulator registers, pricing/fee guides, product
pages, TS&Cs/contracts, careers/remuneration, press releases, news
(business/fintech/crypto press), analyst commentary, research papers
(ScienceDirect/ResearchGate/SSRN), app-store reviews, Wikipedia/Crunchbase/
LinkedIn, and social/official X/LinkedIn posts.

## Output rules

- Markdown, H2/H3 structure, tables for comparative data.
- Length: substantial (aim 250–600 lines per research file where evidence
  supports it; shorter is acceptable only when public data is genuinely thin,
  and the thinness must be documented).
- Cite inline. End every file with a `_C04 · <institution> · accessed 2026-10-16_`
  footer line.
