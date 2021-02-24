---
title: 'explorer-api'
date: '05-02-2021'
version: 1
---

# cardano-rest/explorer-api
## You can use this REST API to gather basic info from the blockchain

This is the currently officially supported API to explore Cardano transactions. In future it may be augmented or replaced by cardano-graphql, but cardano-explorer-api will be supported for some time, even once alternatives become available.

![](/showcase-explorer-api.png)

- [View on IOHK GitHub](https://github.com/input-output-hk/cardano-rest#overview)
- [Official Documentation](https://input-output-hk.github.io/cardano-rest/explorer-api)
- mainnet: `"version": "3.1.1"`
- testnet: `"version": "3.1.1"`
- [testnet](https://explorer-api.testnet.`+process.env.REACT_APP_API_DOMAIN+`)
- [mainnet](https://explorer-api.mainnet.`+process.env.REACT_APP_API_DOMAIN+`)

```
    - [graphql](https://github.com/input-output-hk/cardano-graphql/tree/master/packages/api-cardano-db-hasura/src/example_queries)
    - bash:
    ~~~bash
    curl -s \\
    https://explorer-api.testnet.`+process.env.REACT_APP_API_DOMAIN+`/api/txs/last
    ~~~
```
