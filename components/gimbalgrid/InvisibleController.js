import { useRouter } from "next/router";
import React from "react";

export default function InvisibleController({ link }) {
  const router = useRouter();
  return (
    <input
      className="opacity-0 absolute top-0 left-0 z-0"
      style={{ zIndex: 10000 }}
      onKeyDown={(e) => {
        if (e.keyCode === 27) {
          // user hit escape

          router.push(link);
        } else if (e.keyCode === 37) {
          // if (collectionNumber !== 1) {
          //   router.push(`/art/AlonzoGrad00${collectionNumber - 1}`);
          // } else {
          //   toast(
          //     "This is the first image of the collection. Press ESC to exit"
          //   );
          // }
        } else if (e.keyCode === 39) {
          // if (collectionNumber < nftList.length) {
          //   router.push(`/art/AlonzoGrad00${collectionNumber + 1}`);
          // } else {
          //   toast(
          //     "We will mint 1 NFT per epoch until Decemeber. Press ESC to exit"
          //   );
          // }
        }
      }}
      autoFocus={true}
      onBlur={({ target }) => target.focus()}
      tabIndex="0"
    ></input>
  );
}
