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
        <div class="md:container md:mx-auto">
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
            <h1>Onboarding</h1>
            <div class='module-number'>100 Getting Started</div>
            <div>
                <ul start='5'>
                    <li>I can connect a Cardano wallet to the Pre-Production test network.</li>
                    <li>I can get FREE tADA on Pre-Production testnet</li>
                    <li>I know how to safely store my keys.</li>
                </ul>
            </div>


            <div class='module-number'>101 Prepare a Plutus Development Environment</div>
            <div>
                <ul class='list-decimal ml-5'>
                    <li>I can load and run nix shell.</li>
                    <li>I can use git to checkout a specific tag of the Plutus Apps repository.</li>
                    <li>I can compile a simple Plutus validator script.</li>
                </ul>
            </div>


            <div class='module-number'>102 Set up a Testnet Node</div>
            <div>
                <ul class='list-decimal ml-5'>
                    <li>I can run a Cardano testnet node.</li>
                    <li>I can query a testnet address with cardano-cli.</li>
                    <li>I can send a transaction with cardano-cli.</li>
                    <li>I am building my own mental model for what the blockchain is and why it works.</li>
                </ul>
            </div>


        </div>
    )
}

function BBK() {
    return (
        <div class='activate-tab mastery-content'>
            <h1>Building Background Knowledge (BBK)</h1>
            <div class='module-number'>201 Three Ways to Mint a Token</div>
            <div>
                <ul class='list-decimal ml-5'>
                    <li>I can mint a Cardano native asset in GameChanger Wallet.</li>
                    <li>I can mint native assets with native scripts using cardano-cli.</li>
                    <li>I can mint a native asset using a Plutus script.</li>
                </ul>
            </div>


            <div class='module-number'>202 Get Started with Front End</div>
            <div>
                <ul class='list-decimal ml-5'>
                    <li>I can run a Next JS project on my local device.</li>
                    <li>I can use a library like Mesh to interact with a browser-based wallet like Eternl or Nami.</li>
                    <li>I can create a web app that renders differently if a user holds a Cardano token.</li>
                    <li>I can write basic blockchain queries using tools like GraphQL and Koios.</li>
                </ul>
            </div>


            <div class='module-number'>203 Three Ways to Mint an NFT</div>
            <div>
                <ul class='list-decimal ml-5'>
                    <li>I can add metadata to a Cardano transaction.</li>
                    <li>I can create a Cardano NFT that adheres to CIP-25 standard.</li>
                    <li>I know where to learn more about Cardano Improvement Proposals.</li>
                    <li>I can contribute to new standards in this development ecosystem.</li>
                </ul>
            </div>


            <div class='module-number'>204 Introduction to Validators and Compiled Scripts</div>
            <div>
                <ul class='list-decimal ml-5'>
                    <li>I can compile a script from a Plutus Validator.</li>
                    <li>I can lock tokens at a contract address.</li>
                    <li>I can unlock UTxOs from a contract address.</li>
                </ul>
            </div>
        </div>
    )
}

function Specialize() {
    return (
        <div class='activate-tab mastery-content'>
            <h1>Specializing</h1>
            <div class='module-number'>301 Mini-Project: Build a Token Gated Faucet</div>
            <div>
                <ul class='list-decimal ml-5'>
                    <li>I can implement a full-stack decentralized application on Cardano.</li>
                    <li>I can contribute to a headless application on Cardano.</li>
                    <li>I can use metadata to coordinate outcomes in a decentralized application.</li>
                </ul>
            </div>

            <div class='module-number'>302 Querying the Blockchain</div>
            <div>
                <ul class='list-decimal ml-5'>
                    <li>I can write queries to the blockchain.</li>
                    <li>I can build front-end components that display blockchain data.</li>
                    <li>I can build front-end components that construct Cardano transactions.</li>
                </ul>
            </div>

            <div class='module-number'>303 Writing Business Logic in Plutus Validators</div>
            <div>
                <ul class='list-decimal ml-5'>
                    <li>I can formulate logic of Dapp in a Plutus validator.</li>
                    <li>I can distinguish the roles of Datum, Redeemer, Script Context and Parameter in a validator.</li>
                    <li>I can build transaction on cardano-cl that successfully interact with logic of smart contract.</li>
                </ul>
            </div>

            <div class='module-number'>304 Nix, A Sourcecode-First Package Manager</div>
            <div>
                <ul class='list-decimal ml-5'>
                    <li>I can create a unit-test using nix, shell, git.</li>
                    <li>I can use git to explain what happens when you start plutus-apps on steps git checkout and nix-shell </li>
                    <li>I can create a dependency graph for a Haskell package.</li>
                </ul>
            </div>


        </div>
    )
}