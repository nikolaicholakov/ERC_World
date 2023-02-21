import { useQuery } from "@tanstack/react-query";
import { fetchRecentlyListedCollections } from "pages/api/collections/recently-listed";
import React, { RefObject, useEffect, useState } from "react";
import { ITrendingCollectionsSwiperCard } from "types";
import * as S from "./elements";

interface ITrendingCollectionsProps {
  ref?: RefObject<HTMLDivElement>;
}

export const RecentlyListedCollections: React.FC<ITrendingCollectionsProps> = ({ ...props }) => {
  const [recentlyListedCollectionCards, setRecentlyListedCollectionCards] = useState<
    Omit<ITrendingCollectionsSwiperCard, "volume">[]
  >([]);

  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(12);
  const [step, setStep] = useState(12);

  const loadMore = () => {
    setStartIndex(startIndex + step);
    setLastIndex(lastIndex + step);
  };

  const { status, data, error, isFetching, isPreviousData } = useQuery({
    queryKey: ["recentlyListedCollections", `from=${startIndex}&to=${lastIndex}`],
    queryFn: () => fetchRecentlyListedCollections(startIndex, lastIndex),
    keepPreviousData: true,
    staleTime: 10000
  });

  useEffect(() => {
    if (data) {
      setRecentlyListedCollectionCards(oldState => [...oldState, ...data]);
    } else {
      setRecentlyListedCollectionCards([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <S.Container {...props}>
      <S.SectionHeading>Recently Listed Collections</S.SectionHeading>
      <S.Wrapper>
        <S.CardsContainer>
          {recentlyListedCollectionCards.length === 0 ? (
            "no data"
          ) : (
            <>
              {recentlyListedCollectionCards.map((card, i) => (
                <S.CollectionCard key={"recentlyListedCollection" + i} {...card} />
              ))}
              <S.LoadMoreMobile onClick={loadMore} isLoading={isFetching} />
            </>
          )}
        </S.CardsContainer>
        {recentlyListedCollectionCards.length !== 0 && (
          <S.LoadMore onClick={loadMore} isLoading={isFetching} />
        )}
      </S.Wrapper>
    </S.Container>
  );
};
