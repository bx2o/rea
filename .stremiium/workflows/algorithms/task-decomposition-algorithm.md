---
description: 'Multi-Council Task Decomposition Algorithm (v3.0) - Stremiium algorithm'
document_type: 'algorithm'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
scope: 'Agent orchestration'
---

# Multi-Council Task Decomposition Algorithm (v3.0)

**Purpose**: Systematically decompose complex organizational tasks into council-scoped subtasks with explicit multi-council dependencies and orchestration
**Audience**: Sparkling Curious (primary), Council Captains, task planners, project leads  
**Last Updated**: March 22, 2026
**Applies To**: All 16 councils - C01 through C16 (100+ specialist agents)
**Orchestration Model**: Hierarchical (Agents → Council Captains → Sparkling Curious)

---

## Overview

Complex organizational goals are impossible to execute as monolithic tasks. This algorithm provides a systematic approach to decompose large, ambiguous objectives into clearly scoped, sequenced subtasks that agents can execute independently.

---

## Core Algorithm

### Phase 1: Task Understanding

#### Step 1.1: Clarify the Objective

**Input**: Initial task/objective  
**Process**:

- [ ] What is the end state we want?
- [ ] What problem are we solving?
- [ ] Who is the customer/beneficiary?
- [ ] What are the success criteria?
- [ ] What constraints exist? (timeline, budget, resources)
- [ ] What is NOT in scope?

**Output**: Clear, written objective statement

#### Step 1.2: Understand Current State

**Process**:

- [ ] What is the current situation?
- [ ] What exists already?
- [ ] What gaps exist?
- [ ] What dependencies exist?
- [ ] What risks are apparent?

**Output**: Current state documentation

#### Step 1.3: Identify Scope & Council Impact

**Process**:

- [ ] What domains are involved? (technical, business, people, legal, etc.)
- [ ] **Which councils are affected?** (map to C01-C16)
- [ ] Which is the **primary council owner**? (controls execution)
- [ ] Which councils provide **supporting roles**?
- [ ] **What cross-council dependencies exist?** (blockers, sequencing)
- [ ] What systems/processes must be changed?
- [ ] What expertise is required? (identify agents within councils)
- [ ] How complex is this? (1-10 scale)
- [ ] What is **multi-council coordination overhead**? (planning, reviews, escalations)

**Output**: Scope boundary document

---

### Phase 2: Decomposition

#### Step 2.1: Identify Major Work Streams & Council Assignments

**Input**: Objective, scope, current state, council impact map
**Process**:

- [ ] What are the major phases?
- [ ] What categories of work need to happen?
- [ ] What are natural boundaries?
- [ ] Can any work happen in parallel?
- [ ] **Which council leads each work stream?** (assign primary owner)
- [ ] **What other councils must participate?** (secondary vs. advisory)
- [ ] **What are the coordination handoffs?** (between streams)
- [ ] **What are the blocking dependencies?** (work that must complete before next)
- [ ] **Define SLAs per stream** (typical: 4-8 hour reviews, 24-72 hour execution)

**Example for "Build new payment system"**:

1. Requirements & Design
2. API Development
3. Database Design
4. Security Implementation
5. Testing & QA
6. Integration
7. Deployment
8. Launch & Monitoring
9. Team Training
10. Customer Communication

**Output**: 5-10 major work streams identified

#### Step 2.2: Identify Subtasks Within Each Stream

**Process for each stream**:

- [ ] What are the logical sub-phases?
- [ ] What skill sets are needed?
- [ ] What are dependencies within this stream?
- [ ] What are deliverables?

**Example for "API Development"**:

1. Define API specification
2. Design authentication/authorization
3. Implement endpoints (read operations)
4. Implement endpoints (write operations)
5. Add validation and error handling
6. Implement rate limiting
7. Add monitoring/logging
8. Create API documentation

**Output**: 3-8 subtasks per stream (typically)

#### Step 2.3: Identify Micro-Tasks

**Process for each subtask**:

- [ ] Can this be done by one agent in one session?
- [ ] If > 4 hours of work, break down further
- [ ] If unclear, break down further
- [ ] Identify specific deliverable

**Output**: Tasks of 1-8 hour scope

---

### Phase 3: Dependency Analysis

#### Step 3.1: Map Dependencies

**For each task, identify**:

- [ ] What must be done before this task?
- [ ] What can happen in parallel?
- [ ] Are there any circular dependencies?
- [ ] What external dependencies exist?

**Represent as**:

```
Task A → Task B → Task C → Task D
         ↘            ↗
             Task E (parallel with B,C)
```

#### Step 3.2: Identify Critical Path

**Process**:

- [ ] Which sequence of tasks takes longest?
- [ ] Which tasks have zero slack time?
- [ ] What's the minimum possible duration?

**Output**: Critical path identified, total project duration estimated

#### Step 3.3: Identify Blocking Issues

**Process**:

- [ ] What external approvals are needed?
- [ ] What information gaps must be filled?
- [ ] What resources must be allocated?
- [ ] What decisions must be made upfront?

**Output**: Blocking items and resolution timeline

---

### Phase 4: Assignment & Sequencing

#### Step 4.1: Assign to Agents

**For each task**:

- [ ] What's the primary domain? (architecture, engineering, product, marketing, etc.)
- [ ] Which agent owns this domain?
- [ ] Does this require subagent expertise?
- [ ] Are there any capability development opportunities?

**Use agent-selection-algorithm.md** for guidance

#### Step 4.2: Sequence Tasks

**Select sequencing approach**:

- [ ] **Linear**: Task A → B → C (simplest, longest)
- [ ] **Parallel**: A→C, B→C (more complex, faster)
- [ ] **Wave**: Phase 1 (A,B,C), Phase 2 (D,E,F)
- [ ] **Overlapping**: Start B before A completes

**Create timeline**:

```
Week 1: Task A (Mon-Wed), Task B (Thu-Fri)
Week 2: Task C (Mon-Tue), Task D (Wed-Fri)
Week 3: Task E (Mon-Thu), Review (Fri)
```

---

### Phase 5: Estimation & Planning

#### Step 5.1: Estimate Duration

**For each task**:

- [ ] How long to do well? (realistic)
- [ ] Add buffer for unknowns (20-30%)
- [ ] Consider agent experience with this type of work
- [ ] Consider dependencies/blockers

**Duration formula**: (Base estimate) × (1.0 to 1.3 with buffer)

#### Step 5.2: Estimate Resources

**For each task**:

- [ ] Who's doing it? (1-3 people typically)
- [ ] What budget is needed?
- [ ] What tools/systems needed?
- [ ] What training/ramp-up needed?

#### Step 5.3: Identify Risks

**For each task and overall**:

- [ ] What could go wrong?
- [ ] How likely?
- [ ] What's the impact?
- [ ] What's the mitigation?

**Create risk register**:

```
Risk: External vendor delays API documentation
Likelihood: Medium
Impact: High (blocks integration)
Mitigation: Use internal template, start early, have backup vendor
```

---

### Phase 6: Validation

#### Step 6.1: Verify Completeness

- [ ] Do these tasks cover the full objective?
- [ ] Are there any missing pieces?
- [ ] Is there overlap/duplication?
- [ ] Are success criteria clear for each task?

#### Step 6.2: Verify Feasibility

- [ ] Can we get the required resources?
- [ ] Is the timeline realistic?
- [ ] Do dependencies make sense?
- [ ] Are risks addressable?

#### Step 6.3: Get Approval

- [ ] Walk through with impacted agents
- [ ] Refine based on feedback
- [ ] Get Sparkling Curious approval if major
- [ ] Document decision and rationale

---

## Decomposition Principles

### Principle 1: Progressive Elaboration

**Approach**:

- Start with high-level decomposition
- Add detail only as needed
- Refine as you learn more
- Don't over-plan unknown areas

### Principle 2: Single Responsibility

**Each task should**:

- Have one clear deliverable
- Be owned by one agent
- Be completable in one session
- Have clear done/done-not criteria

### Principle 3: Minimize Dependencies

**Design for parallelization**:

- Reduce handoffs when possible
- Design APIs/interfaces upfront
- Parallelize where feasible
- Decouple where possible

### Principle 4: Balance Rigor & Flexibility

**Not everything needs detail**:

- Focus detail on critical path
- Keep less critical tasks flexible
- Plan to re-plan as you learn
- Document decisions

---

## Common Decomposition Patterns

### Pattern 1: Phase-Based Decomposition

**Best for**: Product development, projects with clear phases

```
Design Phase
 → Discovery
 → Requirements
 → Architecture

Development Phase
 → Backend Development
 → Frontend Development
 → Integration

Testing Phase
 → Unit Testing
 → Integration Testing
 → User Acceptance Testing

Deployment Phase
 → Staging Deployment
 → Production Deployment
 → Production Monitoring
```

---

### Pattern 2: Component-Based Decomposition

**Best for**: System with clear components

```
Payment System
├── API Component
│   ├── Authentication
│   ├── Payment Processing
│   └── Reporting
├── Database Component
│   ├── Schema Design
│   ├── Migration Scripts
│   └── Backup/Recovery
├── UI Component
│   ├── Payment Form
│   ├── Receipt Display
│   └── Admin Dashboard
└── Integration Component
    ├── Vendor A Integration
    ├── Vendor B Integration
    └── Fallback Logic
```

---

### Pattern 3: Capability-Based Decomposition

**Best for**: Multi-domain initiatives

```
New Market Launch
├── Product Capability
│   ├── Market Requirements
│   ├── Product Adaptation
│   └── Localization
├── Marketing Capability
│   ├── Brand Adaptation
│   ├── Campaign Development
│   └── Launch Marketing
├── Sales Capability
│   ├── Sales Training
│   ├── Deal Structure
│   └── Pipeline Building
└── Operations Capability
    ├── Fulfillment Setup
    ├── Support Setup
    └── Infrastructure
```

---

## Decomposition Checklist

- [ ] Objective is clear and measurable
- [ ] Current state understood
- [ ] Scope clearly bounded
- [ ] Major work streams identified (5-10)
- [ ] Subtasks created (30-100 typically)
- [ ] Each task is 1-8 hours in scope
- [ ] Deliverables clearly defined for each task
- [ ] Dependencies mapped
- [ ] Critical path identified
- [ ] Tasks assigned to agents
- [ ] Timeline created
- [ ] Resources estimated
- [ ] Risks identified
- [ ] Approval received
- [ ] Team understands their pieces

---

**Last Updated**: February 18, 2026  
**Version**: 1.0  
**Status**: Active Algorithm
