---
description: 'On-Call Engineer Runbook - Stremiium operational playbook'
document_type: 'playbook'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
scope: '16-council ecosystem'
---

# On-Call Engineer Runbook

**Purpose**: Guide for on-call engineer responsibilities and procedures  
**Trigger**: On-call week starting  
**Owner**: On-Call Engineer  
**Last Updated**: February 18, 2026

---

## Week Setup

**Before rotation begins**:

- [ ] Review relevant runbooks
- [ ] Verify alert notifications working
- [ ] Test incident bridge connection
- [ ] Ensure escalation contacts listed
- [ ] Familiarize with current issues

---

## During On-Call

### Responsibilities

- **Response time**: < 5 minutes for alerts
- **Escalation**: Know when to call for help
- **Communication**: Update team regularly
- **Documentation**: Log issues and fixes

### Daily Routine

1. **Morning check** (start of day)
   - Review overnight alerts
   - Check metrics dashboard
   - Read Slack #incidents channel
2. **Mid-day**
   - Verify monitoring working
   - Test alert systems
   - Catch up on team updates

3. **End of day**
   - Close any non-critical alerts
   - Document ongoing issues
   - Prepare handoff notes

### Availability

- **Business hours**: Available in office/on computer
- **After hours**: Phone alert enabled, < 15 min response
- **Sleep**: Safe to sleep, alert will wake

---

## Common Issues & Resolutions

### High CPU Utilization

1. SSH to server
2. `top` command - which process?
3. Check logs for errors
4. Restart application if needed
5. Monitor CPU for 15 minutes

### Database Slow Queries

1. Check database logs
2. `EXPLAIN ANALYZE` on slow query
3. Check index usage
4. Restart DB connection pool if needed

### Memory Leak

1. Check memory trend over time
2. Review recent code changes
3. Consider process restart
4. Monitor after restart

---

## When to Escalate

**Escalate to Engineering Lead if**:

- Can't determine root cause within 30 minutes
- Fix requires code change
- Need help debugging
- Unsure of next steps

**Escalate to CTO if**:

- Data corruption possible
- Security concern
- Multiple system failures
- Business continuity at risk

---

## End of Week Handoff

**Friday afternoon**:

1. Document any ongoing issues
2. Note active alerts/monitoring
3. List recent fixes/changes
4. Identify pain points for improvements
5. Transfer notes to next on-call engineer

---

## Improvements

After on-call week, suggest improvements:

- Alerts too noisy?
- Runbook missing steps?
- Need additional monitoring?
- Process improvements?

---
