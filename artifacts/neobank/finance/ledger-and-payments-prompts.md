# Master Prompt — SUB-C10-FIN-NEO-002 (NeoBank Ledger and Payments Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** qwen3.8-omni-flash.  
**Model policy:** LOCKED. Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/finance/ledger-and-payments-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C10-FIN-NEO-002  
**Council:** C10 Finance-CFO  
**Gate:** C10 + C16 Banking-Fintech

---

## 1. Summary

This master prompt instructs SUB-C10-FIN-NEO-002 to ingest the NeoBank ledger, payments, and reconciliation research data from the Stremiium repo, review and improve the NeoBank ledger/payments prompts (MP-BF09 Ledger Service Spec, MP-BF10 Payment Orchestration, MP-BE13 Reconciliation Engine), and produce an improved unconsolidated artifact that converts the research into actionable ledger and payments prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (NPS, PayShap, ISO 20022, FICA, CARF, Banks Act).

---

## 2. Assumptions

- The NeoBank ledger and payments architecture at `06-architecture/platform-design/integrations/` and `domain-model/` defines double-entry ledger, money & currency, payment integrations.
- The NeoBank integrations research at `02-research/synthesis/cross-cutting/add-on/02-PAYMENTS-RAILS-MAP.md` defines SA payment rails (PayShap, EFT, clearing, settlement).
- MP-BF09 (Ledger Service Spec), MP-BF10 (Payment Orchestration Spec), and MP-BE13 (Reconciliation Engine) are the canonical ledger/payments prompts requiring improvement; no other ledger/payments prompts are in scope for this subagent.
- The ledger must be double-entry with event-sourced audit trail.
- No live payment execution without approval (per MP-BF10).
- Environment tiers: SIM, PAPER, STAGING, LIVE approved only (per MP-BF10).
- qwen3.8-omni-flash is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What is the NeoBank double-entry ledger chart of accounts (customer ledger, treasury ledger, settlement ledger, trading ledger adjacency, $STM ledger adjacency)?
- How does the event-sourced audit ledger capture all ledger mutations immutably?
- Which payment rails will the NeoBank support (PayShap, EFT, instant EFT, card, RTC) and in what order?
- What is the ISO 20022 messaging strategy for payment instructions?
- How does idempotency work for payment intents (idempotency keys, retries, timeouts, partial failure)?
- What is the reconciliation frequency and scope (orders, deals, positions, balance, equity, margin, commissions, swaps, profits)?
- How are reconciliation exceptions detected and handled (missing fills, duplicate fills, unmatched orders, balance drift, position drift, PnL mismatch)?
- What is the approval gate workflow for live payments?
- How does the ledger integrate with FICA transaction monitoring and CARF reporting?
- What is the balance drift detection mechanism and alerting?

---

## 4. Concerns

- No double-entry ledger chart of accounts is defined in current prompts.
- No event-sourced audit ledger specification exists.
- No payment rail prioritization is documented (which rails first, which later).
- No ISO 20022 messaging specification exists.
- No idempotency key strategy is defined for payment intents.
- No reconciliation frequency or scope is specified.
- No reconciliation exception workflow is documented.
- No live payment approval gate is specified.
- No ledger integration with FICA/CARF reporting is specified.
- No balance drift detection mechanism is defined.
- No $STM ledger adjacency is specified.
- No trading ledger adjacency is specified.

---

## 5. Suggested Improvements

- Add double-entry ledger specification to MP-BF09 (customer ledger, treasury ledger, settlement ledger, trading ledger adjacency, $STM ledger adjacency, chart of accounts).
- Add event-sourced audit ledger specification to MP-BF09 (immutable audit trail, append-only events, deterministic fold).
- Add payment rail specification to MP-BF10 (PayShap, EFT, instant EFT, card, RTC; prioritization; ISO 20022 messaging).
- Add idempotency key specification to MP-BF10 (idempotency keys, retries, timeouts, partial failure handling).
- Add approval gate workflow to MP-BF10 (no live payment without approval; environment tiers SIM/PAPER/STAGING/LIVE approved only).
- Add reconciliation engine specification to MP-BE13 (reconcile orders, deals, positions, balance, equity, margin, commissions, swaps, profits, strategy attribution, risk attribution).
- Add reconciliation exception detection (missing fills, duplicate fills, unmatched orders, balance drift, position drift, PnL mismatch) to MP-BE13.
- Add reconciliation exception workflow to MP-BE13 (detection, alerting, human review, resolution, audit report).
- Add ledger integration with FICA transaction monitoring and CARF reporting to MP-BF09.
- Add balance drift detection and alerting to MP-BF09.
- Add duplicate detection and missing fill detection to MP-BF09/MP-BE13.
- Add reporting workflows to MP-BF09.
- Reference `06-architecture/platform-design/domain-model/`, `integrations/`, `02-research/synthesis/cross-cutting/add-on/02-PAYMENTS-RAILS-MAP.md` with specific citations.

---

## 6. Missing Dependencies

- Payment rail onboarding agreements (PayShap, EFT, card processors) from C16 Banking-Fintech.
- ISO 20022 messaging specification from payment rail providers.
- Ledger technology selection (build vs buy core ledger) from C06/C11.
- FICA transaction monitoring integration specification from C01/C12.
- CARF reporting data specification from C01/C10.
- $STM ledger specification from C13 Web3-Finance.
- Reconciliation exception SLA from C02 Operations.
- External accountant review of ledger design (double-entry correctness).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `06-architecture/platform-design/domain-model/README.md` for double-entry ledger, money & currency, bounded contexts.
2. Read `06-architecture/platform-design/integrations/README.md` for payment integrations, KYC, core build-vs-buy, open finance, vendor catalogue.
3. Read `02-research/synthesis/cross-cutting/add-on/02-PAYMENTS-RAILS-MAP.md` for SA payment rails (PayShap, EFT, clearing, settlement).
4. Read `01-program/plan/PLAN.md` for ledger/payments-related WBS items.
5. Read MP-BF09, MP-BF10, and MP-BE13 current prompt text from the master prompt registry.
6. Identify gaps between ledger/payments research and current prompt content (chart of accounts, event-sourced audit, payment rails, ISO 20022, idempotency, approval gates, reconciliation scope, exception workflow, FICA/CARF integration, balance drift).
7. Draft improved MP-BF09 Ledger Service Spec with double-entry ledger, event-sourced audit ledger, customer/treasury/settlement/trading/$STM ledger adjacency, reconciliation jobs, balance drift detection, duplicate detection, missing fill detection, reporting.
8. Draft improved MP-BF10 Payment Orchestration Spec with payment intents, idempotency keys, retries, timeouts, partial failure, reconciliation, settlement status, fraud checks, approval gates, environment tiers.
9. Draft improved MP-BE13 Reconciliation Engine with reconciliation schema, exception workflow, audit report, tests.
10. Add FICA/CARF integration to MP-BF09.
11. Add balance drift detection to MP-BF09.
12. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/finance/ledger-and-payments-prompts.md`.
13. Run validation checklist (§9 below).
14. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Ledger entry: `{entry_id, transaction_id, account_code, debit_amount, credit_amount, currency, timestamp, event_id, audit_ref, ledger_type (customer/treasury/settlement/trading/stm)}$
- Payment intent: `{intent_id, idempotency_key, payer_account, payee_account, amount, currency, rail, status, approval_required, approval_ref, created_at, settled_at, failure_reason}$
- Reconciliation exception: `{exception_id, type (missing_fill/duplicate_fill/unmatched_order/balance_drift/position_drift/pnl_mismatch), detected_at, severity, status, resolution, audit_ref}$
- Balance drift alert: `{alert_id, account_code, expected_balance, actual_balance, drift_amount, detected_at, acknowledged_by, resolved_at}$

---

## 9. Validation Checklist

- [ ] All ledger/payments research sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `qwen3.8-omni-flash` (no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Double-entry ledger specification included
- [ ] Event-sourced audit ledger included
- [ ] Payment rail specification included (PayShap, EFT, instant EFT, card, RTC)
- [ ] ISO 20022 messaging specification included
- [ ] Idempotency key specification included
- [ ] Approval gate workflow included
- [ ] Environment tiers (SIM/PAPER/STAGING/LIVE approved only) included
- [ ] Reconciliation engine specification included
- [ ] Reconciliation exception detection included
- [ ] Reconciliation exception workflow included
- [ ] FICA/CARF integration included
- [ ] Balance drift detection included
- [ ] Duplicate detection and missing fill detection included
- [ ] Reporting workflows included
- [ ] $STM ledger adjacency included
- [ ] Trading ledger adjacency included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C10 + C16)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Ledger data contains financial transaction information; encrypted at rest and in transit; access restricted to C10, C16, C12 only.
- No payment credentials or API keys in ledger artifacts (guardrail from MP-BF04).
- Event-sourced audit ledger must be tamper-evident and append-only.
- Idempotency keys must be cryptographically random to prevent replay attacks.
- Approval gate must require multi-party authorization for high-value payments.
- Reconciliation exceptions must be securely logged with full audit trail.
- Balance drift alerts must be investigated promptly to detect potential fraud.
- No ledger data in application logs (guardrail from MP-BF04).

---

## 11. South African Regulatory Considerations

- **NPS Act 78 of 1998:** payment system participation, PayShap, clearing/settlement access, PSMB→SARB transition (Aug 2026).
- **ISO 20022:** payment messaging standard for SA payment modernisation.
- **FICA Act 38 of 2001:** transaction monitoring and record retention (5 years) integrated with ledger.
- **SARS CARF:** effective 1 March 2026; ledger data feeds CARF reporting.
- **Banks Act 94 of 1990:** PA prudential requirements for banking ledgers (capital, liquidity, BA returns).
- **Exchange Control Rules:** cross-border payments trigger SARB FinSurv reporting; ADLA for forex.
- **Companies Act 71 of 2008:** financial record-keeping requirements.
- **Tax Administration Act:** ledger data supports tax reporting (VAT, income tax, STT).
- **FATF grey-list exit (Oct 2025):** AML/CFT transaction monitoring must be integrated with ledger.

---

## 12. Compliance Gate

**C10 Finance + C16 Banking-Fintech.** Binding compliance veto on any ledger/payments gap. No live payment execution without C16 approval and C10 budget authority. Environment tiers enforced: LIVE only with explicit approval.

---

## 13. Rollback Plan

- If ledger design is found incorrect: revert to previous spec, obtain external accountant review, re-issue with corrected double-entry design.
- If payment rail onboarding is delayed: operate in SIM/PAPER mode, defer rail activation, re-assess timeline.
- If idempotency is broken: halt payment processing, fix idempotency implementation, re-test, re-deploy.
- If reconciliation exceptions are unresolved: suspend affected payment types, route to manual reconciliation, escalate to C10/C16.
- If balance drift is detected: investigate immediately, freeze affected accounts if fraud suspected, report to C12 if security incident.
- If live payment approval gate is bypassed: revoke access, audit all payments since bypass, implement enhanced approval controls.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C10-FIN-NEO-002 → C10 Finance-CFO Captain → C16 Banking-Fintech Captain → C12 Cybersecurity-Intel Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical ledger/payment events skip to C10 + C16 + C12 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/finance/ledger-and-payments-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C10 ledger/payments outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C16 banking compliance overlap, C12 security overlap, C11 dev-engineering overlap) and arbitrates per workflow-routing.md R3/R5.
