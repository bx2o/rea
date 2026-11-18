---
description: 'Build vs. Buy Decision Framework - Stremiium decision framework'
document_type: 'decision_framework'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
scope: '16-council ecosystem'
---

# Build vs. Buy Decision Framework

**Purpose**: Evaluate whether to build a capability internally or purchase from external vendor  
**Use When**: Considering custom development vs. off-the-shelf solutions  
**Owner**: The Architect + The Strategist  
**Last Updated**: February 18, 2026

---

## Decision Matrix

| Factor                    | Build       | Buy        | Notes                         |
| ------------------------- | ----------- | ---------- | ----------------------------- |
| **Time to Market**        | 3-12 months | 1-3 months | Prefer BUY for speed          |
| **Cost**                  | $200k-$2M+  | $50k-$500k | Usually BUY cheaper           |
| **Customization**         | 100%        | 0-80%      | BUILD if unique needs         |
| **Maintenance**           | Internal    | Vendor     | BUILD means ongoing work      |
| **Competitive Advantage** | Yes         | No         | BUILD if it's differentiation |
| **Team Expertise**        | Required    | Not needed | BUILD needs skills            |
| **Vendor Risk**           | None        | High       | BUY has lock-in risk          |

---

## Decision Tree

```
Start: Need a capability

1. Is it core to our business?
   NO → BUY
   YES → Continue

2. Do we have unique requirements?
   NO → BUY
   YES → Continue

3. Do we have the team/budget/time?
   NO → BUY
   YES → Continue

4. Will it provide competitive advantage?
   NO → BUY
   YES → BUILD
```

---

## Financial Analysis

**Build Option**:

- Development: $200k-$2M
- Team: 2-6 people for 6-12 months
- Maintenance: $50k-$200k/year
- Opportunity cost: Other features delayed

**Buy Option**:

- License: $50k-$500k/year
- Implementation: $50k-$200k
- Training: $10k-$50k
- Vendor lock-in risk

**Break-even**: If BUILD cost + 5-year maintenance < BUY license costs

---

## Risk Factors

**Build Risks**:

- Scope creep
- Team turnover
- Technology becomes obsolete
- Slower initial rollout

**Buy Risks**:

- Vendor goes out of business
- Product direction misaligned
- Integration challenges
- Switching costs

---

## Recommendation Framework

**Build if**:

- Core competitive advantage
- Unique business requirements
- Available team + budget
- Long-term cost savings

**Buy if**:

- Need speed to market
- Non-core functionality
- Resource constraints
- Vendor stability proven

---
