import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { bgOptions, textColors } from "../../lib/colors/color";
import CalendarSvg from "../../lib/icons/CalendarSvg";

const ease1 = { ease: [0.6, 0.01, -0.05, 0.8] };
const stagger1Parent = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const stagger1ChildLeft = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: ease1 },
};
const animate = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
};

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function ListAllVideoUpdates({ baseRoute = "/updates/", data }) {
  return (
    <ul
      //   {...animate}
      //   variants={stagger1Parent}
      //   key="listallvideoupdates"
      className=" grid sm:grid-cols-2 xl:grid-cols-3  gap-6"
    >
      {data.map((video, index) => {
        const { date, number, youtubeId, tags } = video;
        const _date = new Date(date);
        let shortMonth = _date.toLocaleString("en-us", {
          month: "short",
        });

        // Hide the first video from the list as it's displayed above
        if (index === 0) {
          return null;
        }
        return (
          <li
            className="shadow-lg bg-white p-3 w-full h-full  "
            key={youtubeId + index}
          >
            <div className="  overflow-hidden">
              <Link href={`${baseRoute}${number}`}>
                <a>
                  <div className={`relative    max-h-14 pb-4    `}>
                    <LiteYouTubeEmbed id={youtubeId} title={number} />
                  </div>
                </a>
              </Link>
            </div>
            <div className={`flex  items-start`}>
              <div className="flex-1 text-black w-full flex flex-col items-start justify-between">
                <div
                  className={` text-gray-600 flex items-start  text-4xl font-heading `}
                >
                  {/* <span className="opacity-100 text-base  -mt-2 mr-1"># </span> */}
                  {number}
                </div>

                <div className="flex items-center text-gray-500 ">
                  <CalendarSvg className={`w-4 mr-2`} />
                  <div className=" text-sm   text-right  ">{shortMonth}</div>

                  {/* <div className=" text-sm text-gray-500  text-right  ">
                      {date.split("-")[2]}-
                    </div>
                    <div className="text-lg  text-right  ">
                      {date.split("-")[1]}
                    </div>
                    <span className="text-sm text-gray-500 ">
                      -{date.split("-")[0]}
                    </span> */}
                </div>
              </div>
              <ul className="w-full pl-3 text-gray-800  text-lg -mt-2  text-left  ">
                {tags.map((i, index) => (
                  <li className="mr-1" key={i + number + "__videotag"}>
                    {i}
                    {index < tags.length - 1 && ","}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
