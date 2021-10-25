import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CornerDownLeft } from "react-feather";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

import { getAllCskIds, getCskData } from "../../../lib/csk";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import FullWidthImageAndText from "../../../components/shared_ui/FullWidthImageAndText";
import RecircList from "../../../components/shared_ui/recirc/RecircList";

export async function getStaticProps({ params }) {
  const cskData = await getCskData(params.id);
  return {
    props: {
      cskData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllCskIds();
  return {
    paths,
    fallback: false,
  };
}

export default function SpecificCSKs({ cskData }) {
  const {
    contentReact,
    date,
    id,
    number,
    title,
    version,
    videoId,
    videoTitle,
    videos,
    fullWidthImageAndText,
    recirc,
  } = cskData;

  const link = "/pbl/csk";

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const el = document.getElementsByTagName("h5");
  //     const t = document.getElementById("test");

  //     el[0] && t && el[0].replaceWith(t);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <div className="relative bg-white text-black2-900">
      {/* Hero */}
      <FullWidthImageAndText
        link={link}
        color="blue"
        {...fullWidthImageAndText}
      />

      <VideoTabs videos={videos} />
      {/* Layout */}
      <div className="spacing-x spacing-y  relative overflow-hidden">
        {/* Mardown */}
        {/* <Pattern /> */}
        <div className="gds-markdown relative z-10  ">
          <ReactMarkdown children={contentReact} />
        </div>
      </div>
      {/* Suggestion Recirculation */}
      <div>
        <RecircList link={link} {...recirc} />
      </div>
      {/*  */}
      <Link href={link}>
        <a>Back to all CSKs</a>
      </Link>
    </div>
  );
}

const VideoTabs = ({ videos }) => {
  const [focusVideo, setFocusVideo] = useState(videos[0]);
  const router = useRouter();
  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const autoFocusVideoId = searchParams.get("videoId");

  useEffect(() => {
    setFocusVideo(videos.filter((i) => i.videoId === autoFocusVideoId));
  }, [autoFocusVideoId]);

  return (
    <div className="max-w-18 mx-auto spacing-x">
      <div className=" pt-6 w-full">
        <LiteYouTubeEmbed
          id={focusVideo.videoId}
          title={focusVideo.videoTitle}
        />
      </div>
      <div className="flex flex-wrap items-center justify-center w-full">
        {videos.map((video) => {
          const isSelected = focusVideo.videoId === video.videoId;
          return (
            <div
              role="button"
              className={`gds-btn  mr-1 ${
                isSelected
                  ? "bg-blue-900 text-blue-100"
                  : "bg-blue-100 text-blue-900 hover:bg-blue-700 hover:text-blue-100 border border-blue-600"
              }`}
              key={video.videoId + "__v_button"}
              onClick={() => setFocusVideo(video)}
            >
              {video.videoTitle}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Pattern = () => {
  return (
    <svg
      className="max-w-16 -top-8 right-0 z-0 absolute text-purple-500"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 847 847"
      x="0px"
      y="0px"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <g>
        <path
          className="fill-current"
          d="M590 368l-32 -57 32 -57 66 0 33 57 -33 57 -66 0zm5 -7l-15 -25 -14 -25 14 -25 15 -24 28 0 29 0 14 24 14 25 -14 25 -14 25 -29 0 -28 0z"
        ></path>
        <path
          className="fill-current"
          d="M488 309l-33 -57 33 -57 65 0 33 57 -33 57 -65 0zm4 -8l-14 -24 -15 -25 15 -25 14 -25 28 0 29 0 14 25 15 25 -15 25 -14 24 -29 0 -28 0z"
        ></path>
        <path
          className="fill-current"
          d="M590 249l-33 -56 33 -57 66 0 33 57 -33 56 -66 0zm5 -7l-15 -25 -14 -24 14 -25 15 -25 28 0 29 0 14 25 14 25 -14 24 -14 25 -29 0 -28 0z"
        ></path>
        <path
          className="fill-current"
          d="M693 190l-33 -57 33 -57 66 0 33 57 -33 57 -66 0zm4 -7l-14 -25 -14 -25 14 -24 14 -25 29 0 28 0 15 25 14 24 -14 25 -15 25 -28 0 -29 0z"
        ></path>
        <path
          className="fill-current"
          d="M590 131l-33 -57 33 -57 66 0 33 57 -33 57 -66 0zm5 -7l-15 -25 -14 -25 14 -25 15 -25 28 0 29 0 14 25 14 25 -14 25 -14 25 -29 0 -28 0z"
        ></path>
        <path
          className="fill-current"
          d="M488 538l65 0 33 57 -33 57 -65 0 -33 -57 33 -57zm4 7l28 0 29 0 14 25 15 25 -15 25 -14 24 -29 0 -28 0 -14 -24 -15 -25 15 -25 14 -25z"
        ></path>
        <path
          className="fill-current"
          d="M590 479l66 0 33 57 -33 56 -66 0 -32 -56 32 -57zm5 7l28 0 29 0 14 25 14 25 -14 24 -14 25 -29 0 -28 0 -15 -25 -14 -24 14 -25 15 -25z"
        ></path>
        <path
          className="fill-current"
          d="M590 597l66 0 33 57 -33 57 -66 0 -33 -57 33 -57zm5 8l28 0 29 0 14 24 14 25 -14 25 -14 25 -29 0 -28 0 -15 -25 -14 -25 14 -25 15 -24z"
        ></path>
        <path
          className="fill-current"
          d="M590 716l66 0 33 57 -33 57 -66 0 -33 -57 33 -57zm5 7l28 0 29 0 14 25 14 25 -14 24 -14 25 -29 0 -28 0 -15 -25 -14 -24 14 -25 15 -25z"
        ></path>
        <path
          className="fill-current"
          d="M693 656l66 0 33 57 -33 57 -66 0 -33 -57 33 -57zm4 8l29 0 28 0 15 25 14 24 -14 25 -15 25 -28 0 -29 0 -14 -25 -14 -25 14 -24 14 -25z"
        ></path>
        <path
          className="fill-current"
          d="M492 419l57 0 14 -24 15 -25 -15 -24 -14 -25 -28 0 -29 0 -14 25 -14 24 28 49zm64 4l30 53 -33 57 -65 0 -31 -53 -61 0 -33 -57 33 -57 61 0 31 -53 65 0 33 57 -30 53zm-99 50l28 -50 -28 -49 -28 0 -29 0 -14 25 -14 24 14 25 14 25 29 0 28 0zm92 -46l-57 0 -28 50 14 24 14 25 29 0 28 0 14 -25 15 -25 -15 -24 -14 -25z"
        ></path>
        <path
          className="fill-current"
          d="M392 364l-33 57 -66 0 -33 -57 33 -57 66 0 33 57zm-9 0l-14 25 -14 25 -29 0 -28 0 -15 -25 -14 -25 14 -25 15 -25 28 0 29 0 14 25 14 25z"
        ></path>
        <path
          className="fill-current"
          d="M392 483l-33 57 -66 0 -33 -57 33 -57 66 0 33 57zm-9 0l-14 24 -14 25 -29 0 -28 0 -15 -25 -14 -24 14 -25 15 -25 28 0 29 0 14 25 14 25z"
        ></path>
        <path
          className="fill-current"
          d="M289 423l-33 57 -65 0 -33 -57 33 -57 65 0 33 57zm-8 0l-15 25 -14 25 -29 0 -28 0 -14 -25 -15 -25 15 -24 14 -25 28 0 29 0 14 25 15 24z"
        ></path>
        <path
          className="fill-current"
          d="M186 364l-32 57 -66 0 -33 -57 33 -57 66 0 32 57zm-8 0l-14 25 -15 25 -28 0 -29 0 -14 -25 -14 -25 14 -25 14 -25 29 0 28 0 15 25 14 25z"
        ></path>
        <path
          className="fill-current"
          d="M186 483l-32 57 -66 0 -33 -57 33 -57 66 0 32 57zm-8 0l-14 24 -15 25 -28 0 -29 0 -14 -25 -14 -24 14 -25 14 -25 29 0 28 0 15 25 14 25z"
        ></path>
      </g>
    </svg>
  );
};
