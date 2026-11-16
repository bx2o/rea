---
description: 'Technical Writing & Documentation - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Technical Writing & Documentation - Skill Guide

**Skill Category**: Content  
**Level**: Intermediate  
**Time to Proficiency**: 4-6 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Clear technical documentation is essential for software projects. This skill covers writing guides, API docs, and technical content that users actually understand.

---

## Core Principles

### 1. Know Your Audience

- **Beginners**: Explain basics, provide examples
- **Experienced**: Focus on details, edge cases
- **Mixed**: Structure to support all levels

### 2. Be Clear, Not Clever

✅ **Clear**: "Call the function before using the result"
❌ **Clever**: "Ensure proper initialization precedent"

### 3. Use Examples

```markdown
❌ Bad: "Use the filter parameter to limit results"

✅ Good: "Use the filter parameter to limit results.
Example:
GET /users?filter=role:admin
```

---

## Documentation Types

### Type 1: API Documentation

```markdown
## GET /users/{id}

Retrieve a specific user by ID.

### Parameters

- **id** (path, required): User ID

### Response

- **200 OK**: User object
- **404 Not Found**: User doesn't exist
- **401 Unauthorized**: Authentication required

### Example Request

GET /users/123

### Example Response

{
"id": "123",
"name": "Alice",
"email": "alice@example.com"
}
```

### Type 2: Getting Started Guide

```markdown
# Getting Started

## Prerequisites

- Node.js 14+
- npm 6+

## Installation

1. Install package: npm install mylib
2. Import: const MyLib = require('mylib');
3. Use: const result = MyLib.transform(data);

## First Example

[Complete working example]

## Next Steps

- See Advanced Usage
- Review API Reference
- Check Example Projects
```

### Type 3: Troubleshooting Guide

```markdown
## Troubleshooting

### Error: "Module not found"

**Cause**: Dependency not installed
**Solution**: npm install
**Link**: See Installation Guide

### Error: "Connection timeout"

**Cause**: Server unreachable
**Solution**:

- Check internet connection
- Verify server URL
- Check firewall settings
```

---

## Structure Guidelines

### Headings Hierarchy

```markdown
# Main Title (one per document)

## Major Sections

### Subsections

#### Details (rarely used)
```

### Information Architecture

```
Start with overview/why
Move to how to get started
Then to specific topics
End with examples or troubleshooting
```

---

## Writing Techniques

### Use Lists Instead of Paragraphs

❌ "After you install the package, you need to import it, and then you can call the functions, but remember to pass the correct parameters or you'll get an error."

✅ "After installation:

1. Import the package
2. Call functions with correct parameters
3. See Examples for parameter formats"

### Use Tables for Comparisons

```markdown
| Feature    | Option A  | Option B |
| ---------- | --------- | -------- |
| Speed      | Fast      | Slow     |
| Cost       | Expensive | Cheap    |
| Complexity | Simple    | Complex  |
```

### Code Examples

- Always provide complete, working examples
- Show common use cases
- Include error handling
- Add comments for non-obvious parts

---

## Tools

- **Markdown**: Plain text documentation
- **Swagger/OpenAPI**: API documentation generators
- **ReadTheDocs**: Hosting documentation
- **DocTest**: Verify examples work
- **Typography tools**: Grammarly, Hemingway Editor

---

**Proficiency Verified**: Can write clear, user-friendly technical documentation.
