import React, { RefObject, useState } from "react";
import { HTMLDivProps } from "types";
import * as S from "./elements";

interface ISellNftProps extends HTMLDivProps {
  popupOpened: boolean;
  togglePopup: (state: boolean) => () => void;
  ref?: RefObject<HTMLDivElement>;
}

export const SellNft: React.FC<ISellNftProps> = ({ popupOpened, togglePopup, ...props }) => {
  return (
    <>
      <S.Popup popupOpened={popupOpened} togglePopup={togglePopup(false)} />
      <S.Container {...props}>
        <S.Title>Sell NFT</S.Title>
        <S.Form popupOpened={popupOpened} togglePopup={togglePopup} />
      </S.Container>
    </>
  );
};
