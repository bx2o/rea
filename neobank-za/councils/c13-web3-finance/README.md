# C13 — Web3 / Fintech Rails Council

- **Council ID:** C13 (department path `c13-web3-finance`)
- **Captain:** C13 Web3-Finance Captain (`C13-web3-finance-captain.agent.md`) — per `.stremiium/config/council-department-mapping.json`
- **Program:** Project Umoya — NeoBank ZA (codename only)
- **Status:** Draft v1.0 (UnConsolidated) — 2026-10-16

> **Evidence discipline.** Regulatory status statements are tagged `[STATUTE]`, `[REG]`, `[REG-GUIDE]`, `[CONSULT]` (see `../../research/regulatory/README.md` legend) with a source. Business assumptions are `[ASSUMPTION]`. Nothing here is legal advice; C01 and an admitted attorney must validate before any product decision.

---

## 1. Mandate

C13 answers one question honestly: **how — and whether — blockchain and stablecoins fit a South African regulated bank.** The default posture is **conservative**: we adopt only what is clearly permissible, we obtain authorisation for what requires it, and we refuse what is not permitted. We do **not** assume crypto is a growth mandate.

C13 sits between:

- **C16 Banking-Fintech** — rails, licences, settlement participation.
- **C01 Legal-Compliance** — FSCA/FICA/POPIA gates.
- **C10 Finance-CFO** — financial treatment, liquidity/capital caution.
- **C12 Cybersecurity** — custody, key management, smart-contract risk.

---

## 2. Framing: three status classes

Every capability analysed by C13 is classified into exactly one of:

| Class | Meaning |
|---|---|
| ✅ **Permissible** | Allowed under current law with ordinary compliance (no special licence beyond what we already hold/seek). |
| ⚠️ **Required-authorisation** | Allowed **only** if a specific licence/registration/permission is obtained (e.g. FSCA FSP, FIC item-12, PA approval). |
| ⛔ **Not-permitted** | Prohibited or commercially/regulatorily unviable for a SA bank today. |

This taxonomy is applied in [`stablecoin-and-digital-asset-rails.md`](./stablecoin-and-digital-asset-rails.md) and [`tokenisation-and-programmable-money.md`](./tokenisation-and-programmable-money.md).

---

## 3. Key SA regulatory anchors (sourced)

| Fact | Tag | Source |
|---|---|---|
| Crypto assets declared a **financial product** under FAIS (19 Oct 2022) | `[REG]` | `../../research/regulatory/conduct-fais-nca.md` §2.3 |
| CASPs licensed as **FSPs** (sub-category 1.28); ~300 approved by Dec 2025 | `[REG-GUIDE]` | `../../research/regulatory/conduct-fais-nca.md` §2.3; `../../research/neobank-competitors/crypto-casp.md` |
| CASPs are **FICA accountable institutions (item 12)** with a second FIC registration | `[REG]` | `../../research/regulatory/aml-fica.md` §2 |
| **Travel rule** (Directive 9) — originator/beneficiary data, **zero threshold** | `[REG]` | `../../research/regulatory/aml-fica.md` §5 |
| **CARF** effective 1 March 2026 (crypto-asset reporting) | `[REG]` | `../../research/regulatory/tax-governance.md` §4 |
| Crypto carrying a **banking** character would engage the Banks Act | `[STATUTE]` | `../../research/regulatory/banking-licensing.md` §1 |

---

## 4. File index

| File | Contents |
|---|---|
| [`README.md`](./README.md) | This mandate + status taxonomy. |
| [`stablecoin-and-digital-asset-rails.md`](./stablecoin-and-digital-asset-rails.md) | ZAR-backed stablecoins, FSCA CASP licensing, cross-border remittance, constraints; permissibility table. |
| [`tokenisation-and-programmable-money.md`](./tokenisation-and-programmable-money.md) | Tokenised deposits, programmability, SA payments modernisation; design considerations & open questions. |
| [`defi-and-risk.md`](./defi-and-risk.md) | Custody, AML, market, smart-contract risks; conservative go/no-go stance. |

---

## 5. Governance hooks

- **Compliance gates `[REG-GUIDE]`:** FSCA/FICA/POPIA screens required before any money/data surface ships (`.stremiium/governance/workflow-routing.md` §6).
- **$STM / tokenomics-style change precedent:** C13 ruling + cross-council consult is the modelled pattern for token-related changes (same governance doc).
- **Smart contracts:** treated as **deferred** until tooling/stack is ready (mirrors the T-SAOS-001 deferral precedent) — see `defi-and-risk.md` §6.
- Escalation: Captain → SC → Mychael → Board; Critical 1h · High 4h · Medium 24h · Low 72h.

---

## 6. Default stance (summary)

1. **Stablecoin issuance** — ⛔ not-permitted for the bank at launch; needs a bespoke authorisation analysis.
2. **Crypto custodial/exchange services** — ⚠️ required-authorisation (FSCA FSP + FIC item-12 + travel rule).
3. **Client fiat on/off-ramp via a licensed partner** — ⚠️ required-authorisation, partner-dependent.
4. **Tokenised deposits / programmable money** — ✅/⚠️ research-stage; permissible concepts, authorisation questions open.
5. **DeFi protocol participation by the bank** — ⛔ not-permitted at launch (see `defi-and-risk.md` §7).

---

_Codename `Project Umoya` is a working label only._
