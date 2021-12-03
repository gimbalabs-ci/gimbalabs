import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import BoxList from "./BoxList";
import ExpandedBox from "./ExpandedBox";

// Shade bg that comes in to cover the boxes
// Hide at first
const shadeHide = {
  opacity: 0,
  y: "100%",
};
// Show
const shadeShow = {
  opacity: 1,
  y: 0,
};

export default function GimbalGrid() {
  const router = useRouter();
  // When there is a SLUG, it means full page mode. Use slug to determine the transfer component.
  // ID is for the GridBox which was clicked, and thus needs to be re-focused when closing.
  const { slug, id } = router.query;

  // Selected Box to go full screen
  const [focusBox, setFocusBox] = useState(null);

  const [shadeStyles, setShadeStyles] = useState(shadeHide);
  const showShades = () => {
    setShadeStyles(shadeShow);
  };
  const hideShades = () => {
    setShadeStyles(shadeHide);
  };

  // Function to go full screen and add slug
  const handleFocusBox = (arg) => {
    // This triggers the animation for the individual boxes to turn their shade on
    setFocusBox(arg);

    setTimeout(() => {
      // After 1.2 seconds,
      // Initiate full screen version of a box by navigating to /[slug]
      router.push(`/gimbalgrid/${arg}`);
    }, 1200);
  };

  // Reset from full screen mode when there is no longer a slug
  useEffect(() => {
    if (slug === undefined) {
      hideShades();
    }
  }, [slug]);

  // Scroll to id after delay.
  // const scrollToId = (id) => {
  //   const element = document.getElementById(id);
  //   element && element.scrollIntoView({ behavior: "smooth" });
  // };
  // useEffect(() => {
  //   let timer;
  //   if (id !== undefined) {
  //     timer = setTimeout(() => {
  //       scrollToId(id);
  //     }, 1000);
  //   }
  //   return () => clearTimeout(timer);
  // }, [id]);

  return (
    <div className={`bg-black2-900 relative w-screen min-h-screen `}>
      <AnimateSharedLayout>
        {/* List of Grid Boxes */}
        <BoxList
          shadeStyles={shadeStyles}
          showShades={showShades}
          focusBox={focusBox}
          handleGridBoxClick={handleFocusBox}
          slug={slug}
          multiplier={0}
        />

        {/* Full size Component */}
        <AnimatePresence exitBeforeEnter>
          {slug && <ExpandedBox slug={slug[0]} key={`expanded-box-${slug}`} />}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
}
