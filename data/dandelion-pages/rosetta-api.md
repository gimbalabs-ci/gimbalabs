---
title: 'rosetta-api'
date: '05-02-2021'
version: 1
---        


# rosetta-api
## rosetta-api

Rosetta is an open-source specification and set of tools that makes integrating with blockchains simpler, faster, and more reliable.

![](/showcase-rosetta-api.png)


## Links
- [View on IOHK GitHub](https://github.com/input-output-hk/cardano-rosetta)
- [Official Documentation from IOHK](https://github.com/input-output-hk/cardano-rosetta#documentation)


## Usage
- [testnet: https://rosetta-api.testnet.dandelion.link](https://rosetta-api.testnet.dandelion.link)
- [mainnet: https://rosetta-api.mainnet.dandelion.link](https://rosetta-api.mainnet.dandelion.link)

### bash:
```bash
    curl -X POST -H 'Content-Type: application/json' --data '{"network_identifier":{"blockchain":"cardano","network":"testnet"},"block_identifier":{"index":100}}' https://rosetta-api.testnet.dandelion.link/block
```

### Version
- "mainnet": { "version": "1.1.0" },
- "testnet": { "version": "1.1.0-testnet" },