import { extendTheme } from "@chakra-ui/react";

const typeface = {
  heading: "novecento-sans, sans-serif",
};

const textStyles = {
  h1: {
    fontSize: ["3.052rem", null, "3.815rem"],
    fontFamily: typeface.heading,
    fontWeight: 200,
    fontStyle: "normal",
    letterSpacing: "-4px",
  },
  h2: {
    fontSize: ["2.441rem", null, "3.052rem"],
    fontFamily: typeface.heading,
    fontWeight: 200,
    fontStyle: "normal",
    letterSpacing: "-2px",
    lineHeight: "110%",
  },
};

const theme = extendTheme({
  typeface,
  textStyles: {
    ...textStyles,
    h1Bold: {
      ...textStyles.h1,
      fontWeight: 700,
    },
  },
});

export default theme;
