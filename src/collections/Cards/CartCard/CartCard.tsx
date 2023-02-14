import { RefObject } from "react";
import { ICartCard } from "types";
import * as S from "./elements";
import "swiper/css";

export interface CartCardProps extends ICartCard {
  ref?: RefObject<HTMLDivElement>;
}

export const CartCard: React.FC<CartCardProps> = ({
  priceInCrypto,
  priceInDollars,
  collectionName,
  nftName,
  image,
  ...props
}) => {
  return (
    <S.Container {...props}>
      <S.RemoveButton content='\f00d' font='--fa-font-solid' />
      <S.ImgContainer>
        <S.Image src={image} layout='fill' objectFit='cover' />
      </S.ImgContainer>
      <S.NamesContainer>
        <S.CollectionName>{collectionName}</S.CollectionName>
        <S.NftName>{nftName}</S.NftName>
      </S.NamesContainer>
      <S.PriceContainer>
        <S.PriceInCrypto>{priceInCrypto} MATIC</S.PriceInCrypto>
        <S.PriceInDollars>${priceInDollars}</S.PriceInDollars>
      </S.PriceContainer>
    </S.Container>
  );
};
