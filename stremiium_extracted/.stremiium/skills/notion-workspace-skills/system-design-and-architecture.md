---
description: 'System Design & Architecture - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# System Design & Architecture - Skill Guide

**Skill Category**: API Design  
**Level**: Advanced  
**Time to Proficiency**: 12-16 weeks  
**Last Updated**: February 18, 2026

---

## Overview

System design is the art of building scalable, reliable systems. This skill covers designing systems that handle growth and failures.

---

## Design Fundamentals

### 1. Scale Dimensions

- **Horizontal**: Add more servers
- **Vertical**: Bigger servers
- **Database replication**: Multiple databases
- **Caching**: Reduce database hits
- **CDN**: Geographically distributed content

### 2. Key Metrics

**Throughput**: Requests per second
**Latency**: Response time
**Availability**: Uptime %
**Durability**: Data won't be lost

---

## Architectural Patterns

### Pattern: Load Balancing

```
User Requests
         ↓
    Load Balancer (determines which server)
    ↙        ↓        ↖
Server 1  Server 2  Server 3

Balancing strategies:
- Round-robin (equal distribution)
- Least connections (least loaded)
- IP hash (stickiness)
```

### Pattern: Caching

```
Request → Check cache → If hit, return immediately
                      → If miss, get from DB, cache, return
```

### Pattern: Database Replication

```
Write to Primary (authoritative)
↓ Replicates to
Read Replicas (for queries)

Tradeoff: eventual consistency
```

---

## Common System Design Problems

1. **URL Shortener**: Handle millions of short URLs
2. **News Feed**: Real-time feed for millions of users
3. **Chat System**: Real-time messaging
4. **Video Streaming**: Billion-hour viewership/day
5. **Search Engine**: Index and search billions of documents

---

**Proficiency Verified**: Can design large-scale distributed systems.
