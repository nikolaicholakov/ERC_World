import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponseBase, ITrendingCollectionsSwiperCard } from "types";

const getNumber1to3 = () => Math.floor(Math.random() * 3) + 1;
const getNumber1to100 = () => Math.floor(Math.random() * 100) + 1;

const dummyCollection: Omit<ITrendingCollectionsSwiperCard, "volume">[] = [];

for (let i = 0; i < 100; i++) {
  dummyCollection.push({
    image: { src: `/imgs/nft${getNumber1to3()}.png`, width: 120, height: 120 },
    name: `Collection Name #${getNumber1to3()}`,
    floor: getNumber1to100()
  });
}

export const fetchRecentlyListedCollections = async (startIndex: number, lastIndex: number) => {
  const response = await fetch("/api/collections/recently-listed");
  const data = await response.json();
  return data.data.slice(startIndex, lastIndex);
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponseBase<any>>) {
  res.status(200).json({ data: dummyCollection });
}
