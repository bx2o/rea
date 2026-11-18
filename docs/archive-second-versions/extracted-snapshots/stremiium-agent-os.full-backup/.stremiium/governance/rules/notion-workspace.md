---
applyTo: '**'
---

# Notion Workspace Rules & Council Integration (v3.0)

**Governance for Notion databases integrated with 16-council orchestration model**  
**Version**: 3.0 Multi-Council Architecture  
**Last Updated**: March 22, 2026  
**Scope**: All 16 councils using Notion for knowledge management, task tracking, and collaboration  
**Maintained By**: C03-Admin-Knowledge-Squad (Chief-Librarian)  
**Authority**: Sparkling Curious (final decisions), Council Captains (per-council enforcement)

---

## Section 1: Notion Workspace Organization

### 1.1 Workspace Structure (16-Council Model)

**Top Level: Organizational Hub**

```
Sparkling Curious Workspace (Master)
├── 01-STRATEGIC-LAYER (Spartling Curious owned)
│   ├── Task Master (task-list.md - real-time sync)
│   ├── Implementation Roadmap (implementation-plan.md - real-time sync)
│   ├── Organizational Context (context.md - real-time sync)
│   └── Critical Issues Dashboard (debug-artifacts.md - real-time sync)
├── 02-TIER1-STRATEGIC-COUNCILS (C01-C10)
│   ├── C01-Legal-Compliance Hub
│   ├── C02-Operations Hub
│   ├── C03-Admin-Knowledge Hub (Master Knowledge Graph)
│   ├── C04-Strategy-Growth Hub
│   ├── C05-HR-Culture Hub
│   ├── C06-Engineering-Infrastructure Hub
│   ├── C07-Sales-Business-Development Hub
│   ├── C08-Design-Creative Hub
│   ├── C09-Marketing-Communications Hub
│   └── C10-Finance-Investor-Relations Hub
├── 03-TIER2-TECHNICAL-COUNCILS (C11-C13)
│   ├── C11-Dev-Engineering Hub
│   ├── C12-Cybersecurity-Intel Hub
│   └── C13-Web3-Finance Hub
└── 04-TIER3-CUSTOMER-COUNCILS (C14-C16)
    ├── C14-Customer-Success Hub
    ├── C15-Product-Management Hub
    └── C16-Banking-Fintech Hub
```

### 1.2 Council Hub Database Templates

**Each Council Hub must contain** (16 identical database collections with council-specific data):

1. **Council Dashboard** (Overview page)
   - Council Name, Captain Name, Agent Count
   - Current Priorities (links to Task Master)
   - Council Health Score (from learning-artifacts.md)
   - Recent Decisions (last 5 from context.md)
   - Known Issues (from debug-artifacts.md)
   - Upcoming Key Dates

2. **Council Members Database**
   - Agent Name, Role, Specialty, Contact
   - Skill Tags, Availability Status
   - Active Tasks (relation to Task Master)
   - Performance Metrics, Development Goals

3. **Council Tasks Database**
   - Task Title, Description, Priority (P0-P4)
   - Owner (Agent name), Status (Not Started/In Progress/Blocked/Complete)
   - Dependencies (relation to other council tasks)
   - SLA (when due), Actual Completion Date
   - Related Output (link to artifact)
   - Cross-Council Dependencies (which other councils are blocked/enabling)

4. **Council Decisions Database**
   - Decision Title, Context, Options Considered
   - Final Decision, Rationale, Decision Date
   - Decided By (Council Captain)
   - Affected Councils (cross-council dependencies)
   - Implementation Status
   - Learnings/Retrospective

5. **Council Knowledge Bank** (per-council knowledge repository)
   - Topic, Category, Description
   - Agent Author, Date Created
   - Related Links (to other knowledge, patterns, skills)
   - Usage Count (how often referenced)
   - Validation Status (peer-reviewed or not)
   - Tags (for search)

---

## Section 2: Cross-Council Data Relationships

### 2.1 Master Relationships (How councils link together)

**Task Master Database** (Sparkling Curious owned, synchronized with task-list.md):

- Database: Task ID, Task Title, Description, Priority (P0-P4), Objective
- **Primary Council Owner**: Relation to Council Hub (C01-C16)
- **Supporting Councils**: Multi-select Relation (0+ councils supporting)
- **Cross-Council Dependencies**: Relation to other Task entries
- **Status**: Not Started / In Progress / Blocked / Complete / Blocked By X
- **SLA**: Due Date, Actual Completion Date
- **Owner Agent**: Relation to Council Members Database
- **Artifact Link**: Link to actual artifact (GitHub file, Markdown document)
- **Escalation Status**: None / Level 1 / Level 2 / Critical
- **Notes**: Free text field for context

**Implementation Roadmap Database** (synchronized with implementation-plan.md):

- Database: Roadmap Item, Phase, Timeline
- **Primary Council**: Relation to Council Hub (C01-C16)
- **Contributing Councils**: Multi-select Relation to Council Hubs
- **Dependent On**: Relation to other Roadmap items
- **Success Criteria**: Free text (linked to specific measurable outcomes)
- **Status**: Design / In Development / Testing / Complete
- **Owner**: Relation to Council Members
- **Risk Assessment**: Low/Medium/High/Critical with description
- **Learnings**: Added after completion (lessons learned)

**Critical Issues Database** (synchronized with debug-artifacts.md):

- Database: Issue ID (e.g., SC-CRITICAL-001), Title, Description
- **Severity**: Critical / High / Medium / Low
- **Affected Councils**: Multi-select Relation (which councils impacted)
- **Root Cause**: Free text (when known)
- **Workaround**: Free text (temporary fix deployed)
- **Permanent Fix**: Status + Description + ETA
- **Escalation Level**: Within Council / Council Captain / Sparkling Curious
- **Resolved Date**: Empty until complete
- **Post-Mortem**: Lessons learned (added after resolution)
- **Recurrence Prevention**: Actions to prevent in future

**Council Collaboration Network** (non-synced, manually maintained):

- **From Council**: Relation to Council Hubs (C01-C16)
- **To Council**: Relation to Council Hubs (target council)
- **Type of Collaboration**: Depends On / Enables / Supports / Advises / Conflicts With
- **Current Projects**: Free text (what they're collaborating on now)
- **Status**: Active / Waiting / Complete
- **Communication Channel**: Where they coordinate
- **SLA**: Typical response time between councils

---

## Section 3: Per-Council Database Governance

### 3.1 Council Database Permissions

**Access Control** (enforced per Council Hub):

- **Council Captain**: Admin access (read/write/modify structure)
- **Council Agents**: Member access (read/write within their council)
- **Other Council Captains**: Read-only (can see other councils for coordination)
- **Sparkling Curious**: Admin access (all councils, orchestration authority)
- **C03-Admin-Knowledge Captain** (Chief-Librarian): Audit access (compliance checking)

### 3.2 Database Maintenance Requirements

**Daily** (by Council Captain or assigned agent):

- [ ] Review Council Tasks database for blocked items
- [ ] Update status of in-progress tasks
- [ ] Flag any issues needing escalation
- [ ] Update Council Dashboard with current health score

**Weekly** (by Council Captain):

- [ ] Review Council Decisions database (any pending decisions needed?)
- [ ] Audit Council Knowledge Bank (verify content accuracy, remove outdated info)
- [ ] Check cross-council dependencies (any misalignments with other councils?)
- [ ] Prepare status update for Sparkling Curious

**Monthly** (by Chief-Librarian + Council Captain):

- [ ] Full audit of all council data for consistency
- [ ] Verify classifications and tags are still accurate
- [ ] Archive completed items (move to archive database)
- [ ] Update learnings (add retrospectives for completed work)
- [ ] Validate cross-council relationship accuracy

---

## Section 4: Master Knowledge Graph (C03 Admin-Knowledge owned)

### 4.1 Shared Knowledge Bank Structure

**Master Knowledge Database** (owned by C03, visible to all 16 councils):

Topics organized by category:

- **Multi-Council Patterns** (items relevant to 2+ councils)
- **Integration Patterns** (how to connect councils)
- **Decision Frameworks** (how to make choices)
- **SLA Guidelines** (standard timelines for council interactions)
- **Escalation Procedures** (when and how to escalate)
- **Quality Standards** (universal standards applying to all councils)
- **Best Practices** (lessons learned across councils)
- **FAQ by Council** (council-specific FAQs, relation to each Council Hub)

**Each Knowledge Entry**:

- **Title & Description**: Clear, searchable
- **Primary Council Relevance**: Relation (which council created this?)
- **Related Councils**: Multi-select Relation (other councils who need this)
- **Category Tags**: Multi-select (for searching)
- **Author**: Relation to Council Members Database
- **Created Date & Last Updated**: Timestamps
- **Review Status**: Unreviewed / Reviewed / Approved / Deprecated
- **Cross References**: Links to related knowledge entries
- **Artifact Link**: Link to actual GitHub document if applicable
- **Usage Count**: Auto-tracked (how often referenced?)

### 4.2 Knowledge Search & Discovery

**Search capability** (built into Notion, enhanced by tagging):

- **Text search**: Notion's native search across all knowledge (fast)
- **Tag-based search**: Filtered by council, category, topic
- **Relation-based search**: "Show me 70+ patterns used by C11"
- **Date-based search**: "Recent additions this month"
- **Status-based search**: "Show me deprecated knowledge" (archive candidates)

**Requirements**:

- All entries must be tagged by council relevance
- Frequently used entries get a "Featured Knowledge" flag
- Deprecated entries must be clearly marked
- All entries must link to source artifact or original decision

---

## Section 5: Real-Time Artifact Synchronization

### 5.1 Mark down Files Sync to Notion

**Automatic sync procedure** (one-way: Markdown → Notion):

**Files that sync** (read-only in Notion, truth in GitHub):

1. task-list.md → Task Master Database (maintain relation structure in Notion)
2. implementation-plan.md → Implementation Roadmap Database
3. context.md → Organizational Context page (display decisions + team structure)
4. debug-artifacts.md → Critical Issues Database
5. query-logs.md → Query Analytics page (read-only summary)
6. learning-artifacts.md → Learning Dashboard page (with council scorecards)

**Sync mechanism** (described in notion-api.md skill):

- Manual sync (recommended): Copy-paste updates from GitHub (maintains control)
- Or automated sync (via MCP): Set up Notion API integration to auto-pull
- Sync frequency: After each major update (typically daily or on-demand)

**Data presentation in Notion**:

- Raw markdown shown as formatted content
- Tables parsed into Notion databases (with proper relations)
- Decisions extracted and shown in Council Decisions database
- Issues extracted and shown in Critical Issues database
- Links preserved (GitHub → Notion links still work)

---

## Section 6: Cross-Council Collaboration Rules

### 6.1 Collaboration Database Usage

**When Council A needs to interact with Council B**:

1. **Create collaboration record** in Council Collaboration Network:
   - From: Council A
   - To: Council B
   - Type: Depends On / Enables / Supports / Advises / Conflicts With
   - Current Projects: Description of what they're collaborating on
   - Status: Active
   - Communication Channel: Where they'll coordinate (Notion page? Markdown artifact?)
   - Expected SLA: "4-hour response" or "by EOD tomorrow"

2. **Link related tasks**:
   - In Task Master: Include both councils in "Primary Council Owner" and "Supporting Councils"
   - In Council-specific Tasks: Add relation to task in partner council
   - Document the dependency explicitly

3. **Track communication**:
   - Use task comments in Notion (threaded discussion)
   - Or create dedicated "Collaboration Notes" page
   - Reference the collaboration record
   - Close collaboration when complete

### 6.2 Conflict & Issue Escalation in Notion

**When councils disagree** (documented in Notion):

1. **Create Issue entry** in Critical Issues Database:
   - Title: "Council Conflict: [C-Council A vs C-Council B]"
   - Severity: Medium (usually)
   - Affected Councils: Both councils
   - Description: What's the conflict?
   - Current Status: "Awaiting arbitration"

2. **Link to collaboration record**:
   - Reference the existing Council A ↔ Council B collaboration
   - Explain why they can't align on their own

3. **Escalation**:
   - If Council Captains can't resolve: Create "Escalation Note" in Notion
   - Tag "@Sparkling-Curious" (Sparkling Curious to review)
   - Wait for arbitration decision (update issue status when S.C. decides)

---

## Section 7: Quality & Compliance

### 7.1 Notion Workspace Compliance

**GDPR/CCPA Compliance**:

- [ ] No personally identifiable information (PII) in public databases
- [ ] PII separated into private databases with restricted access
- [ ] Data retention policy: Delete old entries after 12 months
- [ ] Access logs maintained (who accessed what, when?)

**Data Security**:

- [ ] Only authorized council members can see council data
- [ ] Sparkling Curious has audit access to all data
- [ ] C03-Admin-Knowledge has audit access for compliance
- [ ] No passwords or API keys stored in Notion (use environment variables)

**Accuracy & Maintenance**:

- [ ] All decisions documented with date and rationale
- [ ] All tasks tracked in Task Master (single source of truth)
- [ ] All issues logged in Critical Issues (transparent issue tracking)
- [ ] All knowledge validated by at least one peer before marking "Approved"

### 7.2 Audit Trail

**Track changes** via Notion's built-in features:

- Notion shows "Last Edited" by [User] on every page/database
- Full "Version History" available (can see all changes)
- Comments/discussions preserved (know what was decided and why)
- Requires: All database entries must have "Owner" field (who's responsible?)

**Periodic audits** (by Chief-Librarian):

- Monthly: Random review of 10% of databases for accuracy
- Quarterly: Full audit of critical databases (Task Master, Issues, Decisions)
- Annual: Compliance audit (GDPR/CCPA/security)

---

## Section 8: Best Practices for Council Use

### 8.1 Council Database Template (What success looks like)

**For a well-maintained Council Hub**:

✅ **Good**:

- Council Dashboard is updated daily (shows current status at a glance)
- Tasks are current (completed tasks archived, new work added weekly)
- Decisions clearly documented with context and rationale
- Knowledge bank organized by topic with active usage
- Cross-council dependencies clearly shown (no surprises)
- Issues logged quickly (not retrospectively)
- Collaboration records maintained (transparent hand-offs)

❌ **Bad**:

- Dashboard hasn't been updated in weeks (stale information)
- Tasks pile up (hundreds of "In Progress" items)
- Decisions vague or missing context (why was this decided?)
- Knowledge scattered and not tagged
- Cross-council dependencies hidden or unclear
- Issues buried in comments (not in issues database)
- Collaboration records created after the fact (reconstructed history)

### 8.2 Common Notion Mistakes to Avoid

| Mistake                                   | Impact                                          | Fix                                       |
| ----------------------------------------- | ----------------------------------------------- | ----------------------------------------- |
| Not updating Task status                  | Can't see what's actually happening             | Update status daily (EOD habit)           |
| Decisions in comments instead of database | Institutional knowledge lost                    | Always create Decision entry              |
| Duplicating content across councils       | Confusion, inconsistency                        | Maintain single source of truth           |
| PII in shared databases                   | Privacy/compliance violation                    | Move PII to private databases             |
| Not linking cross-council dependencies    | Councils don't know they're blocking each other | Always update "Supporting Councils" field |
| Archived work not documented              | Lose lessons learned                            | Add "Learnings" before archiving          |
| Too many pages, no structure              | Can't find information                          | Organize by council, then by type         |

---

## Section 9: Integration with Markdown Artifacts

### 9.1 Notion ↔ GitHub Workflow

**For rapid iteration** (how Notion and Markdown work together):

**Workflow 1: Planning (Create in Markdown)**

1. Edit `.github/artifacts/plan-mode/task-list.md` in GitHub
2. Create detailed structured list of tasks (priority + dependencies)
3. Sync to Notion: Copy task list into Task Master Database
4. Database displays in Notion dashboard (easy to scan status)
5. All work happens in Notion (update status, add comments)
6. Periodic sync back to GitHub (maintain authoritative source)

**Workflow 2: Knowledge Capture (Create in Notion)**

1. Agent discovers new knowledge (pattern, lesson, best practice)
2. Add to Council Knowledge Bank in Notion
3. Database captures metadata (author, date, tags, review status)
4. When approved: Move to `.github/artifacts/ask-mode/knowledge-base.md` (GitHub)
5. All 16 councils can reference from GitHub
6. Notion serves as temporary workspace; GitHub is permanent archive

**Workflow 3: Issue Tracking (Dual Entry)**

1. Problem discovered: Create Issue entry in Critical Issues Database (Notion)
2. Also logged in `.github/artifacts/code-mode/debug-artifacts.md` (GitHub)
3. Notion facilitates discussion and resolution (comments, collaboration)
4. GitHub maintains permanent record (dated, with context)
5. Post-mortem: Add learnings to context.md AND Notion

---

## Section 10: Quarterly Notion Workspace Review

### 10.1 Review Checklist (Every quarter):

- [ ] Task Master Database: Are completed tasks archived? New tasks added? Status accurate?
- [ ] Each Council Hub: Is dashboard updated? Are tasks current? Decisions documented?
- [ ] Critical Issues Database: All issues logged? Resolved issues archived? Post-mortems added?
- [ ] Council Collaboration Network: Is it current? Any stale collaborations?
- [ ] Master Knowledge Bank: Is it organized? Are entries tagged? Status accurate?
- [ ] Cross-references: Do all links still work? Archived properly?
- [ ] Performance: Is Notion running smoothly? Any databases getting too large?
- [ ] Compliance: GDPR/CCPA/Security still compliant? PII properly separated?
- [ ] Team comfort: Do all council members know how to use Notion effectively? Training needed?

### 10.2 Notion Performance Optimization

**When Notion slows down** (usually because databases get large):

1. **Archive old data**: Move completed work > 90 days old to archive database
2. **Reduce relations**: Remove unnecessary cross-references (cleanup step)
3. **Trim views**: Delete old views that aren't used
4. **Compact databases**: In large databases (>1000 entries), ensure indexing is optimized
5. **Ask Notion support**: If still slow, reach out to Notion team (they're responsive)

---

## Final Notes

**Notion workspace is NOT** the source of truth for code artifacts. GitHub is.

- GitHub: Authoritative (versioned, audited, deployed from)
- Notion: Workspace (collaborative, real-time, easy to discuss)

**Keep them synchronized**, but when in doubt, trust GitHub as the source of truth.

**Questions about Notion API or integration?** Reference `.github/skills/notion-api/SKILL.md` for detailed integration instructions.

**Last Updated**: March 22, 2026  
**Next Review**: June 22, 2026  
**Maintained By**: C03-Admin-Knowledge-Squad + Sparkling Curious
