import React, { RefObject, useState } from "react";
import { HTMLDivProps } from "types";
import * as S from "./elements";

interface SellNftProps extends HTMLDivProps {
  popupOpened: boolean;
  togglePopup: (state: boolean) => () => void;
  ref?: RefObject<HTMLDivElement>;
}

export const SellNft: React.FC<SellNftProps> = ({ popupOpened, togglePopup, ...props }) => {
  return (
    <>
      <S.Popup popupOpened={popupOpened} togglePopup={togglePopup(false)} />
      <S.Container {...props}>
        <S.Title>Sell NFT</S.Title>
        <S.SellNftForm popupOpened={popupOpened} togglePopup={togglePopup} />
      </S.Container>
    </>
  );
};
