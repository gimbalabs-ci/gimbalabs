import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useWindowSize } from "../../lib/hooks";

export default function WithTransfer(props) {
  const { slug, layoutId, className } = props;

  const gdsEase12 = {
    duration: 1.3,

    ease: "easeInOut",
  };
  // const mounts = useRef(0);
  // useEffect(() => {
  //   mounts.current += 1;
  // }, []);

  // console.log(wi.width > 768);
  return (
    <motion.div
      onMouseOver={() => props.onMouseOver && props.onMouseOver(true)}
      onMouseLeave={() => props.onMouseLeave && props.onMouseLeave(false)}
      // layoutId={layoutId}
      transition={{ ...gdsEase12 }}
      style={{ height: "100%", width: "100%" }}
      className={`overflow-hidden relative bg-offWhite  grid ${className} `}
    >
      {props.children}
    </motion.div>
  );
}
