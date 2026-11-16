# NeoBank ZA — Regulatory & Licensing Research Pack

**Jurisdiction:** Republic of South Africa
**As-of (access) date:** 2026-10-16
**Prepared for:** C01 Legal-Compliance + C12 Security-Compliance track, NeoBank launch programme

> **Purpose.** This pack documents the binding statutes, regulations, regulator guidance and (clearly-labelled) non-binding consultations that a new South African digital bank ("neobank") must satisfy to be licensed and to operate lawfully. Every substantive claim carries an `[S#]` reference mapped in [`sources.md`](./sources.md). Nothing here is legal advice; a South African admitted attorney / compliance officer must validate before reliance.

---

## 1. How to read this pack (evidence classification)

Every statement is tagged by legal weight. Do **not** treat consultation papers or industry codes as binding.

| Tag | Meaning | Example |
|---|---|---|
| **[STATUTE]** | Act of Parliament — binding | Banks Act 94 of 1990 `[S3]` |
| **[REG]** | Regulations / subordinate legislation / Prudential Standards — binding | Regulations relating to Banks; POPIA Regulations |
| **[REG-GUIDE]** | Regulator guidance, directives, circulars, manuals — binding on the addressee, or strongly persuasive | PA authorisation framework directive; ADLA Manual `[S51]` |
| **[CONSULT]** | Draft / consultation / policy paper — **non-binding** | Draft Payment Activities Directive (Nov 2025) `[S10]`; Vision 2030+ `[S7]` |
| **[INDUSTRY]** | Voluntary industry code — not law, but enforceable via ombud | Code of Banking Practice `[S46]` |
| **[SECONDARY]** | Law-firm / vendor explainer — used only for orientation, always cross-checked | Werksmans `[S11]` |

**Rule applied throughout:** where a figure (capital threshold, deadline, fee) comes only from a secondary source or a *draft* instrument, it is marked **"needs authoritative confirmation"**.

---

## 2. File index

| File | Scope | Primary regimes |
|---|---|---|
| [`banking-licensing.md`](./banking-licensing.md) | Full banking licence, mutual bank, co-op bank, foreign branch, representative office; capital; fit-and-proper; process & timelines | Banks Act 94 of 1990; Mutual Banks Act 124 of 1993; Co-operative Banks Act 40 of 2007; FSRA 9 of 2017 |
| [`payments-nps.md`](./payments-nps.md) | NPS oversight, PASA/PSMB transition, PEM programme, Non-Bank PSP framework, ISO 20022, PayShap, clearing | NPS Act 78 of 1998 |
| [`aml-fica.md`](./aml-fica.md) | Accountable institutions, RMCP, CDD/KYC, beneficial ownership, FIC reporting, sanctions/POCA, FATF | FIC Act 38 of 2001; POCA 121 of 1998 |
| [`privacy-popia.md`](./privacy-popia.md) | 8 conditions, Information Officer, prior authorisation, cross-border transfers, breach reporting, enforcement; PAIA | POPIA 4 of 2013; PAIA 2 of 2000 |
| [`conduct-fais-nca.md`](./conduct-fais-nca.md) | FAIS/FSP categories & fit-and-proper, Twin Peaks market conduct, NCA credit, CPA, Code of Banking Practice, NFO ombud | FAIS Act 37 of 2002; NCA 34 of 2005; CPA 68 of 2008; FSRA 9 of 2017 |
| [`tax-governance.md`](./tax-governance.md) | VAT, income tax, STT, FATCA/CRS/CARF; King IV, Companies Act governance, Basel III/IV, BA returns | Tax Acts; Companies Act 71 of 2008; Banks Act regs |
| [`licensing-roadmap.md`](./licensing-roadmap.md) | Sequenced 0–24 month roadmap from entity setup to licence + launch | (planning artefact — references the above) |
| [`sources.md`](./sources.md) | `[S#]` reference map with URLs and access date | — |

---

## 3. Minimum viable regulatory map (which licence do I actually need?)

Choose the licence **before** building the product. Most "neobanks" need a *stack* of permissions, not one.

| If the neobank will… | Primary permission needed | Regulator | File |
|---|---|---|---|
| Take deposits from the public and lend them | Full banking licence (`[S1]`) | SARB Prudential Authority (PA) | banking-licensing |
| Operate a member-owned deposit-taking body | Mutual bank / co-operative bank `[S1]` | PA | banking-licensing |
| Operate as the SA arm of a foreign bank | Branch (s18A) or representative office `[S4]` | PA / Minister of Finance | banking-licensing |
| Issue e-money / acquire / initiate payments without lending | Non-bank Payment Institution authorisation under the new framework | SARB NPS Dept | payments-nps |
| Clear/settle payments | Designated clearing/settlement system participant | SARB | payments-nps |
| Buy/sell foreign exchange on behalf of clients | ADLA appointment | SARB Financial Surveillance (FinSurv) | banking-licensing / conduct |
| Give advice / intermediate on financial products (incl. crypto) | FSP licence (Cat I–IV) | FSCA | conduct-fais-nca |
| Provide or arrange consumer credit | Credit provider registration | NCR | conduct-fais-nca |
| Process personal information | POPIA compliance (no licence, but mandatory registration of Information Officer) | Information Regulator | privacy-popia |
| Be a "reporting financial institution" | FICA accountable-institution registration | FIC | aml-fica |

---

## 4. Recommended compliance sequencing (viewpoint of a new entrant)

The dependency order below reflects how the regulators actually gate each other. Banking licensing, AML and payments **cannot** be done in parallel if the entity is not yet incorporated and the RMCP/Information-Officer appointments are missing.

**Phase 0 — Structure & pre-application (Months 0–3)**
1. Incorporate a **public company** under the Companies Act (banks must be public companies) `[S1]`; register at CIPC.
2. Appoint board, Key Individuals, and interim Compliance Officer / MLCO; approve a draft RMCP `[S33]`.
3. Appoint and **register the Information Officer** with the Information Regulator under POPIA s55 `[S25]`.
4. Optional: **pre-application meeting** with the PA (not mandatory) `[S1]`.

**Phase 1 — Authorisation applications (Months 3–9)**
5. File the Banks Act s12 authorisation application (business plan, capital plan, governance, risk, IT) `[S1]`.
6. File FICA accountable-institution registration (goAML) once incorporated `[S33]`.
7. File FSP licence application with the FSCA for any advice/intermediary activity (incl. crypto) `[S19]`.
8. If extending credit: register with the NCR `[S41]`.

**Phase 2 — Build & satisfy conditions (Months 6–18)**
9. Raise minimum capital (R250m for a bank `[S1]`), stand up Basel III/IV capital & LCR/NSFR, MIS and BA-return reporting `[S5][S68]`.
10. Implement AML/CFT/CPF systems, sanctions screening, travel-rule (crypto) `[S40]`.
11. Finalise POPIA/PAIA manuals, records of processing, cross-border transfer mechanisms `[S27]`.

**Phase 3 — Registration & launch (Months 12–24)**
12. Apply for Banks Act s16 registration within 12 months of authorisation `[S1]`.
13. Join clearing/settlement arrangements (PASA/PSMB successor, or new NPS authorisation) `[S15]`.
14. FATCA/CRS/CARF registration and due-diligence build `[S55][S57]`.
15. Join the National Financial Ombud Scheme (NFO); adopt the Code of Banking Practice `[S46][S47]`.

Full month-by-month detail: [`licensing-roadmap.md`](./licensing-roadmap.md).

---

## 5. Key 2025–2026 developments a neobank cannot ignore

- **FATF grey-list exit (24 Oct 2025)** — South Africa removed from enhanced monitoring after completing all 22 action items `[S38]`. Reduces correspondent-banking friction; AML supervision remains intense.
- **Non-bank payment framework (PEM)** — draft Exemption Notice + activity-based Authorisation Framework published Mar 2025 and revised Nov 2025; first non-bank licences expected from 2026. **Not yet final** `[S10][S12]`.
- **Basel III post-crisis reforms implemented 1 July 2025** — new credit/operational/market-risk, leverage and output floor `[S5]`.
- **COFI Bill tabling (2026)** — the second pillar of Twin Peaks, to consolidate market-conduct law; still a Bill `[S22][S24]`.
- **CARF + revised CRS effective 1 March 2026** — crypto-asset and e-money reporting `[S57][S71]`.
- **PASA derecognition / PSMB transition from 11 Aug 2026** — payment governance is shifting into the SARB `[S15][S16]`.

---

## 6. Open items flagged for authoritative confirmation

These are the highest-risk uncertainties; each is flagged again in the relevant file:

1. **Final** non-bank payment capital thresholds and tier boundaries (draft only as at 2026-10) `[S10][S11]`.
2. NCA **credit-provider category** monetary bands (A/B/C/D) `[S45]` — verify against current NCR fee schedule.
3. Whether the **COFI Bill** will have been enacted by launch date, and its transitional arrangements `[S22]`.
4. Exact PA **processing timelines** for a *new* (de novo) bank — the R6–9 month figure is guidance, not statutory `[S1]`.
5. Current **ADLA category** conditions and forex limits (amended periodically) `[S51]`.
