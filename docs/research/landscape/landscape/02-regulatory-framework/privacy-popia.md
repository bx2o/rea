# Data Protection & Privacy — POPIA (+ PAIA)

**As-of (access) date:** 2026-10-16 · See [`README.md`](./README.md) for the evidence legend and [`sources.md`](./sources.md) for `[S#]`.

> **Headline:** POPIA is fully in force and the Information Regulator **is actively fining** (multiple R5m penalties issued; six administrative fines disclosed by 2026). A neobank is a data-heavy "responsible party" handling special personal information (financial data, account activity). Non-compliance carries administrative fines up to **R10 million** and criminal exposure up to **10 years' imprisonment**. `[S26][S29][S30][S31]`

---

## 1. Framework

| Instrument | Role | Weight | Ref |
|---|---|---|---|
| **Protection of Personal Information Act 4 of 2013 (POPIA)** | Core data-protection statute | [STATUTE] | `[S25][S27]` |
| **POPIA Regulations** | Subordinate rules | [REG] | `[S25]` |
| **Promotion of Access to Information Act 2 of 2000 (PAIA)** | Access-to-information, manual, annual reports | [STATUTE] | `[S32]` |
| **Information Regulator (South Africa)** | Enforcement body | regulator | `[S25][S29]` |

POPIA applies to processing by a responsible party **domiciled in South Africa**, and (extraterritorially) to processing by a non-domiciled party using equipment in SA, unless the information is merely forwarded through SA `[S27]`.

---

## 2. The eight conditions for lawful processing

POPIA sets **eight conditions** (Chapter 3) `[S25][S27]`:

1. **Accountability** — the responsible party must ensure compliance.
2. **Processing limitation** — lawful basis; minimality; consent or another ground.
3. **Purpose specification** — collect for specific, explicitly defined purposes.
4. **Further processing limitation** — compatible with original purpose.
5. **Information quality** — accurate, complete, up to date.
6. **Openness** — notify data subjects; maintain privacy notices.
7. **Security safeguards** — appropriate technical & organisational measures (incl. breach notification).
8. **Data subject participation** — access, correction, deletion rights.

---

## 3. Information Officer

- **Every responsible party must have an Information Officer (IO)** — by default the **head of the organisation** (typically the CEO) — who may designate **Deputy IOs**. **[STATUTE]** `[S25]`
- The IO must be **registered with the Information Regulator under s55** before taking up duties `[S25]`.
- The role is a **named, accountable person**, not a policy document `[S25]`.
- **Registration is a precondition** for using the Regulator's portals (e.g. PAIA annual reports) `[S32]`.

---

## 4. Prior authorisation (POPIA s57)

Before certain **higher-risk** processing, a responsible party must obtain **prior authorisation** from the Regulator `[S25]`. This includes, among others `[S25][S26]`:
- Processing **unique identifiers** for a purpose other than that for which the identifier was intended, and **linking** them with information processed by other responsible parties (directly relevant to a neobank using an SA ID number for cross-source matching).
- Processing information on **criminal behaviour or unlawful/objectionable conduct** on behalf of third parties.
- Processing for the purposes of **credit reporting**.

**Section 58(2)** (the mechanism for s57 prior authorisation) became applicable on **1 February 2022** `[S26]`.

> **Banking relevance:** linking SA ID numbers across parties and credit-related processing can trigger prior authorisation — assess early `[S25][S26]`.

---

## 5. Special personal information

POPIA restricts processing of special categories (racial/ethnic origin, health, political persuasion, biometrics, trade-union membership, religious/philosophical beliefs, sex life, criminal behaviour). Permitted only with **consent** or another listed ground (e.g. necessary to exercise a legal right/obligation) `[S27]`. A neobank's **biometric KYC** must be handled under these rules.

---

## 6. Cross-border transfers (POPIA s72)

A responsible party **may not transfer** personal information to a third party in another country **unless** one of the s72(1) bases is met `[S27][S28]`:

1. The recipient is subject to a law, **binding corporate rules**, or a **binding agreement** that provides an **adequate level of protection substantially similar** to POPIA — *including* substantially similar **onward-transfer** provisions; **or**
2. The **data subject consents**; or
3. The transfer is **necessary for the performance of a contract** with the data subject, or for a contract in the interest of the data subject; or
4. The transfer is **necessary for a contract concluded in the interest of the data subject** between the responsible party and a third party; or
5. The transfer is **necessary for the benefit of the data subject** (benefit cannot reasonably be achieved otherwise); or
6. The transfer is necessary for the **prevention, investigation, detection, prosecution** of offences, or enforcement of law; or
7. The transfer is necessary to comply with an **international public-law obligation**.

**Important:** POPIA has **no formal "adequacy list"** — the adequacy test is applied per recipient `[S25 — secondary; verify]`. Practical tools: **binding corporate rules (BCRs)**, binding agreements, standard contractual clauses.

---

## 7. Security compromise (breach) reporting

On discovering a **security compromise** (breach), the responsible party must notify the **Information Regulator** and the affected **data subjects** as soon as reasonably possible (using the prescribed portal/form) `[S25]`. Security-compromise notifications have **passed 8,000**, with >1,220 received since 1 April 2026 alone `[S31]`.

---

## 8. Enforcement & penalties (what actually happens)

- **Administrative fines up to R10 million** per infringement; **criminal penalties up to 10 years' imprisonment** `[S26]`.
- Enforcement actions disclosed to date include: **R5m** against the **Department of Justice & Constitutional Development** (Jul 2023) `[S29]`; **R5m** against the **Department of Basic Education** (Dec 2024) `[S30]`; plus an **IEC** fine, a **Lancet** fine, a **Blouberg** fine, and a **R100,000** direct-marketing fine against **FT Rams Consulting** `[S31]`.
- **Trend:** enforcement is **escalating into the private sector** and tightening (2025 POPIA amendments) `[S31]`.

---

## 9. PAIA (access to information)

- A responsible party/private body must maintain an up-to-date **PAIA Manual** describing how records may be requested `[S32]`.
- Requests are made on the prescribed form; a response is required **within 30 days** `[S32]`.
- **Private bodies must submit an annual PAIA report** to the Information Regulator; the submission portal opens **1 April** and closes **30 June** each year `[S32]`.
- The IO, Deputy IOs and head of body must be **registered** before PAIA annual reports can be submitted `[S32]`.

---

## 10. Neobank POPIA/PAIA implementation checklist

- [ ] Appoint and **register the Information Officer** (and Deputy IOs) under s55 `[S25]`.
- [ ] Map lawful bases and a **record of processing activities** against the 8 conditions `[S25][S27]`.
- [ ] Assess **prior-authorisation** need for ID-number linking and credit-related processing `[S25][S26]`.
- [ ] Implement **cross-border transfer** mechanisms (BCRs / binding agreements / SCCs) for any offshore cloud or group processing `[S27][S28]`.
- [ ] Stand up **breach detection & s-notification** runbook and Regulator portal access `[S25]`.
- [ ] Publish a **PAIA Manual** and diarise the **1 Apr–30 Jun** annual report `[S32]`.
- [ ] Handle **biometric/special** data with explicit consent or a listed ground `[S27]`.

---

## 11. Uncertainties / verification needed

- Whether the Regulator has published any formal **adequacy determinations** (none identified as at 2026-10) — treat as **recipient-by-recipient** `[S25]`.
- Current **form/portal** requirements for breach notification and prior authorisation `[S25]`.
- Exact **2025 POPIA amendments** in force and any new commencement dates `[S31]`.
