---
description: 'Kubernetes Orchestration - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Kubernetes Orchestration - Skill Guide

**Skill Category**: DevOps  
**Level**: Advanced  
**Time to Proficiency**: 10-12 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Kubernetes orchestrates containerized applications at scale. This skill covers deploying and managing Kubernetes clusters.

---

## Kubernetes Concepts

### 1. Pod (smallest unit)

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
    - name: my-container
      image: my-image:latest
      ports:
        - containerPort: 8080
```

### 2. Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: app
          image: my-app:latest
          resources:
            limits:
              cpu: '500m'
              memory: '512Mi'
```

### 3. Service (networking)

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  type: LoadBalancer
  ports:
    - port: 80
      targetPort: 8080
  selector:
    app: my-app
```

---

## Operations

- Scale deployments
- Rolling updates
- Health checks (liveness, readiness probes)
- Persistent volumes
- Namespace isolation

---

**Proficiency Verified**: Can deploy and manage Kubernetes clusters.
