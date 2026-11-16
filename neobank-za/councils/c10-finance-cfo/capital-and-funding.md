# C10 — Capital & Funding

- **Owner:** C10 Chief Financial Officer · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Model:** [`financial-model.md`](./financial-model.md) · **Controls:** [`financial-controls.md`](./financial-controls.md)
- **Grounding:** `../../research/regulatory/banking-licensing.md` §2, §5; `../../research/regulatory/licensing-roadmap.md` Phase 2

> Regulatory constants are `[REG]` and sourced. All raise amounts, valuations and investor structures are `[UNKNOWN]` — **no funding round is fabricated here**.

---

## 1. Regulatory capital requirements (sourced)

| Requirement | Value | Tag | Source |
|---|---|---|---|
| Minimum capital — full commercial bank | **R250 million** | `[REG]` | `banking-licensing.md` §2 |
| Minimum capital — mutual bank | **R10 million** | `[REG]` | `banking-licensing.md` §2 |
| Minimum total **CAR** | **≥ 11.5%** | `[REG]` | `banking-licensing.md` §5 |
| Minimum **leverage ratio** | **≥ 4%** | `[REG]` | `banking-licensing.md` §5 |
| **LCR / NSFR** | Basel III standards; HQLA held in SA | `[REG]` | `banking-licensing.md` §5 |
| New-bank overlay | PA may impose **higher CAR** in formative years | `[REG]` | `banking-licensing.md` §5 |
| **15% ownership threshold** | > 15% of a bank needs PA/Minister permission | `[REG]` | `banking-licensing.md` §4 |
| Controlling company | s42 registration; only bank or PA-approved public co. | `[REG]` | `banking-licensing.md` §4 |

> The bank must be a **public company** `[REG]` (`banking-licensing.md` §1). Basel III post-crisis reforms apply from **1 July 2025** `[REG]`.

---

## 2. Capital stack design

```text
Eligible capital
├── CET1 (Common Equity Tier 1)
│     ├── paid-in ordinary equity (from the raise)
│     └── retained earnings (reinvested profit)
├── AT1 (Additional Tier 1)         `[ASSUMPTION: consider only if scale justifies]`
└── Tier 2 (subordinated debt)      `[ASSUMPTION: later-stage funding lever]`
```

**Design rules:**
- CET1 must satisfy the minimum **R250m** `[REG]` *and* the CAR `[REG]` *and* the supervisory buffer — whichever binds.
- New-bank growth consumes capital; the model (`financial-model.md` §6) flags any scenario that breaches CAR as **unfundable at current capital**.
- Capital instruments and any AT1/T2 must comply with PA eligibility rules `[REG]` (verify instrument terms with C01/PA).

---

## 3. Fundraising path (outline, not a commitment)

> Amounts and valuations are `[UNKNOWN]`. This is a **sequence**, not a promise.

| Stage | Purpose | Instrument `[ASSUMPTION]` | Gate |
|---|---|---|---|
| Pre-seed / founder | incorporation, Phase-0 seats, RMCP draft | equity | board seated; capital plan drafted |
| Seed | licence application, core team, build start | equity | PA application filed |
| Series A | build completion, capital injection to meet R250m path | equity | PA authorisation; product build |
| Pre-launch top-up | regulatory capital buffer + liquidity (HQLA) | equity / sub-debt `[ASSUMPTION]` | s16 registration path |
| Post-launch / growth | scaling, wholesale funding lines | equity + T2 | CAR/LCR maintained `[REG]` |

**Investor constraints to flag:**
- Significant owners must be **fit-and-proper** and demonstrate **capacity to contribute additional capital** `[REG]` (`banking-licensing.md` §4).
- Shareholding > 15% triggers PA/Minister permission `[REG]`.
- Foreign investors: exchange-control and s18A considerations `[REG]`.

---

## 4. Sponsor-bank economics

Until the bank holds a full licence and direct settlement access, the operating model may run on a **sponsor bank** (`../c02-operations/operating-model.md` §3; `../../research/regulatory/payments-nps.md` §110–114).

| Cost/benefit | Nature | Tag |
|---|---|---|
| Sponsor fees | per-account / per-transaction / fixed | `[ASSUMPTION]` |
| Float economics | sponsor may hold float; ours constrained | `[ASSUMPTION]` |
| Restricted product scope | sponsor sets limits | `[ASSUMPTION]` |
| Speed to market | gains vs waiting for full licence | `[ASSUMPTION]` |
| Migration cost | move to direct settlement later | `[ASSUMPTION]` |

**Rule:** the sponsor contract is a **material vendor** relationship (C02 §9) and must include an exit/migration plan to direct participation.

---

## 5. Treasury

| Responsibility | Description |
|---|---|
| **Liquidity management** | maintain LCR/NSFR ≥ 100% `[REG]`; HQLA in SA |
| **Funding mix** | avoid reliance on narrow funding; build deposit base + diversified wholesale `[REG]` (`banking-licensing.md` §5) |
| **Interest-rate / ALM** | manage repricing and maturity mismatch |
| **FX** | only under AD/ADLA permission if dealing in FX `[REG]` (`banking-licensing.md` §6) |
| **Settlement funding** | ensure settlement account funded before cut-offs (interlock C02 §3) |
| **Digital-asset exposure** | any stablecoin/asset holdings assessed under `../c13-web3-finance/` and treated with capital/liquidity caution |

**ALM principle:** the funding profile must not be reliant on narrow sources and must hold a buffer of high-quality unencumbered assets `[REG]` (`banking-licensing.md` §5).

---

## 6. Stress & scenarios

- Run capital stress under the three scenarios in `financial-model.md` §5.
- Stress specifically: deposit run-off, credit-loss spike, settlement-timing break, sponsor failure.
- Output: minimum CAR/leverage/LCR/NSFR reached, and the capital action required.

---

## 7. Open items / unknowns

- `[UNKNOWN]` Raise amounts, valuations, investor mix.
- `[UNKNOWN]` Exact AT1/T2 eligibility and pricing (requires PA/instrument confirmation).
- `[ASSUMPTION]` Sponsor fee structure — pending contract negotiation.
- `[UNKNOWN]` Whether the PA imposes a higher formative-year CAR for our specific plan.

---

## 8. Cross-links

- Model → [`financial-model.md`](./financial-model.md)
- Unit economics → [`unit-economics-framework.md`](./unit-economics-framework.md)
- Controls → [`financial-controls.md`](./financial-controls.md)
- Licensing roadmap → `../../research/regulatory/licensing-roadmap.md`
- Sponsor/rails → `../c16-banking-fintech/`, `../../research/regulatory/payments-nps.md`
