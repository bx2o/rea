---
bank: "Luno"
council: "C13"
department: "technology"
status: "partial"
confidence: "medium"
sources:
  - "https://web3africa.tech/luno-exchange-2025-award/"
  - "https://www.mynewsdesk.com/za/discovery-holdings-ltd/pressreleases/discovery-bank-announces-crypto-trading-with-luno-new-ai-security-and-service-features-motor-insurance-and-new-rewards-partners-including-multichoice-3416065"
  - "https://guide-staging.luno.com/hc/en-gb/articles/10967642622109-How-do-I-make-an-instant-deposit-in-South-Africa"
last_updated: "2026-10-16"
---

# Luno — Technology & Tech Stack

## 1. Custody & security

| Layer | Detail | Tag |
|---|---|---|
| Cold storage | ~**95% of customer crypto in multi-signature** wallets | [OBS] |
| Custody providers | **BitGo Custody** and **Fireblocks** integration | [OBS] |
| Certification | **ISO 27001** certified (cited in Discovery Bank release) | [OBS] |
| Proof of reserves | Monthly independent attestation using **Merkle Tree** (see `banking/90-rails-and-reserves.md`) | [OBS] |

## 2. Payments / integration stack

- **Instant deposits** are powered by **Stitch** (open-banking payment initiation). [OBS]
- EFT deposits settle via Luno's **Standard Bank** receiving account (bank-approved beneficiary). [OBS]
- **Luno Pay** enables crypto spending across a merchant network (~700,000 merchants). [OBS]
- Public, documented **REST API** for exchange trading. [OBS]

## 3. B2B / embeddable

- Luno is pivoting to **white-label / B2B crypto infrastructure**, enabling banks and fintechs (e.g. Discovery Bank) to offer crypto under their own brand. [OBS]

## 4. Assessment

Luno's public architecture story emphasises **custody assurance** (multi-sig + named custodians + ISO 27001 + monthly PoR) and **open-banking rails** (Stitch) over novel blockchain tech. Deeper internal architecture (languages, cloud) is **[UNK]** and would require C11 app/RE deconstruction. [INF]

## Sources
- [Luno wins 2025 Crypto Exchange of the Year (custody)](https://web3africa.tech/luno-exchange-2025-award/)
- [Discovery Bank crypto trading with Luno (ISO 27001)](https://www.mynewsdesk.com/za/discovery-holdings-ltd/pressreleases/discovery-bank-announces-crypto-trading-with-luno-new-ai-security-and-service-features-motor-insurance-and-new-rewards-partners-including-multichoice-3416065)
- [Luno — instant deposit via Stitch](https://guide-staging.luno.com/hc/en-gb/articles/10967642622109-How-do-I-make-an-instant-deposit-in-South-Africa)
