# C01 — Regulatory Obligation Register

- **Owner:** C01 Legal-Compliance Captain · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Charter:** [`CHARTER.md`](./CHARTER.md)
- **Grounding:** [`../../research/regulatory/`](../../research/regulatory/README.md) (all obligations below are carried from that pack; **do not treat this file as the source of truth for legal text**)

> **How to read this register.** Each row is one obligation the NeoBank must satisfy. Weight tags follow the research pack: **[STATUTE]** (Act of Parliament — must), **[REG]** (regulations/prudential standards — must), **[REG-GUIDE]** (regulator guidance/directive — should), **[CONSULT]** (draft — non-binding), **[INDUSTRY]** (voluntary code — enforceable via ombud). "Owner council" is the council **accountable**; the evidence column names the artefact that proves the obligation is met. Status is a **plan** state, not an assertion of compliance.
>
> **Standing caveat:** figures marked `[CONFIRM]` / **UNVERIFIED** are from secondary sources or draft instruments and must be verified against the consolidated instruments by the appointed MLCO / Information Officer / admitted attorney before reliance.

---

## 1. Banking & prudential (Banks Act family)

| ID | Obligation | Weight | Driver | Owner council | Evidence | Status |
|---|---|---|---|---|---|---|
| RO-01 | Conduct the business of a bank only if registered (s12 authorisation → **s16 registration within 12 months**) | [STATUTE] | Banks Act 94 of 1990 | C01 + C16 | Authorisation/registration file | Plan |
| RO-02 | Maintain **minimum capital R250m** (bank) / **R10m** (mutual) | [STATUTE] | Banks Act / Mutual Banks Act 124 of 1993 | C10 + C01 | Capital plan; raise records | Plan |
| RO-03 | Maintain **CAR ≥ 11.5%**, **leverage ≥ 4%**, LCR/NSFR | [REG-GUIDE] | Banks Act Directive 6 of 2017; Basel III/IV (from 1 Jul 2025) | C10 | Capital/leverage returns (BA 700) | Plan |
| RO-04 | File **BA returns** (BA 100 balance sheet; BA 200/210 credit; BA 700 capital & leverage) | [REG] | Regulations relating to Banks | C10 | BA-return pack (`../c10-finance-cfo/financial-controls.md`) | Plan |
| RO-05 | Large-exposure limits + board credit committee (**>10% Tier 1**) | [REG-GUIDE] | Directive D14 of 2025 `[CONFIRM]` | C10 + C16 | LEX framework; committee charter | Plan |
| RO-06 | Significant-owner **fit-and-proper**; **15%** acquisition threshold requires permission | [STATUTE] | Banks Act s37; FSRA 9 of 2017 | C01 | Shareholding register; PA approvals | Plan |
| RO-07 | Appoint fit-and-proper directors/executives; PA-approved **controlling company** (s42) | [STATUTE] | Banks Act s42 | C01 | Board pack; CIPC/PA records | Plan |
| RO-08 | Foreign-exchange dealing only as an **AD / ADLA** | [REG-GUIDE] | Exchange Control; FinSurv | C16 + C01 | AD/ADLA appointment file | Out of MVP (R-027) |

---

## 2. AML / CFT / CPF (FIC Act family)

| ID | Obligation | Weight | Driver | Owner council | Evidence | Status |
|---|---|---|---|---|---|---|
| RO-09 | Register as an **accountable institution** on goAML | [STATUTE] | FIC Act 38 of 2001, Sch 1 | C01 | FIC registration record | Plan |
| RO-10 | Adopt a **board-approved RMCP** (risk, CDD, monitoring, records, reporting) | [STATUTE] | FIC Act s42 | C01 | RMCP document + board minute | Plan |
| RO-11 | **CDD/EDD**, UBO tracing, PEP EDD | [STATUTE] | FIC Act s21; Regulations | C01 (spec) / C12 (build) | CDD procedures; UBO records | Plan |
| RO-12 | **CTR**: cash > **R49,999.99**, ≤ **3 days**; **STR**: within **15 days**; **TPR**: without delay | [STATUTE] | FIC Act ss28–29 | C01 (MLCO) | goAML submissions + audit trail | Plan |
| RO-13 | **TFS sanctions screening** (ss26A–26C) at onboarding and continuously | [STATUTE] | FIC Act; POCA 121 of 1998 | C01 + C12 | Screening logs; match procedures | Plan |
| RO-14 | Retain CDD + transaction records for prescribed period (commonly **≥5 years**) `[CONFIRM]` | [STATUTE] | FIC Act ss22–23 | C01 + C03 | Retention schedule (`../c03-admin-knowledge/records-and-retention.md`) | Plan |
| RO-15 | Crypto **travel rule** (zero threshold) if crypto offered | [REG] | FIC Directive 9; PCC 61 | C13 + C01 | Travel-rule data handling | Out of MVP (R-029) |

---

## 3. Privacy & access to information (POPIA / PAIA)

| ID | Obligation | Weight | Driver | Owner council | Evidence | Status |
|---|---|---|---|---|---|---|
| RO-16 | Appoint + **register the Information Officer** (s55) | [STATUTE] | POPIA 4 of 2013 | C01 | IO registration record | Plan |
| RO-17 | Satisfy the **eight conditions** for lawful processing | [STATUTE] | POPIA Ch. 3 | C01 (spec) / C12 (build) | Lawful-basis register; ROPA | Plan |
| RO-18 | Assess **prior authorisation** (s57) for ID-linking / credit reporting | [STATUTE] | POPIA s57–58 | C01 | s57 assessment memo | `[CONFIRM]` |
| RO-19 | **Cross-border transfer** controls (s72) for any offshore processing | [STATUTE] | POPIA s72 | C01 + C06 | Transfer register; SCC/BCR evidence | Plan (D-002) |
| RO-20 | **Breach notification** to Regulator + subjects "as soon as reasonably possible" | [STATUTE] | POPIA condition 7 | C01 | Breach runbook; notification log | Plan |
| RO-21 | Handle **special personal information** (biometrics) under a lawful ground | [STATUTE] | POPIA s26–27 | C01 | Biometric consent/ground record | Plan |
| RO-22 | Maintain a **PAIA Manual**; submit **annual PAIA report (1 Apr – 30 Jun)** | [STATUTE] | PAIA 2 of 2000 | C01 + C03 | PAIA manual; annual report | Plan |

---

## 4. Conduct, credit & consumer protection

| ID | Obligation | Weight | Driver | Owner council | Evidence | Status |
|---|---|---|---|---|---|---|
| RO-23 | Obtain **FSP licence** for advice/intermediary (incl. crypto) in the correct category; fit-and-proper (RE exams) | [STATUTE] | FAIS 37 of 2002; BN 194/2017 | C01 | FSP licence; KI fit-and-proper file | Plan |
| RO-24 | Register as a **credit provider** (NCR) and conduct **affordability assessments** | [STATUTE] | NCA 34 of 2005 (s40/s41; reg 4) | C01 + C10 | NCR registration; affordability policy | Out of MVP (D-005) |
| RO-25 | Avoid **reckless credit**; support debt-review | [STATUTE] | NCA s81 | C10 + C01 | Credit policy; decision records | Out of MVP |
| RO-26 | CPA-compliant T&Cs, marketing and complaint handling | [STATUTE] | CPA 68 of 2008 | C01 + C09 | T&C review; complaints process | Plan |
| RO-27 | Adopt the **Code of Banking Practice** (2025 edn) and join the **NFO** | [INDUSTRY] | BASA code; NFO | C01 + C14 | Code adoption; NFO membership | Plan (M11) |
| RO-28 | Prepare for **COFI** activity-based conduct regime | [CONSULT] | COFI Bill (not enacted) | C01 | COFI readiness map | Monitor (R-024) |

---

## 5. Payments, tax & governance

| ID | Obligation | Weight | Driver | Owner council | Evidence | Status |
|---|---|---|---|---|---|---|
| RO-29 | Clear/settle only as a permitted participant, or via **sponsorship** | [STATUTE] | NPS Act 78 of 1998 s4 | C16 + C01 | Participation/sponsor agreement | Plan (D-001) |
| RO-30 | Adopt the applicable **clearing-house rulebook** (PSMB→SARB transition, 11 Aug 2026) | [REG-GUIDE] | SARB / PEM | C16 | Rulebook conformance record | Plan |
| RO-31 | **ISO 20022** message handling for modernised rails | [REG-GUIDE] | SARB NPS modernisation | C11 + C16 | Adapter conformance | Plan |
| RO-32 | Corporate income tax **27%**; VAT **15%** (with exempt/taxable apportionment); STT **0.25%** | [STATUTE] | Tax Acts | C10 | Tax computations; apportionment method | Plan |
| RO-33 | **FATCA / CRS** (and **CARF** if crypto) AEOI reporting | [STATUTE] | SA AEOI legislation; CARF (1 Mar 2026) | C10 | AEOI BRS submissions | Plan |
| RO-34 | King IV-aligned board; **audit committee (s94)** and **social & ethics committee (s72)** | [STATUTE] | Companies Act 71 of 2008 | C01 | Board/committee charters; minutes | Plan |
| RO-35 | Company secretarial: maintain statutory registers, file CIPC returns, record delegations of authority | [STATUTE] | Companies Act 71 of 2008 | C01 | Company register (`./company-secretarial.md`) | Plan |

---

## 6. Register maintenance & evidence discipline

- **Ownership.** C01 owns this register; each row names the **accountable** council. The **evidence** column points to the artefact that proves the obligation; it is not proof in itself.
- **Change control.** The register is **re-baselined** at every roadmap milestone ([`../../program/roadmaps/launch-roadmap.md`](../../program/roadmaps/launch-roadmap.md)) and whenever a draft instrument is finalised (non-bank payments, COFI).
- **Traceability.** Every row maps to the research file that grounds it. Where a figure is `[CONFIRM]`, the row is not treated as settled.
- **Gate link.** Rows tagged as money/data obligations block release via **G-COMP** and **G-DATA** ([`../../program/delivery/quality-gates.md`](../../program/delivery/quality-gates.md)).

---

## 7. Open items / unknowns

- `[CONFIRM]` Exact **FICA retention period** (§ note in `../../research/regulatory/aml-fica.md` §8).
- `[CONFIRM]` **NCA s42(1) threshold** and credit-provider category bands (`../../research/regulatory/conduct-fais-nca.md` §8).
- `[CONFIRM]` Which **CPA exemptions** for banks remain in force (`../../research/regulatory/conduct-fais-nca.md` §8).
- `[CONSULT]` Final **non-bank payment** capital tiers and effective date (`../../research/regulatory/payments-nps.md` §3, §8).
- `[UNKNOWN]` **COFI Bill** enactment status at launch; **NPS Bill** timing.

_This register is a planning artefact, not legal advice. Codename `Project Umoya` is a working label only._
