import {
  Typography,
  Button as _Button,
  Table,
  TableHead,
  TableHeadColumn,
  TableBody,
  TableRow,
  TableData,
  TableUser,
  TableSpacingRow
} from "components";
import styled from "styled-components";
import _Image from "next/image";

export const Image = styled(_Image)``;

export const HistoryTable = styled(Table)``;

export const HistoryTableHead = styled(TableHead)``;

export const HistoryTableHeadColumn = styled(TableHeadColumn)`
  &:last-of-type {
    text-align: right;
  }
`;

export const HistoryTableBody = styled(TableBody)``;

export const HistoryTableRow = styled(TableRow)``;

export const HistoryTableHeaderRow = styled(TableRow)`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SpacingRow = styled(TableSpacingRow)``;

export const HistoryTableData = styled(TableData)`
  &:last-of-type {
    text-align: right;
  }
`;

export const User = styled(TableUser)``;

export const Span = styled.span`
  @media ${({ theme }) => theme.breakpoint.max.M} {
    display: none;
  }
`;
