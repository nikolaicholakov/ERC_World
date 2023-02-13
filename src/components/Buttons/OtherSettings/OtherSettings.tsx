import * as S from "./elements";
import { RefObject, useState } from "react";
import type { HTMLButtonProps } from "types";

export interface IOtherSettingsProps extends HTMLButtonProps {
  ref?: RefObject<HTMLButtonElement>;
}

export const OtherSettings: React.FC<IOtherSettingsProps> = ({ ...props }) => {
  return (
    <S.Button {...props}>
      <S.Icon content='\f141' font='--fa-font-solid' />
    </S.Button>
  );
};
