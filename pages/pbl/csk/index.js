import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { getSortedCsksData } from "../../../lib/csk";
export const ease1 = { ease: [0.6, 0.01, -0.05, 0.8] };

export const stagger1Parent = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
export const stagger1ChildLeft = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: ease1 },
  exit: {
    opacity: 0,
  },
};
export const animate = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
};

export async function getStaticProps() {
  const allCSKData = getSortedCsksData();

  return {
    props: {
      allCSKData,
    },
  };
}

export default function index({ allCSKData }) {
  console.log(allCSKData);
  return (
    <div className="spacing-x spacing-y">
      <h1 className="gg-title text-black2-900">Cardano Starter Kits</h1>
      <div className="gg-subtitle text-black2-900">
        The fastest way to get started on cardano
      </div>
      <div>
        <Link href="/pbl">
          <a>
            <button className=" mt-7 gds-btn text-blue-900">/pbl</button>
          </a>
        </Link>
      </div>
      <motion.ul
        {...animate}
        variants={stagger1Parent}
        className="grid md:grid-cols-2 xl:grid-cols-3  gap-5"
      >
        {allCSKData.map(({ id, number, title, date }) => (
          <motion.li
            className="my-9 flex"
            variants={stagger1ChildLeft}
            key={id}
          >
            <Link href={`/pbl/csk/${id}`}>
              <a>
                <div className="  sm:max-w-14 h-14 flex justify-center p-5 items-center bg-blue-600">
                  <div className="mr-auto mb-auto text-4xl font-heading text-blue-100">
                    {number}
                  </div>
                  <div className="mt-auto text-2xl ml-auto text-right text-blue-100 ">
                    {title}
                  </div>
                </div>
              </a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
