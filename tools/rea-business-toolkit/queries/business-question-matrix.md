# Business-Question Matrix — REA chains & fallbacks

Map each business question to (a) a REA command chain when a public software artifact exists, and
(b) a public-source fallback. `[OBS]` = observable from artifact; `[PUB]` = published data.

| # | Department | Business question | REA chain (artifact) | Public fallback |
|---|---|---|---|---|
| Q1 | Technology | Which web frameworks/CDNs/trackers power the portal? | `analyze-web-bundle <url>` → `export-web-scripts` → `trace-web-module-imports` | WebFetch page source, Wappalyzer-style review |
| Q2 | Technology | Which fraud/KYC SDKs ship in the app? | `inspect-android-package` → `search-android-classes` → `project-android-application-graph` | SDK storefronts, press releases |
| Q3 | Technology | What core-banking / middleware stack? | `inspect-managed-artifact`, vendor fingerprints in JS bundles | results decks, job ads, vendor case studies |
| Q4 | Products | Full product catalogue & pricing | (no artifact) | WebFetch product/price pages → CSV |
| Q5 | Payments | Which payment rails (PayShap/RTC/QR)? | app module graph signals | SARB/PASA docs, bank announcements |
| Q6 | Marketing | Named campaigns & channels | web bundle ad/analytics tags | press, ad libraries, social |
| Q7 | Marketing | Sponsorships & partnerships | web bundle partner domains | partner/sponsor pages |
| Q8 | Finance | Revenue, NII, cost-to-income | (no artifact) | annual results, JSE/regulator filings |
| Q9 | Legal | Licence class & regulator | (no artifact) | SARB bank register, FSCA FSP, NCR |
| Q10 | Security | Security posture / incidents | `inspect-android-package` permissions, TLS config | press, regulator notices |
| Q11 | People | Headcount, leadership, salary bands | job-posting tech mentions | LinkedIn, integrated reports, reports |
| Q12 | Customer | Complaint themes | (no artifact) | Ombudsman annual reports, app-store reviews |
| Q13 | Web3 | Exchange fee/limits & proof-of-reserves | (no artifact) | exchange support docs, attestations |
| Q14 | Loyalty | How loyalty is engineered | app module graph, web bundle | programme T&Cs, partner pages |

## How to extend

For a new question: (1) locate the public artifact; (2) pick the smallest REA chain; (3) define the
output schema; (4) add the row here; (5) implement in `scripts/`.
