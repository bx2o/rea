# 06 — Regulatory & Risk

**Entity:** JPMorgan Chase (Kinexys) · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19

---

## 1. Regulator relationship map

| Regulator / regime | Scope | JPMorgan position | Evidence |
|---|---|---|---|
| **US Federal Reserve** | Bank holding company supervisor | Primary regulator | SEEN |
| **US OCC** | National bank charter (JPMorgan Chase Bank, N.A.) | Charters | SEEN |
| **FDIC** | Deposit insurance | Insured bank subsidiary | SEEN |
| **SEC / FINRA** | Securities/brokerage | Registered entities | SEEN |
| **CFTC** | Derivatives | Registered where applicable | SEEN |
| **State regulators** | Banking/securities | Multi-state | SEEN |
| **Global regulators** | UK PRA/FCA, EU, APAC etc. | Licensed everywhere it operates | SEEN |
| **BSA/AML + sanctions (OFAC)** | Financial crime | Heavy compliance | SEEN (statutory) |

**Key point:** Kinexys operates **inside a US-chartered bank holding company**, so its DLT activities are wrapped in **bank-grade supervision** — deposits on the ledger are **bank money**, and the BDA model keeps activity inside the regulated perimeter.

---

## 2. DLT / blockchain-specific risk & mitigations

| Risk | Description | JPMorgan control | Evidence |
|---|---|---|---|
| Settlement finality | Ledger finality must be legally final | Permissioned validator set → **deterministic finality** | SEEN |
| Confidentiality | Institutions need privacy | Permissioned ledger (not public) | SEEN |
| Counterparty | Interbank exposure | Bank-regulated counterparties | SEEN |
| Deposit-token legal character | Is a deposit token a "deposit"? | Framed as **bank-money claim** (BDA) | SEEN |
| Public-chain risk (JPMD on Base) | Public blockchains = new risk surface | Institutional-only access | SEEN |
| Smart-contract risk | Bugs in programmable payments/repo | Audited internal contracts (inferred) | INFERRED |
| Cross-border | Multi-jurisdiction FX/settlement | Licensed global footprint | SEEN |
| Tokenised collateral | Legal recognition of tokenised collateral | TCN structure preserves underlying | SEEN |

---

## 3. Why JPMorgan's model is regulatory "safe" (and different from Stremiium)

| Dimension | JPMorgan/Kinexys | Stremiium |
|---|---|---|
| Deposit definition | Deposit token = claim on a **bank** | `$STM` is **not** a deposit claim |
| Supervision | Fed/OCC/global | FSCA/SARB (SA), bank-partner |
| Ledger | Permissioned (+ JPMD public) | Polygon public |
| Privacy | Confidential | Transparent/PoR |
| Money | Bank money | Token + ZAR + stablecoin |

**INFERRED:** JPMorgan can do tokenised deposits because it *is* a licensed deposit-taking bank; Stremiium must route the "deposit" leg through a **licensed SA bank partner** and keep `$STM` clearly **outside** the deposit perimeter.

---

## 4. Regulatory gaps / lessons for Stremiium

| Lesson | Stremiium action |
|---|---|
| Keep settlement inside regulated perimeter (BDA) | Use licensed bank partner for the ZAR/deposit leg |
| Deterministic finality matters legally | Choose chains/settlement with clear finality (Polygon PoS vs ZK-EVM trade-off) |
| Deposit-token ≠ security if it's a bank claim | Avoid designing `$STM` as a deposit or security |
| Public-chain risk is real | Institutional-grade key management (MPC/HSM) for public-chain rails |
| Sanctions/AML at network level | On-chain analytics + Travel Rule (Directive 9) |

---

## 5. Open questions (UNKNOWN)

1. Exact **legal finality** treatment of JPM Coin settlement across jurisdictions.
2. The **validator/participant governance** of the Kinexys permissioned network.
3. JPMD's regulatory characterisation on a **public** chain in each market.
4. Kinexys **capital/risk-weight** treatment of on-ledger balances.
