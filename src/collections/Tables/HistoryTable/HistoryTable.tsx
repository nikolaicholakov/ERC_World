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
        <S.DateTableHeadColumn>Date</S.DateTableHeadColumn>
        <S.HistoryTableHeadColumn>Price</S.HistoryTableHeadColumn>
      </S.HistoryTableHeaderRow>
    </S.HistoryTableHead>
    <S.HistoryTableBody>
      {tableData.map((row, i) => (
        <>
          <S.HistoryTableRow key={"historyRow" + i}>
            <S.HistoryTableData>
              <S.User img={row.sellerImg}>
                <S.Span>{row.sellerName}</S.Span>
              </S.User>
            </S.HistoryTableData>
            <S.HistoryTableData>
              <S.User img={row.buyerImg}>
                <S.Span>{row.buyerName}</S.Span>
              </S.User>
            </S.HistoryTableData>
            <S.HistoryTableData>{row.type}</S.HistoryTableData>
            <S.DateTableData>{row.date}</S.DateTableData>
            <S.HistoryTableData>{row.price} MATIC</S.HistoryTableData>
          </S.HistoryTableRow>
          <S.SpacingRow key={"historySpacingRow" + i} />
        </>
      ))}
    </S.HistoryTableBody>
  </S.HistoryTable>
);
