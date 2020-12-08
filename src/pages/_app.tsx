import "tailwindcss/tailwind.css";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

import { Main } from "@components/Main";
import { useApollo } from "@lib/apolloClient";

function CustomApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Main>
        <Component {...pageProps} />
      </Main>
    </ApolloProvider>
  );
}

export default CustomApp;
