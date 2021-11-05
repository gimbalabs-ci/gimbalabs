import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../Layouts/Layout";
import Esc from "../../lib/icons/Esc";
import { animate, GdsPageTransition } from "../../lib/motion/motion";
import { gridData } from "./GridData";
import InvisibleController from "./InvisibleController";

export default function ExpandedBox({ slug }) {
  const router = useRouter();
  const index = parseInt(slug);

  // Set defaults.
  let transitionColor = "bg-offWhite";
  let GridBoxComponent = null;
  let FullPageComponent = null;
  let fullPageProps = null;

  // Check if the object is formatted properly, assign data from component list.
  if (gridData[index]) {
    transitionColor = gridData[index].transitionColor;
    GridBoxComponent = gridData[index].gridBoxComponent;
    FullPageComponent = gridData[index].fullPageComponent;
    fullPageProps = gridData[index].fullPageProps;
  }

  return (
    <div
      style={{
        zIndex: 510,
      }}
      className="fixed inset-0 bg-black2-900  "
    >
      <div className="h-full w-full overflow-y-auto">
        {/* Transition bg */}
        <motion.div
          {...animate}
          variants={GdsPageTransition}
          layoutId={`grid-switch-${slug}`}
          className={`  absolute inset-0 z-0   ${transitionColor} `}
        ></motion.div>
        <div className=" z-10">
          <div className={` flex flex-col w-full  `}>
            {/* Full page  */}
            {/* Full page  */}
            {/* Full page  */}
            <motion.div
              key={router.asPath + "33333"}
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.5,

                  ease: [0.6, 0.01, -0.05, 0.9],
                },
              }}
              layout
              className=" relative"
            >
              {FullPageComponent && (
                <Layout>
                  <FullPageComponent slug={slug} {...fullPageProps} />
                </Layout>
              )}
            </motion.div>
          </div>

          <div className="absolute top-0 right-2">
            <Link href={`/gimbalgrid?id=${slug}`}>
              <div
                role="button"
                className={`${transitionColor} ${
                  transitionColor === "bg-black2-900"
                    ? "text-white"
                    : "text-black2-900"
                } relative z-50 text-center  py-1`}
              >
                <Esc />
              </div>
            </Link>
            {/* Used to click the ESC keyboard key on desktop */}
            <InvisibleController link={`/gimbalgrid?id=${slug}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
