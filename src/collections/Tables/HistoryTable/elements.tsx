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

export const HistoryTableHeaderRow = styled(TableRow)`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const HistoryTableHeadColumn = styled(TableHeadColumn)`
  &:nth-of-type(5) {
    text-align: right;
  }
`;

export const DateTableHeadColumn = styled(HistoryTableHeadColumn)`
  @media ${({ theme }) => theme.breakpoint.max.M} {
    display: none;
  }
`;

export const HistoryTableBody = styled(TableBody)``;

export const HistoryTableRow = styled(TableRow)``;

export const SpacingRow = styled(TableSpacingRow)``;

export const HistoryTableData = styled(TableData)`
  &:first-of-type {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-of-type {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:nth-of-type(5) {
    text-align: right;
  }
`;

export const DateTableData = styled(HistoryTableData)`
  @media ${({ theme }) => theme.breakpoint.max.M} {
    display: none;
  }
`;

export const User = styled(TableUser)``;

export const Span = styled.span`
  @media ${({ theme }) => theme.breakpoint.max.M} {
    display: none;
  }
`;
