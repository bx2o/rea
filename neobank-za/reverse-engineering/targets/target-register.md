# SA Banking / Neobank Target Register

A register of **candidate** reverse-engineering targets for the NeoBank ZA programme. This is
a **template with no verified data and no authorisations granted.**

> ## Rules for this register
>
> 1. **Nothing here is authorised.** Every target starts at `UNVERIFIED`. A target may only
>    move to `AUTHORISED` when a named owner records the written authorisation reference
>    (who authorised, scope, date) and the register is updated by that owner.
> 2. **Do not analyse a target that is not `AUTHORISED`.** The
>    [playbooks](../playbooks/README.md) and any batch tooling must gate on this column.
> 3. **Package/Bundle IDs are `UNKNOWN` until independently verified** for that platform.
>    Do not fill them from memory or guesswork; verify against the shipped artefact or an
>    official listing and record the source.
> 4. **Only analyse software you own or are authorised to examine**, and never to defeat
>    licence/DRM/integrity protections or steal credentials. See
>    [`../playbooks/README.md`](../playbooks/README.md).
> 5. One row per **target × platform** is recommended where IDs differ per platform; kept as
>    one row per target here with `Platform` listing the candidate surfaces.

## Legend

| Field | Meaning |
| --- | --- |
| **Target** | Institution / brand name. |
| **Platform** | Candidate surface(s): Android / iOS / Web (mark which are in scope once authorised). |
| **Package / Bundle ID** | Android `applicationId` / iOS `CFBundleIdentifier`. `UNKNOWN` until verified. |
| **Authorisation status** | `UNVERIFIED` (default) → `AUTHORISED` (owner + reference) → `WITHDRAWN`. |
| **Owner** | Named person accountable for the authorisation and the analysis. |
| **Status** | Workflow state: `—` / `scoped` / `in progress` / `reviewed` / `closed`. |

## Register

| Target | Platform | Package / Bundle ID | Authorisation status | Owner | Status |
| --- | --- | --- | --- | --- | --- |
| Standard Bank (incl. "Banking App") | Android / iOS / Web | UNKNOWN | UNVERIFIED | | |
| FNB (First National Bank) | Android / iOS / Web | UNKNOWN | UNVERIFIED | | |
| Absa | Android / iOS / Web | UNKNOWN | UNVERIFIED | | |
| Nedbank | Android / iOS / Web | UNKNOWN | UNVERIFIED | | |
| Capitec | Android / iOS / Web | UNKNOWN | UNVERIFIED | | |
| TymeBank | Android / iOS / Web | UNKNOWN | UNVERIFIED | | |
| Discovery Bank | Android / iOS / Web | UNKNOWN | UNVERIFIED | | |
| Bank Zero | Android / iOS / Web | UNKNOWN | UNVERIFIED | | |
| African Bank | Android / iOS / Web | UNKNOWN | UNVERIFIED | | |
| Old Mutual Bank | Android / iOS / Web | UNKNOWN | UNVERIFIED | | |
| Access Bank South Africa | Android / iOS / Web | UNKNOWN | UNVERIFIED | | |
| Investec | Android / iOS / Web | UNKNOWN | UNVERIFIED | | |
| Bidvest Bank | Android / iOS / Web | UNKNOWN | UNVERIFIED | | |
| Yoco | Android / iOS / Web | UNKNOWN | UNVERIFIED | | |
| Ozow | Android / iOS / Web | UNKNOWN | UNVERIFIED | | |
| Stitch | Android / iOS / Web | UNKNOWN | UNVERIFIED | | |
| Peach Payments | Android / iOS / Web | UNKNOWN | UNVERIFIED | | |
| Luno | Android / iOS / Web | UNKNOWN | UNVERIFIED | | |
| VALR | Android / iOS / Web | UNKNOWN | UNVERIFIED | | |

> The challengers (Yoco, Ozow, Stitch, Peach, Luno, VALR) are payments/fintech and crypto
> exchanges rather than deposit-taking banks; they are registered here as candidates for
> competitive/feature comparison only, under the same authorisation rules.

## How to add or update a row

1. Verify the platform IDs from the shipped artefact / official listing; record the source
   in the target's findings folder (e.g. `../targets/findings/<target>/README.md`).
2. Obtain written authorisation; record the reference and the named owner.
3. Flip `Authorisation status` to `AUTHORISED` and fill `Owner`.
4. Only then run a playbook; file outputs per
   [`findings/README.md`](./findings/README.md).

Verify-status vocabulary for IDs: `UNKNOWN` → `VERIFIED` (with source) → `STALE` (superseded
by a new build).

## Choosing a playbook

Select by target type — see the table in [`../playbooks/README.md`](../playbooks/README.md):
Android APK → [`android-banking-app-analysis.md`](../playbooks/android-banking-app-analysis.md);
iOS IPA → [`ios-app-analysis.md`](../playbooks/ios-app-analysis.md);
web → [`web-banking-analysis.md`](../playbooks/web-banking-analysis.md);
captures → [`network-capture-analysis.md`](../playbooks/network-capture-analysis.md).

---

**Related:** [`findings/README.md`](./findings/README.md) ·
[`../playbooks/README.md`](../playbooks/README.md) ·
[`../playbooks/evidence-ledger-template.md`](../playbooks/evidence-ledger-template.md)
