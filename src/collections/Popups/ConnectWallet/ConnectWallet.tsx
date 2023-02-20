import { useWeb3Modal } from "@web3modal/react";
import { useWalletConnected } from "hooks";
import React, { RefObject, useState } from "react";
import { HTMLDivProps } from "types";
import { connectMetaMask } from "web3";
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
  const connectWithMetaMask = async () => {
    try {
      await connectMetaMask();
      togglePopup(false)();
      document.body.style.overflow = "auto";
    } catch (e: any) {
      alert(e.message);
      console.log(e);
    }
  };

  const { close, isOpen, open, setDefaultChain } = useWeb3Modal();

  const connectwithWalletConnect = async () => {
    togglePopup(false)();
    await open();
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
          <S.WalletContainer onClick={connectWithMetaMask}>
            <S.WalletType>MetaMask</S.WalletType>
          </S.WalletContainer>
          <S.WalletContainer>
            <S.WalletType>Coinbase</S.WalletType>
          </S.WalletContainer>
          <S.WalletContainer onClick={connectwithWalletConnect}>
            <S.WalletType>WalletConnect</S.WalletType>
          </S.WalletContainer>
        </S.WalletTypesContainer>
        <S.ButtonsContainer>
          <S.Button onClick={togglePopup(false)}>Cancel</S.Button>
        </S.ButtonsContainer>
      </S.Container>
    </>
  );
};
