# C01 — Legal-Compliance Council Charter

**Council ID:** C01 · **Directory:** `c01-legal-compliance` · **Tier:** 1 (Strategic)
**SAOS identity:** Legal-Compliance · **Captain role:** Legal-Compliance Captain
**Program:** NeoBank ZA (`Project Umoya`) · **Version:** 1.0 · **Date:** 2026-10-16 · **Status:** PROPOSED

Back-links: [council index](../README.md) · [program governance](../../program/governance/README.md) · [risk register](../../program/risk/risk-register.md).

---

## 1. Council ID & name

**C01 — Legal-Compliance.** The gatekeeper council for legal, regulatory and privacy compliance on the program. It holds the **legal & privacy compliance special authority** and a **binding veto** on any artifact that would breach law or regulation.

## 2. Mandate

Ensure the NeoBank is **lawful by design** across the SA perimeter — Banks Act, FICA, POPIA, NPS Act, FAIS, NCA, Companies Act — and that every money/data surface ships only with documented compliance sign-off. C01 does not build product; it assures it.

## 3. Captain role

**Legal-Compliance Captain** (Tier-2). Owns: legal strategy, compliance gate decisions, regulatory engagement, contract oversight, privacy programme leadership, and escalation to Sparkling Curious. Holds binding authority to **block** releases that fail compliance gates.

## 4. Agent roster (PROPOSED)

> ⚠️ **Proposed roster — not staffed.** Invented-but-plausible identifiers for review; not facts.

| Agent | Focus |
|---|---|
| AGT-legal-counsel | General legal advisory; corporate & contract law |
| AGT-regulatory-affairs | PA/SARB/FSCA/FIC engagement; application packs |
| AGT-aml-fica-officer | RMCP, CDD/EDD, sanctions, FIC reporting |
| AGT-privacy-officer | POPIA/PAIA, Information Officer duties, DSARs |
| AGT-conduct-compliance | FAIS/COFI, NCA, Code of Banking Practice, NFO |
| AGT-contract-reviewer | Vendor/sponsor/partner contract review |
| SUB-* | Leaf tasks: clause review, form checks, filing prep |

## 5. Scope & authority

- **In scope:** licensing applications (with C16), POPIA/privacy, FICA/AML, FAIS/conduct, NCA/credit compliance, contracts, governance legal review, regulatory correspondence.
- **Authority:** binding compliance veto; legal & privacy special authority; sign-off on G-COMP and G-DATA gates.
- **Out of scope:** commercial decision-making (C04/C10), building controls (C11/C12 implement what C01 specifies).

## 6. Key artifacts owned

| Artifact | Notes |
|---|---|
| Regulatory & licensing pack | See [`../../research/regulatory/`](../../research/regulatory/README.md) |
| Licensing roadmap (compliance view) | [`licensing-roadmap.md`](../../research/regulatory/licensing-roadmap.md) |
| POPIA programme (IO registration, ROPA, PAIA manual) | Privacy obligations |
| RMCP (Risk Management & Compliance Programme) | FICA |
| Compliance sign-off records | Per quality gate |
| Contract register | Vendor/sponsor/partner |

## 7. Interfaces & dependencies

| Council | Interface |
|---|---|
| C16 Banking-Fintech | Joint licensing strategy; banking compliance authority |
| C12 Cybersecurity-Intel | Privacy/security overlap; incident response; AML systems |
| C10 Finance-CFO | Capital adequacy, tax, investor compliance |
| C03 Admin-Knowledge | Records, audit trail, knowledge capture |
| C15 / C06 / C11 | Compliance requirements feeding product/architecture |

## 8. KPIs

| KPI | Target |
|---|---|
| Compliance sign-off completeness before release | 100% |
| Regulatory submissions acknowledged | 100% |
| POPIA/PAIA obligations on schedule | 100% |
| FICA reporting accuracy | No late/inaccurate STR/CTR |
| Compliance gate first-pass rate | ≥ 90% |

## 9. Escalation path

`AGT → Legal-Compliance Captain → Sparkling Curious → Board`.
Critical regulatory/AML/privacy events skip to C01 + C16 + SC immediately (1h SLA).

## 10. South-Africa-specific mandate notes

- **Banks Act 94 of 1990** and the SARB **Prudential Authority** gate the licence; **Mutual Banks Act** and **Co-operative Banks Act** are alternates (see [D-004](../../program/governance/decision-log.md)).
- **FIC Act** accountable-institution duties: RMCP, CDD, TFS screening, CTR/STR/TPR.
- **POPIA s55** Information Officer registration and **s72** cross-border transfer controls (links to [D-002](../../program/governance/decision-log.md)).
- **FAIS / Twin Peaks / COFI Bill** conduct perimeter; **NCA** credit registration; **Code of Banking Practice** and **NFO** membership at launch.
- Watch the **FATF grey-list exit (Oct 2025)** — supervision remains intense.
