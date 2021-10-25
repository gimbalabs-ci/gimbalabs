import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { bgOptions, textColors } from "../../lib/colors/color";

export const ease1 = { ease: [0.6, 0.01, -0.05, 0.8] };
export const stagger1Parent = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
export const stagger1ChildLeft = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: ease1 },
  exit: {
    opacity: 0,
  },
};
export const animate = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
};

export default function ListAllBlocks({
  baseRoute = "/pbl/csk/",
  data,
  color,
}) {
  if (!data || data?.length === 0) {
    return null;
  }

  return (
    <motion.ul
      {...animate}
      variants={stagger1Parent}
      className="grid md:grid-cols-2 xl:grid-cols-3  gap-5"
    >
      {data.map(({ id, number, title }) => {
        const myText = textColors[color];
        const colors = bgOptions[color];
        const random = Math.floor(Math.random() * (4 - 0) + 0);
        const myColor = colors[random];
        return (
          <motion.li
            className="w-full h-full grid "
            variants={stagger1ChildLeft}
            key={id}
          >
            <Link href={`${baseRoute}${id}`}>
              <a>
                <div
                  className={`${myColor} ${myText[100]} shadow-md rounded-md sm:max-w-14 h-12 sm:h-13 flex justify-center p-5 items-center `}
                >
                  <div className={` mr-auto mb-auto text-4xl font-heading `}>
                    {number}
                  </div>
                  <div className="mt-auto text-2xl ml-auto text-right  ">
                    {title}
                  </div>
                </div>
              </a>
            </Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
