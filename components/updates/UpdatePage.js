import React, { useState } from "react";
import PageTitleWithBorder from "../shared_ui/PageTitleWithBorder";
import videoupdates from "../../data/videoupdates.json";
import ListAllVideoUpdates from "../shared_ui/ListAllVideoUpdates";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

export default function UpdatePage() {
  const firstVideo = videoupdates.weekly[0];
  return (
    <div>
      <PageTitleWithBorder title="Weekly Updates" />
      <div className="spacing-x pb-9">
        <MostRecentVideo data={firstVideo} />
        <ListAllVideoUpdates data={videoupdates.weekly} />
      </div>
    </div>
  );
}

const MostRecentVideo = ({ data }) => {
  return (
    <div className="rounded-md overflow-hidden relative max-w-16 mx-auto mt-7 my-9">
      <LiteYouTubeEmbed id={data.youtubeId} title={data.date} />

      <div className="">
        <div className="rounded-b-md px-5 py-3 bg-black2-900 text-offWhite w-full flex items-center justify-between">
          <div className={`  text-4xl font-heading `}># {data.number}</div>
          <div className=" text-2xl  text-right  ">{data.date}</div>
        </div>
      </div>
      <ul className="text-black  text-right flex items-center  ">
        {data.tags.map((i, index) => (
          <li className="mr-1" key={i + data.number + "__videotag"}>
            {i}
            {index < data.tags.length - 1 && ","}
          </li>
        ))}
      </ul>
    </div>
  );
};
