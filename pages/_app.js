import "../styles/globals.css";
import Router from "next/router";
import { useState, useEffect } from "react";
import Loader from "../components/loader";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setIsLoading(true);
    });
    Router.events.on("routeChangeComplete", (url) => {
      setIsLoading(false);
    });

    Router.events.on("routeChangeError", (url) => {
      setIsLoading(false);
    });
  }, [Router]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {isLoading && <Loader />}
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
