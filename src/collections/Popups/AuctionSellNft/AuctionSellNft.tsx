import React, { RefObject, useState } from "react";
import { HTMLDivProps } from "types";
import * as S from "./elements";

interface IAuctionSellNftProps extends HTMLDivProps {
  popupOpened: boolean;
  togglePopup: (state: boolean) => () => void;
  ref?: RefObject<HTMLDivElement>;
}

export const AuctionSellNft: React.FC<IAuctionSellNftProps> = ({
  popupOpened,
  togglePopup,
  ...props
}) => {
  return (
    <>
      <S.Popup popupOpened={popupOpened} togglePopup={togglePopup(false)} />
      <S.Container {...props}>
        <S.Form togglePopup={togglePopup} />
      </S.Container>
    </>
  );
};
