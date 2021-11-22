---
number: "Submit API"
title: "submit-api"
date: "2021-04-07"
version: 1
videoId: ""
videoTitle: ""
path: "/dandelion/endpoints/submit-api"
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

# submit-api
## cardano-rest/submit-api

![](/showcase-submit-api.png)
- [View on IOHK GitHub](https://github.com/input-output-hk/cardano-rest#overview)
- [Official Documentation](https://input-output-hk.github.io/cardano-rest/submit-api/)


## Usage
- [testnet: https://submit-api.testnet.dandelion.link](https://submit-api.testnet.dandelion.link)
- [mainnet: https://submit-api.mainnet.dandelion.link](https://submit-api.mainnet.dandelion.link)

### bash:  
```bash
    # '/tmp/cbor-tx' should be a file containing 
    # a valid 'application/cbor' signed transaction (in e.g., from cardano-cli)
    curl -X POST \\
        --header "Content-Type: application/cbor" \\
        --data-binary @/tmp/cbor-tx \\
        https://submit-api.testnet.dandelion.link/api/submit/tx
```

### Version
- "mainnet": "version": "3.1.1"
- "testnet": "version": "3.1.1"