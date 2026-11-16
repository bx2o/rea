---
description: 'GDPR Compliance & Data Privacy - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# GDPR Compliance & Data Privacy - Skill Guide

**Skill Category**: Legal  
**Level**: Intermediate  
**Time to Proficiency**: 6-8 weeks  
**Last Updated**: February 18, 2026

---

## Overview

GDPR (General Data Protection Regulation) governs how organizations handle personal data. This skill covers compliance requirements and implementation strategies.

---

## Core GDPR Principles

### 1. Lawfulness, Fairness, Transparency

- Have legal basis for processing personal data
- Don't use data deceptively
- Be transparent about how data is used

### 2. Purpose Limitation

- Collect data for specified purposes
- Don't use for unrelated purposes
- Be explicit about purposes

### 3. Data Minimization

- Only collect necessary data
- Don't collect "just in case"
- Regularly delete unnecessary data

### 4. Accuracy

- Keep personal data accurate
- Update when it becomes inaccurate
- Users can request corrections

### 5. Storage Limitation

- Don't keep longer than necessary
- Delete when no longer needed
- Implement retention policies

### 6. Integrity & Confidentiality

- Protect data from unauthorized access
- Use encryption
- Prevent data breaches
- Secure deletion

---

## Rights Under GDPR

### Right to Access

**Users can request**: "What personal data do you have about me?"
**Response time**: 30 days
**Your action**: Provide all personal data in machine-readable format

### Right to Rectification

**Users can request**: "Correct my incorrect data"
**Your action**: Update data or correct inaccuracies

### Right to Erasure ("Right to be Forgotten")

**Users can request**: "Delete all my data"
**Exceptions**: Legal requirements, legitimate business reasons
**Your action**: Delete within 30 days

### Right to Restrict Processing

**Users can request**: "Don't process my data while I investigate"
**Your action**: Stop processing (but can still store)

### Right to Data Portability

**Users can request**: "Give me my data in portable format"
**Format**: CSV, JSON
**Your action**: Provide within 30 days

---

## Implementation Requirements

### 1. Privacy Policy

```
Must explain:
- What data you collect
- How you'll use it
- Legal basis for processing
- Who has access
- How long you keep it
- Users' rights
- Contact for data protection
```

### 2. Data Processing Agreement

```
If hiring data processors, must have written agreement:
- What data they process
- How they process it
- Data security measures
- Deletion requirements
- Sub-processor approval
```

### 3. Data Protection Impact Assessment (DPIA)

```
For high-risk data processing:
- Assess risks to individuals
- Document measures to mitigate
- Identify safeguards
- Example risks:
  - Large-scale data collection
  - Automated decision-making
  - Processing sensitive data
```

### 4. Breach Notification

```
If personal data breached:
- Notify authorities within 72 hours
- Notify affected individuals
- Document breach
- How it happened
- What data was affected
- What measures taken
```

---

## Technical Implementation

### Data Minimization

```
✅ DO:
- Only collect necessary fields
- Delete old data regularly
- Anonymize when possible

❌ DON'T:
- Collect fields "just in case"
- Keep data indefinitely
- Use customer data for unrelated analyses
```

### Security Measures

```
✅ Implement:
- Encryption in transit (HTTPS)
- Encryption at rest
- Access controls (who can see data)
- Audit logs (track access)
- Regular backups
- Incident response plan
```

### User Controls

```
✅ Provide:
- Easy way to access data
- Easy way to change data
- Easy way to delete account
- Easy way to export data
- Preference management
```

---

## Common Compliance Issues

❌ **Issue 1**: Collecting data without consent
✅ **Solution**: Get explicit opt-in before collecting

❌ **Issue 2**: No privacy policy
✅ **Solution**: Create and publish privacy policy

❌ **Issue 3**: Keeping data too long
✅ **Solution**: Implement automated deletion

❌ **Issue 4**: Data breaches not reported
✅ **Solution**: 72-hour breach notification process

---

## Penalties

- **Level 1**: Up to €10 million or 2% revenue
- **Level 2**: Up to €20 million or 4% revenue

Larger fines for serious violations (lack of consent, security).

---

**Proficiency Verified**: Can implement GDPR compliance in products and processes.
