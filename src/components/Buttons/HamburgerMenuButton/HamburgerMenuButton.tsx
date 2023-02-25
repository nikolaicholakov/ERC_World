import * as S from "./elements";
import { RefObject } from "react";
import type { HTMLButtonProps } from "types";

export interface HamburgerMenuButtonProps extends HTMLButtonProps {
  menuOpened: boolean;
  ref?: RefObject<HTMLButtonElement>;
}

export const HamburgerMenuButton: React.FC<HamburgerMenuButtonProps> = ({
  menuOpened,
  ...props
}) => {
  return (
    <S.Button {...props}>
      {menuOpened ? (
        <S.Icon content='\f00d' font='--fa-font-solid' />
      ) : (
        <S.Icon content='\f0c9' font='--fa-font-solid' />
      )}
    </S.Button>
  );
};
