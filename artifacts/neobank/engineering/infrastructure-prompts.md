# Master Prompt — SUB-C06-INFRA-NEO-001 (NeoBank Infrastructure Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/engineering/infrastructure-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C06-INFRA-NEO-001  
**Council:** C06 Engineering-Infrastructure  
**Gate:** C06 + C12 Cybersecurity-Intel

---

## 1. Summary

This master prompt instructs SUB-C06-INFRA-NEO-001 to ingest the NeoBank infrastructure and platform architecture data from the Stremiium repo, review and improve the NeoBank infrastructure prompts (MP-BF01 Project Structure infrastructure/devops sections, MP-BF03 Database infrastructure/hosting sections), and produce an improved unconsolidated artifact that converts the research into actionable infrastructure prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (POPIA cross-border, data sovereignty, SARB, FICA).

---

## 2. Assumptions

- The NeoBank platform architecture at `06-architecture/platform-design/platform/` defines deployment topology, observability, DevOps/SDLC.
- The NeoBank domain model at `06-architecture/platform-design/domain-model/` defines double-entry ledger, money & currency, bounded contexts.
- The NeoBank system design at `06-architecture/platform-design/system-design/` defines C4 context/container/component, bounded contexts, NFRs, technology selection.
- The NeoBank integrations at `06-architecture/platform-design/integrations/` define PayShap/EFT/RTC/cards, KYC, core build-vs-buy, open finance, vendor catalogue.
- The NeoBank security architecture at `06-architecture/platform-design/security/` defines STRIDE threat model, ISO 27001, NIST CSF, IAM, fraud, AML, crypto, IR, POPIA, secure SDLC, vendor risk.
- Data sovereignty: South African user data must remain within POPIA-compliant boundaries; cross-border transfers require POPIA s72 safeguards.
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What is the NeoBank deployment topology (regions, availability zones, data residency)?
- Which cloud providers or on-prem infrastructure will host South African customer data?
- What is the data residency strategy for POPIA compliance (SA-hosted vs cross-border)?
- What is the infrastructure tiering (dev, test, staging, production) and security boundaries between them?
- What is the observability stack (metrics, logging, tracing, alerting) for the NeoBank?
- What is the backup and disaster recovery strategy (RPO, RTO, backup location, encryption)?
- How does infrastructure integrate with SESS state architecture (event-sourced ledgers, snapshots, checkpoints)?
- What is the container orchestration strategy (Kubernetes, Docker, or alternative)?
- What is the CI/CD pipeline design (build, test, security scan, deployment gates)?
- What is the network segmentation strategy (public vs private subnets, DMZ, database isolation)?

---

## 4. Concerns

- No data residency strategy is defined for POPIA compliance (SA customer data location).
- No cross-border transfer safeguards are defined for infrastructure hosting outside SA.
- No backup and disaster recovery strategy exists (RPO/RTO, backup location, encryption).
- No network segmentation strategy is documented (database isolation, DMZ).
- No CI/CD security scanning is specified (SAST, DAST, dependency scanning).
- No observability stack is defined for production monitoring.
- No disaster recovery runbook exists for regional failure.
- No infrastructure-as-code approach is specified.
- No environment promotion gates are defined (dev→test→staging→production).
- No vendor risk assessment exists for infrastructure providers.

---

## 5. Suggested Improvements

- Add deployment topology to MP-BF01 infrastructure section with regions, availability zones, data residency for SA customer data.
- Add data residency strategy for POPIA compliance (SA-hosted customer data, cross-border transfer safeguards under POPIA s72).
- Add infrastructure tiering with security boundaries (dev/test isolated from production, no production data in lower environments).
- Add observability stack specification (metrics, logging, tracing, alerting, security event detection).
- Add backup and disaster recovery strategy (RPO, RTO, backup location, encryption, recovery runbook).
- Add network segmentation strategy (public/private subnets, DMZ, database isolation, least privilege).
- Add CI/CD pipeline design with security scanning (SAST, DAST, dependency scanning, secret detection).
- Add SESS state architecture integration (event-sourced ledgers, snapshots, checkpoints, deterministic reducers).
- Add container orchestration strategy.
- Add environment promotion gates (dev→test→staging→production with compliance gates at each transition).
- Add vendor risk assessment for infrastructure providers (ISO 27001, SOC 2, POPIA compliance of vendors).
- Add infrastructure-as-code specification (declarative, version-controlled, reviewed).
- Reference `06-architecture/platform-design/platform/`, `system-design/`, `security/` with specific citations.

---

## 6. Missing Dependencies

- Cloud provider selection and SA region availability (external vendor evaluation).
- Data residency legal opinion on POPIA s72 cross-border transfers (from C01 Legal-Compliance).
- Backup storage location and encryption specification (from C12 Cybersecurity-Intel).
- Network architecture review (from C12 Cybersecurity-Intel).
- CI/CD toolchain selection (from C11 Dev-Engineering).
- Observability tooling selection (from C06 Engineering-Infrastructure).
- Disaster recovery testing schedule (from C02 Operations).
- Vendor risk assessment framework (from C12 Cybersecurity-Intel).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `06-architecture/platform-design/platform/README.md` and subdirectories for deployment topology, observability, DevOps/SDLC.
2. Read `06-architecture/platform-design/system-design/README.md` for C4 model, NFRs, technology selection.
3. Read `06-architecture/platform-design/domain-model/README.md` for data model and bounded contexts.
4. Read `06-architecture/platform-design/security/README.md` for threat model and security controls.
5. Read `01-program/plan/PLAN.md` for infrastructure-related WBS items.
6. Read MP-BF01 and MP-BF03 current prompt text from the master prompt registry.
7. Identify gaps between architecture data and current prompt content (data residency, POPIA s72, backup/DR, network segmentation, CI/CD security, observability, SESS integration, environment gates, vendor risk, IaC).
8. Draft improved infrastructure prompts with deployment topology, data residency strategy, tiering with security boundaries, observability stack, backup/DR strategy, network segmentation, CI/CD with security scanning, SESS integration, container orchestration, environment gates, vendor risk assessment, IaC specification.
9. Separate fixed infrastructure requirements from hypotheses per global rule 7.
10. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/engineering/infrastructure-prompts.md`.
11. Run validation checklist (§9 below).
12. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Deployment topology: `{region, availability_zones[], data_residency, poopia_compliant, cross_border_safeguards, components[]}$
- Infrastructure tier: `{tier_name, security_boundary, data_classification, production_data_allowed, promotion_gate, compliance_review_required}$
- Backup/DR: `{backup_location, encryption, rpo, rto, recovery_runbook, test_frequency, last_test_date}$
- Network segment: `{segment_name, traffic_direction, allowed_protocols, isolation_level, firewall_rules}$

---

## 9. Validation Checklist

- [ ] All architecture sources referenced (platform, system-design, domain-model, security)
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Deployment topology with data residency included
- [ ] POPIA s72 cross-border transfer safeguards included
- [ ] Infrastructure tiering with security boundaries included
- [ ] Observability stack specification included
- [ ] Backup and disaster recovery strategy included
- [ ] Network segmentation strategy included
- [ ] CI/CD pipeline with security scanning included
- [ ] SESS state architecture integration included
- [ ] Environment promotion gates included
- [ ] Vendor risk assessment for infrastructure providers included
- [ ] Infrastructure-as-code specification included
- [ ] Fixed requirements separated from hypotheses
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C06 + C12)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Infrastructure diagrams and topology contain sensitive security information; restrict access to C06, C12, C11 only.
- No production credentials, API keys, or secrets in infrastructure artifacts (guardrail from MP-BF04).
- Data residency decisions must be documented with POPIA s72 legal basis.
- Backup encryption keys must be managed via secrets manager/HSM, not in code.
- Network segmentation must enforce least privilege between tiers.
- CI/CD pipeline must include secret detection to prevent credential leakage.
- Observability must include security event detection (unauthorized access, unusual patterns).
- Vendor risk assessment must verify POPIA compliance of infrastructure providers.

---

## 11. South African Regulatory Considerations

- **POPIA Act 4 of 2013:** SA customer data residency; s72 cross-border transfer safeguards; data breach notification.
- **FICA Act 38 of 2001:** infrastructure must support transaction monitoring and record retention (5 years).
- **SARS CARF:** effective 1 March 2026; infrastructure must support CARF data collection and reporting.
- **Banks Act 94 of 1990:** PA may have infrastructure requirements for licensed banks (systems, security, audit).
- **NPS Act 78 of 1998:** payment processing infrastructure must meet SARB standards.
- **Exchange Control Rules:** cross-border infrastructure may trigger SARB FinSurv reporting for data/fund flows.
- **FATF grey-list exit (Oct 2025):** infrastructure security must support AML/CFT monitoring and reporting.

---

## 12. Compliance Gate

**C06 Engineering-Infrastructure + C12 Cybersecurity-Intel.** Binding compliance veto on any infrastructure gap affecting security or data residency. C01 Legal-Compliance review required for POPIA s72 cross-border decisions.

---

## 13. Rollback Plan

- If data residency is non-compliant: migrate SA customer data to SA-hosted infrastructure, update data flow documentation, re-run POPIA assessment.
- If backup/DR is inadequate: implement encrypted off-site backups, test recovery, update RPO/RTO commitments.
- If network segmentation is insufficient: re-architect subnets, implement DMZ, isolate databases, re-test segmentation.
- If CI/CD security scanning is missing: halt deployments, implement scanning, remediate findings before resuming.
- If observability is insufficient: deploy monitoring, configure alerting, validate security event detection.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C06-INFRA-NEO-001 → C06 Engineering-Infrastructure Captain → C12 Cybersecurity-Intel Captain → C01 Legal-Compliance Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical infrastructure/security events skip to C06 + C12 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/engineering/infrastructure-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C06 infrastructure outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C12 security overlap, C01 POPIA data residency overlap, C11 dev-engineering overlap) and arbitrates per workflow-routing.md R3/R5.
