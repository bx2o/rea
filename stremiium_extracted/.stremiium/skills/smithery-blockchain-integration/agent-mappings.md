---
description: 'Agent Skill Mappings - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Agent Skill Mappings

This document maps Smithery skills to Stremiium agents and subagents for enhanced capabilities.

## Sparkling Curious (Architecture Parent)

**Core Skills:**

- qodex-ai/ai-agent-skills@multi-agent-orchestration
- wshobson/workflow-orchestration-patterns
- anthropics/knowledge-work-plugins@knowledge-synthesis

**Purpose:** Orchestrates complex multi-agent workflows and synthesizes results across departments.

## The Librarian (Administrative Agent)

**Core Skills:**

- davila7/claude-code-templates@notion-knowledge-capture
- anthropics/knowledge-work-plugins@knowledge-synthesis
- openclaw/notion
- wshobson/data-storytelling

**Subagents:**

- The Archivist: notion-knowledge-capture, knowledge-synthesis
- The Auditor: compliance skills, security-compliance

**Purpose:** Manages knowledge capture, documentation, and compliance.

## The Strategist (Business Management Agent)

**Core Skills:**

- refoundai/lenny-skills@defining-product-vision
- refoundai/lenny-skills@problem-definition
- wshobson/competitive-landscape
- anthropics/interactive-dashboard-builder
- wshobson/data-storytelling

**Subagents:**

- The Diplomat: competitive-landscape, problem-definition
- The Navigator: competitive-landscape, data-storytelling
- The Optimizer: workflow-orchestration-patterns, data-storytelling
- The Scribe: data-storytelling, content-creator

**Purpose:** Strategic planning, market analysis, and business optimization.

## The Guardian (Human Resources Agent)

**Core Skills:**

- davila7/security-compliance
- davila7/senior-security
- anthropics/internal-comms

**Subagents:**

- The Recruiter: internal-comms, content-creator
- The Mediator: internal-comms, problem-definition

**Purpose:** HR management, compliance, and employee relations.

## The Engineer (Operations Agent)

**Core Skills:**

- wshobson/python-performance-optimization
- wshobson/git-advanced-workflows
- wshobson/agents@database-migration
- cloudflare/skills@building-mcp-server-on-cloudflare
- anthropics/skills@mcp-builder

**Subagents:**

- The Steward: python-performance-optimization, database-migration
- The Sentinel: senior-security, security-compliance

**Purpose:** Infrastructure management, performance optimization, and security monitoring.

## The Rainmaker (Sales Agent)

**Core Skills:**

- davila7/marketing-ideas
- davila7/executing-marketing-campaigns
- coreyhaines31/marketingskills@content-strategy
- wshobson/data-storytelling

**Subagents:**

- The Scout: competitive-landscape, marketing-ideas
- The Closer: executing-marketing-campaigns, content-strategy

**Purpose:** Lead generation, sales optimization, and customer acquisition.

## The Artisan (Design Agent)

**Core Skills:**

- nextlevelbuilder/ui-ux-pro-max
- davila7/ui-design-system
- wshobson/tailwind-design-system
- cgyudistira/design-systems
- anthropics/algorithmic-art
- davila7/ux-researcher-designer

**Subagents:**

- The Scribe (Copywriting): content-creator, copywriting
- The Muse: algorithmic-art, ui-ux-pro-max

**Purpose:** Visual design, UI/UX, and creative content production.

## Veritas (Legal Agent)

**Core Skills:**

- davila7/security-compliance
- davila7/senior-security
- pluginagentmarketplace/custom-plugin-blockchain@smart-contract-security

**Subagents:**

- The IP Guardian: security-compliance, senior-security
- The Regulator: security-compliance, senior-security
- The Negotiator: problem-definition, content-strategy

**Purpose:** Legal compliance, intellectual property protection, and regulatory oversight.

## The Amplifier (Marketing PR Agent)

**Core Skills:**

- coreyhaines31/marketingskills@marketing-psychology
- coreyhaines31/marketingskills@content-strategy
- coreyhaines31/marketingskills@copywriting
- coreyhaines31/marketingskills@seo-audit
- davila7/executing-marketing-campaigns

**Subagents:**

- The Hype Man: marketing-psychology, executing-marketing-campaigns
- The Oracle: competitive-landscape, data-storytelling

**Purpose:** Brand amplification, public relations, and marketing campaigns.

## The Capitalist (Financial & Investor Relations Agent)

**Core Skills:**

- anthropics/creating-financial-models
- qodex-ai/ai-agent-skills@financial-analysis-agent
- wshobson/agents@startup-financial-modeling
- anthropics/knowledge-work-plugins@financial-statements
- lerianstudio/ringusing-finops-team

**Subagents:**

- The Forecaster: creating-financial-models, startup-financial-modeling
- The Bookkeeper: financial-statements, financial-analysis-agent

**Purpose:** Financial modeling, investment analysis, and fiscal management.

## The Architect (Technology & Platforms Agent)

**Core Skills:**

- anthropics/skills@mcp-builder
- wshobson/agents@api-design-principles
- wshobson/agents@typescript-advanced-types
- figma/mcp-server-guide@implement-design
- cloudflare/skills@building-mcp-server-on-cloudflare

**Purpose:** Platform architecture, API design, and technology strategy.

## Integration Notes

- Skills are mapped based on relevance to agent responsibilities
- Multiple skills can enhance the same agent for comprehensive capabilities
- Skills run with full agent permissions - monitor usage
- Regular updates ensure security and functionality
- Cross-agent skills (like knowledge-synthesis) support inter-departmental collaboration
