# Master Prompt — SUB-C08-DESIGN-NEO-002 (NeoBank Visual Identity Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/design/visual-identity-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C08-DESIGN-NEO-002  
**Council:** C08 Design-Creative  
**Gate:** Accessibility + C01 Legal-Compliance

---

## 1. Summary

This master prompt instructs SUB-C08-DESIGN-NEO-002 to ingest the NeoBank visual identity and design system data from the Stremiium repo, review and improve the NeoBank visual identity prompts (theme tokens, image prompts, brand guidelines, prediction market UI adjacency), and produce an improved unconsolidated artifact that converts the research into actionable visual identity prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (accessibility, CPA, POPIA).

---

## 2. Assumptions

- The NeoBank design mandate at `01-program/councils/c08-design-creative/CHARTER.md` defines visual identity scope (prediction market UI, wallet UI, trading dashboard, FL Studio visual identity, image prompts, theme tokens, accessibility).
- The NeoBank platform architecture at `06-architecture/platform-design/system-design/` defines UI technology and component structure.
- Visual identity must comply with accessibility standards (WCAG contrast, touch targets).
- No deceptive marketing, no dark patterns, no unverified financial claims in visual design (guardrail from MP-BF04/MP-BD03).
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What is the NeoBank brand color palette (primary, secondary, semantic: success, warning, error, info, gold/amber for financial)?
- What is the NeoBank typography system (font families, sizes, weights, line heights)?
- What are the spacing, radius, and elevation tokens?
- What is the icon system (style, sizes, categories, accessibility labels)?
- What is the badge system (status badges, risk badges, compliance badges, oracle badges)?
- What is the timer component design (countdowns for markets, sessions, cooldowns)?
- What is the probability/odds display design (for prediction market adjacency)?
- What is the stake/payout display design (for financial transactions)?
- How are theme tokens structured (light/dark mode, high contrast, reduced motion)?
- How are image prompts and visual assets managed (source, license, attribution)?

---

## 4. Concerns

- No NeoBank brand color palette exists in current prompts.
- No typography system is defined.
- No spacing/radius/elevation token system exists.
- No icon system with accessibility labels is documented.
- No badge system (status, risk, compliance, oracle) is designed.
- No timer component design exists (countdowns for sessions, cooldowns, markets).
- No probability/odds display design exists (prediction market adjacency).
- No stake/payout display design exists (financial transactions).
- No theme token structure exists (light/dark, high contrast, reduced motion).
- No image asset license/attribution tracking exists.
- No accessibility contrast notes exist for visual tokens.
- No visual identity differentiation from competitors exists.

---

## 5. Suggested Improvements

- Add NeoBank brand color palette to visual identity prompts (primary, secondary, semantic colors: success, warning, error, info, gold/amber for financial, compliance).
- Add typography system (font families, sizes, weights, line heights, language support for SA official languages).
- Add spacing, radius, elevation token system.
- Add icon system (style, sizes, categories, accessibility labels, ARIA attributes).
- Add badge system (status badges, risk badges, compliance badges, oracle badges, verification badges).
- Add timer component design (countdowns for trading sessions, cooldowns, prediction market closing).
- Add probability/odds display design (for prediction market UI adjacency, with no misleading precision).
- Add stake/payout display design (for financial transactions, with risk warnings).
- Add theme token structure (light/dark mode, high contrast, reduced motion, system preference).
- Add image prompt and visual asset management (source, license, attribution, no copyrighted reproduction).
- Add accessibility contrast notes for all visual tokens (WCAG 2.1 AA ratios).
- Add visual identity differentiation analysis (how NeoBank visual identity differs from Discovery, TymeBank, Capitec).
- Reference `01-program/councils/c08-design-creative/CHARTER.md` with specific citations.

---

## 6. Missing Dependencies

- WCAG 2.1 AA contrast ratio requirements (external reference).
- SA official language font support requirements (external).
- Visual design tool access (Figma or similar) from C08 Design-Creative.
- Accessibility audit from external auditor or C12.
- Brand guidelines approval from C08 Chief Design Officer.
- Compliance copy for risk badges and disclosure badges from C01 Legal-Compliance.

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `01-program/councils/c08-design-creative/CHARTER.md` for visual identity scope.
2. Read `06-architecture/platform-design/system-design/README.md` for UI technology and component structure.
3. Read `02-research/landscape/03-neobank-digital-competitors/` for competitor visual identity analysis.
4. Read current visual identity prompt text from the master prompt registry (if any exists).
5. Identify gaps between visual identity requirements and current prompt content (color palette, typography, tokens, icons, badges, timer, probability, stake/payout, themes, images, accessibility, differentiation).
6. Draft improved visual identity prompts with brand color palette, typography system, token system, icon system, badge system, timer component, probability/odds display, stake/payout display, theme structure, image management, accessibility contrast notes, competitor differentiation.
7. Add accessibility contrast notes (WCAG 2.1 AA) for all visual tokens.
8. Add no-copyrighted-visual-reproduction rule.
9. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/design/visual-identity-prompts.md`.
10. Run validation checklist (§9 below).
11. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Color token: `{name, hex, rgb, hsl, wcag_aa_contrast_white, wcag_aa_contrast_black, usage, semantic_meaning}$
- Typography token: `{font_family, font_size, font_weight, line_height, letter_spacing, language_support, usage}$
- Badge token: `{badge_type, color, icon, text, accessibility_label, compliance_required}$
- Theme token: `{theme_name, color_palette_ref, typography_ref, high_contrast, reduced_motion, system_preference}$

---

## 9. Validation Checklist

- [ ] All design sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Brand color palette included
- [ ] Typography system included
- [ ] Spacing/radius/elevation token system included
- [ ] Icon system with accessibility labels included
- [ ] Badge system (status, risk, compliance, oracle) included
- [ ] Timer component design included
- [ ] Probability/odds display design included
- [ ] Stake/payout display design included
- [ ] Theme token structure (light/dark, high contrast, reduced motion) included
- [ ] Image asset license/attribution tracking included
- [ ] Accessibility contrast notes (WCAG 2.1 AA) included
- [ ] Visual identity differentiation from competitors included
- [ ] No-copyrighted-visual-reproduction rule included
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

- Visual identity assets (logos, icons, images) must not infringe on competitor trademarks or copyrights.
- No sensitive security information in visual designs (no security architecture diagrams in brand materials).
- Image assets must be licensed or original; no copyrighted reproduction.
- Badge designs for compliance/risk must be approved by C01 before use (avoid misleading compliance signals).
- No PII or customer data in visual mockups.
- Theme tokens must not be used to bypass accessibility (e.g., low contrast color schemes).

---

## 11. South African Regulatory Considerations

- **CPA 68 of 2008:** no deceptive marketing in visual design; no misleading badges or indicators.
- **POPIA Act 4 of 2013:** no customer PII in visual mockups or design assets.
- **Accessibility:** WCAG 2.1 AA alignment for visual tokens (contrast, focus indicators, reduced motion).
- **FSCA/FAIS:** no misleading financial claims through visual design (gold/amber colors implying guaranteed returns prohibited).
- **Trade Marks Act:** visual identity must not infringe existing SA trademarks (competitor colors, logos).
- **Consumer Protection Act:** no dark patterns implemented through visual design (urgency timers that mislead, false scarcity).
- **FATF grey-list exit (Oct 2025):** visual design must not undermine AML/CFT messaging (e.g., making compliance steps appear optional).

---

## 12. Compliance Gate

**Accessibility + C01 Legal-Compliance.** Binding compliance veto on any visual identity gap affecting accessibility, CPA, or FSCA/FAIS compliance. Trademark clearance required before brand launch.

---

## 13. Rollback Plan

- If accessibility contrast fails: remediate color tokens, re-test WCAG AA, re-deploy design system.
- If trademark infringement is identified: re-brand affected elements, obtain trademark clearance, update all assets.
- If misleading compliance badge is identified: remove badge, obtain C01 approval, re-design with accurate signaling.
- If copyrighted image is used: remove image, replace with licensed/original asset, audit all image assets.
- If dark pattern is found in visual design: remove pattern, obtain C01 review, re-design with compliant alternatives.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C08-DESIGN-NEO-002 → C08 Design-Creative Captain → Accessibility Gate → C01 Legal-Compliance Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical design/brand events skip to C08 + C01 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/design/visual-identity-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C08 visual identity outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C01 legal/trademark overlap, C14 customer success UI overlap, C15 product brand overlap) and arbitrates per workflow-routing.md R3/R5.
