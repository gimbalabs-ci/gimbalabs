import { useState, useEffect } from "react";

export default function useWindowSize() {
  function getSize() {
    let obj = {
      width: 0,
      height: 0,
    };

    if (typeof window !== "undefined") {
      obj = { width: window.innerWidth, height: window.innerHeight };
    }

    return obj;
  }

  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
