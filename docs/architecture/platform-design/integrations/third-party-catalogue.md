# Third-Party / Partner Catalogue

**Parent:** [integrations/README.md](./README.md) · **Status:** Proposed (v0.1) · **As-of:** 2026-10-16 · **Owner:** C11 with C12 (security) & C01 (compliance).

A single register of the external parties Umoya depends on. For each: **category, purpose, criticality, integration mode, risk, and status.**

> **Status legend:**
> - **VENDOR UNVERIFIED** — named candidate; capability, contracting, SA-presence or API **not confirmed**.
> - **TO SELECT** — category defined; vendor not yet chosen.
> - **REGULATORY** — a regulator/statutory body (not a vendor).
> - **DESIGNED** — integration approach defined in this architecture set; contract pending.
>
> All entries are **placeholders to be verified via RFP/due diligence**. No entry is an endorsement. Fees, SLAs and interfaces are **UNVERIFIED**.

---

## 1. Payment & settlement

| Party | Category | Purpose | Criticality | Mode | Status |
|---|---|---|---|---|---|
| **Sponsor bank** (TBC) | Banking/clearing | Pre-licence clearing, settlement, scheme access | **Critical** | Bilateral + API/file | **TO SELECT** |
| **PayInc** (ex-BankservAfrica) | Clearing house | EFT/Authenticated Collections, RTC clearing | **Critical** | ISO 20022 / files | **VENDOR UNVERIFIED** ([payments-nps](../../research/regulatory/payments-nps.md) §2) |
| **PayShap / RPP** | Real-time rail | Low-value instant retail payments | **Critical** | ISO 20022 | **DESIGNED** ([payments-rails](./payments-rails.md)) |
| **Visa** | Card scheme | Card issuing/clearing | **Critical** | ISO 8583 / APIs | **VENDOR UNVERIFIED** |
| **Mastercard** | Card scheme | Card issuing/clearing | **Critical** | ISO 8583 / APIs | **VENDOR UNVERIFIED** |
| **SARB settlement** | Market infra | Settlement account/high-value | **Critical** | RTGS/SWIFT | **REGULATORY** |
| **SWIFT / SADC-RTGS / TCIB / PAPSS** | Cross-border | Remittance/trade (Phase 2) | Medium | MT/ISO 20022 | **DESIGNED (later)** |
| **ATM switch / CICO partners** | Cash network | Cash-in/out | Medium | Bilateral | **TO SELECT** |
| **Visa/Mastercard tokenisation** | Wallet provisioning | Apple/Google Pay | Medium | Scheme APIs | **VENDOR UNVERIFIED** |

---

## 2. Identity, KYC & screening

| Party | Category | Purpose | Criticality | Mode | Status |
|---|---|---|---|---|---|
| **Home Affairs (DHA/ABIS)** | Government | SA ID verification | High | Accredited route (**UNVERIFIED**) | **REGULATORY** ([kyc-and-identity](./kyc-and-identity.md) §3.1) |
| **Liveness/biometrics vendor** (TBC) | KYC vendor | Anti-impersonation | High | HTTPS/API | **TO SELECT** |
| **Sanctions/PEP screening vendor** (TBC) | Compliance data | TFS & PEP screening | High | HTTPS/API | **TO SELECT** |
| **TransUnion** | Credit bureau | Credit/affordability | Medium | API | **VENDOR UNVERIFIED** |
| **Experian** | Credit bureau | Credit/affordability | Medium | API | **VENDOR UNVERIFIED** |
| **Compuscan** | Credit bureau | Credit/affordability | Medium | API | **VENDOR UNVERIFIED** |
| **Bank account verification provider** (TBC) | Verification | Beneficiary/payout checks | Medium | API | **TO SELECT** |
| **Doc/OCR verification vendor** (TBC) | KYC vendor | Document authenticity | High | API | **TO SELECT** |

> Bureaus are named as the in-market "big three" per the research; **product/API terms UNVERIFIED**. Consider **two** bureaus for resilience/coverage.

---

## 3. Regulators & statutory reporting

| Party | Category | Purpose | Criticality | Mode | Status |
|---|---|---|---|---|---|
| **SARB Prudential Authority** | Regulator | Licensing, BA returns, prudential | High | File/portal (**UNVERIFIED**) | **REGULATORY** |
| **FSCA** | Regulator | Conduct, FSP licensing | High | Portal/file | **REGULATORY** |
| **FIC (goAML)** | Regulator | AML registration, CTR/STR/TPR | High | System-to-system (**UNVERIFIED**) | **REGULATORY** ([aml-fica](../../research/regulatory/aml-fica.md) §3.4) |
| **Information Regulator** | Regulator | POPIA/PAIA | High | Portal | **REGULATORY** |
| **NCR** | Regulator | Credit-provider registration | Medium | Manual/file | **REGULATORY** |
| **SARS (AEOI)** | Authority | FATCA/CRS/CARF | High | AEOI BRS file | **REGULATORY** ([tax-governance](../../research/regulatory/tax-governance.md) §4) |
| **NFO** | Ombud | Complaints | Medium | Secure channel | **REGULATORY** |
| **CIPC** | Registry | Company/BO register | Medium | Portal | **REGULATORY** |

---

## 4. Cloud, platform & tooling

| Party | Category | Purpose | Criticality | Mode | Status |
|---|---|---|---|---|---|
| **AWS** (af-south-1) | Cloud | Compute, storage, managed services | **Critical** | API/IaC | **DESIGNED** ([technology-selection](../system-design/technology-selection.md) §1) |
| **HashiCorp Vault** | Secrets | Secrets/KMS orchestration | Critical | API | **DESIGNED** |
| **HSM provider** (scheme-certified) | Security | Card/PIN keys | Critical | Scheme-certified | **TO SELECT** |
| **Identity provider** (Keycloak/Ory/managed) | IAM | OIDC/passkeys | Critical | OIDC | **TO SELECT** ([technology-selection](../system-design/technology-selection.md) §7) |
| **Observability** (Prometheus/Grafana/Loki/Tempo) | Ops | Monitoring | High | OSS/vendor | **DESIGNED** |
| **Commercial APM** (optional) | Ops | Advanced tracing (residency **UNVERIFIED**) | Medium | Vendor | **TO SELECT** |

---

## 5. Communications

| Party | Category | Purpose | Criticality | Mode | Status |
|---|---|---|---|---|---|
| **SMS aggregator** (TBC) | Comms | OTP/notifications | High | API | **TO SELECT** |
| **Email provider** (TBC) | Comms | Transactional email | Medium | API | **TO SELECT** |
| **Push provider** (APNs/FCM) | Comms | Mobile push | Medium | API | **DESIGNED** |
| **WhatsApp Business API** | Comms | Notifications/support | Medium | API | **VENDOR UNVERIFIED** |

---

## 6. Data, analytics & ML

| Party | Category | Purpose | Criticality | Mode | Status |
|---|---|---|---|---|---|
| **Lakehouse query engine** (Snowflake/Databricks/Athena) | Analytics | Warehouse/lakehouse | Medium | API | **TO SELECT** |
| **BI tool** (Superset/Metabase/managed) | Analytics | Dashboards | Low | API | **TO SELECT** |
| **Feature store** (SageMaker/Feast) | ML | Online/offline features | Medium | API | **TO SELECT** |
| **Model monitoring** vendor (optional) | ML | Drift/fairness | Medium | API | **TO SELECT** |

---

## 7. Partner ecosystem (market-facing)

| Party | Category | Purpose | Criticality | Mode | Status |
|---|---|---|---|---|---|
| **Open-finance TPPs** | Partner | Data sharing / PIS (gated) | Medium | APIs | **DESIGNED (gated)** ([open-banking](./open-banking-and-open-finance.md)) |
| **Merchants / acquirers** | Partner | Payments | Medium | APIs | **TO SELECT** |
| **Insurance/other product providers** | Partner | Cross-sell (conduct-gated) | Low | APIs | **TO SELECT** |
| **Agent/kiosk networks** | Distribution | Physical onboarding/CICO | Medium | Bilateral | **TO SELECT** |

---

## 8. Risk register (integration risk)

| Risk | Likelihood | Impact | Mitigation *(DESIGN CHOICE)* |
|---|---|---|---|
| **Sponsor dependency** | High | High | Keep sponsor behind ACL; plan the direct-licence transition ([payments-rails](./payments-rails.md) §7). |
| **PSMB→SARB rulebook cutover** | Medium | High | Isolate rulebook logic in adapters; track cutover ([payments-nps](../../research/regulatory/payments-nps.md) §1). |
| **Single KYC/bureau provider outage** | Medium | Medium | Two providers; queue/degraded modes ([kyc-and-identity](./kyc-and-identity.md) §5). |
| **Vendor residency non-compliance** | Medium | High | §72 basis or in-region provider; contract clauses ([data-governance](../data/data-governance.md)). |
| **Vendor lock-in** | Medium | Medium | ACLs + open formats; exit clauses. |
| **Card scheme SA-fit / BIN sponsor** | Medium | High | Confirm route pre-licence (**UNVERIFIED**). |
| **DHA fee/access changes** | Medium | Medium | Model cost; contractual buffers ([digital-banks](../../research/neobank-competitors/digital-banks.md)). |
| **Concentration risk (cloud)** | Low | High | Multi-AZ; DR strategy ([deployment-topology](../platform/deployment-topology.md)). |

---

## 9. Due-diligence checklist for every vendor *(DESIGN CHOICE)*

- [ ] **Residency**: where is data processed/stored? §72 basis if offshore.
- [ ] **Security**: certifications (ISO 27001, SOC 2), pen-test results, breach history.
- [ ] **Compliance**: FIC/PCI/POPIA posture; sub-processor list.
- [ ] **Availability & SLA**: uptime, support, RTO/RPO.
- [ ] **API quality**: docs, sandbox, versioning, idempotency, error taxonomy.
- [ ] **Exit**: data export format; contractual portability.
- [ ] **Commercials**: pricing model, FX exposure, escalation caps.
- [ ] **SA presence**: local support, references, regulatory familiarity.

---

## 10. Related reading

- [integrations/README](./README.md) — the ACL strategy these parties sit behind.
- [payments-rails](./payments-rails.md), [kyc-and-identity](./kyc-and-identity.md), [open-banking-and-open-finance](./open-banking-and-open-finance.md).
- [data/data-governance](../data/data-governance.md) — residency & lawful basis for third parties.
- [system-design/technology-selection](../system-design/technology-selection.md) — the tooling choices.
