export const actionList = [
    {
      action: "Motion of no-confidence",
      description: "A motion to create a state of no-confidence in the current constitutional committee",
    },
    {
      action: "New constitutional committee and/or threshold",
      description: "Changes to the members of the constitutional committee and/or to its signature threshold",
    },
    {
      action: "Updates to the Constitution",
      description: "A modification to the off-chain Constitution, recorded as an on-chain hash of the text document",
    },
    {
      action: "Hard-Fork Initiation",
      description: "Triggers a non-backwards compatible upgrade of the network; requires a prior software upgrade",
    },
    {
      action: "Protocol Parameter Changes",
      description:
        "Any change to one or more updatable protocol parameters, excluding changes to major protocol versions ('hard forks')",
    },
    {
      action: "Treasury Withdrawals",
      description:
        "Movements from the treasury, sub-categorized into small, medium or large withdrawals (based on the amount of Lovelace to be withdrawn). The thresholds for treasury withdrawals are discussed below.",
    },
    {
      action: "Info",
      description: "An action that has no effect on-chain, other than an on-chain record.",
    },
  ];