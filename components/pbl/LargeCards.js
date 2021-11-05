import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import CardanoLogo from "../../lib/icons/CardanoLogo";
const gdsEase12 = {
  duration: 0.7,

  ease: [0.6, 0.01, -0.05, 0.9],
};

export default function LargeCards({ colors, list }) {
  return (
    <div className="relative">
      <div className="   relative flex  justify-between">
        <div className=" h-12 sm:h-14 top-0 left-0 z-0 ">
          <div>
            <div
              role="button"
              className={` relative overflow-hidden text-blue-100 flex flex-nowrap relative   group relative flex items-stretch mb-10 `}
            >
              <Square
                className={"w-8 sm:w-10 lg:w-12 xl:w-14 h-12 sm:h-14 z-30 "}
                color={colors[0]}
                number={list[0].number}
                title={list[0].title}
              >
                <CardanoLogo className="w-8 text-blue-100 mb-3 ml-1" />
              </Square>
              <Square
                className={"w-8 sm:w-10 h-12 sm:h-14"}
                color={colors[1]}
                number={list[1].number}
                title={list[1].title}
              />
              <Square
                className={"w-8 sm:w-10 h-12 sm:h-14"}
                color={colors[2]}
                number={list[2].number}
                title={list[2].title}
              />
              <Square
                className={"w-8 sm:w-10 h-12 sm:h-14"}
                color={colors[3]}
                number={list[3].number}
                title={list[3].title}
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative z-10 ml-auto  p-7 max-w-12  ">
          <p>
            This this can describe the starter kit in some detail and you could
            take up a medium amount of space.
          </p>
        </div>
      </div>
    </div>
  );
}

const Square = ({ color, number, title, className, children }) => {
  const [localHov, setLocalHov] = useState(false);

  return (
    <div>
      <Link href={`/pbl/csk/csk${number}`}>
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
                  {children && <div className="">{children}</div>}
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
