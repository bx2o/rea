---
description: 'Wallet creation + common commands (templates) - Skill reference documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Wallet creation + common commands (templates)

## Network flags

- Mainnet: `--mainnet`
- Testnet: `--testnet-magic <MAGIC>`

## Key generation (examples)

```bash
mkdir -p wallets/alice && cd wallets/alice

# Payment keys
cardano-cli address key-gen       --verification-key-file payment.vkey       --signing-key-file payment.skey

# Stake keys
cardano-cli stake-address key-gen       --verification-key-file stake.vkey       --signing-key-file stake.skey

# Base address (payment + stake)
cardano-cli address build       --payment-verification-key-file payment.vkey       --stake-verification-key-file stake.vkey       --out-file base.addr       --testnet-magic <MAGIC>

# Enterprise address (payment only)
cardano-cli address build       --payment-verification-key-file payment.vkey       --out-file enterprise.addr       --testnet-magic <MAGIC>
```

## Query UTxOs

```bash
cardano-cli query utxo       --address $(cat base.addr)       --testnet-magic <MAGIC>
```
