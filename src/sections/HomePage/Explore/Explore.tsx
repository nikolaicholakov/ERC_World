import { fetchExploreCollections } from "pages/api/collections/explore";
import React, { RefObject, useEffect, useState } from "react";
import { IExploreNftCard } from "types";
import { loadMoreCollections } from "utils";
import * as S from "./elements";

interface IExploreProps {
  ref?: RefObject<HTMLDivElement>;
}

export const Explore: React.FC<IExploreProps> = ({ ...props }) => {
  const [exploreCollections, setExploreCollections] = useState<IExploreNftCard[]>([]);

  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(8);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchExploreCollections(startIndex, lastIndex).then(collection =>
      setExploreCollections(collection)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMore = () => {
    loadMoreCollections(
      setIsLoading,
      setExploreCollections,
      fetchExploreCollections,
      startIndex,
      lastIndex,
      setLastIndex,
      setStartIndex
    );
  };

  return (
    <S.Container {...props}>
      <S.SectionHeading>Explore</S.SectionHeading>
      <S.Wrapper>
        <S.CardsContainer>
          {exploreCollections.length === 0 ? (
            "no data"
          ) : (
            <>
              {exploreCollections.map((card, i) => (
                <S.ExploreCard key={"exploreCard" + i} {...card} />
              ))}
              <S.LoadMoreMobile onClick={loadMore} isLoading={isLoading} />
            </>
          )}
        </S.CardsContainer>
      </S.Wrapper>
      {exploreCollections.length !== 0 && <S.LoadMore onClick={loadMore} isLoading={isLoading} />}
    </S.Container>
  );
};
