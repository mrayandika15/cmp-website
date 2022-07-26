import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import themes from "../themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={themes}>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}

export default MyApp;
