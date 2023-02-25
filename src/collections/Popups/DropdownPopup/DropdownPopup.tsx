import React, { RefObject, useEffect, useState } from "react";
import { HTMLDivProps, ICartCard } from "types";
import { useAccount, useBalance, useDisconnect } from "wagmi";
import * as S from "./elements";

interface DropdownPopupProps extends HTMLDivProps {
  popupOpened: boolean;
  togglePopup: (state: boolean) => () => void;
  ref?: RefObject<HTMLDivElement>;
}

export const DropdownPopup: React.FC<DropdownPopupProps> = ({
  popupOpened,
  togglePopup,
  ...props
}) => {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const { data, isError, isLoading } = useBalance({ address });

  const disconnectWallet = () => {
    togglePopup(false)();
    disconnect();
  };

  return (
    <>
      <S.Popup popupOpened={popupOpened} togglePopup={togglePopup(false)} />
      <S.Container {...props}>
        <S.List>
          <S.ListItem>
            <S.WalletAdress />
          </S.ListItem>
          <S.ListItem>ETH Balance: {data?.formatted}</S.ListItem>
          <S.ListItem>
            <S.DisconnectButton onClick={disconnectWallet}>Disoconnect</S.DisconnectButton>
          </S.ListItem>
        </S.List>
      </S.Container>
    </>
  );
};
