import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import PlaygroundSvg from "../../lib/icons/PlaygroundSvg";
const gdsEase12 = {
  duration: 0.3,
  ease: "linear",
};

export default function TokenomicsSection({ colors, playgrounds }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="spacing-y spacing-x "
      onMouseOver={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div className="w-full flex flex-wrap lg:flex-no-wrap justify-between">
        {/* Blocks */}
        <div className="flex flex-col text-white ">
          <Square
            className={"w-12 h-8 sm:h-12 lg:h-13 xl:h-14  sm:w-14"}
            color={colors[0]}
            number={playgrounds[0].number}
            title={playgrounds[0].title}
          ></Square>
          <Square
            className={"w-12 h-8 sm:h-8  sm:w-14"}
            color={colors[1]}
            number={playgrounds[1].number}
            title={playgrounds[1].title}
          />
          <Square
            className={"w-12 h-8 sm:h-8  sm:w-14"}
            color={colors[2]}
            number={playgrounds[2].number}
            title={playgrounds[2].title}
          />
          <Square
            className={"w-12 h-8 sm:h-8  sm:w-14"}
            color={colors[3]}
            number={playgrounds[3].number}
            title={playgrounds[3].title}
          />
        </div>
        {/* Paragraphs */}
        <div className=" order-3 sm:order-2  w-full sm:max-w-12 mx-5 mt-5 sm:mt-auto">
          <p
            // animate={{ transition: { ...gdsEase12 }, y: hov ? -21 : 0 }}
            className=" relative  font-bold text-2xl "
          >
            Defining new models
          </p>
          <p className=" mt-5">
            Allocation 0 voting is happening now. Allocation 1 coming soon - stay tuned.
          </p>
        </div>
        {/* Title */}
        <div className="order-2 sm:order-3 mb-auto  ">
          <PlaygroundSvg className="w-8 my-6 " />
          <motion.h3
            animate={{ transition: { ...gdsEase12 }, y: hov ? -21 : 0 }}
            className="relative mt-5 z-10  w-full sm:max-w-12   text-6xl "
          >
            Gimbal Tokenomics PBL
          </motion.h3>

          <div className="mt-3">
            <Link href={`/pbl/tokenomics`}>
              <a>
                <button className="gds-btn bg-red-600 hover:bg-red-600 text-black2-900  border-pink-900">
                  /tpbl
                </button>
              </a>
            </Link>
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
