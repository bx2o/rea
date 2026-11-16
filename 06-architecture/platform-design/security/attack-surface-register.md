# Attack Surface Register — NeoBank ZA

**Owner:** C12 Cybersecurity-Intelligence · **Review cadence:** quarterly + on architecture change
**Version:** 1.0 · **Date:** 2026-10-16
**Related:** [`threat-model-stride.md`](./threat-model-stride.md) · [`controls-catalog.md`](./controls-catalog.md) · [`iam-and-secrets.md`](./iam-and-secrets.md) · [`../integrations/`](../integrations/)

> **Purpose.** Enumerate every place a human, service, or partner can interact with the bank, name the **owner**, the **authentication**, the **primary controls**, and the **threat IDs** it exposes. This is the operational inventory that the STRIDE model and controls catalogue operate over.
>
> **Exposure legend:** `Internet/Public` · `Partner` · `Internal` · `Privileged` · `Supply-chain`.
> **Auth legend:** `None` · `OAuth2/OIDC` · `mTLS` · `API Key` · `mTLS + sig` · `MFA/PAM`.
> **Evidence discipline:** any surface marked **[CONFIRM]** is not yet verified present in the design; treat as planned.

---

## 1. External attack surfaces

| ID | Surface | Exposure | Entry point / tech | Auth | Owner | Primary controls | Threat IDs |
|---|---|---|---|---|---|---|---|
| AS-E01 | **Customer mobile app (iOS/Android)** | Internet/Public | Native app ↔ API GW | OAuth2/OIDC + biometric | C11 (build) / C12 (sec) | Attestation, RASP, cert pinning, no at-rest secrets, screenshot blocks, integrity checks | T-MOB-01..06 |
| AS-E02 | **Customer web app** | Internet/Public | Browser ↔ CDN/WAF/API GW | OAuth2/OIDC + MFA | C11 / C12 | CSP, SRI, HSTS, anti-CSRF, bot defence, WAF | T-MOB-03/04, T-API-* |
| AS-E03 | **Public REST/GraphQL API** | Internet/Public | API GW | OAuth2/OIDC + mTLS (partners) | C11 / C12 | Schema validation, rate limits, BOLA tests, field-level authz, WAF | T-API-01..06 |
| AS-E04 | **Webhook/event ingress** | Partner/Internet | HTTPS callbacks into event bus | HMAC sig + mTLS | C11 / C12 | Signature verification, replay protection (nonce+timestamp), allow-list source IPs | T-PAY-01, T-TP-01/02 |
| AS-E05 | **Payment rail interface (ISO 20022 / PayShap)** | Partner | Clearing/settlement gateway | mTLS + message signature | C16 / C12 | mTLS, signed messages, scheme rulebook conformance, reconciliation | T-PAY-01..06 |
| AS-E06 | **KYC / identity vendor integration** | Supply-chain | Vendor API (inbound + outbound) | mTLS + API key | C01 / C12 | DPA, minimal PII, residency, response validation, spoofing detection | T-KYC-01..06 |
| AS-E07 | **Credit bureau / affordability integration** | Supply-chain | Bureau API | mTLS + API key | C16 / C01 | Least data, POPIA lawful basis, prior-auth assessment (see below) | T-TP-04, T-KYC-* |
| AS-E08 | **Card processing / PCI interfaces** | Supply-chain | Acquirer/processor API | mTLS + PCI scoped keys | C16 / C12 | PCI-DSS scope reduction, tokenisation, PIN blocks, HSM | T-PAY-04, T-KYC-04 |
| AS-E09 | **Open-finance / third-party data APIs** **[CONFIRM]** | Partner | Consent-scoped APIs | OAuth2 + consent | C11 / C01 | Consent capture, scoped tokens, audit trail (design for future IFWG framework) | T-API-01..06, T-TP-* |
| AS-E10 | **Marketing website & CMS** | Internet/Public | Public site | None (read) | C09 / C12 | WAF, CSP, patch mgmt, no PII, decoupled from banking plane | T-API-05 |
| AS-E11 | **Public DNS / certificate endpoints** | Internet/Public | DNS, ACME | n/a | C06 | DNSSEC, CAA, short-lived certs, subdomain hygiene | T-API-01, T-TP-01 |
| AS-E12 | **Regulator reporting egress (goAML, PA, Info Regulator)** | Internet/Public | Outbound secure API/file | mTLS + credentials | C01 | Encrypted egress, credential custody, submission logging | T-API-03, T-PAY-03 |
| AS-E13 | **Customer support channels (chat/email/voice)** | Internet/Public | Contact centre tools | Agent auth + customer verify | C14 / C12 | Identity verification before action, no credentials in chat, PII redaction | T-MOB-01, T-INS-* |
| AS-E14 | **Third-party app SDKs embedded in app** | Supply-chain | SDK code in client | n/a | C11 / C12 | SDK allow-list, SBOM, privacy review, no over-permission | T-MOB-04, T-TP-04 |

---

## 2. Internal attack surfaces

| ID | Surface | Exposure | Entry point / tech | Auth | Owner | Primary controls | Threat IDs |
|---|---|---|---|---|---|---|---|
| AS-I01 | **Admin/back-office console** | Privileged | Web console | Phishing-resistant MFA + PAM | C02 / C12 | JIT, four-eyes, session recording, IP/device posture, no standing admin | T-ADM-01..06, T-INS-02/06 |
| AS-I02 | **Internal service mesh** | Internal | gRPC/REST between services | mTLS + workload identity | C06 / C12 | Deny-by-default netpol, SPIFFE IDs, least-privilege service accounts | T-LED-01, T-API-06 |
| AS-I03 | **Core ledger & databases** | Internal | DB endpoints | mTLS + short-lived creds | C06 / C12 | Encryption at rest, no human prod access, row-level authz, audit | T-LED-02..06 |
| AS-I04 | **Data platform / warehouse** | Internal | ETL, BI tools | SSO + MFA | C06 / C12 | Classification enforcement, tokenised/ masked PII, egress controls | T-ADM-04, T-LED-04 |
| AS-I05 | **Secrets & key management plane (HSM/KMS)** | Privileged | KMS/HSM API | mTLS + HSM auth | C12 | Separation of duties, dual control, no export of root keys | T-LED-06, T-ADM-06 |
| AS-I06 | **CI/CD pipeline & artefact registry** | Supply-chain | Git, runners, registry | OIDC + SSO | C11 / C12 | Signed commits, SCA/SAST gates, signed artefacts/SBOM, least-privilege runners | T-INS-05, supply-chain |
| AS-I07 | **Fraud/AML rules & model store** | Privileged | Config repos, model registry | SSO + four-eyes | C16/C01/C12 | Change control, approval, versioned models, explainability | T-ADM-02, T-INS-02 |
| AS-I08 | **SIEM / logging & audit store** | Internal | Log ingest + query | SSO + MFA | C12 | Immutable (WORM) audit, integrity, RBAC on logs | T-API-03, T-ADM-03, T-INS-03 |
| AS-I09 | **Network boundary / VPN / zero-trust access** | Privileged | ZTNA broker | Device posture + MFA | C06 / C12 | No flat network, micro-segmentation, posture checks | T-INS-01, T-ADM-06 |
| AS-I10 | **Backup & DR systems** | Internal | Backup store | mTLS + SSO | C06 / C12 | Immutable/offline backups, encryption, tested restore | T-INS-05, T-LED-05 |
| AS-I11 | **Employee endpoints (laptops/mobile)** | Internal | Managed device | Device + SSO | C05 / C12 | MDM, disk encryption, EDR, patching, phishing-resistant MFA | T-INS-01/04 |
| AS-I12 | **Regulatory/records archive** | Internal | Records system | SSO + MFA | C01 / C03 | Retention enforcement, legal hold, access logging | T-ADM-04, T-KYC-03 |
| AS-I13 | **Physical/print & removable media** **[CONFIRM]** | Internal | Office/print | n/a | C05 | Clean-desk, DLP on egress, no removable media on money plane | T-INS-04 |
| AS-I14 | **Identity provider (IdP) / directory** | Privileged | SSO/OIDC endpoints | MFA | C12 / C06 | Hardened IdP, conditional access, privileged-role governance | T-INS-01/06, T-ADM-06 |

---

## 3. Surface → control coverage heat map

| Surface group | Prevent | Detect | Respond/Recover |
|---|---|---|---|
| Customer clients (AS-E01/02) | Attestation, pinning, MFA | Behavioural + device signals | IR runbook, remote de-auth |
| Public APIs (AS-E03/E04) | WAF, authz, validation | API anomaly, rate metrics | Circuit break, block, patch |
| Payment rails (AS-E05/E08) | mTLS + signing + 4-eyes | Reconciliation, rail alerts | Failover, recall, notify |
| KYC/identity (AS-E06) | Liveness, doc auth | Fraud scoring, PEP/sanctions | Manual review lane |
| Admin (AS-I01/I07) | JIT, PAM, 4-eyes | UEBA, session recording | Revoke, investigate |
| Ledger/DB (AS-I03) | Encryption, no human access | Integrity + recon checks | Restore, replay, breach process |
| Supply chain (AS-I06, AS-E14) | SBOM, signing, gates | Dependency alerts | Rotate, rebuild, revoke |
| Identity core (AS-I14) | Conditional access, hardening | IdP anomaly | Lock, rotate, investigate |

---

## 4. Managing the register

| Item | Rule |
|---|---|
| **New surface** | Requires a threat-model update ([`threat-model-stride.md`](./threat-model-stride.md)) and a control mapping before release ([`secure-sdlc.md`](./secure-sdlc.md) design gate). |
| **Retirement** | Surface must be decommissioned (DNS, certs, creds, data) — not merely hidden. |
| **Ownership** | Every surface has exactly one accountable owner; unowned surface = release blocker. |
| **External exposure** | Anything `Internet/Public` requires WAF/auth/rate-limit and a C12 sign-off. |
| **Third-party** | Anything `Supply-chain`/`Partner` also enters the vendor register ([`third-party-and-cloud-risk.md`](./third-party-and-cloud-risk.md)). |
| **Evidence** | Surface list is validated against live cloud inventory each quarter (inventory diff is a finding). |

**Open verification items [CONFIRM]:** Open-finance API (AS-E09) not yet in design; physical/removable media controls (AS-I13) depend on office model; card scope (AS-E08) depends on product decision. These are **UNVERIFIED** until the platform architecture ([`../platform/`](../platform/)) and product scope are fixed.
