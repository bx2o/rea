# Master Prompt — SUB-C02-OPS-NEO-002 (NeoBank Launch and Rollout Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** qwen3.8-omni-flash.  
**Model policy:** LOCKED. Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/operations/launch-and-rollout-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C02-OPS-NEO-002  
**Council:** C02 Operations  
**Gate:** C02 + Executive

---

## 1. Summary

This master prompt instructs SUB-C02-OPS-NEO-002 to ingest the NeoBank delivery governance, risk, roadmap, and quality gate data from the Stremiium repo, review and improve the NeoBank launch gate prompts (MP-BF18 NeoBank Launch Gate Checklist, MP-BF05 PRD launch gates), and produce an improved unconsolidated artifact that converts the research into actionable launch and rollout prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness.

---

## 2. Assumptions

- The NeoBank delivery documentation at `01-program/delivery/` (governance, risk, roadmaps, definition of done, quality gates, ways of working) is current as of 2026-10-16 and remains valid for prompt preparation.
- The NeoBank risk register at `01-program/delivery/risk/` contains 30 seeded risks with appetite statement.
- MP-BF18 (NeoBank Launch Gate Checklist) is the canonical launch gate prompt requiring improvement; no other launch gate prompts are in scope for this subagent.
- The launch gate follows the principle: if any item unresolved, mark blocked and escalate.
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- Launch requires Mychael (CEO) sign-off per MP-BF18.
- qwen3.8-omni-flash is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What is the phased launch roadmap (M1–M24) and which regulatory milestones gate each phase?
- What are the launch gate criteria for each environment tier (SIM → PAPER → STAGING → LIVE approved only)?
- What is the incident response plan for launch-day failures (payment outage, wallet compromise, KYC downtime)?
- How does the launch gate interact with C01 Legal-Compliance binding veto and C16 Banking-Fintech banking compliance authority?
- What is the rollback procedure if a launch gate item fails post-launch?
- What customer support readiness is required before launch (support runbooks, SLAs, escalation paths)?
- What is the security audit and penetration test requirement before LIVE launch?
- How is budget approval (C10 authority) integrated into the launch gate?
- What is the communication plan for launch day (customers, partners, regulators)?
- What is the monitoring and observability requirement for the first 30 days post-launch?

---

## 4. Concerns

- No phased launch roadmap with regulatory milestones exists in current prompts.
- No environment tier progression criteria are defined (SIM→PAPER→STAGING→LIVE).
- No launch-day incident response plan is documented.
- No rollback procedure exists for post-launch gate failures.
- No customer support readiness checklist exists (runbooks, SLAs, macros).
- No security audit/penetration test completion criteria are specified.
- No budget approval integration with launch gate is documented.
- No monitoring/observability requirements for post-launch are specified.
- No regulator notification plan for launch is defined.
- No customer communication plan for launch day exists.
- No success criteria for launch (transaction volume, uptime, support ticket volume) are defined.
- No rollback criteria (when to abort launch) are defined.

---

## 5. Suggested Improvements

- Add phased launch roadmap (M1–M24) with regulatory milestones to MP-BF18.
- Add environment tier progression criteria (SIM→PAPER→STAGING→LIVE approved only) to MP-BF18.
- Add launch-day incident response plan to MP-BF18 (payment outage, wallet compromise, KYC downtime, data breach).
- Add rollback procedure for post-launch gate failures to MP-BF18.
- Add customer support readiness checklist (runbooks, SLAs, escalation paths, macros) to MP-BF18.
- Add security audit and penetration test completion criteria to MP-BF18.
- Add budget approval (C10 authority) integration into launch gate to MP-BF18.
- Add monitoring and observability requirements for first 30 days post-launch to MP-BF18.
- Add regulator notification plan for launch to MP-BF18.
- Add customer communication plan for launch day to MP-BF18.
- Add launch success criteria (transaction volume, uptime, support tickets, error rates) to MP-BF18.
- Add launch abort/rollback criteria (when to stop launch) to MP-BF18.
- Add Mychael sign-off requirement with timestamp and evidence to MP-BF18.
- Add PRD launch gates from MP-BF05 as cross-reference to MP-BF18.
- Reference `01-program/delivery/` (roadmaps, risk, definition of done, quality gates) with specific section citations.

---

## 6. Missing Dependencies

- Phased launch roadmap from C04 Strategy-Growth / C15 Product-Management (may need to be requested).
- Security audit schedule from C12 Cybersecurity-Intel.
- Penetration test scope and vendor from C12 Cybersecurity-Intel.
- Budget approval from C10 Finance-CFO.
- Customer support runbooks from C14 Customer Success.
- Monitoring/observability specification from C06 Engineering-Infrastructure / C11 Dev-Engineering.
- Regulator notification templates from C01 Legal-Compliance.
- Incident response plan from C12 Cybersecurity-Intel.
- Customer communication templates from C09 Marketing-Communications.

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `01-program/delivery/` (governance, risk, roadmaps, definition of done, quality gates, ways of working).
2. Read `01-program/delivery/roadmaps/` for phased launch roadmap if present; otherwise note as missing dependency.
3. Read `01-program/delivery/risk/` for risk register and appetite statement.
4. Read `01-program/delivery/definition-of-done.md` and `quality-gates.md`.
5. Read `01-program/plan/PLAN.md` for escalation, definition of done, WBS W0–W11.
6. Read MP-BF18 current prompt text from the master prompt registry.
7. Read MP-BF05 PRD launch gates section for cross-reference.
8. Identify gaps between delivery data and current MP-BF18 content (roadmap, tier progression, incident response, rollback, support readiness, security audit, budget, monitoring, regulator notification, communication, success criteria, abort criteria).
9. Draft improved MP-BF18 NeoBank Launch Gate Checklist with legal classification, POPIA DPIA, FICA/CASP readiness, CARF readiness, Travel Rule readiness, security audit, penetration test, smart contract audit, key isolation, no agent-held keys, human-in-the-loop, customer disclosures, support runbooks, incident response, budget approval, Mychael sign-off, blocked item escalation.
10. Add phased launch roadmap with regulatory milestones.
11. Add environment tier progression criteria.
12. Add launch-day incident response plan.
13. Add rollback procedure for post-launch gate failures.
14. Add customer support readiness checklist.
15. Add monitoring/observability requirements.
16. Add regulator notification plan.
17. Add customer communication plan.
18. Add launch success criteria and abort criteria.
19. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/operations/launch-and-rollout-prompts.md`.
20. Run validation checklist (§9 below).
21. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Launch gate item: `{item_id, description, owner_council, status, evidence_required, blocking, sign_off_required, sign_off_date, notes}$
- Environment tier progression: `{from_tier, to_tier, criteria[], approval_required, rollback_conditions}$
- Incident response: `{incident_id, severity, detected_at, detected_by, response_team, containment_actions, resolution, post_incident_review}$
- Rollback record: `{rollback_id, trigger, component, actions_taken, rollback_date, validated, lessons_learned}$

---

## 9. Validation Checklist

- [ ] All delivery documentation sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `qwen3.8-omni-flash` (no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Phased launch roadmap with regulatory milestones included
- [ ] Environment tier progression criteria included
- [ ] Launch-day incident response plan included
- [ ] Rollback procedure for post-launch failures included
- [ ] Customer support readiness checklist included
- [ ] Security audit/penetration test criteria included
- [ ] Budget approval (C10) integration included
- [ ] Monitoring/observability requirements included
- [ ] Regulator notification plan included
- [ ] Customer communication plan included
- [ ] Launch success criteria included
- [ ] Launch abort/rollback criteria included
- [ ] Mychael sign-off requirement included
- [ ] "If any item unresolved, mark blocked and escalate" principle included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C02 + Executive)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Launch gate documents contain security audit results and penetration test findings; restrict access to C02, C12, Executive only.
- No production credentials or secrets in launch artifacts.
- Incident response plan must be tested before launch; untested IR is a security risk.
- Rollback procedures must be tested in STAGING before LIVE deployment.
- Monitoring/observability must include security event detection (unauthorized access, unusual transaction patterns).
- Customer communication templates must not reveal security architecture details.
- Regulator notification must preserve evidence chain for potential enforcement.
- Launch day support must have security escalation path (C12) separate from general support.

---

## 11. South African Regulatory Considerations

- **FICA Act 38 of 2001:** customer onboarding and transaction monitoring must be operational before LIVE launch.
- **POPIA Act 4 of 2013:** DPIA must be complete before processing personal information; breach notification ready before launch.
- **Banks Act 94 of 1990:** banking licence required before deposit-taking launch.
- **NPS Act 78 of 1998:** payment rails authorisation required before payment processing launch.
- **SARS CARF:** effective 1 March 2026; CARF reporting ready before reportable transactions.
- **FSCA/FAIS:** FSP/CASP licensing required before financial services launch.
- **CPA 68 of 2008:** consumer disclosures and terms must be approved before customer-facing launch.
- **Exchange Control Rules:** cross-border payment capability gated on SARB FinSurv approval.
- **FATF grey-list exit (Oct 2025):** AML/CFT systems must be operational and audited before launch.

---

## 12. Compliance Gate

**C02 Operations + Executive.** Binding compliance veto on any launch gate gap. No LIVE launch without C01 Legal-Compliance, C12 Security, C16 Banking-Fintech, C10 Budget, and Executive sign-off. Mychael sign-off mandatory.

---

## 13. Rollback Plan

- If launch gate item fails pre-launch: mark blocked, do not proceed to next tier, escalate to owning council and SC.
- If post-launch gate failure detected: activate rollback procedure, revert affected component to previous stable state, document failure, remediate before re-deployment.
- If security audit/penetration test finds critical findings: halt launch, remediate findings, re-test before proceeding.
- If budget approval is not obtained: suspend launch preparations, obtain C10 approval, resume only after sign-off.
- If customer support is not ready: delay customer-facing launch, complete support runbooks and SLAs, re-assess readiness.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C02-OPS-NEO-002 → C02 Operations Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical launch/security events skip to C02 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/operations/launch-and-rollout-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C02 launch gate outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C01 legal veto, C16 banking compliance, C12 security, C10 budget) and arbitrates per workflow-routing.md R3/R5.
