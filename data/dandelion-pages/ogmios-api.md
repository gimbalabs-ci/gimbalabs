---
title: 'ogmios-api'
date: '12-09-2021'
version: 1
---    

# ogmios-api
## headerTitle: "KtorZ's cardano-node ogmios-api

You can use this JSON-WSP (websocket) API to gather live blockchain info directly from a cardano-node instance

Ogmios is a translation service written in Haskell running on top of cardano-node. It offers a JSON-WSP interface through WebSockets and enables clients to speak Ouroboros' mini-protocols via remote procedure calls over JSON.

![](/showcase-ogmios-api.png)

## Links
- [View on IOHK GitHub](https://github.com/KtorZ/cardano-ogmios)
- [Official Documentation](https://ktorz.github.io/cardano-ogmios/)

## Usage
- [testnet (wss)](https://ogmios-api.testnet.dandelion.link)
- [mainnet (wss)](https://ogmios-api.mainnet.dandelion.link)

### bash (using [websocat](https://github.com/vi/websocat)):
```bash
echo '{ "type": "jsonwsp/request", "version": "1.0", "servicename": "ogmios", "methodname": "RequestNext", "args": {} }' \\
| websocat --text -1 - wss://ogmios-api.testnet.dandelion.link

echo '{ "type": "jsonwsp/request", "version": "1.0", "servicename": "ogmios", "methodname": "FindIntersect", "args": { "points": [ "origin" ] } }' \\
| websocat --text -1 - wss://ogmios-api.testnet.dandelion.link
```

### Version
- "mainnet": { "version": "2.0.0-beta" },
- "testnet": { "version": "2.0.0-beta" },
