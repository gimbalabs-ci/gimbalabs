---
title: 'graphql-api'
date: '05-02-2021'
version: 1
---    

# graphql-api
## hasura/graphql-api

You can use this GraphQL API to gather composed info from the blockchain

GraphQL is a query language and execution environment with server and client implementations across many programming languages. The language can be serialized for network transmission, schema implementations hashed for assurance, and is suited for describing most domains.\nCardano project is implementing a GraphQL API, to make exploring blockchain data a breeze.

![](showcase-graphql-api.png)

- [View on IOHK GitHub](https://github.com/input-output-hk/cardano-graphql#overview)
- [Official Documentation](https://input-output-hk.github.io/cardano-graphql/)

- "mainnet": { "version": "3.2.0" }
- "testnet": { "version": "3.2.0" }

- [testnet](https://graphql-api.testnet.`+process.env.REACT_APP_API_DOMAIN+`)
- [mainnet](https://graphql-api.mainnet.`+process.env.REACT_APP_API_DOMAIN+`)


```
    - bash:    
    ~~~bash
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
        https://graphql-api.testnet.`+process.env.REACT_APP_API_DOMAIN+`
    ~~~
```