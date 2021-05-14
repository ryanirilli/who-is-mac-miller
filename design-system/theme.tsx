import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  textStyles: {
    h1: {
      fontSize: ["48px", "72px"],
      lineHeight: "110%",
      fontFamily: "bely,serif",
      fontWeight: 400,
      fontStyle: "normal",
      letterSpacing: "-5px",
    },
  },
});

export default theme;
