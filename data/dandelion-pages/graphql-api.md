---
title: 'graphql-api'
date: '12-09-2021'
version: 1
---    

# graphql-api
## hasura/graphql-api

![](/showcase-graphql-api.png)

You can use this GraphQL API to gather composed info from the blockchain

GraphQL is a query language and execution environment with server and client implementations across many programming languages. The language can be serialized for network transmission, schema implementations hashed for assurance, and is suited for describing most domains.\nCardano project is implementing a GraphQL API, to make exploring blockchain data a breeze.


## Links
- [View on IOHK GitHub](https://github.com/input-output-hk/cardano-graphql#overview)
- [Official Documentation from IOHK](https://input-output-hk.github.io/cardano-graphql/)

## Usage

- [testnet: https://graphql-api.testnet.dandelion.link](https://graphql-api.testnet.dandelion.link)
- [mainnet: https://graphql-api.mainnet.dandelion.link](https://graphql-api.mainnet.dandelion.link)

### bash:
```bash
# query db sync status
curl -H 'Content-Type: application/json' \\
    -H 'Accept: application/json' \\
    --data-binary \\
'{"query": \
    "query cardanoDbSyncProgress {\\n\
    cardanoDbMeta {\\n\
        initialized\\n\
        syncPercentage\\n\
    }\\n\
}\\n\
"}' \\
    https://graphql-api.testnet.dandelion.link
```

### Version
- "mainnet": { "version": "3.2.0" }
- "testnet": { "version": "3.2.0" }