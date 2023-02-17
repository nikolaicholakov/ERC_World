import { RefObject } from "react";
import { HTMLDivProps } from "types";
import * as S from "./elements";
import "swiper/css";

export interface LoadMoreCard extends HTMLDivProps {
  isLoading: boolean;
  ref?: RefObject<HTMLDivElement>;
}

export const LoadMoreCard: React.FC<LoadMoreCard> = ({ isLoading, ...props }) => {
  return (
    <S.Container {...props}>
      <S.Button>
        {isLoading ? (
          <S.Loader>
            <S.LoaderElement />
            <S.LoaderElement />
            <S.LoaderElement />
            <S.LoaderElement />
            <S.LoaderElement />
            <S.LoaderElement />
            <S.LoaderElement />
            <S.LoaderElement />
            <S.LoaderElement />
            <S.LoaderElement />
            <S.LoaderElement />
            <S.LoaderElement />
          </S.Loader>
        ) : (
          "Load More"
        )}
      </S.Button>
    </S.Container>
  );
};
