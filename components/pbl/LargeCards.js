import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const gdsEase12 = {
  duration: 0.7,

  ease: [0.6, 0.01, -0.05, 0.9],
};

export default function LargeCards({ colors, list }) {
  const [hov, setHov] = useState(false);

  return (
    <div className="relative">
      <div
        onMouseOver={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className=" h-15 p-5 flex-1 relative flex flex-col justify-end"
      >
        <div className="hidden lg:block relative z-10 ml-auto  p-7 max-w-12  text-white ">
          <p>
            This can describe the starter kit in some detail and you could take
            up a medium amount of space.
          </p>
        </div>
        <motion.h3
          animate={{ transition: { ...gdsEase12 }, y: hov ? -21 : 0 }}
          className="relative z-10  max-w-13  text-6xl text-blue-100"
        >
          Cardano Starter Kits
        </motion.h3>
        <div className="absolute  top-0 left-0 z-0 ">
          <div>
            <div
              role="button"
              className={`text-blue-100 flex flex-nowrap relative   group relative flex items-stretch mb-10 `}
            >
              <Square
                className={"w-8 sm:w-10 lg:w-12 xl:w-14 h-14 z-30 "}
                color={colors[0]}
                number={list[0].number}
                title={list[0].title}
              />
              <Square
                className={"w-8 sm:w-10 h-14"}
                color={colors[1]}
                number={list[1].number}
                title={list[1].title}
              />
              <Square
                className={"w-8 sm:w-10 h-14"}
                color={colors[2]}
                number={list[2].number}
                title={list[2].title}
              />
              <Square
                className={"w-8 sm:w-10 h-14"}
                color={colors[3]}
                number={list[3].number}
                title={list[3].title}
              />
            </div>
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
      <Link href="/pbl">
        <a>
          <div>
            <motion.div
              animate={{
                transition: { ...gdsEase12, duration: 0.3 },

                y: localHov ? -5 : 0,
              }}
              layout
              className={` grid  ${color} z-20 ${className}`}
              onMouseOver={() => setLocalHov(true)}
              onMouseLeave={() => setLocalHov(false)}
            >
              <div className="hidden md:flex flex flex-col justify-end p-3 overflow-hidden">
                <div className="flex ">
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
                  <div className="inline-block transform -rotate-90 origin-center-2">
                    <motion.div
                      animate={{
                        transition: { ...gdsEase12 },
                        opacity: localHov ? 1 : 0,
                        y: localHov ? 32 : 64,
                      }}
                      className=" ml-6 text-2xl text-blue-200  whitespace-nowrap font-body   "
                    >
                      {title}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </a>
      </Link>
    </div>
  );
};
