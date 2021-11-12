import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { textColors } from "../../lib/colors/color";

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
      {data.map((d) => (
        <Block
          baseRoute={baseRoute}
          color={color}
          key={d.id + "liblock"}
          d={d}
        />
      ))}
    </motion.ul>
  );
}

const blueColors = [
  "border-blue-600",
  "border-blue-700",
  "border-blue-800",
  "border-blue-900",
];
const redColors = [
  "border-red-600",
  "border-red-700",
  "border-red-800",
  "border-red-900",
];
const pinkColors = [
  "border-pink-100",
  "border-pink-200",
  "border-pink-300",
  "border-pink-400",
];
const orangeColors = [
  "border-orange-100",
  "border-orange-200",
  "border-orange-300",
  "border-orange-400",
];
const greenColors = [
  "border-green-500",
  "border-green-800",
  "border-green-900",
  "border-green-400",
];

const borderOptions = {
  BLUE: blueColors,
  RED: redColors,
  PINK: pinkColors,
  ORANGE: orangeColors,
  GREEN: greenColors,
};
const Block = ({ d, color, baseRoute }) => {
  const { id, number, title, about } = d;
  const [state, setState] = useState({
    myText: "",
    myColor: "",
  });

  useEffect(() => {
    const myText = textColors[color][900];
    const colors = borderOptions[color];
    const random = Math.floor(Math.random() * (4 - 0) + 0);
    const myColor = colors[random];
    console.log(myText);
    setState({
      myColor,
      myText,
    });
  }, []);
  return (
    <motion.li
      className="w-full h-full grid "
      variants={stagger1ChildLeft}
      key={id}
    >
      <Link href={`${baseRoute}${id}`}>
        <a>
          <div
            className={`border-4  ${state.myColor} ${state.myText}  shadow-md  sm:max-w-14 h-12  flex justify-center p-5 items-center `}
          >
            <div className={` mr-auto mb-auto text-4xl font-heading `}>
              {number ? number : ""}
            </div>
            <div className="mt-auto text-2xl ml-auto text-right  ">{title}</div>
          </div>
        </a>
      </Link>
    </motion.li>
  );
};
