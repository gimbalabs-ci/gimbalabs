import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
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

  const hiddenMask = `repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 100px, rgba(0,0,0,1) 100px, rgba(0,0,0,1) 100px)`;
  const visibleMask = `repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 100px)`;

  return (
    <div className="mx-auto py-7 spacing-x border-y-4 border-black">
      <div className="text-2xl text-blue-900 font-bold text-center mb-5 hover:text-green-600">
        <a href="https://miro.com/app/board/uXjVMBLA8ws=/?share_link_id=297253823050">

        CIP-1694 Workshop Miro Board: Worcester 2023-06-08
        </a>
        </div>
      <div className="flex flex-col gap-6 text-center">
        <div className="flex flex-col md:flex-row gap-5 w-full mx-auto">
          <div
            className="bg-blue-900 w-full md:w-1/2 bee-cursor content-center"
            onMouseEnter={() => setHov1(true)}
            onMouseLeave={() => setHov1(false)}
          >
            {hov1 ? (
              <AnimatePresence>
                <motion.div
                  initial={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
                  animate={{ WebkitMaskImage: visibleMask, maskImage: visibleMask }}
                  exit={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-blue-900 h-100 px-5 py-8 z-20 font-bold">
                    <p className="text-2xl text-offWhite">CIP 1694 proposes 7 new on-chain actions. </p>
                    <p className="text-2xl text-yellow-400 py-5">
                      <Link href="/voltaire-is-here/why">What are they?</Link>
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <motion.div
                initial={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
                animate={{ WebkitMaskImage: visibleMask, maskImage: visibleMask }}
                exit={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-blue-900 h-full px-5 py-8">
                  <h2 className="text-[150px] text-offWhite">7</h2>
                  <h2 className="text-2xl text-offWhite">New Goverance Actions</h2>
                </div>
              </motion.div>
            )}
          </div>

          <div
            className="w-full md:w-1/2 bg-orange-900 bee-cursor text-offWhite"
            onMouseEnter={() => setHov2(true)}
            onMouseLeave={() => setHov2(false)}
          >
            {hov2 ? (
              <AnimatePresence>
                <motion.div
                  initial={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
                  animate={{ WebkitMaskImage: visibleMask, maskImage: visibleMask }}
                  exit={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-orange-900 h-full px-5 py-8 font-bold">
                    <p className="text-2xl mx-5">At each CIP-1694 Workshop, we will discuss 7 topics.</p>
                    <p className="text-2xl text-blue-300 py-5">
                      <Link href="/voltaire-is-here/prepare">What are they?</Link>
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <motion.div
                initial={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
                animate={{ WebkitMaskImage: visibleMask, maskImage: visibleMask }}
                exit={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
                transition={{ duration: 0.7 }}
              >
                <div className="bg-orange-900 h-full px-5 py-8">
                  <h2 className="text-[150px]">7</h2>
                  <h2 className="text-2xl">Workshop Topics</h2>
                </div>
              </motion.div>
            )}
          </div>

          <div
            className="w-full md:w-1/2 bee-cursor bg-green-600 text-offWhite"
            onMouseEnter={() => setHov3(true)}
            onMouseLeave={() => setHov3(false)}
          >
            {hov3 ? (
              <AnimatePresence>
                <motion.div
                  initial={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
                  animate={{ WebkitMaskImage: visibleMask, maskImage: visibleMask }}
                  exit={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="bg-green-600 h-full px-5 py-8 font-bold">
                    <p className="text-2xl mx-5">This is how the global Cardano Community can start practicing a new kind of governance, and set an example for the world to follow.</p>
                    <p className="text-2xl text-blue-300 py-5">
                      <Link href="/voltaire-is-here/participate">Are you in?</Link>
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <motion.div
                initial={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
                animate={{ WebkitMaskImage: visibleMask, maskImage: visibleMask }}
                exit={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
                transition={{ duration: 0.7 }}
              >
                <div className="bg-green-600 h-full px-5 py-8">
                  <h2 className="text-[150px]">1</h2>
                  <h2 className="text-2xl">First Chance</h2>
                </div>
              </motion.div>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 my-2">
          {/* Title */}
          <div className="w-full md:w-1/2 border-2 border-black p-5">
            <h3 className="relative mb-5 text-2xl md:text-6xl ">Read About It:</h3>

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
          <div className="w-full md:w-1/2 border-2 border-black p-5">
            <h3 className="relative mb-5 text-2xl md:text-6xl ">Join a CIP-1694 Workshop:</h3>

            <div className="mt-3">
              <a
                href="https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up"
                target="_blank"
              >
                <button className="gds-btn bg-orange-900 text-offWhite hover:bg-red-400 hover:text-black2-900  border-pink-900">
                  Workshop Announcement from IOG
                </button>
              </a>
            </div>
            <div className="mt-3">
              <a href="https://voltaire.essentialcardano.io/" target="_blank">
                <button className="gds-btn bg-blue-600 hover:bg-blue-400 text-offWhite hover:text-black border-pink-900">
                  Interactive Map of Workshop Locations
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Title */}
          <div className="w-full md:w-2/3 mx-auto bg-blue-900 py-5 text-offWhite">
            <h3 className="relative mt-5 z-10 text-2xl md:text-6xl ">Gimbalabs is hosting a CIP-1694 Workshop</h3>
            <p className="text-lg md:text-2xl py-5">Join us in Worcester, MA on June 8</p>

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
