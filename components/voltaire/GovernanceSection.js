import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import PlaygroundSvg from "../../lib/icons/PlaygroundSvg";
import ContributeToThis from "./ContributeToThis";
const gdsEase12 = {
  duration: 0.3,
  ease: "linear",
};

export default function GovernanceSection({ colors }) {
  const [hov, setHov] = useState(false);
  const [hov1, setHov1] = useState(false);
  const [hov2, setHov2] = useState(false);
  const [hov3, setHov3] = useState(false);

  return (
    <div
      className="mx-auto spacing-y spacing-x border-b-2 border-black"
      onMouseOver={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div className="flex flex-col gap-6 text-center">
        <div className="flex flex-row gap-12 w-5/6 mx-auto">
          <div className="w-1/3 bee-cursor" onMouseEnter={() => setHov1(true)} onMouseLeave={() => setHov1(false)}>
            {hov1 ? (
              <div className="bg-blue-600 h-full p-5">
                <p className="text-2xl text-offWhite">CIP 1694 proposes 7 new on-chain actions. </p>
                <p className="text-2xl text-yellow-400 py-3">
                  <Link href="/voltaire-is-here/why">What are they?</Link>
                </p>
              </div>
            ) : (
              <div className="bg-blue-900 h-full p-5">
                <h2 className="text-8xl text-offWhite">7</h2>
                <h2 className="text-2xl text-offWhite">New Goverance Actions</h2>
              </div>
            )}
          </div>

          <div className="w-1/3 bee-cursor-dark" onMouseEnter={() => setHov2(true)} onMouseLeave={() => setHov2(false)}>
            {hov2 ? (
              <div className="bg-orange-300 text-black h-full p-5">
                <p className="text-2xl">At CIP-1694 Workshops, we will discuss 7 topics.</p>
                <p className="text-2xl text-blue-900 py-3">
                  <Link href="/voltaire-is-here/prepare">What are they?</Link>
                </p>
              </div>
            ) : (
              <div className="bg-orange-900 h-full p-5">
                <h2 className="text-8xl text-offWhite">7</h2>
                <h2 className="text-4xl text-offWhite">Workshop Topics</h2>
              </div>
            )}
          </div>

          <div className="w-1/3 bee-cursor-dark" onMouseEnter={() => setHov3(true)} onMouseLeave={() => setHov3(false)}>
            {hov3 ? (
              <div className="bg-green-300 text-black h-full p-5">
                <p className="text-xl">This is our first chance to practice a new kind of governance.</p>
                <p className="text-2xl text-blue-900 py-3">
                  <Link href="/voltaire-is-here/participate">Are you in?</Link>
                </p>
              </div>
            ) : (
              <div className="bg-green-600 h-full p-5">
                <h2 className="text-8xl text-offWhite">1</h2>
                <h2 className="text-4xl text-offWhite">First Chance</h2>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-6 my-10">
          {/* Title */}
          <div className="w-1/2">
            <motion.h3
              animate={{ transition: { ...gdsEase12 }, y: hov ? -21 : 0 }}
              className="relative mt-5 z-10  text-6xl "
            >
              Read About It
            </motion.h3>

            <div className="mt-3">
              <a href="https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md" target="_blank">
                <button className="gds-btn bg-green-600 text-offWhite hover:bg-green-400 hover:text-black  border-pink-900">
                  Read the Current Draft of CIP-1694
                </button>
              </a>
            </div>
            <div className="mt-3">
              <a href="https://roadmap.cardano.org/en/voltaire/" target="_blank">
                <button className="gds-btn bg-green-600 text-offWhite hover:bg-green-400 hover:text-black  border-pink-900">
                  Read about the Voltaire Era on the Cardano Roadmap
                </button>
              </a>
            </div>
          </div>

          {/* Title */}
          <div className="w-1/2">
            <motion.h3
              animate={{ transition: { ...gdsEase12 }, y: hov ? -21 : 0 }}
              className="relative mt-5 z-10 text-6xl "
            >
              Join a CIP-1694 Workshop
            </motion.h3>

            <div className="grid gap-4 mt-3">
              <a
                href="https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up"
                target="_blank"
              >
                <button className="gds-btn bg-red-600 hover:bg-red-400 text-black2-900  border-pink-900">
                  Workshop Announcement
                </button>
              </a>
              <a href="https://voltaire.essentialcardano.io/" target="_blank">
                <button className="gds-btn bg-blue-600 hover:bg-blue-400 text-offWhite hover:text-black  border-pink-900">
                  Interactive Map
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-row mx-auto gap-10">
          <div>
            <motion.h3
              animate={{ transition: { ...gdsEase12 }, y: hov ? -21 : 0 }}
              className="relative mt-5 z-10 text-6xl "
            >
              Gimbalabs Workshop
            </motion.h3>
            <p>Join us in Worcester, MA on June 8</p>

            <div className="mt-3">
              <a href="https://www.meetup.com/gimbalabs-worcester/events/293145623/" target="_blank">
                <button className="gds-btn bg-yellow-400 hover:bg-yellow-500 text-black2-900  border-pink-900">
                  Register
                </button>
              </a>
            </div>
          </div>
          <ContributeToThis />
        </div>
      </div>
    </div>
  );
}

const Square = ({ color, number, title, className }) => {
  const [localHov, setLocalHov] = useState(false);

  return (
    <div>
      <Link href={`/pbl/playground/${number}`}>
        <a>
          <div
            className={` grid  ${color} z-20 ${className}`}
            onMouseOver={() => setLocalHov(true)}
            onMouseLeave={() => setLocalHov(false)}
          >
            <div className="hidden md:flex flex flex-col justify-end p-3 overflow-hidden">
              <div className="flex  justify-between items-center">
                <motion.div
                  animate={{
                    transition: { ...gdsEase12 },
                    y: localHov ? 0 : 24,
                    opacity: localHov ? 1 : 0.2,
                    x: 32,
                  }}
                  className="text-4xl font-heading text-red-100 "
                >
                  {number}
                </motion.div>
                <div className="">
                  <motion.div
                    animate={{
                      transition: { ...gdsEase12 },
                      opacity: localHov ? 1 : 0,
                      x: localHov ? 0 : 32,
                    }}
                    className="  text-2xl   font-body   "
                  >
                    {title}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
