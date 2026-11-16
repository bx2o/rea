---
description: 'Security Hardening & Secrets - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Security Hardening & Secrets - Skill Guide

**Skill Category**: DevOps  
**Level**: Advanced  
**Time to Proficiency**: 8-10 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Security is critical for production systems. This skill covers hardening infrastructure and managing secrets safely.

---

## Secret Management

### Not OK (Never Do This)

```bash
# Hardcoded in code
export API_KEY="sk-1234567890"

# Environment variable visible in logs
python manage.py runserver
```

### OK (Best Practice)

```bash
# Use secret management service
# AWS Secrets Manager
# HashiCorp Vault
# Kubernetes Secrets

# Docker: Use .env but don't commit
docker run --env-file .env myapp

# Kubernetes
kubectl create secret generic db-pass --from-literal=password=...
```

---

## Security Controls

### Network Security

- Firewall rules
- VPC isolation
- No public database access
- Encrypted HTTPS/TLS

### Authentication

- MFA/2FA
- Service account roles
- API key rotation
- JWT with expiration

### Data Protection

- Encrypt at rest
- Encrypt in transit
- Data minimization
- Access logs

---

## Compliance

- GDPR: Data privacy
- HIPAA: Health data
- PCI-DSS: Payment cards
- SOC 2: Service organization

---

**Proficiency Verified**: Can implement enterprise security practices.
