---
description: 'RESTful API Design - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# RESTful API Design - Skill Guide

**Skill Category**: API Design  
**Level**: Intermediate to Advanced  
**Time to Proficiency**: 4-6 weeks  
**Last Updated**: February 18, 2026

---

## Overview

RESTful APIs are the backbone of modern web services. This skill covers designing APIs that are intuitive, scalable, secure, and performant.

---

## Core Concepts

### What is REST?

- **Representation State Transfer**: Architecture style for web services
- **Resource-oriented**: Everything is a resource (not an action)
- **Standard HTTP methods**: GET, POST, PUT, DELETE, PATCH
- **Stateless**: Each request contains all info needed
- **Uniform interface**: Predictable, consistent patterns

### Key Principles

1. **Resources**: Everything is a noun (not a verb)
   - `/users` not `/getUsers`
   - `/orders` not `/createOrder`

2. **Methods**: Use HTTP methods correctly
   - GET: Retrieve (safe, idempotent)
   - POST: Create (not idempotent)
   - PUT: Replace (idempotent)
   - DELETE: Remove (idempotent)
   - PATCH: Partial update (may not be idempotent)

3. **Status Codes**: Communicate clearly
   - 2xx: Success (200, 201, 204)
   - 3xx: Redirect (301, 302, 304)
   - 4xx: Client error (400, 401, 403, 404)
   - 5xx: Server error (500, 502, 503)

4. **Versioning**: Plan for evolution
   - URL path: `/v1/users`, `/v2/users`
   - Header: `Accept: application/vnd.myapi.v1+json`
   - Query param: `?version=1`

---

## Best Practices

### 1. Resource Naming

✅ **DO**:

- Plural nouns: `/users` not `/user`
- Consistent hierarchy: `/users/{id}/posts/{postId}`
- Descriptive: `/employees` not `/emp`

❌ **DON'T**:

- Verbs: `/getUserList`, `/createUser`
- Singular resources: `/user`
- Inconsistent patterns: `/get_users` vs `/users`

### 2. HTTP Methods

```
GET /users           - List all users
GET /users/{id}      - Get specific user
POST /users          - Create new user
PUT /users/{id}      - Replace user
PATCH /users/{id}    - Partial update
DELETE /users/{id}   - Delete user
```

### 3. Status Codes

```
200 OK              - Valid GET/PUT/PATCH
201 Created         - POST successful
204 No Content      - DELETE successful
400 Bad Request     - Invalid input
401 Unauthorized    - Auth required
403 Forbidden       - Auth OK, permission denied
404 Not Found       - Resource doesn't exist
500 Server Error    - Server problem
```

### 4. Pagination

```json
{
  "data": [...],
  "total": 1000,
  "page": 2,
  "pageSize": 50,
  "nextPage": "/users?page=3&pageSize=50"
}
```

### 5. Error Responses

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": [
      {
        "field": "email",
        "message": "Must be valid email"
      }
    ]
  }
}
```

---

## Common Patterns

### Pattern 1: Nested Resources

```
GET /users/{userId}/posts            - All posts by user
GET /users/{userId}/posts/{postId}   - Specific post
POST /users/{userId}/posts           - Create post for user
DELETE /users/{userId}/posts/{postId} - Delete post
```

### Pattern 2: Filtering & Searching

```
GET /users?role=admin                - Filter by role
GET /users?search=john               - Search
GET /users?status=active&sort=created - Multiple filters
```

### Pattern 3: Partial Responses

```
GET /users/{id}?fields=id,name,email - Only specific fields
GET /posts?include=author,comments    - Include related data
```

---

## Security Considerations

1. **Authentication**: Every API needs it
   - API Keys for service-to-service
   - OAuth 2.0 for user apps
   - JWT for stateless auth

2. **Authorization**: Check permissions
   - User can only access their own data
   - Admin role for admin operations
   - Scope-based permissions

3. **Rate Limiting**: Prevent abuse
   - X-RateLimit-Limit header
   - X-RateLimit-Remaining header
   - Exponential backoff retry

4. **Input Validation**: Never trust input
   - Type validation
   - Format validation
   - Range checks
   - SQL injection prevention

5. **HTTPS**: Always encrypt in transit
   - No HTTP
   - Valid certificates
   - HSTS headers

---

## API Documentation

Essential elements:

- Base URL
- Authentication method
- All endpoints documented
- Request/response examples
- Error responses
- Rate limits
- Versioning strategy

Tools: Swagger/OpenAPI, Postman, API Blueprint

---

## Testing APIs

- Unit tests for business logic
- Integration tests for dependencies
- Contract tests with consumers
- Load testing for performance
- Security testing for vulnerabilities

---

## Practice Exercises

1. **Design Twitter-like API**
   - Users, tweets, likes, follows
   - Versioning strategy
   - Error handling
   - Pagination

2. **Design E-commerce API**
   - Products, orders, payments
   - Authentication/authorization
   - Cart operations
   - Order status tracking

3. **Critique Existing API**
   - Identify improvements
   - Security issues
   - Performance concerns

---

## Tools & Resources

- **Swagger/OpenAPI**: API specification
- **Postman**: Testing and documentation
- **Mock servers**: Test without backend
- **httpbin.org**: Learning endpoint

---

**Proficiency Verified**: Can design production-grade REST APIs with proper versioning, security, and documentation.
