import { fetchTrendingCollections } from "pages/api/collections/trending";
import React, { RefObject, useEffect, useState } from "react";
import { ITrendingCollectionsSwiperCard } from "types";
import * as S from "./elements";

import { useQuery } from "@tanstack/react-query";

interface ITrendingCollectionsProps {
  ref?: RefObject<HTMLDivElement>;
}
export const TrendingCollections: React.FC<ITrendingCollectionsProps> = ({ ...props }) => {
  const [trendingCollectionCards, setTrendingCollectionCards] = useState<
    ITrendingCollectionsSwiperCard[]
  >([]);

  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(10);
  const [step, setStep] = useState(10);

  const loadMore = () => {
    setStartIndex(startIndex + step);
    setLastIndex(lastIndex + step);
  };

  const { status, data, error, isFetching, isPreviousData } = useQuery({
    queryKey: ["trendingCollections", `from=${startIndex}&to=${lastIndex}`],
    queryFn: () => fetchTrendingCollections(startIndex, lastIndex),
    keepPreviousData: true,
    staleTime: 10000
  });

  useEffect(() => {
    if (data) {
      setTrendingCollectionCards(oldCollectionCards => [...oldCollectionCards, ...data]);
    } else {
      setTrendingCollectionCards([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <S.Container {...props}>
      <S.SectionHeading>Trending Collections</S.SectionHeading>
      <S.Swiper
        isLoading={isFetching}
        loadMoreCollections={loadMore}
        swiperCards={trendingCollectionCards}
      />
    </S.Container>
  );
};
