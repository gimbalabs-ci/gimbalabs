import React from "react";
import Card from "../card/Card";

export default function Dandelion() {
  return (
    <div className="gds-section gds-purple text-white">
      <h2 className="text-5xl font-bold">gimbalabs playground</h2>
      <div className="flex">
        <p>A place to bring your ideas to life</p>

        <div className="mx-4 flex items-center">
          {/* <p className="mx-4">go</p> */}
          <svg
            width="26"
            height="13"
            viewBox="0 0 26 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6.5H13H25M25 6.5L19.0984 1M25 6.5L19.0984 12"
              className="stroke-current"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-7 mt-9">
        <Card
          icon="/images/icon_2_w.svg"
          title="project based learning"
          body="When you learn by doing in a collaborative space, you’ll develop a deep understanding of new possibilities."
        />
        <Card
          icon="/images/icon_2_w.svg"
          title="dapps and tooling"
          body="What you build today provides an entry point for what you’ll build tomorrow. The Playground is where we get started."
        />
        <Card
          icon="/images/icon_2_w.svg"
          title="a unique network"
          body="Real solutions require more than code. The Playground is an open opportunity for you to join a diverse group of problem solvers, learning together."
        >
          <button className="mt-9 gds-button border-2 border-white rounded-md">
            learn more
          </button>
        </Card>
      </div>
      <div className="flex justify-end "></div>
    </div>
  );
}
