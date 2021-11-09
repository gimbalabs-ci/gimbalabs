import React, { useState } from "react";

// Gabes cool logo
export default function Logo() {
  return (
    <div>
      <GabesLogo1 />
      {/* <GabesLogo2 /> */}
      {/* <img src="/branding/Logo_48px.svg" /> */}
      {/* <OldBrandThatShouldNotBeUsed /> */}
    </div>
  );
}

const GabesLogo1 = () => {
  return (
    <div className="group relative">
      <div className="easeIn transition duration-400 transform group-hover:rotate-45 absolute inset-0 border border-black2-900"></div>

      <svg
        className=""
        width="49"
        height="49"
        viewBox="0 0 49 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="47.6875"
          y="1.36426"
          width="47"
          height="47"
          transform="rotate(90 47.6875 1.36426)"
          fill="#F4F3ED"
        />
        <rect
          x="24.1875"
          y="36.8652"
          width="12"
          height="12"
          transform="rotate(-90 24.1875 36.8652)"
          fill="#232828"
          fillOpacity="0.5"
          className={`fill-current transition easeIn delay-300 text-black2-900 group-hover:textOrange-500`}
        />
        <rect
          x="12.1875"
          y="36.8652"
          width="12"
          height="12"
          transform="rotate(-90 12.1875 36.8652)"
          fill="#232828"
          className={`fill-current transition easeIn delay-200 text-black2-900 group-hover:text-green-400`}
        />
        <rect
          x="12.1875"
          y="24.8652"
          width="12"
          height="12"
          transform="rotate(-90 12.1875 24.8652)"
          fill="#232828"
          className={`fill-current transition easeIn  text-black2-900 group-hover:text-blue-600`}
          fillOpacity="0.75"
        />
        <rect
          x="24.1875"
          y="24.8652"
          width="12"
          height="12"
          transform="rotate(-90 24.1875 24.8652)"
          fill="#232828"
          className={`fill-current transition easeIn delay-100 text-black2-900 group-hover:text-red-600`}
          fillOpacity="0.25"
        />
        <rect
          x="30.1875"
          y="18.8643"
          width="12"
          height="12"
          transform="rotate(90 30.1875 18.8643)"
          fill="#F4F3ED"
        />
      </svg>
    </div>
  );
};

const GabesLogo2 = () => {
  return (
    <svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="48.7227"
        y="48.9775"
        width="48"
        height="48"
        transform="rotate(180 48.7227 48.9775)"
        fill="#F4F3ED"
      />
      <mask
        id="mask0_939:197"
        maskUnits="userSpaceOnUse"
        x="0"
        y="1"
        width="49"
        height="48"
      >
        <rect
          x="0.753906"
          y="1.12012"
          width="47.9415"
          height="47.7146"
          fill="#F4F3ED"
        />
      </mask>
      <g mask="url(#mask0_939:197)">
        <rect
          x="-1.2262"
          y="-0.707942"
          width="45.9263"
          height="45.7298"
          transform="matrix(-0.966231 0.257676 -0.259967 -0.965618 12.8815 32.2262)"
          stroke="#FDE0A5"
          stroke-width="2"
        />
        <rect
          x="-1.2262"
          y="-0.707942"
          width="45.9263"
          height="45.7298"
          transform="matrix(-0.966231 0.257676 -0.259967 -0.965618 25.2917 78.3141)"
          stroke="#265085"
          stroke-width="2"
        />
        <rect
          x="-1.2262"
          y="-0.707942"
          width="45.9263"
          height="45.7298"
          transform="matrix(-0.966231 0.257676 -0.259967 -0.965618 71.5964 65.9664)"
          stroke="#9CB493"
          stroke-width="2"
        />
        <rect
          x="-1.2262"
          y="-0.707942"
          width="45.9263"
          height="45.7298"
          transform="matrix(-0.966231 0.257676 -0.259967 -0.965618 59.194 19.8756)"
          stroke="#232828"
          stroke-width="2"
        />
      </g>
      <rect
        x="48.2227"
        y="48.4775"
        width="47"
        height="47"
        transform="rotate(180 48.2227 48.4775)"
        stroke="#232828"
      />
    </svg>
  );
};

// Your dumb G logo
function OldBrandThatShouldNotBeUsed() {
  return (
    <div>
      <svg
        width="20"
        height="35"
        viewBox="0 0 20 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.2117 18.6193L16.2829 15.4839L14.1043 17.978H6.28077L2.44861 11.7513L6.04 5.10667H13.7486L17.8855 11.8288L16.582 14.9657L18.9876 11.8236L14.9322 4.3208L16.2829 0.693359L13.8246 3.66741H5.2093L0.234375 11.7513L4.89643 20.377H13.4808L17.3129 26.6038L13.7183 33.2544L5.9127 33.3641L2.56368 28.6898L5.22513 34.5623L14.5487 34.6934L19.5272 26.6038L15.2117 18.6193Z"
          fill="#232828"
        />
      </svg>
    </div>
  );
}
