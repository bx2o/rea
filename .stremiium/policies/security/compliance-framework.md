---
description: 'Stremiium Compliance Framework - Stremiium organizational framework'
document_type: 'framework'
version: '3.0'
last_updated: '2026-04-28'
status: 'active'
scope: '16-council ecosystem'
---

# Stremiium Compliance Framework

## Section 1: Framework Overview

**Framework ID:** COMP-FRM-001  
**Framework Name:** Stremiium Regulatory Compliance Management System  
**Version:** 1.0  
**Effective Date:** 2026-04-22  
**Owner:** Chief Technology Officer / Legal-Compliance-Squad-Captain  
**Scope:** All Stremiium operations, services, and subsidiaries

---

## Section 2: Regulatory Landscape

### 2.1 Primary Regulatory Bodies

| Regulatory Body                                           | Jurisdiction | Applicable Services         | Key Requirements                              |
| --------------------------------------------------------- | ------------ | --------------------------- | --------------------------------------------- |
| **FSCA** (Financial Sector Conduct Authority)             | South Africa | All crypto services         | CASP licensing, fit and proper, RE exams      |
| **FIC** (Financial Intelligence Centre)                   | South Africa | All financial services      | Accountable institution registration, AML/CFT |
| **SARB** (South African Reserve Bank)                     | South Africa | Cross-border transactions   | Exchange control, currency regulations        |
| **SARS** (South African Revenue Service)                  | South Africa | All taxable activities      | CARF reporting, income tax, VAT               |
| **NGB** (National Gambling Board)                         | South Africa | Prediction markets, betting | Gambling licenses, provincial licensing       |
| **ICASA** (Independent Communications Authority)          | South Africa | Broadcasting Network        | Broadcasting licenses, spectrum               |
| **CIPC** (Companies and Intellectual Property Commission) | South Africa | Company operations          | Company registration, annual returns          |
| **Information Regulator**                                 | South Africa | All data processing         | POPIA compliance, data protection             |

### 2.2 International Compliance

| Regulation           | Region      | Applicability          | Compliance Status       |
| -------------------- | ----------- | ---------------------- | ----------------------- |
| **GDPR**             | EU          | EU user data           | Planned Q3 2026         |
| **MiCA**             | EU          | EU crypto services     | Monitoring              |
| **FATF Travel Rule** | Global      | Crypto transfers       | Implemented April 2025  |
| **CARF**             | OECD/Global | Tax reporting          | Implementing March 2026 |
| **VARA**             | UAE (Dubai) | If operating in UAE    | Not yet applicable      |
| **DORA**             | EU          | Operational resilience | Monitoring              |

---

## Section 3: CASP Licensing Framework

### 3.1 CASP Categories

Stremiium must obtain and maintain the following CASP license categories under the FAIS Act:

**Category I - Advice and Intermediary Services:**

- Advice on crypto assets (Fan Tokens, BLTs, STM Token)
- Intermediary services for token trading
- Portfolio management (if applicable)

**Requirements:**

- Key Individuals must pass RE1 (Representative Examination)
- Representatives must pass RE5
- Compliance with fit and proper requirements
- Professional indemnity insurance
- Completion by: June 30, 2025

### 3.2 Fit and Proper Requirements

**For Key Individuals (KIs):**

- Honesty and integrity (background checks)
- Competency (RE1 examination passed)
- Financial soundness (credit checks)
- Operational ability (experience verification)

**Examination Schedule:**

- RE1: For Key Individuals (management, oversight)
- RE5: For Representatives (operational roles)
- Deadline: June 30, 2025
- Renewal: Every 3 years

### 3.3 Compliance Officer Requirements

**Mandatory Appointment:**

- Must be approved by FSCA
- Must be a Key Individual
- Cannot be outsourced to third party
- Must have direct access to board

**Responsibilities:**

- Compliance monitoring
- Regulatory reporting
- Policy development
- Training coordination
- Incident escalation

---

## Section 4: FICA Compliance Framework

### 4.1 Accountable Institution Status

Stremiium must register as an Accountable Institution under FICA within 90 days of commencing operations.

**Registration Requirements:**

- Submit Form 1 to FIC
- Appoint Compliance Officer
- Implement Risk Management and Compliance Programme (RMCP)
- Register with FSCA if applicable (overlapping requirement)

### 4.2 Risk Management and Compliance Programme (RMCP)

**Required Components:**

1. **Risk Assessment:**
   - Client risk categorization (low, medium, high)
   - Transaction risk assessment
   - Product/service risk assessment
   - Geographic risk assessment
   - Delivery channel risk assessment

2. **Client Due Diligence (CDD):**
   - Identity verification procedures
   - Beneficial ownership identification
   - Ongoing due diligence
   - Enhanced due diligence (EDD) for high-risk

3. **Record Keeping:**
   - CDD records: 5 years from relationship end
   - Transaction records: 5 years from transaction
   - STR records: Indefinite retention

4. **Reporting:**
   - Suspicious Transaction Reports (STRs)
   - Cash Threshold Reports (CTRs) - R24,999.99 threshold
   - Terrorist Property Reports (TPRs)

### 4.3 The Travel Rule Implementation

**Effective Date:** April 30, 2025  
**Threshold:** All transactions (zero threshold)  
**R5,000+:** Full verification required

**Data Requirements:**

- Originator: Name, account number, physical address
- Beneficiary: Name, account number
- Must travel with transaction

**Implementation:**

- Technical integration with blockchain transactions
- Customer notification and consent
- Privacy considerations (data minimization)
- Cross-border coordination

---

## Section 5: CARF Implementation (2026)

### 5.1 Crypto-Asset Reporting Framework

**Effective Date:** March 1, 2026  
**First Reporting Period Ends:** February 28, 2027  
**First Returns Due:** May 31, 2027

### 5.2 Reporting Obligations

**Data to Report:**

- User identity information
- Transaction details (acquisitions, disposals, transfers)
- Wallet activity
- Rand value equivalents
- Exchange rates used

**Transactions to Report:**

- Crypto to fiat trades
- Crypto to crypto trades
- Wallet transfers
- Staking rewards
- Airdrops (if applicable)

### 5.3 Technical Implementation

**Data Collection:**

- Automated transaction logging
- Exchange rate tracking
- User identification linking
- Wallet address mapping

**Reporting Format:**

- XML format per OECD specifications
- Secure transmission to SARS
- Encryption of sensitive data
- Retention for 5 years

### 5.4 Tax Implications for Users

**Revenue Tax:**

- Trading activities
- Staking rewards (ordinary income)
- Mining income

**Capital Gains Tax:**

- Investment disposals
- Long-term holdings (>3 years typically)
- Personal use exemption considerations

**User Communication:**

- Tax-ready reporting in app
- Annual tax statements
- Clear categorization guidance
- Disclaimer (not tax advice)

---

## Section 6: POPIA Data Protection

### 6.1 POPIA Compliance Structure

**Information Officer:** [To be appointed - required by law]
**Deputy Information Officers:** [Legal-Compliance Squad members]

### 6.2 Data Processing Principles

**Lawfulness:**

- Consent for marketing
- Contractual necessity for services
- Legal obligation for regulatory compliance
- Legitimate interests (balanced against user rights)

**Minimality:**

- Collect only necessary data
- On-chain data minimization
- Off-chain storage for sensitive data
- Regular data purging

**Purpose Specification:**

- Clear privacy policy
- Specific purposes for each data type
- No secondary use without consent
- Purpose limitation enforcement

### 6.3 User Rights Implementation

| Right       | Implementation      | Technical Mechanism      |
| ----------- | ------------------- | ------------------------ |
| Access      | User dashboard      | Self-service data export |
| Correction  | In-app editing      | Update APIs              |
| Deletion    | Request workflow    | Anonymization procedures |
| Objection   | Preference settings | Processing flags         |
| Portability | Data export         | Standard format download |

### 6.4 Cross-Border Transfers

**Restrictions:**

- Third party must have adequate protection
- Binding corporate rules
- Standard contractual clauses
- User consent (last resort)

**Blockchain Consideration:**

- Public blockchains are inherently cross-border
- Minimize personal data on-chain
- Hash-based verification
- Transparency about immutability

---

## Section 7: Gambling Regulation Compliance

### 7.1 Prediction Markets and Sportsbook

**Regulatory Framework:** National Gambling Act 7 of 2004

**Licensing Requirements:**

- Provincial Bookmaker's License (Western Cape or Gauteng preferred)
- National Gambling Board oversight
- Provincial Licensing Authority compliance

**Licensing Process:**

1. Application to Provincial Board
2. Business plan submission
3. Financial viability assessment
4. Software audit (SANS certification)
5. Background checks (fit and proper)
6. License issuance (6-12 months)

### 7.2 Technical Requirements

**Software Certification:**

- GLI Africa or equivalent audit
- RNG certification
- Prediction engine verification
- Security audit

**Operational Requirements:**

- Local company registration
- Resident Public Officer
- Physical office in licensing province
- Capital adequacy proof

### 7.3 Anti-Money Laundering

**Specific Requirements:**

- FIC registration (as Accountable Institution)
- Source of funds verification for large bets
- STR reporting for suspicious patterns
- Record keeping per Gambling Act

---

## Section 8: Tax Compliance (SARS)

### 8.1 Corporate Tax Obligations

**Income Tax:**

- Annual ITR14 submission
- Provisional tax payments (if applicable)
- Transfer pricing (if international transactions)

**VAT:**

- Registration if R1M+ turnover
- Monthly or bi-monthly returns
- Digital services to SA residents (15% VAT)
- Export exemptions for international services

**PAYE/UIF/SDL:**

- Employee tax withholding
- Monthly EMP201 submissions
- Annual IRP5/IT3(a) issuance

### 8.2 Crypto-Specific Tax

**GGR Tax (Gross Gaming Revenue):**

- 5-15% depending on province
- For gambling operations
- Monthly/quarterly payments

**Crypto Asset Tax:**

- Company holdings disclosed
- Valuation at year-end
- Trading profits taxable

---

## Section 9: Intellectual Property Compliance

### 9.1 Protection Strategy

**Trademarks:**

- Stremiium name and logo
- Service names (Runify, OpenClaw, etc.)
- Token names and symbols
- Registration with CIPC

**Copyright:**

- Software code
- Documentation
- Creative content
- Automatic + registration

**Patents:**

- Novel blockchain innovations
- AI/ML processes
- Drone technology (Aviation Drones)
- Assessment pending

### 9.2 Third-Party IP

**Licensing:**

- Open source compliance
- Third-party software licenses
- Music licensing (Stremiium Sound)
- Sports rights (Fan Tokens, Broadcasting)

**User Content:**

- NFT creator rights
- Artist agreements (Sound)
- Terms of service clarity
- DMCA compliance

---

## Section 10: Industry-Specific Compliance

### 10.1 Sports Agency (FIFA/SARU/CSA/SASCOC)

**FIFA Football Agent Regulations (FFAR):**

- Agent examination (April/May 2026)
- Annual license fee (~$600)
- CPD requirements
- Commission caps (3-10%)

**Federation Requirements:**

- SAFA, SARU, CSA accreditation
- Fit and proper testing
- Insurance requirements
- Code of conduct adherence

### 10.2 Broadcasting (ICASA)

**Licensing:**

- Commercial Broadcasting Service License
- ITA process participation
- DTT compliance

**Sports Rights:**

- Listed events (non-exclusivity)
- Quarterly reporting
- Public interest compliance

### 10.3 Drone Operations (SACAA)

**Regulatory Body:** South African Civil Aviation Authority

**Requirements:**

- RPL (Remote Pilot License) for operators
- ROC (Remote Operator Certificate) for company
- Registration of all drones
- Insurance requirements
- Geofencing compliance

---

## Section 11: Compliance Monitoring and Reporting

### 11.1 Compliance Calendar

| Deadline   | Activity                   | Owner                | Status               |
| ---------- | -------------------------- | -------------------- | -------------------- |
| Monthly    | FICA CTR filing            | Compliance Officer   | Template ready       |
| Monthly    | VAT return (if registered) | Finance              | Pending registration |
| Quarterly  | FICA compliance review     | Compliance Officer   | To implement         |
| Quarterly  | STR review                 | Compliance Officer   | To implement         |
| Annual     | CASP license renewal       | Legal-Compliance     | TBD                  |
| Annual     | Company returns (CIPC)     | Company Secretary    | To appoint           |
| March 2027 | First CARF submission      | Compliance + Finance | Preparing            |

### 11.2 Compliance Metrics

**Key Risk Indicators (KRIs):**

- Number of STRs filed
- Regulatory findings
- Policy exceptions
- Training completion rates
- Audit findings

**Reporting:**

- Monthly dashboard to executives
- Quarterly board report
- Annual compliance attestation

---

## Section 12: Incident and Breach Reporting

### 12.1 Data Breach Notification (POPIA)

**Timeline:** Without undue delay, possibly within 72 hours
**To:** Information Regulator and affected data subjects
**Content:**

- Nature of breach
- Categories of data
- Approximate number of subjects
- Likely consequences
- Measures taken

### 12.2 Regulatory Breach Reporting

**FSCA:**

- Material breaches within reasonable time
- Operational issues affecting clients
- Licensing condition breaches

**FIC:**

- Compliance officer appointment changes
- RMCP updates
- Significant control failures

---

## Section 13: Training and Awareness

### 13.1 Mandatory Training

| Role            | Training                   | Frequency |
| --------------- | -------------------------- | --------- |
| All staff       | POPIA awareness            | Annual    |
| All staff       | FICA basics                | Annual    |
| Compliance team | Advanced FICA              | Quarterly |
| Developers      | Secure coding + compliance | Annual    |
| Executives      | Regulatory updates         | Quarterly |
| Customer-facing | CASP requirements          | Annual    |

### 13.2 Certification Tracking

**Examinations:**

- RE1: Key Individuals
- RE5: Representatives
- FIFA exam: Sports agents
- Drone licenses: Aviation team

---

## Section 14: Third-Party Compliance

### 14.1 Due Diligence Requirements

**Before Engagement:**

- Regulatory license verification
- Compliance history check
- Financial stability assessment
- Security capability review

**Ongoing:**

- Annual compliance attestation
- Right to audit
- Breach notification requirements
- Contractual compliance clauses

### 14.2 Critical Vendors

| Vendor Type               | Compliance Requirements                     |
| ------------------------- | ------------------------------------------- |
| Banking partners          | FSCA licensing, correspondent banking       |
| KYC providers             | POPIA compliance, data processing agreement |
| Blockchain infrastructure | SOC 2, security audits                      |
| Payment processors        | PCI DSS, FSCA compliance                    |
| Cloud providers           | SOC 2, data residency                       |

---

## Section 15: Policy Maintenance

### 15.1 Review Schedule

**Quarterly:**

- Regulatory update review
- Compliance metrics analysis
- Training effectiveness review

**Annually:**

- Full framework review
- Policy updates
- Board compliance report
- External compliance audit

### 15.2 Change Management

**Process:**

1. Regulatory change identification
2. Impact assessment
3. Policy update
4. Training development
5. Implementation
6. Verification

**Triggers:**

- New regulations
- Regulatory guidance updates
- Enforcement actions (industry)
- Internal incidents
- Audit findings

---

## Appendix A: Regulatory Contact Directory

| Authority             | Contact          | Purpose               |
| --------------------- | ---------------- | --------------------- |
| FSCA                  | [Public contact] | Licensing, compliance |
| FIC                   | [Secure channel] | AML/CFT guidance      |
| SARS                  | [Public contact] | Tax, CARF             |
| SARB                  | [Public contact] | Exchange control      |
| Information Regulator | [Public contact] | POPIA                 |

## Appendix B: Compliance Document Repository

| Document          | Location         | Owner              |
| ----------------- | ---------------- | ------------------ |
| CASP License      | [Secure storage] | Legal-Compliance   |
| FICA Registration | [Secure storage] | Compliance Officer |
| RMCP              | [Policy system]  | Compliance Officer |
| Privacy Policy    | [Website/public] | Legal-Compliance   |
| Terms of Service  | [Website/public] | Legal-Compliance   |

## Appendix C: Compliance Risk Register

| Risk                | Likelihood | Impact   | Mitigation                    | Owner               |
| ------------------- | ---------- | -------- | ----------------------------- | ------------------- |
| License revocation  | Low        | Critical | Strict compliance monitoring  | Legal-Compliance    |
| CARF non-compliance | Medium     | High     | Automated reporting build     | CTO                 |
| Data breach         | Medium     | Critical | Security controls, encryption | Cybersecurity Squad |
| Tax evasion claims  | Low        | High     | Transparent reporting         | CFO                 |

---

_Framework Version: 1.0_  
_Last Updated: 2026-04-22_  
_Next Review: 2026-07-22_  
_Classification: Internal - Confidential_
