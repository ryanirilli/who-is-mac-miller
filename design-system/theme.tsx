import { extendTheme } from "@chakra-ui/react";

const typeface = {
  heading: "lust-script-fine, serif",
  body: "edita, serif;",
  monospace: `"courier-prime", monospace`,
};

const textStyles = {
  h1: {
    fontSize: ["3.052rem", null, "3.815rem"],
    fontFamily: typeface.heading,
    fontWeight: 100,
    fontStyle: "normal",
  },
  h2: {
    fontSize: ["2.441rem", null, "3.052rem"],
    fontFamily: typeface.heading,
    fontWeight: 100,
    fontStyle: "normal",
    letterSpacing: "-2px",
    lineHeight: "110%",
  },
  p: {
    fontSize: ["1.25rem", null, "1.563rem"],
    fontFamily: typeface.body,
    fontWeight: 400,
    fontStyle: "normal",
  },
  mono: {
    fontFamily: typeface.monospace,
    fontWeight: 400,
    fontStyle: "normal",
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

// console.log(theme);

export default theme;
