---
description: 'Database Backup & Disaster Recovery - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Database Backup & Disaster Recovery - Skill Guide

**Skill Category**: DevOps  
**Level**: Advanced  
**Time to Proficiency**: 6-8 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Data loss is catastrophic. This skill covers backup strategies and disaster recovery procedures.

---

## Backup Strategies

### 1. Full Backup

- Complete database copy
- Largest, takes longest
- Do weekly

### 2. Incremental Backup

- Only changed data since last backup
- Smaller, faster
- Do daily

### 3. Differential Backup

- Only changed data since last full backup
- Faster than full, slower than incremental
- Do daily

---

## Recovery Metrics

### RTO (Recovery Time Objective)

- How fast must you recover?
- Target: 15 minutes
- Requires: Hot standby or fast restore

### RPO (Recovery Point Objective)

- How much data can you lose?
- Target: 5 minutes
- Requires: Frequent backups

---

## Implementation

### PostgreSQL Example

```bash
# Full backup
pg_dump -U user -h localhost dbname > backup.sql

# Backup to cloud
pg_dump dbname | aws s3 cp - s3://backups/db.sql

# Point-in-time recovery
psql -U user dbname < backup.sql
```

### Automated Strategy

```yaml
Weekly: Full backup to cold storage
Daily: Incremental to warm storage
Hourly: Transaction logs for PITR
Test: Monthly restore verification
```

---

**Proficiency Verified**: Can design and implement disaster recovery solutions.
