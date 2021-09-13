---
title: 'explorer-api'
date: '12-09-2021'
version: 1
---

# cardano-rest/explorer-api
## You can use this REST API to gather basic info from the blockchain

This is the currently officially supported API to explore Cardano transactions. In future it may be augmented or replaced by cardano-graphql, but cardano-explorer-api will be supported for some time, even once alternatives become available.

![](/showcase-explorer-api.png)

## Links
- [View on IOHK GitHub](https://github.com/input-output-hk/cardano-rest#overview)
- [Official Documentation from IOHK](https://input-output-hk.github.io/cardano-rest/explorer-api)

- [Exampl graphql queries](https://github.com/input-output-hk/cardano-graphql/tree/master/packages/api-cardano-db-hasura/src/example_queries)

## Usage

- [testnet: https://explorer-api.testnet.dandelion.link](https://explorer-api.testnet.dandelion.link)
- [mainnet: https://explorer-api.mainnet.dandelion.link](https://explorer-api.mainnet.dandelion.link)

### bash:

```bash
curl -s \\
https://explorer-api.testnet.dandelion.link/api/txs/last
```

### Version
- mainnet: `"version": "3.1.1"`
- testnet: `"version": "3.1.1"`