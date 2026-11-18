# T4 summary · roll-up.md

**Task:** T4.0 CASPs & Crypto Wallets Forensics
**Prepared by:** C13 Web3-Finance (roll-up template, pre-filled).

---

## 1. Consolidated findings

| # | Finding | Evidence class | Source |
|---|---|---|---|
| F1 | Three CASP dossiers queued but **empty**. | SEEN | repo `research/casps-and-wallets/` |
| F2 | Luno publishes Merkle-tree Proof-of-Reserves attestations. | SEEN (public) | Luno PoR publications |
| F3 | VALR positions on exchange-grade liquidity/API surface. | INFERRED | public API docs / fees |
| F4 | Flex.one delivers crypto-backed card issuance — directly relevant to Stremiium's card plan. | SEEN (public) | Flex.one programme terms |
| F5 | All three operate under FSCA CASP licensing; Travel Rule (FICA Dir.9) applies. | SEEN (public) | FSCA register / FIC |
| F6 | Custody key architecture (MPC/HSM) is not public → UNKNOWN. | SEEN | gap |

## 2. Decisions recorded

- **D1** — Luno PoR method becomes Stremiium's reference for on-chain transparency (T7.2).
- **D2** — Flex.one card flow is the primary input to Stremiium's card program design.
- **D3** — C01 owns the cross-CASP Travel Rule comparison feeding T7.3.
- **D4** — Custody internals declared UNKNOWN until REA or disclosure.

## 3. Status snapshot

| Sub-task | Status |
|---|---|
| T4.0 (parent) | ACTIVE |
| T4.1 Luno | ACTIVE |
| T4.2 VALR | ACTIVE |
| T4.3 Flex.one | ACTIVE |

## 4. Preliminary strategic read

- **ADOPT** — Merkle PoR transparency; published fee-tier model.
- **ADAPT** — card issuance/settlement for a rands-native neobank + custody combo.
- **AVOID** — custodial single-key concentration risk.
- **BEAT** — CASPs lack fiat banking rails + behavioural rewards in one app.

## 5. Open questions

1. What custody model does each use (custodial vs MPC)? — UNKNOWN.
2. Are Travel Rule obligations fully met by each CASP? — Unknown (C01).
3. What is Flex.one's issuer/BIN arrangement? — UNKNOWN (commercial).
