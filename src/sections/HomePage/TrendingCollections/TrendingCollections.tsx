import { fetchTrendingCollections } from "pages/api/collections/trending";
import React, { RefObject, useEffect, useState } from "react";
import { ITrendingCollectionsSwiperCard } from "types";
import { loadMoreCollections } from "utils";
import * as S from "./elements";

interface ITrendingCollectionsProps {
  ref?: RefObject<HTMLDivElement>;
}
export const TrendingCollections: React.FC<ITrendingCollectionsProps> = ({ ...props }) => {
  const [trendingCollectionCards, setTrendingCollectionCards] = useState<
    ITrendingCollectionsSwiperCard[]
  >([]);

  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(10);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTrendingCollections(startIndex, lastIndex).then(collection =>
      setTrendingCollectionCards(collection)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMore = () => {
    loadMoreCollections(
      setIsLoading,
      setTrendingCollectionCards,
      fetchTrendingCollections,
      startIndex,
      lastIndex,
      setLastIndex,
      setStartIndex
    );
  };

  return (
    <S.Container {...props}>
      <S.SectionHeading>Trending Collections</S.SectionHeading>
      <S.Swiper
        isLoading={isLoading}
        loadMoreCollections={loadMore}
        swiperCards={trendingCollectionCards}
      />
    </S.Container>
  );
};
