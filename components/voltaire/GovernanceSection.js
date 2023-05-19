import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import PlaygroundSvg from "../../lib/icons/PlaygroundSvg";
const gdsEase12 = {
  duration: 0.3,
  ease: "linear",
};

export default function GovernanceSection({ colors }) {
  const [hov, setHov] = useState(false);

  return (
    <div className="spacing-y spacing-x border-b-2 border-black" onMouseOver={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div className="w-full flex flex-wrap lg:flex-no-wrap justify-between">
        {/* Title */}
        <div className="order-2 sm:order-3 mb-auto  ">
          <motion.h3
            animate={{ transition: { ...gdsEase12 }, y: hov ? -21 : 0 }}
            className="relative mt-5 z-10  w-full sm:max-w-12   text-6xl "
          >
            Read CIP-1694
          </motion.h3>

          <div className="mt-3">
            <a href="https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md" target="_blank">
              <button className="gds-btn bg-green-600 text-offWhite hover:bg-green-400 hover:text-black  border-pink-900">
                Read the Current Draft
              </button>
            </a>
          </div>
        </div>

        {/* Title */}
        <div className="order-2 sm:order-3 mb-auto  ">
          <motion.h3
            animate={{ transition: { ...gdsEase12 }, y: hov ? -21 : 0 }}
            className="relative mt-5 z-10  w-full sm:max-w-12   text-6xl "
          >
            Join a CIP-1694 Workshop
          </motion.h3>

          <div className="mt-3">
            <a href="https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up" target="_blank">
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

        {/* Title */}
        <div className="order-2 sm:order-3 mb-auto  ">
          <motion.h3
            animate={{ transition: { ...gdsEase12 }, y: hov ? -21 : 0 }}
            className="relative mt-5 z-10  w-full sm:max-w-12   text-6xl "
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
