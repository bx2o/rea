---
title: SESS — Snapshotted Event-Sourced State Architecture
document_type: state_architecture_standard
version: '1.0'
status: active
owner: SC-MASTER-001
ratified: '2026-08-22'
scope: all coordinators, ledgers, session contexts
validator: scripts/validate-state-management.js (agents:state:check)
---

# SESS — SNAPSHOTTED EVENT-SOURCED STATE ARCHITECTURE

Prompt 15 production answer: how Stremiium coordinators hold state across turns without mutating shared dictionaries, corrupting context, or destroying KV-cache economics.

## SESS-0 PURPOSE & SCOPE

Coordinators are long-lived process owners whose state (ledgers, queues, calendars) must survive turns, sessions, crashes, and audits. SESS defines **one discipline** for all of them: state is *derived*, never *mutated*; history is *appended*, never edited; context prefixes are *pinned*, never silently shifted. First-class clients: all 16 coordinator records. Consumers: validators, dashboards, PIR/audit reconstruction.

## SESS-1 STATE PLANES

| Plane | Home | Semantics |
|---|---|---|
| **P1 Session volatile** | conversation/window scratch | COW overlay atop latest snapshot; discarded unless committed as events |
| **P2 Durable domain ledgers** | `*.jsonl` under coordinator scope (e.g., `screen-matrix.jsonl`, `lifecycle-ledger.jsonl`, `override-log.jsonl`) | append-only events = source of truth; state = deterministic fold |
| **P3 Institutional memory** | `.stremiium/memory/**`, task archives, sealed registries | long-lived; governed by retention + knowledge-flow |

## SESS-2 CORE MECHANISMS

| Requirement | Mechanism | Rule |
|---|---|---|
| Immutable state | Versioned snapshots (`state@vN`) | Readers never observe partial merges; writes create vN+1 |
| Copy-on-write | Turn-scoped overlays | Overlay commits → event(s); aborts → discard, zero residue |
| Event sourcing | Append-only JSONL ledgers | `{event_id, ts, domain, type, actor, payload_ref?, schema_version}` envelope only |
| Deterministic transitions | Pure reducers `(state,event)→state'` | No IO, no clock reads inside reducers; time enters via event `ts` |
| Checkpoints | Snapshot every N=500 events or on HALT/severity-change | Replay bounded; crash recovery = last checkpoint + tail replay |
| Stable context prefixes | Session-open pinning | Pin: constitution hash · routing-law version · registry snapshot id · charter set hash |
| Token-prefix stability | Mid-session immutability | Pinned artifacts must not change during a session; changes ⇒ new session |
| KV-cache reuse | Prefix-aligned prompting | System+law+registry block constant per session; variable tail appended |
| Cache invalidation | Explicit version-bump events only | `prefix.invalidated{artifact,old,new}` logged; never silent |
| Latency impact | Budget table §SESS-7 | Prefix hit ≈ O(1) continuation; full rebuild = checkpoint fold ≤2s typical |

## SESS-3 EVENT ENVELOPE CONTRACT

Schema: `.stremiium/registry/schema/state-event.schema.json`. Envelope fields only — domain payloads live in `payload` and are validated by their own schemas where present. `event_id` format `EV-YYYYMMDD-NNNNNN`; sequence per ledger monotonic; gaps are defects.

## SESS-4 LEDGER RULES

1. JSONL, UTF-8, one envelope per line, LF endings.
2. Append-only: no edits, no deletes; corrections are compensating events.
3. Every ledger declares its owning coordinator + reducer name in its first line meta event (`type:"ledger.opened"`).
4. Cross-ledger references use ids (`INC-{id}`, `CL-{id}`, `EQ-NNNN`), never embedded copies.
5. Sacred ledgers (e.g., `override-log.jsonl`) additionally require dual-verification appends (executive-liaison).

## SESS-5 SNAPSHOT CADENCE & CHECKPOINTS

Nightly scheduled snapshots for every active ledger + event-triggered checkpoints (HALT raise, severity change, window close). Checkpoint files carry `{ledger, upto_event_id, folded_state_hash}` so replay verification is one comparison.

## SESS-6 PREFIX STABILITY PROTOCOL

Session open sequence: (1) read pinned hashes from `.stremiium/config/agents/state-policy.json`; (2) verify current artifact hashes match; mismatch ⇒ refuse start, report drift; (3) build context block in fixed order: Constitution excerpt → routing law digest → registry snapshot summary → charter set manifest → task tail. Mid-session edits to any pinned artifact are forbidden; if unavoidable, close session, bump versions, reopen.

## SESS-7 LATENCY MODEL

| Path | Cost profile |
|---|---|
| Prefix cache hit (normal turn) | near-zero extra latency; append-only tail growth linear in conversation |
| Post-invalidation first turn | prefix rebuild (one-time); amortized by longer subsequent session |
| Crash recovery | checkpoint load + ≤500-event tail replay (bounded seconds) |
| Cross-session cold open | snapshot load only (no replay) |

Design consequence: prefer many small sessions with stable pins over one mega-session with drifting prefixes.

## SESS-8 INVALIDATION POLICY

Invalidation requires an explicit version-bump event naming old/new artifact hashes. Coordinators consuming invalidated artifacts receive ripple notifications (dependency-graph feed from project-sync). Silent invalidation is a reportable defect.

## SESS-9 CLIENT ADOPTION MATRIX (v1)

| Coordinator | Ledger(s) |
|---|---|
| crd-compliance-ops | screen-matrix.jsonl |
| crd-council-liaison | consult-ledger.jsonl |
| crd-data-governance | pi-inventory.jsonl · flow-declarations.jsonl |
| crd-knowledge-flow | knowledge-bindings.jsonl · routing-tickets.jsonl · lessons-ledger.jsonl |
| crd-agent-lifecycle | lifecycle-ledger.jsonl |
| crd-project-sync | checkpoint-ledger.jsonl · dependency-graph.json (versioned doc-plane) |
| crd-deployment | release-ledger.jsonl |
| crd-incident-response | incident-log.jsonl |
| crd-research-ops | evidence-index.jsonl · contradiction-queue.jsonl · unknowns-registry.jsonl |
| crd-executive-liaison | decision-queue.jsonl · override-log.jsonl (SACRED) |
| governance plane | override-log.jsonl co-verified by executive-liaison |

## SESS-10 REDUCER CONTRACT

Reducers are named, pure, total functions registered per ledger (`reducers.<domain>.<event>`); unknown event types fail closed. Reducer suites live beside validators (`scripts/state/reducers/*.js` — landing B2 follow-up) and are exercised by fixture replays before any ledger adopts a new event type.

## SESS-11 FAILURE MODES & RECOVERY

| Mode | Signature | Recovery |
|---|---|---|
| Ledger corruption | parse failure mid-file | quarantine suffix `.corrupt-{ts}`, rebuild from last checkpoint + upstream mirrors |
| Replay divergence | folded hash ≠ checkpoint hash | freeze ledger, diff events, compensating-event repair |
| Prefix drift mid-session | pinned hash mismatch detected | session refuses continuation; new session after version bump |
| Clock skew bursts | non-monotonic ts within actor | actor-local sequence authority; ts advisory |

## SESS-12 VALIDATOR CONTRACT

`agents:state:check` asserts: spec presence + section markers · envelope schema validity · 16 coordinator charters declare ≥1 jsonl client · declared ledgers ⊆ adoption matrix · existing ledger files parse envelope-clean · control-plane policies present (state/cache/batching/loop) · memory architecture artifacts present.

---

**END OF SESS ARCHITECTURE STANDARD**
Version 1.0 · Ratified 2026-08-22 · Supersedes ad-hoc state notes in prior charters (charters remain authoritative for domain semantics)
