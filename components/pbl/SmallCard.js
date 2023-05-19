import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
const gdsEase12 = {
  duration: 0.3,

  ease: "linear",
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
    <div>
      <Link href={link}>
        <a>
          <div
            role="button"
            onMouseOver={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            className={` group relative flex lg:justify-center  `}
          >
            <div className={` relative  `}>
              <motion.div
                key={`${title}-1`}
                animate={{ transition: { ...gdsEase12 }, x: hov ? -3 : 0 }}
                className={`relative z-50 flex flex-col justify-center items-center w-9 h-9 ${colors[0]} `}
              >
                {Logo && <Logo />}
              </motion.div>
              <motion.div
                key={`${title}-12`}
                animate={{ transition: { ...gdsEase12 }, x: hov ? 5 : 0 }}
                className={`mt-4 z-40  w-9 h-9 ${colors[1]} absolute top-0 left-0`}
              ></motion.div>
              <motion.div
                key={`${title}-13`}
                animate={{ transition: { ...gdsEase12 }, x: hov ? -8 : 0 }}
                className={`mt-6 z-30 w-9 h-9  ${colors[2]} absolute top-0 left-0`}
              ></motion.div>
              <motion.div
                key={`${title}-14`}
                animate={{ transition: { ...gdsEase12 }, x: hov ? 12 : 0 }}
                className={`mt-7 z-20 w-9 h-9 ${colors[3]} absolute top-0 left-0`}
              ></motion.div>
            </div>
            <div
              className={`${textColor} mb-9 lg:mb-0 relative  mx-5  flex flex-col `}
            >
              <div className="flex-1">
                <motion.div
                  key={`${title}-16`}
                  animate={{
                    transition: { ...gdsEase12 },
                    y: hov ? 24 : 0,
                  }}
                  className={`text-2xl md:text-4xl font-heading`}
                >
                  {title}
                </motion.div>
                <motion.div
                  key={`${title}-15`}
                  animate={{
                    transition: { ...gdsEase12, delay: 0.03 },
                    y: hov ? 24 : 0,
                  }}
                  className={`md:text-lg md:mb-1`}
                >
                  {subtitle}
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
    </div>
  );
}
