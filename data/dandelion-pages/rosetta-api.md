---
number: "Rosetta API"
title: "rosetta-api"
date: "2021-10-07"
version: 1
videoId: ""
videoTitle: ""
path: "/dandelion/endpoints/rosetta-api"
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
    title: "What can I do with Rosetta?",
    list:
      [
        "Rosetta is an open-source specification and set of tools that makes integrating with blockchains simpler, faster, and more reliable.",
      ],
  }
recirc:
  { image: "/learn.jpeg", color: "bg-blue-600", list: ["2021-09", "2021-10"] }
---   


# rosetta-api
## rosetta-api

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