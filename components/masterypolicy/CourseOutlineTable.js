import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function CourseOutlineTable() {
    return (
        <div>
            <table class="table-fixed border border-collapse text-left">
                <thead>
                    <tr class="">
                        <th class='p-1 border border-slate-500'>#</th>
                        <th class='p-1 border border-slate-500'>Category</th>
                        <th class='p-1 border border-slate-500'>Module Title</th>
                        <th class='p-1 border border-slate-500'>Student Learning Targets</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class='bg-onboard'>
                        <td class='p-1 border border-slate-500'>100</td>
                        <td class='p-1 border border-slate-500'>Onboarding</td>
                        <td class='p-1 border border-slate-500'>Getting Started</td>
                        <td class='p-1 border border-slate-500'>
                            <ul start='5'>
                                <li>I can connect a Cardano wallet to the Pre-Production test network.</li>
                                <li>I can get FREE tADA on Pre-Production testnet</li>
                                <li>I know how to safely store my keys.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr class='bg-onboard'>
                        <td class='p-1 border border-slate-500'>101</td>
                        <td class='p-1 border border-slate-500'>Onboarding</td>
                        <td class='p-1 border border-slate-500'>Prepare a Plutus Development Environment</td>
                        <td class='p-1 border border-slate-500'>
                            <ul>
                                <li>I can load and run nix shell.</li>
                                <li>I can use git to checkout a specific tag of the Plutus Apps repository.</li>
                                <li>I can compile a simple Plutus validator script.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr class='bg-onboard'>
                        <td class='p-1 border border-slate-500'>102</td>
                        <td class='p-1 border border-slate-500'>Onboarding</td>
                        <td class='p-1 border border-slate-500'>Set up a Testnet Node</td>
                        <td class='p-1 border border-slate-500'>
                            <ul>
                                <li>I can run a Cardano testnet node.</li>
                                <li>I can query a testnet address with cardano-cli.</li>
                                <li>I can send a transaction with cardano-cli.</li>
                                <li>I am building my own mental model for what the blockchain is and why it works.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr class='bg-bbk'>
                        <td class='p-1 border border-slate-500'>201</td>
                        <td class='p-1 border border-slate-500'>BBK</td>
                        <td class='p-1 border border-slate-500'>Three Ways to Mint a Token</td>
                        <td class='p-1 border border-slate-500'>
                            <ul>
                                <li>I can mint a Cardano native asset in GameChanger Wallet.</li>
                                <li>I can mint native assets with native scripts using cardano-cli.</li>
                                <li>I can mint a native asset using a Plutus script.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr class='bg-bbk'>
                        <td class='p-1 border border-slate-500'>202</td>
                        <td class='p-1 border border-slate-500'>BBK</td>
                        <td class='p-1 border border-slate-500'>Get Started with Front End</td>
                        <td class='p-1 border border-slate-500'>
                            <ul>
                                <li>I can run a Next JS project on my local device.</li>
                                <li>I can use a library like Mesh to interact with a browser-based wallet like Eternl or Nami.</li>
                                <li>I can create a web app that renders differently if a user holds a Cardano token.</li>\
                                <li>I can write basic blockchain queries using tools like GraphQL and Koios.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr class='bg-bbk'>
                        <td class='p-1 border border-slate-500'>203</td>
                        <td class='p-1 border border-slate-500'>BBK</td>
                        <td class='p-1 border border-slate-500'>Three Ways to Mint an NFT</td>
                        <td class='p-1 border border-slate-500'>
                            <ul>
                                <li>I can add metadata to a Cardano transaction.</li>
                                <li>I can create a Cardano NFT that adheres to CIP-25 standard.</li>
                                <li>I know where to learn more about Cardano Improvement Proposals.</li>
                                <li>I can contribute to new standards in this development ecosystem.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr class='bg-bbk'>
                        <td class='p-1 border border-slate-500'>204</td>
                        <td class='p-1 border border-slate-500'>BBK</td>
                        <td class='p-1 border border-slate-500'>Introduction to Validators and Compiled Scripts</td>
                        <td class='p-1 border border-slate-500'>
                            <ul>
                                <li>I can compile a script from a Plutus Validator.</li>
                                <li>I can lock tokens at a contract address.</li>
                                <li>I can unlock UTxOs from a contract address.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr class='bg-specialize'>
                        <td class='p-1 border border-slate-500'>301</td>
                        <td class='p-1 border border-slate-500'>Specializing</td>
                        <td class='p-1 border border-slate-500'>Mini-Project: Build a Token Gated Faucet</td>
                        <td class='p-1 border border-slate-500'>
                            <ul>
                                <li>I can implement a full-stack decentralized application on Cardano.</li>
                                <li>I can contribute to a headless application on Cardano.</li>
                                <li>I can use metadata to coordinate outcomes in a decentralized application.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr class='bg-specialize'>
                        <td class='p-1 border border-slate-500'>302</td>
                        <td class='p-1 border border-slate-500'>Specializing</td>
                        <td class='p-1 border border-slate-500'>Querying the Blockchain</td>
                        <td class='p-1 border border-slate-500'>
                            <ul>
                                <li>I can write queries to the blockchain.</li>
                                <li>I can build front-end components that display blockchain data.</li>
                                <li>I can build front-end components that construct Cardano transactions.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr class='bg-specialize'>
                        <td class='p-1 border border-slate-500'>303</td>
                        <td class='p-1 border border-slate-500'>Specializing</td>
                        <td class='p-1 border border-slate-500'>Writing Business Logic in Plutus Validators</td>
                        <td class='p-1 border border-slate-500'>
                            <ul>
                                <li>I can formulate logic of Dapp in a Plutus validator.</li>
                                <li>I can distinguish the roles of Datum, Redeemer, Script Context and Parameter in a validator.</li>
                                <li>I can build transaction on cardano-cl that successfully interact with logic of smart contract.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr class='bg-specialize'>
                        <td class='p-1 border border-slate-500'>304</td>
                        <td class='p-1 border border-slate-500'>Specializing</td>
                        <td class='p-1 border border-slate-500'>Nix, A Sourcecode-First Package Manager</td>
                        <td class='p-1 border border-slate-500'>
                            <ul>
                                <li>I can create a unit-test using nix, shell, git.</li>
                                <li>I can use git to explain what happens when you start plutus-apps on steps git checkout and nix-shell </li>
                                <li>I can create a dependency graph for a Haskell package.</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}