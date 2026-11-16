---
description: 'Multi-Council Result Synthesis Algorithm (v3.0) - Stremiium algorithm'
document_type: 'algorithm'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
scope: 'Agent orchestration'
---

# Multi-Council Result Synthesis Algorithm (v3.0)

**Purpose**: Combine outputs from multiple councils into unified, integrated results with explicit cross-council coordination and conflict resolution
**Audience**: Sparkling Curious (primary), Council Captains, integration leads, project coordinators  
**Last Updated**: March 22, 2026
**Applies To**: Multi-council projects (typically 2+ councils contributing)
**Orchestration**: Sparkling Curious (executive synthesis authority)

---

## Overview

When multiple councils contribute to a shared goal, their outputs must be synthesized into a coherent, integrated result with explicit handling of inter-council conflicts and dependencies. This algorithm provides systematic approach to collecting, validating, integrating across council boundaries, and delivering final unified outputs. This algorithm provides systematic approach to collecting, validating, integrating, and delivering final outputs.

---

## Core Algorithm

### Phase 1: Preparation

#### Step 1.1: Define Integration Requirements

**Before synthesis begins, clarify**:

- [ ] What's the final deliverable?
- [ ] What format should it be in?
- [ ] Who are the end consumers?
- [ ] What quality standards apply?
- [ ] What's the timeline for delivery?

#### Step 1.2: Define Council Handoff Requirements

**For each contributing council (and council captain), specify**:

- [ ] Which council is this? (C01-C16)
- [ ] What are they delivering? (specific deliverables)
- [ ] In what format? (Markdown, JSON, etc.)
- [ ] By what date? (with council captain sign-off)
- [ ] What quality standards? (80%+ coverage, security review, legal review, etc.)
- [ ] How will it be provided? (artifact path, review process)
- [ ] Who reviews this before integration? (primary + secondary council captains)
- [ ] What cross-council dependencies exist? (this council depends on X, enables Y)

**Example**:

```
The Architect: System Design Document
├─ Format: Markdown with diagrams
├─ Deadline: Friday 5 PM
├─ Standards: Complete, reviewable, decision points clear
└─ Delivery: Upload to /architecture folder
```

#### Step 1.3: Create Integration Plan

**Document**:

- [ ] Who delivers what pieces
- [ ] Sequence of integration
- [ ] Conflict resolution approach
- [ ] Quality gates/checkpoints
- [ ] Final validation approach

---

### Phase 2: Collection

#### Step 2.1: Collect All Outputs

**For each agent's output**:

- [ ] Received on time? (if not, escalate)
- [ ] In expected format? (if not, request revision)
- [ ] Complete? (if not, get missing pieces)
- [ ] Legible/understandable? (if not, request clarification)

#### Step 2.2: Initial Validation

**For each piece, verify**:

- [ ] Does it meet stated requirements?
- [ ] Is it consistent with instructions given?
- [ ] Are standards met? (formatting, completeness, etc.)
- [ ] Are there obvious errors or gaps?

**If quality issues found**:

- [ ] Request clarification/revision
- [ ] Work with agent to fix
- [ ] Don't proceed with flawed inputs

#### Step 2.3: Documentation

```
COLLECTION RECORD

Output Name | Agent | Received | Format OK | Complete | Quality | Status
---|---|---|---|---|---|---
System Design | Architect | ✅ 3/15 | ✅ | ✅ | ✅ | READY
API Spec | Engineer | ✅ 3/15 | ⚠️ JSON needed | ✅ | ✅ | REV NEEDED
Process Doc | Strategist | ✅ 3/15 | ✅ | ❌ | ❌ | INCOMPLETE
...
```

---

### Phase 3: Analysis & Conflict Detection

#### Step 3.1: Identify Gaps

**Scan all outputs for**:

- [ ] Missing pieces that should be covered
- [ ] Overlapping coverage (redundancy)
- [ ] Inconsistencies between pieces
- [ ] Conflicting recommendations/decisions
- [ ] Different assumptions

#### Step 3.2: Create Gap List

```
Identified Gaps

Gap 1: Integration between API and Database not defined
- Impact: Critical (blocks implementation)
- Resolution: Need joint Architect + Engineer session

Gap 2: Customer support approach not addressed
- Impact: Medium (can define later)
- Resolution: Assign to Rainmaker for inclusion

Gap 3: Security considerations vs. Performance
- Impact: High (conflicting requirements)
- Resolution: Need escalation to Sparkling Curious

...
```

#### Step 3.3: Create Conflict List

```
Identified Conflicts

Conflict 1: Timeline Disagreement
- Architect estimates 6 weeks
- Engineer estimates 4 weeks
- Resolution: Review with both, decide realistic timeline

Conflict 2: Architecture Approach
- Proposal A: Microservices (Architect preference)
- Proposal B: Monolithic (Engineer preference)
- Resolution: Need cost/benefit analysis, escalate if unresolved

...
```

#### Step 3.4: Identify Inconsistencies

```
Identified Inconsistencies

Inconsistency 1: Budget Numbers
- Plan A says $500K
- Budget Doc says $700K
- Resolution: Reconcile with Capitalist

Inconsistency 2: Success Metrics
- Marketing says focus on acquisition
- Product says focus on retention
- Resolution: Clarify primary metric

...
```

---

### Phase 4: Resolution

#### Step 4.1: Resolve Gaps

**For each gap**:

1. **Determine if critical**:
   - Will project fail without resolution? = Critical
   - Can it be deferred? = Non-critical

2. **If critical**: Create gap closure plan
   - Who needs to provide missing info?
   - When can they provide it?
   - Any blockers?

3. **Proceed with integration** once critical gaps addressed

#### Step 4.2: Resolve Conflicts (Conservative Approach)

**For each conflict, use this resolution hierarchy**:

1. **Seek Understanding**: Do all parties actually disagree?
   - Clarify positions
   - Identify common ground
   - Narrow disagreement

2. **Analyze Tradeoffs**: What are the pros/cons?
   - Both approaches valid?
   - Which serves overall goal better?
   - What's the impact of each?

3. **Seek Consensus**: Can we find middle ground?
   - Hybrid approach?
   - Phased approach?
   - Conditional approach?

4. **Get Time-limited Input**: How much time to resolve?
   - Give agents 1 hour to resolve
   - If resolved, proceed
   - If not resolved, escalate

5. **Escalate**: Unresolved conflicts go to Sparkling Curious
   - Present both positions
   - Provide analysis
   - Get executive decision
   - Document decision and rationale

#### Step 4.3: Handle Inconsistencies

**For each inconsistency**:

1. **Find the error** (data, calculation, assumption?)
2. **Correct the record**
3. **Inform all parties** of correction
4. **Update outputs** as needed

**Example**:

- Budget discrepancy found
- Capitalist provides correct number
- All references updated
- Consistency verified

#### Step 4.4: Resolution Documentation

```
RESOLUTION RECORD

Issue | Type | Severity | Resolution | Owner | Status
---|---|---|---|---|---
Timeline diff | Conflict | High | Escalated to SC | SC | DECIDED
API/DB boundary | Gap | Critical | Architect+Eng session | Architect | RESOLVED
Budget numbers | Inconsistency | Medium | Corrected | Capitalist | FIXED
Support process | Gap | Low | Defer to Phase 2 | Rainmaker | DEFERRED
...
```

---

### Phase 5: Integration

#### Step 5.1: Create Integration Framework

**Decide on structure**:

- [ ] What's the overarching architecture?
- [ ] How do pieces fit together?
- [ ] What's the reading flow?
- [ ] What are the main sections?

**Example for Product Launch Plan**:

```
I. Executive Summary
   a. Overview
   b. Timeline
   c. Budget
II. Product Strategy (from Product/Architect)
III. Go-to-Market (from Marketing/Sales)
IV. Operations (from Engineering/Operations)
V. Finance (from Finance)
VI. Team & Culture (from People/Culture)
VII. Risks & Mitigation
VIII. Success Metrics
```

#### Step 5.2: Integrate Pieces

**For each section**:

1. Take relevant agent output
2. Adapt to framework
3. Remove redundancy
4. Ensure consistency of terminology
5. Verify cross-references work
6. Add connective narrative

#### Step 5.3: Create Unified Voice

**Pass through for consistency**:

- [ ] Consistent terminology throughout
- [ ] Consistent formatting
- [ ] Consistent tone/style
- [ ] All pronouns/references consistent
- [ ] All acronyms defined first use

#### Step 5.4: Add Synthesis Commentary

**Where applicable, add**:

- Executive summary synthesizing key points
- Connections between sections
- Implications/trade-offs called out
- Overall perspective on feasibility
- High-level success factors

---

### Phase 6: Quality Assurance

#### Step 6.1: Completeness Review

- [ ] Does final output cover stated objective?
- [ ] Are all required sections present?
- [ ] Are there obvious gaps?
- [ ] Are appendices complete?

#### Step 6.2: Consistency Review

- [ ] Are key numbers consistent throughout?
- [ ] Are recommendations aligned?
- [ ] Are implicit assumptions consistent?
- [ ] Does it tell coherent story?

#### Step 6.3: Accuracy Review

- [ ] Check facts against sources
- [ ] Verify calculations
- [ ] Confirm dates/timelines
- [ ] Validate budget numbers
- [ ] Verify organizational structure references

#### Step 6.4: Usability Review

- [ ] Is it organized logically?
- [ ] Can target audience understand?
- [ ] Is navigation clear?
- [ ] Are visuals helpful?
- [ ] Can someone act on it?

#### Step 6.5: Sign-off

```
SYNTHESIS QUALITY ASSURANCE

Reviewed By: [Name]
Date: [Date]

Completeness: ✅ All sections present and complete
Consistency: ✅ Numbers and recommendations aligned
Accuracy: ✅ Facts verified, calculations correct
Usability: ✅ Clear, logical, actionable
Issues Found: None
Quality Rating: Ready to deliver

Signed: ________________  Date: ________
```

---

### Phase 7: Delivery

#### Step 7.1: Prepare for Delivery

- [ ] Format for intended audience
- [ ] Create executive summary if lengthy
- [ ] Create presentation version if needed
- [ ] Prepare talking points
- [ ] Anticipate questions

#### Step 7.2: Present to Stakeholders

- [ ] Walk through conclusions
- [ ] Explain methodology
- [ ] Highlight key decisions
- [ ] Address concerns
- [ ] Get feedback
- [ ] Clarify ambiguities

#### Step 7.3: Document Feedback

```
FEEDBACK FROM PRESENTATION

Stakeholder | Feedback | Resolution
---|---|---
Exec Sponsor | "Need more detail on risks" | Added risk section
CFO | "Budget assumptions unclear" | Added assumptions footnotes
VP Ops | "Timeline seems tight" | Reviewed, confirmed realistic
...
```

#### Step 7.4: Final Delivery

- [ ] Incorporate feedback into final version
- [ ] Distribute to stakeholders
- [ ] Archive for future reference
- [ ] Document version/date
- [ ] Notify all contributors of delivery

---

## Common Synthesis Patterns

### Pattern 1: Sequential Synthesis

**When**: Outputs build on each other

```
Architecture Design
    ↓
Implementation Plan (based on architecture)
    ↓
Resource Plan (based on implementation)
    ↓
Timeline/Budget (based on resources)
    ↓
Final Plan (bringing it together)
```

**Approach**: Validate each stage before moving to next

---

### Pattern 2: Parallel Synthesis

**When**: Multiple independent pieces need to be combined

```
Marketing Strategy ──┐
Sales Strategy ──┬──→ Go-to-Market Plan
Product Strategy─┘

Engineering Plan ──┐
Finance Plan ──┬──→ Operational Plan
HR Plan ─────────┘
```

**Approach**: Collect all pieces, find connections, integrate

---

### Pattern 3: Hierarchical Synthesis

**When**: Multiple levels of detail need integration

```
Executive Summary (high level)
        ├─ Strategic Overview
        │   ├─ Detailed Plan A
        │   ├─ Detailed Plan B
        │   └─ Detailed Plan C
        └─ Appendices (supporting detail)
```

**Approach**: Create hierarchy, link levels, verify flow

---

## Synthesis Checklist

- [ ] All agent outputs collected
- [ ] Outputs meet format/quality requirements
- [ ] Gaps identified and documented
- [ ] Conflicts identified and resolved
- [ ] Inconsistencies found and corrected
- [ ] Integration framework defined
- [ ] Pieces integrated into coherent whole
- [ ] Unified voice/terminology applied
- [ ] Completeness verified
- [ ] Consistency verified
- [ ] Accuracy verified
- [ ] Usability verified
- [ ] Sign-off obtained
- [ ] Stakeholder feedback incorporated
- [ ] Final version delivered

---

**Last Updated**: February 18, 2026  
**Version**: 1.0  
**Status**: Active Algorithm
