# C10 — Financial Model Framework

- **Owner:** C10 Chief Financial Officer · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Related:** [`capital-and-funding.md`](./capital-and-funding.md), [`unit-economics-framework.md`](./unit-economics-framework.md), [`financial-controls.md`](./financial-controls.md)

> ### ⚠️ READ THIS FIRST — no real financials here
> This is a **model scaffold plus one worked exemplar**. Every input is a **placeholder** tagged `[ASSUMPTION]`. The exemplar numbers exist to demonstrate **model mechanics and coherence**, not to forecast the bank. **They must not be quoted as projections.** Regulatory constants carry `[REG]` and are sourced from `../../research/regulatory/`. Real inputs require market data, vendor quotes and investor terms — all currently `[UNKNOWN]`.

---

## 1. Model architecture

```text
FINANCIAL MODEL (monthly grid, 60-month horizon `[ASSUMPTION]`)
├── 1. Revenue lines
│      ├── 1.1 Net interest income (NII)          = interest-earning assets × NIM
│      ├── 1.2 Interchange / payment fees         = TPV × take rate
│      ├── 1.3 Account / subscription fees        = active accounts × fee
│      ├── 1.4 Lending fees & interest            = book × yield − funding cost − losses
│      └── 1.5 Other (FX, value-added services)   `[ASSUMPTION]`
├── 2. Cost lines
│      ├── 2.1 People (salaries, benefits)        [OPEN ITEM — no figures]
│      ├── 2.2 Technology (cloud, licences)       `[ASSUMPTION]`
│      ├── 2.3 Outsourcing / BPO                  `[ASSUMPTION]`
│      ├── 2.4 Card scheme & rail fees            `[ASSUMPTION]`
│      ├── 2.5 Marketing / CAC                    see unit-economics
│      ├── 2.6 Compliance & audit                 `[ASSUMPTION]`
│      └── 2.7 Overheads (premises, professional) `[ASSUMPTION]`
├── 3. Balance sheet & capital
│      ├── 3.1 Assets: cash/HQLA, loans, cards, intangibles
│      ├── 3.2 Liabilities: customer deposits, wholesale funding
│      ├── 3.3 Equity: paid-in capital, retained earnings
│      └── 3.4 Regulatory capital: CET1 / Tier 1 / Total → CAR, leverage
├── 4. Liquidity
│      ├── 4.1 LCR  = HQLA / net cash outflows (≥ 100% `[REG]`)
│      ├── 4.2 NSFR = available stable funding / required (≥ 100% `[REG]`)
│      └── 4.3 Funding mix & concentration
└── 5. Outputs
       ├── P&L, balance sheet, cash flow
       ├── CAR / leverage / LCR / NSFR
       ├── Unit economics (CAC, LTV, payback)
       └── Scenario switches (base/bull/bear)
```

Scroll (in months) drives account growth → balances → revenue → cost → profit → retained capital → CAR. **The capital constraint closes the loop**: growth that outruns capital is not fundable.

---

## 2. Input assumptions register

All values are **placeholders**. Marked `[ASSUMPTION]`. Real inputs: `[UNKNOWN]`.

| Ref | Input | Placeholder | Tag | Source needed |
|---|---|---|---|---|
| A1 | Starting funded accounts (month 1) | 0 | `[ASSUMPTION]` | GTM plan (C09/C15) |
| A2 | Monthly gross account adds (base) | 10,000 | `[ASSUMPTION]` | channel model |
| A3 | Monthly churn (base) | 2% | `[ASSUMPTION]` | benchmark `[UNVERIFIED]` |
| A4 | Blended fee/ARPU per active account / month | R 25 | `[ASSUMPTION]` | pricing model (C15) |
| A5 | Average deposit balance per account | R 3,000 | `[ASSUMPTION]` | deposit model |
| A6 | Net interest margin (NIM) | 3.5% p.a. | `[ASSUMPTION]` | treasury (C16/C10) |
| A7 | Loans as % of deposits | 40% | `[ASSUMPTION]` | credit policy |
| A8 | Loan yield | 22% p.a. | `[ASSUMPTION]` | credit model |
| A9 | Credit loss rate | 8% p.a. of book | `[ASSUMPTION]` | credit model |
| A10 | Payment TPV per active account / month | R 4,000 | `[ASSUMPTION]` | payments model |
| A11 | Interchange / take rate | 0.5% of TPV | `[ASSUMPTION]` | scheme economics |
| A12 | People cost / FTE / month | **[OPEN ITEM]** | `[UNKNOWN]` | SA reward benchmark |
| A13 | Technology run cost / month | R 2,000,000 | `[ASSUMPTION]` | vendor quotes |
| A14 | Outsourcing / BPO / month | R 500,000 | `[ASSUMPTION]` | vendor quotes |
| A15 | Card scheme & rail fees | modelled per txn | `[ASSUMPTION]` | scheme schedules |
| A16 | Marketing spend / month | R 3,000,000 | `[ASSUMPTION]` | C09 plan |
| A17 | CAC per funded account | R 450 | `[ASSUMPTION]` | unit-economics |
| A18 | Minimum capital (bank) | **R 250,000,000** | `[REG]` | `banking-licensing.md` §2 |
| A19 | Minimum CAR | **≥ 11.5%** | `[REG]` | `banking-licensing.md` §5 |
| A20 | Minimum leverage ratio | **≥ 4%** | `[REG]` | `banking-licensing.md` §5 |
| A21 | Corporate tax rate | **27%** | `[REG]` | `tax-governance.md` §1 |
| A22 | LCR / NSFR minimum | **≥ 100%** | `[REG]` | `banking-licensing.md` §5 |

> Rows A12 is deliberately blank — **we do not invent salaries**. A18–A22 are the only non-assumption constants and are sourced.

---

## 3. Derived-line formulae

| Line | Formula |
|---|---|
| Active accounts (m) | `prev × (1 − churn) + gross adds` |
| Deposit balances | `active accounts × A5` |
| Loans | `deposits × A7` |
| NII | `(loans × A8 − deposits × funding_cost) × A6-adjusted` `[ASSUMPTION wiring]` |
| Payment fees | `active accounts × A10 × A11` |
| Fee revenue | `active accounts × A4` |
| Credit losses | `loans × A9` |
| Total revenue | `NII + payment fees + fee revenue + lending fees + other` |
| Total cost | `people + tech + BPO + scheme + marketing + compliance + overheads` |
| PBT | `revenue − cost − credit losses` |
| Tax | `max(0, PBT) × 27%` `[REG rate]` |
| Retained earnings | `PAT (or −loss)` |
| CAR | `eligible capital / RWA` (must be `≥ 11.5%` `[REG]`) |

---

## 4. Worked exemplar (PLACEHOLDER NUMBERS — mechanics only)

> **These numbers are illustrative only. They are NOT a forecast and must not be cited as one.** A single steadier-state month is shown to prove the wiring works, using the placeholder inputs from §2.

Assume (placeholder) **500,000 active accounts** in the illustration month:

| Line | Calculation | Value `[ASSUMPTION]` |
|---|---|---|
| Deposits | 500,000 × R3,000 | R 1,500,000,000 |
| Loans | 40% × 1,500,000,000 | R 600,000,000 |
| NII (indicative) | (600m × 22% − 1,500m × 6%) weighted | `R 24,000,000 /yr` → shown monthly |
| Payment fees | 500,000 × R4,000 × 0.5% | R 10,000,000 /mo |
| Account fees | 500,000 × R25 | R 12,500,000 /mo |
| Credit losses | 600m × 8% | `R 4,000,000 /mo (indicative)` |
| Technology | A13 | R 2,000,000 /mo |
| Outsourcing | A14 | R 500,000 /mo |
| Marketing | A16 | R 3,000,000 /mo |
| **People** | **[OPEN ITEM — not modelled]** | **TBD** |

**Mechanics demonstrated:** deposits → loans → NII → fees → losses → cost → PBT. The blank people line shows exactly where real data must be inserted. **No total-profit or valuation figure is asserted**, because with people cost unknown the P&L cannot be closed honestly.

---

## 5. Scenario table (base / bull / bear)

Switches change the *growth, cost and loss* assumptions; regulatory constants do not change. **All scenario values are placeholders.**

| Driver (ref) | 🐻 Bear | ➖ Base | 🐂 Bull |
|---|---|---|---|
| Monthly gross adds (A2) | 4,000 | 10,000 | 20,000 |
| Churn (A3) | 3.5% | 2.0% | 1.2% |
| Blended ARPU (A4) | R 18 | R 25 | R 35 |
| NIM (A6) | 2.5% | 3.5% | 4.5% |
| Credit loss (A9) | 12% | 8% | 5% |
| CAC (A17) | R 700 | R 450 | R 300 |
| **Narrative `[ASSUMPTION]`** | slow growth, higher losses, capital-constrained | plan case | rapid adoption, better losses, more capital available |
| **Capital trigger** | must slow growth to stay `≥ 11.5%` CAR `[REG]` | fundable if raise closes | needs larger raise/wholesale funding |

> Scenario outputs (monthly grid) are produced by the model, not asserted here. The **decision rule**: any scenario breaching CAR/leverage/LCR/NSFR is flagged as **unfundable at current capital** and fed to `capital-and-funding.md`.

---

## 6. Capital & liquidity overlay

- Every scenario is checked against **CAR ≥ 11.5%**, **leverage ≥ 4%**, **LCR/NSFR ≥ 100%** `[REG]` (`../../research/regulatory/banking-licensing.md` §5).
- The PA may impose a **higher CAR for newly established banks** `[REG]` — model a supervisory buffer `[ASSUMPTION]`.
- Basel III post-crisis reforms (effective 1 Jul 2025) mean the model must use **post-2025 risk-weight rules**, not legacy `[REG]` (`../../research/regulatory/banking-licensing.md` §5).

---

## 7. Governance of the model

- **Version control:** every model version records input assumptions and changes (ADR per `../../templates/decision-record.md`).
- **Independent review:** material assumption changes reviewed by C10 controller + C01.
- **Sensitivity:** one-at-a-time sensitivity plus the three scenarios above.
- **No external distribution** until inputs are sourced and SC/board approve.

---

## 8. Open items / unknowns

- `[UNKNOWN]` People cost base (A12) — blocks any honest P&L.
- `[UNKNOWN]` Vendor quotes (cloud, BPO, schemes).
- `[UNKNOWN]` Funding-round terms.
- `[ASSUMPTION]` Horizon, churn and ARPU placeholders must be replaced with GTM/pricing evidence.

---

## 9. Cross-links

- Capital & raise → [`capital-and-funding.md`](./capital-and-funding.md)
- Unit economics → [`unit-economics-framework.md`](./unit-economics-framework.md)
- Controls & reporting → [`financial-controls.md`](./financial-controls.md)
- Regulatory refs → `../../research/regulatory/banking-licensing.md`, `../../research/regulatory/tax-governance.md`
