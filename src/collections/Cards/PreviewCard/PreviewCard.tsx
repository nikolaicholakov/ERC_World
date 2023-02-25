import { RefObject } from "react";
import { HTMLDivProps } from "types";
import * as S from "./elements";

export interface PreviewCardProps extends HTMLDivProps {
  image: string | ArrayBuffer | null;
  nftName: string;
  multiple: boolean;
  amountOfCopies: number | undefined;
  ref?: RefObject<HTMLDivElement>;
}

export const PreviewCard: React.FC<PreviewCardProps> = ({
  multiple,
  amountOfCopies,
  nftName,
  image,
  ...props
}) => {
  return (
    <S.Container {...props}>
      {/* <S.Image img={backgroundImage} objectFit='cover' /> */}
      <S.ImgContainer previewSrc={image}>
        <S.LikeButton />
      </S.ImgContainer>
      <S.TextContainer>
        <S.Name>{nftName === "" ? "Preview" : nftName}</S.Name>
        {multiple && (
          <S.MultipleNftsContainer>
            <S.Span>Amount of copies</S.Span>
            <S.Span>{amountOfCopies ? amountOfCopies : 0}</S.Span>
          </S.MultipleNftsContainer>
        )}
      </S.TextContainer>
    </S.Container>
  );
};
