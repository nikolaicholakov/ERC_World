import React, { RefObject } from "react";
import { HTMLAnchorProps } from "types";
import * as S from "./elements";

interface ILogoProps extends HTMLAnchorProps {
  ref?: RefObject<HTMLAnchorElement>;
}

export const Logo: React.FC<ILogoProps> = ({ ...props }) => (
  <S.Container href='/' {...props}>
    <S.Text>LOGO</S.Text>
    {/* <S.Image src={"/imgs/logo.png"} layout='fill' /> */}
  </S.Container>
);
