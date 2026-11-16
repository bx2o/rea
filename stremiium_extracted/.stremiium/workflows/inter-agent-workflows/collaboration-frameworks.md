---
description: 'Collaboration Frameworks - Inter-Agent Coordination Framework - Stremiium inter-agent workflow'
document_type: 'inter_agent_workflow'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
scope: '100+ agents across 16 councils'
---

# Collaboration Frameworks - Inter-Agent Coordination Framework

**Purpose**: Guidelines for multi-agent collaboration on shared goals  
**Audience**: All agents working on cross-functional initiatives  
**Last Updated**: February 18, 2026

---

## Overview

Many organizational goals require collaboration across multiple agents. This document provides frameworks for how multiple agents effectively collaborate, coordinate, resolve conflicts, and achieve shared success.

---

## Collaboration Principles

### 1. Shared Ownership

**Everyone owns the outcome**:

- Individual agents accountable for their domain
- Collective responsibility for success
- Celebrate joint wins
- Learn from shared failures

### 2. Clear Roles

**Everyone knows their contribution**:

- Each agent's specific role defined
- Integration points clear
- Handoff points explicit
- Accountability for each piece

### 3. Regular Communication

**Ongoing coordination**:

- Scheduled meetings for alignment
- Ad-hoc communication as needed
- Transparent about status and issues
- Shared documentation

### 4. Conflict as Opportunity

**Differences drive better decisions**:

- Welcome diverse perspectives
- Surface disagreements early
- Resolve through dialogue
- Make final decision and commit

### 5. Continuous Improvement

**Learn and refine together**:

- Regular retrospectives
- Adapt approach as needed
- Share best practices
- Build team capability

---

## Collaboration Models

### Model 1: Sequential Collaboration

**When**: Tasks must be done in sequence, one agent → next agent

**Example**:

- The Architect designs system
- The Engineer implements deployment
- The Rainmaker sells to customers
- The Guardian onboards team

**Structure**:

```
Architect → Engineer → Rainmaker → Guardian → Operations
   (5 days)   (10 days)   (7 days)   (3 days)   (2 days)
        Total: ~27 days
```

**Coordination**:

- Clear handoff points
- Exit criteria for each phase
- Entry requirements for next phase
- Feedback loops for refinement

**Challenges**:

- Delays cascade down the line
- Rework if previous phase missed requirements
- Limited parallel activity

**Success Factors**:

- Clear specifications between phases
- Quality assurance before handoff
- Documented requirements
- Feedback mechanism for missed items

---

### Model 2: Parallel Collaboration

**When**: Multiple agents working simultaneously on different aspects

**Example**:

- The Architect designing while The Engineer plans infrastructure
- The Amplifier creates marketing while Rainmaker builds sales tools
- The Guardian recruits while The Engineer onboards infrastructure

**Structure**:

```
        Architect (10 days)
       /         \
  Engineer    Marketing (8 days)
  (10 days)     /    \
       \    Rainmaker (10 days)
        \      /
        Guardian (7 days)
```

**Coordination**:

- Weekly sync meetings
- Shared dependencies documented
- Blocking items escalated immediately
- Regular integration checks

**Challenges**:

- Requires more communication
- Dependencies can block progress
- Integration issues may emerge late

**Success Factors**:

- Clear API/handoff between workstreams
- Regular integration testing
- Dependency tracking
- Active communication

---

### Model 3: Consensus Collaboration

**When**: Major decision needs input from multiple agents

**Example**:

- Pricing decision needing The Capitalist, Rainmaker, Strategist
- Technology choice needing The Architect, Engineer, Strategist
- Org change needing The Guardian, Strategist, Capitalist

**Process**:

1. **Frame Decision** (1 hour)
   - Sparkling Curious frames the decision
   - Clarifies what's being decided
   - Sets timeline

2. **Gather Input** (2-4 hours)
   - Each agent provides perspective
   - Surfaces pros/cons from their domain
   - Identifies risks/opportunities

3. **Discuss Tradeoffs** (2-3 hours)
   - Dialogue about competing priorities
   - Understand impact on each domain
   - Explore creative solutions

4. **Make Decision** (30 min)
   - Sparkling Curious makes decision
   - Explains reasoning
   - Clarifies implementation approach

5. **Commit & Execute** (ongoing)
   - All agents commit to implementation
   - Coordinate execution
   - Track progress

---

### Model 4: Center-Spoke Collaboration

**When**: One agent coordinates multiple agents

**Example**:

- Product Launch: The Strategist coordinates (Architect designs, Rainmaker sells, Amplifier markets, Engineer delivers)
- Acquisition: The Capitalist coordinates (Strategist negotiates, Veritas handles legal, Guardian manages integration)

**Structure**:

```
           Architect
              |
    Engineer - Strategist - Rainmaker
              |
           Guardian
```

**Coordination**:

- Central agent (hub) sets direction
- Spoke agents execute their domains
- Hub coordinates across spokes
- Regular hub meetings to sync

**Hub Responsibilities**:

- Overall success ownership
- Conflict resolution between spokes
- Resource allocation
- Timeline/milestone management
- Executive communication

---

### Model 5: Matrix Collaboration

**When**: Complex initiatives need both domain expertise and functional accountability

**Example**:

```
Projects/Initiatives     Functional Agents
        |                      |
        └─ Product A ────────── The Architect
        │                      │
        ├─ Product B ────────── The Engineer
        │                      │
        └─ Product C ────────── The Rainmaker
```

**Challenges**:

- Dual reporting relationships
- Competing priorities
- Resource conflicts
- Decision authority unclear

**Success Factors**:

- Clear decision authority for each decision type
- Regular one-on-ones to discuss priorities
- Transparent about conflicts
- Executive visibility into tradeoffs

---

## Collaboration Governance

### Roles in Collaboration

| Role            | Responsibility                                 | Authority                          |
| --------------- | ---------------------------------------------- | ---------------------------------- |
| **Lead**        | Overall initiative success, coordinates agents | Makes final decisions within scope |
| **Stream Lead** | Specific stream/workstream success             | Decides on stream-specific items   |
| **Member**      | Delivers within their domain                   | Decides on tactical implementation |
| **Sponsor**     | Provides executive support, escalates blockers | Override authority if needed       |
| **Observer**    | Stays informed, provides input if needed       | No formal authority                |

### Decision-Making Framework

| Decision Type                                | Authority                 | Process                             | Timeline    |
| -------------------------------------------- | ------------------------- | ----------------------------------- | ----------- |
| **Tactical** (Small, reversible)             | Stream lead               | Decide and communicate              | Same day    |
| **Strategic** (Medium, significant impact)   | Initiative lead           | Consult stakeholders, decide        | 1-2 days    |
| **Major** (Large, company-wide impact)       | Sparkling Curious         | Full team input, executive decision | 1 week      |
| **Crisis** (Urgent, must decide immediately) | Highest authority present | Act and communicate                 | Immediately |

---

## Collaboration Meeting Rhythm

### Essential Meetings

**Daily Standup** (15 minutes)

- Quick status from each agent
- Blockers surface immediately
- Can be async (Slack) for non-urgent

**Weekly Sync** (1 hour)

- Review progress on key items
- Discuss blockers and solutions
- Upcoming week planning
- Required for initiatives > 2 weeks

**Bi-Weekly Deep Dive** (2 hours)

- Detailed status on each stream
- Technical/strategic discussions
- Problem-solving on complex issues
- Required for major initiatives

**Monthly Steering** (1 hour)

- Executive update on progress
- Major decision points
- Resource allocation
- Blocker escalation

**Quarterly Review** (2 hours)

- Retrospective on initiative
- Lessons learned
- Process improvements
- Planning for next phase

---

## Collaboration Tools & Artifacts

### Essential Artifacts

**Collaboration Charter**

- Initiative objective
- Success criteria
- Roles and responsibilities
- Timeline and milestones
- Decision authority matrix
- Communication protocol

**Workstream Plans**

- What each agent is delivering
- Timeline and milestones
- Dependencies and risks
- Resource needs
- Success criteria

**Dependency Map**

- What depends on what
- Critical path items
- Risk areas
- Mitigation plans

**Communication Protocol**

- Meeting schedule
- Escalation criteria
- Documentation location
- Decision-making process

---

## Conflict Resolution in Collaboration

### Types of Conflicts

#### Type 1: Different Perspectives

**Cause**: Legitimate disagreement on approach  
**Resolution**:

1. Surface issue early
2. Each side explains perspective
3. Identify underlying concerns
4. Explore creative solutions
5. Make decision and move forward
6. All commit to implementation

#### Type 2: Resource Conflict

**Cause**: Multiple initiatives need same resources  
**Resolution**:

1. Quantify resource need
2. Compare priority/impact
3. Escalate to Sparkling Curious
4. Sparkling Curious decides allocation
5. Both initiatives adjust accordingly

#### Type 3: Scope/Authority Conflict

**Cause**: Unclear who decides on topic  
**Resolution**:

1. Clarify who has authority
2. If unclear, escalate to Sparkling Curious
3. Sparkling Curious clarifies authority
4. Proceed with clear authority

#### Type 4: Personality Conflict

**Cause**: Interpersonal tension  
**Resolution**:

1. Separate personal from professional
2. Focus on shared objective
3. Use mediator if needed (The Mediator)
4. Professional communication standards
5. Escalate only if blocking work

### Conflict Prevention

- Regular communication prevents misunderstandings
- Clear RACI (Responsible, Accountable, Consulted, Informed) prevents authority conflicts
- Shared success metrics reduce zero-sum thinking
- Psychological safety enables honest discussion
- Diverse perspectives as strength, not threat

---

## Collaboration Success Metrics

### Measure Collaboration Effectiveness

- **Timeline**: On-schedule delivery
- **Quality**: Meeting success criteria
- **Efficiency**: Minimal rework/delays
- **Satisfaction**: Agent satisfaction with collaboration
- **Communication**: Clear, timely communication
- **Escalations**: Minimal conflicts escalated
- **Learning**: Skills/relationships developed
- **Team Health**: Relationships and trust

### Retrospective Questions

At end of collaboration:

- [ ] Did we achieve our objective?
- [ ] Did we deliver on time?
- [ ] Was communication effective?
- [ ] Were roles and responsibilities clear?
- [ ] Were conflicts resolved constructively?
- [ ] What went well?
- [ ] What could we improve?
- [ ] What will we do differently next time?

---

## Collaboration Culture

### Healthy Collaboration Culture

✅ **Characteristics**:

- Shared success focus
- Transparent communication
- Diverse perspectives valued
- Conflicts surfaced early
- Clear decision authority
- Respect for each domain
- Continuous improvement
- Psychological safety

### Anti-Patterns to Avoid

❌ **Silos**: Agents not coordinating
❌ **Heroics**: One person carrying load
❌ **Blame**: Focusing on who's at fault
❌ **Politics**: Behind-the-scenes maneuvering
❌ **Unclear Roles**: Nobody sure who's responsible
❌ **No Communication**: Surprised by decisions
❌ **Unresolved Conflicts**: Festering resentment
❌ **Blame Culture**: Fear of escalating issues

---

**Last Updated**: February 18, 2026  
**Version**: 1.0  
**Status**: Active Framework
