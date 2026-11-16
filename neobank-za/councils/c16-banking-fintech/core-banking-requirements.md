# Core Banking Requirements (C16)

**Owner:** C16 Banking-Fintech Captain · **Contributors:** C11 (build) · **Status:** Proposed (v0.1) · **As-of:** 2026-10-16.

Functional requirements for the **core ledger, accounts and payments** domain. This file states *what the bank must be able to do* in banking terms; the *how* lives in the architecture set — specifically the double-entry [`ledger-model.md`](../../architecture/domain-model/ledger-model.md), the [`bounded-contexts.md`](../../architecture/system-design/bounded-contexts.md) (BC4/BC5/BC6/BC7) and [`payments-rails.md`](../../architecture/integrations/payments-rails.md).

Requirements are **DESIGN CHOICE** unless they implement a statute/reg, in which case the driver is cited. Priorities: **P0** = launch-critical, **P1** = soon after, **P2** = later phase.

---

## 1. Ledger (BC5)

| ID | Requirement | Driver | Priority |
|---|---|---|---|
| FR-LED-01 | The ledger shall be **double-entry**: every transaction posts balanced debits and credits (Σ debit = Σ credit per currency). | [`ledger-model`](../../architecture/domain-model/ledger-model.md) §1 | P0 |
| FR-LED-02 | Customer deposit balances shall be modelled as **liabilities** of the bank; settlement/cash as **assets**. | Accounting correctness | P0 |
| FR-LED-03 | Ledger entries shall be **immutable** (no UPDATE/DELETE); corrections are **compensating entries**. | Audit / [`ledger-model`](../../architecture/domain-model/ledger-model.md) §8 | P0 |
| FR-LED-04 | The ledger shall be **hash-chained** (tamper-evident) with periodic seals. | Integrity | P0 |
| FR-LED-05 | Postings shall be atomic (all-or-nothing, ACID) and reject out-of-balance transactions at write time. | [`ledger-model`](../../architecture/domain-model/ledger-model.md) §12 | P0 |
| FR-LED-06 | Balances shall be **derived** (current/reserved/available) and rebuildable from entries. | [`ledger-model`](../../architecture/domain-model/ledger-model.md) §6 | P0 |
| FR-LED-07 | Duplicate `transactionId` shall be rejected (idempotency at the ledger). | Idempotency | P0 |
| FR-LED-08 | Every entry shall be **attributed** to an actor and a business cause. | Audit / FICA record-keeping | P0 |
| FR-LED-09 | Posting rules shall be deterministic **per transaction type** and unit-tested (deposit, transfer, payment, fee, interest, loan, card, reversal). | [`ledger-model`](../../architecture/domain-model/ledger-model.md) §5 | P0 |
| FR-LED-10 | Retention of ledger records shall meet FICA and prudent-accounting expectations (**≥ 5 years** `[CONFIRM]`). | `[STATUTE/CONFIRM]` ([`aml-fica`](../../research/regulatory/aml-fica.md) §3.3) | P0 |
| FR-LED-11 | The ledger shall be **currency-aware** (ZAR-only at launch; per-currency balance invariant). | [`ledger-model`](../../architecture/domain-model/ledger-model.md) §11 | P0 |

---

## 2. Accounts (BC4)

| ID | Requirement | Driver | Priority |
|---|---|---|---|
| FR-ACC-01 | The bank shall offer customer-facing **accounts** (e.g. current, savings, "pockets"), each mapping to a dedicated ledger account. | [`ledger-model`](../../architecture/domain-model/ledger-model.md) §3 | P0 |
| FR-ACC-02 | Account lifecycle shall be supported: **open, block, freeze, close**. | Operations | P0 |
| FR-ACC-03 | **Holds/reservations** shall reduce available balance without changing current balance. | [`ledger-model`](../../architecture/domain-model/ledger-model.md) §6 | P0 |
| FR-ACC-04 | **Fees** shall be charged per the product/agreement and posted as income. | [`ledger-model`](../../architecture/domain-model/ledger-model.md) §5 | P0 |
| FR-ACC-05 | **Interest** shall accrue and capitalise per product terms (deposit interest as expense→accrual→balance). | [`ledger-model`](../../architecture/domain-model/ledger-model.md) §5 | P1 |
| FR-ACC-06 | Products, pricing and agreements shall be **versioned**; accepted terms captured as the agreement of record. | BC4 | P0 |
| FR-ACC-07 | Customers shall have **statements** and transaction history reconstructable for any past date. | [`ledger-model`](../../architecture/domain-model/ledger-model.md) §9 | P0 |
| FR-ACC-08 | **Transfer limits** (per-transaction, daily, channel) shall be configurable and enforced. | Risk / fraud | P0 |
| FR-ACC-09 | **DebiCheck mandates** shall be captured with authentication evidence for collections. | [`payments-rails`](../../architecture/integrations/payments-rails.md) §4 | P1 |
| FR-ACC-10 | Account statements/confirmations shall satisfy **NCA/CPA/Code of Banking Practice** disclosure expectations. | `[STATUTE/INDUSTRY]` | P1 |

---

## 3. Payments (BC6 / BC7)

| ID | Requirement | Driver | Priority |
|---|---|---|---|
| FR-PAY-01 | The bank shall support **instant P2P** (PayShap, alias/ShapID resolution) | [`payments-rails`](../../architecture/integrations/payments-rails.md) §8 | P0 |
| FR-PAY-02 | The bank shall support **instant P2B** (merchant, card or QR) | [`payments-rails`](../../architecture/integrations/payments-rails.md) §8 | P0 |
| FR-PAY-03 | The bank shall support **bulk account-to-account credits (EFT)** with per-line status and returns. | [`payments-rails`](../../architecture/integrations/payments-rails.md) §3.2 | P0 |
| FR-PAY-04 | The bank shall support **collections (AC + DebiCheck)** with authenticated mandates. | [`payments-rails`](../../architecture/integrations/payments-rails.md) §4 | P1 |
| FR-PAY-05 | The bank shall support **debit cards** (issuance, authorisation, clearing, tokenisation). | [`payments-rails`](../../architecture/integrations/payments-rails.md) §3.4 | P0 |
| FR-PAY-06 | Every payment shall carry an **idempotency key** and the rail **end-to-end ID**; unknown status shall never be treated as failure. | [`api-standards`](../c11-dev-engineering/api-standards.md) §4 | P0 |
| FR-PAY-07 | Payments shall support **returns, recalls and reversals** via compensating ledger entries. | [`ledger-model`](../../architecture/domain-model/ledger-model.md) §5, §8 | P0 |
| FR-PAY-08 | Outbound payments shall **reserve funds** (hold) before submission and clear the hold on settlement. | [`payments-rails`](../../architecture/integrations/payments-rails.md) §5 | P0 |
| FR-PAY-09 | Rail adapters shall be **ACLs**; the sponsor shall be **configurable**, not hard-coded (D-001 → direct transition). | [`payments-rails`](../../architecture/integrations/payments-rails.md) §7 | P0 |
| FR-PAY-10 | Payments shall be **screened** (sanctions/TFS) and **scored** (fraud) before submission. | `[STATUTE]` FICA; fraud | P0 |
| FR-PAY-11 | Payment messages shall map to **ISO 20022** (end-to-end ID, debtor/creditor, purpose, remittance). | [`payments-rails`](../../architecture/integrations/payments-rails.md) §6 | P0 |
| FR-PAY-12 | **Cash-in/out (CICO)** via agents shall be supported (settlement, float, agent fraud controls). | [`payments-rails`](../../architecture/integrations/payments-rails.md) §3.5 | P2 |
| FR-PAY-13 | **Cross-border** payments shall be gated on **AD/ADLA** and exchange-control compliance. | `[REG-GUIDE]` ([`banking-licensing`](../../research/regulatory/banking-licensing.md) §6) | P3 |

---

## 4. Reconciliation & settlement

| ID | Requirement | Driver | Priority |
|---|---|---|---|
| FR-REC-01 | The bank shall **continuously reconcile** the settlement asset against sponsor/SARB statements. | [`ledger-model`](../../architecture/domain-model/ledger-model.md) §7 | P0 |
| FR-REC-02 | The bank shall reconcile rail advice files (PayShap/EFT/RTC) and card clearing/settlement files, producing break lists. | [`ledger-model`](../../architecture/domain-model/ledger-model.md) §7 | P0 |
| FR-REC-03 | A **suspense account** shall hold unmatched items and trend to zero; breaks raise first-class events/cases. | [`ledger-model`](../../architecture/domain-model/ledger-model.md) §7 | P0 |
| FR-REC-04 | Reconciliation shall produce **evidence for C10's general-ledger truth** and BA-return inputs. | [`../c10-finance-cfo/README.md`](../c10-finance-cfo/README.md) | P0 |

---

## 5. Non-functional (banking lens)

| ID | Requirement | Driver | Priority |
|---|---|---|---|
| NFR-B-01 | The ledger/payments shall meet the tier availability SLOs (**T0 99.99%**). | [`non-functional-requirements`](../../architecture/system-design/non-functional-requirements.md) | P0 |
| NFR-B-02 | Payments throughput ≥ **200 TPS** sustained / ≥ **1,000** burst; ledger ≥ **1,000**; card ≥ **300/1,500**. `[TARGET]` | [`non-functional-requirements`](../../architecture/system-design/non-functional-requirements.md) | P0 |
| NFR-B-03 | Money-movement data shall have **RPO ≈ 0**, **RTO ≤ 15 min** (T0). | [`non-functional-requirements`](../../architecture/system-design/non-functional-requirements.md) | P0 |
| NFR-B-04 | The customer channel shall degrade gracefully under **load-shedding/connectivity loss**. | SA context | P0 |
| NFR-B-05 | All money/data shall be processed in the **SA region** (D-002). | POPIA / D-002 | P0 |

---

## 6. Traceability

```text
FR-LED-*  -> BC5 Ledger        -> C11 Money Core team
FR-ACC-*  -> BC4 Product       -> C11 Money Core team
FR-PAY-*  -> BC6/BC7 Payments  -> C11 Payments team
FR-REC-*  -> BC5 + rails       -> C11 Money Core + Operations
NFR-B-*   -> C06 platform      -> C06/C11
```

Each requirement becomes one or more services in the C11 [`service-catalogue.md`](../c11-dev-engineering/service-catalogue.md).

---

## 7. Open items / unknowns

- `[UNVERIFIED]` Rail-specific rules (PayShap limits, RTC thresholds, scheme specs) are not contracted.
- `[CONFIRM]` Exact FICA record-retention period for ledger/CDD records.
- `[UNKNOWN]` Whether launch requires **savings interest** (affects FR-ACC-05 priority).
- `[UNKNOWN]` Card scheme route affects FR-PAY-05 delivery pre-licence.

_Codename `Project Umoya` is a working label only._
