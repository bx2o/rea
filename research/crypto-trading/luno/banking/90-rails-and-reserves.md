---
bank: "Luno"
council: "C13"
department: "banking"
status: "verified"
confidence: "high"
sources:
  - "https://guide-staging.luno.com/hc/en-gb/articles/10967642658973-How-do-I-make-a-deposit-via-bank-transfer-in-South-Africa"
  - "https://discover.luno.com/wp-content/uploads/2024/10/Luno_PoR_SEP24.pdf"
  - "https://guide.luno.com/hc/en-gb/article_attachments/38893000820253"
  - "https://luno.statuspage.io/incidents/3symktrfq21w"
last_updated: "2026-10-16"
---

# Luno — Banking Rails & Reserves

## 1. ZAR banking rails

| Rail | Provider | Detail | Tag |
|---|---|---|---|
| EFT deposits | **Standard Bank** | Luno banks with Standard Bank; near-instant from Standard Bank accounts, no bank fees | [OBS] |
| Instant deposit | **Stitch** (open banking) | Deposit in seconds using online banking credentials | [OBS] |
| Absa | Absa Pay | **Instant Deposits discontinued** for Absa (banking-partner change) | [OBS] |
| Capitec | Capitec Pay | Capitec customers use Capitec Pay (EFT suspended) | [OBS] |
| Withdrawals | RTC / non-RTC | Normal free; express R20 (RTC) / R80 (non-RTC) | [OBS] |
| Card | Visa/Mastercard | Instant buy with card 3.9% (currently unavailable) | [OBS] |

## 2. Proof of reserves (PoR)

- Luno publishes **monthly independent proof-of-reserves** attestations using **Merkle Tree** proofs. [OBS]
- Reports are produced by **Moore Blockchain and Digital Assets JHB (Pty) Ltd** as **Agreed-Upon Procedures under ISRS 4400 (Revised)**. [OBS]
- Moore's fact-findings report: Luno "possesses sufficient reserves to cover all customer liabilities" and "holds reserves exceeding **100% of its customer liabilities**". [OBS]
- Assets in scope (e.g. Sep 2024 report): AAVE, ALGO, ADA (incl. staking), AVAX, ATOM, BCH, DOT, CRV, ETH (incl. staking), LINK, LTC, MATIC and others. [OBS]
- Luno states it stores all customer crypto assets on a **1:1 basis**. [OBS]

## 3. Caveats

- PoR is an **agreed-upon procedures** engagement (ISRS 4400), **not a full audit** — it reports factual findings, not an opinion. This is a weaker assurance than a statutory audit. [INF]
- Third-party telemetry (e.g. on-chain "reserves" trackers) is unreliable for Luno; the audited Merkle attestation is the primary public evidence. [INF]

## Sources
- [Luno — EFT deposit tips (Standard Bank)](https://guide-staging.luno.com/hc/en-gb/articles/10967642658973-How-do-I-make-a-deposit-via-bank-transfer-in-South-Africa)
- [Luno Proof of Reserves Sep 2024 — Moore (PDF)](https://discover.luno.com/wp-content/uploads/2024/10/Luno_PoR_SEP24.pdf)
- [Moore ISRS 4400 PoR report](https://guide.luno.com/hc/en-gb/article_attachments/38893000820253)
- [Luno status — Absa Instant Deposits discontinued](https://luno.statuspage.io/incidents/3symktrfq21w)
