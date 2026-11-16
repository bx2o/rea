---
name: database-design
description: Master database schema design, normalization, and optimization for building scalable data models. Use when designing database schemas, creating data models, or optimizing database performance.
---

# Database Design

Master database schema design, normalization, and optimization for building scalable, efficient, and maintainable data models.

## When to Use This Skill

- Designing new database schemas
- Creating data models for applications
- Optimizing database queries and performance
- Planning database migrations
- Normalizing denormalized data
- Designing relationships between entities

## Core Concepts

### 1. Database Design Principles

**ACID Properties:**

- **Atomicity**: Transactions are all-or-nothing
- **Consistency**: Database remains in valid state
- **Isolation**: Transactions don't interfere
- **Durability**: Committed data persists

**CAP Theorem:**

- **Consistency**: All nodes see same data simultaneously
- **Availability**: Every request gets a response
- **Partition Tolerance**: System continues despite network partitions
- Pick 2 of 3

### 2. Normalization

**First Normal Form (1NF):**

- Eliminate repeating groups
- Each cell contains atomic values
- Each record is unique

**Second Normal Form (2NF):**

- Meet 1NF
- No partial dependencies
- All non-key attributes depend on entire primary key

**Third Normal Form (3NF):**

- Meet 2NF
- No transitive dependencies
- Non-key attributes don't depend on other non-key attributes

**Boyce-Codd Normal Form (BCNF):**

- Meet 3NF
- For every dependency X → Y, X is a superkey

**When to Denormalize:**

- Read-heavy workloads
- Performance optimization
- Simplified queries
- Caching strategies

### 3. Schema Design Patterns

**One-to-One:**

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE user_profiles (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  bio TEXT,
  avatar_url VARCHAR(255)
);
```

**One-to-Many:**

```sql
CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  author_id INTEGER REFERENCES authors(id),
  title VARCHAR(255) NOT NULL,
  published_date DATE
);
```

**Many-to-Many:**

```sql
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL
);

CREATE TABLE enrollments (
  student_id INTEGER REFERENCES students(id),
  course_id INTEGER REFERENCES courses(id),
  enrolled_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (student_id, course_id)
);
```

### 4. Indexing Strategies

**When to Index:**

- Columns used in WHERE clauses
- Columns used in JOIN conditions
- Columns used in ORDER BY
- Columns with high cardinality
- Frequently queried columns

**Types of Indexes:**

```sql
-- B-tree index (default, good for range queries)
CREATE INDEX idx_users_email ON users(email);

-- Hash index (good for equality)
CREATE INDEX idx_users_hash_email ON users USING HASH(email);

-- Composite index
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- Unique index
CREATE UNIQUE INDEX idx_users_email ON users(email);

-- Partial index
CREATE INDEX idx_active_users ON users(status) WHERE status = 'active';

-- GIN index (for arrays, JSON)
CREATE INDEX idx_products_tags ON products USING GIN(tags);
```

### 5. Query Optimization

**EXPLAIN ANALYZE:**

```sql
EXPLAIN ANALYZE
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id;
```

**Optimization Tips:**

- Use SELECT only needed columns
- Avoid SELECT \*
- Use LIMIT for pagination
- Use appropriate JOIN types
- Use EXISTS instead of IN for subqueries
- Avoid functions on indexed columns
- Use prepared statements

### 6. Database Relationships

**Foreign Keys:**

```sql
ALTER TABLE orders
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id)
REFERENCES users(id)
ON DELETE CASCADE
ON UPDATE CASCADE;
```

**Referential Integrity:**

- RESTRICT: Prevent deletion
- CASCADE: Delete dependent rows
- SET NULL: Set foreign key to NULL
- SET DEFAULT: Set to default value
- NO ACTION: Take no action

### 7. Data Types

**PostgreSQL Types:**

```sql
-- Numeric
INTEGER, BIGINT, DECIMAL(10,2), NUMERIC

-- String
VARCHAR(255), TEXT, CHAR(10)

-- Date/Time
TIMESTAMP, DATE, TIME, INTERVAL

-- Boolean
BOOLEAN

-- JSON
JSON, JSONB

- Arrays
INTEGER[], TEXT[], VARCHAR(255)[]

- UUID
UUID

- Enum
CREATE TYPE status AS ENUM ('active', 'inactive', 'pending');
```

### 8. Constraints

**NOT NULL:**

```sql
ALTER TABLE users
ALTER COLUMN email SET NOT NULL;
```

**UNIQUE:**

```sql
ALTER TABLE users
ADD CONSTRAINT unique_email UNIQUE (email);
```

**CHECK:**

```sql
ALTER TABLE products
ADD CONSTRAINT check_price_positive
CHECK (price >= 0);
```

**DEFAULT:**

```sql
ALTER TABLE users
ALTER COLUMN created_at SET DEFAULT NOW();
```

### 9. Migration Strategies

**Version Control Migrations:**

```sql
-- migrations/001_create_users.sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- migrations/002_add_user_status.sql
ALTER TABLE users
ADD COLUMN status VARCHAR(20) DEFAULT 'active';

-- migrations/003_add_status_enum.sql
CREATE TYPE user_status AS ENUM ('active', 'inactive', 'pending');

ALTER TABLE users
ALTER COLUMN status TYPE user_status
USING status::user_status;
```

**Rollback Migrations:**

```sql
-- rollback/003_add_status_enum.sql
ALTER TABLE users
ALTER COLUMN status TYPE VARCHAR(20);

DROP TYPE user_status;

-- rollback/002_add_user_status.sql
ALTER TABLE users
DROP COLUMN status;

-- rollback/001_create_users.sql
DROP TABLE users;
```

### 10. Performance Tuning

**Connection Pooling:**

```javascript
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20, // Maximum connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
```

**Query Caching:**

```javascript
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 }); // 10 minutes

async function getUser(id) {
  const cacheKey = `user:${id}`;

  // Check cache
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  // Query database
  const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

  // Cache result
  cache.set(cacheKey, user.rows[0]);

  return user.rows[0];
}
```

**Batch Operations:**

```sql
-- Instead of multiple INSERTs
INSERT INTO users (name, email) VALUES ('John', 'john@example.com');
INSERT INTO users (name, email) VALUES ('Jane', 'jane@example.com');

-- Use single INSERT with multiple values
INSERT INTO users (name, email) VALUES
  ('John', 'john@example.com'),
  ('Jane', 'jane@example.com');
```

## Best Practices

1. **Normalize first, denormalize later** for performance
2. **Use appropriate data types** for storage efficiency
3. **Index strategically** - don't over-index
4. **Use transactions** for multi-step operations
5. **Plan migrations carefully** - always have rollback
6. **Monitor query performance** - use EXPLAIN ANALYZE
7. **Use connection pooling** - limit database connections
8. **Backup regularly** - test restore procedures
9. **Document schema** - keep schema documentation updated
10. **Use foreign keys** - maintain referential integrity
11. **Consider read replicas** for read-heavy workloads

## Common Patterns

### Soft Delete Pattern

```sql
ALTER TABLE users
ADD COLUMN deleted_at TIMESTAMP;

-- Soft delete
UPDATE users
SET deleted_at = NOW()
WHERE id = 1;

-- Query non-deleted
SELECT * FROM users
WHERE deleted_at IS NULL;
```

### Audit Trail Pattern

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  version INTEGER DEFAULT 0
);

CREATE TABLE user_history (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  email VARCHAR(255),
  name VARCHAR(255),
  changed_at TIMESTAMP DEFAULT NOW(),
  changed_by VARCHAR(255),
  action VARCHAR(10) -- INSERT, UPDATE, DELETE
);

-- Trigger for automatic history
CREATE OR REPLACE FUNCTION log_user_changes()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO user_history (user_id, email, name, action)
  VALUES (NEW.id, NEW.email, NEW.name, 'INSERT');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER user_insert_trigger
AFTER INSERT ON users
FOR EACH ROW EXECUTE FUNCTION log_user_changes();
```

### Time Travel Pattern

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  valid_from TIMESTAMP DEFAULT NOW(),
  valid_to TIMESTAMP
);

-- Query current state
SELECT * FROM users
WHERE valid_from <= NOW()
AND (valid_to IS NULL OR valid_to > NOW());
```

## Performance Metrics

**Key Metrics to Monitor:**

- Query execution time
- Index usage statistics
- Connection pool utilization
- Cache hit ratio
- Lock wait time
- Deadlock count
- Table size growth
- Query throughput

## Related Skills

- `database-schema-designer` - Advanced schema design
- `postgresql-table-design` - PostgreSQL specific design
- `database-migration` - Migration strategies
- `backend-patterns` - Backend integration
- `senior-backend` - Advanced optimization

## Tools and Technologies

**PostgreSQL:**

- pgAdmin - GUI tool
- psql - Command line interface
- pg_dump - Backup tool
- pg_restore - Restore tool

**MongoDB:**

- MongoDB Compass - GUI tool
- mongosh - Command line interface
- mongodump - Backup tool
- mongorestore - Restore tool

**General:**

- DBeaver - Universal database tool
- DataGrip - JetBrains IDE
- Prisma - ORM for TypeScript
- TypeORM - ORM for TypeScript/JavaScript
- Sequelize - ORM for JavaScript
