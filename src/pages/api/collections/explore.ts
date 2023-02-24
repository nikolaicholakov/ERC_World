import { NextApiRequest, NextApiResponse } from "next";
import { fetchCollectionsShema } from "schemas";
import { ApiResponseBase, IExploreNftCard } from "types";
import { createError } from "utils";

const getNumber1to3 = () => Math.floor(Math.random() * 3) + 1;
const getNumber1to100 = () => Math.floor(Math.random() * 100) + 1;
const getNumber1to1000 = () => Math.floor(Math.random() * 1000) + 1;

const dummyCollection: IExploreNftCard[] = [];

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

for (let i = 0; i < 40; i++) {
  dummyCollection.push({
    image: { src: `/imgs/nft${getNumber1to3()}.png`, width: 228, height: 220 },
    collectionName: "Collection Name",
    nftName: `Nft Name #${getNumber1to3()}`,
    price: getNumber1to100(),
    nftsAvailable: getNumber1to1000()
  });
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponseBase<any>>) {
  if (req.method === "GET") {
    try {
      fetchCollectionsShema.validateSync(req.query);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }

    const { startIndex, lastIndex } = req.query;
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
  }
}
