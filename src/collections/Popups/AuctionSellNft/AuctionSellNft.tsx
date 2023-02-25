import React, { RefObject, useState } from "react";
import { HTMLDivProps } from "types";
import * as S from "./elements";

interface AuctionSellNftProps extends HTMLDivProps {
  popupOpened: boolean;
  togglePopup: (state: boolean) => () => void;
  ref?: RefObject<HTMLDivElement>;
}

export const AuctionSellNft: React.FC<AuctionSellNftProps> = ({
  popupOpened,
  togglePopup,
  ...props
}) => {
  return (
    <>
      <S.Popup popupOpened={popupOpened} togglePopup={togglePopup(false)} />
      <S.Container {...props}>
        <S.AuctionSellNftForm togglePopup={togglePopup} />
      </S.Container>
    </>
  );
};
