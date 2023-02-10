import * as S from "./elements";
import { RefObject, useState } from "react";
import type { HTMLButtonProps } from "types";

export interface ICartButtonProps extends HTMLButtonProps {
  ref?: RefObject<HTMLButtonElement>;
}

export const CartButton: React.FC<ICartButtonProps> = ({ ...props }) => {
  const [itemsInCart, setItemsInCart] = useState<number>(10);

  return (
    <S.Button {...props}>
      {itemsInCart === 0 ? null : <S.ItemsInCart>{itemsInCart}</S.ItemsInCart>}
      <S.Icon content='\f07a' font='--fa-font-solid' />
    </S.Button>
  );
};
