import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function LearningTargets() {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        setActiveTab("tab2");
    };
    const handleTab3 = () => {
        setActiveTab("tab3");
    };

    return (
        <div className="border-t border-black">
            <h2 className="text-4xl py-8 text-center">Course Outline and Student Learning Targets</h2>
            <ul className='flex flex-row'>
                <li class={activeTab === "tab1" ? "mastery-tab-active" : "mastery-tab"} onClick={handleTab1}>
                    <h1 className='text-xl'>Onboarding (100)</h1>
                </li>
                <li class={activeTab === "tab2" ? "mastery-tab-active" : "mastery-tab"} onClick={handleTab2}>
                    <h1 className='text-xl'>Building Background Knowledge (200)</h1>
                </li>
                <li class={activeTab === "tab3" ? "mastery-tab-active" : "mastery-tab"} onClick={handleTab3}>
                    <h1 className='text-xl'>Specializing (300)</h1>
                </li>
            </ul>
            <div>
                {activeTab === "tab1" ? <Onboard /> : ""}
                {activeTab === "tab2" ? <BBK /> : ""}
                {activeTab === "tab3" ? <Specialize /> : ""}
            </div>
        </div>
    )
}

function Onboard() {
    return (
        <div class='activate-tab mastery-content'>
            <div class='grid grid-cols-2'>
                <div>
                    <h1 class='text-4xl py-3'>Onboarding</h1>
                    <h2 class='module-heading'>100 Getting Started</h2>
                    <div>
                        <ul class='list-decimal ml-5'>
                            <li>I can connect a Cardano wallet to the Pre-Production test network.</li>
                            <li>I can get FREE tADA on Pre-Production testnet</li>
                            <li>I know how to safely store my keys.</li>
                        </ul>
                    </div>
                    <h2 class='module-heading'>101 Prepare a Plutus Development Environment</h2>
                    <div>
                        <ul class='list-decimal ml-5'>
                            <li>I can load and run nix shell.</li>
                            <li>I can use git to checkout a specific tag of the Plutus Apps repository.</li>
                            <li>I can compile a simple Plutus validator script.</li>
                        </ul>
                    </div>
                    <h2 class='module-heading'>102 Set up a Testnet Node</h2>
                    <div>
                        <ul class='list-decimal ml-5'>
                            <li>I can run a Cardano testnet node.</li>
                            <li>I can query a testnet address with cardano-cli.</li>
                            <li>I can send a transaction with cardano-cli.</li>
                            <li>I am building my own mental model for what the blockchain is and why it works.</li>
                        </ul>
                    </div>
                </div>
                <div class='p-5 bg-gray-300'>
                    <h2 class='text-2xl'>Evidence of Mastery</h2>
                    <p class='py-2'>
                        By working through course modules, students demonstrate mastery of the <a href="https://eleducation.org/resources/chapter-1-learning-targets" target="_blank" class='font-bold text-orange-800 hover:text-purple-800'>Student Learning Targets (SLTs)</a> listed here.
                    </p>
                    <p class='py-2'>
                        For many of these 100-Level SLTs, students demonstrate mastery by being able to move on to the next step in each Module. The PPBL team supports students to navigate these initial steps so that they are Onboarded to Cardano development. Each lesson provides a "You will know you are successful when..." statement, so that students can assess their own progress.
                    </p>
                    <p class='py-2'>
                        Eventually, some real evidence is needed to make sure that students can complete essential tasks on Cardano. PPBL emphasizes on-chain evidence of student success. For example, for SLT 102.3, students submit a successful <a href="https://preprod.cardanoscan.io/transactions" target="_blank" class='font-bold text-orange-800 hover:text-purple-800'>transaction hash that can be verified on Pre-Production testnet</a>.
                    </p>
                    <p class='py-2'>
                        By using on-chain events as evidence of learning, PPBL creates a decentralized resource that can be used to verify results. To see how, continue to the Building Background Knowledge tab.
                    </p>
                </div>
            </div>


        </div>
    )
}

function BBK() {
    return (
        <div class='activate-tab mastery-content'>
            <div class='grid grid-cols-2'>
                <div>
                    <h1 class='text-4xl py-3'>Building Background Knowledge (BBK)</h1>
                    <h2 class='module-heading'>201 Three Ways to Mint a Token</h2>
                    <div>
                        <ul class='list-decimal ml-5'>
                            <li>I can mint a Cardano native asset in GameChanger Wallet.</li>
                            <li>I can mint native assets with native scripts using cardano-cli.</li>
                            <li>I can mint a native asset using a Plutus script.</li>
                        </ul>
                    </div>
                    <h2 class='module-heading'>202 Get Started with Front End</h2>
                    <div>
                        <ul class='list-decimal ml-5'>
                            <li>I can run a Next JS project on my local device.</li>
                            <li>I can use a library like Mesh to interact with a browser-based wallet like Eternl or Nami.</li>
                            <li>I can create a web app that renders differently if a user holds a Cardano token.</li>
                            <li>I can write basic blockchain queries using tools like GraphQL and Koios.</li>
                        </ul>
                    </div>
                    <h2 class='module-heading'>203 Three Ways to Mint an NFT</h2>
                    <div>
                        <ul class='list-decimal ml-5'>
                            <li>I can add metadata to a Cardano transaction.</li>
                            <li>I can create a Cardano NFT that adheres to CIP-25 standard.</li>
                            <li>I know where to learn more about Cardano Improvement Proposals.</li>
                            <li>I can contribute to new standards in this development ecosystem.</li>
                        </ul>
                    </div>
                    <h2 class='module-heading'>204 Introduction to Validators and Compiled Scripts</h2>
                    <div>
                        <ul class='list-decimal ml-5'>
                            <li>I can compile a script from a Plutus Validator.</li>
                            <li>I can lock tokens at a contract address.</li>
                            <li>I can unlock UTxOs from a contract address.</li>
                        </ul>
                    </div>
                </div>

                <div class='p-5 bg-gray-300'>
                    <h2 class='text-2xl'>Evidence of Mastery</h2>
                    <p class='py-2'>
                        By working through the 200-Level course modules, students demonstrate mastery of the <a href="https://eleducation.org/resources/chapter-1-learning-targets" target="_blank" className="font-bold text-orange-800 hover:text-purple-800">Student Learning Targets (SLTs)</a> listed here.
                    </p>
                    <p class='py-2'>
                        With these modules, our goal is Build Background Knowledge (BBK) about the essentials of Cardano development. Students get a high-level view of how UTxOs, Native Tokens, and Scripts are used as building blocks to create advanced business logic. They learn how to add Metadata to Cardano transactions, and start to think about how to structure it.
                    </p>
                    <p class='py-2'>
                        Students should also be able to create simple user-interfaces so that they can interact with the blockchain on the front-end. They learn the basics of blockchain queries and transaction building in a React project, built with NextJS and <a href="https://mesh.martify.io/" target="_blank" className="font-bold text-orange-800 hover:text-purple-800">the open-source Mesh Library from Martify Labs</a>.
                    </p>
                    <p class='py-2'>
                        Every time metadata is written to the blockchain, it <a href="https://gitlab.com/gimbalabs/plutus-pbl-summer-2022/ppbl-front-end-template/-/blob/main/components/queryResults/metadataExampleQuery.tsx" target="_blank" className="font-bold text-orange-800 hover:text-purple-800">creates a record of what students are able to do</a>. The same is true when students successfully mint tokens on Cardano. To submit assignments, students submit transaction hashes that can be verified on-chain.
                    </p>
                </div>
            </div>
        </div>
    )
}

function Specialize() {
    return (
        <div class='activate-tab mastery-content'>
            <div class='grid grid-cols-2'>
                <div>
                    <h1 class='text-4xl py-3'>Specializing</h1>
                    <h2 class='module-heading'>301 Mini-Project: Build a Token Gated Faucet</h2>
                    <div>
                        <ul class='list-decimal ml-5'>
                            <li>I can implement a full-stack decentralized application on Cardano.</li>
                            <li>I can contribute to a headless application on Cardano.</li>
                            <li>I can use metadata to coordinate outcomes in a decentralized application.</li>
                        </ul>
                    </div>

                    <h2 class='module-heading'>302 Querying the Blockchain</h2>
                    <div>
                        <ul class='list-decimal ml-5'>
                            <li>I can write queries to the blockchain.</li>
                            <li>I can build front-end components that display blockchain data.</li>
                            <li>I can build front-end components that construct Cardano transactions.</li>
                        </ul>
                    </div>

                    <h2 class='module-heading'>303 Writing Business Logic in Plutus Validators</h2>
                    <div>
                        <ul class='list-decimal ml-5'>
                            <li>I can formulate logic of Dapp in a Plutus validator.</li>
                            <li>I can distinguish the roles of Datum, Redeemer, Script Context and Parameter in a validator.</li>
                            <li>I can build transaction on cardano-cl that successfully interact with logic of smart contract.</li>
                        </ul>
                    </div>

                    <h2 class='module-heading'>304 Nix, A Sourcecode-First Package Manager</h2>
                    <div>
                        <ul class='list-decimal ml-5'>
                            <li>I can create a unit-test using nix, shell, git.</li>
                            <li>I can use git to explain what happens when you start plutus-apps on steps git checkout and nix-shell </li>
                            <li>I can create a dependency graph for a Haskell package.</li>
                        </ul>
                    </div>
                </div>

                <div class='p-5 bg-gray-300'>
                    <h2 class='text-2xl'>Evidence of Mastery</h2>
                    <p class='py-2'>
                        At the 300-Level, evidence is required for each of the Mastery Assignments.
                    </p>
                    <h2 className="text-xl py-2">301 Mini-Project: Build a Token Gated Faucet</h2>
                    <ul className="list-decimal ml-5">
                        <li>Unlock tokens from a Faucet (evidence: TxHash)</li>
                        <li>Create and test your own Faucet instance (evidence: TxHashes)</li>
                        <li>Add your Contract to the Front-End Template (evidence: git merge request)</li>
                        <li>Register Your Faucet with Tx Metadata (evidence: on-chain metadata)</li>
                    </ul>
                    <h2 className="text-xl py-2">302 Querying the Blockchain</h2>
                    <ul className="list-decimal ml-5">
                        <li>Customize and Style a Query (evidence: screenshots and documentation)</li>
                        <li>Rewrite a Koios query with GraphQL (evidence: screenshots and documentation)</li>
                        <li>Create a Passive Component (evidence: git merge request)</li>
                        <li>Create a Transaction Component (evidence: git merge request)</li>
                    </ul>
                    <h2 className="text-xl py-2">303 Writing Business Logic in Plutus Validators</h2>
                    <ul className="list-decimal ml-5">
                        <li>Create a Bounty Commimtment Using cardano-cli on PreProd deployment (evidence: TxHash)</li>
                        <li>Create and test own instance of GBTE (evidence: TxHashes)</li>
                        <li>Share your instance of GBTE and show that someone else was able to use it (evidence: TxHashes)</li>
                        <li>Create and Test and Instance of GBTE on PlutusV2 (evidence: TxHashes)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}