# Quality Gates — NeoBank ZA

**Owner:** C12 Cybersecurity-Intel + C02 Operations · **Assured by:** C01 Legal-Compliance
**Version:** 1.0 · **Date:** 2026-10-16

> The quality gates every artifact must clear before it is released on `Project Umoya`. Gates map directly to the **Sparkling Curious universal quality standards** ([`sparkling-curious-instructions.md §4.1`](file:///workspace/_stremiium/.stremiium/governance/rules/sparkling-curious-instructions.md)): **80%+ coverage, no secrets, input validation, compliance sign-offs**.

Back-links: [delivery model](./README.md) · [definition of done](./definition-of-done.md) · [risk appetite](../risk/risk-appetite-statement.md).

---

## 1. The gates

| Gate | Purpose | Owner | Blocks |
|---|---|---|---|
| **G-COV** Coverage | ≥ 80% test coverage | C11 Dev-Engineering | Build/Release |
| **G-SEC** Security | No secrets; secrets management; encryption | C12 | Build/Release |
| **G-VAL** Validation | Input validation, output encoding, error paths | C11 + C12 | Build/Release |
| **G-DEP** Dependencies | Vulnerability scan clean | C12 | Build/Release |
| **G-COMP** Compliance | FICA/POPIA/PCI/NPS sign-offs | C01 + C16 | Release (money/data) |
| **G-DATA** Privacy | Lawful basis, residency, minimisation | C01 | Release (data) |
| **G-DOC** Documentation | APIs, runbooks, changelog | C03 | Release |
| **G-RISK** Risk | No open Critical without treatment | C12 | Any gate |
| **G-SIGN** Sign-off | 5-role sign-off | SC | Release |

---

## 2. Gate definitions

### G-COV — Coverage
- **Criterion:** ≥ 80% line/branch coverage on produced code.
- **Evidence:** coverage report attached to the artifact.
- **Exception:** documented, captain-approved rationale; exception re-reviewed at the next gate.

### G-SEC — Security
- **Criterion:** zero hardcoded secrets; secrets in a managed store; TLS 1.2+; least privilege; audit trail for sensitive ops.
- **Evidence:** secret-scan result = clean; key-management design; access-review record.
- **Source standard:** SAOS §4.1 Security (no secrets, TLS 1.2+, least privilege, audit trail).

### G-VAL — Validation
- **Criterion:** all external input validated; all output encoded (injection defence); all error paths handled; error messages actionable.
- **Evidence:** validation matrix; injection tests.
- **Source standard:** SAOS §4.1 (input validated, output encoded, error paths handled).

### G-DEP — Dependencies
- **Criterion:** dependency scan shows **no unmitigated Critical/High** vulnerabilities.
- **Evidence:** SBOM + scan report.

### G-COMP — Compliance
- **Criterion:** mandatory FICA/POPIA/PCI/NPS screens passed **before any surface touching money, gaming or personal data ships**.
- **Signers:** C01 Legal (POPIA/FICA), C16 Banking (NPS/licensing), C12 (security aspects).
- **Evidence:** compliance checklist + sign-off record.
- **Source standard:** SAOS §4.1 Compliance + §6 Compliance Hooks.

### G-DATA — Privacy
- **Criterion:** lawful basis documented; data minimised; SA residency or documented cross-border safeguards (POPIA s72); records of processing current.
- **Signer:** C01 (Information Officer).

### G-DOC — Documentation
- **Criterion:** public APIs documented; complex logic annotated (why); assumptions stated; runbooks for operations; changelog updated.
- **Source standard:** SAOS §4.1 Documentation.

### G-RISK — Risk
- **Criterion:** the work does not introduce an unmitigated Critical/High risk; any new risk is logged in the [risk register](../risk/risk-register.md).

### G-SIGN — Sign-off (5-role)
- **Criterion:** sequence completed: **Tech Lead → CTO → Security → Privacy → Sparkling Curious**.
- **Evidence:** sign-off record on the release artifact.
- **Source standard:** SAOS §2.3.

---

## 3. Council-specific standards (on top of universal)

| Council | Additional gate requirement |
|---|---|
| C01 Legal-Compliance | POPIA/FICA/PCI verified; privacy impact assessment; audit trail; legal review completed |
| C02 Operations | Governance approval; runbook; incident-response documented; vendor compliance |
| C03 Admin-Knowledge | Knowledge captured in structured format; linked; audit trail complete; accessibility verified |
| C04 Strategy-Growth | Rationale documented; market analysis; decision matrix; success criteria |
| C06 Engineering-Infra | Architecture documented; scaling tested; monitoring configured; deployment documented |
| C11 Dev-Engineering | Architecture alignment; gates passed; performance profiled; test strategy documented |
| C12 Cybersecurity-Intel | Security standards met; threat model reviewed; crypto used correctly; IR tested |
| C14 Customer-Success | Customer communication; SLA tracked; satisfaction measured; support materials |
| C15 Product-Management | Roadmap impact assessed; user research; requirements documented; success metrics |

---

## 4. Gate flow

```text
        ┌── G-RISK (always) ─┐
DRAFT ─►│ G-COV  G-SEC  G-VAL │─► BUILD-READY ─►│ G-DEP  G-DOC │─► RELEASE-READY
        │ G-DATA G-COMP       │                 │ G-SIGN       │
        └─────────────────────┘                 └──────────────┘
```

- A failed gate **halts** the artifact until remediated; the halt is reported per [escalation protocols](../governance/escalation-protocols.md).
- The `CRD-security-compliance-sentinel` and `CRD-workflow-orchestrator` enforce gates mechanically (see [delivery model](./README.md#5-enforcement-hooks-crd-staff-line)).

---

## 5. Metrics & audit

| Metric | Target | Owner |
|---|---|---|
| Gate pass rate (first attempt) | ≥ 90% | C02 |
| Coverage on shipped code | ≥ 80% | C11 |
| Secrets found in artifacts | 0 | C12 |
| Compliance sign-off completeness | 100% | C01 |
| Failed-gate remediations within SLA | 100% | C02 |

Gate outcomes are audited monthly (C03) and reviewed against the [risk appetite](../risk/risk-appetite-statement.md) quantitative limits.
