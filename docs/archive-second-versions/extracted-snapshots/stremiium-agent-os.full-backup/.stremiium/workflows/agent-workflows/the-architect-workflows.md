---
description: 'The Architect - Technology & Systems Workflows - Stremiium workflow definitions'
document_type: 'workflow'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
scope: 'Agent workflows'
---

# The Architect - Technology & Systems Workflows

**Agent**: The Architect 🏗️  
**Domain**: System design, infrastructure, technical strategy, API architecture  
**Purpose**: Design scalable system architectures, define infrastructure requirements, create API specifications

---

## Workflow 1: System Architecture Design Workflow

### Trigger

- New system design project initiated
- Existing system needs architectural redesign
- Technical strategy review requested
- Infrastructure requirements gathering

### Process

#### Step 1: Understand Requirements

**Goal**: Gather comprehensive system requirements  
**Actions**:

- Request detailed requirements from stakeholders
- Identify functional requirements (what system must do)
- Identify non-functional requirements (performance, scalability, security)
- Understand current pain points and constraints
- Gather timeline and resource constraints

**Success Criteria**:

- ✅ Requirements documented clearly
- ✅ All constraints identified
- ✅ Stakeholder alignment confirmed

**Duration**: 30-60 minutes

---

#### Step 2: Analyze Existing Systems (if applicable)

**Goal**: Understand current state before redesign  
**Actions**:

- Document current architecture
- Identify technical debt
- Map existing data flows
- Find performance bottlenecks
- Note maintenance challenges

**Success Criteria**:

- ✅ Current state fully documented
- ✅ Issues clearly identified
- ✅ Opportunities for improvement spotted

**Duration**: 1-2 hours

---

#### Step 3: Define Architectural Principles

**Goal**: Establish design guidelines  
**Actions**:

- Define scalability approach (horizontal/vertical)
- Determine consistency model (CAP theorem considerations)
- Establish security boundaries
- Define resilience approach
- Set performance targets

**Success Criteria**:

- ✅ Core principles documented
- ✅ Tradeoffs understood
- ✅ Team alignment on approach

**Duration**: 1 hour

---

#### Step 4: Create System Design

**Goal**: Design the architecture  
**Actions**:

- Create system context diagram
- Define major components/modules
- Document component responsibilities
- Map inter-component communication
- Identify external integrations
- Create deployment architecture

**Tools**:

- Architecture diagrams (C4 model recommended)
- Data flow diagrams
- Deployment topology diagrams
- Technology matrix

**Success Criteria**:

- ✅ Clear architecture diagrams
- ✅ All components defined
- ✅ Communication patterns clear
- ✅ Deployment approach defined

**Duration**: 2-4 hours

---

#### Step 5: Document Technical Specifications

**Goal**: Create implementation guide  
**Actions**:

- Document each component's responsibility
- Define component interfaces
- Specify data models
- Document API contracts
- Define error handling strategy
- Outline monitoring/observability approach

**Success Criteria**:

- ✅ Specifications clear enough for implementation
- ✅ Edge cases considered
- ✅ Error scenarios documented

**Duration**: 2-3 hours

---

#### Step 6: Identify Risks & Mitigation

**Goal**: Proactive risk management  
**Actions**:

- Identify technical risks (single points of failure, performance, security)
- Risk assessment (severity, likelihood)
- Define mitigation strategies
- Identify dependencies and critical paths
- Plan for failure scenarios

**Success Criteria**:

- ✅ Major risks identified
- ✅ Mitigation plans for each
- ✅ Contingencies planned

**Duration**: 1-2 hours

---

#### Step 7: Get Design Review & Approval

**Goal**: Validate design before implementation  
**Actions**:

- Present design to technical team
- Address questions and concerns
- Gather feedback from specialists (security, database, DevOps)
- Iterate based on feedback
- Get sign-off from stakeholders

**Success Criteria**:

- ✅ Team consensus achieved
- ✅ Specialist concerns addressed
- ✅ Stakeholder approval obtained

**Duration**: 1-2 hours

---

#### Step 8: Create Implementation Roadmap

**Goal**: Plan technical executions  
**Actions**:

- Break architecture into implementation phases
- Define dependencies between phases
- Estimate effort per phase
- Identify critical path items
- Plan team allocation
- Create detailed project plan

**Success Criteria**:

- ✅ Phases clearly defined
- ✅ Dependencies mapped
- ✅ Resources allocated
- ✅ Timeline realistic

**Duration**: 1-2 hours

---

### Outcomes

- ✅ System architecture fully designed and documented
- ✅ Implementation roadmap created
- ✅ Team ready to begin development
- ✅ Risks identified and mitigation planned

### Documentation to Create

- [x] Architecture diagrams (C4 context, container, component)
- [x] Technical specifications document
- [x] Data model documentation
- [x] API specifications
- [x] Deployment architecture diagram
- [x] Risk register
- [x] Implementation roadmap

**Typical Duration**: 8-16 hours total (1-2 days)

---

## Workflow 2: API Design Workflow

### Trigger

- New API endpoint needed
- API specification update required
- API redesign initiated for performance/usability
- Integration requirement identified

### Process

#### Step 1: Clarify API Purpose

**Goal**: Define what API should do  
**Actions**:

- Document use cases for API
- Identify primary consumers
- Understand performance requirements
- Identify authentication/authorization needs
- Define versioning strategy

**Success Criteria**:

- ✅ Purpose crystal clear
- ✅ Consumers identified
- ✅ Non-functional requirements defined

**Duration**: 30-60 minutes

---

#### Step 2: Design API Specification

**Goal**: Define API contract  
**Actions**:

- Design endpoint paths (RESTful conventions)
- Define request/response models
- Specify HTTP methods appropriately
- Define status codes
- Specify headers and metadata
- Design error response format
- Plan pagination strategy (if needed)

**Tools**:

- OpenAPI/Swagger specification
- JSON schema for request/response models

**Success Criteria**:

- ✅ OpenAPI spec complete
- ✅ All edge cases covered
- ✅ Spec is consumer-friendly

**Duration**: 2-3 hours

---

#### Step 3: Plan Security

**Goal**: Ensure API security  
**Actions**:

- Define authentication mechanism (JWT, OAuth, etc.)
- Specify authorization model (who can call API)
- Plan rate limiting strategy
- Define data encryption approach
- Specify input validation rules
- Plan audit logging

**Success Criteria**:

- ✅ Authentication method chosen
- ✅ Authorization rules defined
- ✅ Security review completed

**Duration**: 1-2 hours

---

#### Step 4: Design for Performance

**Goal**: Ensure API performs well  
**Actions**:

- Define response time SLAs
- Plan caching strategy
- Identify expensive operations
- Design pagination/filtering
- Specify field selection (if appropriate)
- Plan database query optimization

**Success Criteria**:

- ✅ Performance targets defined
- ✅ Caching strategy clear
- ✅ Query efficiency planned

**Duration**: 1-2 hours

---

#### Step 5: Get Review & Approval

**Goal**: Validate API design  
**Actions**:

- Present API design to team
- Gather feedback from consumers
- Address security concerns
- Iterate based on feedback
- Get sign-off from tech lead

**Success Criteria**:

- ✅ Consumer feedback positive
- ✅ Security review passed
- ✅ Design approved

**Duration**: 1-2 hours

---

### Outcomes

- ✅ API specification fully documented
- ✅ Security designed
- ✅ Performance optimizations planned
- ✅ Ready for implementation

**Typical Duration**: 6-10 hours

---

## Workflow 3: Infrastructure Planning Workflow

### Trigger

- New infrastructure needed
- Infrastructure optimization required
- Cloud migration project initiated
- Disaster recovery planning needed

### Process

#### Step 1: Assess Infrastructure Needs

**Goal**: Understand infrastructure requirements  
**Actions**:

- Estimate compute requirements
- Plan storage architecture
- Identify database needs
- Define network requirements
- Plan backup/DR needs
- Assess security infrastructure

**Success Criteria**:

- ✅ All infrastructure needs identified
- ✅ Requirements quantified

**Duration**: 1-2 hours

---

#### Step 2: Design Infrastructure Architecture

**Goal**: Create infrastructure blueprint  
**Actions**:

- Design compute strategy (containers, VMs, serverless)
- Plan networking (VPC, security groups, load balancing)
- Design storage (databases, caches, file storage)
- Plan disaster recovery
- Design monitoring/observability
- Plan for auto-scaling

**Success Criteria**:

- ✅ Infrastructure clearly designed
- ✅ All components identified
- ✅ Scalability planned

**Duration**: 2-4 hours

---

#### Step 3: Plan Deployment Strategy

**Goal**: Define how to deploy  
**Actions**:

- Design CI/CD pipeline
- Plan infrastructure-as-code approach
- Define environment strategy (dev/staging/prod)
- Plan database migration strategy
- Plan rollback procedures

**Success Criteria**:

- ✅ Deployment process clear
- ✅ Automation planned
- ✅ Safety measures in place

**Duration**: 2-3 hours

---

#### Step 4: Cost Analysis

**Goal**: Understand infrastructure costs  
**Actions**:

- Estimate monthly/yearly costs
- Identify cost optimization opportunities
- Plan budgeting
- Evaluate cost/performance tradeoffs

**Success Criteria**:

- ✅ Costs estimated
- ✅ Budget approved
- ✅ Cost optimization identified

**Duration**: 1-2 hours

---

#### Step 5: Get Approval & Plan Implementation

**Goal**: Secure buy-in and plan execution  
**Actions**:

- Present to stakeholders
- Address concerns/questions
- Get approval and budget sign-off
- Create implementation roadmap
- Allocate resources

**Success Criteria**:

- ✅ Approval obtained
- ✅ Resources allocated
- ✅ Timeline realistic

**Duration**: 1-2 hours

---

### Outcomes

- ✅ Infrastructure architecture fully designed
- ✅ Cost analysis complete
- ✅ Implementation plan ready
- ✅ Resources allocated

**Typical Duration**: 10-15 hours

---

## Decision Points

### When to Escalate to Sparkling Curious

- [ ] Architectural decision affects multiple teams
- [ ] Budget exceeds approved amount
- [ ] Timeline conflicts with other projects
- [ ] Critical security review needed
- [ ] Major risk identified

### When to Delegate to Specialists

- [ ] Database design → The Engineer
- [ ] Security architecture → Veritas
- [ ] Cost optimization → The Capitalist
- [ ] Deployment strategy → The Engineer
- [ ] API documentation → The Librarian

---

## Success Metrics

- ✅ Architecture documented clearly
- ✅ Design reviews completed successfully
- ✅ Stakeholder alignment achieved
- ✅ Implementation timeline on track
- ✅ No critical risks unaddressed
- ✅ Team confident in design

---

## Templates & References

- OpenAPI specification template
- Architecture Decision Record (ADR) template
- Risk register template
- Infrastructure-as-code examples
- API design best practices guide

---

**Last Updated**: February 18, 2026  
**Version**: 1.0  
**Status**: Active
