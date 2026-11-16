# C13 — DeFi & Risk (Conservative Go/No-Go)

- **Owner:** C13 Web3-Finance Captain · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Related:** [`stablecoin-and-digital-asset-rails.md`](./stablecoin-and-digital-asset-rails.md), [`tokenisation-and-programmable-money.md`](./tokenisation-and-programmable-money.md)

> Status legend: ✅ Permissible · ⚠️ Required-authorisation · ⛔ Not-permitted. Risk entries here use the register format in `../../templates/risk-entry.md`.

---

## 1. Purpose & stance

This file catalogs the risks of blockchain/DeFi exposure and states a **conservative default**: **the bank does not participate in DeFi at launch.** Where a blockchain-adjacent capability is contemplated, it must clear the risk bar below *and* the authorisation bar in the sibling files.

The stance is deliberately asymmetric: the **downside** of a DeFi incident for a licensed bank (regulatory sanction, capital loss, reputational collapse) vastly outweighs the **upside** of a marginal yield or novelty feature.

---

## 2. Risk register (summary)

| ID | Risk | Category | Likelihood | Impact | Rating | Status |
|---|---|---|---|---|---|---|
| DEFI-01 | Custody / key loss | Operational | M | H | High | Mitigate or avoid |
| DEFI-02 | AML / sanctions circumvention | Compliance | M | H | High | Avoid (unlicensed venues) |
| DEFI-03 | Market / depeg / volatility | Market | H | H | High | Avoid or hard limits |
| DEFI-04 | Smart-contract exploit | Technical | M | H | High | Avoid at launch |
| DEFI-05 | Protocol / counterparty failure | Credit | M | H | High | Avoid |
| DEFI-06 | Legal/regulatory uncertainty & enforcement | Compliance | H | H | High | Avoid pending clarity |
| DEFI-07 | Data/POPIA (on-chain personal data) | Privacy | M | M | Medium | Design control |

(Format aligns to `../../templates/risk-entry.md`; likelihood/impact are `[ASSUMPTION]` qualitative calls.)

---

## 3. Custody risk (DEFI-01)

- **Key management:** a private key is a single point of total loss. Institutional standard requires **HSM/MPC**, multi-party approval, and separation of duties (interlock C12).
- **Third-party custody:** relying on a custody service imports *their* operational, legal and bankruptcy risk.
- **On-chain vs off-chain:** on-chain holdings are, by design, difficult to recover; this conflicts with a bank's duty to correct errors and fraud.
- **Control:** if any custody is undertaken, it must meet FSCA/FIC obligations and a documented key-management standard `[REG]`.

---

## 4. AML / compliance risk (DEFI-02)

- **Travel rule** applies to all crypto transfers (zero threshold) `[REG]` (`../../research/regulatory/aml-fica.md` §5).
- **Permissionless DeFi venues** often lack the counterparty identity data the travel rule requires — making compliant participation structurally hard.
- **Sanctions/TFS** screening on-chain counterparties is immature; a bank cannot knowingly transact with a designated party `[REG]`.
- **Control:** no interaction with venues that cannot supply originator/beneficiary data. Default: ⛔ for permissionless DeFi.

---

## 5. Market risk (DEFI-03)

- **Depeg:** a stablecoin can lose its peg; reserve opacity means the bank cannot always assess backing.
- **Volatility:** crypto-collateral values can gap; liquidation mechanisms can fail in stress.
- **Correlation:** crypto drawdowns often coincide with broader risk-off, i.e. exactly when the bank needs liquidity.
- **Control:** hard exposure limits if any holding is permitted; capital/liquidity caution (`../c10-finance-cfo/capital-and-funding.md` §5).

---

## 6. Smart-contract risk (DEFI-04)

- **Exploits:** re-entrancy, oracle manipulation, access-control bugs, upgradeable-proxy abuse.
- **Verification gap:** even audited contracts can fail; audits are point-in-time, not guarantees.
- **Immutability vs fixability:** a bank needs to patch and reverse; many contracts cannot be.
- **Governance risk:** a protocol's governance token holders may change rules overnight.
- **Control:** treat smart contracts as **deferred** — consistent with the program's earlier deferral of smart-contract work until tooling/stack readiness (`.stremiium/governance/workflow-routing.md` §6, T-SAOS-001 precedent).

---

## 7. Consolidated go/no-go stance

| Capability | Stance | Rationale |
|---|---|---|
| Bank operating a DeFi position for proprietary yield | **NO-GO** | market + smart-contract + AML risk; regulatory uncertainty |
| Bank lending against crypto collateral | **NO-GO** (launch) | volatility + custody + enforcement risk |
| Client-directed crypto custody | **CONDITIONAL** | only with full FSP + FIC + travel-rule stack and custody controls |
| Stablecoin holdings (treasury) | **CONDITIONAL / minimal** | only with PA view + hard limits |
| Tokenised-deposit prototype (closed loop) | **GO (research)** | low-risk, on-balance-sheet, aligns with PEM |
| Licensed-partner on/off-ramp | **CONDITIONAL** | bounded role; partner holds the crypto licence |

---

## 8. Decision rule

A blockchain-adjacent capability advances **only if all of the following are true**:

1. **Permissible** (or authorisation obtainable) per `stablecoin-and-digital-asset-rails.md`.
2. **Risk-accepted** at the appropriate governance level with a documented treatment.
3. **C01 sign-off** on the FSCA/FIC/POPIA/CARF stack.
4. **C10 sign-off** on capital/liquidity treatment.
5. **C12 sign-off** on custody/key-management controls.
6. **Reversibility** demonstrated (exit/failure plan).

If any bar fails → **no-go**.

---

## 9. Open items / unknowns

- `[UNKNOWN]` PA treatment of stablecoin holdings and crypto-collateral lending.
- `[UNKNOWN]` Travel-rule feasibility for any permissioned DeFi variant.
- `[UNKNOWN]` Evolution of enforcement against unlicensed operators (`../../research/neobank-competitors/crypto-casp.md`).

---

## 10. Cross-links

- Rails → [`stablecoin-and-digital-asset-rails.md`](./stablecoin-and-digital-asset-rails.md)
- Programmability → [`tokenisation-and-programmable-money.md`](./tokenisation-and-programmable-money.md)
- Risk template → `../../templates/risk-entry.md`
- Governance hooks → `.stremiium/governance/workflow-routing.md` §6
