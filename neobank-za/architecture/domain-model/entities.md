# Core Entities

**Parent:** [domain-model/README.md](./README.md) · **Status:** Proposed (v0.1).

The core business objects of Umoya, with their key attributes, responsibilities, lifecycle, and the context that owns them. Each entity name is the **ubiquitous-language name** used in code, APIs and events.

> **All models are DESIGN CHOICE.** `«PII»` marks personal information (see [data-model](../data/data-model.md) for tagging rules and [data-governance](../data/data-governance.md) for lawful basis). Money fields are always `Money(minorUnits, currency)` ([money-and-currency](./money-and-currency.md)).

Careful distinctions applied throughout:
- **Party** (any actor) ≠ **Customer** (a party with a banking relationship) ≠ **User** (an authenticated principal, owned by Identity).
- **Account** (customer-facing sub-ledger container) ≠ **LedgerAccount** (chart-of-accounts node) — see [ledger-model](./ledger-model.md).

---

## 1. Customer

**«aggregate root» · owner: BC2 Customer & Party**

A natural or legal person with a banking relationship.

| Attribute | Type | Notes |
|---|---|---|
| `customerId` | Id | Opaque, immutable. |
| `partyId` | Id | Link to the underlying Party. |
| `customerType` | enum `PERSONAL` \| `SME` \| `CORPORATE` | *(DESIGN CHOICE)* |
| `status` | enum `PROSPECT` \| `ONBOARDING` \| `ACTIVE` \| `DORMANT` \| `SUSPENDED` \| `CLOSED` | Lifecycle. |
| `segment` | enum | e.g. mass-market/affluent/SME. |
| `primaryContact` | ContactPoint «PII» | Phone/email preference. |
| `riskProfileId` | Id | → RiskProfile. |
| `kycProfileId` | Id | → KYCProfile. |
| `createdAt`, `updatedAt` | instant | UTC. |

- **Responsibilities:** own the relationship, its lifecycle, and the set of Accounts/Agreements/Beneficiaries.
- **Lifecycle:** created at onboarding; becomes `ACTIVE` after KYC; may be `SUSPENDED` (fraud/AML); `CLOSED` on exit (records retained per FICA/POPIA).
- **Events:** `CustomerOnboarded`, `CustomerSuspended`, `CustomerClosed`.

---

## 2. Party

**«entity» · owner: BC2**

Any legal or natural person the platform must represent, independent of whether they are a customer.

| Attribute | Type | Notes |
|---|---|---|
| `partyId` | Id | |
| `partyType` | enum `PERSON` \| `ORGANISATION` | |
| `legalName` | string «PII» | |
| `identifiers` | list | e.g. SA ID/passport, registration number. |
| `addresses` | list of Address «PII» | |
| `roles` | list | customer, beneficialOwner, director, signatory, operator, agent. |
| `sanctionsStatus` | enum `CLEAR` \| `POTENTIAL_MATCH` \| `CONFIRMED_MATCH` | Driven by screening. |

- **Why separate from Customer:** a director or beneficial owner is a Party but not necessarily a Customer; AML requires tracing to **natural persons** ([aml-fica](../../research/regulatory/aml-fica.md) §3.2).
- **Events:** `PartyLinked`, `PartyUpdated`, `PartySanctionsFlagged`.

---

## 3. Account

**«aggregate root» · owner: BC5 Ledger**

A product-specific container of value for a customer (current account, savings pocket, loan account, card account).

| Attribute | Type | Notes |
|---|---|---|
| `accountId` | Id | Also the ledger aggregate key. |
| `customerId` | Id | Owner. |
| `productId` / `productVersion` | Id | Which product rules apply. |
| `accountNumber` | string | Customer-facing; non-enumerable. |
| `type` | enum `CURRENT` \| `SAVINGS` \| `LOAN` \| `CARD` \| `POCKET` | |
| `currency` | enum `ZAR` (default) | See money-and-currency. |
| `status` | enum `PENDING` \| `OPEN` \| `FROZEN` \| `CLOSED` | |
| `balance` | Balance | Derived, not stored as truth. |
| `openedAt`, `closedAt` | instant | |

- **Responsibilities:** bind a product to a customer; be the unit of ledger posting aggregation.
- **Invariants:** an Account's balance is always the sum of its entries; frozen accounts reject most debits.
- **Events:** `AccountOpened`, `AccountFrozen`, `AccountClosed`.

---

## 4. Balance

**«value object» · owner: BC5**

A derived view of an Account's value at a point in time. Not persisted as the source of truth.

| Attribute | Type | Notes |
|---|---|---|
| `accountId` | Id | |
| `current` | Money | Sum of all postings. |
| `available` | Money | `current` minus holds/reservations minus uncleared. |
| `reserved` | Money | Pending payments/card holds. |
| `asOf` | instant | Point-in-time. |

- `available = current − reserved − uncleared` (definitional). *(DESIGN CHOICE)*
- Held in a projection for fast reads; recomputable from the ledger at any time.

---

## 5. LedgerEntry

**«entity» (immutable) · owner: BC5**

A single debit or credit line in exactly one currency against one LedgerAccount.

| Attribute | Type | Notes |
|---|---|---|
| `ledgerEntryId` | Id | Monotonic within the journal. |
| `journalId` / `transactionId` | Id | Groups balanced entries. |
| `ledgerAccountId` | Id | Chart-of-accounts node. |
| `side` | enum `DEBIT` \| `CREDIT` | |
| `amount` | Money | Always positive; side carries direction. |
| `valueDate`, `bookingDate` | date | |
| `narrative` | string | |
| `hashPrev` `hashSelf` | hash | Tamper-evidence chain. |

- **Immutable.** Corrections are new compensating entries.
- Detail and posting rules: [ledger-model](./ledger-model.md).

---

## 6. Transaction

**«aggregate root» · owner: BC5**

A business-level unit of work that produces one or more balanced LedgerEntries.

| Attribute | Type | Notes |
|---|---|---|
| `transactionId` | Id | |
| `type` | enum | e.g. `TRANSFER`, `PAYMENT`, `CARD_SETTLEMENT`, `FEE`, `INTEREST`, `LOAN_DISBURSEMENT`, `REVERSAL`. |
| `initiator` | enum + Id | customer/operator/system/rail. |
| `entries` | list of LedgerEntry | Must balance to zero per currency. |
| `status` | enum `PENDING` \| `POSTED` \| `REVERSED` | |
| `postedAt` | instant | |

- **Invariant:** Σ debits = Σ credits per currency. No posting without balance.
- **Events:** `TransactionPosted`, `TransactionReversed`.

---

## 7. Card

**«aggregate root» · owner: BC7 Cards**

| Attribute | Type | Notes |
|---|---|---|
| `cardId` | Id | |
| `accountId` | Id | Funding account. |
| `pan` | masked; tokenised | Full PAN never stored in our systems beyond tokenisation scope. |
| `scheme` | enum `VISA` \| `MASTERCARD` | |
| `type` | enum `DEBIT` \| `CREDIT` \| `PREPAID` | |
| `status` | enum `ORDERED` \| `ACTIVE` \| `FROZEN` \| `BLOCKED` \| `EXPIRED` \| `REPLACED` | |
| `limits` | value object | Per-txn/daily/monthly; channel. |
| `tokenisationStatus` | enum | Wallet provisioning. |
| `expiry`, `issuedAt` | date/instant | |

- **PCI scope minimisation:** PAN tokenised; card data handled per PCI-DSS (see [NFR §10](../system-design/non-functional-requirements.md)).
- **Events:** `CardIssued`, `CardBlocked`, `CardReplaced`, `CardSettled`.

---

## 8. Mandate

**«aggregate root» · owner: BC4 Product & Agreement**

Authority for a party to collect funds from a customer's account (e.g. DebiCheck-style authenticated mandate).

| Attribute | Type | Notes |
|---|---|---|
| `mandateId` | Id | |
| `debtorCustomerId` / `debtorAccountId` | Id | Who is debited. |
| `creditorPartyId` | Id | Who collects. |
| `type` | enum `DEBICHECK` \| `RECURRING` \| `ONE_OFF` | Authenticated collections per rail rules ([payments-rails](../integrations/payments-rails.md)). |
| `amount`, `frequency` | value objects | |
| `status` | enum `PENDING_AUTH` \| `ACTIVE` \| `SUSPENDED` \| `CANCELLED` | |
| `authenticatedAt` | instant | Evidence of debtor authentication. |

- **Events:** `MandateRegistered`, `MandateAuthenticated`, `MandateRevoked`.

---

## 9. Product

**«aggregate root» · owner: BC4 Product & Agreement**

A sellable banking product template with pricing and rules.

| Attribute | Type | Notes |
|---|---|---|
| `productId` / `version` | Id | Versioned; changes are new versions. |
| `family` | enum `TRANSACTIONAL` \| `SAVINGS` \| `LENDING` \| `CARD` | |
| `fees` | list of Fee | Fixed/percentage/tiered. *(Design choice: fee model supports mixed VAT treatment — see [tax-governance](../../research/regulatory/tax-governance.md) §2.)* |
| `interestRules` | value object | Credit/debit rates, tiers. |
| `eligibility` | rules | Segment/KYC constraints. |
| `status` | enum `DRAFT` \| `PUBLISHED` \| `WITHDRAWN` | |

- **Events:** `ProductPublished`, `ProductWithdrawn`.

---

## 10. Agreement

**«entity» · owner: BC4**

A record of a customer accepting a versioned set of terms (T&Cs, product terms, consents).

| Attribute | Type | Notes |
|---|---|---|
| `agreementId` | Id | |
| `customerId` | Id | |
| `documentType` / `version` | string | Versioned terms. |
| `acceptedAt` | instant | |
| `evidence` | value object | Channel, device, hash of terms. |

- **Why:** POPIA openness + FAIS/NCA conduct evidence; CPA T&C defensibility ([conduct-fais-nca](../../research/regulatory/conduct-fais-nca.md) §4).
- **Events:** `AgreementAccepted`.

---

## 11. Beneficiary

**«entity» · owner: BC6 Payments**

A payee a customer may pay (internal or external).

| Attribute | Type | Notes |
|---|---|---|
| `beneficiaryId` | Id | |
| `customerId` | Id | Owner of this beneficiary record. |
| `type` | enum `INTERNAL` \| `DOMESTIC_BANK` \| `SHAPID_ALIAS` \| `CARD` \| `CROSS_BORDER` | |
| `identifier` | value object | Account number, ShapID alias (mobile), etc. |
| `verified` | boolean | Bank account verification result. |
| `riskFlags` | list | e.g. new beneficiary cooling-off. |

- **Fraud-relevant:** new-beneficiary + high-value is a classic APP-fraud pattern → Fraud context consumes this.
- **Events:** `BeneficiaryAdded`, `BeneficiaryVerified`, `BeneficiaryRemoved`.

---

## 12. Payment

**«aggregate root» · owner: BC6 Payments**

A movement of value to/from an external rail, or an internal transfer.

| Attribute | Type | Notes |
|---|---|---|
| `paymentId` | Id | |
| `debtorAccountId` / `creditorAccountId` | Id | |
| `rail` | enum `PAYSHAP` \| `EFT` \| `RTC` \| `INTERNAL` \| `CARD` \| `CROSS_BORDER` | |
| `amount` | Money | |
| `beneficiaryId` | Id | Optional. |
| `mandateId` | Id | Optional (collections). |
| `status` | enum `INITIATED` \| `SCREENING` \| `RESERVED` \| `SENT` \| `SETTLED` \| `FAILED` \| `RETURNED` \| `RECALLED` | |
| `endToEndId` | string | ISO 20022 end-to-end reference. |
| `initiatedAt`, `settledAt` | instant | |

- **Events:** `PaymentInitiated`, `PaymentSettled`, `PaymentFailed`, `PaymentReturned`.

---

## 13. KYCProfile

**«entity» · owner: BC3 Onboarding & KYC**

The result of identity verification and screening. A profile, not a pile of raw documents.

| Attribute | Type | Notes |
|---|---|---|
| `kycProfileId` | Id | |
| `customerId` / `partyId` | Id | |
| `level` | enum `SIMPLIFIED` \| `STANDARD` \| `ENHANCED` | CDD tier. |
| `identityVerified` | boolean | DHA/ABIS + document + liveness. |
| `screeningResult` | value object | Sanctions/PEP outcome. |
| `riskRating` | enum `LOW` \| `MEDIUM` \| `HIGH` | Inputs the Customer RiskProfile. |
| `verifiedAt`, `expiresAt` | instant | Re-verification cadence. |
| `evidenceRefs` | list | Hashed artefacts, not raw biometrics in the domain. |

- **POPIA note:** biometrics are special personal information — explicit consent basis; artefacts stored under the security safeguards condition ([privacy-popia](../../research/regulatory/privacy-popia.md) §5).
- **Events:** `KYCProfileCreated`, `KYCProfileUpgraded`, `IdentityReVerificationDue`.

---

## 14. RiskProfile

**«entity» · owner: BC9 Fraud & Risk**

The current risk posture of a customer (or entity), consumed by fraud, AML and credit.

| Attribute | Type | Notes |
|---|---|---|
| `riskProfileId` | Id | |
| `customerId` | Id | |
| `amlRiskRating` | enum | Drives EDD. |
| `fraudScore` | number | Rolling, model-derived. |
| `creditBureauRef` | Id | Link to latest bureau pull (BC8). |
| `indicators` | list | PEP status, adverse media, device risk, velocity. |
| `lastAssessedAt` | instant | |

- **Events:** `RiskProfileUpdated`, `RiskRatingChanged`, `AmlAlertRaised` (see [domain-events](./domain-events.md)).

---

## 15. Entity ownership & sensitivity summary

| Entity | Context | Contains PII? | Regulated record? |
|---|---|---|---|
| Customer | BC2 | Yes | Yes |
| Party | BC2 | Yes | Yes (FICA) |
| Account | BC5 | (links to PII) | Yes |
| Balance | BC5 | No | Derived |
| LedgerEntry | BC5 | No | Yes (audit) |
| Transaction | BC5 | No | Yes |
| Card | BC7 | Masked/to | Yes (PCI) |
| Mandate | BC4 | Yes | Yes (rail rules) |
| Product | BC4 | No | — |
| Agreement | BC4 | Yes | Yes (conduct) |
| Beneficiary | BC6 | Yes | Yes |
| Payment | BC6 | (links) | Yes |
| KYCProfile | BC3 | Yes (special categories) | Yes (FICA) |
| RiskProfile | BC9 | (links) | Yes |

---

## 16. Related reading

- [aggregates.md](./aggregates.md) — how these entities cluster into consistency boundaries.
- [domain-events.md](./domain-events.md) — the events each entity raises.
- [ledger-model.md](./ledger-model.md) — the ledger entity detail.
- [data-model.md](../data/data-model.md) — persistence and PII tagging.
