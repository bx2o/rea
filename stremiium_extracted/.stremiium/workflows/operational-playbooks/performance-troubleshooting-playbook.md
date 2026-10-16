---
description: 'Performance Troubleshooting Playbook - Stremiium operational playbook'
document_type: 'playbook'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
scope: '16-council ecosystem'
---

# Performance Troubleshooting Playbook

**Purpose**: Systematic approach to diagnosing and fixing performance issues  
**Trigger**: Slow application, degraded response times, timeout errors  
**Owner**: Performance Team + Engineering  
**Last Updated**: February 18, 2026

---

## Quick Diagnosis (First 5 minutes)

```
1. Open metrics dashboard
2. Look at key metrics:
   - Response time (normal?)
   - Throughput (expected?)
   - Error rate (elevated?)
   - Resource utilization (high?)

3. Narrow down system:
   - Frontend? Check browser devtools
   - Backend? Check API logs
   - Database? Check DB metrics
   - Infrastructure? Check CPU, memory
```

---

## Investigation Process

### Phase 1: Data Collection (5-15 min)

```
Application metrics:
- Request latency percentiles (p50, p95, p99)
- Throughput (requests/second)
- Error rates by endpoint
- Memory usage trend

Infrastructure metrics:
- CPU utilization
- Disk I/O
- Network throughput
- Memory available

Database metrics:
- Query latency (slow query log)
- Active connections
- Lock contention
- Cache hit ratio
```

### Phase 2: Hypothesis (5-10 min)

```
Is it...
□ Database query performance?
□ Application code (CPU intensive)?
□ Memory leak?
□ Resource exhaustion?
□ Garbage collection pause?
□ External service latency?
□ Load test spike?
```

### Phase 3: Deep Dive (10-30 min)

**If Database Issue**:

```bash
# Find slow queries
SELECT query, calls, mean_time FROM pg_stat_statements
ORDER BY mean_time DESC
LIMIT 10;

# Analyze specific query
EXPLAIN ANALYZE SELECT...;

# Usually: Missing index or N+1 queries
```

**If Application CPU Issue**:

```bash
# Collect CPU profile (1 minute)
java -jar profiler.jar attach-pid PID

# Analyze: Which functions consuming CPU?
# Usually: Inefficient algorithm or regex
```

**If Memory Issue**:

```bash
# Check heap usage
jstat -gc -h10 -interval 1000 PID

# Look for: Growing used memory = leak
jmap -dump:live,format=b,file=heap.bin PID
```

**If Database Connections**:

```bash
# Check active connections
psql> SELECT count(*) FROM pg_stat_activity;

# If maxed out (check max_connections)
# Solution: Increase connection pool
```

---

## Common Fixes

| Issue              | Symptom                        | Fix                      |
| ------------------ | ------------------------------ | ------------------------ |
| Missing Index      | Slow query, full table scan    | Add index                |
| N+1 Queries        | Request makes 100s of DB calls | Join/batch load          |
| Memory Leak        | Growing memory usage           | Find leak, patch code    |
| Garbage Collection | Periodic pauses, spikes        | Tune GC settings         |
| Resource Limit     | CPU/memory pegged at max       | Scale infrastructure     |
| External Service   | Tail latency high              | Add timeout, retry logic |

---

## Verification After Fix

```
1. Monitoring dashboard
   - Latency back to normal?
   - Error rate back to baseline?

2. User-level check
   - Application responsive?
   - Specific endpoints fixed?

3. Load test
   - Performance sustained?
   - No new issues?

4. Production monitoring
   - Watch for 30 minutes
   - Alert on any regression
```

---

## Documentation

For each issue:

1. What was slow?
2. Why was it slow?
3. How did we fix it?
4. How to prevent?

Add to runbook for next time.

---
