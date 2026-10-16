# Data Model

**Parent:** [data/README.md](./README.md) · **Status:** Proposed (v0.1) · **As-of:** 2026-10-16.

The **logical data model**: schemas, key tables, relationships and **PII tagging**. This is the persistence view of the [domain model](../domain-model/README.md). Physical DDL is generated from code; this file defines the shape and the governance attributes.

> All schemas, table and column designs are **DESIGN CHOICE**. PII classification is governed by [data-governance](./data-governance.md). Regulatory obligations cross-linked (POPIA/FICA).

---

## 1. Modelling conventions

- **Database-per-service** ([container-diagram](../system-design/container-diagram.md) §3). Schemas below are grouped by context, not by one giant bank database.
- **Identifiers:** opaque `uuid`/ULID primary keys; no externally meaningful sequential IDs for customer-visible entities. *(DESIGN CHOICE)*
- **Money columns:** `amount_minor BIGINT` + `currency CHAR(3)` (never a float — [money-and-currency](../domain-model/money-and-currency.md)).
- **Timestamps:** `timestamptz` in UTC; `created_at`, `updated_at` on mutable rows.
- **Soft delete vs retention:** operational rows follow FICA/POPIA retention, not naive deletes ([data-governance](./data-governance.md)).
- **Every table** carries: `id`, `created_at`, `updated_at` (where mutable), `version` (optimistic locking), and `classification` metadata where PII is present.
- **PII tagging:** columns are annotated; the tag drives masking, access control and residency. Legend below.

### PII classification legend *(DESIGN CHOICE — see [data-governance](./data-governance.md) §5)*

| Tag | Meaning | Handling |
|---|---|---|
| `P0 Public` | No personal info | Open internally |
| `P1 Internal` | Non-PII business data | Internal only |
| `P2 Confidential (PII)` | Personal information | Access-controlled, masked offline, in-region |
| `P3 Restricted (PII)` | Sensitive PII (ID numbers, account numbers, screening data) | Strict least-privilege, encrypted, audited |
| `P4 Special Category` | POPIA special personal information (biometrics, health, criminal/conduct) | Explicit consent/ground; strongest controls |

---

## 2. Schema: `identity` (BC1)

| Table | Key columns | PII |
|---|---|---|
| `principal` | `id`, `party_id`, `status`, `created_at` | P2 |
| `credential` | `id`, `principal_id`, `type` (PASSKEY/OTP), `secret_ref`, `created_at` | P3 (never store raw secrets; refs only) |
| `session` | `id`, `principal_id`, `device_id`, `expires_at` | P2 |
| `device` | `id`, `principal_id`, `fingerprint`, `risk_signals` | P2 |
| `consent_grant` | `id`, `party_id`, `third_party_id`, `scope`, `purpose`, `expires_at`, `status` | P2 |
| `role_assignment` | `id`, `principal_id`, `role`, `scope` | P2 |

---

## 3. Schema: `customer_party` (BC2)

| Table | Key columns | PII |
|---|---|---|
| `party` | `id`, `party_type`, `legal_name`, `status` | P2/P3 |
| `party_identifier` | `id`, `party_id`, `type` (SA_ID/PASSPORT/REG_NO), `value_hash`, `value_enc` | **P3** (ID numbers — hashed for matching, encrypted for retrieval) |
| `party_address` | `id`, `party_id`, `type`, `line1..`, `postal_code` | P2 |
| `party_contact` | `id`, `party_id`, `type` (PHONE/EMAIL), `value` | P2 |
| `party_role` | `id`, `party_id`, `role` (CUSTOMER/BO/DIRECTOR/SIGNATORY) | P1/P2 |
| `customer` | `id`, `party_id`, `customer_type`, `segment`, `status` | P2 |
| `relationship` | `id`, `from_party_id`, `to_party_id`, `type` | P2 |
| `beneficial_ownership` | `id`, `entity_party_id`, `natural_person_party_id`, `percentage` | P2/P3 |

> **Note on identifiers:** store the ID number **encrypted** and a **deterministic hash** for de-duplication/matching — balances POPIA prior-authorisation risk ([data-governance](./data-governance.md) §6) with practicality.

---

## 4. Schema: `onboarding_kyc` (BC3)

| Table | Key columns | PII |
|---|---|---|
| `kyc_profile` | `id`, `customer_id`, `level`, `identity_verified`, `risk_rating`, `verified_at`, `expires_at` | P2/P3 |
| `verification` | `id`, `profile_id`, `method`, `status`, `confidence`, `provider`, `evidence_ref` | P3 |
| `screening_result` | `id`, `profile_id`, `result`, `lists`, `match_confidence`, `screened_at` | P3 |
| `liveness_artefact_ref` | `id`, `profile_id`, `artefact_ref` (hashed), `result` | **P4** (no raw biometrics stored in domain; refs only) |
| `decision` | `id`, `subject_ref`, `outcome`, `reason_codes`, `model_version`, `decided_at`, `actor` | P2 |

---

## 5. Schema: `product_agreement` (BC4)

| Table | Key columns | PII |
|---|---|---|
| `product` | `id`, `family`, `version`, `status` | P1 |
| `product_fee` | `id`, `product_id`, `type`, `amount_minor`, `currency`, `vat_treatment` | P1 |
| `interest_rule` | `id`, `product_id`, `direction`, `rate_bps`, `tiers`, `day_count` | P1 |
| `agreement` | `id`, `customer_id`, `document_type`, `version`, `accepted_at`, `evidence` | P2 |
| `mandate` | `id`, `debtor_account_id`, `creditor_party_id`, `type`, `amount_minor`, `status`, `authenticated_at` | P2/P3 |

---

## 6. Schema: `ledger` (BC5) — append-only

| Table | Key columns | PII |
|---|---|---|
| `ledger_account` | `id`, `type`, `currency`, `owner_account_id` (nullable for internal) | P1 |
| `account` | `id`, `customer_id`, `product_id`, `account_number`, `type`, `status`, `currency` | P2 (account number P3) |
| `journal` | `id`, `transaction_id`, `sequence`, `hash_prev`, `hash_self`, `sealed` | P1 |
| `ledger_entry` | `id`, `journal_id`, `ledger_account_id`, `side`, `amount_minor`, `currency`, `value_date`, `booking_date`, `narrative` | P1 |
| `transaction` | `id`, `type`, `initiator`, `status`, `occurred_at` | P1 |
| `balance_projection` | `account_id`, `current_minor`, `reserved_minor`, `available_minor`, `as_of` | P1/P2 |
| `reservation` | `id`, `account_id`, `amount_minor`, `status`, `expires_at`, `ref` | P1 |

> **Immutability:** `journal` and `ledger_entry` have **no** `updated_at`, and DB grants **revoke UPDATE/DELETE** ([ledger-model](../domain-model/ledger-model.md) §8). `balance_projection` is rebuildable and may be truncated/recomputed.

---

## 7. Schema: `payments` (BC6)

| Table | Key columns | PII |
|---|---|---|
| `payment` | `id`, `debtor_account_id`, `creditor_account_id`, `rail`, `amount_minor`, `currency`, `status`, `end_to_end_id`, `initiated_at`, `settled_at` | P2 |
| `payment_event` | `id`, `payment_id`, `type`, `payload`, `occurred_at` | P1/P2 |
| `beneficiary` | `id`, `customer_id`, `type`, `identifier_enc`, `verified`, `risk_flags` | P3 |
| `return_item` | `id`, `payment_id`, `reason`, `amount_minor`, `returned_at` | P1 |

---

## 8. Schema: `cards` (BC7)

| Table | Key columns | PII |
|---|---|---|
| `card` | `id`, `account_id`, `scheme`, `type`, `status`, `last4`, `token_ref`, `expiry`, `limits` | P2 (PAN tokenised externally; **never store full PAN**) |
| `card_authorisation` | `id`, `card_id`, `amount_minor`, `merchant_category`, `fraud_score`, `decision`, `at` | P1/P2 |
| `card_settlement` | `id`, `card_id`, `settlement_amount_minor`, `batch_ref`, `settled_at` | P1 |

> **PCI scope:** full PAN and sensitive authentication data are **out of our store** (tokenised/handled by PCI-certified parties). This minimises PCI scope. *(DESIGN CHOICE)*

---

## 9. Schema: `credit` (BC8)

| Table | Key columns | PII |
|---|---|---|
| `credit_application` | `id`, `customer_id`, `amount_minor`, `term`, `status`, `submitted_at` | P2 |
| `affordability_assessment` | `id`, `application_id`, `income_minor`, `expenses_minor`, `disposable_minor`, `evidence_ref` | P2/P3 |
| `credit_decision` | `id`, `application_id`, `decision`, `reason_codes`, `model_version`, `limits` | P2 |
| `loan` | `id`, `customer_id`, `principal_minor`, `rate`, `term`, `status`, `disbursed_at` | P2 |
| `instalment` | `id`, `loan_id`, `due_date`, `amount_minor`, `status`, `paid_at` | P2 |
| `bureau_pull` | `id`, `customer_id`, `bureau`, `score`, `raw_ref`, `pulled_at` | P3 |

---

## 10. Schema: `risk_fraud` (BC9)

| Table | Key columns | PII |
|---|---|---|
| `risk_profile` | `id`, `customer_id`, `aml_rating`, `fraud_score`, `indicators`, `last_assessed_at` | P2 |
| `risk_signal` | `id`, `subject_ref`, `type`, `score`, `at` | P2 |
| `risk_decision` | `id`, `subject_ref`, `decision`, `model_version`, `reason_codes` | P2 |

---

## 11. Schema: `aml` (BC10)

| Table | Key columns | PII |
|---|---|---|
| `aml_alert` | `id`, `subject_ref`, `typology`, `severity`, `status`, `raised_at` | P3/P4 (may involve conduct data) |
| `aml_case` | `id`, `alert_id(s)`, `investigator`, `outcome`, `opened_at`, `closed_at` | P3 |
| `regulatory_report` | `id`, `type` (STR/CTR/TPR), `case_id`, `submitted_at`, `reference` | P3 |
| `screening_hit` | `id`, `party_id`, `list`, `confidence`, `disposition` | P3 |

> AML tables are **highly restricted**: separate schema, strict IAM, access audited, and separation from general analytics.

---

## 12. Schema: `servicing` (BC12) & `notification` (BC11)

| Table | Key columns | PII |
|---|---|---|
| `case` | `id`, `type`, `subject_ref`, `status`, `assignee`, `opened_at` | P2 |
| `dispute` | `id`, `payment_id`/`card_id`, `reason`, `status` | P2 |
| `override` | `id`, `actor`, `target`, `justification`, `applied_at`, `second_approver` | P3 (audit-critical) |
| `notification_log` | `id`, `customer_id`, `channel`, `template`, `status`, `sent_at` | P2 |

---

## 13. Reference / master data *(governed by MDM — [data-governance](./data-governance.md) §7)*

| Table | Key columns | Notes |
|---|---|---|
| `currency` | `code`, `minor_units`, `name` | ISO 4217 (ZAR=2) |
| `country` | `iso2`, `name`, `risk_tier` | For screening/cross-border |
| `rail` | `code`, `type`, `limits` | PayShap/EFT/RTC/card |
| `purpose_code` | `code`, `description` | ISO 20022 purpose codes |
| `fee_schedule_version` | `id`, `effective_from` | Versioned pricing |
| `business_calendar` | `date`, `is_business_day`, `cutoffs` | SAST calendar |

---

## 14. Analytical model (lakehouse)

Mirrors the operational schemas as **temporal** tables in the lakehouse:

| Zone | Purpose | PII |
|---|---|---|
| **Bronze** | Raw CDC/event landings | P2–P4 (as-is; access-controlled) |
| **Silver** | Conformed, deduped, typed; PII tokenised/masked | P2 masked |
| **Gold** | Business marts (customers, products, risk, reporting) | De-identified/aggregated preferred |

Detail: [analytics-and-reporting](./analytics-and-reporting.md).

---

## 15. Data quality & integrity rules

- **Referential integrity** enforced via keys + periodic reconciliation jobs (cross-service references checked by pipeline).
- **Uniqueness:** ID-number hash unique per active customer (de-dup); one primary contact per type.
- **Balance integrity:** `balance_projection` periodically recomputed and compared to Σ entries ([ledger-model](../domain-model/ledger-model.md) §7).
- **Freshness SLAs** per domain (operational real-time; reporting daily/monthly).
- **PII column tests:** every `P2–P4` column must be present in the classification registry.

---

## 16. Related reading

- [domain-model/entities](../domain-model/entities.md) — the domain semantics behind these tables.
- [data-governance.md](./data-governance.md) — classification, retention, lawful basis.
- [analytics-and-reporting.md](./analytics-and-reporting.md) — the lakehouse.
- [ledger-model](../domain-model/ledger-model.md) — ledger immutability enforced here.
