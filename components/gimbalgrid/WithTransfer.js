import { motion } from "framer-motion";
import React from "react";
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
  return (
    <motion.div
      onMouseOver={() => props.onMouseOver && props.onMouseOver(true)}
      onMouseLeave={() => props.onMouseLeave && props.onMouseLeave(false)}
      layoutId={layoutId}
      transition={{ ...gdsEase12, delay: 0.2 }}
      style={wi.width > 768 ? transferSize : { height: "100%", width: "100%" }}
      className={`bg-offWhite  grid ${className} `}
    >
      {props.children}
    </motion.div>
  );
}
