---
description: 'Customer Support Escalation Playbook - Stremiium operational playbook'
document_type: 'playbook'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
scope: '16-council ecosystem'
---

# Customer Support Escalation Playbook

**Purpose**: Handle escalated customer issues systematically  
**Trigger**: Customer issue not resolved, needs investigation, VIP customer  
**Owner**: Support Lead + Engineering  
**Last Updated**: February 18, 2026

---

## Escalation Levels

### Level 1: Support Team

- Common issues
- Knowledge base answers
- Password resets
- Basic configuration

### Level 2: Specialist Support

- Product-specific issues
- Integration problems
- Data recovery
- Account investigations

### Level 3: Engineering Team

- Bugs in product
- Performance issues
- Data corruption
- Security concerns

### Level 4: Executive

- Lost deals/revenue
- Major customer issues
- Industry-wide problems
- Contract disputes

---

## Escalation Process

### Step 1: Initial Intake

```
Issue Description: [What's the problem?]
Customer: [Name, tier (Startup/Growth/Enterprise)]
Severity: [Critical/High/Medium/Low]
Impact: [How many users? Business impact?]
Since: [When started?]
```

### Step 2: Triage (30 min SLA)

- Review customer history
- Check if known issue
- Assess severity accuracy
- Decide escalation path

### Step 3: Investigation (varies by level)

- **L2**: Check customer setup, logs
- **L3**: Reproduce issue, check code
- **L4**: Assess business risk, executive briefing

### Step 4: Resolution Path

- **Bug**: Fix timeline, workaround, compensation
- **Configuration**: Guidance, documentation
- **Data issue**: Recovery plan, verification
- **Feature request**: Roadmap consideration

### Step 5: Communication

```
Every 2 hours for Critical
Every 4 hours for High
Daily for Medium
Weekly for Low

Include: Status, ETA, next steps, contact info
```

### Step 6: Resolution & Followup

- Verify customer can access fix
- Ask for feedback
- Document solution
- Update knowledge base

---

## SLA Response Times

| Severity | Response | Resolution |
| -------- | -------- | ---------- |
| Critical | 15 min   | 2 hours    |
| High     | 1 hour   | 24 hours   |
| Medium   | 4 hours  | 1 week     |
| Low      | 1 day    | 30 days    |

---

## Compensation Policy

- Critical outage (>1 hour): 1 day free service
- High issue (unresolved >1 week): 3 days credit
- Data loss: Full month credit + analysis
- At-fault bug: Per support team decision

---

## Escalation Contacts

| Role                | Name | Extension | On-Call     |
| ------------------- | ---- | --------- | ----------- |
| Support Lead        |      |           | Yes         |
| Engineering Manager |      |           | Yes         |
| VP Product          |      |           | No          |
| CEO                 |      |           | Urgent only |

---
