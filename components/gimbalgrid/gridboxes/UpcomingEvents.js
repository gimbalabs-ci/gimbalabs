import { motion } from "framer-motion";
import React, { useState } from "react";
import { Bamboo, DandelionSeed } from "../../../lib/icons/svgs";
import { gdsEase12 } from "../../../lib/motion/motion";
import WithTransfer from "../WithTransfer";
import videoupdates from "../../../data/videoupdates.json";
import events from "../../../data/events.json";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

export default function UpcomingEvents(props) {
  const data = events.upcoming;
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
      <h2 className="px-2 pt-2 text-2xl">Upcoming Events</h2>
      <p className="px-2 pb-2">View Details</p>
      {data.map((event, i) => (
        <div key={i} className="p-3 border-t-2">
          <p className="text-blue-800 text-lg">{event.title}</p>
          <p className="text-xl">{event.description}</p>
          <p className="text-purple-800">{event.date}{" @"}{event.time}</p>
        </div>
      ))}
    </div>
  );
}
