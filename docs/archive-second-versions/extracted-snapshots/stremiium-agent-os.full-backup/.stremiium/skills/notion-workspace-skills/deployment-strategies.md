---
description: 'Deployment Strategies - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Deployment Strategies - Skill Guide

**Skill Category**: DevOps  
**Level**: Intermediate to Advanced  
**Time to Proficiency**: 6-8 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Deployment strategies minimize risk during releases. This skill covers multiple techniques for different scenarios.

---

## Blue-Green Deployment

```
Before:
  Users → Blue (v1)

Deploy v2:
  Users → Blue (v1)
  Green (v2) warming up

Cutover:
  Users → Green (v2)

Rollback (if needed):
  Users → Blue (v1)
```

Benefits: Zero downtime, instant rollback

---

## Canary Deployment

```
Deploy to small % of users:
  90% → Blue (v1)
  10% → Green (v2)

Monitor metrics...

Gradually shift:
  50% → Blue, 50% → Green
  90% → Green, 10% → Blue
  100% → Green

Automatic rollback if error rate high
```

Benefits: Reduced blast radius, validates in production

---

## Rolling Update

```
App running: 3 instances

Stop 1, update to v2
Stop 1, update to v2
Stop 1, update to v2

Always running: 2+ instances
```

Kubernetes default approach.

---

## Feature Flags

```javascript
// Gradual rollout without deployment
if (featureFlags.newUI && user.beta) {
  return <NewUI />;
} else {
  return <OldUI />;
}
```

---

**Proficiency Verified**: Can execute safe, zero-downtime deployments.
