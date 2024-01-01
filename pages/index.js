import Head from "next/head";
import Link from "next/link";
import GimbalGrid from "../components/gimbalgrid/GimbalGrid";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gimbalabs 2024</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GimbalGrid />
    </div>
  );
}
