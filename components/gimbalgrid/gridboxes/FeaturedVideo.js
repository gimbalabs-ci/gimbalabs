import { motion } from "framer-motion";
import React, { useState } from "react";
import { Bamboo, DandelionSeed } from "../../../lib/icons/svgs";
import { gdsEase12 } from "../../../lib/motion/motion";
import WithTransfer from "../WithTransfer";
import videoupdates from "../../../data/videoupdates.json";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

export default function FeaturedVideo(props) {
  const vid = videoupdates.weekly[0].youtubeId;
  const caption = videoupdates.weekly[0].description;
  const [hov, setHov] = useState(false);
  const ani = {
    transition: gdsEase12,
    rotate: !hov ? 0 : 4,
  };
  const ani2 = {
    transition: gdsEase12,
    y: !hov ? 0 : -3,
  };
  return (
    <div>
      <LiteYouTubeEmbed id={vid} />
      <p className="text-right pr-3">{caption}</p>
    </div>
  );
}
