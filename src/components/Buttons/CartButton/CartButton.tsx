import * as S from "./elements";
import { RefObject } from "react";
import type { HTMLButtonProps } from "types";

export interface ICartButtonProps extends HTMLButtonProps {
  ref?: RefObject<HTMLButtonElement>;
}

export const CartButton: React.FC<ICartButtonProps> = ({ ...props }) => {
  return (
    <S.Button {...props}>
      <S.Icon content='\f07a' font='--fa-font-solid' />
    </S.Button>
  );
};
