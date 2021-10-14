import React, { useState } from "react";

const servicesArr = [
  {
    name: "Cardano DB Sync",
    tag: "GraphQl API",
    description:
      "Use this to perform SQL queries to gather info directly from cardano-db-sync’s database.",
    link: {
      route: "/",
      text: "cardano-db-sync/postgrest-api.com",
    },
  },
  {
    name: "JSON-WSP",
    tag: "JSON Websocket",
    description: "Description.",
    link: {
      route: "/",
      text: "json.com",
    },
  },
];

export default function SupportedServices() {
  const [focusService, setFocusService] = useState(servicesArr[0]);
  const focusName = focusService.name;
  return (
    <div className="bg-green-900 spacing-x spacing-y mt-5 xl:m-0  xl:-mt-10">
      <h3 className="relative z-50  my-5 lg:mb-7 xl:-mt-5 xl:mr-10 text-4xl md:text-5xl text-yellow-100 text-right">
        <span className="bg-green-900 p-1">Supported services</span>
      </h3>
      <div className="max-w-17 mx-auto grid lg:grid-cols-2">
        {/* Left Side, FOCUS SERVICE */}
        <div className=" order-2 lg:order-1 ml-auto mt-5 md:mt-0 w-full sm:w-14 bg-green-700 p-3 sm:p-5 lg:p-7 flex flex-col">
          <p className="ml-auto text-yellow-200 text-lg">{focusService.tag}</p>
          <p className="mb-1 text-yellow-400 text-2xl font-bold">
            {focusService.name}
          </p>
          <p className="text-yellow-200 text-lg"> {focusService.description}</p>
          <div className="">
            <div className="inline-flex mt-4 px-2 py-1 relative text-green-900 font-bold text-lg">
              <span className="relative z-10">{focusService.link.text}</span>

              <div className="absolute inset-0 transform -rotate-1 bg-yellow-100"></div>
            </div>
          </div>
        </div>
        {/* Right Side, List of services */}
        <div className="  order-1 lg:order-2 w-full ">
          <ul className="">
            {servicesArr.map((service, index) => {
              return (
                <li
                  role="button"
                  onClick={() => setFocusService(service)}
                  className={`${
                    focusName === service.name ? "bg-green-700" : ""
                  } p-3 grid grid-cols-2 gap-3 `}
                >
                  <span className="lg:ml-auto text-yellow-400 text-2xl font-bold">
                    {service.name}
                  </span>
                  <span className=" text-yellow-200 text-lg">
                    {service.tag}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
