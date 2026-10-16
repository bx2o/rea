---
description: 'Deployment Rollback Playbook - Stremiium operational playbook'
document_type: 'playbook'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
scope: '16-council ecosystem'
---

# Deployment Rollback Playbook

**Purpose**: Safe, documented rollback process when deployment fails  
**Trigger**: Critical bug discovered, data corruption, service unavailable  
**Owner**: Release Manager + Engineering  
**Last Updated**: February 18, 2026

---

## Rollback Decision Tree

```
Issues after deployment?

1. Is it user-facing?
   NO → Investigate, may be OK
   YES → Continue

2. Can it be fixed with feature flag?
   YES → Just toggle the flag
   NO → Continue

3. Error rate > 1%?
   YES → Immediate rollback
   NO → Continue

4. Data corruption?
   YES → Immediate rollback + investigation
   NO → Continue

5. Can wait until fix?
   YES → Emergency fix & redeploy
   NO → Rollback immediately
```

---

## Immediate Rollback (< 5 min)

### Option A: Feature Flag (Preferred)

```bash
# If the issue is in new code
./scripts/disable-feature.sh FEATURE_NAME

# Within 1-2 seconds:
# New code disabled
# Old code path restored
# Minimal traffic impact
```

### Option B: Release Rollback

```bash
# If must revert entire version
./scripts/rollback.sh

# Steps:
# 1. Switch to previous version
# 2. Restart services
# 3. Monitor metrics
# Duration: Usually 2-5 minutes
```

---

## Rollback Steps

1. **Make Decision** (1 min)
   - Is it severe enough?
   - Will rollback help?
   - Coordinate with team

2. **Execute Rollback** (2-5 min)
   - Run rollback script
   - Monitor metrics
   - Verify restoration

3. **Verify** (5 min)
   - Error rate normal?
   - Performance normal?
   - Users reporting OK?

4. **Stabilize** (15 min)
   - Keep extra attention
   - Alert on any spikes
   - Prepare communication

5. **Communicate** (ongoing)
   - Update status page
   - Email customers (if outage)
   - Internal debrief

---

## Rollback Example Timeline

```
14:32 - Deployment complete
14:33 - Error rate 0.5%, normal
14:35 - Error rate 2%, investigating
14:36 - Error rate 3%, critical issue confirmed
14:37 - ROLLBACK initiated
14:40 - Rollback complete, error rate normalized to 0.1%
14:42 - Verification complete
14:45 - Status page updated, all-clear message
14:50 - Incident postmortem scheduled for tomorrow
```

---

## Post-Rollback

### Immediate (within 1 hour)

- [ ] Write summary of what failed
- [ ] Save logs for analysis
- [ ] Alert team to issues
- [ ] Schedule investigation

### Short-term (within 24 hours)

- [ ] Root cause analysis
- [ ] Identify prevention measures
- [ ] Fix issues
- [ ] Test thoroughly

### Redeploy

```bash
# Only after:
# 1. Fix verified in staging
# 2. Team confident in change
# 3. Additional testing complete
# 4. Monitoring alerts verified

./scripts/deploy.sh FIXED_VERSION
```

---

## Prevention

**Ways to avoid needing rollback**:

- Better testing (unit, integration, load)
- Canary deployments (slow rollout to 10%, 50%, 100%)
- Feature flags for risky changes
- Staging environment parity
- Monitoring and alerting
- Communication before deployment

---
