import { NextApiRequest, NextApiResponse } from "next";
import { fetchCollectionsShema } from "schemas";
import { ApiResponseBase, ITrendingCollectionsSwiperCard } from "types";
import { createError } from "utils";

const getNumber1to3 = () => Math.floor(Math.random() * 3) + 1;
const getNumber1to100 = () => Math.floor(Math.random() * 100) + 1;

const dummyCollection: Omit<ITrendingCollectionsSwiperCard, "volume">[] = [];

const Errors = {
  bothIndexesMissing: {
    message: "startIndex and lastIndex are missing",
    code: 400
  },
  startIndex: {
    message: "startIndex is missing",
    code: 400
  },
  lastIndex: {
    message: "lastIndex is missing",
    code: 400
  },
  firstIndexShouldBeLessThanLastIndex: {
    message: "first index shoud be less than last index",
    code: 400
  },
  indexesShouldBePositiveNumbers: {
    message: "indexes should be positive numbers",
    code: 400
  },
  noMoreData: {
    message: "no more data",
    code: 400
  }
};

for (let i = 0; i < 30; i++) {
  dummyCollection.push({
    image: { src: `/imgs/nft${getNumber1to3()}.png`, width: 120, height: 120 },
    name: `Collection Name #${getNumber1to3()}`,
    floor: getNumber1to100()
  });
}

export const fetchRecentlyListedCollections = async (
  startIndex: number = 0,
  lastIndex: number = 10
) => {
  const response = await fetch(
    `/api/collections/recently-listed?startIndex=${startIndex}&lastIndex=${lastIndex}`
  );
  const { data } = await response.json();
  return data;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponseBase<any>>) {
  const { startIndex, lastIndex } = req.query;
  if (req.method === "GET") {
    // try {
    //   fetchCollectionsShema.validateSync({ startIndex, lastIndex });
    // } catch (error: any) {
    //   return res.status(400).json({ error: error.message });
    // }

    if (!startIndex && !lastIndex) return createError(Errors.bothIndexesMissing, res);

    if (!startIndex) return createError(Errors.startIndex, res);

    if (!lastIndex) return createError(Errors.lastIndex, res);

    if (Number(startIndex) > Number(lastIndex))
      return createError(Errors.firstIndexShouldBeLessThanLastIndex, res);

    if (Number(startIndex) < 0 || Number(lastIndex) < 0)
      return createError(Errors.indexesShouldBePositiveNumbers, res);

    if (dummyCollection.slice(Number(startIndex), Number(lastIndex)).length === 0)
      return createError(Errors.noMoreData, res);

    return res
      .status(200)
      .json({ data: dummyCollection.slice(Number(startIndex), Number(lastIndex)) });
  } else if (req.method === "POST") {
    const body = req.body;
    dummyCollection.push(body);
    console.log(dummyCollection);
    return res.status(200).json({ message: "posted" });
  }
}
