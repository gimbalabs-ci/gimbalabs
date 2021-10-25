import { RefObject, useCallback, useEffect, useState } from "react";
import useEventListener from "./useEventListener";

function useElementSize(elementRef, id) {
  const [size, setSize] = useState({
    width: 300,
    height: 256,
  });

  // Prevent too many rendering using useCallback
  const updateSize = useCallback(() => {
    const node = elementRef?.current;
    if (node) {
      setSize({
        width: node.offsetWidth || 0,
        height: node.offsetHeight || 0,
      });
    }
  }, [elementRef]);

  // Initial size on mount
  // useEffect(() => {
  //   updateSize();
  //   console.log(id);
  //   // const timer = setTimeout(() => {
  //   // }, 300);
  //   // return () => clearTimeout(timer);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [id]);

  useEventListener("resize", updateSize);

  return size;
}

export default useElementSize;
