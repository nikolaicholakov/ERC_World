import styled from "styled-components";
import _Image from "next/image";

export const Image = styled(_Image)``;

export const TableData = styled("td")`
  padding: 28px 24px;
  text-transform: capitalize;
  ${({ theme }) => theme.typography.h6.regular};
`;
