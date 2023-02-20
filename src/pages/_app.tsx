import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "styles";
import { Header, Footer } from "collections";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { WalletContextProvider } from "contexts";
import React from "react";
import { EthereumClient, modalConnectors, walletConnectProvider } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";

// wallet connect init
const chains = [arbitrum, mainnet, polygon];

console.log(typeof process.env.NEXT_PUBLIC_WALLET_CONNECT);

const { provider } = configureChains(chains, [
  walletConnectProvider({
    projectId:
      typeof process.env.NEXT_PUBLIC_WALLET_CONNECT === "string"
        ? process.env.NEXT_PUBLIC_WALLET_CONNECT
        : ""
  })
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT,
    version: "2",
    appName: "web3Modal",
    chains
  }),
  provider
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

const modalConfig = {
  autoConnect: true,
  ethereumClient,
  projectId:
    typeof process.env.NEXT_PUBLIC_WALLET_CONNECT === "string"
      ? process.env.NEXT_PUBLIC_WALLET_CONNECT
      : ""
};

// storyblokInit({
//   accessToken: process?.env?.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
//   use: [apiPlugin],
// });

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <WalletContextProvider>
          <Head>
            <title>app title goes here</title>
            <meta name='description' content='app description goes here' />

            <meta
              name='viewport'
              content='width=device-width, initial-scale=1.0, user-scalable=no'
            />

            <link rel='icon' href='/favicon.ico' />
          </Head>
          <GlobalStyles />
          <WagmiConfig client={wagmiClient}>
            <Header />
            <React.StrictMode>
              <Component {...pageProps} />
            </React.StrictMode>
            <Footer />
          </WagmiConfig>
        </WalletContextProvider>
      </ThemeProvider>

      <Web3Modal {...modalConfig} />
    </>
  );
}

export default MyApp;
