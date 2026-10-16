---
description: 'Load Testing & Performance Analysis - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Load Testing & Performance Analysis - Skill Guide

**Skill Category**: DevOps  
**Level**: Intermediate to Advanced  
**Time to Proficiency**: 6-8 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Load testing validates system performance under stress. This skill covers identifying bottlenecks and capacity planning.

---

## Load Testing Tools

### Apache JMeter

```
1. Create test plan
2. Add thread group (concurrent users)
3. Add HTTP sampler (requests)
4. Add assertions (expected results)
5. Add listeners (results)
6. Run and analyze
```

### Locust (Python)

```python
from locust import HttpUser, task

class UserBehavior(HttpUser):
    @task
    def index(self):
        self.client.get("/")

    @task(2)
    def slow_endpoint(self):
        self.client.get("/api/slow")
```

---

## Key Metrics

- **Throughput**: Requests per second
- **Latency**: Response time (p50, p95, p99)
- **Error rate**: % of failed requests
- **Resource utilization**: CPU, memory, disk
- **Bottleneck**: Where does performance degrade?

---

## Capacity Planning

```
Requirements: 1000 concurrent users

Load test:
- 100 users: 10ms latency
- 500 users: 25ms latency
- 1000 users: 100ms latency (acceptable)
- 1500 users: 5000ms latency (unacceptable)

Decision: 1000 users max, scale at 800
```

---

**Proficiency Verified**: Can conduct load tests and capacity planning.
