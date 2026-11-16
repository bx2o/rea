# Playbook — Competitive Feature Teardown

**Target type:** a competitor bank/challenger app, compared against our own feature set.
**Mode:** static + passive comparison. **Methodology only** — no real competitor app has
been analysed here.

> **Authorisation & fair competition.** Only analyse a competitor's shipped app if you own
> a copy and your organisation is satisfied that examining shipped artefacts for
> interoperability/feature comparison is lawful (mind copyright, contract terms, and the
> Cybercrimes Act). Do **not** extract, reuse, or decompile-to-copy proprietary code or
> assets, and do not defeat licence/DRM/integrity controls. Compare **capabilities and public
> behaviour**, not internal implementation details you have no right to reuse. See
> [`README.md`](./README.md).

---

## 0. Goal and ethical framing

The output is a **feature/behaviour comparison**, defensible from shipped-artefact evidence:
what the competitor exposes, what we expose, and where the gaps are. You are not required to
disassemble their private logic; often the manifest, entitlements, SDK inventory, public web
bundle, and your own test-account captures suffice.

## 1. Pick the comparison axis

Decide the question first, e.g.: onboarding/KYC steps; payment rails (EFT vs PayShap vs card);
beneficiaries; budgeting/insights; security posture (biometric, device binding, attestation);
locale coverage; or API surface shape. One axis per teardown keeps the ledger honest.

## 2. Establish each side's baseline

For **the competitor** and **ours**:

- Android: `inspect_android_package` (permissions, SDKs, components), `search_android_classes`
  for feature modules, `decode_android_resources` for copy/locales.
- iOS: `open_binary` + `inspect_artifact`, `inspect_macho` for frameworks, `inspect_plist`
  for URL schemes/associated domains, `inspect_signature` for entitlements.
- Web: `list_browser_targets` + `analyze_web_bundle` for route/SDK fingerprints; passive
  `observe_web_session` while **you** drive your own account.
- API behaviour: authorised captures via `inspect_web_network_capture`.

Record hashes and build ids on both sides so the comparison is version-pinned.

## 3. Structure the feature matrix

| Feature | Ours (evidence) | Competitor (evidence) | Observation | Inference | Unknown |
| --- | --- | --- | --- | --- | --- |
| e.g. PayShap proxy | present @ `ev_…` | absent in manifest @ `ev_…` | competitor ships no PayShap class/route | competitor may not support it | regional rollout unknown |

Only fill a cell from evidence; use **Unknown** rather than a guess (absence in one artefact
≠ global absence — keep bounded negative searches bounded).

## 4. Compare with REA's comparison tools

Each comparison tool has **scoped claims** (`references/evidence-workflows.md`):

```
MCP:  compare_application_versions   { "left": {...}, "right": {...} }
CLI:  rea compare-application-versions ...
MCP:  compare_javascript_export_shapes { "left": {...}, "right": {...} }   # one export's shape
MCP:  compare_web_captures           { "before": {...}, "after": {...} }
CLI:  rea compare-web-captures ...
MCP:  compare_artifacts              { ... }     # inventory pages
MCP:  compare_functions              { ... }     # explicit function Evidence
MCP:  compare_bundles                { ... }     # membership + unknown history (CLI alias: compare-bundles)
MCP:  find_changed_behavior          { ... }     # static differences = candidates, NOT causal proof
```

- `compare_application_versions` uses **unique-only** exact digest / source digest /
  source-map identity / structural fingerprint / semantic-key tiers; **no fuzzy or
  module-ordinal pairing**.
- `find_changed_behavior` differences are **candidates, not causal proof**.
- Missing or truncated evidence **never proves equality**.

For our own app, `compare_application_versions` across two releases is a clean way to see
what *we* added between builds; use the same tool to compare our public behaviour against a
competitor's public behaviour only at the level your authorisation supports.

## 5. Evidence ledger

One row per compared feature with both sides' Evidence IDs, observation, inference,
unknown, and confidence — see [`evidence-ledger-template.md`](./evidence-ledger-template.md).
Record residual unknowns (e.g. "does competitor SDK X power feature Y?") with `record_unknown`.

## 6. Output

A short, decision-oriented brief: the axis, per-feature observations, the gap, and a
recommendation. Separate **observed competitor behaviour** from **our design choices**
(`SKILL.md`, "Finish the task"). Never present a competitor's internal implementation as
something to copy.

## 7. Limitations

- Comparisons are version- and region-pinned; behaviour varies by build and rollout.
- SDK presence ≠ SDK usage; a bundled SDK may be dormant (unknown).
- Client artefacts cannot prove server-side behaviour; API shape is candidate until observed.
- Fair-competition and IP limits mean some questions are simply out of scope — say so.

---

**Related:** [`web-banking-analysis.md`](./web-banking-analysis.md) ·
[`network-capture-analysis.md`](./network-capture-analysis.md) ·
[`backend-and-api-reconstruction.md`](./backend-and-api-reconstruction.md) ·
[`../targets/target-register.md`](../targets/target-register.md)
