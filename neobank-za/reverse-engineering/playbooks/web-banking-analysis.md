# Playbook — Web Banking / Onboarding Site Analysis

**Target type:** a bank's public marketing site, internet-banking web app, or onboarding /
account-opening single-page application (SPA). **Mode:** passive inspection first; declared
actions only when authorised. **Methodology only.**

> **Authorisation:** only inspect pages/accounts you own or are authorised to examine. Do
> not log into accounts you do not own, and do not intercept others' sessions. Runtime
> actions run real code against a real origin — use test accounts and authorised
> environments. See [`README.md`](./README.md).

---

## 0. Routing and two lanes

An open, user-owned browser page → **`list_browser_targets`** (passive). An action *REA*
must perform → **`capture_browser_scenario`** with declared actions. A captured HAR/SAZ →
**`inspect_web_network_capture`** (see [`network-capture-analysis.md`](./network-capture-analysis.md)).
The browser lane needs **`REA_BROWSER_EXECUTABLE`** (an absolute Chromium path); JS source
recovery via `recover_javascript_sources` additionally needs **`REA_WAKARU_COMMAND`**
(`src/server/createServer.ts`). CDP endpoints are loopback only (`http://127.0.0.1:9222`
in REA's examples).

## 1. Passive discovery

```
MCP:  list_browser_targets  { "cdp_endpoint": "http://127.0.0.1:9222" }
      # optional "allowed_origins": ["https://ib.example.co.za"]
      # URLs preserve query/fragment; only URL userinfo credentials are removed
MCP:  inspect_web_page      { "cdp_endpoint": "...", "target_id": "<from list>" }
CLI:  rea list-browser-targets --cdp-endpoint http://127.0.0.1:9222 --json
      rea inspect-web-page --cdp-endpoint ... --target-id <id> --json
```

`inspect_web_page` **never** evaluates JavaScript, navigates, clicks, closes or mutates the
page. It returns DOM structure, accessibility, scripts, resources, attach-window network
and console metadata, workers, and a redacted storage inventory. **Passive capture omits raw
headers, credential values, storage values and raw bodies** (`src/contracts/browserToolContracts.ts`).

The user performs the interaction; REA observes:

```
MCP:  observe_web_session   { "cdp_endpoint": "...", "target_id": "...",
                              "observation_ms": 10000 }
CLI:  rea observe-web-session ...
```

`observe_web_session` **never claims REA clicked or navigated** — it records navigation,
redirect, lifecycle and failure events during the window while the user operates the page.

## 2. Static bundle analysis (execution-free)

```
MCP:  analyze_web_bundle   { "cdp_endpoint": "...", "target_id": "...",
                             "observation_ms": 500,
                             "include_script_sources": true,
                             "fetch_source_maps": false }
CLI:  rea analyze-web-bundle --cdp-endpoint ... --target-id ... --json
```

Captures JS source from the selected page and statically derives: a **chunk graph**, **route
and endpoint candidates**, **vendor fingerprints**, page-declared **WebMCP** metadata, and
optionally fetches source maps from the selected/requested origins. **JavaScript is parsed
but never executed.** Set `fetch_source_maps: true` only against origins you are authorised
to fetch from.

Page-declared WebMCP inventory (untrusted, never invoked):

```
MCP:  discover_webmcp_tools  { "cdp_endpoint": "...", "target_id": "...", "observation_ms": 100 }
```

## 3. Export scripts and apply static JS workflows

To run the full JavaScript application workflow (graph, feature trace, version compare),
first export the retained script bytes to disk:

```
MCP:  export_web_scripts   { "capture_path": "/analysis/capture.json",
                              "output_directory": "/analysis/exported-scripts" }
CLI:  rea export-web-scripts --capture-path /analysis/capture.json \
                             --output-directory /analysis/exported-scripts --json
```

`export_web_scripts` reads bytes already retained in a local `inspect_web_page` or
`capture_browser_scenario` JSON capture (include script sources in `inspect_web_page`, or
select `capture.network.response_body` for scenarios), writes a digest-verified manifest,
and returns an **`analysis_input`** you can hand to `analyze_javascript_application`. It does
**no refetch and no execution**.

Then, engine-free:

```
MCP:  analyze_javascript_application  { ...analysis_input... }
CLI:  rea analyze-javascript-application /abs/exported-scripts --json
MCP:  trace_application_feature       { "application": {...}, "seed": { ... } }
CLI:  rea trace-application-feature ...
MCP:  trace_javascript_semantics      { "application": {...}, "query": {...} }
MCP:  recover_javascript_sources      { ... }        # needs REA_WAKARU_COMMAND
CLI:  rea recover-javascript-sources ...
```

Source-map handling — trace a generated position through a paired local source map:

```
MCP:  trace_web_source_location  { "manifest_path": "/analysis/scripts/manifest.json",
                                   "script_index": 0,
                                   "source_map": { "path": "/analysis/app.js.map",
                                                   "url": "https://example.test/app.js.map" },
                                   "generated_position": { "line": 1, "column": 25 } }
CLI:  rea trace-web-source-location ...
```

`trace_web_source_location` verifies manifest/script/map SHA-256 and returns every equal
mapping and embedded `sourcesContent`. **Caller-selected pairing does not establish
deployment authenticity or execution.** Only regular maps and inline indexed sections are
supported; external section URLs are unsupported.

Module import tracing (outgoing ES imports/re-exports) — needs `REA_BROWSER_EXECUTABLE` for
literal imports:

```
MCP:  trace_web_module_imports  { "manifest_path": "...", "script_index": 0,
                                   "import_map": { "path": "...", "base_url": "..." } }
CLI:  rea trace-web-module-imports ...
```

## 4. Declared actions (active lane)

Only when the authorisation covers active testing, run one scenario with declared actions:

```
MCP:  capture_browser_scenario  { "cdp_endpoint": "...", "target_id": "...",
                                  "start_url": "https://ib.example.co.za/",
                                  "actions": [ {"kind":"type","selector":"#id","text":"<test-user>"},
                                               {"kind":"click","selector":"#submit"} ],
                                  "capture": { "network": { "response_body": true } } }
CLI:  rea capture-browser-scenario --cdp-endpoint ... --target-id ... --json
```

`capture_browser_scenario` is the **only** browser tool that performs actions. Connect mode
navigates to `start_url` (which can clear form state). Report plainly that **REA performed
the declared actions**. Note: scenario network records have **no request-initiator stacks** —
use passive `inspect_web_page` for initiator attribution.

Non-action evidence capture:

```
MCP:  capture_web_screenshot   { "cdp_endpoint": "...", "target_id": "..." }
MCP:  compare_web_screenshots  { "before": {...}, "after": {...}, "channel_threshold": 0 }
CLI:  rea capture-web-screenshot ... ; rea compare-web-screenshots ...
```

Screenshots are self-verifying content-addressed PNGs; comparison is local pixel metrics
(no OCR, no network).

## 5. Mapping login / onboarding / transaction flows

A worked structure (fill with evidence, do not assume):

1. **Discover** entry points (`list_browser_targets`) and the flow's origins.
2. **Observe pass 1** with the user driving (`observe_web_session`) to learn navigation and
   redirect chains (e.g. `/login` → `/mfa` → `/dashboard`).
3. **Static pass** with `analyze_web_bundle` (+ `export_web_scripts` → `analyze_javascript_application`)
   to enumerate routes (`/api/v1/...`), auth header construction, and vendor SDKs.
4. **Trace** a seed (a route string, an API path, a login method name) with
   `trace_application_feature` / `trace_javascript_semantics` — bidirectional; do **not**
   treat every reached node as a participant.
5. **Active pass (if authorised)** with one `capture_browser_scenario` per flow step against
   a **test account**, capturing network metadata.
6. **Correlate**: `reconcile_javascript_runtime` only **after** both static and passive
   runtime evidence exist — a bundle observed at runtime does not prove every contained
   module executed.

Record for each flow: entry URL, auth mechanism observed, endpoints, request/response
schema candidates, and residual unknowns. Hand the endpoint list to
[`backend-and-api-reconstruction.md`](./backend-and-api-reconstruction.md).

## 6. Limitations

- Passive capture omits sensitive detail (headers, bodies, storage values) by design.
- Scenario captures lack request-initiator stacks; passive inspection lacks prior activity.
- Source-map tracing proves position mapping, not deployment authenticity.
- Computed imports / bundler IDs remain unknown in module tracing.
- Public marketing sites ≠ authenticated internet banking; don't conflate them.

---

**Related:** [`network-capture-analysis.md`](./network-capture-analysis.md) ·
[`backend-and-api-reconstruction.md`](./backend-and-api-reconstruction.md) ·
[`competitive-feature-teardown.md`](./competitive-feature-teardown.md) ·
[`../rea-analysis/tool-catalog.md`](../rea-analysis/tool-catalog.md)
