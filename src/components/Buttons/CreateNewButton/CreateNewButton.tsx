import * as S from "./elements";
import { RefObject, useState } from "react";
import type { HTMLButtonProps } from "types";

export interface CreateNewButtonProps extends HTMLButtonProps {
  ref?: RefObject<HTMLButtonElement>;
}

export const CreateNewButton: React.FC<CreateNewButtonProps> = ({ children, ...props }) => {
  return (
    <S.Button {...props}>
      <S.Text>{children}</S.Text>
      <S.Icon content='\2b' font='--fa-font-solid' />
    </S.Button>
  );
};
