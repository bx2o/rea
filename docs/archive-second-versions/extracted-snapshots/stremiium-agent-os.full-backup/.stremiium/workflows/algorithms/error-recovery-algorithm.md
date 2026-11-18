---
description: 'Multi-Council Error Recovery Algorithm (v3.0) - Stremiium algorithm'
document_type: 'algorithm'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
scope: 'Agent orchestration'
---

# Multi-Council Error Recovery Algorithm (v3.0)

**Purpose**: Systematically detect, diagnose, and recover from errors within and across council boundaries using multi-tier escalation
**Audience**: All agents, all 16 councils, especially debugging roles (C11-Dev, C12-Security, C06-Engineering)
**Last Updated**: March 22, 2026
**Escalation Authority**: Council Captains (Level 1) → Sparkling Curious (Level 2+)
**SLA Model**: Critical=15min, High=4hr, Medium=24hr, Low=72hr per Issue SC-CRITICAL-001 procedures

---

## Overview

Errors and failures are inevitable in complex systems. This algorithm provides a disciplined approach to identifying errors early, diagnosing root causes accurately, designing effective recovery strategies, and preventing recurrence.

---

## Core Algorithm

### Phase 1: Error Detection

#### Step 1.1: Recognize Error Signals

**Watch for these indicators**:

| Signal                   | What It Means                      | Severity    |
| ------------------------ | ---------------------------------- | ----------- |
| **Unexpected result**    | Output doesn't match expected      | Medium      |
| **Task blocked**         | Can't proceed as planned           | High        |
| **Resource unavailable** | Tool/person/info not available     | Medium-High |
| **Timeline slip**        | Running behind schedule            | Medium      |
| **Quality issue**        | Work doesn't meet standards        | Medium-High |
| **Exception/error msg**  | System reports error               | High        |
| **Stakeholder concern**  | Customer/exec raises issue         | Medium-High |
| **Assumption invalid**   | Something we counted on isn't true | Medium      |
| **Dependency broken**    | Something we depend on failed      | High        |
| **Milestone missed**     | Planned checkpoint not reached     | High        |

#### Step 1.2: Confirm Error

**Don't assume error without confirmation**:

1. **Reproduce**: Can you reproduce the error?
   - Try again under same conditions
   - Does error recur consistently?
   - Or is it intermittent?

2. **Rule out misunderstanding**: Is it actually an error?
   - Re-read requirements
   - Check assumptions
   - Verify success criteria
   - Is this expected behavior?

3. **Severity Assessment**:
   - [ ] Blocking (can't proceed): **Critical**
   - [ ] Partial issue (workaround exists): **High**
   - [ ] Future problem (not urgent): **Medium**
   - [ ] Minor (cosmetic): **Low**

#### Step 1.3: Escalate Severity as Needed

**Route based on severity**:

- **Critical**: Immediate escalation to Sparkling Curious
- **High**: Escalate to domain agent, 4-hour response
- **Medium**: Plan resolution within 1-2 days
- **Low**: Backlog for next opportunity

---

### Phase 2: Error Diagnosis

#### Step 2.1: Gather Information

**Collect everything about the error**:

```
ERROR DIAGNOSIS WORKSHEET

Error Description: [What's wrong?]
When discovered: [When/who found it?]
Severity: [Critical/High/Medium/Low]
Impact: [What can't happen because of this?]
Reproducibility: [Always/Often/Rare/Unknown]

What were you doing when it happened?
[Description of work leading up to error]

What did you expect?
[Expected result]

What actually happened?
[Actual result]

How far off is that?
[Quantify the difference]

Have you seen this before?
[Similar errors? Pattern?]

What changed recently?
[Code, data, process, requirements, etc.]

What systems/data/people are affected?
[Scope of impact]
```

#### Step 2.2: Reproduce the Error

**Create repeatable test case**:

1. **Isolate conditions**: What must be true for error to occur?
   - Specific input values?
   - Specific system state?
   - Specific timing?
   - Specific environment?

2. **Create minimal test case**: Simplest way to trigger error
   - Remove non-essential elements
   - Focus on core issue
   - Make easy to repeat

3. **Verify reproduction**:
   - [ ] Can reproduce 100% of time?
   - [ ] Or intermittent?
   - [ ] Under what conditions?

#### Step 2.3: Hypothesize Root Cause

**Generate theories about what caused error**:

For each theory:

- [ ] What's the suspected root cause?
- [ ] Does it explain all observed symptoms?
- [ ] Does it explain timing of error?
- [ ] How likely is this? (High/Medium/Low)

```
Root Cause Hypotheses

Hypothesis 1: Missing data in field X
- Explains what we see? Yes
- Likely? Medium
- How to test? Query database

Hypothesis 2: Code change breaking behavior
- Explains what we see? Partially
- Likely? High
- How to test? Compare versions

Hypothesis 3: External system failure
- Explains what we see? Yes
- Likely? Low
- How to test? Check system status
```

#### Step 2.4: Test Hypotheses

**Systematically test theories**:

1. **Test highest-probability hypothesis first**
2. **Design test to distinguish from other hypotheses**
3. **Execute test and record results**
4. **Revise theories based on results**
5. **Repeat until root cause identified**

#### Step 2.5: Confirm Root Cause

**Once identified, verify**:

- [ ] Does fixing this resolve the error?
- [ ] Are there any other contributing factors?
- [ ] Could this happen again?
- [ ] What's the actual root cause?

---

### Phase 3: Recovery Design

#### Step 3.1: Determine Recovery Strategy

**Choose approach based on situation**:

| Strategy           | When to Use             | Pros                     | Cons                          |
| ------------------ | ----------------------- | ------------------------ | ----------------------------- |
| **Fix & Replace**  | Known bug in code       | Permanent solution       | Requires code change          |
| **Workaround**     | Can't fix immediately   | Fast, unblocks work      | Temporary, may need later fix |
| **Rollback**       | Recent change broke it  | Quick, proven state      | May lose recent progress      |
| **Component Swap** | Component failed        | Isolates failure         | May not fully solve           |
| **Escalate/Defer** | Beyond current scope    | Focuses on critical path | Doesn't resolve immediately   |
| **Accept**         | Minor issue, low impact | Moves work forward       | May recur later               |

#### Step 3.2: Design the Fix

**For chosen strategy, design approach**:

```
RECOVERY PLAN

Root Cause: [Identified cause]
Strategy: [Fix/Workaround/Rollback/Other]

Fix Details:
├─ What needs to change?
├─ How will you make change?
├─ What could go wrong?
├─ How will you test?
└─ How will you verify success?

Timeline:
├─ Time to implement: [Minutes/hours]
├─ Time to test: [Minutes/hours]
├─ Time to deploy: [Minutes/hours]
└─ Total time: [Total estimate]

Risks:
└─ Risk 1: [Description]
   ├─ Likelihood: [High/Med/Low]
   ├─ Impact: [If happens, what?]
   └─ Mitigation: [How to prevent?]

Verification:
└─ Success criteria:
   ├─ Error no longer occurs
   ├─ Performance acceptable
   ├─ No side effects introduced
   └─ [Other criteria]
```

#### Step 3.3: Plan Implementation

**Don't just jump in**:

1. **Get approval** if recovery impacts others
2. **Notify stakeholders** what you're doing
3. **Plan communication** about outage/changes
4. **Have rollback plan** in case fix causes issues
5. **Schedule** outside peak usage hours if possible

---

### Phase 4: Recovery Execution

#### Step 4.1: Implement Fix

**Execute recovery plan**:

1. **Pre-implementation checklist**:
   - [ ] Plan reviewed
   - [ ] Approvals obtained
   - [ ] Stakeholders notified
   - [ ] Rollback plan ready
   - [ ] Test environment ready

2. **Implement change**:
   - [ ] Make change exactly as planned
   - [ ] Document what was changed
   - [ ] Note timestamp/version

3. **Immediate testing**:
   - [ ] Reproduce error to confirm it's gone
   - [ ] Check for unintended side effects
   - [ ] Verify performance acceptable

#### Step 4.2: Monitor After Fix

**Watch for issues in first hours/days**:

- [ ] Error recurrence
- [ ] New errors introduced
- [ ] Performance degradation
- [ ] Unexpected side effects

**If new problems emerge**:

- Evaluate: Is this related to the fix?
- If yes: Implement rollback
- If no: Treat as separate error

#### Step 4.3: Document Resolution

```
ERROR RESOLUTION RECORD

Error ID: [Unique identifier]
Severity: [Critical/High/Med/Low]
Created: [Date/time]
Resolved: [Date/time]
Duration: [Hours/days]

Root Cause: [What caused it]

Recovery Strategy: [What was done]

Details of Fix:
[Technical details of fix]

Testing:
[How verified fixed]

Verification:
[Evidence it's fixed]

Lessons Learned:
[What we learned]

Prevention:
[How to prevent recurrence]

Signed By: ________________  Date: ________
```

---

### Phase 5: Prevention & Learning

#### Step 5.1: Prevent Recurrence

**Design prevention measures**:

| Prevention Type          | Examples                                                   |
| ------------------------ | ---------------------------------------------------------- |
| **Code/Process changes** | Refactor, add validation, improve documentation            |
| **Monitoring**           | Add alerts, log important events, add metrics              |
| **Testing**              | Add unit tests, add integration tests, add edge case tests |
| **Review process**       | Add review step, require additional approval, peer review  |
| **Training**             | Document issue, train team, create playbook                |

#### Step 5.2: Implement Prevention

**Follow through on prevention**:

- [ ] What prevention will you implement?
- [ ] When will you do it?
- [ ] Who's responsible?
- [ ] How will you verify it's in place?

#### Step 5.3: Share Learning

**Teach others**:

- [ ] Document root cause for others
- [ ] Add to FAQ/troubleshooting guide
- [ ] Share in team meeting/chat
- [ ] Update documentation
- [ ] Update runbooks/playbooks

#### Step 5.4: Track Patterns

**Look for recurring errors**:

```
ERROR PATTERN TRACKING

Error Pattern | Frequency | Severity | Prevention Status
---|---|---|---
Missing data validation | 3x/month | High | Implemented validation layer
Timeout on API calls | 2x/week | Medium | Added retry logic + monitoring
Configuration mismatch | 1x/week | Medium | Automated config validation
...
```

**Monthly review**:

- [ ] Which errors recur most?
- [ ] Are prevention measures working?
- [ ] Should we invest in larger fix?
- [ ] Are there systemic issues?

---

## Error Categories & Responses

### Category 1: Code/Logic Errors

**Root causes**: Bug in code, logic error, missed edge case

**Recovery strategies**:

- Fix code (implement correct logic)
- Add validation to prevent recurrence
- Add tests to catch similar issues

**Prevention**:

- Code review process
- Unit tests for edge cases
- Integration tests

---

### Category 2: Data Errors

**Root causes**: Bad data, missing data, format mismatch

**Recovery strategies**:

- Fix data values
- Restore from backup
- Re-import/recalculate

**Prevention**:

- Data validation on input
- Data quality checks
- Automated data cleanup

---

### Category 3: Integration Errors

**Root causes**: APIs incompatible, integration broken, version mismatch

**Recovery strategies**:

- Update integration
- Add compatibility layer
- Escalate to vendor

**Prevention**:

- Integration tests
- Version pinning
- Change management

---

### Category 4: Infrastructure Errors

**Root causes**: System down, resource exhausted, network issue

**Recovery strategies**:

- Restart service
- Scale resources
- Switch to backup systems

**Prevention**:

- Monitoring and alerting
- Capacity planning
- Redundant systems

---

### Category 5: Process Errors

**Root causes**: Procedure not followed, miscommunication, missing step

**Recovery strategies**:

- Correct process
- Communicate change
- Re-execute correctly

**Prevention**:

- Document procedures
- Train team
- Automate manual steps

---

## Error Recovery Checklist

**When error occurs**:

- [ ] Confirm error (reproduction, not misunderstanding)
- [ ] Assess severity
- [ ] Escalate if critical
- [ ] Gather diagnostic information
- [ ] Create reproducible test case
- [ ] Generate root cause hypotheses
- [ ] Test hypotheses systematically
- [ ] Confirm root cause
- [ ] Design recovery strategy
- [ ] Plan implementation (get approvals, notify stakeholders)
- [ ] Implement fix
- [ ] Test thoroughly
- [ ] Monitor for recurrence
- [ ] Document resolution
- [ ] Design prevention measures
- [ ] Implement prevention
- [ ] Share learning with team
- [ ] Track patterns

---

## Error Response Time Targets

| Severity     | Detection | Diagnosis | Recovery | Total      |
| ------------ | --------- | --------- | -------- | ---------- |
| **Critical** | 15 min    | 30 min    | 1 hour   | < 2 hours  |
| **High**     | 1 hour    | 2 hours   | 4 hours  | < 8 hours  |
| **Medium**   | 4 hours   | 8 hours   | 24 hours | < 48 hours |
| **Low**      | 1 day     | 2 days    | 1 week   | < 2 weeks  |

---

**Last Updated**: February 18, 2026  
**Version**: 1.0  
**Status**: Active Algorithm
