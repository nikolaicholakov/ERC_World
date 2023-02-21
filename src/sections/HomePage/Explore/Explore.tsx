import { useQuery } from "@tanstack/react-query";
import { fetchExploreCollections } from "pages/api/collections/explore";
import React, { RefObject, useEffect, useState } from "react";
import { IExploreNftCard } from "types";
import * as S from "./elements";

interface IExploreProps {
  ref?: RefObject<HTMLDivElement>;
}

export const Explore: React.FC<IExploreProps> = ({ ...props }) => {
  const [exploreCollections, setExploreCollections] = useState<IExploreNftCard[]>([]);

  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(8);
  const [step, setStep] = useState(8);

  const loadMore = () => {
    setStartIndex(startIndex + step);
    setLastIndex(lastIndex + step);
  };

  const { status, data, error, isFetching, isPreviousData } = useQuery({
    queryKey: ["exploreCollections", `from=${startIndex}&to=${lastIndex}`],
    queryFn: () => fetchExploreCollections(startIndex, lastIndex),
    keepPreviousData: true,
    staleTime: 10000
  });

  useEffect(() => {
    if (data) {
      setExploreCollections(oldState => [...oldState, ...data]);
    } else {
      setExploreCollections([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
              <S.LoadMoreMobile onClick={loadMore} isLoading={isFetching} />
            </>
          )}
        </S.CardsContainer>
      </S.Wrapper>
      {exploreCollections.length !== 0 && <S.LoadMore onClick={loadMore} isLoading={isFetching} />}
    </S.Container>
  );
};
