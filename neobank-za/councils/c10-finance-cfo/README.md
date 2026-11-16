# C10 — Finance / CFO Council

- **Council ID:** C10 (department path `c10-finance-cfo`; siblings `c10-finance-investor-relations`, `c10-algo-trading`)
- **Captain:** C10 Chief Financial Officer (`C10-chief-financial-officer.agent.md`) — per `.stremiium/config/council-department-mapping.json`
- **Program:** Project Umoya — NeoBank ZA (codename only)
- **Status:** Draft v1.0 (UnConsolidated) — 2026-10-16

> **STRICT EVIDENCE RULE.** This council produces **model scaffolds and worked exemplars with placeholder assumptions only**. It does **not** publish real financials, real salaries, real valuations, or measured unit economics. Every figure is tagged `[ASSUMPTION]`, `[TARGET]`, `[UNVERIFIED]`, or `[REG]` (a regulatory value sourced from the research pack). Regulatory constants (e.g. R250m minimum capital) are quoted from `../../research/regulatory/` with a source; they are not invented.

---

## 1. Purpose

C10 is the **financial control point** of the bank. It owns:

- the **financial model** (revenue, cost, capital, liquidity, regulatory capital);
- **capital & funding** strategy (raise path, sponsor-bank economics, treasury);
- **unit economics** (CAC/LTV/payback/cost-to-serve) from the finance lens;
- **financial controls** (SOX-like, reconciliation, audit, BA-return reporting calendar).

It is the counterparty to C02 (reconciliation truth), C16 (rails/economics), C13 (digital-asset financial treatment), and C01 (regulatory reporting obligations).

---

## 2. Mandate & boundaries

| Owns | Does not own |
|---|---|
| Financial model & scenarios | Product roadmap (C15) |
| Capital & funding strategy | Credit policy decisions (C12/credit committee) |
| Treasury, HQLA, LCR/NSFR posture | Payments rail engineering (C16/C11) |
| Financial controls & BA-return reporting | Regulatory interpretation (C01) |
| Unit-economics framework | Marketing spend decisions (C09) — consulted |

---

## 3. What "good" looks like (from a CFO lens)

1. **Truth in the ledger.** Every number ties to an operational sub-ledger (see `financial-controls.md`).
2. **Capital-aware decisions.** Every product decision is read against its CAR/LCR impact.
3. **Scenario discipline.** Base/bull/bear, each with explicit assumptions and triggers.
4. **No surprises.** Regulator and board see the same numbers.
5. **Cost-to-serve honesty.** Unit economics expose the real cost of a customer, not a blended average that hides losses.

---

## 4. File index

| File | Contents |
|---|---|
| [`README.md`](./README.md) | This overview. |
| [`financial-model.md`](./financial-model.md) | Model framework: revenue lines, cost lines, capital, liquidity, CAR; ASSUMPTION inputs + base/bull/bear scenario table; **scaffold + worked exemplar**. |
| [`capital-and-funding.md`](./capital-and-funding.md) | Capital requirements (with regulatory refs), fundraising path, sponsor-bank economics, treasury. |
| [`unit-economics-framework.md`](./unit-economics-framework.md) | CAC/LTV/payback/cost-to-serve framework; ASSUMPTION-labelled. |
| [`financial-controls.md`](./financial-controls.md) | SOX-like controls, reconciliation, audit, BA-return reporting calendar. |

---

## 5. Interlocks

| Interlock | Contract |
|---|---|
| C02 | Ops produces recon evidence; C10 owns GL truth (`../c02-operations/operating-model.md` §2). |
| C16 | Rail participation model drives cost & settlement economics (`../c16-banking-fintech/`). |
| C01 | FIC/AEOI/BA reporting obligations (`../../research/regulatory/aml-fica.md`, `../../research/regulatory/tax-governance.md`). |
| C13 | Crypto/stablecoin financial treatment and any token-related flows (`../c13-web3-finance/`). |
| Escalation | Captain → SC → Mychael → Board; Critical 1h · High 4h · Medium 24h · Low 72h. |

---

## 6. Regulatory anchors (sourced)

- Minimum bank capital: **R250 million** `[REG]` (`../../research/regulatory/banking-licensing.md` §2).
- Minimum **CAR ≥ 11.5%**; **leverage ≥ 4%**; LCR/NSFR; higher CAR possible for new banks `[REG]` (`../../research/regulatory/banking-licensing.md` §5).
- Corporate income tax **27%**; VAT **15%**; STT **0.25%** `[REG/rates]` (`../../research/regulatory/tax-governance.md` §1–3).
- BA-return set **BA 100 / BA 200–210 / BA 700** `[REG]` (`../../research/regulatory/tax-governance.md` §8).

---

## 7. Open items / unknowns

- `[UNKNOWN]` Actual cost base (salaries, vendors, cloud) — pending market data and vendor selection. **Not fabricated here.**
- `[UNKNOWN]` Real funding-round terms and valuation — pending investor engagement. **Not fabricated here.**
- `[ASSUMPTION]` All model inputs are placeholders for structure-testing, not forecasts.

_Codename `Project Umoya` is a working label only._
