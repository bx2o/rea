# 08 — Stremiium Implications

**Entity:** JPMorgan Chase (Kinexys) · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19
**Filter: ADOPT / ADAPT / AVOID / BEAT.**

---

## 1. Decision matrix

| # | Kinexys finding | Decision | Stremiium action |
|---|---|---|---|
| 1 | **Deposit-token + Blockchain Deposit Account (BDA)** design | **ADAPT** | Route the "deposit" leg through a **licensed SA bank partner**; keep `$STM` outside the deposit perimeter |
| 2 | **Dual-ledger bridge** (ledger ∥ core banking, event-driven APIs) | **ADOPT** | Mirror this: Mambu CBS ∥ Polygon ledger, synced via Kafka/event bus |
| 3 | **Programmable Payments** (conditional/scheduled/rule-based) | **ADOPT** | Offer programmable/conditional payouts on `$STM` rails |
| 4 | **Deterministic finality** via permissioned validators | **ADAPT** | Use Polygon (PoS vs ZK-EVM) finality characteristics deliberately; document legal finality |
| 5 | **Permissioned ledger confidentiality** | **AVOID** | Contradicts Stremiium's transparency/PoR value proposition |
| 6 | **JPMD on a public chain (Base)** | **ADAPT** | Public-chain issuance model validates Stremiium's Polygon path; adopt the pattern |
| 7 | **Tokenized Collateral Network + intraday repo** | **ADOPT (Phase 2)** | Tokenised collateral/repo-like liquidity for institutional clients later |
| 8 | **On-chain FX (USD/EUR)** | **ADAPT** | On-chain ZAR/stablecoin FX; transparent spread |
| 9 | **Interchange-funded retail rewards (Chase)** | **ADOPT** | Fund `$STM` card rewards from interchange |
| 10 | **Regulated-perimeter discipline** | **ADOPT** | Keep money-movement inside licensed partners; `$STM` clearly a utility token |
| 11 | **Programmable-payment lock-in** | **ADAPT** | Use integration stickiness, but offer open APIs (don't wall it off) |
| 12 | **No crypto loyalty tier** | **BEAT** | `$STM` status ladder |

---

## 2. Concrete build directives

| Directive | Owner | Rationale |
|---|---|---|
| Mirror **dual-ledger bridge** (Mambu ∥ Polygon) with Kafka events | C16, C11, C06 | Production-proven at JPMorgan scale |
| Implement **programmable payments** on `$STM` | C13, C11 | Conditional liquidity is the flagship Kinexys lesson |
| Define **finality policy** for Polygon (legal + technical) | C01, C13 | Avoid settlement-uncertainty risk |
| Route **deposit leg via licensed SA bank partner** | C01, C16 | Keep inside regulated perimeter (BDA analogue) |
| Tokenise **collateral** for institutional rail (Phase 2) | C13, C10 | TCN lesson; unlocks capital efficiency |
| Fund **`$STM` rewards from interchange** | C10, C09 | Proven US retail model |

---

## 3. Risk register

| Risk | Kinexys lesson | Stremiium control |
|---|---|---|
| Legal finality of on-chain settlement | JPMorgan used permissioned determinism | Document finality; choose chain accordingly |
| Deposit-token characterisation | JPMorgan used bank claim (BDA) | Keep `$STM` utility; deposit leg via bank partner |
| Public-chain exposure | JPMD on Base = new risk | MPC/HSM key management + on-chain analytics |
| Complexity/cost of being your own ledger | JPMorgan has huge resources | Buy CBS/ledger (Mambu) + partner; don't self-build everything |
| Confidentiality vs transparency tension | Permissioned = confidential | Choose transparency (PoR) as a differentiator |

---

## 4. Bottom line

Kinexys is the **institutional settlement-design benchmark**. Stremiium should **ADOPT** the **dual-ledger bridge**, **programmable payments**, **tokenised collateral**, **interchange-funded retail rewards** and **regulated-perimeter discipline**; **ADAPT** the deposit-token model to a **SA bank-partner + public Polygon** architecture with explicit finality policy; **AVOID** permissioned confidentiality (which contradicts Stremiium's transparency story); and **BEAT** JPMorgan on consumer rewards, transparency/PoR, cost efficiency and accessibility.
