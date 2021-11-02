import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const data = [
  {
    title: "Project Based Learning",
    link: "/pbl",
    list: [
      { title: "Plutus", link: "/pbl/plutus" },
      { title: "Playground", link: "/pbl/playground" },
      { title: "Starter Kits", link: "/pbl/csk" },
    ],
  },
  {
    title: "Dandelion APIs",
    link: "/",
    list: [{ title: "Dandelion", link: "/dandelion_r" }],
  },
  {
    title: "About Us",
    link: "/team",
    list: [
      { title: "Team", link: "/team" },
      { title: "Calendar", link: "/calendar" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="w-full h-full bg-offWhite min-h-screen ">
      <div className="flex pt-9  flex-col ">
        <h1 className="gg-title spacing-x text-black2-900  ">Menu</h1>
        <motion.div
          layoutId="menu-bar"
          className="h-1 bg-black2-800  w-full my-1 "
        ></motion.div>
      </div>

      <div className="spacing-x my-5 text-black2-900">
        <div className="max-w-15">
          We believe that people learn best by doing things. If you've been
          looking for an entry point into how you can participate in Cardano, we
          think you might find it here.
        </div>
      </div>
      <ul className="spacing-x  grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {data.map((group, index) => {
          return (
            <li
              key={group.title + index + "gt"}
              className=" relative flex flex-col"
            >
              <Link href={group.link}>
                <a>
                  <button className="text-black2-900 text-2xl border-b border-black2-900 ">
                    {group.title}
                  </button>
                </a>
              </Link>

              {/* List */}
              <div className="mt-3">
                {group.list.map((i, index) => {
                  return (
                    <li className="group" key={i.link + index + "gl"}>
                      <Link href={i.link}>
                        <a>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-gray-300 group-hover:bg-blue-600 mr-2"></div>
                            <button className="text-black2-800 ">
                              {i.title}
                            </button>
                          </div>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
