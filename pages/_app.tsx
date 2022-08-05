import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { MainContext } from "../context";
import { themes } from "../themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={themes}>
      <MainContext>
        <Component {...pageProps} />
      </MainContext>
    </ChakraProvider>
  );
}

export default MyApp;
