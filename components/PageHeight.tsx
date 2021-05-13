import React, { useContext } from "react";
import { WindowSizeContext } from "../components/WindowSizeContext";
import { Box, BoxProps } from "@chakra-ui/react";

export default function PageHeight(props: BoxProps): JSX.Element {
  const { height } = useContext(WindowSizeContext);
  return <Box {...props} h={height} />;
}
