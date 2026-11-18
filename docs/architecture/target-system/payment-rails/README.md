# Payment Rails — BankservAfrica, ISO 20022, Settlement & SWIFT

**Program:** `SC-REA-NEOBANK-5.0` · **Task:** T7.1 · **Owner:** C16 Banking-Fintech (with C10 Finance-IR, C06 Engineering-Infra)
**Status:** `TARGET DESIGN` — not built. No credentials, participant codes, or keys appear here.

---

## 1. Scope

This document specifies the Stremiium NeoBank **payments engine** and its integration with
**BankservAfrica** (the SA national payment system operator) for domestic rails, and the **SWIFT**
path for cross-border flows. It defines the ISO 20022 message mapping into the canonical
[`StremiiumTransaction`](../core-banking/stremiium-transaction-model.ts) model, settlement/clearing
windows, transaction limits, and failure handling.

Rails in scope:

| Rail | Operator | Type | Category (`RailCategory`) | `clearingType` |
|---|---|---|---|---|
| **PayShap** | BankservAfrica (RPP) | Low-value instant, proxy-based | `INSTANT_RETAIL` | `PayShap` |
| **RTC** | BankservAfrica | Real-Time Clearing (instant EFT) | `INSTANT_RETAIL` | `RTC` |
| **EFT** | BankservAfrica | Batch / next-day (AC) | `BATCH_CLEARING` | *(mapped as `Internal-Book` only for intra-book)* |
| **Internal** | Stremiium CBS | Book transfer | `BOOK_TRANSFER` | `Internal-Book` |
| **SWIFT** | SWIFT network | Cross-border correspondent | `CROSS_BORDER` | `SWIFT` |
| **On-chain** | Polygon | Public-chain settlement | `ON_CHAIN` | `Polygon-STM` |

---

## 2. BankservAfrica integration

```
 ┌──────────────┐    ISO 20022 / BANCS batch      ┌──────────────────────┐   pay.001/pacs.008   ┌─────────────┐
 │ Stremiium     │ ───────────────────────────────► │ BankservAfrica        │ ───────────────────► │ Beneficiary │
 │ Payments      │                                   │ Clearing / RPP / AC   │                       │ institution │
 │ Engine        │ ◄─────────────────────────────── │                       │ ◄─────────────────── │             │
 └──────┬───────┘    pacs.002 status / camt.053      └──────────────────────┘    pacs.002 status    └─────────────┘
        │
        │ normalise → StremiiumTransaction → Kafka `payments.rail.status`
        ▼
 ┌──────────────┐
 │ CBS (Mambu)   │  reconciliation on camt.053 (see core-banking/README §5)
 └──────────────┘
```

- **PayShap:** proxy resolution (mobile/handle → account), request-to-pay and instant credit-push,
  low per-transaction ceiling, always-on clearing.
- **RTC:** instant EFT, 24×7, individual bank ceiling per transaction; status via `pacs.002`.
- **EFT (AC):** batch file exchange with defined cut-offs; settlement next business day.
- **Participation:** Stremiium participates as a **third-party payment provider (TPPP)** via a
  sponsor bank relationship on BankservAfrica; final settlement sits in the sponsor's RTGS position
  (SAMOS). *Participant codes and sponsor identity are operational values, deliberately omitted.*

---

## 3. ISO 20022 message mapping

| ISO 20022 message | Direction | Purpose | Normalised into `StremiiumTransaction` fields |
|---|---|---|---|
| **`pain.001`** (CustomerCreditTransferInitiation) | Outbound (initiate) | Customer payment instruction | `transactionId` (← `PmtInf/PmtInfId`), `amount` (← `Amt/InstdAmt`), `currency`, `sourceAccount` (← `DbtrAcct`), `destinationAccount` (← `CdtrAcct`), `clearingType` (rail-chosen), `complianceMetadata.travelRulePayload` |
| **`pacs.008`** (FIToFICustomerCreditTransfer) | Outbound/Inbound | Interbank credit transfer | `transactionId` (← `TxId`/`EndToEndId`), `amount`, `settledAt` (← `IntrBkSttlmDt`), `sourceAccount.bic` (← `DbtrAgt`), `destinationAccount.bic` (← `CdtrAgt`), `railData.*` |
| **`pacs.002`** (FIToFIPaymentStatusReport) | Inbound | Status of a transfer | `state` (← `TxSts`: `ACSC`→`SETTLED`, `RJCT`→`FAILED`, `PDNG`→`CLEARING`), `railData.reasonCode` |
| **`camt.053`** (BankToCustomerStatement) | Inbound | End-of-cycle statement | Reconciliation feed: match on `EndToEndId`/`AcctSvcrRef`, produce breaks (see `core-banking/README §5`) |

Mapping is performed by a dedicated **translator service** that is the only component aware of raw
ISO 20022 shapes; downstream consumers see only the canonical model.

### 3.1 Status code map (`pacs.002` → `TransactionState`)

| ISO `TxSts` / reason | Canonical `state` |
|---|---|
| `PDNG` | `CLEARING` |
| `ACSC` / `ACSP` | `SETTLED` |
| `ACTC` | `AUTHORISED` |
| `RJCT` | `FAILED` |
| `ACCP` (accepted, no settlement yet) | `SUBMITTED` |
| Reversal reason (e.g. `AM04` insufficient funds) | `REVERSED` / `FAILED` |

---

## 4. Settlement and clearing windows (SAST)

| Rail | Cut-offs / windows | Settlement | Availability |
|---|---|---|---|
| PayShap | Continuous | Near-instant, real-time | 24×7 |
| RTC | Continuous | Real-time | 24×7 |
| EFT (AC) | Batch cut-offs (morning / midday / evening) | Same-day or next business day (T+1) | Business days |
| RTGS / SAMOS | Per SARB windows | Gross, real-time during windows | Business days |
| SWIFT | Per correspondent cut-offs | T+0…T+2 depending on corridor | Business days |
| On-chain (`Polygon-STM`) | Continuous (block time) | Finality per chain | 24×7 |

*Exact cut-off times are set by BankservAfrica/SARB operating rules and are configuration, not code.*

---

## 5. Transaction limits

Limits are layered: product-level, rail-level, and customer-risk-level (the effective limit is the
minimum of all applicable).

| Rail | Typical envelope (target policy) | Notes |
|---|---|---|
| PayShap | Low per-tx ceiling; daily aggregate cap | Proxy-based; target low-value retail |
| RTC | Per-tx ceiling set by BankservAfrica rules | Instant EFT |
| EFT | Batch, high aggregate | Next-day; requires cleared funds |
| Internal-Book | Product-configured | Instant, no rail ceiling |
| SWIFT | High-value, FinSurv-gated | Requires Exchange-Control handling (see §7) |
| On-chain | Chain + treasury-liquidity constrained | Governed by `$STM` treasury policy |

> Limit changes are policy-config changes with maker–checker approval (C16 + C01), never ad-hoc.

---

## 6. Failure handling

```
 INITIATE ──► AUTHORISED ──► SUBMITTED ──► CLEARING ──► SETTLED
                                    │            │
                                    ▼            ▼
                                 FAILED       (pacs.002 RJCT)
                                    │
                                    ▼
                          REVERSED (if funds moved then recalled)
```

| Failure mode | Detection | Handling |
|---|---|---|
| Proxy unresolved (PayShap) | Pre-submit lookup failure | Reject to customer with reason, no ledger post |
| Timeout with unknown outcome | No `pacs.002` within SLA | Query status; keep funds in `suspense`; never double-post (idempotency key) |
| Insufficient funds (`AM04`) | `pacs.002` RJCT | `state = FAILED`, release suspense, notify |
| Duplicate submission | Duplicate `EndToEndId`/idempotency key | Deduplicate at translator; single post |
| Reconciliation break | Nightly `camt.053` recon | Suspense + ops ticket; auto-repair within tolerance |
| On-chain reorg | RPC/The Graph confirmation depth | Require N confirmations before marking `SETTLED` |

All failures emit to `payments.rail.status` and, where reportable, to `compliance.reportable`.

---

## 7. SWIFT cross-border path

```
 Customer ─► API ─► Payments engine ─► FinSurv check (SARB Exchange Control)
                                          │  SDA (≤ R1m/yr) / FCA (≤ R10m/yr) allowances
                                          ▼
                              SWIFT gpi (ISO 20022 pacs.008 today; MT103 legacy)
                                          │
                                          ▼
                              Correspondent / beneficiary bank ─► local clearing
```

| Aspect | Design |
|---|---|
| Messaging | ISO 20022 `pacs.008` (MT103/MT202 legacy fallback during coexistence) |
| Data | Travel-rule envelope + FinSurv allowances attached to `complianceMetadata` |
| Capex controls | SDA (single discretionary allowance) and FCA (foreign capital allowance) checks before release |
| Tracking | SWIFT gpi UETR stored in `railData` for end-to-end tracking |
| Reconciliation | Correspondent statement vs nostro GL (CBS recon) |

> **Regulatory note:** Exchange-Control approval references (`exchangeControlApprovalRef`) must be
> present before a `SWIFT` transaction is released. Cross-border reporting feeds SARB FinSurv.
> See [`../regulatory-compliance/README.md`](../regulatory-compliance/README.md).

---

## 8. Related artefacts

- Canonical model: [`../core-banking/stremiium-transaction-model.ts`](../core-banking/stremiium-transaction-model.ts)
- Core banking + recon: [`../core-banking/README.md`](../core-banking/README.md)
- Web3 settlement leg: [`../web3-bridge/README.md`](../web3-bridge/README.md)
- Regulatory controls: [`../regulatory-compliance/README.md`](../regulatory-compliance/README.md)
