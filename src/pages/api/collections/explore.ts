import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponseBase, IExploreNftCard } from "types";

const getNumber1to3 = () => Math.floor(Math.random() * 3) + 1;
const getNumber1to100 = () => Math.floor(Math.random() * 100) + 1;
const getNumber1to1000 = () => Math.floor(Math.random() * 1000) + 1;

const dummyCollection: IExploreNftCard[] = [];

for (let i = 0; i < 100; i++) {
  dummyCollection.push({
    image: { src: `/imgs/nft${getNumber1to3()}.png`, width: 228, height: 220 },
    collectionName: "Collection Name",
    nftName: `Nft Name #${getNumber1to3()}`,
    price: getNumber1to100(),
    nftsAvailable: getNumber1to1000()
  });
}

export const fetchExploreCollections = async (startIndex: number, lastIndex: number) => {
  const response = await fetch("/api/collections/explore");
  const data = await response.json();
  return data.data.slice(startIndex, lastIndex);
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponseBase<any>>) {
  res.status(200).json({ data: dummyCollection });
}
