import { AxiosError } from "axios";
import { useQueries } from "hooks";
import React, { RefObject, useEffect, useState } from "react";
import { ITrendingCollectionsSwiperCard } from "types";
import * as S from "./elements";

interface RecentlyListedCollectionsProps {
  ref?: RefObject<HTMLDivElement>;
}

export const RecentlyListedCollections: React.FC<RecentlyListedCollectionsProps> = ({
  ...props
}) => {
  const [recentlyListedCollectionCards, setRecentlyListedCollectionCards] = useState<
    Omit<ITrendingCollectionsSwiperCard, "volume">[]
  >([]);

  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(12);
  const [step, setStep] = useState(12);
  const [mutationError, setMutationError] = useState<AxiosError | null>(null);
  const [queryError, setQueryError] = useState<AxiosError | null>(null);

  const query = useQueries();

  const loadMore = () => {
    setStartIndex(startIndex + step);
    setLastIndex(lastIndex + step);
  };

  const { data, error, isFetching, refetch, isPreviousData } = query.GET.collections.recentlyListed(
    startIndex,
    lastIndex
  );

  useEffect(() => {
    if (data) {
      if (
        recentlyListedCollectionCards[recentlyListedCollectionCards.length - 1] ===
        data[data.length - 1]
      ) {
        return;
      } else {
        console.log("data", data.length, "collection", recentlyListedCollectionCards.length);
        if (data.length - 1 + startIndex === recentlyListedCollectionCards.length) {
          setRecentlyListedCollectionCards(oldCollection => [
            ...oldCollection,
            data[data.length - 1]
          ]);
        } else {
          setRecentlyListedCollectionCards(oldCollection => [...oldCollection, ...data]);
        }
      }
    } else {
      if (recentlyListedCollectionCards.length === 0) {
        setRecentlyListedCollectionCards([]);
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

  // testing
  const post = query.POST.collections.recentlyListed();

  const mutateTest = () => {
    post.mutate(
      {
        image: { src: `/imgs/nft1.png`, width: 120, height: 120 },
        name: `Collection Name #2`,
        floor: 100
      },
      {
        onError: (error: AxiosError) => {
          setMutationError(error);
        },
        onSuccess: () => refetch()
      }
    );
  };

  return (
    <S.Container {...props}>
      <S.SectionHeading onClick={mutateTest}>Recently Listed Collections</S.SectionHeading>
      <S.Wrapper>
        <S.CardsContainer>
          {recentlyListedCollectionCards.length === 0 ? (
            <S.LoadMore isLoading={true} />
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
          <>
            <span>{queryError && queryError}</span>
            <S.LoadMore onClick={loadMore} isLoading={isFetching} />
          </>
        )}
      </S.Wrapper>
    </S.Container>
  );
};
