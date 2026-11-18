---
description: 'OpenAPI Specification - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# OpenAPI Specification - Skill Guide

**Skill Category**: API Design  
**Level**: Intermediate  
**Time to Proficiency**: 4-6 weeks  
**Last Updated**: February 18, 2026

---

## Overview

OpenAPI (formerly Swagger) is the industry standard for documenting REST APIs. This skill covers writing machine-readable API specifications.

---

## OpenAPI Structure

```yaml
openapi: 3.0.0
info:
  title: My API
  version: 1.0.0
  description: API for managing users and posts

servers:
  - url: https://api.example.com/v1

components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        email:
          type: string
      required:
        - id
        - name

paths:
  /users:
    get:
      summary: List users
      responses:
        '200':
          description: List of users
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'

    post:
      summary: Create user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                email:
                  type: string
      responses:
        '201':
          description: User created

  /users/{id}:
    get:
      summary: Get user by ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: User found
        '404':
          description: User not found
```

---

## Best Practices

1. **Complete Documentation**: Every endpoint documented
2. **Schema Definitions**: Reusable component schemas
3. **Error Responses**: All error codes documented
4. **Examples**: Real-world request/response examples
5. **Security**: Authentication/authorization documented

---

## Tools

- **Swagger Editor**: Online editor
- **Swagger UI**: Interactive documentation
- **Codegen**: Generate client/server code from spec

---

**Proficiency Verified**: Can write comprehensive OpenAPI specifications.
