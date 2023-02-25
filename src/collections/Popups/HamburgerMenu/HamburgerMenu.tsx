import React, { RefObject, useState } from "react";
import { HTMLDivProps } from "types";
import * as S from "./elements";

interface HamburgerMenuPopupProps extends HTMLDivProps {
  popupOpened: boolean;
  togglePopup: (state: boolean) => () => void;
  ref?: RefObject<HTMLDivElement>;
}

export const HamburgerMenuPopup: React.FC<HamburgerMenuPopupProps> = ({
  popupOpened,
  togglePopup,
  ...props
}) => {
  return (
    <>
      <S.Popup popupOpened={popupOpened} togglePopup={togglePopup(false)} />
      <S.HamburgerMenuContainer popupOpened={popupOpened} {...props}>
        <S.Logo />
        <S.NavigationContainer>
          <S.Navigation>
            <S.NavItem>
              <S.Link href='#'>Explore</S.Link>
            </S.NavItem>
            <S.NavItem>
              <S.Link href='#'>Launchpad</S.Link>
            </S.NavItem>
            <S.NavItem>
              <S.Link href='#'>Staking</S.Link>
            </S.NavItem>
          </S.Navigation>
        </S.NavigationContainer>
      </S.HamburgerMenuContainer>
    </>
  );
};
