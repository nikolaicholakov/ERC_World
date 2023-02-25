import * as S from "./elements";
import { RefObject, useState } from "react";
import type { HTMLButtonProps } from "types";

export interface OtherSettingsProps extends HTMLButtonProps {
  ref?: RefObject<HTMLButtonElement>;
}

export const OtherSettings: React.FC<OtherSettingsProps> = ({ ...props }) => {
  return (
    <S.Button {...props}>
      <S.Icon content='\f141' font='--fa-font-solid' />
    </S.Button>
  );
};
