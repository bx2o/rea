---
description: 'Priority Scoring Matrix - Stremiium decision framework'
document_type: 'decision_framework'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
scope: '16-council ecosystem'
---

# Priority Scoring Matrix

**Purpose**: Objectively prioritize work across multiple dimensions  
**Use When**: Feature prioritization, roadmap planning, resource allocation  
**Owner**: The Strategist + The Artisan  
**Last Updated**: February 18, 2026

---

## Common Frameworks

### RICE Scoring

**Reach**: How many users affected (1-100+)
**Impact**: Magnitude of effect

- Massive: 3x
- High: 2x
- Medium: 1x
- Low: 0.5x
- Minimal: 0.25x

**Confidence**: How sure are you (100%, 80%, 50%)?

**Effort**: Engineering weeks

```
RICE = (Reach × Impact × Confidence) / Effort

Example:
Feature A: (100 × 2 × 80%) / 2 = 80
Feature B: (50 × 3 × 100%) / 4 = 37.5
Feature A wins
```

### Value vs. Effort

```
High Value / Low Effort → DO FIRST
High Value / High Effort → DO LATER
Low Value / Low Effort → CONSIDER
Low Value / High Effort → SKIP
```

### MoSCoW Method

- **Must**: Required to ship
- **Should**: Important but not required
- **Could**: Nice to have
- **Won't**: Acknowledged but not this cycle

---

## Scoring Template

| Initiative | Reach | Impact | Confidence | Effort | RICE | Value | Effort | Quadrant  |
| ---------- | ----- | ------ | ---------- | ------ | ---- | ----- | ------ | --------- |
| Feature A  | 100   | 2x     | 80%        | 2      | 80   | 8     | 2      | High/Low  |
| Feature B  | 50    | 3x     | 100%       | 4      | 37.5 | 9     | 4      | High/High |

---

## Decision Rules

1. Rank by score
2. Allocate team capacity
3. Consider dependencies
4. Balance portfolio
5. Review quarterly

---

## Key Principles

- **Objective**: Remove bias/favorites
- **Aligned**: Tied to strategy
- **Balanced**: Consider all factors
- **Transparent**: Clear scoring logic
- **Revisited**: Don't set once

---
