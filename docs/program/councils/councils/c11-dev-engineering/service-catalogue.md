# Service Catalogue (C11)

**Owner:** C11 Dev-Engineering Captain · **Status:** Proposed (v0.1) · **As-of:** 2026-10-16.

The inventory of **services C11 must build**, each mapped to its **bounded context** ([`../../architecture/system-design/bounded-contexts.md`](../../architecture/system-design/bounded-contexts.md)) and its owning **stream-aligned team** ([`team-topology.md`](./team-topology.md)). This is a **build backlog**, not a deployed inventory — all items are **PROPOSED**, none are running.

> **Status legend.**
> - **DESIGNED** — service boundary, APIs/events defined in the architecture set; not yet built.
> - **TO SPECIFY** — boundary agreed; contract not yet written.
> - **BLOCKED** — depends on an unresolved decision or unverified vendor/rail.
>
> Priorities follow the rail/transaction priority in [`payments-rails.md`](../../architecture/integrations/payments-rails.md) §8 (P0 = launch-critical).

---

## 1. Money Core team

| Service | Context | Purpose | Key APIs / events | Depends on | Priority | Status |
|---|---|---|---|---|---|---|
| **Ledger Service** | BC5 | Immutable double-entry book of record; posting rules engine | `POST /transactions`, `TransactionPosted`, `BalanceAdjusted` | Aurora PostgreSQL, HSM | P0 | DESIGNED |
| **Balance Projector** | BC5 | Fast-read balance projections (current/reserved/available) | `GET /accounts/{id}/balance` | Ledger events | P0 | DESIGNED |
| **Reconciliation Service** | BC5 | Continuous recon vs settlement/rails/schemes | `ReconBreakDetected` | Rail/scheme advice feeds | P0 | DESIGNED |
| **Product & Agreement Service** | BC4 | Products, pricing/versioning, agreements, mandates | `ProductPublished`, `AgreementAccepted`, `MandateRegistered` | — | P0 | DESIGNED |

Reference: [`ledger-model.md`](../../architecture/domain-model/ledger-model.md).

---

## 2. Payments team

| Service | Context | Purpose | Key APIs / events | Depends on | Priority | Status |
|---|---|---|---|---|---|---|
| **Payments Service** | BC6 | Payment lifecycle & rail orchestration | `POST /payments`, `PaymentInitiated`, `PaymentSettled` | Rail adapters | P0 | DESIGNED |
| **PayShap Adapter** | BC6 (ACL) | Real-time retail rail (ISO 20022) | proxy resolution, credit transfer, RTP | PayShap rail (**UNVERIFIED**) | P0 | BLOCKED |
| **EFT/AC Adapter** | BC6 (ACL) | Bulk credit + authenticated collections | batch file gen/ingest, returns | PayInc clearing (**UNVERIFIED**) | P0 | BLOCKED |
| **RTC Adapter** | BC6 (ACL) | Real-time higher-value clearing | message exchange | RTC clearing (**UNVERIFIED**) | P1 | BLOCKED |
| **Sponsor Adapter** | BC6/BC7 (ACL) | Pre-licence settlement/scheme access | `SettlementInstruction` | Sponsor bank (**TO SELECT**) | P0 | BLOCKED |
| **Card Service** | BC7 | Card lifecycle, authorisation, clearing | `CardIssued`, `AuthorisationApproved`, `CardSettled` | Scheme membership / BIN sponsor | P0 | BLOCKED |
| **Notification Service** | BC11 | Outbound comms (idempotent, rate-limited) | `NotificationRequested`, `NotificationDelivered` | SMS/email/push vendors | P0 | DESIGNED |

Reference: [`payments-rails.md`](../../architecture/integrations/payments-rails.md).

---

## 3. Customer & Identity team

| Service | Context | Purpose | Key APIs / events | Depends on | Priority | Status |
|---|---|---|---|---|---|---|
| **Identity & Access Service** | BC1 | AuthN/authZ, sessions, consent grants | OIDC, `UserAuthenticated`, `ConsentGranted` | IdP (passkeys/FIDO2) | P0 | DESIGNED |
| **Customer & Party Service** | BC2 | Customer master, relationships, lifecycle | `CustomerOnboarded`, `PartyLinked` | — | P0 | DESIGNED |
| **Onboarding & KYC Service** | BC3 | Verification, screening, KYCProfile | `IdentityVerified`, `ScreeningCompleted`, `KYCProfileCreated` | DHA/ABIS, KYC vendor, screening vendor | P0 | BLOCKED |
| **Customer App (BFF)** | BC1/BC2 | Mobile/web channel backend-for-frontend | channel APIs | C08 design | P0 | DESIGNED |

Reference: [`../../architecture/integrations/kyc-and-identity.md`](../../architecture/integrations/kyc-and-identity.md).

---

## 4. Risk & Credit team

| Service | Context | Purpose | Key APIs / events | Depends on | Priority | Status |
|---|---|---|---|---|---|---|
| **Credit Service** | BC8 | Origination, decisioning, servicing | `CreditDecisionMade`, `LoanDisbursed`, `RepaymentReceived` | Bureaus, affordability engine | P1 | DESIGNED |
| **Affordability Engine** | BC8 | Affordability assessment (NCA) | batch/API scoring | Bureau data | P1 | TO SPECIFY |
| **Fraud & Risk Service** | BC9 | Real-time fraud scoring & risk decisions | `RiskScoreComputed`, `PaymentHeld`, `FraudSignalRaised` | Rules/model store | P0 | DESIGNED |
| **AML / Financial Crime Service** | BC10 | Monitoring, cases, regulatory reporting | `AmlAlertRaised`, `ReportSubmitted` | goAML, screening vendor | P0 | BLOCKED |

Reference: [`../../architecture/security/aml-transaction-monitoring.md`](../../architecture/security/aml-transaction-monitoring.md).

---

## 5. Operations & Data team

| Service | Context | Purpose | Key APIs / events | Depends on | Priority | Status |
|---|---|---|---|---|---|---|
| **Back-Office / Servicing Service** | BC12 | Cases, disputes, overrides (dual-control) | `DisputeRaised`, `OverrideApplied` | payments/ledger events | P1 | DESIGNED |
| **Regulatory Reporting Service** | BC13 | BA returns, AEOI (FATCA/CRS/CARF), Pillar III | `BAReturnGenerated`, `AEOISubmitted` | Data platform, C10 sign-off | P1 | DESIGNED |
| **Data & Analytics Platform** | BC14 | Datasets, features, lineage (read-only from core) | `DatasetUpdated`, `ModelScored` | Lakehouse (**TO SELECT**) | P1 | DESIGNED |

Reference: [`../../architecture/data/analytics-and-reporting.md`](../../architecture/data/analytics-and-reporting.md).

---

## 6. Cross-cutting services

| Service | Purpose | Priority | Status |
|---|---|---|---|
| **Audit & Evidence Service** | Tamper-evident audit trail across all contexts | P0 | DESIGNED |
| **Config/Feature-flag Service** | Flags, controlled rollout, kill-switches | P0 | DESIGNED |
| **Secrets/Key Management integration** | Vault/KMS/HSM access from services | P0 | DESIGNED |
| **Reference-data Service** | Currency, country, purpose codes, calendar | P1 | TO SPECIFY |

---

## 7. Build sequencing (indicative)

```text
P0 (launch-critical):  Ledger · Balance · Product · Payments(+PayShap/Sponsor) · Cards ·
                       Identity · Customer · Onboarding/KYC · Fraud · AML · Notification
P1 (soon after):       RTC · Credit/Affordability · Back-Office · Reporting · Data platform
P2/P3 (phased):        CICO partners · Cross-border (gated on AD/ADLA)
```

Sequencing is **gated by external dependencies**, not just effort: PayShap/sponsor/card/KYC services are **BLOCKED** until the corresponding commercial and regulatory arrangements close ([`../../architecture/integrations/third-party-catalogue.md`](../../architecture/integrations/third-party-catalogue.md)).

---

## 8. Open items / unknowns

- `[UNKNOWN]` Sponsor-bank interface model determines the Sponsor Adapter's real contract.
- `[UNKNOWN]` Card scheme route (BIN sponsor vs principal) affects the Card Service build.
- `[UNVERIFIED]` KYC/bureau vendor selection affects Onboarding and Credit service contracts.
- `[ASSUMPTION]` Service granularity follows the bounded-context seams; a context split may add services.

_Codename `Project Umoya` is a working label only._
