import * as S from "./elements";
import { RefObject, useState } from "react";
import type { HTMLButtonProps } from "types";

export interface IAddToCartButtonProps extends HTMLButtonProps {
  ref?: RefObject<HTMLButtonElement>;
}

export const AddToCartButton: React.FC<IAddToCartButtonProps> = ({ ...props }) => {
  return (
    <S.Button {...props}>
      <S.Icon content='\f217' font='--fa-font-solid' />
    </S.Button>
  );
};
