import styled from "styled-components";
import _Image from "next/image";

export const Image = styled(_Image)``;

export const TableRow = styled("tr")`
  border-radius: 4px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.tableRowBackground};
`;
