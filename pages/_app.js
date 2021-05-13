import { ChakraProvider } from "@chakra-ui/react";
import { WindowSizeContextProvider } from "../components/WindowSizeContext";

function MyApp({ Component, pageProps }) {
  return (
    <WindowSizeContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </WindowSizeContextProvider>
  );
}

export default MyApp;
