---
description: 'GitHub Actions CI/CD - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# GitHub Actions CI/CD - Skill Guide

**Skill Category**: DevOps  
**Level**: Intermediate  
**Time to Proficiency**: 4-6 weeks  
**Last Updated**: February 18, 2026

---

## Overview

GitHub Actions automates workflows directly in GitHub. This skill covers building CI/CD pipelines.

---

## Workflow Structure

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - uses: actions/setup-node@v2
        with:
          node-version: '18'

      - run: npm install
      - run: npm test
      - run: npm run build

  deploy:
    needs: test # Runs after test succeeds
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run build
      - run: deploy.sh
```

---

## Common Patterns

- Test on every PR
- Build on main branch
- Deploy on successful test + build
- Notify on failure
- Security scanning

---

**Proficiency Verified**: Can build and maintain CI/CD pipelines with GitHub Actions.
