import { motion } from "framer-motion";
import React from "react";
import { useWindowSize } from "../../../lib/hooks";
import WithTransfer from "../WithTransfer";

export default function Testimony(props) {
  return (
    <WithTransfer {...props}>
      <div className={`gg-subtitle mb-6 text-purple-500`}>{props.quote}</div>
      <div className={`gg-subtitle text-purple-400`}>- {props.owner}</div>
    </WithTransfer>
  );
}
