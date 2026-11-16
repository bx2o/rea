# C12 — Cybersecurity-Intel Council

- **Council ID:** C12 (`c12-cybersecurity-intel`)
- **Captain:** C12 Cybersecurity-Intelligence Captain (`C12-cybersecurity-intelligence-captain.agent.md`) — per `.stremiium/config/council-department-mapping.json`
- **Program:** Project Umoya — NeoBank ZA (codename only, not a brand decision)
- **Owner council RACI:** Accountable for the security posture and the program **risk register**; Consulted on architecture (C06) and build (C11)
- **Status:** Draft v1.0 (UnConsolidated) — 2026-10-16

> **Evidence discipline (inherited from PLAN.md §0).** Every number in this council's artifacts is a **planning assumption**, not measured data. Figures are tagged `[ASSUMPTION]` (modelled input), `[TARGET]` (internal objective), or `[UNVERIFIED]` (asserted by an external source, not yet corroborated). Security SLAs and detection targets are **internal objectives `[TARGET]/[DESIGN]`** until the SOC is operational. Regulatory deadlines are cited from the research pack, never invented.

Back-links: [council index](../README.md) · [charter](./CHARTER.md) · [security architecture](../../architecture/security/README.md) · [risk register](../../program/risk/risk-register.md).

---

## 1. Purpose

C12 is the bank's **security, fraud and threat-intelligence** council — the "inspector" of the SAOS operating model (§8.2) and holder of the **security special authority**. It does two jobs that must never be merged:

1. **Prevent** — threat modelling, secure architecture, vulnerability management and the security gates that block unsafe releases.
2. **Detect & respond** — monitoring, fraud detection, incident response and threat intelligence.

C12 is also the program's **risk-register owner**: it curates [`../../program/risk/risk-register.md`](../../program/risk/risk-register.md) and owns R-005, R-006, R-013, R-019, R-020.

The security architecture pack at [`../../architecture/security/`](../../architecture/security/) defines *what must be built*; this council directory defines *how C12 operates it*.

---

## 2. Relationship to C01 (Legal-Compliance)

C12 and C01 are deliberate counterparts: **C01 owns the law, C12 owns the controls that satisfy it.** Neither can sign off alone on a money/data surface.

| Dimension | **C01 Legal-Compliance** | **C12 Cybersecurity-Intel** |
|---|---|---|
| Owns | Statutory/regulatory interpretation; obligations | Technical controls; security posture |
| Question answered | "What must we do, and by when?" | "Is it actually enforced and monitored?" |
| AML/CTF | MLCO; RMCP; STR/CTR decisions | Technical screening/monitoring/controls |
| POPIA | Information Officer; lawful basis; DSAR | Encryption, access control, breach detection |
| Gates | **G-COMP**, G-DATA | **G-SEC**, G-DEP, G-RISK |
| Overlap | POPIA breach, FIC reporting, incident law | Jointly executed via [`../../architecture/security/incident-response.md`](../../architecture/security/incident-response.md) |

> **Binding rule.** Any service touching money, data or a regulated surface requires **both** a C01 compliance screen **and** a C12 security review before release (Stremiium `security-compliance-sentinel`, [`../../architecture/security/README.md`](../../architecture/security/README.md) §4). C12 may **halt a release** on a gate breach.

---

## 3. Scope of this council

**In scope:** security posture; threat modelling; fraud controls; incident response; vulnerability management; security gates (G-SEC/G-DEP); the program risk register; security monitoring (SOC).

**Out of scope (route elsewhere):** infrastructure build (C06), application code (C11), legal interpretation (C01), operational execution of incidents (C02), rail/market access (C16). C12 *specifies* controls; C06/C11 *implement* them.

---

## 4. File index

| File | Contents |
|---|---|
| [`README.md`](./README.md) | This overview + C01 relationship. |
| [`soc-and-monitoring.md`](./soc-and-monitoring.md) | SOC model, detection engineering, SIEM, threat intelligence. |
| [`vulnerability-management.md`](./vulnerability-management.md) | Scanning, triage, SLAs, patching, pen-test cadence. |
| [`red-team-and-assurance.md`](./red-team-and-assurance.md) | Authorised adversarial testing, rules of engagement, assurance. |

---

## 5. Interlocks & governance hooks

| Interlock | Contract |
|---|---|
| C01 compliance | Joint gate (G-COMP + G-SEC); POPIA breach and FIC reporting run together ([`../../architecture/security/incident-response.md`](../../architecture/security/incident-response.md) §6). |
| C06 infrastructure | C12 specifies controls; C06 builds them (cloud posture, network, IaC scanning). |
| C11 engineering | Secure-SDLC hooks and threat-model fixes ([`../../architecture/security/secure-sdlc.md`](../../architecture/security/secure-sdlc.md)). |
| C02 operations | Incident-response *execution* and on-call command. |
| C16 banking-fintech | Fraud-in-payment-flows design (APP/scam, mule, chargeback). |
| Escalation | C12 Captain → SC → Board; **critical security escalates to SC directly within 1h** (PLAN.md §5). |

---

## 6. KPIs

| KPI | Target | Weight |
|---|---|---|
| Critical unmitigated findings at release | 0 | `[TARGET]` |
| Secrets in artifacts | 0 | `[TARGET]` |
| Critical incident response | ≤ 1h | `[TARGET]` |
| Pen-tests passed before money/data release | 100% | `[TARGET]` |
| Fraud-loss rate (pilot) | Within tolerance | `[TARGET]` |

(Mirrors the C12 charter §8.)

---

## 7. South-Africa-specific notes

- **Fraud landscape:** BEC, APP/authorised-push-payment, SIM-swap and account-takeover fraud are prevalent — build specific defences ([`../../architecture/security/fraud-risk-engine.md`](../../architecture/security/fraud-risk-engine.md)).
- **POPIA breach duties:** support the Information Officer with s22 breach-notification readiness (`[STATUTE]`, [`../../research/regulatory/privacy-popia.md`](../../research/regulatory/privacy-popia.md) §7).
- **AML enablement:** provide the technical controls C01 requires (screening, monitoring, FIC reporting).
- **FATF context:** post grey-list-exit, supervisory scrutiny of AML/CFT controls remains high.
- **Data residency/security:** enforce least privilege and encryption for SA-region data (D-002).

---

## 8. Open items / unknowns

- `[CONFIRM]` Exact PA incident-notification channel and timeframes ([`../../architecture/security/incident-response.md`](../../architecture/security/incident-response.md) §6.3).
- `[CONFIRM]` PCI-DSS scope (acquiring vs issuing vs tokenisation-only) once the card product is defined.
- `[UNKNOWN]` SOC staffing model (in-house vs managed) and tooling selection (SIEM/SOAR) are undecided.
- `[ASSUMPTION]` A sponsor-bank arrangement shapes the shared-responsibility split for security pre-licence.

_Codename `Project Umoya` is a working label only._
