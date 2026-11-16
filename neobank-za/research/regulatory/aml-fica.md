# AML / CFT / CPF — FIC Act & Financial Crime

**As-of (access) date:** 2026-10-16 · See [`README.md`](./README.md) for the evidence legend and [`sources.md`](./sources.md) for `[S#]`.

> **Context:** South Africa **exited the FATF grey list on 24 October 2025** after completing all 22 action items `[S38]`. AML supervision is **not** relaxing — it is consolidating (new AML/CFT Amendment Bill, tighter supervision). Banks, mutual banks and co-operative banks are **accountable institutions** supervised for FICA by the **Prudential Authority (PA)** `[S36]`.

---

## 1. Framework

| Instrument | Role | Weight | Ref |
|---|---|---|---|
| **Financial Intelligence Centre Act 38 of 2001 (FIC Act / FICA)** | Core AML/CFT/CPF statute | [STATUTE] | `[S33][S36]` |
| **Prevention of Organised Crime Act 121 of 1998 (POCA)** | Predicate offences, asset forfeiture | [STATUTE] | `[S37]` |
| **FIC Directives & Public Compliance Communications (PCCs)** | Binding guidance/directives | [REG-GUIDE] | `[S35][S40]` |
| **FATF Recommendations** | International standard (via grey-list process) | external | `[S38]` |

Regulator roles in Twin Peaks: the **FIC** is the centre; **supervisory bodies** report to it — the **PA** supervises banks/insurers, and the **FSCA** supervises FSPs, CIS managers and exchange authorised users `[S19]`.

---

## 2. Who is an accountable institution

**Schedule 1** of the FIC Act lists accountable institutions. A bank/mutual bank/co-operative bank is an accountable institution `[S36]`. A **CASP** (crypto asset service provider) is another (item 12) `[S72]`; a **life insurer** is one, but non-life insurers are not `[S36]`. An entity giving advice/intermediary services in respect of crypto is accountable and also needs FSCA licensing `[S72]`.

**Registration:** the institution must **register with the FIC on goAML** `[S33][S36]`. Crypto asset service providers require a **second FIC registration under item 12** (in addition to the FSCA licence) `[S72]`.

---

## 3. Core obligations

### 3.1 Risk Management and Compliance Programme (RMCP)
An accountable institution must adopt and implement a **board-approved RMCP** covering risk identification, CDD, monitoring, record-keeping and reporting `[S33][S36]`.

### 3.2 Customer Due Diligence (CDD) / "FICA" verification
- Identify and verify clients (natural and legal persons) per s21 and the Regulations `[S33]`.
- **Beneficial ownership:** identify the **natural persons who ultimately own or control** a legal entity. FICA itself does **not** prescribe a fixed percentage — you must trace ownership/control to natural persons `[S37 — secondary]`. The **CIPC beneficial-ownership register** (operational since 2023) uses a **5% threshold** under the Companies Act regulations as a *separate* disclosure requirement and a useful verification source `[S37 — secondary; flag for confirmation]`.
- **Enhanced due diligence** for higher-risk relationships; **foreign prominent public officials / domestic prominent influential persons** require EDD `[S33]`.

### 3.3 Record-keeping
Retain CDD and transaction records for the prescribed period (per FIC Act s22–23). *Confirm current retention period (commonly ≥5 years) against the Act* `[S33]`.

### 3.4 Reporting (the "four reports")

| Report | Trigger | Deadline | Ref |
|---|---|---|---|
| **Cash Threshold Report (CTR)** | Cash received/paid **> R49,999.99** | As soon as possible, **no later than 3 days** | `[S33][S34][S35]` |
| **Suspicious & Unusual Transaction Report (STR/SAR)** | Suspicion of ML/TF/PF or proceeds of crime | **within 15 days** of becoming aware (excl. weekends/public holidays) | `[S33][S36]` |
| **Terrorist Property Report (TPR)** | Property/funds linked to a designated person/entity | Without delay | `[S34][S37]` |
| **Cross-border / conveyance reports** | Physical cross-border movement of cash instruments (by the traveller/institution as applicable) | Per the Act | `[S34]` |

> The CTR threshold was **increased from R24,999.99 to R49,999.99** via amendment `[S33][S34][S39]`. Submission is via e-filing on **goAML** (online form, batch, or system-to-system) `[S36]`.

---

## 4. Targeted financial sanctions (TFS) & POCA

- **FIC Act ss26A–26C:** when the FIC gives notice of persons/entities identified by the **UN Security Council**, the Act **prohibits making property or financial services available** to them (subject to permitted exceptions). **[STATUTE]** `[S37 — secondary]`
- On a match, the institution reports a **Terrorist Property Report under s28A** `[S37 — secondary]`.
- **POCA** criminalises (e.g. ss4–6): concealing/disguising proceeds, facilitating retention/control of proceeds, and acquiring/using/possessing another's proceeds — where the person knew or ought reasonably to have known. **[STATUTE]** `[S37]`.
- **Proliferation financing** is now explicit in the FIC Act framework; PCC 23A provides risk indicators `[S39]`.

A neobank must run **sanctions/PEP screening** at onboarding and continuously, with a documented TFS screening procedure inside the RMCP. **[REG-GUIDE]** `[S37]`.

---

## 5. Crypto-specific: the "Travel Rule"

- **FIC Directive 9** (Gazette 51556, 15 Nov 2024) implements the **travel rule** for crypto asset transfers under s43A(2) `[S73]`.
- **Effective 30 April 2025:** CASPs must send **originator and beneficiary information with every crypto transfer** — *before or with* the transfer, never afterwards `[S72][S73]`.
- **PCC 61 of 2026** confirms a **zero threshold** — the travel rule applies to **all** crypto transfers regardless of amount, per Directive 9 `[S40]`.

---

## 6. FATF grey-list exit — what changed

- **24 Oct 2025:** South Africa removed from enhanced monitoring after an on-site verification visit (July 2025) and completion of all 22 action items on AML/CFT enforcement, beneficial-ownership transparency and supervisory reform `[S38]`.
- **Effect:** reduced correspondent-banking friction and EDD costs `[S38]`. **Compliance expectations remain high**; new measures continue (e.g. the General Laws AML/CFT Amendment Bill 2026) `[S38 — secondary, verify]`.

---

## 7. Neobank AML implementation checklist

- [ ] Register as an accountable institution on **goAML** `[S33]`.
- [ ] Adopt a **board-approved RMCP** `[S33]`.
- [ ] Build **CDD/EDD** (natural + legal persons, UBO tracing, PEP screening) `[S33][S37]`.
- [ ] Configure **CTR (R49,999.99 / 3 days)**, **STR (15 days)**, **TPR** reporting `[S33][S34]`.
- [ ] Implement **TFS screening** (ss26A–26C) and POCA-aware investigations `[S37]`.
- [ ] If crypto: implement **travel-rule** originator/beneficiary data and item-12 FIC registration `[S40][S72]`.
- [ ] Appoint a **Compliance Officer / MLCO** and give the function adequate seniority and resources `[S51]`.

---

## 8. Uncertainties / verification needed

- Exact **record-retention period** and any 2026 FIC Act amendments — verify against the consolidated Act `[S33]`.
- The final **General Laws AML/CFT Amendment Bill** contents and commencement `[S38]`.
- The **beneficial-ownership 5%** threshold belongs to the Companies Act regulations, **not** FICA — do not conflate `[S37]`.
