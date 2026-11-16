---
description: 'Gdpr Privacy - Validations - Skill reference documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Gdpr Privacy - Validations

## Hardcoded Consent Value

### **Id**

hardcoded-consent

### **Severity**

error

### **Type**

regex

### **Pattern**

- consent\s*[:=]\s*true
- hasConsent\s*=\s*true
- gdprConsent.\*true

### **Message**

Consent appears hardcoded. Must be explicit user action.

### **Fix Action**

Implement proper consent collection with user action

### **Applies To**

- \*_/_.js
- \*_/_.ts

## Missing Consent Timestamp

### **Id**

no-consent-timestamp

### **Severity**

warning

### **Type**

regex

### **Pattern**

- consent(?!.*timestamp|.*date|.*time|.*when)

### **Message**

Consent storage may lack timestamp for audit trail.

### **Fix Action**

Record when consent was given with ISO timestamp

### **Applies To**

- \*_/_.js
- \*_/_.ts

## Pre-ticked Consent Checkbox

### **Id**

preticked-checkbox

### **Severity**

error

### **Type**

regex

### **Pattern**

- checked\s*[:=]\s*true.\*consent
- defaultChecked.\*consent
- consent.*checked.*default

### **Message**

Pre-ticked consent boxes are invalid under GDPR.

### **Fix Action**

Remove default checked state from consent checkboxes

### **Applies To**

- \*_/_.jsx
- \*_/_.tsx
- \*_/_.html

## No Consent Withdrawal Mechanism

### **Id**

missing-withdrawal-mechanism

### **Severity**

warning

### **Type**

regex

### **Pattern**

- setConsent.*true(?!.*withdraw|.*revoke|.*remove)

### **Message**

Consent collection without corresponding withdrawal mechanism.

### **Fix Action**

Implement equally easy consent withdrawal

### **Applies To**

- \*_/_.js
- \*_/_.ts

## Personal Data in Logs

### **Id**

personal-data-logging

### **Severity**

error

### **Type**

regex

### **Pattern**

- console\.log.\*email
- logger.\*personalData
- log.\*\b(ssn|passport|dob)\b

### **Message**

Personal data may be logged without protection.

### **Fix Action**

Mask or remove personal data from logs

### **Applies To**

- \*_/_.js
- \*_/_.ts
- \*_/_.py

## No Data Retention Limit

### **Id**

infinite-retention

### **Severity**

warning

### **Type**

regex

### **Pattern**

- store._personal._(?!expir|ttl|retention)
- save.*userData(?!.*delete|.\*purge)

### **Message**

Personal data storage without retention limit.

### **Fix Action**

Implement retention policy with automatic deletion

### **Applies To**

- \*_/_.js
- \*_/_.ts

## Unencrypted Sensitive Data

### **Id**

unencrypted-sensitive-data

### **Severity**

error

### **Type**

regex

### **Pattern**

- healthData._=._\{(?!.\*encrypt)
- biometric.*store(?!.*encrypt)
- racialOrigin|politicalOpinion|religiousBelief

### **Message**

Sensitive data may not be encrypted at rest.

### **Fix Action**

Encrypt sensitive (Article 9) data at rest

### **Applies To**

- \*_/_.js
- \*_/_.ts

## Processing Without Legal Basis

### **Id**

missing-legal-basis

### **Severity**

warning

### **Type**

regex

### **Pattern**

- processPersonalData(?!.*legalBasis|.*consent|.\*contract)

### **Message**

Processing function may not document legal basis.

### **Fix Action**

Document and validate legal basis before processing

### **Applies To**

- \*_/_.js
- \*_/_.ts
