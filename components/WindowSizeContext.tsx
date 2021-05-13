import React, { createContext } from "react";
import useWindowSize from "../hooks/useWindowSize";
import type { WindowSize } from "../types/window-size";

export const WindowSizeContext = createContext<WindowSize>({
  width: "100vw",
  height: "100vh",
});

interface WindowSizeContextProviderProps {
  children: React.ReactNode;
}

export function WindowSizeContextProvider({
  children,
}: WindowSizeContextProviderProps): JSX.Element {
  const value = useWindowSize();
  return (
    <WindowSizeContext.Provider value={value}>
      {children}
    </WindowSizeContext.Provider>
  );
}
