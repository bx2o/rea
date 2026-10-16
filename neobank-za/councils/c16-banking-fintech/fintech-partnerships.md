# Fintech Partnerships (C16)

**Owner:** C16 Banking-Fintech Captain · **Contributors:** C01 (contracts/DD), C02 (vendor ops), C12 (security DD) · **Status:** Proposed (v0.1) · **As-of:** 2026-10-16.

The partner and vendor landscape the bank must assemble to actually move money and onboard customers. This is the **banking view**: which counterparty provides which capability, why it is critical, and what remains unverified. The operational register lives in [`../../architecture/integrations/third-party-catalogue.md`](../../architecture/integrations/third-party-catalogue.md); this file explains the *banking logic*.

> ⚠️ **No endorsements.** Names below are **candidate categories and in-market examples**, not selections. Every capability is **VENDOR UNVERIFIED** / **TO SELECT** until contracted. Fees, SLAs and interfaces are `[UNVERIFIED]`.

---

## 1. Why partnerships *are* the pre-licence bank

Before we hold our own banking licence, the bank is largely a **composition of partners**: a licensed sponsor provides clearing and settlement, a scheme sponsor provides card access, bureaus provide credit data, and KYC vendors provide verification. The strategy is to make each partner a **swappable adapter** behind an anti-corruption layer so that acquiring a licence is a **configuration change, not a rewrite** ([`../../architecture/integrations/payments-rails.md`](../../architecture/integrations/payments-rails.md) §7).

This directly serves decisions [D-001](../../program/governance/decision-log.md) (sponsor-bank-first) and [D-004](../../program/governance/decision-log.md) (licence path).

---

## 2. The partnership portfolio

| # | Partner | Capability | Criticality | Dependency type | Status |
|---|---|---|---|---|---|
| **P1** | **Sponsor bank** | Pre-licence clearing, settlement, scheme access | **Critical** | Bilateral + API/file | **TO SELECT** |
| **P2** | **BIN sponsor / card scheme** | Card issuing (Visa/Mastercard) pre-licence | **Critical** | Scheme membership / sponsorship | **UNVERIFIED** |
| **P3** | **Card processor** | Authorisation, clearing, tokenisation | **Critical** | Processor API | **TO SELECT** |
| **P4** | **Clearing house (PayInc)** | EFT/AC/RTC clearing | **Critical** | ISO 20022 / files | **VENDOR UNVERIFIED** |
| **P5** | **PayShap / RPP** | Real-time retail rail | **Critical** | ISO 20022 | **DESIGNED** |
| **P6** | **KYC vendors** | ID verification, liveness, document authenticity, screening | **High** | API | **TO SELECT** |
| **P7** | **Credit bureaus** | Credit & affordability data | **Medium** | API | **VENDOR UNVERIFIED** |
| **P8** | **Bank-account verification (BAV)** | Beneficiary/payout checks | **Medium** | API | **TO SELECT** |
| **P9** | **CICO / agent networks** | Cash-in/out for inclusion | **Medium** | Bilateral | **TO SELECT** |
| **P10** | **Comms partners** | SMS/USSD (critical for inclusion), email, push | **High** | API | **TO SELECT** |

---

## 3. Sponsor bank (P1) — the pivotal partnership

The sponsor bank is the single most important counterparty pre-licence. It sits behind a **Sponsor Adapter** ACL ([`../../architecture/integrations/payments-rails.md`](../../architecture/integrations/payments-rails.md) §7).

| Aspect | Consideration |
|---|---|
| **What it provides** | Clearing/settlement, often BIN/card access, sometimes regulatory cover |
| **Why critical** | Without it, no money movement pre-licence |
| **Key risks** | **Counterparty risk (R-002)**: commercial terms, pricing, exclusivity, termination; operational dependence |
| **Contract must include** | Service levels, pricing, exit/transition plan, data-residency terms, audit rights, incident cooperation |
| **Strategic guardrail** | Document a **direct-licence migration path** (D-004); the sponsor must be replaceable |
| **Regulatory angle** | Outsourcing/cloud expectations apply; C01 reviews the agreement ([`contract-review-process.md`](../c01-legal-compliance/contract-review-process.md)) |

> **Design mandate:** transitioning from sponsor to direct participation must be a **configuration/contract change** — "the single most important payments design constraint" ([`payments-rails`](../../architecture/integrations/payments-rails.md) §7).

---

## 4. Cards: BIN sponsor & card processor (P2, P3)

| Element | Banking logic |
|---|---|
| **BIN sponsor** | A licensed bank sponsors our BIN range so we can issue cards before we have our own licence. Route to be confirmed (`[UNVERIFIED]`). |
| **Principal membership** | Post-licence, direct scheme membership removes the sponsor dependency. |
| **Card processor** | Runs authorisation (in-path, < scheme SLA), clearing and tokenisation; must support **stand-in processing** and chargeback flows ([`payments-rails`](../../architecture/integrations/payments-rails.md) §3.4). |
| **Scheme fees / interchange** | Must post to the ledger deterministically ([`ledger-model`](../../architecture/domain-model/ledger-model.md) §5). |
| **PCI scope** | Whether we are acquiring, issuing or tokenisation-only changes PCI obligations and ASV scans (`[CONFIRM]`). |

---

## 5. Rails & clearing (P4, P5)

| Partner | Role | Notes |
|---|---|---|
| **PayShap / RPP** | Real-time retail (primary) | Proxy resolution, credit transfer, RTP; ISO 20022; **limits `[UNVERIFIED]`** |
| **PayInc (clearing house)** | EFT/Authenticated Collections, RTC | Rulebook logic isolated in adapters for the **PSMB→SARB** transition (11 Aug 2026) |
| **SARB settlement** | Final settlement | Direct post-licence; via sponsor pre-licence |

See [`payments-rails.md`](../../architecture/integrations/payments-rails.md) for the rail-by-rail integration approach.

---

## 6. Identity, KYC & screening (P6)

| Capability | Purpose | Notes |
|---|---|---|
| **DHA/ABIS ID verification** | Verify SA ID against Home Affairs | Accredited route `[UNVERIFIED]`; fee model varies |
| **Liveness / biometrics** | Anti-impersonation | `[TO SELECT]` |
| **Document/OCR verification** | Authenticity of documents | `[TO SELECT]` |
| **Sanctions/PEP screening** | TFS + PEP (FICA ss26A–26C) | `[TO SELECT]`; must support continuous screening |

**Resilience rule:** consider **two** providers per critical capability (e.g. bureaus, screening) to avoid single-point outage ([`third-party-catalogue`](../../architecture/integrations/third-party-catalogue.md) §8). KYC must degrade to a **safety-first** mode, not fail-open ([`../../architecture/security/README.md`](../../architecture/security/README.md) P9).

---

## 7. Bureaus (P7) & bank-account verification (P8)

| Partner | Purpose | Notes |
|---|---|---|
| **TransUnion / Experian / Compuscan** | Credit & affordability (NCA) | The "big three"; product/API terms `[UNVERIFIED]` |
| **BAV provider** | Verify beneficiary account ownership | Payout fraud defence |

Affordability assessment is an **NCA obligation** ([`../../research/regulatory/conduct-fais-nca.md`](../../research/regulatory/conduct-fais-nca.md)); bureau data feeds the affordability engine ([`core-banking-requirements.md`](./core-banking-requirements.md) FR/bureau).

---

## 8. CICO & distribution (P9)

Cash-in/cash-out is **inclusion-critical** in SA. Options: retail agent networks, retailer tills, ATM switches, kiosks. Integration is partner-mediated with agent settlement, float management and **agent fraud** controls ([`payments-rails`](../../architecture/integrations/payments-rails.md) §3.5). Distribution beats product for the mass market ([`../../research/neobank-competitors/competitive-matrix.md`](../../research/neobank-competitors/competitive-matrix.md) §F).

---

## 9. Partner selection criteria

Every partner is assessed against:

- [ ] **Licence/regulatory fit** — permitted activity, supervisory standing.
- [ ] **Residency** — SA data processing or a §72 basis ([`../../research/regulatory/privacy-popia.md`](../../research/regulatory/privacy-popia.md) §6).
- [ ] **Security** — certifications, pen-test results, breach history (C12 DD).
- [ ] **Compliance** — FIC/PCI/POPIA posture; sub-processors.
- [ ] **Availability/SLA** — uptime, support, RTO/RPO.
- [ ] **API quality** — docs, sandbox, versioning, idempotency, error taxonomy ([`api-standards`](../c11-dev-engineering/api-standards.md)).
- [ ] **Exit/portability** — data export, contractual exit.
- [ ] **Commercials** — pricing, FX, escalation caps.
- [ ] **SA presence** — local support and references.

---

## 10. Risks & open items

| Risk | Mitigation |
|---|---|
| **Sponsor dependency (R-002)** | ACL + documented direct-licence migration path |
| **BIN sponsor route unconfirmed** | Confirm pre-licence card route |
| **Single provider outage** | Two providers for critical capabilities |
| **Vendor residency non-compliance** | §72 basis or in-region provider; contract clauses |
| **PSMB→SARB rulebook cutover** | Isolate rulebook logic in adapters |

**Open `[UNVERIFIED]`:** sponsor identity, card scheme route, PayShap non-bank rules, final non-bank framework, bureau terms, DHA access route, goAML integration model.

_Codename `Project Umoya` is a working label only._
