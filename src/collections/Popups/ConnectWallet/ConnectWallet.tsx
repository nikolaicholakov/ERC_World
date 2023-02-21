import React, { RefObject, useEffect, useState } from "react";
import { HTMLDivProps } from "types";
import { useConnect } from "wagmi";
// import { connectMetaMask } from "web3";
import * as S from "./elements";

interface IConnectWalletProps extends HTMLDivProps {
  popupOpened: boolean;
  togglePopup: (state: boolean) => () => void;
  ref?: RefObject<HTMLDivElement>;
}

export const ConnectWallet: React.FC<IConnectWalletProps> = ({
  popupOpened,
  togglePopup,
  ...props
}) => {
  const { connect, connectors, error, isLoading, pendingConnector, isSuccess } = useConnect();

  const connectWallet = (connector: any) => () => {
    connect({ connector });
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <S.Popup popupOpened={popupOpened} togglePopup={togglePopup(false)} />
      <S.Container {...props}>
        <S.TextContainer>
          <S.Title>Connect Your Wallet</S.Title>
          <S.SubTitle>
            If you don't have a wallet yet, you can select a provider and create one now.
          </S.SubTitle>
        </S.TextContainer>
        <S.WalletTypesContainer>
          {/* <S.WalletContainer onClick={connectWithMetaMask}>
            <S.WalletType>MetaMask</S.WalletType>
          </S.WalletContainer> */}
          {connectors.map(connector => (
            <S.WalletContainer key={connector.name} onClick={connectWallet(connector)}>
              <S.WalletType key={connector.id}>
                {connector.name}
                {!connector.ready && " (unsupported)"}
                {isLoading && connector.id === pendingConnector?.id && " (connecting)"}
              </S.WalletType>
            </S.WalletContainer>
          ))}
          {/* <S.WalletContainer>
            <S.WalletType>Coinbase</S.WalletType>
          </S.WalletContainer>
          <S.WalletContainer onClick={connectwithWalletConnect}>
            <S.WalletType>WalletConnect</S.WalletType>
          </S.WalletContainer> */}
        </S.WalletTypesContainer>
        <S.ButtonsContainer>
          <S.Button onClick={togglePopup(false)}>Cancel</S.Button>
        </S.ButtonsContainer>
      </S.Container>
    </>
  );
};
