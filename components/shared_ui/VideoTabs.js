import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import WeeklyUpdatesSvg from "../../lib/icons/WeeklyUpdatesSvg";

export default function VideosGroup({ videos }) {
  const [focusVideo, setFocusVideo] = useState(null);
  const router = useRouter();
  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const autoFocusVideoId = searchParams.get("videoId");

  useEffect(() => {
    if (videos && videos.length > 0) {
      setFocusVideo(videos.filter((i) => i.videoId === autoFocusVideoId));
    }
  }, [autoFocusVideoId]);
  useEffect(() => {
    // hydrate videos if they are passed
    if (videos && videos.length > 0) {
      setFocusVideo(videos[0]);
    }
  }, [videos]);
  console.log(videos);

  const only1Video = videos.length === 1;
  if (only1Video) {
    return (
      <div className="max-w-18 mx-auto spacing-x pt-6 pb-6 ">
        <div className={`   `}>
          {focusVideo && (
            <div className={` mx-auto max-w-15  `}>
              <LiteYouTubeEmbed
                id={focusVideo.videoId}
                title={focusVideo.videoTitle}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-18 mx-auto spacing-x pt-6 pb-6 ">
      <div className={`grid md:grid-cols-2  `}>
        {focusVideo && (
          <div className={` my-auto max-w-15  `}>
            <LiteYouTubeEmbed
              id={focusVideo.videoId}
              title={focusVideo.videoTitle}
            />
          </div>
        )}

        <div className="flex justify-center items-center">
          <div className="pl-4 ml-auto xl:mr-auto  max-w-14 grid xl:grid-cols-2 gap-1 ">
            {videos &&
              videos.map((video) => {
                const isSelected = focusVideo?.videoId === video.videoId;
                return (
                  <div
                    key={video.videoId + "__v_button"}
                    role="button"
                    className={` group flex flex-col item-start px-3 py-1 w-full   ${
                      isSelected
                        ? "bg-black2-900 text-offWhite"
                        : "text-black2-900 hover:bg-black2-900 hover:text-white "
                    }`}
                    onClick={() => setFocusVideo(video)}
                  >
                    <div className={`flex justify-between`}>
                      <div className={` flex items-center justify-end`}>
                        {/* Replace with developer image */}
                        <div
                          className={`${
                            isSelected
                              ? "bg-white opacity-75"
                              : "bg-black opacity-25 group-hover:bg-white "
                          }  w-6 h-6  rounded-full mr-2`}
                        />
                        <p className="text-lg  font-heading">
                          {video.developer}
                        </p>
                      </div>
                      <div className={` overflow-hidden flex items-center`}>
                        <WeeklyUpdatesSvg className="w-4 mr-2 -mt-1" />
                        <div className=" text-sm">{video.videoPart}</div>
                      </div>
                    </div>
                    <div className={`flex-1 text-sm flex justify-start`}>
                      {video.videoTitle}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
