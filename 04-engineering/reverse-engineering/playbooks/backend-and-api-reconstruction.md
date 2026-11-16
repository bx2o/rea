# Playbook — Backend & API Reconstruction

**Target type:** the API/domain model *behind* an authorised bank app or web app, rebuilt
from observations. **Mode:** synthesis of evidence from
[`android-banking-app-analysis.md`](./android-banking-app-analysis.md),
[`ios-app-analysis.md`](./ios-app-analysis.md),
[`web-banking-analysis.md`](./web-banking-analysis.md) and
[`network-capture-analysis.md`](./network-capture-analysis.md). **Methodology only.**

> **Authorisation:** only reconstruct APIs you own or are authorised to test. Do not use a
> reconstructed API model to access accounts, funds, or data you are not authorised to
> access. See [`README.md`](./README.md).

---

## 0. Principle: observations → model → ledger

Reconstruction is the disciplined transformation of **observations** (raw decoded facts at
source locations) into a **domain model** (endpoints, schemas, auth, flows) with every claim
traceable to an Evidence ID and every gap recorded as an **unknown**. REA already models this:
`build_reconstruction_obligation_ledger` generates a deterministic ledger from authenticated
evidence, and `evaluate_reconstruction_coverage` evaluates coverage against a named boundary —
both **fail closed** on missing ownership, contradictions, or unresolved proof
(`src/contracts/applicationToolContracts.ts`).

## 1. Inputs

Gather, per target app version (record SHA-256 / build id):

| Input | Where it comes from |
| --- | --- |
| Endpoint strings / base URLs | APK `search_strings`, `decode_android_resources`; IPA `search_strings`; web `analyze_web_bundle` |
| Actual request/response metadata | HAR/SAZ/mitmproxy/qlog via `inspect_web_network_capture`; PCAP via `inspect_pcap_capture` / `inspect_packet_capture` |
| Auth mechanism | capture headers + app code (interceptors, token stores) |
| Route/feature graph | `analyze_javascript_application` + `trace_application_feature` / `trace_javascript_semantics` |
| Manifest/link inventory | Android manifest; IPA associated domains & URL schemes |

Corroborate with the evidence type the claim requires (`SKILL.md`, step 5). Do not infer
behaviour from filenames or strings alone.

## 2. Build the endpoint inventory

Normalise observed endpoints into a stable inventory. Collapse path IDs
(`/accounts/{id}/transactions`) while preserving the literal observed paths as evidence.

For each endpoint record: method, host pattern, path pattern, query params, auth scheme,
request content-type, response content-type, idempotency keys, and the Evidence ID(s) that
observed it. Mark endpoints seen only in static strings (no capture) as **candidates**, and
those observed in live authorised traffic as **observed**.

> The candidate tool `inspect_banking_endpoint_inventory` in
> [`../custom-tools/example-banking-tools.md`](../custom-tools/example-banking-tools.md) is
> designed to automate exactly this join.

## 3. Model auth and session

Classify the auth scheme from captures: bearer token, cookie session, mTLS, OAuth/OIDC, or a
custom device-bound scheme. Record: header/cookie names, refresh vs access tokens, expiry
hints, and any device-binding or fraud-signal headers (e.g. a per-request signature header).
Keep credential **values** out of the ledger — record only their presence and shape.

## 4. Model the domain

Group endpoints into domains (accounts, payments/EFT & pay-shap, cards, beneficiaries,
onboarding/KYC/FICA, statements, support). For each domain capture: the operations, the
request/response **schema candidates**, and the state machine of the flow (e.g. onboarding:
`register → OTP → KYC submit → FICA review → account active`). Mark schema fields inferred
from examples as **inferred** with the sample Evidence ID.

## 5. Use REA's reconstruction workflow tools

```
MCP:  build_reconstruction_obligation_ledger   { "evidence_bundle": {...},
                                                 "reviewed_obligations": [...],
                                                 "manifest": {...} }
MCP:  evaluate_reconstruction_coverage         { "coverage": {...}, "boundary_id": "..." }
CLI:  rea build-reconstruction-obligation-ledger ...
      rea evaluate-reconstruction-coverage ...
```

- `build_reconstruction_obligation_ledger` produces the complete deterministic ledger from
  an authenticated Evidence bundle + reviewed obligations + an explicit reconstruction
  manifest. Duplicate ownership, missing cases, weak verifier authority, unenumerated
  claims, contradictions and residual unknowns **fail closed**.
- `evaluate_reconstruction_coverage` evaluates inline evidence-backed coverage against one
  named boundary; stale/weak/truncated proof is **unknown**; contradictions and missing
  owners **fail closed**.

Also useful: `compare_application_versions`, `compare_source_to_bundle`,
`compare_javascript_export_shapes`, and the session comparison tools
`correlate_static_and_runtime`, `build_call_path`, `find_changed_behavior`,
`verify_reconstruction` — each with **scoped claims** (matching patterns are hypotheses, not
causality; `verify_reconstruction` covers only declared comparable claims).

## 6. The reconstruction ledger

Keep one ledger row per obligation (see [`evidence-ledger-template.md`](./evidence-ledger-template.md)):
Question · Target · Tool · Evidence ID · Observation · Inference · Unknown · Confidence ·
Source. Track residual unknowns with `record_unknown` / `update_unknown` /
`verify_unknown_resolution`; **only qualifying observed evidence can verify a resolution**.

## 7. Handoff

- Defensive follow-up: [`fraud-and-security-review.md`](./fraud-and-security-review.md).
- Competitive feature comparison: [`competitive-feature-teardown.md`](./competitive-feature-teardown.md).
- Filing: [`../targets/findings/README.md`](../targets/findings/README.md).

## 8. Limitations

- A reconstruction is a **model of observed behaviour**, not the bank's source or spec.
- Static endpoint candidates are not proof of a live route; unobserved = unknown.
- Schema fields inferred from a few samples may be incomplete; state coverage explicitly.
- Captures are point-in-time; APK update flows can change endpoints between builds.

---

**Related:** [`network-capture-analysis.md`](./network-capture-analysis.md) ·
[`web-banking-analysis.md`](./web-banking-analysis.md) ·
[`../custom-tools/example-banking-tools.md`](../custom-tools/example-banking-tools.md) ·
[`../rea-analysis/methodology.md`](../rea-analysis/methodology.md)
