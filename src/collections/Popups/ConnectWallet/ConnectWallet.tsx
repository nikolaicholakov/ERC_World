import { useWalletConnected } from "hooks";
import React, { RefObject, useState } from "react";
import { HTMLDivProps } from "types";
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
  const { setWalletConnected } = useWalletConnected();

  const connectWallet = () => {
    togglePopup(false)();
    setWalletConnected(true);
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
        <S.ButtonsContainer>
          <S.Button onClick={togglePopup(false)}>Cancel</S.Button>
          <S.Button onClick={connectWallet}>Connect</S.Button>
        </S.ButtonsContainer>
      </S.Container>
    </>
  );
};
