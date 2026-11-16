---
description: 'Serverless Architecture - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Serverless Architecture - Skill Guide

**Skill Category**: Backend Development  
**Level**: Intermediate to Advanced  
**Time to Proficiency**: 6-8 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Serverless computing runs code without managing servers. This skill covers building serverless applications on platforms like AWS Lambda.

---

## Serverless Model

```
Traditional: You provision and manage servers

Serverless:
- Write functions
- Deploy to platform
- Platform handles scaling, availability
- Pay only for execution time
```

### AWS Lambda Example

```python
import json

def lambda_handler(event, context):
    # Event: API Gateway request
    # Context: Runtime information

    body = json.loads(event['body'])
    user_id = body['user_id']

    # Process...

    return {
        'statusCode': 200,
        'body': json.dumps({'result': 'success'})
    }
```

---

## Patterns

### Pattern 1: API Backend

- API Gateway → Lambda → DynamoDB
- Scales automatically
- Pay per invocation

### Pattern 2: Event Processing

- S3 upload → Lambda → Process
- SQS → Lambda → Worker

### Pattern 3: Scheduled Tasks

- CloudWatch Events → Lambda runs on schedule
- Cron-like triggers

---

## Limits

- **Execution Time**: Max 15 minutes
- **Memory**: 128 MB to 10 GB
- **Cold Starts**: First invocation slower
- **Concurrency**: Limits per account

---

**Proficiency Verified**: Can build production serverless applications.
