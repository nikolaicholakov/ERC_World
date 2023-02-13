import * as S from "./elements";
import { RefObject, useState } from "react";
import type { HTMLButtonProps } from "types";

export interface ICopyBlockchainAdressProps extends HTMLButtonProps {
  ref?: RefObject<HTMLButtonElement>;
}

export const CopyBlockchainAdress: React.FC<ICopyBlockchainAdressProps> = ({ ...props }) => {
  return (
    <S.Button {...props}>
      0x9E4d3069...C552
      <S.Icon content='\f0c5' font='--fa-font-solid' />
    </S.Button>
  );
};
