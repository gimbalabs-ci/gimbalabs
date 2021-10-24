import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../lib/hooks";
import { useRouter } from "next/router";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import SmoothScroll from "../../lib/smooth_scroll/SmoothScroll";
import TitleGroup, {
  TitleGroupDark,
} from "../../components/gimbalgrid/sections/TitleGroup";
import useElementSize from "../../lib/hooks/useElementSize";
import Testimony from "../../components/gimbalgrid/sections/Testimony";
import TestimonyFull from "../../components/gimbalgrid/sections/TestimonyFull";
import Letter from "../../components/gimbalgrid/sections/Letter";
import HamburgerMenu from "../../components/gimbalgrid/sections/HamburgerMenu";
import BlankWhite from "../../components/gimbalgrid/sections/BlankWhite";
import InvisibleController from "../../components/gimbalgrid/InvisibleController";
import DandelionPage from "../../components/dandelion/DandelionPage";
import GBDandelion from "../../components/gimbalgrid/gridboxes/GBDandelion";
import GBPBL from "../../components/gimbalgrid/gridboxes/GBPBL";
import PBLPage from "../../components/pbl/PBLPage";

const genFillers = (s) =>
  Array.from(Array(15).keys()).map((i) => {
    return {
      disable: false,
      c: () => <div className="absolute inset-0 "></div>,
      s: s,
    };
  });
const fillersStart = genFillers(
  "col-span-1 row-span-2 md:row-span-3 md:col-span-3 "
);

const gimbalabs = {
  6: {
    disable: true,
    disabledColor: "bg-purple-500",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: Letter,
    cprops: {
      l: "G",
    },
  },
  7: {
    disable: true,
    disabledColor: "bg-offWhite",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: BlankWhite,
  },
  8: {
    disable: true,
    disabledColor: "bg-purple-500",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: Letter,
    cprops: {
      l: "I",
    },
  },
  9: {
    disable: true,
    disabledColor: "bg-purple-500",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: Letter,
    cprops: {
      l: "M",
    },
  },
  10: {
    disable: true,
    disabledColor: "bg-offWhite",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: BlankWhite,
  },
  11: {
    disable: true,
    disabledColor: "bg-purple-500",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: Letter,
    cprops: {
      l: "B",
    },
  },
  12: {
    disable: true,
    disabledColor: "bg-purple-500",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: Letter,
    cprops: {
      l: "A",
    },
  },
  13: {
    disable: true,
    disabledColor: "bg-offWhite",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: BlankWhite,
  },
  14: {
    disable: true,
    disabledColor: "bg-offWhite",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: BlankWhite,
  },
  15: {
    disable: true,
    disabledColor: "bg-purple-500",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: Letter,
    cprops: {
      l: "L",
    },
  },
  16: {
    disable: true,
    disabledColor: "bg-offWhite",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: BlankWhite,
  },
  17: {
    disable: true,
    disabledColor: "bg-offWhite",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: BlankWhite,
  },
  18: {
    disable: true,
    disabledColor: "bg-purple-500",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: Letter,
    cprops: {
      l: "L",
    },
  },
  19: {
    disable: true,
    disabledColor: "bg-purple-500",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: Letter,
    cprops: {
      l: "A",
    },
  },
  20: {
    disable: true,
    disabledColor: "bg-purple-500",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: Letter,
    cprops: {
      l: "B",
    },
  },
  21: {
    disable: true,
    disabledColor: "bg-purple-500",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: Letter,
    cprops: {
      l: "S",
    },
  },
};

const emptyBoxes = {
  // 16
  16: {
    disable: true,
    disabledColor: "bg-offWhite",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: BlankWhite,
  },
  17: {
    disable: true,
    disabledColor: "bg-offWhite",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: BlankWhite,
  },
  18: {
    disable: true,
    disabledColor: "bg-offWhite",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: BlankWhite,
  },
  19: {
    disable: true,
    disabledColor: "bg-offWhite",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: BlankWhite,
  },
  20: {
    disable: true,
    disabledColor: "bg-offWhite",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: BlankWhite,
  },
  21: {
    disable: true,
    disabledColor: "bg-offWhite",
    s: ` col-span-1  md:col-span-3 row-span-1 `,
    c: BlankWhite,
  },
};

// CONTROLS
// Add a c: Component to transfer and its GridBox style s: Tailwind Grid Style
// {
//   [key]: {
//     s: 'GridBox style',
//     c: TransferComponent,
//     cprops: {transfer:'whatever props you want to send to the transfer component',},
//     f: FullPageComponent,
//     fs: 'Transfer box alignment style on the full page'
//   }
// }
const components = {
  // 0
  0: {
    s: ` col-span-8 row-span-2 lg:row-span-2   `,
    c: TitleGroup,
    fs: "justify-start",
  },

  // 1
  1: {
    bgColor: "bg-black2-900",
    s: ` row-span-2 col-span-6  `,
    c: GBPBL,
    cprops: {
      layoutId: "project-based-learning",
    },
    f: PBLPage,
    fprops: {
      text:
        "Hi, here is an opportunity to expand upon this testimonial and show some examples of projects or something.",
    },
    fs: "justify-stretch",
  },
  // 2
  2: {
    s: ` col-span-6 row-span-2 lg:row-span-3 xl:row-span-2  bg-green-500 `,
    c: Testimony,
    cprops: {
      layoutId: "testimony-transfer-2",
      quote:
        "Hello and welcome to our community of developers, thinkers, experimenters, doers. We are glad to have you.",
      owner: "James",
    },
    f: TestimonyFull,
    fprops: {
      text:
        "Hi, here is an opportunity to expand upon this testimonial and show some examples of projects or something.",
    },
    fs: "justify-center",
  },
  // 3
  3: {
    bgColor: "gradient-yellow",
    s: `row-span-3 col-span-7  `,
    c: GBDandelion,
    cprops: {
      layoutId: "gbdandelion-transfer-3",
    },
    hideTransferComponent: true,
    f: DandelionPage,
    fprops: {
      text:
        "Hi, here is an opportunity to expand upon this testimonial and show some examples of projects or something.",
    },
    fs: "justify-center",
  },
  4: {
    s: ` col-span-8 row-span-2 lg:row-span-3   `,
    c: TitleGroupDark,
    fs: "justify-start",
    cprops: {
      layoutId: "title-group-dark",
    },
  },
  5: {
    s: "col-span-3 row-span-1 bg-black2-900",
    c: HamburgerMenu,
    cprops: {
      layoutId: "hamburger-menu",
    },
  },
  // 5 -
  ...gimbalabs,
  // // 16
  // ...emptyBoxes,
};

const gridCss = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(64px,1fr))",
  gridTemplateRows: "repeat(1fr)",
  gridAutoFlow: "dense",
};
const gridSmall = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "minmax(100px, 300px)",
};
const borderColor = `border-black2-900`;

const animate = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
};
export const gdsEase12 = { duration: 0.7, ease: [0.6, 0.01, -0.05, 0.9] };
const GdsPageTransition = {
  initial: {
    y: 0,
    // x: -96,
    // skewY: -2,
    opacity: 1,
    // scale: 0.97,
  },
  animate: {
    transition: {
      ...gdsEase12,
    },

    opacity: 1,
  },
  exit: {
    // x: 96,
    // y: 32,
    // skewY: 2,
    // scale: 0.97,
    opacity: 1,
    transition: {
      ...gdsEase12,
    },
  },
};

// Purple bg that comes in to cover the boxes
// Hide at first
const styles1 = {
  opacity: 0,
  // x: "-50%",
  y: 50,
  // zIndex: -1,
};
// Show
const styles2 = {
  opacity: 1,
  // x: "0%",

  y: 0,
};

export default function index() {
  const router = useRouter();
  // When there is a SLUG, it means full page mode. Use slug to determine the transfer component.
  // ID is for the GridBox which was clicked, and thus needs to be re-focused when closing.
  const { slug, id } = router.query;

  // Selected Box to go full screen
  const [focusBox, setFocusBox] = useState(null);
  // Hide everything during page navigation
  const [fullBlackOut, setFullBlackOut] = useState(false);
  // Purple shade, GridBox variants to show/ hide itself.
  // styles1 = show box
  // styles2 = show purple shade, hide box
  const [variants, setVariants] = useState(styles1);

  // Size of transfer component. Use this so the component doesnt stretch during transfer
  const [selectionSize, setSelectionSize] = useState({
    width: 300,
    height: 300,
  });
  const setSizeToFill = () => {
    // setSelectionSize({
    //   width: 300,
    //   height: 300,
    // });
    console.log("nothing");
  };

  // Function to go full screen and add slug
  const handleFocusBox = (arg, width, height) => {
    // grab the size of the box which was clicked so we can send to full screen version
    console.log("handleFocusBox");
    setSelectionSize({ width, height });

    // This triggers the animation for the individual boxes to turn purple
    setFocusBox(arg);

    setTimeout(() => {
      // After .9 seconds, blackout the screen with a high z-index div positioned absolute
      // setFullBlackOut(true);

      // Initiate full screen version of a box by navigating to /[slug]
      router.push(`/gimbalgrid/${arg}`);
    }, 1200);
  };

  // fn
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    element && element.scrollIntoView({ behavior: "smooth" });
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSelectionSize({
  //       width: 700,
  //       height: 700,
  //     });
  //   }, 2000);
  // }, []);

  // Reset from full screen mode when there is no longer a slug
  useEffect(() => {
    if (slug === undefined) {
      setFullBlackOut(false);
      setVariants(styles1);
    }
  }, [slug]);

  // Scroll to id after delay.
  useEffect(() => {
    let timer;
    if (id !== undefined) {
      timer = setTimeout(() => {
        scrollToId(id);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <div className={`bg-black2-900 relative w-screen min-h-screen `}>
      <AnimateSharedLayout>
        <AnimatePresence>
          {fullBlackOut && (
            <motion.div
              key="fullblackout"
              style={{ zIndex: 500 }}
              className="absolute inset-0 bg-black2-800 "
            />
          )}
        </AnimatePresence>
        <BoxList
          setVariants={setVariants}
          variants={variants}
          focusBox={focusBox}
          fn={handleFocusBox}
          slug={slug}
          multiplier={0}
          selectionSize={selectionSize}
          setSizeToFill={setSizeToFill}
        />

        {/* Full size mode of  */}

        <AnimatePresence exitBeforeEnter>
          {slug && (
            <ExpandedBox
              selectionSize={selectionSize}
              slug={slug[0]}
              key={`expanded-box-${slug}`}
            />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
}

const ExpandedBox = ({ slug, selectionSize }) => {
  const router = useRouter();
  const index = slug.split("-")[1];

  // Set default data as the first element in the component list.
  let bgColor = components[0].bgColor || "bg-offWhite";
  let C = components[0].c || null;
  let F = components[0].f || null;
  let fs = components[0].fs || null;
  let cprops = components[0].cprops || null;
  let fprops = components[0].fprops || null;
  let hideTransferComponent = components[0].hideTransferComponent || false;

  // Check if the object is formatted properly, assign data from component list.
  if (components[index]) {
    bgColor = components[index].bgColor;
    C = components[index].c;
    F = components[index].f;
    fs = components[index].fs;
    fprops = components[index].fprops;
    cprops = components[index].cprops;
    hideTransferComponent = components[index].hideTransferComponent;
  }

  return (
    <div
      style={{
        zIndex: 510,
      }}
      className="fixed inset-0 bg-black2-900  "
    >
      <div className="h-full w-full overflow-y-auto">
        <motion.div
          {...animate}
          variants={GdsPageTransition}
          layoutId={`grid-switch-${slug}`}
          className={`  absolute inset-0 z-0   ${bgColor} `}
        ></motion.div>
        <div className=" z-10">
          <div className="flex flex-col w-full  ">
            {/* Transfer component */}
            {!hideTransferComponent && (
              <motion.div
                className={`${fs} flex  z-10`}
                key={router.asPath + "222222"}
              >
                <C
                  expanded
                  {...cprops}
                  slug={slug}
                  height={selectionSize.height}
                  width={selectionSize.width}
                />
              </motion.div>
            )}
            {/* Full page  */}
            <motion.div
              key={router.asPath + "33333"}
              initial={{ opacity: 0, y: -8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.7 },
              }}
              className=" relative"
            >
              {F && <F slug={slug} {...fprops} />}
            </motion.div>
          </div>
          <div className="absolute top-0 right-2">
            <Link href={`/gimbalgrid?id=${slug}`}>
              <div
                role="button"
                className="relative z-50 text-center text-black py-1"
              >
                {esc}
              </div>
            </Link>
            <InvisibleController link={`/gimbalgrid?id=${slug}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

const BoxList = (props) => {
  const { multiplier } = props;
  const { width } = useWindowSize();
  const [gridStyle, setGridStyle] = useState(gridCss);

  useEffect(() => {
    // Simplify grid on Mobile
    if (width && width > 760) {
      setGridStyle(gridCss);
    } else if (width < 760) {
      setGridStyle(gridSmall);
    }
  }, [width]);

  return (
    <div className={`relative gap-2  p-1 ${borderColor}`} style={gridStyle}>
      {Object.entries(components).map((i, index) => (
        <GridBox
          key={index + "__boxgrid"}
          {...props}
          id={`${multiplier}-${index}`}
        />
      ))}
    </div>
  );
};

const GridBox = ({
  variants,
  setVariants,
  id,
  fn,
  focusBox,
  slug,
  setSizeToFill,
}) => {
  const isFiller = id.includes("filler");

  const sizeRef = useRef(null);
  const index = id.split("-")[1];
  const { width, height } = useElementSize(sizeRef);

  // Set default data as the first element in the component list.
  let C = components[0].c || null;
  let style = components[0].s || null;
  let F = components[0].f || null;
  let fs = components[0].fs || null;
  let cprops = components[0].cprops || null;
  let fprops = components[0].fprops || null;
  let disable = false;
  let disableColor;

  // Check if the object is formatted properly, assign data from component list.
  if (components[index]) {
    C = components[index].c;
    style = components[index].s;
    F = components[index].f;
    fs = components[index].fs;
    cprops = components[index].cprops;
    fprops = components[index].fprops;
    disable = components[index].disable;
    disableColor = components[index].disableColor;
  }

  const persistScrollPosition = (id) => {
    if (!disable) {
      setVariants(styles2);
      fn(id, width, height);
    }
  };

  return (
    <motion.div
      id={`${id}`}
      className={`${style} group  min-h-11 relative  overflow-hidden  ${
        disable ? "cursor-default " : " "
      }  `}
      ref={sizeRef}
      role="button"
      onClick={() => {
        persistScrollPosition(id);
      }}
      {...animate}
      variants={GdsPageTransition}
    >
      {/* Hover notice to click */}
      {!disable && (
        <div className="absolute top-0 right-2 text-black2-900 z-10 w-5 opacity-0 group-hover:opacity-100">
          {tap}
        </div>
      )}
      <div className="relative w-full h-full  z-0 ">
        {/* bg */}
        <motion.div
          className={`absolute inset-0 z-10   ${
            disable ? disableColor : "bg-offWhite "
          } `}
          layoutId={`grid-switch-${id}`}
        ></motion.div>
        <div className="relative z-20 w-full  h-full">
          {C && <C {...cprops} slug={slug} width={width} height={height} />}
        </div>
      </div>

      {/* Purple shade */}
      <AnimatePresence>
        {id !== focusBox && (
          <motion.div
            key={`grid-box-filler-${id}`}
            onClick={() => {
              persistScrollPosition(id);
            }}
            animate={{
              ...variants,
              transition: {
                ...gdsEase12,
                delay: `${index / 10}`,
              },
            }}
            className="absolute inset-0 z-50  bg-black2-900 "
          ></motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const tap = (
  <svg
    height="32px"
    width="32px"
    className="fill-current"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 96.001 96"
  >
    <g display="none">
      <g display="inline" opacity="0.2">
        <g>
          <path
            fill="#000000"
            stroke="#000000"
            stroke-width="0.5"
            stroke-miterlimit="10"
            d="M90.593,84.536     c0,3.331-2.727,6.058-6.057,6.058H11.65c-3.33,0-6.057-2.727-6.057-6.058V11.65c0-3.331,2.727-6.057,6.057-6.057h72.886     c3.33,0,6.057,2.726,6.057,6.057V84.536z"
          ></path>
          <path
            fill="#000000"
            stroke="#000000"
            stroke-width="0.5"
            stroke-miterlimit="10"
            d="M20.738,94.594c-3.074,0-5.59-2.564-5.59-5.703     V7.295c0-3.136,2.516-5.701,5.59-5.701h54.54c3.074,0,5.588,2.565,5.588,5.701v81.596c0,3.139-2.514,5.703-5.588,5.703H20.738z"
          ></path>
          <path
            fill="#000000"
            stroke="#000000"
            stroke-width="0.5"
            stroke-miterlimit="10"
            d="M7.266,80.885     c-3.176,0-5.773-2.486-5.773-5.529V20.643c0-3.04,2.598-5.527,5.773-5.527h81.448c3.176,0,5.773,2.487,5.773,5.527v54.713     c0,3.043-2.598,5.529-5.773,5.529H7.266z"
          ></path>
        </g>
        <circle
          fill="#000000"
          stroke="#000000"
          stroke-width="0.5"
          stroke-miterlimit="10"
          cx="48"
          cy="48"
          r="19.363"
        ></circle>
        <circle
          fill="#000000"
          stroke="#000000"
          stroke-width="0.5"
          stroke-miterlimit="10"
          cx="48"
          cy="48"
          r="46.5"
        ></circle>
        <line
          fill="#000000"
          stroke="#000000"
          stroke-width="0.5"
          stroke-miterlimit="10"
          x1="0.008"
          y1="0.008"
          x2="95.991"
          y2="95.992"
        ></line>
        <line
          fill="#000000"
          stroke="#000000"
          stroke-width="0.5"
          stroke-miterlimit="10"
          x1="95.991"
          y1="0.008"
          x2="0.008"
          y2="95.992"
        ></line>
      </g>
    </g>
    <g>
      <path d="M60.501,4.75h-4.165h-0.835h-5h-5h-5h-5h-5h-5h-5h-5h-5h-5h-0.75v5.75v5v5v5v5v5v5v5v5v5v0.835h51.585V6.25h4.165V4.75z    M54.836,54.835H6.251V50.5v-5v-5v-5v-5v-5v-5v-5v-5V6.25h4.25h5h5h5h5h5h5h5h5h4.335V54.835z"></path>
      <rect x="55.501" y="89.75" width="5" height="1.5"></rect>
      <rect x="65.501" y="89.75" width="5" height="1.5"></rect>
      <rect x="65.501" y="4.75" width="5" height="1.5"></rect>
      <rect x="5.501" y="89.75" width="5" height="1.5"></rect>
      <rect x="75.501" y="89.75" width="5" height="1.5"></rect>
      <rect x="35.501" y="89.75" width="5" height="1.5"></rect>
      <rect x="4.751" y="80.5" width="1.5" height="5"></rect>
      <rect x="15.501" y="89.75" width="5" height="1.5"></rect>
      <rect x="4.751" y="70.5" width="1.5" height="5"></rect>
      <rect x="25.501" y="89.75" width="5" height="1.5"></rect>
      <rect x="4.751" y="60.5" width="1.5" height="5"></rect>
      <rect x="75.501" y="4.75" width="5" height="1.5"></rect>
      <rect x="45.501" y="89.75" width="5" height="1.5"></rect>
      <rect x="89.751" y="60.5" width="1.5" height="5"></rect>
      <rect x="85.501" y="89.75" width="5" height="1.5"></rect>
      <rect x="89.751" y="20.5" width="1.5" height="5"></rect>
      <rect x="89.751" y="10.5" width="1.5" height="5"></rect>
      <rect x="89.751" y="50.5" width="1.5" height="5"></rect>
      <rect x="85.501" y="4.75" width="5" height="1.5"></rect>
      <rect x="89.751" y="30.5" width="1.5" height="5"></rect>
      <rect x="89.751" y="40.5" width="1.5" height="5"></rect>
      <rect x="89.751" y="70.5" width="1.5" height="5"></rect>
      <rect x="89.751" y="80.5" width="1.5" height="5"></rect>
    </g>
  </svg>
);

const esc = (
  <svg
    height="64px"
    width="64px"
    className="fill-current"
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    x="0px"
    y="0px"
    viewBox="0 0 64 64"
  >
    <g>
      <g>
        <path d="M50.325,50.853h-36.65c-1.618,0-2.935-1.316-2.935-2.935v-36.65c0-1.618,1.316-2.935,2.935-2.935h36.65    c1.618,0,2.935,1.316,2.935,2.935v36.65C53.26,49.536,51.943,50.853,50.325,50.853z M13.675,10.333    c-0.516,0-0.935,0.419-0.935,0.935v36.65c0,0.516,0.419,0.935,0.935,0.935h36.65c0.516,0,0.935-0.419,0.935-0.935v-36.65    c0-0.516-0.419-0.935-0.935-0.935H13.675z"></path>
      </g>
    </g>
    <g>
      <path d="M27.434,28.435h-5.165v4.79h5.756v1.439h-7.472V21.377h7.177v1.438h-5.461v4.199h5.165V28.435z"></path>
      <path d="M29.953,32.89c0.513,0.335,1.42,0.69,2.287,0.69c1.262,0,1.854-0.631,1.854-1.42c0-0.828-0.493-1.281-1.774-1.754   c-1.715-0.611-2.523-1.558-2.523-2.701c0-1.538,1.242-2.8,3.292-2.8c0.966,0,1.813,0.276,2.347,0.592L35,26.759   c-0.374-0.236-1.064-0.552-1.951-0.552c-1.025,0-1.597,0.591-1.597,1.301c0,0.788,0.571,1.144,1.813,1.616   c1.656,0.631,2.504,1.459,2.504,2.879c0,1.676-1.302,2.858-3.568,2.858c-1.045,0-2.011-0.257-2.682-0.65L29.953,32.89z"></path>
      <path d="M44.796,34.31c-0.453,0.236-1.459,0.552-2.74,0.552c-2.878,0-4.751-1.952-4.751-4.869c0-2.938,2.011-5.067,5.126-5.067   c1.025,0,1.932,0.257,2.405,0.493l-0.395,1.341c-0.414-0.236-1.064-0.454-2.011-0.454c-2.188,0-3.371,1.617-3.371,3.608   c0,2.208,1.419,3.568,3.312,3.568c0.986,0,1.637-0.257,2.13-0.474L44.796,34.31z"></path>
    </g>
  </svg>
);
