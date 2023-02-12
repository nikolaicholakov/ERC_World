import React, { RefObject } from "react";
import { HTMLDivProps } from "types";
import * as S from "./elements";

interface INftCreatorOrCollectionProps extends HTMLDivProps {
  type: "creator" | "collection";
  ref?: RefObject<HTMLDivElement>;
}

export const NftCreatorOrCollection: React.FC<INftCreatorOrCollectionProps> = ({
  type,
  ...props
}) => (
  <S.Container {...props}>
    <S.ImgContainer>
      <S.Image src={"/imgs/user1.png"} layout='fill' />
    </S.ImgContainer>
    <S.TextBlock>
      <S.Type>{type}</S.Type>
      <S.Name>{type} name</S.Name>
    </S.TextBlock>
  </S.Container>
);
