import Image from "next/image";
import React from "react";
import { Linkedin, Twitter } from "react-feather";
import team from "../../data/team.json";
import DiscordButton from "../shared_ui/DiscordButton";
import LinkedinButton from "../shared_ui/LinkedinButton";
import PageTitleWithBorder from "../shared_ui/PageTitleWithBorder";
import TwitterButton from "../shared_ui/TwitterButton";

const principles = [
  {
    label: "Learn by Doing",
    text:
      "Education makes the greatest impact when intrinsically motivating tasks are combined with a supportive environment. Workshop Maybe’s starter kits are compelling opportunities for people to try do new things, and we will provide the scaffolding to help learners become self-sufficient.",
  },
  {
    label: "Seek Collaboration",
    text:
      "We recognize new opportunities for citywide and worldwide collaboration. Partnerships take root when contributors have tools for building trust and can share ideas constructively. There haven’t really been tools like these before. Should we go build something?",
  },
  {
    label: "Lead by Example",
    text:
      "In order for Cardano to be successful in living up to its first principles, our community must consistently show what open source, decentralized movements look like. This not a static goal that can be achieved, but a moving target. We’ll seek to be held accountable for putting in the work and will celebrate shared success.",
  },
  {
    label: "Stay Flexible",
    text:
      "We don’t yet know where this work is headed. The principles laid out here are broad. Questions about grassroots adoption and education may lead to brand new technical or political ones. By recognizing good ideas, contributing where we can, and staying open to new questions, each of us is responsible for the growth of Cardano.",
  },
];

export default function TeamPage() {
  return (
    <div className="bg-offWhite">
      <PageTitleWithBorder title="About us" />
      <section className="spacing-x pb-7 text-black2-900 flex flex-wrap justify-between ">
        <p className="max-w-14  ">
          GimbaLabs is a collaborative platform for people who want to show the
          world what Cardano can do. We are creating free and open source tools,
          lessons, and resources that people can learn from. We believe that
          people learn best by doing things. If you've been looking for an entry
          point into how you can participate in Cardano, we think you might find
          it here.
        </p>
        <div className="mt-5 ">
          <div className="border-l-4 border-black2-900 pl-5 w-full flex flex-col  items-start">
            <div className="text-3xl  mb-5">Join our community</div>
            <div className="flex items-center">
              <DiscordButton className="w-6 text-blue-600 mr-3" />
              <TwitterButton className="w-6 text-blue-700 mr-3" />
            </div>
          </div>
        </div>
      </section>
      {/* TEAM CARDS */}
      <section className="py-9 bg-black2-900 text-offWhite">
        <h2 className="spacing-x mb-5 lg:mb-0     text-4xl lg:text-6xl ">
          Team
        </h2>

        <div className="  mx-auto flex justify-center items-start flex-wrap">
          {team.founders.map((i) => (
            <div className="max-w-13 m-5  flex flex-col ">
              <div className=" relative  ">
                <div
                  className={`-left-2 top-3  absolute w-8 h-8  ${i.color}`}
                ></div>
                <div
                  className={`${i.color} shadow-lg  w-11 h-11 overflow-hidden inline-block`}
                >
                  <Image src={i.image} width={192} height={192} />
                </div>
              </div>
              {/* Content Group */}
              <div className=" flex  ">
                {/* Socials */}
                <div
                  className={`mx-5 flex flex-col justify-center items-center ${i.textColor}`}
                >
                  <TwitterButton
                    className={`mb-3 w-5 ${i.textColor}`}
                    link={i.twitter}
                    strokeWidth="1"
                  />

                  <LinkedinButton
                    className={` w-5 ${i.textColor}`}
                    link={i.linkedIn}
                    strokeWidth="1"
                  />
                </div>
                {/* Text group */}
                <div className="flex flex-col">
                  <div
                    className={`flex text-2xl md:text-4xl font-heading mb-2  `}
                  >
                    <div className=" flex flex-col mr-2">
                      {i.name.split(" ")[0]}
                      <div className={` mb-2 w-full h-2 ${i.color}`}></div>
                    </div>
                    {i.name.split(" ")[1]}
                  </div>
                  <div className={` mb-2  `}>{i.bio}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="spacing-x py-9 text-black2-900 ">
        <h3 className="  gg-title text-center ">What we're building</h3>
        <div className="max-w-15 mx-auto">
          <p className=" mt-7">
            Cardano APIs as Community Service will serve as an entrypoint for
            developers by offering open, free interfaces for new adopters to
            explore ideas and launch proofs of concept for new projects. These
            public, free services will ease adoption of Cardano by providing
            infrastructure for initial setup and testing of ideas, therefore
            encouraging developers to start building by reducing the time
            invested from days to minutes.
          </p>
          <p className=" mt-5 ">
            Cardano Starter Kits (CSKs) are open source, Project Based Learning
            (PBL) opportunities for people to engage with Cardano in the real
            world, and to learn through experience what the Cardano platform can
            do􏰉 CSKs consist of smart contract code, voting apparatus, guided
            learning materials, and implementation tips. CSKs will support users
            to learn about Cardano while also producing real-world outcomes, and
            will vary in complexity, for everyone from beginners to experts.
            CSKs will not be "grab and go", but are grounded in the
            understanding that we learn best by doing experiential learning.
            Anyone who is interested will be able to build upon open source CSKs
            to start local businesses and to host local events that drive
            hands-on understanding of Cardano.
          </p>
          <p className=" mt-5 ">
            GimbaLabs is building a platform for sharing APIs and CSKs that
            allow users to share experiences about what works, what they've
            learned, and how to improve our open source resources. Community
            members will also be able to contribute their own APIs and CSKs,
            supporting our intention to make GimbaLabs a valuable resource for
            the Cardano commons.{" "}
          </p>
        </div>
      </section>
      <section className="bg-black2-900 py-9 text-white">
        <h2 className="spacing-x mb-5 lg:mb-0  text-4xl lg:text-6xl text-offWhite">
          Principles
        </h2>

        <ul className="grid spacing-x  max-w-17 mx-auto  ">
          {/* Principles */}
          {principles.map((i, index) => {
            const even = index % 2 === 0;
            return (
              <li
                className={`${
                  index === principles.length - 1 ? "mb-0" : "mb-7"
                } lg:mb-0 max-w-14 ${even ? "ml-auto" : ""}`}
              >
                <div className="text-xl md:text-3xl mb-2 pb-1 text-pink-100 border-b border-pink-200">
                  {i.label}
                </div>
                <div className="">{i.text}</div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
