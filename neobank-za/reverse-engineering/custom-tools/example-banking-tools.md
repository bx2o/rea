# Candidate REA Tools for a South African Neobank

Five concrete candidate tools, designed (not implemented) for NeoBank ZA's reverse-
engineering tasks. Each entry gives: **analyst question · inputs · outputs · evidence
produced · limitations · existing REA layers/contracts to reuse**. These follow the rules in
[`authoring-guide.md`](./authoring-guide.md) and `/workspace/rea/docs/tool-design.md`
(start from the analyst question; prefer composition; preserve caller choices; fail closed).

> **Reality check:** every candidate below is a **design**. Before building one, verify no
> existing tool already answers the question (see
> [`../rea-analysis/tool-catalog.md`](../rea-analysis/tool-catalog.md)). Several are pure
> **composition** of existing producers — a strong sign they should be an *external*
> orchestrator script ([`external-orchestration-tools.md`](./external-orchestration-tools.md))
> rather than a new REA primitive. Each entry notes this.
>
> **Authorisation:** all candidates operate only on artefacts/captures you own or are
> authorised to examine. None bypasses protections or contacts third-party systems.

---

## 1. `inspect_banking_endpoint_inventory`

**Analyst question:** *Which API endpoints does this bank app reference, and which of them
did we actually observe in authorised traffic?*

- **Inputs:** `capture_path?` (HAR/SAZ/mitmproxy/qlog — see `inspect_web_network_capture`),
  `apk_path?`, `ipa_path?`. At least one required.
- **Outputs:** a deduplicated inventory of endpoint candidates: `{ method?, host, path_pattern,
  observed_in_capture: bool, sources: [...] }` plus counts and coverage.
- **Evidence produced:** one Evidence record citing the source evidence ids for each endpoint
  (capture record ordinals; string/class locations in the app); distinguishes **observed**
  (seen in capture) from **candidate** (static string only).
- **Limitations:** does not contact any URL; static-only endpoints are candidates, not proof
  of a live route; obfuscation limits string extraction; HAR Unicode originals unknown.
- **Reuse:** `inspect_web_network_capture`, `inspect_pcap_capture`, `search_strings`,
  `decode_android_resources`, `inspect_android_package`; application-layer pattern from
  `src/application/android/AndroidPackageInspection.ts`. Output schema style from
  `src/domain/android/androidAnalysis.ts`.
- **Build or orchestrate?** Mostly **composition** — a good external orchestrator candidate;
  promote to a tool only if the join proves recurring.

## 2. `compare_fintech_api_surfaces`

**Analyst question:** *How does our API surface differ from a competitor's (or between two of
our own releases), at the level our authorisation allows?*

- **Inputs:** two authenticated inputs — `left`/`right`, each a capture artifact or an
  endpoint-inventory Evidence (inline or exact same-session retained reference).
- **Outputs:** added / removed / changed endpoints, aligned by **exact** host+path-pattern and
  method; ambiguous and unknown entities reported, never fuzzy-paired.
- **Evidence produced:** a scoped comparison Evidence listing the supporting evidence ids per
  delta; explicitly states coverage on both sides.
- **Limitations:** client artefacts cannot prove server-side behaviour; missing/truncated
  evidence **never proves equality**; fair-competition limits may restrict the comparison.
- **Reuse:** the comparison contract shape and retained-reference input pattern from
  `compare_application_versions` / `compare_web_captures`
  (`src/contracts/applicationToolContracts.ts`, `src/contracts/browserToolContracts.ts`);
  `src/domain/*` comparison schemas. Deterministic matching rules from
  `references/evidence-workflows.md`.
- **Build or orchestrate?** Prefer **orchestrate**; only build if the matching tiers need to
  be canonical/first-class.

## 3. `inspect_popay_flow_manifest`

**Analyst question:** *What does the app's PayShap / instant-payment flow look like — steps,
endpoints, and state transitions — from its shipped artefacts?*

> Name note: "PayShap" is South Africa's real-time low-value payment rail; avoid a
> product-specific brand in a public REA name. `inspect_instant_payment_flow_manifest` is the
> safer canonical name — `inspect_popay_flow_manifest` is used here only to match the brief.

- **Inputs:** `apk_path?` / `ipa_path?` and optional `capture_path`; an optional `seed`
  (`route | string | class | api-path`) to scope the flow.
- **Outputs:** a flow manifest: ordered steps, endpoints, request/response **schema
  candidates**, and auth headers per step; each element labelled observed vs inferred.
- **Evidence produced:** joins endpoint evidence with code/UI evidence (classes, routes) and
  capture evidence; cites each. **Does not claim runtime execution** unless a runtime capture
  observed it.
- **Limitations:** static flow graphs are candidates; step ordering inferred from code is not
  observed execution; server-side rules are out of scope.
- **Reuse:** `trace_application_feature` / `trace_javascript_semantics`,
  `analyze_javascript_application`, `project_android_application_graph`,
  `project_apple_application_graph`, `inspect_web_network_capture`. Domain graph schemas in
  `src/domain/javascript/*` and `src/domain/android/androidApplication.ts`.
- **Build or orchestrate?** **Orchestrate** over the existing trace/projection tools; build
  only if a canonical "payment flow" schema is repeatedly needed.

## 4. `inspect_biometric_auth_config`

**Analyst question:** *How does this app configure biometric authentication and its fallback
(PIN/password), and what storage does it use?* (Defensive review of **our own** app.)

- **Inputs:** `apk_path` or `ipa_path`.
- **Outputs:** a biometric-auth config inventory: which API is used (Android
  `BiometricPrompt`/`KeyguardManager`/`CryptoObject`; iOS `LocalAuthentication`/
  `LAContext`/Keychain `kSecAccessControl*`), fallback path, and whether secrets are bound to
  the biometric key; each finding labelled observed/inferred.
- **Evidence produced:** class/method and symbol evidence ids with source locations; states
  what could not be determined statically.
- **Limitations:** **static only** — cannot prove the runtime policy (e.g. whether a
  `CryptoObject` is truly required); needs device runtime to confirm; do not use to bypass
  biometrics.
- **Reuse:** `search_android_classes`, `inspect_android_method`, `trace_android_references`;
  iOS `demangle_swift`, `get_objc_classes` (provider), `search_strings`. Pattern from
  `src/application/android/AndroidAnalysisService.ts`.
- **Build or orchestrate?** **Orchestrate** (a focused set of `search_*`/`inspect_*` calls);
  build a tool only if the classification logic becomes complex and reused.

## 5. `summarise_third_party_sdk_risk`

**Analyst question:** *Which third-party SDKs does this app ship, and what is the privacy /
data-exposure risk of each?*

- **Inputs:** `apk_path?` / `ipa_path?`, optional an SDK risk knowledge base path
  (caller-supplied mapping of package/framework → category/notes).
- **Outputs:** an SDK inventory grouped by vendor and category (payments, fraud/device-ID,
  analytics, ads, push, crash), with per-SDK risk annotations and data-permission adjacency.
- **Evidence produced:** package/framework evidence ids; the risk knowledge base is
  **caller-supplied** and marked as an input, not target-derived.
- **Limitations:** SDK **presence ≠ SDK usage** (a bundled SDK may be dormant → unknown);
  risk categories are heuristic and must be labelled; the knowledge base can be stale.
- **Reuse:** `search_android_classes`; iOS `inspect_macho` (linked frameworks) +
  `inspect_artifact`; artifact inventory `inspect_artifact`. Package/framework grouping
  helpers can live in `src/domain/<area>/`.
- **Build or orchestrate?** **Build** is plausible if the vendor→category knowledge base and
  grouping are curated once and reused; otherwise orchestrate.

---

## Shared implementation notes

- **Effect declarations.** All five are static/composition tools. Most would be
  `effects({ mutatesSession: true })` plus `launchesProcess`/`writesFilesystem` only where
  they really spawn an owned engine or write temp files. Never declare effects you do not
  have; `toolContractMetadata` fails closed without an audit.
- **Detail/summary.** Tools producing large inventories should support
  `detail: "summary"` and page via `inspect_analysis_view` (see `inspect_android_package`).
- **Naming.** Canonical public names should be provider-neutral and avoid third-party brands
  (prefer `inspect_instant_payment_flow_manifest` over a brand-specific name).
- **Default to orchestration.** REA's own guidance is to compose before adding a primitive;
  candidates 1–4 are strong orchestrator candidates.

---

**Related:** [`authoring-guide.md`](./authoring-guide.md) ·
[`tool-contract-template.md`](./tool-contract-template.md) ·
[`external-orchestration-tools.md`](./external-orchestration-tools.md) ·
[`../playbooks/backend-and-api-reconstruction.md`](../playbooks/backend-and-api-reconstruction.md)
