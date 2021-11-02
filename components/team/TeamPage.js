import Image from "next/image";
import React from "react";
import team from "../../data/team.json";

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
    <div>
      <section className="spacing-x py-9 text-black2-900 ">
        <h1 className="  gg-title ">About us</h1>
        <p className="max-w-14 mt-4">
          GimbaLabs is a collaborative platform for people who want to show the
          world what Cardano can do. We are creating free and open source tools,
          lessons, and resources that people can learn from. We believe that
          people learn best by doing things. If you've been looking for an entry
          point into how you can participate in Cardano, we think you might find
          it here.
        </p>
      </section>
      <section className="bg-black2-900 py-9 text-white">
        <h2 className="spacing-x mb-5 lg:mb-0  gg-title text-pink-100">
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

      {/* TEAM CARDS */}
      <section className="py-9">
        <h2 className="spacing-x mb-5 lg:mb-0     gg-title text-black2-900">
          Team
        </h2>

        <div className="spacing-x py-5 max-w-18 mx-auto flex justify-center items-center flex-wrap">
          {team.founders.map((i) => (
            <div className="max-w-13 m-5 xl:m-7  flex flex-col ">
              <div className=" relative  ">
                <div
                  className={`-left-2 top-3 absolute w-8 h-8  ${i.color}`}
                ></div>
                <div className="rounded w-11 h-11 overflow-hidden inline-block">
                  <Image src={i.image} width={192} height={192} />
                </div>
              </div>
              <div className=" ml-5 ">
                <div
                  className={`text-2xl md:text-4xl font-heading mb-2 text-black2-900 flex `}
                >
                  <div className="flex flex-col mr-2">
                    {i.name.split(" ")[0]}
                    <div className={` mb-3 w-full h-2 ${i.color}`}></div>
                  </div>
                  {i.name.split(" ")[1]}
                </div>
                <div className={` mb-2 text-black2-900 `}>{i.bio}</div>
              </div>
              {/* <div className="">
                <a href={i.twitter} target="blank" className="mr-1">
                  <Image src="/social/twitter.png" width={24} height={24} />
                </a>
                <a href={i.linkedIn} target="blank" className="mr-1">
                  <Image src="/social/linkedin.png" width={24} height={24} />
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
