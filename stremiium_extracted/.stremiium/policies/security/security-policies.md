---
description: 'Stremiium Security Policies - Stremiium organizational framework'
document_type: 'framework'
version: '3.0'
last_updated: '2026-04-28'
status: 'active'
scope: '16-council ecosystem'
---

# Stremiium Security Policies

## Section 1: Policy Overview

**Policy ID:** SEC-POL-001  
**Policy Name:** Stremiium Comprehensive Security Framework  
**Version:** 1.0  
**Effective Date:** 2026-04-22  
**Owner:** Chief Technology Officer (CTO) / Cybersecurity-Intelligence-Squad-Captain  
**Review Cycle:** Quarterly  
**Classification:** Internal - Confidential

---

## Section 2: Purpose and Scope

### 2.1 Purpose

This document establishes the foundational security policies for Stremiium (Pty) Ltd, governing all information systems, blockchain infrastructure, smart contracts, agent ecosystems, and personnel activities related to the protection of company assets, user data, and regulatory compliance.

### 2.2 Scope

**In Scope:**

- All Stremiium employees, contractors, and third-party vendors
- All computer systems, networks, and cloud infrastructure
- Blockchain nodes, smart contracts, and Web3 infrastructure
- AI/ML agent systems and orchestration platforms
- Customer data including KYC/AML information
- Financial systems and transaction processing
- Physical facilities in Bloemfontein, South Africa
- Mobile applications and web platforms
- IoT devices and drone systems (Stremiium Aviation Drones)

**Out of Scope:**

- End-user devices not managed by Stremiium
- Third-party services not under Stremiium administrative control
- Personal activities of employees unrelated to company business

### 2.3 Regulatory Context

Stremiium operates under multiple regulatory frameworks:

- **FSCA (Financial Sector Conduct Authority)** - Crypto Asset Service Provider regulations
- **FICA (Financial Intelligence Centre Act)** - Anti-money laundering
- **POPIA (Protection of Personal Information Act)** - Data protection
- **King IV** - Corporate governance
- **GDPR** - EU data protection (for international users)
- **FAIS Act** - Financial advisory and intermediary services

---

## Section 3: Security Governance Structure

### 3.1 Security Organization

```
Executive Level
├── CEO (Mychael) - Ultimate accountability
└── CTO (Kagiso Mmusi) - Technical security leadership

Security Operations
├── Cybersecurity-Intelligence-Squad-Captain (C12)
│   ├── Security-Compliance-Officer
│   └── Threat-Intelligence-Lead
├── Dev-Engineering-Squad-Captain (C11)
│   └── Security-focused developers
└── Engineering-Infrastructure-Squad-Captain (C06)
    └── Infrastructure security specialists
```

### 3.2 Roles and Responsibilities

**Chief Technology Officer (CTO):**

- Overall accountability for information security
- Security strategy and roadmap approval
- Budget allocation for security initiatives
- Final authority on security incidents

**Cybersecurity-Intelligence-Squad-Captain:**

- Day-to-day security operations management
- Threat monitoring and incident response
- Security policy implementation
- Security awareness training coordination

**Security-Compliance-Officer:**

- Regulatory compliance verification
- Security audit coordination
- Policy compliance monitoring
- Report security metrics to CTO

**All Employees:**

- Adherence to all security policies
- Report security incidents immediately
- Complete required security training
- Protect confidential information

---

## Section 4: Information Classification and Handling

### 4.1 Data Classification Levels

| Classification   | Description                            | Examples                                                  | Handling Requirements                                    |
| ---------------- | -------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------- |
| **Critical**     | Extremely sensitive, business-critical | Private keys, seed phrases, master encryption keys        | HSM storage, MFA, need-to-know, audit logging            |
| **Confidential** | Sensitive business and customer data   | KYC data, financial records, smart contract source        | Encryption at rest/transit, access controls, audit trail |
| **Internal**     | Business-use only                      | Internal APIs, system architectures, agent configurations | Authenticated access, no public sharing                  |
| **Public**       | Approved for public disclosure         | Marketing materials, public APIs, whitepaper              | Standard handling, no restrictions                       |

### 4.2 Crypto Asset Classification

**Tier 1 - Infrastructure Keys:**

- Blockchain validator private keys
- Smart contract deployment keys
- Multi-sig admin keys
- **Protection:** Hardware Security Modules (HSMs), multi-sig, air-gapped storage

**Tier 2 - Operational Keys:**

- Hot wallet private keys
- API signing keys
- Service account credentials
- **Protection:** Encrypted storage, key rotation every 90 days, access logging

**Tier 3 - Application Keys:**

- JWT signing secrets
- Database encryption keys
- Session tokens
- **Protection:** Secrets management system, automated rotation

---

## Section 5: Access Control Policies

### 5.1 Identity and Access Management (IAM)

**Principle:** Zero Trust - "Never trust, always verify"

**Requirements:**

1. **Multi-Factor Authentication (MFA)** mandatory for:
   - All administrative accounts
   - Blockchain key access
   - Production system access
   - Code repository access

2. **Role-Based Access Control (RBAC):**
   - Principle of least privilege
   - Role-based permissions aligned with job functions
   - Regular access reviews (quarterly)
   - Immediate revocation on role change

3. **Privileged Access Management (PAM):**
   - Separate admin accounts from standard accounts
   - Just-in-time (JIT) access for critical operations
   - Session recording for privileged activities
   - Break-glass procedures documented

### 5.2 Blockchain Access Controls

**Smart Contract Deployment:**

- Multi-signature requirements (minimum 3-of-5)
- Time-locked admin actions
- Emergency pause functionality
- Upgrade pattern with proxy contracts

**Key Management:**

- HSM-backed key storage for production
- Shamir's Secret Sharing for key backup
- Geographic distribution of key shards
- Annual key rotation procedures

---

## Section 6: Cryptographic Standards

### 6.1 Approved Algorithms

| Use Case              | Algorithm         | Key Length  | Status   |
| --------------------- | ----------------- | ----------- | -------- |
| Symmetric Encryption  | AES-256-GCM       | 256-bit     | Approved |
| Asymmetric Encryption | RSA               | 4096-bit    | Approved |
| Key Exchange          | ECDH (Curve25519) | 256-bit     | Approved |
| Digital Signatures    | ECDSA (secp256k1) | 256-bit     | Approved |
| Hashing               | SHA-256/SHA-3     | N/A         | Approved |
| Password Hashing      | Argon2id          | Memory-hard | Approved |
| Blockchain            | Keccak-256        | N/A         | Approved |

### 6.2 Quantum-Resistant Preparation

**Current Status:** Monitoring quantum computing developments

**Preparation Measures:**

- Track NIST post-quantum cryptography standards
- Implement crypto-agility in systems
- Maintain inventory of quantum-vulnerable implementations
- Plan migration path for 2027-2028

---

## Section 7: Network Security

### 7.1 Network Architecture

**Defense in Depth Layers:**

1. **Perimeter:** Next-Gen Firewalls (NGFW), DDoS protection
2. **DMZ:** Load balancers, reverse proxies, WAF
3. **Internal:** Network segmentation, VLANs, micro-segmentation
4. **Application:** Service mesh, mTLS, API gateways
5. **Data:** Encryption, access controls, database firewalls

### 7.2 Blockchain Network Security

**Node Security:**

- Validator nodes in isolated network segments
- Peer connection whitelisting
- Encrypted P2P communication
- Regular security patches

**Bridge Security:**

- Multi-sig bridge contracts
- Rate limiting on bridge transfers
- Monitoring for unusual patterns
- Emergency pause mechanisms

---

## Section 8: Application Security

### 8.1 Secure Development Lifecycle (SDLC)

**Phase 1 - Planning:**

- Threat modeling for all new features
- Security requirements definition
- Privacy impact assessment

**Phase 2 - Development:**

- Secure coding standards enforcement
- Pre-commit security hooks
- Peer code reviews (security focus)

**Phase 3 - Testing:**

- Static Application Security Testing (SAST)
- Dynamic Application Security Testing (DAST)
- Dependency vulnerability scanning
- Smart contract formal verification

**Phase 4 - Deployment:**

- Security scan gates in CI/CD
- Immutable infrastructure
- Automated security testing

**Phase 5 - Operations:**

- Runtime Application Self-Protection (RASP)
- Security monitoring and alerting
- Incident response procedures

### 8.2 Smart Contract Security

**Development Standards:**

- Solidity version 0.8.x or higher
- OpenZeppelin libraries as base
- Comprehensive NatSpec documentation
- 100% test coverage requirement

**Security Requirements:**

- External audit for all production contracts
- Formal verification for critical contracts
- Bug bounty program active
- Upgradeable proxy pattern with time locks

**Common Vulnerability Prevention:**

- Reentrancy guards (checks-effects-interactions)
- Integer overflow protection (SafeMath)
- Access control (OpenZeppelin Ownable/AccessControl)
- Oracle manipulation prevention
- Flash loan attack mitigation

---

## Section 9: Data Protection

### 9.1 Data Classification and Handling

**Personal Data (POPIA Compliance):**

- Explicit consent for data collection
- Purpose limitation
- Data minimization
- Accuracy maintenance
- Storage limitation
- Integrity and confidentiality
- Accountability and transparency

**Blockchain Data Considerations:**

- Minimize personal data on-chain
- Use off-chain storage for sensitive data
- Hash references for on-chain verification
- Right to erasure through data anonymization

### 9.2 Encryption Requirements

**Data at Rest:**

- AES-256 encryption for all databases
- Encrypted backups with separate key management
- Full disk encryption for all endpoints
- Encrypted storage for agent configurations

**Data in Transit:**

- TLS 1.3 minimum for all connections
- Certificate pinning for mobile apps
- mTLS for service-to-service communication
- VPN for administrative access

---

## Section 10: Incident Response

### 10.1 Incident Classification

| Severity          | Definition                                      | Examples                                            | Response Time      |
| ----------------- | ----------------------------------------------- | --------------------------------------------------- | ------------------ |
| **Critical (P0)** | Active exploitation, significant financial loss | Smart contract exploit, key compromise, >$100k loss | Immediate (15 min) |
| **High (P1)**     | Potential for significant impact                | Suspected breach, large unauthorized transfer       | 1 hour             |
| **Medium (P2)**   | Limited impact, contained                       | Vulnerability discovered, minor unauthorized access | 4 hours            |
| **Low (P3)**      | Minimal impact                                  | Policy violation, minor misconfiguration            | 24 hours           |

### 10.2 Incident Response Procedure

**Step 1: Detection and Analysis (0-15 min)**

- Alert validation
- Initial scope assessment
- Incident commander assignment
- War room activation (if Critical)

**Step 2: Containment (15-60 min)**

- Isolate affected systems
- Preserve evidence
- Prevent further damage
- Emergency pause if smart contract incident

**Step 3: Eradication (1-4 hours)**

- Remove threat actor access
- Patch vulnerabilities
- Reset compromised credentials
- Deploy fixes

**Step 4: Recovery (4-24 hours)**

- Restore systems to production
- Verify integrity
- Resume operations
- Enhanced monitoring

**Step 5: Post-Incident (24-72 hours)**

- Root cause analysis
- Incident report
- Lessons learned
- Policy/process improvements

### 10.3 Communication Plan

**Internal:**

- Immediate notification to CTO and Security Team
- Regular updates to executive team
- Post-incident briefing to all staff

**External:**

- Regulatory notifications per FSCA/FICA requirements
- Customer notifications if data affected
- Public disclosure for significant incidents
- Law enforcement engagement if criminal activity

---

## Section 11: Business Continuity and Disaster Recovery

### 11.1 Recovery Objectives

| System           | RTO (Recovery Time Objective) | RPO (Recovery Point Objective) |
| ---------------- | ----------------------------- | ------------------------------ |
| Core Blockchain  | 4 hours                       | 0 (no data loss acceptable)    |
| Neobank Services | 1 hour                        | 5 minutes                      |
| Smart Contracts  | N/A (immutable)               | N/A                            |
| Customer Data    | 2 hours                       | 1 hour                         |
| Agent Systems    | 4 hours                       | 1 hour                         |

### 11.2 Backup Strategy

**Blockchain Data:**

- Real-time replication across geographically distributed nodes
- Daily snapshots to immutable storage
- Quarterly integrity verification

**Application Data:**

- Continuous replication to secondary site
- Hourly incremental backups
- Daily full backups
- 30-day retention, 7-year archival for financial data

**Configuration Data:**

- Version-controlled in private repository
- Encrypted backup to cloud storage
- Infrastructure as Code (IaC) for rapid redeployment

---

## Section 12: Third-Party and Supply Chain Security

### 12.1 Vendor Security Requirements

**All Vendors Must:**

- Sign Data Processing Agreements (DPA)
- Maintain SOC 2 Type II or ISO 27001 certification
- Report security incidents within 24 hours
- Allow annual security assessments
- Maintain cyber insurance ($5M minimum)

**Critical Vendors (Cloud, Security, Blockchain Infrastructure):**

- Quarterly security reviews
- Penetration test results sharing
- Right to audit clauses
- Business continuity plan review

### 12.2 Supply Chain Security

**Software Supply Chain:**

- Software Bill of Materials (SBOM) for all components
- Dependency vulnerability scanning
- Signed commits and artifacts
- Reproducible builds where possible

**Hardware Supply Chain (Drones):**

- Trusted supplier verification
- Hardware integrity checks
- Secure boot verification
- Tamper detection mechanisms

---

## Section 13: Security Monitoring and Analytics

### 13.1 Security Information and Event Management (SIEM)

**Log Sources:**

- All infrastructure (servers, network devices)
- Application logs
- Blockchain transaction logs
- Agent activity logs
- Authentication logs
- API gateway logs

**Monitoring Use Cases:**

- Unauthorized access attempts
- Privileged account usage
- Unusual transaction patterns
- Smart contract interaction anomalies
- Agent behavior deviations
- Data exfiltration indicators

### 13.2 Threat Intelligence

**Sources:**

- Commercial threat intelligence feeds
- Blockchain-specific threat feeds
- ISAC (Information Sharing and Analysis Center) memberships
- Open source intelligence (OSINT)
- Internal incident analysis

**Integration:**

- Automated indicator of compromise (IoC) ingestion
- Threat intelligence platform (TIP)
- SIEM correlation rules
- Automated blocking capabilities

---

## Section 14: Compliance and Auditing

### 14.1 Regulatory Compliance

**FSCA (Crypto Asset Service Provider):**

- Annual compliance audits
- Transaction monitoring per FICA
- Suspicious Transaction Report (STR) procedures
- Cash Threshold Report (CTR) automation

**POPIA Compliance:**

- Privacy Officer appointment
- Data Protection Impact Assessments (DPIA)
- Data subject rights procedures
- Cross-border data transfer safeguards

**CARF (Crypto-Asset Reporting Framework):**

- Transaction data collection
- Annual reporting to SARS (from March 2026)
- User identity verification records
- Audit trail maintenance

### 14.2 Internal Audits

**Schedule:**

- Quarterly: Access control reviews
- Semi-annual: Vulnerability assessments
- Annual: Comprehensive security audit
- Annual: Smart contract audit

**Audit Scope:**

- Policy compliance
- Technical controls effectiveness
- Incident response readiness
- Business continuity testing

---

## Section 15: Security Awareness and Training

### 15.1 Training Requirements

**All Employees:**

- Security awareness during onboarding
- Annual security refresher training
- Phishing simulation exercises (quarterly)
- Role-specific security training

**Developers:**

- Secure coding training (annual)
- Blockchain security specifics
- Smart contract security best practices
- Secure development tools training

**Security Team:**

- Continuous professional development
- Industry certification maintenance
- Threat hunting training
- Incident response drills (quarterly)

### 15.2 Agent Security Training

**For AI Agents in Ecosystem:**

- Security policy awareness
- Sensitive data handling protocols
- Incident reporting procedures
- Secure communication standards

---

## Section 16: Policy Maintenance

### 16.1 Review Schedule

| Review Type               | Frequency | Owner               |
| ------------------------- | --------- | ------------------- |
| Full policy review        | Annual    | CTO                 |
| Technical control review  | Quarterly | Cybersecurity Squad |
| Compliance mapping review | Bi-annual | Compliance Officer  |
| Incident-driven updates   | As needed | Security Team       |

### 16.2 Change Management

**Policy Changes Require:**

1. Draft change documentation
2. Stakeholder review (Legal, Compliance, Technical)
3. Approval by CTO
4. Communication to all affected parties
5. Training if significant changes
6. Effectiveness review after 30 days

### 16.3 Exceptions

**Temporary Exceptions:**

- Must be documented
- Risk acceptance by appropriate authority
- Expiration date defined
- Mitigating controls required
- Regular review during exception period

---

## Appendix A: Reference Documents

- [Stremiium Compliance Framework](./compliance-framework.md)
- [Stremiium Secrets Management](./secrets-management.md)
- [Stremiium Incident Response Plan](./incident-response.md)
- [Stremiium API Keys Audit](../docs/security/api-keys-audit.md)
- [Stremiium Smart Contract Security Standards](../.github/development/smart-contract-standards.md)

## Appendix B: Compliance Mapping

| Requirement       | Policy Section | Control                | Evidence                      |
| ----------------- | -------------- | ---------------------- | ----------------------------- |
| FSCA CASP License | 14.1           | Transaction monitoring | STR/CTR logs                  |
| FICA Compliance   | 4, 9, 14       | KYC/AML procedures     | Customer verification records |
| POPIA             | 9              | Data protection        | Encryption, access controls   |
| King IV           | 3              | Governance structure   | Security organization chart   |
| ISO 27001         | All            | Security management    | Audit reports                 |

## Appendix C: Security Contacts

| Role               | Name                | Contact               | Availability   |
| ------------------ | ------------------- | --------------------- | -------------- |
| CTO                | Kagiso Mmusi        | [REDACTED]            | 24/7           |
| Security Captain   | [Agent C12 Captain] | [Secure Channel]      | 24/7           |
| Compliance Officer | [C01 Legal]         | [Secure Channel]      | Business hours |
| Incident Response  | Security Team       | security@stremiium.io | 24/7           |

---

_Document Version: 1.0_  
_Last Updated: 2026-04-22_  
_Next Review: 2026-07-22_  
_Classification: Internal - Confidential_
