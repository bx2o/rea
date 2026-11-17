# Master Prompt — SUB-C10-FIN-NEO-003 (NeoBank Treasury and Capital Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/finance/treasury-and-capital-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C10-FIN-NEO-003  
**Council:** C10 Finance-CFO  
**Gate:** C10 + Executive

---

## 1. Summary

This master prompt instructs SUB-C10-FIN-NEO-003 to ingest the NeoBank treasury, capital, and budget governance data from the Stremiium repo, review and improve the NeoBank treasury/capital prompts (budget authority, capital adequacy, treasury, founder stipends, audit evidence), and produce an improved unconsolidated artifact that converts the research into actionable treasury and capital prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (Banks Act, Basel III/IV, Companies Act, CARF, tax).

---

## 2. Assumptions

- The NeoBank finance charter at `01-program/councils/c10-finance-cfo/CHARTER.md` defines the CFO mandate including budget authority.
- The COUNCIL_REGISTRY.json at `.stremiium/config/councils/COUNCIL_REGISTRY.json` shows C10 has "Budget Authority".
- The NeoBank regulatory research at `02-research/landscape/02-regulatory-framework/banking-licensing.md` defines capital requirements (R250m for a bank).
- The NeoBank risk register at `01-program/delivery/risk/` contains 30 seeded risks with appetite statement.
- MP-BD07 (Taxes and Accounting Firm Pack) and MP-BI16 (Founder Stipend Labor and Tax) provide adjacent tax/labor content.
- Stremiium Trading Firm is private-funded; no public investor funds, no client funds, no pooled public capital unless separately approved.
- C10 holds budget authority; all capital allocation decisions require C10 approval.
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What is the NeoBank capital requirement (R250m for full banking licence per Banks Act, or alternative for mutual/co-op bank)?
- What is the capital-raising strategy (founder capital, private investment, retained earnings)?
- What are the Basel III/IV capital and liquidity requirements (LCR, NSFR, leverage ratio, output floor)?
- How does the NeoBank manage treasury operations (liquidity, cash management, investment of surplus funds)?
- What is the capital adequacy monitoring and reporting framework (BA returns, PA supervisory engagement)?
- How are founder stipends (R10K to four founding members) treated from a capital and tax perspective?
- What is the budget allocation process across the 16 councils (C10 budget authority)?
- What are the audit evidence requirements for treasury and capital (audit trail, reconciliations, board resolutions)?
- How does exchange control affect capital outflows and foreign currency holdings?
- What is the liquidity risk management framework (liquidity buffers, stress testing, contingency funding)?

---

## 4. Concerns

- No NeoBank capital requirement analysis exists in current prompts.
- No capital-raising strategy is documented.
- No Basel III/IV capital and liquidity framework exists.
- No treasury operations specification exists.
- No capital adequacy monitoring and reporting framework exists.
- No founder stipend capital/tax treatment analysis exists.
- No budget allocation process across councils is defined.
- No audit evidence framework for treasury/capital exists.
- No exchange control impact analysis on capital exists.
- No liquidity risk management framework exists.
- No private-funded boundary enforcement mechanism exists (no public/client funds without approval).

---

## 5. Suggested Improvements

- Add NeoBank capital requirement analysis to treasury prompts (R250m for full bank, alternatives: mutual bank, co-op bank, sponsor model, non-bank PSP).
- Add capital-raising strategy (founder capital, private investment, retained earnings; private-funded boundary).
- Add Basel III/IV capital and liquidity framework (LCR, NSFR, leverage ratio, output floor, post-crisis reforms implemented 1 July 2025).
- Add treasury operations specification (liquidity management, cash management, investment of surplus funds, counterparty limits).
- Add capital adequacy monitoring and reporting framework (BA returns, PA supervisory engagement, regulatory capital calculations).
- Add founder stipend treatment (capital allocation, PAYE/UIF/SDL, board resolution, audit trail per MP-BI16).
- Add budget allocation process across 16 councils (C10 budget authority, spend thresholds, approval workflows).
- Add audit evidence requirements for treasury and capital (audit trail, reconciliations, board resolutions, capital proofs).
- Add exchange control impact analysis on capital (SARB FinSurv, ADLA, cross-border capital flows).
- Add liquidity risk management framework (liquidity buffers, stress testing, contingency funding, LCR/NSFR).
- Add private-funded boundary enforcement (approval gates: Legal-Compliance + Banking-Fintech + Finance + Mychael for any public/client funds).
- Add treasury policy (investment policy, risk limits, counterparty credit limits, hedging policy).
- Reference `01-program/councils/c10-finance-cfo/CHARTER.md`, `02-research/landscape/02-regulatory-framework/banking-licensing.md`, `.stremiium/config/councils/COUNCIL_REGISTRY.json` with specific citations.

---

## 6. Missing Dependencies

- Capital requirement confirmation from PA/SARB (external, depends on licence type).
- External accountant review of capital calculations.
- Board resolution templates for capital allocation (from C01 Legal-Compliance).
- Treasury management system specification (from C11 Dev-Engineering).
- Banking licence application financial projections (from C01/C16 licensing strategy).
- Exchange control guidance from SARB FinSurv (external).
- Liquidity stress testing methodology (from C12 Risk/C10 Finance).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `01-program/councils/c10-finance-cfo/CHARTER.md` for CFO mandate and budget authority.
2. Read `.stremiium/config/councils/COUNCIL_REGISTRY.json` for C10 budget authority confirmation.
3. Read `02-research/landscape/02-regulatory-framework/banking-licensing.md` for capital requirements.
4. Read `02-research/landscape/02-regulatory-framework/tax-governance.md` for tax implications of capital.
5. Read `01-program/delivery/risk/` for risk register and appetite statement.
6. Read `01-program/plan/PLAN.md` for treasury/capital-related WBS items.
7. Read MP-BD07 and MP-BI16 current prompt text from the master prompt registry.
8. Identify gaps between treasury/capital research and current prompt content (capital requirements, raising strategy, Basel III/IV, treasury operations, capital adequacy reporting, founder stipend, budget allocation, audit evidence, exchange control, liquidity risk, private-funded boundary).
9. Draft improved treasury/capital prompts with capital requirement analysis, raising strategy, Basel III/IV framework, treasury operations, capital adequacy monitoring, founder stipend treatment, budget allocation process, audit evidence, exchange control analysis, liquidity risk framework, private-funded boundary enforcement.
10. Add treasury policy (investment policy, risk limits, counterparty limits, hedging).
11. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/finance/treasury-and-capital-prompts.md`.
12. Run validation checklist (§9 below).
13. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Capital requirement: `{requirement_type, amount, currency, regulator, basis, evidence_ref, status, confirmation_date}$
- Capital allocation: `{allocation_id, council, purpose, amount, currency, c10_approval, board_resolution, date, audit_ref}$
- Liquidity buffer: `{buffer_type, amount, currency, purpose, trigger_condition, replenishment_policy, last_tested}$
- Founder stipend: `{founder_name, amount, currency, classification, paye_applicable, uif_applicable, sdl_applicable, board_resolution, contract_type, approval_date, audit_trail}$

---

## 9. Validation Checklist

- [ ] All treasury/capital research sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Capital requirement analysis included (R250m, alternatives)
- [ ] Capital-raising strategy included
- [ ] Basel III/IV capital and liquidity framework included
- [ ] Treasury operations specification included
- [ ] Capital adequacy monitoring and reporting framework included
- [ ] Founder stipend treatment included
- [ ] Budget allocation process across councils included
- [ ] Audit evidence requirements included
- [ ] Exchange control impact analysis included
- [ ] Liquidity risk management framework included
- [ ] Private-funded boundary enforcement included
- [ ] Treasury policy (investment, risk limits, counterparty limits, hedging) included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C10 + Executive)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Treasury and capital data contains sensitive financial information; restrict access to C10, C12, Executive only.
- No bank account details, payment credentials, or signing keys in treasury artifacts (guardrail from MP-BF04).
- Capital allocation approvals must require multi-party authorization (C10 + board).
- Treasury investment policy must specify approved counterparties and instruments only.
- Liquidity buffer data must be tamper-evident for regulatory examination.
- Board resolutions for capital allocation must be securely stored with audit trail.
- Private-funded boundary violations must be detectable and alertable.

---

## 11. South African Regulatory Considerations

- **Banks Act 94 of 1990:** s12 authorisation, s16 registration; minimum capital R250m for a bank; PA prudential oversight.
- **Mutual Banks Act 124 of 1993:** alternative capital requirements for mutual banks.
- **Co-operative Banks Act 40 of 2007:** alternative capital requirements for co-operative banks.
- **Basel III/IV:** capital and liquidity standards (LCR, NSFR, leverage ratio, output floor) implemented 1 July 2025.
- **FSRA 9 of 2017:** Prudential Authority oversight of capital adequacy.
- **Companies Act 71 of 2008:** capital maintenance, financial assistance, director duties.
- **Tax Administration Act:** tax on capital gains, dividends, corporate income.
- **Exchange Control Rules:** SARB FinSurv oversight of capital outflows, foreign currency holdings, ADLA appointments.
- **SARS CARF:** effective 1 March 2026; capital and investment reporting overlaps with CARF.
- **FATF grey-list exit (Oct 2025):** capital flows subject to enhanced AML/CFT scrutiny.

---

## 12. Compliance Gate

**C10 Finance + Executive.** Binding compliance veto on any treasury/capital gap. C10 budget authority applies to all capital allocation. No public investor funds, no client funds, no pooled public capital unless separately approved by Legal-Compliance, Banking-Fintech, Finance, and Mychael.

---

## 13. Rollback Plan

- If capital requirement is miscalculated: suspend capital deployment, obtain external accountant review, re-calculate with PA guidance, re-submit.
- If capital-raising source is non-compliant (public funds without approval): return funds, obtain separate approvals, document source of funds.
- If Basel III/IV compliance gaps are found: remediate capital/liquidity, obtain PA guidance, re-apply for licence when compliant.
- If treasury operations breach risk limits: freeze treasury activities, review counterparty exposures, implement enhanced controls.
- If budget allocation exceeds authority: suspend spending, obtain C10 approval, re-allocate within authority.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C10-FIN-NEO-003 → C10 Finance-CFO Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical treasury/capital events skip to C10 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/finance/treasury-and-capital-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C10 treasury/capital outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C01 legal overlay, C16 banking compliance overlay, C02 operations budget overlay) and arbitrates per workflow-routing.md R3/R5.
