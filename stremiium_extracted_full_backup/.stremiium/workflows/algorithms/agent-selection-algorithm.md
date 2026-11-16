---
description: 'Multi-Council Agent Selection Algorithm (v3.0) - Stremiium algorithm'
document_type: 'algorithm'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
scope: 'Agent orchestration'
---

# Multi-Council Agent Selection Algorithm (v3.0)

**Purpose**: Select the optimal council(s) and agent(s) for any given task using systematic multi-council orchestration routing
**Audience**: Sparkling Curious (primary), Council Captains, task planners, delegation leads  
**Last Updated**: March 22, 2026
**Applies To**: All 16 councils - 100+ specialist agents organized in hierarchical structure
**Council Structure**: 3 tiers (10 Strategic + 3 Technical + 3 Customer/Product)

---

## Overview

With 16 councils and 100+ specialist agents, selecting the right council as primary owner and coordinating supporting councils is critical to success. This algorithm provides multi-council routing with explicit coordination procedures. This algorithm provides a systematic approach to matching tasks to agents based on expertise, availability, workload, and capability development opportunities.

---

## Core Algorithm

### Phase 1: Task Analysis

#### Step 1.1: Identify Primary Domain

**Input**: Task description  
**Process**:

- [ ] What is the core domain of this work?
- [ ] Is it primarily: Technical? Business? People? Legal? Creative? Finance?
- [ ] What expertise is most critical?
- [ ] What's the main deliverable?

**Primary Council Routing Guide**:

- **Technical/Architecture** → C06-Engineering-Infrastructure-Squad (primary) or C11-Dev-Engineering-Squad
- **Operations/Engineering** → C06-Engineering-Infrastructure-Squad (primary) or C02-Operations-Squad
- **Planning/Strategy** → C04-Strategy-Growth-Squad (primary), consulted by C01-Legal, C06-Engineering
- **People/Leadership** → C05-HR-Culture-Squad (primary), consulted by all councils
- **Admin/Knowledge** → C03-Admin-Knowledge-Squad (primary), involved in every project
- **Sales/Growth** → C07-Sales-Business-Development-Squad (primary), coordinated by C04-Strategy
- **Design/Creative** → C08-Design-Creative-Squad (primary), coordinated by C15-Product-Management
- **Legal/Compliance** → C01-Legal-Compliance-Squad (primary), veto authority on all decisions
- **Marketing/Brand** → C09-Marketing-Communications-Squad (primary), input from C04-Strategy, C07-Sales
- **Finance/Investment** → C10-Finance-Investor-Relations-Squad (primary), coordinated by C02-Operations

#### Step 1.2: Identify Secondary Domains

**Process**:

- [ ] Is there a secondary domain involved?
- [ ] What other expertise is needed?
- [ ] Should this be done by one agent or multiple?
- [ ] What coordination would be needed for multiple agents?

**Decision**: If secondary domain adds < 20% effort, keep with primary. If > 20%, involve secondary agent.

#### Step 1.3: Identify Skill Requirements

**Process**:

- [ ] What specific skill sets are needed?
- [ ] Is this a specialist skill (needs subagent)?
- [ ] Is this a core capability or learning opportunity?
- [ ] What's the urgency?

**Examples**:

- IP Protection Strategy → Veritas (The IP Guardian subagent)
- Conflict Between Teams → The Guardian (The Mediator subagent)
- Financial Forecasting → The Capitalist (The Forecaster subagent)

---

### Phase 2: Agent Evaluation

#### Step 2.1: Evaluate Primary Agent

**For the primary-domain agent, assess**:

| Factor               | Evaluation                                            | Weight | Score |
| -------------------- | ----------------------------------------------------- | ------ | ----- |
| **Expertise Match**  | How well does their expertise match this task? (1-10) | 30%    | \_\_  |
| **Availability**     | Are they available to take this on? (1-10)            | 25%    | \_\_  |
| **Current Workload** | What's their current capacity? (1-10, 10=available)   | 20%    | \_\_  |
| **Development Fit**  | Does this develop needed skills? (1-10)               | 15%    | \_\_  |
| **Urgency Fit**      | Can they meet the timeline? (1-10)                    | 10%    | \_\_  |
|                      | **TOTAL SCORE**                                       | 100%   | \_\_  |

**Scoring Guidance**:

- **8-10**: Ideal fit, should assign
- **6-7**: Good fit, consider alternatives
- **4-5**: Acceptable, may be better option
- **< 4**: Poor fit, look for alternative

#### Step 2.2: Consider Alternative Primary Agents

**If primary agent score < 8, evaluate alternatives**:

- [ ] Which other agents have related expertise?
- [ ] How do their scores compare?
- [ ] Would involving multiple agents be better?
- [ ] What's the coordination complexity?

#### Step 2.3: Evaluate for Multiple Agent Involvement

**If secondary domain seems significant**:

**Option 1**: Primary agent leads, secondary agent consulted

- Primary agent: Full responsibility
- Secondary agent: Input on key decisions
- Coordination: Low (ad-hoc as needed)

**Option 2**: Primary agent leads, secondary agent co-owns

- Primary agent: Lead, strategic decisions
- Secondary agent: Deep work in their domain
- Coordination: Medium (planned meetings)

**Option 3**: Parallel ownership

- Both agents own their piece
- Coordination: High (frequent meetings)
- Use center-spoke model (one leads overall)

---

### Phase 3: Capability Assessment

#### Step 3.1: Rate Agent for This Task

```
Current Capability Scale:
10 = World-class expert
9 = Expert with proven track record
8 = Advanced practitioner, could train others
7 = Strong practitioner, comfortable leading
6 = Solid practitioner, succeeds with support
5 = Competent, can execute with guidance
4 = Learning, needs mentoring
3 = Basic understanding, needs significant support
2 = Novice, significant ramp-up required
1 = No experience, learning opportunity
```

**Decision Logic**:

- **9-10**: Ideal assignment
- **7-8**: Good assignment, they'll be fast
- **5-6**: Acceptable, normal timeline
- **3-4**: Learning opportunity, add time/support
- **1-2**: Only if this is strategic capability building

---

### Phase 4: Workload Analysis

#### Step 4.1: Assess Current Workload

**For primary agent, evaluate**:

- [ ] What are their current commitments?
- [ ] What's their total capacity? (hours/week)
- [ ] How much capacity is available?
- [ ] What's their burn rate on current work?

#### Step 4.2: Project Task Effort

**Estimate this task**:

- [ ] Best case: X hours
- [ ] Expected case: Y hours
- [ ] Worst case: Z hours
- [ ] Use: (X + 4Y + Z) / 6 (PERT estimation)

#### Step 4.3: Capacity Check

**Can they fit it in?**

- [ ] Required capacity < Available capacity?
- [ ] When would they start?
- [ ] Could they absorb a 20% effort increase?
- [ ] What would they deprioritize?

**If doesn't fit**: Consider alternatives or delay

---

### Phase 5: Decision Making

#### Step 5.1: Make Selection Decision

**Using evaluation criteria above**:

**ASSIGN IF**:

- Primary agent score is 7+
- Agent has available capacity
- Priorities align
- Timeline works

**CONSIDER ALTERNATIVES IF**:

- Primary agent score is 5-6
- Primary agent is overloaded
- Timeline is tight and agent is slower
- This is learning opportunity

**INVOLVE MULTIPLE IF**:

- Task spans multiple domains equally
- Requires multiple specialized skills
- Benefit of cross-domain thinking significant

#### Step 5.2: Document Selection Decision

```
AGENT SELECTION RECORD

Task: [Task name]
Primary Agent: [Name]
Score: [8+/6-7/5-]

Selection Rationale:
- Domain fit: [Why this agent]
- Expertise: [What makes them right]
- Capacity: [Why they can take it]
- Fit: [Why now]

Secondary Agent (if applicable): [Name]
- Role: [Lead/Support/Co-own]
- Coordination: [Level needed]

Alternative Considered:
- [Agent name]: Why not selected

Timeline: [Can they meet timeline?]

Risks: [What could go wrong?]

Mitigations: [How to mitigate]
```

---

### Phase 6: Communication & Commitment

#### Step 6.1: Present to Agent

**In conversation or meeting**:

- [ ] Frame the opportunity
- [ ] Explain why they were selected
- [ ] Describe the task and expectations
- [ ] Discuss timeline
- [ ] Answer questions
- [ ] Get commitment

#### Step 6.2: Get Commitment

**Agent should confirm**:

- [ ] `"I understand what's being asked"`
- [ ] `"I have capacity for this"`
- [ ] `"I know the timeline"`
- [ ] `"I'm committed to success"`
- [ ] `"I know who to contact for questions"`

---

## Agent Selection Matrix

### Quick Reference by Domain

| Primary Domain          | Lead Agent     | Subagent Specialists                   | Typical Role           |
| ----------------------- | -------------- | -------------------------------------- | ---------------------- |
| **System Architecture** | The Architect  | Foundation-Setter, Blueprint-Creator   | Design & decisions     |
| **Operations**          | The Engineer   | Steward, Sentinel                      | Implement & monitor    |
| **Strategic Planning**  | The Strategist | Diplomat, Navigator, Optimizer, Scribe | Analyze & plan         |
| **People Issues**       | The Guardian   | Recruiter, Mediator                    | Hire, develop, resolve |
| **Documentation**       | The Librarian  | Archivist, Auditor                     | Create & organize      |
| **Sales/Growth**        | The Rainmaker  | Scout, Closer                          | Identify & close       |
| **Design/Creative**     | The Artisan    | Scribe (copywriting), Muse             | Visual/content         |
| **Legal/Compliance**    | Veritas        | IP Guardian, Regulator, Negotiator     | Risk/contracts         |
| **Marketing**           | The Amplifier  | Hype Man, Oracle                       | Campaigns & trends     |
| **Finance**             | The Capitalist | Forecaster, Bookkeeper                 | Budget & analyze       |

---

## Subagent Selection Criteria

**When should a subagent be selected over the main agent?**

| Situation                           | Use Subagent              | Use Main Agent             |
| ----------------------------------- | ------------------------- | -------------------------- |
| **Specific specialty needed**       | Yes - e.g., IP legal work |                            |
| **Strategic decision**              |                           | Yes - main agent expertise |
| **Tactical execution**              | Yes - subagent efficiency |                            |
| **Multiple specialists involved**   | Can use subagents         | Main agent coordinates     |
| **Teaching/mentoring**              |                           | Yes - main agent teaches   |
| **Time-sensitive specialist skill** | Yes - subagent speed      |                            |
| **Unique rare skill**               | Yes - subagent expertise  |                            |
| **General domain work**             |                           | Yes - more context         |

---

## Workload Balancing

### Agent Workload Targets

**Ideal State**:

- Each agent: 80-90% capacity utilization
- Mix of priority, complexity, and type
- Development opportunities built in
- Some buffer for emergencies

**Under-capacity Signals**:

- Agent < 70% utilized
- Opportunity for development
- Consider: New skills, mentoring, learning

**Over-capacity Signals**:

- Agent > 100% committed
- Escalate immediately
- Either reduce scope or delay
- Prevent burnout

### Load Balancing Approach

**Weekly review**:

- [ ] Which agents are under-capacity?
- [ ] Which agents are over-capacity?
- [ ] Can we shift work?
- [ ] Do we need to delay or reduce scope?

**Monthly planning**:

- [ ] Balanced workload across team?
- [ ] Development needs being met?
- [ ] Specialists being fully utilized?
- [ ] Any agent carrying too much?

---

## Decision Trees

### Decision Tree 1: Is this work in my domain?

```
Does this task fall squarely in my domain?
├─ YES: I should own this
├─ NO: Is there another agent with clear ownership?
│   ├─ YES: They should own it
│   └─ NO: Should we involve multiple agents?
│       ├─ If complex: Multi-agent with lead
│       └─ If simple: Assign to most relevant
```

### Decision Tree 2: Should I take on this task?

```
Am I the best fit for this task?
├─ YES (9-10 confidence): Take it
├─ PROBABLY (7-8 confidence):
│   └─ Do I have capacity?
│       ├─ YES: Take it
│       └─ NO: Escalate or delay
├─ MAYBE (5-6 confidence):
│   └─ Is this a learning opportunity I want?
│       ├─ YES: Take with support
│       └─ NO: See if better fit exists
└─ NO (< 5 confidence): Recommend better fit
```

---

## Selection Checklist

**Before assigning a task, confirm**:

- [ ] Primary domain identified
- [ ] Primary agent evaluated (score recorded)
- [ ] Alternatives considered
- [ ] Agent has capacity
- [ ] Agent can meet timeline
- [ ] Agent is committed
- [ ] Secondary agents (if needed) identified
- [ ] Coordination approach defined
- [ ] Go/no-go decision documented
- [ ] Assignment communicated

---

**Last Updated**: February 18, 2026  
**Version**: 1.0  
**Status**: Active Algorithm
