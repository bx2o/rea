---
description: 'Stremiium GitHub Workflows - Stremiium documentation'
document_type: 'documentation'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
scope: 'GitHub Copilot and agent ecosystem'
---

# Stremiium GitHub Workflows

**Purpose:** CI/CD automation, agent orchestration, security scanning, and compliance validation  
**Total Workflows:** 53  
**Last Updated:** 2026-04-22

---

## 🏗️ Workflow Categories

### 1. CI/CD Pipelines (8 workflows)

| Workflow                 | Purpose                           | Triggers          |
| ------------------------ | --------------------------------- | ----------------- |
| `ci-main.yml`            | Main CI pipeline for all branches | Push, PR          |
| `ci-staging.yml`         | Staging environment validation    | Push to `staging` |
| `ci-production.yml`      | Production deployment pipeline    | Tag release       |
| `build-docker.yml`       | Docker image building             | Push to `main`    |
| `deploy-kubernetes.yml`  | K8s deployment automation         | Manual, scheduled |
| `rollback.yml`           | Emergency rollback procedures     | Manual            |
| `feature-flags.yml`      | Feature flag management           | PR merge          |
| `release-automation.yml` | Automated release creation        | Tag push          |

### 2. Security & Compliance (12 workflows)

| Workflow                 | Purpose                              | Schedule    |
| ------------------------ | ------------------------------------ | ----------- |
| `security-sast.yml`      | Static Application Security Testing  | Every push  |
| `security-dast.yml`      | Dynamic Application Security Testing | Nightly     |
| `security-sca.yml`       | Software Composition Analysis        | Weekly      |
| `security-secrets.yml`   | Secrets scanning                     | Every push  |
| `security-iac.yml`       | Infrastructure as Code scanning      | PR to infra |
| `security-container.yml` | Container image scanning             | On build    |
| `compliance-fsca.yml`    | FSCA compliance validation           | Weekly      |
| `compliance-fica.yml`    | FICA AML checks                      | Daily       |
| `compliance-popia.yml`   | POPIA data protection audit          | Monthly     |
| `compliance-carf.yml`    | CARF reporting validation            | Quarterly   |
| `audit-logging.yml`      | Security audit logging               | Continuous  |
| `vulnerability-mgmt.yml` | CVE tracking and remediation         | Daily       |

### 3. Blockchain & Smart Contracts (8 workflows)

| Workflow                      | Purpose                         | Triggers           |
| ----------------------------- | ------------------------------- | ------------------ |
| `solidity-compile.yml`        | Compile all Solidity contracts  | Push to contracts/ |
| `solidity-test.yml`           | Run Hardhat test suite          | Push, PR           |
| `solidity-coverage.yml`       | Generate coverage reports       | PR                 |
| `slither-analysis.yml`        | Run Slither static analysis     | Nightly            |
| `mythril-analysis.yml`        | Run Mythril security analysis   | Nightly            |
| `contract-deploy-mumbai.yml`  | Deploy to Mumbai testnet        | Manual             |
| `contract-deploy-polygon.yml` | Deploy to Polygon mainnet       | Approval required  |
| `contract-verify.yml`         | Verify contracts on Polygonscan | Post-deploy        |

### 4. Agent Orchestration (10 workflows)

| Workflow                     | Purpose                        | Schedule       |
| ---------------------------- | ------------------------------ | -------------- |
| `agent-health-check.yml`     | Monitor agent health status    | Every 5 min    |
| `agent-task-assignment.yml`  | Auto-assign tasks to agents    | On issue/PR    |
| `agent-escalation.yml`       | Handle agent escalation        | Event-driven   |
| `council-sync.yml`           | Sync 16-council state          | Hourly         |
| `agent-training.yml`         | Trigger training modules       | Scheduled      |
| `agent-performance.yml`      | Performance metrics collection | Daily          |
| `agent-scale.yml`            | Auto-scale agent pools         | Based on load  |
| `orchestration-audit.yml`    | Audit orchestration decisions  | Weekly         |
| `agent-knowledge-update.yml` | Update agent knowledge bases   | On docs change |
| `multi-council-sync.yml`     | Sync cross-council tasks       | Real-time      |

### 5. Quality Assurance (8 workflows)

| Workflow                  | Purpose                       | Triggers           |
| ------------------------- | ----------------------------- | ------------------ |
| `lint-typescript.yml`     | ESLint + Prettier checks      | Push               |
| `lint-solidity.yml`       | Solhint checks                | Push to contracts/ |
| `type-check.yml`          | TypeScript strict mode checks | Push               |
| `unit-tests.yml`          | Jest unit test execution      | Push, PR           |
| `integration-tests.yml`   | Integration test suite        | PR                 |
| `e2e-tests.yml`           | End-to-end testing            | Staging deploy     |
| `performance-tests.yml`   | Load and stress testing       | Scheduled          |
| `accessibility-tests.yml` | WCAG compliance testing       | PR to UI           |

### 6. Documentation & Communication (7 workflows)

| Workflow                 | Purpose                  | Triggers        |
| ------------------------ | ------------------------ | --------------- |
| `docs-build.yml`         | Build documentation site | Push to docs/   |
| `docs-deploy.yml`        | Deploy docs to CDN       | Main branch     |
| `changelog-update.yml`   | Auto-generate changelogs | Release         |
| `notification-slack.yml` | Slack notifications      | Various         |
| `notification-email.yml` | Email alerts             | Critical events |
| `report-weekly.yml`      | Weekly status reports    | Fridays         |
| `report-monthly.yml`     | Monthly metrics reports  | Month-end       |

---

## 🔐 Security Workflow Details

### SAST Pipeline (`security-sast.yml`)

```yaml
# Triggers: Every push, PR
# Tools: SonarQube, CodeQL, ESLint Security
# Fails on: Critical/High vulnerabilities
# Notifications: Slack #security-alerts
```

**Steps:**

1. Checkout code with full history
2. Initialize CodeQL
3. Run SonarQube analysis
4. Execute ESLint security rules
5. Upload SARIF results
6. Block PR on critical findings

### Secrets Scanning (`security-secrets.yml`)

```yaml
# Triggers: Every push, PR
# Tools: GitLeaks, TruffleHog, detect-secrets
# Fails on: Any secret detection
# Notifications: Immediate Slack + Email
```

**Patterns Detected:**

- Private keys (secp256k1, RSA)
- API keys (Polygonscan, Infura, AWS)
- Database credentials
- JWT tokens
- Seed phrases
- Environment files (.env)

### Compliance Validation (`compliance-fsca.yml`)

```yaml
# Schedule: Weekly (Sunday 00:00 UTC)
# Standards: FSCA CASP License Requirements
# Reports: Compliance dashboard + FSCA portal
```

**Checks:**

- ✅ KYC/AML procedures documented
- ✅ Risk management framework active
- ✅ Customer disclosure statements
- ✅ Cyber resilience standards
- ✅ Outsourcing agreements
- ✅ Reporting compliance

---

## ⛓️ Blockchain Workflow Details

### Smart Contract Testing (`solidity-test.yml`)

**Network Matrix:**

- Hardhat Network (local)
- Polygon Mumbai (testnet)
- Forked Polygon mainnet

**Test Categories:**

- Unit tests (all contracts)
- Integration tests (contract interactions)
- Fuzzing tests (property-based)
- Gas optimization tests

**Coverage Requirements:**

- Minimum 90% line coverage
- 100% coverage on critical functions
- Branch coverage > 80%

### Security Analysis Pipeline

**Slither Analysis:**

```bash
slither . --config-file slither.config.json \
  --json slither-results.json \
  --exclude-informational \
  --exclude-low
```

**Mythril Analysis:**

```bash
myth analyze contracts/ --execution-timeout 600 \
  --max-depth 50 \
  --solver-timeout 300
```

---

## 🤖 Agent Orchestration Workflows

### Agent Health Monitoring (`agent-health-check.yml`)

**Monitors:**

- Agent responsiveness (ping/pong)
- Task queue depth
- Error rates
- Resource utilization
- Council membership status

**Alert Thresholds:**

- Critical: >5% error rate
- Warning: >100 queued tasks
- Info: Agent offline >30 seconds

### Task Assignment Algorithm (`agent-task-assignment.yml`)

**Assignment Logic:**

1. Parse issue/PR for required skills
2. Query agent skill registry
3. Calculate agent availability score
4. Apply load balancing
5. Assign to optimal agent
6. Notify agent via MCP

**Factors Considered:**

- Skill match percentage
- Current workload
- Historical performance
- Council jurisdiction
- Escalation requirements

---

## 📊 Workflow Usage

### Manual Triggers

Some workflows support `workflow_dispatch` for manual execution:

```bash
# Trigger via GitHub CLI
gh workflow run deploy-production.yml \
  -f environment=production \
  -f version=v2.1.0

# Trigger via API
curl -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/stremiium/stremiium-core/actions/workflows/WORKFLOW_ID/dispatches \
  -d '{"ref":"main","inputs":{"environment":"staging"}}'
```

### Scheduled Workflows

| Workflow              | Schedule (UTC)       | Purpose                    |
| --------------------- | -------------------- | -------------------------- |
| Nightly Security Scan | 00:00                | Full security assessment   |
| Weekly Compliance     | Sunday 00:00         | FSCA/FICA compliance check |
| Monthly Reports       | 1st 00:00            | Executive dashboards       |
| Quarterly Audit       | First day of quarter | Comprehensive audit        |

---

## 🔧 Workflow Configuration

### Environment Variables

Required secrets (configured in GitHub Settings):

```bash
# Blockchain
POLYGON_RPC_URL
MUMBAI_RPC_URL
PRIVATE_KEY_DEPLOYER
POLYGONSCAN_API_KEY

# Security
SONAR_TOKEN
CODEQL_TOKEN
SNYK_TOKEN

# Deployment
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
KUBE_CONFIG_DATA

# Notifications
SLACK_WEBHOOK_URL
SLACK_BOT_TOKEN
EMAIL_SMTP_PASSWORD

# Agent Orchestration
NOTION_TOKEN
MCP_SERVER_TOKEN
AGENT_API_KEY
```

### Workflow Permissions

All workflows use minimal permissions:

```yaml
permissions:
  contents: read # Checkout code
  issues: write # Comment on issues
  pull-requests: write # PR checks and comments
  security-events: write # Upload SARIF
  id-token: write # OIDC for AWS/GCP
```

---

## 📈 Monitoring & Observability

### Workflow Metrics

**Dashboard:** [Stremiium DevOps Dashboard](https://monitoring.stremiium.io/github)

**Tracked Metrics:**

- Workflow execution time (p50, p95, p99)
- Success/failure rates by category
- Queue depth and wait times
- Cost per workflow run
- Security findings trends

### Alerting

**Channels:**

- Slack: #devops-alerts, #security-alerts
- PagerDuty: Critical workflow failures
- Email: Weekly summary reports

---

## 🚀 Best Practices

### 1. Workflow Design

- Keep workflows under 10 minutes when possible
- Use matrix builds for parallelization
- Cache dependencies aggressively
- Fail fast on critical checks

### 2. Security

- Never hardcode secrets
- Use OIDC for cloud authentication
- Scan all artifacts before deployment
- Require approvals for production

### 3. Reliability

- Implement proper error handling
- Use retry logic for flaky operations
- Maintain idempotency
- Log all actions comprehensively

### 4. Compliance

- Document all workflow changes
- Maintain audit trails
- Regular access reviews
- Quarterly workflow audits

---

## 📝 Maintenance

### Monthly Tasks

- Review workflow run times
- Update action versions
- Clean up old artifacts
- Review security findings

### Quarterly Tasks

- Workflow optimization review
- Cost analysis and optimization
- Security audit of workflows
- Documentation updates

---

## 📞 Support

### Workflow Issues

- **Slack:** #github-actions
- **Email:** devops@stremiium.io
- **Runbook:** [Workflow Troubleshooting](https://wiki.stremiium.io/workflows)

### Emergency Procedures

1. Check [Status Page](https://status.stremiium.io)
2. Review recent workflow changes
3. Escalate to on-call engineer
4. Document incident for post-mortem

---

<p align="center">
  <strong>Stremiium GitHub Workflows</strong><br>
  <em>53 Automated Workflows Powering Continuous Innovation</em>
</p>
