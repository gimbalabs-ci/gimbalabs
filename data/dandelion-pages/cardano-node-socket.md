---
number: "Cardano Node Socket"
title: "cardano-node-socket"
date: "2021-04-07"
version: 1
videoId: ""
videoTitle: ""
path: "/dandelion/endpoints/cardano-node-socket"
videos:
  [
  ]
fullWidthImageAndText:
  {
    src: "/keepbees.jpeg",
    title: "Submit API",
    subtitle: "Dandelion Endpoint",
    orientation: "right",
  }
objectives:
  {
    title: "What can I do with Submit API?",
    list:
      [
        "Send signed transactions to the blockchain",
        "This API is deprecated",
      ],
  }
recirc:
  { image: "/learn.jpeg", color: "bg-blue-600", list: ["2021-09", "2021-10"] }
---  

# cardano-node-socket
## [coming-soon] cardano-node-socket-over-https

You can use this REST API to setup a local socket file and use cardano-cli against it

`cardano-cli` is the first class citizen supporting every new blockchain feature, and this endpoint helps to transport a cardano-node's socket to you using a secure HTTPS tunnel.

Currently access to this API is enabled on demand. Authorization and secure channel is setup with https://github.com/jpillora/chisel and TCP-to-socket termination can be done by using `socat`

![](/showcase-comingsoon.jpg)

## Links

- [View on IOHK GitHub](https://github.com/input-output-hk/cardano-node#cardano-cli)
- [Official Documentation from IOHK](https://github.com/input-output-hk/cardano-node/blob/master/cardano-cli/README.md)

## Usage

- [testnet: https://cardano-node-socket.testnet.dandelion.link](https://cardano-node-socket.testnet.dandelion.link)
- [mainnet: https://cardano-node-socket.testnet.dandelion.link](https://cardano-node-socket.mainnet.dandelion.link)


```bash
# TODO
```

### Version
- "mainnet": { "version": "1.25.1" }
- "testnet": { "version": "1.25.1" }
