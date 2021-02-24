---
title: 'submit-api'
date: '05-02-2021'
version: 1 
---    

# submit-api
## cardano-rest/submit-api

You can use this REST API to send signed-transactions to the blockchain

This is the currently officially supported API to submit signed Cardano transactions to the blockchain.

![](showcase-submit-api.png)
- [View on IOHK GitHub](https://github.com/input-output-hk/cardano-rest#overview)
- [Official Documentation](https://input-output-hk.github.io/cardano-rest/submit-api/)

- "mainnet": { "version": "3.1.1" },
- "testnet": { "version": "3.1.1" },

- [testnet](https://submit-api.testnet.`+process.env.REACT_APP_API_DOMAIN+`)
- [mainnet](https://submit-api.mainnet.`+process.env.REACT_APP_API_DOMAIN+`)
  
```
    - bash:
    ~~~bash
    # '/tmp/cbor-tx' should be a file containing 
    # a valid 'application/cbor' signed transaction (in e.g., from cardano-cli)
    curl -X POST \\
        --header "Content-Type: application/cbor" \\
        --data-binary @/tmp/cbor-tx \\
        https://submit-api.testnet.`+process.env.REACT_APP_API_DOMAIN+`/api/submit/tx
    ~~~
```