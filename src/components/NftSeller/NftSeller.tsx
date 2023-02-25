import React, { RefObject } from "react";
import { HTMLDivProps } from "types";
import * as S from "./elements";

interface NftSellerProps extends HTMLDivProps {
  ref?: RefObject<HTMLDivElement>;
}

export const NftSeller: React.FC<NftSellerProps> = ({ ...props }) => (
  <S.Container {...props}>
    <S.ImgContainer>
      <S.Image src={"/imgs/user1.png"} layout='fill' />
    </S.ImgContainer>
    <S.TextBlock>
      <S.TextRow>
        <S.Span>Seller</S.Span>
        <S.Name>Seller's Name</S.Name>
      </S.TextRow>
      <S.TextRow>
        <S.PriceInCrypto>0.99 MATIC</S.PriceInCrypto>
        <S.PriceInDollars>($2.82)</S.PriceInDollars>
      </S.TextRow>
    </S.TextBlock>
  </S.Container>
);
