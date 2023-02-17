import * as S from "./elements";
import type { HTMLDivProps } from "types";
import { RefObject } from "react";

export interface HamburgerMenuProps extends HTMLDivProps {
  ref?: RefObject<HTMLDivElement>;
}

export const HamburgerMenu = ({ ...props }: HamburgerMenuProps) => {
  return (
    <S.HamburgerMenuContainer {...props}>
      <S.Logo />
      content
    </S.HamburgerMenuContainer>
  );
};
