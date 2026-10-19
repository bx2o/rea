# 02 — Technology & Systems

**Entity:** JPMorgan Chase (Kinexys) · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19
**REA status:** `not-executed` — no artefact; stack claims from public sources or marked INFERRED/UNKNOWN.

---

## 1. Kinexys Digital Payments — permissioned ledger + BDAs

| Layer | Technology (public) | Purpose | Evidence |
|---|---|---|---|
| Ledger | **Permissioned, EVM-compatible** ledger (historically **Quorum/GoQuorum** lineage) | Bank-money movement between institutions | SEEN |
| Account model | **Blockchain Deposit Account (BDA)** — a deposit account whose balance is represented on the ledger | Bank-money transfers, not outbound payments | SEEN |
| Currencies | **USD, EUR, GBP** (GBP launched London, Apr-2025); on-chain FX USD/EUR live | Multi-currency settlement | SEEN |
| Architecture | **Asynchronous Dual-Ledger Bridge Architecture** — ledger sits *parallel* to core banking, synced via high-speed event-driven APIs | Decoupling ledger from CBS | SEEN (technical commentary) |
| Finality | **Deterministic finality** (permissioned validator set = JPMorgan + authorised participants) | Regulatory/operational certainty | SEEN |
| Confidentiality | Transactions not publicly visible (permissioned) | Institutional privacy | SEEN |

```
   Corporate/Institution A ──┐                         ┌── Institution B
                             ▼                         ▼
                    ┌───────────────────────────────────────┐
                    │   Kinexys permissioned EVM ledger      │
                    │   BDAs (USD/EUR/GBP), on-chain FX      │
                    └──────────────┬────────────────────────┘
                                   │  event-driven API bus (dual-ledger bridge)
                                   ▼
                    ┌───────────────────────────────────────┐
                    │   JPMorgan core banking / fiat rails   │
                    │   (lock fiat ↔ mirror on ledger)       │
                    └───────────────────────────────────────┘
```

**INFERRED state machine (BDA transfer):** `Open BDA → core-banking registers → API bus locks fiat → ledger credits BDA → transfer BDA→BDA (bank-money move) → deterministic finality → reconciliation`.

---

## 2. JPM Coin (Kinexys Digital Payments) — programmable money

| Capability | Detail | Evidence |
|---|---|---|
| Deposit token | Tokenised commercial-bank deposit (claim on JPMorgan) | SEEN |
| Programmable payments | **Conditional release, scheduled transfers, rule-based payments** via smart contracts | SEEN |
| Use cases | On-chain payments, settlement, reconciliation, intraday liquidity, collateral posting | SEEN |
| Always-on | 24/7 near-real-time settlement | SEEN |

---

## 3. Public-chain expansion — JPMD on Base

| Property | Detail | Evidence |
|---|---|---|
| Token | **JPM Deposit Token (JPMD)** — USD deposit-backed | SEEN |
| Chain | **Base** (Ethereum L2, Coinbase) — *public* blockchain | SEEN |
| Access | Institutional clients only | SEEN |
| Significance | **First bank to issue a USD deposit token on a public blockchain** | SEEN (JPMorgan) |
| Interop | DBS Token Services interoperability framework (Nov-2025) to move JPMD across institutions | SEEN |

---

## 4. Tokenised Collateral Network (TCN) & intraday repo

| Product | Detail | Evidence |
|---|---|---|
| **Tokenized Collateral Network (TCN)** | Transfer ownership of tokenised assets as collateral **without moving underlying securities** | SEEN |
| **Intraday repo** | Borrow cash against tokenised collateral; secured intraday financing; avoids balance-sheet usage of overnight repo | SEEN (Kinexys case study) |
| Smart-contract settlement | Precise programmability of settlement/maturity timing | SEEN |

---

## 5. Retail / wealth systems (context)

| System | Detail | Class |
|---|---|---|
| **Chase Mobile** | Retail banking app (US) | SEEN |
| **Wealth Plan** | Automated advice / planning tool | SEEN |
| **Lifestyle Services** | UHNWI/family-office offering (PE co-investment, concierge, aviation finance) | SEEN (reported) |

---

## 6. Gaps / unknowns

| Unknown | Resolving step |
|---|---|
| Exact consensus/validator set & governance | Disclosure / Kinexys docs |
| Smart-contract code (payables, repo) | Not public → verified explorer (for JPMD) / disclosure |
| Throughput/latency benchmarks | Independent benchmark |
| Core-banking vendor behind Kinexys | JPMorgan disclosure (in-house core) |
| Client-side app internals (Chase app) | REA extraction of Chase APK (not supplied) |
