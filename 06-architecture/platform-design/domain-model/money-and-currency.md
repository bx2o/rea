# Money & Currency

**Parent:** [domain-model/README.md](./README.md) · **Status:** Proposed (v0.1) · **Owner:** Money Core team.

How Umoya represents and manipulates monetary value. This is a **shared kernel** ([bounded-contexts](../system-design/bounded-contexts.md) §7): every context that touches money uses these rules.

> All rules below are **DESIGN CHOICE**. ZAR statutory/fiscal context (VAT, tax rates, STT) is cross-linked from [tax-governance](../../research/regulatory/tax-governance.md), not restated.

---

## 1. Base currency

**ZAR (South African Rand, ISO 4217) is the base and only launch currency.** *(DESIGN CHOICE)*

- All customer balances, fees, interest and reporting at launch are ZAR.
- The ledger is **currency-aware** (every entry carries a currency) so multi-currency can be enabled later **without a schema change**. See §5.
- South Africa's rand uses **2 minor units** (cents): `R1.00 = 100 cents`. ISO 4217 numeric code `710`, alphabetic `ZAR`, symbol `R`.

> **Why ZAR-first (DESIGN CHOICE):** the product, rails (PayShap/EFT/RTC), deposit insurance (R100,000 limit — [landscape](../../research/sa-banking-landscape/README.md) §4) and conduct context are all ZAR-native. FX adds regulatory (AD/ADLA — [banking-licensing](../../research/regulatory/banking-licensing.md) §6) and operational complexity that should not gate launch.

---

## 2. The `Money` value object

**Every monetary value in the system is a `Money` value object. Floats are forbidden.**

```
Money {
  minorUnits: bigint     // integer count of minor units (e.g. cents)
  currency:   Currency   // ISO 4217 (ZAR at launch)
}
```

Rules:
- **Integer minor units only.** `R12.34` is stored as `1234` cents. No `float`/`double` anywhere in the money path. *(DESIGN CHOICE)*
- **Immutable.** Arithmetic returns a new `Money`.
- **Currency-checked.** Adding two different currencies without an explicit FX conversion is a compile/runtime error. *(DESIGN CHOICE)*
- **No implicit scaling.** Scale is defined per currency (ZAR = 2).
- **Serialisation:** always send currency with the amount (never a bare number) in APIs/events: `{ "amountMinor": 1234, "currency": "ZAR" }`.

> **Why no decimals/float:** binary floating point cannot represent `0.10` exactly, producing rounding errors that compound across millions of transactions. Integers are exact.

---

## 3. Rounding

Rounding must be **explicit, deterministic and documented per operation**. *(DESIGN CHOICE)*

| Operation | Rounding rule | Rationale |
|---|---|---|
| Fee calculation (percentage) | **Half-up** to minor unit | Predictable, common SA practice for customer-facing fees. *(DESIGN CHOICE)* |
| Interest accrual | Compute in higher precision, round **half-up** only at capitalisation | Avoid rounding drift across daily accruals. |
| FX conversion | Round to target minor unit, **half-up**; disclosed to customer | Consistency; disclose rate + fee. |
| Tax (VAT) | Round per SARS-compliant method; **UNVERIFIED** exact rounding rule | Cross-link [tax-governance](../../research/regulatory/tax-governance.md) §2. |
| Statement/interest aggregation | Accumulate unrounded, round at boundaries | Minimise drift. |
| Split of a payment | Largest-remainder allocation so parts sum to the whole | Never lose/create a cent. |

**Invariant:** after any rounding, the sum of the rounded parts for a single transaction still balances (use a rounding-adjustment entry if needed). *(DESIGN CHOICE)*

---

## 4. Arithmetic & safety rules

- **Addition/subtraction:** same currency only; result preserves currency.
- **Multiplication by a scalar (rate):** produces an internal high-precision value; rounding only at an explicit boundary.
- **Allocation (split):** use largest-remainder; the parts must sum exactly to the original.
- **Overflow:** use 64-bit integers; add bounds checks; ZAR amounts fit comfortably within `bigint` for any plausible institutional value.
- **Comparison:** exact on `(minorUnits, currency)`.
- **Negative amounts:** represent direction via the ledger `side` (DEBIT/CREDIT) or via signed balance semantics; never mix conventions in one context. In the ledger ([ledger-model](./ledger-model.md)), `amount` is **always positive** and `side` carries direction.

---

## 5. Multi-currency readiness (future-proofing, not launch scope)

Even though we launch ZAR-only, we design so FX can be added as a **configuration + new posting types**, not a rewrite.

| Provision | How | Status |
|---|---|---|
| Currency on every entry | `LedgerEntry.currency` present from day one. | In model |
| Per-currency balance invariant | Σ debit = Σ credit **per currency**. | In model |
| FX position account | A ledger account tracking our net FX exposure so cross-currency journals never unbalance. | Modelled, unused at launch |
| FX rate source & audit | Store the rate, source, timestamp used for each conversion (audit requirement). | Modelled |
| Customer multi-currency wallet | Optional future product; separate ledgers per currency. | Future |
| Regulatory gate | Cross-border/forex requires AD/ADLA status — **separate permission** ([banking-licensing](../../research/regulatory/banking-licensing.md) §6). | Blocked until licensed |

**Cross-currency posting (future) sketch:** an FX is *two* balanced journals — one per currency — joined by an FX position account that absorbs the rate difference at the mid-rate, with a documented spread. This keeps each currency's books independently balanced.

---

## 6. Interest, fees and income

- **Interest** is computed on a documented basis (e.g. daily-balance × rate/365 or 360) — the exact convention is a **product design choice** and must be disclosed (NCA/conduct — [conduct-fais-nca](../../research/regulatory/conduct-fais-nca.md)). *(DESIGN CHOICE: document the day-count convention per product.)*
- **Fees** are fixed or percentage-based, defined on the Product ([entities](./entities.md) §9), and posted via the fee transaction rule ([ledger-model](./ledger-model.md) §5).
- **VAT treatment:** interest is largely exempt while fee-based income is typically standard-rated; the product/fee model must support **mixed VAT treatment** and apportionment ([tax-governance](../../research/regulatory/tax-governance.md) §2). *(Flagged: confirm exact treatment with tax advisors — **UNVERIFIED**.)*

---

## 7. Regulatory & disclosure touchpoints

| Topic | Where handled | Source |
|---|---|---|
| Deposit insurance limit (R100,000/depositor) | Customer comms & disclosure | [landscape](../../research/sa-banking-landscape/README.md) §4 |
| Disclosed fees, interest, charges | Product/Agreement model | [conduct-fais-nca](../../research/regulatory/conduct-fais-nca.md) |
| VAT & apportionment | Fee model + finance | [tax-governance](../../research/regulatory/tax-governance.md) §2 |
| AEOI reporting (CRS/FATCA/CARF) | Data/reporting | [tax-governance](../../research/regulatory/tax-governance.md) §4 |
| FX / exchange control | Future, gated on AD/ADLA | [banking-licensing](../../research/regulatory/banking-licensing.md) §6 |

---

## 8. Anti-patterns we forbid

- `double`/`float`/`Decimal` with unbounded scale in the money path.
- Storing amounts without currency.
- Backend rounding different from what is disclosed to the customer.
- Summing across currencies without an FX conversion and an audit record.
- Silent rounding during reconciliation (always post an explicit adjustment).

---

## 9. Related reading

- [ledger-model.md](./ledger-model.md) — where `Money` is posted.
- [entities.md](./entities.md) — product/ fee/interest models.
- [system-design/bounded-contexts.md](../system-design/bounded-contexts.md) §7 — the shared kernel.
- [tax-governance](../../research/regulatory/tax-governance.md) — VAT/STT/AEOI context.
