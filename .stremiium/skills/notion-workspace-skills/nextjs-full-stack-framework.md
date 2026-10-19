---
description: 'Next.js Full-Stack Framework - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Next.js Full-Stack Framework - Skill Guide

**Skill Category**: Frontend Development  
**Level**: Intermediate to Advanced  
**Time to Proficiency**: 8-10 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Next.js is a React framework for production applications. This skill covers building full-stack apps with Next.js.

---

## Key Features

### 1. File-Based Routing

```
pages/
  index.js          → /
  about.js          → /about
  posts/[id].js     → /posts/123
  api/users.js      → /api/users
```

### 2. Server-Side Rendering (SSR)

```javascript
export async function getServerSideProps() {
  const data = await fetchData();
  return { props: { data } };
}

export default function Page({ data }) {
  return <div>{data}</div>;
}
```

### 3. API Routes

```javascript
// pages/api/users.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ users: [] });
  } else if (req.method === 'POST') {
    res.status(201).json({ id: 1 });
  }
}
```

### 4. Static Generation

```javascript
export async function getStaticProps() {
  return { props: {}, revalidate: 60 }; // Revalidate every 60s
}
```

---

## Deployment

- Vercel (official platform)
- Self-hosted servers
- Docker containers

---

**Proficiency Verified**: Can build full-stack Next.js applications.
