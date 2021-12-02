import Link from "next/link";
import React from "react";

const data = [
  {
    title: "Learn",
    link: "/pbl",
    list: [
      { title: "Starter Kits", link: "/pbl/csk", color: "bg-blue-600" },
      { title: "Plutus", link: "/pbl/plutus", color: "bg-orange-400" },
      { title: "Playground", link: "/pbl/playground", color: "bg-red-600" },
    ],
  },
  {
    title: "APIs",
    link: "/dandelion",
    list: [
      { title: "Dandelion", link: "/dandelion", color: "bg-green-400" },
      {
        title: "Endpoints",
        link: "/dandelion/endpoints",
        color: "bg-green-700",
      },
    ],
  },
  {
    title: "Updates",
    link: "/updates",
    list: [{ title: "Updates", link: "/updates", color: "bg-yellow-400" }],
  },
  {
    title: "About Us",
    link: "/team",
    list: [
      { title: "Team", link: "/team", color: "bg-blue-600" },
      { title: "Calendar", link: "/calendar", color: "bg-blue-700" },
    ],
  },
];

export default function MenuLinks() {
  return (
    <section>
      <div className="max-w-18 mx-auto spacing-x gap-4  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {data.map((group, index) => {
          return (
            <div
              key={group.title + index + "gt"}
              className="  relative flex flex-col  items-center"
            >
              <div className="w-full sm:w-auto">
                <Link href={group.link}>
                  <a>
                    <button className="  text-2xl border-b border-black2-900 ">
                      {group.title}
                    </button>
                  </a>
                </Link>
              </div>
              {/* List */}
              <ul className="mt-3">
                {group.list.map((i, index) => {
                  return (
                    <li
                      className="group"
                      key={i.link + index + group.title + "gl"}
                      id={i.link + index + group.title + "gl"}
                    >
                      <Link href={i.link}>
                        <a>
                          <div className="flex items-center">
                            <div
                              className={`w-3 h-3 bg-black2-900 group-hover:${i.color} mr-2`}
                            ></div>
                            <button className=" ">{i.title}</button>
                          </div>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
