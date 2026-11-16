# Playbook — Fraud & Security Review (Defensive)

**Target type:** **our own** banking app / web app / API, reviewed defensively. **Mode:**
static and passive inspection to *find and fix* weaknesses. **Methodology only.**

> ## Defensive review vs offensive exploitation
>
> This playbook is for **defensive** security review of software **we own or are authorised
> to review**. It is explicitly **not** an exploitation guide.
>
> **In scope:** mapping attack surface, spotting insecure storage, exported components,
> weak crypto choices, hardcoded secrets, missing pinning, over-broad permissions — and
> reporting them to the owner with remediation guidance.
>
> **Out of scope (do not do):** weaponising a finding, bypassing licence/DRM/integrity
> controls, exfiltrating secrets or funds, capturing others' credentials, or testing any
> system without authorisation. Where you find a live secret, **report it and stop** — do not
> authenticate with it or publish it.
>
> See the boundary in [`README.md`](./README.md).

---

## 0. Scope the review

Record the reviewed artefacts and their hashes (APK/IPA/web build id), the authorisation
reference, and the review date. Define boundaries: which app, which version, which
environment (test only). Use the [target register](../targets/target-register.md) for
authorisation status.

## 1. Attack-surface map

From static inventory, enumerate and classify each entry point:

| Surface | Source evidence | REA tools |
| --- | --- | --- |
| Exported Android components | manifest | `inspect_android_package`, `decode_android_resources` |
| Deep links / URL schemes | manifest, IPA `CFBundleURLTypes`, associated domains | `inspect_android_package`, `inspect_plist`, `inspect_macho` |
| Network endpoints | strings, captures | `search_strings`, `inspect_web_network_capture` |
| Web view / hybrid bridges | code (`addJavascriptInterface`, `WKScriptMessageHandler`) | `search_android_classes`/`inspect_android_method`, `search_strings` |
| Embedded native libs | APK/IPA contents | `inspect_artifact`, `open_binary` |
| Third-party SDKs | package/framework inventory | `search_android_classes`, `inspect_macho` |
| Background/foreground services | manifest, plists | `inspect_android_package`, `inspect_plist` |

For each, record reachability (exported? permission-guarded?), what it can do, and the
Evidence ID. Reachability from a *non-privileged* app is the security-relevant question —
note it as inference unless observed.

## 2. Insecure storage

Look for data at rest that should not be there:

- Android: plaintext `SharedPreferences`, world-readable files, unencrypted SQLite.
  `inspect_sqlite_database` can read a bundled or extracted SQLite snapshot (schema +
  one table's rows, Node ≥24.15). `search_strings`/`inspect_android_method` reveal storage keys.
- iOS: `UserDefaults` vs Keychain usage; `NSFileProtection`; keyed archives via
  `inspect_keyed_archive`.
- Both: logging of sensitive data (search for `Log.d`/`NSLog`/`print` around PAN/OTP/token),
  and cached responses with no `Cache-Control: no-store`.

Flag **presence** of sensitive material and **lack of protection**; never extract or retain
real customer data.

## 3. Exported components (Android)

From the decoded manifest, list every component with `android:exported="true"` and its
intent filters / permissions. Cross-reference the implementing class
(`inspect_android_class`/`inspect_android_method`) to understand the data it accepts. A
guarded exported component is fine; an unguarded one handling sensitive intents is a finding.

## 4. Weak crypto

Search for: hardcoded keys/IVs, ECB mode, MD5/SHA-1 for security, `java.util.Random` for
secrets, static salts, custom crypto, `ALLOW_ALL_HOSTNAME_VERIFIER` / trust-all
`TrustManager`, `setHostnameVerifier` accepting all. Report each with the call site's
Evidence ID. Distinguish "uses library X" (observation) from "is cryptographically broken
here" (inference requiring the parameter values).

## 5. Hardcoded secrets

Scan decompiled code and resources for API keys, tokens, Firebase config, cloud bucket
names, and private material. Treatment:

1. Record location + type only (redact the value).
2. Assess **exposure**, not exploitability: a client-embedded key is exposed by construction.
3. Report to the owner; recommend server-side mediation and rotation. **Never** use it.

## 6. Transport security posture

Observe and report: cleartext permitted? `network_security_config` present and strict?
pinning present (OkHttp `CertificatePinner`, TrustKit, `NSPinnedDomains`)? ATS exceptions on
iOS? Then note that **enforced** pinning is a runtime property — corroborate with
[`network-capture-analysis.md`](./network-capture-analysis.md) on a test build you control.
Do not publish bypass steps.

## 7. Platform-integrity & anti-fraud controls

Inventory (as positives, not targets): root/jailbreak detection, emulator detection,
Play Integrity / DeviceCheck / App Attest, RASP/obfuscation, device-binding. Report gaps
(e.g. "no integrity attestation on the login endpoint") as defensive recommendations.

## 8. Triage and severity

For each finding record: title, surface, evidence, **observation vs inference**, exploit
preconditions, severity (impact × preconditions), and remediation. Prefer precise,
reproducible statements. Keep an explicit **unknowns** list for anything not established.

## 9. Ledger, unknowns, export

Use [`evidence-ledger-template.md`](./evidence-ledger-template.md). Track open items with
`record_unknown`. `export_evidence_bundle` before `close_binary`. Hand the report to the
app owner through the filing process in
[`../targets/findings/README.md`](../targets/findings/README.md).

## 10. Limitations

- Static review cannot prove runtime behaviour (e.g. enforced pinning, actual key use).
- Obfuscation limits name-based search; record as a coverage limitation.
- Absence of a string/symbol is an **unknown**, not proof of absence.
- Never claim static analysis observed execution.

---

**Related:** [`android-banking-app-analysis.md`](./android-banking-app-analysis.md) ·
[`ios-app-analysis.md`](./ios-app-analysis.md) ·
[`network-capture-analysis.md`](./network-capture-analysis.md) ·
[`../custom-tools/example-banking-tools.md`](../custom-tools/example-banking-tools.md)
