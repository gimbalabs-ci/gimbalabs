import { useWindowSize } from "../hooks";
// import useFilterState from "../../hooks/useFilterState";
import React, { useEffect, useRef } from "react";

export default function SmoothScroll({ children, triggerRender, halfSpeed }) {
  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 10,
  };

  const calledOnce = React.useRef(false);

  // Run scrollrender once page is loaded.
  useEffect(() => {
    if (calledOnce.current) {
      return;
    } else {
      requestAnimationFrame(() => skewScrolling());
      calledOnce.current = true;
    }
  }, []);

  //set the height of the body.
  //   const { filterBy, searchFilter } = useFilterState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setBodyHeight();
    }, 50);
    return () => clearTimeout(timer);
  }, [size.height, triggerRender]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    if (app.current) {
      app.current.style.height = `${
        scrollContainer.current.getBoundingClientRect().height
      }px`;
    }
  };
  const constant = halfSpeed ? 0.5 : 1;
  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded * constant;
    const acceleration = (difference / size.width) * constant;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container

    if (!scrollContainer.current) {
      return;
    }
    scrollContainer.current.style.transform = `translate3d(0px, -${data.rounded}px, 0)  `;
    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };

  //   if (size.width < 1200) {
  //     return (
  //       <div className="  ">
  //         <div className="flex flex-wrap justify-center w-full ">{children}</div>
  //       </div>
  //     );
  //   } else {
  return (
    <div className="  " ref={app}>
      <div className=" " ref={scrollContainer}>
        {children}
      </div>
    </div>
  );
  //   }
}
