import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
const gdsEase12 = {
  duration: 0.7,
  ease: [0.6, 0.01, -0.05, 0.9],
};

export default function PlutusSection({ colors, ppbls }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="spacing-y spacing-x bg-black2-900 text-offWhite"
      onMouseOver={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div className="w-full flex flex-wrap lg:flex-no-wrap justify-between">
        {/* Title */}
        <div className="order-3 lg:order-1 my-auto ">
          <motion.h3
            animate={{ transition: { ...gdsEase12 }, y: hov ? -21 : 0 }}
            className="relative z-10 mt-5 w-full sm:max-w-12  text-6xl "
          >
            Plutus in action
          </motion.h3>
          <div className="relative z-10  w-full sm:max-w-12 font-body text-2xl ">
            Learn plutus through real life projects
          </div>
          <div className="mt-7">
            <Link href={`/pbl/plutus`}>
              <a>
                <button className="text-pink-900 gds-btn bg-pink-100 hover:bg-pink-400   border-pink-900">
                  /plutus
                </button>
              </a>
            </Link>
          </div>
        </div>
        {/* Paragraphs */}
        <div className="order-3 sm:order-2  w-full sm:max-w-12 mx-5 my-5">
          <p className=" mb-5">
            This can describe the this section in some detail and you could take
            up a medium amount of space.
          </p>
          <p className=" ">
            This can describe the this section in some detail and you could take
            up a medium amount of space.
          </p>
        </div>
        {/* Blocks */}
        <div className="text-pink-900 order-2 sm:order-1 lg:order-3  flex flex-col ">
          <Square
            className={"w-12 h-8 sm:h-12 lg:h-13 xl:h-14  sm:w-14"}
            color={colors[0]}
            number={ppbls[0].number}
            title={ppbls[0].title}
          />
          <Square
            className={"w-12 h-8 sm:h-8  sm:w-14"}
            color={colors[1]}
            number={ppbls[1].number}
            title={ppbls[1].title}
          />
          <Square
            className={"w-12 h-8 sm:h-8  sm:w-14"}
            color={colors[2]}
            number={ppbls[2].number}
            title={ppbls[2].title}
          />
          <Square
            className={"w-12 h-8 sm:h-8  sm:w-14"}
            color={colors[3]}
            number={ppbls[3].number}
            title={ppbls[3].title}
          />
        </div>
      </div>
    </div>
  );
}

const Square = ({ color, number, title, className }) => {
  const [localHov, setLocalHov] = useState(false);

  return (
    <div>
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
              className="text-4xl font-heading"
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
    </div>
  );
};
