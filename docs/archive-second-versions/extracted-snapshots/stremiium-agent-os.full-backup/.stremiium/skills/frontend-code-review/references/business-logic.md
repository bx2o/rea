---
description: 'Rule Catalog — Business Logic - Skill reference documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Rule Catalog — Business Logic

## Can't use workflowStore in Node components

IsUrgent: True

### Description

File path pattern of node components: `web/app/components/workflow/nodes/[nodeName]/node.tsx`

Node components are also used when creating a RAG Pipe from a template, but in that context there is no workflowStore Provider, which results in a blank screen. [This Issue](https://github.com/langgenius/dify/issues/29168) was caused by exactly this reason.

### Suggested Fix

Use `import { useNodes } from 'reactflow'` instead of `import useNodes from '@/app/components/workflow/store/workflow/use-nodes'`.
