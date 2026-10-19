# Tier 1 — Strategic Governance Councils (C01–C10)

**Derived from:** `.stremiium/agents/council-agents/C01…C10*.agent.md`, `.stremiium/config/council-department-mapping.json`, `.stremiium/config/councils/COUNCIL_REGISTRY.json`, `.stremiium/config/councils/C*.config.json`, `.stremiium/registry/master-registry.json`
**Tier:** `TIER-1-STRATEGIC` (command & control; 10 councils) [SEEN — `COUNCIL_REGISTRY.json`:7]
**Canonical status:** `.stremiium/` is authoritative; this file is a derived view.

> **Reading key.** Each council block gives: id · name · captain (agent file) · mandate ·
> sub-squads · RACI · owned T-tasks · key skills · escalation path · current status. Fields
> tagged `[INFERRED]` are derived mappings (e.g. T-task ownership), not statements literally
> present in the consolidated files. Record counts are from `master-registry.json` (verified via
> `jq` aggregation; see `../03-registry/`).

---

## Tier summary

| ID | Council | Captain agent file | Workforce departments (mapping) | Registry records | Config authority |
|---|---|---|---|---|---|
| C01 | Legal-Compliance | `C01-legal-compliance-captain.agent.md` | c01-legal-compliance | 20 | veto authority (legal/privacy/liability) |
| C02 | Operations | `C02-vp-operations.agent.md` | c02-operations, c02-operations-infrastructure | 7 | operational governance |
| C03 | Admin-Knowledge | `C03-chief-librarian.agent.md` | c03-admin-knowledge | 34 | knowledge authority |
| C04 | Strategy-Growth | `C04-chief-strategist.agent.md` | c04-strategy-growth, c04-strategy-operations, c04-strategy-research, c04-strategy-core | 51 | strategy-setter |
| C05 | HR-Culture | `C05-chief-people-officer.agent.md` | c05-hr-culture, c05-hr-people | 14 | people authority |
| C06 | Engineering-Infrastructure | `C06-chief-technology-officer.agent.md` | c06-engineering-infrastructure | 8 | technical authority |
| C07 | Sales-Business-Development | `C07-rainmaker-captain.agent.md` | c07-sales-business-development, c07-sales-revenue | 21 | revenue authority |
| C08 | Design-Creative | `C08-chief-design-officer.agent.md` | c08-design-creative | 8 | design authority |
| C09 | Marketing-Communications | `C09-chief-marketing-officer.agent.md` | c09-marketing-brand, c09-marketing-growth, c09-marketing-communications | 10 | brand authority |
| C10 | Finance-Investor-Relations | `C10-chief-financial-officer.agent.md` | c10-finance-cfo, c10-finance-investor-relations, c10-algo-trading | 25 | budget authority |

All ten councils are `"status": "active"` in `COUNCIL_REGISTRY.json` and report to Sparkling
Curious (`reports_to: 'Sparkling Curious (Master Orchestrator)'` in every captain frontmatter).

---

## C01 — Legal-Compliance

- **ID / Name:** C01 / Legal-Compliance-Squad (a.k.a. Legal-Compliance Council).
- **Captain:** `C01-legal-compliance-captain` — *Chief Legal & Compliance Officer* ["The Veritas archetype"].
  File: `.stremiium/agents/council-agents/C01-legal-compliance-captain.agent.md`.
- **Mandate:** FSCA CASP licensing, FICA obligations (incl. Dir.9 Travel Rule), SARB FinSurv/ExCon,
  POPIA, NCA, NGB, corporate governance; legal risk management, IP, contracts, employment law.
  [SEEN — `C01-legal-compliance.config.json`:5, 23-30; `PROGRAM_BRIEF.md`:34]
- **Sub-squads / specialties (SEEN — config `specialties`):** Privacy-Law Officer · Contract-Management
  Officer · Regulatory-Affairs Officer · IP & Contracts Counsel · Employment & Labor Counsel ·
  Compliance-Officer. Workforce agents live under `.stremiium/agents/department-agents/c01-legal-compliance/`
  (`AGT-legal-compliance-squad-captain`, `AGT-contract-management-agent`, `AGT-employment-labor-counsel`,
  `AGT-ip-contracts-counsel`, `AGT-privacy-law-agent`, `AGT-regulatory-affairs-agent`).
- **RACI:** **A** = C01 captain; **R** = C01 workforce; **C** = all councils (legal oversight);
  **I** = all (compliance bulletins). Veto authority on multi-council decisions affecting
  compliance, privacy, or legal liability; requires approval on data-collection changes,
  new external partnerships, SLAs, customer contracts, IP creation, legal disputes
  (SEEN — config:31-42). Depends on C02-Operations, C03-Admin.
- **Owned T-tasks `[INFERRED]`:** T1 Foundation (regulatory registration), SOP-2 Regulatory
  Compliance Check; program role: dossier `06-regulatory-and-risk.md` for every entity
  (`PROGRAM_BRIEF.md`:90, 112).
- **Key skills:** `skills/legal-advisor`, `legal-document-analyzer`, `legal-risk-assessment`,
  `regulatory-affairs-head`, `regulatory-review-checklist`, `policies/security/compliance-framework.md`.
- **Escalation:** `captain → Sparkling Curious → Mychael → Board`; config override
  "Sparkling Curious (multi-council decisions)"; external counsel for novel regulation.
- **Current status:** `active`; compliance score 88, contract turnaround 4.2 d avg, audit pass 100%,
  risk catch 98% (self-reported metrics — SEEN config:73-78, not independently verified → `[INFERRED]`).

## C02 — Operations

- **ID / Name:** C02 / Operations-Squad.
- **Captain:** `C02-vp-operations` (VP Operations).
- **Mandate:** business operations, governance, risk management, vendor/procurement, BCP, vendor
  SLAs, core-banking uptime. [SEEN — `PROGRAM_BRIEF.md`:35]
- **Sub-squads (SEEN):** departments `c02-operations` and `c02-operations-infrastructure`;
  workforce agents `AGT-vp-operations-squad-captain`, `AGT-governance-risk-officer`,
  `AGT-operations-manager`, `AGT-vendor-procurement-manager`, `AGT-engineer-captain`;
  subbench `SUB-admin-coordinator.c02`; `CONSOLIDATION-MANIFEST.md` present.
- **RACI:** **A** = C02 captain; **C** = all councils (operational governance); C06 depends on C02.
  Custodian of the TBS task-folder protocol [INFERRED].
- **Owned T-tasks `[INFERRED]`:** T1 Foundation (infra process), SOP-1 (task-folder creation
  governance), SOP-4 coordination logistics.
- **Key skills:** `operational-playbooks/*` (incident-response, DB failover, deployment rollback),
  `workflows/operational-playbooks/scaling-infrastructure-playbook.md`.
- **Escalation:** standard ladder; SLA "Vendor management: 10 days" (SEEN `COUNCIL_REGISTRY.json`:229).
- **Current status:** `active`.

## C03 — Admin-Knowledge

- **ID / Name:** C03 / Admin-Knowledge-Squad. *This is the squad that owns the UnConsolidated folder.*
- **Captain:** `C03-chief-librarian` (Chief-Librarian / The-Librarian).
  File: `.stremiium/agents/council-agents/C03-chief-librarian.agent.md`.
- **Mandate:** documentation standards, knowledge management, information architecture, archival,
  compliance auditing, organisational memory, TBS folders, markdown standards.
  [SEEN — `C03-admin-knowledge.config.json`:5; `PROGRAM_BRIEF.md`:36]
- **Sub-squads / specialties (SEEN — config):** Knowledge Architect · Documentation Specialist ·
  Data Steward · Information Analyst · Auditor · Archivist · Compliance Officer. Workforce:
  `.stremiium/agents/department-agents/c03-admin-knowledge/` (34 registry records — the largest
  knowledge department), incl. `AGT-the-librarian`, `AGT-the-auditor`, `AGT-knowledge-architect`,
  `AGT-documentation-specialist`, `AGT-chief-librarian(-captain)`, `AGT-records-compliance-archivist`,
  `AGT-organizational-historian-knowledge-curator`, `AGT-policy-governance-auditor`.
- **RACI:** **A** = C03 captain; **R** = C03 workforce; **C** = all councils (knowledge capture);
  depends on all 15 others as knowledge sources; enables all councils.
  Knowledge authority; required approval on strategic decisions, documentation standards,
  retention policies, archive procedures (SEEN config:31-41).
  Master of: Knowledge-Base, Decision-History, Best-Practices, Lessons-Learned.
- **Owned T-tasks `[INFERRED]`:** T2 (Sparkling Curious & Council Agent documentation),
  T6 (configuration/root file standards), and the **UnConsolidated generation pipeline** itself.
- **Key skills:** `skills/content-strategy`, `content-governance-policy.json`,
  `prompt-completion-report.json`, `master-registry` maintenance, `skills/SKILLS-ACTIVATION-INDEX.md`.
- **Escalation:** "Sparkling Curious (institutional memory disputes)"; SLA documentation 5 days,
  knowledge capture 3 days after decision, archive 10 days, compliance audit 20 days (config:53-58).
- **Current status:** `active`; knowledge completeness 95, doc coverage 100%, accessibility 92,
  archive accuracy 99% (self-reported → `[INFERRED]`).

## C04 — Strategy-Growth

- **ID / Name:** C04 / Strategy-Growth-Squad.
- **Captain:** `C04-chief-strategist` (Chief-Strategist / The-Strategist).
- **Mandate:** market positioning, B-BBEE strategy, growth forecasting, strategic planning,
  business development, operational optimisation. [SEEN — `PROGRAM_BRIEF.md`:37]
- **Sub-squads (SEEN — mapping):** four departments — `c04-strategy-core`, `c04-strategy-growth`,
  `c04-strategy-operations`, `c04-strategy-research` — the **largest tier-1 footprint (51 registry
  records)**. Includes subbenches `SUB-partnership-scout.c04`, `SUB-analytics-reporter.c04`,
  `SUB-etl-builder.c04`; and a dedicated research ops lane (C04 staffs `crd-research-ops`).
- **RACI:** **A** = C04 captain; sets organisational direction (subject to C01 veto);
  depends on C01-Legal, C10-Finance, C03-Admin; coordinates with C07, C09, C15; all 16 councils
  follow C04 strategic direction (SEEN config:27-37). Cross-council: `true`.
- **Owned T-tasks `[INFERRED]`:** T1 Foundation (strategy), strategy-review SLA 10 d, market
  analysis 15 d, plan development 20 d.
- **Key skills:** `workflows/decision-frameworks/market-expansion-framework.md`,
  `product-pivot-framework.md`, `priority-scoring-matrix.md`, `startup-financial-modeling`.
- **Escalation:** "Sparkling Curious (organisational strategy disputes)"; threshold org-strategy/board-level.
- **Current status:** `active`; strategy accuracy 85, forecast accuracy 78, execution compliance 92, growth target 15% YoY (self-reported → `[INFERRED]`).

## C05 — HR-Culture

- **ID / Name:** C05 / HR-Culture-Squad.
- **Captain:** `C05-chief-people-officer` (Chief-People-Officer / The-Guardian).
- **Mandate:** SA salary bands, org structure, SASBO, hiring, culture, development, conflict
  resolution. [SEEN — `PROGRAM_BRIEF.md`:38]
- **Sub-squads (SEEN):** `c05-hr-culture`, `c05-hr-people`, plus an **Academy** product lane under
  `c05-human-resources/academy/` (`AGT-academy-lead.c05`, `SUB-course-builder.c05`). Workforce
  includes Recruiter-Talent-Acquisition-Leader, Mediator-Conflict-Resolution, Culture-Manager,
  Employee-Development-Learning-Director, Mentor-Specialist.
- **RACI:** **A** = C05 captain; **C** = all councils (people/culture). Publishes the RACI-matrix
  documentation standard referenced by other councils (SEEN — `C05-chief-people-officer.agent.md`:1826).
- **Owned T-tasks `[INFERRED]`:** T1 Foundation (org structure); Recruitment SLA 20 days.
- **Key skills:** `workflows/decision-frameworks/hiring-decision-framework.md`,
  `organizational-structure-framework.md`, `team-onboarding-playbook.md`.
- **Escalation:** standard ladder; SLA "Recruitment: 20 days".
- **Current status:** `active`.

## C06 — Engineering-Infrastructure

- **ID / Name:** C06 / Engineering-Infrastructure-Squad.
- **Captain:** `C06-chief-technology-officer` (Chief-Technology-Officer / VP-Engineering / The-Architect).
- **Mandate:** AWS `af-south-1`, K8s, HSM, VPC isolation, system architecture, DevOps,
  infrastructure, technical strategy. [SEEN — `PROGRAM_BRIEF.md`:39]
- **Sub-squads (SEEN):** `c06-engineering-infrastructure`; workforce `AGT-architect-captain`,
  `AGT-chief-technology-officer`, `AGT-vp-engineering`, `AGT-system-architect-technical-design`.
  Also staffs `crd-deployment` (with C11).
- **RACI:** **A** = C06 captain; depends on C02, C12; coordinates with C11, C13 (SEEN config;
  `COUNCIL_REGISTRY.json` collaborationMatrix C06).
- **Owned T-tasks `[INFERRED]`:** T4 Workspace Services (infrastructure); Infrastructure SLA 10 days.
- **Key skills:** `skills/k8s-security-policies`, `cloud-infrastructure-security`,
  `gitops-workflow`, `workflows/operational-playbooks/deployment-rollback-playbook.md`.
- **Escalation:** standard ladder.
- **Current status:** `active`.

## C07 — Sales-Business-Development

- **ID / Name:** C07 / Sales-Business-Development-Squad.
- **Captain:** `C07-rainmaker-captain` (Rainmaker-Captain / The-Rainmaker).
- **Mandate:** merchant acquiring, POS, retail agent networks, revenue growth, deal management,
  client acquisition. [SEEN — `PROGRAM_BRIEF.md`:40]
- **Sub-squads (SEEN):** `c07-sales-business-development`, `c07-sales-revenue`; workforce incl.
  Account Executive, Sales Manager, Business-Development-Lead, Revenue-Operations-Manager,
  Sales-Enablement-Manager.
- **RACI:** **A** = C07 captain; depends on C04, C10; coordinates with C09, C14, C15 (SEEN config).
- **Owned T-tasks `[INFERRED]`:** Deal-review SLA 48 h; contributes to T8 Launch (go-to-market).
- **Key skills:** `workflows/decision-frameworks/vendor-evaluation-framework.md`,
  `acquisition-evaluation-framework.md`.
- **Escalation:** standard ladder.
- **Current status:** `active`.

## C08 — Design-Creative

- **ID / Name:** C08 / Design-Creative-Squad.
- **Captain:** `C08-chief-design-officer` (Chief-Design-Officer / The-Artisan).
- **Mandate:** mobile UI/UX, WCAG 2.1 AA, nudging flows, design systems, creative direction.
  [SEEN — `PROGRAM_BRIEF.md`:41]
- **Sub-squads (SEEN):** `c08-design-creative`; workforce `AGT-product-design-lead`,
  `AGT-ux-research-lead`, `AGT-design-systems-architect`, `AGT-brand-creative-director`,
  `AGT-visual-design-specialist`, `AGT-motion-design-specialist`.
- **RACI:** **A** = C08 captain; coordinates with C09, C11, C15 (SEEN config).
- **Owned T-tasks `[INFERRED]`:** T9 UX flows; Design-review SLA 5 days.
- **Key skills:** `skills/mobile-design`, `frontend-design`, `web-design-guidelines`,
  `axiom-privacy-ux`, `tailwindcss-mobile-first`.
- **Escalation:** standard ladder.
- **Current status:** `active`.

## C09 — Marketing-Communications

- **ID / Name:** C09 / Marketing-Communications-Squad.
- **Captain:** `C09-chief-marketing-officer` (CMO / The-Amplifier).
- **Mandate:** campaigns, sponsorship, gamified adoption, brand communication, content, PR.
  [SEEN — `PROGRAM_BRIEF.md`:42]
- **Sub-squads (SEEN):** `c09-marketing-brand` (incl. a Sound lane `AGT-sound-studios-lead.c09`),
  `c09-marketing-growth`, `c09-marketing-communications`.
- **RACI:** **A** = C09 captain; coordinates with C04, C07, C08; all public communications
  require C01 compliance review (SEEN `sparkling-curious`:1929).
- **Owned T-tasks `[INFERRED]`:** Campaign SLA 10 days.
- **Key skills:** `skills/marketing-psychology`, `product-marketing-context`, `copywriting`,
  `content-strategy`, `programmatic-seo`.
- **Escalation:** standard ladder.
- **Current status:** `active`.

## C10 — Finance-Investor-Relations

- **ID / Name:** C10 / Finance-Investor-Relations-Squad.
- **Captain:** `C10-chief-financial-officer` (CFO / The-Capitalist).
- **Mandate:** CAR/Tier-1/LCR/NSFR, NIM, NIR, cost-to-income, budgeting, capital strategy,
  investor relations. [SEEN — `PROGRAM_BRIEF.md`:43]
- **Sub-squads (SEEN):** `c10-finance-cfo`, `c10-finance-investor-relations`, and an
  **algo-trading lane** `c10-algo-trading` (workforce `AGT-trading-core/system/prompt-v1/v2`,
  subbenches `SUB-executioner`, `SUB-market-analyst`, `SUB-risk-manager`, `SUB-strategy-selector`,
  plus `rules/` and `workflows/`).
- **RACI:** **A** = C10 captain; **budget authority** across the org ("budget-authority");
  coordinates with all councils on budget constraints (SEEN `COUNCIL_REGISTRY.json`:195-199).
- **Owned T-tasks `[INFERRED]`:** T1 Foundation (financial model); Budget SLA 20 days.
- **Key skills:** `skills/financial-analysis-agent`, `financial-statements`,
  `startup-financial-modeling`, `creating-financial-models`, `risk-management`,
  `backtesting-trading-strategies`.
- **Escalation:** standard ladder; budget veto in arbitration.
- **Current status:** `active`.

---

## Cross-tier observations (evidence-tagged)

1. **Record-count skew.** C04 (51) and C03 (34) dominate tier-1 record counts, both because
   they hold multi-department footprints and because C04's four departments duplicate captain
   variants (`AGT-chief-strategist`, `…-captain`, `…-strategy-officer`, alts). `[SEEN]`
2. **Authority is not proportional to size.** C01 (20 records) holds veto power out of all
   proportion to its count; C10 (25) holds budget veto. `[SEEN]`
3. **Config vs mapping drift.** `COUNCIL_REGISTRY.json` says `lastUpdated: 2024-12-19` and
   points config paths at `.github/councils/…` (a legacy path), whereas the live configs are at
   `.stremiium/config/councils/`. Treat the `.github/…` strings as stale references. `[SEEN]`
4. **Service-count inconsistency** persists in C03/C13 captain files ("7 services") against the
   master orchestrator's 11-service canon. Escalate to C03 for canonicalisation. `[SEEN]`
