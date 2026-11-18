# Stremiium Master Prompt Answers — Execution Plan

**Orchestrator:** Sparkling Curious (SC-MASTER-001)  
**Mode:** Plan Mode  
**Model Lock:** `auto` (kilo-auto/free) — enforced on every agent/subagent, no substitution  
**Scope:** All 201 Master Prompts (164 Stremiium agent prompts + 37 NeoBank prompts) across 16 councils  
**Output:** One `execution-result.md` per prompt, plus council-specific response folders/files  
**Research inputs:** All `docs/` zones + `docs/archive-second-versions/` + `.stremiium/` skills/workflows/config  
**Status:** Implementation-ready  

---

## 1. Mission

Sparkling Curious (SC-MASTER-001) assigns every Stremiium agent and subagent across all 16 councils the task of creating an answer to their assigned Master Prompt. Each agent:

1. Reads their `prompt.md` from `prompts/stremiium/<council>/<agent-name>/prompt.md` (Stremiium) or `prompts/neobank/<dept>/<prompt-name>/prompt.md` (NeoBank)
2. Researches using all `docs/` zones (governance, program, research, architecture, engineering, deliverables) and `docs/archive-second-versions/`
3. Applies relevant `.stremiium/` skills, workflows, config, and agent files
4. Produces an `execution-result.md` at `execution/results/<council>/<prompt-name>/execution-result.md`
5. Produces any additional council-specific response files/folders as defined in §5
6. Rolls results up through department → captain → Sparkling Curious synthesis

## 2. Model Lock & Governance

- **Model:** `auto` (Kilo Code Auto Free, `kilo-auto/free`) — LOCKED for every agent/subagent
- **No model substitution** permitted at any delegation step
- **Private-funded boundary:** No public investor/client funds without C01 + C16 + C10 + Mychael approval
- **Compliance gates:** C01 (legal/privacy), C12 (security), C16 (banking) must sign off before any artifact touching money/gaming/data ships
- **Escalation:** Agent → Council Captain → Sparkling Curious → Mychael (CEO) → Board
- **CRD coordinators** may intercept any step: `crd-git-state-safeguard`, `crd-security-compliance-sentinel`, `crd-resource-cost-governor`, `crd-workflow-orchestrator`
- **SA regulations:** POPIA s72, FICA, FSCA CASP, CARF (March 2026), FAIS, NCA, Banks Act, SARB

## 3. Two-Plane Task Assignment Structure

```
Sparkling Curious (SC-MASTER-001)
├── Meta-Councils (META-*) — advisory only
├── Coordinator Staff Line (CRD-*) — cross-cutting gates
└── Command Plane — Councils C01–C16
    ├── Captain (C01-legal-compliance-captain, etc.)
    ├── Departments (cNN-*)
    │   └── Agents (AGT-*) → each answers their Master Prompt
    │       └── Subagents (SUB-*) → leaf task execution under AGT parent
```

## 4. Council-by-Council Task Assignments

### C01 — Legal-Compliance (Tier 1, Strategic)
**Captain:** `C01-legal-compliance-captain.agent.md`  
**Department:** `c01-legal-compliance`  
**Agents & Master Prompts:**
| Agent | Prompt Path | Execution Result Path |
|---|---|---|
| captain | `prompts/stremiium/c01-legal-compliance/captain/prompt.md` | `execution/results/c01-legal-compliance/captain/execution-result.md` |
| adm-oversight-officer | `prompts/stremiium/c01-legal-compliance/adm-oversight-officer/prompt.md` | `execution/results/c01-legal-compliance/adm-oversight-officer/execution-result.md` |
| carf-reporting-mapper | `prompts/stremiium/c01-legal-compliance/carf-reporting-mapper/prompt.md` | `execution/results/c01-legal-compliance/carf-reporting-mapper/execution-result.md` |
| contract-management-officer | `prompts/stremiium/c01-legal-compliance/contract-management-officer/prompt.md` | `execution/results/c01-legal-compliance/contract-management-officer/execution-result.md` |
| employment-labor-counsel | `prompts/stremiium/c01-legal-compliance/employment-labor-counsel/prompt.md` | `execution/results/c01-legal-compliance/employment-labor-counsel/execution-result.md` |
| fica-casp-checker | `prompts/stremiium/c01-legal-compliance/fica-casp-checker/prompt.md` | `execution/results/c01-legal-compliance/fica-casp-checker/execution-result.md` |
| ip-contracts-counsel | `prompts/stremiium/c01-legal-compliance/ip-contracts-counsel/prompt.md` | `execution/results/c01-legal-compliance/ip-contracts-counsel/execution-result.md` |
| popia-data-transfer-assessor | `prompts/stremiium/c01-legal-compliance/popia-data-transfer-assessor/prompt.md` | `execution/results/c01-legal-compliance/popia-data-transfer-assessor/execution-result.md` |
| privacy-law-officer | `prompts/stremiium/c01-legal-compliance/privacy-law-officer/prompt.md` | `execution/results/c01-legal-compliance/privacy-law-officer/execution-result.md` |
| regulatory-affairs-officer | `prompts/stremiium/c01-legal-compliance/regulatory-affairs-officer/prompt.md` | `execution/results/c01-legal-compliance/regulatory-affairs-officer/execution-result.md` |

**Research:** `docs/governance/`, `docs/research/landscape/02-regulatory-framework/`, `docs/archive-second-versions/dossiers-archive/`  
**Skills:** `legal-advisor/`, `legal-document-analyzer/`, `legal-risk-assessment/`, `regulatory-affairs-head/`, `regulatory-review-checklist/`, `gdpr-privacy/`, `pci-compliance/`  
**Workflows:** `veritas-workflows.md`, `.stremiium/governance/workflow-routing.md`  
**Response folder:** `execution/results/c01-legal-compliance/<agent>/` + `execution/results/c01-legal-compliance/<agent>/compliance-gate-signoff.md`

### C02 — Operations (Tier 1, Strategic)
**Captain:** `C02-vp-operations.agent.md`  
**Departments:** `c02-operations`, `c02-operations-infrastructure`  
**Agents & Master Prompts:**
| Agent | Prompt Path | Execution Result Path |
|---|---|---|
| captain | `prompts/stremiium/c02-operations/captain/prompt.md` | `execution/results/c02-operations/captain/execution-result.md` |
| audit-trail-keeper | `prompts/stremiium/c02-operations/audit-trail-keeper/prompt.md` | `execution/results/c02-operations/audit-trail-keeper/execution-result.md` |
| governance-risk-officer | `prompts/stremiium/c02-operations/governance-risk-officer/prompt.md` | `execution/results/c02-operations/governance-risk-officer/execution-result.md` |
| incident-coordinator | `prompts/stremiium/c02-operations/incident-coordinator/prompt.md` | `execution/results/c02-operations/incident-coordinator/execution-result.md` |
| operations-director | `prompts/stremiium/c02-operations/operations-director/prompt.md` | `execution/results/c02-operations/operations-director/execution-result.md` |
| resource-scheduler | `prompts/stremiium/c02-operations/resource-scheduler/prompt.md` | `execution/results/c02-operations/resource-scheduler/execution-result.md` |
| sop-writer | `prompts/stremiium/c02-operations/sop-writer/prompt.md` | `execution/results/c02-operations/sop-writer/execution-result.md` |
| vendor-procurement-manager | `prompts/stremiium/c02-operations/vendor-procurement-manager/prompt.md` | `execution/results/c02-operations/vendor-procurement-manager/execution-result.md` |

**Research:** `docs/program/delivery/`, `docs/governance/execution-records/`, `docs/archive-second-versions/tooling-scratch/`  
**Skills:** `operations-expert/`, `risk-management/`, `vendor-procurement/`, `sla-management/`  
**Workflows:** `the-engineer-workflows.md`, `.stremiium/workflows/operational-playbooks/`  
**Response folder:** `execution/results/c02-operations/<agent>/` + `execution/results/c02-operations/<agent>/sop-response.md`

### C03 — Admin-Knowledge (Tier 1, Strategic)
**Captain:** `C03-chief-librarian.agent.md`  
**Department:** `c03-admin-knowledge`  
**Agents & Master Prompts:**
| Agent | Prompt Path | Execution Result Path |
|---|---|---|
| captain | `prompts/stremiium/c03-admin-knowledge/captain/prompt.md` | `execution/results/c03-admin-knowledge/captain/execution-result.md` |
| accessibility-documentation-lead | `prompts/stremiium/c03-admin-knowledge/accessibility-documentation-lead/prompt.md` | `execution/results/c03-admin-knowledge/accessibility-documentation-lead/execution-result.md` |
| agent-instruction-maintainer | `prompts/stremiium/c03-admin-knowledge/agent-instruction-maintainer/prompt.md` | `execution/results/c03-admin-knowledge/agent-instruction-maintainer/execution-result.md` |
| artifact-archivist | `prompts/stremiium/c03-admin-knowledge/artifact-archivist/prompt.md` | `execution/results/c03-admin-knowledge/artifact-archivist/execution-result.md` |
| chief-librarian | `prompts/stremiium/c03-admin-knowledge/chief-librarian/prompt.md` | `execution/results/c03-admin-knowledge/chief-librarian/execution-result.md` |
| compliance-auditor | `prompts/stremiium/c03-admin-knowledge/compliance-auditor/prompt.md` | `execution/results/c03-admin-knowledge/compliance-auditor/execution-result.md` |
| documentation-specialist | `prompts/stremiium/c03-admin-knowledge/documentation-specialist/prompt.md` | `execution/results/c03-admin-knowledge/documentation-specialist/execution-result.md` |
| glossary-keeper | `prompts/stremiium/c03-admin-knowledge/glossary-keeper/prompt.md` | `execution/results/c03-admin-knowledge/glossary-keeper/execution-result.md` |
| knowledge-architect | `prompts/stremiium/c03-admin-knowledge/knowledge-architect/prompt.md` | `execution/results/c03-admin-knowledge/knowledge-architect/execution-result.md` |
| knowledge-graph-builder | `prompts/stremiium/c03-admin-knowledge/knowledge-graph-builder/prompt.md` | `execution/results/c03-admin-knowledge/knowledge-graph-builder/execution-result.md` |
| learning-loop-curator | `prompts/stremiium/c03-admin-knowledge/learning-loop-curator/prompt.md` | `execution/results/c03-admin-knowledge/learning-loop-curator/execution-result.md` |
| metadata-steward | `prompts/stremiium/c03-admin-knowledge/metadata-steward/prompt.md` | `execution/results/c03-admin-knowledge/metadata-steward/execution-result.md` |
| prompt-librarian | `prompts/stremiium/c03-admin-knowledge/prompt-librarian/prompt.md` | `execution/results/c03-admin-knowledge/prompt-librarian/execution-result.md` |
| query-log-analyst | `prompts/stremiium/c03-admin-knowledge/query-log-analyst/prompt.md` | `execution/results/c03-admin-knowledge/query-log-analyst/execution-result.md` |
| redaction-officer | `prompts/stremiium/c03-admin-knowledge/redaction-officer/prompt.md` | `execution/results/c03-admin-knowledge/redaction-officer/execution-result.md` |
| retrieval-engineer | `prompts/stremiium/c03-admin-knowledge/retrieval-engineer/prompt.md` | `execution/results/c03-admin-knowledge/retrieval-engineer/execution-result.md` |
| runbook-editor | `prompts/stremiium/c03-admin-knowledge/runbook-editor/prompt.md` | `execution/results/c03-admin-knowledge/runbook-editor/execution-result.md` |
| session-memory-curator | `prompts/stremiium/c03-admin-knowledge/session-memory-curator/prompt.md` | `execution/results/c03-admin-knowledge/session-memory-curator/execution-result.md` |
| taxonomy-curator | `prompts/stremiium/c03-admin-knowledge/taxonomy-curator/prompt.md` | `execution/results/c03-admin-knowledge/taxonomy-curator/execution-result.md` |
| the-archivist | `prompts/stremiium/c03-admin-knowledge/the-archivist/prompt.md` | `execution/results/c03-admin-knowledge/the-archivist/execution-result.md` |
| the-auditor | `prompts/stremiium/c03-admin-knowledge/the-auditor/prompt.md` | `execution/results/c03-admin-knowledge/the-auditor/execution-result.md` |

**Research:** `docs/program/skills/`, `docs/program/templates/`, `docs/governance/unconsolidated/`, `docs/archive-second-versions/canonical-backups/`  
**Skills:** `notion-knowledge-capture/`, `notion-research-documentation/`, `knowledge-graph/`, `documentation-specialist/`, `metadata-steward/`, `prompt-librarian/`  
**Workflows:** `the-librarian-workflows.md`, `.stremiium/workflows/agent-workflows/`  
**Response folder:** `execution/results/c03-admin-knowledge/<agent>/` + `execution/results/c03-admin-knowledge/<agent>/knowledge-artifact.md`

### C04 — Strategy-Growth (Tier 1, Strategic)
**Captain:** `C04-chief-strategist.agent.md`  
**Departments:** `c04-strategy-core`, `c04-strategy-growth`, `c04-strategy-operations`, `c04-strategy-research`  
**Agents & Master Prompts:**
| Agent | Prompt Path | Execution Result Path |
|---|---|---|
| captain | `prompts/stremiium/c04-strategy-growth/captain/prompt.md` | `execution/results/c04-strategy-growth/captain/execution-result.md` |
| business-development-manager | `prompts/stremiium/c04-strategy-growth/business-development-manager/prompt.md` | `execution/results/c04-strategy-growth/business-development-manager/execution-result.md` |
| chief-strategist | `prompts/stremiium/c04-strategy-growth/chief-strategist/prompt.md` | `execution/results/c04-strategy-growth/chief-strategist/execution-result.md` |
| competitive-intelligence-analyst | `prompts/stremiium/c04-strategy-growth/competitive-intelligence-analyst/prompt.md` | `execution/results/c04-strategy-growth/competitive-intelligence-analyst/execution-result.md` |
| growth-experiment-designer | `prompts/stremiium/c04-strategy-growth/growth-experiment-designer/prompt.md` | `execution/results/c04-strategy-growth/growth-experiment-designer/execution-result.md` |
| market-analyst | `prompts/stremiium/c04-strategy-growth/market-analyst/prompt.md` | `execution/results/c04-strategy-growth/market-analyst/execution-result.md` |
| okr-tracker | `prompts/stremiium/c04-strategy-growth/okr-tracker/prompt.md` | `execution/results/c04-strategy-growth/okr-tracker/execution-result.md` |
| operations-optimizer | `prompts/stremiium/c04-strategy-growth/operations-optimizer/prompt.md` | `execution/results/c04-strategy-growth/operations-optimizer/execution-result.md` |
| scenario-modeler | `prompts/stremiium/c04-strategy-growth/scenario-modeler/prompt.md` | `execution/results/c04-strategy-growth/scenario-modeler/execution-result.md` |
| strategic-planner | `prompts/stremiium/c04-strategy-growth/strategic-planner/prompt.md` | `execution/results/c04-strategy-growth/strategic-planner/execution-result.md` |

**Research:** `docs/research/landscape/`, `docs/research/synthesis/`, `docs/program/plan/`, `docs/archive-second-versions/dossiers-archive/competitors-*/`  
**Skills:** `market-research-reports/`, `strategic-planning/`, `competitive-analysis/`, `growth-hacking/`, `business-development/`  
**Workflows:** `the-strategist-workflows.md`, `.stremiium/workflows/decision-frameworks/`  
**Response folder:** `execution/results/c04-strategy-growth/<agent>/` + `execution/results/c04-strategy-growth/<agent>/strategy-response.md`

### C05 — HR-Culture (Tier 1, Strategic)
**Captain:** `C05-chief-people-officer.agent.md`  
**Departments:** `c05-hr-culture`, `c05-hr-people`, `c05-human-resources`  
**Agents & Master Prompts:**
| Agent | Prompt Path | Execution Result Path |
|---|---|---|
| captain | `prompts/stremiium/c05-hr-culture/captain/prompt.md` | `execution/results/c05-hr-culture/captain/execution-result.md` |
| agent-human-teaming-coach | `prompts/stremiium/c05-hr-culture/agent-human-teaming-coach/prompt.md` | `execution/results/c05-hr-culture/agent-human-teaming-coach/execution-result.md` |
| chief-people-officer | `prompts/stremiium/c05-hr-culture/chief-people-officer/prompt.md` | `execution/results/c05-hr-culture/chief-people-officer/execution-result.md` |
| compensation-analyst | `prompts/stremiium/c05-hr-culture/compensation-analyst/prompt.md` | `execution/results/c05-hr-culture/compensation-analyst/execution-result.md` |
| culture-manager | `prompts/stremiium/c05-hr-culture/culture-manager/prompt.md` | `execution/results/c05-hr-culture/culture-manager/execution-result.md` |
| dei-advisor | `prompts/stremiium/c05-hr-culture/dei-advisor/prompt.md` | `execution/results/c05-hr-culture/dei-advisor/execution-result.md` |
| employee-development-director | `prompts/stremiium/c05-hr-culture/employee-development-director/prompt.md` | `execution/results/c05-hr-culture/employee-development-director/execution-result.md` |
| mediator-conflict-resolution | `prompts/stremiium/c05-hr-culture/mediator-conflict-resolution/prompt.md` | `execution/results/c05-hr-culture/mediator-conflict-resolution/execution-result.md` |
| mentor-specialist | `prompts/stremiium/c05-hr-culture/mentor-specialist/prompt.md` | `execution/results/c05-hr-culture/mentor-specialist/execution-result.md` |
| onboarding-coordinator | `prompts/stremiium/c05-hr-culture/onboarding-coordinator/prompt.md` | `execution/results/c05-hr-culture/onboarding-coordinator/execution-result.md` |
| performance-review-facilitator | `prompts/stremiium/c05-hr-culture/performance-review-facilitator/prompt.md` | `execution/results/c05-hr-culture/performance-review-facilitator/execution-result.md` |
| recruiter-talent-acquisition-leader | `prompts/stremiium/c05-hr-culture/recruiter-talent-acquisition-leader/prompt.md` | `execution/results/c05-hr-culture/recruiter-talent-acquisition-leader/execution-result.md` |
| training-curriculum-designer | `prompts/stremiium/c05-hr-culture/training-curriculum-designer/prompt.md` | `execution/results/c05-hr-culture/training-curriculum-designer/execution-result.md` |
| wellness-officer | `prompts/stremiium/c05-hr-culture/wellness-officer/prompt.md` | `execution/results/c05-hr-culture/wellness-officer/execution-result.md` |

**Research:** `docs/program/councils/c05-hr-people/`, `docs/program/delivery/`, `docs/archive-second-versions/source-bundles/`  
**Skills:** `derekross-executive-assistant/`, `hr-culture/`, `talent-acquisition/`, `org-design/`, `learning-and-development/`  
**Workflows:** `the-guardian-workflows.md`, `.stremiium/workflows/inter-agent-workflows/`  
**Response folder:** `execution/results/c05-hr-culture/<agent>/` + `execution/results/c05-hr-culture/<agent>/people-response.md`

### C06 — Engineering-Infrastructure (Tier 1, Strategic)
**Captain:** `C06-chief-technology-officer.agent.md`  
**Department:** `c06-engineering-infrastructure`  
**Agents & Master Prompts:**
| Agent | Prompt Path | Execution Result Path |
|---|---|---|
| captain | `prompts/stremiium/c06-hardware-enable/captain/prompt.md` | `execution/results/c06-engineering-infrastructure/captain/execution-result.md` |
| bios-bricking-mitigator | `prompts/stremiium/c06-hardware-enable/bios-bricking-mitigator/prompt.md` | `execution/results/c06-engineering-infrastructure/bios-bricking-mitigator/execution-result.md` |
| chief-hardware-architect | `prompts/stremiium/c06-hardware-enable/chief-hardware-architect/prompt.md` | `execution/results/c06-engineering-infrastructure/chief-hardware-architect/execution-result.md` |
| gpu-vram-allocator | `prompts/stremiium/c06-hardware-enable/gpu-vram-allocator/prompt.md` | `execution/results/c06-engineering-infrastructure/gpu-vram-allocator/execution-result.md` |
| hardware-failure-responder | `prompts/stremiium/c06-hardware-enable/hardware-failure-responder/prompt.md` | `execution/results/c06-engineering-infrastructure/hardware-failure-responder/execution-result.md` |
| hardware-lifecycle-manager | `prompts/stremiium/c06-hardware-enable/hardware-lifecycle-manager/prompt.md` | `execution/results/c06-engineering-infrastructure/hardware-lifecycle-manager/execution-result.md` |
| memory-scheduler | `prompts/stremiium/c06-hardware-enable/memory-scheduler/prompt.md` | `execution/results/c06-engineering-infrastructure/memory-scheduler/execution-result.md` |
| network-architect | `prompts/stremiium/c06-hardware-enable/network-architect/prompt.md` | `execution/results/c06-engineering-infrastructure/network-architect/execution-result.md` |
| power-thermal-manager | `prompts/stremiium/c06-hardware-enable/power-thermal-manager/prompt.md` | `execution/results/c06-engineering-infrastructure/power-thermal-manager/execution-result.md` |
| storage-layout-designer | `prompts/stremiium/c06-hardware-enable/storage-layout-designer/prompt.md` | `execution/results/c06-engineering-infrastructure/storage-layout-designer/execution-result.md` |

**Research:** `docs/architecture/platform-design/`, `docs/engineering/rea-toolkit/`, `docs/archive-second-versions/tooling-scratch/`  
**Skills:** `k8s-security-policies/`, `devops-engineer/`, `infrastructure-engineer/`, `server-management/`, `aws-architecture/`, `kubernetes/`  
**Workflows:** `the-engineer-workflows.md`, `.stremiium/workflows/algorithms/`  
**Response folder:** `execution/results/c06-engineering-infrastructure/<agent>/` + `execution/results/c06-engineering-infrastructure/<agent>/infrastructure-response.md`

### C07 — Sales-Business-Development (Tier 1, Strategic)
**Captain:** `C07-rainmaker-captain.agent.md`  
**Departments:** `c07-sales-business-development`, `c07-sales-revenue`  
**Agents & Master Prompts:**
| Agent | Prompt Path | Execution Result Path |
|---|---|---|
| captain | `prompts/stremiium/c07-sales-revenue/captain/prompt.md` | `execution/results/c07-sales-revenue/captain/execution-result.md` |
| channel-partner-manager | `prompts/stremiium/c07-sales-revenue/channel-partner-manager/prompt.md` | `execution/results/c07-sales-revenue/channel-partner-manager/execution-result.md` |
| chief-revenue-officer | `prompts/stremiium/c07-sales-revenue/chief-revenue-officer/prompt.md` | `execution/results/c07-sales-revenue/chief-revenue-officer/execution-result.md` |
| customer-success-lead | `prompts/stremiium/c07-sales-revenue/customer-success-lead/prompt.md` | `execution/results/c07-sales-revenue/customer-success-lead/execution-result.md` |
| pricing-analyst | `prompts/stremiium/c07-sales-revenue/pricing-analyst/prompt.md` | `execution/results/c07-sales-revenue/pricing-analyst/execution-result.md` |
| revenue-analytics-lead | `prompts/stremiium/c07-sales-revenue/revenue-analytics-lead/prompt.md` | `execution/results/c07-sales-revenue/revenue-analytics-lead/execution-result.md` |
| revenue-forecaster | `prompts/stremiium/c07-sales-revenue/revenue-forecaster/prompt.md` | `execution/results/c07-sales-revenue/revenue-forecaster/execution-result.md` |
| revenue-operations-manager | `prompts/stremiium/c07-sales-revenue/revenue-operations-manager/prompt.md` | `execution/results/c07-sales-revenue/revenue-operations-manager/execution-result.md` |
| sales-enablement-lead | `prompts/stremiium/c07-sales-revenue/sales-enablement-lead/prompt.md` | `execution/results/c07-sales-revenue/sales-enablement-lead/execution-result.md` |
| sales-strategist | `prompts/stremiium/c07-sales-revenue/sales-strategist/prompt.md` | `execution/results/c07-sales-revenue/sales-strategist/execution-result.md` |

**Research:** `docs/program/delivery/`, `docs/deliverables/charts/`, `docs/research/landscape/03-neobank-digital-competitors/`, `docs/archive-second-versions/dossiers-archive/`  
**Skills:** `sales-expert/`, `revenue-operations/`, `business-development/`, `pricing-strategy/`, `partner-management/`  
**Workflows:** `the-rainmaker-workflows.md`, `.stremiium/workflows/delegation-patterns.md`  
**Response folder:** `execution/results/c07-sales-revenue/<agent>/` + `execution/results/c07-sales-revenue/<agent>/revenue-response.md`

### C08 — Design-Creative (Tier 1, Strategic)
**Captain:** `C08-chief-design-officer.agent.md`  
**Department:** `c08-design-creative`  
**Agents & Master Prompts:**
| Agent | Prompt Path | Execution Result Path |
|---|---|---|
| captain | `prompts/stremiium/c08-design-creative/captain/prompt.md` | `execution/results/c08-design-creative/captain/execution-result.md` |
| accessibility-design-lead | `prompts/stremiium/c08-design-creative/accessibility-design-lead/prompt.md` | `execution/results/c08-design-creative/accessibility-design-lead/execution-result.md` |
| brand-manager | `prompts/stremiium/c08-design-creative/brand-manager/prompt.md` | `execution/results/c08-design-creative/brand-manager/execution-result.md` |
| chief-design-officer | `prompts/stremiium/c08-design-creative/chief-design-officer/prompt.md` | `execution/results/c08-design-creative/chief-design-officer/execution-result.md` |
| dashboard-designer | `prompts/stremiium/c08-design-creative/dashboard-designer/prompt.md` | `execution/results/c08-design-creative/dashboard-designer/execution-result.md` |
| design-researcher | `prompts/stremiium/c08-design-creative/design-researcher/prompt.md` | `execution/results/c08-design-creative/design-researcher/execution-result.md` |
| design-system-architect | `prompts/stremiium/c08-design-creative/design-system-architect/prompt.md` | `execution/results/c08-design-creative/design-system-architect/execution-result.md` |
| icon-illustration-lead | `prompts/stremiium/c08-design-creative/icon-illustration-lead/prompt.md` | `execution/results/c08-design-creative/icon-illustration-lead/execution-result.md` |
| theme-designer | `prompts/stremiium/c08-design-creative/theme-designer/prompt.md` | `execution/results/c08-design-creative/theme-designer/execution-result.md` |
| ui-ux-designer | `prompts/stremiium/c08-design-creative/ui-ux-designer/prompt.md` | `execution/results/c08-design-creative/ui-ux-designer/execution-result.md` |

**Research:** `docs/deliverables/charts/`, `docs/program/councils/c08-design-creative/`, `docs/archive-second-versions/source-bundles/`  
**Skills:** `ui-ux-design/`, `design-system/`, `brand-manager/`, `accessibility-compliance/`, `figma-to-code/`, `wireframing/`  
**Workflows:** `the-artisan-workflows.md`, `.stremiium/workflows/design-review/`  
**Response folder:** `execution/results/c08-design-creative/<agent>/` + `execution/results/c08-design-creative/<agent>/design-response.md`

### C09 — Marketing-Communications (Tier 1, Strategic)
**Captain:** `C09-chief-marketing-officer.agent.md`  
**Departments:** `c09-marketing-brand`, `c09-marketing-communications`, `c09-marketing-growth`  
**Agents & Master Prompts:**
| Agent | Prompt Path | Execution Result Path |
|---|---|---|
| captain | `prompts/stremiium/c09-marketing-communications/captain/prompt.md` | `execution/results/c09-marketing-communications/captain/execution-result.md` |
| analytics-reporting-lead | `prompts/stremiium/c09-marketing-communications/analytics-reporting-lead/prompt.md` | `execution/results/c09-marketing-communications/analytics-reporting-lead/execution-result.md` |
| chief-marketing-officer | `prompts/stremiium/c09-marketing-communications/chief-marketing-officer/prompt.md` | `execution/results/c09-marketing-communications/chief-marketing-officer/execution-result.md` |
| community-manager | `prompts/stremiium/c09-marketing-communications/community-manager/prompt.md` | `execution/results/c09-marketing-communications/community-manager/execution-result.md` |
| content-strategist | `prompts/stremiium/c09-marketing-communications/content-strategist/prompt.md` | `execution/results/c09-marketing-communications/content-strategist/execution-result.md` |
| copywriter | `prompts/stremiium/c09-marketing-communications/copywriter/prompt.md` | `execution/results/c09-marketing-communications/copywriter/execution-result.md` |
| email-marketing-lead | `prompts/stremiium/c09-marketing-communications/email-marketing-lead/prompt.md` | `execution/results/c09-marketing-communications/email-marketing-lead/execution-result.md` |
| public-relations-lead | `prompts/stremiium/c09-marketing-communications/public-relations-lead/prompt.md` | `execution/results/c09-marketing-communications/public-relations-lead/execution-result.md` |
| social-media-manager | `prompts/stremiium/c09-marketing-communications/social-media-manager/prompt.md` | `execution/results/c09-marketing-communications/social-media-manager/execution-result.md` |

**Research:** `docs/deliverables/summaries/`, `docs/program/delivery/`, `docs/research/landscape/03-neobank-digital-competitors/`, `docs/archive-second-versions/dossiers-archive/`  
**Skills:** `content-strategy/`, `copywriting/`, `social-media-manager/`, `email-marketing/`, `public-relations/`, `brand-positioning/`  
**Workflows:** `the-amplifier-workflows.md`, `.stremiium/workflows/content-strategy/`  
**Response folder:** `execution/results/c09-marketing-communications/<agent>/` + `execution/results/c09-marketing-communications/<agent>/campaign-response.md`

### C10 — Finance-CFO (Tier 1, Strategic)
**Captain:** `C10-chief-financial-officer.agent.md`  
**Departments:** `c10-finance-cfo`, `c10-finance-investor-relations`, `c10-algo-trading`  
**Agents & Master Prompts:**
| Agent | Prompt Path | Execution Result Path |
|---|---|---|
| captain | `prompts/stremiium/c10-finance-cfo/captain/prompt.md` | `execution/results/c10-finance-cfo/captain/execution-result.md` |
| budget-owner | `prompts/stremiium/c10-finance-cfo/budget-owner/prompt.md` | `execution/results/c10-finance-cfo/budget-owner/execution-result.md` |
| chief-financial-officer | `prompts/stremiium/c10-finance-cfo/chief-financial-officer/prompt.md` | `execution/results/c10-finance-cfo/chief-financial-officer/execution-result.md` |
| expense-management-lead | `prompts/stremiium/c10-finance-cfo/expense-management-lead/prompt.md` | `execution/results/c10-finance-cfo/expense-management-lead/execution-result.md` |
| financial-analyst | `prompts/stremiium/c10-finance-cfo/financial-analyst/prompt.md` | `execution/results/c10-finance-cfo/financial-analyst/execution-result.md` |
| financial-controller | `prompts/stremiium/c10-finance-cfo/financial-controller/prompt.md` | `execution/results/c10-finance-cfo/financial-controller/execution-result.md` |
| financial-planning-analyst | `prompts/stremiium/c10-finance-cfo/financial-planning-analyst/prompt.md` | `execution/results/c10-finance-cfo/financial-planning-analyst/execution-result.md` |
| financial-reporting-lead | `prompts/stremiium/c10-finance-cfo/financial-reporting-lead/prompt.md` | `execution/results/c10-finance-cfo/financial-reporting-lead/execution-result.md` |
| tax-compliance-lead | `prompts/stremiium/c10-finance-cfo/tax-compliance-lead/prompt.md` | `execution/results/c10-finance-cfo/tax-compliance-lead/execution-result.md` |
| treasury-manager | `prompts/stremiium/c10-finance-cfo/treasury-manager/prompt.md` | `execution/results/c10-finance-cfo/treasury-manager/execution-result.md` |

**Research:** `docs/deliverables/synthesis/`, `docs/program/plan/`, `docs/research/landscape/01-sa-banking-landscape/`, `docs/archive-second-versions/dossiers-archive/banks-*/`  
**Skills:** `financial-analysis-agent/`, `financial-deep-research/`, `financial-statements/`, `creating-financial-models/`, `analyzing-financial-statements/`, `tax-compliance/`  
**Workflows:** `the-capitalist-workflows.md`, `.stremiium/workflows/financial-planning/`  
**Response folder:** `execution/results/c10-finance-cfo/<agent>/` + `execution/results/c10-finance-cfo/<agent>/financial-response.md`

### C11 — Dev-Engineering (Tier 2, Specialized Technical)
**Captain:** `C11-dev-engineering-captain.agent.md`  
**Department:** `c11-dev-engineering`  
**Agents & Master Prompts:**
| Agent | Prompt Path | Execution Result Path |
|---|---|---|
| captain | `prompts/stremiium/c11-dev-engineering/captain/prompt.md` | `execution/results/c11-dev-engineering/captain/execution-result.md` |
| api-integration-engineer | `prompts/stremiium/c11-dev-engineering/api-integration-engineer/prompt.md` | `execution/results/c11-dev-engineering/api-integration-engineer/execution-result.md` |
| backend-engineer | `prompts/stremiium/c11-dev-engineering/backend-engineer/prompt.md` | `execution/results/c11-dev-engineering/backend-engineer/execution-result.md` |
| chief-engineering-officer | `prompts/stremiium/c11-dev-engineering/chief-engineering-officer/prompt.md` | `execution/results/c11-dev-engineering/chief-engineering-officer/execution-result.md` |
| data-engineer | `prompts/stremiium/c11-dev-engineering/data-engineer/prompt.md` | `execution/results/c11-dev-engineering/data-engineer/execution-result.md` |
| devops-engineer | `prompts/stremiium/c11-dev-engineering/devops-engineer/prompt.md` | `execution/results/c11-dev-engineering/devops-engineer/execution-result.md` |
| frontend-engineer | `prompts/stremiium/c11-dev-engineering/frontend-engineer/prompt.md` | `execution/results/c11-dev-engineering/frontend-engineer/execution-result.md` |
| infrastructure-engineer | `prompts/stremiium/c11-dev-engineering/infrastructure-engineer/prompt.md` | `execution/results/c11-dev-engineering/infrastructure-engineer/execution-result.md` |
| model-router | `prompts/stremiium/c11-dev-engineering/model-router/prompt.md` | `execution/results/c11-dev-engineering/model-router/execution-result.md` |
| qa-test-engineer | `prompts/stremiium/c11-dev-engineering/qa-test-engineer/prompt.md` | `execution/results/c11-dev-engineering/qa-test-engineer/execution-result.md` |
| security-engineer | `prompts/stremiium/c11-dev-engineering/security-engineer/prompt.md` | `execution/results/c11-dev-engineering/security-engineer/execution-result.md` |
| technical-writer | `prompts/stremiium/c11-dev-engineering/technical-writer/prompt.md` | `execution/results/c11-dev-engineering/technical-writer/execution-result.md` |

**Research:** `docs/architecture/target-system/`, `docs/engineering/reverse-engineering/`, `docs/program/tbs/T1-infrastructure-setup/`, `docs/archive-second-versions/extracted-snapshots/`  
**Skills:** `backend-development/`, `frontend-code-review/`, `api-design-principles/`, `devops-engineer/`, `qa-test-engineer/`, `nodejs-backend-patterns/`, `nextjs-best-practices/`  
**Workflows:** `the-engineer-workflows.md`, `.stremiium/workflows/agent-workflows/`  
**Response folder:** `execution/results/c11-dev-engineering/<agent>/` + `execution/results/c11-dev-engineering/<agent>/engineering-response.md`

### C12 — Cybersecurity-Intel (Tier 2, Specialized Technical)
**Captain:** `C12-cybersecurity-intel-captain.agent.md`  
**Department:** `c12-cybersecurity-intel`  
**Agents & Master Prompts:**
| Agent | Prompt Path | Execution Result Path |
|---|---|---|
| captain | `prompts/stremiium/c12-cybersecurity-intel/captain/prompt.md` | `execution/results/c12-cybersecurity-intel/captain/execution-result.md` |
| chief-infosec-officer | `prompts/stremiium/c12-cybersecurity-intel/chief-infosec-officer/prompt.md` | `execution/results/c12-cybersecurity-intel/chief-infosec-officer/execution-result.md` |
| crypto-security-engineer | `prompts/stremiium/c12-cybersecurity-intel/crypto-security-engineer/prompt.md` | `execution/results/c12-cybersecurity-intel/crypto-security-engineer/execution-result.md` |
| identity-access-manager | `prompts/stremiium/c12-cybersecurity-intel/identity-access-manager/prompt.md` | `execution/results/c12-cybersecurity-intel/identity-access-manager/execution-result.md` |
| incident-response-lead | `prompts/stremiium/c12-cybersecurity-intel/incident-response-lead/prompt.md` | `execution/results/c12-cybersecurity-intel/incident-response-lead/execution-result.md` |
| security-architect | `prompts/stremiium/c12-cybersecurity-intel/security-architect/prompt.md` | `execution/results/c12-cybersecurity-intel/security-architect/execution-result.md` |
| security-awareness-lead | `prompts/stremiium/c12-cybersecurity-intel/security-awareness-lead/prompt.md` | `execution/results/c12-cybersecurity-intel/security-awareness-lead/execution-result.md` |
| soc-analyst | `prompts/stremiium/c12-cybersecurity-intel/soc-analyst/prompt.md` | `execution/results/c12-cybersecurity-intel/soc-analyst/execution-result.md` |
| threat-intelligence-analyst | `prompts/stremiium/c12-cybersecurity-intel/threat-intelligence-analyst/prompt.md` | `execution/results/c12-cybersecurity-intel/threat-intelligence-analyst/execution-result.md` |
| vulnerability-manager | `prompts/stremiium/c12-cybersecurity-intel/vulnerability-manager/prompt.md` | `execution/results/c12-cybersecurity-intel/vulnerability-manager/execution-result.md` |

**Research:** `docs/architecture/platform-design/security/`, `docs/engineering/reverse-engineering/`, `docs/archive-second-versions/extracted-snapshots/`, `docs/governance/`  
**Skills:** `cybersecurity/`, `security-compliance-audit/`, `threat-intelligence/`, `incident-response/`, `vulnerability-management/`, `openai-security-threat-model/`  
**Workflows:** `security-review-workflows.md`, `.stremiium/governance/rules/`  
**Response folder:** `execution/results/c12-cybersecurity-intel/<agent>/` + `execution/results/c12-cybersecurity-intel/<agent>/security-response.md`

### C13 — Web3-Finance (Tier 2, Specialized Technical)
**Captain:** `C13-web3-finance-captain.agent.md`  
**Department:** `c13-web3-finance`  
**Agents & Master Prompts:**
| Agent | Prompt Path | Execution Result Path |
|---|---|---|
| captain | `prompts/stremiium/c13-web3-token/captain/prompt.md` | `execution/results/c13-web3-finance/captain/execution-result.md` |
| casp-compliance-officer | `prompts/stremiium/c13-web3-token/casp-compliance-officer/prompt.md` | `execution/results/c13-web3-finance/casp-compliance-officer/execution-result.md` |
| chief-token-officer | `prompts/stremiium/c13-web3-token/chief-token-officer/prompt.md` | `execution/results/c13-web3-finance/chief-token-officer/execution-result.md` |
| cross-chain-engineer | `prompts/stremiium/c13-web3-token/cross-chain-engineer/prompt.md` | `execution/results/c13-web3-finance/cross-chain-engineer/execution-result.md` |
| defi-integration-engineer | `prompts/stremiium/c13-web3-token/defi-integration-engineer/prompt.md` | `execution/results/c13-web3-finance/defi-integration-engineer/execution-result.md` |
| nft-engineer | `prompts/stremiium/c13-web3-token/nft-engineer/prompt.md` | `execution/results/c13-web3-finance/nft-engineer/execution-result.md` |
| smart-contract-engineer | `prompts/stremiium/c13-web3-token/smart-contract-engineer/prompt.md` | `execution/results/c13-web3-finance/smart-contract-engineer/execution-result.md` |
| token-governance-lead | `prompts/stremiium/c13-web3-token/token-governance-lead/prompt.md` | `execution/results/c13-web3-finance/token-governance-lead/execution-result.md` |
| tokenomics-designer | `prompts/stremiium/c13-web3-token/tokenomics-designer/prompt.md` | `execution/results/c13-web3-finance/tokenomics-designer/execution-result.md` |
| wallet-engineer | `prompts/stremiium/c13-web3-token/wallet-engineer/prompt.md` | `execution/results/c13-web3-finance/wallet-engineer/execution-result.md` |

**Research:** `docs/architecture/target-system/web3-bridge/`, `docs/research/dossiers/06-global-web3-fan-engagement/`, `docs/research/dossiers/04-sa-casps-crypto-exchanges/`, `docs/archive-second-versions/dossiers-archive/crypto-trading-*/`  
**Skills:** `blockchain-developer/`, `solidity-security/`, `smart-contract-engineer/`, `web3-frontend/`, `defi-protocol-templates/`, `aiken-smart-contracts/`  
**Workflows:** `web3-integration-workflows.md`, `.stremiium/workflows/blockchain/`  
**Response folder:** `execution/results/c13-web3-finance/<agent>/` + `execution/results/c13-web3-finance/<agent>/web3-response.md`

### C14 — Customer-Success (Tier 3, Customer & Product)
**Captain:** `C14-customer-success-captain.agent.md`  
**Department:** `c14-customer-success`  
**Agents & Master Prompts:**
| Agent | Prompt Path | Execution Result Path |
|---|---|---|
| captain | `prompts/stremiium/c14-customer-success/captain/prompt.md` | `execution/results/c14-customer-success/captain/execution-result.md` |
| banking-operations-lead | `prompts/stremiium/c16-banking-fintech/banking-operations-lead/prompt.md` | `execution/results/c14-customer-success/banking-operations-lead/execution-result.md` |
| banking-partnership-lead | `prompts/stremiium/c16-banking-fintech/banking-partnership-lead/prompt.md` | `execution/results/c14-customer-success/banking-partnership-lead/execution-result.md` |
| chief-banking-officer-c16 | `prompts/stremiium/c16-banking-fintech/chief-banking-officer-c16/prompt.md` | `execution/results/c14-customer-success/chief-banking-officer-c16/execution-result.md` |
| custody-engineer | `prompts/stremiium/c16-banking-fintech/custody-engineer/prompt.md` | `execution/results/c14-customer-success/custody-engineer/execution-result.md` |
| dispute-and-support-lead | `prompts/stremiium/c14-customer-success/dispute-and-support/prompt.md` | `execution/results/c14-customer-success/dispute-and-support/execution-result.md` |
| financial-crime-lead | `prompts/stremiium/c16-banking-fintech/financial-crime-lead/prompt.md` | `execution/results/c14-customer-success/financial-crime-lead/execution-result.md` |
| onboarding-and-readiness-lead | `prompts/stremiium/c14-customer-success/onboarding-and-readiness/prompt.md` | `execution/results/c14-customer-success/onboarding-and-readiness/execution-result.md` |
| payment-systems-lead | `prompts/stremiium/c16-banking-fintech/payment-systems-lead/prompt.md` | `execution/results/c14-customer-success/payment-systems-lead/execution-result.md` |
| regulatory-reporting-lead | `prompts/stremiium/c16-banking-fintech/regulatory-reporting-lead/prompt.md` | `execution/results/c14-customer-success/regulatory-reporting-lead/execution-result.md` |
| travel-rule-engineer | `prompts/stremiium/c16-banking-fintech/travel-rule-engineer/prompt.md` | `execution/results/c14-customer-success/travel-rule-engineer/execution-result.md` |

**Research:** `docs/deliverables/summaries/`, `docs/program/councils/c14-customer-success/`, `docs/research/dossiers/01-sa-traditional-banking/`, `docs/archive-second-versions/dossiers-archive/banks-*/`  
**Skills:** `customer-success-manager/`, `client-retention/`, `onboarding-specialist/`, `dispute-resolution/`, `customer-support-lead/`  
**Workflows:** `customer-success-workflows.md`, `.stremiium/workflows/inter-agent-workflows/`  
**Response folder:** `execution/results/c14-customer-success/<agent>/` + `execution/results/c14-customer-success/<agent>/customer-response.md`

### C15 — Product-Management (Tier 3, Customer & Product)
**Captain:** `C15-product-management-captain.agent.md`  
**Departments:** `c15-product-management`, `c15-products-blt`, `c15-products-fan-tokens`  
**Agents & Master Prompts:**
| Agent | Prompt Path | Execution Result Path |
|---|---|---|
| captain | `prompts/stremiium/c15-product-management/captain/prompt.md` | `execution/results/c15-product-management/captain/execution-result.md` |
| feature-prioritization-lead | `prompts/stremiium/c15-product-management/feature-prioritization-lead/prompt.md` | `execution/results/c15-product-management/feature-prioritization-lead/execution-result.md` |
| product-analyst | `prompts/stremiium/c15-product-management/product-analyst/prompt.md` | `execution/results/c15-product-management/product-analyst/execution-result.md` |
| product-compliance-lead | `prompts/stremiium/c15-product-management/product-compliance-lead/prompt.md` | `execution/results/c15-product-management/product-compliance-lead/execution-result.md` |
| product-marketing-lead | `prompts/stremiium/c15-product-management/product-marketing-lead/prompt.md` | `execution/results/c15-product-management/product-marketing-lead/execution-result.md` |
| product-operations-lead | `prompts/stremiium/c15-product-management/product-operations-lead/prompt.md` | `execution/results/c15-product-management/product-operations-lead/execution-result.md` |
| product-owner-aios | `prompts/stremiium/c15-product-management/product-owner-aios/prompt.md` | `execution/results/c15-product-management/product-owner-aios/execution-result.md` |
| product-owner-neobank | `prompts/stremiium/c15-product-management/product-owner-neobank/prompt.md` | `execution/results/c15-product-management/product-owner-neobank/execution-result.md` |
| user-research-lead | `prompts/stremiium/c15-product-management/user-research-lead/prompt.md` | `execution/results/c15-product-management/user-research-lead/execution-result.md` |

**Research:** `docs/program/councils/c15-product-management/`, `docs/deliverables/synthesis/`, `docs/research/dossiers/03-sa-neobanks-digital/`, `docs/archive-second-versions/dossiers-archive/neobanks-*/`  
**Skills:** `product-management/`, `product-strategy/`, `user-research/`, `product-analytics/`, `roadmap-planning/`  
**Workflows:** `product-management-workflows.md`, `.stremiium/workflows/decision-frameworks/`  
**Response folder:** `execution/results/c15-product-management/<agent>/` + `execution/results/c15-product-management/<agent>/product-response.md`

### C16 — Banking-Fintech (Tier 3, Customer & Product)
**Captain:** `C16-banking-fintech-captain.agent.md`  
**Departments:** `c16-banking-fintech`, `c16-website-product`  
**Agents & Master Prompts:**
| Agent | Prompt Path | Execution Result Path |
|---|---|---|
| captain | `prompts/stremiium/c16-banking-fintech/captain/prompt.md` | `execution/results/c16-banking-fintech/captain/execution-result.md` |
| banking-operations-lead | `prompts/stremiium/c16-banking-fintech/banking-operations-lead/prompt.md` | `execution/results/c16-banking-fintech/banking-operations-lead/execution-result.md` |
| banking-partnership-lead | `prompts/stremiium/c16-banking-fintech/banking-partnership-lead/prompt.md` | `execution/results/c16-banking-fintech/banking-partnership-lead/execution-result.md` |
| chief-banking-officer-c16 | `prompts/stremiium/c16-banking-fintech/chief-banking-officer-c16/prompt.md` | `execution/results/c16-banking-fintech/chief-banking-officer-c16/execution-result.md` |
| custody-engineer | `prompts/stremiium/c16-banking-fintech/custody-engineer/prompt.md` | `execution/results/c16-banking-fintech/custody-engineer/execution-result.md` |
| financial-crime-lead | `prompts/stremiium/c16-banking-fintech/financial-crime-lead/prompt.md` | `execution/results/c16-banking-fintech/financial-crime-lead/execution-result.md` |
| payment-systems-lead | `prompts/stremiium/c16-banking-fintech/payment-systems-lead/prompt.md` | `execution/results/c16-banking-fintech/payment-systems-lead/execution-result.md` |
| regulatory-reporting-lead | `prompts/stremiium/c16-banking-fintech/regulatory-reporting-lead/prompt.md` | `execution/results/c16-banking-fintech/regulatory-reporting-lead/execution-result.md` |
| travel-rule-engineer | `prompts/stremiium/c16-banking-fintech/travel-rule-engineer/prompt.md` | `execution/results/c16-banking-fintech/travel-rule-engineer/execution-result.md` |

**Research:** `docs/architecture/target-system/core-banking/`, `docs/architecture/target-system/payment-rails/`, `docs/research/dossiers/01-sa-traditional-banking/`, `docs/archive-second-versions/dossiers-archive/banks-*/`  
**Skills:** `banking-expert/`, `fintech-banking/`, `payment-rails/`, `core-banking/`, `iso-20022/`, `bankservafrica/`  
**Workflows:** `banking-fintech-workflows.md`, `.stremiium/workflows/payments/`  
**Response folder:** `execution/results/c16-banking-fintech/<agent>/` + `execution/results/c16-banking-fintech/<agent>/banking-response.md`

### Orchestration (SC-MASTER-001)
**Agents & Master Prompts:**
| Agent | Prompt Path | Execution Result Path |
|---|---|---|
| sparkling-curious | `prompts/stremiium/orchestration/sparkling-curious/prompt.md` | `execution/results/orchestration/sparkling-curious/execution-result.md` |
| sc-task-decomposition | `prompts/stremiium/orchestration/sc-task-decomposition/prompt.md` | `execution/results/orchestration/sc-task-decomposition/execution-result.md` |
| sc-council-liaison | `prompts/stremiium/orchestration/sc-council-liaison/prompt.md` | `execution/results/orchestration/sc-council-liaison/execution-result.md` |
| sc-regulatory-monitor | `prompts/stremiium/orchestration/sc-regulatory-monitor/prompt.md` | `execution/results/orchestration/sc-regulatory-monitor/execution-result.md` |
| sc-ecosystem-health | `prompts/stremiium/orchestration/sc-ecosystem-health/prompt.md` | `execution/results/orchestration/sc-ecosystem-health/execution-result.md` |

**Research:** All `docs/` zones + `docs/archive-second-versions/` + `.stremiium/governance/workflow-routing.md` + `.stremiium/config/council-department-mapping.json`  
**Skills:** `multi-agent-orchestration/`, `task-decomposition/`, `result-synthesis/`, `conflict-resolution/`  
**Workflows:** `sparkling-curious-workflows.md`, `.stremiium/workflows/inter-agent-workflows/`  
**Response folder:** `execution/results/orchestration/<agent>/` + `execution/results/orchestration/<agent>/orchestration-response.md`

### NeoBank (37 prompts across 16 departments)
**Departments:** legal, operations, knowledge-base, strategy, hr, engineering, sales, design, marketing, finance, dev-engineering, security, web3, customer-success, product, banking  
**Each NeoBank prompt** answers its `prompt.md` at `prompts/neobank/<dept>/<prompt-name>/prompt.md`  
**Execution result** at `execution/results/<council>/<prompt-name>/execution-result.md`  
**Research:** All `docs/` zones, especially `docs/research/dossiers/`, `docs/architecture/target-system/`, `docs/archive-second-versions/`  
**Response folder:** `execution/results/<council>/<prompt-name>/` + `execution/results/<council>/<prompt-name>/neobank-response.md`

## 5. Response Folder & File Structure (per agent)

Each agent must create:

```
execution/results/<council>/<agent-name>/
├── execution-result.md          # Primary answer to the Master Prompt
├── research-sources.md          # List of docs/ and archive files consulted
├── skills-applied.md            # List of .stremiium/ skills used
├── workflows-applied.md         # List of .stremiium/ workflows followed
├── compliance-gate.md           # C01/C12/C16 sign-off status (if applicable)
├── model-lock-verification.md   # Confirmation that `auto` model was used
├── rollback-plan.md             # Rollback steps if answer fails validation
└── escalation-path.md           # Escalation contacts and SLA
```

For NeoBank prompts:
```
execution/results/<council>/<prompt-name>/
├── execution-result.md
├── research-sources.md
├── skills-applied.md
├── workflows-applied.md
├── compliance-gate.md
├── model-lock-verification.md
├── rollback-plan.md
└── escalation-path.md
```

## 6. Research Inputs — All docs/ + archive-second-versions/

Every agent must consult these before writing their answer:

| Zone | Path | Purpose |
|---|---|---|
| Governance | `docs/governance/` | Orchestration plan, execution records, unconsolidated knowledge |
| Program | `docs/program/` | TBS, plan, councils, delivery, skills, templates, workflows |
| Research | `docs/research/` | 17 entity dossiers, landscape, source-library, synthesis |
| Architecture | `docs/architecture/` | target-system + platform-design specs |
| Engineering | `docs/engineering/` | REA toolkit, reverse-engineering playbooks |
| Deliverables | `docs/deliverables/` | Charts, summaries, synthesis |
| Archive (second versions) | `docs/archive-second-versions/` | Canonical backups, dossiers-archive, extracted-snapshots, source-bundles, tooling-scratch |

Each agent's `research-sources.md` must list every file consulted with `[S#]` references per the Sparkling Curious prompt §7.

## 7. .stremiium/ Usage Per Council

Each agent must reference these `.stremiium/` artifacts:

| Artifact Type | Path | Usage |
|---|---|---|
| Workflow routing | `.stremiium/governance/workflow-routing.md` | Delegation rules R1–R6, escalation SLAs |
| Council mapping | `.stremiium/config/council-department-mapping.json` | Council → department → agent routing |
| Council captain | `.stremiium/agents/council-agents/Cnn-*.agent.md` | Captain authority and delegation scope |
| Department agents | `.stremiium/agents/department-agents/cNN-*/` | Agent roster and capabilities |
| Coordinators | `.stremiium/agents/coordinators/CRD-*.agent.md` | Cross-cutting gate enforcement |
| Meta-councils | `.stremiium/agents/meta-councils/META-*.agent.md` | Advisory recommendations |
| Executive | `.stremiium/agents/executive/EXEC-council-ceo.agent.md` | CEO proxy governance |
| Specialist agents | `.stremiium/agents/council-agents/specialists/SPEC-*.agent.md` | Technical specialist capabilities |
| Skills | `.stremiium/skills/*/` | Domain-specific skill application |
| Workflows | `.stremiium/workflows/*/` | Step-by-step procedures |
| Config | `.stremiium/config/*/` | Machine-readable registries |
| Policies | `.stremiium/policies/*/` | Security, identity, approval controls |
| Contracts | `.stremiium/contracts/*/` | Task, message, graph, workflow contracts |
| Plans | `.stremiium/plans/*/` | Migration, runtime, rollout plans |
| Audits | `.stremiium/audits/*/` | Inventory, completeness, adversarial findings |
| Runbooks | `.stremiium/runbooks/*/` | Implementation and recovery procedures |
| Evaluations | `.stremiium/evaluations/*/` | Benchmark definitions and results |
| Memory | `.stremiium/memory/*/` | Institutional knowledge persistence |
| Observability | `.stremiium/observability/*/` | Agent health and performance monitoring |
| Recovery | `.stremiium/recovery/*/` | Rollback and incident recovery |

## 8. Model Lock Enforcement

- Every agent must create `model-lock-verification.md` confirming `auto` (kilo-auto/free) usage
- Sparkling Curious audits all model-lock verifications before synthesis
- Any agent violating model lock is quarantined per `rollback-plan.md`
- CRD-resource-cost-governor monitors token budget across 201 agents

## 9. Validation Checklist (per agent answer)

Before handoff to Sparkling Curious, each answer must pass:

- [ ] Research data sources cited with `[S#]` references or marked unverified
- [ ] Evidence grades preserved (`[FACT]`/`[EST]`/`[UNKNOWN]`/`[INFER]`)
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (no substitution)
- [ ] Ask Mode only — no execution language
- [ ] SA regulatory considerations addressed where relevant (FSCA, FICA, POPIA, CARF, FAIS, NCA, Banks Act, SARB)
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (council + executive where applicable)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described
- [ ] No private keys, credentials, or PII in artifact
- [ ] Artifact path inside Stremiium workspace structure

## 10. Rollup & Synthesis (Sparkling Curious)

1. Each department agent submits `execution-result.md` to department lead
2. Department lead reviews and forwards to council captain
3. Council captain reviews, applies compliance gates, forwards to Sparkling Curious
4. Sparkling Curious synthesizes all 201 answers, de-duplicates conflicts (per workflow-routing.md R3/R5)
5. Cross-council conflicts arbitrated <24h per Council Collaboration Matrix
6. Final synthesized artifact handed off for Plan Mode/Code Mode execution

## 11. Task Order (TBS Convention)

Tasks follow Sparkling Curious TBS naming:
- `T1` = Foundation & Setup (research ingestion, model lock verification)
- `T2` = Sparkling Curious & Council Agents (master prompt answers)
- `T3` = Department Agents (specialized execution)
- `T4` = Workspace Services (response folder creation)
- `T5` = Notion Integration & Security (compliance gates, model lock audit)
- `T6` = Configuration & Root Files (registry updates, mapping parity)
- `T7` = Testing & QA (validation checklist execution)
- `T8` = Deployment & Launch (synthesis handoff to Plan/Code Mode)

## 12. Open Questions for Implementation

None — scope confirmed (all 201 prompts across 16 councils + orchestration). Plan is implementation-ready.

---

**End of plan.**