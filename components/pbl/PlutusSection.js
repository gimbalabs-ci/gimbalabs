import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight } from "react-feather";
import PlutusSvg from "../../lib/icons/PlutusSvg";
const gdsEase12 = {
  duration: 0.7,
  ease: "easeInOut",
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
        <Link href={`/pbl/plutus`}>
          <a>
            <div className="order-3 lg:order-1  ">
              <PlutusSvg className=" w-8 mb-6  " />
              <motion.h3
                animate={{ transition: { ...gdsEase12 }, y: hov ? -21 : 0 }}
                className="relative z-10 mt-5 w-full sm:max-w-12  text-6xl "
              >
                Plutus PBL
              </motion.h3>
              <div className="relative z-10  w-full sm:max-w-12 font-body text-2xl ">
                Collaborate with our team to learn full-stack Plutus development.
              </div>
              <div className="my-6 ">
                <button className="w-12 lg:w-full flex items-center  gds-btn text-orange-100 border border-orange-100 hover:bg-black2-800  ">
                  Start learning Plutus
                  <ArrowRight className="ml-auto lg:ml-3" />
                </button>
              </div>
            </div>
          </a>
        </Link>
        {/* Paragraphs */}
        <div className="order-3 sm:order-2  w-full sm:max-w-12 mx-5 my-5 mb-0 ">
          <p className=" mb-5">
            Explore the <a href="https://gitlab.com/gimbalabs/ppbl-course-01" className="text-orange-400 hover:text-orange-200" target="_blank">public PPBL repos on GitLab</a>.
          </p>
          <p className=" mb-5">
            Join for Live Coding Sessions every Wednesday at 1600 UTC and Thursday at 1500 UTC. Details on <a href="https://discord.gg/XTvJBj7kzq" className="text-orange-400 hover:text-orange-200" target="_blank">Gimbalabs Discord</a>.
          </p>
        </div>
        {/* Blocks */}
        <div className=" order-2 sm:order-1 lg:order-3  flex flex-col ">
          <Square
            className={
              "text-black2-900 w-12 h-8 sm:h-12 lg:h-13 xl:h-14  sm:w-14"
            }
            color={colors[0]}
            number={ppbls[0].number}
            title={ppbls[0].title}
          />
          <Square
            className={"text-white w-12 h-8 sm:h-8  sm:w-14"}
            color={colors[1]}
            number={ppbls[1].number}
            title={ppbls[1].title}
          />
          <Square
            className={"text-white w-12 h-8 sm:h-8  sm:w-14"}
            color={colors[2]}
            number={ppbls[2].number}
            title={ppbls[2].title}
          />
          <Square
            className={"text-white w-12 h-8 sm:h-8  sm:w-14"}
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
      <Link href={`/pbl/plutus/${number}`}>
        <a>
          <div
            className={` grid  ${color} z-20 ${className}`}
            onMouseOver={() => setLocalHov(true)}
            onMouseLeave={() => setLocalHov(false)}
          >
            <div className="hidden md:flex flex flex-col justify-end p-3 overflow-hidden">
              <div className="flex  justify-between items-center">
                <motion.div
                  key={`${title}--sq_${number}`}
                  animate={{
                    transition: { ...gdsEase12 },
                    y: localHov ? 0 : 24,
                    opacity: localHov ? 1 : 0.2,
                    x: 32,
                  }}
                  className="text-4xl font-heading text-orange-100"
                >
                  {number}
                </motion.div>
                <div className="">
                  <motion.div
                    key={`${title}--sq-2_${number}`}
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
