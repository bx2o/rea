# Master Prompt — SUB-C08-DESIGN-NEO-001 (NeoBank UI/UX Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/design/ui-ux-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C08-DESIGN-NEO-001  
**Council:** C08 Design-Creative  
**Gate:** Accessibility + C01 Legal-Compliance

---

## 1. Summary

This master prompt instructs SUB-C08-DESIGN-NEO-001 to ingest the NeoBank design and architecture data from the Stremiium repo, review and improve the NeoBank UI/UX prompts (MP-BF01 Project Structure frontend/UI sections, wallet UI, trading dashboard), and produce an improved unconsolidated artifact that converts the research into actionable UI/UX prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (POPIA, CPA, accessibility).

---

## 2. Assumptions

- The NeoBank platform architecture at `06-architecture/platform-design/system-design/` defines UI/UX requirements and technology selection.
- The NeoBank council charter at `01-program/councils/c08-design-creative/CHARTER.md` defines the design mandate.
- MP-BF01 Project Structure frontend/UI sections are the canonical UI/UX prompts requiring improvement; no other UI/UX prompts are in scope for this subagent.
- UI/UX specifications must be treated as both fixed frontend requirements and testable user-journey hypotheses per global rule 7.
- Accessibility compliance is mandatory (WCAG, South African accessibility context).
- No dark patterns, no deceptive marketing, no unverified financial claims in UI/UX (guardrail from MP-BF04/MP-BD03).
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What are the NeoBank user journeys (onboarding, KYC/AML, wallet creation, PIN verification, send/receive, dispute, support)?
- What accessibility requirements apply (WCAG 2.1 AA, mobile tap targets, screen reader support, color contrast)?
- What is the NeoBank visual identity (color, typography, spacing, radius, elevation, icon, badge)?
- How are compliance disclosures presented in UI (risk warnings, capital at risk, no guaranteed returns, POPIA consent)?
- What are the mobile gestures and interaction patterns for the NeoBank app?
- How are error states, loading states, and empty states designed?
- What is the PIN verification UI flow (default-on, opt-out warning, opt-out logging, reversal)?
- How are transaction monitoring alerts presented to users without tipping off?
- What are the low-bandwidth fallback options for the NeoBank UI?
- How are timezone and locale handled (South African context, multiple languages)?

---

## 4. Concerns

- No NeoBank user journey mapping exists in current prompts.
- No accessibility compliance specification exists (WCAG, tap targets, screen readers).
- No visual identity system exists for NeoBank (color, typography, components).
- No compliance disclosure UI pattern exists (risk warnings, POPIA consent, no guaranteed returns).
- No PIN verification UI flow is documented (default-on, opt-out, warning, logging).
- No dark pattern prevention is specified in UI/UX prompts.
- No low-bandwidth fallback is designed for SA context (data costs, connectivity).
- No error/loading/empty state design system exists.
- No timezone/locale handling is specified for South African context.
- No user-journey hypothesis testing approach is defined (fixed requirements vs testable hypotheses).

---

## 5. Suggested Improvements

- Add NeoBank user journey map to UI/UX prompts (onboarding, KYC/AML, wallet creation, PIN verification, send/receive, dispute, support).
- Add accessibility compliance specification (WCAG 2.1 AA, mobile tap targets, screen reader support, color contrast, keyboard navigation).
- Add NeoBank visual identity system (color palette, typography, spacing, radius, elevation, icon system, badge system).
- Add compliance disclosure UI patterns (risk warnings, capital at risk, no guaranteed returns, POPIA consent checkboxes, fee transparency).
- Add PIN verification UI flow (default-on, opt-out with security vulnerability warning, opt-out logging, easy reversal, step-up authentication for high-risk).
- Add dark pattern prevention guidelines (no deceptive patterns, no undisclosed opt-outs, no misleading financial claims).
- Add low-bandwidth fallback design (progressive enhancement, offline states, data-saver mode).
- Add error/loading/empty state design system.
- Add timezone and locale handling (SA context, multiple official languages, date/time formats).
- Add user-journey hypothesis testing framework (fixed frontend requirements vs testable user-journey hypotheses per global rule 7).
- Add transaction alert UI that avoids tipping-off (discrete notifications, no explicit STR references).
- Reference `06-architecture/platform-design/system-design/`, `01-program/councils/c08-design-creative/CHARTER.md` with specific citations.

---

## 6. Missing Dependencies

- WCAG 2.1 AA accessibility guidelines (external reference).
- SA official language requirements for financial services (external).
- User research data from C14 Customer Success / C15 Product-Management (may need to be requested).
- Accessibility audit schedule from C12 Cybersecurity-Intel or external auditor.
- Visual design files (Figma or similar) from C08 Design-Creative team.
- Compliance copy from C01 Legal-Compliance (risk warnings, POPIA consent text).
- Mobile device lab for testing (various SA device types and network conditions).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `06-architecture/platform-design/system-design/README.md` for UI/UX requirements and technology selection.
2. Read `01-program/councils/c08-design-creative/CHARTER.md` for design mandate and scope.
3. Read `06-architecture/platform-design/domain-model/` for bounded contexts affecting UI.
4. Read `01-program/plan/PLAN.md` for UI/UX-related WBS items.
5. Read MP-BF01 Project Structure frontend/UI sections current text from the master prompt registry.
6. Identify gaps between design requirements and current prompt content (user journeys, accessibility, visual identity, compliance disclosures, PIN flow, dark patterns, low-bandwidth, states, locale, hypothesis testing).
7. Draft improved UI/UX prompts with user journey map, accessibility spec, visual identity system, compliance disclosure patterns, PIN verification flow, dark pattern prevention, low-bandwidth fallback, state design system, timezone/locale handling, hypothesis testing framework.
8. Add transaction alert UI that avoids tipping-off.
9. Separate fixed frontend requirements from testable user-journey hypotheses per global rule 7.
10. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/design/ui-ux-prompts.md`.
11. Run validation checklist (§9 below).
12. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- User journey: `{journey_name, steps[], touchpoints[], compliance_gates[], drop_off_points[], hypothesis_to_test}$
- Accessibility spec: `{wcag_level, tap_target_min_size, color_contrast_ratio, screen_reader_support, keyboard_navigation, low_bandwidth_fallback}$
- Visual identity: `{color_palette, typography, spacing, radius, elevation, icon_system, badge_system, component_mapping}$
- Compliance disclosure: `{disclosure_type, trigger, copy, placement, poopia_consent_required, regulatory_reference}$

---

## 9. Validation Checklist

- [ ] All design/architecture sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] User journey map included
- [ ] Accessibility compliance specification included
- [ ] Visual identity system included
- [ ] Compliance disclosure UI patterns included
- [ ] PIN verification UI flow included
- [ ] Dark pattern prevention guidelines included
- [ ] Low-bandwidth fallback design included
- [ ] Error/loading/empty state design system included
- [ ] Timezone and locale handling included
- [ ] User-journey hypothesis testing framework included
- [ ] Transaction alert UI avoiding tipping-off included
- [ ] Fixed requirements separated from testable hypotheses
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (Accessibility + C01)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- UI/UX designs containing security patterns (PIN entry, biometric, MPC status) must not reveal security architecture details.
- No credentials or secrets in UI mockups or design specs (guardrail from MP-BF04).
- Compliance disclosures must be accurate and approved by C01 before implementation.
- PIN entry UI must use secure input fields (masked, no copy/paste, no screen recording).
- User data in design mockups must be anonymized; no real customer PII.
- Accessibility features must not create security bypasses (e.g., screen reader reading masked PIN).
- Dark pattern prevention must be technically enforceable, not just design guidance.

---

## 11. South African Regulatory Considerations

- **POPIA Act 4 of 2013:** POPIA consent UI must be freely given, specific, informed, unambiguous; data subject rights accessible in UI.
- **CPA 68 of 2008:** plain language requirement, no deceptive marketing, cooling-off rights visible in UI.
- **FAIS Act 37 of 2002:** financial advice disclaimers and risk warnings in UI where applicable.
- **FSCA/FAIS:** no misleading financial claims in UI; capital at risk disclosures for investment-related features.
- **Accessibility:** South African accessibility context (WCAG alignment, SABS standards where applicable).
- **Consumer protection:** no dark patterns, no unfair terms in UI flows.
- **Exchange Control Rules:** cross-border transfer UI must reflect SARB restrictions where applicable.
- **FATF grey-list exit (Oct 2025):** AML/CFT messaging in UI must reflect enhanced transparency expectations.

---

## 12. Compliance Gate

**Accessibility + C01 Legal-Compliance.** Binding compliance veto on any UI/UX gap affecting accessibility, POPIA consent, or CPA/FAIS compliance. External counsel review required for compliance disclosure copy.

---

## 13. Rollback Plan

- If accessibility compliance fails: remediate components, re-test with assistive technologies, re-deploy after WCAG validation.
- If POPIA consent UI is inadequate: suspend data collection via UI, implement compliant consent, re-obtain consent from existing users.
- If dark pattern is identified: remove pattern, obtain C01 review, re-design with compliant alternatives.
- If compliance disclosure is inaccurate: withdraw UI, obtain legal approval, re-issue with corrected disclosures.
- If low-bandwidth fallback fails: implement progressive enhancement, test on SA network conditions, re-deploy.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C08-DESIGN-NEO-001 → C08 Design-Creative Captain → Accessibility Gate → C01 Legal-Compliance Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical design/accessibility events skip to C08 + C01 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/design/ui-ux-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C08 UI/UX outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C01 legal/POPIA overlap, C14 customer success dispute UI overlap, C15 product roadmap overlap) and arbitrates per workflow-routing.md R3/R5.
