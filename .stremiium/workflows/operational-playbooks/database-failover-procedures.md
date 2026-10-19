---
description: 'Database Failover Procedures - Stremiium operational playbook'
document_type: 'playbook'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
scope: '16-council ecosystem'
---

# Database Failover Procedures

**Purpose**: Automated and manual failover of database instances  
**Trigger**: Database primary failure, planned maintenance  
**Owner**: Database Administrator + DevOps  
**Last Updated**: February 18, 2026

---

## Failover Types

### Planned Maintenance

- Hardware upgrade
- Software updates
- Security patching
- Configuration changes

### Unplanned (Emergency)

- Primary server failure
- Connection pool exhausted
- Corruption detected
- Performance degradation

---

## Pre-Failover Checklist

- [ ] All transactions committed
- [ ] Replica in sync
- [ ] Monitoring alerts configured
- [ ] Runbook reviewed
- [ ] Rollback plan documented
- [ ] Communication template prepared

---

## Failover Process

### Step 1: Preparation (30 min before)

```bash
# Check replication lag
psql> SELECT max_wal_lsn - replay_lsn AS lag FROM pg_stat_replication;

# Should show no lag or < 1 second

# Verify replica can promote
psql> SELECT pg_is_in_recovery();  # Should return t (true)
```

### Step 2: Notification

```
Slack: "Starting planned failover in 30 minutes"
Status Page: "Scheduled maintenance 2-2:30 UTC"
```

### Step 3: Application Drain

```bash
# Stop new connections
# Wait for existing queries to complete (max 60 sec)
# Connection pool: max_connections = 0
```

### Step 4: Failover

```bash
# On replica server
psql> SELECT pg_promote();

# This promotes replica to primary
# Replica is now read/write
```

### Step 5: Verification (5 min)

```bash
# Connect to new primary
psql> SELECT now();  # Verify connection

# Check critical tables
psql> SELECT COUNT(*) FROM users;
psql> SELECT COUNT(*) FROM transactions;

# Run application healthcheck
curl https://api.example.com/health
```

### Step 6: Application Recovery

```bash
# Update connection strings (usually automatic)
# Restart application
# Resume connections
```

### Step 7: Old Primary Recovery

```bash
# Bring old primary back as new replica
# Rejoin to replication later (not immediately)
```

---

## Monitoring During Failover

Watch these metrics:

- Database connections active
- Query latency
- Error rate
- Application response time

Alert if:

- Error rate > 0.5%
- Response time > 5x normal
- Connection failures occurring

---

## Rollback (If needed)

```bash
# If failover unsuccessful
# Switch back to old primary (if still available)

psql> SELECT pg_wal_replay_pause();  # Pause replica
# Manual switchover of application
```

---

## Post-Failover

- [ ] Update DNS/connection strings
- [ ] Verify all services connected
- [ ] Monitor for 1 hour
- [ ] Run backups
- [ ] Update status page
- [ ] Document timeline

---
