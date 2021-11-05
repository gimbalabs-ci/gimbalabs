import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
const gdsEase12 = {
  duration: 0.7,

  ease: [0.6, 0.01, -0.05, 0.9],
};

export default function SmallCard({
  id,
  colors,
  title,
  subtitle,
  textColor,
  link,
  Logo,
}) {
  const [hov, setHov] = useState(false);

  return (
    <Link href={link}>
      <a>
        <div
          role="button"
          onMouseOver={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          className={`w-13    lg:w-full group relative flex items-stretch mb-9 `}
        >
          <div className={`mt-9 `}>
            {Logo && (
              <motion.div
                animate={{ transition: { ...gdsEase12 }, x: hov ? 9 : 0 }}
                className="z-50 w-9 h-9 absolute top-0 left-0 flex flex-col justify-center items-center"
              >
                <Logo />
              </motion.div>
            )}
            <motion.div
              animate={{ transition: { ...gdsEase12 }, x: hov ? -3 : 0 }}
              className={` w-9 h-9 ${colors[3]} `}
            ></motion.div>
            <motion.div
              animate={{ transition: { ...gdsEase12 }, x: hov ? 5 : 0 }}
              className={`  w-9 h-9 ${colors[2]} -mt-10`}
            ></motion.div>
            <motion.div
              animate={{ transition: { ...gdsEase12 }, x: hov ? -8 : 0 }}
              className={` w-9 h-9  ${colors[1]} -mt-10`}
            ></motion.div>
            <motion.div
              animate={{ transition: { ...gdsEase12 }, x: hov ? 12 : 0 }}
              className={` w-9 h-9 ${colors[0]} -mt-10`}
            ></motion.div>
          </div>
          <div className={`${textColor} h-full mx-5 flex flex-col `}>
            <div className="flex-1">
              <motion.div
                animate={{
                  transition: { ...gdsEase12, delay: 0.03 },
                  y: hov ? 48 : 0,
                }}
                className={`text-lg mb-1`}
              >
                {subtitle}
              </motion.div>
              <motion.div
                animate={{
                  transition: { ...gdsEase12 },
                  y: hov ? 48 : 0,
                }}
                className={`text-4xl font-heading`}
              >
                {title}
              </motion.div>
            </div>
            {/* <div className="ml-auto mt-7 opacity-0 group-hover:opacity-100">
          <button className={`gds-btn bg-blue-600 text-blue-100 `}>
            Jump in
          </button>
        </div> */}
          </div>
        </div>
      </a>
    </Link>
  );
}
