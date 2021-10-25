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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gimbalabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/gimbalgrid">
        <a>
          <button className="gds-btn bg-black2-900 text-white">
            /gimbalgrid
          </button>
        </a>
      </Link>
    </div>
  );
}
