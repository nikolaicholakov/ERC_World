import { RefObject } from "react";
import { IBidsTableRow } from "types";
import * as S from "./elements";

export interface IBidsTableProps {
  tableData: IBidsTableRow[];
  ref?: RefObject<HTMLTableElement>;
}

export const BidsTable: React.FC<IBidsTableProps> = ({ tableData, ...props }) => (
  <S.HistoryTable {...props}>
    <S.HistoryTableHead>
      <S.HistoryTableHeaderRow>
        <S.HistoryTableHeadColumn>User Name</S.HistoryTableHeadColumn>
        <S.HistoryTableHeadColumn>Type</S.HistoryTableHeadColumn>
        <S.HistoryTableHeadColumn>Date</S.HistoryTableHeadColumn>
        <S.HistoryTableHeadColumn>Offer Price</S.HistoryTableHeadColumn>
      </S.HistoryTableHeaderRow>
    </S.HistoryTableHead>
    <S.HistoryTableBody>
      {tableData.map((row, i) => (
        <>
          <S.HistoryTableRow key={"bidsRow" + i}>
            <S.HistoryTableData>
              <S.User img={row.userImg}>
                <S.Span>{row.userName}</S.Span>
              </S.User>
            </S.HistoryTableData>
            <S.HistoryTableData>{row.type}</S.HistoryTableData>
            <S.HistoryTableData>{row.date}</S.HistoryTableData>
            <S.HistoryTableData>{row.offeredPrice} MATIC</S.HistoryTableData>
          </S.HistoryTableRow>
          <S.SpacingRow key={"bidsSpacingRow" + i} />
        </>
      ))}
    </S.HistoryTableBody>
  </S.HistoryTable>
);
