---
description: 'Security vs. Usability Trade-off Framework - Stremiium decision framework'
document_type: 'decision_framework'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
scope: '16-council ecosystem'
---

# Security vs. Usability Trade-off Framework

**Purpose**: Balance security requirements with user experience  
**Use When**: Designing auth, permissions, data access, security features  
**Owner**: The Architect + Security Team  
**Last Updated**: February 18, 2026

---

## Risk vs. Usability Spectrum

```
More Secure ←→ More Usable

Password only          ← Low security
Username/Password      ← Medium security
Username/Password/MFA  ← High security
Hardware keys          ← Very high security

Simple auth           ← Easy to use
Basic MFA             ← Moderate friction
Biometric + MFA       ← Noticeable friction
Hardware keys + MFA   ← Significant friction
```

---

## Decision Framework

### By Risk Level

**Public Data**:

- Username/Password
- Sessions
- Focus: Usability

**Sensitive Data** (PII, Health):

- Username/Password + MFA
- Session timeout
- Focus: Balance

**Highly Sensitive** (Crypto, Payments):

- MFA required
- Hardware keys option
- Session refresh
- Focus: Security

**Mission Critical**:

- Hardware keys + MFA
- Regular re-auth
- Audit logging
- Focus: Security

---

## User Persona Approach

**Enterprise Users**:

- Already use SSO, SAML, etc.
- Expect MFA
- Document requirements
- Accept friction

**Consumer Users**:

- Want frictionless login
- Don't want MFA (but should have it)
- Faster signup
- Accept some risk

---

## Implementation Techniques

| Security Level | Technique                  | Friction |
| -------------- | -------------------------- | -------- |
| Low            | Simple password + sessions | Minimal  |
| Medium         | TOTP/Push MFA optional     | Low      |
| High           | MFA required               | Moderate |
| Very High      | Hardware keys + MFA        | High     |

---

## Recommendations by Scenario

**SaaS Product**:

- Username/Password
- Optional TOTP MFA
- Session cookies (14 days)
- Good balance

**Financial App**:

- Username/Password required
- MFA mandatory
- Hardware key option
- Session 24 hours
- Aggressive security required

**Healthcare**:

- SSO/SAML integration
- MFA mandatory
- Audit logging
- Session 4 hours
- Compliance driven

---

## Principle

**Rule**: Make security the default, not optional.

- MFA enabled by default (users can disable)
- Strong passwords enforce
- Session timeouts enforce
- Logging always on

---
