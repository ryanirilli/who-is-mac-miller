import { useEffect, useState } from "react";

import type { WindowSize } from "../types/window-size";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: "100vw",
    height: "100vh",
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", changeWindowSize);
    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}
