# T30–T40 UnConsolidated Code Mode Implementation Pack

This pack translates prompts T30 through T40 into repository-controlled implementation steps. It is intentionally additive and evidence-gated. Existing agent definitions are not rewritten by this pack.

## T30 — Graph Engineering

**CURRENT:** `.github/config/agents/graph-contract.schema.json` defines typed nodes and data-dependent edges; no runtime graph executor is activated.

**TARGET:** Every non-trivial workflow is represented as a versioned graph where nodes expose input/output contracts and edges describe actual data dependency.

**Steps:**

1. Register workflow owner, graph ID, version, data classification, and rollback reference.
2. Classify each node as agent, deterministic service, router, verification, approval, barrier, or loop.
3. Define input/output contracts for every node.
4. Add an edge only when the downstream node consumes upstream data.
5. Mark fan-out, fan-in, pipeline, router, verify, loop, and barrier behavior explicitly.
6. Validate cycles against loop policy and require convergence/max-iteration controls.
7. Execute in sandbox with trace IDs and node-level failure isolation.
8. Promote only after behavior, security, cost, and rollback tests pass.

**OWNER:** Workflow owner with Engineering Infrastructure (C06), Security (C12), and Product (C15) review. **ROLLBACK:** deactivate graph version and restore previous certified graph.

## T31 — Graph Engineering Roadmap

**CURRENT:** Graph principles are contracts, not a deployed orchestration runtime.

**TARGET:** A staged roadmap from contract validation to observable parallel execution.

**Steps:** (1) inventory sequential workflows; (2) extract data contracts; (3) replace temporal-only edges; (4) identify safe fan-out; (5) add fan-in verification; (6) introduce routers; (7) add barriers only for complete upstream requirements; (8) add bounded loops; (9) benchmark sequential versus graph execution; (10) certify, monitor, and rollback.

**FILES:** `graph-contract.schema.json`, workflow definitions, evaluation suites, monitor registry. **SUCCESS:** measurable latency/cost/quality improvement without increased critical failures.

## T32 — Loop Engineering

**CURRENT:** `loop-policy.json` requires bounded loops and convergence metadata.

**TARGET:** Reusable research, verification, testing, security, learning, monitoring, deployment, and rollback loops.

**Steps:** define trigger; capture immutable input version; execute one bounded action; evaluate against a baseline; record feedback; check stop/convergence; enforce iteration and cost limits; escalate on non-convergence; persist audit event; publish or discard proposal under approval policy.

**GUARDS:** no unbounded iteration, self-granted permissions, silent production mutation, or loop without rollback.

## T33 — Harness Engineering

**CURRENT:** `harness-policy.json` defines control/data/runtime/sandbox/policy/state/evaluation/observability/deployment planes.

**TARGET:** Every agent invocation passes identity, policy, resource, timeout, kill-switch, secret-isolation, and audit checks before tool execution.

**Steps:** resolve agent/user/tenant; load registry and permission policy; select sandbox level; allocate bounded resources; redact secrets; execute; emit trace; enforce timeout; quarantine failures; evaluate output; require approval for privileged effects; destroy ephemeral state.

**ROLLBACK:** disable the runtime route and return to read-only recommendation mode.

## T34 — RAG × Memory

**CURRENT:** `memory-policy.json` and `rag-policy.json` define layers, provenance, quarantine, and reviewed projections.

**TARGET:** Working, short-term, long-term, organizational, and compliance memory with explicit ownership and retrieval order.

**Steps:** classify source; hash and provenance-stamp content; quarantine untrusted input; assign owner and access policy; retrieve by hierarchy; attach confidence and timestamp; invalidate on source/access/poisoning change; archive or delete through an auditable workflow.

**SUCCESS:** no unprovenanced regulated memory is retrieved into an active decision context.

## T35 — KV Cache Architecture

**CURRENT:** `cache-policy.json` specifies request-bound KV cache, tenant isolation, and invalidation.

**TARGET:** Benchmark-backed use of prompt/KV/semantic/tool/embedding caches without cross-tenant or stale-context leakage.

**Steps:** define cache key from model, prompt version, tenant, context version, and policy; measure hit rate and quality; test invalidation; compare standard, quantized, and cross-model reuse; block adoption if degradation exceeds evaluation threshold; retain only approved cache classes.

**UNKNOWN:** cross-model KV transfer remains experimental and requires empirical benchmarking before activation.

## T36 — Shared State and Prefix Stability

**CURRENT:** `state-policy.json` forbids shared mutable orchestration state and requires versioned events.

**TARGET:** Canonical, immutable, copy-on-write state envelopes with stable prefixes and dynamic suffixes.

**Steps:** separate immutable configuration from task/context/event state; serialize canonical JSON with sorted keys; append events instead of mutating shared dictionaries; derive cache keys from state version; benchmark prompt-prefix stability; reject state transitions missing owner context or version.

## T37 — Context Graph Engineering

**CURRENT:** `context-graph.schema.json` defines nodes, edges, ownership, classification, provenance, and expiration.

**TARGET:** A permission-aware graph linking users, agents, councils, tasks, documents, skills, tools, decisions, risks, products, and compliance obligations.

**Steps:** register node type and owner; add provenance and expiry; create only meaningful data-dependency edges; enforce access before traversal; version graph changes; quarantine disputed edges; expose read projections to agents; retain immutable audit history.

## T38 — Agent Plugins

**CURRENT:** `plugin-registry.json` is deny-by-default but contains no active plugins.

**TARGET:** Manifest-driven GitHub, Notion, Slack, finance, blockchain, cloud, security, and support integrations with scoped permissions.

**Steps:** submit manifest; declare capabilities/scopes; externalize credentials; run dependency/supply-chain scan; sandbox; test compatibility and rate limits; register health/revocation; obtain owner/security approval; activate read-only first; expand scopes only through a reviewed exception.

## T39 — Per-User OAuth

**CURRENT:** `oauth-policy.json` requires server-side identity resolution and excludes tokens from model context/logs.

**TARGET:** User/tenant/agent/session/provider grants resolved by a credential gateway.

**Steps:** resolve authenticated user and tenant server-side; load encrypted provider grant; verify agent scope; mint short-lived provider token; call tool outside model context; redact logs; record audit metadata without token material; revoke on user/provider/policy change; test tenant isolation.

## T40 — Content Agents

**CURRENT:** `content-governance-policy.json` defines source, copyright, accessibility, brand, and compliance checks.

**TARGET:** Content strategy, research, copy, social, video/audio, design, localization, fact-checking, compliance, copyright, analytics, and distribution workflows.

**Steps:** create brief and audience classification; gather source evidence; draft in a non-published workspace; run fact/copyright/accessibility/brand/compliance checks; route regulated claims to Legal/Compliance; obtain owner approval; publish through a deterministic distribution tool; retain revision, source, and analytics records; support takedown and correction rollback.

**COMPLETION GATE FOR T30–T40:** schemas validate; policies pass; each workflow has owner, inputs, outputs, approval, telemetry, test fixtures, and rollback; no runtime activation occurs without human certification.
