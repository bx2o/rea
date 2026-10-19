# Master Registry — UnConsolidated

**Source of truth:** `/workspace/.stremiium/registry/master-registry.json`
**Schema:** `schemaVersion` "2.0", `generatedAt` "2026-08-23T13:32:08.114Z", `source_root` ".stremiium/agents" [SEEN]
**Related schemas:** `.stremiium/registry/schema/master-record.schema.json`, `…/state-event.schema.json`, `…/agent-manifest.schema.json`
**Canonical status:** the JSON file is authoritative; this document is a derived view and contains **no full record dump** by design.

> **Why not paste the 324 records?** The registry is a *runtime data file*, not prose. Un-consolidating
> it means explaining its **schema**, **shape** and **aggregates** so a human can decide what to change,
> while the machine keeps the full payload. Dumping 324 records into markdown would duplicate the file,
> create a maintenance hazard, and instantly drift. Aggregates below were computed directly from the
> file with `jq` (§6).

---

## 1. Top-level shape

| JSON key | Value | Meaning |
|---|---|---|
| `schemaVersion` | `"2.0"` | registry schema generation |
| `generatedAt` | `2026-08-23T13:32:08.114Z` | generation timestamp |
| `lifecycle_states` | 9 states (see §2) | the legal lifecycle vocabulary |
| `source_root` | `.stremiium/agents` | directory the records were projected from |
| `record_count` | **324** | total records |
| `records` | array of 324 objects | one per agent/role (see §3) |

**Integrity check:** `records | length == record_count == 324` (verified). `[SEEN]`

---

## 2. `lifecycle_states` — the lifecycle vocabulary

Ordered, and (per the schema) mutually exclusive:

```
PROPOSED → DESIGNED → IMPLEMENTED → TESTED → VERIFIED → STAGED → PRODUCTION → DEPRECATED → ARCHIVED
```

| State | Entry intent | Exit intent |
|---|---|---|
| PROPOSED | an agent is conceived, no build artefact | design started |
| DESIGNED | design/spec exists | implementation started |
| IMPLEMENTED | code/prompt written | testing begun |
| TESTED | tests pass | verification begun |
| VERIFIED | independently verified | staged for release |
| STAGED | in a pre-production environment | promoted |
| PRODUCTION | live | deprecated |
| DEPRECATED | superseded, still resolvable | archived |
| ARCHIVED | retained, not resolvable | (terminal) |

**Observed usage:** only two states are actually populated — **PRODUCTION (279)** and **PROPOSED (45)**.
The intermediate states (DESIGNED…STAGED, DEPRECATED, ARCHIVED) are **defined but unused** in the
current registry. `[SEEN]` This is a real signal: the lifecycle gate is effectively binary today
(§5, failure mode F-3).

---

## 3. Record fields (`records[]` object)

Verified union of keys across records: `agent_id, canonical_name, display_name, council, department,
parent, children, purpose, capabilities, skills, tools, plugins, model_requirements,
memory_requirements, security_classification, permissions, escalation_policy, version,
lifecycle_status, owner, tests, metrics, kind, definition_path, legacy_key`. `[SEEN]`

| Field | Type | Notes / observed values |
|---|---|---|
| `agent_id` | string | e.g. `agt-academy-lead.c05.c05-human-resources` |
| `canonical_name` | string | usually equals `agent_id` |
| `display_name` | string | human label, often emoji-prefixed (`🎓 C05 ACADEMY LEAD`) |
| `council` | string\|null | `C01`…`C16`, or `null` for staff/coordination/meta/exec records (35 records) |
| `department` | string\|null | e.g. `c05-human-resources`, `c07-sales-business-development` |
| `parent` | string | captain id (`c05-chief-people-officer`), an SC id (`sc-master-orchestrator`), or a `.notion-projection` parent |
| `children` | array | child agent ids (observed empty `[]` in samples → hierarchy is expressed via `parent`, not `children`) |
| `purpose` | string | one-line mandate; some are auto-generated "<NAME> - Stremiium squad agent" placeholders |
| `capabilities` / `skills` / `tools` / `plugins` | arrays | observed empty `[]` in samples → **not yet populated** |
| `model_requirements` | object | `{ "class": "STANDARD" }` |
| `memory_requirements` | object | `{ "profile": "standard" }` |
| `security_classification` | string | e.g. `INTERNAL` |
| `permissions` | array | observed empty `[]` |
| `escalation_policy` | string | canonical short form `captain->sc->mychael->board` |
| `version` | string | semantic-ish (`1.0.0`, `1.0`, and placeholder `0.0.0`) |
| `lifecycle_status` | enum | §2 states; observed PRODUCTION / PROPOSED |
| `owner` | string\|null | frequently `null` → ownership gap (§5, F-2) |
| `tests` | array | observed empty `[]` (no test bindings yet) |
| `metrics` | object | observed empty `{}` |
| `kind` | enum | `specialist` \| `council` \| `coordinator` \| `meta` \| `orchestrator` |
| `definition_path` | string | on-disk path, e.g. `.stremiium/agents/department-agents/…/AGT-…agent.md` |
| `legacy_key` | string | migration breadcrumb, e.g. `stremiium.agent.legacy_a64b37c5a47b894ca42bb75f` |

> **Data-quality note.** `capabilities`, `skills`, `tools`, `plugins`, `permissions`, `tests` and
> `metrics` are schema-present but largely **unpopulated**. The registry currently answers *"who
> exists and where do they sit"* well, and *"what can each one do"* poorly. `[SEEN]`

---

## 4. Aggregations

### 4.1 Records by `kind`

| kind | count | share |
|---|---:|---:|
| specialist | 273 | 84.3% |
| council | 29 | 9.0% |
| coordinator | 16 | 4.9% |
| meta | 5 | 1.5% |
| orchestrator | 1 | 0.3% |
| **total** | **324** | **100%** |

### 4.2 Records by `council`

| Council | records | Council | records |
|---|---:|---|---:|
| C01 Legal-Compliance | 20 | C09 Marketing-Comms | 10 |
| C02 Operations | 7 | C10 Finance-IR | 25 |
| C03 Admin-Knowledge | 34 | C11 Dev-Engineering | 15 |
| C04 Strategy-Growth | 51 | C12 Cyber-Intel | 25 |
| C05 HR-Culture | 14 | C13 Web3-Finance | 19 |
| C06 Eng-Infrastructure | 8 | C14 Customer-Success | 6 |
| C07 Sales-BizDev | 21 | C15 Product-Management | 19 |
| C08 Design-Creative | 8 | C16 Banking-Fintech | 7 |
| **(no council)** | **35** | | |

**Sum check:** 20+7+34+51+14+8+21+8+10+25+15+25+19+6+19+7 + 35 = **324**. `[SEEN]`

- The **35 un-councilled records** are the staff line (16 coordinators), meta-councils (5),
  the orchestrator (1), and Notion-projection roles. `[SEEN]`
- **Largest council:** C04 Strategy-Growth (51) — a consequence of four department folders each
  carrying multiple captain variants. **Smallest:** C14 Customer-Success (6). `[SEEN]`

### 4.3 Records by lifecycle

| lifecycle_status | count |
|---|---:|
| PRODUCTION | 279 |
| PROPOSED | 45 |
| (all others) | 0 |

### 4.4 Parent/root topology (derived)

Distinct `parent` values resolve to: `sc-master-orchestrator`; the 16 council captains
(`c01-legal-compliance-captain` … `c16-banking-fintech-captain`); a set of
`*.notion-projection` parents (e.g. `agt-chief-technology-officer.notion-projection`,
`agt-vp-engineering.notion-projection`); and `null` for top-level records. `[SEEN]`

---

## 5. Known gaps / failure modes

| ID | Finding | Class |
|---|---|---|
| F-1 | Capability/skill/tool/permission arrays are empty → registry is an org chart, not a capability catalogue. | SEEN |
| F-2 | `owner` is frequently `null` → unowned agents. | SEEN |
| F-3 | 7 of 9 lifecycle states are unused; the gate is effectively PRODUCTION↔PROPOSED. | SEEN |
| F-4 | `children` is empty even where `parent` implies hierarchy → the tree must be reconstructed by parent-indexing, not by walking `children`. | SEEN |
| F-5 | Some `purpose` strings are placeholder auto-text ("… - Stremiium squad agent") rather than real mandates. | SEEN |
| F-6 | `version` "0.0.0" appears on some PROPOSED records → version not meaningful pre-production. | SEEN |
| F-7 | `record_count` (324) counts roles; `COUNCIL_REGISTRY.json` `totalAgents` says "100+" → the two counts measure different things and must not be quoted interchangeably. | SEEN |

---

## 6. How to query the registry

All queries are read-only against the JSON; no writes.

```bash
# Total records + schema
jq '{schemaVersion, record_count, n: (.records|length)}' \
   /workspace/.stremiium/registry/master-registry.json

# Distribution by council
jq -r '.records | group_by(.council)
        | map({c:(.[0].council), n:length}) | sort_by(-.n)[]
        | "\(.c // "(none)")\t\(.n)"' \
   /workspace/.stremiium/registry/master-registry.json

# Distribution by kind and by lifecycle
jq -r '.records | group_by(.kind) | map("\(.[0].kind)\t\(length)")[]' <file>
jq -r '.records | group_by(.lifecycle_status) | map("\(.[0].lifecycle_status)\t\(length)")[]' <file>

# All agents of one council (ids + definition paths)
jq -r '.records[] | select(.council=="C13")
        | "\(.agent_id)\t\(.definition_path)"' <file>

# Lifecycle integrity: records whose definition_path does not exist on disk
jq -r '.records[].definition_path' <file> | while read -r p; do
  [ -f "/workspace/$p" ] || echo "MISSING: $p"; done

# Orphan check: records whose parent is not another agent_id in the registry
jq -r '[.records[].agent_id] as $ids
       | .records[] | select(.parent != null and ([$ids[]]|index(.parent)|not))
       | "\(.agent_id) -> \(.parent)"' <file>
```

**Querying guidance:**
1. Prefer `agent_id` as the join key; `canonical_name` usually duplicates it.
2. Treat `definition_path` as the pointer to the real prompt; the registry is an index, the file is
   the source.
3. When a `council` is `null`, resolve the role by `kind` (`coordinator`/`meta`/`orchestrator`) rather
   than by council.
4. Re-run the **lifecycle-integrity** and **orphan** checks after any agent add/remove — these are the
   checks `crd-agent-lifecycle` exists to enforce (`../02-coordinators/`).
5. Regeneration is owned by C03 Admin-Knowledge; do not hand-edit the JSON.
