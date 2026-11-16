---
description: 'A/B Testing & Experimentation - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# A/B Testing & Experimentation - Skill Guide

**Skill Category**: Business & Analytics  
**Level**: Intermediate  
**Time to Proficiency**: 6-8 weeks  
**Last Updated**: February 18, 2026

---

## Overview

A/B testing validates hypotheses with data. This skill covers designing and analyzing experiments properly.

---

## Experiment Design

### Setup

```
Hypothesis: Blue button increases clicks by 10%
Control: Current red button
Variant: New blue button
Metric: Click-through rate
Duration: 2 weeks
Sample size: 5,000 per variant
```

### Implementation

```javascript
if (Math.random() < 0.5) {
  showControl(); // 50% see red
} else {
  showVariant(); // 50% see blue
}
```

---

## Statistical Significance

### P-value

- Probability result is due to chance
- Target: p < 0.05 (95% confidence)

### Sample Size

```
Want 80% power, 95% confidence, 10% improvement:
n = 5,000+ per variant needed

Calculators available online
```

### Minimum Detectable Effect

```
Too small: Need huge sample
Too large: Obvious improvements
Aim for 10-20% business impact
```

---

## Pitfalls

- **Peeking**: Checking results too early
- **Multiple comparisons**: Many tests → false positives
- **Selection bias**: Non-random groups
- **Confounding**: Other factors affecting results

---

## Common Tests

- Button color/copy
- Pricing tiers
- Email subject lines
- Landing page layouts
- Feature flags

---

**Proficiency Verified**: Can design and analyze experiments properly.
