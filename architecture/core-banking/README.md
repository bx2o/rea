# Core Banking — Mambu Cloud-Native CBS on AWS `af-south-1` (Cape Town)

**Program:** `SC-REA-NEOBANK-5.0` · **Task:** T7.1 · **Owner:** C16 Banking-Fintech (with C06 Engineering-Infra, C10 Finance-IR)
**Status:** `TARGET DESIGN` — specified, not built. No credentials or secrets appear in this document.

---

## 1. Scope and design intent

Stremiium NeoBank's core banking system (CBS) is **Mambu**, deployed cloud-native on **AWS Cape Town
(`af-south-1`)**. Mambu owns the *system of record* for customer accounts, balances, transactions,
interest and fees. Everything else — payments rails, the rewards engine, the Web3 bridge — is a
satellite that reads from and writes to the CBS through well-defined, idempotent APIs and events.

Why Mambu (the decision mirrors the TymeBank/GoTymeBank pattern analysed under task T3.1):

| Criterion | Mambu | Rationale |
|---|---|---|
| Deployment | SaaS / cloud-native, API-first | No on-prem core, fast product velocity |
| Ledger model | Account-based double-entry with product primitives | Fits SA retail + group/Stokvel products |
| Extensibility | Product/loan/deposit configuration + webhooks | Rewards & rails attach via events |
| Multi-entity | Tenant + legal-entity aware | Supports a future group structure |
| Data residency | Region-pinnable deployment | Required for POPIA (`af-south-1`) |

---

## 2. Account and ledger model

### 2.1 Account hierarchy

```
Legal entity: Stremiium (Pty) Ltd  (Reg. place: Bloemfontein, Free State — registration number withheld)
│
├── Customer
│    ├── Transactional account ── 1..n  Sub-accounts (goal buckets, Stokvel pots)
│    ├── Savings account      ── interest-bearing, tiered
│    ├── Digital-asset ledger account (mirror of on-chain wallet custody view)
│    └── Loyalty token account ($STM internal ledger; on-chain settlement in web3-bridge)
│
├── Product (account template)
│    └── defines: fee schedule, interest tiers, overdraft policy, limit policy, reward multiplier
│
└── Internal (non-customer) accounts
     ├── Suspense / in-flight account  (authorised-but-not-cleared funds)
     ├── Nostro / settlement account   (BankservAfrica & SWIFT positions)
     └── Fee & interest income accounts (GL mappings for C10 reporting)
```

### 2.2 Double-entry principles

- Every customer-facing movement posts **two balanced ledger entries** (debit + credit) against GL
  accounts; the customer balance is a projection of those entries, not a mutable field.
- **Immutability:** posted entries are never edited. Corrections are new, linked transactions
  (`reversalOf` on `StremiiumTransaction` — see [`stremiium-transaction-model.ts`](stremiium-transaction-model.ts)).
- **Value dating:** each entry carries both `bookingDate` (ledger effect) and `valueDate` (economic
  effect) so interest and available-balance logic are unambiguous.

### 2.3 Ledger posting table (canonical map to the transaction model)

| Event | Debit | Credit | `clearingType` |
|---|---|---|---|
| PayShap inbound | Nostro / settlement | Customer transactional | `PayShap` |
| RTC outbound | Customer transactional | Nostro / settlement | `RTC` |
| Internal transfer | Source customer account | Destination customer account | `Internal-Book` |
| $STM buy-back leg | Token settlement (on-chain) | Customer loyalty account | `Polygon-STM` |
| SWIFT import | Correspondent nostro | Customer account (net of fee) | `SWIFT` |

> `clearingType` values are the exact union defined in the transaction model; `camt.053` statements
> from BankservAfrica reconcile against these postings (see [`../payment-rails/README.md`](../payment-rails/README.md)).

---

## 3. Interest & fee engine

### 3.1 Interest

| Aspect | Target design |
|---|---|
| Method | Daily accrual, monthly capitalisation (ACT/365 for ZAR products) |
| Tiers | Balance-band tiered rates configured per product in Mambu |
| Accrual job | Nightly batch at 23:30 SAST, posting accrual to a not-yet-capitalised ledger bucket |
| Capitalisation | First business day of the month; posts to the customer's principal |
| Negative cases | Overdraft interest at product-defined rate; NCA-compliant disclosure |
| Audit | Every rate change is an auditable product-version event, never an in-place edit |

### 3.2 Fees

| Fee class | Trigger | Posting | Model field |
|---|---|---|---|
| Monthly account fee | Product cycle | Customer → Fee income GL | `feeAmount`, `feeCurrency` |
| Rail fee (PayShap/RTC/EFT) | Per instruction | Customer → Fee income GL | `feeBearer` |
| Cross-border fee + FX margin | SWIFT/FinSurv | Customer → Fee income GL | `feeBearer = SHARED` |
| $STM fee discount | When fee settled in `$STM` | 25% reduction applied pre-posting | `feeCurrency = 'STM'` |
| Rewards waiver | BLT tier benefit | Fee borne by `FeeBearer.Stremiium` | `feeBearer = STREMIUM` |

The **$STM 25% fee discount** is applied by the fee engine *before* posting and is recorded in
`railData` for reconciliation; the discount is funded from the token treasury (see
[`../web3-bridge/README.md`](../web3-bridge/README.md) §4).

---

## 4. Kafka event topology

Apache Kafka is the transactional bus linking the CBS, payments, web3 bridge, and the rewards engine.
All topics are keyed by `transactionId` (or `correlationId` for multi-leg flows) to preserve ordering
per transaction.

```
 PRODUCERS                         TOPICS (partitioned by key)                     CONSUMERS
 ─────────                         ───────────────────────────                    ─────────
 Mambu webhooks ──►  cbs.account.events        ──►  Ledger projector → PostgreSQL
 Mambu webhooks ──►  cbs.transaction.events    ──►  Rewards engine, Analytics
 Payments engine ─►  payments.rail.status      ──►  CBS reconciler, Notifications
 Web3 bridge ─────►  web3.chain.settlement     ──►  CBS reconciler, Rewards engine
 Rewards engine ──►  rewards.points.ledger     ──►  Loyalty store, $STM cashback job
 Compliance svc ──►  compliance.reportable     ──►  FIC reporting pipeline
 ALL ─────────────►  audit.worm                ──►  WORM audit sink (immutable)
                                            DLQ  payout/dlq
```

| Topic | Key | Retention | Notes |
|---|---|---|---|
| `cbs.account.events` | `accountId` | 30d | Balance/status changes |
| `cbs.transaction.events` | `transactionId` | 90d | Canonical postings |
| `payments.rail.status` | `transactionId` | 90d | `pacs.002`-style status flips |
| `web3.chain.settlement` | `correlationId` | 365d | On-chain confirmation + tx hash |
| `rewards.points.ledger` | `customerId` | 365d | Points minted/consumed |
| `compliance.reportable` | `transactionId` | 5y | CTR/STR/CARF triggers |

- **Exactly-once:** transactional outbox in PostgreSQL (same DB transaction as the ledger write)
  plus idempotent consumers keyed on `transactionId`.
- **Schema registry:** Avro/JSON-Schema contracts versioned; backward-compatible evolution only.

---

## 5. Reconciliation

Three-way reconciliation runs nightly and on-demand after settlement windows.

```
  CBS ledger (Mambu)  ◄──── match on transactionId + amount + valueDate ────►  Bank statements (camt.053)
          ▲                                                                              ▲
          │                                                                              │
          └──────────── on-chain confirmations (The Graph / RPC) ────────────────────────┘
```

| Reconciliation | Source A | Source B | Matching key | Break handling |
|---|---|---|---|---|
| Rail recon | CBS postings | BankservAfrica `camt.053` | `transactionId`/end-to-end id | Auto-repair if amount within tolerance; else suspense + ops ticket |
| On-chain recon | CBS token ledger | The Graph indexed events | on-chain tx hash | Unmatched → `suspense` account, halt burn job |
| Nostro recon | CBS nostro GL | Bank correspondent statement | value date + amount | Escalate to C10 treasury |
| Fee recon | Fee income GL | Fee engine audit log | `feeAmount`+`feeCurrency` | Investigate discount mis-apply |

All breaks are recorded in an immutable recon ledger with a `BREAK`/`RESOLVED` lifecycle.

---

## 6. Data residency for POPIA

POPIA (Protection of Personal Information Act) governs personal information; Stremiium treats
**residency as a hard constraint**, not a preference.

| Data class | Store | Region | Residency control |
|---|---|---|---|
| Customer PII | PostgreSQL (encrypted) | `af-south-1` | Column-level encryption; no cross-region replica |
| Ledger / transactions | PostgreSQL | `af-south-1` | Same-region backups only |
| Object artefacts (statements, KYC docs) | S3 | `af-south-1` | SSE-KMS with region-pinned CMK |
| Secrets / keys | KMS / HSM | `af-south-1` | No key export; FIPS 140-2 L3 |
| Cache / idempotency | Redis | `af-south-1` | No PII at rest beyond TTL |
| On-chain data | Public chain (Polygon) | Global (inherent) | **No PII on-chain** — only hashes & wallet addresses |

**Cross-border transfers:** any transfer of personal information outside the Republic requires a
POPIA s.72 justification (adequate protection or data-subject consent); the only outbound personal
data path is the travel-rule exchange required by FICA Directive 9, which sends **hashes**, not raw
PII. Mambu's SaaS plane is constrained by contract to `af-south-1` processing; any vendor sub-processor
must be listed in the POPIA register.

---

## 7. Related artefacts

- Transaction contract: [`stremiium-transaction-model.ts`](stremiium-transaction-model.ts)
- REA banking plugin (T1.2): [`stremiium-rea-banking-plugin.ts`](stremiium-rea-banking-plugin.ts)
- Payments: [`../payment-rails/README.md`](../payment-rails/README.md)
- Web3: [`../web3-bridge/README.md`](../web3-bridge/README.md)
- Regulatory matrix: [`../regulatory-compliance/README.md`](../regulatory-compliance/README.md)
