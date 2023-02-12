import React, { RefObject } from "react";
import { HTMLDivProps } from "types";
import * as S from "./elements";

interface ITableUserProps extends HTMLDivProps {
  img: string;
  ref?: RefObject<HTMLDivElement>;
}

export const TableUser: React.FC<ITableUserProps> = ({ img, children, ...props }) => {
  return (
    <S.Container {...props}>
      <S.ImgWrapper>
        <S.Image src={img} layout='fill' />
      </S.ImgWrapper>
      <S.Name>{children}</S.Name>
    </S.Container>
  );
};
