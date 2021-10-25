import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
const gdsEase12 = {
  duration: 0.7,
  ease: [0.6, 0.01, -0.05, 0.9],
};

export default function PlaygroundSection({ colors, playgrounds }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="spacing-y"
      onMouseOver={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div className="w-full flex flex-wrap lg:flex-no-wrap justify-between">
        {/* Blocks */}
        <div className="flex flex-col ">
          <Square
            className={"w-12 h-8 sm:h-12 lg:h-13 xl:h-14  sm:w-14"}
            color={colors[0]}
            number={playgrounds[0].number}
            title={playgrounds[0].title}
          />
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
        <div className=" order-3 sm:order-2 text-blue-100 w-full sm:max-w-12 mx-5 mt-5 sm:mt-auto">
          <p
            // animate={{ transition: { ...gdsEase12 }, y: hov ? -21 : 0 }}
            className="text-white relative  font-bold text-2xl "
          >
            Where ideas get tested
          </p>
          <p className="text-white mt-5">
            This can describe the this section in some detail and you could take
            up a medium amount of space.
          </p>
        </div>
        {/* Title */}
        <div className="order-2 sm:order-3 mb-auto my-auto ">
          <motion.h3
            animate={{ transition: { ...gdsEase12 }, y: hov ? -21 : 0 }}
            className="relative mt-5 z-10  w-full sm:max-w-12   text-6xl text-pink-100"
          >
            Play ground
          </motion.h3>

          <div className="mt-3">
            <Link href={`/pbl/ppbl`}>
              <a>
                <button className="gds-btn bg-pink-100 hover:bg-pink-300 text-black2-900  border-pink-900">
                  /ppbl
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
              className="text-4xl font-heading text-pink-900"
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
                className="  text-2xl text-pink-900  font-body   "
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
