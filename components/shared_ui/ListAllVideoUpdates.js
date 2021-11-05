import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { bgOptions, textColors } from "../../lib/colors/color";

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

export default function ListAllVideoUpdates({ baseRoute = "/updates/", data }) {
  return (
    <ul
      //   {...animate}
      //   variants={stagger1Parent}
      //   key="listallvideoupdates"
      className="grid sm:grid-cols-2 xl:grid-cols-3  gap-9"
    >
      {data.map((video, index) => {
        const { date, number, youtubeId, tags } = video;

        // Hide the first video from the list as it's displayed above
        if (index === 0) {
          return null;
        }
        return (
          <li className=" w-full h-full grid " key={youtubeId + index}>
            <>
              <div className=" shadow-md  overflow-hidden">
                <Link href={`${baseRoute}${number}`}>
                  <a>
                    <div className={`relative   max-h-14 pb-9    `}>
                      <LiteYouTubeEmbed id={youtubeId} title={number} />
                      <div className="absolute inset-0 flex   items-end">
                        <div className="px-5 py-3 bg-black2-900  w-full flex items-center justify-between">
                          <div
                            className={`text-white opacity-25 flex items-start  text-4xl font-heading `}
                          >
                            <span className="opacity-100 text-base  -mt-2 mr-1">
                              #{" "}
                            </span>
                            {number}
                          </div>

                          <div className="flex items-start ">
                            <div className="flex items-start text-white text-lg text-right mr-3 ">
                              <span className=" text-yellow-400 ">
                                {date.split("-")[1]}
                              </span>
                              -{date.split("-")[2]}
                            </div>
                            <div className=" text-sm text-gray-300  text-right  ">
                              {date.split("-")[0]}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <ul className="text-black  text-right flex items-center  ">
                {tags.map((i, index) => (
                  <li className="mr-1" key={i + number + "__videotag"}>
                    {i}
                    {index < tags.length - 1 && ","}
                  </li>
                ))}
              </ul>
            </>
          </li>
        );
      })}
    </ul>
  );
}
