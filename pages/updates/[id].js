import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import PageTitleWithBorder from "../../components/shared_ui/PageTitleWithBorder";
import videoupdates from "../../data/videoupdates.json";
import WeeklyUpdatesSvg from "../../lib/icons/WeeklyUpdatesSvg";
import Layout from "../../components/Layouts/Layout";
import Link from "next/link";

export async function getStaticProps({ params }) {
  const videoData = videoupdates.weekly.filter(
    (x) => x.number === parseInt(params.id)
  );

  return {
    props: {
      videoData: videoData[0] ? videoData[0] : null,
    },
  };
}
function getAllVideoIds() {
  const fileNames = videoupdates.weekly;

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.number.toString(),
      },
    };
  });
}

export async function getStaticPaths() {
  const paths = getAllVideoIds();
  return {
    paths,
    fallback: false,
  };
}

function getVideoTitle(str) {
  if (str == "PPBL Live Coding") return str
  else return "Gimbalabs Update"
}

export default function SpecificUpdate({ videoData }) {
  return (
    <Layout footerBg="bg-black2-900">
      <PageTitleWithBorder title={`${getVideoTitle(videoData.tags[0])} ${videoData.number}`} />
      <div className=" overflow-hidden relative max-w-17 mx-auto mt-7 my-9">
        <LiteYouTubeEmbed id={videoData.youtubeId} title={videoData.date} />

        <div className="">
          <div className="rounded-b-md px-5 py-3 bg-black2-900 text-offWhite w-full flex items-center justify-between">
            <div className={`  text-4xl font-heading `}>
              # {videoData.number}
            </div>
            <div className=" text-2xl  text-right  ">{videoData.date}</div>
          </div>
        </div>
        <ul className="text-black  text-right flex items-center  ">
          {videoData.tags.map((i, index) => (
            <li className="mr-1" key={i + videoData.number + "__videotag"}>
              {i}
              {index < videoData.tags.length - 1 && ","}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center pb-9">
        <Link href="/updates">
          <a>
            <div className="flex flex-col items-center">
              <WeeklyUpdatesSvg className="w-7" />
              <div>See all updates</div>
            </div>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
