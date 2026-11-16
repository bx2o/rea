# Playbook — Network Capture Analysis (HAR / SAZ / mitmproxy / PCAP)

**Target type:** recorded API traffic for a bank app or web app **you are authorised to
test**. **Mode:** offline inspection of recordings — REA reads captures and **does not
acquire live traffic** (`SKILL.md`, "Route the target first"). **Methodology only.**

> **Authorisation & interception law.** Intercepting network traffic you do not own can
> breach the Cybercrimes Act 19 of 2020 and POPIA. Only capture traffic on devices,
> accounts and networks you own or are authorised in writing to test. Do **not** circumvent
> certificate pinning to capture another party's traffic, and never capture or retain
> credentials. See [`README.md`](./README.md).

---

## 0. Routing by capture format

| Capture | First tool | Notes |
| --- | --- | --- |
| **HAR 1.2** | `inspect_web_network_capture` | `format: "har"` |
| **Fiddler SAZ** | `inspect_web_network_capture` | preserves HTTP fields, XML metadata, encoded body/message bytes; **no replay, no HAR conversion**; encrypted archives unsupported |
| **native mitmproxy** | `inspect_web_network_capture` | requires caller-supplied **mitmdump 12.2.3** on Linux |
| **aioquic qlog 0.3** | `inspect_web_network_capture` | `format: "qlog"`; trace-scoped STREAM interval unions; does not recover bodies |
| **PCAP / PCAPNG** | `inspect_pcap_capture` | needs `REA_TSHARK_COMMAND` + `REA_CAPINFOS_COMMAND` |
| **field-level TShark extraction** | `inspect_packet_fields` → `inspect_packet_capture` | needs `REA_TSHARK_COMMAND` (+ Linux `prlimit`) |

The web-capture family is a **browser-provider** lane; the packet family needs the Wireshark
suite supplied by you (`REA_TSHARK_COMMAND`, `REA_CAPINFOS_COMMAND`). REA never installs
Wireshark and never captures traffic.

## 1. Web / HTTP captures (HAR, SAZ, mitmproxy, qlog)

```
MCP:  inspect_web_network_capture  { "capture_path": "/captures/session.har",
                                     "format": "har", "record_ordinals": [0, 2] }
MCP:  inspect_web_network_capture  { "capture_path": "/captures/session.har",
                                     "format": "har", "detail": "summary" }
CLI:  rea inspect-web-network-capture --capture-path /captures/session.har --format har --json
```

Semantics (`src/contracts/webNetworkCaptureToolContracts.ts`):

- Request `detail: "summary"` for capture identity + counts, then **page retained records**
  with `inspect_analysis_view` `kind: "capture"` using `normalized_result.parent_evidence_id`
  instead of re-decoding.
- Returns original ordinals, pointers/byte ranges/archive member names, preserved producer
  fields, precise numeric representations, and exact exposed binary bytes inline.
- **Excludes known transport credentials and explicitly marked values.**
- Decodes **every** record before optional ordinal selection; **malformed or oversized
  captures return no partial success** (fail-closed, not partial).
- Contacts **no** recorded URLs.
- Limitation: browser transaction IDs, runtime attribution, and the original bytes of HAR
  Unicode text remain **unknown**.

**Try it statically first** — a HAR from your own test run is often the fastest way to map
endpoints without touching the live app.

## 2. PCAP / PCAPNG

```
MCP:  inspect_pcap_client  { }                     # verifies tshark + capinfos usable
MCP:  inspect_pcap_capture { "path": "/captures/session.pcap" }
MCP:  inspect_pcap_capture { "path": "...", "detail": "summary" }
CLI:  rea inspect-pcap-client --json
      rea inspect-pcap-capture --path /captures/session.pcap --json
```

Returns (through an owned snapshot): metadata, exact packet count, SHA-256, IPv4/IPv6
address counts, DNS questions and address values from the same single-question response,
**TLS SNI**, protocol distribution, and HTTP URIs. Derived inventories are retained within
declared resource budgets. **Unknown DNS attribution and excluded credentials stay
explicit.** Page facts with `inspect_analysis_view` `kind: "pcap"`. Linux needs util-linux
`prlimit`.

## 3. Field-level TShark extraction

Discover installed protocols/fields, then extract specific fields from a recording:

```
MCP:  inspect_packet_fields   { "query": "tls.handshake.extensions_server_name" }
MCP:  inspect_packet_fields   { "kind": "fields", "protocol": "tls",
                                "query": "server_name" }
CLI:  rea inspect-packet-fields --query tls.handshake.extensions_server_name --json

MCP:  inspect_packet_capture  { "path": "/artifacts/session.pcapng",
                                "fields": ["tls.handshake.extensions_server_name",
                                           "http.host", "http.request.uri", "ip.addr"],
                                "display_filter": "tls or http",
                                "decode_as": [], "packet_limit": null,
                                "two_pass": true }
CLI:  rea inspect-packet-capture --path /artifacts/session.pcapng \
                                  --fields tls.handshake.extensions_server_name,http.host --json
```

Notes: 50 matching frames by default, with `match_offset`/`match_limit` paging
(`match_limit: null` requests all remaining). `packet_limit` counts input packets **before**
filtering. **File-only: no live capture or device communication.** Missing fields or no
matches **do not establish absence** of device traffic.

## 4. Compare captures

```
MCP:  compare_web_captures  { "before": {...}, "after": {...} }
      # or  { "before_scenario": {...}, "after_scenario": {...}, "normalization": {...} }
CLI:  rea compare-web-captures ...
```

Network comparison includes observed HTTP requests and WebSocket frame streams; **same-URL
connections are compared as an unordered collection of ordered streams** — connection counts
are retained but individual connections are not claimed to have stable identity. Scenario
comparison aligns exact step IDs and records deterministic literal normalization (e.g. strip
a volatile build ID). **Missing or truncated evidence never proves equality.**

## 5. What to extract — banking API observations

For every relevant transaction, capture: method, scheme+host+path (normalise IDs), request
headers of interest (auth scheme, content-type, custom fraud headers, device fingerprint
headers), query params, request/response **schema candidates**, status codes, redirects,
and TLS properties (SNI, ALPN, HTTP version). **Record, do not retain, credentials.**

**Auth observations to note (not to exploit):** bearer vs cookie vs mTLS vs OAuth;
`Authorization` scheme; token lifetime hints from `Cache-Control`/`exp`; presence of
device-binding headers; **mTLS** (client cert requested in the handshake — visible as a TLS
`CertificateRequest`, often paired with app-level pinning); and idempotency keys on
transfer endpoints.

**Certificate pinning observations:** a successful capture through your own proxy on your
own test build is itself evidence about pinning posture; where the app refuses your proxy,
record *"pinning likely enforced / capture blocked"* as an **observation**, not a bypass
goal. Do not publish pinning-bypass steps.

## 6. Building the reconstruction

Feed endpoint/header/schema observations into
[`backend-and-api-reconstruction.md`](./backend-and-api-reconstruction.md), which turns them
into a domain model and a reconstruction ledger. Use the ledger from
[`evidence-ledger-template.md`](./evidence-ledger-template.md) throughout.

## 7. Limitations (state these)

- REA reads recordings; it does not acquire live traffic.
- HAR Unicode original bytes and browser transaction IDs are unknown; scenario captures lack
  initiator stacks.
- qlog covers STREAM interval unions and loss declarations only — **does not recover bodies,
  prove network loss, or correlate PCAP**.
- SAZ does not replay or convert to HAR; encrypted archives are unsupported.
- PCAP DNS attribution can be unknown; excluded credentials remain explicit.
- A capture is a point-in-time recording; behaviour may differ across builds/regions.

---

**Related:** [`web-banking-analysis.md`](./web-banking-analysis.md) ·
[`android-banking-app-analysis.md`](./android-banking-app-analysis.md) ·
[`backend-and-api-reconstruction.md`](./backend-and-api-reconstruction.md) ·
[`../rea-analysis/tool-catalog.md`](../rea-analysis/tool-catalog.md)
