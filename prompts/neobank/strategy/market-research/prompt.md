# Master Prompt — SUB-C04-STRAT-NEO-002 (NeoBank Market Research Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/strategy/market-research-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C04-STRAT-NEO-002  
**Council:** C04 Strategy-Growth  
**Gate:** C04 + C12 Cybersecurity-Intel

---

## 1. Summary

This master prompt instructs SUB-C04-STRAT-NEO-002 to ingest the lawful OSINT and market research data from the Stremiium repo, review and improve the NeoBank market research prompts (MP-BJ09 Lawful OSINT Public Intelligence Dashboard, market research prompts), and produce an improved unconsolidated artifact that converts the research into actionable market research prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (POPIA, lawful OSINT boundaries).

---

## 2. Assumptions

- The lawful OSINT research at `02-research/synthesis/cross-cutting/` and competitor sources at `02-research/landscape/03-neobank-digital-competitors/sources.md` are current as of 2026-10-16.
- MP-BJ09 (Lawful OSINT Public Intelligence Dashboard) is the canonical OSINT research prompt; market research prompts for NeoBank are derived from it.
- Lawful OSINT boundaries are strict: no illegal surveillance, no stalking, no private data, no hacking, no paywall circumvention, no targeted individual tracking.
- All OSINT data sources must be public/open data only.
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- Which public/open data sources are lawful for NeoBank market research (ADS-B, satellite imagery, seismic feeds, maritime AIS, public financial filings, news, social public posts)?
- How does POPIA restrict collection of personal information from public social media for market research?
- What is the lawful basis for processing publicly available personal information under POPIA?
- Which SA regulatory gazettes and filings should be monitored (FSCA, FIC, SARS, SARB, CIPC)?
- How should market research data be stored and retained to comply with POPIA minimization?
- What are the boundaries for monitoring competitor public posts vs targeted individual tracking?
- How does the NeoBank handle paywalled research sources (no circumvention per boundary)?
- What is the audit trail requirement for OSINT data collection?
- How should OSINT-derived market insights be validated before use in product decisions?
- What are the reporting obligations if OSINT collection inadvertently captures regulated personal information?

---

## 4. Concerns

- No lawful OSINT source inventory exists for NeoBank market research.
- No POPIA compliance framework exists for OSINT-collected personal information.
- No paywall circumvention boundary is enforced (must not circumvent paywalls).
- No targeted individual tracking prohibition is documented.
- No audit trail for OSINT data collection exists.
- No validation process for OSINT-derived insights before product use.
- No data minimization approach for OSINT-collected information.
- No handling procedure for inadvertently captured regulated personal information.
- No distinction between public company data and personal data in OSINT collection.
- No SA-specific regulatory gazette monitoring process.

---

## 5. Suggested Improvements

- Add lawful OSINT data source inventory to MP-BJ09 with SA-specific sources (CIPC, FSCA gazette, FIC guidance, SARS, SARB circulars, JSE filings, news, public social posts).
- Add POPIA compliance framework for OSINT-collected personal information (lawful basis, minimization, retention, data subject rights).
- Add strict boundaries section (no illegal surveillance, no stalking, no private data, no hacking, no paywall circumvention, no targeted individual tracking).
- Add public company vs personal data distinction in OSINT collection.
- Add audit trail for OSINT data collection (source, date, method, lawful basis).
- Add validation process for OSINT-derived insights (triangulation, source credibility, uncertainty marking).
- Add data minimization approach (collect only what is needed for market research).
- Add handling procedure for inadvertently captured regulated personal information (quarantine, delete, notify C01).
- Add paywall boundary enforcement (no circumvention; use only freely available sources).
- Add SA regulatory gazette monitoring process (FSCA, FIC, SARS, SARB, CIPC).
- Add market research ethics review (C01 Legal-Compliance + C12 Cybersecurity-Intel).
- Reference lawful OSINT sources with source citations and access dates.

---

## 6. Missing Dependencies

- SA regulatory gazette subscription or monitoring service (external).
- OSINT data collection tools (lawful, public data only).
- POPIA lawful basis assessment for OSINT processing (from C01 Legal-Compliance).
- Data storage and retention specification for OSINT data (from C06/C11).
- External counsel review of OSINT compliance approach.
- Competitor public social media accounts list (publicly observable only).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read MP-BJ09 Lawful OSINT Public Intelligence Dashboard current prompt text from the master prompt registry.
2. Read `02-research/landscape/03-neobank-digital-competitors/sources.md` for existing source inventory.
3. Read `02-research/landscape/03-neobank-digital-competitors/wallets-mobile-money.md` for market segment context.
4. Read `02-research/landscape/02-regulatory-framework/privacy-popia.md` for POPIA constraints on OSINT.
5. Read `01-program/plan/PLAN.md` for market research context.
6. Identify gaps between lawful OSINT boundaries and current market research prompts (source inventory, POPIA framework, boundaries, audit trail, validation, minimization, paywall, gazette monitoring).
7. Draft improved MP-BJ09 with lawful OSINT data source inventory, POPIA compliance framework, strict boundaries, public vs personal data distinction, audit trail, validation process, data minimization, inadvertent capture handling, paywall boundary, gazette monitoring, ethics review.
8. Add NeoBank-specific market research application (competitor monitoring, regulatory change detection, market sizing, segment analysis).
9. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/strategy/market-research-prompts.md`.
10. Run validation checklist (§9 below).
11. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- OSINT source entry: `{source_name, source_type, url, data_type, public_access, poopia_applicable, lawful_basis, collection_method, access_date, evidence_grade}$
- OSINT collection record: `{record_id, source_id, collected_at, collected_by, data_summary, lawful_basis_ref, poopia_consent_required, retention_until, audit_ref}$
- OSINT validation: `{insight_id, source_refs[], triangulation_status, confidence_level, uncertainty_notes, approved_by, approval_date}$

---

## 9. Validation Checklist

- [ ] Lawful OSINT data source inventory included
- [ ] POPIA compliance framework for OSINT included
- [ ] Strict boundaries section included (no illegal surveillance, stalking, private data, hacking, paywall circumvention, targeted tracking)
- [ ] Public company vs personal data distinction included
- [ ] Audit trail for OSINT collection included
- [ ] Validation process for OSINT-derived insights included
- [ ] Data minimization approach included
- [ ] Inadvertent capture handling procedure included
- [ ] Paywall boundary enforcement included
- [ ] SA regulatory gazette monitoring process included
- [ ] Market research ethics review (C01 + C12) included
- [ ] NeoBank-specific market research application included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C04 + C12)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- OSINT-collected data may contain personal information; must be classified and handled per POPIA.
- No covert data collection techniques (scraping behind authentication, scraping private profiles).
- OSINT collection tools must be vetted by C12 Cybersecurity-Intel before use.
- Audit trail must be tamper-evident and retainable.
- Inadvertently captured regulated personal information must be quarantined and reported to C01.
- No OSINT data in logs or dotfiles containing credentials (guardrail from MP-BF04).
- OSINT data storage must be access-controlled (C04, C01, C12 only).

---

## 11. South African Regulatory Considerations

- **POPIA Act 4 of 2013:** publicly available personal information is still personal information; lawful basis required for processing; s72 cross-border controls if data leaves SA.
- **PAIA Act 2 of 2000:** public records access framework; PAIA requests may be needed for some government data.
- **CPA 68 of 2008:** market research must not use deceptive practices.
- **FICA Act 38 of 2001:** OSINT on sanctioned persons/entities may intersect with FICA sanctions screening.
- **FSCA/FAIS:** market research on financial services competitors must respect FSCA confidentiality where applicable.
- **Exchange Control Rules:** OSINT on cross-border capital flows must not facilitate unauthorized transactions.
- **FATF grey-list exit (Oct 2025):** OSINT on AML/CFT developments relevant to market intelligence.

---

## 12. Compliance Gate

**C04 Strategy-Growth + C12 Cybersecurity-Intel.** Binding compliance veto on any OSINT boundary violation. C01 Legal-Compliance review required for POPIA compliance of OSINT processing.

---

## 13. Rollback Plan

- If POPIA violation is identified in OSINT data: cease collection, quarantine data, notify C01, delete unlawfully collected data, implement POPIA-compliant collection.
- If boundary violation occurs (targeted individual, paywall circumvention): halt collection, investigate, retrain, implement technical controls.
- If audit trail is incomplete: reconstruct from available evidence, mark gaps as `[UNKNOWN]`, implement improved logging.
- If validation process is insufficient: re-validate insights with additional sources, mark uncertain insights as `[EST]` or `[UNKNOWN]`.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C04-STRAT-NEO-002 → C04 Strategy-Growth Captain → C12 Cybersecurity-Intel Captain → C01 Legal-Compliance Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical OSINT/privacy events skip to C04 + C12 + C01 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/strategy/market-research-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C04 market research outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C12 security overlap, C01 legal/POPIA overlap) and arbitrates per workflow-routing.md R3/R5.
