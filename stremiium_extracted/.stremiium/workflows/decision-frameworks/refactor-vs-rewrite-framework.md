---
description: 'Refactor vs. Rewrite Decision Framework - Stremiium decision framework'
document_type: 'decision_framework'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
scope: '16-council ecosystem'
---

# Refactor vs. Rewrite Decision Framework

**Purpose**: Decide whether to improve existing code or rewrite from scratch  
**Use When**: Code quality issues need addressing  
**Owner**: The Architect + The Engineer  
**Last Updated**: February 18, 2026

---

## Assessment Criteria

### Refactor (Preferred)

```
✓ Code is well-structured overall
✓ Can identify specific problem areas
✓ Tests exist for coverage
✓ Team understands codebase
✓ Isolated components can be improved
✓ Incremental improvements compound
✓ Risk is manageable
```

### Complete Rewrite

```
✓ Code is fundamentally broken
✓ No tests to guide changes
✓ Cannot salvage components
✓ New technology significantly better
✓ Faster than fixing patches
✓ Cannot add features to existing codebase
✓ Vendor or framework going away
```

---

## Decision Matrix

| Factor               | Refactor    | Rewrite       | Decision                    |
| -------------------- | ----------- | ------------- | --------------------------- |
| **Code Quality**     | Some debt   | Comprehensive | If >70% bad → Rewrite       |
| **Test Coverage**    | >30%        | <5%           | If no tests → Rewrite       |
| **Team Knowledge**   | High        | Low           | If team knows → Refactor    |
| **Time Available**   | Incremental | 3-6 months    | If time limited → Refactor  |
| **Feature Pressure** | High        | Low           | If need features → Refactor |
| **Risk Tolerance**   | Managed     | High          | If risk averse → Refactor   |

---

## Hybrid Approach (Often Best)

```
Maintain existing system in production
Parallel build new system
Gradual migration of features
Switchover when ready

Benefits:
- No service disruption
- Can pause if needed
- Learn from existing
- Staged rollout
```

---

## Red Flags for Rewrite

```
❌ "We'll rewrite and add features"
❌ "It will be faster than maintaining"
❌ "New language will solve problems"
❌ Underestimating scope
❌ No clear benefit to users
```

---

## Recommendation

**Refactor if**:

- Team wants features quickly
- Can incrementally improve
- Risk is concern
- Code has salvageable parts

**Rewrite if**:

- Cost of maintenance > rebuild
- Fundamental architecture broken
- Migration path is clear
- New technology provides real value

**Hybrid (Strangler) if**:

- Complex system
- Can migrate gradually
- Both systems can coexist

---
