export const workshopTopics = [
    {
      number: 1,
      topic: "On-chain Deposits",
      questions: [
        "What amount of ada should be deposited to submit a governance action?",
        "What amount of ada should be deposited when registering as a DRep?",
      ],
      bbk: "https://github.com/JaredCorduan/CIPs/tree/voltaire-v1/CIP-1694#controlling-the-number-of-active-governance-actions",
    },
    {
      number: 2,
      topic: "Maximum Withdrawal",
      questions: [
        "What limits should be in place for single withdrawals (note three different sub-thresholds) and/or over a specified time period?",
        "",
      ],
      details:
        'Treasury withdrawals are categorized as "small", "medium" and "large". As a community, we will determine the acceptable range (in lovelace) that can be withdrawn from the treasury at each level. We will also decide on voting thresholds for each level. For example, do you think that is appropriate for a "small" treasury withdrawal to require a lower voting approval rate than a "large" one?',
      bbk: "https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md#governance-actions",
    },
    {
      number: 3,
      topic: "Community Tooling",
      questions: [
        "What community and user tooling might be necessary or helpful in launching and maintaining the MVG proposed in CIP-1694?",
        "",
      ],
      bbk: "url",
    },
    {
      number: 4,
      topic: "Treasury Protection",
      questions: [
        "The Cardano Treasury is funded by transaction fees. As Treasury withdrawals become democratized, how might we ensure the Treasury is not drained too quickly?",
        "",
      ],
      bbk: "url",
    },
    {
      number: 5,
      topic: "Action Thresholds",
      questions: ["What quorum and passing % thresholds are required to ratify a governance action?", ""],
      bbk: "https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md#governance-actions",
    },
    {
      number: 6,
      topic: "Action Expiration",
      questions: [
        "If a governance action is not ratified, how many epochs should a governance action stay active before it expires and the deposit returned to the proposer?",
        "",
      ],
      bbk: "url",
    },
    {
      number: 7,
      topic: "DReps Incentives",
      questions: ["Should DReps be incentivized?", "And if so, how much, and how should the payments be managed?"],
      bbk: "url",
    },
    {
      number: 8,
      topic: "Metadata Formats (optional)",
      questions: [
        "Governance actions and the votes use new metadata fields in the form of URLs and integrity hashes (mirroring the metadata structure for stake pool registration). What should be included as mandatory metadata for governance actions?",
        "",
      ],
      bbk: [
        "https://github.com/JaredCorduan/CIPs/tree/voltaire-v1/CIP-1694#new-metadata-structures",
        "https://gist.github.com/Quantumplation/56ef2ffccb05f5d2974fd17240dc406c",
      ],
    },
    {
      number: 9,
      topic: "Constitutional Committee Compensation (optional)",
      questions: ["Should the Constitutional Committee be compensated for their time, and if so how?", ""],
      bbk: "url",
    },
  ];