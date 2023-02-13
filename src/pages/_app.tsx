import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "styles";
// import { Header, Footer } from "";
import { Header, Footer } from "collections";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { WalletContextProvider } from "contexts";
import React from "react";

// storyblokInit({
//   accessToken: process?.env?.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
//   use: [apiPlugin],
// });

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <WalletContextProvider>
        <Head>
          <title>app title goes here</title>
          <meta name='description' content='app description goes here' />

          <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />

          <link rel='icon' href='/favicon.ico' />
        </Head>
        <GlobalStyles />
        <Header />
        <React.StrictMode>
          <Component {...pageProps} />
        </React.StrictMode>
        <Footer />
      </WalletContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
