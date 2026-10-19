---
description: 'Google Analytics & Web Analytics - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Google Analytics & Web Analytics - Skill Guide

**Skill Category**: Analytics  
**Level**: Intermediate  
**Time to Proficiency**: 4-6 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Web analytics provide insights into user behavior and application performance. This skill covers tracking, analysis, and actionable insights.

---

## Google Analytics Fundamentals

### Key Metrics

**Traffic Metrics**:

- Sessions: User visits
- Users: Unique visitors
- Pageviews: Pages viewed

**Engagement Metrics**:

- Bounce Rate: % who left immediately
- Avg Session Duration: Time spent
- Pages per Session: Content consumed

**Conversion Metrics**:

- Conversion Rate: % who converted
- Goal Completions: Actions taken
- Revenue: Money generated

### Implementation

```html
<!-- Google Analytics tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

---

## Analysis

### Funnel Analysis

```
Step 1: View product    (1000 users)
Step 2: Add to cart     (600 users)   - 40% drop
Step 3: Checkout       (300 users)   - 50% drop
Step 4: Purchase       (150 users)   - 50% drop

Conversion Rate: 15%
Main dropout: Step 2 -> Step 3
Action: Simplify checkout process
```

---

**Proficiency Verified**: Can implement analytics, analyze data, and derive actionable insights.
