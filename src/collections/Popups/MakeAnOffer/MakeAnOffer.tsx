import React, { RefObject, useState } from "react";
import { HTMLDivProps } from "types";
import * as S from "./elements";

interface MakeAnOfferProps extends HTMLDivProps {
  popupOpened: boolean;
  togglePopup: (state: boolean) => () => void;
  ref?: RefObject<HTMLDivElement>;
}

export const MakeAnOffer: React.FC<MakeAnOfferProps> = ({ popupOpened, togglePopup, ...props }) => {
  return (
    <>
      <S.Popup popupOpened={popupOpened} togglePopup={togglePopup(false)} />
      <S.Container {...props}>
        <S.MakeAnOfferForm popupOpened={popupOpened} togglePopup={togglePopup} />
      </S.Container>
    </>
  );
};
