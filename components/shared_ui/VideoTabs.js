import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { bgOptions, textOptions } from "../../lib/colors/color";
import WeeklyUpdatesSvg from "../../lib/icons/WeeklyUpdatesSvg";

export default function VideosGroup({ videos, color }) {
  const [focusVideo, setFocusVideo] = useState(null);
  const router = useRouter();
  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const autoFocusVideoId = searchParams.get("videoId");
  const bgColor = bgOptions[color][1];
  const textColor = textOptions[color][3];
  console.log(color);
  console.log(bgColor);
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

  const only1Video = videos && videos.length === 1;
  if (!videos) {
    return null;
  }
  if (only1Video) {
    return (
      <div className="max-w-18 mx-auto spacing-x my-6 ">
        <div className={`  `}>
          {focusVideo && (
            <div className={`bg-black2-900 p-4 shadow-lg mx-auto max-w-15  `}>
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
    <div className="max-w-18 mx-auto spacing-x my-6 ">
      {focusVideo && (
        <div className={`shadow-lg grid lg:grid-cols-2   p-4 relative `}>
          <div className="bg-black2-900 absolute inset-0 opacity-1 z-0" />
          <div className={`shadow-lg relative z-10 my-auto max-w-15  `}>
            <LiteYouTubeEmbed
              id={focusVideo.videoId}
              title={focusVideo.videoTitle}
            />
          </div>

          <div className="w-full max-w-16 mx-auto lg:pl-4 pt-4 lg:pt-0  relative z-10 flex justify-stretch items-center">
            <div className="w-full   ">
              {videos &&
                videos.map((video) => {
                  const isSelected = focusVideo?.videoId === video.videoId;
                  return (
                    <div
                      key={video.videoId + "__v_button"}
                      role="button"
                      className={`bg-white mb-2 shadow group flex  px-1 sm:px-3 py-1 w-full text-black2-900`}
                      onClick={() => setFocusVideo(video)}
                    >
                      <div className={`w-full  flex justify-between`}>
                        <div className={` flex items-center justify-end`}>
                          <WeeklyUpdatesSvg className="w-5 hidden sm:block -mt-1" />
                          <div
                            className={` w-4 h-4 mx-1 rounded-full ${
                              isSelected
                                ? `${bgColor}  `
                                : " hover:bg-black2-900 "
                            }`}
                          ></div>
                          {/* Replace with developer image */}
                          <div
                            className={` bg-black opacity-25  w-5 h-5  rounded-full mr-2`}
                          />
                          {/* Replace with developer image */}
                          <p className="text-lg  font-heading">
                            {video.videoTitle}
                          </p>
                        </div>
                        <div
                          className={`pl-2 flex-1 flex justify-between text-right items-center`}
                        >
                          <div className={`${textColor} text-sm text-gray-600`}>
                            {video.videoPart}
                          </div>
                          <div className={`text-sm`}>{video.developer}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
