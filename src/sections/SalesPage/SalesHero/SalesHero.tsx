import React, { RefObject, useState } from "react";
import { IBidsTableRow, IHistoryTableRow } from "types";
import * as S from "./elements";

interface ISalesHeroProps {
  ref?: RefObject<HTMLDivElement>;
}

const exampleTableData: IHistoryTableRow[] = [
  {
    buyerImg: "/imgs/user1.png",
    buyerName: "Buyer Name",
    sellerImg: "/imgs/user2.png",
    sellerName: "Seller_Name",
    type: "sell",
    date: "July 29, 2022",
    price: 0.005
  },
  {
    buyerImg: "/imgs/user1.png",
    buyerName: "Buyer Name",
    sellerImg: "/imgs/user2.png",
    sellerName: "Seller_Name",
    type: "sell",
    date: "July 29, 2022",
    price: 0.13
  },
  {
    buyerImg: "/imgs/user1.png",
    buyerName: "Buyer Name",
    sellerImg: "/imgs/user2.png",
    sellerName: "Seller_Name",
    type: "transfer",
    date: "July 29, 2022",
    price: 123.005
  }
];

const exampleBidsTable: IBidsTableRow[] = [
  {
    userImg: "/imgs/user1.png",
    userName: "User_Name",
    type: "bid",
    date: "18:30:22 July 29, 2022",
    offeredPrice: 0.005
  },
  {
    userImg: "/imgs/user1.png",
    userName: "User_Name",
    type: "bid",
    date: "18:30:22 July 29, 2022",
    offeredPrice: 0.005
  },
  {
    userImg: "/imgs/user1.png",
    userName: "User_Name",
    type: "bid",
    date: "18:30:22 July 29, 2022",
    offeredPrice: 0.005
  }
];

export const SalesHero: React.FC<ISalesHeroProps> = ({ ...props }) => {
  const [saleBy, setSaleBy] = useState<"user" | "administrator">("user");

  return (
    <S.Container {...props}>
      <S.HeroContent>
        <S.ImgWrapper>
          <S.Image src={"/imgs/nft1.png"} layout='fill' />
        </S.ImgWrapper>
        <S.SaleInfo saleBy={saleBy} />
      </S.HeroContent>
      {saleBy === "user" && (
        <S.BidsContainer>
          <S.ContainerTitle>Bids</S.ContainerTitle>
          <S.BidsTable tableData={exampleBidsTable} />
        </S.BidsContainer>
      )}
      <S.SalesHistoryContainer>
        <S.ContainerTitle>Sales History</S.ContainerTitle>
        <S.HistoryTable tableData={exampleTableData} />
      </S.SalesHistoryContainer>
      <S.LoadMoreContainer>
        <S.LoadMore />
      </S.LoadMoreContainer>
    </S.Container>
  );
};
