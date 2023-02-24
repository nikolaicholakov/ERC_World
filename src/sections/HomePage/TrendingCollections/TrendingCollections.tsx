import React, { RefObject, useEffect, useState } from "react";
import { ITrendingCollectionsSwiperCard } from "types";
import * as S from "./elements";

import { useQueries } from "hooks";
import { AxiosError } from "axios";

interface ITrendingCollectionsProps {
  ref?: RefObject<HTMLDivElement>;
}
export const TrendingCollections: React.FC<ITrendingCollectionsProps> = ({ ...props }) => {
  const [trendingCollectionCards, setTrendingCollectionCards] = useState<
    ITrendingCollectionsSwiperCard[]
  >([]);

  const query = useQueries();

  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(10);
  const [step, setStep] = useState(10);
  const [queryError, setQueryError] = useState<AxiosError | null>(null);

  const loadMore = () => {
    setStartIndex(startIndex + step);
    setLastIndex(lastIndex + step);
  };

  const { status, data, error, isFetching, isPreviousData } = query.GET.collections.trending(
    startIndex,
    lastIndex
  );

  useEffect(() => {
    if (data) {
      if (trendingCollectionCards[trendingCollectionCards.length - 1] === data[data.length - 1]) {
        return;
      } else {
        setTrendingCollectionCards(oldCollection => [...oldCollection, ...data]);
      }
    } else {
      if (trendingCollectionCards.length === 0) {
        setTrendingCollectionCards([]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (error) {
      setStartIndex(startIndex - step);
      setLastIndex(lastIndex - step);
      setQueryError(error.response?.data.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <S.Container {...props}>
      <S.SectionHeading>Trending Collections</S.SectionHeading>
      <S.Swiper
        isLoading={isFetching}
        loadMoreCollections={loadMore}
        swiperCards={trendingCollectionCards}
      />
      <span>{queryError}</span>
    </S.Container>
  );
};
