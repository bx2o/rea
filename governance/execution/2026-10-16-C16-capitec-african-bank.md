---
doc_type: execution_ledger
council: "C16"
agent: "AGT-C16-SA-INCUMBENTS-C"
date: "2026-10-16"
---

# Execution Ledger — C16 Incumbents (Capitec & African Bank)

**TASK:** Reverse-engineer and research two South African incumbent banks — **Capitec Bank** and
**African Bank** — using only public information (WebSearch / WebFetch) across history, financials,
licence/regulator, products/fees, marketing/sponsorships, technology, leadership/headcount, B-BBEE,
complaints/Ombudsman, partnerships and banking rails. Produce an UnConsolidated artifact set per bank.

**PRIORITY:** High.

**DEADLINE:** 2026-10-16 (same-day deliverable).

**SUCCESS_CRITERIA:**
- Two directory trees under `research/banks/capitec/` and `research/banks/african-bank/`.
- Minimum artifact set: `00-overview.md`; `legal/10-licence-regulatory.md`;
  `financials/20-financials.md` (+ `financials.csv`); `products/30-products-pricing.md` (+ `products.csv`);
  `marketing/40-marketing-campaigns-sponsorships.md`; `technology/50-tech-stack.md`;
  `people/60-people-headcount.md`; `customer/70-customer-service-complaints.md`;
  `partnerships/80-partnerships.md`; `banking/90-banking-rails.md`.
- Every file carries YAML front-matter (`bank`, `council: "C16"`, `department`, `status`, `confidence`,
  `sources`, `last_updated: "2026-10-16"`) and a `Sources` list.
- No fabrication; inline epistemic tags; markdown-link citations.

**CONTEXT:** Part of the SA NeoBank launch competitive-intelligence programme. Public-only scope.
Follows `architecture/00-SYSTEM-OVERVIEW.md` and `architecture/DATA-MODEL-CONTRACTS.md`.

**RESULT:** COMPLETE. 24 files created (12 per bank: 10 markdown + 2 CSV).

Capitec artifacts:
- `research/banks/capitec/00-overview.md`
- `research/banks/capitec/legal/10-licence-regulatory.md`
- `research/banks/capitec/financials/20-financials.md` + `financials.csv`
- `research/banks/capitec/products/30-products-pricing.md` + `products.csv`
- `research/banks/capitec/marketing/40-marketing-campaigns-sponsorships.md`
- `research/banks/capitec/technology/50-tech-stack.md`
- `research/banks/capitec/people/60-people-headcount.md`
- `research/banks/capitec/customer/70-customer-service-complaints.md`
- `research/banks/capitec/partnerships/80-partnerships.md`
- `research/banks/capitec/banking/90-banking-rails.md`

African Bank artifacts:
- `research/banks/african-bank/00-overview.md`
- `research/banks/african-bank/legal/10-licence-regulatory.md`
- `research/banks/african-bank/financials/20-financials.md` + `financials.csv`
- `research/banks/african-bank/products/30-products-pricing.md` + `products.csv`
- `research/banks/african-bank/marketing/40-marketing-campaigns-sponsorships.md`
- `research/banks/african-bank/technology/50-tech-stack.md`
- `research/banks/african-bank/people/60-people-headcount.md`
- `research/banks/african-bank/customer/70-customer-service-complaints.md`
- `research/banks/african-bank/partnerships/80-partnerships.md`
- `research/banks/african-bank/banking/90-banking-rails.md`

**EVIDENCE:** Primary sources include Capitec FY2026 audited summary financial statements and FY2026
integrated annual report; Capitec 2026 fee schedule and B-BBEE certificate; African Bank FY25 SENS results
release, FY25 Integrated Report, 1H26 interim presentation and FY2025 AFS; plus SARB, PIC, PMG and reputable
press. Key caveats recorded: Capitec's "no-sponsorship" hypothesis is **contradicted** (it does sponsor
selected cultural/community properties); African Bank "Tap2Glass" could not be evidenced and is marked [UNK];
African Bank's technology stack vendor detail is [UNK].
