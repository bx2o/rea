# C13 — Stablecoin & Digital-Asset Rails

- **Owner:** C13 Web3-Finance Captain · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Related:** [`tokenisation-and-programmable-money.md`](./tokenisation-and-programmable-money.md), [`defi-and-risk.md`](./defi-and-risk.md)
- **Grounding:** `../../research/regulatory/conduct-fais-nca.md` §2.3, `../../research/regulatory/aml-fica.md` §2/§5, `../../research/regulatory/payments-nps.md`, `../../research/neobank-competitors/crypto-casp.md`

> Status legend: ✅ **Permissible** · ⚠️ **Required-authorisation** · ⛔ **Not-permitted**. Regulatory facts are sourced; commercial views are `[ASSUMPTION]`.

---

## 1. Why this file exists

Stablecoins and digital assets are the sharpest regulatory edge in the program. The SA position is **not** "crypto is unregulated" — it is that crypto is regulated *as financial services* (FAIS), with AML and reporting overlays. A **bank** that touches customer crypto inherits a **stack of permissions**, not one.

---

## 2. SA regulatory perimeter (sourced)

| Element | Position | Tag | Source |
|---|---|---|---|
| Crypto asset = financial product | Yes, since 19 Oct 2022 | `[REG]` | `conduct-fais-nca.md` §2.3 |
| CASP licensing | FSP licence sub-category 1.28 (Cat I/II); ~300 approved Dec 2025 | `[REG-GUIDE]` | `conduct-fais-nca.md` §2.3; `crypto-casp.md` |
| AML | CASP is a FICA accountable institution (item 12), second FIC registration | `[REG]` | `aml-fica.md` §2 |
| Travel rule | Originator + beneficiary data with **every** crypto transfer; **zero threshold** (Directive 9; PCC 61 of 2026) | `[REG]` | `aml-fica.md` §5 |
| Tax reporting | **CARF** effective 1 Mar 2026 (R-CASPs) | `[REG]` | `tax-governance.md` §4 |
| Banking character | Accepting deposits in crypto could engage the Banks Act "business of a bank" | `[STATUTE]` | `banking-licensing.md` §1 |
| Forex | FX dealing requires AD/ADLA status | `[REG-GUIDE]` | `banking-licensing.md` §6 |

---

## 3. ZAR-backed stablecoins

**What they are (conceptually):** a token whose value is pegged 1:1 to the South African Rand, backed by reserves. `[ASSUMPTION: conceptual description]`

**The SA question — could a bank issue or use one?**

| Aspect | Assessment | Status |
|---|---|---|
| A **bank issuing** a ZAR stablecoin to the public | Would likely constitute issuing a form of deposit/e-money; requires PA/NPS analysis. Not authorised at launch. | ⛔ (at launch) |
| A **bank holding** stablecoins on own balance sheet | Treasury/capital treatment unclear; liquidity caution required. | ⚠️ (with limits) |
| A **bank providing custody** of stablecoins for clients | Requires FSCA FSP + FIC item-12 + travel rule. | ⚠️ |
| Using a **third-party licensed** stablecoin rail for settlement | Depends on the counterparty's licence and the bank's role; PA analysis required. | ⚠️ |
| A client-facing **fiat ↔ stablecoin on/off-ramp** | Requires CASP-type authorisation; partner model likely. | ⚠️ |

> No claim is made that a ZAR stablecoin reserve framework exists in SA law — this is an **open regulatory question** (`[UNKNOWN]`). Do not assume clear permission.

---

## 4. FSCA CASP licensing (what it means for a bank)

- The route to offer crypto **advice/intermediary** services is an **FSP licence with crypto authorisation**, and the fit-and-proper regime (RE exams) applies `[REG-GUIDE]` (`../../research/regulatory/conduct-fais-nca.md` §2.2–2.3).
- The separate **FIC item-12** registration and **travel-rule** obligations attach to the activity regardless `[REG]` (`../../research/regulatory/aml-fica.md`).
- **Market context `[UNVERIFIED]`:** licensed CASPs (e.g. Luno, VALR) now buy banking relationships and institutional trust that unlicensed operators lack; one large exchange (Binance SA) operates without a full CASP licence, illustrating the enforcement risk (`../../research/neobank-competitors/crypto-casp.md`).

**Implication for us:** if we offer crypto, we must either (a) hold the stack ourselves, or (b) partner with a licensed CASP and clearly delimit the bank's role.

---

## 5. Cross-border remittance use case

Stablecoins are often pitched for cheap cross-border value transfer. In SA:

- Legitimate remittance flows through **AD/ADLA-authorised** channels; non-banks use ADLA or licensed TPPPs `[REG-GUIDE]` (`../../research/regulatory/banking-licensing.md` §6; `../../research/regulatory/payments-nps.md`).
- **Travel rule** applies to all crypto transfers (zero threshold) `[REG]`.
- The **draft non-bank payment framework** (still `[CONSULT]` as at 2026-10) would regulate money remittance by activity — **non-binding today** (`../../research/regulatory/payments-nps.md` §3).

| Remittance route | Status |
|---|---|
| Traditional AD/ADLA / TCIB / SADC-RTGS | ✅ (with authorisation) |
| Stablecoin-based transfer to/from SA | ⚠️ depends on who holds which permission; travel rule mandatory |
| Bank operating an unlicensed crypto remittance corridor | ⛔ |

---

## 6. Consolidated permissibility table

| Capability | ✅/⚠️/⛔ | Precondition |
|---|---|---|
| Hold client fiat deposits (bank) | ✅ | banking licence `[REG]` |
| Offer crypto advice/intermediary | ⚠️ | FSCA FSP (1.28) + fit-and-proper `[REG]` |
| Provide crypto custody | ⚠️ | FSP + FIC item-12 + travel rule + custody controls |
| Fiat ↔ crypto on/off-ramp | ⚠️ | as above, or licensed partner |
| Issue a public ZAR stablecoin | ⛔ at launch | requires bespoke PA/NPS authorisation analysis |
| Bank participates in DeFi protocols | ⛔ | see `defi-and-risk.md` §7 |
| Use a **licensed** stablecoin rail for internal settlement | ⚠️ | PA review of counterparty + role |

---

## 7. Recommended posture

1. **Do not lead with crypto.** The brand is a *bank*; crypto is an optional, gated feature.
2. **Partner-first.** If crypto is offered, partner with a licensed CASP and keep the bank's role clearly bounded (no unlicensed activity).
3. **Gate rigorously.** No crypto surface ships without C01 sign-off on the FSCA/FIC/CARF/travel-rule stack (`.stremiium/governance/workflow-routing.md` §6).
4. **Capital/liquidity caution.** Any stablecoin holding on balance sheet is treated as illiquid/risky until a PA view is obtained.
5. **Track the framework.** Monitor finalisation of the non-bank payments instruments and any stablecoin policy.

---

## 8. Open items / unknowns

- `[UNKNOWN]` Whether SA will create a ZAR-stablecoin reserve/issuance regime.
- `[UNKNOWN]` PA treatment of stablecoin holdings on a bank balance sheet.
- `[CONSULT]` Final non-bank payment framework categories — non-binding (`../../research/regulatory/payments-nps.md` §3).
- `[UNKNOWN]` Interaction of CARF and CRS for e-money/stablecoin products (`../../research/regulatory/tax-governance.md` §4).

---

## 9. Cross-links

- Programmability → [`tokenisation-and-programmable-money.md`](./tokenisation-and-programmable-money.md)
- Risk stance → [`defi-and-risk.md`](./defi-and-risk.md)
- Competitor crypto context → `../../research/neobank-competitors/crypto-casp.md`
- Regulatory pack → `../../research/regulatory/conduct-fais-nca.md`, `../../research/regulatory/aml-fica.md`
