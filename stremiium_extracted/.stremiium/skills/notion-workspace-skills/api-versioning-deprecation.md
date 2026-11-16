---
description: 'API Versioning & Deprecation - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# API Versioning & Deprecation - Skill Guide

**Skill Category**: API Design  
**Level**: Intermediate  
**Time to Proficiency**: 4-6 weeks  
**Last Updated**: February 18, 2026

---

## Overview

APIs evolve over time. This skill covers maintaining backward compatibility while evolving your API.

---

## Versioning Strategies

### 1. URL Path Versioning

```
/api/v1/users  → GET returns {id, name}
/api/v2/users  → GET returns {id, name, email, created_at}
```

### 2. Header Versioning

```
GET /api/users
Accept-Version: 1.0

GET /api/users
Accept-Version: 2.0
```

### 3. Query Parameter

```
/api/users?version=1
/api/users?version=2
```

---

## Deprecation Process

```
Timeline:
- Today: v1 active, v2 announced
- Month 1: v1 active, v2 recommended
- Month 3: v1 deprecated, v2 active
- Month 6: v1 sunset (no longer supported)

Response headers:
Deprecation: true
Sunset: Wed, 30 Jun 2026 23:59:59 GMT
Link: <https://api.example.com/docs/v2>; rel="successor-version"
```

---

## Backward Compatibility

```javascript
// Add new optional fields (backward compatible)
{
  id: 123,
  name: "John",
  email: "john@example.com"  // new, optional
}

// Don't remove fields suddenly
// Don't change field types
// Don't change behavior unexpectedly
```

---

**Proficiency Verified**: Can evolve APIs without breaking existing clients.
