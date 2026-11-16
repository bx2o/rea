---
scope: "Add-on A1 — cross-bank pricing & fee matrix for SA incumbents, challengers and digital/neobanks (account/monthly fees, card fees, key transaction charges)"
council: "C16"
department: "products"
status: "partial"
confidence: "medium"
sources:
  - "https://www.absa.co.za/content/dam/south-africa/absa/pdf/2025/2025-benefits-and-pricing-everyday-banking-products-on-sale.pdf"
  - "https://personal.nedbank.co.za/content/dam/nedbank/pdfs/everyday-banking-fees-2025.pdf"
  - "https://online.firstrand.co.za/downloads/pricing-guides/FNB-Easy-Account.pdf"
  - "https://www.standardbank.co.za/static_file/South%20Africa/PDF/Personal%20Pricing/2026/MyMo_Account_Pricing_Guide_2026.pdf"
  - "https://www.capitecbank.co.za/globalassets/pages/documents-library/transact/personal-banking-fees-2026.pdf"
  - "https://www.africanbank.co.za/en/home/banking/"
  - "https://www.bankzero.co.za/rates-and-pricing/"
  - "https://www.discovery.co.za/bank/accounts-transaction-bundled-gold"
last_updated: "2026-10-16"
---

# A1 — Pricing & Fee Matrix (SA Banking)

> Add-on artifact to the NeoBank programme. **Public information only.** Tags: `[OBS]` observed,
> `[DER]` derived, `[INF]` inference, `[EST]` estimate, `[UNK]` unknown. Fee schedules change
> frequently; every value is dated **2026-10-16** and tagged to its source. Card/transaction fees that
> are scheme- or contract-specific are `[UNK]`.
>
> Companion machine-readable file: `/workspace/deliverables/charts/pricing-fee-matrix.csv`.

## 1. Headline monthly account fees (entry to premium)

| Bank | Entry account | Monthly fee | Mid / premium account | Monthly fee | Source |
|---|---|---|---|---|---|
| **Absa** | Transact Account | **R6.50** `[OBS]` | Premium Banking Package | **R240.00** `[OBS]` | [Absa 2025 everyday pricing (PDF)](https://www.absa.co.za/content/dam/south-africa/absa/pdf/2025/2025-benefits-and-pricing-everyday-banking-products-on-sale.pdf) |
| **Nedbank** | MiGoals | **R7.00** `[OBS]` | MiGoals Plus / Premium | **R99.00 / R0.00** `[OBS]` | [Nedbank everyday banking fees 2025 (PDF)](https://personal.nedbank.co.za/content/dam/nedbank/pdfs/everyday-banking-fees-2025.pdf) |
| **FNB** | Easy Zero | **R0.00** `[OBS]` | Easy PAYU / Fusion Premier / Private Wealth | **R7.50 / R260 / R625** `[OBS]` | [FNB Easy Account pricing (PDF)](https://online.firstrand.co.za/downloads/pricing-guides/FNB-Easy-Account.pdf) |
| **Standard Bank** | MyMo | **R7.50** `[OBS]` | Prestige Banking | **R145.00** `[OBS]` | [Standard Bank MyMo pricing 2026 (PDF)](https://www.standardbank.co.za/static_file/South%20Africa/PDF/Personal%20Pricing/2026/MyMo_Account_Pricing_Guide_2026.pdf) |
| **Capitec** | Global One | **R7.50** `[OBS]` | (single account, pay-per-use) | — | [Capitec personal banking fees 2026 (PDF)](https://www.capitecbank.co.za/globalassets/pages/documents-library/transact/personal-banking-fees-2026.pdf) |
| **African Bank** | MyWORLD | **R0.00** `[OBS]` | (MyWORLD bundle, up to 5 pockets) | **R5.00** `[OBS]` | [African Bank — banking](https://www.africanbank.co.za/en/home/banking/) |
| **TymeBank / GoTyme** | EveryDay | **R0.00** `[OBS]` | (flat low-fee model) | — | [MoneyToday — best digital banks](https://moneytoday.co.za/banking/best-digital-banks) |
| **Discovery Bank** | Gold Transaction (PAYT) | **R35.00** (R15 account + R20 Vitality Money premium) `[OBS]` | Gold bundled / Black Suite | **R170 / R605** `[OBS]` | [Discovery Gold PAYT fees (PDF)](https://cdn.discovery.co.za/wcm/discoverycoza/assets/bank/fees-guides/discovery-bank-gold-transaction-payt-fees.pdf), [Discovery Gold bundled](https://www.discovery.co.za/bank/accounts-transaction-bundled-gold), [Discovery Black Suite](https://www.discovery.co.za/bank/accounts-suite-black) |
| **Bank Zero** | Personal / Business | **R0.00** `[OBS]` | (R0 everything) | — | [Bank Zero rates & pricing](https://www.bankzero.co.za/rates-and-pricing/) |

`[DER]` **Spread:** entry-level accounts cluster at **R0–R7.50** (Absa R6.50 is the highest true entry fee; TymeBank/African Bank/Bank Zero free). Premium tiers span **R99–R625** (FNB Private Wealth R625 highest; Standard Bank Prestige R145).

## 2. Card fees

| Bank | Card | Monthly card fee | Notes | Source |
|---|---|---|---|---|
| **Absa** | Gold / Premium Credit Card | **R0.00** additional | Linked to qualifying account/package | [Absa 2025 pricing (PDF)](https://www.absa.co.za/content/dam/south-africa/absa/pdf/2025/2025-benefits-and-pricing-everyday-banking-products-on-sale.pdf) |
| **Nedbank** | Gold Credit Card | **R60.00** (R40 maintenance + R20 facility) `[OBS]` | Platinum R99; Amex Gold R145; Private Clients R160 | [Nedbank credit-card pricing guide 2025 (PDF)](https://personal.nedbank.co.za/content/dam/nedbank/pdfs/nedbank-credit-cards-pricing-guide-2025.pdf) |
| **FNB** | Virtual Card | **R0.00** `[OBS]` | Dynamic CVV | [FNB Virtual Card FAQs (PDF)](https://www.fnb.co.za/downloads/ways-to-bank/FNBVirtualCardFAQs.pdf) |
| **Standard Bank** | Virtual Credit Card | **R0.00** additional | Linked to Gold Credit Card | [Standard Bank MyMo pricing 2026 (PDF)](https://www.standardbank.co.za/static_file/South%20Africa/PDF/Personal%20Pricing/2026/MyMo_Account_Pricing_Guide_2026.pdf) |
| **Capitec** | Debit / Credit | **R0** card purchase fee `[OBS]`; 1% cash back on credit | 0% forex margin on card | [Capitec personal banking fees 2026 (PDF)](https://www.capitecbank.co.za/globalassets/pages/documents-library/transact/personal-banking-fees-2026.pdf) |
| **African Bank** | Black Credit Card | `[UNK]` (instant-issue Visa) | — | [African Bank Black CC flyer (PDF)](https://www.africanbank.co.za/media/f4qipadj/hr_abc2302_006b_black-cc_digital-flyer.pdf) |
| **Discovery Bank** | Gold single credit facility | **R55.00** `[OBS]` | Visa Gold (PAYT) | [Discovery Gold PAYT fees (PDF)](https://cdn.discovery.co.za/wcm/discoverycoza/assets/bank/fees-guides/discovery-bank-gold-transaction-payt-fees.pdf) |
| **Bank Zero** | Mastercard debit | **R0.00** `[OBS]` | Patented security architecture | [Bank Zero rates & pricing](https://www.bankzero.co.za/rates-and-pricing/) |

## 3. Key transaction charges

| Item | Capitec | FNB | Bank Zero | Absa | Nedbank | Source |
|---|---|---|---|---|---|---|
| Payment to other SA bank (EFT) | **R2.00** `[OBS]` | `[UNK]` | **R0** `[OBS]` | (bundled in account fee) | (PAYU) | [Capitec fees 2026 (PDF)](https://www.capitecbank.co.za/globalassets/pages/documents-library/transact/personal-banking-fees-2026.pdf), [Bank Zero](https://www.bankzero.co.za/rates-and-pricing/) |
| Payment between own-bank accounts | **R1.00** `[OBS]` | Free (Easy) | **R0** `[OBS]` | Free (Transact swipes) | Free (MiGoals) | [Capitec fees 2026 (PDF)](https://www.capitecbank.co.za/globalassets/pages/documents-library/transact/personal-banking-fees-2026.pdf) |
| Debit orders | **R3.00** `[OBS]` | `[UNK]` | **R0** `[OBS]` | `[UNK]` | `[UNK]` | [Capitec fees 2026 (PDF)](https://www.capitecbank.co.za/globalassets/pages/documents-library/transact/personal-banking-fees-2026.pdf) |
| Immediate/real-time payment to other banks | **R6.00** `[OBS]` | `[UNK]` | **R0** `[OBS]` | `[UNK]` | `[UNK]` | [Capitec fees 2026 (PDF)](https://www.capitecbank.co.za/globalassets/pages/documents-library/transact/personal-banking-fees-2026.pdf) |
| PayShap ≤ R100 | **Free** `[OBS]` | `[UNK]` (participant) | `[UNK]` | `[UNK]` (participant) | `[UNK]` (participant) | [Capitec — PayShap](https://www.capitecbank.co.za/personal/transact/payshap) |
| Cardless send (eWallet) | n/a | **R10 flat** (Easy) `[OBS]` | n/a | CashSend `[UNK]` | n/a | [FNB eWallet](https://www.online.fnb.co.za/send-money/eWallet.html) |
| Forex margin on card | **0%** `[OBS]` | `[UNK]` | `[UNK]` | `[UNK]` | `[UNK]` | [Capitec FY2026 results summary (PDF)](https://www.capitecbank.co.za/globalassets/pages/investor-relations/financial-results/2026/audited-results/cpify26_summary.pdf) |

## 4. Rewards / loyalty fee lines (fee-linked)

- `[OBS]` **Standard Bank UCount** — **R25/month** loyalty subscription; earn 0.05%–1% (up to 40% back), redemption cap 200,000 points/month ([UCount programme rules (PDF)](https://ucount.standardbank.co.za/personal/wp-content/uploads/0541/2018/02/UCount-Rewards-New-Programme-Rules.pdf)).
- `[OBS]` **Absa Rewards** and **Nedbank Greenbacks** are free-to-join tiers embedded in the account price ([Absa Rewards](https://www.absa.co.za/personal/bank/absa-rewards/explore/), [Nedbank Greenbacks/Private Bundle](https://private-clients.nedbank.co.za/accounts/private-bundle.html)).
- `[OBS]` **Discovery Bank** prices the **Vitality Money premium at R20/month** inside the Gold PAYT account fee ([Discovery Gold PAYT fees (PDF)](https://cdn.discovery.co.za/wcm/discoverycoza/assets/bank/fees-guides/discovery-bank-gold-transaction-payt-fees.pdf)).

## 5. Observations `[DER]` / `[INF]`

1. `[DER]` **Fee floor has collapsed to R0.** African Bank, TymeBank/GoTyme and Bank Zero all run R0 monthly, and Capitec/Absa/Nedbank/FNB entry tiers sit within **R6.50–R7.50** — a near-universal low-fee entry band. Pricing is no longer a moat at entry level; **transaction and loyalty economics** differentiate.
2. `[DER]` **Capitec publishes the most granular per-item pricing** (EFT R2, debit orders R3, immediate R6) and offers **0% forex margin** — the benchmark for "simple, disclosed" fees that a NeoBank must match or beat ([Capitec fees 2026 (PDF)](https://www.capitecbank.co.za/globalassets/pages/documents-library/transact/personal-banking-fees-2026.pdf)).
3. `[INF]` **Premium pricing power persists.** FNB Private Wealth (R625) and Absa Premium (R240) show incumbents still monetise affluent/behavioural bundles — a revenue pool a neobank can attack only with an ecosystem/loyalty play (see A3, A10).
4. `[UNK]` **Card scheme interchange, merchant acquirer fees and credit-card interest/initiation rates** are contract-specific and not publicly enumerated per bank; the CSV leaves these blank rather than estimate.
5. `[UNK]` **Discovery Bank's full current fee schedule** varies by suite and vitality status; the R35 (Gold PAYT) / R170 (Gold bundled) / R605 (Black) figures are the public reference points ([Discovery](https://www.discovery.co.za/bank/accounts-suite-black)). A third-party tracker (Subger) cites Gold R90 / Platinum R230 / Black R295 — **conflicting**, so tagged `[UNVERIFIED]`.

## Sources

- [Absa — 2025 benefits & pricing, everyday banking products (PDF)](https://www.absa.co.za/content/dam/south-africa/absa/pdf/2025/2025-benefits-and-pricing-everyday-banking-products-on-sale.pdf)
- [Absa — Premium Banking Package](https://www.absa.co.za/personal/bank/an-account/premium-banking-package/)
- [Absa — Absa Rewards](https://www.absa.co.za/personal/bank/absa-rewards/explore/)
- [Nedbank — everyday banking fees 2025 (PDF)](https://personal.nedbank.co.za/content/dam/nedbank/pdfs/everyday-banking-fees-2025.pdf)
- [Nedbank — credit cards pricing guide 2025 (PDF)](https://personal.nedbank.co.za/content/dam/nedbank/pdfs/nedbank-credit-cards-pricing-guide-2025.pdf)
- [Nedbank — Private Clients bundle (Greenbacks)](https://private-clients.nedbank.co.za/accounts/private-bundle.html)
- [FNB — Easy Account pricing guide (PDF)](https://online.firstrand.co.za/downloads/pricing-guides/FNB-Easy-Account.pdf)
- [FNB — Virtual Card FAQs (PDF)](https://www.fnb.co.za/downloads/ways-to-bank/FNBVirtualCardFAQs.pdf)
- [FNB — eWallet](https://www.online.fnb.co.za/send-money/eWallet.html)
- [Standard Bank — MyMo Account Pricing Guide 2026 (PDF)](https://www.standardbank.co.za/static_file/South%20Africa/PDF/Personal%20Pricing/2026/MyMo_Account_Pricing_Guide_2026.pdf)
- [Standard Bank — UCount Rewards programme rules (PDF)](https://ucount.standardbank.co.za/personal/wp-content/uploads/0541/2018/02/UCount-Rewards-New-Programme-Rules.pdf)
- [Capitec — personal banking fees 2026 (PDF)](https://www.capitecbank.co.za/globalassets/pages/documents-library/transact/personal-banking-fees-2026.pdf)
- [Capitec — FY2026 summary consolidated financial statements (PDF)](https://www.capitecbank.co.za/globalassets/pages/investor-relations/financial-results/2026/audited-results/cpify26_summary.pdf)
- [Capitec — PayShap](https://www.capitecbank.co.za/personal/transact/payshap)
- [African Bank — banking / MyWORLD](https://www.africanbank.co.za/en/home/banking/)
- [African Bank — MyWORLD pricing guide (PDF)](https://www.africanbank.co.za/media/sgqbbsoi/tb2309_001_mw_pricing-guide_update_p4.pdf)
- [Bank Zero — rates & pricing](https://www.bankzero.co.za/rates-and-pricing/)
- [Bank Zero — pricing guide 2026 (PDF)](https://www.bankzero.co.za/wp-content/uploads/2025/11/Bank-Zero-pricing-guide-2026.pdf)
- [TymeBank/GoTyme — best digital banks (MoneyToday)](https://moneytoday.co.za/banking/best-digital-banks)
- [Discovery Bank — Gold Transaction Account (bundled)](https://www.discovery.co.za/bank/accounts-transaction-bundled-gold)
- [Discovery Bank — Gold Transaction PAYT fees guide (PDF)](https://cdn.discovery.co.za/wcm/discoverycoza/assets/bank/fees-guides/discovery-bank-gold-transaction-payt-fees.pdf)
- [Discovery Bank — Black Suite](https://www.discovery.co.za/bank/accounts-suite-black)
