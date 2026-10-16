---
description: 'Kubernetes Container Orchestration - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Kubernetes Container Orchestration - Skill Guide

**Skill Category**: DevOps  
**Level**: Advanced  
**Time to Proficiency**: 8-10 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Kubernetes is the industry standard for container orchestration. This skill covers deploying, scaling, and managing containerized applications in production.

---

## Key Concepts

### Cluster Architecture

```
Master (Control Plane):
  - API Server
  - Scheduler
  - Controller Manager
  - etcd (state storage)

Nodes:
  - kubelet (agent)
  - Container runtime
  - kube-proxy (networking)
```

### Resources

**Pod**: Smallest deployable unit

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
    - name: app
      image: myapp:1.0
      ports:
        - containerPort: 3000
```

**Deployment**: Manage replicas

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
          image: myapp:1.0
```

**Service**: Expose pods

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app-service
spec:
  type: LoadBalancer
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 3000
```

---

## Common Operations

### Deploy Application

```bash
kubectl apply -f deployment.yaml
kubectl get deployments
kubectl describe deployment my-app
```

### Scale Deployment

```bash
kubectl scale deployment my-app --replicas=5
kubectl set image deployment/my-app app=myapp:2.0  # Rolling update
```

### Monitor Health

```bash
kubectl get pods
kubectl logs pod-name
kubectl exec -it pod-name -- /bin/bash
```

---

**Proficiency Verified**: Can deploy and manage applications on Kubernetes.
