---
title: 'postgrest-api'
date: '05-02-2021'
version: 1
---    

# postgrest-api
## cardano-db-sync/postgrest-api

You can use this REST API to perform SQL queries to gather info from the blockchain.

Cardano DB Sync is to follow the Cardano chain and take information from the chain and an internally maintained copy of ledger state. Data is then extracted from the chain and inserted into a PostgreSQL database that can be accessed through a read-only REST API exposed by an instance of the postgREST project.

![](/showcase-postgrest-api.png)

- [View on IOHK GitHub](https://github.com/input-output-hk/cardano-db-sync)
- [Official Documentation](https://github.com/input-output-hk/cardano-db-sync/blob/master/doc/interesting-queries.md)


- "mainnet": { "version": "cardano-db-sync-8.0.0" }
- "testnet": { "version": "cardano-db-sync-8.0.0" }


- [testnet](https://postgrest-api.testnet.`+process.env.REACT_APP_API_DOMAIN+`)
- [mainnet](https://postgrest-api.mainnet.`+process.env.REACT_APP_API_DOMAIN+`)

```
- bash:    
~~~bash
# query available metadatums
curl -s "https://postgrest-api.mainnet.dandelion.link/rpc/get_metadatum"
# query metadatum 20201210
curl -d metadatum=20201210 -s "https://postgrest-api.mainnet.dandelion.link/rpc/get_metadata" | jq .
# query metadatum 42 for epoch 234-235 and limit results to 1
curl -s -d metadatum=42 -d epochs={234,235} "https://postgrest-api.mainnet.dandelion.link/rpc/get_metadata?limit=1"
# query metadata entry number 15
curl -s "https://postgrest-api.mainnet.dandelion.link/tx_metadata?id=eq.15"
# query pool metadata whose URL contains "repsistance" 
curl -s "https://postgrest-api.mainnet.dandelion.link/pool_meta_data?url=like.*repsistance*"
# query metadata entries for SPOCRA proposalId "80064c28-1b03-4f1c-abf0-ca8c5a98d5b9"
curl -s "https://postgrest-api.mainnet.dandelion.link/tx_metadata?json->>ProposalId=eq.80064c28-1b03-4f1c-abf0-ca8c5a98d5b9"
# query metadata entries for the whole SPOCRA network
curl -s "https://postgrest-api.mainnet.dandelion.link/tx_metadata?json->>NetworkId=eq.SPOCRA"
# query transactions history for addresses array
curl -X POST -H "Content-Type: application/json" -d '{ "data": { "addresses" : ["addr_test1vzep2se0nr849acwfnlpm2sa3sz726g6v78ej4sy9ewjprqmcl720","addr_test1qptw3z77j2vjhd45vdqhct46uvwucese43twz9afv0lt9h83lgv8qkdvg9akyn2yyrtp75sd6ejwl3m0f4qtve43ydnsckuvc4"] } }' -s "https://postgrest-api.testnet.dandelion.link/rpc/get_tx_history_for_addresses" | jq .
# query delegation history for stake addresses array
curl -X POST -H "Content-Type: application/json" -d '{ "data": { "addresses" : ["stake_test1uz605p766mvsyrufagjw5fepqfp8x9ff2ty2hzdrjuvuj8g5efx4w","stake_test1uq3zf47elmdxp92wgmcx4lrkjrlts5fffs36c7dz02d7faqye6l9j"] } }' -s "https://postgrest-api.testnet.dandelion.link/rpc/get_delegation_history_for_stake_address" | jq .
# query addresses balance at the end of a given epoch
curl -X POST -H "Content-Type: application/json" -d '{ "data": { "epoch": "105", "addresses" : ["addr_test1vzep2se0nr849acwfnlpm2sa3sz726g6v78ej4sy9ewjprqmcl720","addr_test1qptw3z77j2vjhd45vdqhct46uvwucese43twz9afv0lt9h83lgv8qkdvg9akyn2yyrtp75sd6ejwl3m0f4qtve43ydnsckuvc4"] } }' -s "https://postgrest-api.testnet.dandelion.link/rpc/get_eoe_balance_for_addresses" | jq .
~~~

[Postgrest documentation](http://postgrest.org/en/latest/api.html) will be handy to explore the whole Cardano network throuh this API.

```
