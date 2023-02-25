import React, { RefObject, useEffect, useState } from "react";
import { HTMLDivProps } from "types";
import { useConnect } from "wagmi";
// import { connectMetaMask } from "web3";
import * as S from "./elements";

interface ConnectWalletProps extends HTMLDivProps {
  popupOpened: boolean;
  togglePopup: (state: boolean) => () => void;
  ref?: RefObject<HTMLDivElement>;
}

export const ConnectWallet: React.FC<ConnectWalletProps> = ({
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
          {connectors.map(connector => (
            <S.WalletContainer key={connector.name} onClick={connectWallet(connector)}>
              <S.WalletType key={connector.id}>
                {connector.name}
                {!connector.ready && " (unsupported)"}
                {isLoading && connector.id === pendingConnector?.id && " (connecting)"}
              </S.WalletType>
            </S.WalletContainer>
          ))}
        </S.WalletTypesContainer>
        <S.ButtonsContainer>
          <S.CancelButton onClick={togglePopup(false)}>Cancel</S.CancelButton>
        </S.ButtonsContainer>
      </S.Container>
    </>
  );
};
