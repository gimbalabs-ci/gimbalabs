import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

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

  return (
    <div className="max-w-18 mx-auto spacing-x">
      <div className=" pt-6 w-full">
        {focusVideo && (
          <LiteYouTubeEmbed
            id={focusVideo.videoId}
            title={focusVideo.videoTitle}
          />
        )}
      </div>
      <div className="flex flex-wrap items-center justify-center w-full">
        {videos &&
          videos.map((video) => {
            const isSelected = focusVideo?.videoId === video.videoId;
            return (
              <div
                key={video.videoId + "__v_button"}
                role="button"
                className={`gds-btn  mr-1 ${
                  isSelected
                    ? "bg-blue-900 text-blue-100"
                    : "bg-blue-100 text-blue-900 hover:bg-blue-700 hover:text-blue-100 border border-blue-600"
                }`}
                onClick={() => setFocusVideo(video)}
              >
                {video.videoTitle}
              </div>
            );
          })}
      </div>
    </div>
  );
}
