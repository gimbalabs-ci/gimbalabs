import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Linkedin, Twitter } from "react-feather";
import team from "../../data/team.json";
import DiscordButton from "../shared_ui/DiscordButton";
import LinkedinButton from "../shared_ui/LinkedinButton";
import PageTitleWithBorder from "../shared_ui/PageTitleWithBorder";
import PageTitle from "../shared_ui/PageTitle";
import TwitterButton from "../shared_ui/TwitterButton";
import {
  TitleHeading1,
  TitleHeading2,
  TitleHeading3,
  HighlightText,
  CallOutText,
  Paragraph,
  CardHeading,
  CardText,
} from "../../components/Type";
import TeamCard from "../../components/Cards/TeamCard";

const principles = [
  {
    label: "Learn by Doing",
    text: "When we have experiences, our learning is real.",
  },
  {
    label: "Collaborate",
    text: "New technology always creates new ways for people to collaborate, and blockchain is no different.",
  },
  {
    label: "Stay Flexible",
    text: "We don't know exactly where this new technology will take us, so we create space for incomplete ideas and we embrace uncertainty.",
  },
];

export default function TeamPage() {
  return (
    <div className="mt-10 bg-offWhite">
      <PageTitle title="About Gimbalabs" />
      {/* TEAM CARDS */}

      <section className="py-5 mt-5 bg-black2-900 text-offWhite">
        <p className="spacing-x w-3/4 mb-5 mb-4 text-lg">
          Gimbalabs creates scaffolding for a robust and resilient global network of leaders, devOps pioneers, builders,
          and educators because we know that in the hands of many, Cardano will help to solve real problems.
        </p>
        <p className="spacing-x w-3/4 mb-5 mb-4 text-lg">
          To be robust and reslient, a network requires infrastructure and people who know how to use it. We are
          building Dandelion so that anyone can deploy critical infrastructure for interacting with the Cardano
          protocol. We are building Project-Based Learning courses so that people get first-hand experience using
          technical tools and sharing decision-making power.
        </p>
        <p className="spacing-x w-3/4 mb-5 mb-4 text-lg">
          We believe that people learn best by doing things. If you've been looking for an entry point into how you can
          participate in Cardano, we think you might find it here. If you want to
          learn more about the people behind Gimbalabs, check out the <Link href="/updates"><span className="text-yellow-400 cursor-pointer">videos page</span></Link> or{" "}
          <Link href="/calendar"><span className="text-yellow-400 cursor-pointer">join one of weekly community meetings</span></Link>. If you want to start learning, <a href="https://plutuspbl.io" className="text-yellow-400 cursor-pointer">take a look at our Plutus PBL Course</a>.
        </p>
      </section>

      <h1 className="text-6xl text-center mt-8">Gimbalabs Team</h1>
      <div className="w-5/6 mx-auto my-5 grid grid-cols-3">
        {team.founders.map((i) => (
          <div className="mx-5 my-6 flex flex-col ">
            <div className=" relative  ">
              <div className={`-left-2 top-3  absolute w-8 h-8  ${i.color}`}></div>
              <div className={`${i.color} shadow-lg  w-11 h-11 overflow-hidden inline-block`}>
                <Image src={i.image} width={192} height={192} />
              </div>
            </div>
            <div className=" flex  ">
              <div className={`mx-5 flex flex-col justify-center items-center ${i.textColor}`}>
                <TwitterButton className={`mb-3 w-5 ${i.textColor}`} link={i.twitter} strokeWidth="1" />

                <LinkedinButton className={` w-5 ${i.textColor}`} link={i.linkedIn} strokeWidth="1" />
              </div>
              <div className="flex flex-col">
                <div className={`flex text-2xl md:text-4xl font-heading mb-2  `}>
                  <div className=" flex flex-col mr-2">
                    {i.name.split(" ")[0]}
                    <div className={` mb-2 w-full h-2 ${i.color}`}></div>
                  </div>
                  {i.name.split(" ")[1]} {i.name.split(" ")[2]}
                </div>
                <div className={` mb-2  `}>{i.bio}</div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-8">
          <div className="border-l-4 border-black2-900 pl-5 w-full flex flex-col  items-start">
            <div className="text-3xl  mb-5">Join our community</div>
            <div className="flex items-center">
              <DiscordButton className="w-6 text-blue-600 mr-3" />
              <TwitterButton className="w-6 text-blue-700 mr-3" />
            </div>
          </div>
        </div>
      </div>
      <section className="spacing-x pb-7 text-black2-900 flex flex-wrap justify-between ">
        <div className="mt-5 "></div>
      </section>
      {/* WHAT WE'RE BUILDING */}
      <section className="spacing-x py-9 text-black2-900 ">
        <h3 className="  gg-title text-center ">What we're building</h3>
        <div className="max-w-15 mx-auto">
          <p className=" mt-5">
            Our founding team met by engaging deeply in{" "}
            <a href="https://cardano.ideascale.com/" target="_blank">
              Project Catalyst
            </a>
            . We recognized that by sharing ideas and seeking connections between projects, we could start a process
            that led to more people solving more problems and building more solutions on Cardano. You can still{" "}
            <a href="https://cardano.ideascale.com/a/dtd/Cardano-Starter-Kits-+-APIs/322195-48088" target="_blank">
              read our original proposal here
            </a>
            .
          </p>
          <p className=" mt-5">Here are some things we are working on right now:</p>
          <h4 className=" gg-subtitle mt-5">Dandelion</h4>
          <p className=" mt-4">
            Dandelion is both a set of services and a containerized framework for deploying those services. We are
            currently teaching operators how to run Kubernetes to deploy a Dandelion node, and we are building ways for
            those nodes to communicate seamlessly to provide distributed access to Cardano.{" "}
            <Link href="/dandelion">Learn more</Link>.
          </p>
          <h4 className=" gg-subtitle mt-5">Project-Based Learning</h4>
          <p className=" mt-4 ">
            We are piloting a "Plutus Project-Based Learning" (PPBL) team that gives developers a chance to gain hands
            on experience with Plutus by working on real projects. One outcome of PPBL is that we are creating
            documentation and task suggestions for additional developers to learn Plutus by using it. Another is that we
            will apply what we are learning about Project-Based Learning to other tools, like Atala Prism and Dandelion.
          </p>
          <h4 className=" gg-subtitle mt-5">Playground</h4>
          <p className=" mt-4 ">
            At weekly Playground meetings, community members can share ideas. Join us every Tuesday at 5pm UTC - all
            details are on the Gimbalabs Discord server and on our community calendar.{" "}
          </p>
          <h4 className=" gg-subtitle mt-5">Projects</h4>
          <p className=" mt-4 ">
            There are several projects that we are eager to release in the next few months. Take a look around this site
            to learn more about what we are building. As each project is released, we will share it here.{" "}
          </p>
        </div>
      </section>
      {/* PRINCIPLES */}
      <section className="bg-black2-900 py-9 text-white">
        <h2 className="spacing-x mb-5 lg:mb-0  text-4xl lg:text-6xl text-offWhite">Principles</h2>

        <ul className="grid spacing-x  max-w-17 mx-auto  ">
          {/* Principles */}
          {principles.map((i, index) => {
            const even = index % 2 === 0;
            return (
              <li
                className={`${index === principles.length - 1 ? "mb-0" : "mb-7"} lg:mb-0 max-w-14 ${
                  even ? "ml-auto" : ""
                }`}
              >
                <div className="text-xl md:text-3xl mb-2 pb-1 text-pink-100 border-b border-pink-200">{i.label}</div>
                <div className="">{i.text}</div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
