import React, { useCallback, useEffect, useState } from "react";
import { getCskData } from "../../../lib/csk";
import useAPIById from "../../../lib/hooks/useAPIById";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ease1,
  stagger1Child,
  stagger1ChildLeft,
  stagger1ChildRight,
  stagger1Parent,
} from "../../../lib/motion/motion";
import Link from "next/link";

export default function RecircCard({ id }) {
  // Grab Data
  const data = useAPIById(id);

  // Is hovered?
  const [active, setActive] = useState(false);
  // Card text orientation. Default set as null to prevent initial rendering from wrong side
  const [orientation, setOrientation] = useState({
    direction: null,
    ani: stagger1ChildLeft,
  });

  useEffect(() => {
    const options = ["left", "right"];
    //   Get Random direction, either 'left' or 'right'
    const myOrientation = options[Math.floor(Math.random() * (2 - 0) + 0)];

    // Set state according to random direction
    if (myOrientation === "left") {
      setOrientation({ direction: "left", ani: stagger1ChildLeft });
    } else if (myOrientation === "right") {
      setOrientation({ direction: "right", ani: stagger1ChildRight });
    }
    // Only run once, on Mount
  }, []);

  //   Check if data exists from markdown files, if not set defaults
  const image = data?.props?.recirc?.image || null;
  const title = data?.props?.title || null;
  const date = data?.props?.date || null;
  const bgColor = data?.props?.recirc?.color || "bg-black";
  const path = data?.props?.path || "/pbl";
  const about = data?.props?.about || null;

  //   Change animate variant when group is hovered
  const animate = {
    initial: "initial",
    animate: active ? "animate" : "initial",
  };

  return (
    <Link href={path} alt={id}>
      <a>
        <div
          role="button"
          onMouseOver={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          className="rounded-md shadow-md overflow-hidden my-3  sm:mx-2 sm:my-2 text-white relative h-13   sm:w-13 group"
        >
          {/* Text Group */}
          <div className="p-5 z-20 absolute inset-0 flex flex-col justify-between">
            {orientation.direction && (
              <div
                className={`relative flex flex-col overflow-hidden ${
                  orientation.direction === "left"
                    ? "order-1 items-end"
                    : "order-2 items-start"
                }`}
              >
                <motion.ul {...animate} variants={stagger1Parent}>
                  <motion.li variants={orientation.ani} className={``}>
                    {date}
                  </motion.li>
                  <motion.li variants={orientation.ani} className={``}>
                    {about}
                  </motion.li>
                </motion.ul>
              </div>
            )}
            <div
              className={`${
                orientation.direction === "left" ? "order-2" : "order-1"
              }  relative z-20 text-2xl font-heading`}
            >
              {title}
            </div>
          </div>
          {/* Colored Background */}
          <div
            className={`${bgColor} absolute inset-0 z-10  opacity-0 group-hover:opacity-90`}
          />
          {/* Black background to provide contrast for Text when not active */}
          <div className="absolute inset-0 z-10 bg-black opacity-20 group-hover:opacity-0" />
          {image && (
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
              src={image}
            />
          )}
        </div>
      </a>
    </Link>
  );
}
