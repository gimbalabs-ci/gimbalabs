import { useRouter } from "next/router";
import React from "react";

export default function InvisibleController({ link }) {
  const router = useRouter();
  return (
    <input
      className="pointer-events-none hidden sm:block opacity-0 absolute top-0 left-0 z-0"
      style={{ zIndex: 10000 }}
      onKeyDown={(e) => {
        if (e.keyCode === 27) {
          // user hit escape
          router.push(link);
        }
        // else if (e.keyCode === 37) {

        // } else if (e.keyCode === 39) {

        // }
      }}
      autoFocus={true}
      onBlur={({ target }) => target.focus()}
      tabIndex="0"
    ></input>
  );
}
