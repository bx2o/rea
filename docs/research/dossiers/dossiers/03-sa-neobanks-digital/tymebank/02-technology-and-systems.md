# 02 — Technology & Systems · TymeBank / GoTymeBank

## Core banking signature

| Layer | Finding | Class | Source / basis |
|---|---|---|---|
| Core banking system | **Mambu** — cloud-native SaaS core banking | [SEEN] | Mambu customer case study |
| Cloud | **AWS** — approx. **85% of systems** run on AWS | [SEEN] | Public reporting / case material |
| Containerisation | **Docker** | [SEEN] | Open-banking profile (TymeBank stack) |
| Primary language | **Java** | [SEEN] | Open-banking profile |
| API management | **WSO2** API manager | [SEEN] | Open-banking profile |
| Card issuance | **IDEMIA** biometric kiosks (partnership from **December 2020**); facial recognition + ID proofing | [SEEN] | IDEMIA press; reporting |
| Kiosk network | Self-service kiosks in **Pick n Pay, Boxer (~800 stores), TFG** | [SEEN] | Mambu case study; IDEMIA |
| Time-to-card | Account + activated Visa debit card issued in **~5 minutes** with only an SA ID number | [SEEN] | Mambu/IDEMIA |
| Mobile app framework | Not public | [UNKNOWN] | REA extraction (see §07) |
| Authentication primitives | Not public | [UNKNOWN] | REA extraction |

## Recovered architecture (synthesised view)

```
  [Retail kiosk (IDEMIA biometric, Pick n Pay/Boxer/TFG)]     [Mobile app (framework UNKNOWN)]
        |  ID + biometric verification + instant card print         |  auth UNKNOWN
        +----------------------------+-------------------------------+
                                     v
                     [WSO2 API management layer  (SEEN)]
                                     |
                     [Microservices on AWS + Docker + Java (SEEN)]
                                     |
                     [Mambu SaaS core banking  (SEEN)]
                     deposits · savings · lending · salary advance
                                     |
        +----------------------------+-------------------------------+
        v                            v                               v
  [BankservAfrica rails      [Visa card scheme          [VAS engine: airtime,
   EFT/RTC/PayShap] (INF)]    (INF)]                     electricity (INF)]
```

## Distribution model (the real innovation)

| Element | Detail | Class |
|---|---|---|
| Channel 1 | Retail-partner **kiosks** (Pick n Pay, Boxer, TFG) | [SEEN] |
| Channel 2 | Mobile app + online banking (self-service) | [SEEN] |
| Channel 3 | Agent network (expanded footprint) | [SEEN] |
| Onboarding | ID number + biometric verification; no paperwork | [SEEN] |
| Cost effect | Near-zero acquisition cost per client (no branches, partner footfall) | [INFERRED] |

## Integrations

| Rail/partner | Position | Class |
|---|---|---|
| BankservAfrica (EFT/RTC/PayShap) | ZAR clearing | [INFERRED] |
| Visa | Debit card scheme (card issued at kiosk) | [SEEN] |
| Visa (group) | Multi-year, multi-market group deal (with GoTyme, incl. future SE-Asia markets) | [SEEN] |
| Mambu | Core banking SaaS | [SEEN] |
| AWS | Primary cloud | [SEEN] |
| IDEMIA | Biometric identity + card personalisation | [SEEN] |

## Thin-data caveats

* The **app framework and auth design are unknown** because no binary was supplied; the open-banking-profile frontend options (Flutter/React Native) are unconfirmed.
* **Mambu scope** is described at a high level only; which Mambu modules are live (deposits vs lending) is not fully public. [UNKNOWN]
