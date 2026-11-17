# Master Prompt — SUB-C02-OPS-NEO-001 (NeoBank Project Structure Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/operations/project-structure-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C02-OPS-NEO-001  
**Council:** C02 Operations  
**Gate:** C02 + C15 Product-Management

---

## 1. Summary

This master prompt instructs SUB-C02-OPS-NEO-001 to ingest the NeoBank program planning and execution data from the Stremiium repo, review and improve the NeoBank project structure prompts (MP-BF01 NeoBank Project Structure), and produce an improved unconsolidated artifact that converts the research and program data into actionable project structure prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness.

---

## 2. Assumptions

- The NeoBank program plan at `01-program/plan/PLAN.md` (WBS W0–W11) is current as of 2026-10-16 and remains valid for prompt preparation.
- The execution ledger at `01-program/artifacts/execution-ledger.md` records W1–W10 deliverables as DONE as of 2026-10-16.
- The NeoBank council charters at `01-program/councils/` define ownership and authority for project structure decisions.
- MP-BF01 (NeoBank Project Structure Artifact Generator) is the canonical project structure prompt requiring improvement; no other project structure prompts are in scope for this subagent.
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- The project structure must separate fixed requirements from hypotheses per the global rules.
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- Which council owns each component of the NeoBank project structure (wallet, ledger, payments, KYC/AML, Travel Rule, CARF, MPC, PIN, dispute, support, analytics, security)?
- What is the dependency order for building NeoBank components given regulatory gating (licensing before payments, POPIA before data processing, etc.)?
- What are the environment tiers (SIM, PAPER, STAGING, LIVE approved only) and which components can run in each?
- What is the rollback strategy for each NeoBank component if a regulatory gate fails?
- How does the project structure integrate with the 16-council SAOS hierarchy and Sparkling Curious delegation?
- What test harness coverage is required before any money/data surface ships?
- How does REA (reverse-engineering) output feed into the NeoBank project structure (competitor app analysis)?
- What are the deployment environments (dev, test, staging, production) and their security boundaries?
- How is the gap register maintained and updated as regulatory clarity emerges?
- What is the relationship between the NeoBank project structure and the Stremiium Trading Firm code artifacts (MP-BE series)?

---

## 4. Concerns

- No ownership map exists for NeoBank project components across the 16 councils.
- No dependency graph shows regulatory gating order for component build sequence.
- No gap register tracks unresolved regulatory questions (non-bank payment framework draft, COFI Bill, CARF effective date).
- No environment tier enforcement prevents premature LIVE deployment.
- No rollback strategy is documented per component for regulatory gate failures.
- The relationship between NeoBank project structure and Trading Firm code artifacts (MP-BE series) is unclear.
- REA competitive intelligence output is not integrated into project structure decisions.
- No test harness coverage requirements are specified per component.
- No deployment environment security boundaries are defined.
- The gap register does not link to specific council owners for resolution.

---

## 5. Suggested Improvements

- Add ownership map to MP-BF01 assigning each NeoBank component to a council (C01 legal, C16 banking, C11 dev-engineering, C12 security, C15 product, C14 customer success, C10 finance, C13 web3).
- Add dependency graph showing regulatory gating order (incorporation → FICA registration → POPIA IO registration → banking licence → payment rails → wallet → payments → launch).
- Add environment tiers (SIM, PAPER, STAGING, LIVE approved only) with component-level permissions to MP-BF01.
- Add rollback strategy per component for regulatory gate failure (licence denial → revert to sponsor model; POPIA non-compliance → suspend data processing; FICA failure → suspend onboarding).
- Add integration mapping between NeoBank project structure and Trading Firm code artifacts (MP-BE series: risk config, trading engine, MT5 connector, order manager, reconciliation).
- Add REA competitive intelligence integration points (competitor app analysis → feature requirements → project structure updates).
- Add test harness coverage requirements per component (80%+ coverage on produced code, no PII, no secrets).
- Add deployment environment security boundaries (dev/test isolated from production, no production data in lower environments).
- Add gap register with council owner, regulatory source, status, and resolution date.
- Add deployment topology from `06-architecture/platform-design/platform/` to MP-BF01.
- Add technology selection rationale from `06-architecture/platform-design/system-design/` to MP-BF01.
- Reference `01-program/plan/PLAN.md`, `01-program/delivery/`, and `01-program/artifacts/execution-ledger.md` with specific section citations.

---

## 6. Missing Dependencies

- NeoBank component inventory from C15 Product-Management (feature list, priorities).
- Regulatory licensing timeline from C01 Legal-Compliance (when can each component launch).
- Security architecture review from C12 Cybersecurity-Intel (security boundaries per component).
- Deployment infrastructure specification from C06 Engineering-Infrastructure (environments, CI/CD).
- Test harness specification from C11 Dev-Engineering (coverage requirements, CI integration).
- REA competitive analysis output from C04 Strategy-Growth (competitor features to match/beat).
- Gap register template from C03 Admin-Knowledge (document control standard).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `01-program/plan/PLAN.md` for WBS W0–W11, quality gates, escalation, definition of done.
2. Read `01-program/artifacts/execution-ledger.md` for W1–W10 deliverable status.
3. Read `01-program/councils/README.md` and individual council charters for ownership and authority.
4. Read `01-program/delivery/` for governance, risk, roadmaps, definition of done, quality gates, ways of working.
5. Read `06-architecture/platform-design/README.md` and subdirectories for system design, domain model, integrations, data, platform, security.
6. Read MP-BF01 current prompt text from the master prompt registry.
7. Identify gaps between program data/architecture and current MP-BF01 content (ownership map, dependency graph, environment tiers, rollback strategy, trading firm integration, REA integration, test harness, deployment boundaries, gap register).
8. Draft improved MP-BF01 NeoBank Project Structure with folder tree, ownership map, dependency graph, gap register, product pillars, wallet, payments, ledger, KYC/AML, Travel Rule, CARF readiness, POPIA consent, MPC key management, PIN verification, dispute handling, customer support, analytics, compliance evidence, security controls, backend services, frontend apps, admin console, test harness, deployment environments, rollback strategy.
9. Separate fixed requirements from hypotheses in MP-BF01 per global rule 7.
10. Add integration mapping with MP-BE series trading code artifacts.
11. Add REA competitive intelligence integration points.
12. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/operations/project-structure-prompts.md`.
13. Run validation checklist (§9 below).
14. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Component ownership: `{component, owning_council, captain, regulatory_gate, environment_tier, rollback_strategy, test_coverage_required}$
- Dependency graph edge: `{from_component, to_component, dependency_type, regulatory_gate, blocking}$
- Environment tier: `{tier, name, components_allowed, data_classification, approval_required}$
- Gap register entry: `{gap_id, description, regulatory_source, council_owner, status, resolution_date, blocking_launch}$

---

## 9. Validation Checklist

- [ ] All program data sources (PLAN.md, execution-ledger, council charters, delivery docs) are referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Ownership map for all NeoBank components included
- [ ] Dependency graph with regulatory gating included
- [ ] Environment tiers (SIM, PAPER, STAGING, LIVE approved only) included
- [ ] Rollback strategy per component included
- [ ] Trading firm integration (MP-BE series) included
- [ ] REA competitive intelligence integration included
- [ ] Test harness coverage requirements included
- [ ] Deployment environment security boundaries included
- [ ] Gap register with council owners included
- [ ] Fixed requirements separated from hypotheses
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C02 + C15)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Project structure documents contain deployment topology and security boundaries; restrict access to C02, C06, C11, C12 only.
- No production credentials or secrets in project structure artifacts.
- Environment tier enforcement must prevent accidental LIVE deployment of unapproved components.
- Deployment environment security boundaries must prevent data leakage from production to lower environments.
- Test harness must not process real customer data or real payment credentials.
- Gap register contains unresolved regulatory issues; restrict access to C01, C02, C10, C12, C16.
- Project structure changes must be additive and idempotent per AGENTS.md contribution rules.

---

## 11. South African Regulatory Considerations

- **FICA Act 38 of 2001:** KYC/AML components must be operational before customer onboarding; regulatory gate before launch.
- **POPIA Act 4 of 2013:** data processing components must have POPIA consent and IO registration before launch.
- **Banks Act 94 of 1990:** banking licence required before deposit-taking; component launch gated on licensing.
- **NPS Act 78 of 1998:** payment rails components gated on SARB participation/authorisation.
- **SARS CARF:** effective 1 March 2026; CARF reporting components must be operational before reportable transactions.
- **FSCA/FAIS:** financial services components gated on FSP/CASP licensing.
- **FAIS:** financial advice components gated on FSCA authorisation.
- **Exchange Control Rules:** cross-border payment components gated on SARB FinSurv approval.
- **CPA 68 of 2008:** consumer-facing components must comply with CPA disclosure and fairness requirements.
- **FATF grey-list exit (Oct 2025):** AML/CFT components must maintain rigour post-grey-list-exit.

---

## 12. Compliance Gate

**C02 Operations + C15 Product-Management.** Binding compliance veto on any project structure gap. No component may proceed to LIVE without the owning council's compliance sign-off and C02 operational readiness approval.

---

## 13. Rollback Plan

- If regulatory gate fails for a component: revert component to SIM/PAPER environment, document gate failure, re-engage owning council for remediation.
- If ownership map is incomplete: suspend component build, assign interim owner via C02, ratify with SC.
- If dependency graph is wrong: resequence component builds, update dependency graph, re-validate with all owning councils.
- If environment tier enforcement fails: halt deployments, review tier configuration, re-issue deployment approvals.
- If rollback strategy is missing: create rollback runbook per component, test rollback in STAGING, re-deploy only after rollback validated.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C02-OPS-NEO-001 → C02 Operations Captain → C15 Product-Management Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical operational/launch events skip to C02 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/operations/project-structure-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C02 project structure outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C15 product overlap, C16 banking compliance overlap) and arbitrates per workflow-routing.md R3/R5.
