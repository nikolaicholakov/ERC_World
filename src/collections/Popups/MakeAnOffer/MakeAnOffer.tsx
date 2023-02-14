import { useWalletConnected } from "hooks";
import React, { RefObject, useState } from "react";
import { HTMLDivProps } from "types";
import * as S from "./elements";

interface IMakeAnOfferProps extends HTMLDivProps {
  popupOpened: boolean;
  togglePopup: (state: boolean) => () => void;
  ref?: RefObject<HTMLDivElement>;
}

export const MakeAnOffer: React.FC<IMakeAnOfferProps> = ({
  popupOpened,
  togglePopup,
  ...props
}) => {
  return (
    <>
      <S.Popup popupOpened={popupOpened} togglePopup={togglePopup(false)} />
      <S.Container {...props}>
        <S.Form popupOpened={popupOpened} togglePopup={togglePopup} />
      </S.Container>
    </>
  );
};
