import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "@fontsource/lato";

import { MainContext } from "../context";
import { themes } from "../themes";
import "nprogress/nprogress.css";

import Router from "next/router";
import NProgress from "nprogress";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <ChakraProvider theme={themes}>
      <MainContext>
        <Component {...pageProps} />
      </MainContext>
    </ChakraProvider>
  );
}

export default MyApp;
