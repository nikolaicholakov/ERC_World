import { ImageProps } from "next/image";
import * as S from "./elements";
import { RelatedPostsSectionProps } from "sections";
import { IStory } from "types";
import { ISbRichtext } from "@storyblok/react";

export interface BlogPostPageProps extends IStory {
  title: string;
  authorName: string;
  date: string;
  summary: string;
  img: ImageProps;
  content: ISbRichtext;
  relatedPosts: RelatedPostsSectionProps;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  authorName,
  content,
  date,
  img,
  summary,
  title,
  relatedPosts,
  ...props
}) => {
  return (
    <S.Container {...props}>
      <S.Author>
        {authorName} <span>- {date}</span>
      </S.Author>
      <S.Summary>{summary}</S.Summary>
      <S.ImageContainer>
        <S.Image {...img} />
      </S.ImageContainer>
      <S.ContentContainer>
        {/* {content.map((paragraph, i) => (
          <S.ContentParagraph key={`${paragraph.substring(0, 10)}-${i}`}>
            {paragraph}
          </S.ContentParagraph>
        ))} */}
      </S.ContentContainer>
      <S.RelatedPostsSection {...relatedPosts} />
    </S.Container>
  );
};
