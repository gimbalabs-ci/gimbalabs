import Head from "next/head";
import Link from "next/link";

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
