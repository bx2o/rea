# 02 — Technology & Systems · African Bank

## Core banking & platform signature

| Layer | Finding | Class | Basis |
|---|---|---|---|
| Core banking system (CBS) | Not publicly confirmed; likely **legacy + acquired systems** (Ubank/Grindrod) plus modernisation | [UNKNOWN] | No public vendor confirmation found; must not be guessed |
| Digital channel | African Bank mobile app + online banking | [SEEN] | Product pages |
| Merchant acquiring | **Tap2Glass** — Android **softPOS** app enabling card acceptance on an NFC phone (no terminal) | [SEEN, medium] | Program entity anchor + softPOS market context; limited primary sourcing |
| Digital wallets supported | **Samsung Wallet, Garmin Pay, SwatchPay** for tap-to-pay with AB debit/credit cards | [SEEN] | `africanbank.co.za/en/home/digital-wallets/` |
| Cloud posture | Not publicly specified | [UNKNOWN] | REA/vendor docs required |
| App framework | Not public | [UNKNOWN] | REA extraction (see §07) |
| Authentication primitives | Not public | [UNKNOWN] | REA extraction |

> **Deliberate non-guess:** unlike Discovery (SAP) and TymeBank (Mambu), African Bank has **no confirmed public core-banking vendor**. Stremiium must not label it Finacle/Temenos/etc. without evidence.

## Recovered architecture (synthesised — low confidence)

```
[Mobile app (framework UNKNOWN)]        [Tap2Glass softPOS Android app (SEEN, medium)]
        |  auth UNKNOWN                          |  NFC acceptance, card scheme rail
        +------------------+---------------------+
                           v
             [API / integration layer  (UNKNOWN)]
                           |
             [CBS: legacy + Ubank/Grindrod systems, modernising  (UNKNOWN)]
             deposits · unsecured lending · cards · insurance (AIG)
                           |
   +-----------------------+---------------------------------+
   v                       v                                 v
[BankservAfrica rails]  [Card scheme Visa/Mastercard]   [Digital wallets:
   (INFERRED)              (INFERRED)                     Samsung/Garmin/Swatch (SEEN)]
```

## Merchant acquiring: Tap2Glass (softPOS)

| Element | Detail | Class |
|---|---|---|
| Form factor | Android NFC phone = payment terminal (softPOS) | [SEEN, medium] |
| Hardware | None required | [SEEN, medium] |
| Target | Micro/SME merchants (incl. informal) | [INFERRED] |
| Regulation | SoftPOS acceptance is governed by PCI MPoC / scheme Tap-to-Phone rules | [INFERRED] |
| Scheme partner | Not confirmed (Visa Tap-to-Phone vs Mastercard Tap-on-Phone) | [UNKNOWN] |

## Integration switches

| Rail | Position | Class |
|---|---|---|
| BankservAfrica (EFT/RTC/PayShap) | ZAR clearing | [INFERRED] |
| Card scheme | Debit/credit issuance + acquiring | [INFERRED] |
| SWIFT | Not public | [UNKNOWN] |
| Digital wallets | Samsung Wallet, Garmin Pay, SwatchPay | [SEEN] |

## Thin-data caveats

* **Technology is the weakest-evidenced section** for this entity: no CBS vendor, cloud, app framework or API documentation is public. All such items are `[UNKNOWN]` with REA steps named in §07.
* The **Tap2Glass** claim rests on the program entity anchor and general softPOS context; a primary African Bank press release/spec was not located — treat as `medium` confidence.
