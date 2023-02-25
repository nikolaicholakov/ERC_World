import React, { RefObject, useEffect, useState } from "react";
import { HTMLDivProps } from "types";
import * as S from "./elements";

interface PopupProps extends HTMLDivProps {
  popupOpened: boolean;
  togglePopup: () => void;
  ref?: RefObject<HTMLDivElement>;
}

export const Popup: React.FC<PopupProps> = ({ togglePopup, popupOpened, ...props }) => {
  return (
    <S.PopupContainer {...props} onClick={togglePopup} popupOpened={popupOpened}></S.PopupContainer>
  );
};
