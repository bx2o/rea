---
description: 'Stremiium Secrets Management Policy - Stremiium organizational framework'
document_type: 'framework'
version: '3.0'
last_updated: '2026-04-28'
status: 'active'
scope: '16-council ecosystem'
---

# Stremiium Secrets Management Policy

## Section 1: Policy Overview

**Policy ID:** SEC-SEC-001  
**Policy Name:** Secrets and Credential Management  
**Version:** 1.0  
**Effective Date:** 2026-04-22  
**Owner:** Chief Technology Officer / Cybersecurity-Intelligence-Squad-Captain  
**Classification:** Critical - Internal Use Only

---

## Section 2: Purpose and Scope

### 2.1 Purpose

This policy establishes comprehensive requirements for managing cryptographic keys, API credentials, passwords, tokens, and other secrets within the Stremiium ecosystem. The goal is to prevent unauthorized access, reduce credential exposure risk, and ensure rapid incident response for compromised secrets.

### 2.2 Scope

**Covered Secrets:**

- Blockchain private keys and seed phrases
- Smart contract deployment keys
- API keys (Notion, Supabase, HuggingFace, Smithery, etc.)
- Database credentials
- JWT signing secrets
- Encryption keys
- Service account passwords
- Cloud provider credentials
- CI/CD pipeline secrets
- Agent system authentication tokens

**Environments:**

- Production (Critical)
- Staging (High)
- Development (Medium)
- Local development (Controlled)

---

## Section 3: Secrets Classification

### 3.1 Critical Tier - Infrastructure Keys

**Classification Level:** CRITICAL  
**Impact of Compromise:** Catastrophic financial and operational damage

**Includes:**

- Blockchain validator private keys
- Smart contract admin/multi-sig keys
- Master encryption keys (HSM-backed)
- Production database root credentials
- Cloud provider root/admin accounts

**Protection Requirements:**

- Hardware Security Module (HSM) storage
- Multi-signature requirements (minimum 3-of-5)
- Air-gapped backup procedures
- Never stored in code repositories
- Never transmitted over network
- Access requires C-level authorization
- Quarterly key rotation
- Immediate rotation if any shard holder leaves

### 3.2 High Tier - Operational Keys

**Classification Level:** HIGH  
**Impact of Compromise:** Significant operational disruption

**Includes:**

- Hot wallet private keys
- API signing keys (production)
- Service-to-service authentication tokens
- Database application credentials
- CI/CD deployment keys

**Protection Requirements:**

- Secrets management system (e.g., HashiCorp Vault, AWS Secrets Manager)
- Encryption at rest (AES-256)
- Role-based access control
- Audit logging of all access
- Automated rotation every 90 days
- No hardcoding in source code
- Environment variable injection only

### 3.3 Medium Tier - Application Secrets

**Classification Level:** MEDIUM  
**Impact of Compromise:** Limited to specific application or service

**Includes:**

- JWT signing secrets
- Session tokens
- Third-party API keys (non-critical)
- Feature flags with security implications
- Agent authentication tokens

**Protection Requirements:**

- Secrets management system or encrypted environment variables
- Rotation every 180 days
- No logging of secret values
- Unique per environment
- Automatic regeneration on suspected compromise

### 3.4 Low Tier - Development Secrets

**Classification Level:** LOW  
**Impact of Compromise:** Minimal, development-only

**Includes:**

- Test API keys
- Development database credentials
- Sandbox environment secrets
- Local agent testing tokens

**Protection Requirements:**

- .env.local files (never committed)
- Shared through secure channels only
- Rotate on team member departure
- Use test/sandbox values only

---

## Section 4: Secrets Lifecycle Management

### 4.1 Generation

**Strong Secret Requirements:**

| Secret Type     | Minimum Length | Complexity                    | Generation Method            |
| --------------- | -------------- | ----------------------------- | ---------------------------- |
| Passwords       | 16 characters  | Upper, lower, number, special | Cryptographically secure RNG |
| API Keys        | 32 bytes       | Base64 encoded                | UUID v4 + entropy            |
| Encryption Keys | 256-bit        | AES-256                       | HSM or /dev/urandom          |
| Blockchain Keys | 256-bit        | secp256k1                     | Hardware wallet or HSM       |
| JWT Secrets     | 512-bit        | HS512 compatible              | Cryptographically secure     |

**Generation Tools:**

- Production: HSM or FIPS 140-2 Level 3 compliant device
- Development: OpenSSL, Python secrets module, Node crypto
- Never use: Math.random(), predictable seeds, weak RNGs

### 4.2 Storage

**Approved Storage Methods by Tier:**

**Critical Tier:**

- Hardware Security Modules (HSMs)
- Offline air-gapped systems
- Shamir's Secret Sharing (SSS) with geographic distribution
- Paper backups in secure vaults

**High Tier:**

- HashiCorp Vault
- AWS Secrets Manager
- Azure Key Vault
- Google Cloud Secret Manager
- Kubernetes Secrets (with encryption at rest)

**Medium/Low Tier:**

- Environment variables (runtime injection)
- Docker secrets
- CI/CD pipeline secrets (GitHub Actions, GitLab CI)
- 1Password/Bitwarden (for team sharing)

**Prohibited Storage:**

- Git repositories (any branch)
- Slack, email, or messaging apps
- Unencrypted databases
- Logs or monitoring systems
- Documentation (Confluence, Notion) - except secure vaults
- Personal password managers (for company secrets)

### 4.3 Distribution

**Secure Distribution Channels:**

**Critical Tier:**

- In-person only with identity verification
- Split knowledge (no single person has complete key)
- Legal documentation of shard holders
- Secure courier for hardware tokens

**High Tier:**

- Secrets management system access grant
- Encrypted email (PGP) for initial setup only
- Secure vault sharing (1Password Teams)
- In-person for initial credentials

**Medium/Low Tier:**

- Secure vault sharing
- Encrypted direct message (approved platform)
- Self-service portal with MFA

**Distribution Audit Trail:**

- Who received access
- When access was granted
- Purpose of access
- Acknowledgment of responsibilities

### 4.4 Usage

**Runtime Injection:**

```bash
# Correct - Runtime injection
export NOTION_API_KEY=$(vault read -field=key secret/notion)
node app.js

# Incorrect - Hardcoded
const NOTION_API_KEY = "<DO_NOT_HARDCODE_SECRETS>";
```

> Note: Use obviously non-functional placeholders in documentation examples to avoid accidental reuse and secret-scanner false positives.

**Code Best Practices:**

- Use secrets management SDKs
- Cache secrets in memory only (not disk)
- Never log secret values
- Sanitize error messages (no secret leakage)
- Use connection pooling with credential rotation

**Agent Systems:**

- Agents authenticate via short-lived tokens
- Token refresh mechanism
- Automatic revocation on anomaly detection
- No long-lived credentials in agent memory

### 4.5 Rotation

**Rotation Schedule:**

| Secret Tier | Rotation Frequency | Rotation Trigger                                 |
| ----------- | ------------------ | ------------------------------------------------ |
| Critical    | Quarterly          | Any shard holder departure, suspected compromise |
| High        | 90 days            | Employee departure, automated schedule           |
| Medium      | 180 days           | Annual schedule, service updates                 |
| Low         | As needed          | Team changes, development resets                 |

**Rotation Procedure:**

1. Generate new secret
2. Update secrets management system
3. Deploy to services (rolling update)
4. Verify new secret functionality
5. Revoke old secret
6. Audit log rotation event

**Emergency Rotation:**

- Immediate rotation on suspected compromise
- Incident response team notification
- Forensic investigation
- Post-incident review

### 4.6 Revocation

**Revocation Triggers:**

- Employee termination
- Suspected compromise
- Role change (access no longer needed)
- Project decommissioning
- Vendor relationship termination

**Revocation Process:**

1. Immediate disable in all systems
2. Audit of recent access
3. Assessment of potential exposure
4. Incident response if compromise suspected
5. Documentation of revocation

---

## Section 5: Key Management Infrastructure

### 5.1 Hardware Security Modules (HSMs)

**Use Cases:**

- Blockchain validator key storage
- Master encryption keys
- Smart contract multi-sig operations
- Certificate authority keys

**Requirements:**

- FIPS 140-2 Level 3 minimum
- Tamper detection and response
- Dual control for sensitive operations
- Audit logging of all HSM operations
- Geographic redundancy

**HSM Operations:**

- Key generation within HSM (no external exposure)
- Key usage without key extraction
- Backup to secondary HSM only
- Emergency key ceremony procedures

### 5.2 Secrets Management System

**Selected Solution:** HashiCorp Vault (recommended)

**Architecture:**

```
Vault Cluster
├── Authentication Methods
│   ├── Kubernetes auth
│   ├── GitHub auth
│   ├── UserPass (emergency)
│   └── AppRole (services)
├── Secret Engines
│   ├── KV v2 (generic secrets)
│   ├── Database (dynamic credentials)
│   ├── AWS (temporary credentials)
│   └── Transit (encryption as service)
└── Access Policies
    ├── Role-based (RBAC)
    ├── Time-bound
    └── IP-restricted
```

**Implementation Standards:**

- High availability (multi-node cluster)
- Auto-unseal with cloud KMS
- Regular snapshots
- Audit log forwarding to SIEM

### 5.3 Key Ceremony Procedures

**For Critical Key Generation:**

**Pre-Ceremony:**

- Legal documentation prepared
- Participants verified and briefed
- Secure facility secured
- Hardware verified (HSM, laptops, etc.)
- Documentation team ready

**During Ceremony:**

- Video recording (secure storage)
- Multi-party generation (M-of-N)
- Shards distributed to separate parties
- Verification of key functionality
- Immediate backup procedures

**Post-Ceremony:**

- Legal signatures
- Secure document storage
- Access log creation
- Recovery procedures documented
- Shard holder contact verification

---

## Section 6: API Key Management

### 6.1 API Key Inventory

| Service        | Key Type          | Tier     | Rotation Frequency | Owner             |
| -------------- | ----------------- | -------- | ------------------ | ----------------- |
| Notion         | Integration Token | High     | 90 days            | Notion Squad      |
| Supabase       | Service Role Key  | Critical | 90 days            | Engineering Squad |
| HuggingFace    | API Token         | Medium   | 180 days           | AI/ML Squad       |
| Smithery       | API Key           | Medium   | 180 days           | Dev Squad         |
| OpenAI         | API Key           | Medium   | 180 days           | AI/ML Squad       |
| Infura/Alchemy | API Key           | High     | 90 days            | Blockchain Squad  |
| Etherscan      | API Key           | Low      | As needed          | Dev Squad         |

### 6.2 API Key Security Requirements

**Key Restrictions:**

- IP allowlisting where possible
- Scope limitation (minimal permissions)
- Rate limiting
- Usage alerts (anomaly detection)
- Expiration dates

**Monitoring:**

- Unusual usage patterns
- Geographic anomalies
- Rate limit violations
- Failed authentication attempts

### 6.3 Third-Party Key Management

**Vendor Responsibility Matrix:**

| Aspect                  | Stremiium | Vendor         |
| ----------------------- | --------- | -------------- |
| Key generation          | -         | X              |
| Secure storage          | X         | X (their side) |
| Rotation scheduling     | X         | -              |
| Compromise notification | X         | X              |
| Audit logging           | X         | X              |
| Integration security    | X         | -              |

---

## Section 7: Blockchain Key Management

### 7.1 Key Types and Usage

**Externally Owned Accounts (EOAs):**

- Standard Ethereum addresses
- Used for: Testing, low-value operations
- Storage: Hardware wallets or HSMs
- Backup: Seed phrase (split storage)

**Smart Contract Wallets:**

- Multi-signature wallets (Gnosis Safe)
- Used for: Treasury, admin functions
- Storage: Contract on-chain, keys off-chain
- Backup: Key shard distribution

**Validator Keys:**

- Proof of Stake validators
- Used for: Consensus participation
- Storage: HSMs only
- Backup: Validator key ceremony

### 7.2 Multi-Signature Requirements

**Treasury Operations:**

- 3-of-5 multi-sig
- Geographic distribution of signers
- Time delays for large transfers
- Daily limits per signer

**Smart Contract Admin:**

- 3-of-5 multi-sig
- Technical signers (developers)
- Business signers (executives)
- Emergency signer (cold storage)

**Emergency Procedures:**

- Break-glass access
- Social recovery mechanisms
- Pre-signed transactions (time-locked)

### 7.3 Cold Storage

**Definition:** Keys never connected to internet

**Implementation:**

- Hardware wallets (Ledger, Trezor)
- Air-gapped computers
- Paper wallets (for backup)
- Steel/metal backups (fire resistant)

**Access Procedures:**

- Multiple people required
- Video recording
- Transaction pre-approval
- Time-locked when possible

---

## Section 8: Incident Response for Secrets

### 8.1 Compromise Detection

**Indicators:**

- Unexpected API usage
- Unauthorized transactions
- Failed authentication patterns
- Insider threat alerts
- External threat intelligence

**Monitoring:**

- Real-time alerting
- Behavioral analytics
- Threshold-based alerts
- Anomaly detection

### 8.2 Immediate Response

**First 15 Minutes:**

1. Alert security team
2. Identify compromised secret(s)
3. Assess scope of exposure
4. Begin containment

**Containment (15-60 min):**

1. Revoke compromised credentials
2. Disable affected accounts
3. Isolate affected systems
4. Preserve evidence

**Assessment (1-4 hours):**

1. Determine what was accessed
2. Check logs for suspicious activity
3. Identify data potentially exposed
4. Assess financial impact

### 8.3 Recovery and Remediation

**Short-term (4-24 hours):**

1. Generate new credentials
2. Update all systems
3. Verify functionality
4. Enhanced monitoring

**Medium-term (1-7 days):**

1. Root cause analysis
2. Policy/procedure updates
3. Additional training
4. Vendor notifications (if applicable)

**Long-term (1-4 weeks):**

1. Post-incident review
2. Security improvements
3. Audit of similar secrets
4. Update documentation

### 8.4 Notification Requirements

**Internal:**

- CTO immediate notification
- Security team mobilization
- Affected team notifications
- Executive briefing

**External (if required):**

- Regulatory notifications (FSCA, FIC)
- Customer notifications (if data affected)
- Law enforcement (if criminal)
- Insurance provider

---

## Section 9: Audit and Compliance

### 9.1 Regular Audits

**Quarterly:**

- Secret access review
- Unused credential identification
- Rotation schedule compliance
- Permission adequacy

**Annual:**

- Full secrets inventory
- Policy compliance review
- Third-party audit (external)
- Key ceremony validation

### 9.2 Audit Trail Requirements

**Logged Events:**

- All secret access (who, when, what)
- Secret creation
- Secret rotation
- Secret deletion
- Permission changes
- Failed access attempts

**Log Retention:**

- Minimum 2 years
- Immutable storage
- SIEM integration
- Regular review

### 9.3 Compliance Mapping

| Regulation | Requirement     | Implementation              |
| ---------- | --------------- | --------------------------- |
| FICA       | Audit trail     | Comprehensive logging       |
| POPIA      | Data protection | Encryption, access controls |
| ISO 27001  | Key management  | HSMs, procedures            |
| SOC 2      | Access controls | RBAC, rotation              |

---

## Section 10: Training and Awareness

### 10.1 Required Training

**All Employees:**

- Secrets handling basics
- Phishing awareness
- Incident reporting
- Policy acknowledgment

**Developers:**

- Secure coding (no hardcoded secrets)
- Pre-commit hooks usage
- Secrets management tools
- Incident response

**DevOps/Security:**

- Secrets management systems
- Key ceremony procedures
- Incident response
- Advanced threat detection

### 10.2 Training Schedule

| Topic             | Frequency           | Audience              |
| ----------------- | ------------------- | --------------------- |
| Policy overview   | Annual              | All                   |
| Secure coding     | Annual              | Developers            |
| Tools training    | Onboarding + annual | DevOps                |
| Incident response | Quarterly drills    | Security team         |
| Key ceremony      | As needed           | Designated custodians |

---

## Appendix A: Quick Reference

### Secret Storage Decision Tree

```
Is it a blockchain key?
├── YES: Use HSM or hardware wallet
│   └── Is it for significant funds?
│       ├── YES: Multi-sig + cold storage
│       └── NO: Hardware wallet
└── NO: Is it production?
    ├── YES: Use Vault/secrets manager
    │   └── Is it critical infrastructure?
    │       ├── YES: HSM-backed
    │       └── NO: Standard vault
    └── NO: .env.local (never commit)
```

### Emergency Contacts

| Role          | Contact               | Use For                 |
| ------------- | --------------------- | ----------------------- |
| Security Team | security@stremiium.io | Suspected compromise    |
| CTO           | [Secure channel]      | Critical incidents      |
| On-call       | [PagerDuty]           | After hours emergencies |

### Tools Quick Reference

| Purpose             | Tool                    | Documentation   |
| ------------------- | ----------------------- | --------------- |
| Secrets detection   | git-secrets, truffleHog | [Internal wiki] |
| Secrets management  | HashiCorp Vault         | [Internal wiki] |
| Password generation | 1Password CLI           | [Internal wiki] |
| Key ceremony        | Custom procedure        | [Secure docs]   |

---

_Policy Version: 1.0_  
_Last Updated: 2026-04-22_  
_Next Review: 2026-07-22_  
_Classification: Critical - Internal Only_
