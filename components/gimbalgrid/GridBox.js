import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Tap from "../../lib/icons/Tap";
import { animate, gdsEase12, GdsPageTransition } from "../../lib/motion/motion";
import { gridData } from "./GridData";

export default function GridBox({
  shadeStyles,
  showShades,
  id,
  handleGridBoxClick,
  focusBox,
  slug,
}) {
  const index = id;

  // Set defaults.
  let GridBoxComponent = null;
  let transitionColor = "bg-offWhite";
  let gridBoxStyle = null;
  let gridBoxProps = null;
  let disable = false;

  // Check if the object is formatted properly, assign data from component list.
  if (gridData[index]) {
    GridBoxComponent = gridData[index].gridBoxComponent;
    transitionColor = gridData[index].transitionColor;
    gridBoxStyle = gridData[index].gridBoxStyle;
    gridBoxProps = gridData[index].gridBoxProps;
    disable = gridData[index].disable;
  }

  const persistScrollPosition = (id) => {
    if (!disable) {
      showShades();
      handleGridBoxClick(id);
    }
  };

  return (
    <motion.div
      id={`${id}`}
      className={`${gridBoxStyle} group  min-h-8 relative  overflow-hidden  ${
        disable ? "cursor-default " : " "
      }  `}
      role="button"
      onClick={() => {
        persistScrollPosition(id);
      }}
      {...animate}
      variants={GdsPageTransition}
    >
      {/* Hover notice to click */}
      {!disable && (
        <div className="absolute top-0 right-2 text-black2-900 z-10 w-5 opacity-0 group-hover:opacity-100">
          <Tap />
        </div>
      )}
      <div className="relative w-full h-full  z-0 ">
        {/* bg */}
        <motion.div
          className={`absolute inset-0 z-10  ${transitionColor} `}
          layoutId={`grid-switch-${id}`}
        ></motion.div>

        {/* Grid Box Component */}
        <div className="bee-cursor-dark relative z-20 w-full  h-full">
          {GridBoxComponent && (
            <GridBoxComponent {...gridBoxProps} slug={slug} />
          )}
        </div>
      </div>

      {/* Sliding shade */}
      <AnimatePresence>
        {id !== focusBox && (
          <motion.div
            key={`grid-box-filler-${id}`}
            onClick={() => {
              persistScrollPosition(id);
            }}
            animate={{
              ...shadeStyles,
              transition: {
                ...gdsEase12,
                delay: `${id / 20}`,
              },
            }}
            className="absolute inset-0 z-50  bg-offWhite "
          ></motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
