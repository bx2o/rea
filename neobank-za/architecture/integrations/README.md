# Integrations — Landscape & Anti-Corruption Strategy

**Parent index:** [architecture/README.md](../README.md) · **Status:** Proposed (v0.1) · **As-of:** 2026-10-16 · **Owner:** C11 Dev-Engineering with C06.

This folder describes **what Umoya connects to** and **how we insulate our domain from it**. It covers payment rails, KYC/identity, the core build-vs-buy question, open finance, and a vendor/partner catalogue.

> External facts (a vendor's API, a rail's message spec, a regulator's submission format) are **UNVERIFIED** until we contract or integrate. Every integration *approach* is a **DESIGN CHOICE**.

---

## 1. Files in this folder

| File | Scope |
|---|---|
| [`payments-rails.md`](./payments-rails.md) | SA rails: PayShap (RPP), EFT/AC (PayInc/BankservAfrica), RTC, card rails (Visa/Mastercard), DebiCheck, authenticated collections, cash-in/out, sponsor bank & PASA membership. |
| [`kyc-and-identity.md`](./kyc-and-identity.md) | DHA/ABIS, liveness/biometrics, sanctions/PEP screening, credit bureaus, bank account verification. |
| [`core-banking-build-vs-buy.md`](./core-banking-build-vs-buy.md) | Build vs buy for the core ledger, with a decision matrix and SA considerations. |
| [`open-banking-and-open-finance.md`](./open-banking-and-open-finance.md) | SA open-finance posture, APIs, consent, future sandbox. |
| [`third-party-catalogue.md`](./third-party-catalogue.md) | Partner/vendor catalogue with category, purpose, risk, status. |

---

## 2. The integration landscape at a glance

```mermaid
flowchart TB
    subgraph Umoya["Umoya Platform"]
        CORE[Core services]
        ACL[Integration / ACL Layer]
    end

    subgraph Payments["Payment & market infra"]
        PAYSHAP[PayShap / RPP]
        EFT[EFT / Authenticated Collections]
        RTC[RTC real-time clearing]
        CARDS[Visa / Mastercard]
        SPONSOR[Sponsor bank]
        SETTLE[SARB settlement]
        XBORDER[SWIFT / SADC-RTGS / PAPSS]
    end

    subgraph Identity["KYC & identity"]
        DHA[Home Affairs DHA/ABIS]
        LIVENESS[Liveness/biometrics]
        SCREEN[Sanctions / PEP]
        BUREAU[Credit bureaus]
        BAV[Bank account verification]
    end

    subgraph Reg["Regulators"]
        GOAML[FIC goAML]
        PA[SARB PA returns]
        FSCA[FSCA]
        SARS[SARS AEOI]
    end

    subgraph Partners["Partners / open finance"]
        OFAPI[Bank APIs / open finance]
        WALLETS[Wallets / merchants]
    end

    CORE --> ACL
    ACL --> PAYSHAP & EFT & RTC & CARDS & SPONSOR & SETTLE & XBORDER
    ACL --> DHA & LIVENESS & SCREEN & BUREAU & BAV
    ACL --> GOAML & PA & FSCA & SARS
    ACL --> OFAPI & WALLETS
```

---

## 3. Integration categories & criticality

| Category | Systems | Criticality | Failure mode handled by |
|---|---|---|---|
| **Payment rails** | PayShap, EFT/AC, RTC, cards, cross-border | **Critical** | Rail adapters, retries, degraded modes ([NFR §7](../system-design/non-functional-requirements.md)) |
| **Settlement/clearing** | Sponsor, SARB settlement, PayInc | **Critical** | Reconciliation, suspense ([ledger-model](../domain-model/ledger-model.md) §7) |
| **Identity/KYC** | DHA/ABIS, liveness, screening | **High** | Onboarding queue / provisional accounts |
| **Credit data** | Bureaus, BAV | **Medium** | Defer decision |
| **Regulatory reporting** | goAML, PA, FSCA, SARS | **High (time-bound)** | Durable queues, deadline alerts |
| **Partner/market** | Wallets, open finance, merchants | **Medium** | Idempotent APIs, tolerant clients |

---

## 4. Anti-Corruption Layer (ACL) strategy

The core principle: **external models never leak into our domain.** ([system-design principles §3.7](../system-design/README.md))

```
External system  ──▶  ACL Adapter  ──▶  Canonical internal model  ──▶  Domain
   (vendor type)      (translate,        (our types)                   (our invariants)
                       retry, map errors,                       
                       auth, idempotency)
```

### 4.1 What every ACL adapter must do

| Responsibility | Detail |
|---|---|
| **Translate** | Map vendor request/response ↔ our canonical types. No vendor type escapes. |
| **Authenticate** | Manage the vendor's auth (mTLS, OAuth, API keys from Vault) without exposing credentials upstream. |
| **Resilience** | Timeouts, retries with backoff, circuit breakers, bulkheads per dependency. |
| **Idempotency** | Dedupe on our own keys; never double-send a payment due to a retry. |
| **Error normalisation** | Map vendor error codes to a canonical error taxonomy (transient vs permanent vs ambiguous). |
| **Observability** | Emit metrics/traces with the vendor as a tag; log request/response *without PII where possible*. |
| **Contract tests** | Pin the vendor's response shapes with recorded fixtures; alert on drift. |
| **Residency** | Tag data class; block cross-border if no §72 basis. |

### 4.2 ACL implementation patterns *(DESIGN CHOICE)*

| Pattern | Use when |
|---|---|
| **Synchronous adapter** | Request/response needed in-path (e.g. card auth, ID verify). |
| **Async adapter + queue** | Fire-and-forget or slow (e.g. screening, bureau batch, reporting). |
| **File-based adapter** | Rail/batch formats (EFT files, clearing files, regulatory files). |
| **Outbox relay** | Reliable delivery of messages to a vendor with at-least-once semantics. |
| **Anti-corruption anti-pattern guard** | Reject any PR that imports a vendor SDK type into a domain module (enforced by architecture tests — [devops-and-sdlc](../platform/devops-and-sdlc.md)). |

### 4.3 Why this matters here

- **Sponsor → direct transition:** the sponsor bank is just another ACL; moving from sponsored to direct clearing is an adapter swap, not a domain change. ([payments-rails](./payments-rails.md) §7)
- **PSMB→SARB rulebook shift:** rulebook-specific behaviour is isolated in rail adapters ([payments-nps](../../research/regulatory/payments-nps.md) §1).
- **Vendor churn:** KYC/screening/bureau vendors change; the domain does not. ([kyc-and-identity](./kyc-and-identity.md))

---

## 5. Cross-cutting integration concerns

| Concern | Approach *(DESIGN CHOICE)* |
|---|---|
| Secrets | All vendor credentials from Vault (C26); never in code. |
| Egress control | Allow-list per vendor; default deny; residency-tagged. |
| Data minimisation | Send only what the vendor needs; strip PII not required. |
| Logging | Never log full PAN, ID numbers, or biometrics; redact. |
| SLA monitoring | Track vendor availability/latency as SLOs ([observability](../platform/observability.md)). |
| Business continuity | Second source for critical providers where feasible (e.g. two bureaus). |
| Contract risk | Exit/portability clauses; no proprietary data lock-in. |

---

## 6. Build vs buy summary (across integrations)

| Capability | Our default posture *(DESIGN CHOICE)* |
|---|---|
| Ledger/core | **Build** (see [core-banking-build-vs-buy](./core-banking-build-vs-buy.md) for the counter-case). |
| Payment rails | **Buy/connect** — never build a rail; connect via sponsor/participant. |
| KYC/identity | **Buy** (specialist vendors + DHA access). |
| Screening | **Buy** (list coverage is a specialist business). |
| Fraud/AML models | **Build** the logic on **bought** data. |
| Cards | **Buy** scheme membership/BIN sponsorship; build the card management logic. |
| Reporting | **Build** the pipelines; **buy** the analytics tooling. |

---

## 7. Related reading

- [system-design/context-diagram.md](../system-design/context-diagram.md) — the external actors these integrations serve.
- [system-design/technology-selection.md](../system-design/technology-selection.md) — the tech realising adapters.
- [data/data-governance.md](../data/data-governance.md) — residency & lawful basis across integrations.
- [regulatory pack](../../research/regulatory/README.md) — the regulatory drivers.
