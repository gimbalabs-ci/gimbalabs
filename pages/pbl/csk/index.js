import Link from "next/link";
import React from "react";
import { getSortedCsksData } from "../../../lib/csk";

export async function getStaticProps() {
  const allCSKData = getSortedCsksData();

  return {
    props: {
      allCSKData,
    },
  };
}

export default function index({ allCSKData }) {
  return (
    <div>
      CSK Homepage
      <ul>
        {allCSKData.map(({ id, number, title, date }) => (
          <li key={id}>
            <Link href={`/pbl/csk/${id}`}>
              <a>
                CSK {number}: {title} (last edited {date})
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
