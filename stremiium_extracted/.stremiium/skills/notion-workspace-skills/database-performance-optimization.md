---
description: 'Performance Optimization - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Performance Optimization - Skill Guide

**Skill Category**: Database  
**Level**: Advanced  
**Time to Proficiency**: 8-10 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Database performance directly impacts application speed. This skill covers analyzing bottlenecks and optimizing queries.

---

## Query Optimization

### 1. Index Analysis

```sql
-- Slow query (full table scan)
SELECT * FROM orders WHERE status = 'pending';

-- Add index
CREATE INDEX idx_status ON orders(status);

-- Now fast (index scan)
```

### 2. Query Rewriting

```sql
-- Bad: N+1 problem
for user in users:
  orders = get_orders(user.id)  -- 1000 queries

-- Good: Single query with JOIN
SELECT u.*, o.* FROM users u
LEFT JOIN orders o ON u.id = o.user_id;
```

### 3. Denormalization

```sql
-- Normalized: Requires JOIN
SELECT COUNT(*) FROM orders WHERE user_id = 123;

-- Denormalized: Cached count
ALTER TABLE users ADD COLUMN order_count INT;
UPDATE users SET order_count = (SELECT COUNT(*) FROM orders ...);
```

---

## Tools

- **EXPLAIN**: Analyze query plans
- **Query profilers**: New Relic, DataDog
- **pg_stat_statements**: PostgreSQL query stats

---

**Proficiency Verified**: Can identify and fix database performance issues.
