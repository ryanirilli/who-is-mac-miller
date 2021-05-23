import { ChakraProvider } from "@chakra-ui/react";
import { WindowSizeContextProvider } from "../components/WindowSizeContext";
import theme from "../design-system/theme";

console.log(theme);

function MyApp({ Component, pageProps }) {
  return (
    <WindowSizeContextProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </WindowSizeContextProvider>
  );
}

export default MyApp;
