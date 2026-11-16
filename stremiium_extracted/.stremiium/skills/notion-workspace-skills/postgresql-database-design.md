---
description: 'PostgreSQL Database Design - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# PostgreSQL Database Design - Skill Guide

**Skill Category**: Database  
**Level**: Intermediate to Advanced  
**Time to Proficiency**: 6-8 weeks  
**Last Updated**: February 18, 2026

---

## Overview

PostgreSQL is a powerful relational database. This skill covers designing efficient, scalable databases that perform well and maintain data integrity.

---

## Core Concepts

### 1. Data Normalization

**Goals**:

- Eliminate redundancy
- Maintain data integrity
- Improve query performance

**Normal Forms**:

- **1NF**: Atomic values (no nested data)
- **2NF**: Remove partial dependencies
- **3NF**: Remove transitive dependencies
- **BCNF**: Strongest form

**Example (good design)**:

```sql
-- Users table (atomic data)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Ordersable (foreign key relationship)
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 2. Foreign Keys & Relationships

```sql
-- One-to-Many
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id),
  FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);

-- Many-to-Many
CREATE TABLE students (id SERIAL PRIMARY KEY);
CREATE TABLE courses (id SERIAL PRIMARY KEY);

CREATE TABLE enrollments (
  student_id INTEGER REFERENCES students(id),
  course_id INTEGER REFERENCES courses(id),
  PRIMARY KEY (student_id, course_id)
);
```

### 3. Indexing Strategy

```sql
-- Primary index (automatic)
CREATE TABLE products (id SERIAL PRIMARY KEY);

-- Unique index
CREATE UNIQUE INDEX idx_email ON users(email);

-- Regular index (speed up queries)
CREATE INDEX idx_user_id ON orders(user_id);

-- Composite index
CREATE INDEX idx_user_created ON orders(user_id, created_at);

-- Full text search index
CREATE INDEX idx_title_search ON products USING GIN (to_tsvector('english', title));
```

### 4. Constraints

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,  -- Not nullable, must be unique
  age INTEGER CHECK (age >= 18),        -- Validation
  created_at TIMESTAMP DEFAULT NOW()    -- Default value
);
```

---

## Schema Design Patterns

### Pattern 1: Event Sourcing

**Use when**: Need complete audit trail

```sql
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  aggregate_id INTEGER,              -- Entity ID
  event_type VARCHAR(100),           -- What happened
  data JSONB,                        -- Event details
  created_at TIMESTAMP DEFAULT NOW()
);

-- Recreate state by replaying events
SELECT * FROM events WHERE aggregate_id = 123 ORDER BY created_at;
```

### Pattern 2: Soft Deletes

**Use when**: Need to preserve data history

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255),
  deleted_at TIMESTAMP  -- NULL = active, value = deletion time
);

-- Query active users
SELECT * FROM users WHERE deleted_at IS NULL;
```

### Pattern 3: Audit Tables

**Use when**: Need change tracking

```sql
CREATE TABLE users_audit (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  action VARCHAR(50),        -- INSERT, UPDATE, DELETE
  changed_data JSONB,        -- What changed
  changed_by INTEGER,        -- Who made change
  changed_at TIMESTAMP DEFAULT NOW()
);

-- Trigger to populate audit table on changes
CREATE TRIGGER audit_users AFTER UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION audit_trigger_func();
```

---

## Query Optimization

### 1. Use EXPLAIN to Understand Queries

```sql
EXPLAIN (ANALYZE, BUFFERS)
SELECT * FROM orders WHERE user_id = 123;

-- Look for:
-- - Sequential scans (slow) vs Index scans (fast)
-- - High buffer reads (query planning issue)
-- - High execution time
```

### 2. Index Strategies

✅ **DO index**:

- Foreign keys (frequent joins)
- Columns used in WHERE clauses
- Columns used in ORDER BY
- High-cardinality columns (many distinct values)

❌ **DON'T index**:

- Low-cardinality columns (few distinct values, like boolean)
- Rarely queried columns
- Very small tables

### 3. Query Performance

```sql
-- ✅ Good: Use parameterized queries
SELECT * FROM users WHERE id = $1;

-- ❌ Bad: Concatenation (SQL injection risk, can't be cached)
SELECT * FROM users WHERE id = '123';

-- ✅ Good: Select only needed columns
SELECT id, name FROM users;

-- ❌ Bad: Select all if not needed
SELECT * FROM users;

-- ✅ Good: Use JOINs for related data
SELECT u.name, o.total FROM users u JOIN orders o ON u.id = o.user_id;

-- ❌ Bad: N+1 query problem
-- Query users, then query orders for each user separately
```

---

## Common Patterns

### Pattern: User-Tenant Isolation

```sql
CREATE TABLE tenants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  tenant_id INTEGER NOT NULL REFERENCES tenants(id),
  email VARCHAR(255),
  UNIQUE(tenant_id, email)  -- Unique per tenant only
);

CREATE INDEX idx_tenant_user ON users(tenant_id, id);

-- Always filter by tenant
SELECT * FROM users WHERE tenant_id = 1 AND id = 123;
```

### Pattern: Versioning

```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  version INTEGER,
  name VARCHAR(255),
  created_at TIMESTAMP,
  UNIQUE(id, version)
);

-- Find current version
SELECT * FROM products WHERE id = 1 ORDER BY version DESC LIMIT 1;

-- Historical audit trail
SELECT * FROM products WHERE id = 1 ORDER BY version;
```

---

## Transactions & ACID

**Transaction Levels**:

```sql
SET TRANSACTION ISOLATION LEVEL
  READ UNCOMMITTED;    -- Dirty reads possible (fast)
  READ COMMITTED;      -- Safe from dirty reads (default)
  REPEATABLE READ;     -- Consistent throughout transaction
  SERIALIZABLE;        -- Most isolated (slowest)
```

**Example Transaction**:

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;  -- Both succeed or both fail

-- Or ROLLBACK; to undo all changes
```

---

## Common Pitfalls

❌ **Pitfall 1**: No constraints

- Result: Invalid data in database
- Solution: Add constraints, validation

❌ **Pitfall 2**: Wrong data types

- Result: Wasted space, slow queries
- Solution: Use appropriate types (BIGINT not TEXT for numbers)

❌ **Pitfall 3**: Missing indexes

- Result: Slow queries
- Solution: Profile queries, add indexes on frequently queried columns

❌ **Pitfall 4**: Unbounded queries

- Result: Out of memory
- Solution: Pagination, LIMIT clauses

❌ **Pitfall 5**: N+1 queries

- Result: Performance problems
- Solution: Use JOINs, eager loading

---

## Tools

- **pgAdmin**: Web-based admin
- **DBeaver**: Advanced client
- **EXPLAIN**: Query planning
- **pg_stat_statements**: Query analysis
- **Benchmark**: pgbench for load testing

---

**Proficiency Verified**: Can design normalized databases, write efficient queries, and maintain data integrity.
