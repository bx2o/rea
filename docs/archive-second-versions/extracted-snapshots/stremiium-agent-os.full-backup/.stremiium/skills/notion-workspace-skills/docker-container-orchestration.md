---
description: 'Docker Container Orchestration - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Docker Container Orchestration - Skill Guide

**Skill Category**: DevOps  
**Level**: Intermediate to Advanced  
**Time to Proficiency**: 6-8 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Docker enables containerized application deployment. This skill covers building, managing, and orchestrating containers in production environments.

---

## Core Concepts

### 1. Docker Basics

**Dockerfile - Build Application Container**

```dockerfile
FROM node:18-alpine       # Base image
WORKDIR /app              # Working directory inside container
COPY package.json .       # Copy files
RUN npm install          # Install dependencies
COPY . .                 # Copy source code
EXPOSE 3000              # Expose port
CMD ["npm", "start"]     # Default command
```

**docker-compose.yml - Multi-Container Apps**

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - '3000:3000'
    environment:
      - DATABASE_URL=postgres://db:5432/myapp
    depends_on:
      - db

  db:
    image: postgres:14
    environment:
      - POSTGRES_PASSWORD=secret
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### 2. Image Optimization

```dockerfile
# ✅ Good: Multi-stage build (small final image)
FROM node:18 AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package.json .
RUN npm install --production
CMD ["npm", "start"]

# ❌ Bad: Large final image
FROM node:18
RUN apt-get update && apt-get install -y build-tools
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
```

### 3. Networking

```yaml
services:
  app:
    networks:
      - backend
    environment:
      - DB_HOST=database # Can reach other service by name

  database:
    networks:
      - backend

networks:
  backend:
    driver: bridge
```

---

## Production Patterns

### Pattern 1: Health Checks

```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1
```

### Pattern 2: Logging

```dockerfile
# Don't buffer logs
ENV NODE_OPTIONS=--unhandled-rejections=strict

# Log to stdout/stderr (not files)
CMD ["npm", "start"]  # Must output to stdout
```

### Pattern 3: Security Best Practices

```dockerfile
# ✅ Don't run as root
RUN groupadd -r appuser && useradd -r -g appuser appuser
USER appuser

# ✅ Minimal base image
FROM node:18-alpine

# ✅ No hardcoded secrets
ENV API_KEY_FILE=/run/secrets/api_key

# ✅ Read-only filesystem where possible
```

---

## Kubernetes Basics

**Deployment Configuration**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3 # 3 copies for redundancy
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
          image: my-app:1.0 # Docker image
          ports:
            - containerPort: 3000
          env:
            - name: DATABASE_URL
              valueFrom:
                secretKeyRef: # Reference secret
                  name: db-secret
                  key: url
          resources:
            requests:
              memory: '256Mi'
              cpu: '250m'
            limits: # Maximum resources
              memory: '512Mi'
              cpu: '500m'
          livenessProbe: # Restart if unhealthy
            httpGet:
              path: /health
              port: 3000
```

---

## Container Orchestration

### Why Orchestration?

```
Manual                          Orchestrated
- Deploy container              - Auto-deploy on nodes
- Monitor manually              - Auto-monitor health
- Scale manually                - Auto-scale based on load
- Manual failover              - Auto-failover
- Manual update                - Rolling updates
- Complex operations           - Simple APIs
```

### Key Features

1. **Auto-scheduling**: Place containers on appropriate nodes
2. **Self-healing**: Restart failed containers
3. **Load balancing**: Distribute traffic
4. **Rolling updates**: Zero-downtime deployments
5. **Auto-scaling**: Scale based on metrics
6. **Storage management**: Persistent data

---

## Registry & Images

**Docker Registry**

```bash
# Build image
docker build -t myapp:1.0 .

# Tag for registry
docker tag myapp:1.0 registry.example.com/myapp:1.0

# Push to registry
docker push registry.example.com/myapp:1.0

# Pull from registry
docker pull registry.example.com/myapp:1.0

# Run
docker run -p 3000:3000 registry.example.com/myapp:1.0
```

**Image Tagging Strategy**

```
latest               - Always points to latest build
v1.0.0              - Specific version (use in prod)
v1.0.0-rc1          - Release candidate
main-abc123         - Branch builds
```

---

## Common Patterns

### Pattern: Sidecar Container

```yaml
containers:
  - name: app
    image: myapp:1.0

  - name: logging-sidecar
    image: logging-agent:1.0
    # Runs alongside main app, shares volumes
```

### Pattern: Init Container

```yaml
initContainers:
  - name: migrate-db
    image: myapp-migrate:1.0
    # Runs to completion before main app starts

containers:
  - name: app
    image: myapp:1.0
```

---

## Tools

- **Docker**: Container runtime
- **Docker Compose**: Multi-container local development
- **Kubernetes**: Production orchestration
- **Docker Registry**: Image storage/distribution
- **Docker Hub**: Public registry
- **Private registries**: ECR, GCR, ACR

---

## Debugging

```bash
# View logs
docker logs <container>

# Execute command in container
docker exec -it <container> bash

# View resource usage
docker stats

# Inspect container
docker inspect <container>

# Network debugging
docker network ls
docker network inspect <network>
```

---

**Proficiency Verified**: Can containerize applications, manage multi-container environments, and deploy to orchestration platforms.
