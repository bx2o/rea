# Master Prompt — SUB-C15-PROD-NEO-002 (NeoBank Wallet and Ledger Product Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/product/wallet-and-ledger-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C15-PROD-NEO-002  
**Council:** C15 Product-Management  
**Gate:** C15 + C10 Finance

---

## 1. Summary

This master prompt instructs SUB-C15-PROD-NEO-002 to ingest the NeoBank wallet and ledger product data from the Stremiium repo, review and improve the NeoBank wallet/ledger product prompts (MP-BF09 Ledger Service Spec product sections, MP-BF08 Wallet Service Spec product sections), and produce an improved unconsolidated artifact that converts the research into actionable wallet and ledger product prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (FICA, POPIA, CARF, CPA, Banks Act).

---

## 2. Assumptions

- The NeoBank domain model at `06-architecture/platform-design/domain-model/` defines double-entry ledger, money & currency, customer ledger, treasury ledger, settlement ledger, trading ledger adjacency, $STM ledger adjacency.
- MP-BF09 (Ledger Service Spec) and MP-BF08 (Wallet Service Spec) are the canonical wallet/ledger prompts requiring improvement; product sections of these prompts are in scope for this subagent.
- C15 holds product decision authority (roadmap, feature prioritisation) for wallet and ledger features.
- The wallet must support fiat and crypto balances ($STM, BLT) with MPC key management.
- The ledger must be double-entry with event-sourced audit trail.
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What are the wallet product features (fiat balance, crypto balance, $STM balance, BLT balance, deposit, withdraw, convert, MPC status, recovery, PIN verification, transaction history, risk limits)?
- What are the ledger product features (customer ledger, treasury ledger, settlement ledger, trading ledger adjacency, $STM ledger adjacency, reconciliation, exception handling, balance drift detection)?
- What are the user journeys for wallet (create wallet, deposit, send, receive, convert, withdraw, view history, recover)?
- What are the user journeys for ledger (view balance, view transactions, view reconciliation status, view exceptions)?
- What are the wallet product requirements (MPC key management, address book, allowlists, spending limits, audit logs, incident revocation, Polygon/$STM integration)?
- What are the ledger product requirements (double-entry, event-sourced audit, duplicate detection, missing fill detection, balance drift detection, reporting)?
- What are the compliance requirements for wallet (FICA KYC/AML, POPIA consent, CARF reporting, Travel Rule indicators)?
- What are the compliance requirements for ledger (FICA record retention 5 years, CARF reporting, audit trail, double-entry integrity)?
- What are the wallet product metrics (activation rate, transaction volume, wallet count, active wallets)?
- What are the ledger product metrics (reconciliation accuracy, balance drift incidents, exception resolution time, audit completeness)?

---

## 4. Concerns

- No wallet product feature list is defined in current prompts.
- No ledger product feature list is defined.
- No wallet user journey mapping exists.
- No ledger user journey mapping exists.
- No wallet compliance requirements matrix exists (FICA, POPIA, CARF, Travel Rule).
- No ledger compliance requirements matrix exists (FICA retention, CARF, audit).
- No wallet product metrics are defined.
- No ledger product metrics are defined.
- No $STM/BLT ledger adjacency product requirements exist.
- No wallet recovery product flow is specified.
- No spending limits product feature is specified.
- No risk limits product feature is specified.

---

## 5. Suggested Improvements

- Add wallet product specification to wallet/ledger prompts (fiat balance, crypto balance, $STM balance, BLT balance, deposit, withdraw, convert, MPC status, recovery, PIN verification, transaction history, risk limits, Travel Rule indicators, CARF reporting readiness indicators).
- Add ledger product specification to wallet/ledger prompts (customer ledger, treasury ledger, settlement ledger, trading ledger adjacency, $STM ledger adjacency, reconciliation jobs, exception handling, balance drift detection, duplicate detection, missing fill detection, reporting).
- Add wallet user journeys (create wallet, deposit, send, receive, convert, withdraw, view history, recover, set spending limits, view MPC status).
- Add ledger user journeys (view balance, view transactions, view reconciliation status, view exceptions, view audit trail).
- Add wallet compliance requirements (FICA KYC/AML, POPIA consent, CARF reporting, Travel Rule indicators, spending limits, risk limits).
- Add ledger compliance requirements (FICA 5-year record retention, CARF reporting, audit trail immutability, double-entry integrity, balance drift detection).
- Add $STM/BLT ledger adjacency product requirements.
- Add wallet recovery product flow (MPC recovery, social recovery, device binding, revocation).
- Add wallet product metrics (activation rate, transaction volume, wallet count, active wallets, convert volume).
- Add ledger product metrics (reconciliation accuracy, balance drift incidents, exception resolution time, audit completeness, double-entry integrity checks).
- Add product decision authority notes (C15 owns roadmap and feature prioritisation for wallet/ledger).
- Reference `06-architecture/platform-design/domain-model/` with specific citations.

---

## 6. Missing Dependencies

- Wallet feature prioritization from C10 Finance (budget) and C16 Banking-Fintech (banking compliance).
- Ledger technology selection from C11 Dev-Engineering (build vs buy core ledger).
- MPC key management specification from C13 Web3-Finance / C12 Cybersecurity-Intel.
- FICA/KYC integration specification from C01 Legal-Compliance.
- CARF reporting data specification from C01/C10.
- $STM/BLT token specification from C13 Web3-Finance.
- Wallet product metrics targets from C15 Product-Management.
- External accountant review of ledger double-entry design.

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `06-architecture/platform-design/domain-model/README.md` for wallet and ledger domain model (double-entry ledger, money & currency, data stores).
2. Read `01-program/councils/c15-product-management/CHARTER.md` for product mandate and decision authority.
3. Read `01-program/plan/PLAN.md` for wallet/ledger product-related WBS items.
4. Read `02-research/landscape/02-regulatory-framework/aml-fica.md` for FICA wallet requirements.
5. Read `02-research/landscape/02-regulatory-framework/tax-governance.md` for CARF ledger requirements.
6. Read MP-BF09 and MP-BF08 current prompt text from the master prompt registry.
7. Identify gaps between wallet/ledger product data and current prompt content (feature lists, user journeys, compliance matrices, metrics, $STM/BLT adjacency, recovery flow, spending limits, risk limits).
8. Draft improved wallet/ledger product prompts with wallet specification, ledger specification, user journeys, compliance requirements, product metrics, $STM/BLT adjacency, recovery flow, spending limits, risk limits.
9. Add product decision authority notes.
10. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/product/wallet-and-ledger-prompts.md`.
11. Run validation checklist (§9 below).
12. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Wallet feature: `{feature_name, description, user_journey, compliance_requirements[], security_requirements[], product_metrics[], launch_gate, rollback_criteria}$
- Ledger feature: `{feature_name, description, double_entry_required, audit_trail_required, fica_retention_years, carf_reporting, exception_handling, balance_drift_detection, product_metrics[], launch_gate}$
- Wallet user journey: `{journey_name, steps[], touchpoints[], compliance_gates[], drop_off_points[], hypothesis_to_test}$
- Ledger metric: `{metric_name, definition, target, current_value, measurement_method, alert_threshold}$

---

## 9. Validation Checklist

- [ ] All wallet/ledger product sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Wallet product specification included
- [ ] Ledger product specification included
- [ ] Wallet user journeys included
- [ ] Ledger user journeys included
- [ ] Wallet compliance requirements matrix included
- [ ] Ledger compliance requirements matrix included
- [ ] $STM/BLT ledger adjacency included
- [ ] Wallet recovery product flow included
- [ ] Spending limits product feature included
- [ ] Risk limits product feature included
- [ ] Wallet product metrics included
- [ ] Ledger product metrics included
- [ ] Product decision authority notes included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C15 + C10)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Wallet/ledger product specifications contain financial architecture; restrict access to C15, C10, C16, C12 only.
- No private keys, seed phrases, or signing credentials in product specifications (guardrail from MP-BF04).
- MPC key management must be referenced as security requirement, not detailed in product spec.
- Wallet balances and transaction data are sensitive financial information; product metrics must use aggregated/anonymized data.
- Ledger double-entry integrity must be a security requirement, not just a product feature.
- Balance drift detection must be a security control, not just a product metric.

---

## 11. South African Regulatory Considerations

- **FICA Act 38 of 2001:** wallet KYC/AML, ledger record retention 5 years, transaction monitoring integration.
- **POPIA Act 4 of 2013:** wallet customer data is personal information; consent, minimization, retention, s72 cross-border.
- **SARS CARF:** effective 1 March 2026; wallet crypto balances and ledger transactions feed CARF reporting.
- **Banks Act 94 of 1990:** PA may have ledger integrity and audit requirements for licensed banks.
- **NPS Act 78 of 1998:** wallet deposit/withdraw and payment features must meet SARB payment system requirements.
- **CPA 68 of 2008:** wallet terms and disclosures must be plain language, no deceptive claims.
- **Exchange Control Rules:** wallet cross-border transfers may trigger SARB FinSurv reporting.
- **FATF grey-list exit (Oct 2025):** wallet AML/CFT monitoring must be integrated with ledger.

---

## 12. Compliance Gate

**C15 Product-Management + C10 Finance.** Binding compliance veto on any wallet/ledger product gap. C01 Legal-Compliance review required for FICA/POPIA/CARF compliance requirements. C16 Banking-Fintech review required for banking compliance elements.

---

## 13. Rollback Plan

- If wallet feature is found non-compliant: suspend feature, obtain C01/C16 review, re-scope with compliance requirements.
- If ledger double-entry integrity is compromised: suspend ledger writes, obtain external accountant review, remediate ledger code.
- If balance drift is detected: investigate, freeze affected accounts if needed, report to C12 if security incident.
- If wallet recovery flow has security gaps: suspend recovery, obtain C12 review, implement secure recovery.
- If spending limits are bypassed: suspend spending limit feature, implement technical enforcement, re-audit.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C15-PROD-NEO-002 → C15 Product-Management Captain → C10 Finance-CFO Captain → C01 Legal-Compliance Captain → C12 Cybersecurity-Intel Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical wallet/ledger events skip to C15 + C10 + C01 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/product/wallet-and-ledger-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C15 wallet/ledger product outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C10 finance/CARF overlap, C16 banking compliance overlap, C12 security/MPC overlap, C13 Web3/$STM overlap) and arbitrates per workflow-routing.md R3/R5.
