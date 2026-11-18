---
description: 'Web Performance Optimization - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Web Performance Optimization - Skill Guide

**Skill Category**: Frontend Development  
**Level**: Advanced  
**Time to Proficiency**: 8-10 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Web performance directly impacts user experience and conversion. This skill covers measuring and improving performance.

---

## Core Web Vitals

### 1. Largest Contentful Paint (LCP)

- Time until largest element visible
- Target: < 2.5 seconds

### 2. First Input Delay (FID)

- Time to respond to user interaction
- Target: < 100 milliseconds

### 3. Cumulative Layout Shift (CLS)

- Unexpected layout shifts
- Target: < 0.1

---

## Optimization Techniques

### 1. Code Splitting

```javascript
// Before: All code in one bundle
import { heavy } from './heavy';

// After: Load on demand
const heavy = React.lazy(() => import('./heavy'));

<Suspense fallback={<Loading />}>
  <heavy />
</Suspense>;
```

### 2. Image Optimization

```html
<!-- Responsive images -->
<picture>
  <source srcset="image-small.webp" media="(max-width: 600px)" />
  <source srcset="image-large.webp" media="(min-width: 601px)" />
  <img src="image.jpg" alt="Description" />
</picture>
```

### 3. Caching Strategies

- Browser cache
- CDN cache
- Service worker cache

---

## Measurement Tools

- Lighthouse (built-in browser)
- WebPageTest
- Synthetic monitoring (Datadog, New Relic)

---

**Proficiency Verified**: Can measure and improve web performance.
