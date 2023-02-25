import { useQueries } from "hooks";
import React, { RefObject, useEffect, useState } from "react";
import { IExploreNftCard } from "types";
import * as S from "./elements";

interface ExploreProps {
  ref?: RefObject<HTMLDivElement>;
}

export const Explore: React.FC<ExploreProps> = ({ ...props }) => {
  const [exploreCollections, setExploreCollections] = useState<IExploreNftCard[]>([]);

  const query = useQueries();

  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(8);
  const [step, setStep] = useState(8);
  const [queryError, setQueryError] = useState<null | string>(null);

  const loadMore = () => {
    setStartIndex(startIndex + step);
    setLastIndex(lastIndex + step);
  };

  const { status, data, error, isFetching, isPreviousData } = query.GET.collections.explore(
    startIndex,
    lastIndex
  );

  useEffect(() => {
    if (data) {
      if (exploreCollections[exploreCollections.length - 1] === data[data.length - 1]) {
        return;
      } else {
        setExploreCollections(oldCollection => [...oldCollection, ...data]);
      }
    } else {
      if (exploreCollections.length === 0) {
        setExploreCollections([]);
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
      <S.SectionHeading>Explore</S.SectionHeading>
      <S.Wrapper>
        <S.CardsContainer>
          {exploreCollections.length === 0 ? (
            <S.LoadMore onClick={loadMore} isLoading={true} />
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
      <span>{queryError}</span>
    </S.Container>
  );
};
