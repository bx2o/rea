---
description: 'Monitoring & Observability - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Monitoring & Observability - Skill Guide

**Skill Category**: DevOps  
**Level**: Intermediate to Advanced  
**Time to Proficiency**: 8-10 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Observability provides visibility into system behavior. This skill covers monitoring, logging, and tracing.

---

## Three Pillars of Observability

### 1. Metrics (Prometheus)

```yaml
# Prometheus configuration
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'my-app'
    static_configs:
      - targets: ['localhost:8080']
```

Metric types:

- Counter: monotonic increase
- Gauge: up/down value
- Histogram: distribution
- Summary: quantiles

### 2. Logs (ELK Stack)

```
Elasticsearch: Storage
Logstash: Processing
Kibana: Visualization

Or: Loki + Promtail (Prometheus ecosystem)
```

### 3. Traces (Jaeger)

```
Request → Service A → Service B → Database
Track entire request path
Identify bottlenecks
```

---

## Alerting

```yaml
# Alert rule
- alert: HighErrorRate
  expr: rate(errors_total[5m]) > 0.05
  for: 5m
  annotations:
    summary: 'High error rate detected'
```

---

**Proficiency Verified**: Can implement comprehensive observability solutions.
