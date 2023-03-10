import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "styles";
import { Header, Footer } from "collections";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { WalletContextProvider } from "contexts";
import React from "react";
import { configureChains, createClient, goerli, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, goerli],
  [publicProvider()]
);

const queryClient = new QueryClient();

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true
      }
    })
    // new InjectedConnector({
    //   chains,
    //   options: {
    //     name: "Injected",
    //     shimDisconnect: true
    //   }
    // })
  ],
  provider,
  webSocketProvider
});

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
        <QueryClientProvider client={queryClient}>
          <WagmiConfig client={client}>
            <Header />
            <React.StrictMode>
              <Component {...pageProps} />
            </React.StrictMode>
            <Footer />
          </WagmiConfig>
        </QueryClientProvider>
      </WalletContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
