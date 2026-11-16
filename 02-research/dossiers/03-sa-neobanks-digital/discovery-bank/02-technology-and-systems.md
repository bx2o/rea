# 02 — Technology & Systems · Discovery Bank

## Core banking signature

| Layer | Finding | Class | Source / basis |
|---|---|---|---|
| Core banking system (CBS) | **SAP banking platform** running on a **high-availability cloud** | [SEEN, medium] | Entity anchor + public/vendor reporting that Discovery Bank built on SAP; exact module set not public |
| CBS deployment model | Cloud-hosted, HA/DR configuration | [INFERRED] | "high-availability cloud" descriptor |
| Data & AI platform | **Microsoft Azure OpenAI (Foundry Models) + Azure Databricks** power **"Discovery AI"** | [SEEN] | Microsoft customer story (2024/25) |
| AI function | Hyper-personalised next-best-action; agent-assist for service agents | [SEEN] | Microsoft customer story |
| Real-time pricing | Dynamic Interest Rate engine driven by Vitality Money status | [SEEN] | Discovery Bank product pages |
| Event/decisioning | Real-time behavioural decisioning at scale | [SEEN] | Databricks blog on Discovery Bank behavioural AI |
| Cloud region | Not publicly specified (Azure + SAP hosting) | [UNKNOWN] | Resolve via Pillar III/vendor docs; likely multi-region |
| Mobile app delivery | Exact framework not public | [UNKNOWN] | REA extraction required (see §07) |
| Authentication primitives | App login / biometric / device-binding not public | [UNKNOWN] | REA extraction required |

## Recovered architecture (synthesised view)

```
   +---------------------------- Discovery Bank client apps ----------------------------+
   |  Mobile app (framework UNKNOWN)  |  Web banking  |  "Discovery AI" chat surface    |
   +---------------------------------------+--------------------------------------------+
                                            |  HTTPS / (auth primitives UNKNOWN)
   +----------------------------------------v--------------------------------------------+
   |  Integration / API layer  (technology UNKNOWN; BankservAfrica & PayShap INFERRED)    |
   +--------------+-------------------------------------+------------------------------+
                  |                                     |
   +--------------v---------------+          +----------v----------------------+
   | SAP banking engine (CBS)     |          | Behavioural / Vitality engine   |
   | on HA cloud  [SEEN, medium]  |<-------->| (Vitality Money scoring +       |
   | deposits, credit, products   |          |  Dynamic Interest Rate engine)  |
   +--------------+---------------+          +----------+----------------------+
                  |                                     |
   +--------------v-------------------------------------v----------------------+
   | Discovery AI layer: Azure OpenAI (Foundry) + Azure Databricks  [SEEN]       |
   +------------------------------------------------------------------------------+
                  |
   +--------------v--------------------------------------------------------------+
   | Shared-value data: Discovery Health / Life / Insure / Vitality signals [SEEN]|
   +------------------------------------------------------------------------------+
```

## Integration switches (SA banking standard)

| Rail | Position | Class |
|---|---|---|
| BankservAfrica (EFT/RTC/PayShap) | Almost certainly used for ZAR clearing; not separately confirmed in a public bank statement | [INFERRED] |
| PayShap (rapid payments) | Offered via the standard SA rail set | [INFERRED] |
| Card scheme | Visa/Mastercard — scheme not confirmed for Discovery specifically | [UNKNOWN] |
| SWIFT / cross-border | Correspondent banking for forex; specific partner not public | [UNKNOWN] |
| Real-Time Forex | In-app FX account opening, instant ZAR↔GBP/EUR/USD conversion | [SEEN] |

## Third parties (publicly documented)

| Party | Role | Class |
|---|---|---|
| SAP | Core banking platform | [SEEN, medium] |
| Microsoft (Azure OpenAI, Azure Databricks) | GenAI + analytics platform | [SEEN] |
| Databricks | Lakehouse / behavioural analytics | [SEEN] |
| Apple / Fitbit / Garmin | Wearable payment & activity integration (Vitality) | [SEEN] |

## Thin-data caveats

* The **SAP core** claim rests on public reporting and the program entity anchor; the precise SAP product (e.g. specific Banking Services version) is not confirmed. Treat as `medium` confidence and re-verify against a vendor case study.
* No API documentation, mobile SDK, or app binary was available; all client-side and auth conclusions are `[UNKNOWN]`.
