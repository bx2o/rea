---
description: 'Database Migration Strategy - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Database Migration Strategy - Skill Guide

**Skill Category**: Database  
**Level**: Intermediate to Advanced  
**Time to Proficiency**: 6-8 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Database migrations evolve your schema safely. This skill covers planning, executing, and verifying schema changes.

---

## Migration Types

### 1. Additive Migrations (Safe)

```sql
ALTER TABLE users ADD COLUMN phone VARCHAR(20);
ALTER TABLE orders ADD COLUMN status VARCHAR(50) DEFAULT 'pending';
```

### 2. Renaming Columns

```sql
-- Strategy: Add new column, migrate data, drop old
ALTER TABLE users ADD COLUMN full_name VARCHAR(255);
UPDATE users SET full_name = CONCAT(first_name, ' ', last_name);
ALTER TABLE users DROP COLUMN first_name;
ALTER TABLE users DROP COLUMN last_name;
```

### 3. Data Type Changes

```sql
-- Complex: May need intermediate steps
ALTER TABLE users MODIFY COLUMN user_id BIGINT;
```

---

## Migration Best Practices

1. **Make changes backward compatible**: Deploy code before changing schema
2. **Test on production-sized data**: Migrations can be slow on large tables
3. **Plan rollback**: Have reverse migration ready
4. **Monitor after deployment**: Check performance
5. **Use tools**: Flyway, Liquibase automate process

---

**Proficiency Verified**: Can safely evolve database schemas in production.
