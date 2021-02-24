---
title: 'cardano-node-socket'
date: '05-02-2021'
version: 1
---      

# cardano-node-socket
## [coming-soon] cardano-node-socket-over-https

You can use this REST API to setup a local socket file and use cardano-cli against it

cardano-cli is the first class citizen supporting every new blockchain feature, and this endpoint helps to transport a cardano-node's socket to you using a secure HTTPS tunnel.\n Currently access to this API is enabled on demand. Authorization and secure channel is setup with https://github.com/jpillora/chisel and TCP-to-socket termination can be done by using `socat`

![](/showcase-comingsoon.jpg)

- [View on IOHK GitHub](https://github.com/input-output-hk/cardano-node#cardano-cli)
- [Official Documentation](https://github.com/input-output-hk/cardano-node/blob/master/cardano-cli/README.md)


- "mainnet": { "version": "1.25.1" }
- "testnet": { "version": "1.25.1" }

- [testnet](https://cardano-node-socket.testnet.`+process.env.REACT_APP_API_DOMAIN+`)
- [mainnet](https://cardano-node-socket.mainnet.`+process.env.REACT_APP_API_DOMAIN+`)


```
~~~bash
# TODO
~~~
```
