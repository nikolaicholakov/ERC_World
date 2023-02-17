import { fetchRecentlyListedCollections } from "pages/api/collections/recently-listed";
import React, { RefObject, useEffect, useState } from "react";
import { ITrendingCollectionsSwiperCard } from "types";
import { loadMoreCollections } from "utils";
import * as S from "./elements";

interface ITrendingCollectionsProps {
  ref?: RefObject<HTMLDivElement>;
}

const swiperCards: Omit<ITrendingCollectionsSwiperCard, "volume">[] = [
  {
    image: { src: "/imgs/nft1.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.01
  },
  {
    image: { src: "/imgs/nft2.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.31
  },
  {
    image: { src: "/imgs/nft3.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 1.31
  },
  {
    image: { src: "/imgs/nft1.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.01
  },
  {
    image: { src: "/imgs/nft2.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.31
  },
  {
    image: { src: "/imgs/nft3.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 1.31
  },
  {
    image: { src: "/imgs/nft1.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.01
  },
  {
    image: { src: "/imgs/nft2.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.31
  },
  {
    image: { src: "/imgs/nft3.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 1.31
  },
  {
    image: { src: "/imgs/nft1.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.01
  },
  {
    image: { src: "/imgs/nft2.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.31
  },
  {
    image: { src: "/imgs/nft3.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 1.31
  }
];

export const RecentlyListedCollections: React.FC<ITrendingCollectionsProps> = ({ ...props }) => {
  const [recentlyListedCollectionCards, setRecentlyListedCollectionCards] = useState<
    Omit<ITrendingCollectionsSwiperCard, "volume">[]
  >([]);

  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(12);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchRecentlyListedCollections(startIndex, lastIndex).then(collection =>
      setRecentlyListedCollectionCards(collection)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMore = () => {
    loadMoreCollections(
      setIsLoading,
      setRecentlyListedCollectionCards,
      fetchRecentlyListedCollections,
      startIndex,
      lastIndex,
      setLastIndex,
      setStartIndex
    );
  };

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
              <S.LoadMoreMobile onClick={loadMore} isLoading={isLoading} />
            </>
          )}
        </S.CardsContainer>
        {recentlyListedCollectionCards.length !== 0 && (
          <S.LoadMore onClick={loadMore} isLoading={isLoading} />
        )}
      </S.Wrapper>
    </S.Container>
  );
};
