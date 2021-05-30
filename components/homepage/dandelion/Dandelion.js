import React from "react";
import Card from "../card/Card";

export default function Dandelion() {
  return (
    <div className="gds-section gds-green text-blue">
      <h2 className="text-5xl font-bold">dandelion APIs</h2>
      <div className="flex">
        <p>Tools to help you start building on Cardano.</p>

        <div className="mx-4 flex items-center">
          {/* <p className="mx-4">go</p> */}
          <svg
            width="26"
            height="13"
            viewBox="0 0 26 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6.5H13H25M25 6.5L19.0984 1M25 6.5L19.0984 12"
              stroke="#001E64"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-7 mt-9">
        <Card
          icon="/images/icon_1.svg"
          title="open source"
          body="APIs for interacting with Cardano and launching decentralized applications."
          className="text-blue"
        />
        <Card
          icon="/images/icon_1.svg"
          title="easy access"
          body="Test your ideas for free on hosted endpoints, or deploy your own instance."
          className="text-blue"
        />
        <Card
          icon="/images/icon_1.svg"
          title="start now"
          body="We empower developers and business to start building. Not within days, but within minutes."
          className="text-blue"
        >
          <button className="mt-9 gds-button border-2 border-blue rounded-md">
            learn more
          </button>
        </Card>
      </div>
      <div className="flex justify-end "></div>
    </div>
  );
}
