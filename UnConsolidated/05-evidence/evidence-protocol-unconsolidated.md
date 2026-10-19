# Evidence Protocol — UnConsolidated

**Derived from:** `/workspace/task/PROGRAM_BRIEF.md` §5 (four evidentiary outputs) and §6 (evidence-ledger format), §7 (strategic filter)
**Applies to:** every dossier (`research/<group>/<entity>/07-rea-reverse-engineering.md`), every `evidence-ledger.json`, and every UnConsolidated document in this folder.
**Canonical status:** the Program Brief is authoritative; this is a rigorous, reusable expansion.

---

## 0. The governing rule

> **"never speculate when software behaviour can be verified; always label the difference between
> what is *Seen*, what is *Inferred*, and what is *Unknown*."** — `PROGRAM_BRIEF.md`:25-26

Un-consolidation multiplies documents, so it multiplies opportunities to fabricate. This protocol
is the defence: no statement about the system exists without an evidence class and a source.

---

## 1. The four evidentiary outputs

Every REA/analysis artefact partitions findings into **exactly four** buckets
(`PROGRAM_BRIEF.md`:119-128). They are ordered from strongest to weakest warrant:

| # | Output | Ledger enum | Warrant | What belongs here |
|---|---|---|---|---|
| 1 | **Evidence (Seen)** | `SEEN` | verifiable | strings, bytecode, function signatures, network calls, public filings, published fee schedules — **each with a citation** |
| 2 | **Recovered Graph (Synthesised)** | `INFERRED` | derived | logical architecture, state machines, data models **derived from** Seen evidence |
| 3 | **Limitations (Known Boundaries)** | *(boundary record)* | bounded | obfuscated sections, stripped symbols, DRM, WAF blocking |
| 4 | **Unknowns (Unresolved)** | `UNKNOWN` | unresolved | proprietary server-side computation, private APIs, unreachable logic |

### 1.1 Naming reconciliation (important)

The brief's four buckets and the ledger's three-value enum do **not** perfectly align:

- Bucket 1 = `SEEN`, bucket 4 = `UNKNOWN` — clean.
- Bucket 2 "Recovered Graph (Synthesised)" maps to ledger `INFERRED` (the ledger has no
  `SYNTHESISED` value).
- Bucket 3 "Limitations" has **no ledger enum** — it is a *boundary* record, not a claim about the
  system. When a limitation must nonetheless appear as a ledger entry, tag it `SEEN` (the limitation
  itself is an observed fact: "this section is obfuscated") and set `source_ref` to the boundary.

> **Why this matters:** collapsing Limitations into Unknowns hides *why* a thing is unknown and
> therefore hides what extraction step would resolve it. Keep them separate.

### 1.2 The honesty rule (non-negotiable, carried verbatim in spirit)

> **REA (`morluto/rea`) is NOT installed in this workspace and no APK/ASAR artefacts have been
> supplied. Therefore no "Seen" item may claim to derive from a decompiled artefact we do not
> possess.** (`PROGRAM_BRIEF.md`:130-135)

Until REA extraction runs:
- `SEEN` is limited to **public, citable sources** — filings, published pricing, documentation,
  app-store metadata.
- Everything artefact-dependent is labelled `INFERRED` or `UNKNOWN`, and the **extraction step that
  would resolve it is named explicitly**.

---

## 2. Per-class definitions, tests and examples

### 2.1 SEEN
- **Test:** *Can I point to the exact offset/URL/filing where this appears?* If no → not SEEN.
- **Must include:** a `source_type` + `source_ref`.
- **Good:** *"Standard Bank's MyMo account monthly fee is R X."* → `published-pricing`, cited URL.
- **Bad:** *"The app uses certificate pinning."* (unless observed in a network trace we hold) → demote to `INFERRED`.

### 2.2 INFERRED
- **Test:** *Is there a named derivation path from SEEN items to this claim?*
- **Must include:** the derivation, and ideally the parent SEEN ids.
- **Good:** *"Given observed endpoints A and B and a shared token format, the auth flow is OAuth2
  client-credentials."* → cites the two SEEN network calls.
- **Bad:** an inference presented as if observed.

### 2.3 LIMITATIONS
- **Test:** *Is this a boundary on what could be observed, rather than a claim about behaviour?*
- **Must include:** the boundary type and, where feasible, the workaround.
- **Good:** *"Classes 3–9 of `classes.dex` are ProGuard-obfuscated; symbol recovery requires a
  de-obfuscation map."*

### 2.4 UNKNOWN
- **Test:** *Is this unresolved, and can I name the step that would resolve it?*
- **Must include:** the **named resolution step** (e.g. "requires REA dynamic run on APK v…").
- **Good:** *"Server-side fee calculation logic — unreachable without authenticated API access;
  resolution step: instrument a live session."*

---

## 3. Anti-fabrication rules

| # | Rule | Consequence of breach |
|---|---|---|
| A-1 | **No artefact, no SEEN.** No decompiled-artefact claims without the artefact. | Severe — invalidates the dossier |
| A-2 | **Cite or demote.** An uncited claim becomes INFERRED/UNKNOWN. | Minor→major |
| A-3 | **No confidence laundering.** `high` confidence cannot be asserted for an UNKNOWN. | Major |
| A-4 | **Inference is labelled.** Derived architecture is always INFERRED, never SEEN. | Major |
| A-5 | **Limitations ≠ Unknowns.** Keep the boundary reason visible. | Moderate |
| A-6 | **Named resolution.** Every UNKNOWN names the step that resolves it. | Moderate |
| A-7 | **Contradictions are surfaced, not harmonised.** Two sources disagreeing → both recorded + escalated (via `crd-research-ops`). | Major |
| A-8 | **No placeholder IDs.** Do not invent agent/entity IDs; if unverifiable, describe by role/council. | Major |
| A-9 | **Freshness honesty.** If a source predates the entity's change, say so. | Moderate |
| A-10 | **Aggregate ≠ record.** Do not paste 324 registry records to look thorough; summarise and cite. | Minor |

**Escalation of a breach:** a violated rule blocks the dossier's promotion from `partial` to
`executed` (see `../04-execution/`) until corrected.

---

## 4. Evidence-ledger JSON schema

The machine-readable index each dossier carries (`PROGRAM_BRIEF.md`:139-158), formalised:

```jsonc
{
  "$schema": "sc-evidence-ledger/1.0",
  "entity": "<string>",                       // dossier entity name
  "program": "SC-REA-NEOBANK-5.0",
  "rea_status": "not-executed | partial | executed",   // REA extraction state
  "generated_at": "YYYY-MM-DD",
  "entries": [
    {
      "id": "<entity>-EV-001",                // stable, unique, zero-padded
      "claim": "<short claim>",               // one assertion, not a paragraph
      "evidence_class": "SEEN | INFERRED | UNKNOWN",
      "source_type": "public-filing | published-pricing | app-store | docs | rea-artifact | network-trace",
      "source_ref": "<url / filing / artefact offset / 'pending REA extraction'>",
      "confidence": "high | medium | low",
      "verified_at": "YYYY-MM-DD",
      "derived_from": ["<entity>-EV-000"],    // optional; REQUIRED when evidence_class = INFERRED
      "boundary": "<obfuscation | stripped-symbols | DRM | WAF | private-API | none>",  // optional; LIMITATIONS
      "resolution_step": "<what would resolve this>"       // REQUIRED when evidence_class = UNKNOWN
    }
  ]
}
```

### 4.1 Field rules

| Field | Required? | Rule |
|---|---|---|
| `id` | yes | unique per entity; format `<entity>-EV-NNN` |
| `claim` | yes | single, testable assertion |
| `evidence_class` | yes | one of the three enums (§1.1) |
| `source_type` | yes (SEEN/INFERRED) | from the fixed vocabulary |
| `source_ref` | yes (SEEN/INFERRED) | must resolve; `pending REA extraction` allowed only for non-SEEN |
| `confidence` | yes | `low` when uncertain; never `high` for UNKNOWN |
| `verified_at` | yes | ISO date; update on re-verification |
| `derived_from` | required when `INFERRED` | parent SEEN ids |
| `boundary` | recommended for LIMITATIONS | the boundary type |
| `resolution_step` | required when `UNKNOWN` | named next action |

### 4.2 Minimal valid example

```json
{
  "entity": "example-bank",
  "program": "SC-REA-NEOBANK-5.0",
  "rea_status": "not-executed",
  "entries": [
    {
      "id": "example-bank-EV-001",
      "claim": "Monthly account fee is published as R X for tier Y.",
      "evidence_class": "SEEN",
      "source_type": "published-pricing",
      "source_ref": "https://<bank>/pricing (published fee schedule)",
      "confidence": "high",
      "verified_at": "2026-10-19"
    },
    {
      "id": "example-bank-EV-002",
      "claim": "Authentication appears to use a bearer-token flow.",
      "evidence_class": "INFERRED",
      "source_type": "docs",
      "source_ref": "developer documentation, auth section",
      "confidence": "medium",
      "verified_at": "2026-10-19",
      "derived_from": ["example-bank-EV-001"]
    },
    {
      "id": "example-bank-EV-003",
      "claim": "Server-side fee-calculation logic.",
      "evidence_class": "UNKNOWN",
      "source_type": "docs",
      "source_ref": "pending REA extraction",
      "confidence": "low",
      "verified_at": "2026-10-19",
      "boundary": "private-API",
      "resolution_step": "instrument an authenticated live session and trace fee responses"
    }
  ]
}
```

---

## 5. Strategic filter (applied after the four buckets)

Every dossier must end by classifying each major finding (`PROGRAM_BRIEF.md`:162-170):

| Verdict | Meaning |
|---|---|
| **ADOPT** | proven mechanic to reproduce (state the improvement) |
| **ADAPT** | right idea, wrong cost/regulatory fit (state the change) |
| **AVOID** | a liability/lock-in/compliance trap refused |
| **BEAT** | a competitor weakness explicitly attacked |

The filter is a *decision layer* on top of the evidence, so a verdict inherits the weakest evidence
class of the findings it rests on.

---

## 6. Applying this protocol inside UnConsolidated

1. Every UnConsolidated claim about the system carries `[SEEN]`, `[INFERRED]`, `[LIMITATION]` or
   `[UNKNOWN]` inline where provenance is not obvious.
2. Contradictions found while un-consolidating are logged, not fixed silently — e.g. the "7 services"
   vs "11 services" conflict, and the T1–T59 ledger-vs-narrative conflict.
3. `rea_status: not-executed` is the current global state; therefore artefact-dependent claims across
   this folder are `INFERRED`/`UNKNOWN`, never `SEEN`.
4. Do not invent IDs. Where a registry record is unverifiable, describe by council/role (see
   `../01-organisation/`), never by a fabricated `agt-…` id.
