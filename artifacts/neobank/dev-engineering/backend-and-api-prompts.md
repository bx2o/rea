# Master Prompt — SUB-C11-DEV-NEO-001 (NeoBank Backend and API Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** qwen3.8-omni-flash.  
**Model policy:** LOCKED. Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/dev-engineering/backend-and-api-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C11-DEV-NEO-001  
**Council:** C11 Dev-Engineering  
**Gate:** C11 + C12 Cybersecurity-Intel

---

## 1. Summary

This master prompt instructs SUB-C11-DEV-NEO-001 to ingest the NeoBank backend and API architecture data from the Stremiium repo, review and improve the NeoBank backend/API prompts (MP-BF06 Backend Service Map, MP-BF07 API Contract, MP-BF10 Payment Orchestration engine), and produce an improved unconsolidated artifact that converts the research into actionable backend/API prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (POPIA, FICA, CARF, no live payment without approval).

---

## 2. Assumptions

- The NeoBank backend service map at `06-architecture/platform-design/system-design/` defines container/component architecture and service boundaries.
- The NeoBank integrations at `06-architecture/platform-design/integrations/` define API integration patterns and vendor catalogue.
- MP-BF06 (Backend Service Map), MP-BF07 (API Contract), and MP-BF10 (Payment Orchestration engine) are the canonical backend/API prompts requiring improvement; no other backend/API prompts are in scope for this subagent.
- No live payment execution without approval (per MP-BF07/MP-BF10).
- No secrets in code; use environment/secrets manager (per MP-BE04 MT5 Connector pattern applied to NeoBank).
- Environment tiers: SIM, PAPER, STAGING, LIVE approved only (per MP-BF10).
- qwen3.8-omni-flash is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What are the NeoBank backend services (API gateway, auth, wallet, ledger, payment, KYC/AML, Travel Rule, CARF reporting, dispute, notification, audit, analytics, admin, reconciliation, settlement, secrets manager, policy engine, signing service isolation, event bus, job runner, test harness, observability)?
- What are the API contract endpoints (auth, wallet creation, balance, transactions, send, receive, PIN verification, opt-out warning, dispute, KYC status, Travel Rule status, CARF reporting status, admin approvals, audit events)?
- What is the service-to-service communication pattern (event bus, synchronous REST/gRPC, async messaging)?
- How is service isolation enforced (signing service isolation, wallet service isolation, secrets management)?
- What is the idempotency strategy for API requests (idempotency keys, retry handling)?
- How are error codes and rate limits defined per service?
- How does each service classify data (public, internal, confidential, restricted, POPIA-sensitive)?
- What is the compliance gate and security gate for each service?
- How are services versioned and deprecated?
- How does the event bus ensure event ordering and exactly-once processing?

---

## 4. Concerns

- No NeoBank backend service ownership map exists (which council owns which service).
- No service data classification exists (POPIA sensitivity, FICA/CARF relevance).
- No API versioning strategy exists.
- No signing service isolation specification exists (agents must never hold private keys).
- No secrets management approach is documented (environment variables, secrets manager, HSM).
- No idempotency strategy is defined for API requests.
- No service-to-service security pattern is specified (mTLS, API keys, JWT).
- No rate limiting strategy is defined per service.
- No compliance gate mapping exists per service (which council gates which service).
- No rollback strategy per service is defined.
- No test harness specification exists per service.
- No observability specification exists per service.

---

## 5. Suggested Improvements

- Add backend service map to MP-BF06 with all services (API gateway, auth, wallet, ledger, payment, KYC/AML, Travel Rule, CARF reporting, dispute, notification, audit, analytics, admin, reconciliation, settlement, secrets manager, policy engine, signing service isolation, event bus, job runner, test harness, observability).
- Add service ownership (council, captain) for each service to MP-BF06.
- Add data classification per service (POPIA sensitivity, FICA/CARF relevance, security controls).
- Add API contract to MP-BF07 with all endpoints (auth, wallet creation, balance, transactions, send, receive, PIN verification, opt-out warning, dispute, KYC status, Travel Rule status, CARF reporting status, admin approvals, audit events, error codes, rate limits, idempotency keys).
- Add no-live-payment-without-approval clause to MP-BF07/MP-BF10.
- Add service-to-service communication pattern (event bus, sync/async) to MP-BF06.
- Add signing service isolation specification (agents never hold private keys; HSM/enclave for key operations).
- Add secrets management specification (environment/secrets manager, no secrets in code or dotfiles).
- Add idempotency strategy (idempotency keys, retry handling, exactly-once semantics).
- Add rate limiting strategy per service.
- Add compliance gate and security gate per service.
- Add service versioning and deprecation policy.
- Add event bus specification (ordering, exactly-once, dead letter queue).
- Add test harness specification per service.
- Add observability specification per service (metrics, logging, tracing, alerting).
- Add rollback strategy per service.
- Reference `06-architecture/platform-design/system-design/`, `integrations/` with specific citations.

---

## 6. Missing Dependencies

- Service ownership decisions from C15 Product-Management and C16 Banking-Fintech.
- Data classification guidance from C01 Legal-Compliance (POPIA) and C12 Cybersecurity-Intel (security).
- Signing service HSM/enclave specification from C13 Web3-Finance / C12 Cybersecurity-Intel.
- Secrets manager selection (AWS Secrets Manager, HashiCorp Vault, or cloud-native) from C06/C11.
- API gateway selection and configuration from C11 Dev-Engineering.
- Event bus technology selection (Kafka, RabbitMQ, cloud-native) from C06/C11.
- External security review of API design from C12 Cybersecurity-Intel.

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `06-architecture/platform-design/system-design/README.md` for backend service architecture.
2. Read `06-architecture/platform-design/integrations/README.md` for API integration patterns and vendor catalogue.
3. Read `06-architecture/platform-design/security/README.md` for security controls, IAM, secure SDLC.
4. Read `01-program/plan/PLAN.md` for backend/API-related WBS items.
5. Read MP-BF06, MP-BF07, and MP-BF10 current prompt text from the master prompt registry.
6. Identify gaps between backend/API architecture and current prompt content (service ownership, data classification, API versioning, signing isolation, secrets management, idempotency, service-to-service security, rate limiting, compliance gates, rollback, test harness, observability).
7. Draft improved MP-BF06 Backend Service Map with all services, ownership, data classification, communication pattern, compliance gates, security gates, rollback, test plan.
8. Draft improved MP-BF07 API Contract with all endpoints, error codes, rate limits, idempotency keys, no-live-payment-without-approval.
9. Draft improved MP-BF10 Payment Orchestration engine with idempotency, retries, timeouts, partial failure, reconciliation, approval gates, environment tiers.
10. Add signing service isolation, secrets management, versioning, event bus, observability specifications.
11. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/dev-engineering/backend-and-api-prompts.md`.
12. Run validation checklist (§9 below).
13. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Service definition: `{service_name, owning_council, dependencies[], data_classification, poopia_sensitive, fica_carf_relevant, security_controls, compliance_gate, security_gate, rollback, test_plan}$
- API endpoint: `{endpoint, method, path, auth_required, idempotency_key, rate_limit, error_codes[], data_classification, live_payment_allowed (false by default), approval_required}$
- Idempotency record: `{idempotency_key, request_hash, response_cached, created_at, expires_at, first_response_status}$
- Secrets access: `{secret_id, service, environment, access_log, rotation_schedule, last_rotated}$

---

## 9. Validation Checklist

- [ ] All backend/API architecture sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `qwen3.8-omni-flash` (no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Backend service map with all services included
- [ ] Service ownership (council, captain) included
- [ ] Data classification per service included
- [ ] API contract with all endpoints included
- [ ] No-live-payment-without-approval clause included
- [ ] Service-to-service communication pattern included
- [ ] Signing service isolation specification included
- [ ] Secrets management specification included
- [ ] Idempotency strategy included
- [ ] Rate limiting strategy included
- [ ] Compliance gate and security gate per service included
- [ ] Service versioning and deprecation policy included
- [ ] Event bus specification included
- [ ] Test harness specification included
- [ ] Observability specification included
- [ ] Rollback strategy per service included
- [ ] No secrets in code statement included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C11 + C12)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Backend service architecture contains sensitive security information; restrict access to C11, C12, C06 only.
- No credentials, API keys, or secrets in API contract or service specifications (guardrail from MP-BF04).
- Signing service must be isolated; agents must never hold private keys (guardrail from MP-BF04).
- Secrets must be managed via environment/secrets manager, never in code or dotfiles.
- Service-to-service communication must use mTLS or equivalent mutual authentication.
- API rate limiting must prevent abuse and brute-force attacks.
- Error codes must not leak sensitive system information.
- Idempotency keys must be cryptographically random.
- Observability must include security event detection (unauthorized API access, unusual transaction patterns).

---

## 11. South African Regulatory Considerations

- **POPIA Act 4 of 2013:** backend services processing personal information must implement POPIA security safeguards; s72 cross-border controls for data leaving SA.
- **FICA Act 38 of 2001:** KYC/AML services must support transaction monitoring and record retention (5 years).
- **SARS CARF:** effective 1 March 2026; CARF reporting services must support data collection and submission.
- **NPS Act 78 of 1998:** payment services must comply with SARB payment system requirements.
- **Banks Act 94 of 1990:** PA may have system security and audit requirements for licensed banks.
- **Exchange Control Rules:** cross-border payment APIs may trigger SARB FinSurv reporting.
- **CPA 68 of 2008:** API terms and error messages must not be misleading to consumers.
- **Cybercrimes Act 19 of 2020:** unauthorized access to backend services is criminal; API security must be robust.
- **FATF grey-list exit (Oct 2025):** backend systems must support AML/CFT monitoring and reporting.

---

## 12. Compliance Gate

**C11 Dev-Engineering + C12 Cybersecurity-Intel.** Binding compliance veto on any backend/API gap affecting security or data protection. C01 Legal-Compliance review required for POPIA/FICA/CARF service data classification.

---

## 13. Rollback Plan

- If service data classification is wrong: re-classify, update security controls, re-run compliance gate.
- If signing service isolation is compromised: isolate signing service, rotate keys, revoke agent access, forensic review (C12).
- If secrets are found in code: purge secrets, rotate all exposed credentials, implement secret scanning in CI/CD.
- If idempotency fails: halt affected API endpoints, fix idempotency implementation, re-test exactly-once semantics.
- If compliance gate is bypassed: revert deployment, re-apply compliance review, re-deploy only after sign-off.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C11-DEV-NEO-001 → C11 Dev-Engineering Captain → C12 Cybersecurity-Intel Captain → C01 Legal-Compliance Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical backend/security events skip to C11 + C12 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/dev-engineering/backend-and-api-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C11 backend/API outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C12 security overlap, C01 POPIA data classification overlap, C16 banking compliance overlap) and arbitrates per workflow-routing.md R3/R5.
