import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useWindowSize } from "../../lib/hooks";

export default function WithTransfer(props) {
  const { width, height, slug, layoutId, className } = props;

  const transferSize = { width, height };
  const gdsEase12 = {
    duration: 0.7,
    delay: 0.1,
    ease: [0.6, 0.01, -0.05, 0.9],
  };
  const wi = useWindowSize();
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
      transition={{ ...gdsEase12, delay: 0.2 }}
      style={{ height: "100%", width: "100%" }}
      className={`overflow-hidden relative bg-offWhite  grid ${className} `}
    >
      {props.children}
    </motion.div>
  );
}
