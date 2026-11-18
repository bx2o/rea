---
document_type: 'program'
product: 'Stremiium Ecosystem'
title: 'Council Captain Assignment & Onboarding Program'
parent: 'Stremiium (Pty) Ltd'
owner: 'HR-Culture-Squad (C05)'
co_owners:
  - 'Operations-Squad (C02)'
  - 'Admin-Knowledge-Squad (C03)'
contributors:
  - 'Agents Council Captain (META-COUNCIL-001)'
  - 'Sparkling Curious (Master Orchestrator)'
version: '1.0'
status: 'Draft for Council Adoption'
last_updated: '2026-06-22'
task_ref: 'P2T01'
scope: '16-council organizational model (C01–C16) + meta-governance tier'
---

# Council Captain Assignment & Onboarding Program

> [!Important] This program defines **how Stremiium assigns, onboards, equips, and develops the 16 Council Captains** (C01–C16) plus the meta-governance tier (Agents Council Captain, Sparkling Curious). It is the HR + Operations + Knowledge operating manual for standing up and sustaining the council leadership layer of the agent ecosystem.

---

## 0. Document Control

| Field             | Value                                      |
| ----------------- | ------------------------------------------ |
| Owner             | Chief-People-Officer (C05)                 |
| Co-Owners         | VP-Operations (C02); Chief-Librarian (C03) |
| Governance Review | Agents Council Captain (META-COUNCIL-001)  |
| Approval Gate     | CEO + CPO (C05) + VP-Ops (C02) sign-off    |
| Review Cadence    | Quarterly (or on council-structure change) |

### Revision History

| Version | Date       | Author         | Change          |
| ------- | ---------- | -------------- | --------------- |
| 1.0     | 2026-06-22 | C05 HR-Culture | Initial program |

### Related Artifacts

- Council agents: `.github/agents/council-agents/C01..C16-*.agent.md`
- Master council prompt: `.github/agents/council-agents/STREMIIUM-AGENTS-COUNCIL-MASTER-SYSTEM-PROMPT.md`
- Meta-governance: `.github/agents/organizational-meta-agents/AGENTS-COUNCIL-CAPTAIN-SYSTEM-PROMPT.md`
- Squad cabinet: `.github/agents/organizational-meta-agents/SQUAD-CABINET-SYSTEM-PROMPT.md`
- Task list (16-council matrix): `.github/artifacts/plan-mode/task-list.md`

---

## 1. Purpose & Scope

### 1.1 Purpose

Provide a repeatable, auditable process for: (a) **assigning** the right agent/persona to each of the 16 council captain roles, (b) **onboarding** them to full operating capacity, (c) **equipping** them with the artifacts, authority, and tooling they need, and (d) **developing** them over time.

### 1.2 Scope — In

- The 16 council captain roles (C01–C16).
- The meta-governance tier: Agents Council Captain, Sparkling Curious.
- Onboarding curriculum, authority matrix, equipment/access provisioning, 30/60/90-day ramp, performance review.
- Knowledge handoff from C03 (Chief-Librarian).

### 1.3 Scope — Out

- Squad-level agent onboarding (separate squad playbooks).
- Recruitment of human staff (C05 standard HR process).
- Detailed system-prompt engineering (owned by C11/C03 per agent file).

---

## 2. The 16-Council Model (Authoritative)

> Source: `.github/artifacts/plan-mode/task-list.md` council matrix + `.github/agents/council-agents/`.

| ID  | Council                    | Captain Role                                | Tier | Agent Count | Primary Domain                   |
| --- | -------------------------- | ------------------------------------------- | ---- | ----------- | -------------------------------- |
| C01 | Legal-Compliance           | Legal-Compliance-Squad-Captain              | 1    | 6           | Regulatory, IP, contracts        |
| C02 | Operations                 | VP-Operations                               | 1    | 3           | Governance, ops, risk            |
| C03 | Admin-Knowledge            | Chief-Librarian                             | 1    | 20+         | Knowledge, docs, records         |
| C04 | Strategy-Growth            | Chief-Strategist                            | 1    | 4           | Strategy, market, growth         |
| C05 | HR-Culture                 | Chief-People-Officer                        | 1    | 13          | People, culture, training        |
| C06 | Engineering-Infrastructure | Chief-Technology-Officer                    | 1    | 5           | Platform, infra, architecture    |
| C07 | Sales-Business-Dev         | Rainmaker-Captain                           | 1    | 4           | Sales, partnerships, BDR         |
| C08 | Design-Creative            | Chief-Design-Officer                        | 2    | 2           | Brand, UX, visual                |
| C09 | Marketing-Communications   | Chief-Marketing-Officer                     | 2    | 2           | Marketing, content, comms        |
| C10 | Finance-Investor-Relations | Chief-Financial-Officer                     | 1    | 4           | Finance, IR, accounting          |
| C11 | Dev-Engineering            | Dev-Engineering-Squad-Captain               | 1    | 6           | Software delivery                |
| C12 | Cybersecurity-Intel        | Cybersecurity-Intelligence-Squad-Captain    | 1    | 2           | Security, intel, compliance-tech |
| C13 | Web3-Finance               | Web3-Financial-Infrastructure-Squad-Captain | 3    | 2           | Blockchain, custody, DeFi        |
| C14 | Customer-Success           | VP-Customer-Success                         | 2    | 5           | Support, success, retention      |
| C15 | Product-Management         | Product-Management-Squad-Captain            | 2    | 5           | Product, roadmap, discovery      |
| C16 | Banking-Fintech            | Banking-Fintech-Squad-Captain               | 3    | 3           | Banking, cards, fintech partners |

**Meta-governance tier (above the 16):**

- **Sparkling Curious** — Master Orchestrator (supreme execution authority).
- **Agents Council Captain (META-COUNCIL-001)** — meta-governance of all 16 councils + 100+ agents.

---

## 3. Captain Assignment Process

### 3.1 Role Definition (per council)

Each captain role is defined by:

1. **System prompt / agent file** (`.github/agents/council-agents/CNN-*.agent.md`) — the canonical role spec.
2. **Council charter** — mission, KPIs, decision rights, escalation path.
3. **Authority matrix** — what the captain can decide alone vs with others (see §6).
4. **Success profile** — competencies, domain expertise, operating principles.

### 3.2 Assignment Steps

| Step | Action                                                                                   | Owner                           | Output              |
| ---- | ---------------------------------------------------------------------------------------- | ------------------------------- | ------------------- |
| A1   | Confirm role vacancy / creation need                                                     | Agents Council Captain          | Vacancy ticket      |
| A2   | Pull canonical role spec (agent file)                                                    | C03 Chief-Librarian             | Role spec v-current |
| A3   | Match candidate (agent persona or human) to success profile                              | C05 HR + Agents Council Captain | Shortlist           |
| A4   | Fit & integrity check (for regulated roles: RE exams, FIC fit-&-proper where applicable) | C01 Legal                       | Clearance           |
| A5   | Assignment decision                                                                      | CEO + Agents Council Captain    | Appointment record  |
| A6   | Provision access, tooling, artifacts (§5)                                                | C02 Ops + C06 Eng + C03         | Provisioned captain |
| A7   | Begin 30/60/90 onboarding (§7)                                                           | C05 HR + buddy captain          | Onboarding plan     |
| A8   | Publish appointment to all councils                                                      | C03                             | Org announcement    |

### 3.3 Regulated-Role Notes

Captains whose councils touch regulated activity (C01 Legal, C10 Finance, C12 Cyber, C16 Banking, C13 Web3) must additionally satisfy any statutory fit-&-proper / exam requirements (e.g., FAIS RE1/RE3/RE5 per the SA Compliance Playbook §3.1). These clear in step A4.

---

## 4. Onboarding Curriculum

> Owned by C05 (delivery) + C03 (content/knowledge). Modular; captains complete the **Core** track plus their **Council-Specific** track.

### 4.1 Core Track (all captains)

| Module | Topic                                                         | Owner                  | Format                         |
| ------ | ------------------------------------------------------------- | ---------------------- | ------------------------------ |
| M1     | Stremiium mission, vision, DDCT values                        | C09/C05                | Briefing + Branding masterfile |
| M2     | The 16-council model + meta-governance tier                   | Agents Council Captain | Walkthrough + org chart        |
| M3     | Authority matrix + escalation paths                           | C02 Ops                | Workshop                       |
| M4     | Knowledge system: artifacts, plan/code/ask modes, library     | C03                    | Hands-on                       |
| M5     | Compliance baseline: POPIA, conduct, record-keeping           | C01                    | E-learning + attestation       |
| M6     | Security baseline: access, secrets, incident reporting        | C12                    | E-learning + attestation       |
| M7     | Tooling: comms, ticketing, analytics, council-meeting cadence | C06/C02                | Hands-on                       |
| M8     | Captain peer network + "buddy captain" intro                  | C05                    | Introduction                   |

### 4.2 Council-Specific Track (examples)

| Council              | Specialist Modules                                                       |
| -------------------- | ------------------------------------------------------------------------ |
| C01 Legal            | FSCA/CASP regime, FICA/RMCP, FAIS conduct, IP/contracts, POPIA programme |
| C10 Finance          | SARS tax/CARF, treasury controls, IR, financial reporting                |
| C12 Cyber            | T1.x security program, monitoring, incident response, audit              |
| C16 Banking          | Partner-bank ops, card scheme rules, PCI DSS, SARB/NPS                   |
| C13 Web3             | Custody (MPC/HSM), Polygon ops, wallet security (T1.2.x)                 |
| C15 Product          | PRD discipline, discovery, roadmap governance                            |
| C09 Marketing        | Brand & voice guidelines, CASP marketing gate, funnel KPIs               |
| C14 Customer-Success | KB (P2T04), onboarding journeys, SLAs, escalation                        |

### 4.3 Knowledge Handoff from C03

Each new captain receives:

- The current artifact set for their council (plan/code/ask mode artifacts).
- The council's running task list and open decisions.
- A "first 5 reads" pack curated by C03.
- Access to the knowledge base and learning artifacts.

---

## 5. Equipment, Access & Tooling Provisioning

> Provisioned in onboarding step A6; revoked on offboarding (§9).

| Category            | Items                                                                     | Provisioner |
| ------------------- | ------------------------------------------------------------------------- | ----------- |
| **Identity**        | Council agent identity, role-based SSO, MFA                               | C06         |
| **Access**          | Least-privilege access to systems in scope for the council                | C06 + C02   |
| **Comms**           | Council channel (Slack/Discord equivalent), captain channel, email distro | C02         |
| **Tooling**         | Ticketing, docs/wiki, analytics, meeting cadence calendar                 | C02/C06     |
| **Secrets**         | Vault credentials per T1.1.x secrets program (never shared)               | C12         |
| **Artifacts**       | Read/write to council artifact folders; read to cross-council             | C03         |
| **Budget**          | Council budget allocation visibility (C10)                                | C10         |
| **Sign-off rights** | Authority-matrix-defined approver roles (§6)                              | C02         |

All provisioning is **least-privilege**, **logged**, and **time-bound for contractors/temps**.

---

## 6. Authority & Decision Matrix

> Operationalizes the Agents Council Captain's governance framework. Legend: **D** Decide · **C** Consult · **I** Inform · **A** Accountable.

| Decision Type                            |     Captain      | Agents Council Capt | CEO / Sparkling | Board |
| ---------------------------------------- | :--------------: | :-----------------: | :-------------: | :---: |
| In-council tactical execution            |      **D**       |          I          |        I        |   —   |
| In-council hiring/assignment             |      **D**       |          C          |        I        |   —   |
| Cross-council dependency                 |        C         |        **D**        |        I        |   —   |
| Council KPI setting                      |     **A/D**      |          C          |        C        |   I   |
| Council budget spend (within allocation) |      **D**       |          I          |        I        |   —   |
| Org-wide policy change                   |        C         |        **D**        |        C        |   I   |
| Major architectural decision             |        C         |          C          |      **D**      |   I   |
| Regulatory escalation                    | **A/D** (notify) |          I          |      **D**      |   I   |
| Public/external commitment               |        I         |          C          |      **D**      |   C   |
| Crisis response activation               |        C         |        **D**        |      **D**      |   I   |
| Appointment of a new captain             |        C         |        **A**        |      **D**      |   I   |

> Regulated councils (C01/C10/C12/C13/C16) carry statutory accountabilities (e.g., MLRO, Information Officer) that override the matrix where law requires — see SA Compliance Playbook §5 RACI.

---

## 7. The 30/60/90-Day Ramp

| Phase                   | Focus                                                                                     | Milestones                                                                        | Checkpoint Owner       |
| ----------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------- |
| **Days 0–30: Orient**   | Core track (M1–M8) + meet buddy captain + read "first 5" + shadow council meeting         | Core modules complete; access verified; first council meeting attended            | C05 + buddy            |
| **Days 31–60: Operate** | Council-specific track + take ownership of council task list + run first council meeting  | First independent decision logged; council KPIs understood; first artifact update | Agents Council Captain |
| **Days 61–90: Own**     | Drive council roadmap + contribute to cross-council initiatives + first performance check | 90-day review; KPI baseline set; development plan agreed                          | CEO + C05              |

### 7.1 90-Day Review Criteria

- Core + council-specific modules completed and attested.
- All access/tooling functional; no open provisioning gaps.
- Council task list owned; first independent decision documented.
- Council KPIs baselined; development plan in place.
- Buddy captain + Agents Council Captain sign-off.

---

## 8. Performance & Development

### 8.1 Operating Cadence

| Cadence   | Event                                        | Owner                            |
| --------- | -------------------------------------------- | -------------------------------- |
| Weekly    | Council standup + KPI check                  | Captain                          |
| Bi-weekly | Cross-council sync (Agents Council Captain)  | Agents Council Captain           |
| Monthly   | Captain 1:1 with CEO/Sparkling               | CEO                              |
| Quarterly | Council performance review + roadmap         | Captain + Agents Council Captain |
| Annually  | Captain development plan + succession review | C05 + CEO                        |

### 8.2 KPIs (captain-level)

Each captain owns a small set of council KPIs (sourced from the council's domain — e.g., C12 → security NFRs from PRD §9.1; C15 → PRD delivery; C01 → compliance scorecard from Playbook §6). Common captain-level meta-KPIs:

- Council delivery against roadmap (% on-time).
- Cross-council collaboration health (no. of unblocked dependencies / no. raised).
- Incident/compliance escalations from the council (target: low/zero avoidable).
- Team health (agent coverage, capability gaps closed).

### 8.3 Development Pathways

- **Domain depth:** specialist certifications/exams (e.g., RE exams, security certs).
- **Breadth:** cross-council rotations for high-potential captains.
- **Leadership:** progression toward meta-governance tier (Agents Council Captain successor).

---

## 9. Offboarding & Succession

### 9.1 Offboarding Steps

| Step | Action                                                                  | Owner                        |
| ---- | ----------------------------------------------------------------------- | ---------------------------- |
| O1   | Initiate offboarding (departure, reassignment, or performance)          | C05 + Agents Council Captain |
| O2   | Knowledge handoff to successor/buddy (artifacts, decisions, open items) | Departing captain + C03      |
| O3   | Revoke access, secrets, tooling (per T1.1.x)                            | C06 + C12                    |
| O4   | Archive council state; update org chart                                 | C03                          |
| O5   | Successor onboarding per §3–§7                                          | C05                          |

### 9.2 Succession Planning

- Each captain identifies a **deputy / buddy captain** within 90 days.
- Annual succession review (C05 + CEO) identifies coverage gaps.
- Critical regulated roles (C01 MLRO, C10 CFO, C12, C16) maintain a **documented continuity plan** with named backups.

---

## 10. RACI for This Program

| Activity                 | C05 HR  | C02 Ops | C03 Librarian | Agents Council Capt |  CEO  | C01 Legal | C06 Eng |
| ------------------------ | :-----: | :-----: | :-----------: | :-----------------: | :---: | :-------: | :-----: |
| Role definition          |    C    |    C    |     **R**     |        **A**        |   I   |     C     |    I    |
| Assignment decision      |  **R**  |    C    |       I       |          C          | **A** |     C     |    I    |
| Onboarding delivery      | **A/R** |    C    |       C       |          C          |   I   |     C     |    C    |
| Knowledge content        |    C    |    I    |    **A/R**    |          I          |   I   |     C     |    I    |
| Access provisioning      |    I    |    C    |       I       |          I          |   I   |     I     | **A/R** |
| Regulated-role clearance |    I    |    I    |       I       |          I          |   I   |  **A/R**  |    I    |
| Performance review       | **A/R** |    I    |       I       |          C          |   C   |     I     |    I    |
| Offboarding              |  **A**  |    R    |       R       |          C          |   I   |     C     |    R    |

---

## 11. Risks & Mitigations

| Risk                                                 | Mitigation                                                                               |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Captain bottleneck / single point of failure**     | Deputy + succession plan; documented continuity for regulated roles                      |
| **Inconsistent onboarding across councils**          | Mandatory Core track (M1–M8) + attestation; C05 quality check                            |
| **Access sprawl / orphaned accounts**                | Least-privilege provisioning; offboarding revocation (O3); quarterly access review (C12) |
| **Regulated captain without fit-&-proper clearance** | A4 gate blocks assignment; statutory roles flagged in §3.3                               |
| **Knowledge loss on departure**                      | Artifacts live in C03 system, not in captain's head; mandatory handoff (O2)              |
| **Authority ambiguity**                              | Published authority matrix (§6); escalation path enforced                                |

---

## 12. Roll-Out Checklist (Standing up the 16 councils)

- [ ] Confirm all 16 captain roles have a current agent file (`.github/agents/council-agents/CNN-*.agent.md`) — C03 audit
- [ ] Confirm Agents Council Captain meta-governance prompt current — C03
- [ ] Build onboarding curriculum content (Core M1–M8 + council-specific) — C05 + C03
- [ ] Provision access/tooling template per council — C06 + C02
- [ ] Assign buddy captains across the 16 — C05
- [ ] Run first onboarding cohort; capture feedback — C05
- [ ] Publish authority matrix (§6) to all councils — C02
- [ ] Set 90-day review dates — C05
- [ ] Quarterly review cadence scheduled — Agents Council Captain

---

## Glossary

- **Council** — a tier-1/2/3 leadership unit (C01–C16) owning a domain.
- **Captain** — the leader/accountable owner of a council.
- **Meta-governance tier** — Agents Council Captain + Sparkling Curious, above the 16.
- **DDCUT** — Stremiium core values (Dreams/Diversity/Community/Utilities/Descendants).
- **RMCP / MLRO / RE exams / CASP** — see SA Compliance Playbook glossary.

---

**Document Status:** Draft for Council Adoption (v1.0). On approval by CEO + CPO (C05) + VP-Ops (C02), this becomes the authoritative captain assignment & onboarding program. Status recorded in the Implementation Log.
