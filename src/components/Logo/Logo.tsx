import React, { RefObject } from "react";
import { HTMLAnchorProps } from "types";
import * as S from "./elements";

interface LogoProps extends HTMLAnchorProps {
  ref?: RefObject<HTMLAnchorElement>;
}

export const Logo: React.FC<LogoProps> = ({ ...props }) => (
  <S.Container href='/' {...props}>
    <S.Text>LOGO</S.Text>
  </S.Container>
);
