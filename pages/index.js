import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import CoverCard from "../components/Cards/CoverCard";
import {
  CardHeading,
  CardText,
  TitleHeading1,
  HighlightText,
  CallOutText,
  Paragraph,
} from "../components/Type";
import {
  DiscordButton,
  CurrentButton,
  GitlabButton,
} from "../components/Buttons";
import Hero from "../components/homepage/hero/Hero";
import Dandelion from "../components/homepage/dandelion/Dandelion";
import Playground from "../components/homepage/playground/Playground";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to Gimbalabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex flex-col w-full">
        <Hero />
        <Dandelion />
        <Playground />
      </div>
    </div>
  );
}
