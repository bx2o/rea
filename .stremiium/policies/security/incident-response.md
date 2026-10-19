---
description: 'Stremiium Incident Response Plan - Stremiium organizational framework'
document_type: 'framework'
version: '3.0'
last_updated: '2026-04-28'
status: 'active'
scope: '16-council ecosystem'
---

# Stremiium Incident Response Plan

## Section 1: Plan Overview

**Plan ID:** IRP-001  
**Plan Name:** Stremiium Cybersecurity Incident Response Plan  
**Version:** 1.0  
**Effective Date:** 2026-04-22  
**Owner:** Cybersecurity-Intelligence-Squad-Captain  
**Classification:** Confidential - Internal Use Only  
**Review Cycle:** Quarterly

---

## Section 2: Introduction and Purpose

### 2.1 Purpose

This Incident Response Plan (IRP) establishes the framework for detecting, responding to, and recovering from cybersecurity incidents affecting Stremiium's information systems, blockchain infrastructure, smart contracts, AI agent ecosystem, and customer data.

### 2.2 Objectives

1. **Minimize Impact:** Reduce financial, operational, and reputational damage
2. **Rapid Response:** Establish clear procedures for timely incident handling
3. **Evidence Preservation:** Maintain forensic integrity for investigations
4. **Regulatory Compliance:** Meet FSCA, FICA, and POPIA notification requirements
5. **Continuous Improvement:** Learn from incidents to strengthen defenses

### 2.3 Scope

**In Scope:**

- Cybersecurity incidents (breaches, malware, DDoS)
- Blockchain incidents (smart contract exploits, key compromises)
- Data protection incidents (POPIA breaches)
- Financial crimes (fraud, money laundering)
- AI/ML system anomalies
- Insider threats
- Third-party security incidents affecting Stremiium

**Out of Scope:**

- Physical security incidents (handled separately)
- Natural disasters (business continuity plan)
- Non-security IT incidents (standard support)

---

## Section 3: Incident Response Team

### 3.1 Incident Response Organization

```
Incident Commander (IC)
├── Technical Lead
│   ├── Blockchain Security Specialist
│   ├── Smart Contract Auditor
│   ├── Infrastructure Security Engineer
│   └── Application Security Engineer
├── Communications Lead
│   ├── Internal Communications
│   ├── External Communications
│   └── Regulatory Liaison
├── Legal/Compliance Lead
│   ├── Regulatory Notifications
│   ├── Legal Counsel
│   └── Evidence Preservation
└── Business Continuity Lead
    ├── Operations Coordination
    ├── Customer Impact Assessment
    └── Recovery Coordination
```

### 3.2 Roles and Responsibilities

**Incident Commander (IC):**

- Overall incident ownership
- Resource allocation authority
- External communication approval
- Escalation decisions

**Primary IC:** Cybersecurity-Intelligence-Squad-Captain  
**Backup IC:** Chief Technology Officer (Kagiso Mmusi)  
**Executive IC:** CEO (Mychael) - for Critical (P0) incidents

**Technical Lead:**

- Technical investigation
- Containment execution
- Evidence collection
- Root cause analysis

**Communications Lead:**

- Internal status updates
- External messaging coordination
- Media management (if public)
- Customer notifications

**Legal/Compliance Lead:**

- Regulatory notification requirements
- Legal privilege protection
- Evidence chain of custody
- Law enforcement coordination

**Business Continuity Lead:**

- Service restoration priorities
- Customer impact mitigation
- Alternative process activation
- Recovery verification

### 3.3 Contact Directory

| Role                | Primary                  | Backup             | Contact Method       |
| ------------------- | ------------------------ | ------------------ | -------------------- |
| Incident Commander  | C12 Captain              | CTO                | Secure pager + phone |
| Technical Lead      | Senior Security Engineer | Security Engineer  | Phone + Slack        |
| Communications      | C09 Marketing Captain    | PR Lead            | Phone + email        |
| Legal/Compliance    | C01 Legal Captain        | Compliance Officer | Secure channel       |
| Business Continuity | C02 Operations Captain   | VP Operations      | Phone + Slack        |
| CEO                 | Mychael                  | -                  | Direct phone         |

---

## Section 4: Incident Classification

### 4.1 Severity Levels

**P0 - Critical (Red)**

- Active exploitation in progress
- Smart contract vulnerability being exploited
- Significant financial loss (>R100,000)
- Massive data breach affecting >1000 users
- System-wide outage
- **Response Time:** Immediate (15 minutes)
- **Escalation:** CEO notification within 30 minutes

**P1 - High (Orange)**

- Confirmed security breach
- Unauthorized access detected
- Moderate data breach (<1000 users)
- Financial loss potential (R10,000 - R100,000)
- Service degradation >50%
- **Response Time:** 1 hour
- **Escalation:** CTO notification within 1 hour

**P2 - Medium (Yellow)**

- Suspicious activity detected
- Vulnerability discovered (not yet exploited)
- Minor data exposure
- Limited service impact
- **Response Time:** 4 hours
- **Escalation:** Security team lead

**P3 - Low (Blue)**

- Policy violation
- Minor misconfiguration
- Failed attack attempts
- No immediate impact
- **Response Time:** 24 hours
- **Escalation:** Standard security queue

### 4.2 Incident Types

| Category             | Examples                                                | Typical Severity |
| -------------------- | ------------------------------------------------------- | ---------------- |
| **Blockchain**       | Smart contract exploit, reentrancy, oracle manipulation | P0-P1            |
| **Key Compromise**   | Private key theft, wallet drain                         | P0               |
| **Data Breach**      | Unauthorized data access, leak                          | P0-P1            |
| **Malware**          | Ransomware, trojans, viruses                            | P1-P2            |
| **DDoS**             | Service unavailability                                  | P1-P2            |
| **Insider Threat**   | Data theft, sabotage                                    | P1-P2            |
| **Fraud**            | Financial fraud, account takeover                       | P1-P2            |
| **Phishing**         | Credential theft, social engineering                    | P2-P3            |
| **Misconfiguration** | Exposed data, weak settings                             | P2-P3            |

---

## Section 5: Incident Response Lifecycle

### 5.1 Phase 1: Preparation

**Ongoing Activities:**

- IR team training and drills (quarterly)
- Tool maintenance and updates
- Contact list verification (monthly)
- Playbook updates
- Threat intelligence monitoring

**Tools and Resources:**

- SIEM system (log aggregation)
- Endpoint Detection and Response (EDR)
- Blockchain monitoring tools
- Forensic investigation toolkit
- Secure communication channels
- War room (physical and virtual)

### 5.2 Phase 2: Detection and Analysis

**Detection Sources:**

- Automated monitoring alerts
- User reports
- Threat intelligence feeds
- Blockchain anomaly detection
- Agent behavior monitoring
- Third-party notifications

**Initial Analysis (First 15 minutes):**

1. Validate the alert (true positive vs. false positive)
2. Determine incident type and severity
3. Identify affected systems/data
4. Assign initial severity rating
5. Notify Incident Commander
6. Create incident ticket/record

**Investigation Questions:**

- What happened? (timeline of events)
- When did it start? (initial compromise)
- Who is affected? (users, systems, data)
- How did it happen? (attack vector)
- What is the current status? (ongoing or contained)
- What is the potential impact? (financial, operational, reputational)

**Evidence Collection:**

- System logs (preserve before they rotate)
- Network traffic captures
- Blockchain transaction history
- Memory dumps (if applicable)
- File system images
- Configuration backups

### 5.3 Phase 3: Containment

**Short-term Containment (Stop the bleeding):**

- Isolate affected systems
- Block malicious IP addresses
- Revoke compromised credentials
- Disable affected user accounts
- Pause smart contract functions (if applicable)
- Enable emergency circuit breakers

**Blockchain-Specific Containment:**

- Activate emergency pause on smart contracts
- Implement multi-sig time delays
- Move funds from compromised wallets
- Notify exchanges to freeze accounts
- Deploy hotfixes to contracts (if upgradeable)

**Long-term Containment (Prevent recurrence):**

- Patch vulnerabilities
- Update security rules
- Enhance monitoring
- Implement additional controls
- Segment network further

**Containment Documentation:**

- All containment actions logged
- Before/after state comparison
- Impact assessment of containment actions
- Approval for each significant action

### 5.4 Phase 4: Eradication

**Eradication Steps:**

1. Remove malware/artifacts
2. Patch vulnerabilities
3. Reset compromised credentials
4. Close attack vectors
5. Verify threat elimination
6. Test systems for residual compromise

**Blockchain Eradication:**

- Deploy fixed smart contracts
- Migrate funds to secure wallets
- Revoke compromised approvals
- Update access controls
- Verify on-chain state integrity

**Verification:**

- Malware scans clean
- Vulnerability scans pass
- Penetration testing confirms closure
- Blockchain forensics confirm no residual threats

### 5.5 Phase 5: Recovery

**Recovery Priorities:**

1. Critical systems (blockchain nodes, core services)
2. Customer-facing services
3. Internal operations
4. Development environments

**Recovery Steps:**

1. Restore from clean backups
2. Verify system integrity
3. Rebuild compromised systems
4. Re-enable services gradually
5. Enhanced monitoring during recovery
6. User notification of service restoration

**Blockchain Recovery:**

1. Unpause contracts after verification
2. Restore normal transaction processing
3. Verify smart contract state
4. Resume deposit/withdrawal operations
5. User balance verification

### 5.6 Phase 6: Post-Incident Activity

**Post-Incident Review (Within 1 week):**

1. Timeline reconstruction
2. Root cause analysis
3. Impact assessment
4. Response effectiveness review
5. Lessons learned
6. Improvement recommendations

**Documentation:**

- Final incident report
- Technical analysis
- Timeline of events
- Evidence preservation notes
- Regulatory notifications sent
- Customer communications

**Improvements:**

- Update security controls
- Revise procedures
- Additional training
- Tool enhancements
- Policy updates

---

## Section 6: Communication Procedures

### 6.1 Internal Communication

**Notification Timeline:**

| Time     | Action                | Recipients                     |
| -------- | --------------------- | ------------------------------ |
| 0 min    | Incident detected     | Security team                  |
| 15 min   | Severity determined   | Incident Commander             |
| 30 min   | Initial briefing      | Executive team (if P0/P1)      |
| 1 hour   | Status update         | Department heads               |
| 4 hours  | Progress report       | All staff (if customer impact) |
| 24 hours | Situation report      | Board (if P0)                  |
| Daily    | Updates until closure | Stakeholders                   |
| Closure  | Final report          | All relevant parties           |

**Communication Channels:**

- **P0:** Secure conference bridge + Slack #incident-response
- **P1:** Slack #incident-response + email
- **P2/P3:** Standard ticketing system

### 6.2 External Communication

**Customer Notification:**

- Required for P0 and P1 incidents affecting customers
- Within 72 hours of discovery (per POPIA)
- Clear, non-technical language
- Remediation steps taken
- Protective measures customers should take

**Regulatory Notification:**

- **FSCA:** Material breaches within reasonable time
- **FIC:** STR for suspected money laundering
- **Information Regulator:** Data breaches within 72 hours
- **SARS:** If tax-related fraud
- **Law Enforcement:** Criminal activity

**Public Disclosure:**

- Required for significant incidents
- Coordinated through Communications Lead
- CEO approval required
- Transparency balanced with security

**Media Response:**

- Single spokesperson (CEO or designated)
- Pre-approved messaging
- No speculation
- Factual, measured responses

---

## Section 7: Specific Incident Playbooks

### 7.1 Smart Contract Exploit

**Detection:**

- Unusual transaction patterns
- Large unexpected fund movements
- Reentrancy attack patterns
- Oracle manipulation

**Immediate Actions (0-15 min):**

1. Alert C12 Captain and CTO
2. Activate emergency pause (if available)
3. Document exploit transaction hashes
4. Preserve all relevant logs

**Containment (15-60 min):**

1. Confirm pause is active
2. Identify remaining at-risk funds
3. Move unaffected funds to secure wallets
4. Block exploit contract interactions

**Eradication (1-4 hours):**

1. Analyze exploit mechanism
2. Develop fix
3. Test fix in forked environment
4. Prepare upgrade transaction

**Recovery (4-24 hours):**

1. Deploy fixed contract
2. Migrate user funds
3. Unpause contract
4. Resume operations

**Post-Incident:**

- Public disclosure post-mortem
- Bug bounty consideration
- User compensation assessment

### 7.2 Private Key Compromise

**Detection:**

- Unauthorized transactions
- Wallet monitoring alerts
- Suspicious fund movements

**Immediate Actions:**

1. Confirm compromise (analyze transactions)
2. Alert all multi-sig holders
3. Move remaining funds to cold storage
4. Revoke all token approvals

**Containment:**

1. Freeze affected accounts at exchanges
2. Notify partners to halt transactions
3. Preserve transaction evidence
4. Secure remaining key shards

**Recovery:**

1. Rotate all related keys
2. Update contract admin keys
3. Audit all system access
4. User notification and guidance

### 7.3 Data Breach (POPIA)

**Detection:**

- Unauthorized database access
- Exposed customer data
- Insider data theft
- Third-party breach affecting Stremiium

**Immediate Actions:**

1. Contain breach (isolate systems)
2. Assess scope (what data, how many users)
3. Preserve evidence
4. Notify Information Officer

**Assessment (24-72 hours):**

1. Determine data types involved
2. Count affected individuals
3. Assess harm potential
4. Document timeline

**Notification:**

1. Information Regulator (within 72 hours)
2. Affected individuals (without undue delay)
3. Public disclosure (if required)
4. Law enforcement (if criminal)

**Remediation:**

1. Fix vulnerability
2. Enhanced monitoring
3. Offer identity protection (if applicable)
4. Policy/process updates

### 7.4 DDoS Attack

**Detection:**

- Service degradation alerts
- Traffic anomaly detection
- Customer complaints
- Bandwidth saturation

**Immediate Actions:**

1. Activate DDoS mitigation
2. Scale resources
3. Contact CDN provider
4. Enable rate limiting

**Response:**

1. Analyze attack patterns
2. Implement filtering rules
3. Block malicious IPs
4. Geofencing if needed

**Recovery:**

1. Gradual service restoration
2. Monitor for persistence
3. Post-attack analysis
4. Strengthen DDoS defenses

### 7.5 Insider Threat

**Detection:**

- Unusual access patterns
- Data exfiltration alerts
- Behavioral anomalies
- Whistleblower reports

**Immediate Actions:**

1. Preserve evidence covertly
2. Limit access (without alerting suspect)
3. Document timeline
4. Engage legal counsel

**Investigation:**

1. Forensic analysis
2. Interview witnesses
3. Review access logs
4. Document scope

**Response:**

1. Disciplinary/legal action
2. Revoke all access
3. Recover stolen data/assets
4. Policy updates

---

## Section 8: Regulatory and Legal Considerations

### 8.1 FICA Obligations

**Suspicious Transaction Reports (STRs):**

- File within prescribed timeframe
- Document suspicious indicators
- Secure transmission to FIC
- Maintain confidentiality

**Record Retention:**

- Preserve all incident records
- 5-year minimum retention
- Secure storage
- Audit trail integrity

### 8.2 POPIA Obligations

**Breach Notification Requirements:**

- Information Regulator: Within 72 hours
- Affected individuals: Without undue delay
- Documentation: Breach register, impact assessment

**Evidence Preservation:**

- Chain of custody documentation
- Forensic integrity maintenance
- Legal privilege considerations
- Law enforcement coordination

### 8.3 Law Enforcement Coordination

**When to Involve Law Enforcement:**

- Criminal activity confirmed
- Significant financial loss
- External threat actors
- Data theft

**Coordination Process:**

1. Legal counsel engagement
2. Evidence preparation
3. Controlled disclosure
4. Ongoing cooperation

---

## Section 9: Training and Testing

### 9.1 Training Requirements

| Role       | Training                         | Frequency |
| ---------- | -------------------------------- | --------- |
| IR Team    | Advanced incident response       | Annual    |
| IR Team    | Tabletop exercises               | Quarterly |
| All Staff  | Incident reporting               | Annual    |
| Developers | Smart contract incident handling | Annual    |
| Executives | Crisis management                | Annual    |

### 9.2 Testing Schedule

**Quarterly:**

- Tabletop exercises (different scenarios)
- Communication tree tests
- Tool functionality checks

**Annually:**

- Full-scale simulation
- Third-party IR firm assessment
- Plan review and updates

---

## Section 10: Plan Maintenance

### 10.1 Review Schedule

| Review Type          | Frequency           | Owner       |
| -------------------- | ------------------- | ----------- |
| Quick review         | Monthly             | C12 Captain |
| Full review          | Quarterly           | IR Team     |
| Comprehensive review | Annually            | CTO         |
| Post-incident update | After each incident | IR Team     |

### 10.2 Maintenance Triggers

**Immediate Update Required:**

- Significant organizational changes
- New regulatory requirements
- Major infrastructure changes
- After significant incidents
- Tool/process changes

### 10.3 Version Control

- Version numbering: Major.Minor (e.g., 1.0, 1.1, 2.0)
- Change log maintenance
- Distribution tracking
- Acknowledgment of updates

---

## Appendix A: Quick Reference Cards

### First 15 Minutes Checklist

**Incident Commander:**

- [ ] Alert received and validated
- [ ] Severity assessed
- [ ] Team notified
- [ ] Initial resources assigned
- [ ] Executive notification (if P0/P1)

**Technical Lead:**

- [ ] Affected systems identified
- [ ] Initial evidence preserved
- [ ] Containment options assessed
- [ ] Logs secured

**Communications Lead:**

- [ ] Communication channels established
- [ ] Initial status drafted
- [ ] Executive briefing prepared
- [ ] Customer notification drafted (if needed)

### Severity Assessment Matrix

| Factor              | P0              | P1                | P2       | P3   |
| ------------------- | --------------- | ----------------- | -------- | ---- |
| Financial Impact    | >R100k          | R10k-R100k        | <R10k    | None |
| Data Affected       | >1000 users     | 100-1000          | <100     | None |
| Service Impact      | Complete outage | Major degradation | Minor    | None |
| Active Exploitation | Yes             | Confirmed         | Possible | No   |

---

## Appendix B: Contact Lists

### Internal Contacts

[Redacted from public version - see secure document]

### External Contacts

| Organization          | Contact  | Purpose                 |
| --------------------- | -------- | ----------------------- |
| FSCA                  | [Public] | Regulatory notification |
| FIC                   | [Secure] | STR filing              |
| Information Regulator | [Public] | Breach notification     |
| SAPS Cybercrime       | [Secure] | Criminal incidents      |
| Cyber Insurance       | [Secure] | Insurance claims        |
| External Forensics    | [Secure] | Investigation support   |
| Legal Counsel         | [Secure] | Legal advice            |

### Vendor Security Contacts

| Vendor                    | Security Contact | Escalation       |
| ------------------------- | ---------------- | ---------------- |
| Cloud Provider            | [Secure]         | 24/7 hotline     |
| CDN Provider              | [Secure]         | Emergency line   |
| Blockchain Infrastructure | [Secure]         | Priority support |

---

## Appendix C: Forms and Templates

### Incident Report Template

```
INCIDENT ID: IRP-[YYYY]-[NNNN]
DATE/TIME DETECTED:
SEVERITY: P0/P1/P2/P3
TYPE:
STATUS: Active/Contained/Resolved

SUMMARY:
[One paragraph description]

AFFECTED SYSTEMS:
-

IMPACT:
- Users affected:
- Financial impact:
- Data affected:

TIMELINE:
- Detected:
- Contained:
- Resolved:

ACTIONS TAKEN:
1.

NEXT STEPS:
1.

INCIDENT COMMANDER:
```

### Evidence Custody Form

```
Case ID:
Item Number:
Description:
Collected by:
Date/Time:
Location:
Hash (if digital):
Chain of custody:
```

---

_Plan Version: 1.0_  
_Last Updated: 2026-04-22_  
_Next Review: 2026-07-22_  
_Classification: Confidential - Internal Use Only_
