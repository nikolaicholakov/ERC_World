import * as S from "./elements";
import { ImageProps } from "next/image";

export interface RelatedPostsSectionProps {
  title: string;
  relatedPosts: {
    img: ImageProps;
    date: string;
    readDuration: number;
    title: string;
  }[];
}

export const RelatedPostsSection: React.FC<RelatedPostsSectionProps> = ({
  relatedPosts,
  ...props
}) => {
  return (
    <S.Container {...props}>
      {relatedPosts.map(({ date, img, readDuration, title }, i) => (
        <S.RelatedPostCardContainer key={`${title.substring(0, 10)}-${i}`}>
          <S.RelatedPostCardImageContainer>
            <S.Image {...img} />
          </S.RelatedPostCardImageContainer>
          <S.RelatedPostCardInfo>
            {date} . {readDuration} min read
          </S.RelatedPostCardInfo>
          <S.RelatedPostCardTitle>{title}</S.RelatedPostCardTitle>
        </S.RelatedPostCardContainer>
      ))}
    </S.Container>
  );
};
