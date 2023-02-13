import { RefObject } from "react";
import { IHistoryTableRow } from "types";
import * as S from "./elements";

export interface IHistoryTableProps {
  tableData: IHistoryTableRow[];
  ref?: RefObject<HTMLTableElement>;
}

export const HistoryTable: React.FC<IHistoryTableProps> = ({ tableData, ...props }) => (
  <S.HistoryTable {...props}>
    <S.HistoryTableHead>
      <S.HistoryTableHeaderRow>
        <S.HistoryTableHeadColumn>From</S.HistoryTableHeadColumn>
        <S.HistoryTableHeadColumn>To</S.HistoryTableHeadColumn>
        <S.HistoryTableHeadColumn>Type</S.HistoryTableHeadColumn>
        <S.HistoryTableHeadColumn>Date</S.HistoryTableHeadColumn>
        <S.HistoryTableHeadColumn>Price</S.HistoryTableHeadColumn>
      </S.HistoryTableHeaderRow>
    </S.HistoryTableHead>
    <S.HistoryTableBody>
      {tableData.map((row, i) => (
        <>
          <S.HistoryTableRow key={"historyRow" + i}>
            <S.HistoryTableData>
              <S.User img={row.sellerImg}>{row.sellerName}</S.User>
            </S.HistoryTableData>
            <S.HistoryTableData>
              <S.User img={row.buyerImg}>{row.buyerName}</S.User>
            </S.HistoryTableData>
            <S.HistoryTableData>{row.type}</S.HistoryTableData>
            <S.HistoryTableData>{row.date}</S.HistoryTableData>
            <S.HistoryTableData>{row.price} MATIC</S.HistoryTableData>
          </S.HistoryTableRow>
          <S.SpacingRow key={"historySpacingRow" + i} />
        </>
      ))}
    </S.HistoryTableBody>
  </S.HistoryTable>
);
