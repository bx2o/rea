# API Standards (C11)

**Owner:** C11 Dev-Engineering Captain · **Status:** Proposed (v0.1) · **As-of:** 2026-10-16.

The contract rules for every API C11 exposes, internal and external. These standards exist because **in a bank an API is a control surface**: it is where money moves, where consent is captured, and where an auditor looks. Everything here is a **DESIGN CHOICE** unless marked `[STATUTE]` / `[REG]`.

Related: [`../../architecture/system-design/component-map.md`](../../architecture/system-design/component-map.md) · [`../../architecture/integrations/payments-rails.md`](../../architecture/integrations/payments-rails.md) §6 (ISO 20022) · [`engineering-handbook.md`](./engineering-handbook.md).

---

## 1. Style & principles

| Principle | Rule |
|---|---|
| **Contract-first** | Every API is specified in **OpenAPI 3.x** *before* implementation; the spec is the review artefact. |
| **Resource-oriented** | REST over HTTP/JSON for synchronous internal/external APIs. |
| **One writer** | Cross-context calls go through APIs/events; **no direct database access across contexts** ([`bounded-contexts.md`](../../architecture/system-design/bounded-contexts.md) §9). |
| **Explicit over implicit** | Money amounts always carry `amount` (minor units) **and** `currency`. |
| **Least data** | Return only what the caller needs (POPIA data-minimisation in code). |
| **Idempotent by default** | Any state-changing call that could be retried accepts an idempotency key (§4). |
| **Fail safe** | On unknown state, do not assume success — reject or hold, never double-post ([`../../architecture/security/README.md`](../../architecture/security/README.md) P9). |

---

## 2. Resource & URL conventions

| Convention | Rule | Example |
|---|---|---|
| Base | Versioned path prefix | `/v1/...` |
| Collections | Plural nouns | `/v1/payments`, `/v1/accounts` |
| Resource | Stable ID, never a DB key | `/v1/payments/{paymentId}` |
| Actions | Sub-resource where possible; avoid verbs | `POST /v1/payments/{id}/recall` (acceptable action sub-resource) |
| Filtering | Query params, cursor pagination | `?status=settled&after=<cursor>&limit=50` |
| Naming | `camelCase` in JSON; `kebab-case` in URLs | — |

---

## 3. Versioning

| Aspect | Rule |
|---|---|
| Scheme | **URI major version** (`/v1`, `/v2`) for breaking changes |
| Non-breaking | Additive fields, new optional params — no version bump |
| Breaking | Field removal/rename, type/semantics change, auth change → new major version |
| Deprecation | Announced in the spec + `Deprecation`/`Sunset` headers; ≥ 1 release cycle `[TARGET]` |
| Compatibility | Consumers must ignore unknown fields (Postel-ish tolerance on read) |

> **Internal vs external.** Internal service APIs may evolve faster; **external partner APIs** (rails, sponsor, partners) are held to a stricter backward-compatibility bar because a partner's release cycle is not ours.

---

## 4. Idempotency (money-critical)

This is the single most important API rule for a bank.

| Rule | Detail |
|---|---|
| Idempotency key | All `POST` that move money or create a resource accept `Idempotency-Key` (client-generated, UUID). |
| Server behaviour | Same key + same payload → return the **original** response; same key + different payload → `409 Conflict`. |
| Storage window | Keys retained ≥ 24h `[ASSUMPTION]` (align to rail retry windows). |
| Rail end-to-end ID | Payment APIs also carry the rail's **end-to-end ID** for downstream dedup ([`payments-rails.md`](../../architecture/integrations/payments-rails.md) §3.1). |
| Unknown status | A timeout is **not** failure; the caller must query status before retrying. |
| Ledger guard | The ledger itself rejects duplicate `transactionId` ([`ledger-model.md`](../../architecture/domain-model/ledger-model.md) §12). |

---

## 5. Error taxonomy

We use **RFC 9457 (Problem Details for HTTP APIs)** with a stable machine-readable `code`.

```json
{
  "type": "https://errors.umoya.example/payment/insufficient-funds",
  "title": "Insufficient funds",
  "status": 422,
  "code": "PAYMENT_INSUFFICIENT_FUNDS",
  "detail": "Available balance is below the requested amount.",
  "instance": "/v1/payments/8f2c...",
  "traceId": "b7e1..."
}
```

| HTTP | Meaning | Bank usage |
|---|---|---|
| `400` | Malformed request | Validation failure |
| `401` | Unauthenticated | Missing/invalid credential |
| `403` | Unauthorised | Consent/entitlement missing |
| `404` | Not found | Unknown resource |
| `409` | Conflict | Idempotency mismatch, state conflict |
| `422` | Unprocessable | Business rule (insufficient funds, limit breach) |
| `429` | Rate-limited | Back-off + `Retry-After` |
| `5xx` | Server fault | Never expose internals; always carry `traceId` |

**Rules:** errors never leak PII or internal topology; every error carries a `traceId` for correlation; `code` values are a controlled vocabulary owned by C11.

---

## 6. Security & authorisation

- **AuthN:** OAuth 2.0 / OIDC; **passkeys (FIDO2)** for customer sessions ([`../../architecture/system-design/technology-selection.md`](../../architecture/system-design/technology-selection.md) §7).
- **AuthZ:** scope/claim-based; **least privilege**; consent grants enforced at the API edge (BC1).
- **mTLS** for partner/rail connections.
- **Webhooks:** signed payloads; replay protection; idempotent handlers.
- **Rate limiting & quotas** per consumer.
- **No secrets in URLs or logs** (G-DEP).

---

## 7. ISO 20022 alignment

South Africa adopted **ISO 20022** for NPS modernisation ([`../../research/regulatory/payments-nps.md`](../../research/regulatory/payments-nps.md) §5). Our internal model is a **canonical payment model** that maps cleanly to ISO 20022.

| Canonical field | ISO 20022 (illustrative) |
|---|---|
| End-to-end ID | `EndToEndIdentification` |
| Instruction ID | `InstructionIdentification` |
| Amount + currency | `InstdAmt` / `IntrBkSttlmAmt` |
| Debtor / Creditor | `Dbtr` / `Cdtr` |
| Debtor / Creditor account | `DbtrAcct` / `CdtrAcct` |
| Purpose code | `Purp` (external code set) |
| Remittance info | `RmtInf` |

- Adapters map `pacs`/`pain`/`camt` families to the canonical model ([`payments-rails.md`](../../architecture/integrations/payments-rails.md) §2, §6).
- **Rulebook logic is isolated in adapters** so the PSMB→SARB transition is a configuration, not a domain rewrite.

---

## 8. Events (async contract)

- Domain events use a **published language** ([`../../architecture/domain-model/domain-events.md`](../../architecture/domain-model/domain-events.md)).
- Envelope: `eventId`, `type`, `occurredAt`, `correlationId`, `version`, `payload`.
- Consumers must be **idempotent** (at-least-once delivery) and tolerate out-of-order within a partition.
- Schema evolution is **backward-compatible**; breaking changes get a new event version.

---

## 9. Documentation & governance

- OpenAPI spec is published (G-DOC) and version-controlled alongside code.
- Every external API change passes **G-COMP** (compliance) and, for money/data, **C12** review.
- API review checklist: contract-first spec, idempotency, errors, auth, rate limits, observability, deprecation plan.

---

## 10. Open items / unknowns

- `[UNVERIFIED]` Exact ISO 20022 message versions and SA rulebook profiles per rail (not contracted).
- `[UNKNOWN]` Whether any rail mandates a specific error/response schema beyond the canonical mapping.
- `[ASSUMPTION]` Idempotency-key retention of ≥ 24h; confirm against rail retry windows.

_Codename `Project Umoya` is a working label only._
