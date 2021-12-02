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
      <MostRecentVideo data={firstVideo} />

      <div className=" spacing-x  py-6">
        <ListAllVideoUpdates data={videoupdates.weekly} />
      </div>
    </div>
  );
}

const MostRecentVideo = ({ data }) => {
  const _date = new Date(data.date);
  let shortMonth = _date.toLocaleString("en-us", {
    month: "short",
  });
  return (
    <div className=" bg-black2-900">
      <div className="flex flex-wrap justify-between max-w-18 py-6  spacing-x   overflow-hidden relative  mx-auto ">
        <div className={`mr-6  w-15`}>
          <LiteYouTubeEmbed id={data.youtubeId} title={data.date} />
        </div>
        <div className="mt-5 flex-1  text-offWhite flex flex-col items-start justify-cetner">
          <div className={`  text-4xl font-heading `}># {data.number}</div>
          <div className="flex items-center ">
            <div className=" text-sm text-gray-300  text-right  ">
              {shortMonth}
            </div>
          </div>
          <div className="text-white  ">
            {data.tags.map((i, index) => (
              <div className="mr-1" key={i + data.number + "__videotag"}>
                {i}
                {index < data.tags.length - 1 && ","}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
