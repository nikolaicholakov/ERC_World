import React, { RefObject, useState } from "react";
import { HTMLDivProps } from "types";
import * as S from "./elements";

interface IPopupProps extends HTMLDivProps {
  popupOpened: boolean;
  togglePopup: () => void;
  ref?: RefObject<HTMLDivElement>;
}

export const Popup: React.FC<IPopupProps> = ({ togglePopup, popupOpened, ...props }) => {
  return <S.PopupContainer onClick={togglePopup}></S.PopupContainer>;
};
