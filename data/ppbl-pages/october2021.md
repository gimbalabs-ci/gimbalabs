---
id: 'october2021'
month: 'October 2021'
tasks: 
  - 'NFT Utilities'
  - 'Escrow contracts'
  - 'Dispute resolution'
  - 'Alonzo Purple'
link: 'gitlab.com'
---      

# Our Current Work: October, 2021

## This month, our outcomes will include the following
- Continue to create video documentation for each task
- Continue to publish public repositories sharing our outcomes
- To the extent possible, we'll build live web demos. When this is not possible, we'll talk about what we need in order to get to that point, which will inform future tasks. 
- Worth covering:
  - PAB vs. referencing compiled scripts
  - Testnet CSK with front-end
- Maybe a little something about favorite misconceptions or common pitfalls? Our goal is practice talking about these new tools so that we can achieve a level of semantic clarity.

# PPBL Tasks for October 2021:

## 01a: Check that an NFT exists in a Wallet 
- Carefully defining "Wallet" as a collection of UTXOs (Address / Wallet / transaction / UTXO)
## 01b: Get a list of NFTs in a given UTXO / Wallet

## 02: Implement OAuth with NFTs
- Building upon tasks 02 and 03 in September, how can we move a few steps closer to an implementation that people actually use?
- Example: an organization/brand can distribute NFTs that represent the issuer; build the mechanism for checking whether that NFT exists.

## 03: Applied Escrow contract with all necessary endpoints for interaction
- Alice is (for example) a Plutus expert
- Bob needs help with Plutus
- Alice is offering 60 minute blocks of time where she offers 1:1 support on Plutus, at a rate of xx Ada/hour
- Bob books an hour with Alice. When booking time, he places xx Ada in this escrow contract
  - After booking the hour, Bob can see specific availability for Alice and can:
  - book time, or
  - get refunded (if no times are compatible)
- Alice meets with Bob
- ...someone says "that meeting happened"
- Funds are released from escrow to Alice

## 04 (if time allows): Add dispute resolution on #03
- drafting standards so that we can begin to refine
- mediation vs arbitration
- fact finding / data / 
- "meeting didn't happen" vs. "this meeting happened, but there wasn't enough value, I didn't get my money worth"
- thinking ahead: scaling toward higher-value transactions/interactions; standards for different cases/domains

## Continue to check out Alonzo Purple Exercises
- Can we contribute our own take on some of the solutions to Exercise #5 and beyond?
- Github repo: https://github.com/input-output-hk/Alonzo-testnet

